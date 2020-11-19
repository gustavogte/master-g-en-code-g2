/*
Crea una aplicación web con JavaScript que reciba tres números 
digitados por el usuario, mediante prompts, y muestre en pantalla, 
mediante un alert, cuál es el mayor de los tres números.
*/

numero1 = prompt("Escibe un numero porfavor");
numero2 = prompt("Escibe otro numero porfavor");
numero3 = prompt("Escibe un ultimo numero");

if (
  parseInt(numero1) > parseInt(numero2) &&
  parseInt(numero1) > parseInt(numero3)
) {
  alert(
    `Hola, bienvenid@ a la aplicacion web con JS! el numero ${numero1}, que fue el primer valor que ingresaste, es el mayor de los 3 numeros`
  );
} else if (
  parseInt(numero2) > parseInt(numero1) &&
  parseInt(numero2) > parseInt(numero3)
) {
  alert(
    `Hola, bienvenid@ a la aplicacion web con JS! el numero ${numero2}, que fue el segundo valor que ingresaste, es el mayor de los 3 numeros`
  );
} else if (
  parseInt(numero3) > parseInt(numero1) &&
  parseInt(numero3) > parseInt(numero2)
) {
  alert(
    `Hola, bienvenid@ a la aplicacion web con JS! el numero ${numero3}, que fue el tercer valor que ingresaste, es el mayor de los 3 numeros`
  );
}
