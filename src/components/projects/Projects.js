import React from "react";
import SingleProject from "./SingleProject";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const lang = useLanguage();
  return (
    <div id="projects" className="container py-2">
      <div className="row text-white text-center">
        <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
          {lang.lang === "ar" ? "مشاريعي" : "Projects"}
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row">
        <div className="col-md-6 my-3">
          <SingleProject
            name={lang.lang === "ar" ? "متجر رياكت" : "React Store Website"}
            desc={
              lang.lang === "ar"
                ? "متجر إلكتروني قمت بإنشاءه لتعلم ريكات وكيفية استخدامها لبناء المواقع"
                : "Ecommerce clone website made for the purpose of learning react."
            }
            tool1={
              "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
            }
            tool2={
              "https://profilinator.rishav.dev/skills-assets/redux-original.svg"
            }
            tool3={
              "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            }
            img1={require("../../images/TheReactStore/Home.jpg")}
            img2={require("../../images/TheReactStore/About.jpg")}
            img3={require("../../images/TheReactStore/category.jpg")}
            img4={require("../../images/TheReactStore/products.jpg")}
            w={"100%"}
            h={600}
            link={"http://google.com"}
          />
        </div>
        <div className="col-md-6 my-3">
          <SingleProject
            name={
              lang.lang === "ar" ? "تطبيق زيرو تاكسي" : "Zero Taxi Application"
            }
            desc={
              lang.lang === "ar"
                ? "تطبيق أندرويد لنظام تاكسي باستخدام الجافا قمت ببرمجته كمشروع تخرج"
                : "Andorid Taxi Dispatch Application made for my graduation project."
            }
            tool1={
              "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
            }
            tool2={"https://profilinator.rishav.dev/skills-assets/firebase.png"}
            tool3={
              "https://upload.wikimedia.org/wikipedia/commons/6/6d/Google_Cloud_Console_logo.png"
            }
            img1={require("../../images/ZeroTaxi/welcome.png")}
            img2={require("../../images/ZeroTaxi/login.png")}
            img3={require("../../images/ZeroTaxi/map.png")}
            img4={require("../../images/ZeroTaxi/search.png")}
            w={"50%"}
            h={600}
            link={"http://google.com"}
          />
        </div>
      </div>
    </div>
  );
}
