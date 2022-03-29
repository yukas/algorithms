// Given an array of numbers sorted in ascending order.
// Find the element in the array that has the minimum difference with the given key.

function closestNumber(arr, num) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  let closest;

  while (lowIndex <= highIndex) {
    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let middleValue = arr[middleIndex];

    if (num == middleValue) {
      return middleValue;
    }

    if (!closest) {
      closest = middleValue;
    }

    if (Math.abs(middleValue - num) < Math.abs(closest - num)) {
      closest = middleValue;
    }

    if (num < middleValue) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return closest;
}

export default closestNumber;
