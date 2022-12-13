import React, { Component } from "react";
import Slider from "react-slick";
import RightIcon from "../icons/vIconRight.png";
import LeftIcon from "../icons/vIconLeft.png";
import classes from "./MultiSlider.module.css";

let slidesToShow = 7;

function NextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        // <div
        //   className={className}
        //   style={{ ...style, display: "block", background: "red" }}
        //   onClick={onClick}
        // />
        <img
          src={RightIcon}
          alt="right icon"
          className={className}
          onClick={onClick}
          style={{
            ...style,
            display: "block",
            width: "8px",
            height: "10px",
            background: "white",
          }}
        />
      )}
    </>
  );
}

function PrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <img
          src={LeftIcon}
          alt="left icon"
          className={className}
          onClick={onClick}
          style={{
            ...style,
            display: "block",
            width: "8px",
            height: "10px",
            background: "white",
          }}
        />
      )}
    </>
  );
}

export default class MultiSlider extends Component {
  state = {
    activeSlide: 0,
  };
  render() {
    const settings = {
      focusOnSelect: true,
      dots: false,
      infinite: true,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <button
              className={
                this.state.activeSlide === 0
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              OCT
              <br />
              2022
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 1
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              NOV
              <br />
              2022
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 2
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              DEC
              <br />
              2022
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 3
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              JAN
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 4
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              FEB
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 5
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              MAR
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 6
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              APR
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 7
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              MAY
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 8
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              JUN
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 9
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              JUL
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 10
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              AUG
              <br />
              2023
            </button>
          </div>
          <div>
            <button
              className={
                this.state.activeSlide === 11
                  ? classes.buttonDateActive
                  : classes.buttonDate
              }
            >
              SEP
              <br />
              2023
            </button>
          </div>
        </Slider>
      </div>
    );
  }
}
