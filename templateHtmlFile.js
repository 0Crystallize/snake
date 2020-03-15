const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const templateHtmlFile = [
    new htmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html')
    }),

    new htmlWebpackPlugin({
        filename: 'signin.html',
        template: path.resolve(__dirname, './src/pages/signin.html')
    })
];

module.exports = templateHtmlFile;
