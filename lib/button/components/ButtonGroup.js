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

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_PureComponent) {
    (0, _inherits3.default)(ButtonGroup, _PureComponent);

    function ButtonGroup(props) {
        (0, _classCallCheck3.default)(this, ButtonGroup);
        return (0, _possibleConstructorReturn3.default)(this, (ButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(ButtonGroup)).call(this, props));
    }

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                direction = _props.direction;

            var btnGroupClass = (0, _classnames2.default)(prefixCls, className, prefixCls + '-' + direction);
            return _react2.default.createElement(
                'div',
                { style: style, className: btnGroupClass },
                children
            );
        }
    }]);
    return ButtonGroup;
}(_react.PureComponent);

exports.default = ButtonGroup;

ButtonGroup.defaultProps = {
    prefixCls: _config2.default.cls + '-button-group',
    className: '',
    direction: 'center',
    style: {}
};