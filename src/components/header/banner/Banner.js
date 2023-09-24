import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="container py-3 bg-dark">
        <div className="row text-left">
          <div className="col-md-6">
            <h1 className="text-white display-3" style={{ fontWeight: 700 }}>
              Hi There!
            </h1>
            <h1 className="text-white display-4" style={{ fontWeight: 500 }}>
              I'm Youssef Nasri
            </h1>
            <h1 className="text-white display-6">
              Full Stack Software Developer
            </h1>
            <hr class="bg-danger border-2 border-top border-white" />
            <p className="text-white h4">
              As a fresh Computer Science graduate, I'm fueled by curiosity and
              a drive for excellence, actively seeking opporunities to gain
              practical experience, and Eager to push myself into challenging
              projects. I'm excited to contribute my skills and learn from
              dynamic environments to excel in the tech industry.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
