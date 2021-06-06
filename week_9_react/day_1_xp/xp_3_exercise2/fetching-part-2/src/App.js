import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = { people: [] };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    this.setState({ people: data });
  }
  render() {
    if (this.state.people !== []) {
      console.log(this.state.people);
      const { people } = this.state;

      return (
        <div>
          <ul className="people">
            {people.map((el) => (
              <li>
                {el.name} | {el.email}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    }
  }
}
