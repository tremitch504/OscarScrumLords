const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const srcDir = path.resolve(__dirname, 'client/src');
const distDir = path.resolve(__dirname, 'client/dist');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  stats: {
    excludeModules: /node_modules/,
  },
  entry: {
    app: path.resolve(srcDir, 'index.jsx'),
  },
  output: {
    path: distDir,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, 
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.resolve(srcDir, 'index.ejs')}),
    new Dotenv()
  ]
 
};
