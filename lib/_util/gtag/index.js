'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initGtag = initGtag;
exports.zzcComponentUse = zzcComponentUse;
exports.zzcComponetError = zzcComponetError;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gtagStatus = 'no-install';
var isInit = false;
var useList = [];
function initGtag() {
    window['dataLayer'] = window['dataLayer'] || [];
    window['gtag'] = function () {
        window['dataLayer'].push(arguments);
    };
    if (_config2.default.isOpen) {
        if (!isInit) {
            var scriptList = document.getElementsByTagName('script');
            for (var i = 0; i < scriptList.length; i++) {
                if (scriptList[i].src.indexOf('www.googletagmanager.com/gtag/js') != -1) {
                    gtagStatus = 'install';
                    break;
                }
            }
            if (gtagStatus == 'no-install') {
                var script = document.createElement('script');
                script.src = _config2.default.url;
                script.async = true;
                document.body.appendChild(script);
            }
            window['gtag']('js', new Date());
            window['gtag']('config', _config2.default.id, {
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
            });
            window['gtag']('event', 'screen_view', {
                send_to: _config2.default.id,
                screen_name: window.location.host + window.location.pathname,
                app_name: _config2.default.name,
                app_id: _config2.default.name,
                app_version: _config2.default.version
            });
            isInit = true;
        }
    }
}
initGtag();
function zzcComponentUse(componentName, action) {
    if (useList.indexOf(componentName) == -1) {
        useList.push(componentName);
        window['gtag']('event', action, {
            send_to: _config2.default.id,
            componentName: componentName,
            componentVersion: _config2.default.version,
            componentUseLocation: '' + window.location.host + window.location.pathname,
            componentUseHost: window.location.host,
            count: 1
        });
        window['gtag']('event', action, {
            send_to: _config2.default.id,
            event_category: componentName + '-' + _config2.default.version,
            event_label: _config2.default.version
        });
    }
}
function zzcComponetError(componentName, error, info) {
    window['gtag']('event', '组件报错', {
        send_to: _config2.default.id,
        errorComponentName: componentName,
        errorMsg: error,
        errorInfo: info.componentStack,
        errorPath: window.location.href,
        errorCount: 1,
        app_version: _config2.default.version
    });
}