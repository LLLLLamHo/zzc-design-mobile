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
    Select = _zds.Select,
    Card2 = _zds.Card2,
    Icon = _zds.Icon;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            showSelect1: false,
            select1: null,
            data1: [{
                text: '中国驾照',
                type: 'active',
                value: 'code1'
            }, {
                text: '中国驾照+国际驾照翻译认证件',
                type: 'normal',
                value: 'code2'
            }, {
                text: '中国驾照+英文公证件',
                type: 'normal',
                value: 'code3'
            }, {
                text: '香港驾照',
                type: 'normal',
                value: 'code4'
            }, {
                text: '台湾驾照',
                type: 'normal',
                value: 'code5'
            }, {
                text: '其他驾照',
                type: 'normal',
                value: 'code6'
            }, {
                text: '中国驾照+车行翻译件 (不支持)',
                type: 'disabled',
                value: 'code7'
            }, {
                text: '其他',
                type: 'normal',
                value: 'code8',
                click: function click(item, key, next) {
                    next('xxxx国驾照');
                }
            }]
        };
        _this.toggleSelect1 = _this.toggleSelect1.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'toggleSelect1',
        value: function toggleSelect1(isShow) {
            this.setState({
                showSelect1: isShow
            });
        }
    }, {
        key: 'changeData1',
        value: function changeData1(item) {
            var data1 = this.state.data1;

            var select1 = null;
            for (var i = 0; i < data1.length; i++) {
                if (i == item.key) {
                    data1[i].type = 'active';
                    select1 = data1[i].text;
                } else if (data1[i].type != 'disabled') {
                    data1[i].type = 'normal';
                }
            }
            this.setState({
                data1: [].concat(data1),
                select1: select1,
                showSelect1: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                showSelect1 = _state.showSelect1,
                select1 = _state.select1,
                data1 = _state.data1;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Select \u9009\u62E9\u5668"), React.createElement('h2', null, "\u4ECE\u4E0B\u5F80\u4E0A\u5F39\u51FA\u7684\u5355\u9009\u9009\u62E9\u5668")), React.createElement('div', { className: 'zzc-demo-body full' }, React.createElement('h5', null, "\u57FA\u672C\u4F7F\u7528"), React.createElement(Card2, null, React.createElement(Card2.Header, {
                title: React.createElement('p', null, "\u70B9\u51FB\u9009\u62E9"),
                extra: React.createElement(Icon, { type: 'arrows', style: { width: '20px', height: '30px' } }),
                onClick: function onClick() {
                    _this2.toggleSelect1(true);
                }
            }, select1 && React.createElement('p', null, select1))), React.createElement(Select, {
                isShow: showSelect1,
                title: "\u9A7E\u7167\u7C7B\u578B",
                onChange: function onChange(item) {
                    console.log(item);
                    _this2.changeData1(item);
                },
                data: data1
            })));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));