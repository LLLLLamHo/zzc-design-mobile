'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zhCN = require('./zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

var _zhHK = require('./zh-HK');

var _zhHK2 = _interopRequireDefault(_zhHK);

var _zhEN = require('./zh-EN');

var _zhEN2 = _interopRequireDefault(_zhEN);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    cn: _zhCN2.default,
    hk: _zhHK2.default,
    en: _zhEN2.default
};