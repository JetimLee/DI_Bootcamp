import React, { Component } from "react";
import "./Styles.css";
import validator from "validator";

export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phonenumber: null,
      email: "",
      submitted: false,
    };
  }
  getTitle = (e) => {
    this.setState({ firstname: e.target.value });
  };
  getAuthor = (e) => {
    this.setState({ lastname: e.target.value });
  };
  getGenre = (e) => {
    this.setState({ phonenumber: e.target.value });
  };

  getYear = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubmission = (e) => {
    let phoneno = /^\d{10}$/;
    if (this.state.phonenumber.match(phoneno)) {
    } else {
      alert("please enter a valid phone number");
    }
    if (validator.isEmail(this.state.email)) {
      if (this.state.submitted === false) {
        this.setState({ submitted: true });
      }
    } else {
      alert("please enter a valid email");
    }
    e.preventDefault();
  };
  render() {
    if (this.state.submitted === true) {
      return (
        <div className="masterContainer">
          <h1>
            {this.state.firstname}, {this.state.lastname}
          </h1>
          <p>
            {this.state.phonenumber} | {this.state.email}
          </p>
        </div>
      );
    }
    return (
      <div className="rootContainer">
        <div className="masterContainer">
          <div className="parentContainer">
            <form className="form2">
              <h1>Welcome!</h1>
              <p>Please provide your information...</p>
              <label>First Name</label>
              <input onChange={this.getTitle}></input>
              <label>Last Name</label>
              <input onChange={this.getAuthor}></input>
              <label>Phone Number</label>
              <input type="tel" onChange={this.getGenre}></input>
              <label>Email</label>
              <input type="email" onChange={this.getYear}></input>
              <button onClick={this.handleSubmission} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
