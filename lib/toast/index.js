'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _class = require('../_util/class');

var _Event = require('../_util/Event');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _alignment = require('../_util/alignment');

var _alignment2 = _interopRequireDefault(_alignment);

require('../style/index');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PREFIXCLS = 'zzc-toast';
var alignment = new _alignment2.default();
var _closeTimer = null;
var _toastElem = null;
var _duration = 2;
var _onClose = function _onClose() {};
var _parentNode = null;
function closeToast() {
    (0, _class.addClass)(_toastElem, 'zzc-fade-leave');
    (0, _class.addClass)(_toastElem, 'zzc-fade-leave-active');
    _closeTimer = null;
}
function countdown() {
    _closeTimer = setTimeout(function () {
        closeToast();
    }, _duration * 1000);
}
function reset() {
    _Event.animationEvents.removeEndEventListener(_toastElem, addAnimationEnd);
    _parentNode = null;
    _toastElem = null;
    _duration = 2;
}
function addAnimationEnd() {
    if ((0, _class.hasClass)(this, 'zzc-fade-enter')) {
        (0, _class.removeClass)(this, 'zzc-fade-enter-active');
        (0, _class.removeClass)(this, 'zzc-fade-enter');
        _duration !== 0 && countdown();
    } else {
        _parentNode && _parentNode.parentNode.removeChild(_parentNode);
        _parentNode && _reactDom2.default.unmountComponentAtNode(_parentNode);
        _duration !== 0 && _onClose();
        reset();
    }
}
function toggleShow() {
    if (_closeTimer != null) {
        clearTimeout(_closeTimer);
    }
    _parentNode && _parentNode.parentNode.removeChild(_parentNode);
    _parentNode && _reactDom2.default.unmountComponentAtNode(_parentNode);
    reset();
    _onClose();
    var item = alignment.get('first');
    getToast(item.type, item.content, item.duration, item.onClose, item.mask);
}
function createParentNode() {
    var parentNode = document.createElement('div');
    document.body.appendChild(parentNode);
    return parentNode;
}
function getToast(type, content) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var mask = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    // only one toast to page
    if (_toastElem != null) {
        alignment.save({
            type: type,
            content: content,
            duration: duration,
            onClose: onClose,
            mask: mask
        });
        toggleShow();
    } else {
        _duration = duration;
        _parentNode = createParentNode();
        _onClose = onClose;
        var zzcToastCls = (0, _classnames2.default)(PREFIXCLS, (0, _defineProperty3.default)({}, PREFIXCLS + '-nomask', !mask), (0, _defineProperty3.default)({}, PREFIXCLS + '-icon', type === 'loading' || type === 'success' || type === 'error' || type === 'waring'));
        _reactDom2.default.render(_react2.default.createElement(
            'div',
            { className: zzcToastCls },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(PREFIXCLS + '-notice-content') },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(PREFIXCLS + '-text') },
                    (type === 'success' || type === 'error' || type === 'waring' || type === 'loading') && _react2.default.createElement(_icon2.default, { style: { fill: '#fff' }, size: 'lg', type: type }),
                    _react2.default.createElement('div', { className: (0, _classnames2.default)(PREFIXCLS + '-text-content'), dangerouslySetInnerHTML: {
                            __html: content
                        } })
                )
            )
        ), _parentNode);
        addAnimationEvent();
    }
}
function addAnimationEvent() {
    _toastElem = document.querySelector('.' + PREFIXCLS + '-notice-content');
    if (_toastElem) {
        _Event.animationEvents.addEndEventListener(_toastElem, addAnimationEnd);
        (0, _class.addClass)(_toastElem, 'zzc-fade-enter');
        (0, _class.addClass)(_toastElem, 'zzc-fade-enter-active');
    } else {
        requestAnimationFrame(function () {
            addAnimationEvent();
        });
    }
}

var Toast = function (_Component) {
    (0, _inherits3.default)(Toast, _Component);

    function Toast() {
        (0, _classCallCheck3.default)(this, Toast);
        return (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).apply(this, arguments));
    }

    (0, _createClass3.default)(Toast, null, [{
        key: 'info',
        value: function info() {
            getToast('info', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
        }
    }, {
        key: 'success',
        value: function success() {
            getToast('success', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
        }
    }, {
        key: 'error',
        value: function error() {
            getToast('error', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
        }
    }, {
        key: 'waring',
        value: function waring() {
            getToast('waring', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
        }
    }, {
        key: 'loading',
        value: function loading() {
            getToast('loading', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
        }
    }, {
        key: 'hideToast',
        value: function hideToast() {
            closeToast();
        }
    }]);
    return Toast;
}(_react.Component);

exports.default = Toast;