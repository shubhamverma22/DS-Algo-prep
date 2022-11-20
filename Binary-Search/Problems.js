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
  return letterArray[start % letterArray.length];
}
const letterArray = ['c', 'f', 'j'];
const targetWord = 'a';

const nextGreaterWord = nextGreaterLetter(letterArray, targetWord);

// 4. First and last position of target element                 Most Important

/*
Brute Force --> take 2 pointers 1st from beggining of the array and 2nd is from end of the array if we find the target element than return the index
nums = [5,7,7,7,7,7,8,8,10] , target = 7
output- [1,5]

nums = [5,7,7,7,7,7,8,8,10] , target = 6
output- [-1, -1]
*/

function searchIndex(numsArr, searchedElem, findStartIndex) {
  let ans = -1;
  let start = 0;
  let end = numsArr.length -1;
  while(start<=end) {
    let mid = start +  Math.floor((end-start) /2);
    if(searchedElem > numsArr[mid]) {
      start = mid +1;
    }
    else if(searchedElem < numsArr[mid]) {
      end = mid -1;
    }
    else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
}

function firstAndLastPosition(numsArr, searchedElem) {
  let ansArr = [-1, -1];
  // check for 1st occurence i.e 1st position
  const startElem = searchIndex(numsArr, searchedElem, true);
  // check for last occurence i.e last position
  const endElem = searchIndex(numsArr, searchedElem, false);
  ansArr[0] = startElem;
  ansArr[1] = endElem;
  return ansArr;
}

const numsArr = [5, 7, 7, 7, 7, 7, 8, 8, 10];
const searchedElem = 7;

const elemLiedIndexArray = firstAndLastPosition(numsArr, searchedElem);


// 5. Find Position of an element in a sorted array of infinite numbers
/*
We dont allow to find the length of the array becoz it's an infinte array, So, we mimic chunks of the array by assuming the end
Note:- while my target element is greater than than end ==> keep doubling it
*/

function binarySearch(infSortedArr, targetElem, start, end) {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (targetElem > infSortedArr[mid]) {
      start = mid + 1;
    } else if (targetElem < infSortedArr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
}

function getIndexElementOfInfinteArray(infSortedArr, targetElem) {
  let start = 0;
  let end = 1;
  while(targetElem >  [end]) {
    let tempStart = end + 1;
    end = end + Math.floor((end - start + 1)) * 2;
    start = tempStart;
  }
  return binarySearch(infSortedArr, targetElem, start, end);
}

const infSortedArr = [2, 3, 5, 7, 9, 10, 12, 15, 17, 18, 22, 25, 30];

const indexElementOfInfintiArray = getIndexElementOfInfinteArray(infSortedArr, targetElem);


//6. Peak Index in Mountain Array
/*
E.g- [0,1,0] --> o/p: 1
e.g [0,2,1,0] --> o/p: 1
e.g [0,10,5,2] --> o/p: 1
*/

function getPeakIndexOfMountain(mountainArr) {
  let start = 0;
  let end = mountainArr.length -1;
  while(start < end) {
    let mid = start + Math.floor((end-start) / 2);
    if (mountainArr[mid] > mountainArr[mid + 1]) {
      // you are in decreasing part of an array
      // this may be the ans but look at left
      end = mid;
    } else if (mountainArr[mid] < mountainArr[mid + 1]) {
      // you are in asc part of an array
      start = mid + 1;
    }
  }
  // In the end, start == end and pointing to the largest number becoz of the above 2 checks
  // start and end are always trying to find max element in the above 2 checks
  // hence, when they are pointing to just one element, that's the max one
  return start; // or return end as both are equal.
}
const mountainArr = [0,10,5,2];

const PeakIndexOfMountain = getPeakIndexOfMountain(mountainArr);
console.log('PeakIndexOfMountain', PeakIndexOfMountain);

// 7. Search an element in a sorted and rotated Array
/*
Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
Output : Found at index 8

Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
Output : Not found

Input : arr[] = {30, 40, 50, 10, 20}, key = 10
Output : Found at index 3

Approach:-
1. first find pivot element i.e laregest number of the sorted array
*/

function findPivot(rotatedArray) {
  let start = 0;
  let end = rotatedArray.length - 1;
  while(start <= end) {
    // we covered all 4 cases here
    let mid = start + Math.floor((end-start)/2);
    //1. mid is greater with just next elem
    if(mid < end && rotatedArray[mid] > rotatedArray[mid + 1]) {
      return mid;
    }
    //2. mid is smaller than the previous elem.
    else if (mid > start && rotatedArray[mid] < rotatedArray[mid -1]) {
      return mid - 1;
    }
    // 3. if my mid is <= start
    else if(rotatedArray[mid] <= rotatedArray[start]) {
      end = mid -1;
    }
    //4. if my mid is
    else {
      start = mid + 1;
    }
  }
  return -1;
}

function getElementFromSortedRotatedArray(rotatedArray, elemKey) {
  let pivot = findPivot(rotatedArray);
  if (pivot === -1) {
    // do normal binary search
  }
  if (rotatedArray[pivot] === elemKey) {
    return pivot;
  }
  
}

rotatedArray = [5, 6, 7, 8, 9, 10, 1, 2, 3];
elemKey = 3

const elementFromSortedRotatedArray = getElementFromSortedRotatedArray(rotatedArray, elemKey);