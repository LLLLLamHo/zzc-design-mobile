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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsItem = function (_React$PureComponent) {
    (0, _inherits3.default)(TabsItem, _React$PureComponent);

    function TabsItem() {
        (0, _classCallCheck3.default)(this, TabsItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabsItem.__proto__ || (0, _getPrototypeOf2.default)(TabsItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-item') },
                children
            );
        }
    }]);
    return TabsItem;
}(_react2.default.PureComponent);

exports.default = TabsItem;

TabsItem.defaultProps = {
    prefixCls: 'zzc-tabs'
};