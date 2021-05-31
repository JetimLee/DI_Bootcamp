import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "react-bootstrap/Alert";

const MoreColorsAlert = (props) => {
  const colorClasses = {
    red: "danger",
    orange: "warning",
    green: "success",
  };
  if (colorClasses[props.thing] === undefined) {
    return alert("invalid color choice");
  }
  return <Alert variant={colorClasses[props.thing]}>{props.thing}</Alert>;
};

export default MoreColorsAlert;
