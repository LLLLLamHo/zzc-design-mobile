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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
    (0, _inherits3.default)(Header, _PureComponent);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);
        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'setContent',
        value: function setContent() {
            var _props = this.props,
                title = _props.title,
                extra = _props.extra,
                prefixCls = _props.prefixCls,
                children = _props.children,
                extraOnClick = _props.extraOnClick,
                titleOnClick = _props.titleOnClick;

            if (children) {
                return children;
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                title !== '' && _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            titleOnClick && titleOnClick();
                        }, className: (0, _classnames2.default)(prefixCls + '-title') },
                    title
                ),
                extra && _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            extraOnClick && extraOnClick();
                        }, className: (0, _classnames2.default)(prefixCls + '-extra') },
                    extra
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                style = _props2.style,
                className = _props2.className,
                prefixCls = _props2.prefixCls,
                noBorder = _props2.noBorder;

            var headClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-noborder', noBorder));
            return _react2.default.createElement(
                'div',
                { style: style, className: headClassName },
                this.setContent()
            );
        }
    }]);
    return Header;
}(_react.PureComponent);

exports.default = Header;

Header.defaultProps = {
    prefixCls: 'zzc-card-header',
    className: '',
    title: '',
    extra: false,
    children: false,
    noBorder: false,
    extraOnClick: null,
    titleOnClick: null,
    style: {}
};