import React, { useState } from "react";

//must wrap helper functions in a functional commponent with an arrow function so that they aren't called immediately upon load

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [counter, setCounter] = useState(0);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(i)} className={"title" + active}>
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className={"content" + active}>
          <p>{item.content}</p>
          <button onClick={() => setCounter(counter + 1)}>
            increase counter
          </button>
          <button onClick={() => setCounter(counter - 1)}>
            decrease counter
          </button>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
      <h2>Counter {counter}</h2>
    </div>
  );
};

export default Accordion;
