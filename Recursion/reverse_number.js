// Reverse number
//logic:-
const reverseNumber = (n) => {
  if (!n) {
    return 0;
  }
  if (n < 10) {
    console.log(n);
    return n;
  }
  const lastDigit = n % 10;
  console.log(lastDigit);
  const reduceNum = Math.floor(n / 10);
  reverseNumber(reduceNum);
};

reverseNumber(1356);


//1st way:-
let sum = 0;
const reverse1 = (num) => {
    if (num == 0) {
      return;
    }
    const rem = num % 10;
    sum = sum * 10 + rem;
    reverse1(Math.floor(num/10));
}

reverse1(428);
console.log(sum);