import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Facility(props) {
  const lang = useLanguage();
  return (
    <div className="row text-white mx-auto">
      <div
        className="card mb-3 bg-dark text-white border-white"
        style={props.style}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.img}
              className="img-fluid rounded-start border border-3 mt-4"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <hr className="bg-danger m-0 border-2 border-top border-white" />
              <p className="card-text">
                <small className="text-body-secondary"></small>
              </p>
              <p className="card-text m-0">
                <i className="fa-regular fa-calendar-days mx-1"></i>{" "}
                {props.date}
              </p>
              <p className="card-text m-0">
                <i className="fa-solid fa-location-dot mx-1"></i> {props.school}
              </p>
              <p className="card-text m-0">
                <i className="fa-regular fa-flag mx-1"></i> {props.location}
              </p>
              <p className="card-text mt-2">{props.desc}</p>
              <p className="card-text text-center">
                <small
                  className="text-body-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <a
                    className="btn btn-outline-light"
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lang.lang === "ar"
                      ? "اطّلع على الشهادة"
                      : "View Certificate"}
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
