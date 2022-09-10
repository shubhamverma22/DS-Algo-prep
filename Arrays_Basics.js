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

function getUniqueElementsArraySize (arr4) {
  let i = 0;
  for (let j=1; j<arr4.length; j++) {
    if (arr4[i] != arr4[j]) {
      i++;
      arr4[i] = arr4[j];
    }
  }
  return i + 1;
}

const getUniqueElementsArray = (arr4) => {
  const k = getUniqueElementsArraySize(arr4);
  for(let i=0; i<k; i++) {
    console.log(arr4[i]);
  }
  const uniqueElementsArray = arr4.slice(0, k);
  console.log(uniqueElementsArray);
  return uniqueElementsArray;
}

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
  for (let i=1; i<arr5.length; i++) {
    tempArr[i-1] = arr5[i];
  }
  tempArr[arr5.length - 1] = arr5[0];
  console.log(tempArr);
  return tempArr;
};
// Sol2. By using Swapping
const rotateArrayLeftByOneUsingSwapping = (arr5) => {
  let temp = arr5[0];
  for(let i = 0; i< arr5.length; i++) {
    arr5[i] = arr5[i+1];
  }
  arr5[arr5.length - 1] = temp;
  console.log('arr5:--', arr5);
  return arr5
}

const arr5 = [1,2,3,4,5];
rotateArrayLeftByOne(arr5);
rotateArrayLeftByOneUsingSwapping(arr5);



