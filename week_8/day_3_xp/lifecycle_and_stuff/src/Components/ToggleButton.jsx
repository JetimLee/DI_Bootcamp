import React, { Component } from "react";

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }
  toggle = () => {
    this.state.isToggleOn === true
      ? (document.getElementById("myButton").textContent = "On")
      : (document.getElementById("myButton").textContent = "Off");
    this.state.isToggleOn === true
      ? this.setState({ isToggleOn: false })
      : this.setState({ isToggleOn: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle} id="myButton">
          On
        </button>
      </div>
    );
  }
}
