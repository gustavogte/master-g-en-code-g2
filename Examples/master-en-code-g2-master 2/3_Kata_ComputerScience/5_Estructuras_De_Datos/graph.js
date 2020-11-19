const graphD = [
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
console.log(graphD);

class Node {
  constructor(data) {
    this.data = data;
  }
}
// grafo dirigido
class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }
  addNode(data) {
    // agregar nodo
    const node = new Node(data);
    this.nodes.push(node);
  }
  getNode(data) {
    // conseguir nodo
    // let node;
    if (this.nodes.length === 0) {
      return null;
    }
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].data === data) {
        return this.nodes[i];
      }
    }
    return null;
  }
  addEdge(data1, data2) {
    //agregar arista
    const node1 = this.getNode(data1);
    const node2 = this.getNode(data2);
    const edge = [node1, node2];

    this.edges.push(edge);
  }
  print() {
    //imprimir grafo
    for (let i = 0; i < this.edges.length; i++) {
      console.log(`${this.edges[i][0].data} ------> ${this.edges[i][1].data}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addNode("Federico");
myGraph.addNode("Gera");
myGraph.addEdge("Gera", "Federico");
console.log(myGraph.print());

const myGraphD = new Graph();
myGraphD.addNode(1);
myGraphD.addNode(2);
myGraphD.addNode(3);
myGraphD.addNode(4);
myGraphD.addNode(5);
myGraphD.addEdge(1, 2);
myGraphD.addEdge(1, 3);
myGraphD.addEdge(2, 3);
myGraphD.addEdge(2, 5);
myGraphD.addEdge(3, 4);
myGraphD.addEdge(4, 5);

console.log(myGraphD.print());
