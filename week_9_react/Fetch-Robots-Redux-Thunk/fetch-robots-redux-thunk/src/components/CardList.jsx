import React, { useEffect, useState } from "react";

function CardList() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const dataArray = await response.json();
      setData(dataArray);
    };

    getData().then(setisLoading(false));

    console.log(data);
  }, []);

  return (
    <div>
      <h1>{isLoading ? "loading" : "not loading"}</h1>
    </div>
  );
}

export default CardList;
