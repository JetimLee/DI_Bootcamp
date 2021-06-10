import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions/actions";
import { movieSelected } from "../actions/actions";
class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies();
    console.log(this.props.movies);
  }
  render() {
    return (
      <div>
        <h1>Movie list</h1>
        {this.props.movies.map((movie, i) => {
          return (
            <div key={movie.title}>
              <h3>{movie.title}</h3>
              <button onClick={() => this.props.movieSelected(movie)}>
                Detail
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
//action feeds the data which then goes here, this is what gives you the data
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};
//here you call the action
const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    movieSelected: (movie) => dispatch(movieSelected(movie)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
