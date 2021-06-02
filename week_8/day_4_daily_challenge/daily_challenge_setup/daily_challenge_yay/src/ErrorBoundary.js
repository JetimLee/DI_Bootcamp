import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log(props.children);
    //can access wrapped components with props.children
    this.state = {
      error: "",
      hasError: "",
      errorInfo: "",
      helloFromError: "erroring",
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
    console.log(errorInfo);
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>error</Card.Title>
            <Card.Text>{this.state.error.toString()}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return this.props.children;
  }
}
