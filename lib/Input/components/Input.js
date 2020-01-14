'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _phoneNumberPrefix = require('./phoneNumberPrefix');

var _phoneNumberPrefix2 = _interopRequireDefault(_phoneNumberPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
    (0, _inherits3.default)(Input, _Component);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this, props));

        _this.state = {
            phonePrefix: props.phonePrefix
        };
        _this.changePhonePrefixHandle = _this.changePhonePrefixHandle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if ((0, _stringify2.default)(nextProps) != (0, _stringify2.default)(this.props)) return true;
            if ((0, _stringify2.default)(nextState) != (0, _stringify2.default)(this.state)) return true;
            return false;
        }
    }, {
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
                setFormItemId(id, this.props.inputType);
            }
        }
    }, {
        key: 'getValue',
        value: function getValue(e) {
            var _props2 = this.props,
                showPhonePrefix = _props2.showPhonePrefix,
                inputType = _props2.inputType;

            if (inputType == 'phone' && showPhonePrefix) {
                return {
                    phonePrefix: this.state.phonePrefix,
                    value: e ? e.target.value : this.input ? this.input.value : ''
                };
            } else {
                return e ? e.target.value : this.input ? this.input.value : '';
            }
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
            delete newProps.inputType;
            // 传入valueTranslate的时候将触发valueTranslate函数来转换值和显示
            var formOpt = newProps.formOpt;

            if (formOpt) {
                var valueTranslate = formOpt.valueTranslate;

                if (valueTranslate && (0, _typeof.isFunction)(valueTranslate)) {
                    newProps.value = valueTranslate(newProps.value);
                }
            }
            // 清除一些托管到form中传入的的props
            delete newProps._zds_form_initValue;
            delete newProps.formOpt;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formInputOnFocus;
            delete newProps.setFormItemId;
            return newProps;
        }
    }, {
        key: 'createInput',
        value: function createInput() {
            var _this2 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                className = _props3.className,
                htmlType = _props3.htmlType,
                _onChange = _props3.onChange,
                _onBlur = _props3.onBlur,
                _onFocus = _props3.onFocus,
                formInputOnChange = _props3.formInputOnChange,
                formInputOnBlur = _props3.formInputOnBlur,
                formInputOnFocus = _props3.formInputOnFocus,
                formOpt = _props3.formOpt,
                readOnly = _props3.readOnly;

            var inputClassName = (0, _classnames2.default)(prefixCls, className);
            var newProps = this.createNewProps();
            return _react2.default.createElement('input', (0, _extends3.default)({}, newProps, { ref: function ref(item) {
                    _this2.input = item;
                }, onChange: function onChange(e) {
                    if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                        formInputOnChange(_this2.getValue(e), formOpt || null);
                    } else if (_onChange && (0, _typeof.isFunction)(_onChange)) {
                        _onChange(_this2.getValue(e));
                    }
                }, onBlur: function onBlur(e) {
                    if (readOnly) return;
                    if (formInputOnBlur && (0, _typeof.isFunction)(formInputOnBlur)) {
                        formInputOnBlur(formOpt || null);
                    } else if (_onBlur && (0, _typeof.isFunction)(_onBlur)) {
                        _onBlur(_this2.getValue(e));
                    }
                }, onFocus: function onFocus(e) {
                    if (readOnly) return;
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

            var _props4 = this.props,
                formInputOnChange = _props4.formInputOnChange,
                formOpt = _props4.formOpt,
                onChange = _props4.onChange;

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
            var _props5 = this.props,
                inputType = _props5.inputType,
                showPhonePrefix = _props5.showPhonePrefix,
                phonePrefixList_cn = _props5.phonePrefixList_cn,
                phonePrefixList_hk = _props5.phonePrefixList_hk,
                lang = _props5.lang;
            var phonePrefix = this.state.phonePrefix;

            if (inputType == 'phone' && showPhonePrefix) {
                return _react2.default.createElement(
                    _phoneNumberPrefix2.default,
                    { onChange: this.changePhonePrefixHandle, lang: lang || 'cn', currPrefix: phonePrefix, phonePrefixList: lang == 'cn' ? phonePrefixList_cn : phonePrefixList_hk },
                    this.createInput()
                );
            }
            return this.createInput();
        }
    }]);
    return Input;
}(_react.Component);

exports.default = Input;

Input.Textarea = _Textarea2.default;
Input.Select = _Select2.default;
Input.DatePicker = _DatePicker2.default;
Input.defaultProps = {
    prefixCls: _config2.default.cls + '-input',
    className: '',
    style: {},
    inputType: 'text',
    htmlType: 'text',
    lang: 'cn',
    phonePrefix: '+86',
    showPhonePrefix: false,
    readOnly: false,
    phonePrefixList_cn: [{ id: '+86', detail: '中国大陆 +(86)' }, { id: '+852', detail: '香港（中国） +(852)' }, { id: '+886', detail: '台湾（中国） +(882)' }, { id: '+853', detail: '澳门（中国） +(853)' }, { id: '+1', detail: '美国 +(1)' }, { id: 'other', detail: '其他' }],
    phonePrefixList_hk: [{ id: '+86', detail: '中國大陸 +(86)' }, { id: '+852', detail: '香港（中國） +(852)' }, { id: '+886', detail: '臺灣（中國） +(882)' }, { id: '+853', detail: '澳門（中國） +(853)' }, { id: '+1', detail: '美國 +(1)' }, { id: 'other', detail: '其他' }],
    name: null,
    id: null,
    placeholder: '',
    disabled: false
};