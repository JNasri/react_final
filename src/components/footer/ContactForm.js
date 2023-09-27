import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactForm() {
  const lang = useLanguage();
  return (
    <>
      <div id="projects" className="container py-2">
        <div className="row text-white text-center">
          <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
            {lang.lang === "ar" ? "تواصل معي" : "Get in touch"}
          </h1>
          <hr className="bg-danger border-2 border-top border-white" />
        </div>
        <form className="w-75 mx-auto text-white">
          <div className="form-group display-6">
            <label className="my-2" htmlFor="name">
              {lang.lang === "ar" ? "اسمك :" : "Your Name :"}
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={lang.lang === "ar" ? "الاسم" : "Enter Name"}
            />
          </div>
          <div className="form-group  display-6">
            <label className="my-2" htmlFor="email">
              {lang.lang === "ar" ? "إيميلك الشخصي :" : "Your E-mail Address :"}
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder={lang.lang === "ar" ? "الإيميل" : "Enter Email"}
            />
          </div>
          <div className="form-group display-6">
            <label className="my-2" htmlFor="email">
              {lang.lang === "ar" ? "رسالتك لي :" : "Your Message :"}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light btn-lg my-3">
            {lang.lang === "ar" ? "إرسال" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
