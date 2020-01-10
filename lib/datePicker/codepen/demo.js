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
    DatePicker = _zds.DatePicker,
    Card = _zds.Card;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        var today = new Date();
        var minDay = new Date();
        var maxDay = new Date();
        _this.state = {
            isShow1: false,
            time1: '2019/07/19'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'onValueChange',
        value: function onValueChange(date) {
            console.log(date);
        }
    }, {
        key: 'show',
        value: function show(index) {
            this.state['isShow' + index] = true;
            this.setState(this.state);
        }
    }, {
        key: 'close',
        value: function close(index) {
            this.state['isShow' + index] = false;
            this.setState(this.state);
        }
    }, {
        key: 'submit',
        value: function submit(data, index) {
            this.state['isShow' + index] = false;
            this.state['time' + index] = data.currDate;
            this.setState(this.state);
        }
    }, {
        key: 'renderCallback',
        value: function renderCallback() {
            console.log('showed');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "DatePicker \u65E5\u671F\u9009\u62E9\u6846"), React.createElement('h2', null, "\u63D0\u4F9B\u5404\u79CD\u65F6\u95F4\u7EF4\u5EA6\u7684\u6ED1\u52A8\u9009\u62E9\u6846")), React.createElement('div', { className: 'zzc-demo-body full' }, React.createElement(Card, { full: true }, React.createElement(Card.Body, { borderDirection: 'left' }, React.createElement('div', { className: 'card-box2', onClick: function onClick() {
                    _this2.show(1);
                } }, React.createElement('p', null, "\u65E5\u671F\u9009\u62E9\u6846,\u5F53\u524D\u65E5\u671F\uFF1A", this.state.time1)))), React.createElement(DatePicker, {
                reverse: true,
                renderCallback: this.renderCallback,
                visible: this.state.isShow1,
                minuteStep: 15,
                mode: 'date',
                selectTime: new Date(this.state.time1),
                onValueChange: function onValueChange(date) {
                    _this2.onValueChange(date);
                },
                onClose: function onClose() {
                    _this2.close(1);
                },
                onSubmit: function onSubmit(data) {
                    _this2.submit(data, 1);
                }
            })));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));