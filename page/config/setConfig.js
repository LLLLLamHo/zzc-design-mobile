const fs = require( 'fs' );
const path = require( 'path' );
const marked = require( 'marked' );
const hljs = require( 'highlight.js' );

const mdOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    highlight ( code ) {
        return hljs.highlightAuto( code ).value;
    }
};

async function getComponentList() {
    return new Promise( async ( resolve ) => {
        const componentsList = [];
        const excludeList = ['.DS_Store', '.babelrc', '_util', 'index.ts', 'style'];
        const componentsPath = path.join( __dirname, '../../components' );
        const files = fs.readdirSync( componentsPath );
        for ( let i = 0; i < files.length; i++ ) {
            if ( excludeList.indexOf( files[i] ) == -1 ) {
                componentsList.push( files[i] );
            }
        }
        await resolve( componentsList );
    } ).then( data => data );
}

async function setComponentConfig( componentList ) {
    return new Promise( async ( resolve ) => {
        const configData = {};
        const categoryData = {};
        const DIRPATH = path.join( __dirname, '../../components' );
        const MDFILEPATH = 'docs/basic.md';
        const CONFIGFILEPATH = 'docs/config.json';
        for ( let i = 0; i < componentList.length; i++ ) {
            const mdPath = path.join( DIRPATH, componentList[i], MDFILEPATH );
            const configPath = path.join( DIRPATH, componentList[i], CONFIGFILEPATH );
            configData[componentList[i]] = {};
            const currData = configData[componentList[i]];
            currData.mdContent = marked( fs.readFileSync( mdPath, 'utf8' ), mdOptions );
            currData.config = JSON.parse( fs.readFileSync( configPath, 'utf8' ) );
            categoryData[currData.config.category] = categoryData[currData.config.category] ? categoryData[currData.config.category] : [];
            categoryData[currData.config.category].push( currData.config );
        }
        configData.index = {
            mdContent: marked( fs.readFileSync( path.join( __dirname, '../../README.md' ), 'utf8' ), mdOptions )
        };
        configData.change = {
            mdContent: marked( fs.readFileSync( path.join( __dirname, '../../docs/change.md' ), 'utf8' ), mdOptions )
        };
        configData.pull = {
            mdContent: marked( fs.readFileSync( path.join( __dirname, '../../docs/pull.md' ), 'utf8' ), mdOptions )
        };
        await resolve( { configData, categoryData } );
    } ).then( data => data );
}

( async () => {
    const componentList = await getComponentList();
    const configData = await setComponentConfig( componentList );
    const pageData = Object.assign( {}, { componentList }, configData );
    const dirPath = path.join( __dirname, './config.json' );
    fs.writeFileSync(
        dirPath,
        JSON.stringify( pageData, null, 4 )
    );
} )();