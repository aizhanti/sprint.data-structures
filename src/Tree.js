class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const newChild = new Tree(value);
    this.children.push(newChild);
    return newChild;
  }

  contains(value) {
    let result = false;

    function findValue(tree) {
      // exit case
      if (tree.value === value) {
        result = true;
        return;
      }
      if (tree.children === []) {
        return;
      }

      //recursion case
      tree.children.forEach((child) => {
        findValue(child);
      });
    }

    findValue(this);
    return result;
  }

  remove(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        if (this.children[i].children !== []) {
          this.children[i].children.forEach((grandChild) => {
            this.addChild(grandChild.value);
          });
        }
        this.children.splice(i, 1);
      }
    }
    return value;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
