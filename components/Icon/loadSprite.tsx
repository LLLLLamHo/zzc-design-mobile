import icons from './icon';

/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
const svgSprite: any = contents => `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      id="__ZZC_MOBILE_SVG_SPRITE_NODE__"
      style="position:absolute;width:0;height:0"
    >
      <defs>
        ${contents}
      </defs>
    </svg>
`;

const renderSvgSprite: any = () => {
    const symbols:string = Object.keys( icons ).map( ( iconName:string ) => {
        
        const svgContent:string = icons[iconName].split( 'svg' )[1];
        return `<symbol id=${iconName}${svgContent}symbol>`;
    } ).join( '' );
    return svgSprite( symbols );
};

const loadSprite = () => {
    if ( !document ) {
        return;
    }
    const existing = document.getElementById( '__ZZC_MOBILE_SVG_SPRITE_NODE__' );
    const mountNode = document.body;

    if ( !existing ) {
        mountNode.insertAdjacentHTML( 'afterbegin', renderSvgSprite() );
    }
};

export default loadSprite;
