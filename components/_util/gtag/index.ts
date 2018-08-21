
import config from './config';

let gtagStatus = 'no-install';

export function initGtag( componentName ) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['gtag'] = function() {
        window['dataLayer'].push( arguments );
    };
    if ( config.isOpen ) {
        const scriptList = document.getElementsByTagName( 'script' );
        for ( let i = 0; i < scriptList.length; i++ ) {
            if ( scriptList[i].src.indexOf( 'www.googletagmanager.com/gtag/js' ) != -1 ) {
                gtagStatus = 'install';
                break;
            }
        }
        if ( gtagStatus == 'no-install' ) {
            const script = document.createElement( 'script' );
            script.src = config.url;
            script.async = true;
            document.body.appendChild( script );
        }
        window['gtag']( 'js', new Date() );
        window['gtag']( 'config', config.id );
        zzcDesignMobileUse( componentName );
    }
}

export function zzcDesignMobileUse( componentName ) {
    window['gtag'](
        'config',
        config.id,
        {
            page_title: window.location.host,
            page_path: window.location.pathname
        }
    );
    window['gtag'](
        'event',
        'screen_view',
        {
            screen_name: window.location.host + window.location.pathname,
            app_name: config.name,
            app_id: componentName,
            app_version: config.version
        }
    );
}

export function zzcComponentUse ( componentName, action ) {
    window['gtag'](
        'event',
        action,
        {
            event_category: componentName,
            event_label: config.version
        }
    );
}

