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
      directory: 'dist',
      watch: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/
      }
    ]
  }
};