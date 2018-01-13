const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

function resolve(partial) {
    return path.resolve(process.cwd(), partial);
}

const babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
    },
};

const base = {
    entry: './src/index',

    output: {
        path: resolve('dist'),
        library: 'reactClasslistHelper',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            babelLoader,
        ],
    },

    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
};

module.exports = [
    merge(base, {
        output: {
            filename: 'react-classlist-helper.js',
        },
    }),
    merge(base, {
        output: {
            filename: 'react-classlist-helper.min.js',
        },

        plugins: [
            new MinifyPlugin(),
        ],
    }),
];
