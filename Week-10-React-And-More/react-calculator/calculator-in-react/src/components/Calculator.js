import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import Keypad from "./Keypad";
import "./Calculator.css";

const Calculator = () => {
  const [displayData, setDisplayData] = useState("");

  const calculate = () => {
    try {
      const result = eval(displayData);
      setDisplayData(result);
    } catch (error) {
      setDisplayData(error);
    }
  };
  return (
    <div class="Calculator">
      <Display data={displayData} />
      <Keypad>
        <Button label="C" value="clear" />
        <Button label="7" value="7" />
        <Button label="4" value="4" />
        <Button label="1" value="1" />
        <Button label="0" value="0" />

        <Button label="/" value="/" />
        <Button label="8" value="8" />
        <Button label="5" value="5" />
        <Button label="2" value="2" />
        <Button label="." value="." />

        <Button label="x" value="*" />
        <Button label="9" value="9" />
        <Button label="6" value="6" />
        <Button label="3" value="3" />
        <Button label="" value="null" />

        <Button label="-" value="-" />
        <Button label="+" size="2" value="+" />
        <Button label="=" size="2" value="equal" />
      </Keypad>
    </div>
  );
};

export default Calculator;
