// TODO: Ver ejemplos de un pila.
/* let llaves_de_apertura = 4
let llaves_de_cierre = 3

{
    (
    
    ) {
        {
            {
                
            }
            {
                
            }
        }
        ()
    }; */

const pila = [];

// PUSH: agregar elementos al final
/*console.log(pila.push("Federico"));
console.log(pila.push("Alfredo"));
console.log(pila.push("Alexis"));



console.log(pila);
console.log(pila.pop());
console.log(pila.pop());
console.log(pila.pop());
console.log(pila);*/
const text = `{}`;
// for (const i=0; i<text.length; i++)
// letter = text[i];
// Estan balanceados los parentesis en text?
let balance = true;
for (const letter of text) {
  if (letter === "{") {
    pila.push(letter);
  } else if (letter === "}") {
    if (pila.length === 0) balance = false;
    pila.pop();
  }
}

pila.length === 0 && balance === true
  ? console.log("Todo esta balanceado")
  : console.log(`No esta balanceada mi pila`);

// TODO: Implementacion de la pila.

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(nuevoElemento) {
    // push va a agregar elementos
    // this.storage.nombre = 'Rayos';
    // this.storage['nombre'] = 'Rayos';
    // const propiedad = 'nombre';
    // this.storage[propiedad] = 'Rayos';
    console.log("count", this.count);
    this.count++;
    this.storage[this.count] = nuevoElemento;

    return this.count;
  }

  pop() {
    // pop te trae el ultimo elemento que agregaste y lo elimina
    if (this.count === 0) {
      return null;
    }
    const deleteElement = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return deleteElement;
  }
  length() {
    // tamano
    return this.count;
  }
  peek() {
    // peek solamente trae el ultimo elemento que se agrego
    return this.storage[this.count - 1];
  }
}
