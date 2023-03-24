import React from 'react';

export default function NewsItem(props) {
  return (
    <div>
      <div className="card">
        <img
          src={!props.imagesUrl ? 'https://www.bizzbuzz.news/h-upload/2023/03/14/1679435-adobe-11-7.jpg' : props.imagesUrl}
          className="card-img-top"
          alt="news images"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              Last {!props.author ? 'Unknown' : props.author} on
              {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
