//create a function that reverses a string;

function reverse(str) {
  //check input
  if(!str || str.length == 0 || typeof str != 'string') {
    return 'error!';
  }

  const backwardStr = [];
  const totalItems = str.length-1;
  for(let i = totalItems; i >= 0; i--) {
    backwardStr.push(str[i]);
  }
  return backwardStr.toString();
}

function reverse2(str) {
  return str.split('').reverse().toString();
}

const reverse3 = str => str.split('').reverse().toString();

console.log(reverse('Hello World!'));
console.log(reverse2('Hello World!'));
console.log(reverse3('Hello World!'));
