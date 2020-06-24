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
/*
  Deboucing an input
  Waiting for some time to pass after the last event
  to actually do something
*/
const debounce = (func, delay = 1000) => {
  let timeoutId

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

const onInput = (event) => {
  fetchData(event.target.value)
}

input.addEventListener('input', debounce(onInput))
