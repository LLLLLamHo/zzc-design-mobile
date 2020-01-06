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

require('../index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3.default)(Switch, _React$Component);

    function Switch(props) {
        (0, _classCallCheck3.default)(this, Switch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Switch.__proto__ || (0, _getPrototypeOf2.default)(Switch)).call(this, props));

        _this.handlerClickEvent = function (e) {
            var checked = _this.state.checked;
            var onClick = _this.props.onClick;

            var newChecked = !checked;
            _this.setCheckedStatus(newChecked, e);
            onClick instanceof Function && onClick(newChecked, e);
        };
        _this.setCheckedStatus = function (checked, e) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onChange = _this$props.onChange;

            if (!!disabled) {
                return;
            }
            if (!('checked' in _this.props)) {
                _this.setState({
                    checked: checked
                });
            }
            onChange instanceof Function && onChange(checked, e);
        };
        var checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }
        _this.state = { checked: checked };
        return _this;
    }

    (0, _createClass3.default)(Switch, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                checkedChildren = _props.checkedChildren,
                unCheckedChildren = _props.unCheckedChildren,
                style = _props.style;
            var checked = this.state.checked;

            var switchClassName = (0, _classnames2.default)('zds-switch', className, {
                'zds-switch-checked': !!checked
            }, {
                'zds-switch-disabled': !!disabled
            });
            return _react2.default.createElement(
                'div',
                { style: style, className: switchClassName, 'data-checkstatus': checked
                    // disabled ={disabled}
                    , onClick: this.handlerClickEvent },
                (!!checkedChildren || !!unCheckedChildren) && _react2.default.createElement(
                    'span',
                    { className: 'zds-switch-inner' },
                    !!checked ? checkedChildren : unCheckedChildren
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
            var checked = nextProps.checked;

            var newState = {};
            !!('checked' in nextProps) && (newState.checked = !!checked);
            return newState;
        }
    }]);
    return Switch;
}(_react2.default.Component);

exports.default = Switch;

Switch.defaultProps = {
    prefixCls: _config2.default.cls + '-switch',
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: function onChange() {},

    disabled: false,
    style: {}
};