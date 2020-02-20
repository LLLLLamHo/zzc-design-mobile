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
            isShowDatePicker: false
        };
        _this.toggleShowDatePicker = _this.toggleShowDatePicker.bind(_this);
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
                setFormItemId(id, 'time');
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.props.formDeleteId && (0, _typeof.isFunction)(this.props.formDeleteId)) {
                this.props.formDeleteId(this.props.id);
            }
        }
    }, {
        key: 'toggleShowDatePicker',
        value: function toggleShowDatePicker(isShow) {
            this.setState({
                isShowDatePicker: isShow
            });
        }
    }, {
        key: 'changeDatePickerInputValue',
        value: function changeDatePickerInputValue(item) {
            var _props2 = this.props,
                onChange = _props2.onChange,
                formInputOnChange = _props2.formInputOnChange,
                formOpt = _props2.formOpt;

            if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                formInputOnChange(item.currDate, formOpt || null);
            } else if (onChange && (0, _typeof.isFunction)(onChange)) {
                onChange(item);
            }
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.props.value;
        }
    }, {
        key: 'transformDatePickerValue',
        value: function transformDatePickerValue(data) {
            if (data.defaultValue != null) {
                throw Error('time 类型的input必须使用value来赋值');
            }
            var value = data.value,
                timeFormat = data.timeFormat;

            data.value = data.value ? (0, _moment2.default)(new Date(value)).format(timeFormat) : '';
            return data;
        }
    }, {
        key: 'createNewProps',
        value: function createNewProps() {
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            delete newProps.datePickerData;
            // 清除一些托管到form中传入的的props
            delete newProps._zds_form_initValue;
            delete newProps.formOpt;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formDeleteId;
            delete newProps.formInputOnFocus;
            delete newProps.setFormItemId;
            newProps = this.transformDatePickerValue(newProps);
            delete newProps.timeFormat;
            return newProps;
        }
    }, {
        key: 'createInput',
        value: function createInput() {
            var _this2 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                className = _props3.className,
                _onChange = _props3.onChange,
                _onBlur = _props3.onBlur,
                _onFocus = _props3.onFocus,
                formInputOnChange = _props3.formInputOnChange,
                formInputOnBlur = _props3.formInputOnBlur,
                formInputOnFocus = _props3.formInputOnFocus,
                formOpt = _props3.formOpt;

            var inputClassName = (0, _classnames2.default)(prefixCls, className);
            var newProps = this.createNewProps();
            return _react2.default.createElement('input', (0, _extends3.default)({}, newProps, { readOnly: true, onClick: function onClick() {
                    _this2.toggleShowDatePicker(true);
                }, onChange: function onChange() {
                    if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                        formInputOnChange(_this2.getValue(), formOpt || null);
                    } else if (_onChange && (0, _typeof.isFunction)(_onChange)) {
                        _onChange(_this2.getValue());
                    }
                }, onBlur: function onBlur() {
                    if (formInputOnBlur && (0, _typeof.isFunction)(formInputOnBlur)) {
                        formInputOnBlur(formOpt || null);
                    } else if (_onBlur && (0, _typeof.isFunction)(_onBlur)) {
                        _onBlur(_this2.getValue());
                    }
                }, onFocus: function onFocus() {
                    if (formInputOnFocus && (0, _typeof.isFunction)(formInputOnFocus)) {
                        formInputOnFocus(formOpt || null);
                    } else if (_onFocus && (0, _typeof.isFunction)(_onFocus)) {
                        _onFocus(_this2.getValue());
                    }
                }, type: 'text', className: inputClassName }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props4 = this.props,
                datePickerData = _props4.datePickerData,
                value = _props4.value;
            var isShowDatePicker = this.state.isShowDatePicker;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.createInput(),
                _react2.default.createElement(_DatePicker2.default, (0, _extends3.default)({}, (0, _assign2.default)(this.defaultDatePcikerConfig, datePickerData), { visible: isShowDatePicker, selectTime: value, onValueChange: undefined, onChange: undefined, onClose: function onClose() {
                        _this3.toggleShowDatePicker(false);
                    }, onSubmit: function onSubmit(data) {
                        _this3.changeDatePickerInputValue(data);_this3.toggleShowDatePicker(false);
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
    lang: 'cn',
    datePickerData: {},
    name: null,
    id: null,
    placeholder: '',
    disabled: false
};