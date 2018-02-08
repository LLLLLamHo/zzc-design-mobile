const rollup = require( 'rollup' );
const path = require( 'path' );
const getInputOption = require( './inputOption' );
const getOutputOption = require( './outputOption' );
const colors = require('colors'); 


async function build(moduleName) {

    let inputOption = getInputOption( moduleName );
    let outputOption = getOutputOption( moduleName );

    await console.log(`开始打包${moduleName}`.green);

    await rollup.rollup( inputOption ).then( async ( bundle ) => {
        // generate code and a sourcemap

        let modules = bundle.modules;
        for ( let i = 0; i < modules.length; i++ ) {
            if ( modules[i].resolvedIds ) {
                let { resolvedIds } = modules[i];
                for ( let key in resolvedIds ) {
                    if ( resolvedIds[key].indexOf( '.scss' ) != '-1' ) {
                        //添加css引用
                        outputOption.intro = "require('./style.css');";
                    }
                }
            }
        }

        const { code, map } = await bundle.generate( outputOption );
        await bundle.write( outputOption );
        await console.log(`完成打包${moduleName}`.green);
    } ).catch( ( err ) => {
        console.log( `打包${moduleName}失败`.red );
        console.log( `${err}`.red );
    } );

}

module.exports = build;



