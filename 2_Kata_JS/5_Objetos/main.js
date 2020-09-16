// alert('Funciona!!!!')

/*
  Objetos

  Son un tipo de Datos
  Nos permite almacenar cualquier tipos de dato
*/

var miObjeto = {
  // Es un conjunto de claves o valores
  clave: 'valor' // propiedades
};

var maui = {
  nombre: 'Maurcio Saavedra',
  edad: 24,
  estavivo: true,
  peliculasFavoritas: [
    "Phantom Thread",
    "Shawshank Redemption",
    "Bernardo y Bianca",
    "Weekend at Bernies"
  ],
  videjuegosFavoritos: [
    "Super Mario Bros",
    "Bioshock",
    "Silent Hill",
    "Resident Evil"
  ],
  42: 'La respuesta a la vida' // no es recomendable
}

// Podemos acceder al valor de una propiedad mediante el punto 

// console.log(maui);
// console.log(maui.peliculasFavoritas[0]);

// Para mostrar la lista detodos los videojuegos uno a uno

// for (var i=0; i<maui.videjuegosFavoritos.length; i++) {
// var videojuego = maui.videjuegosFavoritos[i];
//  console.log(videojuego);
// }

// También podemos acceder a la propiedad mediante corchetes

// console.log(maui.nombre);
// console.log(maui['nombre']);

// console.log(maui.peliculasFavoritas[2]);
// console.log(maui['peliculasFavoritas'][2]);
// console.log(maui.42); // Aquí no podemos utilizar el punto

// console.log(maui['42']);

/*
  En JavaScript, una función es un tipo de dato y todo tipo de dato puede guardarse como variable o puede guardarse dentro de una propiedad 
*/

// Objetos literales
var persona = {
  nombre: 'Gera',
  apellido: 'Ludovico',
  edad: 99,
  hobbies: [
    'Chopper',
    'Ir al antro',
    'Ver telenovelas',
    'DJ',
    'Piloto',
    'Trabaja en Rappi'
  ],
  nacionalidad: 'AstroHungaro',
  residencia: 'Mordor',

  // Aunque podemos acceder al objeto mediante 'persona.propiedad' esto no es el estadar
  presentar: function () {
      console.log("Mi nombre es " + persona.nombre + " " + persona.apellido);
  },
  // Es mucho más común acceder a propiedades del Objeto, DENTRO DEL MISMO OBJETO, utilizando la palabra reservada "this"
  capturarPokemones: function () {
    return this.apellido + " de " + this.edad + " años de edad está atrapando pokemones"
  },
};

// Si quiero mostrar lo que retorna una funcion debo decir donde mostrarlo

//console.log(persona.capturarPokemones());


// Podemos guardar una función en una variable
var quienSoy = function(){
  console.log("Mi nombre es " + persona.nombre + " " + persona.apellido);
  return null;
};

// El this solo se puede utilizar dentro de un objeto
var quienSoyDos = function () {
  console.log("Mi nombre es " + this.nombre + " " + this.apellido);
  return null;
};


// Sino doy un return en una función por defecto retorna => undefined

/*
  CUANDO UNA FUNCION HABITA DENTRO DE UN OBJETO, 
  SE LLAMA "METODO"

  CUANDO UNA FUNCION NO HABITA DENTOR DE UN OBJETO, SIMPLEMENTE SE LLAMA "FUNCION"
*/

// ¿Cómo acceder al Hobby DJ dentro del objeto persona ?

// console.log(
//   persona.hobbies[3]
// );

// Un objeto ya definido puede transformar sus propiedades o podemes agregarle o quitarle propiedades

// Aquí no existe porque la propiedad aún no esta definida ...
//console.log(persona.mostrarHobbies);

// Definimos la propiedad
persona.mostrarHobbies = function() {
  for (var i = 0; i < this.hobbies.length; i++) {
    console.log(this.hobbies[i]);
  }
};

// Aquí ya existe la propiedad porque la definimos 
// console.log(persona.mostrarHobbies);

/*
  En JavaScript .... ¡Todo es un objeto!
*/

var texto = "¡Hola! mi nombre es Maui";

// no es bueno modificar el lenguaje original de JavaScript
