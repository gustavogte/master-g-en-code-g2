// Número Armstrong
// Generar un algoritmo que reciba un número entero y determine
//si este es un número Armstrong(Un número Armstrong:
//Aquel número que es la suma de cada uno de sus mismos
//dígitos elevado al número total de dígitos.
//     Ejemplo:
//     153
//     1³+5³+3³
//     1 + 125 + 27

// var xArmstrong = 153;
// console.log(typeof xArmstrong);

// function stringXArmstrong() {
//   var newStr = xArmstrong.toString();
//   return newStr;
// }
// console.log(stringXArmstrong);
// console.log(typeof stringXArmstrong);
// console.log(stringXArmstrong());
// console.log(stringXArmstrong()[0]);
// console.log(stringXArmstrong()[1]);
// console.log(stringXArmstrong()[2]);

// function testArmstrong() {
//   console.log(stringXArmstrong().length);
//   for (i = 0; i < stringXArmstrong().length; i++) {
//     console.log(stringXArmstrong()[i]);
//     var stringX1 = stringXArmstrong()[i];
//     var result = stringX1 * stringX1 * stringX1;
//     console.log(typeof result + result);
//     resultStr = result.toString();
//     console.log(resultStr);
//   }
//   return result;
// }
// testArmstrong();

function armstrong(data) {
  // imprime los argumentos que recibe la funcion
  console.log(data);
  // imprime el tipo de dato que recibe como parametros
  console.log(typeof data);
  // convierte el parametro en string
  newStr = data.toString();
  // imprime la nueva variable
  console.log(newStr);
  // imprime el tipo de dato
  console.log(typeof newStr);
  // imprime la longitud del dato
  console.log(newStr.length);

  for (
    var i = 1;
    i < 10;
    ++i // la primera posicion [i] puede tomar cualquier valor entre 1 y 9
  ) {
    for (
      var j = 0;
      j < 10;
      ++j // la segunda posicion[j] puede tomar cualquier valor entre 1 y 9
    ) {
      for (
        var k = 0;
        k < 10;
        ++k // la tercera posicion [k] puede tomar cualquier valor entre 1 y 9
      ) {
        // elevar
        var pow =
          // crea una variable [i] que haga exponente cada numero por el .length
          Math.pow(i, newStr.length) +
          // crea una variable [j] que haga exponente cada numero por el .length
          Math.pow(j, newStr.length) +
          // crea una variable [k] que haga exponente cada numero por el .length
          Math.pow(k, newStr.length);
        // la primera posicion [i] puede ocupar 3 lugares (000),
        // la segunda posicion[j] puede ocupar 2 lugares(00),
        // y la tercera posicion[k] puede solamente ocupar un espacio(0)
        var plus = i * 100 + j * 10 + k;
        // si la variable pow y la variable plus son iguales
        if (pow == plus) {
          // es un numero armstrong
          console.log("Este numero es armstrong " + pow);
        } //else {
        //   console.log("Este numero no es armstrong");
        //}
      }
    }
  }
}
armstrong(128);
