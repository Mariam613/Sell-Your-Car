import React from "react";
import { Row, Col } from "react-bootstrap";
import * as classes from "../Styles/footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <Row className="mr-0">
        <Col sm={12} xl={6}>
          <img src="/images/logo.png" alt="logo" />
          <p>
            Buy new and used cars in UAE, shipping and delivery service are
            available, Sell your car at the highest price online with no worries
            visiting cars show rooms.
          </p>
        </Col>

        <Col sm={12} xl={6}>
          <div className={classes.rightSide}>
            <h6>
              Follow the first and the largest online auction <br /> in UAE and
              Middle East{" "}
            </h6>
            <ul class={classes.contact__icons}>
              <li class={classes.contact__icons__icon}>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li class={classes.contact__icons__icon}>
                <i class="fab fa-twitter"></i>
              </li>
              <li class={classes.contact__icons__icon}>
                <i class="fab fa-youtube"></i>
              </li>
              <li class={classes.contact__icons__icon}>
                <i class="fab fa-instagram"></i>
              </li>
              <li class={classes.contact__icons__icon}>
                <i class="fab fa-google-plus-g"></i>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
