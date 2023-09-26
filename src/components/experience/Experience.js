import React from "react";
import WorkPlace from "./WorkPlace";

export default function Experience() {
  return (
    <div id="experience" className="container py-2">
      <div className="row text-white text-center">
        <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
          Experience
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row">
        <div className="col-md-6 my-3">
          <WorkPlace
            title={"Co-op Trainee Developer"}
            name={"Wadi Makkah Knowledge (UQU)"}
            time={"Summer Training during the 2023 Summer"}
            img={
              "https://pbs.twimg.com/ext_tw_video_thumb/895638664012861440/pu/img/fOC3-DWMC63et6Om.jpg"
            }
            desc={
              "Worked as a full stack web developer using PHP laravel framework. I was able to gain lots of experience and work on multiple real projects. Finished my bachelor's degree afterwards"
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
        <div className="col-md-6 my-3">
          <WorkPlace
            title={"Merchendizer and Promoter"}
            name={"Al Khairat Company (Stationery And Toys Wholesale)"}
            time={"Seasonal Job (Once or twice a year)"}
            img={
              "https://static.wixstatic.com/media/94993c_6c235b95e60e4727bce6df29de8e967c~mv2_d_3508_2481_s_4_2.png"
            }
            desc={
              "As a merchendizer I am responsible for how the company's products are displayed in different stores. The job role also requires talking to the customers and promote the products."
            }
          />
        </div>
      </div>
    </div>
  );
}
