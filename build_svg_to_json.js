const fs = require( 'fs' );
const path = require( 'path' );

const CWD = process.cwd();

const ICON_COMPONENT_PATH = path.join( CWD, './components/Icon' );
const SVG_PATH = path.join( ICON_COMPONENT_PATH, './svg' );

const svgList = fs.readdirSync( SVG_PATH );
const IconConfig = {};
for ( let i = 0; i < svgList.length; i++ ) {
    const svg = svgList[i];
    const name = svg.split( '.' )[0];
    if ( name ) {
        let svgContent = fs.readFileSync( path.join( SVG_PATH, svg ), 'utf8' );
        svgContent = svgContent.replace( /"/g, '\'' ).replace( "xmlns='http://www.w3.org/2000/svg'", '' );
        IconConfig[`zds-icon-${name}`] = svgContent;
    }
}

const fileContent = `export default ${JSON.stringify( IconConfig, null, '\t' )}`;

fs.writeFileSync( path.join( ICON_COMPONENT_PATH, './icon.ts' ), fileContent, {
    encoding: 'utf8',
    flag: 'w'
} );
