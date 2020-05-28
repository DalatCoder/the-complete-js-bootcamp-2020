// async function getData(url) {
//   const data = await axios.get(url);
//   console.log(data);
// }

// const url = "https://swapi.dev/api/planets";
// getData(url);

// function greet() {
//   return "Hello"
// }

/*
async function greet() {
  return "Hello";
}
// Async function always return promise
// Return value is pass to resolve(data)
greet()
  .then((data) => console.log(`Promise resolved with: ${data}`))
  .catch((err) => console.log(err));

// When throw an exception, that exception was passed into reject
async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("X and Y must be number!");
  }

  return x + y;
}
add(4, 5).then(console.log).catch(console.log);
add("a", "b")
  .then(console.log)
  .catch((err) => console.log(err));

const addPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("A and B must be number!"));
    }

    resolve(a + b);
  });
};

addPromise(3, 4).then(console.log).catch(console.log);
addPromise("a", "b").then(console.log).catch(console.log);
*/

// const getPlanets = () => {
//   return axios.get("https://swapi.dev/api/planets");
// };
// getPlanets()
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log("ERROR!!", err));

// Await pause the async request until it get resolved!!!!!!
async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets");
  console.log(res.data);
}
getPlanets();
