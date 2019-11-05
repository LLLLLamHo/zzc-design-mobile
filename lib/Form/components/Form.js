'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _context = require('./context');

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function (_PureComponent) {
    (0, _inherits3.default)(Form, _PureComponent);

    function Form(props) {
        (0, _classCallCheck3.default)(this, Form);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

        _this.formComponent = null;
        // 扩展给业务组件调用的函数
        _this.form = {
            // 获取原生form表单对象
            getFormComponent: function getFormComponent() {
                return _this.formComponent;
            },
            // 将input托管给form
            getFieldDecorator: function getFieldDecorator(id, opt, item) {
                // todo
                var defaultOpt = {
                    initialValue: '',
                    rules: [],
                    trigger: 'onChange',
                    validateTrigger: 'onBlur'
                };
                var newOpt = (0, _assign2.default)(defaultOpt, opt);
                return _react2.default.createElement(
                    _context.FormItemContext.Consumer,
                    null,
                    function (state) {
                        var formData = _this.state.formData;

                        var changeFun = function changeFun(value, formOpt) {
                            state.formInputOnChange && state.formInputOnChange(id, value, _this.setValue, formOpt);
                        };
                        var blurFun = function blurFun(formOpt) {
                            state.formInputOnBlur && state.formInputOnBlur(id, formOpt);
                        };
                        var focusFun = function focusFun(formOpt) {
                            state.formInputOnFocus && state.formInputOnFocus(id, formOpt);
                        };
                        var value = formData[id] != null ? formData[id]['value'] : newOpt.initialValue || '';
                        return _react2.default.cloneElement(item, (0, _assign2.default)({}, state, { id: id, formInputOnChange: changeFun, formInputOnBlur: blurFun, formInputOnFocus: focusFun, _zds_form_initValue: _this.initFormItemValue, value: value, formOpt: newOpt }));
                    }
                );
            },
            initFormItemValue: function initFormItemValue(id, value, formOpt) {
                _this.initFormItemValue(id, value, formOpt);
            },
            // 外部设置form的值
            setFormAssignValue: function setFormAssignValue(id, value) {
                _this.setValue(id, value);
            },
            getFormAllData: function getFormAllData() {
                return _this.getAllData();
            }
        };
        _this.state = {
            formData: {},
            itemStatus: {}
        };
        _this.updateFormItemStatus = _this.updateFormItemStatus.bind(_this);
        _this.setValue = _this.setValue.bind(_this);
        _this.initFormItemValue = _this.initFormItemValue.bind(_this);
        _this.validation = _this.validation.bind(_this);
        _this.getAllData = _this.getAllData.bind(_this);
        _this.formOnSubmit = _this.formOnSubmit.bind(_this);
        _this.getFormComponent = _this.getFormComponent.bind(_this);
        return _this;
    }
    // 获取form原生对象


    (0, _createClass3.default)(Form, [{
        key: 'getFormComponent',
        value: function getFormComponent(component) {
            this.formComponent = component;
        }
        // 获取所有数据

    }, {
        key: 'getAllData',
        value: function getAllData() {
            var _state = this.state,
                formData = _state.formData,
                itemStatus = _state.itemStatus;

            var ids = (0, _keys2.default)(formData);
            var outputData = {};
            for (var i = 0; i < ids.length; i++) {
                var value = formData[ids[i]].value;

                if (!outputData[ids[i]]) {
                    outputData[ids[i]] = {};
                }
                outputData[ids[i]] = (0, _assign2.default)({}, itemStatus[ids[i]]);
                outputData[ids[i]].value = value;
            }
            return outputData;
        }
        // 初始化数据到表单中储存

    }, {
        key: 'initFormItemValue',
        value: function initFormItemValue(id, value, formOpt) {
            var _state2 = this.state,
                itemStatus = _state2.itemStatus,
                formData = _state2.formData;

            itemStatus[id] = {
                status: 'normal',
                message: '',
                errorRuleIndex: null
            };
            formData[id] = (0, _assign2.default)({ value: value }, formOpt);
            var newFormData = (0, _assign2.default)({}, formData);
            var newItemStatusData = (0, _assign2.default)({}, itemStatus);
            this.setState({
                formData: newFormData,
                itemStatus: newItemStatusData
            });
        }
        // 更新状态

    }, {
        key: 'updateFormItemStatus',
        value: function updateFormItemStatus(id, status, message, errorRuleIndex) {
            var itemStatus = this.state.itemStatus;

            itemStatus[id] = {
                status: status,
                message: message,
                errorRuleIndex: errorRuleIndex
            };
            var newItemStatusData = (0, _assign2.default)({}, itemStatus);
            this.setState({
                itemStatus: newItemStatusData
            });
        }
        // 同步数据给表单

    }, {
        key: 'setValue',
        value: function setValue(id) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var _state3 = this.state,
                formData = _state3.formData,
                itemStatus = _state3.itemStatus;

            formData[id]['value'] = value;
            // 当前item如果是错误状态需要进行验证
            if (itemStatus[id]['status'] == 'error') {
                this.validation(id, value);
            }
            var newFormData = (0, _assign2.default)({}, formData);
            this.setState({
                formData: newFormData
            });
        }
        // 验证操作

    }, {
        key: 'validation',
        value: function validation(id, value, rulesIndex) {
            var formData = this.state.formData;

            var itemInfo = formData[id];
            var rules = itemInfo.rules,
                isShowSuccess = itemInfo.isShowSuccess,
                successText = itemInfo.successText;

            var validationValue = value || itemInfo.value;
            // 对当前发生错误的规则进行验证，一般用于在发生错误的input中输入
            if (rulesIndex) {
                var currRule = itemInfo.rules[rulesIndex];
                if (this.validationRule(validationValue, currRule)) {
                    this.updateFormItemStatus(id, 'normal');
                }
            } else if (rules && (0, _typeof.isArray)(rules)) {
                for (var i = 0; i < rules.length; i++) {
                    var _currRule = rules[i];
                    var validationType = rules[i].validationType || 'error';
                    // 必填
                    if (!this.validationRule(validationValue, _currRule)) {
                        this.updateFormItemStatus(id, validationType, _currRule.message, i);
                        return;
                    } else {
                        this.updateFormItemStatus(id, 'normal');
                    }
                }
                // 最终验证完成没有错误，当配置了成功提示，那么将显示成功提示
                if (isShowSuccess && successText != '') {
                    this.updateFormItemStatus(id, 'success', successText);
                }
            }
        }
        // 验证规则

    }, {
        key: 'validationRule',
        value: function validationRule(value, currRule) {
            if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.required && value == '') {
                return false;
            } else if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.min && value.length < currRule.min) {
                return false;
            } else if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.max && value.length > currRule.max) {
                return false;
            } else if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.len && value.length != currRule.len) {
                return false;
            } else if (currRule.pattern && (0, _typeof.isRegExp)(currRule.pattern)) {
                return currRule.pattern.test(value);
            }
            return true;
        }
        // 提交时间处理

    }, {
        key: 'formOnSubmit',
        value: function formOnSubmit() {
            // 验证所有数据
            var formData = this.state.formData;

            var ids = (0, _keys2.default)(formData);
            for (var i = 0; i < ids.length; i++) {
                this.validation(ids[i]);
            }
            var formAllData = this.getAllData();
            return formAllData;
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return (
                // 提供扩展方法给form标签
                _react2.default.createElement(
                    _context.FormHOC.Provider,
                    { value: {
                            getFormComponent: this.getFormComponent,
                            formOnSubmit: this.formOnSubmit
                        } },
                    _react2.default.createElement(
                        _context.FormContext.Provider,
                        { value: {
                                // 提供函数给FormItem来调用form函数
                                itemStatus: this.state.itemStatus,
                                updateFormItemStatus: this.updateFormItemStatus,
                                validation: this.validation
                            } },
                        _react2.default.cloneElement(children, { form: this.form })
                    )
                )
            );
        }
    }]);
    return Form;
}(_react.PureComponent);

exports.default = Form;