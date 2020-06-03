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

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_PureComponent) {
    (0, _inherits3.default)(Button, _PureComponent);

    function Button(props) {
        (0, _classCallCheck3.default)(this, Button);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call(this, props));

        _this.clickHandle = _this.clickHandle.bind(_this);
        return _this;
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
        key: 'clickHandle',
        value: function clickHandle() {
            var _props = this.props,
                onClick = _props.onClick,
                loading = _props.loading,
                inactive = _props.inactive,
                disabled = _props.disabled;

            if (loading || inactive || disabled) return;
            onClick && onClick();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classes;

            var _props2 = this.props,
                loading = _props2.loading,
                inactive = _props2.inactive,
                children = _props2.children,
                className = _props2.className,
                prefixCls = _props2.prefixCls,
                type = _props2.type,
                size = _props2.size,
                inline = _props2.inline,
                disabled = _props2.disabled,
                style = _props2.style,
                activeStyle = _props2.activeStyle,
                activeClassName = _props2.activeClassName,
                htmlType = _props2.htmlType;

            var btnClassNames = '';
            ;
            var classes = (_classes = {}, (0, _defineProperty3.default)(_classes, prefixCls + '-' + size, size), (0, _defineProperty3.default)(_classes, prefixCls + '-' + type, type !== ''), (0, _defineProperty3.default)(_classes, prefixCls + '-disabled', disabled), (0, _defineProperty3.default)(_classes, prefixCls + '-inactive', inactive), (0, _defineProperty3.default)(_classes, prefixCls + '-loading', loading), _classes);
            if (inline) {
                btnClassNames = (0, _classnames2.default)(prefixCls, prefixCls + '-inline', className, classes);
            } else {
                btnClassNames = (0, _classnames2.default)(prefixCls, className, classes);
            }
            return _react2.default.createElement(
                _TouchFeedback2.default,
                { activeStyle: activeStyle ? activeStyle : {}, activeClassName: this.setActiveClassName(activeClassName, type), disabled: inactive || disabled || loading },
                htmlType ? _react2.default.createElement(
                    'button',
                    { type: htmlType, className: btnClassNames, style: style, onClick: this.clickHandle },
                    loading && _react2.default.createElement(_Icon2.default, { className: prefixCls + '-loading-icon', type: 'loading' }),
                    children
                ) : _react2.default.createElement(
                    'div',
                    { className: btnClassNames, style: style, onClick: this.clickHandle },
                    loading && _react2.default.createElement(_Icon2.default, { className: prefixCls + '-loading-icon', type: 'loading' }),
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
    loading: false,
    onClick: function onClick() {},

    className: '',
    style: {},
    activeStyle: {},
    activeClassName: ''
};
Button.ButtonGroup = _ButtonGroup2.default;