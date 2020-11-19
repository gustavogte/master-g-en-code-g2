/* 
// Variables
// Entradas
// Salidas
// Tipos de Datos
*/

/*
// Estructuras de Control - Condiciones
*/
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// if () { }

/* ARGUMENTOS 
1) iterador -> variable de control -> iniciar
2) Condicion de iteracion (Rango)
3) Como modificamos a la variable de control (incremento)
*/

// for (var i = 0; i < 5; i++) {
//   console.log("Hola a todos"); // Iteracion - Ciclo del Bucle - Vuelta - Repeticion
//   console.log(i);
// }

// Imprimir los numeros del 1 al 10 en consola
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Como puedo mostrar solamente los valores pares
/*
// mediante el modulo
for (i = 1; i <= 10; i++) {
  // el numero al dividirlo entre dos, me da como residuo 0?
  if (i % 2 === 0) {
    // Si me da cero, entonces lo muestro (porque es par)
    console.log(i);
    // si no me da cero, entonces no lo muestro
  }
}

// mediante i+=2
for (i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

/* ARREGLOS - ARRAY
LISTAS
Conjunto de datos ordenados
*/

var arreglo = [
  1, // Posicion 0
  2, // Posicion 1
  3, // Posicion 2
  4, // Posicion 3
  5, // Posicion 4
];
/*
console.log(arreglo);
console.log(arreglo[3]);
console.log(arreglo.length);
console.log(typeof arreglo);
*/

// Lista de multiples tipos de datos
// lo conveniente es manejar siempre un mismo tipo de dato

var listaBiblioteca = ["Jose Emilio Pacheco", 37, false];

// console.log(listaBiblioteca);
// console.log(listaBiblioteca.length);

var frutas = [
  "mango",
  "uva",
  "kiwi",
  "platano",
  "carambola",
  "tamarindo",
  "durazno",
  "nispero",
  "lichi",
  "lulo",
  "granada",
];

// Hard coded - estatica
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);

// codigo dinamico
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
