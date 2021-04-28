class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 3
class Labrador extends Dog {
  //constructor includes parent params as well as new child params here
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}
const gavin = new Labrador("Gavin", "70");

console.log(gavin);
