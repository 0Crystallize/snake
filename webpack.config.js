const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const templateHtmlFile = require('./templateHtmlFile');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'build[hash].js',
        path: path.resolve(__dirname, './public'),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },

            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: 'index[hash].css'
        }),

        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './public/**/*')]
        }),
        ...templateHtmlFile,
    ],

    devServer: {
        overlay: true,
        contentBase: path.resolve(__dirname, './src/index.html'),
        index: 'index.html',
        port: 3333
    }
};

module.exports = config;
