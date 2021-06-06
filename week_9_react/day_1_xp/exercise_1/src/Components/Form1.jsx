import React, { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", author: "", genre: "", year_published: "" };
  }

  getTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  getAuthor = (e) => {
    this.setState({ author: e.target.value });
  };
  getGenre = (e) => {
    this.setState({ genre: e.target.value });
  };
  getYear = (e) => {
    this.setState({ year_published: e.target.value });
  };
  handleSubmission = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form>
          <h1>New Book</h1>
          <label>Title</label>
          <input onChange={this.getTitle}></input>
          <label>Author</label>
          <input onChange={this.getAuthor}></input>
          <label>Genre</label>
          <input onChange={this.getGenre}></input>
          <label>Year Published</label>
          <input onChange={this.getYear}></input>
          <button onClick={this.handleSubmission} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
