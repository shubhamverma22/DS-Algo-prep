// 1. Ceiling of a target number

/* Celing- the smallest element in array which is greater than or equal to (>=) target element
for E.g- [2,3,5,9,14,16,18] and target is 14 than the anser is 14.
if target is 15 than answer is 16(smallest element of an array which is greater than 15)

when while loop breaks start = end + 1, next big number, when no ans found = start element(Ans)

*/

//Return the index of smalled no >= target
function ceiling(sortedArray, targetElem) {
  let start = 0;
  let end = sortedArray.length - 1;
  // when the target is greater than the greatest number of the array
  if (targetElem > sortedArray[end]) {
    return -1;
  }
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (targetElem < sortedArray[mid]) {
      end = mid - 1;
    } else if (targetElem > sortedArray[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return start;
}

// 2. Floor of a Number

/* Floor - greatest number that is smaller or equal to the target number.
for E.g- [2,3,5,9,14,16,18] floor of 15 -> 14

When loop is voilated end is the answer
just return end, instead of -1, if no number is found
*/

function flooring(sortedArray, targetElem) {
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (targetElem > sortedArray[mid]) {
      start = mid + 1;
    } else if (targetElem < sortedArray[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return end;
}

const sortedArray = [2, 3, 5, 9, 14, 16, 18];
const targetElem = 15;
const ceilingIndex = ceiling(sortedArray, targetElem);
const flooringIndex = flooring(sortedArray, targetElem);

// 3. Find Smallest letter greater than target

/*
letters = ["c", "f", "j"], target = "a" o/p- "c"
if target = "z" and letters=["a", "b", "c"], the answer is "a".

Note:- Condition is violated when start = end + 1 ==> length of the array (N)
if start = end + 1 or length of the array the modulo start%N = 0 which mean it comes to 0th position
*/

function nextGreaterLetter(letterArray, targetWord) {
  let start = 0;
  let end = sortedArray.length - 1;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (targetWord > letterArray[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log('start', start);
  return letterArray[start % letterArray.length];
}
const letterArray = ['c', 'f', 'j'];
const targetWord = 'a';

const nextGreaterWord = nextGreaterLetter(letterArray, targetWord);

// 4. First and last position of target element                 Most Important

/*
nums = [5,7,7,7,7,7,8,8,10] , target = 7
output- [1,5]

nums = [5,7,7,7,7,7,8,8,10] , target = 6
output- [-1, -1]
*/