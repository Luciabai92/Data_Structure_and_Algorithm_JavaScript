// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

//
function fibonacciIterative(n){ //o(n)
  let list = [0,1];

  for (let i = 2; i <= n; i++) {
    list.push(list[i-1]+list[i-2]);
  }
  return list.pop();
}


function fibonacciRecursive(n) { //o(2^n)
  if(n === 0) return 0;
  if(n === 1) return 1;

  return (fibonacciRecursive(n-1) + fibonacciRecursive(n-2));
}

console.log(fibonacciRecursive(7));
console.log(fibonacciIterative(7));
