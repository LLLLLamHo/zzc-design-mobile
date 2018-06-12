'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsPane = function (_React$PureComponent) {
    (0, _inherits3.default)(TabsPane, _React$PureComponent);

    function TabsPane() {
        (0, _classCallCheck3.default)(this, TabsPane);
        return (0, _possibleConstructorReturn3.default)(this, (TabsPane.__proto__ || (0, _getPrototypeOf2.default)(TabsPane)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsPane, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                children = _props.children,
                itemKey = _props.itemKey;

            return _react2.default.createElement(
                'div',
                { key: itemKey, className: prefixCls + '-content-item' },
                children
            );
        }
    }]);
    return TabsPane;
}(_react2.default.PureComponent);

exports.default = TabsPane;