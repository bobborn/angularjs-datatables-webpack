/**
 * Created by bob on 2016/1/19.
 */

var path = require('path');
var webpack = require('webpack');

var config = {
    entry: './src/app.js',
    output: {
        path:'./dist',
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            math: path.resolve(__dirname,'src', 'math.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: path.resolve(__dirname,'src', 'math.js'),
                loader: 'exports?Math'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    //externals:{
    //    jquery:'jQuery'
    //}
};

module.exports = config;


