//alert("hola");

// let y const
const programa = {
  nombre: " Master en coding",
  sensei: "Malinali",
};
let edad = 25;

programa.sensei = "Maui";
edad = 26;
console.log(programa);
console.log(edad);

// ---------------------------------------------------
// Spread Operator

function master(programa, ...senseis) {
  console.log("Bienvenidos al programa" + programa);
  console.log(senseis);
}
master(" Master en coding", "Mali", "Maui", "Gera");

// Cuando invocamos a la funciona

function suma(x, y, z) {
  console.log(x + y + z);
}
const numeros = [1, 2, 3, 4];
suma(...numeros);

// ---------------------------------------------------------
// String Template

function master(programa, ...senseis) {
  console.log(`Bienvenid@ a ${programa}`);
  console.log(`Senseis: ${senseis[0]}, ${senseis[1]}, y  ${senseis[2]}`);
}
master("Master en Coding", "Mali", "😳", "Maui", "Gera");

// ----------------------------------------------------------
// Uso de Clases
class Persona {}

// --------------------------------------------------------
// Arrow function

function suma3(a, b) {
  return a + b;
}

console.log(suma3(1, 2));

// ES6

const suma2 = (a, b) => a + b;
// Cuando solamente tenemos un parametro
const cuadrado = (x) => x * x;
console.log(cuadrado(5));
console.log(suma2(1, 3));
