import React from 'react';

const Component = (props) => {
  return (
    <div className="card">
      <img src={props.imgUrl} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.linkUrl} className="btn btn-primary">{props.linkText}</a>
      </div>
    </div>
  );
}

export default Component;