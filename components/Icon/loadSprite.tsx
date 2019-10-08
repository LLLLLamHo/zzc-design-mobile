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

// both minified by https://github.com/svg/svgo
const icons: Object = {
    'zds-icon-loading': '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    'zds-icon-waring': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M23.5 12.25h5v18h-5zM23.5 34.75h5v5h-5z"/></svg>',
    'zds-icon-error': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 50a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/><path d="M33.07 16.1L26 23.17l-7.07-7.07-2.83 2.83L23.17 26l-7.07 7.07 2.83 2.83L26 28.83l7.07 7.07 2.83-2.83L28.83 26l7.07-7.07-2.83-2.83z"/></svg>',
    'zds-icon-success': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M19.99 32.67l-7.07-7.07-2.83 2.83 9.9 9.89L41.91 16.4l-2.83-2.82-19.09 19.09z"/></svg>',
    'zds-icon-arrow-right': '<svg viewBox="0 0 24 24"><path d="M6 4.3L8.3 2 18 12 8.3 22 6 19.7l7.5-7.7z"/></svg>',
    'zds-icon-confirm': '<svg viewBox="0 0 52 52"><circle fill="#000" cx="18" cy="18" r="18"/><path stroke="#FFF" stroke-width="3" stroke-linejoin="round" d="M9.86 18.1l5.9 6.3L26.8 11.8"/></svg>',
    'zds-icon-info': '<svg class="icon" viewBox="0 0 1024 1024"><defs><style/></defs><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/><path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"/></svg>',
    'zds-icon-right': '<svg class="icon" viewBox="0 0 1024 1024"><defs><style/></defs><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"/></svg>'
};

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
