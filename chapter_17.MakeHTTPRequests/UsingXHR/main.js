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
