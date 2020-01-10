'use strict';

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;(0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
}

var _React = React,
    Component = _React.Component;
var _zds = zds,
    Picker = _zds.Picker;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            data1: [{
                className: 'year-list',
                itemClassName: 'year-item',
                scrollType: 'year',
                selectIndex: 2,
                listData: [{
                    text: '2015',
                    dataKey: '2015222'
                }, {
                    text: '2016',
                    dataKey: '2016222'
                }, {
                    text: '2017',
                    dataKey: '2017222'
                }, {
                    text: '2018',
                    dataKey: '2018222'
                }, {
                    text: '2019',
                    dataKey: '2019222'
                }],
                scrollData: {
                    wheel: {
                        selectedIndex: 2,
                        rotate: 25,
                        adjustTime: 33333
                    }
                }
            }, {
                className: 'month-list',
                itemClassName: 'month-item',
                scrollType: 'month',
                selectIndex: 2,
                listData: [{
                    text: '1月',
                    dataKey: '0'
                }, {
                    text: '2月',
                    dataKey: '1'
                }, {
                    text: '3月',
                    dataKey: '2'
                }, {
                    text: '4月',
                    dataKey: '3'
                }, {
                    text: '5月',
                    dataKey: '4'
                }, {
                    text: '6月',
                    dataKey: '5'
                }, {
                    text: '7月',
                    dataKey: '6'
                }]
            }, {
                className: 'data-list',
                itemClassName: 'data-item',
                scrollType: 'day',
                listData: [{
                    text: '1日'
                }, {
                    text: '2日'
                }, {
                    text: '3日'
                }, {
                    text: '4日'
                }, {
                    text: '5日'
                }, {
                    text: '6日'
                }, {
                    text: '7日'
                }]
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: 'touchEnd',
        value: function touchEnd(scrollIndex, itemIndex) {
            console.log("touchEnd: scroll\u5E8F\u53F7" + scrollIndex);
            console.log("touchEnd: item\u5E8F\u53F7" + itemIndex);
        }
    }, {
        key: 'touchStart',
        value: function touchStart(scrollIndex) {
            console.log("touchStart: scroll\u5E8F\u53F7" + scrollIndex);
        }
    }, {
        key: 'renderAfter',
        value: function renderAfter(scrollObj) {
            console.log(scrollObj);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Picker \u6EDA\u52A8\u9009\u62E9\u6846"), React.createElement('h2', null, "\u57FA\u672C\u7684\u6ED1\u52A8\u4EA4\u4E92\u7684\u529F\u80FD\u7EC4\u4EF6\uFF0C\u4F5C\u4E3A\u5E95\u5C42\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u65E5\u671F\u6ED1\u52A8\u9009\u62E9\u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528DatePicker\u3002")), React.createElement('div', { className: 'zzc-demo-body full' }, React.createElement(Picker, {
                onTouchEnd: function onTouchEnd(scrollIndex, itemIndex) {
                    _this2.touchEnd(scrollIndex, itemIndex);
                },
                onTouchStart: function onTouchStart(scrollIndex) {
                    _this2.touchStart(scrollIndex);
                },
                pickerData: this.state.data1,
                renderAfter: this.renderAfter
            })));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));