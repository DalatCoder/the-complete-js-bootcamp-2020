document.querySelector('form').addEventListener('submit', (event) => {
  // Prevent browser from auto refresh webpage
  event.preventDefault()

  const input = document.querySelector('#input')
  console.log(input.value)
})
