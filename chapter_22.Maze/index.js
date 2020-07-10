const { Engine, Render, Runner, World, Bodies } = Matter

const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.body,
  engine,
  options: {
    width: 800,
    height: 600
  }
})
Render.run(render)
Runner.run(Runner.create(), engine)

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }), // top border
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }), // bottom border
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }), // left border
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }) // right border
]
World.add(world, walls)

const shape = Bodies.rectangle(200, 200, 50, 50)
World.add(world, shape)
