'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _CascaderSelect = require('./CascaderSelect');

var _CascaderSelect2 = _interopRequireDefault(_CascaderSelect);

var _Popup = require('../../Popup1');

var _Popup2 = _interopRequireDefault(_Popup);

var _Tabs = require('../../Tabs1');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProp = {
    value: 'value',
    label: 'label',
    children: 'children'
};
function getOptionsByValue(props) {
    var selectValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var prop = props.prop;
    var options = props.options;
    var pickerData = [],
        option = void 0;
    var selectedOptions = [];
    if (!Array.isArray(options)) return { pickerData: pickerData, selectedOptions: selectedOptions };
    option = options;
    pickerData.push(options);
    selectValue.forEach(function (value, index) {
        if (option) {
            var fItem = option.find(function (item) {
                return item[prop.value] === value;
            });
            if (fItem) {
                var children = fItem[prop.children];
                selectedOptions[index] = fItem;
                if (children) {
                    pickerData.push(children);
                    option = children;
                }
            }
        }
        ;
    });
    return { pickerData: pickerData, selectedOptions: selectedOptions };
}

var Cascader = function (_Component) {
    (0, _inherits3.default)(Cascader, _Component);

    function Cascader(props) {
        (0, _classCallCheck3.default)(this, Cascader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Cascader.__proto__ || (0, _getPrototypeOf2.default)(Cascader)).call(this, props));

        _this.onToggleTab = function (index) {
            _this.setState({
                tabsIndex: index
            });
        };
        var value = [];
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue || [];
        }

        var _getOptionsByValue = getOptionsByValue(props, value),
            pickerData = _getOptionsByValue.pickerData,
            selectedOptions = _getOptionsByValue.selectedOptions;

        _this.state = {
            tabsIndex: pickerData.length - 1,
            value: value,
            pickerData: pickerData,
            selectedOptions: selectedOptions
        };
        return _this;
    }

    (0, _createClass3.default)(Cascader, [{
        key: 'onChange',
        value: function onChange(val, optionProps, index) {
            var _state = this.state,
                value = _state.value,
                tabsIndex = _state.tabsIndex,
                selectedOptions = _state.selectedOptions;
            var _props = this.props,
                loadData = _props.loadData,
                _props$prop = _props.prop,
                prop = _props$prop === undefined ? defaultProp : _props$prop;

            var targetOption = optionProps.option;
            value[index] = val;
            value = value.splice(0, index + 1);
            if (!('value' in this.props)) {
                this.setState({
                    value: value
                });
            }
            if (targetOption.isLeaf === false && !targetOption[prop.children] && loadData) {
                loadData(targetOption);
                return;
            }
            selectedOptions[index] = optionProps.option;

            var _getOptionsByValue2 = getOptionsByValue(this.props, value),
                pickerData = _getOptionsByValue2.pickerData;

            var next = ++index;
            if (pickerData[next] && pickerData[next].length) {
                tabsIndex = next;
                this.setState({
                    tabsIndex: tabsIndex,
                    pickerData: pickerData,
                    selectedOptions: selectedOptions.splice(0, next)
                });
                return;
            }
            typeof this.props.onChange === 'function' && this.props.onChange(value.slice(), selectedOptions.slice());
            this.props.onClose();
        }
    }, {
        key: 'renderTabbar',
        value: function renderTabbar() {
            var _this2 = this;

            var _state2 = this.state,
                tabsIndex = _state2.tabsIndex,
                selectedOptions = _state2.selectedOptions,
                pickerData = _state2.pickerData;
            var _props$prop2 = this.props.prop,
                prop = _props$prop2 === undefined ? defaultProp : _props$prop2;

            return _react2.default.createElement(
                'div',
                { className: 'zds-cascader-tabbar' },
                pickerData.map(function (_item, index) {
                    var option = selectedOptions[index];
                    return _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)('zds-cascader-tabbar-item', {
                                'is-active': tabsIndex === index
                            }), key: 'cascader-tabbar-item-' + index, onClick: function onClick() {
                                return _this2.onToggleTab(index);
                            } },
                        option ? option[prop.label] : '请选择'
                    );
                })
            );
        }
    }, {
        key: 'renderOptionItem',
        value: function renderOptionItem(options) {
            var prop = this.props.prop || defaultProp;
            return options.map(function (item) {
                return _react2.default.createElement(_CascaderSelect2.default.Option, { option: item, value: item[prop.value], label: item[prop.label], key: item[prop.value] });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                visible = _props2.visible,
                options = _props2.options,
                title = _props2.title;
            var _state3 = this.state,
                value = _state3.value,
                pickerData = _state3.pickerData;

            var _options = pickerData;
            if (!pickerData.length) {
                _options = options;
            }
            var tabsContent = _options.map(function (item, index) {
                var itemValue = value[index] || undefined;
                return _react2.default.createElement(
                    'div',
                    { className: 'zds-cascader-item', key: 'cascader-item-' + index },
                    _react2.default.createElement(
                        _CascaderSelect2.default,
                        { value: itemValue, onChange: function onChange(val, props) {
                                return _this3.onChange(val, props, index);
                            } },
                        _this3.renderOptionItem(item)
                    )
                );
            });
            return _react2.default.createElement(
                _Popup2.default,
                { visible: visible, bodyStyle: { height: '85%' }, onClose: this.props.onClose, maskClose: true },
                _react2.default.createElement(
                    'div',
                    { className: 'zds-cascader' },
                    _react2.default.createElement(
                        'header',
                        { className: 'zds-cascader-header' },
                        _react2.default.createElement(
                            'h2',
                            { className: 'zds-cascader-header-title' },
                            title
                        ),
                        _react2.default.createElement(
                            'i',
                            { className: 'zds-cascader-header-close', onClick: function onClick() {
                                    return _this3.props.onClose();
                                } },
                            _react2.default.createElement(_Icon2.default, { className: 'zds-cascader-header-close-inner', type: 'error' })
                        )
                    ),
                    this.renderTabbar(),
                    _react2.default.createElement(
                        _Tabs2.default,
                        { tabs: [], defaultIndex: 0, className: 'zds-cascader-body', maxTabLength: 3, index: this.state.tabsIndex, swipeable: false, isOpenTabContentScroll: false, onChange: function onChange(key) {
                                _this3.setState({
                                    tabsIndex: key
                                });
                            } },
                        tabsContent
                    )
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, state) {
            var data = {};
            if ('value' in nextProps && state.value.length !== nextProps.value.length) {
                data.value = nextProps.value;
            }
            if ('options' in nextProps && state.pickerData[0] !== nextProps.options) {
                // state.pickerData[0] 默认为 options
                var _getOptionsByValue3 = getOptionsByValue(nextProps, state.value),
                    pickerData = _getOptionsByValue3.pickerData,
                    selectedOptions = _getOptionsByValue3.selectedOptions;

                data.pickerData = pickerData;
                data.selectedOptions = selectedOptions;
                data.tabsIndex = pickerData.length - 1;
            }
            return (0, _keys2.default)(data).length ? data : null;
        }
    }]);
    return Cascader;
}(_react.Component);

Cascader.defaultProps = {
    title: '所在地区',
    prop: defaultProp
};
exports.default = Cascader;