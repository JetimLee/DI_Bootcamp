import React from "react";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shoot2 = () => {
    alert(this);
  };
  handleClick() {
    alert(`great shot!`);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Take the shot!</button>
        <button onClick={this.handleClick}>Take the shot again!</button>
        <button onClick={this.shoot2}>keep shooting!</button>
      </div>
    );
  }
}
