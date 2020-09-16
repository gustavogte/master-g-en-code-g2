// Write a short program that writes
// For each multiple of 3  "Fizz" instead of the number
// For each multiple of 5  "Buzz" instead of the number
// For each multiple of 3 and 5  "FizzBuzz" instead of the number


//     i = 1 ; 1 <= 100; i = 2
//     i = 2 ; 2 <= 100; i = 3
//     ...
//     i = 101 ; 101 <= 100;


for (var i = 1; i <=100; i++) {
  if (i % 3 === 0 && i % 5 === 0 ) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}