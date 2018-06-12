'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationEvents = exports.transitionEvents = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENT_NAME_MAP = {
    transitionend: {
        transition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'mozTransitionEnd',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd'
    },
    animationend: {
        animation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        OAnimation: 'oAnimationEnd',
        msAnimation: 'MSAnimationEnd'
    }
};
var endEventsTransitionend = [];
var endEventsAnimationend = [];
// 查看浏览器事件支持
function detectEvents() {
    // 判断是否支持AnimationEvent
    if ('AnimationEvent' in window) {
        delete EVENT_NAME_MAP.animationend.WebkitAnimation;
    }
    // 判断是否支持TransitionEvent
    if ('TransitionEvent' in window) {
        delete EVENT_NAME_MAP.transitionend.WebkitTransition;
    }
    (0, _keys2.default)(EVENT_NAME_MAP.animationend).forEach(function (key) {
        endEventsAnimationend.push(EVENT_NAME_MAP.animationend[key]);
    });
    (0, _keys2.default)(EVENT_NAME_MAP.transitionend).forEach(function (key) {
        endEventsTransitionend.push(EVENT_NAME_MAP.transitionend[key]);
    });
}
// 绑定事件
function addEventListener(node, eventName, eventListener, _this) {
    if (_this) {
        node.addEventListener(eventName, eventListener.bind(_this), false);
    } else {
        node.addEventListener(eventName, eventListener, false);
    }
}
// 删除事件
function removeEventListener(node, eventName, eventListener, _this) {
    if (_this) {
        node.removeEventListener(eventName, eventListener.bind(_this), false);
    } else {
        node.removeEventListener(eventName, eventListener, false);
    }
}
// 绑定过度事件
var transitionEvents = {
    addEndEventListener: function addEndEventListener(node, eventListener, _this) {
        if (endEventsTransitionend.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
        }
        _this = _this ? _this : null;
        endEventsTransitionend.forEach(function (endEvents) {
            addEventListener(node, endEvents, eventListener, _this);
        });
    },
    removeEndEventListener: function removeEndEventListener(node, eventListener, _this) {
        if (endEventsTransitionend.length === 0) {
            return;
        }
        endEventsTransitionend.forEach(function (endEvent) {
            removeEventListener(node, endEvent, eventListener, _this);
        });
    }
};
// 绑定动画事件
var animationEvents = {
    addEndEventListener: function addEndEventListener(node, eventListener, _this) {
        if (endEventsAnimationend.length === 0) {
            window.setTimeout(eventListener, 0);
            return;
        }
        _this = _this ? _this : null;
        endEventsAnimationend.forEach(function (endEvents) {
            addEventListener(node, endEvents, eventListener, _this);
        });
    },
    removeEndEventListener: function removeEndEventListener(node, eventListener, _this) {
        if (endEventsAnimationend.length === 0) {
            return;
        }
        endEventsAnimationend.forEach(function (endEvent) {
            removeEventListener(node, endEvent, eventListener, _this);
        });
    }
};
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    detectEvents();
}
exports.transitionEvents = transitionEvents;
exports.animationEvents = animationEvents;