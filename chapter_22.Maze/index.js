const { Engine, Render, Runner, World, Bodies } = Matter

const width = 600
const height = 600
const edgeWeight = 40

const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.querySelector('.container'),
  engine,
  options: {
    width,
    height
  }
})
Render.run(render)
Runner.run(Runner.create(), engine)

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, edgeWeight, { isStatic: true }), // top border
  Bodies.rectangle(width / 2, height, width, edgeWeight, { isStatic: true }), // bottom border
  Bodies.rectangle(0, height / 2, edgeWeight, height, { isStatic: true }), // left border
  Bodies.rectangle(width, height / 2, edgeWeight, height, { isStatic: true }) // right border
]
World.add(world, walls)

// Maze generation || Generate 2 dimensional array with defaul value set to false
const grid = Array(3)
  .fill(null)
  .map(() => Array(3).fill(false))

console.log(grid)
