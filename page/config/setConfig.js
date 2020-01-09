const fs = require( 'fs' );
const path = require( 'path' );
const marked = require( 'marked' );
const hljs = require( 'highlight.js' );

const codepenDefaultConfig = {
    title: 'ZZC Design Mobile Demo',
    html: fs.readFileSync( path.join( __dirname, '../src/codepen/tpl.html' ), 'utf8' ),
    js: '',
    css: '',
    editors: '001',
    css_external: 'https://lllllamho.github.io/zzc-design-mobile/demo/dist/css/Alert.css',
    js_external: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.5.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.5.0/umd/react-dom.production.min.js;https://lllllamho.github.io/zzc-design-mobile/codepen/zds/js/zds.umd.js',
    js_pre_processor: 'babel'
};

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

async function getComponentList () {
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

async function setComponentConfig ( componentList ) {
    return new Promise( async ( resolve ) => {
        const configData = {};
        const categoryData = {};
        const DIRPATH = path.join( __dirname, '../../components' );
        const MDFILEPATH = 'docs/basic.md';
        const CODEPENPATH = 'codepen/demo.jsx';
        const CONFIGFILEPATH = 'docs/config.json';
        for ( let i = 0; i < componentList.length; i++ ) {
            const mdPath = path.join( DIRPATH, componentList[i], MDFILEPATH );
            const codepenPath = path.join( DIRPATH, componentList[i], CODEPENPATH );
            const configPath = path.join( DIRPATH, componentList[i], CONFIGFILEPATH );
            configData[componentList[i]] = {};
            const currData = configData[componentList[i]];
            currData.mdContent = marked( fs.readFileSync( mdPath, 'utf8' ), mdOptions );
            currData.config = JSON.parse( fs.readFileSync( configPath, 'utf8' ) );
            if ( fs.existsSync( codepenPath ) ) {
                currData.codepen = { ...codepenDefaultConfig, js: fs.readFileSync( codepenPath, 'utf8' ) };
            }
            categoryData[currData.config.category] = categoryData[currData.config.category] ? categoryData[currData.config.category] : [];
            categoryData[currData.config.category].push( currData.config );
        }
        configData.index = {
            mdContent: marked( fs.readFileSync( path.join( __dirname, '../../docs/index.md' ), 'utf8' ), mdOptions )
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