const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css'],
    modules: [
      "node_modules"
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                'es2015',
                'stage-0'
              ],
              plugins: [
                'react-hot-loader/babel'
              ]
            },
          },
        ],
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: path.resolve(__dirname, 'src/bundle.js'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

