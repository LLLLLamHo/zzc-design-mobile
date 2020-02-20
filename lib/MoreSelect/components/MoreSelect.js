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

var _Popup = require('../../Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _List = require('../../List');

var _List2 = _interopRequireDefault(_List);

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _typeof = require('../../_util/typeof');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreSelect = function (_PureComponent) {
    (0, _inherits3.default)(MoreSelect, _PureComponent);

    function MoreSelect(props) {
        (0, _classCallCheck3.default)(this, MoreSelect);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MoreSelect.__proto__ || (0, _getPrototypeOf2.default)(MoreSelect)).call(this, props));

        _this.state = {
            visible: false
        };
        _this.clickItem = _this.clickItem.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(MoreSelect, [{
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
        key: 'togglePopup',
        value: function togglePopup(isShow) {
            this.setState({
                visible: isShow
            });
        }
    }, {
        key: 'clickItem',
        value: function clickItem(index1, index2, value) {
            var _props = this.props,
                onChange = _props.onChange,
                data = _props.data;
            // 自由不自动关闭才出发onChange

            if (onChange) {
                if (value) {
                    onChange((0, _assign2.default)({ key: index1, subKey: index2 }, data[index1].list[index2], { value: value }));
                } else {
                    onChange((0, _assign2.default)({ key: index1, subKey: index2 }, data[index1].list[index2]));
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
                data.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { key: 'item-' + key, className: prefixCls + '-item-content' },
                        _react2.default.createElement(
                            'div',
                            { className: prefixCls + '-item-title' },
                            item.title
                        ),
                        _react2.default.createElement(
                            _List2.default,
                            null,
                            item.list.map(function (item2, key2) {
                                var _classNames;

                                var classname = (0, _classnames2.default)(prefixCls + '-item', (_classNames = {}, (0, _defineProperty3.default)(_classNames, prefixCls + '-item-disabled', item2.type == 'disabled'), (0, _defineProperty3.default)(_classNames, prefixCls + '-item-active', item2.type == 'active'), _classNames));
                                return _react2.default.createElement(_List2.default.ListItem, { className: prefixCls + '-list-item', onClick: function onClick() {
                                        if (item2.type != 'disabled') {
                                            if (item2.click && (0, _typeof.isFunction)(item2.click)) {
                                                item2.click(item2, key, key2, function (value) {
                                                    _this2.clickItem(key, key2, value);
                                                });
                                            } else {
                                                _this2.clickItem(key, key2);
                                            }
                                        }
                                    }, key: key2, title: _react2.default.createElement(
                                        'div',
                                        { className: classname },
                                        item2.text
                                    ), extra: item2.type == 'active' ? _react2.default.createElement(_Icon2.default, { style: { width: '18px', height: '18px', color: '#2871F7' }, type: 'success_fill' }) : null });
                            })
                        )
                    );
                })
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
                { bodyStyle: (0, _assign2.default)({ height: '80%' }, bodyStyle), maskClose: maskClose, visible: this.state.visible, onClose: function onClose() {
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
    return MoreSelect;
}(_react.PureComponent);

exports.default = MoreSelect;

MoreSelect.defaultProps = {
    prefixCls: _config2.default.cls + '-moreSelect',
    className: '',
    style: {},
    isShow: false,
    onClose: null,
    title: null,
    data: [],
    onChange: null,
    maskClose: true
};