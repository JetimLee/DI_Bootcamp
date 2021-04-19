document.getElementById("navBar").setAttribute("id", "socialNetworkNavigation");

const createLI = () => {
  let ul = document.getElementById("socialNetworkNavigation");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("logout"));
  ul.appendChild(li);
};

createLI();
