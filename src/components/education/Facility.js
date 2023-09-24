import React from "react";

export default function Facility(props) {
  return (
    <div className="row text-white mx-auto">
      <div
        class="card mb-3 bg-dark text-white border-white"
        style={props.style}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={props.img}
              class="img-fluid rounded-start border border-3 mt-4"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
              <h5 class="card-title">{props.name}</h5>
              <hr class="bg-danger m-0 border-2 border-top border-white" />
              <p class="card-text">
                <small class="text-body-secondary"></small>
              </p>
              <p class="card-text m-0">
                <i class="fa-regular fa-calendar-days me-1"></i> {props.date}
              </p>
              <p class="card-text m-0">
                <i class="fa-solid fa-location-dot me-1"></i> {props.school}
              </p>
              <p class="card-text m-0">
                <i class="fa-regular fa-flag"></i> {props.location}
              </p>
              <p class="card-text mt-2">{props.desc}</p>
              <p class="card-text text-center">
                <small
                  class="text-body-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <button className="btn btn-outline-light" href={props.paper}>
                    View Certificate
                  </button>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
