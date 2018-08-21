'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initGtag = initGtag;
exports.zzcDesignMobileUse = zzcDesignMobileUse;
exports.zzcComponentUse = zzcComponentUse;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gtagStatus = 'no-install';
function initGtag(componentName) {
    window['dataLayer'] = window['dataLayer'] || [];
    window['gtag'] = function () {
        window['dataLayer'].push(arguments);
    };
    if (_config2.default.isOpen) {
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
        window['gtag']('config', _config2.default.id);
        zzcDesignMobileUse(componentName);
    }
}
function zzcDesignMobileUse(componentName) {
    window['gtag']('config', _config2.default.id, {
        page_title: window.location.host,
        page_path: window.location.pathname
    });
    window['gtag']('event', 'screen_view', {
        screen_name: window.location.host + window.location.pathname,
        app_name: _config2.default.name,
        app_id: componentName,
        app_version: _config2.default.version
    });
}
function zzcComponentUse(componentName, action) {
    window['gtag']('event', action, {
        event_category: componentName,
        event_label: _config2.default.version
    });
}