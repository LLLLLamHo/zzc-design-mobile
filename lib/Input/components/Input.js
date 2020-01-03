'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

var _phoneNumberPrefix = require('./phoneNumberPrefix');

var _phoneNumberPrefix2 = _interopRequireDefault(_phoneNumberPrefix);

var _Select = require('../../Select');

var _Select2 = _interopRequireDefault(_Select);

var _DatePicker = require('../../DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_PureComponent) {
    (0, _inherits3.default)(Input, _PureComponent);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

        _this.defaultDatePcikerConfig = {
            lang: 'cn',
            reverse: false,
            maskClose: true,
            use12hour: false,
            minuteStep: 15,
            minDate: null,
            maxDate: null,
            mode: 'date',
            buttonText: null,
            title: null,
            warningText: null
        };
        _this.state = {
            phonePrefix: props.phonePrefix,
            isShowSelect: false,
            isShowDatePicker: false
        };
        _this.toggleShowDatePicker = _this.toggleShowDatePicker.bind(_this);
        _this.toggleShowSelect = _this.toggleShowSelect.bind(_this);
        _this.changePhonePrefixHandle = _this.changePhonePrefixHandle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 渲染完成后，需要通知form组件记录value，完成数据绑定
            var _props = this.props,
                id = _props.id,
                _zds_form_initValue = _props._zds_form_initValue,
                setFormItemId = _props.setFormItemId,
                formOpt = _props.formOpt;

            if (_zds_form_initValue && (0, _typeof.isFunction)(_zds_form_initValue)) {
                _zds_form_initValue(id, this.getValue(), formOpt);
            }
            if (setFormItemId && (0, _typeof.isFunction)(setFormItemId)) {
                setFormItemId(id);
            }
        }
    }, {
        key: 'toggleShowSelect',
        value: function toggleShowSelect(isShow) {
            this.setState({
                isShowSelect: isShow
            });
        }
    }, {
        key: 'toggleShowDatePicker',
        value: function toggleShowDatePicker(isShow) {
            this.setState({
                isShowDatePicker: isShow
            });
        }
    }, {
        key: 'changeSelectInputValue',
        value: function changeSelectInputValue(item) {
            var _props2 = this.props,
                onChange = _props2.onChange,
                formInputOnChange = _props2.formInputOnChange,
                formOpt = _props2.formOpt,
                selectData = _props2.selectData;

            if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                if (selectData) {
                    var data = selectData.data,
                        title = selectData.title;

                    var newData = data.map(function (curr) {
                        if (curr.type == 'disabled') {
                            return curr;
                        }
                        if (curr.value != item.value) {
                            curr.type = 'normal';
                            return curr;
                        }
                        curr.type = 'active';
                        return curr;
                    });
                    formInputOnChange({
                        selectData: { data: newData, title: title },
                        value: item.key
                    }, formOpt || null);
                }
            } else if (onChange && (0, _typeof.isFunction)(onChange)) {
                onChange(item);
            }
        }
    }, {
        key: 'changeDatePickerInputValue',
        value: function changeDatePickerInputValue(item) {
            var _props3 = this.props,
                onChange = _props3.onChange,
                formInputOnChange = _props3.formInputOnChange,
                formOpt = _props3.formOpt;

            if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                formInputOnChange(item.currDate, formOpt || null);
            } else if (onChange && (0, _typeof.isFunction)(onChange)) {
                onChange(item);
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(e) {
            var _props4 = this.props,
                showPhonePrefix = _props4.showPhonePrefix,
                inputType = _props4.inputType;

            if (inputType == 'phone' && showPhonePrefix) {
                return {
                    phonePrefix: this.state.phonePrefix,
                    value: e ? e.target.value : this.input ? this.input.value : ''
                };
            } else if (inputType == 'select') {
                // select框，input中显示的并非其value，所以需要转换，但是获取value的方式都是从props中获取，不能取input的value
                return {
                    selectData: this.props.selectData,
                    value: this.props.value
                };
            } else if (inputType == 'time') {
                return this.props.value;
            } else {
                return e ? e.target.value : this.input ? this.input.value : '';
            }
        }
    }, {
        key: 'transformSelectValue',
        value: function transformSelectValue(data) {
            if (data.defaultValue != null) {
                throw Error('select 类型的input必须使用value来赋值');
            }
            var selectData = data.selectData;

            if (selectData && data.value != null) {
                var selectList = selectData.data;

                data.value = selectList[data.value] ? selectList[data.value].text : '';
            } else {
                data.value = ''; // 默认为空
            }
            delete data.selectData;
            return data;
        }
    }, {
        key: 'transformDatePickerValue',
        value: function transformDatePickerValue(data) {
            if (data.defaultValue != null) {
                throw Error('time 类型的input必须使用value来赋值');
            }
            var value = data.value,
                timeFormat = data.timeFormat;

            data.value = (0, _moment2.default)(new Date(value)).format(timeFormat);
            return data;
        }
    }, {
        key: 'createNewProps',
        value: function createNewProps() {
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            delete newProps.htmlType;
            delete newProps.showPhonePrefix;
            delete newProps.phonePrefix;
            delete newProps.phonePrefixList_cn;
            delete newProps.phonePrefixList_hk;
            delete newProps.datePickerData;
            // 清除一些托管到form中传入的的props
            delete newProps._zds_form_initValue;
            delete newProps.formOpt;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formInputOnFocus;
            delete newProps.setFormItemId;
            // 对select类型的input需要对value进行转换
            if (newProps.inputType == 'select') {
                newProps = this.transformSelectValue(newProps);
            } else if (newProps.inputType == 'time' && newProps.timeFormat && newProps.value) {
                newProps = this.transformDatePickerValue(newProps);
            }
            delete newProps.timeFormat;
            delete newProps.inputType;
            return newProps;
        }
    }, {
        key: 'createInput',
        value: function createInput() {
            var _this2 = this;

            var _props5 = this.props,
                prefixCls = _props5.prefixCls,
                className = _props5.className,
                htmlType = _props5.htmlType,
                _onChange = _props5.onChange,
                _onBlur = _props5.onBlur,
                _onFocus = _props5.onFocus,
                formInputOnChange = _props5.formInputOnChange,
                formInputOnBlur = _props5.formInputOnBlur,
                formInputOnFocus = _props5.formInputOnFocus,
                formOpt = _props5.formOpt,
                inputType = _props5.inputType;

            var inputClassName = (0, _classnames2.default)(prefixCls, className);
            var newProps = this.createNewProps();
            return _react2.default.createElement('input', (0, _extends3.default)({}, newProps, { readOnly: inputType == 'select' || inputType == 'time', ref: function ref(item) {
                    _this2.input = item;
                }, onClick: function onClick() {
                    inputType == 'select' && _this2.toggleShowSelect(true);
                    inputType == 'time' && _this2.toggleShowDatePicker(true);
                }, onChange: function onChange(e) {
                    if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                        formInputOnChange(_this2.getValue(e), formOpt || null);
                    } else if (_onChange && (0, _typeof.isFunction)(_onChange)) {
                        _onChange(_this2.getValue(e));
                    }
                }, onBlur: function onBlur(e) {
                    if (inputType == 'time' || inputType == 'select') return;
                    if (formInputOnBlur && (0, _typeof.isFunction)(formInputOnBlur)) {
                        formInputOnBlur(formOpt || null);
                    } else if (_onBlur && (0, _typeof.isFunction)(_onBlur)) {
                        _onBlur(_this2.getValue(e));
                    }
                }, onFocus: function onFocus(e) {
                    if (inputType == 'time' || inputType == 'select') return;
                    if (formInputOnFocus && (0, _typeof.isFunction)(formInputOnFocus)) {
                        formInputOnFocus(formOpt || null);
                    } else if (_onFocus && (0, _typeof.isFunction)(_onFocus)) {
                        _onFocus(_this2.getValue(e));
                    }
                }, type: htmlType, className: inputClassName }));
        }
        // 手机号码前缀修改需要触发onchang通知

    }, {
        key: 'changePhonePrefixHandle',
        value: function changePhonePrefixHandle(item) {
            var _this3 = this;

            var _props6 = this.props,
                formInputOnChange = _props6.formInputOnChange,
                formOpt = _props6.formOpt,
                onChange = _props6.onChange;

            this.setState({
                phonePrefix: item.id == 'other' ? item.detail : item.id
            }, function () {
                // 触发onChange的回调通知
                // 开启前缀选择返回特殊值
                if (_this3.input) {
                    if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                        formInputOnChange(_this3.getValue(), formOpt || null);
                    } else if (onChange && (0, _typeof.isFunction)(onChange)) {
                        onChange(_this3.getValue());
                    }
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props7 = this.props,
                inputType = _props7.inputType,
                showPhonePrefix = _props7.showPhonePrefix,
                phonePrefixList_cn = _props7.phonePrefixList_cn,
                phonePrefixList_hk = _props7.phonePrefixList_hk,
                lang = _props7.lang,
                selectData = _props7.selectData,
                datePickerData = _props7.datePickerData,
                value = _props7.value;
            var _state = this.state,
                phonePrefix = _state.phonePrefix,
                isShowSelect = _state.isShowSelect,
                isShowDatePicker = _state.isShowDatePicker;

            if (inputType == 'phone' && showPhonePrefix) {
                return _react2.default.createElement(
                    _phoneNumberPrefix2.default,
                    { onChange: this.changePhonePrefixHandle, lang: lang || 'cn', currPrefix: phonePrefix, phonePrefixList: lang == 'cn' ? phonePrefixList_cn : phonePrefixList_hk },
                    this.createInput()
                );
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.createInput(),
                inputType == 'select' && _react2.default.createElement(_Select2.default, { onChange: function onChange(data) {
                        _this4.changeSelectInputValue(data);
                        _this4.toggleShowSelect(false);
                    }, isShow: isShowSelect, onClose: function onClose() {
                        _this4.toggleShowSelect(false);
                    }, title: selectData && selectData.title, data: selectData ? selectData.data : [] }),
                inputType == 'time' && _react2.default.createElement(_DatePicker2.default, (0, _extends3.default)({}, (0, _assign2.default)(this.defaultDatePcikerConfig, datePickerData), { visible: isShowDatePicker, selectTime: value, onValueChange: undefined, onChange: undefined, onClose: function onClose() {
                        _this4.toggleShowDatePicker(false);
                    }, onSubmit: function onSubmit(data) {
                        _this4.changeDatePickerInputValue(data);_this4.toggleShowDatePicker(false);
                    } }))
            );
        }
    }]);
    return Input;
}(_react.PureComponent);

exports.default = Input;

Input.defaultProps = {
    prefixCls: _config2.default.cls + '-input',
    className: '',
    style: {},
    inputType: 'text',
    htmlType: 'text',
    lang: 'cn',
    phonePrefix: '+86',
    showPhonePrefix: false,
    phonePrefixList_cn: [{ id: '+86', detail: '中国大陆 +(86)' }, { id: '+852', detail: '香港（中国） +(852)' }, { id: '+886', detail: '台湾（中国） +(882)' }, { id: '+853', detail: '澳门（中国） +(853)' }, { id: '+1', detail: '美国 +(1)' }, { id: 'other', detail: '其他' }],
    phonePrefixList_hk: [{ id: '+86', detail: '中國大陸 +(86)' }, { id: '+852', detail: '香港（中國） +(852)' }, { id: '+886', detail: '臺灣（中國） +(882)' }, { id: '+853', detail: '澳門（中國） +(853)' }, { id: '+1', detail: '美國 +(1)' }, { id: 'other', detail: '其他' }],
    datePickerData: {},
    name: null,
    id: null,
    placeholder: '',
    disabled: false
};