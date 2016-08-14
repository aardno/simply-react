const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const autoprefixer = require('autoprefixer')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const target = process.env.npm_lifecycle_event

var paths = {
  src: path.join(__dirname, 'src'),
  dev: path.join(__dirname, 'dev'),
  dist: path.join(__dirname, 'dist')
}

const common = {
  context: paths.src,
  entry: './js',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: paths.src, loader: 'babel?cacheDirectory' }
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}

if(target === 'bundle') {
  module.exports = merge(common, {
    watch: true,
    debug: true,
    devtool: 'inline-source-map',
    output: {
      path: paths.dev
    },
    module: {
      loaders: [
        { test: /\.scss$/, include: paths.src, loader: 'style!css!postcss!sass' }
      ]
    }
  })
}

if(target === 'build') {
  module.exports = merge(common, {
    output: {
      path: paths.dist
    },
    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ],
    module: {
      loaders: [
        { test: /\.scss$/, include: paths.src, loader: 'css!postcss!sass'}
      ]
    }
  })
}
