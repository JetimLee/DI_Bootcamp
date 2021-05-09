const getQuestions = async () => {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=24&difficulty=hard&type=multiple`
  );
  let data = await response.json();
  console.log(data);
  useAPIData(data);
};

getQuestions();

function useAPIData(obj) {
  document.querySelector(
    `#category`
  ).innerHTML = `Category: ${obj.results[0].category}`;
}

// async function displayData() {
//   const responsePokemnon = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
//   );
//   responsePokemnon.responseType = "json";
//   // var obj = JSON.parse(response)
//   // waits until the request completes...
//   console.log(responsePokemnon);
//   return responsePokemnon;
// }
// displayData();

// const displayData = async () => {
//   let response = await fetch(
//     "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
//   );
//   let data = await response.json();
//   console.log(data);
// };
// displayData();
