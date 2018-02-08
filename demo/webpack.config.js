const path = require( 'path' );

let REACT_PATH = 'react/umd/react.production.min.js';
let REACT_DOM_PATH = 'react-dom/umd/react-dom.production.min.js';
const ROOT_PATH = process.cwd();

module.exports = {
    devtool: 'source-map',
    entry: {
        'toast': './toast/src/index.jsx',
    },
    output: {
        filename: "[name]/index.js"
    },
    externals: [
        function ( context, request, callback ) {
            if ( context !== ROOT_PATH ) {
                if ( /^zepto/.test( request ) && /fastclick/.test( context ) === false ) {
                    return callback( null, 'root window.Zepto' );
                } else if ( /^react-dom$/.test( request ) ) {
                    return callback( null, 'root window.ReactDOM' );
                } else if ( /^react$/.test( request ) && /react\-dom\/umd$/.test( context ) === false ) {
                    return callback( null, 'root window.React' );
                }
            }
            callback();
        }
    ],
    // resolve: {
    //     alias: {
    //         "react": require.resolve(REACT_PATH),
    //         "react-dom": require.resolve(REACT_DOM_PATH)
    //     }
    // },
}