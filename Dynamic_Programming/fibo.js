// Fibonaci of a number

const fibo = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};

const n = 7;
const fiboNum = fibo(n);
console.log(fiboNum);

// In above example when we pass larger value to n than the execution will stuck, because presently the tree calls for every recursive values are calling repeatedly,
// Time complexity is O(2 ^ n)

// Now to avoid repeated recursive calls we have to do memoization i.e store a n in a key value pair so if the stored value call comes it will fetch from the obj.

const fibonacci = (n, memo = {}) => {
    if (n <= 2) return 1;
    if (n in memo) return memo[n];
    //just store the return value in a { key value } pair in memo obj
    memo[n] = fibonacci(n -1, memo) + fibonacci(n-2, memo);
    // console.log('memo', memo);
    return memo[n];
}

const fibMemo = fibonacci(n);
console.log('fibMemo', fibMemo);