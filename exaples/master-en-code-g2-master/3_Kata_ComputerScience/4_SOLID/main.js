// SuperClase

class Largometraje {
  constructor(titulo, duracion, director) {
    this.titulo = titulo;
    this.duracion = duracion + " minutos";
    this.director = director;
    this.precio = 10 + " USD";
  }
}
class Pelicula extends Largometraje {
  constructor(titulo, duracion, director, genero) {
    super(titulo, duracion, director);
    this.precio = 15 + " USD";
    this.genero = genero;
  }
}
class Documental extends Largometraje {
  constructor(titulo, duracion, director, narrador) {
    super(titulo, duracion, director);
    this.precio = 7 + " USD";
    this.narrador = narrador;
  }
}

const ToyStory = new Largometraje("Toy Story", 109, "Pedro Paramo");
// console.log(ToyStory);

let halloween = new Pelicula(
  "Halloween Pandemia",
  189,
  "John Carpenter",
  "Terror"
);
// console.log(halloween);

let DontFKillCats = new Documental(
  "Don't F**k with cats",
  56,
  "Mark Lewis",
  "Morgan Freeman"
);
// console.log(DontFKillCats);

class Cine {
  constructor(nombre, ciudad) {
    this.nombre = nombre;
    this.ciudad = ciudad;
  }
  reproducir(Largometraje) {
    console.log(Largometraje);
    if (Largometraje.narrador) {
      console.log(`${Largometraje.titulo}` + " es un Documental");
    } else {
      console.log(`${Largometraje.titulo}` + " es una Pelicula");
    }
    return `${Largometraje.titulo}` + " se esta reproduciendo.";
  }
}

let Cinepolis = new Cine("Cinepolis", "Monterrey");

Cinepolis.reproducir(ToyStory);
console.log(Cinepolis.reproducir(halloween));
console.log(Cinepolis.reproducir(DontFKillCats));
