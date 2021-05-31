import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const ConditionalAlert = (props) => {
  if (props.show === false) {
    return null;
  } else {
    return <Alert variant={"danger"}>{props.text}</Alert>;
  }
};

export default ConditionalAlert;
