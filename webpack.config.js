var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, '');

var config = {
  entry: APP_DIR + '/js/pages/Layout.js',
  output: {
    path: BUILD_DIR + '/js/',
    filename: 'bundle.js'
  },
    
    module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR + '/js/',
        loader : 'babel'
      }
    ]
  }
    
};

module.exports = config;