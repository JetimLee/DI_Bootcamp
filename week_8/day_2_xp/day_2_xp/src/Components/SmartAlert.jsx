import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const ConditionalAlert = (props) => {
  const colorClasses = {
    red: "danger",
    orange: "warning",
  };

  return <Alert variant={colorClasses[props.thing]}>{props.thing}</Alert>;
};

export default ConditionalAlert;
