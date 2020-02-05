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

var _TouchFeedback = require('../../TouchFeedback');

var _TouchFeedback2 = _interopRequireDefault(_TouchFeedback);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _ButtonGroup = require('./ButtonGroup');

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_PureComponent) {
    (0, _inherits3.default)(Button, _PureComponent);

    function Button(props) {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));
    }

    (0, _createClass3.default)(Button, [{
        key: 'setActiveClassName',
        value: function setActiveClassName(activeClassName, type) {
            var _classNames;

            var activeClassNameIsNone = activeClassName === '';
            var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-active-' + type, activeClassNameIsNone), (0, _defineProperty3.default)(_classNames, '' + activeClassName, !activeClassNameIsNone), _classNames));
            return className;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classes;

            var _props = this.props,
                inactive = _props.inactive,
                children = _props.children,
                className = _props.className,
                prefixCls = _props.prefixCls,
                type = _props.type,
                size = _props.size,
                inline = _props.inline,
                disabled = _props.disabled,
                style = _props.style,
                activeStyle = _props.activeStyle,
                activeClassName = _props.activeClassName,
                onClick = _props.onClick,
                htmlType = _props.htmlType;

            var btnClassNames = '';
            ;
            var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, prefixCls + '-' + size, size), (0, _defineProperty3.default)(_classes, prefixCls + '-' + type, type !== ''), (0, _defineProperty3.default)(_classes, prefixCls + '-disabled', disabled), (0, _defineProperty3.default)(_classes, prefixCls + '-inactive', inactive), _classes);
            if (inline) {
                btnClassNames = (0, _classnames2.default)(prefixCls, prefixCls + '-inline', className, classes);
            } else {
                btnClassNames = (0, _classnames2.default)(prefixCls, className, classes);
            }
            return _react2.default.createElement(
                _TouchFeedback2.default,
                { activeStyle: activeStyle ? activeStyle : {}, activeClassName: this.setActiveClassName(activeClassName, type), disabled: inactive || disabled },
                htmlType ? _react2.default.createElement(
                    'button',
                    { type: htmlType, className: btnClassNames, style: style, onClick: onClick },
                    children
                ) : _react2.default.createElement(
                    'div',
                    { className: btnClassNames, style: style, onClick: onClick },
                    children
                )
            );
        }
    }]);
    return Button;
}(_react.PureComponent);

exports.default = Button;

Button.defaultProps = {
    prefixCls: _config2.default.cls + '-button',
    size: false,
    inline: false,
    disabled: false,
    inactive: false,
    type: 'default',
    htmlType: null,
    onClick: function onClick() {},

    className: '',
    style: {},
    activeStyle: {},
    activeClassName: ''
};
Button.ButtonGroup = _ButtonGroup2.default;