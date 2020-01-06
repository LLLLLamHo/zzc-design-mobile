'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

exports.default = function (props) {
    return _react2.default.createElement(
        _context.FormContext.Consumer,
        null,
        function (state) {
            return _react2.default.createElement(FormItem, (0, _extends3.default)({}, props, { formContext: (0, _assign2.default)({}, state) }));
        }
    );
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _context = require('./context');

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = function (_PureComponent) {
    (0, _inherits3.default)(FormItem, _PureComponent);

    function FormItem(props) {
        (0, _classCallCheck3.default)(this, FormItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FormItem.__proto__ || (0, _getPrototypeOf2.default)(FormItem)).call(this, props));

        _this.inputId = [];
        _this.validationTime = null;
        _this.inputChange = _this.inputChange.bind(_this);
        _this.inputBlur = _this.inputBlur.bind(_this);
        _this.inputFocus = _this.inputFocus.bind(_this);
        _this.setFormItemId = _this.setFormItemId.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(FormItem, [{
        key: 'inputChange',
        value: function inputChange(id, value, noticeFormFn, formOpt) {
            debugger;
            if (formOpt.validateTrigger == 'onChange') {
                this.validationData(id);
            }
            noticeFormFn(id, value);
        }
    }, {
        key: 'inputBlur',
        value: function inputBlur(id, formOpt) {
            if (formOpt.validateTrigger == 'onBlur') {
                this.validationData(id);
            }
        }
    }, {
        key: 'inputFocus',
        value: function inputFocus(id, formOpt) {
            if (formOpt.validateTrigger == 'onFocus') {
                this.validationData(id);
            }
        }
    }, {
        key: 'validationData',
        value: function validationData(id) {
            var _this2 = this;

            if (this.validationTime) {
                clearTimeout(this.validationTime);
                this.validationTime = null;
            }
            this.validationTime = setTimeout(function () {
                var formContext = _this2.props.formContext;

                formContext.validation(id, null);
            }, 100);
        }
        // 设置当前的formItem是那个id所使用

    }, {
        key: 'setFormItemId',
        value: function setFormItemId(id) {
            // 兼容多个input的情况
            this.inputId.push(id);
        }
    }, {
        key: 'getCurrFormItemStatus',
        value: function getCurrFormItemStatus(itemStatus) {
            var isSuccess = false;
            var isWarning = false;
            var isError = false;
            var message = '';
            for (var i = 0; i < this.inputId.length; i++) {
                var currItemStatusData = itemStatus[this.inputId[i]];
                if (currItemStatusData.status == 'success') {
                    isSuccess = true;
                    message = currItemStatusData.message;
                } else if (currItemStatusData.status == 'warning') {
                    isSuccess = false;
                    isWarning = true;
                    message = currItemStatusData.message;
                    break;
                } else if (currItemStatusData.status == 'error') {
                    isWarning = false;
                    isSuccess = false;
                    isError = true;
                    message = currItemStatusData.message;
                    break;
                }
            }
            return {
                message: message,
                isSuccess: isSuccess,
                isWarning: isWarning,
                isError: isError
            };
        }
        // 获取当前formItem的状态

    }, {
        key: 'getCurrFormItemClassName',
        value: function getCurrFormItemClassName(statusData) {
            var _classnames;

            var prefixCls = this.props.prefixCls;
            var isError = statusData.isError,
                isSuccess = statusData.isSuccess,
                isWarning = statusData.isWarning;

            return (0, _classnames3.default)(prefixCls + '-box', (_classnames = {}, (0, _defineProperty3.default)(_classnames, prefixCls + '-box-error', isError), (0, _defineProperty3.default)(_classnames, prefixCls + '-box-success', isSuccess), (0, _defineProperty3.default)(_classnames, prefixCls + '-box-warning', isWarning), _classnames));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                htmlFor = _props.htmlFor,
                label = _props.label,
                colon = _props.colon,
                children = _props.children,
                extra = _props.extra;

            var classname = (0, _classnames3.default)(prefixCls, className);
            // 错误样式
            var itemStatus = this.props.formContext.itemStatus;

            var currFormItemStatusData = this.getCurrFormItemStatus(itemStatus);
            var itemBoxClassName = this.getCurrFormItemClassName(currFormItemStatusData);
            return _react2.default.createElement(
                _context.FormItemContext.Provider,
                { value: {
                        formInputOnChange: this.inputChange,
                        formInputOnBlur: this.inputBlur,
                        formInputOnFocus: this.inputFocus,
                        setFormItemId: this.setFormItemId
                    } },
                _react2.default.createElement(
                    'div',
                    { className: itemBoxClassName },
                    _react2.default.createElement(
                        'div',
                        { className: classname, style: style },
                        label && _react2.default.createElement(
                            'label',
                            { htmlFor: htmlFor },
                            label,
                            colon && ':'
                        ),
                        children,
                        extra && _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-extra-box' },
                            extra
                        )
                    ),
                    currFormItemStatusData && currFormItemStatusData.isError && _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-error-box' },
                        _react2.default.createElement(_Icon2.default, { type: 'warning_outline' }),
                        _react2.default.createElement(
                            'p',
                            null,
                            currFormItemStatusData.message
                        )
                    ),
                    currFormItemStatusData && currFormItemStatusData.isWarning && _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-warning-box' },
                        _react2.default.createElement(_Icon2.default, { type: 'warning_outline' }),
                        _react2.default.createElement(
                            'p',
                            null,
                            currFormItemStatusData.message
                        )
                    ),
                    currFormItemStatusData && currFormItemStatusData.isSuccess && _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-success-box' },
                        _react2.default.createElement(_Icon2.default, { type: 'success_outline' }),
                        _react2.default.createElement(
                            'p',
                            null,
                            currFormItemStatusData.message
                        )
                    )
                )
            );
        }
    }]);
    return FormItem;
}(_react.PureComponent);

FormItem.defaultProps = {
    prefixCls: _config2.default.cls + '-form-item',
    className: '',
    style: {},
    htmlFor: null,
    colon: false,
    extra: null
};