const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

const rootConfig = require('../root_config')

module.exports = {
  entry: './public/app.js',
  output: {
    filename: '[name]-bundle.js',
    path: path.join(rootConfig.root, 'dist')
  },
  mode: 'development',
  devServer: {
    contentBase: "dist",
    overlay: false,
    stats: {
        colors: true
    }
  },
    module: {
        rules: [{
            test: /\.sass$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};