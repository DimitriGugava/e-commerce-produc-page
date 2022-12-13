import "./DesktopSlider.css";
import arrowleft from "../icons/arrowleft.svg";
import arrowright from "../icons/arrowright.svg";
import { useState } from "react";
const DesktopSlider = (props) => {
  return (
    <div className="SliderContainer">
      <div className="photosAndSliderDesktop">
        <div
          className="arrowLeftBoxDesktop"
          onClick={props.slideToPreviousImageSlider}
        >
          <img src={arrowleft} alt="arrow left" className="arrowLeftDesktop" />
        </div>
        <img
          src={process.env.PUBLIC_URL + props.info.images[props.sliderindex]}
          alt="shoes photo"
          className="shoesphotoDesktopSlider"
          onClick={props.showDekstopSlider}
        />
        <div
          className="arrowRightBoxDesktop"
          onClick={props.slideToNextImageSlider}
        >
          <img
            src={arrowright}
            className="arrowRightDesktop"
            alt="Arrow right"
          />
        </div>
      </div>
      <div className="allPhotosBoxDesktop">
        <img
          src={process.env.PUBLIC_URL + props.info.images[1]}
          className="allPhotosPhotosDesktop"
          onClick={props.SliderChangeDesktopSlider}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[2]}
          className="allPhotosPhotosDesktop"
          onClick={props.SliderChangeDesktopSlider}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[3]}
          className="allPhotosPhotosDesktop"
          onClick={props.SliderChangeDesktopSlider}
        />
        <img
          src={process.env.PUBLIC_URL + props.info.images[1]}
          className="allPhotosPhotosDesktop"
          onClick={props.SliderChangeDesktopSlider}
        />
      </div>
    </div>
  );
};

export default DesktopSlider;
