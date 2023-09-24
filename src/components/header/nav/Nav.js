import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigateBar() {
  return (
    <>
      <Navbar bg="white" sticky="top" className="rounded-pill">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">
              <h5>Education</h5>
            </Nav.Link>
            <div class="vr"></div>
            <Nav.Link href="#a">
              <h5>Experience</h5>
            </Nav.Link>
            <div class="vr"></div>
            <Nav.Link href="#b">
              <h5>Skills</h5>
            </Nav.Link>
            <div class="vr"></div>
            <Nav.Link href="#c">
              <h5>Projects</h5>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
