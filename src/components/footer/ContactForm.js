import React from "react";

export default function ContactForm() {
  return (
    <>
      <div id="projects" className="container py-2">
        <div className="row text-white text-center">
          <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
            Get in touch
          </h1>
          <hr className="bg-danger border-2 border-top border-white" />
        </div>
        <form className="w-75 mx-auto text-white">
          <div className="form-group display-6">
            <label className="my-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group  display-6">
            <label className="my-2" htmlFor="email">
              Your E-mail Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group display-6">
            <label className="my-2" htmlFor="email">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light btn-lg my-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
