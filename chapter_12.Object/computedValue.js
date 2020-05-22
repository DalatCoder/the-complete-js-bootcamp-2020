const user = "Hieu";

const userRoles = {
  [user]: "Admin",
};

console.log(userRoles);

// We can use a variable as a key name in an object literal property

// In older version of JS
// const userRoles = {}
// userRoles[user] = "Admin";

// function addProp(obj, key, value) {
//   const copy = { ...obj };
//   copy[key] = value;
//   return copy;
// }

// With computed property syntax
function addProp(obj, key, value) {
  return { ...obj, [key]: value };
}

const addProp2 = (obj, key, value) => ({ ...obj, [key]: value });

console.log(addProp2(userRoles, "Ha", "Admin"));
