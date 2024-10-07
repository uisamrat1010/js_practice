// 3rd largest value from array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumof = arr.reduce((acc, curr, index) => {
  //   console.log("acc-" + acc);
  //   console.log("curr-" + curr);
  //   console.log("ind-" + index);
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

console.log(sumof);
