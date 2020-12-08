const farenheitToCelsius = (farenheit) => {
  let celsius = (farenheit - 32) * (5 / 9);
  return celsius;
};
console.log(farenheitToCelsius(100));
