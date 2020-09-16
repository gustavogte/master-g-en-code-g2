var comida = [
  "Enchiladas",
  "Taco",
  "Tamal",
  "Pozole",
  "Barbacoa",
  "Guacamole",
  "Quesadillas de Papa",
];

//console.log(comida);

console.log("(1)" + "Todos");
console.log(" ");
for (var i = 0; i < comida.length; i++) {
  console.log((i+1) + " " + comida[i]);
};

console.log(" ");
console.log("(2)" + "solo pozole y barbacoa");
console.log(" ");
for (var i = 0; i < comida.length; i++) {
  if ( comida[i]==="Pozole" || comida[i]==="Barbacoa") 
    console.log((i + 1) + " " + comida[i]);
};
console.log(" ");

console.log("(3)" + "solo impares");
console.log(" ");
//console.log(comida.length);
for (var i = 0; i <= comida.length; i++) {
    if ( (i) % 2 !== 0)
      console.log((i) + " " + comida[i - 1]);
};
console.log(" ");

console.log("(4)" + "solo pares");
console.log(" ");
for (var i = 0; i < comida.length - 1; i += 2 ) {
        console.log((i + 2 ) + " " + comida[i + 1]);
};



