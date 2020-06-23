class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton
    // callbacks is optional argument
    if (callbacks) {
      this.onStart = callbacks.onStart
      this.onTick = callbacks.onTick
      this.onComplete = callbacks.onComplete
    }

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
    if (this.onStart) {
      this.onStart()
    }

    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  pause = () => {
    clearInterval(this.interval)
  }

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause()
      if (this.onComplete) {
        this.onComplete()
      }
      return
    }

    this.timeRemaining = this.timeRemaining - 1
    if (this.onTick) {
      this.onTick()
    }
  }
}
