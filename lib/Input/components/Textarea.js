"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _config = require("../../_util/config");

var _config2 = _interopRequireDefault(_config);

var _typeof = require("../../_util/typeof");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}
function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Textarea = function (_PureComponent) {
    (0, _inherits3.default)(Textarea, _PureComponent);

    function Textarea(props) {
        (0, _classCallCheck3.default)(this, Textarea);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Textarea.__proto__ || (0, _getPrototypeOf2.default)(Textarea)).call(this, props));

        _this.isFoucs = false;
        _this.onFocus = function (e) {
            var _this$props = _this.props,
                formInputOnFocus = _this$props.formInputOnFocus,
                formOpt = _this$props.formOpt,
                onFocus = _this$props.onFocus;

            _this.isFoucs = true;
            _this.textareaRef.focus();
            if (formInputOnFocus && (0, _typeof.isFunction)(formInputOnFocus)) {
                formInputOnFocus(formOpt || null);
            } else if (onFocus && (0, _typeof.isFunction)(onFocus)) {
                onFocus(e);
            }
        };
        _this.onBlur = function (e) {
            _this.isFoucs = false;
            var _this$props2 = _this.props,
                formInputOnBlur = _this$props2.formInputOnBlur,
                formOpt = _this$props2.formOpt,
                onBlur = _this$props2.onBlur;

            if (formInputOnBlur && (0, _typeof.isFunction)(formInputOnBlur)) {
                formInputOnBlur(formOpt || null);
            } else if (onBlur && (0, _typeof.isFunction)(onBlur)) {
                onBlur && onBlur(e);
            }
        };
        _this.onChange = function (e) {
            var _this$props3 = _this.props,
                formInputOnChange = _this$props3.formInputOnChange,
                formOpt = _this$props3.formOpt,
                onChange = _this$props3.onChange;

            var value = e.target.value;
            if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                formInputOnChange(e.target.value, formOpt || null);
            } else if (onChange && (0, _typeof.isFunction)(onChange)) {
                onChange(e);
                if (!('value' in _this.props)) {
                    _this.setState({
                        value: value
                    });
                }
            }
            _this.componentDidUpdate();
        };
        _this.state = {
            value: props.defaultValue || props.value
        };
        return _this;
    }

    (0, _createClass3.default)(Textarea, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: fixControlledValue(nextProps.value)
                });
            }
        }
    }, {
        key: "reAlignHeight",
        value: function reAlignHeight() {
            var textareaDom = this.textareaRef;
            textareaDom.style.height = ''; // 字数减少时能自动减小高度        
            textareaDom.style.height = textareaDom.scrollHeight + "px";
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            // 渲染完成后，需要通知form组件记录value，完成数据绑定
            var _props = this.props,
                id = _props.id,
                value = _props.value,
                _zds_form_initValue = _props._zds_form_initValue,
                setFormItemId = _props.setFormItemId,
                formOpt = _props.formOpt;

            if (_zds_form_initValue && (0, _typeof.isFunction)(_zds_form_initValue)) {
                _zds_form_initValue(id, value, formOpt);
            }
            if (setFormItemId && (0, _typeof.isFunction)(setFormItemId)) {
                setFormItemId(id);
            }
            if (this.props.autoHeight) {
                this.reAlignHeight();
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            // 自动撑高 且 用户是在输入
            if (this.props.autoHeight && this.isFoucs) {
                this.reAlignHeight();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames,
                _this2 = this;

            var value = this.state.value;
            var _props2 = this.props,
                className = _props2.className,
                prefixCls = _props2.prefixCls,
                count = _props2.count,
                disabled = _props2.disabled,
                style = _props2.style,
                placeholder = _props2.placeholder,
                autoHeight = _props2.autoHeight,
                maxLength = _props2.maxLength;

            var hasCount = count > 0;
            var textareaMaxLength = count || maxLength || Infinity;
            var textareaPrefix = prefixCls + "-input-textarea";
            var wraCls = (0, _classnames2.default)(className, textareaPrefix, (_classNames = {}, (0, _defineProperty3.default)(_classNames, textareaPrefix + "-has-count", !!hasCount), (0, _defineProperty3.default)(_classNames, textareaPrefix + "-disabled", !!disabled), (0, _defineProperty3.default)(_classNames, textareaPrefix + "-auto-height", !!autoHeight), _classNames));
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            delete newProps._zds_form_initValue;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formInputOnFocus;
            delete newProps.formOpt;
            delete newProps.setFormItemId;
            delete newProps.value;
            delete newProps.autoHeight;
            delete newProps.defaultValue;
            var countLeftLength = 0;
            if (hasCount) {
                value = value || '';
                // 计算剩余可输入长度
                countLeftLength = count - value.length;
            }
            return _react2.default.createElement(
                "div",
                { className: wraCls },
                _react2.default.createElement("textarea", (0, _extends3.default)({}, newProps, { ref: function ref(el) {
                        _this2.textareaRef = el;
                    }, readOnly: disabled, value: value, style: style, onBlur: function onBlur(e) {
                        return _this2.onBlur(e);
                    }, onChange: function onChange(e) {
                        return _this2.onChange(e);
                    }, onFocus: function onFocus(e) {
                        return _this2.onFocus(e);
                    }, placeholder: placeholder, maxLength: textareaMaxLength })),
                hasCount && countLeftLength <= 10 && _react2.default.createElement(
                    "p",
                    { className: textareaPrefix + "-count", id: "visible-count" },
                    "\u6700\u591A\u8FD8\u53EF\u4EE5\u8F93\u5165",
                    countLeftLength,
                    "\u4E2A\u5B57"
                )
            );
        }
    }]);
    return Textarea;
}(_react.PureComponent);

Textarea.defaultProps = {
    prefixCls: "" + _config2.default.cls,
    className: '',
    style: {},
    disabled: false,
    autoHeight: false,
    placeholder: '',
    maxLength: Infinity,
    onBlur: noop,
    onChange: noop,
    onFocus: noop
};
exports.default = Textarea;