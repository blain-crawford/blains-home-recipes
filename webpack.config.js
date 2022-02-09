const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: 'only',
    static: {
      path: path.resolve(__dirname, 'dist'),
      watch: true
    }
  },
  module: {
    entry: './src/index.js',
    rules: [
      {
        test: /\.js$/i
      }
    ]
  }
};