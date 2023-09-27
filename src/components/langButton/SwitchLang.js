import React from "react";
import "./switchLang.css";
import { useLanguage } from "../../context/LanguageContext";

export default function SwitchLang() {
  const { lang, toggleLanguage  } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="btn btn-light border-dark language-selector rounded-5"
    >
      <img
        src={"https://cdn-icons-png.flaticon.com/512/6133/6133973.png"}
        width={30}
        alt=""
      />
    </button>
  );
}
