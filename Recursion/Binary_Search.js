// Binary Search using Recursion
// Using Recursive
// Time Complexity: O(logN)
function binarySearch(sortedArray, key, start, end) {

  // base conditions
  if (!sortedArray.length) {
    return false;
  }

  if (start > end) {
    return false;
  }

  // body of the function

  let mid = Math.floor((start + end) / 2);
  // Compare mid with given key x
  if (sortedArray[mid] == key) {
    return true;
  }
  // If element at mid is greater than x,
  // search in the left half of mid
  if (sortedArray[mid] > key) {
    return binarySearch(sortedArray, key, start, mid - 1);
  }
  // If element at mid is smaller than x,
  // search in the right half of mid
  if (sortedArray[mid] < key) {
    return binarySearch(sortedArray, key, mid + 1, end);
  }
}

const sortedArray = [12, 25, 27, 48, 51, 79, 89, 99];
const key = 51;
let start = 0;
let end = sortedArray.length - 1;

const atIndex = binarySearch(sortedArray, key, start, end);
console.log(atIndex);
