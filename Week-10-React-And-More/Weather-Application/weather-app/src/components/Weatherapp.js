import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import Spinner from "react-bootstrap/Spinner"; // import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

const Weatherapp = () => {
  const [data, setData] = useState([]);
  const key = "72b26b4430a0aed38983219af2f9532d";
  const [cityInput, setCityInput] = useState("");
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    if (cityInput === "") {
      return;
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${key}`
      )
        .then((resp) => resp.json())
        .then((data) => setData(data))

        // .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
    console.log(data);
    console.log(isLoaded);
  }, [cityInput]);

  const handleClick = () => {
    const input = document.getElementById("city").value;
    console.log(isLoaded);
    setCityInput(input);
    const timer = setTimeout(() => {
      setisLoaded(true);
    }, 3000);
  };
  return (
    <div className="flexContainer">
      <div>
        <h1>Weather Finder</h1>
        <h3>
          <em>Get temperature, conditions and more</em>!
        </h3>
        <div className="inputContainer">
          <input id="city" placeholder="city"></input>
          <Button onClick={handleClick} inverted color="blue">
            Get weather!
          </Button>{" "}
        </div>
        <div className="forecastArea">
          {isLoaded ? (
            <div>
              <h3>{data.name}</h3>
              <em>
                <p>Current temperature: {data.main.feels_like}</p>
              </em>
              <em>
                <p>Maximum temp for the day: {data.main.temp_max}</p>
              </em>
              <em>
                <p>Lowest temp for the day: {data.main.temp_min}</p>
              </em>
            </div>
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Weatherapp;
