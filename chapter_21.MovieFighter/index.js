const url = 'http://www.omdbapi.com/'

const fetchData = async (searchTerm) => {
  const response = await axios.get(url, {
    params: {
      apikey: 'e50df26a',
      s: searchTerm,
    },
  })

  console.log(response.data)
}

const input = document.querySelector('input')

// Wait until user stop typing and call fetchData (1s)
let timeoutId
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    fetchData(event.target.value)
  }, 1000)
}

input.addEventListener('input', onInput)
