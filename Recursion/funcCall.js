// Print n from 1 to 5 and 5 to 1

const fun = (n) => {
  if (n == 0) {
    return;
  }
  fun(n - 1);
  console.log(n); //  [1,2,3,4,5]
};

const funnRev = (n) => {
  if (n == 0) {
    return;
  }
  console.log(n); //    [5,4,3,2,1]
  funnRev(n - 1);
};

fun(5);
funnRev(5);
