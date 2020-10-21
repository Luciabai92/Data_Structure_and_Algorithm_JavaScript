//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
  let arrayStr = str.split("");
  let reversedStr = [];

  for(let i = 0; i < str.length; i++) {
    reversedStr.push(arrayStr.pop());
  }

  return reversedStr.join("");
}

function reverseStringRecursion(str) {
  if(str === ""){
    return "";
  }
  console.log(str);
  return reverseStringRecursion(str.substr(1))+str.charAt(0);
}

//console.log(reverseStringIteration('yoyo mastery'));
//should return: 'yretsam oyoy'
console.log(reverseStringRecursion('yoyo mastery'));
