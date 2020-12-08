// const promesa = new Promise((resolve, reject) => {
//   resolve("Yujuy!")
// });
// console.log(promesa);

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => {
    number > 5
    ? resolve(number)
    : reject(new Error("Menor que 5 👹"));
  }, 1000)
});

numberPromise
  .then(number => console.log(number)) 
  .catch(error => console.log(error));


