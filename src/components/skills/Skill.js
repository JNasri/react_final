import React from "react";

export default function Skill(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ margin: 10 }}
      className={props.white === "1" ? "bg-light" : ""}
    >
      <img
        src={props.img}
        alt="..."
        height="100"
        style={{ marginBottom: 20 }}
      />
    </a>
  );
}
