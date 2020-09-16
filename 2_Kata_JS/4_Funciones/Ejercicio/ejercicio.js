/*

a) Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números.Recuerda que para devolver el valor de una función se utiliza la palabra reservada return

b) Crea una función llamada subs que reste dos parametros "a" y "b"y regrese su resultado.Recuerda que para devolver el valor de una función se utiliza la palabra reservada return

c) Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad"o es "Menor de edad"

d) Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:   "Positivo" si el número es positivo."Negativo" si el número es negativo."Cero"si el número es cero.

*/

// A)

function sum(a, b) {
  var suma = a - b;
  return "la resta de " + a + " más " + b + " es " + suma;
}
x = sum ("G", "L")
console.log(x);

y = sum(3, 4)
console.log(y);

// B)
function subs(a, b) {
  var resta = a - b;
  return "la resta de " + a + " más " + b + " es " + resta;
}
x = subs("G", "L")
console.log(x);

y = subs(3, 4)
console.log(y);

// C)
function mayorDeEdad(edad) {
  var edad = prompt("¿Cuál es tu edad?");
  if (edad > 18) {
    return "Eres mayor de edad";
} else if (edad < 18) {
    return "Eres menor de edad";
} else {
    alert("Por favor ingresa una edad válida");
    }
  }

// console.log(mayorDeEdad());

// D)
function evaluate (number) {
var number = prompt("Ingrese un número por favor")
  if(Number(number) === 0) {
    return "Su número es cero";
  } else if(number < 0) {
    return "Su número es negativo";
  } else if(number > 0) {
    return "Su número es positivo";
  } else {
    alert("Por favor ingrese un número");
  }
}

console.log(evaluate());

x = 5
console.log(typeof x);

