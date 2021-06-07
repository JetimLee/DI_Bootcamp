import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <h1>redux/react movies</h1>
      <div className="container">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
