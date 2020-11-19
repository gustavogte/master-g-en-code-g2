const palindromo = (cadena) => {
  var resultado = "" + cadena + "";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco
  var cadenaSinEspacios = "";
  for (i in letrasEspacios) {
    if (letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  var iguales = true;
  for (i in letras) {
    if (letras[i] == letrasReves[i]) {
      // Todo bien
    } else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }

  if (iguales) {
    resultado += " true";
  } else {
    resultado += " false";
  }

  return resultado;
};
palindromo("Anita lava la tina");
console.log(palindromo("Anita lava la tina"));
console.log(palindromo("perro te quiero"));
