/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.last = [];
  this.first = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.last.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  popLen = this.first.length;
  pushLen = this.last.length;

  if(popLen === 0) {
    if(pushLen === 0) {
      return null;
    } else {
      for (let i=pushLen-1; i >= 0; i--) {
        this.first.push(this.last.pop());
      }
    }
  }
  console.log(this.first);

  return this.first.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  popLen = this.first.length;
  pushLen = this.last.length;

  if(this.empty()) return null;

  if(popLen === 0) {
    return this.last[0];
  } else {
    return this.first[popLen-1];
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  popLen = this.first.length;
  pushLen = this.last.length;

  if(popLen === 0 && pushLen=== 0) {
    return true;
  } else{
    return false;
  }
};


var obj = new MyQueue()
obj.push(10)
obj.push(11)
obj.push(12)

var param_3 = obj.peek()
console.log(param_3);

var param_2 = obj.pop()
console.log(param_2);
console.log(obj);

var param_3 = obj.peek()
console.log(param_3);

var param_4 = obj.empty()
