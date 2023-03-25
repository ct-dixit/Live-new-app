import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLatter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const fetchNews = async () => {
      props.setProgress('10')
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSizes}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticle(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      document.title = `${capitalizeFirstLatter(props.category)} - News Live App`;
      props.setProgress('100')
    };

    // eslint-disable-next-line
    fetchNews(); // Call fetchNews function inside the useEffect
  }, []);

  

  const fetchMoreData = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSizes}`
    );
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setPage(page + 1);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px' }}>
        New App - Top {capitalizeFirstLatter(props.category)} HeadLines
      </h1>
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="container">
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4 mb-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ''}
                    description={element.description ? element.description.slice(0, 88) : ''}
                    imagesUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      
    </>
  );
};

export default News;
