import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLatter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=160b435514254bb28c355f4814de1b80&page=1&pageSize=${props.pageSizes}`;
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticle(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      document.title = `${capitalizeFirstLatter(props.category)} - News Live App`
    };

    fetchNews(); // Call fetchNews function inside the useEffect
  }, [props.country, props.category, props.pageSizes]);

  const commonUse = async () => {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${
        props.category
      }&apiKey=160b435514254bb28c355f4814de1b80&page=${page}&pageSize=${props.pageSizes}`
    );
    setLoading(true);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setLoading(false);
  }

  const handlePrevClick = async () => {
    commonUse();
    setPage(page - 1);
  };

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSizes))) {
      commonUse();
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '35px 0px' }}>
        New App - Top {capitalizeFirstLatter(props.category)} HeadLines
      </h1>
      {loading}

      <div className="row">
        {!loading &&
          article.map((element) => {
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
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePrevClick}>
          Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSizes)}
          type="button"
          className="btn btn-primary"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;
