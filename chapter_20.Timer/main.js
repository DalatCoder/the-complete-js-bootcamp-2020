class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // this.startButton.addEventListener("click", this.start);
    // .bind return the function changed context of 'this'
    this.startButton.addEventListener("click", this.start.bind(this));
  }

  // Function is call inside class constructor, so the this refer to the instance of class Timer
  // start = () => {
  //   console.log("Time to start the timer!");
  //   console.log(this);
  // };

  start() {
    console.log("Time to start the timer!");
    console.log(this);
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
