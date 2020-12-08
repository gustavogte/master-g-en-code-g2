// 1.- Crea una superclase llamada Electrodoméstico con las
//siguientes características:
//a.Sus atributos son precio, color, consumoEnergetico
//y capacidad(peso máximo)

class Electrodomestico {
  //b. El constructor solo debe pedir precio, color
  //y capacidad.
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    //c.consumoEnergetico debe iniciar con valor de 100
    this.cEner = 100;
    this.capacidad = capacidad;
  }
}
//1.2.- Crea una subclase de Electrodomestico llamada Lavadora
//con las siguientes características:
class Lavadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga, cEner) {
    // a. Su atributo es carga(kg de ropa), además de los
    // atributos heredados.
    super(precio, color, capacidad, cEner);
    this.cEner = 100;
    this.carga = carga;
  }
  //b. Crea el método precioFinal(). Este se calcula
  //multiplicando el consumoEnergetico por la carga.
  precioFinal() {
    return this.carga * this.cEner;
  }
}
const lavadora = new Lavadora(555, "blanca", 15, 10, 150);
console.log(lavadora);
console.log(lavadora.precioFinal());
