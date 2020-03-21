const path = require('./path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('./HtmlWebpackPlugin');

module.exports = {
    entry: [path.src + '/index.js'],
    output: {
        path: path.build,
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    plugins: [new CleanWebpackPlugin(), ...HtmlWebpackPlugin],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader']
            },
            {
                test: /\.(?:iso|gif|png|jpg|jpeg|webp|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[exk]',
                    context: 'src'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[path][name].[ext]',
                    content: 'src'
                }
            },
        ]
    }
};
