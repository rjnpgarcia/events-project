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
          {this.props.data.map((button) => {
            return (
              <div>
                <button
                  className={
                    this.state.activeSlide === button.id
                      ? classes.buttonDateActive
                      : classes.buttonDate
                  }
                >
                  {button.month}
                  <br />
                  {button.year}
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
