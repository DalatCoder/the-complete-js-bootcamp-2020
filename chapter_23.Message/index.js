document.querySelector('form').addEventListener('submit', (event) => {
  // Prevent browser from auto refresh webpage
  event.preventDefault()

  // Hide message form
  document.querySelector('#message-form').classList.add('hide')
  // Make link form appear
  document.querySelector('#link-form').classList.remove('hide')

  const input = document.querySelector('#message-input')
  const encrypted = btoa(input.value)

  const linkInput = document.querySelector('#link-input')
  linkInput.value = `${window.location}#${encrypted}`
  linkInput.select()
})
