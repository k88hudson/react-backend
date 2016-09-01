"use strict";
const webpack = require("webpack");
const absolute = relPath => require("path").join(__dirname, relPath);

module.exports = {
  entry: {"vendor": absolute("src/vendor-src.js")},
  output: {
    path: absolute("src/lib"),
    filename: "vendor.js",
    libraryTarget: "commonjs2"
  },
  module: {loaders: [{test: /\.json$/, loader: "json"}]}
};
