import React, { useEffect, useState } from "react";
import Facility from "./Facility";
import { useLanguage } from "../../context/LanguageContext";

export default function Education() {
  const lang = useLanguage();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 990);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="education" className="container py-2">
      <div className="row text-white text-center">
        <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
          {lang.lang === "ar" ? "تعليمي" : "Education"}
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row g-0 mt-2">
        <div className="col h-100">
          <Facility
            name={
              lang.lang === "ar"
                ? "شهادة المرحلة الثانوية"
                : "High School Degree"
            }
            date={"2015→2018"}
            school={
              lang.lang === "ar"
                ? "ثانوية الحسين بن علي"
                : "Al-Hussain Bin Ali High School"
            }
            location={lang.lang === "ar" ? "مكة - السعودية" : "Makkah - KSA"}
            desc={
              lang.lang === "ar"
                ? "أتممت المرحلة الثانوية بمعدل 99.83%"
                : "Finished High School with a GPA of 99.83%"
            }
            paper={"linktocertificate.com"}
            img={
              "https://yt3.googleusercontent.com/ytc/AOPolaS4ephYDfWK3WFAfwrRq0FxNhaD-dyF4YRNpxdF=s900-c-k-c0x00ffffff-no-rj"
            }
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "بكالوريوس علوم الحاسب"
                : "Bachelor in Computer Science"
            }
            style={!isMobile ? { visibility: "hidden" } : {}}
            date={"2019→2023"}
            school={
              lang.lang === "ar" ? "جامعة أم القرى" : "Umm Al Qura University"
            }
            location={lang.lang === "ar" ? "مكة - السعودية" : "Makkah - KSA"}
            desc={
              lang.lang === "ar"
                ? "تقدير ممتاز مع مرتبة الشرف، بمعدل 3.9 / 4.0"
                : "Grade Excellent with first honor, 3.9 / 4.0 GPA"
            }
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "دورة تطوير المواقع"
                : "Web Development Course"
            }
            date={"2020"}
            school={
              lang.lang === "ar" ? "جامعة الملك خالد" : "King Khalid University"
            }
            location={lang.lang === "ar" ? "أبها - السعودية" : "Abha - KSA"}
            desc={
              lang.lang === "ar"
                ? "التعلم والتدرب على أساسيات تطوير المواقع"
                : "Training Web Development Fundamentals"
            }
            paper={"linktocertificate.com"}
            img={"https://www.kku.edu.sa/sites/default/files/logo_kku_new2.png"}
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "دورة الأمن السيبراني"
                : "Cyber Security Course"
            }
            style={!isMobile ? { visibility: "hidden" } : {}}
            date={"2020"}
            school={
              lang.lang === "ar" ? "جامعة أم القرى" : "Umm Al Qura University"
            }
            location={lang.lang === "ar" ? "مكة - السعودية" : "Makkah - KSA"}
            desc={
              lang.lang === "ar"
                ? "قمت بتعلم أساسيات الأمن السبراني وأهم أدواته"
                : "Basics of Cyber Security & its tools"
            }
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "دورة رياكت و رياكت نيتف"
                : "React & React Native Course"
            }
            date={"2023"}
            school={
              lang.lang === "ar" ? "Ustudy24 (موقع)" : "Ustudy24 (website)"
            }
            location={lang.lang === "ar" ? "دورة إلكترونية" : "Online Course"}
            desc={
              lang.lang === "ar"
                ? "اكتسبت خبرة في مكتبات ريكات وريكات نيتف"
                : "Gained experience in react and react native"
            }
            paper={"linktocertificate.com"}
            img={"https://ustudy24.com/Public/us.jpg"}
          />
        </div>
        <div className="col-1 d-none d-lg-flex">
          <div className="mx-auto bg-light" style={{ width: 3 }}>
            <div className="vr"></div>
          </div>
        </div>
        <div className="col d-none d-lg-block">
          <Facility
            style={{ visibility: "hidden" }}
            img={
              "https://yt3.googleusercontent.com/ytc/AOPolaS4ephYDfWK3WFAfwrRq0FxNhaD-dyF4YRNpxdF=s900-c-k-c0x00ffffff-no-rj"
            }
            desc="sdfjsdlkjfajdslkjaflkjdsklsajlsdkfjasdfasdfadsfadssdfasdfadsfadsad"
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "بكالوريوس علوم الحاسب"
                : "Bachelor in Computer Science"
            }
            date={"2019→2023"}
            school={
              lang.lang === "ar" ? "جامعة أم القرى" : "Umm Al Qura University"
            }
            location={lang.lang === "ar" ? "مكة - السعودية" : "Makkah - KSA"}
            desc={
              lang.lang === "ar"
                ? "تقدير ممتاز مع مرتبة الشرف، بمعدل 3.9 / 4.0"
                : "Grade Excellent with first honor, 3.9 / 4.0 GPA"
            }
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            style={{ visibility: "hidden" }}
            img={
              "https://yt3.googleusercontent.com/ytc/AOPolaS4ephYDfWK3WFAfwrRq0FxNhaD-dyF4YRNpxdF=s900-c-k-c0x00ffffff-no-rj"
            }
            desc="sdfjsdlkjfajdslkjaflkjdsklsajlsdkfjasdfasdfadsfadssdfasdfadsfadsad"
          />
          <Facility
            name={
              lang.lang === "ar"
                ? "دورة الأمن السيبراني"
                : "Cyber Security Course"
            }
            date={"2020"}
            school={
              lang.lang === "ar" ? "جامعة أم القرى" : "Umm Al Qura University"
            }
            location={lang.lang === "ar" ? "مكة - السعودية" : "Makkah - KSA"}
            desc={
              lang.lang === "ar"
                ? "دراسة أساسيات الأمن السبراني وأهم أدواته"
                : "Basics of Cyber Security & its tools"
            }
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            style={{ visibility: "hidden" }}
            img={
              "https://yt3.googleusercontent.com/ytc/AOPolaS4ephYDfWK3WFAfwrRq0FxNhaD-dyF4YRNpxdF=s900-c-k-c0x00ffffff-no-rj"
            }
            desc="sdfjsdlkjfajdslkjaflkjdsklsajlsdkfjasdfasdfadsfadssdfasdfadsfadsad"
          />
        </div>
      </div>
    </div>
  );
}
