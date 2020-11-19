// TODO: Implementacion de la cola.
class Queque {
  constructor() {
    this.collection = [];
  }
  enqueue(item) {
    // encolar o agregar a la cola()
    this.collection.push(item);
    return this.collection.length;
  }
  dequeque() {
    // sacar primer elemento de la cola
    return this.collection.shift();
  }
  length() {
    // tamano de la cola
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0; // esta vacia la cola
  }
  front() {
    // traer el peek o primer elemento
    return this.collection[0];
  }
}
// TODO: ver ejemplos de una cola.

const filaDeAsesorias = new Queque();
// cuando arregle mis asesorias
filaDeAsesorias.enqueue("Federico");
filaDeAsesorias.enqueue("Gera");
filaDeAsesorias.enqueue("Cesar");
filaDeAsesorias.enqueue("Keneth");
// Aqui estoy esperando a que entren a la llamada, pero quien es el primero?

setInterval(function () {
  if (!filaDeAsesorias.isEmpty()) {
    console.log("Esperando a ", filaDeAsesorias.front());
    console.log("Atendiendo a ", filaDeAsesorias.dequeque());
    console.log("Cuantos quedan por atender", filaDeAsesorias.length());
  } else {
    console.log("recepcion");
  }
}, 2000);
