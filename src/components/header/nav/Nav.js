import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLanguage } from "../../../context/LanguageContext";

export default function NavigateBar() {
  const lang = useLanguage();
  return (
    <>
      <Navbar bg="white" sticky="top" className="border-bottom border-dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#education">
              <h5> {lang.lang === "ar" ? "تعليمي" : "Education"}</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#experience">
              <h5> {lang.lang === "ar" ? "خبرتي" : "Experience"}</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#skills">
              <h5> {lang.lang === "ar" ? "مهاراتي" : "Skills"}</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#projects">
              <h5> {lang.lang === "ar" ? "مشاريعي" : "Projects"}</h5>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
