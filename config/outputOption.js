const path = require( 'path' );

const CWD =  process.cwd() ;

function getOutputOption(moduleName) { 
    return {
        file: path.join(CWD,'./lib/',moduleName,'/index.js'),
        format: 'cjs'
    }
}

module.exports = getOutputOption;

