'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getOwnPropertySymbols = require('babel-runtime/core-js/object/get-own-property-symbols');

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _loadSprite = require('./loadSprite');

var _loadSprite2 = _interopRequireDefault(_loadSprite);

var _config = require('../_util/config');

var _config2 = _interopRequireDefault(_config);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

(0, _loadSprite2.default)();

var Icon = function (_React$PureComponent) {
    (0, _inherits3.default)(Icon, _React$PureComponent);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _loadSprite2.default)();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                className = _a.className,
                style = _a.style,
                reset = __rest(_a, ["prefixCls", "type", "size", "className", "style"]);
            var cls = (0, _classnames2.default)(className, prefixCls, prefixCls + '-' + size, prefixCls + '-' + type);
            return _react2.default.createElement(
                'svg',
                (0, _extends3.default)({ className: cls, style: style }, reset),
                _react2.default.createElement('use', { xlinkHref: '#' + prefixCls + '-' + type })
            );
        }
    }]);
    return Icon;
}(_react2.default.PureComponent);

exports.default = Icon;

Icon.defaultProps = {
    prefixCls: _config2.default.cls + '-icon',
    type: undefined,
    size: 'md',
    className: '',
    style: {}
};