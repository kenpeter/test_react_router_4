var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

// html plugin class
var HtmlWebpackPlugin = require('html-webpack-plugin');

// html plugin instance
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	// client has template
  template: './src/index.html',
	// out is index html
  filename: 'index.html',
	// inject body
  inject: 'body'
});

var config = {
  entry: SRC_DIR + "/app/index.js",

  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/"
  },

  devtool: 'source-map',
  
  module:{
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query:{
            presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  },

  plugins: [
    HtmlWebpackPluginConfig
  ]
};

module.exports = config;
