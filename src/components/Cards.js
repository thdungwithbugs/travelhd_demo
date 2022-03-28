import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out some Awesome Places</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Adventure"
              path="/services"
            ></CardItem>
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
            <CardItem
              src="images/img-3.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
            <CardItem
              src="images/img-4.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
            <CardItem
              src="images/img-5.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
            <CardItem
              src="images/img-6.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
