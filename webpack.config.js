const path = require('path')

const config = {
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: './thisgrid.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              presets: ['env']
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', 'json']
  }
}

module.exports = config
