/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "../exercises/e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  //Get all the years into an array
  let yearArray = data.asteroids.map(function (asteroid) {
    return asteroid.discoveryYear;
  });

  //Get all the years mapped to the number of times it appears in the asteroids list
  let yearsMap = yearArray.reduce(function (acc, curr) {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});

  //max => start as one of the years in the yearArray and iterate over each year
  //check the year from yearArray in the yearsMap, if the value is greater
  //return that year, otherwise return the max
  return yearArray.reduce(function (max, year) {
    if (yearsMap[year] > yearsMap[max]) {
      return year;
    } else {
      return max;
    }
  }, yearArray[0]);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
