// Given an array of numbers, sorted in ascending order.
// Find the ceiling of a given number “key”.
// The ceiling of the key will be the smallest element in the given array,
// greater than or equal to the key

export default function findCeiling(arr, num) {
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  let ceilingNumber = null;

  while(lowIndex <= highIndex) {
    let middleIndex = Math.floor(lowIndex + highIndex) / 2;
    let middleValue = arr[middleIndex];

    if (num == middleValue) {
      return middleValue;
    }

    if ((ceilingNumber == null && middleValue > num) ||
        (middleValue > num && middleValue < ceilingNumber)) {
      ceilingNumber = middleValue;
    }

    if (num < middleValue) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return ceilingNumber;
}
