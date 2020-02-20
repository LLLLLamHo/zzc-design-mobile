'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function (opt) {
    var alert = new Alert(opt);
    return alert.close.bind(alert);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _config = require('../_util/config');

var _config2 = _interopRequireDefault(_config);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function () {
    function Alert(opt) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Alert);

        var defaultPorps = {
            prefixCls: _config2.default.cls + '-alert',
            className: '',
            style: {},
            title: '',
            content: null,
            titleImg: null,
            buttons: [],
            buttonDirection: 'horizontally',
            maskClose: false,
            closable: true,
            closeCallback: function closeCallback() {}
        };
        this.opt = (0, _assign2.default)(defaultPorps, opt);
        var _opt = this.opt,
            title = _opt.title,
            content = _opt.content,
            prefixCls = _opt.prefixCls,
            className = _opt.className,
            titleImg = _opt.titleImg;

        this.parentNode = this.createParentNode(className);
        this._alert = _reactDom2.default.render(_react2.default.createElement(
            _Modal2.default,
            (0, _extends3.default)({ transitionName: _config2.default.cls + '-zoom', visible: true }, this.opt, { title: this.createTitle(title, prefixCls, titleImg, content), closeCallback: function closeCallback() {
                    _this.removeAlert();
                } }),
            content && _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-body-content') },
                content
            )
        ), this.parentNode);
    }

    (0, _createClass3.default)(Alert, [{
        key: 'createParentNode',
        value: function createParentNode(className) {
            var parentNode = document.createElement('div');
            parentNode.className = className;
            document.body.appendChild(parentNode);
            return parentNode;
        }
    }, {
        key: 'createTitle',
        value: function createTitle(title, prefixCls, titleImg, content) {
            var titleComponent = null;
            if (title !== '') {
                titleComponent = _react2.default.createElement(
                    'h1',
                    { className: (0, _classnames2.default)(prefixCls + '-title', !content && prefixCls + '-title-only') },
                    title
                );
            }
            if (titleImg) {
                titleComponent = _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-title-img' },
                        _react2.default.createElement('img', { src: titleImg })
                    ),
                    titleComponent
                );
            }
            return titleComponent;
        }
    }, {
        key: 'removeAlert',
        value: function removeAlert() {
            this.parentNode && _reactDom2.default.unmountComponentAtNode(this.parentNode);
            if (this.parentNode && this.parentNode.parentNode) {
                this.parentNode.parentNode.removeChild(this.parentNode);
                this.opt.closeCallback();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            if (this._alert && this._alert.setState) {
                this._alert.setState({
                    visible: false
                });
            } else {
                this.removeAlert();
            }
        }
    }]);
    return Alert;
}();