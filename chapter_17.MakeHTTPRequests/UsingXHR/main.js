/*
const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("First request work!");
  const res = JSON.parse(this.responseText);
  // console.log(res);

  const planets = res.results.map((data) => {
    const el = document.createElement("p");
    el.innerText = data.name;
    return el;
  });

  for (let planet of planets) {
    document.body.appendChild(planet);
  }

  filmURL = res.results[0].films[0];
  const filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener("load", function () {
    console.log("Second request work!");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmRequest.addEventListener("error", function (e) {
    console.log("Error! ", e);
  });
  filmRequest.open("GET", filmURL);
  filmRequest.send();
});
firstReq.addEventListener("error", function () {
  console.log("ERROR!");
});
firstReq.open("GET", "https://swapi.dev/api/planets");

firstReq.send();
console.log("Request send!");
*/

fetch("https://swapi.dev/api/planets")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status Code Error: ${res.satus}`);
    }

    console.log("Fetch all planets");
    return res.json();
  })
  .then((data) => {
    if (!data) {
      throw new Error("There was not data!");
    }

    console.log(data);
    for (const planet of data.results) {
      console.log(planet.name);
    }

    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status Code Error: ${res.satus}`);
    }

    console.log("Fetch movies of the first planet");
    return res.json();
  })
  .then((data) => {
    console.log(data.title);
  })
  .catch((err) => {
    console.log("ERROR! ", err);
  });
