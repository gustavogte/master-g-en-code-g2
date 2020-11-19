// alert("Funciona");
//console.log(bands[2].name);
function showCards(band) {
  console.log(band);
  // Codigo para la tarjeta
  var card = document.createElement("div");
  card.className = "card col-4";

  //Codigo para el contenedor
  var cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);

  // codigo para la imagen de la tarjeta
  var img = document.createElement("img");
  img.classNAme = "card-img-top";
  img.src = band.img;
  card.appendChild(img);

  // codigo para el body de la tarjeta
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Codigo para el titulo de la tarjeta
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = band.name;

  // Codigo para la descripcion
  var description = document.createElement("p");
  description.className = "card-text";
  description.innerHTML = band.description;

  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.insertAdjacentHTML("beforeend", band.spotify);

  console.log(title);
  console.log(cardContainer);
  console.log(card);

  console.log(bands);
}

for (var i = 0; i < bands.length; i++) {
  showCards(bands[i]);
  //   console.log(bands[i]);
}
