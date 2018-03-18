const path  = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
  /*
  * production: source-map
  * development: eval-source-map, cheap-module-eval-source-map
  * */
};
// loader -> customise behavior of webpack when a file is loaded
// eg: .scss -> .css
// How a files gets transformed. Think of it as webpack plugin that transforms one file
// loaders: think of them as of transformers.