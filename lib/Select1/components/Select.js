'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Popup = require('../../Popup1');

var _Popup2 = _interopRequireDefault(_Popup);

var _List = require('../../List');

var _List2 = _interopRequireDefault(_List);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_PureComponent) {
    (0, _inherits3.default)(Select, _PureComponent);

    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

        _this.state = {
            visible: false
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
            } else if (!nextProps.isShow && this.props.isShow) {
                this.togglePopup(false);
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
        value: function clickItem(index, value) {
            var _props = this.props,
                onChange = _props.onChange,
                data = _props.data;
            // 自由不自动关闭才出发onChange

            if (onChange) {
                if (value) {
                    onChange((0, _assign2.default)({ key: index }, data[index], { value: value }));
                } else {
                    onChange((0, _assign2.default)({ key: index }, data[index]));
                }
            }
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
                        return _react2.default.createElement(_List2.default.ListItem, { onClick: function onClick() {
                                if (item.type != 'disabled') {
                                    if (item.click && (0, _typeof.isFunction)(item.click)) {
                                        item.click(item, key, function (value) {
                                            _this2.clickItem(key, value);
                                        });
                                    } else {
                                        _this2.clickItem(key);
                                    }
                                }
                            }, key: key, title: _react2.default.createElement(
                                'div',
                                { className: classname },
                                item.text
                            ), extra: item.type == 'active' ? _react2.default.createElement(_Icon2.default, { style: { width: '18px', height: '18px', color: '#2871F7' }, type: 'success_fill' }) : null });
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
                maskClose = _props2.maskClose,
                data = _props2.data,
                bodyStyle = _props2.bodyStyle;

            var selectClassName = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                _Popup2.default,
                { bodyStyle: (0, _assign2.default)({ height: '60%' }, bodyStyle), maskClose: maskClose, visible: this.state.visible, onClose: function onClose() {
                        _this3.setState({
                            visible: false
                        }, function () {
                            _onClose && _onClose();
                        });
                    } },
                _react2.default.createElement(
                    'div',
                    { style: style, className: selectClassName },
                    title && this.createTitle(title),
                    this.createContent(data)
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
    maskClose: true
};