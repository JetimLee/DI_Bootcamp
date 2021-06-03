import React from "react";
import classnames from "classnames";
import data from "./data.json";
import avengers from "./images/avengers.jpg";
import "./Card.scss";

const superheroes = data.superheroes;

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={avengers} alt="avengers" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="avengers character" />
      </div>
    </div>
  );
};

export default Card;
