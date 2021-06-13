import React, { useEffect, useState } from "react";
import axios from "axios";

const myApiKey = `8590fc66ef394cd5bc538ed499a0544b`;

function WinePairer() {
  // const [data, setData] = useState({ hits: [] });
  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await axios(
  //       `https://api.spoonacular.com/food/wine/pairing?food=steak&apiKey=${myApiKey}`
  //     );
  //     setData(result.data);
  //     console.log(data);
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <button
        onClick={(e) => (
          <div>
            <p>{e}</p>
          </div>
        )}
      >
        click me
      </button>
    </div>
  );
}

export default WinePairer;
