import React from "react";
import { Carousel } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

function CarouselImage(props) {
  return (
    <img
      style={{ width: props.w, height: props.h }}
      src={props.img}
      alt="..."
    />
  );
}

export default function SingleProject(props) {
  const lang = useLanguage();
  return (
    <div className="border border-light text-white text-center rounded">
      <h1>{props.name}</h1>
      <h5 className="mx-2">{props.desc}</h5>
      <div className="div w-50 mx-auto border border-light">
        <h6 className="mx-2">
          {lang.lang === "ar" ? "الأدوات المستخدمة" : "Tools Used"}
        </h6>
        <img src={props.tool1} height="50" alt="" />
        <img src={props.tool2} height="50" alt="" style={{ margin: 10 }} />
        <img src={props.tool3} height="50" alt="" />
      </div>

      <h6 className="mt-2">
        <a target="_blank" rel="noreferrer" href={props.link}>
          {lang.lang === "ar" ? "اضغط لعرض المشروع" : "Click to View"}
        </a>
      </h6>
      <hr className="bg-danger border-2 border-top mx-auto border-white" />
      <Carousel>
        <Carousel.Item interval={1000}>
          <CarouselImage img={props.img1} w={props.w} h={props.h} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <CarouselImage img={props.img2} w={props.w} h={props.h} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <CarouselImage img={props.img3} w={props.w} h={props.h} />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <CarouselImage img={props.img4} w={props.w} h={props.h} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
