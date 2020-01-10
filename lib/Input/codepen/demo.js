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
    Input = _zds.Input,
    Form = _zds.Form,
    Card2 = _zds.Card2;
var Textarea = Input.Textarea;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            name: '',
            age: ''
        };
        return _this;
    }

    _createClass(App, [{
        key: 'onChange',
        value: function onChange(type, value) {
            if (type == 'name') {
                this.setState({
                    name: value
                });
            } else {
                this.setState({
                    age: value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                name = _state.name,
                age = _state.age;

            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, 'Input'), React.createElement('h2', null, "\u57FA\u7840\u7684Input\u7EC4\u4EF6")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Card2, { style: { padding: 0 } }, React.createElement(Card2.Header, { style: { paddingLeft: '15px', paddingRight: '15px' }, title: "\u975E\u53D7\u63A7Input" }), React.createElement(Form, null, React.createElement(Form.Item, {
                label: "\u59D3\u540D",
                htmlFor: 'label1'
            }, React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D", id: 'label1' })), React.createElement(Form.Item, {
                label: "\u5E74\u9F84"
            }, React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84", id: 'label2' }))))), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Card2, { style: { padding: 0 } }, React.createElement(Card2.Header, { style: { paddingLeft: '15px', paddingRight: '15px' }, title: "\u53D7\u63A7Input" }), React.createElement(Form, null, React.createElement(Form.Item, {
                label: "\u59D3\u540D",
                htmlFor: 'label3'
            }, React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D", id: 'label3', value: name, onChange: function onChange(value) {
                    _this2.onChange('name', value);
                } })), React.createElement(Form.Item, {
                label: "\u5E74\u9F84",
                htmlFor: 'label4',
                style: { border: 0 }
            }, React.createElement(Input, { placeholder: "\u8BF7\u8F93\u5165\u5E74\u9F84", id: 'label4', value: age, onChange: function onChange(value) {
                    _this2.onChange('age', value);
                } }))))), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement(Card2, { style: { padding: 0, paddingBottom: '15px' } }, React.createElement(Card2.Header, { style: { paddingLeft: '15px', paddingRight: '15px', paddingBottom: '12px' }, title: "\u975E\u53D7\u63A7Textarea" }), React.createElement(Form, null, React.createElement(Form.Item, { style: { paddingTop: 0 } }, React.createElement(Textarea, { style: { height: '84px' }, placeholder: "\u56FA\u5B9A\u9AD8\u5EA6", defaultValue: "\u8FD9\u662F\u4E00\u6BB5\u9ED8\u8BA4\u6587\u6848" }))), React.createElement(Form, null, React.createElement(Form.Item, null, React.createElement(Textarea, { autoHeight: true, placeholder: "\u9AD8\u5EA6\u81EA\u9002\u5E94" }))))));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));