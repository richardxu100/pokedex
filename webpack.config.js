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
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
