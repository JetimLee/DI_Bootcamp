import React, { Component } from "react";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    this.setState({ posts: data });
  }
  render() {
    const { posts } = this.state;
    if (this.state.posts !== []) {
      return (
        <div>
          <div>
            <h1>List of Users</h1>
            {posts.map((el) => (
              <div>
                <p>
                  <strong>User ID: </strong>
                  {el.userId}
                </p>
                <p>
                  <strong>Post ID: </strong>
                  {el.id}
                </p>
                <p>
                  <strong>Title: </strong>
                  {el.title}
                </p>
                <p>
                  <strong>Body: </strong>
                  {el.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}
