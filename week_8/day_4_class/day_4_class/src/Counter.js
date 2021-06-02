import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState({ counter: ++this.state.counter });
  };
  render() {
    if (this.state.counter >= 5) {
      throw new Error("oops, something happened!");
    }
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.counter}
      </div>
    );
  }
}
