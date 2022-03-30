import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-3.mp4" autoPlay loop muted></video>
      <h1>SCENIC LANDSCAPES </h1>
      <p>Which destinations are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET START
        </Button>
        <Button
          className="btns trailer"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
