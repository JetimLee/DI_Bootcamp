import React from "react";

const Card = (props) => {
  // const { data } = props;
  const { name, email, id } = props;
  return (
    <div>
      <div className="tc grow bg-light-green br3 pa3 ma2 dib shadow-5">
        <img alt="a pic" src="https://robohash.org/2?size=200x200"></img>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Card;
