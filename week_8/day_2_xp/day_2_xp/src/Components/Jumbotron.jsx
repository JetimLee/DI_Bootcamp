import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateJumbotron = (props) => {
  return (
    <Jumbotron>
      <h1>Welcome to {props.name}</h1>
      <p>{props.name} is the most popular rendering library in the world!</p>
      <Button variant="primary" size="lg" disabled>
        {props.name} is the most popular JavaScript library!
      </Button>{" "}
    </Jumbotron>
  );
};

export default CreateJumbotron;
