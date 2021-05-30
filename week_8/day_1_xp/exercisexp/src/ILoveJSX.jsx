import React from "react";

const myElement = <h1>I love JSX</h1>;
const sum = `JSX is ${5 + 5} times better than anything else`;
const HTMLInJSX = (
  <ul>
    <li>apples</li>
    <li>apples</li>
    <li>apples</li>
  </ul>
);

const twoHeaders = (
  <div>
    <h1>I am a header</h1>
    <h2>I am also a header</h2>
  </div>
);
const input = <input type="text"></input>;

const name = "John is";
const age = `20 years old`;

const ILoveJSX = () => {
  return (
    <div>
      <h1>{myElement}</h1>
      <h2>{sum}</h2>
      <div>
        <p>My list: </p>
        {HTMLInJSX}
        {twoHeaders}
        {input}
      </div>
      <p>
        {name} {age}
      </p>
    </div>
  );
};

export default ILoveJSX;
