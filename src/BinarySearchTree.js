class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  insert(value) {
    function findPosition(tree) {
      if (value < tree.value && tree.left) {
        findPosition(tree.left);
      } else if (value < tree.value && !tree.left) {
        tree.left = new BinarySearchTree(value);
        return;
      } else if (value > tree.value && tree.right) {
        findPosition(tree.right);
      } else if (value > tree.value && !tree.right) {
        tree.right = new BinarySearchTree(value);
        return;
      }
    }
    findPosition(this);
    return this;
  }

  contains(value) {
    let result = false;

    function findElement(tree) {
      if (value === tree.value) {
        result = true;
        return;
      }
      if (!tree.left && !tree.right) {
        return;
      } else if (value < tree.value) {
        findElement(tree.left);
      } else if (value > tree.value) {
        findElement(tree.right);
      }
    }
    findElement(this);
    return result;
  }
}

module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
