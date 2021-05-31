import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
const BootstrapCard = (props) => {
  return (
    <div className="card m-5" style={{ width: "30rem" }}>
      <img alt="alt stuff" className="card-img-top" src={props.imgsrc} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>

        <button>
          <a href={props.buttonURL}>{props.buttonLabel}</a>
        </button>
      </div>
    </div>
  );
};

BootstrapCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgsrc: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default BootstrapCard;
