import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);
  //good default when using an api is to put an empty array, that's a way of saying we don't have any search results at this time
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      if (term) {
        setResults(data.query.search);
      }
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  //what tells useEffect to run is the empty array, filled array or nothing that comes after the curly brackets. you'll never see an object there
  //cannot mark the function we pass into useEffect as async, cannot use await keywords directly inside the function
  //can put a function inside and make that one async - this one is recommended by React
  //can use an anonymous function instead of which will be wrapped in paraenthesis and be invoked immediately afterwards
  //can do promises with the .then structure

  //the prop name of dangerouslysetinnerhtml is aptly named because you could be introducing an XSS attack on your application from a third party website - it's where you accidentally pick up html that you didn't code, which would allow a hacker to execute javascript on your website.
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
