function showCards(pokemon) {
  console.log(pokemon);
  // Código para la tarjeta
  var card = document.createElement('div');
  card.className = "card col-3";

  // Código para el contenedor
  var cardContainer = document.getElementById('card-container');
  cardContainer.appendChild(card);

  // Código para la imagen
  var img = document.createElement('img');
  img.className = "card-img-top";
  img.src = pokemon.art_url;
  card.appendChild(img);

  // Código para el card-body
  var cardBody = document.createElement('div');
  cardBody.className = "card-body";

  // Código para el título
  var title = document.createElement('h5');
  title.className = "card-title";
  title.innerHTML = pokemon.name;

  // Código de la descripción
  var description = document.createElement('p');
  description.className = "card-text";
  description.innerHTML = pokemon.description;

  cardBody.appendChild(title);
  card.appendChild(cardBody);
  cardBody.appendChild(description);
  // cardBody.insertAdjacentHTML('beforeend', pokemones.art_url);
}

// console.log(pokemones);

for (var i = 0; i < pokemones.length; i++) {
  // console.log(pokemones[i]);
  showCards(pokemones[i]);
}
