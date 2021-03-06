const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

const rootConfig = require('../root_config')

module.exports = {
    entry: path.join(rootConfig.clientPath, 'app.js'),
    output: {
        filename: '[name]-bundle.js',
        path: path.join(rootConfig.rootPath, 'dist')
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
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    },
                }, ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};