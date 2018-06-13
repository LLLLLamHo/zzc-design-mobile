const fs = require( 'fs' );
const path = require( 'path' );
const marked = require( 'marked' );

const filePath = path.join( __dirname, './test.md' );

const fsContent = marked( fs.readFileSync( filePath, 'utf8' ) );

async function getComponentList() {
    return new Promise( async ( resolve ) => {
        const componentsList = [];
        const excludeList = ['.DS_Store', '.babelrc', '_util', 'index.ts', 'style'];
        const componentsPath = path.join( __dirname, '../components' );
        const files = fs.readdirSync( componentsPath );
        for ( let i = 0; i < files.length; i++ ) {
            if ( excludeList.indexOf( files[i] ) == -1 ) {
                componentsList.push( files[i] );
            }
        }
        await resolve( componentsList );
    } ).then( data => data );
}

( async () => {
    const componentList = await getComponentList();
    const dirPath = path.join( __dirname, './config.json' );
    fs.writeFileSync(
        dirPath,
        JSON.stringify( {
            componentList
        }, null, 4 )
    );
} )();
