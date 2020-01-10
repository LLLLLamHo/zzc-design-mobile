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
    Form = _zds.Form,
    Radio = _zds.Radio,
    Card2 = _zds.Card2;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            radioValue1: 'test1'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'onChange1',
        value: function onChange1(data) {
            this.setState({
                radioValue1: data.id
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, 'Radio'), React.createElement('h2', null, "\u57FA\u7840\u5355\u9009\u7EC4\u4EF6")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Card2, { style: { padding: 0 } }, React.createElement(Form, null, React.createElement(Form.Item, {
                label: "\u975E\u53D7\u63A7"
            }, React.createElement(Radio, { onChange: function onChange(data) {
                    console.log(data);
                }, defaultChecked: true, name: 'test' }, "\u5355\u9009\u68461"), React.createElement(Radio, { onChange: function onChange(data) {
                    console.log(data);
                }, name: 'test' }, "\u5355\u9009\u68462")), React.createElement(Form.Item, {
                label: "\u53D7\u63A7"
            }, React.createElement(Radio, { onChange: function onChange(data) {
                    _this2.onChange1(data);
                }, checked: this.state.radioValue1 == 'test1', id: 'test1', name: 'test2' }, "\u5355\u9009\u68461"), React.createElement(Radio, { onChange: function onChange(data) {
                    _this2.onChange1(data);
                }, checked: this.state.radioValue1 == 'test2', id: 'test2', name: 'test2' }, "\u5355\u9009\u68462"))))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));