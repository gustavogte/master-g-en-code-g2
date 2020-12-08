/*
index.html
 */

// alert("TodoCool");
// var enlace = document.getElementById("link");
// enlace.href = "https://www.google.com";

// var parrafos = document.getElementsByTagName("p");

/*
eventos.html
*/
function evolucionarPollitos() {
  var imagenPollo = document.getElementById("imagen-pollito");
  imagenPollo.src =
    "https://cdn.bulbagarden.net/upload/thumb/2/29/256Combusken.png/1200px-256Combusken.png";
}

function convertir() {
  var imagen = document.getElementById("perro");
  if (imagen) {
    var imagenPerro = document.getElementById("perro");
    imagenPerro.id = "humano";
    imagenPerro.src =
      "https://de10.com.mx/sites/default/files/styles/imagen_body/public/2018/09/14/rostro_actual_del_humano.jpg?itok=LJ-_y8aU";

    var botonHumano = document.getElementById("boton-perro");
    console.log(botonHumano.onclick);
    botonHumano.innerHTML = "convertir a perro";
  } else {
    var imagenHumano = document.getElementById("humano");
    imagenHumano.id = "perro";
    imagenHumano.src =
      "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg";

    var botonPerro = document.getElementById("boton-humano");
    console.log(botonHumano.onclick);
    botonPerro.innerHTML = "convertir a humano";
  }
}

function convertirPerro() {
  var imagenHumano = document.getElementById("perro");
  imagenHumano.src =
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5b755a235cafe886f57f0c61/golden-cachorro_0.jpg";
  var botonHumano = document.getElementById("boton-perro");
  botonHumano.innerHTML = "convertir a humano";
}

// function botonDeHumano() {}
