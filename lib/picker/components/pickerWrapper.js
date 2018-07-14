'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _betterScroll = require('better-scroll');

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _config = require('../../_util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerWrapper = function (_React$PureComponent) {
    (0, _inherits3.default)(PickerWrapper, _React$PureComponent);

    function PickerWrapper(props) {
        (0, _classCallCheck3.default)(this, PickerWrapper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PickerWrapper.__proto__ || (0, _getPrototypeOf2.default)(PickerWrapper)).call(this, props));

        _this.touchEnd = _this.touchEnd.bind(_this);
        _this.touchStart = _this.touchStart.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PickerWrapper, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.data.selectedIndex) {
                this.BScrollObj.wheelTo(this.props.data.selectedIndex);
            }
            this.BScrollObj.refresh();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var _props$data$scrollTyp = this.props.data.scrollType,
                scrollType = _props$data$scrollTyp === undefined ? new Date().getTime() : _props$data$scrollTyp;

            var initBScrollConfig = this.resetBScrollConfig();
            var wrapperNode = this.wrapper ? _reactDom2.default.findDOMNode(this.wrapper) : null;
            if (wrapperNode) {
                this.BScrollObj = new _betterScroll2.default(wrapperNode, initBScrollConfig);
                // 某种情况下会出现无法滚动到指定的selectedIndex
                requestAnimationFrame(function () {
                    _this2.BScrollObj.wheelTo(initBScrollConfig.wheel.selectedIndex);
                    _this2.addActiveItem();
                    _this2.BScrollObj.refresh();
                });
                this.BScrollObj.on('beforeScrollStart', this.touchStart);
                this.BScrollObj.on('scrollEnd', this.touchEnd);
                this.BScrollObj.on('scrollCancel', this.touchEnd);
                this.props.initBScrollCallback(scrollType, this.BScrollObj);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.BScrollObj.off('beforeScrollStart', this.touchStart);
            this.BScrollObj.off('scrollEnd', this.touchEnd);
            this.BScrollObj.off('scrollCancel', this.touchEnd);
        }
    }, {
        key: 'resetBScrollConfig',
        value: function resetBScrollConfig() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                data = _props.data;

            var wheel = {
                selectedIndex: data.selectIndex ? data.selectIndex : 0,
                rotate: 0,
                adjustTime: 0,
                wheelWrapperClass: prefixCls + '-ws',
                wheelItemClass: prefixCls + '-wi'
            };
            var initBScrollConfig = {};
            if (data.scrollData) {
                initBScrollConfig = data.scrollData;
                if (initBScrollConfig.wheel) {
                    initBScrollConfig.wheel = (0, _assign2.default)({}, initBScrollConfig.wheel, wheel);
                }
            } else {
                initBScrollConfig.wheel = wheel;
            }
            return initBScrollConfig;
        }
    }, {
        key: 'getWrapper',
        value: function getWrapper(div) {
            this.wrapper = div;
        }
    }, {
        key: 'getWheelScroll',
        value: function getWheelScroll(div) {
            this.wheelScroll = _reactDom2.default.findDOMNode(div);
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd() {
            var _props$data = this.props.data,
                wrapperIndex = _props$data.wrapperIndex,
                scrollType = _props$data.scrollType;

            this.addActiveItem();
            this.props.onTouchEnd && this.props.onTouchEnd(scrollType ? scrollType : wrapperIndex, this.BScrollObj.getSelectedIndex());
        }
    }, {
        key: 'touchStart',
        value: function touchStart() {
            this.removeActiveItem();
            this.props.onTouchStart && this.props.onTouchStart(this.props.wrapperIndex);
        }
    }, {
        key: 'removeActiveItem',
        value: function removeActiveItem() {
            var prefixCls = this.props.prefixCls;

            this.wheelScroll.children[this.currIndex].className = prefixCls + '-wi';
        }
    }, {
        key: 'addActiveItem',
        value: function addActiveItem() {
            var prefixCls = this.props.prefixCls;

            this.currIndex = this.BScrollObj.getSelectedIndex();
            this.wheelScroll.children[this.currIndex].className = prefixCls + '-wi ' + prefixCls + '-wi-active';
        }
    }, {
        key: 'renderItem',
        value: function renderItem() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                data = _props2.data;

            var liCls = (0, _classnames2.default)(data.itemClassName, prefixCls + '-wi');
            var timestamp = new Date().getTime();
            var liNodeList = data.listData.map(function (item, key) {
                return _react2.default.createElement(
                    'li',
                    { className: liCls, 'data-key': item.dataKey ? item.dataKey : item.text, key: timestamp + '-' + key + '-item' },
                    item.text
                );
            });
            return liNodeList;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                data = _props3.data,
                wrapperKey = _props3.wrapperKey;

            var ulCls = (0, _classnames2.default)(data.className, prefixCls + '-ws');
            return _react2.default.createElement(
                'div',
                { key: wrapperKey, className: prefixCls + '-wrapper wrapper', ref: function ref(refs) {
                        _this3.getWrapper(refs);
                    } },
                _react2.default.createElement(
                    'ul',
                    { className: ulCls, ref: function ref(refs) {
                            _this3.getWheelScroll(refs);
                        } },
                    this.renderItem()
                ),
                _react2.default.createElement('div', { className: prefixCls + '-wrapper-bg' })
            );
        }
    }]);
    return PickerWrapper;
}(_react2.default.PureComponent);

exports.default = PickerWrapper;

PickerWrapper.defaultProps = {
    prefixCls: _config2.default.cls + '-picker',
    wrapperKey: '',
    data: []
};