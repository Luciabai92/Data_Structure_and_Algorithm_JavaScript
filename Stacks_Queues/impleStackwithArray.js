class Stack {
  constructor(){
    this.array = [];
  }

  peek() {
    return this.array[this.array[length-1]];
  }

  push(value) {
    return this.array.push(value);;
  }

  pop() {
    this.array.pop()
    return this;
  }

}

const myStack = new Stack();
myStack.push('udemy');
console.log(myStack.push('google'));
// myStack.push('google');
// console.log(myStack.push('happy'))
// console.log(myStack.pop());
