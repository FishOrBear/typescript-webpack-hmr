var path = require('path');
const webpack = require('webpack');
//plusgin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//Optional

module.exports = {
  entry: [
    'react-hot-loader/patch',
    "./src/index.tsx"
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: [".ts", ".tsx", ".js", "json"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js',
    publicPath: '/',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },

  //dev
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    // respond to 404s with index.html
    port: 8888,
    hot: true
  },
  //
  plugins: [
    new CleanWebpackPlugin(['dist']),//Optional
    //
    new HtmlWebpackPlugin({ template: 'index.html' }),
    //webpack-dev-server hmr
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),//change file console.log show name.
  ]
};
