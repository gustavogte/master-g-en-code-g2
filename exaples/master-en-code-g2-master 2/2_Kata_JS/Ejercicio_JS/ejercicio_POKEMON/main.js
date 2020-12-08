function showCards(pokemon) {
  console.log(pokemon);
  // Codigo para la tarjeta
  var card = document.createElement("div");
  card.className = "card col-4";
  //   card.id = "dog";
  //   console.log(card.id);

  //Codigo para el contenedor
  var cardContainer = document.getElementById("card-container");
  cardContainer.appendChild(card);

  //  JQuery (estoy seleccionando el elemento desde el DOM)
  var modalF = $("#modal-pokemon");
  // le estoy diciendo a Bootstrap que el elemento que tiene, es un modal, el behaivor original es QUE SE ABRA.
  modalF.modal({ show: false });

  function openModal(event) {
    //toggle es como un switch, si esta apagado lo prendes, y vice-versa
    modalF.modal("toggle");

    //   console.log(modalF);
    // function modalImg() {
    //   document.createElement("img");
    //   img.className = "big-image";
    //   img.src = event.target.src;
    //   console.log(img.src);
    //   img.appendChild(div);
    // }

    // modalImg();

    for (var i = 0; i < pokemones.length; i++) {
      var cardTitle = document.getElementById("modal-pokemon-title");
      cardTitle.className = "modal-title";
      cardTitle.innerHTML = pokemon.name;
      var pokeType = document.getElementById("modal-body-type-id");
      pokeType.className = "modal-type";
      pokeType.innerHTML = pokemon.types;
    }

    // Intento aqui colorear el background del modal del color segun sea el tipo de pokemon
    for (var i = 0; i < pokemones.length; i++) {
      var pokemonType = pokemon.types;
      console.log(pokemonType[i]);

      var modalBackground = document.getElementById("modal-pokemon");
      if (
        pokemonType == "poison,grass" ||
        pokemonType == "grass,psychic" ||
        pokemonType == "grass"
      ) {
        modalBackground.className = "modal bg-success";
      } else if (
        pokemonType == "water" ||
        pokemonType == "water,psychic" ||
        pokemonType == "water,ice" ||
        pokemonType == "ice,psychic" ||
        pokemonType == "flying,water" ||
        pokemonType == "rock,water"
      ) {
        modalBackground.className = "modal bg-primary";
      } else if (
        pokemonType == "bug" ||
        pokemonType == "flying,bug" ||
        pokemonType == "normal" ||
        pokemonType == "steel,electric"
      ) {
        modalBackground.className = "modal bg-secondary";
      } else if (
        pokemonType == "electric" ||
        pokemonType == "flying,rock" ||
        pokemonType == "flying,electric"
      ) {
        modalBackground.className = "modal bg-warning";
      } else if (pokemonType == "fire") {
        modalBackground.className = "modal bg-danger";
      } else if (
        pokemonType == "poison,bug" ||
        pokemonType == "bug,grass" ||
        pokemonType == "dragon"
      ) {
        modalBackground.className = "modal bg-success";
      } else if (pokemonType == "normal,flying") {
        modalBackground.className = "modal bg-info";
      } else if (pokemonType == "ground" || pokemonType == "ground,rock") {
        modalBackground.className = "modal bg-warning";
      } else if (
        pokemonType == "fairy" ||
        pokemonType == "psychic" ||
        pokemonType == "poison,ghost"
      ) {
        modalBackground.className = "modal bg-dark";
      } else if (
        pokemonType == "normal,fairy" ||
        pokemonType == "fairy,psychic"
      ) {
        modalBackground.className = "modal bg-dark";
      } else {
        modalBackground.className = "modal bg-danger";
      }
    }
    var imagenDiv = document.getElementById("modal-body-id");
    imagenDiv.className = "modal-body";
    let imagenModal = document.getElementById("modal-image");
    imagenModal.className = "big-image";
    imagenModal.src = event.target.src;
    imagenDiv.appendChild(imagenModal);
  }
  // console.log(event.target.src);
  //
  //   // console.log(img.src);
  //

  // codigo para la imagen de la tarjeta
  var img = document.createElement("img");
  img.className = "card-img-top";
  img.src = pokemon.art_url;
  // Quitamos parentesis del openModal, porque cuando recargabamos la pagina se ejecutaba de manera infinita (151 veces)
  img.onclick = openModal;
  // al dar click en la imagen tenemos que pasarle
  card.appendChild(img);

  // codigo para el body de la tarjeta
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Codigo para el titulo de la tarjeta
  var title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = pokemon.name;

  // Codigo para la descripcion
  var description = document.createElement("p");
  description.className = "card-text";
  description.innerHTML = pokemon.description;

  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.insertAdjacentHTML("beforeend", pokemon.types);
  //   modal.insertAdjacentHTML("beforeend", pokemon.types);

  //   console.log(title);
  //   console.log(cardContainer);
  //   console.log(card);

  //   console.log(pokemones);
  //   for (var i = 0; i < pokemones.length; i++) {
  //     let hoverCard = document.getElementById("dog");
  //     dog[i].addEventListener("mouseenter", (e) => {
  //       e.target.style.color = "purple";
  //     });
  //   }
}

for (var i = 0; i < pokemones.length; i++) {
  showCards(pokemones[i]);
  //   console.log(bands[i]);
}

// animar la imagen del modal a traves de un zoom
function modalAnimation() {}
var modalImg = document.getElementsByClassName("big-image");
modalImg.className = "bigger-image";
modalImg.onclick = modalAnimation;
