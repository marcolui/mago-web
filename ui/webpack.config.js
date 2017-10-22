const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    devServer: { inline: true, port: 3004,
        historyApiFallback:{
            index:'dist/index.html'
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3009',
                secure: false
            }
        },
    },

    // context: path.join(__dirname, 'src'),
    entry: {
        app: [
            // './app.js'
            path.resolve('src', 'app')
        ]
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.join(__dirname, 'dist')
        // publicPath: '/public/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: module => /node_modules/.test(module.resource)
        }),
        new HtmlWebpackPlugin({
            hash: process.env.NODE_ENV === 'production',
            title: 'mago-web',
            chunks: ['vendor', 'app'],
            filename: 'index.html',
            template: './template.html'
            //, favicon: '../assets/your-fav-icon.png'
        })
    ]
};
module.exports = config;