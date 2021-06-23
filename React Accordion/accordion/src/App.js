import React, { useState } from "react";
import "./App.css";
import questions from "./data";
import Questions from "./Components/Questions";
import Button from "./Components/Button";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    clicked ? setClicked(false) : setClicked(true);
    console.log("clicked");
  };
  return (
    <div className="App">
      <div>
        <h1>
          Questions and <br></br> answers about login
        </h1>
      </div>
      <div className="questionsContainer">
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <Questions
                clicked={!clicked}
                title={question.title}
                info={question.info}
              >
                <Button
                  onClick={() => setClicked(!clicked)}
                  clicked={clicked}
                />
              </Questions>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
