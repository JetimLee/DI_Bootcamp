import React, { Component } from "react";

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    this.setState({ users: data });
    console.log(this.state);
    console.log(data);
  }
  render() {
    if (this.state.users !== []) {
      const { users } = this.state;
      return (
        <div>
          {users.map((el) => (
            <div>
              <p>
                Name:
                <strong> {el.name}</strong>
              </p>
              <p>
                {" "}
                Username:
                <strong> {el.username}</strong>
              </p>
            </div>
          ))}
        </div>
      );
    }
  }
}
