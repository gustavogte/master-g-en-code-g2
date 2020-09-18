// Superclase o clase padre

class Mascota {
  // Método especial
  // Todas las clases lo tinenen
  // Es el primero en ejecutarse, cuado se haga una instancia
  constructor(nombre, patas) {
    this.nombre = nombre;
    this.patas = patas;
  }

  comer() {
    return `${this.nombre} está comiendo`;
  }
}

// Subclase o clase hija
class Gato extends Mascota {
  constructor(nombre, patas, colorOjos) {
    super(nombre, patas);
    this.vidas = 7;
    this.colorOjos = colorOjos;
  }

  ronronear() {
    return `Puuuuuurrrrr`
  }
}



const gato = new Gato('Cleo', 4, 'Amarillos');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

console.log('---------------------------');

class Camaleon extends Mascota {
  constructor(nombre, patas) {
    super(nombre, patas);
    this.color = 'verde';
  }
  setColor(nuevoColor) {
    this.color = nuevoColor;
  }
}

const camaleon = new Camaleon('Rango', 4);

console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor('rojo');
console.log(camaleon);






