const miFuncion = () => {
  return 'Hola, soy la funcion';
}

/*
  El FOR representa un cuello de botella por ser síncrono
*/

console.log(1);
console.log(2);
for (let i = 0; i < 1000; i++) {
  console.log("For en el indice: ", i);
}
console.log(miFuncion());
/*
  Las cosas asíncronas nos permiten evitar los cuellos de botella
*/

setTimeout(() => { console.log(3) }, 3000);
console.log(4);
console.log(5);


/*
  ¿Cómo funciona la cola de callbacks?
*/


