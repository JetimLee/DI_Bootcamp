let displayText = document.getElementById("personWithLargestBMI");

const Gavin = {
  full_name: "Gavin Coulson",
  mass: "93",
  height: "1.66",
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
Gavin.calcBMI();
console.log(Gavin.BMI);

const James = {
  full_name: "James Something",
  mass: "75",
  height: "1.33",
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

James.calcBMI();
console.log(James.BMI);

const comparison = (obj1, obj2) => {
  if (obj1.BMI < obj2.BMI) {
    displayText.innerText = `${obj2.full_name} wins!`;
  } else {
    displayText.innerText = `${obj1.full_name} wins!`;
  }
};

comparison(Gavin, James);

//can i declare a method outside of the object, or do i have to do it like this always?
