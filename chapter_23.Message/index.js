const { hash } = window.location
if (hash) {
  const message = atob(hash.replace('#', ''))

  document.querySelector('#message-form').classList.add('hide')
  const showForm = document.querySelector('#message-show')

  showForm.classList.remove('hide')
  showForm.querySelector('h1').innerText = message
}

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
