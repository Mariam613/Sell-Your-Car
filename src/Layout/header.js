import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { btnRounded } from "../Styles/nav.module.css";
import * as classes from "../Styles/header.module.css";
export default function Header() {
  return (
    <div>
      <Jumbotron className={classes.header}>
        <img
          src="/images/Mask Copy.png"
          className={classes.headerImg}
          alt="mask"
        />
        <div className={classes.headerContent}>
          <h1>Selling Your Car Now</h1>
          <p>Is Easier than ever.</p>
          <Button className={btnRounded}>
            Start Today <i className="fas fa-chevron-down ml-3 mt-3"></i>
          </Button>
        </div>
      </Jumbotron>
    </div>
  );
}
