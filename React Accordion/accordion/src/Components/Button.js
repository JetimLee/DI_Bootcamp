import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  //   const [clicked, setClicked] = useState(false);
  //   const handleClick = () => {
  //     clicked ? setClicked(false) : setClicked(true);
  //   };
  return (
    <div>
      <button onClick={props.onClick}>{props.clicked ? "-" : "+"}</button>
    </div>
  );
};

export default Button;
