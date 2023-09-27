import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div className="container d-flex py-3 bg-dark">
        <div className="row">
          <hr className="bg-danger border-2 border-top border-white" />
          <div className="col-md-6">
            <h1 className="text-white display-3" style={{ fontWeight: 700 }}>
              Hi There!
            </h1>
            <h1 className="text-white display-4" style={{ fontWeight: 500 }}>
              <span
                className="bg-light text-dark display-4"
                style={{ fontWeight: 500 }}
              >
                I'm Youssef Nasri
              </span>
            </h1>
            <h1 className="text-white display-6">
              Full Stack Software Developer
            </h1>
            <hr className="bg-danger border-2 border-top border-white" />
            <p className="text-white h4">
              As a fresh Computer Science graduate, I'm fueled by curiosity and
              a drive for excellence, actively seeking opporunities to gain
              practical experience, and Eager to push myself into challenging
              projects. I'm excited to contribute my skills and excel in the
              tech industry.
            </p>
          </div>
          <div className="col-md-5 my-auto mx-auto">
            <img
              src={
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="my-2 text-white text-center">
            <hr className="bg-danger border-2 border-top border-white" />
            <div className="h4">Check my Socials</div>
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
                }
                height={60}
                alt=""
              />
            </a>{" "}
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-512.png"
                }
                height={60}
                alt=""
              />
            </a>{" "}
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_instagram-1024.png"
                }
                height={60}
                alt=""
              />
            </a>{" "}
            <a href="http://google.com" target="_blank" rel="noreferrer">
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_twitter-512.png"
                }
                height={60}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
