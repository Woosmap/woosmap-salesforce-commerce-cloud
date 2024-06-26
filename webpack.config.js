'use strict';

var path = require('path');
var webpack = require('sgmf-scripts').webpack;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var jsFiles = require('sgmf-scripts').createJsPath();
var scssFiles = require('sgmf-scripts').createScssPath();

var bootstrapPackages = {
    Alert: 'exports-loader?Alert!bootstrap/js/src/alert',
    // Button: 'exports-loader?Button!bootstrap/js/src/button',
    Carousel: 'exports-loader?Carousel!bootstrap/js/src/carousel',
    Collapse: 'exports-loader?Collapse!bootstrap/js/src/collapse',
    // Dropdown: 'exports-loader?Dropdown!bootstrap/js/src/dropdown',
    Modal: 'exports-loader?Modal!bootstrap/js/src/modal',
    // Popover: 'exports-loader?Popover!bootstrap/js/src/popover',
    Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/src/scrollspy',
    Tab: 'exports-loader?Tab!bootstrap/js/src/tab',
    // Tooltip: 'exports-loader?Tooltip!bootstrap/js/src/tooltip',
    Util: 'exports-loader?Util!bootstrap/js/src/util'
};

var cartridgeName = 'int_woosmap';
process.argv.forEach((val, index) => {
    if (val === '--cartridgeName') {
        cartridgeName = process.argv[index + 1];
    }
});

module.exports = [{
    mode: 'none',
    name: 'js',
    entry: jsFiles,
    output: {
        path: path.resolve(`./cartridges/${cartridgeName}/cartridge/static`),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /bootstrap(.)*\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin(bootstrapPackages)]
}, {
    mode: 'none',
    name: 'scss',
    entry: scssFiles,
    output: {
        path: path.resolve(`./cartridges/${cartridgeName}/cartridge/static`)
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [
                                path.resolve('node_modules'),
                                path.resolve('node_modules/flag-icon-css/sass')
                            ]
                        }
                    }
                }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ],
        minimize: true
    }
}];
