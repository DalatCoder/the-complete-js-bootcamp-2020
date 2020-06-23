const durationInput = document.getElementById('duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let currentOffset = 0
const step = perimeter / ((durationInput.value * 1) / 0.05)

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started!')
  },
  onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset)
    currentOffset -= step
  },
  onComplete() {
    console.log('Timer is completed')
  },
})
