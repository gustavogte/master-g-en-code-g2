// 3. - Hacer superclase Maestro
class Maestro {
  constructor(nombre, materia) {
    this.nombre = nombre;
    this.materia = materia;
  }
}
class MaestroFisica extends Maestro {
  constructor(nombre, materia, promedio, antiguedad) {
    super(nombre, materia);
    this.promedio = promedio;
    this.antiguedad = antiguedad + " anos trabajando en esta organizacion.";
  }
  promedio = [100, 100, 100, 100];

  getPromedio() {
    for (let i = 0; i < promedio.length; i++) {
      console.log(i);
      console.log(promedio.length);
      console.log(promedio[i]);
      console.log(promedio[i + 1]);
      console.log(promedio[i + 2]);
      console.log(promedio[i + 3]);
      console.log(promedio.length);
      let suma =
        (promedio[i] + promedio[i + 1] + promedio[i + 2] + promedio[i + 3]) /
        promedio.length;
      return suma;
    }
  }
}

class MaestroMusica extends Maestro {
  constructor(nombre, materia, promedio, edad) {
    super(nombre, materia);
    this.edad = edad + " anos de edad.";
    this.promedio = promedio;
  }
  getPromedio() {
    for (let i = 0; i < promedio.length; i++) {
      console.log(i);
      console.log(promedio.length);
      console.log(promedio[i]);
      console.log(promedio[i + 1]);
      console.log(promedio[i + 2]);
      console.log(promedio[i + 3]);
      console.log(promedio.length);
      let suma =
        (promedio[i] + promedio[i + 1] + promedio[i + 2] + promedio[i + 3]) /
        promedio.length;
      return suma;
    }
  }
}
promedio = [100, 90, 80, 95];

const Pedro = new MaestroFisica("Pedro", "Fisica", promedio, 15);
console.log(Pedro);
console.log(Pedro.getPromedio());
console.log(Pedro.antiguedad);

const Mauricio = new MaestroMusica("Mauricio", "Musica", promedio, 35);
console.log(Mauricio);
console.log(Mauricio.getPromedio());
console.log(Mauricio.edad);

//y subclases Maestro de Física y
// Maestro de Música y a cada uno asignarle su materia y
// calcular su promedio de grupo a partir de calificaciones
//     (puedes usar arreglos).El maestro de física tiene un
// atributo “antigüedad” que guarda un valor numérico,
//     mientras que el maestro de música tiene un atributo “edad”
// también guardando un valor numérico.
