/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
const svgSprite = contents => `
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

// both minified by https://github.com/svg/svgo
const icons = {
    loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    waring: '<svg viewBox="0 0 52 52"><path fill="#FFF" d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path fill="#FFF" d="M23.5 12.25h5v18h-5zM23.5 34.75h5v5h-5z"/></svg>',
    error: '<svg viewBox="0 0 52 52"><path fill="#FFF" d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 50a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/><path fill="#FFF" d="M33.07 16.1L26 23.17l-7.07-7.07-2.83 2.83L23.17 26l-7.07 7.07 2.83 2.83L26 28.83l7.07 7.07 2.83-2.83L28.83 26l7.07-7.07-2.83-2.83z"/></svg>',
    success: '<svg viewBox="0 0 52 52"><path fill="#FFF" d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path fill="#FFF" d="M19.99 32.67l-7.07-7.07-2.83 2.83 9.9 9.89L41.91 16.4l-2.83-2.82-19.09 19.09z"/></svg>'
};

const renderSvgSprite = () => {
    const symbols = Object.keys( icons ).map( ( iconName ) => {
        const svgContent = icons[iconName].split( 'svg' )[1];
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
