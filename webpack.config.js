var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var paths = require('./webpack_config/paths');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: `${paths.SRC}/app.jsx`,
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  devtool: 'source-map',
  watch: NODE_ENV === 'production' ? false : true,
  devServer: {
    contentBase: paths.DIST,
    filename: 'bundle.js',
    compress: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: `${paths.SRC}/index.html`,
        to: `${paths.DIST}/index.html`
      },
      {
        from: `${paths.SRC}/styles.css`,
        to: `${paths.DIST}/styles.css`
      }
    ])
  ]
};
