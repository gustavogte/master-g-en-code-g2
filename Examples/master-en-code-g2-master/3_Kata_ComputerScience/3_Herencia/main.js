// Superclase / clase padre
class Mascota {
  // Metodo especial
  // Todas las clases lo tienen
  // Es lo primero en ejecutrarse, cuando se haga una instancia
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.patas = patas;
  }
  comer() {
    return `${this.nombre} esta comiendo.`;
  }
}
// sub clase
// clase hija
class Gato extends Mascota {
  constructor(nombre, patas, colorOjos) {
    super(nombre, patas);
    this.vidas = 7;
    this.colorOjos = colorOjos;
  }
  ronronear() {
    return `${this.nombre} de ojos ${this.colorOjos} esta ronroneando`;
  }
}
const gato = new Gato("Garfield", 4, "Verdes");
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());
// gato.setColor("rojo");

console.log("-------------------------------");

class Camaleon extends Mascota {
  constructor(nombre, patas) {
    super(nombre, patas);
    this.color = "Verde";
  }
  setColor(nuevoColor) {
    this.color = nuevoColor;
  }
}

const camaleon = new Camaleon("Rango", 4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor("rojo");
console.log(camaleon);
