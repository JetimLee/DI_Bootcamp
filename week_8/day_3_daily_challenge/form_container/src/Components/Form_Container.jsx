import React, { Component } from "react";
import "./form.css";
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
    console.log(this.state);
  };
  handleLastName = (event) => {
    this.setState({ lastname: event.target.value });
    console.log(this.state);
  };
  handleAge = (event) => {
    console.log(this.state.age);
    this.setState({ age: event.target.value });
    console.log(this.state);
  };
  handleGender = (event) => {
    event.target.checked
      ? this.setState({ gender: event.target.value })
      : console.log("not checked");
    console.log(this.state);
  };
  handleDescription = (event) => {
    this.setState({ destination: event.target.value }, console.log(this.state));
  };
  handleAllergies = (event) => {
    event.target.checked
      ? this.setState({ dietaryrestrictions: event.target.value })
      : console.log("not checked");
    console.log(this.state);
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.firstname} ${this.state.lastname} ${this.state.gender} ${this.state.dietaryrestrictions} ${this.state.destination} ${this.state.age}`
    );
  };
  render() {
    return (
      <div className="main-container">
        <div className="form_container">
          <form onSubmit={this.handleSubmit} action="#" method="get">
            <div className="name_age_field">
              <label htmlFor="first_name">First Name: </label>
              <input
                name="first_name"
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
              />
              <label htmlFor="last_name">Last Name: </label>
              <input
                name="last_name"
                type="text"
                value={this.state.lastname}
                onChange={this.handleLastName}
              />
              <label htmlFor="age">Age: </label>
              <input
                name="age"
                type="text"
                value={this.state.age}
                onChange={this.handleAge}
              />
            </div>
            <div className="gender_fields">
              <label htmlFor="male">Male:</label>
              <input
                className="checkbox"
                value={"male"}
                onChange={this.handleGender}
                type="checkbox"
              />
              <label htmlFor="female">Female:</label>
              <input
                className="checkbox"
                value={"female"}
                onChange={this.handleGender}
                type="checkbox"
              />
            </div>
            <div className="destinations_area">
              <label htmlFor="select_menu">Destinations</label>
              <select
                name="select_menu"
                id=""
                value={this.state.destination}
                onChange={this.handleDescription}
              >
                <option value="default">Choose your destination</option>
                <option value="japan">Japan</option>
              </select>
            </div>
            <div className="allergies_field">
              <label htmlFor="kosher">kosher</label>
              <input
                className="checkbox"
                name="kosher"
                value={"kosher"}
                onChange={this.handleAllergies}
                type="checkbox"
              />
              <label htmlFor="dairy">dairy</label>
              <input
                className="checkbox"
                name="dairy"
                value={"dairy"}
                onChange={this.handleAllergies}
                type="checkbox"
              />
              <label htmlFor="nuts">nuts</label>
              <input
                className="checkbox"
                name="nuts"
                value={"nuts"}
                onChange={this.handleAllergies}
                type="checkbox"
              />
              <label htmlFor="vegan">vegan</label>
              <input
                className="checkbox"
                name="vegan"
                value={"vegan"}
                onChange={this.handleAllergies}
                type="checkbox"
              />
            </div>
          </form>
        </div>
        <div className="user-info">
          <div>
            <h1>Your entered info</h1>
            <div>
              <p>
                Name: {this.state.firstname} {this.state.lastname}
              </p>
            </div>
            <div>
              <p>Gender: {this.state.gender}</p>
            </div>
            <div>
              <p>Destination: {this.state.destination}</p>
            </div>
            <div>
              <p>Age: {this.state.age}</p>
            </div>
            <div>
              <p>Allergy/allergies {this.state.dietaryrestrictions}</p>
            </div>
            <div>
              <button type="submit">Submit Form</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
