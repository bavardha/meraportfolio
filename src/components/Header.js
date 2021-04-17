import React from "react";
import linkedIn from "../Assets/linkedin.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <AnchorLink href="#Intro">
        <Navbar.Brand href="#home">Harsha Vardhan Balanagu</Navbar.Brand>
      </AnchorLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <AnchorLink href="#AboutMe">
            <Nav.Link href="#AboutMe">About Me</Nav.Link>
          </AnchorLink>
          <AnchorLink href="#MeraThoughts">
            <Nav.Link href="#MeraThoughts">Mera Thoughts</Nav.Link>
          </AnchorLink>
          <AnchorLink href="#MeraExperience">
            <Nav.Link href="#MeraExperience">Mera experience</Nav.Link>
          </AnchorLink>
          <AnchorLink href="#MeraProjects">
            <Nav.Link href="#MeraProjects">Mera Projects</Nav.Link>
          </AnchorLink>
          <AnchorLink href="#ContactMe">
            <Nav.Link href="#ContactMe">Contact Me</Nav.Link>
          </AnchorLink>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <a
              href="https://www.linkedin.com/in/harsha-balanagu/"
              target="_blank"
            >
              <img src={linkedIn} className="socialIcon" alt="logo" />
            </a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
