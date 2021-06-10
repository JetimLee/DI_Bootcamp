import "./App.css";

import MovieList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <MovieList />
      <MovieDetails />
    </div>
  );
}

export default App;
