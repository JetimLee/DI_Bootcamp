import React, { Component } from "react";

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      gender: "",
      destination: "",
      dietaryrestrictions: "",
    };
  }
  handleChange = (event) => {
    this.setState({ firstname: event.target.value });
  };
  render() {
    return (
      <form action="">
        <div className="name_age_field">
          <label htmlFor="first_name">First Name: </label>
          <input
            name="first_name"
            type="text"
            value={this.state.firstname}
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }
}
