// Declarar funciones
function myFunction() {
  console.log("MyFunction");
  return "Master en coding";
}
// Invocar funcion
// myFunction();

// TO UPPERCASE
function transformaMayus(texto) {
  var resultado = texto.toUpperCase();
  return resultado;
}
var nombre = "Gera";
var x = transformaMayus(nombre);
// console.log(transformaMayus(nombre));
// console.log(x);

// FARENHEIT A CELSIUS
function farenheitToCelsius(f, city) {
  var celsius = Math.round((f - 32) / 1.8);
  var resultado = "En " + city + " la temperatura es " + celsius + " grados";
  return resultado;
}
// console.log(farenheitToCelsius(90, "Guadalajara"));
// console.log(farenheitToCelsius(100, "Cozumel"));
// console.log(farenheitToCelsius(32, "Chihuahua"));
// console.log(farenheitToCelsius(80, "Veracruz"));
// console.log(farenheitToCelsius(68, "Queretaro"));

//SCOPE => Contexto de ejecucion

// Variable global
// SCOPE CHAIN => va de adentro a hacia afuera
var fruta = "Kiwi";

function comer() {
  var fruta = "Pina";
  return "Estoy comiendo " + fruta;
}

function lavar() {
  var fruta = "Sandia";
  if (true) {
    var fruta = "Moras";
  }
  return "Estoy lavando una " + fruta;
}

console.log(comer());
console.log(lavar());

/*



*/
