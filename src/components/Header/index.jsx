import React from "react";
import s from "./Header.module.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "..//../img/logo.png";
export const Header = () => {
  return (
    <div className={s.root}>
      <Navbar expand="lg" bg="transparent" variant="transparent">
        <Navbar.Brand href="#home">
          <div className={s.imgProduct}>
            <img className={s.logo} src={logo} alt="slogan" />
            <h3>Global</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Mobile Top Up</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Rate</Nav.Link>
            <Nav.Link href="#home">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <div className={s.btn}>
            <button>Sing Up</button>
          </div>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
