//0,1,1,2,3,5,8,13,21,34,55

//time complexity: o(2^n)
//space: o(height of tree)
// function fibonacci(n) {
//   if(n<2) return n;
//
//   return fibonacci(n-1) + fibonacci(n-2);
// }
//
//
// console.log(fibonacci(6))

//dynamic programming
//time complexity: o(n)
//space complexity: o(n)
//let calculation = 0;
function fibonacciDynamic() {
  let cache = {};

  return function fib(n) {
    //calculation++;
    if(n in cache) {
      return cache[n];
    } else {
      if(n<2) return n;
      return cache[n] = fib(n-1) + fib(n-2);
    }
  }
}

const fibonacci = fibonacciDynamic();
console.log(fibonacci(10))
//console.log(calculation);


function fibonacci2(n) {
  let result = [0,1];
  for(let i=2; i<=n; i++) {
    result.push(result[i-2]+result[i-1]);
  }
  return result.pop();
}
console.log(fibonacci2(10))
