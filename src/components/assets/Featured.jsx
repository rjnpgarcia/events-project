import classes from "./Featured.module.css";

import React, { Component } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon
        style={{
          color: "#FFFFFF",
          backgroundColor: "#208B82",
          width: "32px",
          height: "32px",
          borderRadius: "32px",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "100%",
          position: "absolute",
          right: "35px",
          bottom: "35px",
        }}
      />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon
        style={{
          color: "#FFFFFF",
          backgroundColor: "#208B82",
          width: "32px",
          height: "32px",
          borderRadius: "32px",
          fontWeight: "400",
          fontSize: "24px",
          lineHeight: "100%",
          position: "absolute",
          left: "35px",
          bottom: "35px",
        }}
      />
    </div>
  );
}

export default class Featured extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots) => (
        <div
          style={{
            backgroundColor: "#F0F9F8",
            height: "50px",
            padding: "0px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <Slider {...settings} className={classes.sliderContainer}>
        {this.props.contents.map((content) => {
          if (content.featured === true) {
            return (
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-8 m-0">
                  <ul key={content.id}>
                    <li key={content.id} className={classes.listTitle}>
                      {content.title}
                    </li>
                    <li key={content.id} className={classes.listAddress}>
                      {content.address} {content.city}
                    </li>
                    <li key={content.id} className={classes.listWhen}>
                      <CalendarMonthIcon
                        key={content.id}
                        className={classes.calendarIcon}
                      />{" "}
                      {content.when}
                    </li>
                    <button className={classes.buttonRegister}>
                      Register now
                    </button>
                  </ul>
                </div>
                <div className="col-1 m-0 p-0 text-center">
                  <p key={content.id} className={classes.listDate}>
                    OCT
                    <br />
                    {content.day}
                  </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Slider>
    );
  }
}
