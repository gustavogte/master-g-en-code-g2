// 2. - Crear una clase Bebida que herede a dos clases Cerveza
// y Refresco.
class Bebida {
  constructor(nombre, cantidad) {
    this.nombre = nombre;
    this.cantidad = cantidad + " ml";
  }
}
class Cerveza extends Bebida {
  constructor(nombre, cantidad, porcentajeAlcohol) {
    //Ambas clases deben tener la propiedad
    // cantidad(ml).
    super(nombre, cantidad);
    this.porcentajeAlcohol = porcentajeAlcohol;
  }
  getAlcohol() {
    //La clase Refresco debe tener el atributo
    // azucar(g) y la clase Cerveza debe el atributo
    // porcentajeAlcohol
    return this.porcentajeAlcohol + " % de alcohol.";
  }
}

class Refresco extends Bebida {
  constructor(nombre, cantidad, azucar) {
    super(nombre, cantidad);
    this.azucar = azucar;
  }
  getAzucar() {
    // .Crear los getters y setters
    // correspondientes.
    return this.azucar + " g de azucar.";
  }
}
const CartaBlanca = new Cerveza("Carta Blanca", 350, 12);
console.log(CartaBlanca);
console.log(CartaBlanca.cantidad);
console.log(CartaBlanca.getAlcohol());

const CocaCola = new Refresco("Coca-Cola", 350, 100);
console.log(CocaCola);
console.log(CocaCola.cantidad);
console.log(CocaCola.getAzucar());
