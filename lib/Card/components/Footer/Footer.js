'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../../_util/config');

var _config2 = _interopRequireDefault(_config);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_PureComponent) {
    (0, _inherits3.default)(Footer, _PureComponent);

    function Footer() {
        (0, _classCallCheck3.default)(this, Footer);
        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className,
                prefixCls = _props.prefixCls,
                noBorder = _props.noBorder,
                children = _props.children;

            var footerClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-noborder', noBorder));
            return _react2.default.createElement(
                'div',
                { style: style, className: footerClassName },
                children && children
            );
        }
    }]);
    return Footer;
}(_react.PureComponent);

exports.default = Footer;

Footer.defaultProps = {
    prefixCls: _config2.default.cls + '-card-footer',
    className: '',
    children: null,
    noBorder: false,
    style: {}
};