const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputDir = './dist';

module.exports = () => [{
  entry: {
    es5: './src/ES5.js',
    es6: './src/ES6.js',
  },
  output: {
    path: path.join(__dirname, outputDir),
    filename: 'emails-input-[name].js',
    publicPath: '/dist/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\s5|ES5\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\s6|ES6\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: {} },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer(),
              ],
            },
          },
          { loader: 'sass-loader', options: {} },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
}];
