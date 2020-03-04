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

var _MoreSelect = require('../../MoreSelect');

var _MoreSelect2 = _interopRequireDefault(_MoreSelect);

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
        _this.closeMorePhonePrefix = _this.closeMorePhonePrefix.bind(_this);
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
        key: 'closeMorePhonePrefix',
        value: function closeMorePhonePrefix() {
            this.setState({
                openMorePhonePrefix: false
            });
        }
    }, {
        key: 'selectPrefix',
        value: function selectPrefix(item) {
            if (this.props.currPrefix && item.value == this.props.currPrefix.value) return;
            this.setState({
                openMorePhonePrefix: false
            });
            this.props.onChange(item);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                currPrefix = _props.currPrefix,
                title = _props.title,
                data = _props.data;
            var openMorePhonePrefix = this.state.openMorePhonePrefix;

            return _react2.default.createElement(
                'div',
                { className: this.prefixClass + '-box' },
                _react2.default.createElement(
                    'div',
                    { className: this.prefixClass + '-prefix', onClick: this.openMorePhonePrefix },
                    currPrefix && currPrefix.value,
                    _react2.default.createElement(_Icon2.default, { type: 'arrows', style: { width: '14px', height: '14px' } })
                ),
                children,
                _react2.default.createElement(_MoreSelect2.default, { isShow: openMorePhonePrefix, title: title, onChange: function onChange(item) {
                        _this2.selectPrefix(item);
                    }, onClose: this.closeMorePhonePrefix, data: data })
            );
        }
    }]);
    return PhoneNumberPrefix;
}(_react.PureComponent);

exports.default = PhoneNumberPrefix;