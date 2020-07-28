'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _typeof4 = require('../../_util/typeof');

var _trim = require('../../_util/trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = function (_PureComponent) {
    (0, _inherits3.default)(FormItem, _PureComponent);

    function FormItem(props) {
        (0, _classCallCheck3.default)(this, FormItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FormItem.__proto__ || (0, _getPrototypeOf2.default)(FormItem)).call(this, props));

        _this.inputId = [];
        _this.validationTime = null;
        _this.state = {
            status: 'blur',
            clearBtnStatus: false
        };
        _this.inputChange = _this.inputChange.bind(_this);
        _this.inputBlur = _this.inputBlur.bind(_this);
        _this.inputFocus = _this.inputFocus.bind(_this);
        _this.setFormItemId = _this.setFormItemId.bind(_this);
        _this.clearTextInputValue = _this.clearTextInputValue.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(FormItem, [{
        key: 'inputChange',
        value: function inputChange(id, value, noticeFormFn, formOpt) {
            if (formOpt.validateTrigger == 'onChange') {
                this.validationData(id);
            }
            // 单独触发formOnBlur
            if (formOpt.formOnChange && (0, _typeof4.isFunction)(formOpt.formOnChange)) {
                formOpt.formOnChange(value);
            }
            // 传入参数trim，则触发trim
            if ((0, _typeof4.isString)(value)) {
                if (formOpt.trim) {
                    value = (0, _trim2.default)('all', value);
                } else if (formOpt.trimStart) {
                    value = (0, _trim2.default)('start', value);
                } else if (formOpt.trimEnd) {
                    value = (0, _trim2.default)('end', value);
                }
            }
            noticeFormFn(id, value);
        }
    }, {
        key: 'inputBlur',
        value: function inputBlur(id, formOpt) {
            if (formOpt.validateTrigger == 'onBlur') {
                this.validationData(id);
            }
            // 单独触发formOnBlur
            if (formOpt.formOnBlur && (0, _typeof4.isFunction)(formOpt.formOnBlur)) {
                formOpt.formOnBlur();
            }
            this.changeItemStatus('blur');
        }
    }, {
        key: 'inputFocus',
        value: function inputFocus(id, formOpt) {
            if (formOpt.validateTrigger == 'onFocus') {
                this.validationData(id);
            }
            // 单独触发formOnFocus
            if (formOpt.formOnFocus && (0, _typeof4.isFunction)(formOpt.formOnFocus)) {
                formOpt.formOnFocus();
            }
            this.changeItemStatus('focus');
        }
    }, {
        key: 'changeItemStatus',
        value: function changeItemStatus(type) {
            var _this2 = this;

            this.delayHideClearBtnTimer && clearTimeout(this.delayHideClearBtnTimer);
            this.setState({
                status: type,
                clearBtnStatus: type == 'focus' ? true : this.state.clearBtnStatus
            }, function () {
                if (_this2.state.status == 'blur') {
                    // 同步设置clearBtnStatus为false会导致无法点击，需要延迟更改
                    _this2.delayHideClearBtnTimer = setTimeout(function () {
                        _this2.setState({
                            clearBtnStatus: false
                        });
                    }, 200);
                }
            });
        }
    }, {
        key: 'validationData',
        value: function validationData(id) {
            var _this3 = this;

            if (this.validationTime) {
                clearTimeout(this.validationTime);
                this.validationTime = null;
            }
            this.validationTime = setTimeout(function () {
                var formContext = _this3.props.formContext;

                formContext.validation(id, null);
            }, 100);
        }
        // 设置当前的formItem是那个id所使用

    }, {
        key: 'setFormItemId',
        value: function setFormItemId(id, type) {
            // 兼容多个input的情况
            this.inputId.push({ id: id, inputType: type });
        }
    }, {
        key: 'getCurrFormItemStatus',
        value: function getCurrFormItemStatus(itemStatus) {
            var isSuccess = false;
            var isWarning = false;
            var isError = false;
            var message = '';
            for (var i = 0; i < this.inputId.length; i++) {
                var currItemStatusData = itemStatus[this.inputId[i].id];
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
            var status = this.state.status;

            return (0, _classnames3.default)(prefixCls + '-box', (_classnames = {}, (0, _defineProperty3.default)(_classnames, prefixCls + '-box-focus', status == 'focus'), (0, _defineProperty3.default)(_classnames, prefixCls + '-box-error', isError), (0, _defineProperty3.default)(_classnames, prefixCls + '-box-success', isSuccess), (0, _defineProperty3.default)(_classnames, prefixCls + '-box-warning', isWarning), _classnames));
        }
        // private checkIsShowClearBtn(): boolean {
        //     const { formContext } = this.props;
        //     const { formData } = formContext;
        //     for (let i = 0; i < this.inputId.length; i++) {
        //         if (this.inputId[i].inputType == 'text' && formData[this.inputId[i].id].value != null && formData[this.inputId[i].id].value != '') {
        //             return true;
        //         }
        //     }
        //     return false;
        // }

    }, {
        key: 'clearTextInputValue',
        value: function clearTextInputValue() {
            var formContext = this.props.formContext;
            var formData = formContext.formData,
                setValue = formContext.setValue;

            for (var i = 0; i < this.inputId.length; i++) {
                // if (this.inputId[i].inputType == 'text' && formData[this.inputId[i].id].value != null && formData[this.inputId[i].id].value != '') {
                // }
                var value = formData[this.inputId[i].id].value;

                if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
                    setValue(this.inputId[i].id, (0, _assign2.default)({}, value, { value: '' }));
                } else {
                    setValue(this.inputId[i].id, '');
                }
                this.validationData(this.inputId[i].id);
            }
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
                extra = _props.extra,
                clearBtn = _props.clearBtn,
                _onClick = _props.onClick;
            var clearBtnStatus = this.state.clearBtnStatus;

            var classname = (0, _classnames3.default)(prefixCls, className);
            // 错误样式
            var itemStatus = this.props.formContext.itemStatus;

            var currFormItemStatusData = this.getCurrFormItemStatus(itemStatus);
            var itemBoxClassName = this.getCurrFormItemClassName(currFormItemStatusData);
            // const isShowClearBtn = clearBtn ? this.checkIsShowClearBtn() : false;
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
                    { className: itemBoxClassName, onClick: function onClick() {
                            _onClick && (0, _typeof4.isFunction)(_onClick) && _onClick();
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: _config2.default.cls + '-form-item-line' },
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
                            clearBtn && clearBtnStatus && _react2.default.createElement(
                                'div',
                                { onClick: this.clearTextInputValue, className: prefixCls + '-extra-box' },
                                _react2.default.createElement(_Icon2.default, { className: 'clear-input-btn', type: 'error_fill' })
                            ),
                            extra && _react2.default.createElement(
                                'div',
                                { className: prefixCls + '-extra-box' },
                                extra
                            )
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
    extra: null,
    clearBtn: false
};