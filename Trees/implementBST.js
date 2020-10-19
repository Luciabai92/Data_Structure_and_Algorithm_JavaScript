class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while (true) {
        if(value < currentNode.value) {
          //left
          if(currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }else {
            currentNode = currentNode.left;
          }
        }else {
          //right
          if(currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode !== null) {
      if(value === currentNode.value) return currentNode;

      if(value < currentNode.value) {
        //left
        currentNode = currentNode.left;
      }else {
        //rights
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  //remove

}

//traverse
function traverse(node) {
  const tree = {
    value: node.value
  };

  if(node.left === null) {
    tree.left = null;
  } else {
    tree.left = traverse(node.left);
  }

  if(node.right === null) {
    tree.right =  null;
  } else {
    tree.right = traverse(node.right);
  }

  return tree;
}

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.lookup(20))
//     9
//  4     20
//1  6  15  170
