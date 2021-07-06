import React, { useEffect, useState } from "react";
import "./PhotoGrid.css";

const PhotoGrid = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=NfGgOIJMON6JiRJFpyiVwrfSOrWy3o4JRfIUp80a"
      );
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  }, []);
  return <div className="gridContainer"></div>;
};

export default PhotoGrid;
