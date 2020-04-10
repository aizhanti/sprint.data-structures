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

  removeNode(value) {
    delete this.nodes[value];
  }

  contains(value) {
    if (this.nodes[value]) return true;
    return false;
  }

  addEdge(value1, value2) {
    if (this.nodes[value1] && this.nodes[value2]) {
      this.nodes[value1].push(value2);
      this.nodes[value2].push(value1);
    } else {
      return "Invalid node value";
    }
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
