import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import ShopScreen from "./Components/ShopScreen";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/profile">
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          </Route>
          <Route path="/shop">
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          </Route>
          <Route path="/">
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
