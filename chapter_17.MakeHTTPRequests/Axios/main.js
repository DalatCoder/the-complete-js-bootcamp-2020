/*
const url = "https://swapi.dev/api/planets";

axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("ERROR! ", err));
*/

axios
  .get("https://swapi.dev/api/planets")
  .then(({ data }) => {
    console.log("The first 10 planets...");
    for (const planet of data.results) {
      console.log(planet.name);
    }

    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log("The next 10 more planets...");
    for (const planet of data.results) {
      console.log(planet.name);
    }

    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log("The next 10 more planets...");
    for (const planet of data.results) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log(`ERROR! ${err}`);
  });
