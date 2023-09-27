import React from "react";
import WorkPlace from "./WorkPlace";
import { useLanguage } from "../../context/LanguageContext";

export default function Experience() {
  const lang = useLanguage();
  return (
    <div id="experience" className="container py-2">
      <div className="row text-white text-center">
        <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
          {lang.lang === "ar" ? "خبرتي" : "Experience"}
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row">
        <div className="col-md-6 my-3">
          <WorkPlace
            title={
              lang.lang === "ar"
                ? "متدرب في تطوير المواقع"
                : "Co-op Trainee Developer"
            }
            name={
              lang.lang === "ar"
                ? "شركة وادي مكة المعرفة"
                : "Wadi Makkah Knowledge (UQU)"
            }
            time={
              lang.lang === "ar"
                ? "التدريب لدى الشركة خلال الصيف عام 2023"
                : "Summer Training during the 2023 Summer"
            }
            img={
              "https://pbs.twimg.com/ext_tw_video_thumb/895638664012861440/pu/img/fOC3-DWMC63et6Om.jpg"
            }
            desc={
              "Aenean ullamcorper purus quis tellus consectetur, eget semper leo cursus. Suspendisse facilisis, ligula ac rutrum pellentesque, arcu ante ornare nunc, pellentesque vehicula ipsum ipsum"
            }
          />
        </div>
        <div className="col-md-6 my-3">
          <WorkPlace
            title={
              lang.lang === "ar" ? "مقدم خدمة للحجاج" : "Food Service Provider"
            }
            name={
              lang.lang === "ar"
                ? "أجزل الخير للتموين"
                : "Ajzal Al-Khair Catering"
            }
            time={
              lang.lang === "ar"
                ? "العمل في خدمة الحجاج سنويا في موسم الحج"
                : "Work during Pilgrim season every year"
            }
            img={
              "https://horecaway.com/userfiles/6e341d0621eb98c6d86e77a757f778f0.png"
            }
            desc={
              "Aenean ullamcorper purus quis tellus consectetur, eget semper leo cursus. Suspendisse facilisis, ligula ac rutrum pellentesque, arcu ante ornare nunc, pellentesque vehicula ipsum ipsum"
            }
          />
        </div>
        <div className="col-md-6 my-3">
          <WorkPlace
            title={"Lorem ipsum dolor sit amet"}
            name={"Fusce tincidunt ex quis nibh gravida, ut lobortis"}
            time={"tempus. Maecenas eget mi bibendum"}
            img={
              "https://www.creativefabrica.com/wp-content/uploads/2021/11/24/M-Luxury-Logo-Design-M-Letter-Logo-Graphics-20695991-1.jpg"
            }
            desc={
              "Aenean ullamcorper purus quis tellus consectetur, eget semper leo cursus. Suspendisse facilisis, ligula ac rutrum pellentesque, arcu ante ornare nunc, pellentesque vehicula ipsum ipsum"
            }
          />
        </div>
        <div className="col-md-6 my-3">
          <WorkPlace
            title={"Lorem ipsum dolor sit amet"}
            name={"Fusce tincidunt ex quis nibh gravida, ut lobortis"}
            time={"tempus. Maecenas eget mi bibendum"}
            img={
              "https://www.creativefabrica.com/wp-content/uploads/2021/11/24/M-Luxury-Logo-Design-M-Letter-Logo-Graphics-20695991-1.jpg"
            }
            desc={
              "Aenean ullamcorper purus quis tellus consectetur, eget semper leo cursus. Suspendisse facilisis, ligula ac rutrum pellentesque, arcu ante ornare nunc, pellentesque vehicula ipsum ipsum"
            }
          />
        </div>
      </div>
    </div>
  );
}
