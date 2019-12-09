const path = require( 'path' );
const fs = require( 'fs' );

let REACT_PATH = 'react/umd/react.production.min.js';
let REACT_DOM_PATH = 'react-dom/umd/react-dom.production.min.js';
const ROOT_PATH = process.cwd();

const ENV = process.env.ENV;
const CWD = process.cwd();

let dirs = fs.readdirSync( path.join( CWD, './src' ) );
let entry = {};
for ( let i = 0; i < dirs.length; i++ ) {
    // if ( dirs[i] == 'Icon' ) {
    //     entry[dirs[i]] = `./src/${dirs[i]}/src/index.jsx`;
    // }
    // if ( dirs[i] == 'Toast' ) {
    //     entry[dirs[i]] = `./src/${dirs[i]}/src/index.jsx`;
    // }
    entry[dirs[i]] = `./src/${dirs[i]}/src/index.jsx`;
}
let config = {
    devtool: 'source-map',
    entry: entry,
    output: {
        publicPath: "../"
    },
    // externals: [
    //     function ( context, request, callback ) {
    //         if ( context !== ROOT_PATH ) {
    //             if ( /^zepto/.test( request ) && /fastclick/.test( context ) === false ) {
    //                 return callback( null, 'root window.Zepto' );
    //             } else if ( /^react-dom$/.test( request ) ) {
    //                 return callback( null, 'root window.ReactDOM' );
    //             } else if ( /^react$/.test( request ) && /react\-dom\/umd$/.test( context ) === false ) {
    //                 return callback( null, 'root window.React' );
    //             }
    //         }
    //         callback();
    //     }
    // ],
    devServer: {
        // host: '172.16.201.117',
        // host: '172.16.200.229',
        host: '0.0.0.0', // zuzuche
        // host: '172.16.223.207', // zuzuche1
        port: '4321'
    }
};

if ( ENV === 'development' ) {
    config.resolve = {
        alias: {
            'zzc-design-mobile': path.resolve(
                __dirname,
                '../es/index.js'
            )
        }
    };
}

module.exports = config;
