const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Loaders for CSS files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Asset loader for images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html', 
        title: 'todo-app',
        inject: 'body',
  })]
};