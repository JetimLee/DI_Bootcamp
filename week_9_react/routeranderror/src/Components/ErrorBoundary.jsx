import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "" };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorInfo: errorInfo });
    console.log(errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    } else {
      {
        return this.props.children;
      }
    }
  }
}
