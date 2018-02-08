const rollup = require( 'rollup' );
const path = require( 'path' );
const getInputOption = require( './inputOption' );
const getOutputOption = require( './outputOption' );
const colors = require( 'colors' );
const linebreak = (process.platform === 'win32') ? '\n\r' : '\n';

function watch( moduleName ) {
    let inputOption = getInputOption( moduleName );
    let outputOption = getOutputOption( moduleName );
    let watchOptions = {
        ...inputOption,
        output: outputOption,
        watch: {
            exclude: 'node_modules/**',
            include: 'components/**'
        }

    }
    watcher = rollup.watch( watchOptions );
    watcher.on( 'event', event => {
        switch ( event.code ) {
            case 'START': console.log( `开始监听${moduleName}模块`.green );
                break;
            case 'BUNDLE_START': console.log( `开始构建${event.input}`.blue );
                break;
            case 'BUNDLE_END': console.log( `构建完成${event.input}${linebreak}输出到${event.output[0]}${linebreak}耗时${event.duration}毫秒`.blue
                                        );
                break;
            case 'END': console.log( `构建完成${moduleName}模块`.green );
                break;
            case 'ERROR': console.log( `构建${moduleName}发现错误`.red );
                break;
            case 'FATAL': console.log( `构建${moduleName}发现致命错误`.red );
                break;
        }
    } );
}

module.exports = watch;



