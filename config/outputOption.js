const path = require( 'path' );

const CWD =  process.cwd() ;

function getOutputOption( moduleName, isIndex ) { 
    return {
        file: isIndex ? path.join(CWD,'./lib/index.js') : path.join(CWD,'./lib/',moduleName,'/index.js'),
        format: 'cjs'
    }
}

module.exports = getOutputOption;

