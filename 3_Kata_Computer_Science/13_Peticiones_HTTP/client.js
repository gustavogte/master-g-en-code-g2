const request = require('request'); // Solo se necesita poner una vez arriba

const getAuthorByBookName = (bookName) => {
  const URL_OPEN_LIBRARY = `https://pokeapi.co/api/v2/pokemon/${bookName}`;
  request.get(URL_OPEN_LIBRARY, (error, response, body) => {
    if (response.statusCode == 200) {
      const json = JSON.parse(body);
      json.docs[0].author_name.forEach(author => console.log(author));
    } else {
      console.log('Ocurrio un error en la petición ....');
  }
})
}

