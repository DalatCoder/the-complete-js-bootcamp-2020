const url = "http://www.omdbapi.com/";

const fetchData = async () => {
  const response = await axios.get(url, {
    params: {
      apikey: "e50df26a",
      i: "tt4154756",
    },
  });

  console.log(response.data);
};

fetchData();
