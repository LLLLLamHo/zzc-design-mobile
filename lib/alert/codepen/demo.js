'use strict';

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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
    Alert = _zds.Alert,
    Button = _zds.Button;

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'defaultBtn',
        value: function defaultBtn() {
            Alert({
                title: '标题'
            });
        }
    }, {
        key: 'titleAlert',
        value: function titleAlert() {
            Alert({
                title: '标题',
                style: {
                    color: 'blue'
                },
                className: 'a233'
            });
        }
    }, {
        key: 'contentAlert',
        value: function contentAlert() {
            Alert({
                title: '标题',
                content: React.createElement('p', null, "\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587"),
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        return false;
                    },
                    props: {
                        type: 'sub',
                        style: { color: '##2871F7', fontWeight: 400, border: 'none' }
                    }
                }]
            });
        }
    }, {
        key: 'doubleBtnAlert',
        value: function doubleBtnAlert() {
            Alert({
                title: '标题',
                content: React.createElement('p', null, "\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587\u5BF9\u8BDD\u6846\u6B63\u6587"),
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', fontWeight: 400, border: 'none' }
                    }
                }, {
                    text: '确认',
                    onPress: function onPress() {
                        console.log('点击确认');
                    },
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 500, border: 'none' }
                    }

                }]
            });
        }
    }, {
        key: 'maskCloseAlert',
        value: function maskCloseAlert() {
            Alert({
                title: '标题',
                content: React.createElement('p', null, 'asdasdasdasd'),
                maskClose: true
            });
        }
    }, {
        key: 'autoCloseAlert',
        value: function autoCloseAlert() {
            var closeEvent = Alert({
                title: '标题'
            });

            setTimeout(function () {
                console.log(closeEvent);
                closeEvent();
            }, 2000);
        }
    }, {
        key: 'promiseAlert',
        value: function promiseAlert() {
            Alert({
                title: '发起一个请求',
                maskClose: true,
                buttons: [{
                    text: '确认',
                    onPress: function onPress() {
                        return new _promise2.default(function (resolve) {
                            Toast.info('onPress Promise', 1);
                            setTimeout(resolve, 1000);
                        });
                    },
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 400, border: 'none' }
                    }
                }]
            });
        }
    }, {
        key: 'imgAlert',
        value: function imgAlert() {
            Alert({
                title: '标题',
                content: React.createElement('div', null, React.createElement('img', { src: 'http://imgcdn50.zuzuche.com/world/base/329/214/556/f89e270b09ef8651fa4fea12867543d5.jpg!/fw/150/quality/100/format/png' })),
                closeCallback: function closeCallback() {
                    console.log('Alert关闭了');
                }
            });
        }
    }, {
        key: 'radioAlert',
        value: function radioAlert() {
            Alert({
                title: '标题',
                content: React.createElement('p', null, 'asdasdasdasd'),
                maskClose: true,
                buttonDirection: 'vertical',
                buttons: [{
                    text: '推荐操作',
                    onPress: function onPress() {},
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', fontWeight: 400, border: 'none' }
                    }
                }, {
                    text: '推荐操作',
                    onPress: function onPress() {},
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#696E7C', fontWeight: 400, border: 'none' }
                    }
                }, {
                    text: '推荐操作',
                    onPress: function onPress() {},
                    props: {
                        type: 'special',
                        className: 'aaaa',
                        style: { color: '#2871F7', fontWeight: 500, border: 'none' }
                    }

                }]
            });
        }
    }, {
        key: 'headImgAlert',
        value: function headImgAlert() {
            Alert({
                title: '标题',
                titleImg: "http://imgcdn5.zuzuche.com/static/37/11/71f75d009747cdd10e19160f2650b3b2.jpg!/fwfh/350x350/quality/100/format/png",
                content: React.createElement('p', null, 'asdasdasdasd'),
                maskClose: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('div', { className: 'zzc-demo' }, React.createElement('div', { className: 'zzc-demo-header' }, React.createElement('h1', { className: 'zzc-demo-title' }, "Alert \u8B66\u544A\u5F39\u7A97")), React.createElement('div', { className: 'zzc-demo-body' }, React.createElement('h5', null, "\u57FA\u672C\u4F7F\u7528"), React.createElement(Button, { onClick: this.defaultBtn }, "\u4F7F\u7528\u9ED8\u8BA4\u6309\u94AE"), React.createElement(Button, { onClick: this.titleAlert }, "\u53EA\u6709\u6807\u9898\u7684Alert"), React.createElement(Button, { onClick: this.contentAlert }, "\u5E26\u6709\u5185\u5BB9\u7684Alert"), React.createElement(Button, { onClick: this.doubleBtnAlert }, "\u53CC\u6309\u94AEAlert"), React.createElement(Button, { onClick: this.maskCloseAlert }, "\u70B9\u51FBmask\u5173\u95EDAlert"), React.createElement(Button, { onClick: this.autoCloseAlert }, "2\u79D2\u540E\u81EA\u52A8\u5173\u95EDAlert"), React.createElement(Button, { onClick: this.promiseAlert }, "\u5EF6\u8FDF\u5173\u95EDAlert"), React.createElement(Button, { onClick: this.imgAlert }, "\u5E26\u56FE\u7247\u7684Alert"), React.createElement('h5', null, "\u5355\u9009\u6846"), React.createElement(Button, { onClick: this.radioAlert }, "Alert\u5355\u9009\u6846"), React.createElement('h5', null, "\u5934\u90E8\u5E26\u6709\u56FE\u7247\u7684Alert"), React.createElement(Button, { onClick: this.headImgAlert }, "\u70B9\u51FB")));
        }
    }]);

    return App;
}(Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));