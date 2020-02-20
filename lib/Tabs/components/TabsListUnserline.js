'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = TabsListUnserlineProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabsListUnserlineProps(props) {
    var prefixCls = props.prefixCls,
        size = props.size,
        animated = props.animated,
        tabBarPosition = props.tabBarPosition,
        tabBarUnderlineStyle = props.tabBarUnderlineStyle,
        linePosition = props.linePosition;

    var unlineTransform = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? 'translate3d(' + linePosition + 'px,0,0)' : 'translate3d(0,' + linePosition + 'px,0)';
    var style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: size + 'px', transform: unlineTransform } : { height: size + 'px', transform: unlineTransform };
    style = (0, _assign2.default)({}, style, tabBarUnderlineStyle);
    var cls = (0, _classnames3.default)(prefixCls + '-ls-unline', prefixCls + '-ls-unline-' + tabBarPosition, (0, _defineProperty3.default)({}, prefixCls + '-ls-unline-am', animated));
    return _react2.default.createElement('div', { className: cls, style: style });
}