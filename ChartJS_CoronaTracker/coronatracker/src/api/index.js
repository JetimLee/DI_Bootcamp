import axios from "axios";

const url = " https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const necessaryData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return necessaryData;
  } catch (error) {
    console.log("an error occurred when fetching");
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://api.covidtracking.com/v1/us/daily.json",
//       { mode: "no-cors" }
//     );

//     return data.map(({ positive, recovered, death, dateChecked: date }) => ({
//       confirmed: positive,
//       recovered,
//       deaths: death,
//       date,
//     }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchDailyData = async () => {
  try {
    const response = await fetch(
      "https://api.covidtracking.com/v1/us/daily.json",
      {
        mode: "no-cors",
      }
    );
    console.log(`here is response ${JSON.stringify(response)}`);
    const data = await response.json();
    console.log(`here is fetched data ${data}`);
  } catch (error) {
    console.log(`an error occurred when fetching data ${error}`);
  }
};
