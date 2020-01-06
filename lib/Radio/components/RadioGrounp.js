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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGrounp = function (_PureComponent) {
    (0, _inherits3.default)(RadioGrounp, _PureComponent);

    function RadioGrounp(props) {
        (0, _classCallCheck3.default)(this, RadioGrounp);

        var _this = (0, _possibleConstructorReturn3.default)(this, (RadioGrounp.__proto__ || (0, _getPrototypeOf2.default)(RadioGrounp)).call(this, props));

        _this.state = {
            _value: props.defaultValue
        };
        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(RadioGrounp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 渲染完成后，需要通知form组件记录value，完成数据绑定
            var _props = this.props,
                id = _props.id,
                value = _props.value,
                _zds_form_initValue = _props._zds_form_initValue,
                setFormItemId = _props.setFormItemId,
                formOpt = _props.formOpt;

            if (_zds_form_initValue && (0, _typeof.isFunction)(_zds_form_initValue)) {
                _zds_form_initValue(id, value, formOpt);
            }
            if (setFormItemId && (0, _typeof.isFunction)(setFormItemId)) {
                setFormItemId(id);
            }
        }
    }, {
        key: 'onChangeHandle',
        value: function onChangeHandle(data) {
            var _props2 = this.props,
                formInputOnChange = _props2.formInputOnChange,
                formOpt = _props2.formOpt;
            // 区分是否为form表单托管

            if (formInputOnChange && (0, _typeof.isFunction)(formInputOnChange)) {
                formInputOnChange(data.id, formOpt || null);
            } else {
                var _props3 = this.props,
                    onChange = _props3.onChange,
                    value = _props3.value;
                var id = data.id;

                if ((0, _typeof.isUndefined)(value)) {
                    this.setState({
                        _value: id
                    });
                }
                onChange && (0, _typeof.isFunction)(onChange) && onChange(data);
            }
        }
    }, {
        key: 'craeteChildrenItem',
        value: function craeteChildrenItem(children) {
            var _this2 = this;

            var _value = this.state._value;
            var _props4 = this.props,
                id = _props4.id,
                name = _props4.name,
                disabled = _props4.disabled,
                radioType = _props4.radioType,
                value = _props4.value;

            var useValue = _value;
            if (!(0, _typeof.isUndefined)(value)) {
                useValue = value || '';
            }
            if ((0, _typeof.isArray)(children)) {
                return children.map(function (item, key) {
                    return _react2.default.cloneElement(item, {
                        value: useValue,
                        name: id ? id : name,
                        disabled: disabled,
                        radioType: radioType,
                        key: name + '-' + key,
                        onChange: _this2.onChangeHandle
                    });
                });
            }
            return _react2.default.cloneElement(children, {
                useValue: useValue,
                name: id ? id : name,
                disabled: disabled,
                radioType: radioType,
                onChange: this.onChangeHandle
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props5 = this.props,
                children = _props5.children,
                prefixCls = _props5.prefixCls,
                className = _props5.className,
                style = _props5.style;

            var radioClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { className: radioClassName, style: style },
                this.craeteChildrenItem(children)
            );
        }
    }]);
    return RadioGrounp;
}(_react.PureComponent);

exports.default = RadioGrounp;

RadioGrounp.defaultProps = {
    prefixCls: _config2.default.cls + '-radio-grounp',
    className: '',
    style: {}
};