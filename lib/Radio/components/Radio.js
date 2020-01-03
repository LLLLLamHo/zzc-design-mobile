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

var _RadioGrounp = require('./RadioGrounp');

var _RadioGrounp2 = _interopRequireDefault(_RadioGrounp);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = function (_PureComponent) {
    (0, _inherits3.default)(Radio, _PureComponent);

    function Radio(props) {
        (0, _classCallCheck3.default)(this, Radio);
        return (0, _possibleConstructorReturn3.default)(this, (Radio.__proto__ || (0, _getPrototypeOf2.default)(Radio)).call(this, props));
    }
    // componentDidMount(): void {
    //         // 渲染完成后，需要通知form组件记录value，完成数据绑定
    //         const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
    //         if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
    //             _zds_form_initValue(id, value, formOpt);
    //         }
    //         if (setFormItemId && isFunction(setFormItemId)) {
    //             setFormItemId(id);
    //         }
    // }


    (0, _createClass3.default)(Radio, [{
        key: 'changeRadioHandle',
        value: function changeRadioHandle(e, name, id) {
            var target = e.target;
            var currStatus = target.checked;
            var _props = this.props,
                checked = _props.checked,
                onChange = _props.onChange,
                value = _props.value;
            // 非受控,需要通过代码控制字体颜色, 只有没有指明value和checked参数的情况下，才通过dom来操作选中颜色

            if ((0, _typeof.isUndefined)(checked) && (0, _typeof.isUndefined)(value)) {
                var radioBoxs = document.querySelectorAll('[zds-radio-name=' + name + ']');
                radioBoxs.forEach(function (item) {
                    var itemClass = item.className;
                    if (item.getAttribute('zds-radio-id') == id && itemClass.indexOf('checked') == -1) {
                        item.className = item.className + ' checked';
                    } else if (itemClass.indexOf('checked') != -1) {
                        item.className = itemClass.replace(' checked', '');
                    }
                });
            }
            onChange && (0, _typeof.isFunction)(onChange) && onChange({
                checked: currStatus,
                id: id,
                name: name
            });
        }
    }, {
        key: 'createCheckProps',
        value: function createCheckProps() {
            var _props2 = this.props,
                defaultChecked = _props2.defaultChecked,
                checked = _props2.checked,
                value = _props2.value,
                id = _props2.id;

            var currChecked = void 0;
            var checkProps = void 0;
            if (!(0, _typeof.isUndefined)(value)) {
                currChecked = value == id;
                checkProps = { checked: currChecked };
            } else {
                // 非受控
                currChecked = !!defaultChecked;
                checkProps = { defaultChecked: currChecked };
                // 受控
                if (!(0, _typeof.isUndefined)(checked)) {
                    currChecked = !!checked;
                    checkProps = { checked: currChecked };
                }
            }
            return { currChecked: currChecked, checkProps: checkProps };
        }
    }, {
        key: 'createIcon',
        value: function createIcon() {
            var _props3 = this.props,
                radioType = _props3.radioType,
                id = _props3.id;

            if (radioType == 'sex') {
                switch (id) {
                    case 'man':
                        return _react2.default.createElement(_Icon2.default, { style: { width: '14px', height: '14px' }, type: 'man' });
                    case 'women':
                        return _react2.default.createElement(_Icon2.default, { style: { width: '14px', height: '14px' }, type: 'women' });
                }
            }
            return null;
        }
    }, {
        key: 'createInput',
        value: function createInput() {
            var _this2 = this;

            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                className = _props4.className,
                children = _props4.children,
                name = _props4.name,
                disabled = _props4.disabled;
            var id = this.props.id;

            if (!id) {
                id = 'radio-id-' + Math.floor(Math.random() * 10000);
            }
            if ((0, _typeof.isNull)(name) || (0, _typeof.isUndefined)(name)) {
                console.error('单选框的name参数不能为空！');
                return null;
            }

            var _createCheckProps = this.createCheckProps(),
                currChecked = _createCheckProps.currChecked,
                checkProps = _createCheckProps.checkProps;

            var radioClassName = (0, _classnames2.default)(prefixCls, className, { 'checked': currChecked }, { 'disabled': disabled });
            var newProps = (0, _assign2.default)({}, this.props);
            delete newProps.prefixCls;
            delete newProps.className;
            // 清除一些托管到form中传入的的props
            delete newProps._zds_form_initValue;
            delete newProps.formOpt;
            delete newProps.formInputOnChange;
            delete newProps.formInputOnBlur;
            delete newProps.formInputOnFocus;
            delete newProps.setFormItemId;
            return _react2.default.createElement(
                'label',
                { htmlFor: id },
                _react2.default.createElement(
                    'div',
                    { className: radioClassName, 'zds-radio-name': name, 'zds-radio-id': id },
                    _react2.default.createElement('input', (0, _extends3.default)({ disabled: disabled }, checkProps, { onChange: function onChange(e) {
                            _this2.changeRadioHandle(e, name, id);
                        }, type: 'radio', name: name, id: id })),
                    this.createIcon(),
                    children
                )
            );
            // return (<input
            //     {...newProps}
            //     onChange={(e) => {
            //         if (formInputOnChange && isFunction(formInputOnChange)) {
            //             formInputOnChange(e.target.value, formOpt || null);
            //         } else if (onChange && isFunction(onChange)) {
            //             onChange(e);
            //         }
            //     }}
            //     onBlur={(e) => {
            //         if (formInputOnBlur && isFunction(formInputOnBlur)) {
            //             formInputOnBlur( formOpt || null);
            //         } else if (onBlur && isFunction(onBlur)) {
            //             onBlur(e);
            //         }
            //     }}
            //     onFocus={(e) => {
            //         if (formInputOnFocus && isFunction(formInputOnFocus)) {
            //             formInputOnFocus( formOpt || null);
            //         } else if (onFocus && isFunction(onFocus)) {
            //             onFocus(e);
            //         }
            //     }}
            //     type={htmlType}
            //     className={inputClassName}
            // />)
        }
    }, {
        key: 'render',
        value: function render() {
            return this.createInput();
        }
    }]);
    return Radio;
}(_react.PureComponent);

exports.default = Radio;

Radio.defaultProps = {
    prefixCls: _config2.default.cls + '-radio',
    className: '',
    style: {}
};
Radio.RadioGrounp = _RadioGrounp2.default;