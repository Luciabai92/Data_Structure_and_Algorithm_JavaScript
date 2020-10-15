class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

class myLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode != null) {
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

    newNode.next = preNode.next
    preNode.next = newNode;
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

const linkedList = new myLinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(15,99);
linkedList.printList();
linkedList.remove(1);
linkedList.printList();
