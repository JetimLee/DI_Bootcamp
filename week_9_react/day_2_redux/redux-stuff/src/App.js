import "./App.css";
import { connect } from "react-redux";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // property_one: "property one",
      // property_two: "property two",
    };
  }
  render() {
    return (
      <div class="container">
        <div>
          <h1>simple redux</h1>
          <h3>property one: {this.props.property_one}</h3>
          <input type="text" onChange={this.handleChange}></input>
          <h3>property two {this.props.property_two}</h3>
          <button onClick={() => this.handleClick()}>Click</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    property_one: state.property_one_one,
    property_two: state.property_two_two,
  };
};
const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//connects to the store
