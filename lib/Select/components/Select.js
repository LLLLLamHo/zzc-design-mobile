'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _List = require('../../List');

var _List2 = _interopRequireDefault(_List);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_PureComponent) {
    (0, _inherits3.default)(Select, _PureComponent);

    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

        _this.state = {
            visible: false,
            _data: props.data,
            currIndex: props.data ? _this.getCurrSelectItemIndex(props.data) : null
        };
        _this.clickItem = _this.clickItem.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.isShow) {
                this.togglePopup(true);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.isShow) {
                this.togglePopup(true);
                this.setState({
                    _data: nextProps.data,
                    currIndex: nextProps.data ? this.getCurrSelectItemIndex(nextProps.data) : null
                });
            } else if (!nextProps.isShow && this.props.isShow) {
                this.togglePopup(false);
                this.setState({
                    _data: nextProps.data,
                    currIndex: nextProps.data ? this.getCurrSelectItemIndex(nextProps.data) : null
                });
            }
        }
    }, {
        key: 'getCurrSelectItemIndex',
        value: function getCurrSelectItemIndex(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].type == 'active') {
                    return i;
                }
            }
            return null;
        }
    }, {
        key: 'togglePopup',
        value: function togglePopup(isShow) {
            this.setState({
                visible: isShow
            });
        }
    }, {
        key: 'clickItem',
        value: function clickItem(index) {
            var _props = this.props,
                onChange = _props.onChange,
                autoClose = _props.autoClose;
            var _state = this.state,
                currIndex = _state.currIndex,
                _data = _state._data;

            if (_data[index] && _data[index].type == 'disabled') return;
            if (currIndex != index) {
                var currItem = currIndex != null ? _data[currIndex] : null;
                var nextCurrItem = index != null ? _data[index] : null;
                if (currItem) {
                    currItem.type = 'normal';
                }
                if (nextCurrItem) {
                    nextCurrItem.type = 'active';
                }
                this.setState({
                    currIndex: index,
                    _data: _data.concat([])
                });
            }
            // 自由不自动关闭才出发onChange
            if (!autoClose && onChange) {
                onChange(_data[index]);
            }
            autoClose && this.togglePopup(false);
        }
    }, {
        key: 'createTitle',
        value: function createTitle(title) {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-header' },
                _react2.default.createElement(
                    'h5',
                    null,
                    title
                )
            );
        }
    }, {
        key: 'createContent',
        value: function createContent(data) {
            var _this2 = this;

            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-body' },
                _react2.default.createElement(
                    _List2.default,
                    null,
                    data.map(function (item, key) {
                        var _classNames;

                        var classname = (0, _classnames2.default)(prefixCls + '-item', (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-item-disabled', item.type == 'disabled'), (0, _defineProperty3.default)(_classNames, prefixCls + '-item-active', item.type == 'active'), _classNames));
                        if (item.type == 'active') {
                            return _react2.default.createElement(_List2.default.ListItem, { onClick: function onClick() {
                                    _this2.clickItem(key);
                                }, key: key, title: _react2.default.createElement(
                                    'div',
                                    { className: classname },
                                    item.text
                                ), extra: _react2.default.createElement(_Icon2.default, { style: { width: '18px', height: '18px', color: '#2871F7' }, type: 'success_fill' }) });
                        }
                        return _react2.default.createElement(_List2.default.ListItem, { onClick: function onClick() {
                                _this2.clickItem(key);
                            }, key: key, title: _react2.default.createElement(
                                'div',
                                { className: classname },
                                item.text
                            ) });
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                style = _props2.style,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                title = _props2.title,
                _onClose = _props2.onClose,
                maskClose = _props2.maskClose;
            var _state2 = this.state,
                _data = _state2._data,
                currIndex = _state2.currIndex;

            var selectClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                _Popup2.default,
                { bodyStyle: { height: '50%' }, maskClose: maskClose, visible: this.state.visible, onClose: function onClose() {
                        _this3.setState({
                            visible: false
                        }, function () {
                            _onClose && _onClose(currIndex);
                        });
                    } },
                _react2.default.createElement(
                    'div',
                    { style: style, className: selectClassName },
                    title && this.createTitle(title),
                    this.createContent(_data)
                )
            );
        }
    }]);
    return Select;
}(_react.PureComponent);

exports.default = Select;

Select.defaultProps = {
    prefixCls: _config2.default.cls + '-select',
    className: '',
    style: {},
    isShow: false,
    onClose: null,
    title: null,
    data: [],
    onChange: null,
    autoClose: true,
    maskClose: true
};