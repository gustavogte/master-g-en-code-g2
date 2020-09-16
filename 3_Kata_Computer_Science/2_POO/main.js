/*
Cuando una variable empieza con mayúscula se conoce como Pascal Case
*/

class Animal {
  // Se encarga de Generar /nstancias (Instanciar)
  // Siempre tiene que llamarse constructor (palabra reservada dentro de las clases solamente)
  constructor(nombre, tipo, numPatas) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.numPatas = numPatas;
  }
// métodos
  comer() {
    return `${this.nombre} está comiendo!`;
  }
// getters
  getNombre() {
    return this.nombre;
  }

// setters
  setNombre(newName) {
    return this.nombre = newName;
  }

}

/*
  El orden de los argumentos siempre es importante
*/



// Generar una instancia de Animal, con => new <= creo la instancia y la mando a una variable => const, var o let
const animal = new Animal("Ayudante de Santa", "Perro", 4);

/*
Como este objeto se genera a partir de una clase, se le conoce como INSTANCIA
*/

console.log(animal);

const gato = new Animal("Cleo", "Gato Fuego", 2);

console.log(gato);


/*
  4 Pilares de la Programación Orientada a Objetos:

  1) Abstracción
  2) Encapsulamiento
  3) Herencia
  4) Polimorfismo

*/





