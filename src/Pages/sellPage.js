import React from "react";
import { Row, Col, Media } from "react-bootstrap";
import SendInquiryForm from "../Components/sendInquiryForm";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import Nav from "../Layout/nav";
import * as classes from "../Styles/sellPage.module.css";
export default function SellPage() {
  return (
    <div>
      {/* Navigation */}

      <Row className="mr-0">
        <Col>
          <Nav />
        </Col>
      </Row>

      {/* header */}

      <Row className="mr-0">
        <Col>
          <Header />
        </Col>
      </Row>

      {/* how it works section */}

      <Row className="mr-0">
        <Col sm={12} xl={6} className="pr-0">
          <div className={classes.howItWorks}>
            <div className={classes.howItWorksHeader}>
              <h4>How it works?</h4>
              <p>Sell Your Car in Three Simple Steps</p>
            </div>

            {/* steps section */}

            <div className={classes.steps}>
              <div className={`d-flex ${classes.step}`}>
                <img src="/images/no 1.png" alt="1" />
                <div className={classes.stepContent}>
                  <h5>Submit Your Car</h5>
                  <p>
                    Enter your car details for inspection on Emirates Auction.
                  </p>
                </div>
              </div>
              <div className={`d-flex ${classes.step}`}>
                <img src="/images/no 2.png" alt="2" />
                <div className={classes.stepContent}>
                  <h5>Receive Valuation and Offer</h5>
                  <p>
                    We will check your car and provide you with approved
                    purchase price.
                  </p>
                </div>
              </div>
              <div className={`d-flex ${classes.step}`}>
                <img src="/images/no 3.png" alt="3" />
                <div className={classes.stepContent}>
                  <h5>Get Your Payment</h5>
                  <p>
                    After a price is agreed for your car, <br />
                    we will exchange cash on a day that suits you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>

        {/* red section */}

        <Col sm={12} xl={6} className="pl-0">
          <div className={classes.redSection}>
            <div className={classes.redSectionContent}>
              <img src="/images/icon.png" alt="redbg" />
              <h5>Your car will be sold by bidding</h5>
              <p>
                You set the starting price it will be sold for the highest
                bidder{" "}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* start today section */}

      <div className={classes.startTodaySection}>
        <div className={classes.startTodayHeader}>
          <h3>Start today!</h3>
          <p>You are just one click away from selling your car.</p>
        </div>
        <Row className="mr-0">
          <Col sm={12} xl={6} className="pr-0">
            <div className={classes.startTodayBody}>
              <img src="/images/video.png" alt="vidio" />
              <div className={classes.startTodayContent}>
                <h3>Why you should sell your car with us?</h3>
                <p>We support you from start to finish </p>
                <p>
                  We have streamlined the process to sell your car online for
                  quick payment <br />
                  to get your free cash offer.
                </p>
                <p>Ready to sell your car?</p>
              </div>
            </div>
          </Col>

          {/* form */}

          <Col sm={12} xl={6} className="pl-0">
            <SendInquiryForm />
          </Col>
        </Row>
      </div>

      {/* why use our services section */}

      <div className={`${classes.startTodaySection} ${classes.serviceSection}`}>
        <div className={classes.startTodayHeader}>
          <h3> Why use our services?</h3>
          <p>
            We operates 24 hour/7 day-a-week telephone, email &amp; remote
            support <br />
            services that is staffed to handle any issue or question{" "}
          </p>
        </div>
      </div>

      {/* why us cards */}

      <div className={classes.cardsContainer}>
        <Row className="mr-0">
          <Col sm={12} xl={4}>
            <Media className={classes.card}>
              <img
                width={40}
                height={50}
                className="mr-3"
                src="/images/documents icon.png"
                alt="Generic placeholder"
              />
              <Media.Body
                className={`${classes.cardBody} ${classes.firstCard}`}
              >
                <h5>Easy Process</h5>
                <p>
                  We help you save time and effort. We master how to sell a car
                  privately and have simplified the process of selling a vehicle
                  to make it hassle-free.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col sm={12} xl={4}>
            <Media className={`${classes.card} `}>
              <img
                width={49.94}
                height={47.85}
                className="mr-3"
                src="/images/star.png"
                alt="Generic placeholder"
              />
              <Media.Body
                className={`${classes.cardBody} ${classes.middleCard}`}
              >
                <h5>Get The Best Return</h5>
                <p>
                  Get the most money for your car. Reach serious buyers. Avoid
                  lowball offers. Use our valuation tools for a better price
                  when selling your car.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col sm={12} xl={4}>
            <Media className={classes.card}>
              <img
                width={50}
                height={50}
                className="mr-3"
                src="/images/time.png"
                alt="Generic placeholder"
              />
              <Media.Body className={classes.cardBody}>
                <h5>Dedicated Team</h5>
                <p>
                  Our seller experts are here to help you at every step of the
                  way via email, phone, or chat all the week days! They help you
                  find real buyers for your car and finalize your deal fast.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </div>

      {/* Get Prepared Section */}

      <div
        className={`${classes.startTodaySection} ${classes.serviceSection} bg-white`}
      >
        <div className={classes.startTodayHeader}>
          <h3> Get prepared before our call</h3>
          <p>Required Documents &amp; Procedures</p>
        </div>
      </div>

      {/* tips section */}

      <div className={classes.tips}>
        <Row className="mr-0">
          <Col sm={12} xl={6}>
            <ul>
              <li>
                <span>The car must be brought in good working condition</span>
              </li>
              <li>
                <span>
                  {" "}
                  In case the chassis is not OK, we'll do a registration test
                  (AED 170 is the cost).
                </span>
              </li>
              <li>
                <span>
                  The commission is 5% for GCC cars and 7% for imported cars
                  (minimum commission 1000 AED).
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  If the item is sold, the check will be deposit in your bank
                  account after 10 working days from the time of auction’s
                  conclusion
                </span>
              </li>
            </ul>
          </Col>
          <Col sm={12} xl={6}>
            <ul>
              <li>
                <span>
                  {" "}
                  If the car is sold for less than AED 5,000, the company
                  commission is only AED 500.
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  For the classic cars, trucks and heavy equipment, you must
                  bring export test only and the commission is 7% (minimum
                  commission 1000 AED).
                </span>
              </li>
              <li>
                <span>
                  For the equipment (generator, scissor lift, electric forklift
                  ..... etc) Tax invoice is required.
                </span>
              </li>
              <li>
                <span>
                  We'll do a comprehensive test (AED 300 is the cost).
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </div>

      {/* Required Documentation Section */}

      <div
        className={`${classes.startTodaySection} ${classes.serviceSection} ${classes.docsSection}`}
      >
        <div className={`${classes.startTodayHeader} ${classes.docsSection}`}>
          <h3> Required Documentation</h3>
          <Row className="mr-0">
            <Col>
              <h6>Emirates ID</h6>
            </Col>
            <Col>
              <h6>Possession certificate</h6>
              <p>(Dubai certificate or transfer to Dubai) </p>
            </Col>
            <Col>
              <h6>Bank account details</h6>
            </Col>
          </Row>
        </div>
      </div>

      {/* footer */}

      <Footer />
    </div>
  );
}
