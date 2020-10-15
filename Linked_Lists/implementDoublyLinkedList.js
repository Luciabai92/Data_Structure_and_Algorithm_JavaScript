class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class myDoublyLinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printLinkedList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    //check input
    if(index >= this.length) {
      return this.append(value);
    }

    if(index === 0) {
      this.prepend(value);
      return this;
    }

    const preNode = this.traversToIndex(index);
    const newNode = new Node(value);

    newNode.next = preNode.next;
    preNode.next.prev = newNode;
    preNode.next = newNode;
    newNode.prev = preNode;
    this.length++;
    return this;
  }

  remove(index) {
    //check input
    if(index >= this.length) {
      return this;
    }

    if(index === 0) {
      this.head = this.head.next;
      return this;
    }

    const preNode = this.traversToIndex(index);

    preNode.next = preNode.next.next;
    preNode.next.prev = preNode;
    this.length--;
  }

traversToIndex(index) {
    let preNode = this.head;
    while (index-1 !== 0) {
      preNode = preNode.next;
      index--;
    }
    return preNode;
  }

}

const doublyLinkedList = new myDoublyLinkedList(10);
doublyLinkedList.append(5);
doublyLinkedList.append(16);
doublyLinkedList.prepend(1);
doublyLinkedList.insert(1,15);
doublyLinkedList.remove(0 );
doublyLinkedList.printLinkedList()
