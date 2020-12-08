//d) Escribe una función llamada evaluate que reciba como parámetro
//un número retorne lo siguiente:
//"Positivo" si el número es positivo.
//"Negativo" si el número es negativo.
//"Cero" si el número es cero.

function evaluate(number) {
  if (number > 0) {
    console.log("Positivo");
  } else if (number < 0) {
    console.log("Negativo");
  } else {
    console.log("Cero");
  }
}
evaluate(90);
