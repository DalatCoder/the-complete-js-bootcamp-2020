var a;
var fn = function (a, b) {
  return a + b;
};
// this refer to an object, which is the current execution context

console.log(this);

function sayHi() {
  console.log("Hi");

  const sayHi1 = () => {
    console.log("Hi1");
    console.log(this);
  };
  sayHi1();
}

sayHi();

const person = {
  fName: "Hieu",
  lName: "Nguyen",
  fullname() {
    console.log(this);
  },
  testThis1() {
    var a = 1;
    const test = () => console.log(this);
    test();
  },
};

person.fullname();
person.testThis1();

// The value of this depends on the invocation context of the function it is used in

const annoyer = {
  phrases: ["Yolo", "He", "Ha", "Hi"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    // Store a refer to current object
    const that = this;
    setInterval(function () {
      // console.log(this.pickPhrase()) => error, because this refer to global object
      console.log(that.pickPhrase());
    }, 1000);
  },
  start1() {
    // Arrow function doesn't have its own this
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};

// annoyer.start();
annoyer.start1();
annoyer.stop();
