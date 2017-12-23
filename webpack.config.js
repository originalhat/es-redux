const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/applications/web/index.jsx'),
    devServer: {
        contentBase: path.resolve(__dirname + '/applications/web/dist')
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: __dirname + '/applications/web',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    }
};