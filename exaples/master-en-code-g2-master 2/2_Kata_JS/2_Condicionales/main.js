// // var mover = true; // Asignacion
// //var deberiaMoverse = false;
// //console.log(mover == true);
// var deberiaMoverse = false; // Definicion
// var mover;
// mover = prompt("Se mueve?"); // siempre me devuelve un string

// // 1era opcion: "true" == "true"
// if (mover == "true") {
//   // si la condicion se cumple
//   deberiaMoverse = prompt("Deberia?");
//   if (deberiaMoverse == "true") {
//     console.log("Arreglado");
//   } else {
//     console.log("Usa cinta de secuestrar gente");
//     console.log("Arreglado");
//   }
// } else if (mover == "false") {
//   deberiaMoverse = prompt("Deberia?");
//   if (deberiaMoverse == "true") {
//     console.log("Usar desengrasante que parece pegamento");
//     console.log("Arreglado");
//   } else {
//     console.log("Arreglado");
//   }
// } else {
//   console.log("El valor no es uno de los permitidos");
// }
// // si la condicion no se cumple
// //volver a preguntar

var edad = 10;
if (edad < 60 && edad >= 18) {
  console.log("Puedes entrar");
} else if (edad <= 15) {
  console.log("Voy a llamar a tus padres");
} else if (edad > 18 && edad > 59) {
  console.log("No se puede por COVID");
} else {
  console.log("No puede entrar");
}

/*
=============================================
      EJERCICIOS
=============================================
===========
    1
===========
Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

1. Crear jugador 1
2. Crear jugador 2
3. Crear variables:
    1.1 var piedra
    1.2 var papel
    1.3 var tijeras
4. Definir variables
    4.1 piedra > tijeras
    4.2 papel > piedra
    4.3 tijeras > papel
5. 

===========
    2
===========
Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.
Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.
=====
    3
=====
Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.
*/
