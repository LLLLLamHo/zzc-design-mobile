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

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Card = require('../../Card');

var _Card2 = _interopRequireDefault(_Card);

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _Alert = require('../../Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhoneNumberPrefix = function (_PureComponent) {
    (0, _inherits3.default)(PhoneNumberPrefix, _PureComponent);

    function PhoneNumberPrefix(props) {
        (0, _classCallCheck3.default)(this, PhoneNumberPrefix);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PhoneNumberPrefix.__proto__ || (0, _getPrototypeOf2.default)(PhoneNumberPrefix)).call(this, props));

        _this.prefixClass = 'zds-input-phone';
        _this.state = {
            openMorePhonePrefix: false
        };
        _this.openMorePhonePrefix = _this.openMorePhonePrefix.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PhoneNumberPrefix, [{
        key: 'openMorePhonePrefix',
        value: function openMorePhonePrefix() {
            this.setState({
                openMorePhonePrefix: true
            });
        }
    }, {
        key: 'selectPrefix',
        value: function selectPrefix(item) {
            if (item.id == this.props.currPrefix) return;
            this.setState({
                openMorePhonePrefix: false
            });
            if (item.id !== 'other') {
                this.props.onChange(item);
            } else {
                this.showAlert();
            }
        }
    }, {
        key: 'showAlert',
        value: function showAlert() {
            var _this2 = this;

            var lang = this.props.lang;

            var codeInput = void 0;
            (0, _Alert2.default)({
                title: lang == 'cn' ? '输入其它国家区号' : '輸入其它國家區號',
                content: _react2.default.createElement(
                    'div',
                    { className: this.prefixClass + '-code-input-box' },
                    _react2.default.createElement(
                        'span',
                        { className: this.prefixClass + '-code-input-box-add' },
                        '+'
                    ),
                    _react2.default.createElement('input', { className: this.prefixClass + '-code-input-box-input', pattern: '\\\\d*', onKeyUp: function onKeyUp(e) {
                            codeInput.value = e.currentTarget.value.replace(/[+]/g, '');
                        }, ref: function ref(el) {
                            return codeInput = el;
                        } })
                ),
                buttons: [{
                    text: lang == 'cn' ? '取消' : '取消',
                    onPress: function onPress() {},
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', border: 'none' }
                    }
                }, {
                    text: lang == 'cn' ? '确认' : '確認',
                    onPress: function onPress() {
                        codeInput.value != '' && _this2.props.onChange({
                            id: 'other',
                            detail: '+' + codeInput.value
                        });
                    },
                    props: {
                        type: 'special',
                        style: { color: 'rgba(40, 113, 247, 1)', border: 'none' }
                    }
                }]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                children = _props.children,
                currPrefix = _props.currPrefix,
                phonePrefixList = _props.phonePrefixList,
                lang = _props.lang;
            var openMorePhonePrefix = this.state.openMorePhonePrefix;

            return _react2.default.createElement(
                'div',
                { className: this.prefixClass + '-box' },
                _react2.default.createElement(
                    'div',
                    { className: this.prefixClass + '-prefix', onClick: this.openMorePhonePrefix },
                    currPrefix,
                    _react2.default.createElement(_Icon2.default, { type: 'arrows', style: { width: '14px', height: '14px' } })
                ),
                children,
                _react2.default.createElement(
                    _Popup2.default,
                    { maskClose: true, visible: openMorePhonePrefix, onClose: function onClose() {
                            _this3.setState({
                                openMorePhonePrefix: false
                            });
                        } },
                    _react2.default.createElement(
                        _Card2.default,
                        null,
                        _react2.default.createElement(_Card2.default.Header, { className: this.prefixClass + '-popup-header', title: lang == 'cn' ? '请选择' : '請選擇' }),
                        _react2.default.createElement(
                            'div',
                            { className: this.prefixClass + '-popup-box-list' },
                            phonePrefixList && phonePrefixList.map(function (item) {
                                var className = (0, _classnames2.default)(_this3.prefixClass + '-popup-prefix-item', { 'active': item.id == currPrefix });
                                return _react2.default.createElement(
                                    _Card2.default.Body,
                                    { key: item.id },
                                    _react2.default.createElement(
                                        'div',
                                        { className: className, onClick: function onClick() {
                                                _this3.selectPrefix(item);
                                            } },
                                        _react2.default.createElement(
                                            'p',
                                            null,
                                            item.detail
                                        ),
                                        item.id == currPrefix && _react2.default.createElement(_Icon2.default, { size: 'sm', type: 'success_fill' })
                                    )
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);
    return PhoneNumberPrefix;
}(_react.PureComponent);

exports.default = PhoneNumberPrefix;