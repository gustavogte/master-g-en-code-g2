const HtmlWebpackPlugin = require('html-webpack-plugin');

// commonJS (node)
module.exports = {
  module: {
    rules: [ // Cargar los loaders, que necesitamos para que webpack haga lo que necesitamos
      {
        test: /\.html/, // Definir lo que tengo que buscar (uso una Regular Expresion, que busca todo lo que esta dentro de /xxxx /
        use: [ // lo que econtre, qué voy a hacer con ello
          loader: "html-loader", // El nombre del loader, que va a traducir el html para webpack
          options: { minimize : true}
        ]
      }]
  }
},
plugins: [
  new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename:"./index.html",
  }),
]

