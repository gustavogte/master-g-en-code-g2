// Pure function
const sumaUnoAlNumero = (numero) => numero + 1;
console.log(sumaUnoAlNumero(7));

// Avoid side effect / Esta función esta tomando un efecto secundario
const sumaNumeroRandom = (numero) => numero + Math.random();
console.log(sumaNumeroRandom(7));

var temperatura = 18; // no usar variables globales

// Function composition / callback = operacion no es palabra restringida

const realizaOperacion = (a, b, operacion) => operacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(realizaOperacion(5,3, suma));
console.log(realizaOperacion(10, 7, resta));
console.log(realizaOperacion(5, 5, mult));
console.log(realizaOperacion(5, 5, div));


console.log(suma(5, 3));

// Avoid mutating state
const sensei = {
  nombre: 'Gera',
  programa: 'Master en Coding'
}

sensei.nombre = 'Mali';
console.log(sensei);

// para hacerlo imutable
const sensei2 = Object.freeze({
  nombre: 'Mali',
  programa: 'Master en Coding'
})

sensei2.nombre = 'Maui';
console.log(sensei2);
// Object freeze solo cubre un nivel, si quier que cubra subniveles, tengo que repetirlo



// Solucion funcional para cambio a empleados de sueldo

const empleados = [
  ['Luis Torres', 25000],
  ['Maria Arriga', 42000]
];

const copiaEmpleados = (empleados) => {
  let newEmpleados = new Array();
  empleados.forEach((empleado) => newEmpleados.push(empleado));

  return newEmpleados;
}

const cambiarSalario = (empleados, cantidad) => {
  let copEmpleados = copiaEmpleados(empleados);
  copEmpleados.forEach((empleado) => {
    empleado[1] = empleado [1] + cantidad ;
  });
  return copEmpleados;
}


const empleadosFelices = cambiarSalario(empleados, 10000);

console.log(empleadosFelices);


// -----------------------------------------------------
// Métodos de los Arrays


// forEach recorre el arreglo, devuelve undefined
const paises = ['México', 'Costa Rica', 'Colombia', 'El Salvador', 'Perú'];

let x = paises.forEach((pais, index, array) => {
  console.log('Elemento Actual -> ' + pais);
  console.log('Índice  -> ' + index);
  console.log(array);
  return pais; // undefined
});

const numbers = [1, 5, 10, 15];

const doubles = numbers.forEach((number, index, array) => number * 2);

console.log(doubles);

// map no ayuda a crear un nuevo arregolo

const doubles2 = numbers.map((number, index, array) => number * 2);

console.log(doubles2);

const paisesFiltrados = paises.filter((pais, index, array) => pais.length > 6);

console.log(paisesFiltrados);

// SORT
const frutas = ['kiwi', 'bananas', 'manzanas', 'peras'];

frutasOrdenadas = frutas.sort();

console.log(frutasOrdenadas);


// Reduce

const reducer =(accumulator, currentValue) => accumulator + currentValue;

const sumatoria = numbers.reduce(reducer, 1);
console.log(sumatoria);

// cómo ordenamos números

const numeros = [3, 5, 2, 1, 12, 23, 11, 10];

const numerosOrdenados = numeros.sort((a, b) => a - b);

console.log(numerosOrdenados);


var numbers2 = [4, 20, 5, 10, 3];
numbers2.sort(function (a, b) {
  return a - b;
});
console.log(numbers2);






