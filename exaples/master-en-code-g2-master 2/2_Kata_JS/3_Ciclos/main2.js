/*
Ciclos FOR

Crea un arreglo que contenga los siguientes platillos:

1) Enchiladas - Posicion 0 - par
2) Taco - Posicion 1 - impar
3) Tamal - Posicion 2 - par
4) Pozole - Posicion 3 - impar
5) Barbacoa - Posicion 4 par
6) Guacamole - Posicion 5 - impar
7) Quesadillas de Papa - Posicion 6 - par


Mediante un ciclo FOR, muestra todos los platillos(recuerda la propiedad length)
Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.
Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.
Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.

*/

var arregloComida = [
  "Enchiladas",
  "Tacos",
  "Tamal",
  "Pozole",
  "Barbacoa",
  "Guacamole",
  "Quesadilla de Papa",
];

// Mediante un ciclo FOR, muestra todos los platillos(recuerda la propiedad length)
for (i = 0; i < arregloComida.length; i++) {
  console.log(arregloComida[i]);
}

// Mediante ciclo FOR y condicional IF, muestra solo el pozole y la barbacoa.

for (i = 0; i < arregloComida.length; i++) {
  if (arregloComida[i] === "Barbacoa" || arregloComida[i] === "Pozole") {
    console.log(arregloComida[i]);
  }
}

// Mediante ciclo FOR y condicional IF, muestra solo los elementos impares.

for (i = 0; i < arregloComida.length; i++) {
  if (i % 2 !== 0) {
    console.log(arregloComida[i]);
  }
}

// Mediante únicamente un ciclo FOR, muestra los elementos que sean pares.

for (i = 0; i < arregloComida.length; i++) {
  if (i % 2 === 0) {
    console.log(arregloComida[i]);
  }
}
