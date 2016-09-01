const webpack = require("webpack");
const path = require("path");
const absolute = relPath => path.join(__dirname, relPath);

module.exports = {
  entry: {
    main: absolute("./src/main-content.js"),
    pageWorker: absolute("./src/main-page-worker.js")
  },
  output: {
    path: absolute("./data/content"),
    filename: "[name].bundle.js"
  },
  devtool: "eval",
  module: {
    loaders: [
      {test: /.json$/, loader: "json"},
      {test: /.jsx?$/, exclude: /node_modules/, loader: "babel"}
    ]
  }
};
