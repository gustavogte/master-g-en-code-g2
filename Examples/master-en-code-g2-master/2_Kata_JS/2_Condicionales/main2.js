var j1 = "papel";
var j2 = "piedra";

console.log(j1 === j2);

// Hardcode

j1 = prompt("J1 - Elije tu opcion");
j2 = prompt("J2 - Elije tu opcion");

if (
  ((j1 === ("papel" || "piedra" || "tijeras")) === j2) ===
  ("papel" || "piedra" || "tijeras")
) {
  alert("Empate");
} else if (j1 === "papel" && j2 === "piedra") {
  alert("Gana J1");
} else if (j1 === "tijeras" && j2 === "papel") {
  alert("Gana J1");
} else if (j1 === "piedra" && j2 === "tijeras") {
  alert("Gana J1");
} else if (j1 === "piedra" && j2 === "papel") {
  alert("Gana J2");
} else if (j1 === "papel" && j2 === "tijeras") {
  alert("Gana J2");
} else if (j1 === "tijeras" && j2 === "piedra") {
  alert("Gana J2");
} else {
  alert(
    "Escribe tu opcion en minusculas, las opciones son piedra, papel, o tijeras"
  );
}
var j1 = "papel";
var j2 = "piedra";

console.log(j1 === j2);
