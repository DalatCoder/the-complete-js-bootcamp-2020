class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    // .bind return the function changed context of 'this'
    // this.startButton.addEventListener("click", this.start.bind(this));

    this.pauseButton.addEventListener("click", this.pause);
  }

  // Function is call inside class constructor, so the this refer to the instance of class Timer
  start = () => {
    // Run timer immedialy
    this.tick();
    this.intervalId = setInterval(this.tick, 1000);
  };

  // start() {
  //   console.log("Time to start the timer!");
  //   console.log(this);
  // }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      return;
    }

    this.timeRemaining = this.timeRemaining - 1;
  };

  // getTime = () => parseFloat(this.durationInput.value);
  // setTime = (value) => (this.durationInput.value = value);

  // getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  // setter
  set timeRemaining(time) {
    this.durationInput.value = time;
  }

  pause = () => {
    clearInterval(this.intervalId);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
