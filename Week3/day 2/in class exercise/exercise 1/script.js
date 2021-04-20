let button = document.getElementsByTagName("input")[0];
console.log(button);

let table = document.getElementById("sampleTable").children[0]; //without this, end up getting tBody
//usually only happens with table

let counter = 2;

const addRows = () => {
  counter++;
  let newRow = document.createElement("tr");
  table.appendChild(newRow);
  for (let i = 0; i < 2; i++) {
    let newColumn = document.createElement("td");
    let someText = document.createTextNode(`row ${counter} cell ${i + 1}`);
    newColumn.appendChild(someText);
    newRow.appendChild(newColumn);
  }
};

button.addEventListener("click", addRows);

// let btn = document.getElementById('insertRowBtn')
// btn.addEventListener('click',insertRow
// //create 1 tr, 2tds,each td has text
// let table = document.getElementById('sampleTable').children[0]
// let counter = 2
// function insertRow(){
//     counter++
//     let tr = document.createElement("tr")
//     table.appendChild(tr)
//     for (let i=0; i<=1; i++){
//         let td = document.createElement("td")
//         let text = document.createTextNode(`Row ${counter} cell ${i+1}`)
//         td.appendChild(text)
//         tr.appendChild(td)
//     }
