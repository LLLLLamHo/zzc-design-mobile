

const path = require( 'path' );
const fs = require( 'fs' );
const babel = require( 'rollup-plugin-babel' );
const resolve = require( 'rollup-plugin-node-resolve' );
const commonjs = require( 'rollup-plugin-commonjs' );
const sass = require( 'rollup-plugin-sass' );
const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );
const eslint = require( 'rollup-plugin-eslint' );

const CWD = process.cwd();

function getInputOption( moduleName, isIndex ) {

    let targePath = null;

    // 检查是否存在文件，可能会为ts、tsx、js、jsx
    if ( !isIndex ) {
        let extensionList = ['tsx', 'ts', 'jsx', 'js'];
        for ( let i = 0; i < extensionList.length; i++ ) {
            let currPath = path.join( CWD, './components/', moduleName, `/index.${extensionList[i]}` );
            if ( fs.existsSync( currPath ) ) {
                targePath = currPath;
                break;
            }
        }
    }

    if ( isIndex || targePath ) {
        return {
            input: isIndex ? path.join( CWD, './components/index.js' ) : targePath,
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
                    exclude: ['/node_modules/**', '**/*.scss']
                } ),
                sass( {
                    output: isIndex ? path.join( CWD, './lib/style.css' ) : path.join( CWD, './lib/', moduleName, 'style.css' ),
                    option: { outputStyle: 'compressed' },
                    processor: css => postcss( [autoprefixer] )
                        .process( css, { from: 'undefined' } )
                        .then( result => result.css )
                } ),
                babel( {
                    runtimeHelpers: true,
                    exclude: '**/node_modules/**'
                } )
            ]
        }
    }

    return null;

}

module.exports = getInputOption;