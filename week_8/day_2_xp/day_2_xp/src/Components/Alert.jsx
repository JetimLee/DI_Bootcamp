import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const CreateAlert = (props) => {
  return <Alert variant={"danger"}>{props.text}</Alert>;
};

export default CreateAlert;
