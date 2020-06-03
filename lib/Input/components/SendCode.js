'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var timeNUll = null;
var waiting = false;

var SendCode = function (_PureComponent) {
    (0, _inherits3.default)(SendCode, _PureComponent);

    function SendCode(props) {
        (0, _classCallCheck3.default)(this, SendCode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SendCode.__proto__ || (0, _getPrototypeOf2.default)(SendCode)).call(this, props));

        _this.state = {
            sendText: _this.props.sendText || '',
            isSend: true
        };
        _this.sendCodeClick = _this.sendCodeClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(SendCode, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            timeNUll && clearTimeout(timeNUll);
        }
    }, {
        key: 'createNewProps',
        value: function createNewProps() {
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            // 清除一些托管到form中传入的的props
            delete newProps._zds_form_initValue;
            delete newProps.formOpt;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formDeleteId;
            delete newProps.formInputOnFocus;
            delete newProps.setFormItemId;
            delete newProps.sendText;
            return newProps;
        }
    }, {
        key: 'getValue',
        value: function getValue(e) {
            return e ? e.target.value : this.input ? this.input.value : '';
        }
    }, {
        key: 'createInput',
        value: function createInput() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                _onChange = _props.onChange,
                _onBlur = _props.onBlur,
                _onFocus = _props.onFocus,
                formInputOnChange = _props.formInputOnChange,
                formInputOnBlur = _props.formInputOnBlur,
                formInputOnFocus = _props.formInputOnFocus,
                formOpt = _props.formOpt;

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
                    if (formInputOnBlur && (0, _typeof.isFunction)(formInputOnBlur)) {
                        formInputOnBlur(formOpt || null);
                    } else if (_onBlur && (0, _typeof.isFunction)(_onBlur)) {
                        _onBlur(_this2.getValue(e));
                    }
                }, onFocus: function onFocus(e) {
                    if (formInputOnFocus && (0, _typeof.isFunction)(formInputOnFocus)) {
                        formInputOnFocus(formOpt || null);
                    } else if (_onFocus && (0, _typeof.isFunction)(_onFocus)) {
                        _onFocus(_this2.getValue(e));
                    }
                }, type: 'text', className: inputClassName }));
        }
    }, {
        key: 'sendCodeClick',
        value: function sendCodeClick() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var handlerSendCode, isSend, result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                handlerSendCode = this.props.handlerSendCode;
                                isSend = this.state.isSend;

                                if (!(!waiting && isSend && handlerSendCode && (0, _typeof.isFunction)(handlerSendCode))) {
                                    _context.next = 8;
                                    break;
                                }

                                waiting = true;
                                _context.next = 6;
                                return handlerSendCode();

                            case 6:
                                result = _context.sent;

                                if (result.start) {
                                    this.handlerSetTimeText(result.time);
                                    this.handlerSetTime(result.time);
                                }

                            case 8:
                                waiting = false;

                            case 9:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
        // 倒计时

    }, {
        key: 'handlerSetTime',
        value: function handlerSetTime(time) {
            var _this3 = this;

            // 重新发送(60秒)
            timeNUll = setTimeout(function () {
                if (time > 0) {
                    time -= 1;
                    _this3.handlerSetTimeText(time);
                }
            }, 1000);
        }
        // 倒计时文字

    }, {
        key: 'handlerSetTimeText',
        value: function handlerSetTimeText(time) {
            var _this4 = this;

            var _state = this.state,
                sendText = _state.sendText,
                isSend = _state.isSend;

            if (time == 0) {
                sendText = '重新发送';
                isSend = true;
            } else {
                sendText = '\u91CD\u65B0\u53D1\u9001(' + time + '\u79D2)';
                isSend = false;
            }
            this.setState({
                sendText: sendText,
                isSend: isSend
            }, function () {
                _this4.handlerSetTime(time);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 渲染完成后，需要通知form组件记录value，完成数据绑定
            var _props2 = this.props,
                id = _props2.id,
                value = _props2.value,
                _zds_form_initValue = _props2._zds_form_initValue,
                setFormItemId = _props2.setFormItemId,
                formOpt = _props2.formOpt;

            if (_zds_form_initValue && (0, _typeof.isFunction)(_zds_form_initValue)) {
                _zds_form_initValue(id, value, formOpt);
            }
            if (setFormItemId && (0, _typeof.isFunction)(setFormItemId)) {
                setFormItemId(id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                sendText = _state2.sendText,
                isSend = _state2.isSend;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.createInput(),
                _react2.default.createElement(
                    'div',
                    { className: _config2.default.cls + '-input-send-code ' + (!isSend ? 'disabled' : ''), onClick: this.sendCodeClick },
                    sendText
                )
            );
        }
    }]);
    return SendCode;
}(_react.PureComponent);

exports.default = SendCode;

SendCode.defaultProps = {
    prefixCls: _config2.default.cls + '-input',
    className: '',
    handlerSendCode: null,
    sendText: '发送验证码',
    style: {},
    inputType: 'text',
    htmlType: 'text',
    lang: 'cn'
};