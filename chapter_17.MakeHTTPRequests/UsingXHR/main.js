const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  const res = JSON.parse(this.responseText);
  console.log(res);

  const planets = res.results.map((data) => {
    const el = document.createElement("p");
    el.innerText = data.name;
    return el;
  });

  for (let planet of planets) {
    document.body.appendChild(planet);
  }
});
firstReq.addEventListener("error", function () {
  console.log("ERROR!");
});
firstReq.open("GET", "https://swapi.dev/api/planets");

firstReq.send();
console.log("Request send!");
