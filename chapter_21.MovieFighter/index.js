const url = 'http://www.omdbapi.com/'

const fetchData = async (searchTerm) => {
  const response = await axios.get(url, {
    params: {
      apikey: 'e50df26a',
      s: searchTerm,
    },
  })

  if (response.data.Error) {
    return []
  }

  return response.data.Search // list of movies
}

const root = document.querySelector('.autocomplete')
root.innerHTML = `
  <label><b>Search For A Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results">

      </div>
    </div>
  </div>
`

const input = document.querySelector('input')
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

const onInput = async (event) => {
  const movies = await fetchData(event.target.value)

  resultsWrapper.innerHTML = ''
  dropdown.classList.add('is-active')
  for (const movie of movies) {
    const option = document.createElement('a')
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster

    option.classList.add('dropdown-item')
    option.innerHTML = `
      <img src="${imgSrc}" alt="${movie.Title + 'photo'}" />
      ${movie.Title} (${movie.Year})
    `

    resultsWrapper.appendChild(option)
  }
}

input.addEventListener('input', debounce(onInput))

/**
 * If user click outside the dropdown then
 * close the dropdown menu
 */
document.addEventListener('click', (event) => {
  if (!root.contains(event.target)) {
    dropdown.classList.remove('is-active')
  }
})
