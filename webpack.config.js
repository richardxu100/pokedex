var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: /\.css$/,
        loader: 'style!css?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'node_modules'), // this also includes flexboxgrid
        exclude: /flexboxgrid/ // so we are excluding it
      },
      { // sass loader needs node sass, so we can still use global styles
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  node: {
    // console: 'empty', // never do this ever!!! It makes console.log not work! 
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
