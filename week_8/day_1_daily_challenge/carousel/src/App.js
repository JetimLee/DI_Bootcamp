import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/hongkong.jpg";
import img2 from "./images/japan.webp";
import img3 from "./images/macao.webp";
import img4 from "./images/new yokr.webp";
import "./carousel.css";

function App() {
  return (
    <div className="flex">
      <Carousel>
        <Carousel.Item>
          <img alt="hello" src={img1} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="hello" src={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="hello" src={img3} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="hello" src={img4} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
