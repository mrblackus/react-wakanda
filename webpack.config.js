const env = process.env.ENV;
const isProd = env === 'prod';

let baseConfig = {
  entry: {
    'react-wakanda': ['./src/index.ts'],
    'app': './app/app.ts'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        include: /src/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
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