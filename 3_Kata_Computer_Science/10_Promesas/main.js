// alert('hola');

// cumpleaños de Armando es del 8 de diciembre
// Le ofrecen un celular
// si tienen dinero

// Normalmente cuando las promesas no se cumplen vienen con una razón (pretexto)

// En forma de constante
const promesaCumple = new Promise((resolve, reject) => {
  const dinero = Math.floor(Math.random() * 1000);
  console.log('Esperando el cumple de Armando ....')

  setTimeout(() => 
    dinero >= 500
      ? resolve('Felíz Cumpleaños tu Cel') // true 
      : reject('No junté el dinero :(') // false 
    , 3000)
})

console.log(promesaCumple);

promesaCumple
  .then(result => console.log(result))
  .catch(error => console.log(error));

// En forma de funcion
const MyFunction = () => {
    return new Promise((resolve, reject) => {
      console.log('Esperando el cumple de Armando ....')

      setTimeout(() =>
        dinero >= 500 ?
        resolve('Felíz Cumpleaños tu Cel') // true 
            :
            reject('No junté el dinero :(') // false 
            , 3000)
  return 1