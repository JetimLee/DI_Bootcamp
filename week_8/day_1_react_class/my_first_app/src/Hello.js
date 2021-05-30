import React from "react";
import "./index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Hello = () => {
  return (
    <div>
      <Button variant="primary">Primary</Button>{" "}
      <h2 className="green">hello</h2>
      <p>from my first component</p>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Hello;
