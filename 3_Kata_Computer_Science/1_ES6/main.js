// Let y Const

const programa = {
  nombre: "Master en Coding",
  sensei: "Mali"
}

let edad = 25;

programa.sensei = "Maui";
edad = 26;

console.log(programa);
console.log(edad);

// ----------------------------------------------
// Spread Operator

// Cuando definimos a la Función
function master(programa, ...senseis) {
  console.log("Bienvenido al programa " + programa);
  console.log(senseis);
}

master("Master en Coding", "Mali", "Maui", "Gera");

// Cuando invocamos a nuestra función
function suma(x, y, z) {
  console.log(x + y + z);
}

const numeros =[1, 2, 3];

suma(1, 2, 3);
suma(...numeros);

// ----------------------------------------------
// String Template

function master2(programa, ...senseis) {
  console.log(`Bienvenida a ${programa}`);
  console.log(`Senseis: ${senseis[0]}, ${senseis[1]}, ${senseis[2]}`);
}

master2("Master en Coding", "Mali", "Maui", "Gera", "Gustavo");

// ----------------------------------------------
// Arrow Funcions

// Arrow manera tradicional
function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2));

// ES6
const resta = (a, b) => a - b;

console.log(resta(2, 1));

const cuadrado = (x) => x * x;

console.log(cuadrado(5));

// Cuando solo tenemos un parámetro, puedo ahorrarme los paréntesis
const cuadrado2 = x => x * x;

console.log(cuadrado2(5));

