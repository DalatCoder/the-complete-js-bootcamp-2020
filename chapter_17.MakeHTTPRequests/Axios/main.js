const url = "https://swapi.dev/api/planets";

axios
  .get(url)
  .then((res) => console.log(res.data))
  .catch((err) => console.log("ERROR! ", err));
