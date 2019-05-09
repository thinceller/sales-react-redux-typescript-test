const webpack = require('webpack')
const path = require('path')

const config = {
  mode: 'development',
  entry: {
    index: [
      '@babel/polyfill',
      './front_end/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          happyPackMode: true
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-decorators', { legacy: true }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  watchOptions: {
    // ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  }
}

module.exports = config
