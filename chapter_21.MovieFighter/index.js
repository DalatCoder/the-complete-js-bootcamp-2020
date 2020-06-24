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

input.addEventListener('input', (event) => {
  fetchData(event.target.value)
})
