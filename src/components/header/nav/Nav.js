import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigateBar() {
  return (
    <>
      <Navbar bg="white" sticky="top" className="rounded-pill mx-md-4 border border-dark" style={{borderWidth:"80"}}>
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#education">
              <h5>Education</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#experience">
              <h5>Experience</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#skills">
              <h5>Skills</h5>
            </Nav.Link>
            <div className="vr"></div>
            <Nav.Link href="#projects">
              <h5>Projects</h5>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
