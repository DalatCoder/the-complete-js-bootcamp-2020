/*
const url = "https://swapi.dev/api/planets";

axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("ERROR! ", err));
*/

const fetchNextPlanets = (url = "https://swapi.dev/api/planets") => {
  return axios.get(url);
};

const printPlanets = ({ data }) => {
  console.log(data);
  for (const planet of data.results) {
    console.log(planet.name);
  }

  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(`ERROR! ${err}`);
  });
