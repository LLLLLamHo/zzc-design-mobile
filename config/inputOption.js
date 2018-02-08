

const path = require( 'path' );
const babel = require( 'rollup-plugin-babel' );
const resolve = require( 'rollup-plugin-node-resolve' );
const commonjs = require( 'rollup-plugin-commonjs' );
const sass = require( 'rollup-plugin-sass' );
const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );
const eslint = require( 'rollup-plugin-eslint' );

const CWD = process.cwd();

function getInputOption( moduleName ) {
    return {
        input: path.join( CWD, './components/', moduleName, '/index.jsx' ),
        external: [
            'react',
            'react-dom'
        ],
        plugins: [
            resolve(),
            commonjs(),
            eslint( {
                throwOnError: true,
                throwOnWarning: true,
                exclude: ['/node_modules/**','**/*.scss']
            } ),
            sass( {
                output: path.join( CWD, './lib/', moduleName, 'style.css' ),
                option: { outputStyle: 'compressed' },
                processor: css => postcss( [autoprefixer] )
                    .process( css, { from: 'undefined' } )
                    .then( result => result.css )
            } ),
            babel( {
                exclude: '**/node_modules/**'
            } )
        ]
    }
}

module.exports = getInputOption;