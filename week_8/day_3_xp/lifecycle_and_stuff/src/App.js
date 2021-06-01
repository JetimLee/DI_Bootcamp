import Events from "./Components/Events";
import Exercise1 from "./Components/Exercise1";
import HelloWorld from "./Components/HelloWorld";
import ToggleButton from "./Components/ToggleButton";

import React, { Component } from "react";

export default class App extends Component {
  shoot3 = () => {
    alert(this);
  };
  shoot4 = (param) => {
    alert(param);
  };
  shoot5 = (param) => {
    alert(param);
  };

  render() {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        alert(
          `the enter key was pressed, your input is: ${
            document.getElementById("myInput").value
          }`
        );
      }
    };
    const clickHandler = () => {
      alert("i was clicked!");
    };
    return (
      <div>
        <button onClick={this.shoot3}>Shoot 3</button>
        <button
          onClick={() => {
            this.shoot4("goal");
          }}
        >
          shooting!
        </button>
        <button onClick={this.shoot5.bind(this, "goal")}>Shoot 5</button>
        <button onClick={clickHandler}>Click me</button>
        <input
          id="myInput"
          onKeyPress={handleKeyPress}
          placeholder={"press the enter key!"}
        ></input>

        <Exercise1 color="red" />
        <HelloWorld show={true} />
        <Events />
        <ToggleButton />
      </div>
    );
  }
}
