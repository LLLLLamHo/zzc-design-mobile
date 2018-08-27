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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _gtag = require('../../_util/gtag');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_PureComponent) {
    (0, _inherits3.default)(Card, _PureComponent);

    function Card(props) {
        (0, _classCallCheck3.default)(this, Card);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).call(this, props));

        (0, _gtag.zzcComponentUse)('Card', '组件渲染');
        return _this;
    }

    (0, _createClass3.default)(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                full = _props.full,
                children = _props.children,
                className = _props.className;

            var cardClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-full', full));
            return _react2.default.createElement(
                'div',
                { style: style, className: cardClassName },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-box' },
                    children
                )
            );
        }
    }]);
    return Card;
}(_react.PureComponent);

exports.default = Card;

Card.defaultProps = {
    prefixCls: _config2.default.cls + '-card',
    className: '',
    full: false,
    style: {}
};