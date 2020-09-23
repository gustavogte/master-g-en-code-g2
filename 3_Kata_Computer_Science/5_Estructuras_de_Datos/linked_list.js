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
  // estos son los métodos o comportamientos de mi lista
  add(data) {
    const node = new Node(data); // {data: data, next: null }
    this.head = node;
    this.lenght++;
  }
}







