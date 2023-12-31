import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // return data.planets
  //   .filter(function (planet) {
  //     return planet.moons !== undefined;
  //   })
  //   .filter(function (planet) {
  //     return planet.moons.find(function (moon) {
  //       return moon === moonName;
  //     });
  //   })
  //   .map(function (planet) {
  //     return planet.name;
  //   })[0];

  return data.planets
    .filter((planet) => planet.moons)
    .find((planet) => planet.moons.includes(moonName)).name;
  // return data.planets.find(function(planet){
  //   return planet.moons && planet.moons.includes(moonName);
  // }).name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
