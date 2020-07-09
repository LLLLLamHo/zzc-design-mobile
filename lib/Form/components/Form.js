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
            // 输出表达校验
            formOnSubmit: function formOnSubmit() {
                return _this.formOnSubmit();
            },
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
                        var value = formData[id] != null ? _this.getFormInputData(id) : newOpt.initialValue != null ? newOpt.initialValue : '';
                        var consumerValue = (0, _typeof.isObject)(value) ? (0, _assign2.default)({}, value) : { value: value };
                        return _react2.default.cloneElement(item, (0, _assign2.default)({}, state, { id: id, formDeleteId: _this.deleteFormStateId, formInputOnChange: changeFun, formInputOnBlur: blurFun, formInputOnFocus: focusFun, _zds_form_initValue: _this.initFormItemValue, formOpt: newOpt }, consumerValue));
                    }
                );
            },
            initFormItemValue: function initFormItemValue(id, value, formOpt) {
                _this.initFormItemValue(id, value, formOpt);
            },
            // 外部设置form的值
            setFormAssignValue: function setFormAssignValue(id, value) {
                var isValidation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

                _this.setValue(id, value, isValidation);
            },
            getFormAllData: function getFormAllData() {
                return _this.getAllData();
            },
            // 绑定form表单值变更是回调函数
            onValuesChange: function onValuesChange(fn) {
                _this.onValuesChange = fn;
            },
            setFieldStatus: function setFieldStatus(id, fieldStatus) {
                _this.setFieldStatus(id, fieldStatus);
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
        _this.deleteFormStateId = _this.deleteFormStateId.bind(_this);
        return _this;
    }
    // 删除对应form内部状态


    (0, _createClass3.default)(Form, [{
        key: 'deleteFormStateId',
        value: function deleteFormStateId(id) {
            var _state = this.state,
                formData = _state.formData,
                itemStatus = _state.itemStatus;

            delete formData[id];
            delete itemStatus[id];
            this.setState({
                formData: formData, itemStatus: itemStatus
            });
        }
        // 获取form原生对象

    }, {
        key: 'getFormComponent',
        value: function getFormComponent(component) {
            this.formComponent = component;
        }
        // 获取所有数据

    }, {
        key: 'getAllData',
        value: function getAllData() {
            var _state2 = this.state,
                formData = _state2.formData,
                itemStatus = _state2.itemStatus;

            var ids = (0, _keys2.default)(formData);
            var outputData = {};
            var errList = null;
            for (var i = 0; i < ids.length; i++) {
                var _formData$ids$i = formData[ids[i]],
                    value = _formData$ids$i.value,
                    submitFormat = _formData$ids$i.submitFormat;
                var status = itemStatus[ids[i]].status;

                if (status == 'error') {
                    errList = errList ? errList : {};
                    if (!errList[ids[i]]) {
                        errList[ids[i]] = {};
                    }
                    errList[ids[i]] = (0, _assign2.default)({}, itemStatus[ids[i]]);
                    errList[ids[i]].value = value;
                }
                if (!outputData[ids[i]]) {
                    outputData[ids[i]] = {};
                }
                outputData[ids[i]] = (0, _assign2.default)({}, itemStatus[ids[i]]);
                // 当配置submitFormat的时候，会根据submitFormat返回设置value
                if (submitFormat && (0, _typeof.isFunction)(submitFormat)) {
                    outputData[ids[i]].value = submitFormat(value);
                } else {
                    outputData[ids[i]].value = value;
                }
            }
            return { errList: errList, outputData: outputData };
        }
        // 获取表单数据中的值

    }, {
        key: 'getFormInputData',
        value: function getFormInputData(id) {
            var formData = this.state.formData;

            return formData[id]['value'];
        }
        // 初始化数据到表单中储存

    }, {
        key: 'initFormItemValue',
        value: function initFormItemValue(id, value, formOpt) {
            var _state3 = this.state,
                itemStatus = _state3.itemStatus,
                formData = _state3.formData;

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
            var _this2 = this;

            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var isValidation = arguments[2];
            var _state4 = this.state,
                formData = _state4.formData,
                itemStatus = _state4.itemStatus;

            formData[id]['value'] = value;
            // 当前item如果是错误状态需要进行验证
            if (isValidation || itemStatus[id]['status'] == 'error') {
                this.validation(id, value);
            }
            var newFormData = (0, _assign2.default)({}, formData);
            this.setState({
                formData: newFormData
            }, function () {
                if (_this2.onValuesChange && (0, _typeof.isFunction)(_this2.onValuesChange)) {
                    _this2.onValuesChange(id, value);
                }
            });
        }
    }, {
        key: 'grounpValidation',
        value: function grounpValidation(currId, grounpName) {
            var formData = this.state.formData;

            var ids = (0, _keys2.default)(formData);
            for (var i = 0; i < ids.length; i++) {
                if (ids[i] == currId) continue;
                var item = formData[ids[i]];
                var grounp = item.grounp,
                    rules = item.rules,
                    isShowSuccess = item.isShowSuccess,
                    successText = item.successText,
                    value = item.value;

                if (grounp == null) continue;
                var validationValue = value;
                if (grounp == grounpName) {
                    if (rules && (0, _typeof.isArray)(rules)) {
                        for (var n = 0; n < rules.length; n++) {
                            var currRule = rules[n];
                            var validationType = rules[n].validationType || 'error';
                            // 必填
                            if (!this.validationRule(validationValue, currRule)) {
                                this.updateFormItemStatus(ids[i], validationType, currRule.message, n);
                                return;
                            } else {
                                this.updateFormItemStatus(ids[i], 'normal');
                            }
                        }
                        // 最终验证完成没有错误，当配置了成功提示，那么将显示成功提示
                        if (isShowSuccess && successText != '') {
                            this.updateFormItemStatus(ids[i], 'success', successText);
                        }
                    }
                }
            }
        }
        // 验证操作

    }, {
        key: 'validation',
        value: function validation(id, value) {
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'update';
            var formData = this.state.formData;

            var itemInfo = formData[id];
            var rules = itemInfo.rules,
                isShowSuccess = itemInfo.isShowSuccess,
                successText = itemInfo.successText;

            var validationValue = value || itemInfo.value;
            if (rules && (0, _typeof.isArray)(rules)) {
                for (var i = 0; i < rules.length; i++) {
                    var currRule = rules[i];
                    var validationType = rules[i].validationType || 'error';
                    // 必填
                    if (!this.validationRule(validationValue, currRule)) {
                        this.updateFormItemStatus(id, validationType, currRule.message, i);
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
            // 当前item验证通过后，进入分组验证
            // 当前Item有设置分组，那么将查询form数据中同组的数据进行验证
            // submit情况下不需要同组验证
            if (itemInfo.grounp != null && type != 'submit') {
                this.grounpValidation(id, itemInfo.grounp);
            }
        }
    }, {
        key: 'setFieldStatus',
        value: function setFieldStatus(id, fieldStatus) {
            this.updateFormItemStatus(id, fieldStatus.status, fieldStatus.message);
        }
        // 验证规则

    }, {
        key: 'validationRule',
        value: function validationRule(value, currRule) {
            if (currRule.required && (value == '' || value === null || value == undefined)) {
                return false;
            } else {
                // 除了required之外，其他验证规则只有value在非空的情况下才进行验证
                if (value == '' || value === null || value == undefined) return true;
                if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.min && value.length < currRule.min) {
                    return false;
                } else if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.max && value.length > currRule.max) {
                    return false;
                } else if (((0, _typeof.isString)(value) || (0, _typeof.isNumber)(value)) && currRule.len && value.length != currRule.len) {
                    return false;
                } else if (currRule.pattern && (0, _typeof.isRegExp)(currRule.pattern)) {
                    return currRule.pattern.test(value);
                } else if (currRule.validationFn && (0, _typeof.isFunction)(currRule.validationFn)) {
                    return currRule.validationFn(value);
                }
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
                this.validation(ids[i], null, 'submit');
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
                                setValue: this.setValue,
                                formData: this.state.formData,
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