
function showCards(bands) {
  // Código para la tarjeta
  var card = document.createElement('div');
  card.className = "card col-4";

  // Código para el contenedor
  var cardContainer = document.getElementById('card-container');
  cardContainer.appendChild(card);

  // Código para la imagen
  var img = document.createElement('img');
  img.className = "card-image-top";
  img.src = band.img;
  card.appendChild(img);

  // Código para el card-body
  var cardBody = document.createElement('div');
  cardBody.className = "card-body";

  // Código para el título
  var title = document.createElement('h5');
  title.className = "card-title";
  title.innerHTML = band.name;

  // Código para la descripción
  var descripction = document.createElement('p');
  descripction.className = "card-text";
  descripction.innerHTML = band.descripction;

  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(descripction);
  cardBody.insertAdjacentHTML('beforeend', band.spotify);
}

showCards();

// console.log(bands);

for(var i = 0; i < bands.length; i++) {
  showCards(bands[i]);
//  console.log(bands[i]);
} 
