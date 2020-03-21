const path = require('./path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const infoHtmlWebpackPlugin = [
    {
        favicon: path.src + '/images/favicon.png',
        template: path.src + '/index.html',
        filename: 'index.html',
        minify: {
            collapseWhiteSpace: true
        }
    },
    {
        favicon: path.src + '/images/favicon.png',
        template: path.src + '/pages/signin.html',
        filename: 'signin.html',
        minify: {
            collapseWhiteSpace: true
        }
    },
    {
        favicon: path.src + '/images/favicon.png',
        template: path.src + '/pages/signup.html',
        filename: 'signup.html',
        minify: {
            collapseWhiteSpace: true
        }
    },
    {
        favicon: path.src + '/images/favicon.png',
        template: path.src + '/pages/snake.html',
        filename: 'snake.html',
        minify: {
            collapseWhiteSpace: true
        }
    }
];

module.exports = infoHtmlWebpackPlugin.map(html => new HtmlWebpackPlugin(html));
