const greeting = (name) => `Hola${name}, bienvenido al ecma6`;

// forma que leé Babel o ecma2015 o ecma6
export default greeting
// forma que leé node o common JS
// module.exports = greeting;


/* // saludo.js
const greeting2 = (name) => `Hola${name}, bienvenido al ecma6`;


module.exports = {
  message: "Hola",
  greeting2
};

// destruccturación
const objeto = { a: 8, b: 3};
const { a } = objeto;


// index.js                                 "./saludo.js"
const {message, greeting2} = require('ruta/del/archivo');
message // "Hola"
greeting2 // name => `Hola${name}, bienvenido al ecma6`;
// commonJS
 */
