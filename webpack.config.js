var path = require('path');
const webpack = require('webpack');
//plusgin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//Optional

module.exports = {
  entry: "./src/index.ts",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "awesome-typescript-loader"
      }
    ],
  },
  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    extensions: ['.ts', '.js'],
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
    port: 8888,
    hot: true
  },
  //
  plugins: [
    new CleanWebpackPlugin(['dist']),
    //
    new HtmlWebpackPlugin({ template: 'index.html' }),
    //webpack-dev-server hmr
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),//change file console.log show name.
  ]
};
