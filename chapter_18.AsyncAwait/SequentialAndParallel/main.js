/*
Get 3 pokemons in sequence
async function get3Pokemons() {
  const { data: poke1 } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  const { data: poke2 } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/2"
  );

  const { data: poke3 } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/3"
  );

  console.log(poke1.name);
  console.log(poke2.name);
  console.log(poke3.name);
}
*/

/*
Get 3 pokemons in parallel
async function get3Pokemons() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");

  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");

  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  const poke1 = await promise2;
  const poke2 = await promise3;
  const poke3 = await promise1;

  console.log(poke1.data.name);
  console.log(poke2.data.name);
  console.log(poke3.data.name);
}
*/

/*
get3Pokemons().catch((err) => {
  console.log(`ERROR! ${err}`);
});
*/
