import React, { useEffect, useState } from "react";
import Facility from "./Facility";

export default function Education() {
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
          Education
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row g-0 mt-2">
        <div className="col h-100">
          <Facility
            name={"High School Degree"}
            date={"2015→2018"}
            school={"Al-Hussain Bin Ali High School"}
            location={"Makkah, KSA"}
            desc={"Finished High School with a GPA of 99.83%"}
            paper={"linktocertificate.com"}
            img={
              "https://yt3.googleusercontent.com/ytc/AOPolaS4ephYDfWK3WFAfwrRq0FxNhaD-dyF4YRNpxdF=s900-c-k-c0x00ffffff-no-rj"
            }
          />
          <Facility
            name={"Bachelor in Computer Science"}
            style={!isMobile ? { visibility: "hidden" } : {}}
            date={"2019→2023"}
            school={"Umm Al Qura University"}
            location={"Makkah, KSA"}
            desc={"Grade Excellent with first honor, 3.9 / 4.0 GPA"}
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            name={"Web Development Course"}
            date={"2020"}
            school={"King Khalid University"}
            location={"Abha, KSA"}
            desc={"Training of Web Development Fundamentals"}
            paper={"linktocertificate.com"}
            img={"https://www.kku.edu.sa/sites/default/files/logo_kku_new2.png"}
          />
          <Facility
            name={"Cyber Security Course"}
            style={!isMobile ? { visibility: "hidden" } : {}}
            date={"2020"}
            school={"Umm Al Qura University"}
            location={"Makkah, KSA"}
            desc={"Basics of Cyber Security & its tools"}
            paper={"linktocertificate.com"}
            img={
              "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/b1/ec/d3/b1ecd3ee-83c4-9079-b3a5-d1e6b878e20e/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024.jpg"
            }
          />
          <Facility
            name={"Ustudy React Course"}
            date={"2023"}
            school={"Ustudy24.com"}
            location={"Online Course"}
            desc={"Gained experience in react and react native"}
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
            name={"Bachelor in Computer Science"}
            date={"2019→2023"}
            school={"Umm Al Qura University"}
            location={"Makkah, KSA"}
            desc={"Grade Excellent with first honor, GPA of 3.9 / 4.0"}
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
            name={"Cyber Security Course"}
            date={"2020"}
            school={"Umm Al Qura University"}
            location={"Makkah, KSA"}
            desc={"Basics of Cyber Security & its tools"}
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
