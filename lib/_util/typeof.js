'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isWindow = isWindow;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isString = isString;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isRegExp = isRegExp;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isDate = isDate;
exports.isDOM = isDOM;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isType(s, typeString) {
    return Object.prototype.toString.call(s) === '[object ' + typeString + ']';
}
function isWindow(s) {
    return isType(s, 'Window');
}
function isObject(s) {
    return isType(s, 'Object');
}
function isArray(s) {
    return Array.isArray ? Array.isArray(s) : isType(s, 'Array');
}
function isString(s) {
    return isType(s, 'String');
}
function isFunction(s) {
    return isType(s, 'Function');
}
function isNumber(s) {
    return isType(s, 'Number');
}
function isRegExp(s) {
    return isType(s, 'RegExp');
}
function isUndefined(s) {
    return isType(s, 'Undefined');
}
function isNull(s) {
    return isType(s, 'Null');
}
function isDate(s) {
    return isType(s, 'Date');
}
function isDOM(s) {
    if ((typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object') {
        return s instanceof HTMLElement;
    }
    return s && (typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object' && s.nodeType === 1 && typeof s.nodeName === 'string';
}