import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log(props.children);
    //can access wrapped components with props.children
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
    alert(error, errorInfo);
  }
  render() {
    if (this.state.error) {
      return <h1>something went wrong</h1>;
    }
    return this.props.children;
  }
}
