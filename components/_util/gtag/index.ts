
import config from './config';

let gtagStatus: string = 'no-install';
let isInit: boolean = false;
const useList: Array<string> = [];

export function initGtag() {
    window['dataLayer'] = window['dataLayer'] || [];
    window['gtag'] = function() {
        window['dataLayer'].push( arguments );
    };
    if ( config.isOpen ) {
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
                    dimension6: 'errorMsg',
                    dimension7: 'errorPath',
                    dimension8: 'errorInfo',
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

initGtag();

export function zzcComponentUse ( componentName: string, action: string ) {
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
export function zzcComponetError ( componentName: string, error: string, info: any ) {
    window['gtag'](
        'event',
        '组件报错',
        {
            send_to: config.id,
            errorComponentName: componentName,
            errorMsg: error,
            errorInfo: info.componentStack,
            errorPath: window.location.href,
            errorCount: 1,
            app_version: config.version
        }
    );
}

