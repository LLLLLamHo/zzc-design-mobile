const fs = require( 'fs' );
const path = require( 'path' );

const LIBPATH = path.join( __dirname, '../lib/' );
const TARGETPATH = path.join( __dirname, '../demo/node_modules/zzcDesign' );

function forFileList( parentPath, targetPath ) {
    if ( !fs.existsSync( targetPath ) ) {
        fs.mkdirSync( targetPath );
    }
    const fileList = fs.readdirSync( parentPath );
    for ( let i = 0; i < fileList.length; i++ ) {
        let currPath = path.join( parentPath, fileList[i] );
        if ( fs.existsSync( currPath ) && fs.statSync( currPath ).isDirectory() ) {
            let libChildDirPath = path.join( parentPath, fileList[i] );
            let targetChildDirPath = path.join( targetPath, fileList[i] );
            forFileList( libChildDirPath, targetChildDirPath );
        } else {
            let libFilePath = path.join( parentPath, fileList[i] );
            let targetFilePath = path.join( targetPath, fileList[i] );
            fs.copyFileSync( libFilePath, targetFilePath );
        }
    }
}

forFileList( LIBPATH, TARGETPATH );