// Elemento que va a conformar el árbol
class Node {
  constructor (data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


// Definición del árbol
class Tree {
  constructor(){
    this.root = null;
  }
  // Un árbol va a tener como métodos principales:
  // agregar -> addd : se encarga de agregar un dato
  // contiene -> contains : verificar si el nodo existe respecto a un dato
  add(data){
    // verificar si root esta vacia : this.root
    if(!this.root){
      // si está vacio
        // crear nuevo nodo (data, null, null) new Node(data, null, null)
        this.root = new Node(data, null, null)
        return;
    }
      // no esta vacia
    let curreNode = this.root;
    let node = new Node(data, null, null);

    while(true){
      if(data < currentNode.data) {
        if(currentNode.left !==null) {
            currentNode = curreNode.left;
        } else{
            currentNode.left = new Node(data, null,null);
            return;
        }
      }else {
          if(curreNode.right !== null) {
            currentNode = curreNode.right;

          } else {
            curreNode.right = new Node(data, null, null);
            return;
          }
      } 
  }        
}
          // crear un apuntador (current node) a mi raíz
          // currentNode = this.root
          // agregar un ciclo mientras cada nodo sea un subarbol
          // si la data de mi nuevo nodo < data en mi nodo actual
              // revisar si el nodo izquierdo está vacio
                  // si esta vacio -> mi nodo actual le asigno a la izquierda el nuevo nodo
          // si la data del nuevo nodo es > o =  que mi nodo actual(currentNode)
            //  si el nodo derecho está vacio
              // agregar nuevo nodo
            // cambiar nuestro nodo actual (currentNode) por el hijo derecho del nodo actual(c urrentNode)
}  
// Infinity (búsco un número infinito que no esta en el árbol)
  contains(data) {
    let current = this.root;
    // asignar a current node el head
    while(current !== null) {
      return true;
    } else {

    }
} 
    
    // let currentNode = this.root;
    // mientras current node exista:
        // si data es igual con curreNode.data
            // devolver verdadero (true)
        // si mi data no es igual
            // si mi dato es menor currentnode.data
                // asignar mi apuntador a la izquierda
                // currentNode igual a currentNode.left
            // si mi dato no es menor
                // asignar mi apuntador a la derecha
                // currentNode igual a currentNode.right
    // devolver falso porque no existe el nodo en el árbol


const arbol = new Tree();

arbol.add(12);
arbol.add(55);
arbol.add(23);
arbol.add(13);

console.log(arbol);

