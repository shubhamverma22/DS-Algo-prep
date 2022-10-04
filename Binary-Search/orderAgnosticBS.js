// Order Agnostic Binary Search
/* It means when we doesn't know the array is sorted in which order whether it's in ascending or descending,
Note:- It must be sorted.

So, how you identify the order of array before apply binary Search
Solution:- What's the best 2 numbers to know the sorted order of an array?
Suppose we compare first 2 elements and it might be equal than you case is failed.
So, the best way to know sorted order is always compare 1st and last element of an array

*/

const orderAgnosticBS = ({ sortedArray, key }) => {
    if (!sortedArray.length) {
      return -1;
    }
    let start = 0;
    let end = sortedArray.length - 1;
    const isAsc = sortedArray[start] < sortedArray[end]
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
        if (isAsc) {
            if (key === sortedArray[mid]) {
              return mid;
            } else if (key > sortedArray[mid]) {
              start = mid + 1;
            } else {
              end = mid - 1;
            }
        } else {
            if (key === sortedArray[mid]) {
              return mid;
            } else if (key < sortedArray[mid]) {
              start = mid + 1;
            } else {
              end = mid - 1;
            }
        }
    }
    //key wasn't found
    return -1;
};

sortedArray = [12, 25, 27, 48, 51, 79, 89, 99];
key = 89;
const atIndex = orderAgnosticBS({ sortedArray, key });
console.log(atIndex);