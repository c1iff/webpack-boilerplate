var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
    }, {
      test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
      loaders: 'url-loader'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
