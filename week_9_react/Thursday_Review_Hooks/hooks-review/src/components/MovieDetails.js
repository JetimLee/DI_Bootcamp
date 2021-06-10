import React, { Component } from "react";
import { connect } from "react-redux";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Movie Details</h1>
        <h4>title:{this.props.details.title}</h4>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { details: state.details };
};
export default connect(mapStateToProps, null)(MovieDetails);
