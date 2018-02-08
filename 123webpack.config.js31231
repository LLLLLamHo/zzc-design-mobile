"use strict";

const fs = require( 'fs' );
const path = require( 'path' );
const webpack = require( 'webpack' );
const ROOT_PATH = process.cwd();
let browserslist = require( './config/browserslist' );

module.exports = {
    entry: {
        'toast': './components/toast/index.jsx'
    },
    output: {
        path: path.join( __dirname, './lib' ),
        filename: '[name].js',
        // library : 'zzcToast',
        libraryTarget: 'umd', 
        // libraryExport: 'default'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            // ["@babel/preset-env", {
                            //     "targets": {
                            //         "browsers": browserslist
                            //     },
                            //     'debug': false,
                            //     'useBuiltIns': false
                            // }],
                            ["@babel/preset-env", {
                                "targets": {
                                    "browsers": browserslist
                                },
                            }],
                            "@babel/preset-react",
                            "@babel/preset-stage-0"
                        ]
                    }
                }
            }
        ]
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react'
        },
    },
    plugins: [

    ],
};
