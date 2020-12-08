/*
Objetos
Son un tipo de dato
Nos permiten almacenar cualquier tipo de dato com
 */

var miObjeto = {
  clave: "valor", // propiedad
};

var maui = {
  nombre: "Mauricio Savedra",
  edad: 24,
  esta_vivo: true,
  peliculasFavoritas: [
    "Phantom Thread",
    "Shawshank Redemption",
    "Bernardo y Bianca",
    "Weekend at Bernie's",
  ],
  videojuegosFavoritos: [
    "Super Mario 64",
    "Bioshock",
    "Silent Hill",
    "Resident Evil",
  ],
  42: "la respuesta a la vida",
};

// console.log(maui);

// // Podemos acceder a una propiedad usando el punto
// console.log(maui.edad);
// // imprime en consola solamente a la propiedad de .edad
// console.log(maui.peliculasFavoritas[0]);
// // Para mostrar la lista de todos los videojuegos uno a uno
// for (var i = 0; i < maui.videojuegosFavoritos.length; i++) {
//   var videojuego = maui.videojuegosFavoritos[i];
//   console.log(videojuego);
// }

// // Tambien podemos acceder a una propiedad mediante corchetes
// console.log(maui.nombre);
// console.log(maui["nombre"]);
// console.log(maui.peliculasFavoritas[2]);
// console.log(maui["peliculasFavoritas"][2]);
// // console.log(maui.42) // Aqui no podemos utilizar el punto
// console.log(maui["42"]);

/*
En JavaScript una funcion es un tipo de dato
y todo tipo de dato puede guardarse como variable
o puede guardarse dentro de una propiedad
*/

// Objetos Literales

var persona = {
  nombre: "Gera",
  apellido: "Ludovico",
  edad: 99,
  hobbies: [
    "Chopper",
    "Ir al antro",
    "Ver telenovelas",
    "DJ",
    "Terraplannista",
    "Piloto Comercial",
    "Trabaja en Rappi",
  ],
  nacionalidad: "Astro-Hungaro",
  residencia: "Mordor",
  // Aunque podemos acceder al objeto mediante 'persona.propiedad' esto no es
  // el estandar
  presentar: function () {
    console.log("Mi nombre es " + persona.nombre + " " + persona.apellido);
  },
  //Es mucho mas comun acceder a propiedades del objeto, DENTRO DEL MISMO
  // OBJETO, utilizando una palabra reservada "this"
  capturarPokemones: function () {
    console.log(
      this.apellido +
        " de  " +
        this.edad +
        " anos de edad esta atrapando pokemones"
    );
  },
};

// Si quiero mostrar lo que retorna unn funcion debemos decirle donde mostrarlo
console.log(persona.capturarPokemones());

// podemos guardar una funcion en una variable
var quienSoy = function () {
  console.log("Mi nombre es " + persona.nombre + " " + persona.apellido);
};
// this solo puede utilizarse dentro del contexto de un objeto
var quienSoyDos = function () {
  console.log("Mi nombre es" + this.nombre + " " + this.apellido);
};

// CUANDO UNA FUNCION HABITA DENTRO DE UN OBJETO SE LE LLAMA METODO

// CUANDO UNA FUNCION NO HABITA DENTRO DE UN OBJETO SE LE LLAMA FUNCION

// Como acceder a la propiedad de DJ

// console.log(persona.hobbies[3]);

// Un objeto ya definido puede transformar sus propiedades o podemos
//agregarle o quitarle propiedades

// Aqui no existe la propiedad porque aun no esta definida
console.log(persona.mostrarHobbies);
// Definimos la propiedad
persona.mostrarHobbies = function () {
  for (var i = 0; i < this.hobbies.length; i++) {
    console.log(this.hobbies[i]);
  }
};
// Aqui ya existe la propiedad porque la definimos
console.log(persona.mostrarHobbies());

/*
En JavaScript todo es un objeto
*/

var texto = "Hola! Mi nombre es Maui";
