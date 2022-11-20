// Simple binary Search
// Using Iterative
// Time Complexity: O(logN)
function binarySearch(sortedArray, key) {
  if (!sortedArray.length) {
    return -1;
  }
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (key === sortedArray[mid]) {
      return mid;
    } else if (key > sortedArray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  //key wasn't found
  return -1;
}

const sortedArray = [12, 25, 27, 48, 51, 79, 89, 99];
const key = 51;

const atIndex = binarySearch(sortedArray, key);
console.log(atIndex);

/*
Note:- The time complexity of the Binary Search is O(log2n), where n is the number of elements in the array.
This is far better compared to the Linear Search, which is of time complexity O(n). Like many other search algorithms,
Binary Search is an in-place algorithm. That means that it works directly on the original array without making any copies.

Important:- In Binary Search, start and end keep coming/closer to the anse
*/
