class Human {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

const gavin = new Human("Gavin");
gavin.sayName();

class Baby extends Human {
  constructor(name) {
    super(name);
  }
  Gaga() {
    console.log(`gaga, ${this.name} is a baby`);
  }
}

const hayden = new Baby("Hayden");

hayden.Gaga();
