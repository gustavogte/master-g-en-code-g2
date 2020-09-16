// alert('Funciones');
// function ==> Palabra reservada 
// Estamos declarando la función
function myFunction() {
  console.log('My Function');
  return "Master en Coding";
}

// Estamos invocando a la función
myFunction();

function transformaMayus(texto) {
  var resultado = texto.toUpperCase();
  return resultado;
}

var nombre = "Gustavo";
var x = transformaMayus(nombre);
console.log(transformaMayus(nombre));
console.log(x);

// Siempre usa CameCase
// Usa nombres descriptivos
function farenheitToCelsius(f) {
  var celsius = Math.round((f - 32) / 1.8);
  return (f + " grados Farenheit son " + celsius +" en Celsius");
}

console.log(farenheitToCelsius(68));
console.log(farenheitToCelsius(32));
console.log(farenheitToCelsius(212));

// Math.round (es del navegador no javascript)

function celsiusToFarenheit(c) {
  var farenheit = Math.round((c * 1.8) + 32);
  return (c + " grados ceslsius son  en farenheit "+ farenheit);
}

console.log(celsiusToFarenheit(22));

// ---------------------------------------------------------
// Scope => Contexto de ejecución
// Scope Chain, siempre de adentro hacia afuera

// Variable Global
var fruta = "Kiwi";

function comer() {
  var fruta = "Piña";
  return "Estoy comiendo " + fruta;
}

function lavar() {
 // var fruta = "Naranja";
  return "Estoy lavando " + fruta;
}

console.log(comer());
console.log(lavar());
console.log(this); // hace referencia al objeto activo



console.log(fruta);

