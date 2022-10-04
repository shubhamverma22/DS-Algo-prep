/*1.  Find the Largest element in an array

Example 1:
Input: arr[] = {2,5,1,3,0};
Output: 5
Explanation: 5 is the largest element in the array.
*/

// Solution1: Sorting O(n log n)
// Solution2: Using a max variable O(n)

const getLargestElementOfArray = (arr1) => {
  let maxElem = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > maxElem) {
      maxElem = arr1[i];
    }
  }
  return maxElem;
};

const arr1 = [2, 5, 1, 3, 0, 7];
getLargestElementOfArray(arr1);

/*2. Find Second Smallest and Second Largest Element in an array

Example 1:
Input: [1,2,4,7,7,5]
Output: Second Smallest : 2
	Second Largest : 5
Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2
*/

const getSecondLargestAndSmallestElement = (arr2) => {
  let smallest = Number.MAX_SAFE_INTEGER;
  let largest = Number.MIN_SAFE_INTEGER;
  let second_Smallest = Number.MAX_SAFE_INTEGER;
  let second_Largest = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr2.length; i++) {
    largest = Math.max(arr2[i], largest);
    smallest = Math.min(arr2[i], smallest);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < second_Smallest && arr2[i] != smallest) {
      second_Smallest = arr2[i];
    }
    if (arr2[i] > second_Largest && arr2[i] != largest) {
      second_Largest = arr2[i];
    }
  }
  console.log('second_Smallest::-', second_Smallest);
  console.log('second_Largest::-', second_Largest);
  return { second_Smallest, second_Largest };
};

const arr2 = [1, 2, 4, 7, 7, 5];
getSecondLargestAndSmallestElement(arr2);

/* 3. Check if an Array is Sorted

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.
*/

// Time Complexity: O(N)
const checkArrayIsSorted = (arr3) => {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < arr3[i - 1]) {
      return false;
    }
  }
  return true;
};

const arr3 = [1, 2, 4, 7, 7, 5];
const isSorted = checkArrayIsSorted(arr3);
console.log(isSorted);

/* 4. Remove Duplicates in-place from Sorted Array (Array should be sorted)

Example 1:
Input: arr[1,1,2,2,2,3,3]
Output: arr[1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Solution 1. Using Set
Solution 2. Using 2 pointer:-
  2 pointer lenege (i,j) initially i = 0, j = 1,
  i k aage wali saari values check hongi  jab tak arr[i] != arr[j] nhii hota,
  if (arr[i] != arr[j]) => too just next value ko arr[i] ki hum replace krr denge arr[j] sai
  iss approach sai original array modify ho jata h saari unique values aage aa jati h.
*/

// Time Complexity O(n)

function getUniqueElementsArraySize(arr4) {
  let i = 0;
  for (let j = 1; j < arr4.length; j++) {
    if (arr4[i] != arr4[j]) {
      i++;
      arr4[i] = arr4[j];
    }
  }
  return i + 1;
}

const getUniqueElementsArray = (arr4) => {
  const k = getUniqueElementsArraySize(arr4);
  for (let i = 0; i < k; i++) {
    console.log(arr4[i]);
  }
  const uniqueElementsArray = arr4.slice(0, k);
  console.log(uniqueElementsArray);
  return uniqueElementsArray;
};

const arr4 = [1, 1, 2, 2, 2, 3, 3];
getUniqueElementsArray(arr4);

/*5. Left Rotate the Array by One

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation:
Since all the elements in array will be shifted
toward left by one so ‘2’ will now become the
first index and and ‘1’ which was present at
first index will be shifted at last.

Sol1. Brute force
Sol2.
*/

// Sol1. (Brute Force)  time complexity O(n), Space Complexity O(n)
const rotateArrayLeftByOne = (arr5) => {
  const tempArr = [];
  for (let i = 1; i < arr5.length; i++) {
    tempArr[i - 1] = arr5[i];
  }
  tempArr[arr5.length - 1] = arr5[0];
  console.log(tempArr);
  return tempArr;
};
// Sol2. By using Swapping
const rotateArrayLeftByOneUsingSwapping = (arr5) => {
  let temp = arr5[0];
  for (let i = 0; i < arr5.length; i++) {
    arr5[i] = arr5[i + 1];
  }
  arr5[arr5.length - 1] = temp;
  console.log('arr5:--', arr5);
  return arr5;
};

const arr5 = [1, 2, 3, 4, 5];
rotateArrayLeftByOne(arr5);
rotateArrayLeftByOneUsingSwapping(arr5);

/* 6. Rotate array by K elements                                            (Important)

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .
*/

// Approach 1: Using a temp array
const rotateArrayToRight = (arr6, k) => {
  let tempArr = [];
  const n = arr6.length;
  for (let i = n - k; i < n; i++) {
    tempArr[i - n + k] = arr6[i];
  }
  // Good eg of looping
  for (let i = n - k - 1; i >= 0; i--) {
    // i = 3,2,1
    arr6[i + k] = arr6[i]; // i+k = n
  }
  for (let i = 0; i < k; i++) {
    arr6[i] = tempArr[i];
  }
  console.log('rotateArrayToRight', arr6);
};

// Approach 2: Using ” Reversal Algorithm “

const rotateArrayToRightWusingReversal = (arr6, k) => {
  const n = arr6.length;
  let i = 0;
  while (i < k) {
    let temp = arr6[i];
    arr6[i] = arr6[n - k - i];
    arr6[n - k - i] = temp;
    i++;
  }
  console.log(arr6);
};
const arr6 = [3, 7, 8, 9, 10, 11];
const k = 2; // rotate elements by k
// rotateArrayToRight(arr6, k);
rotateArrayToRightWusingReversal(arr6, k);

/* 7. Move all Zeros to the end of the array

Example 1:
Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining orde
*/

// Solution 1: Brute Force Time complexity: o(n)
const moveAllZersoToEndOfArray = (arr7) => {
  const n = arr7.length;
  const tempArr = [];
  let k = 0;
  for (let i = 0; i < n; i++) {
    if (arr7[i] !== 0) {
      tempArr[k] = arr7[i];
      k++;
    }
  }
  while (k < n) {
    tempArr[k] = 0;
    k++;
  }
  console.log(tempArr);
};
const arr7 = [1, 0, 2, 3, 0, 4, 0, 1];
moveAllZersoToEndOfArray(arr7);

//Solution 2: Optimal Approach (By Swaping)
//.....

/* 8. Union of Two Sorted Arrays

Problem Statement: Given two sorted arrays, arr1 and arr2 of size n and m. Find the union of two sorted arrays.

Example 1:
Input:
n = 5,m = 5.
arr1[] = {1,2,3,4,5}
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}
*/

const unionOfTwoSortedArray = (sorted1, sorted2) => {
  const sumedUp = sorted1.concat(sorted2);
  const uniqueElements = new Set(sumedUp);
  console.log(uniqueElements);
};

const sorted1 = [1, 2, 3, 4, 5];
const sorted2 = [2, 3, 4, 4, 5];
unionOfTwoSortedArray(sorted1, sorted2);

/* 9. Intersection of two sorted arrays

Problem Statement: Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

Example 1:
Input:
A: [1 2 3 3 4 5 6]
, B: [3 3 5]
Output: 3,3,5
Explanation: We are given two arrays A and B.
The elements present in both the arrays
are 3,3 and 5.

*/

const getIntersectionOfTwoArrays = (interSect1, interSect2) => {};
const interSect1 = [1, 2, 3, 3, 4, 5, 6];
const interSect2 = [3, 3, 5, 9];

getIntersectionOfTwoArrays(interSect1, interSect2);

// Subarray with Given Sum                                                  (Important)
/*
Example 1:
Input:
 arr = {1, 7, 3, 9}, k = 10

Output: 7 3
Explanation:
 Of all the subarrays, 7 and 3 sums to 10.
*/

const getSubArrayByGivenSum = ({ arr8, givenSum }) => {
  const N = arr8.length;
  const subArr = [];
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum += arr8[j];
      if (sum == k) {
        for (let p = i; p <= j; p++) {
          subArr.push(arr8[p]);
        }
      }
    }
  }
  console.log('subArr', subArr);
  return subArr;
};

const arr8 = [2, 1, 3, 4, 5, 6];
const givenSum = 10;

getSubArrayByGivenSum({ arr8, givenSum });
