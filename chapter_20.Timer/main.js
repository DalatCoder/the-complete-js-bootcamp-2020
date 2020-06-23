class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  get timeRemaining() {
    return parseInt(this.durationInput.value)
  }
  set timeRemaining(value) {
    this.durationInput.value = value
  }

  start = () => {
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    this.timeRemaining = this.timeRemaining - 1
  }
}

const durationInput = document.getElementById('duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')

const timer = new Timer(durationInput, startButton, pauseButton)
