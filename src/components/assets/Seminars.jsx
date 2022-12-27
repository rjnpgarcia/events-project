import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import classes from "./Seminars.module.css";

function Seminars(props) {
  const [showItems, setShowItems] = useState(false);
  const dataDisplay = showItems ? props.contents : props.contents.slice(0, 5);

  return (
    <>
      {dataDisplay.map((content) => {
        return (
          <Row className={classes.rowSeminars}>
            <Col xs="1" className={classes.monthDay} key={content.id}>
              OCT
              <br />
              {content.day}
            </Col>
            <Col xs="11">
              <Container className="p-0">
                <Row className="justify-content-center">
                  <Col md="12">
                    <div className={classes.title} key={content.id}>
                      {content.title}
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-end">
                  <Col xs="5">
                    <div className={classes.details} key={content.id}>
                      {content.address}
                      {", "}
                      {content.city}
                    </div>
                  </Col>
                  <Col xs="4" className="p-0">
                    <div className={classes.details} key={content.id}>
                      <CalendarMonthIcon /> {content.when}
                    </div>
                    <div className={classes.details2} key={content.id}>
                      {content.when2 ? content.when2 : null}
                    </div>
                  </Col>
                  <Col xs="3" className="p-0">
                    <button className={classes.btnRegister}>
                      Register Now
                    </button>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        );
        // <Row className={classes.rowSeminars}>
        //   <Col md="1" className={classes.monthDay}>
        //     OCT
        //     <br />8
        //   </Col>
        //   <Col md="11">
        //     <Container className="p-0">
        //       <Row className="justify-content-center">
        //         <Col md="12">
        //           <div className={classes.title}>
        //             Prospective Member Benefits Overview
        //           </div>
        //         </Col>
        //       </Row>
        //       <Row className="justify-content-end">
        //         <Col md="5">
        //           <div className={classes.details}>
        //             Prominence Health Plan Office 1155 South Congress Avenue
        //             WEST PALM BEACH, FLORIDA 33406
        //           </div>
        //         </Col>
        //         <Col md="4" className="p-0">
        //           <div className={classes.details}>
        //             <CalendarMonthIcon /> Sat, October 5, 2022, 8:00am
        //           </div>
        //           <div className={classes.details2}>
        //             <CalendarMonthIcon /> Sat, October 5, 2022, 11:00am
        //           </div>
        //         </Col>
        //         <Col md="3" className="p-0">
        //           <button className={classes.btnRegister}>Register Now</button>
        //         </Col>
        //       </Row>
        //     </Container>
        //   </Col>
        // </Row>;
      })}
      <a
        href="#seeMore"
        onClick={() => setShowItems(!showItems)}
        id="seeMore"
        className={classes.seeMore}
      >
        {showItems ? "See Less" : "See More"}
      </a>
    </>
  );
}

export default Seminars;
