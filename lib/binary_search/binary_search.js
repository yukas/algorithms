// Implementation of a binary search algorithm

function binarySearch(arr, num) {
  if (arr == null) { throw "No array given"; }

  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while(lowIndex <= highIndex) {
    let middleIndex = Math.floor(lowIndex + highIndex) / 2;
    let middleValue = arr[middleIndex];

    if (num === middleValue) {
      return middleValue;
    }

    if (num < middleValue) {
      highIndex = middleIndex - 1;
    } else {
      lowIndex = middleIndex + 1;
    }
  }

  return null;
}

export default binarySearch;
