const request = require('request');

request(`https://pokeapi.co/api/v2/pokemon/${name}`, function (error, response, body) {
  if (response.statusCode == 200) {
    const json = JSON.parse(body);
    console.log(json.abilities[0].ability.name);
  } else {
    console.log('Ocurrio un error en la petición ....');
  }
});

getPokemonByName("geodude")

