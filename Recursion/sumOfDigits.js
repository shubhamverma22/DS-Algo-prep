const sumOfDigits = (n) => {
    if (n == 0) {
        return 0;
    }
    let num = n;
    const lastNum = num % 10;
    num = Math.floor(num / 10);
    return lastNum + sumOfDigits(num);
}

const op = sumOfDigits(1324);
console.log(op);
