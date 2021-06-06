import React, { Component } from "react";

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], errorMessage: "" };
  }
  async componentDidMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    this.setState({ posts: data });
    return data;
  }

  render() {
    const { posts, errorMessage } = this.state;
    if (posts !== "") {
      return (
        <div>
          <h1>list of posts</h1>
          <div className="posts">
            {posts.map((el) => (
              <p>{el.title}</p>
            ))}
          </div>
        </div>
      );
    }
  }
}
