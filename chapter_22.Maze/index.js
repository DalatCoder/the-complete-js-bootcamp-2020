const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter

const cells = 10
const width = 600
const height = 600
const borderWeight = 5
const edgeWeight = 3

const unitLength = width / cells

const engine = Engine.create()
engine.world.gravity.y = 0
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
  Bodies.rectangle(width / 2, 0, width, borderWeight, { isStatic: true }), // top border
  Bodies.rectangle(width / 2, height, width, borderWeight, { isStatic: true }), // bottom border
  Bodies.rectangle(0, height / 2, borderWeight, height, { isStatic: true }), // left border
  Bodies.rectangle(width, height / 2, borderWeight, height, { isStatic: true }) // right border
]
World.add(world, walls)

// Maze generation || Generate 2 dimensional array with defaul value set to false
const grid = generateGrid(cells, cells)
const verticals = generateGrid(cells, cells - 1)
const horizontals = generateGrid(cells - 1, cells)

const startRow = Math.floor(Math.random() * cells)
const startColumn = Math.floor(Math.random() * cells)

const stepThroughCell = (row, column) => {
  // If i have visited the cell at [row, column], then return
  if (grid[row][column]) {
    return
  }

  // Mark this cell as being visited
  grid[row][column] = true

  // Assemble randomly-ordered list of neighbors
  const neighbors = suffle([
    [row - 1, column, 'up'], // top
    [row + 1, column, 'down'], // bottom
    [row, column - 1, 'left'], // left
    [row, column + 1, 'right'] // right
  ])

  // For each neighbor
  for (const neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor

    // See if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
    ) {
      continue
    }

    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue
    }

    // Remove a wall from either horizontals or verticals
    if (direction === 'left') {
      verticals[row][column - 1] = true
    } else if (direction === 'right') {
      verticals[row][column] = true
    } else if (direction === 'up') {
      horizontals[row - 1][column] = true
    } else if (direction === 'down') {
      horizontals[row][column] = true
    }

    // Visit that next cell
    stepThroughCell(nextRow, nextColumn)
  }
}

stepThroughCell(startRow, startColumn)

horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      edgeWeight,
      {
        isStatic: true
      }
    )
    World.add(world, wall)
  })
})

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return
    }

    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      edgeWeight,
      unitLength,
      {
        isStatic: true
      }
    )
    World.add(world, wall)
  })
})

// Goal
const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * 0.7,
  unitLength * 0.7,
  {
    isStatic: true
  }
)
World.add(world, goal)

// Ball
const ball = Bodies.circle(unitLength / 2, unitLength / 2, unitLength * 0.3)
World.add(world, ball)

// User control
document.addEventListener('keydown', (event) => {
  const { x, y } = ball.velocity
  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - 5 })
  }

  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + 5, y })
  }

  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + 5 })
  }

  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - 5, y })
  }
})
