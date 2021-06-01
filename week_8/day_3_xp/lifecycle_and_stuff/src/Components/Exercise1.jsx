import React from "react";

export default class Exercise1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.state = { color: props.color, show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 5000);
  }
  handleClick() {
    this.setState({ color: "blue" });
  }
  handleClick2() {
    this.setState({ color: "pink" });
  }
  shouldComponentUpdate() {
    return true;
    // return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps.color);
    document.getElementById(
      "beforeUpdate"
    ).textContent = `My favorite color before the update was ${prevState.color}`;
  }
  componentDidUpdate() {
    document.getElementById(
      "myDiv"
    ).textContent = `My favorite color is ${this.state.color}`;
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>
          Hello, I am {this.state.color}
        </h1>
        <div id="beforeUpdate"></div>
        <div id="myDiv"></div>
        <button onClick={this.handleClick}>Change the color to blue</button>
        <button onClick={this.handleClick2}>Change the color to pink</button>
      </div>
    );
  }
}
