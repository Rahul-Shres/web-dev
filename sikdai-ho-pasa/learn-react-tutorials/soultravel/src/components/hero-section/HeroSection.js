import React, { useState } from "react";
import "./herosection.css";
import plane from "../../icons/Plane.svg";
import car from "../../icons/Car.svg";
import hotel from "../../icons/Hotel.svg";
import line from "../../svg/line.svg";
import Plane from "../../svg/Plane.svg";
import Vector from "../../svg/Vector.svg";
import girl from "../../svg/girl.svg";

const HeroSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h1 className="title">
          LETS GO!
          <br />
          THE <span className="highlghts">Adventure</span>IS
          <br />
          WAITING FOR YOU
        </h1>
        <p className="caption">
          Pack your luggage and pick your destination, we will <br />
          provide you the flight ticket, hotel booking, and best guides
        </p>
        <div className="btn-container">
          <div
            className={`item-01 ${activeItem === "item-01" ? "active" : ""}`}
            onClick={() => handleClick("item-01")}>
            <span className="flight-icon">
              <img src={plane} alt="plane" />
            </span>
            <h3>Flight</h3>
          </div>

          <div
            className={`item-02 ${activeItem === "item-02" ? "active" : ""}`}
            onClick={() => handleClick("item-02")}>
            <span className="hotel-icon">
              <img src={hotel} alt="hotel" />
            </span>
            <h3>Hotel</h3>
          </div>

          <div
            className={`item-03 ${activeItem === "item-03" ? "active" : ""}`}
            onClick={() => handleClick("item-03")}>
            <span>
              <img src={car} alt="car" />
            </span>
            <h3>Rent</h3>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="box-1">
          <div className="box-2">
            <div className="box-2-children">
              <div className="circle bg-gradient">
                <img className="line" src={line} alt="line" />
                <img className="plane" src={Plane} alt="plane" />
                <img className="vector" src={Vector} alt="vector" />
                <img className="girl" src={girl} alt="girl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
