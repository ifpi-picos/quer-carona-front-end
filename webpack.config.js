const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    index: ['./src/index.ts', './src/validando.ts']
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};