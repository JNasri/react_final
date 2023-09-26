import React from "react";

export default function WorkPlace(props) {
  return (
    <div className="card h-100">
      <div className="card-body border-bottom  bg-light">
        <h4 className="card-title mb-0">{props.title}</h4>
        <hr className="bg-danger border-2 border-top border-dark" />
        <p className="card-text mb-0">
          <i className="fa-solid fa-briefcase mx-2"></i>
          {props.name}
        </p>
        <p className="card-text mb-4">
        <i className="fa-regular fa-calendar-days mx-2"></i>
          {props.time}
        </p>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">
          <a href="http://www.google.com" target="_blank" rel="noreferrer">
            <small>View Company's website</small>
          </a>
        </p>
      </div>
      <img className="card-img-bottom h-75" src={props.img} alt="..." />
    </div>
  );
}
