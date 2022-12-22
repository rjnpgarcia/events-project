// React
import React from "react";
// CSS and Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "./WalkIn.module.css";
import "./WalkInSlider.module.css";
// React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// React Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

function WalkIn(props) {
  return (
    <Container className={classes.containerSlider}>
      <Swiper
        slidesPerView={1}
        grid={{ rows: 2 }}
        spaceBetween={0}
        navigation={{
          prevEl: ".button-prev-slide",
          nextEl: ".button-next-slide",
        }}
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        {props.contents.map((content) => {
          if (content.walkIn === true && content.id % 2 === 0) {
            return (
              <SwiperSlide className={classes.row2}>
                <Row>
                  <Col xs={10} className={classes.column}>
                    <ul>
                      <li className={classes.title} key={content.id}>
                        {content.title}
                      </li>
                      <li className={classes.address}>{content.address}</li>
                      <li className={classes.date}>
                        <CalendarMonthIcon className={classes.calendarIcon} />{" "}
                        {content.when}
                      </li>
                    </ul>
                  </Col>
                  <Col xs={2}>
                    <p className={classes.day}>
                      Oct
                      <br />
                      {content.day}
                    </p>
                  </Col>
                </Row>
              </SwiperSlide>
            );
          }
          if (content.walkIn === true) {
            return (
              <SwiperSlide className={classes.row1}>
                <Row>
                  <Col xs={10} className={classes.column}>
                    <ul>
                      <li className={classes.title} key={content.id}>
                        {content.title}
                      </li>
                      <li className={classes.address}>{content.address}</li>
                      <li className={classes.date}>
                        <CalendarMonthIcon className={classes.calendarIcon} />{" "}
                        {content.when}
                      </li>
                    </ul>
                  </Col>
                  <Col xs={2}>
                    <p className={classes.day}>
                      Oct
                      <br />
                      {content.day}
                    </p>
                  </Col>
                </Row>
              </SwiperSlide>
            );
          } else {
            return null;
          }
        })}
      </Swiper>
      <div className={classes.containerWalkInButtons}>
        <div className="row">
          <div className="col-6 d-flex justify-content-end px-0">
            <div className="button-prev-slide">
              <button className={classes.navButtonSmall}>
                <ChevronLeftIcon />
              </button>
              <button className={classes.navButtonBig}>Prev</button>
            </div>
          </div>
          <div className="col-6 px-0">
            <div className="button-next-slide">
              <button className={classes.navButtonBig}>Next</button>
              <button className={classes.navButtonSmall}>
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WalkIn;
