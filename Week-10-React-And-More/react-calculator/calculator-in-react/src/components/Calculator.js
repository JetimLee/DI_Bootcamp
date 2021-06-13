import React from "react";
import "./styles.css";

const Calculator = () => {
  return (
    <div>
      <div className="masterContainer">
        <div className="gridContainer">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="number">0</div>
          <div>*</div>
          <div>/</div>
          <button>clear screen</button>
          <button>clear all</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
