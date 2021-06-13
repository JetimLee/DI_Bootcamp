import React from "react";
import Homepage from "./components/Homepage";
import "./styling/app.css";
import Navbar from "./components/Navbar";
import Blogs from "./components/Blogs";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
