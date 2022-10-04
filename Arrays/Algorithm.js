// Kadane’s Algorithm : Maximum Subarray Sum in an Array

/*
Kadane's Algorithm
In this approach, you're checking what the maximum subarray at each element is.
Kadane's Algorithm says that the maximum subarray at each element is either the current element itself,
or the current element plus the maximum subarray ending at the previous element.
Complexity:- O(n)

let's say you were given the input array of [2, 1, -2, 3, 2]. Subarrays include [2], [2, 1], [2, 1, -2], and so on.

Link - https://dev.to/alisabaj/kadane-s-algorithm-the-maximum-subarray-problem-c31

Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4]

Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.
*/

function kadanesAlgo(arr) {
  let currentMax = arr[0];
  let globalMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  console.log(globalMax);
  return globalMax;
}
const arr = [2, 1, -2, 3, 2];
const arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
kadanesAlgo(arr2);

// Brute Force:-
// har ek element ko saare aage wale elements sai compare krro i.e i, j loop

const findMaxSumSubArray = (arr2) => {
  let subArrayIndexes = [];
  let maxSum = Number.MIN_VALUE;
  const N = arr2.length;
  if (N === 1) {
    return arr2[0];
  }
  for (let i = 0; i < N; i++) {
    for (j = i; j < N; j++) {
        let sum = 0;
        for (let k=i; k<=j; k++){
            sum = sum + arr2[k];
            if (sum >maxSum) {
                subArrayIndexes = [];
                maxSum = sum;
                subArrayIndexes.push(i);
                subArrayIndexes.push(j);
            }
        }
    }
  }
  return { maxSum, subArrayIndexes };
};

const maxSumSubArray =  findMaxSumSubArray(arr2);
console.log(maxSumSubArray);
