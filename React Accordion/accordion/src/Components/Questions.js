import React from "react";
import "./Questions.css";

const Questions = (props) => {
  return (
    <div className="questions">
      <div>
        <h1>{props.title}</h1>
        {props.clicked && <p>{props.info}</p>}
      </div>
      {props.children}
    </div>
  );
};

export default Questions;
