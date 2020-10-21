// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
//5!=5*4!

//o(n)
function findFactorialRecursive(number) {
  if(number === 0) return 1;

  answer = number * findFactorialRecursive(number-1);
  return answer;
}

//o(n)
function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer = i * answer;
  }
  return answer;
}


console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
