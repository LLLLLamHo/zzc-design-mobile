
import config from './config';

let gtagStatus = 'no-install';
let isInit = false;
const useList = [];
export function initGtag( componentName ) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['gtag'] = function() {
        window['dataLayer'].push( arguments );
    };
    if ( true ) {
    // if ( config.isOpen ) {

        if ( !isInit ) {
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
            window['gtag']( 'config', config.id, {
                page_title: document.title,
                page_location: window.location.host,
                page_path: window.location.pathname,
                custom_map: {
                    dimension1: 'componentName',
                    dimension2: 'componentVersion',
                    dimension3: 'componentUseLocation',
                    dimension4: 'componentUseHost',
                    dimension5: 'errorComponentName',
                    dimension6: 'errorInfo',
                    dimension7: 'errorPath',
                    metric1: 'count',
                    metric2: 'errorCount'
                }
            } );
            window['gtag'](
                'event',
                'screen_view',
                {
                    send_to: config.id,
                    screen_name: window.location.host + window.location.pathname,
                    app_name: config.name,
                    app_id: config.name,
                    app_version: config.version
                }
            );
            isInit = true;
        }
    }
}

export function zzcComponentUse ( componentName, action ) {
    if ( useList.indexOf( componentName ) == -1 ) {
        useList.push( componentName );
        window['gtag'](
            'event',
            action,
            {
                send_to: config.id,
                componentName,
                componentVersion: config.version,
                componentUseLocation: `${window.location.host}${window.location.pathname}`,
                componentUseHost: window.location.host,
                count: 1
            }
        );

        window['gtag'](
            'event',
            action,
            {
                send_to: config.id,
                event_category: `${componentName}-${config.version}`,
                event_label: config.version
            }
        );
    }
}
export function zzcComponetError ( componentName, error, info ) {
    window['gtag'](
        'event',
        'component_error',
        {
            send_to: config.id,
            errorComponentName: componentName,
            errorInfo: `${error}-${info.componentStack}`,
            errorPath: window.location.href,
            errorCount: 1
        }
    );
}

