const path = require('path');

const env = process.env.ENV;
const isProd = env === 'prod';

let baseConfig = {
  entry: {
    'react-wakanda': ['./src/index.ts'],
    'app': './app/app.tsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
    root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.tsx?$/,
        include: /src/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: [
          /node_modules/
        ],
        loader: 'ts-loader'
      }
    ],
    tslint: {
      emitErrors: false,
      failOnHint: false
    }
  }
};

module.exports = baseConfig;