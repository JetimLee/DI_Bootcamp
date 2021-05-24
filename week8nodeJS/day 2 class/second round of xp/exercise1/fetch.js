fetch("http://localhost:3011/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ gavin: "something" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
