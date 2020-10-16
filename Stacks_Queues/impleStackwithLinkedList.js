class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    }else {
      const tempPointer = this.top;
      this.top = newNode;
      this.top.next = tempPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    //check if null
    if(!this.top) {
      return null;
    }

    //check if last
    if(this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--

    return this;
  }

  isEmpty() {
    if(this.length === 0){
      return true;
    }else{
      return false;
    }
  }

}

const myStack = new Stack();
myStack.push('udemy');
myStack.push('google');
console.log(myStack.push('happy'))
console.log(myStack.pop());
