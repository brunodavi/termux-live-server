function sum(...nums) {
  let num = 0;
  for (n of nums) {
    num += n;
  }
  return num
}

console.log("Only Test");
console.log(sum(1, 2, 3, 4, 5));
