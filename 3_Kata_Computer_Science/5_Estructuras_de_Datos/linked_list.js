// Linked list

// Una lista ligada debe tener una cabecera (head)
// Nos va indicar el inicio de la lista
// El tamaño de la lista (lenght)
// Las listas tienen dos comportamientos esenciales:
// insertar (add)
// borrar (delete)


/*
const lista = {
  head: 'loquesea',
  lenght: 0
}
*/

// El nodo es la informacion del elemento y su apuntador al siguente elemento
class Node {
  constructor(data) {
    // en data guardamos cualquier objeto que queremos
    this.data = data;
    // es quien nos indica el siguiente nodo, por defecto es nulo
    this.next = null;
  }
}

class LinkedList{
  // estas son las propiedades de mi lista
  constructor() {
    this.head = null;
    this.lenght = 0;
  }
  isEmpty() {
    return this.head === null;
  }
  // estos son los métodos o comportamientos de mi lista
  addAtEnd(data) {
    console.log("add " + data);
    const node = new Node(data); // {data: data, next: null }
    if(this.head === null) {
      this.head = node;
    } else { // en este else ya sabemos que existe this.head
      let currentNode = this.head;
      // while: mientras (condicion: se cumpla) {haz esto}
      while(currentNode.next) { // verifico si next tiene un nodo
        currentNode = currentNode.next; // sustituyo el node que vive en next a mi nodo actual
      }
      // cuando next sea nulo, entonces sale del while y continua con el resto del código
      currentNode.next = node;
    }

    this.lenght++;
    console.log("---------------------");
  }
  get(index) {
      // 0, indice mayor
      if(head === null || index > this.lenght) {
        return null;
      } else {
        // 1 -> 2 -> 3
        let counter = 1;
        let currentNode = this.head;
        while( counter !== index) {
          counter++;
          currentNode = currentNode.next;
        }
        return currentNode;
      }

  }
  delete(data) {
      let currentNode = this.head;
      let previousNode = null;
      if (currentNode.data === data) {
        this.head = this.head.next;
      } else {
        while (currentNode.data !== data && currentNode !== null) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode = currentNode.next;
        this.lenght--;
        }

  }
  addAtStart() { // tarea 

  }
}

const listaDeAlumnos = new LinkedList();

listaDeAlumnos.addAtEnd('Cesar');

listaDeAlumnos.addAtEnd('Juan Camilo');
listaDeAlumnos.addAtEnd('Marlon');
listaDeAlumnos.addAtEnd('Ulma');
listaDeAlumnos.addAtEnd('Margarito');


console.log(listaDeAlumnos);

