const ROOT_PATH = process.cwd();

const config = {
    devtool: 'source-map',
    entry: '../lib/index.js',
    output: {
        path: './zds',
        filename: 'zds.umd.js',
        libraryTarget: 'umd',
        library: 'zds'
    },
    externals: [
        // function ( context, request, callback ) {
        //     if ( context !== ROOT_PATH ) {
        //         if ( /^react-dom$/.test( request ) ) {
        //             return callback( null, 'root ReactDOM' );
        //         } else if ( /^react$/.test( request ) && /react\-dom\/umd$/.test( context ) === false ) {
        //             return callback( null, 'root React' );
        //         }
        //     }
        //     callback();
        // }
    ],
    
};

module.exports = config;
