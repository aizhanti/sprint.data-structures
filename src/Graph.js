class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
  }

  removeElement(array, element) {
    // O(n)
    const index = array.indexOf(element); //O(n)
    array.splice(index, 1); // O(n)
  }

  removeNode(value) {
    //O(n^3) T_T
    delete this.nodes[value];

    Object.keys(this.nodes).forEach((key) => {
      //O(n)
      if (this.nodes[key].includes(value)) {
        //O(n)
        this.removeElement(this.nodes[key], value); //O(n)
      }
    });
  }

  contains(value) {
    if (this.nodes[value]) return true;
    return false;
  }

  addEdge(value1, value2) {
    if (this.nodes[value1] && this.nodes[value2]) {
      if (!this.nodes[value1].includes(value2)) {
        this.nodes[value1].push(value2);
        this.nodes[value2].push(value1);
      }
    } else {
      return "Invalid node value";
    }
  }

  removeEdge(value1, value2) {
    if (this.nodes[value1].includes(value2)) {
      this.removeElement(this.nodes[value1], value2);
      this.removeElement(this.nodes[value2], value1);
    }
  }

  hasEdge(value1, value2) {
    if (this.nodes[value1].includes(value2)) return true;
    return false;
  }
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Graph;
