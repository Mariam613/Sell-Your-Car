import React from "react";
import { Navbar, Button } from "react-bootstrap";
import * as classes from "../Styles/nav.module.css";
export default function Nav() {
  return (
    <div className={classes.navContainer}>
      <Navbar>
        <Navbar.Brand href="#home">
          <img
            src="/images/logo.png"
            width="300"
            height="74"
            className={`d-inline-block align-top ${classes.logo}`}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button className={classes.btnRounded}>العربية</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
