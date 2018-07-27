/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(63);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = { "default": __webpack_require__(88), __esModule: true };
=======
module.exports = { "default": __webpack_require__(90), __esModule: true };
>>>>>>> upstream/master

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(42);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

<<<<<<< HEAD
var _setPrototypeOf = __webpack_require__(102);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(106);
=======
var _setPrototypeOf = __webpack_require__(104);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(108);
>>>>>>> upstream/master

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(42);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    cls: 'zds'
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 8 */
<<<<<<< HEAD
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(59);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 10 */
=======
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(42);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isWindow = isWindow;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isString = isString;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isRegExp = isRegExp;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isDate = isDate;
exports.isDOM = isDOM;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isType(s, typeString) {
    return Object.prototype.toString.call(s) === '[object ' + typeString + ']';
}
function isWindow(s) {
    return isType(s, 'Window');
}
function isObject(s) {
    return isType(s, 'Object');
}
function isArray(s) {
    return Array.isArray ? Array.isArray(s) : isType(s, 'Array');
}
function isString(s) {
    return isType(s, 'String');
}
function isFunction(s) {
    return isType(s, 'Function');
}
function isNumber(s) {
    return isType(s, 'Number');
}
function isRegExp(s) {
    return isType(s, 'RegExp');
}
function isUndefined(s) {
    return isType(s, 'Undefined');
}
function isNull(s) {
    return isType(s, 'Null');
}
function isDate(s) {
    return isType(s, 'Date');
}
function isDOM(s) {
    if ((typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object') {
        return s instanceof HTMLElement;
    }
    return s && (typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object' && s.nodeType === 1 && typeof s.nodeName === 'string';
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(63);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = { "default": __webpack_require__(114), __esModule: true };
=======
module.exports = { "default": __webpack_require__(116), __esModule: true };
>>>>>>> upstream/master

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
<<<<<<< HEAD
var core = __webpack_require__(8);
var ctx = __webpack_require__(49);
var hide = __webpack_require__(19);
var has = __webpack_require__(17);
=======
var core = __webpack_require__(9);
var ctx = __webpack_require__(53);
var hide = __webpack_require__(20);
>>>>>>> upstream/master
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(53);
=======
var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(57);
>>>>>>> upstream/master
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(15) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
<<<<<<< HEAD
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40)('wks');
var uid = __webpack_require__(29);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 17 */
=======
>>>>>>> upstream/master
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40)('wks');
var uid = __webpack_require__(28);
var Symbol = __webpack_require__(11).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
<<<<<<< HEAD
var createDesc = __webpack_require__(28);
=======
var createDesc = __webpack_require__(27);
>>>>>>> upstream/master
module.exports = __webpack_require__(15) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
<<<<<<< HEAD
var IObject = __webpack_require__(56);
=======
var IObject = __webpack_require__(60);
>>>>>>> upstream/master
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
<<<<<<< HEAD
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(66);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 26 */
=======
/* 23 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
<<<<<<< HEAD
/* 27 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
=======
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
>>>>>>> upstream/master
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
<<<<<<< HEAD
/* 31 */
/***/ (function(module, exports) {
=======
/* 25 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(59);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
<<<<<<< HEAD
/* 32 */
=======
/* 26 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

<<<<<<< HEAD
var _Animate = __webpack_require__(123);

var _Animate2 = _interopRequireDefault(_Animate);

var _class = __webpack_require__(46);
=======
var _Animate = __webpack_require__(125);

var _Animate2 = _interopRequireDefault(_Animate);

var _class = __webpack_require__(31);
>>>>>>> upstream/master

var _animateConfig = __webpack_require__(48);

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _typeof = __webpack_require__(8);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
__webpack_require__(124);
=======
__webpack_require__(126);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_PureComponent) {
    (0, _inherits3.default)(Dialog, _PureComponent);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));

        _this2.state = {
            animationTypeList: _animateConfig2.default
        };
        _this2.isShowedMask = false;
        _this2.isShowedBox = false;
        return _this2;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 当没有动画效果的时候，创建完毕后需要为mask添加点击关闭事件
            !this.props.transparent && this.props.maskClose && this.addMarkCloseEvent();
        }
        // mask关闭事件

    }, {
        key: 'addMarkCloseEvent',
        value: function addMarkCloseEvent() {
            var _this = this;
            var _props = this.props,
                closeCallback = _props.closeCallback,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                transparent = _props.transparent;

            if (this.mask) {
                var maskAnimation = _this.getAnimationClass(_this.props.maskTransitionName);
                var bodyAnimation = _this.getAnimationClass(_this.props.transitionName);
                this.mask.onclick = function () {
                    if (transitionName && transitionName !== '' && !_this.isShowedBox) {
                        return false;
                    }
                    if (!transparent && maskTransitionName && maskTransitionName !== '' && !_this.isShowedMask) {
                        return false;
                    }
                    if (bodyAnimation) {
                        (0, _class.addClass)(_this.box, bodyAnimation.leave);
                        (0, _class.addClass)(_this.box, bodyAnimation.leaveActive);
                    }
                    // 当没有配置动画点击mask关闭dialog，直接调用
                    if (maskAnimation) {
                        (0, _class.addClass)(_this.mask, maskAnimation.leave);
                        (0, _class.addClass)(_this.mask, maskAnimation.leaveActive);
                    } else {
                        closeCallback && closeCallback();
                    }
                    return false;
                };
            }
        }
        // 获取指定样式

    }, {
        key: 'getAnimationClass',
        value: function getAnimationClass(transitionName) {
            if (this.state.animationTypeList[transitionName]) {
                return this.state.animationTypeList[transitionName];
            }
            return transitionName ? transitionName : null;
        }
        // mask是否加入动画

    }, {
        key: 'createDialogMask',
        value: function createDialogMask() {
            var _this3 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                transparent = _props2.transparent,
                maskTransitionName = _props2.maskTransitionName,
                closeCallback = _props2.closeCallback,
                maskStyle = _props2.maskStyle,
                maskClassName = _props2.maskClassName,
                visible = _props2.visible;

            var newMaskClassName = (0, _classnames2.default)(prefixCls + '-mask', maskClassName);
            if (!transparent) {
                if (maskTransitionName && maskTransitionName !== '') {
                    return _react2.default.createElement(
                        _Animate2.default,
                        { visible: visible, animationName: this.getAnimationClass(maskTransitionName), onEnd: function onEnd(type) {
                                _this3.isShowedMask = type === 'enter';
                                _this3.props.maskAnimated && (0, _typeof.isFunction)(_this3.props.maskAnimated) && _this3.props.maskAnimated(type);
                                type === 'leave' && closeCallback && closeCallback();
                            } },
                        _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref) {
                                _this3.mask = _ref;
                            }, className: newMaskClassName })
                    );
                }
                return _react2.default.createElement('div', { style: maskStyle, ref: function ref(_ref2) {
                        _this3.mask = _ref2;
                    }, className: newMaskClassName });
            }
            return null;
        }
        // dialog主题是否加入动画

    }, {
        key: 'createDialogBody',
        value: function createDialogBody() {
            var _this4 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                visible = _props3.visible,
                bodyStyle = _props3.bodyStyle,
                transparent = _props3.transparent,
                boxClassName = _props3.boxClassName,
                transitionName = _props3.transitionName,
                maskTransitionName = _props3.maskTransitionName,
                children = _props3.children,
                title = _props3.title,
                footer = _props3.footer,
                closeCallback = _props3.closeCallback;

            console.log(boxClassName);
            var newBoxClassName = (0, _classnames2.default)(prefixCls + '-box', boxClassName);
            if (transitionName && transitionName !== '') {
                return _react2.default.createElement(
                    _Animate2.default,
                    { visible: visible, animationName: this.getAnimationClass(transitionName), onEnd: function onEnd(type) {
<<<<<<< HEAD
                            debugger;
=======
                            _this4.isShowedBox = type === 'enter';
                            _this4.props.boxAnimated && (0, _typeof.isFunction)(_this4.props.boxAnimated) && _this4.props.boxAnimated(type);
>>>>>>> upstream/master
                            // 当选择不创建mask或者mask不使用动画的时候，body动画结束触发closeCallback
                            type === 'leave' && (transparent || maskTransitionName === '') && closeCallback && closeCallback();
                        } },
                    _react2.default.createElement(
                        'div',
                        { style: bodyStyle, ref: function ref(_ref3) {
                                _this4.box = _ref3;
                            }, className: newBoxClassName },
                        title && title,
                        children,
                        footer && footer
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { style: bodyStyle, ref: function ref(_ref4) {
                        _this4.box = _ref4;
                    }, className: newBoxClassName },
                title && title,
                children,
                footer && footer
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                className = _props4.className,
                style = _props4.style;

            return _react2.default.createElement(
                'div',
                { style: style, className: (0, _classnames2.default)('' + prefixCls, className) },
                this.createDialogMask(),
                this.createDialogBody()
            );
        }
    }]);
    return Dialog;
}(_react.PureComponent);

exports.default = Dialog;

Dialog.defaultProps = {
    prefixCls: _config2.default.cls + '-dialog',
    className: '',
    maskClassName: '',
    boxClassName: '',
    maskTransitionName: '',
    transitionName: '',
    style: {},
    maskStyle: {},
    visible: false,
    closeCallback: function closeCallback() {},
    maskAnimated: function maskAnimated() {},
    boxAnimated: function boxAnimated() {},

    title: null,
    footer: null,
    maskClose: false,
    transparent: false
};

/***/ }),
<<<<<<< HEAD
/* 33 */
=======
/* 27 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
function hasClass(node, className) {
    if (node.classList) {
        return node.classList.contains(className);
    }
    var originClass = node.className;
    return (' ' + originClass + ' ').indexOf(' ' + className + ' ') > -1;
}
function addClass(node, className) {
    if (node.classList) {
        node.classList.add(className);
    } else if (!hasClass(node, className)) {
        node.className = node.className + ' ' + className;
    }
}
function removeClass(node, className) {
    if (node.classList) {
        node.classList.remove(className);
    } else if (hasClass(node, className)) {
        var originClass = node.className;
        node.className = (' ' + originClass + ' ').replace(' ' + className + ' ', '');
    }
}

/***/ }),
/* 32 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
<<<<<<< HEAD
=======
/* 33 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
>>>>>>> upstream/master
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(14).f;
<<<<<<< HEAD
var has = __webpack_require__(17);
var TAG = __webpack_require__(16)('toStringTag');
=======
var has = __webpack_require__(16);
var TAG = __webpack_require__(17)('toStringTag');
>>>>>>> upstream/master

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
<<<<<<< HEAD
var anObject = __webpack_require__(23);
var dPs = __webpack_require__(82);
=======
var anObject = __webpack_require__(24);
var dPs = __webpack_require__(84);
>>>>>>> upstream/master
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(55)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
<<<<<<< HEAD
  __webpack_require__(78).appendChild(iframe);
=======
  __webpack_require__(80).appendChild(iframe);
>>>>>>> upstream/master
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
<<<<<<< HEAD
var uid = __webpack_require__(29);
=======
var uid = __webpack_require__(28);
>>>>>>> upstream/master
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(8);
var global = __webpack_require__(11);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(27) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

<<<<<<< HEAD
var _iterator = __webpack_require__(92);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(94);
=======
var _iterator = __webpack_require__(94);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(96);
>>>>>>> upstream/master

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
exports.f = __webpack_require__(16);
=======
exports.f = __webpack_require__(17);
>>>>>>> upstream/master


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
<<<<<<< HEAD
var core = __webpack_require__(8);
var LIBRARY = __webpack_require__(27);
=======
var core = __webpack_require__(9);
var LIBRARY = __webpack_require__(33);
>>>>>>> upstream/master
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(14).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationEvents = exports.transitionEvents = undefined;

var _keys = __webpack_require__(67);

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

/***/ }),
/* 47 */
<<<<<<< HEAD
=======
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(69);

/***/ }),
/* 48 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'zds-slide-bottom': {
        enter: 'zds-slide-bottom-enter',
        enterActive: 'zds-slide-bottom-enter-active',
        leave: 'zds-slide-bottom-leave',
        leaveActive: 'zds-slide-bottom-leave-active'
    },
    'zds-slide-top': {
        enter: 'zds-slide-top-enter',
        enterActive: 'zds-slide-top-enter-active',
        leave: 'zds-slide-top-leave',
        leaveActive: 'zds-slide-top-leave-active'
    },
    'zds-slide-left': {
        enter: 'zds-slide-left-enter',
        enterActive: 'zds-slide-left-enter-active',
        leave: 'zds-slide-left-leave',
        leaveActive: 'zds-slide-left-leave-active'
    },
    'zds-slide-right': {
        enter: 'zds-slide-right-enter',
        enterActive: 'zds-slide-right-enter-active',
        leave: 'zds-slide-right-leave',
        leaveActive: 'zds-slide-right-leave-active'
    },
    'zds-zoom': {
        enter: 'zds-zoom-enter',
        enterActive: 'zds-zoom-enter-active',
        leave: 'zds-zoom-leave',
        leaveActive: 'zds-zoom-leave-active'
    },
    'zds-fade': {
        enter: 'zds-fade-enter',
        enterActive: 'zds-fade-enter-active',
        leave: 'zds-fade-leave',
        leaveActive: 'zds-fade-leave-active'
    }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD
exports.setLayoutScroll = setLayoutScroll;
exports.getTabItemSize = getTabItemSize;
exports.getTranslate3dStyle = getTranslate3dStyle;
function setLayoutScroll(layout, offset, unit, isVertical) {
    var value = isVertical ? '0px, ' + offset + unit + ', 0px' : '' + offset + unit + ', 0px, 0px';
    var translate3d = 'translate3d(' + value + ')';
    var style = layout.style;
    setTransfrom(style, translate3d);
}
function getTabItemSize(maxTabLength) {
    return (100 / maxTabLength).toFixed(4);
}
function getTranslate3dStyle(value, direction) {
    var offset = direction === 'vertical' ? '0px, ' + value + ', 1px' : value + ', 0px, 1px';
    var translate3d = 'translate3d(' + offset + ')';
    return {
        transform: translate3d,
        WebkitTransform: translate3d,
        MozTransform: translate3d
    };
}
function setTransfrom(style, value) {
    style.transform = value;
    style.WebkitTransform = value;
    style.MozTransform = value;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(74);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};
=======
exports.default = undefined;
>>>>>>> upstream/master

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

<<<<<<< HEAD
var LIBRARY = __webpack_require__(27);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(54);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(81);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(57);
var ITERATOR = __webpack_require__(16)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
=======
var _createClass2 = __webpack_require__(2);
>>>>>>> upstream/master

var _createClass3 = _interopRequireDefault(_createClass2);

<<<<<<< HEAD
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
=======
var _possibleConstructorReturn2 = __webpack_require__(4);
>>>>>>> upstream/master

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

<<<<<<< HEAD
module.exports = !__webpack_require__(15) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(51)('div'), 'a', { get: function () { return 7; } }).a != 7;
});
=======
var _inherits3 = _interopRequireDefault(_inherits2);
>>>>>>> upstream/master

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _dialog = __webpack_require__(26);

<<<<<<< HEAD
var has = __webpack_require__(17);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(83)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
=======
var _dialog2 = _interopRequireDefault(_dialog);
>>>>>>> upstream/master

var _button = __webpack_require__(70);

var _button2 = _interopRequireDefault(_button);

var _i18n = __webpack_require__(72);

var _i18n2 = _interopRequireDefault(_i18n);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(30);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var ObjectProto = Object.prototype;
=======
__webpack_require__(141);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_PureComponent) {
    (0, _inherits3.default)(Modal, _PureComponent);

    function Modal() {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));

        _this.state = {
            isRenderModal: _this.props.visible,
            visible: _this.props.visible,
            lang: _i18n2.default[_this.props.lang]
        };
        _this.maskShowed = false;
        _this.boxShowed = false;
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (this.state.visible !== newProps.visible) {
                if (newProps.visible) {
                    this.setState({
                        isRenderModal: newProps.visible,
                        visible: newProps.visible
                    });
                } else if (this.props.visible !== newProps.visible) {
                    this.close();
                }
            }
        }
    }, {
        key: 'createAlertFooter',
        value: function createAlertFooter(closable, buttons) {
            var _this2 = this;

<<<<<<< HEAD
module.exports = { "default": __webpack_require__(90), __esModule: true };
=======
            var _props = this.props,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                transparent = _props.transparent;
            var lang = this.state.lang;
>>>>>>> upstream/master

            if (closable) {
                return _react2.default.createElement(
                    _button2.default,
                    { noBorder: true, full: true, onClick: function onClick() {
                            // 防止enter动画没有结束就点击关闭引起bug
                            if (transitionName && transitionName !== '' && !_this2.boxShowed) {
                                return false;
                            }
                            if (!transparent && maskTransitionName && maskTransitionName !== '' && !_this2.maskShowed) {
                                return false;
                            }
                            _this2.close();
                            return false;
                        } },
                    lang.close
                );
            } else if (buttons && buttons.length > 0) {
                return buttons.map(function (item, key) {
                    return _react2.default.createElement(
                        'div',
                        { key: _this2.props.prefixCls + '-btn-' + new Date().getTime() + '-' + key, className: (0, _classnames2.default)(_this2.props.prefixCls + '-btn') },
                        _this2.createBtn(item)
                    );
                });
            }
            return null;
        }
    }, {
        key: 'createBtn',
        value: function createBtn(btn) {
            var _this3 = this;

            var onPress = btn.onPress ? btn.onPress : function () {};
            var _props2 = this.props,
                transitionName = _props2.transitionName,
                maskTransitionName = _props2.maskTransitionName,
                transparent = _props2.transparent;

<<<<<<< HEAD
// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(54);
var META = __webpack_require__(96).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(40);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(29);
var wks = __webpack_require__(16);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(97);
var isArray = __webpack_require__(98);
var anObject = __webpack_require__(23);
var isObject = __webpack_require__(18);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(28);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(99);
var $GOPD = __webpack_require__(62);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
=======
            return _react2.default.cloneElement(_react2.default.createElement(
                _button2.default,
                { noBorder: true, full: true, onClick: function onClick(event) {
                        // 防止enter动画没有结束就点击关闭引起bug
                        if (transitionName && transitionName !== '' && !_this3.boxShowed) {
                            return false;
                        }
                        if (!transparent && maskTransitionName && maskTransitionName !== '' && !_this3.maskShowed) {
                            return false;
                        }
                        event.stopPropagation();
                        var res = onPress();
                        if (res && res.then) {
                            res.then(function () {
                                _this3.close();
                            }).catch(function () {});
                        } else {
                            _this3.close();
                        }
                        return false;
                    } },
                btn.text
            ), (0, _assign2.default)({}, btn.props));
        }
    }, {
        key: 'close',
        value: function close() {
            var _props3 = this.props,
                transitionName = _props3.transitionName,
                maskTransitionName = _props3.maskTransitionName;
            // 当没有提供动画，无法触发动画事件触发外部传入的closeCallback，所以当没有动画则主动触发外部closeCallback
>>>>>>> upstream/master

            if (transitionName === '' && maskTransitionName === '') {
                this.closeCallback();
            } else {
                this.setState({
                    visible: false
                });
            }
        }
    }, {
        key: 'createTitle',
        value: function createTitle(title) {
            var prefixCls = this.props.prefixCls;

            if (title && title !== '') {
                return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(prefixCls + '-header') },
                    title
                );
            }
            return null;
        }
    }, {
        key: 'createFooter',
        value: function createFooter() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                buttons = _props4.buttons,
                closable = _props4.closable;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-footer') },
                this.createAlertFooter(closable, buttons)
            );
        }
    }, {
        key: 'closeCallback',
        value: function closeCallback() {
            var _this4 = this;

            this.setState({
                isRenderModal: false,
                visible: false
            }, function () {
                _this4.props.closeCallback();
            });
        }
        // 防止enter动画没有结束就点击关闭引起bug

    }, {
        key: 'maskAnimated',
        value: function maskAnimated(type) {
            this.maskShowed = type === 'enter';
        }
        // 防止enter动画没有结束就点击关闭引起bug

<<<<<<< HEAD
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(27)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
=======
    }, {
        key: 'boxAnimated',
        value: function boxAnimated(type) {
            this.boxShowed = type === 'enter';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props5 = this.props,
                children = _props5.children,
                maskClose = _props5.maskClose,
                transitionName = _props5.transitionName,
                maskTransitionName = _props5.maskTransitionName,
                prefixCls = _props5.prefixCls,
                className = _props5.className,
                style = _props5.style,
                maskStyle = _props5.maskStyle,
                title = _props5.title,
                transparent = _props5.transparent,
                buttons = _props5.buttons,
                closable = _props5.closable;

            if (this.state.isRenderModal) {
                return _react2.default.createElement(
                    _dialog2.default,
                    { transparent: transparent, maskTransitionName: maskTransitionName, visible: this.state.visible, style: style, maskStyle: maskStyle, maskClose: maskClose, maskAnimated: function maskAnimated(type) {
                            _this5.maskAnimated(type);
                        }, boxAnimated: function boxAnimated(type) {
                            _this5.boxAnimated(type);
                        }, transitionName: transitionName, boxClassName: (0, _classnames2.default)(prefixCls + '-box', className), closeCallback: function closeCallback() {
                            _this5.closeCallback();
                        }, title: this.createTitle(title), footer: closable || buttons && buttons.length > 0 ? this.createFooter() : null },
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)(prefixCls + '-body') },
                        children
                    )
                );
            }
            return null;
        }
    }]);
    return Modal;
}(_react.PureComponent);

exports.default = Modal;
>>>>>>> upstream/master

Modal.defaultProps = {
    prefixCls: _config2.default.cls + '-modal',
    maskTransitionName: _config2.default.cls + '-fade',
    style: {},
    maskStyle: {},
    className: '',
    closable: false,
    closeCallback: function closeCallback() {},

    visible: false,
    title: '',
    transitionName: _config2.default.cls + '-zoom',
    buttons: [],
    maskClose: false,
    transparent: false,
    lang: 'cn'
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

<<<<<<< HEAD
// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(55);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(28);
var toIObject = __webpack_require__(21);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(53);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationEvents = exports.transitionEvents = undefined;

var _keys = __webpack_require__(64);

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

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(26);
=======
var _assign = __webpack_require__(12);
>>>>>>> upstream/master

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

<<<<<<< HEAD
var _getOwnPropertySymbols = __webpack_require__(117);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

=======
>>>>>>> upstream/master
var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _loadSprite = __webpack_require__(119);

var _loadSprite2 = _interopRequireDefault(_loadSprite);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(120);
=======
var _util = __webpack_require__(147);

var _config = __webpack_require__(73);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var directionMap = {
    all: _config.DIRECTION_ALL,
    vertical: _config.DIRECTION_VERTICAL,
    horizontal: _config.DIRECTION_HORIZONTAL
};

var Gesture = function (_React$PureComponent) {
    (0, _inherits3.default)(Gesture, _React$PureComponent);

    function Gesture(props) {
        (0, _classCallCheck3.default)(this, Gesture);

        // 单手指手势事件-结束
        var _this = (0, _possibleConstructorReturn3.default)(this, (Gesture.__proto__ || (0, _getPrototypeOf2.default)(Gesture)).call(this, props));

        _this.doSingleTouchEnd = function (status) {
            var _this$gesture = _this.gesture,
                moveStatus = _this$gesture.moveStatus,
                pinch = _this$gesture.pinch,
                rotate = _this$gesture.rotate,
                press = _this$gesture.press,
                pan = _this$gesture.pan,
                direction = _this$gesture.direction;

            if (pinch || rotate) {
                return;
            }
            if (moveStatus) {
                var z = moveStatus.z,
                    velocity = moveStatus.velocity;
                // 计算是否符合滑动

                var swipe = (0, _util.shouldTriggerSwipe)(z, velocity);
                _this.setGestureState({
                    swipe: swipe
                });
                if (pan) {
                    // pan need end, it's a process
                    // sometimes, start with pan left, but end with pan right....
                    _this.triggerAllowEvent('onPan', status);
                }
                if (swipe) {
                    var directionEvName = (0, _util.getDirectionEventName)(direction);
                    // swipe just need a direction, it's a endpoint
                    _this.triggerAllowEvent('onSwipe', directionEvName);
                    return;
                }
            }
            // 长按放手事件
            if (press) {
                _this.triggerEvent('onPressUp');
                return;
            }
            // tap事件，点击down和up之间少于251毫秒
            _this.triggerEvent('onTap');
        };
        _this.directionSetting = directionMap[props.direction]; // 初始化当前方向设定
        return _this;
    }

    (0, _createClass3.default)(Gesture, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.cleanPressTimer();
        }
    }, {
        key: 'now',
        value: function now() {
            return new Date().getTime();
        }
    }, {
        key: 'getGestureState',
        value: function getGestureState() {
            if (!this.gesture) {
                return this.gesture;
            }
            return (0, _assign2.default)({}, this.gesture);
        }
    }, {
        key: 'initGestureStatus',
        value: function initGestureStatus(e) {
            var touches = this.getTouches(e);
            var now = this.now();
            var _props = this.props,
                enablePinch = _props.enablePinch,
                enableRotate = _props.enableRotate;
            // 当没有开启选择和缩放手势时候不去计算当前的手势状态

            var mutliFingerStatus = void 0;
            if (touches.length > 1 && (enablePinch || enableRotate)) {
                mutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
            }
            this.setGestureState({
                touches: touches,
                time: now,
                startTouches: touches,
                startTime: now,
                startMutliFingerStatus: mutliFingerStatus,
                mutliFingerStatus: mutliFingerStatus
            });
        }
    }, {
        key: 'clearGestureStatus',
        value: function clearGestureStatus() {
            delete this.gesture;
        }
    }, {
        key: 'updateGestureStatus',
        value: function updateGestureStatus(e) {
            var time = this.now();
            // 更新时间
            this.setGestureState({
                time: time
            });
            if (!e.touches || !e.touches.length) {
                return;
            }
            var _gesture = this.gesture,
                startTime = _gesture.startTime,
                startTouches = _gesture.startTouches,
                pinch = _gesture.pinch,
                rotate = _gesture.rotate;

            var touches = this.getTouches(e);
            var moveStatus = (0, _util.calcMoveStatus)(startTouches, touches, time - startTime);
            var mutliFingerStatus = void 0;
            if (pinch || rotate) {
                mutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
            }
            this.setGestureState({
                /* update status snapshot */
                touches: touches,
                mutliFingerStatus: mutliFingerStatus,
                /* update duration status */
                moveStatus: moveStatus
            });
        }
    }, {
        key: 'setGestureState',
        value: function setGestureState(params) {
            if (!this.gesture) {
                this.gesture = {};
            }
            // 记录上一个touches信息
            if (this.gesture.touches) {
                this.gesture.preTouches = this.gesture.touches;
            }
            this.gesture = (0, _assign2.default)({}, this.gesture, params);
        }
    }, {
        key: 'getTouches',
        value: function getTouches(e) {
            return Array.prototype.slice.call(e.touches).map(function (item) {
                return {
                    x: item.screenX,
                    y: item.screenY
                };
            });
        }
        // 触发主事件，例如：onPan

    }, {
        key: 'triggerEvent',
        value: function triggerEvent(name) {
            var cb = this.props[name];
            if (typeof cb === 'function') {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                // always give user gesture object as first params first
                cb.apply(undefined, [this.getGestureState()].concat(args));
            }
        }
        // 触发子事件，例如：onPanStart

    }, {
        key: 'triggerSubEvent',
        value: function triggerSubEvent(mainEventName, eventStatus) {
            if (eventStatus) {
                var subEventName = (0, _util.getEventName)(mainEventName, eventStatus);

                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    args[_key2 - 2] = arguments[_key2];
                }

                this.triggerEvent.apply(this, [subEventName].concat(args));
            }
        }
        // 合并触发主、子事件

    }, {
        key: 'triggerCombineEvent',
        value: function triggerCombineEvent(mainEventName, eventStatus) {
            for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
                args[_key3 - 2] = arguments[_key3];
            }

            this.triggerEvent.apply(this, [mainEventName].concat(args));
            this.triggerSubEvent.apply(this, [mainEventName, eventStatus].concat(args));
        }
        // 缩放事件

    }, {
        key: 'triggerPinchEvent',
        value: function triggerPinchEvent(mainEventName, eventStatus) {
            var scale = this.gesture.scale;

            if (eventStatus === 'move' && typeof scale === 'number') {
                // 特殊处理两个事件，当缩放比大于1的时候触发onPinchOut，否则触发onPinchIn
                if (scale > 1) {
                    this.triggerEvent('onPinchOut');
                }
                if (scale < 1) {
                    this.triggerEvent('onPinchIn');
                }
            }
            // 继续触发常规事件

            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            this.triggerCombineEvent.apply(this, [mainEventName, eventStatus].concat(args));
        }
        // 检查是否多手指手势-开始

    }, {
        key: 'checkIfMultiTouchStart',
        value: function checkIfMultiTouchStart() {
            var _props2 = this.props,
                enablePinch = _props2.enablePinch,
                enableRotate = _props2.enableRotate;
            var touches = this.gesture.touches;

            if (touches.length > 1 && (enablePinch || enableRotate)) {
                // 初始化缩放
                if (enablePinch) {
                    var startMutliFingerStatus = (0, _util.calcMutliFingerStatus)(touches);
                    this.setGestureState({
                        startMutliFingerStatus: startMutliFingerStatus,
                        pinch: true,
                        scale: 1
                    });
                    this.triggerCombineEvent('onPinch', 'start');
                }
                // 初始化旋转
                if (enableRotate) {
                    this.setGestureState({
                        rotate: true,
                        rotation: 0
                    });
                    this.triggerCombineEvent('onRotate', 'start');
                }
            }
        }
        // 检查多手指手势-移动

    }, {
        key: 'checkIfMultiTouchMove',
        value: function checkIfMultiTouchMove() {
            var _gesture2 = this.gesture,
                pinch = _gesture2.pinch,
                rotate = _gesture2.rotate,
                touches = _gesture2.touches,
                startMutliFingerStatus = _gesture2.startMutliFingerStatus,
                mutliFingerStatus = _gesture2.mutliFingerStatus;
            // 一开始时不是双手指触发不进行任何逻辑

<<<<<<< HEAD
var _TouchFeedback = __webpack_require__(125);
=======
            if (!pinch && !rotate) {
                return;
            }
            // 一开是双手指，移动单手指
            if (touches.length < 2) {
                this.setGestureState({
                    pinch: false,
                    rotate: false
                });
                pinch && this.triggerCombineEvent('onPinch', 'cancel');
                rotate && this.triggerCombineEvent('onRotate', 'cancel');
                return;
            }
            // 缩放
            if (pinch) {
                // 缩放比例
                var scale = mutliFingerStatus.z / startMutliFingerStatus.z;
                this.setGestureState({
                    scale: scale
                });
                this.triggerPinchEvent('onPinch', 'move');
            }
            // 旋转
            if (rotate) {
                var rotation = (0, _util.calcRotation)(startMutliFingerStatus, mutliFingerStatus);
                this.setGestureState({
                    rotation: rotation
                });
                this.triggerCombineEvent('onRotate', 'move');
            }
        }
        // 检查单手指手势-移动
>>>>>>> upstream/master

    }, {
        key: 'checkIfSingleTouchMove',
        value: function checkIfSingleTouchMove() {
            var _gesture3 = this.gesture,
                pan = _gesture3.pan,
                touches = _gesture3.touches,
                moveStatus = _gesture3.moveStatus,
                preTouches = _gesture3.preTouches;
            // 一旦移动中的手指超过两只则取消pan事件

            if (touches.length > 1) {
                this.setGestureState({
                    pan: false
                });
                pan && this.triggerCombineEvent('onPan', 'cancel');
                return;
            }
            this.event.preventDefault();
            if (moveStatus) {
                var direction = (0, _util.getMovingDirection)(preTouches[0], touches[0]);
                this.setGestureState({
                    direction: direction
                });
                var eventName = (0, _util.getDirectionEventName)(direction);
                // 检查当前允许方向
                if (!this.allowGesture()) {
                    return;
                }
                // 如果start并不满足pan的条件，则当这次move未start处理
                if (!pan) {
                    this.triggerCombineEvent('onPan', 'start');
                    this.setGestureState({
                        pan: true
                    });
                } else {
                    this.triggerCombineEvent('onPan', eventName);
                    this.triggerSubEvent('onPan', 'move');
                }
            }
        }
        // 检查多手指手势事件-结束

    }, {
        key: 'checkIfMultiTouchEnd',
        value: function checkIfMultiTouchEnd(status) {
            var _gesture4 = this.gesture,
                pinch = _gesture4.pinch,
                rotate = _gesture4.rotate;

<<<<<<< HEAD
__webpack_require__(22);

__webpack_require__(127);
=======
            if (pinch) {
                this.triggerCombineEvent('onPinch', status);
            }
            if (rotate) {
                this.triggerCombineEvent('onRotate', status);
            }
        }
        // 记录长按

    }, {
        key: 'initPressTimer',
        value: function initPressTimer() {
            var _this2 = this;
>>>>>>> upstream/master

            this.cleanPressTimer();
            this.pressTimer = setTimeout(function () {
                _this2.setGestureState({
                    press: true
                });
                _this2.triggerEvent('onPress');
                _this2.pressTimer = null;
            }, _config.PRESS.time);
        }
        // 清楚长按

    }, {
        key: 'cleanPressTimer',
        value: function cleanPressTimer() {
            this.pressTimer && clearTimeout(this.pressTimer);
        }
    }, {
        key: 'triggerAllowEvent',
        value: function triggerAllowEvent(type, status) {
            if (this.allowGesture()) {
                this.triggerCombineEvent(type, status);
            } else {
                this.triggerSubEvent(type, status);
            }
        }
    }, {
        key: '_handleTouchStart',
        value: function _handleTouchStart(e) {
            // 清空状态
            this.clearGestureStatus();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            // 初始化手势状态
            this.initGestureStatus(e);
            // 长按
            this.initPressTimer();
            // 检查多手指手势
            this.checkIfMultiTouchStart();
        }
    }, {
        key: '_handleTouchMove',
        value: function _handleTouchMove(e) {
            // 清楚长按计时
            this.cleanPressTimer();
            this.event = e;
            if (!this.gesture) {
                return;
            }
            // 更新手势状态
            this.updateGestureStatus(e);
            this.checkIfSingleTouchMove();
            this.checkIfMultiTouchMove();
            e.stopPropagation();
            e.preventDefault();
        }
    }, {
        key: '_handleTouchCancel',
        value: function _handleTouchCancel(e) {
            this.cleanPressTimer();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            this.updateGestureStatus(e);
            this.doSingleTouchEnd('cancel');
            this.checkIfMultiTouchEnd('cancel');
        }
    }, {
        key: '_handleTouchEnd',
        value: function _handleTouchEnd(e) {
            this.cleanPressTimer();
            this.event = e;
            if (e.touches.length > 1) {
                e.preventDefault();
            }
            this.updateGestureStatus(e);
            this.doSingleTouchEnd('end');
            this.checkIfMultiTouchEnd('end');
        }
        // 检查是否满足当前配置的方向条件

    }, {
        key: 'allowGesture',
        value: function allowGesture() {
            return (0, _util.shouldTriggerDirection)(this.gesture.direction, this.directionSetting);
        }
        // 设置touchAction

    }, {
        key: 'getTouchAction',
        value: function getTouchAction() {
            var _props3 = this.props,
                enablePinch = _props3.enablePinch,
                enableRotate = _props3.enableRotate;
            var directionSetting = this.directionSetting;

            if (enablePinch || enableRotate || directionSetting === _config.DIRECTION_ALL) {
                return 'pan-x pan-y';
            }
            if (directionSetting === _config.DIRECTION_VERTICAL) {
                return 'pan-x';
            }
            if (directionSetting === _config.DIRECTION_HORIZONTAL) {
                return 'pan-y';
            }
            return 'auto';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var children = this.props.children;

            var child = _react2.default.Children.only(children);
            var touchAction = this.getTouchAction();
            var events = {
                onTouchStart: function onTouchStart(e) {
                    _this3._handleTouchStart(e);
                },
                onTouchMove: function onTouchMove(e) {
                    _this3._handleTouchMove(e);
                },
                onTouchCancel: function onTouchCancel(e) {
                    _this3._handleTouchCancel(e);
                },
                onTouchEnd: function onTouchEnd(e) {
                    _this3._handleTouchEnd(e);
                }
            };
            return _react2.default.cloneElement(child, (0, _assign2.default)({}, events, { style: (0, _assign2.default)({ touchAction: touchAction }, child.props.style || {}) }));
        }
    }]);
    return Gesture;
}(_react2.default.PureComponent);

exports.default = Gesture;

Gesture.defaultProps = {
    enableRotate: false,
    enablePinch: false,
    direction: 'all'
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLayoutScroll = setLayoutScroll;
exports.getTabItemSize = getTabItemSize;
exports.getTranslate3dStyle = getTranslate3dStyle;
function setLayoutScroll(layout, offset, unit, isVertical) {
    var value = isVertical ? '0px, ' + offset + unit + ', 0px' : '' + offset + unit + ', 0px, 0px';
    var translate3d = 'translate3d(' + value + ')';
    var style = layout.style;
    setTransfrom(style, translate3d);
}
function getTabItemSize(maxTabLength) {
    return (100 / maxTabLength).toFixed(4);
}
function getTranslate3dStyle(value, direction) {
    var offset = direction === 'vertical' ? '0px, ' + value + ', 1px' : value + ', 0px, 1px';
    var translate3d = 'translate3d(' + offset + ')';
    return {
        transform: translate3d,
        WebkitTransform: translate3d,
        MozTransform: translate3d
    };
}
function setTransfrom(style, value) {
    style.transform = value;
    style.WebkitTransform = value;
    style.MozTransform = value;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetDate = resetDate;
function resetDate(date) {
    return date < 10 ? "0" + date : "" + date;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(76);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(11).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var _dialog = __webpack_require__(32);
=======
var LIBRARY = __webpack_require__(33);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(58);
var hide = __webpack_require__(20);
var has = __webpack_require__(16);
var Iterators = __webpack_require__(32);
var $iterCreate = __webpack_require__(83);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(17)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
>>>>>>> upstream/master

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(15) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(55)('div'), 'a', { get: function () { return 7; } }).a != 7;
});

<<<<<<< HEAD
__webpack_require__(140);
=======
>>>>>>> upstream/master

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(16);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(85)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(54);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var _zhCN = __webpack_require__(137);
=======
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(16);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var ObjectProto = Object.prototype;
>>>>>>> upstream/master

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

<<<<<<< HEAD
var _zhHK = __webpack_require__(138);
=======
>>>>>>> upstream/master

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var _zhEN = __webpack_require__(139);
=======
// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13);
var core = __webpack_require__(9);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};
>>>>>>> upstream/master


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(11);
var has = __webpack_require__(16);
var DESCRIPTORS = __webpack_require__(15);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(58);
var META = __webpack_require__(98).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(40);
var setToStringTag = __webpack_require__(34);
var uid = __webpack_require__(28);
var wks = __webpack_require__(17);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(99);
var isArray = __webpack_require__(100);
var anObject = __webpack_require__(24);
var isObject = __webpack_require__(18);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(37);
var createDesc = __webpack_require__(27);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(101);
var $GOPD = __webpack_require__(66);
var $DP = __webpack_require__(14);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(146);

var _config = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
=======
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;
>>>>>>> upstream/master

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(30).f = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(33)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(59);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(27);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(37);
var has = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(57);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(15) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _getOwnPropertySymbols = __webpack_require__(119);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _loadSprite = __webpack_require__(121);

var _loadSprite2 = _interopRequireDefault(_loadSprite);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(122);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

(0, _loadSprite2.default)();

var Icon = function (_React$PureComponent) {
    (0, _inherits3.default)(Icon, _React$PureComponent);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _loadSprite2.default)();
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                type = _a.type,
                size = _a.size,
                className = _a.className,
                style = _a.style,
                reset = __rest(_a, ["prefixCls", "type", "size", "className", "style"]);
            var cls = (0, _classnames2.default)(className, prefixCls, prefixCls + '-' + size, prefixCls + '-' + type);
            return _react2.default.createElement(
                'svg',
                (0, _extends3.default)({ className: cls, style: style }, reset),
                _react2.default.createElement('use', { xlinkHref: '#' + prefixCls + '-' + type })
            );
        }
    }]);
    return Icon;
}(_react2.default.PureComponent);

exports.default = Icon;

Icon.defaultProps = {
    prefixCls: _config2.default.cls + '-icon',
    type: undefined,
    size: 'md',
    className: '',
    style: {}
};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _touchFeedback = __webpack_require__(71);

var _touchFeedback2 = _interopRequireDefault(_touchFeedback);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(47);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_PureComponent) {
    (0, _inherits3.default)(Button, _PureComponent);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'setActiveClassName',
        value: function setActiveClassName(activeClassName, type, ghost) {
            var _classNames;

            var activeClassNameIsNone = activeClassName === '';
            var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-active-' + type, activeClassNameIsNone && !ghost), (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-active-' + type + '-ghost', activeClassNameIsNone && ghost), (0, _defineProperty3.default)(_classNames, this.props.prefixCls + '-active-' + activeClassName, !activeClassNameIsNone), _classNames));
            return className;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props,
                ghost = _props.ghost,
                noBorder = _props.noBorder,
                noRadius = _props.noRadius,
                children = _props.children,
                className = _props.className,
                prefixCls = _props.prefixCls,
                type = _props.type,
                full = _props.full,
                size = _props.size,
                inline = _props.inline,
                disabled = _props.disabled,
                style = _props.style,
                activeStyle = _props.activeStyle,
                activeClassName = _props.activeClassName,
                onClick = _props.onClick;

            var btnClassNames = (0, _classnames2.default)(prefixCls, className, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, prefixCls + '-' + size, size), (0, _defineProperty3.default)(_classNames2, prefixCls + '-full', full), (0, _defineProperty3.default)(_classNames2, prefixCls + '-' + type, type !== ''), (0, _defineProperty3.default)(_classNames2, prefixCls + '-inline', inline), (0, _defineProperty3.default)(_classNames2, prefixCls + '-disabled', disabled), (0, _defineProperty3.default)(_classNames2, prefixCls + '-ghost', ghost), (0, _defineProperty3.default)(_classNames2, prefixCls + '-noborder', noBorder), (0, _defineProperty3.default)(_classNames2, prefixCls + '-noradius', noRadius), _classNames2));
            return _react2.default.createElement(
                _touchFeedback2.default,
                { activeStyle: activeStyle ? activeStyle : {}, activeClassName: this.setActiveClassName(activeClassName, type, ghost), disabled: disabled },
                _react2.default.createElement(
                    'div',
                    { className: btnClassNames, style: style, onClick: onClick },
                    children
                )
            );
        }
    }]);
    return Button;
}(_react.PureComponent);

exports.default = Button;

Button.defaultProps = {
    prefixCls: _config2.default.cls + '-button',
    size: false,
    inline: false,
    full: false,
    disabled: false,
    noBorder: false,
    noRadius: false,
    ghost: false,
    type: 'default',
    onClick: function onClick() {},

    className: '',
    style: {},
    activeStyle: {},
    activeClassName: ''
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(127);

var _classNames2 = _interopRequireDefault(_classNames);

var _typeof = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TouchFeedback = function (_PureComponent) {
    (0, _inherits3.default)(TouchFeedback, _PureComponent);

    function TouchFeedback() {
        (0, _classCallCheck3.default)(this, TouchFeedback);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TouchFeedback.__proto__ || (0, _getPrototypeOf2.default)(TouchFeedback)).apply(this, arguments));

        _this.state = {
            active: false
        };
        _this.onTouchStart = function (e) {
            _this.triggerEvent('TouchStart', true, e);
        };
        _this.onTouchMove = function (e) {
            _this.triggerEvent('TouchMove', false, e);
        };
        _this.onTouchEnd = function (e) {
            _this.triggerEvent('TouchEnd', false, e);
        };
        _this.onTouchCancel = function (e) {
            _this.triggerEvent('TouchCancel', false, e);
        };
        _this.onMouseDown = function (e) {
            // 当在pc上传入TouchStart事件会触发事件函数
            if (_this.props.onTouchStart) {
                _this.triggerEvent('TouchStart', true, e);
            }
            _this.triggerEvent('MouseDown', true, e);
        };
        _this.onMouseUp = function (e) {
            // 当在pc上传入TouchEnd事件会触发事件函数
            if (_this.props.onTouchEnd) {
                _this.triggerEvent('TouchEnd', true, e);
            }
            _this.triggerEvent('MouseUp', false, e);
        };
        // m端按下后手指划出元素触发取消touch
        _this.onMouseLeave = function (e) {
            _this.triggerEvent('MouseLeave', false, e);
        };
        return _this;
    }

    (0, _createClass3.default)(TouchFeedback, [{
        key: 'triggerEvent',
        value: function triggerEvent(type, isActive, e) {
            // 获取当前触发事件
            // 当有传入对应事件的函数则会触发
            var eventType = 'on' + type;
            if (this.props[eventType]) {
                (0, _typeof.isFunction)(this.props[eventType]) && this.props[eventType](e);
            }
            if (isActive !== this.state.active) {
                this.setState({
                    active: isActive
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                activeStyle = _props.activeStyle,
                activeClassName = _props.activeClassName,
                disabled = _props.disabled;

            var events = {
                onTouchStart: this.onTouchStart,
                onTouchMove: this.onTouchMove,
                onTouchEnd: this.onTouchEnd,
                onTouchCancel: this.onTouchCancel,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave
            };
            var child = _react2.default.Children.only(children);
            if (!disabled && this.state.active) {
                var _child$props = child.props,
                    style = _child$props.style,
                    className = _child$props.className;
                // 合拼style

                if (activeStyle) {
                    style = (0, _assign2.default)({}, style, activeStyle);
                }
                // 生成新classname
                className = (0, _classNames2.default)(className, activeClassName);
                // 返回一个带有touch的样式和classname的元素
                return _react2.default.cloneElement(child, (0, _assign2.default)({ className: className,
                    style: style }, events));
            }
            // 返回绑定事件的元素
            return _react2.default.cloneElement(child, events);
        }
    }]);
    return TouchFeedback;
}(_react.PureComponent);

exports.default = TouchFeedback;

TouchFeedback.defaultProps = {
    activeStyle: null,
    activeClassName: '',
    disabled: false
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zhCN = __webpack_require__(138);

var _zhCN2 = _interopRequireDefault(_zhCN);

var _zhHK = __webpack_require__(139);

var _zhHK2 = _interopRequireDefault(_zhHK);

var _zhEN = __webpack_require__(140);

var _zhEN2 = _interopRequireDefault(_zhEN);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    cn: _zhCN2.default,
    hk: _zhHK2.default,
    en: _zhEN2.default
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// http://hammerjs.github.io/api/#directions
var DIRECTION_NONE = exports.DIRECTION_NONE = 1; // 00001
var DIRECTION_LEFT = exports.DIRECTION_LEFT = 2; // 00010
var DIRECTION_RIGHT = exports.DIRECTION_RIGHT = 4; // 00100
var DIRECTION_UP = exports.DIRECTION_UP = 8; // 01000
var DIRECTION_DOWN = exports.DIRECTION_DOWN = 16; // 10000
var DIRECTION_HORIZONTAL = exports.DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT; // 00110 6
var DIRECTION_VERTICAL = exports.DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN; // 11000 24
var DIRECTION_ALL = exports.DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL; // 11110  30
// http://hammerjs.github.io/recognizer-press/
var PRESS = exports.PRESS = {
    time: 251 // Minimal press time in ms.
};
// http://hammerjs.github.io/recognizer-swipe/
var SWIPE = exports.SWIPE = {
    threshold: 10,
    velocity: 0.3
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(75);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _pickerWrapper = __webpack_require__(155);

var _pickerWrapper2 = _interopRequireDefault(_pickerWrapper);

var _typeof = __webpack_require__(8);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.BScrollList = {};
        _this.initBScrollCallback = _this.initBScrollCallback.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if ((0, _stringify2.default)(nextProps) != (0, _stringify2.default)(this.props)) {
                return true;
            }
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.renderAfter && (0, _typeof.isFunction)(this.props.renderAfter) && this.props.renderAfter(this.BScrollList);
        }
    }, {
        key: 'initBScrollCallback',
        value: function initBScrollCallback(key, BScrollObj) {
            this.BScrollList[key] = BScrollObj;
        }
    }, {
        key: 'renderPickerWrapper',
        value: function renderPickerWrapper() {
            var _this2 = this;

            var _props = this.props,
                _props$pickerData = _props.pickerData,
                pickerData = _props$pickerData === undefined ? [] : _props$pickerData,
                prefixCls = _props.prefixCls,
                onTouchEnd = _props.onTouchEnd,
                onTouchStart = _props.onTouchStart;

            var timestamp = new Date().getTime();
            var pickerWrapperNodes = pickerData.map(function (item, key) {
                return item ? _react2.default.createElement(_pickerWrapper2.default, { key: timestamp + '-' + key + '-cm', wrapperIndex: key, wrapperKey: timestamp + '-' + key + '-node', data: item, prefixCls: prefixCls, initBScrollCallback: _this2.initBScrollCallback, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd }) : null;
            });
            return pickerWrapperNodes;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style;

            var cls = (0, _classnames2.default)(className, '' + prefixCls);
            return _react2.default.createElement(
                'div',
                { className: cls, style: style },
                this.renderPickerWrapper()
            );
        }
    }]);
    return Picker;
}(_react2.default.Component);

exports.default = Picker;

Picker.defaultProps = {
    prefixCls: _config2.default.cls + '-picker',
    className: '',
    style: {},
    pickerData: []
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(82)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(56)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(11).document;
module.exports = document && document.documentElement;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
var global = __webpack_require__(11);
var hide = __webpack_require__(20);
var Iterators = __webpack_require__(32);
var TO_STRING_TAG = __webpack_require__(17)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(27);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(20)(IteratorPrototype, __webpack_require__(17)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(24);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(79);
var toAbsoluteIndex = __webpack_require__(86);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(88);
var step = __webpack_require__(89);
var Iterators = __webpack_require__(32);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(56)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(9).Object.getPrototypeOf;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(22);

__webpack_require__(154);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = function (_PureComponent) {
    (0, _inherits3.default)(ListItem, _PureComponent);

    function ListItem() {
        (0, _classCallCheck3.default)(this, ListItem);
        return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(ListItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                space = _props.space,
                className = _props.className,
                inClassName = _props.inClassName,
                style = _props.style,
                inStyle = _props.inStyle,
                children = _props.children,
                onClick = _props.onClick,
                label = _props.label,
                extra = _props.extra;

            var listItemClassNames = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-' + space, space !== ''));
            var listItemInClassNames = (0, _classnames2.default)(prefixCls + '-box', inClassName);
            return _react2.default.createElement(
                'div',
                { className: listItemClassNames, style: style, onClick: onClick },
                _react2.default.createElement(
                    'div',
                    { className: listItemInClassNames, style: inStyle },
                    label ? _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-label' },
                        label
                    ) : null,
                    children ? _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-content' },
                        children
                    ) : null,
                    extra ? _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-extra' },
                        extra
                    ) : null
                )
            );
        }
    }]);
    return ListItem;
}(_react.PureComponent);

exports.default = ListItem;

ListItem.defaultProps = {
    prefixCls: 'zzc-list-item',
    space: 'left',
    className: '',
    style: {},
    inStyle: {},
    onClick: function onClick() {},

    label: ''
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(158);
=======
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(29);
var $getPrototypeOf = __webpack_require__(61);
>>>>>>> upstream/master

__webpack_require__(62)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
var $Object = __webpack_require__(9).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(14).f });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(81);
module.exports = __webpack_require__(43).f('iterator');


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

<<<<<<< HEAD
var _pickerWrapper = __webpack_require__(160);
=======
/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

__webpack_require__(64);
__webpack_require__(77);
__webpack_require__(102);
__webpack_require__(103);
module.exports = __webpack_require__(9).Symbol;


<<<<<<< HEAD
__webpack_require__(162);
=======
/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

var META = __webpack_require__(28)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(16);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(30);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(54);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(65).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
<<<<<<< HEAD
/* 74 */
/***/ (function(module, exports) {
=======
/* 102 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

__webpack_require__(44)('asyncIterator');


/***/ }),
<<<<<<< HEAD
/* 75 */
/***/ (function(module, exports) {
=======
/* 103 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

__webpack_require__(44)('observable');


/***/ }),
<<<<<<< HEAD
/* 76 */
=======
/* 104 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

<<<<<<< HEAD
var $at = __webpack_require__(80)(true);
=======
/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

__webpack_require__(106);
module.exports = __webpack_require__(9).Object.setPrototypeOf;


/***/ }),
<<<<<<< HEAD
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(35);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 78 */
=======
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(13);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(107).set });


/***/ }),
/* 107 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(18);
var anObject = __webpack_require__(24);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(53)(Function.call, __webpack_require__(66).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
<<<<<<< HEAD
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var global = __webpack_require__(11);
var hide = __webpack_require__(19);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(16)('toStringTag');
=======
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };
>>>>>>> upstream/master

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
var $Object = __webpack_require__(9).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
<<<<<<< HEAD
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 81 */
=======
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var create = __webpack_require__(38);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(16)('iterator'), function () { return this; });
=======

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchFeedback = exports.Animate = exports.ImageView = exports.Loading = exports.DatePicker = exports.Picker = exports.Tabs = exports.Popup = exports.Modal = exports.Alert = exports.Card = exports.Button = exports.Dialog = exports.Icon = exports.Toast = undefined;
>>>>>>> upstream/master

var _toast = __webpack_require__(113);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toast).default;
  }
});

<<<<<<< HEAD
/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(14);
var anObject = __webpack_require__(23);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(15) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
=======
var _icon = __webpack_require__(68);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _dialog = __webpack_require__(26);
>>>>>>> upstream/master

Object.defineProperty(exports, 'Dialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dialog).default;
  }
});

<<<<<<< HEAD
/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(77);
var toAbsoluteIndex = __webpack_require__(84);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
=======
var _button = __webpack_require__(70);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _card = __webpack_require__(129);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_card).default;
  }
});

var _alert = __webpack_require__(137);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alert).default;
  }
});

var _modal = __webpack_require__(49);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _popup = __webpack_require__(143);

Object.defineProperty(exports, 'Popup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_popup).default;
  }
});

var _tabs = __webpack_require__(145);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _picker = __webpack_require__(74);

Object.defineProperty(exports, 'Picker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_picker).default;
  }
});

var _datePicker = __webpack_require__(158);

Object.defineProperty(exports, 'DatePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_datePicker).default;
  }
});

var _loading = __webpack_require__(166);

Object.defineProperty(exports, 'Loading', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loading).default;
  }
});

var _imageView = __webpack_require__(168);

Object.defineProperty(exports, 'ImageView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_imageView).default;
  }
});

var _animate = __webpack_require__(171);

Object.defineProperty(exports, 'Animate', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_animate).default;
  }
});
>>>>>>> upstream/master

var _touchFeedback = __webpack_require__(71);

<<<<<<< HEAD
/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(35);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
=======
Object.defineProperty(exports, 'TouchFeedback', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_touchFeedback).default;
  }
});

__webpack_require__(69);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
<<<<<<< HEAD
/* 85 */
=======
/* 113 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var addToUnscopables = __webpack_require__(86);
var step = __webpack_require__(87);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(21);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(52)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');
=======
>>>>>>> upstream/master

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

<<<<<<< HEAD
/***/ }),
/* 86 */
/***/ (function(module, exports) {
=======
var _classCallCheck2 = __webpack_require__(1);
>>>>>>> upstream/master

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

<<<<<<< HEAD
/***/ }),
/* 87 */
/***/ (function(module, exports) {
=======
var _createClass3 = _interopRequireDefault(_createClass2);
>>>>>>> upstream/master

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

<<<<<<< HEAD
/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(8).Object.getPrototypeOf;
=======
var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);
>>>>>>> upstream/master

var _defineProperty2 = __webpack_require__(10);

<<<<<<< HEAD
/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(30);
var $getPrototypeOf = __webpack_require__(57);
=======
var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);
>>>>>>> upstream/master

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

<<<<<<< HEAD
/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};
=======
var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames2 = _interopRequireDefault(_classnames);

<<<<<<< HEAD
/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(15), 'Object', { defineProperty: __webpack_require__(14).f });
=======
var _class = __webpack_require__(31);

var _Event = __webpack_require__(46);
>>>>>>> upstream/master

var _typeof = __webpack_require__(8);

<<<<<<< HEAD
/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
__webpack_require__(79);
module.exports = __webpack_require__(43).f('iterator');
=======
var _icon = __webpack_require__(68);

var _icon2 = _interopRequireDefault(_icon);

var _alignment = __webpack_require__(123);

var _alignment2 = _interopRequireDefault(_alignment);
>>>>>>> upstream/master

var _config = __webpack_require__(6);

<<<<<<< HEAD
/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(75);
__webpack_require__(100);
__webpack_require__(101);
module.exports = __webpack_require__(8).Symbol;
=======
var _config2 = _interopRequireDefault(_config);

__webpack_require__(47);

__webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
>>>>>>> upstream/master

var PREFIXCLS = _config2.default.cls + '-toast';
var alignment = new _alignment2.default();
var _closeTimer = null;
var _toastElem = null;
var _duration = 2;
var _onClose = function _onClose() {};
var _parentNode = null;
function closeToast() {
    (0, _class.addClass)(_toastElem, _config2.default.cls + '-fade-leave');
    (0, _class.addClass)(_toastElem, _config2.default.cls + '-fade-leave-active');
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
    if ((0, _class.hasClass)(this, _config2.default.cls + '-fade-enter')) {
        (0, _class.removeClass)(this, _config2.default.cls + '-fade-enter-active');
        (0, _class.removeClass)(this, _config2.default.cls + '-fade-enter');
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
    getToast(item.type, item.content, item.duration, item.onClose, item.parnetNode, item.mask);
}
function createParentNode(specifiedpParnet) {
    var parentNode = document.createElement('div');
    if ((0, _typeof.isDOM)(specifiedpParnet)) {
        specifiedpParnet.appendChild(parentNode);
    } else {
        document.body.appendChild(parentNode);
    }
    return parentNode;
}
function getToast(type, content) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    var onClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var parnetNode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var mask = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

<<<<<<< HEAD
/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(29)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(14).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
=======
    // only one toast to page
    if (_toastElem != null) {
        alignment.save({
            type: type,
            content: content,
            duration: duration,
            parnetNode: parnetNode,
            onClose: onClose,
            mask: mask
        });
        toggleShow();
    } else {
        var _classNames;

        _duration = duration;
        _parentNode = createParentNode(parnetNode);
        _onClose = onClose;
        var zzcToastCls = (0, _classnames2.default)(PREFIXCLS, (_classNames = {}, (0, _defineProperty3.default)(_classNames, PREFIXCLS + '-nomask', !mask), (0, _defineProperty3.default)(_classNames, PREFIXCLS + '-nofixed', (0, _typeof.isDOM)(parnetNode)), _classNames), (0, _defineProperty3.default)({}, PREFIXCLS + '-icon', type === 'loading' || type === 'success' || type === 'error' || type === 'waring'));
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
        (0, _class.addClass)(_toastElem, _config2.default.cls + '-fade-enter');
        (0, _class.addClass)(_toastElem, _config2.default.cls + '-fade-enter-active');
    } else {
        requestAnimationFrame(function () {
            addAnimationEvent();
        });
    }
}
>>>>>>> upstream/master

var Toast = function (_Component) {
    (0, _inherits3.default)(Toast, _Component);

<<<<<<< HEAD
/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};
=======
    function Toast() {
        (0, _classCallCheck3.default)(this, Toast);
        return (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).apply(this, arguments));
    }

    (0, _createClass3.default)(Toast, null, [{
        key: 'info',
        value: function info() {
            getToast('info', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
        }
    }, {
        key: 'success',
        value: function success() {
            getToast('success', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
        }
    }, {
        key: 'error',
        value: function error() {
            getToast('error', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
        }
    }, {
        key: 'waring',
        value: function waring() {
            getToast('waring', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
        }
    }, {
        key: 'loading',
        value: function loading() {
            getToast('loading', arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3], arguments.length <= 4 ? undefined : arguments[4]);
        }
    }, {
        key: 'hideToast',
        value: function hideToast() {
            closeToast();
        }
    }]);
    return Toast;
}(_react.Component);
>>>>>>> upstream/master

exports.default = Toast;

/***/ }),
<<<<<<< HEAD
/* 98 */
=======
/* 114 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(9).Object.keys;


/***/ }),
<<<<<<< HEAD
/* 99 */
=======
/* 115 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(25);

__webpack_require__(62)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
<<<<<<< HEAD
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('observable');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(8).Object.setPrototypeOf;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(13);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(105).set });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(18);
var anObject = __webpack_require__(23);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(49)(Function.call, __webpack_require__(62).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
var $Object = __webpack_require__(8).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};
=======
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
module.exports = __webpack_require__(9).Object.assign;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(118) });


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(30);
var toObject = __webpack_require__(29);
var IObject = __webpack_require__(60);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
module.exports = __webpack_require__(9).Object.getOwnPropertySymbols;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
>>>>>>> upstream/master

var _keys = __webpack_require__(67);

<<<<<<< HEAD
/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });
=======
var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
>>>>>>> upstream/master

/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
var svgSprite = function svgSprite(contents) {
    return '\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n      id="__ZZC_MOBILE_SVG_SPRITE_NODE__"\n      style="position:absolute;width:0;height:0"\n    >\n      <defs>\n        ' + contents + '\n      </defs>\n    </svg>\n';
};
// both minified by https://github.com/svg/svgo
var icons = {
    'zds-icon-loading': '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    'zds-icon-waring': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M23.5 12.25h5v18h-5zM23.5 34.75h5v5h-5z"/></svg>',
    'zds-icon-error': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 50a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/><path d="M33.07 16.1L26 23.17l-7.07-7.07-2.83 2.83L23.17 26l-7.07 7.07 2.83 2.83L26 28.83l7.07 7.07 2.83-2.83L28.83 26l7.07-7.07-2.83-2.83z"/></svg>',
    'zds-icon-success': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M19.99 32.67l-7.07-7.07-2.83 2.83 9.9 9.89L41.91 16.4l-2.83-2.82-19.09 19.09z"/></svg>'
};
var renderSvgSprite = function renderSvgSprite() {
    var symbols = (0, _keys2.default)(icons).map(function (iconName) {
        var svgContent = icons[iconName].split('svg')[1];
        return '<symbol id=' + iconName + svgContent + 'symbol>';
    }).join('');
    return svgSprite(symbols);
};
var loadSprite = function loadSprite() {
    if (!document) {
        return;
    }
    var existing = document.getElementById('__ZZC_MOBILE_SVG_SPRITE_NODE__');
    var mountNode = document.body;
    if (!existing) {
        mountNode.insertAdjacentHTML('afterbegin', renderSvgSprite());
    }
};
exports.default = loadSprite;

/***/ }),
<<<<<<< HEAD
/* 109 */
=======
/* 122 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 110 */
=======
/* 123 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
<<<<<<< HEAD
  value: true
});
exports.DatePicker = exports.Picker = exports.ListItem = exports.List = exports.InputItem = exports.Tabs = exports.Popup = exports.Modal = exports.Alert = exports.Card = exports.Button = exports.Dialog = exports.Icon = exports.Toast = undefined;

var _toast = __webpack_require__(111);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toast).default;
  }
});

var _icon = __webpack_require__(65);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _dialog = __webpack_require__(32);

Object.defineProperty(exports, 'Dialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dialog).default;
  }
});

var _button = __webpack_require__(67);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _card = __webpack_require__(128);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_card).default;
  }
});

var _alert = __webpack_require__(136);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alert).default;
  }
=======
    value: true
>>>>>>> upstream/master
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

<<<<<<< HEAD
var _popup = __webpack_require__(142);
=======
var _createClass2 = __webpack_require__(2);
>>>>>>> upstream/master

var _createClass3 = _interopRequireDefault(_createClass2);

<<<<<<< HEAD
var _tabs = __webpack_require__(144);
=======
var _typeof = __webpack_require__(8);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var _inputItem = __webpack_require__(153);

Object.defineProperty(exports, 'InputItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inputItem).default;
  }
});

var _list = __webpack_require__(156);

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_list).default;
  }
});

var _listItem = __webpack_require__(72);

Object.defineProperty(exports, 'ListItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listItem).default;
  }
});

var _picker = __webpack_require__(73);
=======
var Alignment = function () {
    function Alignment() {
        (0, _classCallCheck3.default)(this, Alignment);
>>>>>>> upstream/master

        this.list = [];
    }

<<<<<<< HEAD
var _datePicker = __webpack_require__(163);
=======
    (0, _createClass3.default)(Alignment, [{
        key: 'save',
        value: function save(data) {
            this.list.push(data);
        }
    }, {
        key: 'check',
        value: function check() {
            return this.list;
        }
    }, {
        key: 'get',
        value: function get(index) {
            if (index === 'first') {
                return this.list.shift();
            } else if (index === 'last') {
                return this.list.pop();
            } else if (!(0, _typeof.isUndefined)(this.list[index])) {
                var result = this.list[index];
                this.list.splice(index, 1);
                return result;
            }
            return undefined;
        }
    }]);
    return Alignment;
}();
>>>>>>> upstream/master

exports.default = Alignment;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 111 */
=======
/* 125 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _class = __webpack_require__(46);

var _Event = __webpack_require__(63);

var _icon = __webpack_require__(65);

var _icon2 = _interopRequireDefault(_icon);

var _alignment = __webpack_require__(121);

var _alignment2 = _interopRequireDefault(_alignment);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(22);

__webpack_require__(122);
=======
var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _typeof = __webpack_require__(8);

var _Event = __webpack_require__(46);

var _class = __webpack_require__(31);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = function (_React$PureComponent) {
    (0, _inherits3.default)(Animate, _React$PureComponent);

    function Animate() {
        (0, _classCallCheck3.default)(this, Animate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Animate.__proto__ || (0, _getPrototypeOf2.default)(Animate)).apply(this, arguments));

        _this.animateStatus = null;
        return _this;
    }

    (0, _createClass3.default)(Animate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addAnimationEvent();
            this.runHookEvent(true);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // 防止重复执行动画，必须当前状态和传入参数不一样才执行动画钩子
            if (this.props.visible && this.animateStatus !== 'enter' || !this.props.visible && this.animateStatus !== 'leave') {
                this.runHookEvent(false);
            }
        }
        // 执行触发钩子事件

    }, {
        key: 'runHookEvent',
        value: function runHookEvent(isFirst) {
            if (isFirst && this.props.visible || !isFirst && this.props.visible && this.animateStatus == 'leave') {
                this.enterEvent();
            } else if (!isFirst && !this.props.visible && this.animateStatus == 'enter') {
                this.leaveEvent();
            } else if (!isFirst && this.props.visible) {
                this.enterEvent();
            }
        }
        // 绑定动画事件

    }, {
        key: 'addAnimationEvent',
        value: function addAnimationEvent() {
            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                _Event.animationEvents.addEndEventListener(node, this.animationEvent, this);
            }
        }
        // 进入动画钩子

    }, {
        key: 'enterEvent',
        value: function enterEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var enter = animationName.enter,
                        enterActive = animationName.enterActive;

                    (0, _class.addClass)(node, enter);
                    (0, _class.addClass)(node, enterActive);
                } else {
                    (0, _class.addClass)(node, animationName);
                }
                this.animateStatus = 'enter';
            }
        }
        // 离开动画钩子

    }, {
        key: 'leaveEvent',
        value: function leaveEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var leave = animationName.leave,
                        leaveActive = animationName.leaveActive;

                    (0, _class.addClass)(node, leave);
                    (0, _class.addClass)(node, leaveActive);
                } else {
                    (0, _class.removeClass)(node, animationName);
                }
                this.animateStatus = 'leave';
            }
        }
        // 动画完成触发事件

    }, {
        key: 'animationEvent',
        value: function animationEvent(event) {
            event.stopPropagation();
            var animationName = this.props.animationName;
            var enter = animationName.enter,
                enterActive = animationName.enterActive,
                leave = animationName.leave,
                leaveActive = animationName.leaveActive;

            try {
                var node = _reactDom2.default.findDOMNode(this);
                if ((0, _typeof.isDOM)(node)) {
                    var animationType = 'enter';
                    // 当传入object会清楚enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
                    if ((0, _typeof.isObject)(animationName)) {
                        // 当切换enter和leave速度过来会导致bug，需要判断是否会存在enter和leave的class
                        if ((0, _class.hasClass)(node, enter)) {
                            (0, _class.removeClass)(node, enter);
                            (0, _class.removeClass)(node, enterActive);
                            if ((0, _class.hasClass)(node, leave)) {
                                animationType = 'leave';
                                (0, _class.removeClass)(node, leave);
                                (0, _class.removeClass)(node, leaveActive);
                            }
                        } else {
                            animationType = 'leave';
                            (0, _class.removeClass)(node, leave);
                            (0, _class.removeClass)(node, leaveActive);
                        }
                    } else if ((0, _class.hasClass)(node, animationName) && !!this.props.visible) {
                        animationType = 'leave';
                        (0, _class.removeClass)(node, leave);
                        (0, _class.removeClass)(node, leaveActive);
                    }
                    this.props.onEnd && this.props.onEnd(animationType);
                }
            } catch (err) {}
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return children;
        }
    }]);
    return Animate;
}(_react2.default.PureComponent);

exports.default = Animate;

<<<<<<< HEAD
/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(8).Object.keys;
=======
Animate.defaultProps = {
    animationName: null,
    visible: false,
    onEnd: function onEnd() {}
};

/***/ }),
/* 126 */
/***/ (function(module, exports) {
>>>>>>> upstream/master

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(30);
var $keys = __webpack_require__(25);
=======
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */
>>>>>>> upstream/master

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

<<<<<<< HEAD
/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(8).Object.assign;
=======
	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;
>>>>>>> upstream/master

			var argType = typeof arg;

<<<<<<< HEAD
/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {
=======
			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}
>>>>>>> upstream/master

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());

<<<<<<< HEAD
$export($export.S + $export.F, 'Object', { assign: __webpack_require__(116) });
=======
>>>>>>> upstream/master

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 116 */
=======
/* 129 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(31);
var toObject = __webpack_require__(30);
var IObject = __webpack_require__(56);
var $assign = Object.assign;
=======
>>>>>>> upstream/master

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

<<<<<<< HEAD
/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {
=======
var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
>>>>>>> upstream/master

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

<<<<<<< HEAD
/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {
=======
var _createClass2 = __webpack_require__(2);
>>>>>>> upstream/master

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
/***/ }),
/* 120 */
/***/ (function(module, exports) {
=======
var _classnames = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames2 = _interopRequireDefault(_classnames);

<<<<<<< HEAD
/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {
=======
var _header = __webpack_require__(130);
>>>>>>> upstream/master

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(132);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(134);

var _footer2 = _interopRequireDefault(_footer);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(47);

__webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function (_PureComponent) {
    (0, _inherits3.default)(Card, _PureComponent);

    function Card() {
        (0, _classCallCheck3.default)(this, Card);
        return (0, _possibleConstructorReturn3.default)(this, (Card.__proto__ || (0, _getPrototypeOf2.default)(Card)).apply(this, arguments));
    }

    (0, _createClass3.default)(Card, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                prefixCls = _props.prefixCls,
                full = _props.full,
                children = _props.children,
                className = _props.className;

            var cardClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-full', full));
            return _react2.default.createElement(
                'div',
                { style: style, className: cardClassName },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-box' },
                    children
                )
            );
        }
    }]);
    return Card;
}(_react.PureComponent);

<<<<<<< HEAD
/***/ }),
/* 122 */
/***/ (function(module, exports) {
=======
exports.default = Card;
>>>>>>> upstream/master

Card.defaultProps = {
    prefixCls: _config2.default.cls + '-card',
    className: '',
    full: false,
    style: {}
};
Card.Header = _header2.default;
Card.Body = _body2.default;
Card.Footer = _footer2.default;

/***/ }),
<<<<<<< HEAD
/* 123 */
=======
/* 130 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);
=======
var _classnames = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames2 = _interopRequireDefault(_classnames);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
var _class = __webpack_require__(46);
=======
__webpack_require__(131);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
    (0, _inherits3.default)(Header, _PureComponent);

    function Header() {
        (0, _classCallCheck3.default)(this, Header);
        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
    }

    (0, _createClass3.default)(Header, [{
        key: 'setContent',
        value: function setContent() {
            var _props = this.props,
                title = _props.title,
                extra = _props.extra,
                prefixCls = _props.prefixCls,
                children = _props.children,
                extraOnClick = _props.extraOnClick,
                titleOnClick = _props.titleOnClick;

            if (children) {
                return children;
            }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                title !== '' && _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            titleOnClick && titleOnClick();
                        }, className: (0, _classnames2.default)(prefixCls + '-title') },
                    title
                ),
                extra && _react2.default.createElement(
                    'div',
                    { onClick: function onClick() {
                            extraOnClick && extraOnClick();
                        }, className: (0, _classnames2.default)(prefixCls + '-extra') },
                    extra
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                style = _props2.style,
                className = _props2.className,
                prefixCls = _props2.prefixCls,
                noBorder = _props2.noBorder;

            var headClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-noborder', noBorder));
            return _react2.default.createElement(
                'div',
                { style: style, className: headClassName },
                this.setContent()
            );
        }
    }]);
    return Header;
}(_react.PureComponent);

exports.default = Header;

Header.defaultProps = {
    prefixCls: _config2.default.cls + '-card-header',
    className: '',
    title: '',
    extra: false,
    children: false,
    noBorder: false,
    extraOnClick: null,
    titleOnClick: null,
    style: {}
};

/***/ }),
<<<<<<< HEAD
/* 124 */
=======
/* 131 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 125 */
=======
/* 132 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _classNames = __webpack_require__(126);
=======
var _classnames = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames2 = _interopRequireDefault(_classnames);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function (_PureComponent) {
    (0, _inherits3.default)(Body, _PureComponent);

    function Body() {
        (0, _classCallCheck3.default)(this, Body);
        return (0, _possibleConstructorReturn3.default)(this, (Body.__proto__ || (0, _getPrototypeOf2.default)(Body)).apply(this, arguments));
    }

    (0, _createClass3.default)(Body, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                borderDirection = _props.borderDirection,
                style = _props.style,
                className = _props.className,
                prefixCls = _props.prefixCls,
                children = _props.children,
                full = _props.full,
                noBorder = _props.noBorder;

            var bodyClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-full', full), (0, _defineProperty3.default)({}, prefixCls + '-noborder', noBorder), (0, _defineProperty3.default)({}, prefixCls + '-border-' + borderDirection, borderDirection === 'left' || borderDirection === 'right'));
            return _react2.default.createElement(
                'section',
                { style: style, className: bodyClassName },
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(prefixCls + '-box') },
                    children && children
                )
            );
        }
    }]);
    return Body;
}(_react.PureComponent);

exports.default = Body;

Body.defaultProps = {
    prefixCls: _config2.default.cls + '-card-body',
    className: '',
    children: null,
    full: false,
    noBorder: false,
    style: {},
    borderDirection: 'center'
};

/***/ }),
<<<<<<< HEAD
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 127 */
=======
/* 133 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 128 */
=======
/* 134 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

<<<<<<< HEAD
var _header = __webpack_require__(129);

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(131);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(133);

var _footer2 = _interopRequireDefault(_footer);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(22);

=======
var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

>>>>>>> upstream/master
__webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_PureComponent) {
    (0, _inherits3.default)(Footer, _PureComponent);

    function Footer() {
        (0, _classCallCheck3.default)(this, Footer);
        return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className,
                prefixCls = _props.prefixCls,
                noBorder = _props.noBorder,
                children = _props.children;

            var footerClassName = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-noborder', noBorder));
            return _react2.default.createElement(
                'div',
                { style: style, className: footerClassName },
                children && children
            );
        }
    }]);
    return Footer;
}(_react.PureComponent);

exports.default = Footer;

Footer.defaultProps = {
    prefixCls: _config2.default.cls + '-card-footer',
    className: '',
    children: null,
    noBorder: false,
    style: {}
};

/***/ }),
<<<<<<< HEAD
/* 129 */
=======
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.default = function (opt) {
    var alert = new Alert(opt);
    return alert.close.bind(alert);
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = __webpack_require__(49);

var _modal2 = _interopRequireDefault(_modal);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
__webpack_require__(130);
=======
__webpack_require__(142);
>>>>>>> upstream/master

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
            buttons: [],
            maskClose: false,
            closable: false,
            closeCallback: function closeCallback() {}
        };
        this.opt = (0, _assign2.default)(defaultPorps, opt);
        var _opt = this.opt,
            title = _opt.title,
            content = _opt.content,
            prefixCls = _opt.prefixCls,
            className = _opt.className;

        this.parentNode = this.createParentNode(className);
        this._alert = _reactDom2.default.render(_react2.default.createElement(
            _modal2.default,
            (0, _extends3.default)({ transitionName: _config2.default.cls + '-zoom', visible: true }, this.opt, { title: this.createTitle(title, prefixCls, content), closeCallback: function closeCallback() {
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
        value: function createTitle(title, prefixCls, content) {
            if (title !== '') {
                return _react2.default.createElement(
                    'h1',
                    { className: (0, _classnames2.default)(prefixCls + '-title', (0, _defineProperty3.default)({}, prefixCls + '-only-title', !content)) },
                    title
                );
            }
            return null;
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

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minutes: '分',
    am: '上午',
    pm: '下午',
    confirm: '确认',
    cancel: '取消',
    close: '关闭',
    open: '打开',
    datePickerTitle: '请选择时间'
};

/***/ }),
<<<<<<< HEAD
/* 130 */
=======
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    year: '年',
    month: '月',
    day: '日',
    hour: '時',
    minutes: '分',
    am: '上午',
    pm: '下午',
    confirm: '確認',
    cancel: '取消',
    close: '關閉',
    open: '打開',
    datePickerTitle: '請選擇時間'
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    year: '',
    month: '',
    day: '',
    hour: '',
    minutes: '',
    am: 'AM',
    pm: 'PM',
    confirm: 'confirm',
    cancel: 'cancel',
    close: 'close',
    open: 'open',
    datePickerTitle: 'Please select'
};

/***/ }),
/* 141 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 131 */
=======
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dialog = __webpack_require__(26);

var _dialog2 = _interopRequireDefault(_dialog);

var _animateConfig = __webpack_require__(48);

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
__webpack_require__(132);
=======
__webpack_require__(144);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_React$PureComponent) {
    (0, _inherits3.default)(Popup, _React$PureComponent);

    function Popup() {
        (0, _classCallCheck3.default)(this, Popup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));

        _this.state = {
            showPopup: _this.props.visible,
            animationTypeList: _animateConfig2.default
        };
        _this.maskShowed = false;
        _this.boxShowed = false;
        _this.rendered = false;
        return _this;
    }

    (0, _createClass3.default)(Popup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.setState({
                    showPopup: true
                });
            }
        }
        // 获取指定样式

    }, {
        key: 'getAnimationClass',
        value: function getAnimationClass(direction) {
            var animation = this.state.animationTypeList[_config2.default.cls + '-slide-' + direction];
            if (animation) {
                return animation;
            }
            return direction ? direction : null;
        }
    }, {
        key: 'boxAnimated',
        value: function boxAnimated(type) {
            this.boxShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'maskAnimated',
        value: function maskAnimated(type) {
            this.maskShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'renderCallback',
        value: function renderCallback() {
            !this.rendered && this.props.renderCallback && this.props.renderCallback();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                visible = _props.visible,
                children = _props.children,
                prefixCls = _props.prefixCls,
                direction = _props.direction,
                onClose = _props.onClose;

            if (this.state.showPopup) {
                return _react2.default.createElement(
                    _dialog2.default,
                    (0, _extends3.default)({ maskTransitionName: _config2.default.cls + '-fade', transitionName: this.getAnimationClass(direction), prefixCls: prefixCls, boxClassName: prefixCls + '-' + direction, visible: visible, boxAnimated: function boxAnimated(type) {
                            _this2.boxAnimated(type);
                        }, maskAnimated: function maskAnimated(type) {
                            _this2.maskAnimated(type);
                        }, closeCallback: function closeCallback() {
                            _this2.setState({ showPopup: false });
                            onClose && onClose();
                        } }, this.props),
                    children
                );
            }
            return null;
        }
    }]);
    return Popup;
}(_react2.default.PureComponent);

exports.default = Popup;

Popup.defaultProps = {
    prefixCls: _config2.default.cls + '-popup',
    visible: false,
    style: {},
    maskStyle: {},
    maskClose: false,
    onClose: function onClose() {},

    transparent: false,
    direction: 'bottom'
};

/***/ }),
<<<<<<< HEAD
/* 132 */
=======
/* 144 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 133 */
=======
/* 145 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _tabBar = __webpack_require__(146);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _tabContent = __webpack_require__(151);

var _tabContent2 = _interopRequireDefault(_tabContent);

var _typeof = __webpack_require__(8);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
__webpack_require__(134);
=======
__webpack_require__(153);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$PureComponent) {
    (0, _inherits3.default)(Tabs, _React$PureComponent);

    function Tabs(props) {
        (0, _classCallCheck3.default)(this, Tabs);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

        var index = props.index ? props.index : props.defaultIndex;
        _this.state = {
            currIndex: index,
            preIndex: index
        };
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Tabs, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextPros) {
            if (nextPros.index != null && nextPros.index != this.state.currIndex) {
                this.setState({
                    currIndex: nextPros.index,
                    preIndex: this.state.currIndex
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            if ((0, _typeof.isFunction)(this.props.onChange)) {
                this.props.onChange(key);
            }
            this.goToTab(key);
        }
    }, {
        key: 'goToTab',
        value: function goToTab(key) {
            var currIndex = this.state.currIndex;
            // 当tabs是受控时，不主动更新state，通过外部改变props来改变tabs的state

            if ((0, _typeof.isNull)(this.props.index)) {
                this.setState({
                    currIndex: key,
                    preIndex: currIndex
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                style = _props.style,
                children = _props.children,
                tabBarPosition = _props.tabBarPosition,
                className = _props.className;

            var direction = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? 'horizontal' : 'vertical';
            var cls = (0, _classnames2.default)(className, prefixCls + '-box', prefixCls + '-box-' + tabBarPosition);
            return _react2.default.createElement(
                'div',
                { className: cls, style: style },
                _react2.default.createElement(_tabBar2.default, (0, _extends3.default)({}, this.props, { tabDirection: direction }, this.state, { onChange: this.onChange })),
                children && _react2.default.createElement(
                    _tabContent2.default,
                    (0, _extends3.default)({}, this.props, this.state, { onChange: this.onChange }),
                    children
                )
            );
        }
    }]);
    return Tabs;
}(_react2.default.PureComponent);

exports.default = Tabs;

Tabs.defaultProps = {
    prefixCls: _config2.default.cls + '-tabs',
    className: '',
    style: {},
    tabBarUnderlineStyle: {},
    tabs: [],
    defaultIndex: 0,
    index: null,
    onChange: function onChange() {},
    maxTabLength: 3,
    swipeDirection: 'horizontal',
    animated: true,
    swipeable: true,
    isOpenTabBarScroll: true,
    isOpenTabContentScroll: true,
    tabBarPosition: 'top'
};

/***/ }),
<<<<<<< HEAD
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 136 */
=======
/* 146 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

<<<<<<< HEAD
var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(12);
=======
var _getPrototypeOf = __webpack_require__(3);
>>>>>>> upstream/master

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);
=======
var _classnames2 = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames3 = _interopRequireDefault(_classnames2);

var _Gesture = __webpack_require__(50);

var _Gesture2 = _interopRequireDefault(_Gesture);

var _tabList = __webpack_require__(148);

var _tabList2 = _interopRequireDefault(_tabList);

var _util = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
__webpack_require__(141);
=======
var TabBar = function (_React$PureComponent) {
    (0, _inherits3.default)(TabBar, _React$PureComponent);
>>>>>>> upstream/master

    function TabBar(props) {
        (0, _classCallCheck3.default)(this, TabBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).call(this, props));

        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var finalOffset = 0;
            var animated = _this.props.animated;

            var isVertical = _this.props.tabDirection == 'vertical';
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart() {
                    if (animated) {
                        _this.layout.className = _this.props.prefixCls + '-bar-wrap';
                    }
                },
                onPanMove: function onPanMove(status) {
                    // 将上次记录到的offset加上这次move的距离得出本次offset的值
                    var offset = isVertical ? getOffset() + status.moveStatus.y : getOffset() + status.moveStatus.x;
                    // 最大滚动距离是负数
                    var maxScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
                    // 当move向左的时候永远为负数，向右的时候永远是正数
                    // 计算当前offset不能小于0和大于最大滚动距离。
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, maxScrollOffset);
                    (0, _util.setLayoutScroll)(_this.layout, offset, 'px', isVertical);
                    // 记录每次滑动后计算的offset
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd() {
                    // 记录这次滑动的最后offset
                    lastOffset = finalOffset;
                    var originCls = _this.layout.className;
                    if (animated) {
                        _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-bar-wrap-am';
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        _this.state = {
            canScroll: props.tabs && props.tabs.length > props.maxTabLength,
            wrapStyle: _this.getWarpContentStyle(props.currIndex)
        };
        return _this;
    }

    (0, _createClass3.default)(TabBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.currIndex != nextProps.currIndex) {
                this.setState({
                    wrapStyle: this.getWarpContentStyle(nextProps.currIndex)
                });
            }
        }
    }, {
        key: 'getWarpContentStyle',
        value: function getWarpContentStyle(index) {
            var _props = this.props,
                maxTabLength = _props.maxTabLength,
                tabs = _props.tabs;

            var offset = '0';
            var calcMaxTabLength = maxTabLength - 1;
            if (index >= calcMaxTabLength - 1 && index < tabs.length - 1) {
                offset = '-' + (0, _util.getTabItemSize)(maxTabLength) * (index - (calcMaxTabLength - 1)) + '%';
            }
            if (index == tabs.length - 1) {
                offset = '-' + (0, _util.getTabItemSize)(maxTabLength) * (index - 1 - (calcMaxTabLength - 1)) + '%';
            }
            this.onPan.setCurrentOffset(offset);
            return offset;
        }
    }, {
        key: 'setWrapStyle',
        value: function setWrapStyle(wrapStyle) {
            return (0, _util.getTranslate3dStyle)(wrapStyle, this.props.tabDirection);
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            this.setState({
                wrapStyle: this.getWarpContentStyle(key)
            });
            this.props.onChange(key);
        }
<<<<<<< HEAD
    }]);
    return Alert;
}();

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minutes: '分',
    am: '上午',
    pm: '下午',
    confirm: '确认',
    cancel: '取消',
    close: '关闭',
    open: '打开',
    datePickerTitle: '请选择时间'
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {
=======
    }, {
        key: 'renderTabbar',
        value: function renderTabbar() {
            var _this2 = this;

            var _props2 = this.props,
                currIndex = _props2.currIndex,
                prefixCls = _props2.prefixCls,
                tabs = _props2.tabs,
                maxTabLength = _props2.maxTabLength,
                animated = _props2.animated,
                tabBarPosition = _props2.tabBarPosition,
                tabBarUnderlineStyle = _props2.tabBarUnderlineStyle;
            var wrapStyle = this.state.wrapStyle;
>>>>>>> upstream/master

            var cls = (0, _classnames3.default)(prefixCls + '-bar-wrap', (0, _defineProperty3.default)({}, prefixCls + '-bar-wrap-am', animated));
            return _react2.default.createElement(
                'div',
                { className: cls, ref: function ref(refs) {
                        _this2.setLayout(refs);
                    }, style: this.setWrapStyle(wrapStyle) },
                _react2.default.createElement(_tabList2.default, { tabBarUnderlineStyle: tabBarUnderlineStyle, tabBarPosition: tabBarPosition, animated: animated, maxTabLength: maxTabLength, prefixCls: prefixCls, tabs: tabs, currIndex: currIndex, onChange: function onChange(key) {
                        _this2.onChange(key);
                    } })
            );
        }
    }, {
        key: 'wrapTabsList',
        value: function wrapTabsList() {
            var isOpenTabBarScroll = this.props.isOpenTabBarScroll;
            var canScroll = this.state.canScroll;

            var onPan = this.onPan;
            // 当tabs数量大于最大显示数量的时候需要加入手势提供滑动
            if (canScroll && isOpenTabBarScroll) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    onPan,
                    this.renderTabbar()
                );
            }
            return this.renderTabbar();
        }
    }, {
        key: 'setLayout',
        value: function setLayout(div) {
            this.layout = div;
        }
    }, {
        key: 'render',
        value: function render() {
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-bar-box' },
                this.wrapTabsList()
            );
        }
    }]);
    return TabBar;
}(_react2.default.PureComponent);

exports.default = TabBar;

/***/ }),
<<<<<<< HEAD
/* 139 */
=======
/* 147 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calcMutliFingerStatus = calcMutliFingerStatus;
exports.calcMoveStatus = calcMoveStatus;
exports.getMovingDirection = getMovingDirection;
exports.calcRotation = calcRotation;
exports.getEventName = getEventName;
exports.getDirectionEventName = getDirectionEventName;
exports.shouldTriggerDirection = shouldTriggerDirection;
exports.shouldTriggerSwipe = shouldTriggerSwipe;

<<<<<<< HEAD
/***/ }),
/* 140 */
/***/ (function(module, exports) {
=======
var _config = __webpack_require__(73);
>>>>>>> upstream/master

// 计算缩放比率
function _calcTriangleDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}
// 计算角度
function _calcAngle(x, y) {
    var radian = Math.atan2(y, x);
    return 180 / (Math.PI / radian);
}
// 计算手指状态
function calcMutliFingerStatus(touches) {
    // 两只手指
    if (touches.length >= 2) {
        var _touches$ = touches[0],
            x1 = _touches$.x,
            y1 = _touches$.y;
        var _touches$2 = touches[1],
            x2 = _touches$2.x,
            y2 = _touches$2.y;

<<<<<<< HEAD
/***/ }),
/* 141 */
/***/ (function(module, exports) {
=======
        var deltaX = x2 - x1;
        var deltaY = y2 - y1;
        return {
            x: deltaX,
            y: deltaY,
            z: _calcTriangleDistance(deltaX, deltaY),
            angle: _calcAngle(deltaX, deltaY)
        };
    }
    return null;
}
// 计算move时的状态
function calcMoveStatus(startTouches, touches, time) {
    var _startTouches$ = startTouches[0],
        x1 = _startTouches$.x,
        y1 = _startTouches$.y;
    var _touches$3 = touches[0],
        x2 = _touches$3.x,
        y2 = _touches$3.y;
>>>>>>> upstream/master

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var deltaZ = _calcTriangleDistance(deltaX, deltaY);
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time: time,
        velocity: deltaZ / time,
        angle: _calcAngle(deltaX, deltaY)
    };
}
// 获取当前方向
function getMovingDirection(preTouches, touches) {
    // 根据当前的xy值和上一个xy值进行计算方向
    var x1 = preTouches.x,
        y1 = preTouches.y;
    var x2 = touches.x,
        y2 = touches.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    // 没有移动
    if (deltaX === 0 && deltaY === 0) {
        return _config.DIRECTION_NONE;
    }
    // 根据变化的数值少决定是横向移动还是竖向移动
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        return deltaX < 0 ? _config.DIRECTION_LEFT : _config.DIRECTION_RIGHT;
    }
    return deltaY < 0 ? _config.DIRECTION_UP : _config.DIRECTION_DOWN;
}
// 计算旋转角度
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
    var startAngle = startMutliFingerStatus.angle;
    var angle = mutliFingerStatus.angle;

    return angle - startAngle;
}
// 拼接事件名称 将move转为Move
function getEventName(prefix, status) {
    return prefix + status[0].toUpperCase() + status.slice(1);
}
// 根据方向标识返回对应的方向事件名称
function getDirectionEventName(direction) {
    var name = void 0;
    switch (direction) {
        case _config.DIRECTION_NONE:
            break;
        case _config.DIRECTION_LEFT:
            name = 'left';
            break;
        case _config.DIRECTION_RIGHT:
            name = 'right';
            break;
        case _config.DIRECTION_UP:
            name = 'up';
            break;
        case _config.DIRECTION_DOWN:
            name = 'down';
            break;
        default:
    }
    return name;
}
// 查看当前方向配置是否满足当前触发的方向
function shouldTriggerDirection(direction, directionSetting) {
    if (directionSetting & direction) {
        return true;
    }
    return false;
}
// 计算是否触发swiper
function shouldTriggerSwipe(delta, velocity) {
    return Math.abs(delta) >= _config.SWIPE.threshold && Math.abs(velocity) > _config.SWIPE.velocity;
}

/***/ }),
<<<<<<< HEAD
/* 142 */
=======
/* 148 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

<<<<<<< HEAD
var _extends2 = __webpack_require__(26);
=======
var _defineProperty2 = __webpack_require__(10);
>>>>>>> upstream/master

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _dialog = __webpack_require__(32);
=======
var _classnames3 = __webpack_require__(7);
>>>>>>> upstream/master

var _classnames4 = _interopRequireDefault(_classnames3);

var _tabItem = __webpack_require__(149);

var _tabItem2 = _interopRequireDefault(_tabItem);

var _tabsListUnserline = __webpack_require__(150);

var _tabsListUnserline2 = _interopRequireDefault(_tabsListUnserline);

<<<<<<< HEAD
__webpack_require__(143);
=======
var _util = __webpack_require__(51);
>>>>>>> upstream/master

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _typeof = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsList = function (_React$PureComponent) {
    (0, _inherits3.default)(TabsList, _React$PureComponent);

    function TabsList() {
        (0, _classCallCheck3.default)(this, TabsList);
        return (0, _possibleConstructorReturn3.default)(this, (TabsList.__proto__ || (0, _getPrototypeOf2.default)(TabsList)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsList, [{
        key: 'setTabIsActive',
        value: function setTabIsActive(prefixCls, currIndex, key) {
            return (0, _classnames4.default)(prefixCls + '-ls-item', (0, _defineProperty3.default)({}, prefixCls + '-active', key == currIndex));
        }
    }, {
        key: 'onChange',
        value: function onChange(key) {
            this.props.onChange(key);
        }
    }, {
        key: 'setTabItem',
        value: function setTabItem(size) {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                tabs = _props.tabs,
                currIndex = _props.currIndex,
                tabBarPosition = _props.tabBarPosition;

            var style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: size + '%' } : { height: size + '%' };
            return tabs && tabs.map(function (item, key) {
                return _react2.default.createElement(_tabItem2.default, { key: _config2.default.cls + '-tabitem-' + key, itemKey: _config2.default.cls + '-tab-' + key, className: _this2.setTabIsActive(prefixCls, currIndex, key), clickEvent: function clickEvent() {
                        _this2.onChange(key);
                    }, style: style, item: item });
            });
        }
    }, {
        key: 'setTabList',
        value: function setTabList() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                tabs = _props2.tabs,
                currIndex = _props2.currIndex,
                maxTabLength = _props2.maxTabLength,
                animated = _props2.animated,
                tabBarPosition = _props2.tabBarPosition,
                tabBarUnderlineStyle = _props2.tabBarUnderlineStyle;

            if ((0, _typeof.isArray)(tabs)) {
                var _classnames2;

                var size = (0, _util.getTabItemSize)(maxTabLength);
                var cls = (0, _classnames4.default)(prefixCls + '-ls', (_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, prefixCls + '-ls-horizontal', tabBarPosition == 'top' || tabBarPosition == 'bottom'), (0, _defineProperty3.default)(_classnames2, prefixCls + '-ls-vertical', tabBarPosition == 'left' || tabBarPosition == 'right'), _classnames2));
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    this.setTabItem(size),
                    _react2.default.createElement(_tabsListUnserline2.default, { tabBarUnderlineStyle: tabBarUnderlineStyle, currIndex: currIndex, tabBarPosition: tabBarPosition, animated: animated, prefixCls: prefixCls, size: size })
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.setTabList();
        }
    }]);
    return TabsList;
}(_react2.default.PureComponent);

<<<<<<< HEAD
exports.default = Popup;

Popup.defaultProps = {
    prefixCls: _config2.default.cls + '-popup',
    visible: false,
    style: {},
    maskStyle: {},
    maskClose: false,
    onClose: function onClose() {},

    transparent: false,
    direction: 'bottom'
};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
=======
exports.default = TabsList;

/***/ }),
/* 149 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
<<<<<<< HEAD
exports.default = undefined;

var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);
=======
exports.default = TabsItem;
>>>>>>> upstream/master

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
var _tabBar = __webpack_require__(145);
=======
function TabsItem(props) {
    var itemKey = props.itemKey,
        className = props.className,
        clickEvent = props.clickEvent,
        style = props.style,
        item = props.item;
>>>>>>> upstream/master

    return _react2.default.createElement(
        'div',
        { key: itemKey, className: className, style: style, onClick: function onClick() {
                clickEvent();
            } },
        _react2.default.isValidElement(item) ? item : item.title
    );
}

<<<<<<< HEAD
var _tabContent = __webpack_require__(150);
=======
/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {
>>>>>>> upstream/master

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(10);

<<<<<<< HEAD
__webpack_require__(152);
=======
var _defineProperty3 = _interopRequireDefault(_defineProperty2);
>>>>>>> upstream/master

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

exports.default = TabsListUnserlineProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(7);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setPosition(currIndex) {
    return (currIndex * 100).toFixed(4);
}
function TabsListUnserlineProps(props) {
    var prefixCls = props.prefixCls,
        size = props.size,
        animated = props.animated,
        tabBarPosition = props.tabBarPosition,
        currIndex = props.currIndex,
        tabBarUnderlineStyle = props.tabBarUnderlineStyle;

    var unlineTransform = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? 'translate3d(' + setPosition(currIndex) + '%,0,0)' : 'translate3d(0,' + setPosition(currIndex) + '%,0)';
    var style = tabBarPosition == 'top' || tabBarPosition == 'bottom' ? { width: size + '%', transform: unlineTransform } : { height: size + '%', transform: unlineTransform };
    style = (0, _assign2.default)({}, style, tabBarUnderlineStyle);
    var cls = (0, _classnames3.default)(prefixCls + '-ls-unline', prefixCls + '-ls-unline-' + tabBarPosition, (0, _defineProperty3.default)({}, prefixCls + '-ls-unline-am', animated));
    return _react2.default.createElement('div', { className: cls, style: style });
}

/***/ }),
<<<<<<< HEAD
/* 145 */
=======
/* 151 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(7);

var _classnames3 = _interopRequireDefault(_classnames2);

var _tabPane = __webpack_require__(152);

var _tabPane2 = _interopRequireDefault(_tabPane);

var _Gesture = __webpack_require__(50);

var _Gesture2 = _interopRequireDefault(_Gesture);

<<<<<<< HEAD
var _tabList = __webpack_require__(147);
=======
var _util = __webpack_require__(51);
>>>>>>> upstream/master

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _typeof = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabrContent = function (_React$PureComponent) {
    (0, _inherits3.default)(TabrContent, _React$PureComponent);

    function TabrContent() {
        (0, _classCallCheck3.default)(this, TabrContent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TabrContent.__proto__ || (0, _getPrototypeOf2.default)(TabrContent)).apply(this, arguments));

        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var finalOffset = 0;
            var maxIndex = _this.props.tabs.length - 1;
            var isVertical = _this.props.swipeDirection == 'vertical';
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= isVertical ? _this.layout.clientHeight : _this.layout.clientWidth;
                }
                return offset;
            };
            if (!_this.props.animated) {
                return {
                    setCurrentOffset: function setCurrentOffset(offset) {
                        return lastOffset = offset;
                    }
                };
            }
            return {
                onPanStart: function onPanStart() {
                    _this.layout.className = _this.props.prefixCls + '-content-wrap';
                },
                onPanMove: function onPanMove(status) {
                    // 将上次记录到的offset加上这次move的距离得出本次offset的值
                    var offset = isVertical ? getOffset() + status.moveStatus.y : getOffset() + status.moveStatus.x;
                    // 最大滚动距离是负数
                    var maxScrollOffset = isVertical ? -_this.layout.scrollHeight + _this.layout.clientHeight : -_this.layout.scrollWidth + _this.layout.clientWidth;
                    // 当move向左的时候永远为负数，向右的时候永远是正数
                    // 计算当前offset不能小于0和大于最大滚动距离。
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, maxScrollOffset);
                    (0, _util.setLayoutScroll)(_this.layout, offset, 'px', isVertical);
                    // 记录每次滑动后计算的offset
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd() {
                    // 记录这次滑动的最后offset
                    lastOffset = finalOffset;
                    var originCls = _this.layout.className;
                    _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-content-wrap-am';
                    if (_this.props.swipeable) {
                        // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                        var swiperIndex = isVertical ? Math.round(Math.abs(lastOffset) / _this.layout.clientHeight) : Math.round(Math.abs(lastOffset) / _this.layout.clientWidth);
                        swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                        lastOffset = '-' + swiperIndex * 100 + '%';
                        if (swiperIndex == _this.props.currIndex) {
                            _this.layout.style.transform = isVertical ? 'translate3d(0px, -' + swiperIndex * 100 + '%, 0px)' : 'translate3d(-' + swiperIndex * 100 + '%, 0px, 0px)';
                        } else {
                            _this.props.onChange(swiperIndex);
                        }
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        return _this;
    }

    (0, _createClass3.default)(TabrContent, [{
        key: 'setContentWrapStyle',
        value: function setContentWrapStyle() {
            var _props = this.props,
                currIndex = _props.currIndex,
                swipeDirection = _props.swipeDirection;

            var value = currIndex ? '-' + currIndex * 100 + '%' : '0';
            this.onPan.setCurrentOffset(value);
            return (0, _util.getTranslate3dStyle)(value, swipeDirection);
        }
    }, {
        key: 'renderContentList',
        value: function renderContentList() {
            var _this2 = this;

            var _props2 = this.props,
                children = _props2.children,
                prefixCls = _props2.prefixCls,
                animated = _props2.animated;

            var warpCls = (0, _classnames3.default)(prefixCls + '-content-wrap', (0, _defineProperty3.default)({}, prefixCls + '-content-wrap-am', animated));
            return _react2.default.createElement(
                'div',
                { className: warpCls, style: this.setContentWrapStyle(), ref: function ref(refs) {
                        _this2.setLayout(refs);
                    } },
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    children && children instanceof Array && children.map(function (item, key) {
                        return _react2.default.createElement(
                            _tabPane2.default,
                            { prefixCls: prefixCls, key: 'tabspane-' + key + '-' + new Date().getTime(), itemKey: _config2.default.cls + '-tabs-content-item-' + key + '-' + new Date().getTime() },
                            item
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderContnt',
        value: function renderContnt() {
            var _props3 = this.props,
                children = _props3.children,
                prefixCls = _props3.prefixCls,
                isOpenTabContentScroll = _props3.isOpenTabContentScroll;

            if (children && !(0, _typeof.isArray)(children)) {
                return _react2.default.createElement(
<<<<<<< HEAD
                    _Gesture2.default,
                    onPan,
                    this.renderTabbar()
                );
            }
            return this.renderTabbar();
=======
                    'div',
                    { className: prefixCls + '-content' },
                    _react2.default.createElement(
                        _tabPane2.default,
                        { prefixCls: prefixCls },
                        children
                    )
                );
            }
            if (isOpenTabContentScroll) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    this.onPan,
                    this.renderContentList()
                );
            }
            return this.renderContentList();
>>>>>>> upstream/master
        }
    }, {
        key: 'setLayout',
        value: function setLayout(div) {
            this.layout = div;
        }
    }, {
        key: 'render',
        value: function render() {
<<<<<<< HEAD
            var prefixCls = this.props.prefixCls;

            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-bar-box' },
                this.wrapTabsList()
            );
        }
    }]);
    return TabBar;
}(_react2.default.PureComponent);

exports.default = TabBar;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calcMutliFingerStatus = calcMutliFingerStatus;
exports.calcMoveStatus = calcMoveStatus;
exports.getMovingDirection = getMovingDirection;
exports.calcRotation = calcRotation;
exports.getEventName = getEventName;
exports.getDirectionEventName = getDirectionEventName;
exports.shouldTriggerDirection = shouldTriggerDirection;
exports.shouldTriggerSwipe = shouldTriggerSwipe;

var _config = __webpack_require__(71);

// 计算缩放比率
function _calcTriangleDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}
// 计算角度
function _calcAngle(x, y) {
    var radian = Math.atan2(y, x);
    return 180 / (Math.PI / radian);
}
// 计算手指状态
function calcMutliFingerStatus(touches) {
    // 两只手指
    if (touches.length >= 2) {
        var _touches$ = touches[0],
            x1 = _touches$.x,
            y1 = _touches$.y;
        var _touches$2 = touches[1],
            x2 = _touches$2.x,
            y2 = _touches$2.y;

        var deltaX = x2 - x1;
        var deltaY = y2 - y1;
        return {
            x: deltaX,
            y: deltaY,
            z: _calcTriangleDistance(deltaX, deltaY),
            angle: _calcAngle(deltaX, deltaY)
        };
    }
    return null;
}
// 计算move时的状态
function calcMoveStatus(startTouches, touches, time) {
    var _startTouches$ = startTouches[0],
        x1 = _startTouches$.x,
        y1 = _startTouches$.y;
    var _touches$3 = touches[0],
        x2 = _touches$3.x,
        y2 = _touches$3.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    var deltaZ = _calcTriangleDistance(deltaX, deltaY);
    return {
        x: deltaX,
        y: deltaY,
        z: deltaZ,
        time: time,
        velocity: deltaZ / time,
        angle: _calcAngle(deltaX, deltaY)
    };
}
// 获取当前方向
function getMovingDirection(preTouches, touches) {
    // 根据当前的xy值和上一个xy值进行计算方向
    var x1 = preTouches.x,
        y1 = preTouches.y;
    var x2 = touches.x,
        y2 = touches.y;

    var deltaX = x2 - x1;
    var deltaY = y2 - y1;
    // 没有移动
    if (deltaX === 0 && deltaY === 0) {
        return _config.DIRECTION_NONE;
    }
    // 根据变化的数值少决定是横向移动还是竖向移动
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        return deltaX < 0 ? _config.DIRECTION_LEFT : _config.DIRECTION_RIGHT;
    }
    return deltaY < 0 ? _config.DIRECTION_UP : _config.DIRECTION_DOWN;
}
// 计算旋转角度
function calcRotation(startMutliFingerStatus, mutliFingerStatus) {
    var startAngle = startMutliFingerStatus.angle;
    var angle = mutliFingerStatus.angle;

    return angle - startAngle;
}
// 拼接事件名称 将move转为Move
function getEventName(prefix, status) {
    return prefix + status[0].toUpperCase() + status.slice(1);
}
// 根据方向标识返回对应的方向事件名称
function getDirectionEventName(direction) {
    var name = void 0;
    switch (direction) {
        case _config.DIRECTION_NONE:
            break;
        case _config.DIRECTION_LEFT:
            name = 'left';
            break;
        case _config.DIRECTION_RIGHT:
            name = 'right';
            break;
        case _config.DIRECTION_UP:
            name = 'up';
            break;
        case _config.DIRECTION_DOWN:
            name = 'down';
            break;
        default:
    }
    return name;
}
// 查看当前方向配置是否满足当前触发的方向
function shouldTriggerDirection(direction, directionSetting) {
    if (directionSetting & direction) {
        return true;
    }
    return false;
}
// 计算是否触发swiper
function shouldTriggerSwipe(delta, velocity) {
    return Math.abs(delta) >= _config.SWIPE.threshold && Math.abs(velocity) > _config.SWIPE.velocity;
}

/***/ }),
/* 147 */
=======
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                swipeDirection = _props4.swipeDirection;

            var cls = (0, _classnames3.default)(prefixCls + '-content-box', prefixCls + '-content-box-' + swipeDirection);
            return _react2.default.createElement(
                'div',
                { className: cls },
                this.renderContnt()
            );
        }
    }]);
    return TabrContent;
}(_react2.default.PureComponent);

exports.default = TabrContent;

/***/ }),
/* 152 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _classnames3 = __webpack_require__(6);

var _classnames4 = _interopRequireDefault(_classnames3);

var _tabItem = __webpack_require__(148);

var _tabItem2 = _interopRequireDefault(_tabItem);

var _tabsListUnserline = __webpack_require__(149);

var _tabsListUnserline2 = _interopRequireDefault(_tabsListUnserline);

var _util = __webpack_require__(48);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

var _typeof = __webpack_require__(10);

=======
>>>>>>> upstream/master
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsPane = function (_React$PureComponent) {
    (0, _inherits3.default)(TabsPane, _React$PureComponent);

    function TabsPane() {
        (0, _classCallCheck3.default)(this, TabsPane);
        return (0, _possibleConstructorReturn3.default)(this, (TabsPane.__proto__ || (0, _getPrototypeOf2.default)(TabsPane)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabsPane, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                children = _props.children,
                itemKey = _props.itemKey;

            return _react2.default.createElement(
                'div',
                { key: itemKey, className: prefixCls + '-content-item' },
                children
            );
        }
    }]);
    return TabsPane;
}(_react2.default.PureComponent);

exports.default = TabsPane;

/***/ }),
<<<<<<< HEAD
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TabsItem;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabsItem(props) {
    var itemKey = props.itemKey,
        className = props.className,
        clickEvent = props.clickEvent,
        style = props.style,
        item = props.item;
=======
/* 153 */
/***/ (function(module, exports) {
>>>>>>> upstream/master

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 149 */
=======
/* 154 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
<<<<<<< HEAD
/* 150 */
=======
/* 155 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _betterScroll = __webpack_require__(156);

<<<<<<< HEAD
var _tabPane = __webpack_require__(151);
=======
var _betterScroll2 = _interopRequireDefault(_betterScroll);
>>>>>>> upstream/master

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _config = __webpack_require__(6);

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

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * better-normal-scroll v1.11.1
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();




<<<<<<< HEAD
/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {
=======
>>>>>>> upstream/master









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        _events[count][0] = undefined;
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

<<<<<<< HEAD
/***/ }),
/* 152 */
/***/ (function(module, exports) {
=======
      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];
>>>>>>> upstream/master

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

<<<<<<< HEAD
/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(9);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _listItem = __webpack_require__(72);

var _listItem2 = _interopRequireDefault(_listItem);

__webpack_require__(22);

__webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputItem = function (_PureComponent) {
    (0, _inherits3.default)(InputItem, _PureComponent);

    function InputItem() {
        (0, _classCallCheck3.default)(this, InputItem);
        return (0, _possibleConstructorReturn3.default)(this, (InputItem.__proto__ || (0, _getPrototypeOf2.default)(InputItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(InputItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                type = _props.type,
                defaultValue = _props.defaultValue,
                placeholder = _props.placeholder,
                disabled = _props.disabled,
                onChange = _props.onChange;

            var inputClassNames = (0, _classnames2.default)(prefixCls, className, (0, _defineProperty3.default)({}, prefixCls + '-disabled', disabled));
            return _react2.default.createElement(
                _listItem2.default,
                null,
                _react2.default.createElement('input', { type: type, className: inputClassNames, style: style, value: defaultValue, placeholder: placeholder, onChange: onChange, disabled: disabled })
            );
        }
    }]);
    return InputItem;
}(_react.PureComponent);

exports.default = InputItem;

InputItem.defaultProps = {
    prefixCls: 'zzc-input-item',
    className: '',
    style: {},
    type: 'text',
    defaultValue: '',
    placeholder: '说点什么...',
    disabled: false,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},

    inline: false,
    theme: 'default'
};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 155 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(22);

__webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_PureComponent) {
    (0, _inherits3.default)(List, _PureComponent);

    function List() {
        (0, _classCallCheck3.default)(this, List);
        return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
    }

    (0, _createClass3.default)(List, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                children = _props.children,
                preTips = _props.preTips,
                endTips = _props.endTips;

            var listClassNames = (0, _classnames2.default)(prefixCls, className);
            return _react2.default.createElement(
                'div',
                { className: listClassNames, style: style },
                preTips && _react2.default.createElement(
                    'p',
                    { className: prefixCls + '-pretips' },
                    preTips
                ),
                children ? _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-body' },
                    children
                ) : null,
                endTips && _react2.default.createElement(
                    'p',
                    { className: prefixCls + '-endtips' },
                    endTips
                )
            );
        }
    }]);
    return List;
}(_react.PureComponent);

exports.default = List;

List.defaultProps = {
    prefixCls: 'zzc-list',
    className: '',
    style: {},
    preTips: '',
    endTips: ''
};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {
=======
// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
>>>>>>> upstream/master

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

<<<<<<< HEAD
/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {
=======
function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}
>>>>>>> upstream/master

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

function offsetToBody(el) {
  var rect = el.getBoundingClientRect();

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  };
}

var transform = prefixStyle('transform');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && prefixStyle('transition') in elementStyle;

var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionProperty: prefixStyle('transitionProperty'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var event = 'click';
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

<<<<<<< HEAD
var _betterScroll = __webpack_require__(161);
=======
var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.001,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false
};
>>>>>>> upstream/master

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);
=======
    // init private custom events
    this._events = {};
>>>>>>> upstream/master

    this.x = 0;
    this.y = 0;
    this.scale = 1;
    this.directionX = 0;
    this.directionY = 0;

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

<<<<<<< HEAD
/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * better-normal-scroll v1.12.1
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
=======
    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }
>>>>>>> upstream/master

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
    if (this.options.zoom) {
      this._initZoom();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    Object.defineProperty(this, 'isInTransition', {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > 0 || this.x < this.maxScrollX || this.y > 0 || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoomStart(e);
        }
        break;
      case 'touchmove':
      case 'mousemove':
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoom(e);
        } else {
          this._move(e);
        }
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        if (this.scaled) {
          this._zoomEnd(e);
        } else {
          this._end(e);
        }
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width * this.scale);
    this.scrollerHeight = Math.round(scrollerRect.height * this.scale);

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;
      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = 0;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = 0;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
	// easeOutQuint
	swipe: {
		style: 'cubic-bezier(0.23, 1, 0.32, 1)',
		fn: function fn(t) {
			return 1 + --t * t * t * t * t;
		}
	},
	// easeOutQuard
	swipeBounce: {
		style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
		fn: function fn(t) {
			return t * (2 - t);
		}
	},
	// easeOutQuart
	bounce: {
		style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
		fn: function fn(t) {
			return 1 - --t * t * t * t;
		}
	}
};

function momentum(current, start, time, lowerMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = Math.round(destination / itemHeight) * itemHeight;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > 0) {
    destination = wrapperSize ? Math.min(wrapperSize / 4, wrapperSize / rate * speed) : 0;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

<<<<<<< HEAD
var style = {
  transform: transform,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};
=======
    if (this.options.wheel) {
      this.target = e.target;
    }
>>>>>>> upstream/master

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

<<<<<<< HEAD
function click(e) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';

  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }
=======
    this.pointX = point.pageX;
    this.pointY = point.pageY;
>>>>>>> upstream/master

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

<<<<<<< HEAD
function dblclick(e) {
  click(e, 'dblclick');
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}
=======
    var timestamp = getNow();
>>>>>>> upstream/master

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

<<<<<<< HEAD
var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};
=======
    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > 0 || newX < this.maxScrollX) {
      if (newX > 0 && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > 0 ? 0 : this.maxScrollX;
      }
    }
    if (newY > 0 || newY < this.maxScrollY) {
      if (newY > 0 && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > 0 ? 0 : this.maxScrollY;
      }
    }
>>>>>>> upstream/master

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

<<<<<<< HEAD
    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.setScale(1);

    this._addDOMEvents();
=======
    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }
>>>>>>> upstream/master

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

<<<<<<< HEAD
  BScroll.prototype.setScale = function (scale) {
    this.lastScale = isUndef(this.scale) ? scale : this.scale;
    this.scale = scale;
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);
=======
    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }
>>>>>>> upstream/master

    this.scrollTo(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight));
    }
    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = Math.abs(Math.round(this.y / this.itemHeight));
          var _offset = Math.round((this.pointY + offsetToBody(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, true, true, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionProperty = function () {
    var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

    this.scrollerStyle[style.transitionProperty] = property;
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
    if (this.options.infinity) {
      this._initInfinite();
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }
<<<<<<< HEAD
    var me = this;
    var isInTransition = false;
    var key = this.useTransition ? 'isInTransition' : 'isAnimating';
    Object.defineProperty(this, key, {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };
=======
>>>>>>> upstream/master

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + this.scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }
<<<<<<< HEAD
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };
=======
>>>>>>> upstream/master

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;

      me._translate(newX, newY);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

<<<<<<< HEAD
  BScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;
=======
  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;
>>>>>>> upstream/master

    x = this.x + x;
    y = this.y + y;

<<<<<<< HEAD
    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
=======
    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    this.isInTransition = this.options.useTransition && time > 0 && (x !== this.x || y !== this.y);

    if (!time || this.options.useTransition) {
      this._transitionProperty();
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }

      if (this.options.wheel) {
        if (y > 0) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
>>>>>>> upstream/master
      }
    } else {
<<<<<<< HEAD
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      if (!this.options.infinity) {
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }
      if (this.maxScrollX < 0) {
        this.maxScrollX -= this.relativeX;
        this.minScrollX = -this.relativeX;
      } else if (this.scale > 1) {
        this.maxScrollX = this.maxScrollX / 2 - this.relativeX;
        this.minScrollX = this.maxScrollX;
      }
      if (this.maxScrollY < 0) {
        this.maxScrollY -= this.relativeY;
        this.minScrollY = -this.relativeY;
      } else if (this.scale > 1) {
        this.maxScrollY = this.maxScrollY / 2 - this.relativeY;
        this.minScrollY = this.maxScrollY;
      }
=======
      this._animate(x, y, time, easing.fn);
>>>>>>> upstream/master
    }
  };

<<<<<<< HEAD
    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX;
      this.scrollerWidth = this.wrapperWidth;
=======
  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
>>>>>>> upstream/master
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

<<<<<<< HEAD
    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY;
      this.scrollerHeight = this.wrapperHeight;
=======
    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
>>>>>>> upstream/master
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

<<<<<<< HEAD
    !this.scaled && this.resetPosition();
  };
=======
    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
>>>>>>> upstream/master

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };
<<<<<<< HEAD
}

var ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function fn(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function fn(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function fn(t) {
      return 1 - --t * t * t * t;
    }
  }
};

function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;
=======
>>>>>>> upstream/master

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > 0) {
      x = 0;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > 0) {
      y = 0;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

<<<<<<< HEAD
  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin;
    duration = swipeBounceTime;
  }
=======
    this.scrollTo(x, y, time, easeing);
>>>>>>> upstream/master

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');

    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0);
          }
        }
      }
    });

<<<<<<< HEAD
    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if (newX > this.minScrollX && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX;
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if (newY > this.minScrollY && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY;
      }
    }
=======
    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);
>>>>>>> upstream/master

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > 0) {
      x = 0;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > 0) {
      y = 0;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];

    var snap = this.options.snap;

<<<<<<< HEAD
    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = Math.round(newY / this.itemHeight) * this.itemHeight;
        time = this.options.wheel.adjustTime || 400;
      }
=======
    if (!snap || !this.pages || !this.pages.length) {
      return;
>>>>>>> upstream/master
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

<<<<<<< HEAD
    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
=======
    if (!this.pages[x]) {
>>>>>>> upstream/master
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
<<<<<<< HEAD
        if (!preventClick) {
          var _dblclick = this.options.dblclick;
          var dblclickTrigged = false;
          if (_dblclick && this.lastClickTime) {
            var _dblclick$delay = _dblclick.delay,
                delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

            if (getNow() - this.lastClickTime < delay) {
              dblclickTrigged = true;
              dblclick(e);
            }
          }
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          this.lastClickTime = dblclickTrigged ? null : getNow();
          return true;
=======
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
>>>>>>> upstream/master
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

<<<<<<< HEAD
  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
=======
  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }
>>>>>>> upstream/master

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      this.y = -index * this.itemHeight;
      this.scrollTo(0, this.y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
      warn('wheel option selectedIndex is required!');
    }
  };
}

<<<<<<< HEAD
  BScroll.prototype._translate = function (x, y, scale) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (isUndef(scale)) {
      scale = this.scale;
    }
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
=======
var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
>>>>>>> upstream/master
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

<<<<<<< HEAD
    this.x = x;
    this.y = y;
    this.setScale(scale);
=======
    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };
>>>>>>> upstream/master

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

<<<<<<< HEAD
  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startScale = this.lastScale;
    var destScale = this.scale;
    var startTime = getNow();
    var destTime = startTime + duration;
=======
function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';
>>>>>>> upstream/master

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

<<<<<<< HEAD
      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY, destScale);

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;
      var newScale = (destScale - startScale) * easing + startScale;

      me._translate(newX, newY, newScale);
=======
  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }
>>>>>>> upstream/master

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

<<<<<<< HEAD
    if (!time || this.options.useTransition) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);
=======
  this.wrapperStyle[style.transitionDuration] = time + 'ms';
>>>>>>> upstream/master

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

<<<<<<< HEAD
      if (this.options.wheel) {
        if (y > this.minScrollY) {
          this.selectedIndex = 0;
        } else if (y < this.maxScrollY) {
          this.selectedIndex = this.items.length - 1;
        } else {
          this.selectedIndex = Math.round(Math.abs(y / this.itemHeight));
        }
      }
=======
Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
>>>>>>> upstream/master
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

<<<<<<< HEAD
    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
=======
Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
>>>>>>> upstream/master

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

<<<<<<< HEAD
    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }
=======
Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }
>>>>>>> upstream/master

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

<<<<<<< HEAD
  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      cancelAnimationFrame(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[Math.round(-pos.y / this.itemHeight)];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      cancelAnimationFrame(this.animateTimer);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    if (this.options.useTransition) {
      cancelAnimationFrame(this.probeTimer);
    } else {
      cancelAnimationFrame(this.animateTimer);
    }
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}
=======
  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;
>>>>>>> upstream/master

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

<<<<<<< HEAD
    if (x > this.minScrollX) {
      x = this.minScrollX;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > this.minScrollY) {
      y = this.minScrollY;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }
=======
  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };
>>>>>>> upstream/master

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > 0) {
      newX = 0;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > 0) {
      newY = 0;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
  };
}

function zoomMixin(BScroll) {
  BScroll.prototype._initZoom = function () {
    var _options$zoom = this.options.zoom,
        _options$zoom$start = _options$zoom.start,
        start = _options$zoom$start === undefined ? 1 : _options$zoom$start,
        _options$zoom$min = _options$zoom.min,
        min = _options$zoom$min === undefined ? 1 : _options$zoom$min,
        _options$zoom$max = _options$zoom.max,
        max = _options$zoom$max === undefined ? 4 : _options$zoom$max;

    this.scale = Math.min(Math.max(start, min), max);
    this.scrollerStyle[style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);

    this.startDistance = getDistance(deltaX, deltaY);
    this.startScale = this.scale;

    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    this.originX = Math.abs(firstFinger.pageX + secondFinger.pageX) / 2 + left - this.x;
    this.originY = Math.abs(firstFinger.pageY + secondFinger.pageY) / 2 + top - this.y;

    this.trigger('zoomStart');
  };

  BScroll.prototype._zoom = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;

    this.scaled = true;

    var _options$zoom2 = this.options.zoom,
        _options$zoom2$min = _options$zoom2.min,
        min = _options$zoom2$min === undefined ? 1 : _options$zoom2$min,
        _options$zoom2$max = _options$zoom2.max,
        max = _options$zoom2$max === undefined ? 4 : _options$zoom2$max;


    if (scale < min) {
      scale = 0.5 * min * Math.pow(2.0, scale / min);
    } else if (scale > max) {
      scale = 2.0 * max * Math.pow(0.5, max / scale);
    }

    var lastScale = scale / this.startScale;

    var x = this.originX - this.originX * lastScale + this.startX;
    var y = this.originY - this.originY * lastScale + this.startY;

    this.scale = scale;

    this.scrollTo(x, y, 0);
  };

  BScroll.prototype._zoomEnd = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    this.isInTransition = false;
    this.initiated = 0;

    var _options$zoom3 = this.options.zoom,
        _options$zoom3$min = _options$zoom3.min,
        min = _options$zoom3$min === undefined ? 1 : _options$zoom3$min,
        _options$zoom3$max = _options$zoom3.max,
        max = _options$zoom3$max === undefined ? 4 : _options$zoom3$max;


    if (this.scale > max) {
      this.scale = max;
    } else if (this.scale < min) {
      this.scale = min;
    }

    this.refresh();

    var lastScale = this.scale / this.startScale;

    var newX = this.originX - this.originX * lastScale + this.startX;
    var newY = this.originY - this.originY * lastScale + this.startY;

    if (newX > 0) {
      newX = 0;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > 0) {
      newY = 0;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;

    this.trigger('zoomEnd');
  };
}

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(el, options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);

BScroll.Version = '1.11.1';

/* harmony default export */ __webpack_exports__["default"] = (BScroll);


/***/ }),
/* 157 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(12);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(75);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _date = __webpack_require__(159);

var _setListData = __webpack_require__(160);

var _getScrollData = __webpack_require__(162);

var _picker = __webpack_require__(74);

var _picker2 = _interopRequireDefault(_picker);

var _Popup = __webpack_require__(163);

var _Popup2 = _interopRequireDefault(_Popup);

var _typeof = __webpack_require__(8);

var _i18n = __webpack_require__(72);

var _i18n2 = _interopRequireDefault(_i18n);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(165);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3.default)(DatePicker, _React$Component);

    function DatePicker(props) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

        _this.BScrollList = {};
        _this.datePickerStatus = 'hide';
        _this.preDatePickerStatus = 'hide';
        _this.initDate(null);
        _this.touchEnd = _this.touchEnd.bind(_this);
        _this.renderAfter = _this.renderAfter.bind(_this);
        _this.close = _this.close.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(DatePicker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            console.log(123);
            if ((0, _stringify2.default)(nextProps) != (0, _stringify2.default)(this.props) || (0, _stringify2.default)(nextState) != (0, _stringify2.default)(this.state)) {
                return true;
            }
            return false;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.preDatePickerStatus = this.datePickerStatus;
            if (this.props.visible) {
                this.datePickerStatus = 'show';
            } else {
                this.datePickerStatus = 'hide';
            }
            // 当关闭状态下，如果外部传入选择参数有变化，需要重新计算当前选中的日期并渲染日期data，供下次打开渲染
            // if ( !this.props.visible ) {
            //     if ( isDate( this.props.selectTime ) && isDate( nextProps.selectTime ) && this.props.selectTime.getTime() != nextProps.selectTime.getTime() ) {
            //         this.reactDateState( nextProps );
            //     } else if ( isString( this.props.selectTime ) && isString( nextProps.selectTime ) && this.props.selectTime != nextProps.selectTime ) {
            //         this.reactDateState( nextProps );
            //     }
            // }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            !this.props.visible && this.resetPicker();
        }
        // reactDateState( props ) {
        //     const { selectTime, mode } = props;
        //     const calcTime = this.initDateObject( null, selectTime, mode );
        //     this.initDate( calcTime );
        // }
        // resetPicker(): void {
        //     if ( this.datePickerStatus === 'show' && !this.props.visible ) {
        //         this.preDatePickerStatus = this.datePickerStatus;
        //         this.datePickerStatus = 'hide';
        //         const { selectTime, mode } = this.props;
        //         // 关闭的时候，如果当前滑动框选中的日期和当前传入的时间一样，则无需进行reset
        //         const calcTime = this.initDateObject( null, selectTime, mode );
        //         const currPickerDate = this.initDateObject( null, this.getCurrDate().currDate, mode ).getTime();
        //         if ( currPickerDate != calcTime.getTime() ) {
        //             setTimeout( () => {
        //                 this.initDate( calcTime );
        //             }, 500 );
        //         }
        //     }
        // }

    }, {
        key: 'resetPicker',
        value: function resetPicker() {
            var _props = this.props,
                selectTime = _props.selectTime,
                mode = _props.mode;
            // 关闭的时候，如果当前滑动框选中的日期和当前传入的时间一样，则无需进行reset

            var calcTime = this.initDateObject(null, selectTime, mode);
            this.initDate(calcTime);
        }
    }, {
        key: 'initDateObject',
        value: function initDateObject(time, selectTime, mode) {
            var calcTime = void 0;
            if ((0, _typeof.isDate)(time)) {
                calcTime = time;
            } else if (mode == 'time') {
                calcTime = new Date('1993/09/17 ' + selectTime);
            } else if (mode == 'year') {
                calcTime = new Date(selectTime + '/01/01');
            } else if (mode == 'month') {
                calcTime = new Date('1993/' + selectTime + '/01');
            } else {
                calcTime = (0, _typeof.isDate)(selectTime) ? selectTime : new Date(selectTime);
            }
            return calcTime;
        }
    }, {
        key: 'initDate',
        value: function initDate(time) {
            var _props2 = this.props,
                minDate = _props2.minDate,
                maxDate = _props2.maxDate,
                selectTime = _props2.selectTime,
                lang = _props2.lang,
                mode = _props2.mode,
                minuteStep = _props2.minuteStep,
                use12hour = _props2.use12hour;

            var calcTime = this.initDateObject(time, selectTime, mode);
            var langData = _i18n2.default[lang];
            var calcMinDate = (0, _date.initMinDate)(minDate);
            var calcMaxDate = (0, _date.initMaxDate)(maxDate);
            var calcCurrDate = (0, _date.initSelectDate)(calcTime, calcMinDate);
            var listData = {
                yearList: null,
                monthList: null,
                dayList: null,
                hourList: null,
                minuteList: null,
                hour12List: null
            };
            // 根据模式初始化数据
            switch (mode) {
                case 'date':
                    (0, _setListData.createDateListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
                case 'datetime':
                    (0, _setListData.createDateTimeListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData);
                    break;
                case 'time':
                    (0, _setListData.createTimeListData)(listData, calcCurrDate, use12hour, minuteStep, langData);
                    break;
                case 'year':
                    (0, _setListData.createYearListData)(listData, calcMinDate, calcMaxDate, calcCurrDate, langData);
                    break;
                case 'month':
                    (0, _setListData.createMonthListData)(listData, calcCurrDate, langData);
                    break;
            }
            this.state = (0, _assign2.default)({}, listData, { langData: langData });
            time && this.setState(this.state);
        }
    }, {
        key: 'renderAfter',
        value: function renderAfter(BScrollList) {
            this.BScrollList = BScrollList;
        }
    }, {
        key: 'touchEnd',
        value: function touchEnd(scrollKey) {
            var _props3 = this.props,
                onValueChange = _props3.onValueChange,
                mode = _props3.mode;

            var currDateData = void 0;
            var currDate = void 0;
            if (mode && mode.indexOf('date') != -1) {
                if (mode === 'datetime') {
                    var currData = this.getCurrDate(scrollKey).currDate.split(' ');
                    var data = currData[0].split('/');
                    var time = currData[1].split(':');
                    currDateData = data.concat(time);
                } else {
                    currDateData = this.getCurrDate(scrollKey).currDate.split('/');
                }
                // 上一次选择的月份的日期在当前选中的月份的日期没有的时候，选中最后一个日期
                var currYear = parseInt(currDateData[0]);
                var currMonth = parseInt(currDateData[1]);
                var currDay = parseInt(currDateData[2]);
                var currDateLastDay = (0, _date.getLastDate)(currYear, currMonth);
                if (currDay > currDateLastDay) {
                    currDate = new Date(currDateData[0] + '/' + currDateData[1] + '/' + currDateLastDay);
                } else {
                    currDate = new Date(this.getCurrDate(scrollKey).currDate);
                }
            } else if (mode == 'time') {
                currDate = new Date('1993/09/17 ' + this.getCurrDate(scrollKey).currDate);
            } else if (mode == 'year') {
                currDate = new Date(this.getCurrDate(scrollKey).currDate + '/09/17');
            } else if (mode == 'month') {
                currDate = new Date('1993/' + this.getCurrDate(scrollKey).currDate + '/17');
            }
            this.initDate(currDate);
            if (onValueChange && (0, _typeof.isFunction)(onValueChange)) {
                onValueChange(this.getCurrDate(scrollKey));
            }
        }
    }, {
        key: 'getCurrDate',
        value: function getCurrDate() {
            var scrollKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
            var mode = this.props.mode;

            var resultData = {
                scrollKey: scrollKey,
                currDate: ''
            };
            switch (mode) {
                case 'date':
                    resultData.currDate = (0, _getScrollData.getModeDateData)(this.BScrollList, this.state);
                    break;
                case 'time':
                    resultData.currDate = (0, _getScrollData.getModeTimeData)(this.BScrollList, this.state, this.props.use12hour);
                    break;
                case 'datetime':
                    resultData.currDate = (0, _getScrollData.getModeDateTimeData)(this.BScrollList, this.state, this.props.use12hour);
                    break;
                case 'year':
                    resultData.currDate = (0, _getScrollData.getModeYearData)(this.BScrollList, this.state);
                    break;
                case 'month':
                    resultData.currDate = (0, _getScrollData.getModeMonthData)(this.BScrollList, this.state, mode);
                    break;
            }
            return resultData;
        }
    }, {
        key: 'close',
        value: function close() {
            var onClose = this.props.onClose;

            onClose && (0, _typeof.isFunction)(onClose) && onClose();
            // 因为设计原因，点击取消按钮会导致两次取消事件触发，通过记录上一个状态为hide触发close才会触发onClose事件
            // if ( this.preDatePickerStatus === 'hide' ) {
            //     const { onClose } = this.props;
            //     onClose && isFunction( onClose ) && onClose();
            // }
        }
    }, {
        key: 'submit',
        value: function submit() {
            var onSubmit = this.props.onSubmit;

            onSubmit && (0, _typeof.isFunction)(onSubmit) && onSubmit(this.getCurrDate());
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props,
                prefixCls = _props4.prefixCls,
                className = _props4.className,
                style = _props4.style,
                visible = _props4.visible,
                maskClose = _props4.maskClose,
                _renderCallback = _props4.renderCallback;
            var langData = this.state.langData;

            var cls = (0, _classnames2.default)(className, '' + prefixCls);
            return _react2.default.createElement(
                _Popup2.default,
                { maskClose: maskClose, direction: 'bottom', visible: visible, onClose: this.close, renderCallback: function renderCallback() {
                        _renderCallback && _renderCallback();
                    } },
                _react2.default.createElement(
                    'div',
                    { className: cls, style: style },
                    _react2.default.createElement(
                        'div',
                        { className: cls + '-header' },
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-close', onClick: this.close },
                            langData.cancel
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-title' },
                            langData.datePickerTitle
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: cls + '-header-submit', onClick: this.submit },
                            langData.confirm
                        )
                    ),
                    _react2.default.createElement(_picker2.default, { renderAfter: this.renderAfter, onTouchEnd: this.touchEnd, pickerData: [this.state.yearList, this.state.monthList, this.state.dayList, this.state.hourList, this.state.minuteList, this.state.hour12List] })
                )
            );
        }
    }]);
    return DatePicker;
}(_react2.default.Component);

exports.default = DatePicker;

DatePicker.defaultProps = {
    prefixCls: _config2.default.cls + '-datepicker',
    className: '',
    style: {},
    mode: 'date',
    lang: 'cn',
    minDate: '',
    maxDate: '',
    selectTime: null,
    minuteStep: 1,
    use12hour: false,
    visible: false,
    maskClose: true
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initMinDate = initMinDate;
exports.initMaxDate = initMaxDate;
exports.initSelectDate = initSelectDate;
exports.resolveDate = resolveDate;
exports.getLastDate = getLastDate;

var _typeof = __webpack_require__(8);

var _resetDate = __webpack_require__(52);

function initMinDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate);
    }
    var currDate = new Date(new Date().getFullYear() - 10 + '/01/01');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 10,
        minute: 0
    };
}
function initMaxDate(defaultDate) {
    if (defaultDate) {
        return resolveDate(defaultDate);
    }
    var currDate = new Date(new Date().getFullYear() + 10 + '/01/01');
    var year = currDate.getFullYear();
    var month = currDate.getMonth() + 1;
    var day = currDate.getDate();
    return {
        year: year,
        month: month,
        day: day,
        hour: 10,
        minute: 0
    };
}
function initSelectDate(selectDate, minDate) {
    if ((0, _typeof.isDate)(selectDate)) {
        var year = selectDate.getFullYear();
        var month = selectDate.getMonth() + 1;
        var day = selectDate.getDate();
        var hour = selectDate.getHours();
        var minute = selectDate.getMinutes();
        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute
        };
    }
    return minDate;
}
function resolveDate(dateString) {
    if ((0, _typeof.isDate)(dateString)) {
        var year = dateString.getFullYear();
        var month = dateString.getMonth() + 1;
        var day = dateString.getDate();
        var hour = dateString.getHours();
        var minute = dateString.getMinutes();
        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute
        };
    }
    var splitDate = dateString.split(' ');
    var date = splitDate[0].split('/');
    var time = splitDate[1] ? splitDate[1].split(':') : [10, 0];
    return {
        year: date[0],
        month: date[1],
        day: date[2],
        hour: time[0],
        minute: time[1]
    };
}
function getLastDate(year, month) {
    return new Date(new Date(year + '/' + (0, _resetDate.resetDate)(month + 1) + '/01').setDate(0)).getDate();
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDateListData = createDateListData;
exports.createDateTimeListData = createDateTimeListData;
exports.createTimeListData = createTimeListData;
exports.createYearListData = createYearListData;
exports.createMonthListData = createMonthListData;
exports.createHour12ListData = createHour12ListData;

var _pickerData = __webpack_require__(161);

function createDateListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, langData);
}
function createDateTimeListData(obj, calcMinDate, calcMaxDate, calcCurrDate, use12hour, minuteStep, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
    obj.dayList = (0, _pickerData.setDayListData)(calcCurrDate, langData);
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, langData);
    if (use12hour) {
        createHour12ListData(obj, calcCurrDate, langData);
    }
}
function createTimeListData(obj, calcCurrDate, use12hour, minuteStep, langData) {
    obj.hourList = (0, _pickerData.setHoursListData)(calcCurrDate, use12hour, langData);
    obj.minuteList = (0, _pickerData.setMinuteListData)(calcCurrDate, minuteStep, langData);
    if (use12hour) {
        createHour12ListData(obj, calcCurrDate, langData);
    }
}
function createYearListData(obj, calcMinDate, calcMaxDate, calcCurrDate, langData) {
    obj.yearList = (0, _pickerData.setYearListData)(calcMinDate.year, calcMaxDate.year, calcCurrDate.year, langData);
}
function createMonthListData(obj, calcCurrDate, langData) {
    obj.monthList = (0, _pickerData.setMonthListData)(calcCurrDate.month, langData);
}
function createHour12ListData(obj, calcCurrDate, langData) {
    obj.hour12List = (0, _pickerData.setHour12ListData)(calcCurrDate.hour, langData);
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setYearListData = setYearListData;
exports.setMonthListData = setMonthListData;
exports.setDayListData = setDayListData;
exports.setHoursListData = setHoursListData;
exports.setMinuteListData = setMinuteListData;
exports.setHour12ListData = setHour12ListData;

var _resetDate = __webpack_require__(52);

function setYearListData(minYear, maxYear, currYear, langData) {
    var totalYearCount = maxYear - minYear;
    var yearListData = {
        className: 'year-list',
        itemClassName: 'year-item',
        scrollType: 'year',
        selectIndex: 0,
        listData: []
    };
    var yearText = minYear;
    for (var i = 0; i <= totalYearCount; i++) {
        if (currYear == yearText) {
            yearListData.selectIndex = i;
        }
        yearListData.listData.push({
            text: '' + yearText + langData.year,
            dataKey: yearText
        });
        yearText++;
    }
<<<<<<< HEAD
    e.preventDefault();

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
=======
    return yearListData;
}
function setMonthListData(currMonth, langData) {
    var monthListData = {
        className: 'month-list',
        itemClassName: 'month-item',
        scrollType: 'month',
        selectIndex: currMonth - 1,
        listData: []
    };
    var monthText = 1;
    for (var i = 0; i < 12; i++) {
        monthListData.listData.push({
            text: '' + monthText + langData.month,
            dataKey: monthText
        });
        monthText++;
>>>>>>> upstream/master
    }
    return monthListData;
}
function setDayListData(currDateData, langData) {
    var year = currDateData.year,
        month = currDateData.month,
        day = currDateData.day;

<<<<<<< HEAD
    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;


    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap && !easeTime) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;
=======
    var dayListData = {
        className: 'day-list',
        itemClassName: 'day-item',
        scrollType: 'day',
        selectIndex: day - 1,
        listData: []
    };
    var curDate = new Date(year + '-' + (0, _resetDate.resetDate)(month) + '-' + (0, _resetDate.resetDate)(day));
    var calcDate = new Date(curDate.setDate(1));
    var dayCount = new Date(new Date(calcDate.setMonth(month)).setDate(0)).getDate();
    var dayText = 1;
    for (var i = 0; i < dayCount; i++) {
        dayListData.listData.push({
            text: '' + dayText + langData.day,
            dataKey: dayText
        });
        dayText++;
    }
    return dayListData;
}
function setHoursListData(currDateData, use12hour, langData) {
    var hour = currDateData.hour;

    var hourListData = {
        className: 'hour-list',
        itemClassName: 'hour-item',
        scrollType: 'hour',
        selectIndex: use12hour && hour >= 12 ? hour - 12 : hour,
        listData: []
    };
    var step = use12hour ? 12 : 24;
    var hourText = 0;
    for (var i = 0; i < step; i++) {
        hourListData.listData.push({
            text: '' + hourText + langData.hour,
            dataKey: hourText
        });
        hourText++;
    }
    return hourListData;
}
function setMinuteListData(currDateData, minuteStep, langData) {
    var minute = currDateData.minute;
>>>>>>> upstream/master

    var minuteListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'minute',
        selectIndex: minuteStep == 1 ? minute : 0,
        listData: []
    };
    var step = 60 / minuteStep;
    var minuteText = 0;
    for (var i = 0; i < step; i++) {
        if (minuteText == minute) {
            minuteListData.selectIndex = i;
        }
        minuteListData.listData.push({
            text: '' + minuteText + langData.minutes,
            dataKey: minuteText
        });
        minuteText += minuteStep;
    }
    return minuteListData;
}
function setHour12ListData(hour, langData) {
    var hour12ListData = {
        className: 'minute-list',
        itemClassName: 'minute-item',
        scrollType: 'hour12',
        selectIndex: hour < 12 ? 0 : 1,
        listData: [{
            text: langData.am,
            dataKey: 'am'
        }, {
            text: langData.pm,
            dataKey: 'pm'
        }]
    };
    return hour12ListData;
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getModeDateData = getModeDateData;
exports.getModeTimeData = getModeTimeData;
exports.getModeDateTimeData = getModeDateTimeData;
exports.getModeYearData = getModeYearData;
exports.getModeMonthData = getModeMonthData;

var _resetDate = __webpack_require__(52);

function getModeDateData(BScrollList, state) {
    var yearBS = BScrollList.year,
        monthBS = BScrollList.month,
        dayBS = BScrollList.day;
    var yearList = state.yearList,
        monthList = state.monthList,
        dayList = state.dayList;

    var year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    var month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    var day = dayList.listData[dayBS.getSelectedIndex()].dataKey;
    return year + '/' + (0, _resetDate.resetDate)(month) + '/' + (0, _resetDate.resetDate)(day);
}
function getModeTimeData(BScrollList, state, use12hour) {
    var hourBS = BScrollList.hour,
        minuteBS = BScrollList.minute,
        hour12BS = BScrollList.hour12;
    var hourList = state.hourList,
        minuteList = state.minuteList,
        hour12List = state.hour12List;

<<<<<<< HEAD
    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
=======
    var hour = hourList.listData[hourBS.getSelectedIndex()].dataKey;
    var minute = minuteList.listData[minuteBS.getSelectedIndex()].dataKey;
    if (use12hour) {
        var isPM = hour12List.listData[hour12BS.getSelectedIndex()].dataKey == 'pm';
        return (0, _resetDate.resetDate)(isPM ? hour + 12 : hour) + ':' + (0, _resetDate.resetDate)(minute);
>>>>>>> upstream/master
    }
    return (0, _resetDate.resetDate)(hour) + ':' + (0, _resetDate.resetDate)(minute);
}
function getModeDateTimeData(BScrollList, state, use12hour) {
    var dateText = getModeDateData(BScrollList, state);
    var timeText = getModeTimeData(BScrollList, state, use12hour);
    return dateText + ' ' + timeText;
}
function getModeYearData(BScrollList, state) {
    var yearBS = BScrollList.year;
    var yearList = state.yearList;

<<<<<<< HEAD
    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }
=======
    var year = yearList.listData[yearBS.getSelectedIndex()].dataKey;
    return year;
}
function getModeMonthData(BScrollList, state, mode) {
    var monthBS = BScrollList.month;
    var monthList = state.monthList;
>>>>>>> upstream/master

    var month = monthList.listData[monthBS.getSelectedIndex()].dataKey;
    if (mode == 'month') {
        return month; // 如果mode等于month则不补0
    }
    return (0, _resetDate.resetDate)(month);
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
    this.scale = Math.min(Math.max(start, min), max);
    this.setScale(this.scale);
    this.scrollerStyle[style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomTo = function (scale, originX, originY, startScale) {
    this.scaled = true;

    var lastScale = scale / (startScale || this.scale);
    this.setScale(scale);

    this.refresh();

    var newX = Math.round(this.startX - (originX - this.relativeX) * (lastScale - 1));
    var newY = Math.round(this.startY - (originY - this.relativeY) * (lastScale - 1));

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;
  };

  BScroll.prototype.zoomTo = function (scale, x, y) {
    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    var originX = x + left - this.x;
    var originY = y + top - this.y;
    this._zoomTo(scale, originX, originY);
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
=======
"use strict";

>>>>>>> upstream/master

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

<<<<<<< HEAD
    var _offsetToBody2 = offsetToBody(this.wrapper),
        left = _offsetToBody2.left,
        top = _offsetToBody2.top;
=======
var _extends2 = __webpack_require__(23);
>>>>>>> upstream/master

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

<<<<<<< HEAD
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;
=======
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
>>>>>>> upstream/master

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

<<<<<<< HEAD
    var x = this.startX - (this.originX - this.relativeX) * (lastScale - 1);
    var y = this.startY - (this.originY - this.relativeY) * (lastScale - 1);

    this.setScale(scale);
=======
var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);
>>>>>>> upstream/master

var _react2 = _interopRequireDefault(_react);

var _dialog = __webpack_require__(26);

var _dialog2 = _interopRequireDefault(_dialog);

<<<<<<< HEAD
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.isInTransition = false;
    this.isAnimating = false;
    this.initiated = 0;
=======
var _animateConfig = __webpack_require__(48);
>>>>>>> upstream/master

var _animateConfig2 = _interopRequireDefault(_animateConfig);

var _config = __webpack_require__(6);

<<<<<<< HEAD
    var scale = this.scale > max ? max : this.scale < min ? min : this.scale;

    this._zoomTo(scale, this.originX, this.originY, this.startScale);

    this.trigger('zoomEnd');
  };
}

// import { ease } from '../util/ease'

// Number of items to instantiate beyond current view in the scroll direction.
var RUNWAY_ITEMS = 30;

// Number of items to instantiate beyond current view in the opposite direction.
var RUNWAY_ITEMS_OPPOSITE = 10;

// The animation interval (in ms) for fading in content from tombstones.
var ANIMATION_DURATION_MS = 200;

// The number of pixels of default additional length to allow scrolling to.
var DEFAULT_SCROLL_RUNWAY = 2000;

function infiniteMixin(BScroll) {
  BScroll.prototype._initInfinite = function () {
    this.options.probeType = 3;
    this.maxScrollY = -DEFAULT_SCROLL_RUNWAY;
    this.infiniteScroller = new InfiniteScroller(this, this.options.infinity);
  };
}

function isTombstoneNode(node) {
  if (node && node.classList) {
    return node.classList.contains('tombstone');
  }
}

function InfiniteScroller(scroller, options) {
  var _this = this;

  this.options = options;
  assert(typeof this.options.createTombstone === 'function', 'Infinite scroll need createTombstone Function to create tombstone');

  assert(typeof this.options.fetch === 'function', 'Infinite scroll need fetch Function to fetch new data.');

  assert(typeof this.options.render === 'function', 'Infinite scroll need render Function to render each item.');

  this.firstAttachedItem = 0;
  this.lastAttachedItem = 0;

  this.anchorScrollTop = 0;
  this.anchorItem = {
    index: 0,
    offset: 0
  };
  this.tombstoneHeight = 0;
  this.tombstoneWidth = 0;
  this.tombstones = [];

  this.items = [];
  this.loadedItems = 0;
  this.requestInProgress = false;
  this.hasMore = true;

  this.scroller = scroller;
  this.wrapperEl = this.scroller.wrapper;
  this.scrollerEl = this.scroller.scroller;
  this.scroller.on('scroll', function () {
    _this.onScroll();
  });
  this.scroller.on('resize', function () {
    _this.onResize();
  });

  this.onResize();
}

InfiniteScroller.prototype.onScroll = function () {
  var scrollTop = -this.scroller.y;
  var delta = scrollTop - this.anchorScrollTop;
  if (scrollTop === 0) {
    this.anchorItem = {
      index: 0,
      offset: 0
    };
  } else {
    this.anchorItem = this._calculateAnchoredItem(this.anchorItem, delta);
  }

  this.anchorScrollTop = scrollTop;
  var lastScreenItem = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight);

  var start = this.anchorItem.index;
  var end = lastScreenItem.index;
  if (delta < 0) {
    start -= RUNWAY_ITEMS;
    end += RUNWAY_ITEMS_OPPOSITE;
  } else {
    start -= RUNWAY_ITEMS_OPPOSITE;
    end += RUNWAY_ITEMS;
  }
  this.fill(start, end);
  this.maybeRequestContent();
};

InfiniteScroller.prototype.onResize = function () {
  var tombstone = this.options.createTombstone();
  tombstone.style.position = 'absolute';
  this.scrollerEl.appendChild(tombstone);
  tombstone.style.display = '';
  this.tombstoneHeight = tombstone.offsetHeight;
  this.tombstoneWidth = tombstone.offsetWidth;
  this.scrollerEl.removeChild(tombstone);

  for (var i = 0; i < this.items.length; i++) {
    this.items[i].height = this.items[i].width = 0;
  }

  this.onScroll();
};

InfiniteScroller.prototype.fill = function (start, end) {
  this.firstAttachedItem = Math.max(0, start);
  if (!this.hasMore) {
    end = Math.min(end, this.items.length);
  }
  this.lastAttachedItem = end;
  this.attachContent();
};

InfiniteScroller.prototype.maybeRequestContent = function () {
  var _this2 = this;

  if (this.requestInProgress || !this.hasMore) {
    return;
  }
  var itemsNeeded = this.lastAttachedItem - this.loadedItems;
  if (itemsNeeded <= 0) {
    return;
  }
  this.requestInProgress = true;
  this.options.fetch(itemsNeeded).then(function (items) {
    if (items) {
      _this2.addContent(items);
    } else {
      _this2.hasMore = false;
      var tombstoneLen = _this2._removeTombstones();
      var curPos = 0;
      if (_this2.anchorItem.index <= _this2.items.length) {
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.resetPosition(_this2.scroller.options.bounceTime);
      } else {
        _this2.anchorItem.index -= tombstoneLen;
        curPos = _this2._fixScrollPosition();
        _this2._setupAnimations({}, curPos);
        _this2.scroller.stop();
        _this2.scroller.resetPosition();
        _this2.onScroll();
      }
    }
  });
};

InfiniteScroller.prototype.addContent = function (items) {
  this.requestInProgress = false;
  for (var i = 0; i < items.length; i++) {
    if (this.items.length <= this.loadedItems) {
      this._addItem();
    }
    this.items[this.loadedItems++].data = items[i];
  }
  this.attachContent();
  this.maybeRequestContent();
};

InfiniteScroller.prototype.attachContent = function () {
  var unusedNodes = this._collectUnusedNodes();
  var tombstoneAnimations = this._createDOMNodes(unusedNodes);
  this._cleanupUnusedNodes(unusedNodes);
  this._cacheNodeSize();
  var curPos = this._fixScrollPosition();
  this._setupAnimations(tombstoneAnimations, curPos);
};

InfiniteScroller.prototype._removeTombstones = function () {
  var markIndex = void 0;
  var tombstoneLen = 0;
  var itemLen = this.items.length;
  for (var i = 0; i < itemLen; i++) {
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if ((!currentNode || isTombstoneNode(currentNode)) && !currentData) {
      if (!markIndex) {
        markIndex = i;
      }
      if (currentNode) {
        this.scrollerEl.removeChild(currentNode);
      }
    }
  }
  tombstoneLen = itemLen - markIndex;
  this.items.splice(markIndex);
  this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length);
  return tombstoneLen;
};

InfiniteScroller.prototype._collectUnusedNodes = function () {
  var unusedNodes = [];
  for (var i = 0; i < this.items.length; i++) {
    // Skip the items which should be visible.
    if (i === this.firstAttachedItem) {
      i = this.lastAttachedItem - 1;
      continue;
    }
    var currentNode = this.items[i].node;
    if (currentNode) {
      if (isTombstoneNode(currentNode)) {
        // Cache tombstones for reuse
        this.tombstones.push(currentNode);
        this.tombstones[this.tombstones.length - 1].style.display = 'none';
      } else {
        unusedNodes.push(currentNode);
      }
    }
    this.items[i].node = null;
  }
  return unusedNodes;
};

InfiniteScroller.prototype._createDOMNodes = function (unusedNodes) {
  var tombstoneAnimations = {};
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    while (this.items.length <= i) {
      this._addItem();
    }
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if (currentNode) {
      if (isTombstoneNode(currentNode) && currentData) {
        currentNode.style.zIndex = 1;
        tombstoneAnimations[i] = [currentNode, this.items[i].top - this.anchorScrollTop];
        this.items[i].node = null;
      } else {
        continue;
      }
    }
    var node = currentData ? this.options.render(currentData, unusedNodes.pop()) : this._getTombStone();
    node.style.position = 'absolute';
    this.items[i].top = -1;
    this.scrollerEl.appendChild(node);
    this.items[i].node = node;
  }
  return tombstoneAnimations;
};

InfiniteScroller.prototype._cleanupUnusedNodes = function (unusedNodes) {
  while (unusedNodes.length) {
    this.scrollerEl.removeChild(unusedNodes.pop());
  }
};

InfiniteScroller.prototype._cacheNodeSize = function () {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    // Only cache the height if we have the real contents, not a placeholder.
    if (this.items[i].data && !this.items[i].height) {
      this.items[i].height = this.items[i].node.offsetHeight;
      this.items[i].width = this.items[i].node.offsetWidth;
=======
var _config2 = _interopRequireDefault(_config);

__webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_React$PureComponent) {
    (0, _inherits3.default)(Popup, _React$PureComponent);

    function Popup() {
        (0, _classCallCheck3.default)(this, Popup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));

        _this.state = {
            showPopup: _this.props.visible,
            animationTypeList: _animateConfig2.default
        };
        _this.maskShowed = false;
        _this.boxShowed = false;
        _this.rendered = false;
        return _this;
>>>>>>> upstream/master
    }
  }
};

<<<<<<< HEAD
InfiniteScroller.prototype._fixScrollPosition = function () {
  this.anchorScrollTop = 0;
  for (var _i = 0; _i < this.anchorItem.index; _i++) {
    this.anchorScrollTop += this.items[_i].height || this.tombstoneHeight;
  }
  this.anchorScrollTop += this.anchorItem.offset;

  // Position all nodes.
  var curPos = this.anchorScrollTop - this.anchorItem.offset;
  var i = this.anchorItem.index;
  while (i > this.firstAttachedItem) {
    curPos -= this.items[i - 1].height || this.tombstoneHeight;
    i--;
  }

  return curPos;
};

InfiniteScroller.prototype._setupAnimations = function (tombstoneAnimations, curPos) {
  var _this3 = this;

  for (var i in tombstoneAnimations) {
    var animation = tombstoneAnimations[i];
    this.items[i].node.style.transform = 'translateY(' + (this.anchorScrollTop + animation[1]) + 'px) scale(' + this.tombstoneWidth / this.items[i].width + ', ' + this.tombstoneHeight / this.items[i].height + ')';
    // Call offsetTop on the nodes to be animated to force them to apply current transforms.
    /* eslint-disable no-unused-expressions */
    this.items[i].node.offsetTop;
    animation[0].offsetTop;
    this.items[i].node.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms';
  }

  for (var _i2 = this.firstAttachedItem; _i2 < this.lastAttachedItem; _i2++) {
    var _animation = tombstoneAnimations[_i2];
    if (_animation) {
      var tombstoneNode = _animation[0];
      tombstoneNode.style.transition = 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
      tombstoneNode.style.transform = 'translateY(' + curPos + 'px) scale(' + this.items[_i2].width / this.tombstoneWidth + ', ' + this.items[_i2].height / this.tombstoneHeight + ')';
      tombstoneNode.style.opacity = 0;
    }
    if (curPos !== this.items[_i2].top) {
      if (!_animation) {
        this.items[_i2].node.style.transition = '';
      }
      this.items[_i2].node.style.transform = 'translateY(' + curPos + 'px)';
    }
    this.items[_i2].top = curPos;
    curPos += this.items[_i2].height || this.tombstoneHeight;
  }

  this.scroller.maxScrollY = -(curPos - this.wrapperEl.offsetHeight + (this.hasMore ? DEFAULT_SCROLL_RUNWAY : 0));

  setTimeout(function () {
    for (var _i3 in tombstoneAnimations) {
      var _animation2 = tombstoneAnimations[_i3];
      _animation2[0].style.display = 'none';
      // Tombstone can be recycled now.
      _this3.tombstones.push(_animation2[0]);
    }
  }, ANIMATION_DURATION_MS);
};

InfiniteScroller.prototype._getTombStone = function () {
  var tombstone = this.tombstones.pop();
  if (tombstone) {
    tombstone.style.display = '';
    tombstone.style.opacity = 1;
    tombstone.style.transform = '';
    tombstone.style.transition = '';
    return tombstone;
  }
  return this.options.createTombstone();
};

InfiniteScroller.prototype._addItem = function () {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};

InfiniteScroller.prototype._calculateAnchoredItem = function (initialAnchor, delta) {
  if (delta === 0) {
    return initialAnchor;
  }
  var i = initialAnchor.index;
  var tombstones = 0;

  delta += initialAnchor.offset;
  if (delta < 0) {
    while (delta < 0 && i > 0 && this.items[i - 1].height) {
      delta += this.items[i - 1].height;
      i--;
    }
    tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
  } else {
    while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
      delta -= this.items[i].height;
      i++;
    }
    if (i >= this.items.length || !this.items[i].height) {
      tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
    }
  }
  i += tombstones;
  delta -= tombstones * this.tombstoneHeight;

  return {
    index: i,
    offset: delta
  };
};
=======
    (0, _createClass3.default)(Popup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.setState({
                    showPopup: true
                });
            }
        }
        // 获取指定样式

    }, {
        key: 'getAnimationClass',
        value: function getAnimationClass(direction) {
            var animation = this.state.animationTypeList[_config2.default.cls + '-slide-' + direction];
            if (animation) {
                return animation;
            }
            return direction ? direction : null;
        }
    }, {
        key: 'boxAnimated',
        value: function boxAnimated(type) {
            this.boxShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'maskAnimated',
        value: function maskAnimated(type) {
            this.maskShowed = type == 'enter';
            if (this.boxShowed && this.maskShowed) {
                this.renderCallback();
            }
        }
    }, {
        key: 'renderCallback',
        value: function renderCallback() {
            !this.rendered && this.props.renderCallback && this.props.renderCallback();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                visible = _props.visible,
                children = _props.children,
                prefixCls = _props.prefixCls,
                direction = _props.direction,
                onClose = _props.onClose;
>>>>>>> upstream/master

            if (this.state.showPopup) {
                return _react2.default.createElement(
                    _dialog2.default,
                    (0, _extends3.default)({ maskTransitionName: _config2.default.cls + '-fade', transitionName: this.getAnimationClass(direction), prefixCls: prefixCls, boxClassName: prefixCls + '-' + direction, visible: visible, boxAnimated: function boxAnimated(type) {
                            _this2.boxAnimated(type);
                        }, maskAnimated: function maskAnimated(type) {
                            _this2.maskAnimated(type);
                        }, closeCallback: function closeCallback() {
                            _this2.setState({ showPopup: false });
                            onClose && onClose();
                        } }, this.props),
                    children
                );
            }
            return null;
        }
    }]);
    return Popup;
}(_react2.default.PureComponent);

exports.default = Popup;

<<<<<<< HEAD
initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);
infiniteMixin(BScroll);

BScroll.Version = '1.12.1';
=======
Popup.defaultProps = {
    prefixCls: _config2.default.cls + '-popup',
    visible: false,
    style: {},
    maskStyle: {},
    maskClose: false,
    onClose: function onClose() {},

    transparent: false,
    direction: 'bottom'
};
>>>>>>> upstream/master

/***/ }),
/* 164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 162 */
=======
/* 165 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
<<<<<<< HEAD
/* 163 */
=======
/* 166 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _date = __webpack_require__(164);

var _setListData = __webpack_require__(165);

var _getScrollData = __webpack_require__(167);

var _picker = __webpack_require__(73);

var _picker2 = _interopRequireDefault(_picker);

var _Popup = __webpack_require__(168);

var _Popup2 = _interopRequireDefault(_Popup);

var _typeof = __webpack_require__(10);
=======
var _modal = __webpack_require__(49);
>>>>>>> upstream/master

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(167);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

<<<<<<< HEAD
__webpack_require__(170);

=======
>>>>>>> upstream/master
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function (_PureComponent) {
    (0, _inherits3.default)(Loading, _PureComponent);

    function Loading() {
        (0, _classCallCheck3.default)(this, Loading);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));

        _this.state = {
            visible: _this.props.visible
        };
        return _this;
    }

    (0, _createClass3.default)(Loading, [{
        key: 'getModal',
        value: function getModal(div) {
            this.modal = div;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible) {
                this.setState({
                    visible: nextProps.visible
                });
            } else {
                this.modal.close();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                text = _props.text,
                _closeCallback = _props.closeCallback;
            var visible = this.state.visible;

            return _react2.default.createElement(
                _modal2.default,
                (0, _extends3.default)({ ref: function ref(div) {
                        _this2.getModal(div);
                    }, prefixCls: prefixCls, visible: visible, closeCallback: function closeCallback() {
                        _closeCallback && _closeCallback();
                    } }, this.props),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _react2.default.createElement('img', { width: '50', height: '42', src: 'data:image/gif;base64,R0lGODlhMgAqANU9AMXFxcbGxsfHx/z8/PT09P7+/v39/c3Nzc7OztjY2ODg4O7u7svLy8jIyPr6+urq6tnZ2dvb2/v7++np6ePj4/Dw8Pn5+ebm5tXV1cnJyeHh4fX19eLi4tPT0/Ly8vHx8dLS0srKyt7e3t/f3+jo6Ovr6/f399bW1uzs7MzMzOTk5OXl5fb29vPz89DQ0NTU1NfX19ra2vj4+Ofn5+/v78/Pz9zc3O3t7dHR0d3d3cLCwsPDw8TExP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQA9ACwAAAAAMgAqAAAG/8CecEgsEh2bEicCgcRGJI/FSK1ai4QLqMHrer8ChKJSuJqphtIJ8G27u67V9Hx+INqIhOLxIRA8KBoQd18NFAN0VQQnXzUcH2YFFQoHXwg3iUUXAV4dKFQSLC0EMgZEBiSEXTlliQURXgwPVAU0GjEnCTkXJkUDFJxdHXNmDi9eEQ5GBheVbgEYLVjHXQcbZhIuXQATVAQ1XzEEHxMRIV0irUMisddVEjhdGRVUCwI8bF0aRBIqXBimiEzIx0BGFQzyCFCpwElDBYKIiKzoAsPIjWA1IhJR0EWAByoOUvDgIASEFxpEStzrQsHIgnwVU25bUGUEjxNDLngRIaQAR/8wvYo88DJjiIMMXUiCQuquh4yVDBw4QOhFABcFVDh0ZNGjQIIuGKyQ4AGhCCMeARisrPaHR4qARb7y6GBiItqgRizAmkXEhgAUSGJ4gYCowB2FRmjkE2GTxwgrHkzaQEHiggoFAmgOQaiCyF4jA5zV+DBABQe4RlA4a8NAXY8LLopovWBEbgO8Zkqs/pLC9QwA0obMLsIOLb1EH0y+0SwEYQAKrT4PoeCFbyK9ZFt48MNihoALMghQg6OwUlMNXrplEjKBR4wiDu4BCGCjA5ivb4UU50Fi/ZABGQDQVA8LINMVMG3sYwFVAFjnXw/o4TSEYF1gIoQHqghgwgMMdBHOwnEPCiFBJfsIQYgAxAhhHw85yMUDCAaFSMQCnOTQgwdeSDgEAR1mEMxzrsloAAJqvRhPF50J4QBmPDSwgzDByehZF0V+MUIFF5zABQ/nvKielERQ5wUGI4jkhg4C7NAABJCAWcRLXhygjAQLqBADCC50kEAECqCgkZtDsLAlWoidMsAAQQI6xJBfrKDogy6S9ah/6MWJ2qRmoABGlJiascFa/HVKR2hfJCDqGQac1QUCf55KRQlfBFCoq+9QyANttJ5hk6m5njGAArP2GgQAIfkECQUAPQAsAAAAADIAKgAABv/AnnBILBIdmxInAoHERiSPxUitWouEC6jB63q/AoSiUriaqYbSCfBtu7uu1fR8fiDaiITi8SEQPCgaEHdfDRQDdFUEJ181HB9mBRUKB18IN4lFFwFeHShUSB4EMgZEBiSEXTlliQURXgwPaAsKECcwNhcmRQMUnF0dc2YOL14RDka9DG8BGC1YxV0HG2YSLl0AE1QelQAgKhReAQJdI6xDIrDUVRI4XRkVVCicL889Hl4iEgqcJ6VEE9jwYCCjCoZ3BKjQ4KQCoJcZQghUgmHkxq8aiIoo6CLAA6hlEIls7LJgiIwUPCgYWSCQIpES2EpSScfjwrkeNrysE1KBh4D/XUUePBziIEMXDlUccOmCgMQ/RjwyZBwCgYcGKhw4suhRIEEXDFZmuElBIqAAABmQDWCxQEOlFP+KeOXRwcSKLgGAGpFRVeCXDDckmIgQokMIvzwA7CRCQ6CIEeWsVLhWYUIlL5CGHHxTItnlGh8GqOAQ18iEEAIkcH3gLsVNsV7QcrpgZG4DvWZOC5jag0KImxd4YOBwg0CBdCHR4Y2XaDIP3CwAyBSCgzaRnJ+GhOsiK5OFGDy0CRkAwucMEy0OKiBSAOVWIRq8iM/UQywEIQaiJTbapUFBIS3wcAArNPFAAn1DSJABAFvNldgEBnTghQ1DeKWSBZsB0B2CQkDW3QEMXxx4T2wJLRCVBQ8sw0MIzHEohASXebECEVV1AQMBIfAwgoMg/OfiEAv8wsOMRLBATmJshPBLABTc9KMBCDBAjnRG5PBXJ/b8SMQrPKTABQBi3PABDRdcBoCKIMynpXZfYEDJGzpw0QAEma1JBEteHKAWDStE0AEOL0AQgQIo8GanECwsxUMACRVhwAADOHnoEFB+QeSk9DnIw32Y0hdfnqV1agYKYGQpqhkbHNmFiKeaMUCMPCTQ6hkGQMWUobMaAZM4jeZqhQTgdWGdr2ZAJiuxZwygQK/I9hAEACH5BAUFAD0ALAAAAAAyACoAAAb/wJ5wSCwSHZsSJwKBxEYkj8VIrVqLhAuowet6vwKEolK4mqmG0gnwbbu7rtX0fH4g2oiE4vEhEDwoGhB3Xw0UA3RVBCdfNRwfZgUVCgdfCDeJRRcBXh0omUIGJIRdOWWJBRFeDA9oCxQJHRgiEyxFAxScXR1zZg4vXhEORgMrlW4CEARYwF0HG2YSLl0AE1Qexy4jJR80KxCcABpGIqvQVRI4XRkVVCVsPC9GFgJeMKdDE/AMMlUY68uMVIDHo8G5ITbaRDByQ1cNREUUdBHggYoEBjzqdUEAsQcKLyEeYLRWZAE8GEVKUFtQpVyMDVy6QBBiAWOXVjR4hJBg5IGX/xlDHGTowqGKgwYBTPRQ6UWFAQj2hiTgoYIKh4m2CkzlgcGKzwRDJFJLAS9Er5wgOhLZ2sHEii5Jq1hQxXLIPwYLLLBQRVJIgRQ86hahAU/EiC4jrCy4o3SIBx6QhrigUAQEVWLHanwYoIKDASszMgQY5lfDgSI+cSig8RkGj3FFtjZofIaEaAcGaNgAjKDIhC8HIGCEPaQcjwDtEi2owQMG8y/JhUx7U3UIBS+tMllI+KZBLQ8wDuAgCFewBi99MzH1IgADiU0Tp7RQ8SJmB4jGeZAANURCCDgc9NJMCvj0IEM9K/RgwT88AJAdf0Kct1MRrun02RAL8MDAACJ1Ec5CdBD2YEAlxAkhW0cw8QCLFyD0EyIRJvEgAj6qZMRTDx8MdYAuAVBQ4IsGIBACJyBElsNEDkjAASf/7dLCi0bUyEA4NSgAWIM4DAXAMSCkB6UQ13nxAgdXtqEDAwA0AEFkX8JI0AHDSFCBCjZgAMILEeSgAApqtSkECzEdFxARBgwwwI9+DhHkFwkmyt9WMjnK33leHHChpHR8xN6TmNKxgUZd7NfpGQMc0wVYo5phACNecJSqGesJ+mo0MXhxwax0HIYqrmYMoMCgvPYQBAA7', alt: 'loading' }),
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-text' },
                        text
                    )
                )
            );
        }
    }]);
    return Loading;
}(_react.PureComponent);

exports.default = Loading;

Loading.defaultProps = {
    prefixCls: _config2.default.cls + '-loading',
    style: {},
    maskStyle: {},
    className: '',
    closeCallback: function closeCallback() {},

    visible: false,
    text: ''
};

/***/ }),
<<<<<<< HEAD
/* 164 */
=======
/* 167 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 168 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

<<<<<<< HEAD
/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {
=======
var _classCallCheck2 = __webpack_require__(1);
>>>>>>> upstream/master

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

<<<<<<< HEAD
var _pickerData = __webpack_require__(166);
=======
var _possibleConstructorReturn2 = __webpack_require__(4);
>>>>>>> upstream/master

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _config = __webpack_require__(6);

var _config2 = _interopRequireDefault(_config);

var _dialog = __webpack_require__(26);

var _dialog2 = _interopRequireDefault(_dialog);

var _Gesture = __webpack_require__(50);

var _Gesture2 = _interopRequireDefault(_Gesture);

var _typeof = __webpack_require__(8);

var _util = __webpack_require__(169);

__webpack_require__(170);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IamgeView = function (_PureComponent) {
    (0, _inherits3.default)(IamgeView, _PureComponent);

    function IamgeView() {
        (0, _classCallCheck3.default)(this, IamgeView);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IamgeView.__proto__ || (0, _getPrototypeOf2.default)(IamgeView)).apply(this, arguments));

        _this.state = {
            isRender: _this.props.visible,
            index: _this.props.defaultIndex
        };
        _this.onPan = function () {
            // 默认是0
            var lastOffset = 0;
            var lastTime = 0;
            var finalOffset = 0;
            var startTime = 0;
            var maxIndex = _this.props.imageList.length - 1;
            var getOffset = function getOffset() {
                var offset = +('' + lastOffset).replace('%', '');
                if (('' + lastOffset).indexOf('%') >= 0) {
                    offset /= 100;
                    offset *= _this.layout.clientWidth;
                }
                return offset;
            };
            return {
                onPanStart: function onPanStart(status) {
                    startTime = status.time;
                    _this.layout.className = _this.props.prefixCls + '-content';
                },
                onPanMove: function onPanMove(status) {
                    // 将上次记录到的offset加上这次move的距离得出本次offset的值
                    var offset = getOffset() + status.moveStatus.x;
                    // 最大滚动距离是负数
                    var maxScrollOffset = -_this.layout.scrollWidth + _this.layout.clientWidth;
                    // 当move向左的时候永远为负数，向右的时候永远是正数
                    // 计算当前offset不能小于0和大于最大滚动距离。
                    offset = Math.min(offset, 0);
                    offset = Math.max(offset, maxScrollOffset);
                    (0, _util.setLayoutScroll)(_this.layout, offset, 'px');
                    // 记录每次滑动后计算的offset
                    finalOffset = offset;
                },
                onPanEnd: function onPanEnd(status) {
                    // 记录这次滑动的最后offset
                    lastOffset = finalOffset;
                    lastTime = status.time;
                    var originCls = _this.layout.className;
                    if (_this.props.animate) {
                        _this.layout.className = originCls + ' ' + _this.props.prefixCls + '-content-am';
                    }
                    // 当滑动的距离大于当前Item宽度的50%，则跳转到下一个item，否则归为。
                    var swiperIndex = Math.round(Math.abs(lastOffset) / _this.layout.clientWidth);
                    swiperIndex = swiperIndex > maxIndex ? maxIndex : swiperIndex;
                    lastOffset = '-' + swiperIndex * 100 + '%';
                    // 快速滑动识别是否到下一页
                    if (lastTime - startTime < 150 && swiperIndex == _this.state.index) {
                        var index = status.moveStatus.x > 0 ? swiperIndex - 1 : swiperIndex + 1;
                        index = Math.min(index, maxIndex);
                        index = Math.max(index, 0);
                        _this.setState({
                            index: index
                        }, function () {
                            (0, _typeof.isFunction)(_this.props.onChange) && _this.props.onChange(_this.state.index);
                        });
                        _this.layout.style.transform = 'translate3d(-' + index * 100 + '%, 0px, 0px)';
                    } else {
                        if (swiperIndex != _this.state.index) {
                            _this.setState({
                                index: swiperIndex
                            }, function () {
                                (0, _typeof.isFunction)(_this.props.onChange) && _this.props.onChange(_this.state.index);
                            });
                        }
                        _this.layout.style.transform = 'translate3d(-' + swiperIndex * 100 + '%, 0px, 0px)';
                    }
                },
                setCurrentOffset: function setCurrentOffset(offset) {
                    return lastOffset = offset;
                }
            };
        }();
        return _this;
    }

<<<<<<< HEAD
/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {
=======
    (0, _createClass3.default)(IamgeView, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.visible != this.props.visible && nextProps.visible) {
                if (nextProps.defaultIndex != this.state.index) {
                    this.setState({
                        isRender: nextProps.visible,
                        index: nextProps.defaultIndex
                    });
                } else {
                    this.setState({
                        isRender: nextProps.visible
                    });
                }
            } else if (nextProps.defaultIndex != this.state.index) {
                this.setState({
                    index: nextProps.defaultIndex
                });
            }
        }
    }, {
        key: 'createImageContent',
        value: function createImageContent() {
            var _this2 = this;
>>>>>>> upstream/master

            var prefixCls = this.props.prefixCls;

            this.onPan.setCurrentOffset('-' + this.state.index * 100 + '%');
            return _react2.default.createElement(
                'div',
                { style: { transform: 'translate3d(-' + this.state.index * 100 + '%, 0px, 0px)' }, className: prefixCls + '-content', ref: function ref(div) {
                        _this2.getLayout(div);
                    }, onClick: function onClick() {
                        _this2.dialog.mask.click();
                    } },
                this.createImageList()
            );
        }
    }, {
        key: 'createImageList',
        value: function createImageList() {
            var _this3 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                imageList = _props.imageList,
                swipeable = _props.swipeable;

            var hash = new Date().getTime();
            if (swipeable && imageList.length > 0) {
                return _react2.default.createElement(
                    _Gesture2.default,
                    this.onPan,
                    _react2.default.createElement(
                        'div',
                        { className: prefixCls + '-swiper' },
                        imageList.map(function (item, key) {
                            return _react2.default.createElement(
                                'section',
                                { key: 'imageView-' + key + '-' + hash },
                                _this3.lazyImage(item, key)
                            );
                        })
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: prefixCls + '-swiper' },
                imageList.map(function (item, key) {
                    return _react2.default.createElement(
                        'section',
                        { key: 'imageView-' + key + '-' + hash },
                        _react2.default.createElement('img', { alt: '', src: item })
                    );
                })
            );
        }
    }, {
        key: 'lazyImage',
        value: function lazyImage(item, key) {
            var index = this.state.index;

            if (index == key || index == key - 1 || index == key + 1) {
                return _react2.default.createElement('img', { alt: '', src: item });
            }
            return _react2.default.createElement('img', { alt: '' });
        }
    }, {
        key: 'getDialog',
        value: function getDialog(dialog) {
            this.dialog = dialog;
        }
    }, {
        key: 'getLayout',
        value: function getLayout(layout) {
            this.layout = layout;
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.state.isRender) {
                this.setState({
                    isRender: false
                });
            }
            (0, _typeof.isFunction)(this.props.onClose) && this.props.onClose(this.state.index);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                style = _props2.style,
                visible = _props2.visible;
            var isRender = this.state.isRender;

            if (isRender) {
                return _react2.default.createElement(
                    _dialog2.default,
                    { ref: function ref(dialog) {
                            _this4.getDialog(dialog);
                        }, maskClose: true, maskClassName: prefixCls + '-mask', boxClassName: prefixCls + '-box', transitionName: _config2.default.cls + '-fade', maskTransitionName: _config2.default.cls + '-fade', visible: visible, className: (0, _classnames2.default)(prefixCls, className), style: style, closeCallback: function closeCallback() {
                            _this4.close();
                        } },
                    this.createImageContent()
                );
            }
            return null;
        }
    }]);
    return IamgeView;
}(_react.PureComponent);

exports.default = IamgeView;

IamgeView.defaultProps = {
    prefixCls: _config2.default.cls + '-imageview',
    className: '',
    style: {},
    visible: false,
    imageList: [],
    defaultIndex: 0,
    onChange: function onChange() {},
    onClose: function onClose() {},
    swipeable: true,
    animate: true
};

/***/ }),
<<<<<<< HEAD
/* 167 */
=======
/* 169 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLayoutScroll = setLayoutScroll;
exports.getTabItemSize = getTabItemSize;
exports.getTranslate3dStyle = getTranslate3dStyle;
function setLayoutScroll(layout, offset, unit) {
    var value = "" + offset + unit + ", 0px, 0px";
    var translate3d = "translate3d(" + value + ")";
    var style = layout.style;
    setTransfrom(style, translate3d);
}
function getTabItemSize(maxTabLength) {
    return (100 / maxTabLength).toFixed(4);
}
function getTranslate3dStyle(value) {
    var offset = value + ", 0px, 1px";
    var translate3d = "translate3d(" + offset + ")";
    return {
        transform: translate3d,
        WebkitTransform: translate3d,
        MozTransform: translate3d
    };
}
function setTransfrom(style, value) {
    style.transform = value;
    style.WebkitTransform = value;
    style.MozTransform = value;
}

/***/ }),
<<<<<<< HEAD
/* 168 */
=======
/* 170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 171 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

<<<<<<< HEAD
var _extends2 = __webpack_require__(26);

var _extends3 = _interopRequireDefault(_extends2);

=======
>>>>>>> upstream/master
var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _dialog = __webpack_require__(32);

var _dialog2 = _interopRequireDefault(_dialog);

var _animateConfig = __webpack_require__(47);
=======
var _reactDom = __webpack_require__(19);
>>>>>>> upstream/master

var _reactDom2 = _interopRequireDefault(_reactDom);

var _typeof = __webpack_require__(8);

var _Event = __webpack_require__(46);

<<<<<<< HEAD
__webpack_require__(169);
=======
var _class = __webpack_require__(31);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = function (_React$PureComponent) {
    (0, _inherits3.default)(Animate, _React$PureComponent);

    function Animate() {
        (0, _classCallCheck3.default)(this, Animate);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Animate.__proto__ || (0, _getPrototypeOf2.default)(Animate)).apply(this, arguments));

        _this.animateStatus = null;
        return _this;
    }

    (0, _createClass3.default)(Animate, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.addAnimationEvent();
            this.runHookEvent(true);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // 防止重复执行动画，必须当前状态和传入参数不一样才执行动画钩子
            if (this.props.visible && this.animateStatus !== 'enter' || !this.props.visible && this.animateStatus !== 'leave') {
                this.runHookEvent(false);
            }
        }
        // 执行触发钩子事件

    }, {
        key: 'runHookEvent',
        value: function runHookEvent(isFirst) {
            if (isFirst && this.props.visible || !isFirst && this.props.visible && this.animateStatus == 'leave') {
                this.enterEvent();
            } else if (!isFirst && !this.props.visible && this.animateStatus == 'enter') {
                this.leaveEvent();
            } else if (!isFirst && this.props.visible) {
                this.enterEvent();
            }
        }
        // 绑定动画事件

    }, {
        key: 'addAnimationEvent',
        value: function addAnimationEvent() {
            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                _Event.animationEvents.addEndEventListener(node, this.animationEvent, this);
            }
        }
        // 进入动画钩子

    }, {
        key: 'enterEvent',
        value: function enterEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var enter = animationName.enter,
                        enterActive = animationName.enterActive;

                    (0, _class.addClass)(node, enter);
                    (0, _class.addClass)(node, enterActive);
                } else {
                    (0, _class.addClass)(node, animationName);
                }
                this.animateStatus = 'enter';
            }
        }
        // 离开动画钩子

    }, {
        key: 'leaveEvent',
        value: function leaveEvent() {
            var animationName = this.props.animationName;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                if ((0, _typeof.isObject)(animationName)) {
                    var leave = animationName.leave,
                        leaveActive = animationName.leaveActive;

                    (0, _class.addClass)(node, leave);
                    (0, _class.addClass)(node, leaveActive);
                } else {
                    (0, _class.removeClass)(node, animationName);
                }
                this.animateStatus = 'leave';
            }
        }
        // 动画完成触发事件

<<<<<<< HEAD
/***/ }),
/* 169 */
/***/ (function(module, exports) {
=======
    }, {
        key: 'animationEvent',
        value: function animationEvent(event) {
            event.stopPropagation();
            var animationName = this.props.animationName;
            var enter = animationName.enter,
                enterActive = animationName.enterActive,
                leave = animationName.leave,
                leaveActive = animationName.leaveActive;
>>>>>>> upstream/master

            try {
                var node = _reactDom2.default.findDOMNode(this);
                if ((0, _typeof.isDOM)(node)) {
                    var animationType = 'enter';
                    // 当传入object会清楚enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
                    if ((0, _typeof.isObject)(animationName)) {
                        // 当切换enter和leave速度过来会导致bug，需要判断是否会存在enter和leave的class
                        if ((0, _class.hasClass)(node, enter)) {
                            (0, _class.removeClass)(node, enter);
                            (0, _class.removeClass)(node, enterActive);
                            if ((0, _class.hasClass)(node, leave)) {
                                animationType = 'leave';
                                (0, _class.removeClass)(node, leave);
                                (0, _class.removeClass)(node, leaveActive);
                            }
                        } else {
                            animationType = 'leave';
                            (0, _class.removeClass)(node, leave);
                            (0, _class.removeClass)(node, leaveActive);
                        }
                    } else if ((0, _class.hasClass)(node, animationName) && !!this.props.visible) {
                        animationType = 'leave';
                        (0, _class.removeClass)(node, leave);
                        (0, _class.removeClass)(node, leaveActive);
                    }
                    this.props.onEnd && this.props.onEnd(animationType);
                }
            } catch (err) {}
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

<<<<<<< HEAD
/***/ }),
/* 170 */
/***/ (function(module, exports) {
=======
            return children;
        }
    }]);
    return Animate;
}(_react2.default.PureComponent);
>>>>>>> upstream/master

exports.default = Animate;

Animate.defaultProps = {
    animationName: null,
    visible: false,
    onEnd: function onEnd() {}
};

/***/ }),
<<<<<<< HEAD
/* 171 */
=======
/* 172 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
<<<<<<< HEAD
var aFunction = __webpack_require__(74);
=======
var aFunction = __webpack_require__(76);
>>>>>>> upstream/master

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
<<<<<<< HEAD
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(50);
var TAG = __webpack_require__(16)('toStringTag');
=======
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(54);
var TAG = __webpack_require__(17)('toStringTag');
>>>>>>> upstream/master
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
<<<<<<< HEAD
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(74);
var SPECIES = __webpack_require__(16)('species');
=======
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(24);
var aFunction = __webpack_require__(76);
var SPECIES = __webpack_require__(17)('species');
>>>>>>> upstream/master
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
<<<<<<< HEAD
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(49);
var invoke = __webpack_require__(185);
var html = __webpack_require__(78);
var cel = __webpack_require__(51);
=======
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(53);
var invoke = __webpack_require__(186);
var html = __webpack_require__(80);
var cel = __webpack_require__(55);
>>>>>>> upstream/master
var global = __webpack_require__(11);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(54)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
<<<<<<< HEAD
/* 175 */
=======
/* 176 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
<<<<<<< HEAD
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isObject = __webpack_require__(18);
var newPromiseCapability = __webpack_require__(171);
=======
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var isObject = __webpack_require__(18);
var newPromiseCapability = __webpack_require__(172);
>>>>>>> upstream/master

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
<<<<<<< HEAD
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(178), __esModule: true };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(79);
__webpack_require__(179);
__webpack_require__(191);
__webpack_require__(192);
module.exports = __webpack_require__(8).Promise;


/***/ }),
/* 179 */
=======
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(81);
__webpack_require__(180);
__webpack_require__(191);
__webpack_require__(192);
module.exports = __webpack_require__(9).Promise;


/***/ }),
/* 180 */
>>>>>>> upstream/master
/***/ (function(module, exports, __webpack_require__) {

"use strict";

<<<<<<< HEAD
var LIBRARY = __webpack_require__(27);
var global = __webpack_require__(11);
var ctx = __webpack_require__(49);
var classof = __webpack_require__(172);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(18);
var aFunction = __webpack_require__(74);
var anInstance = __webpack_require__(180);
var forOf = __webpack_require__(181);
var speciesConstructor = __webpack_require__(173);
var task = __webpack_require__(174).set;
var microtask = __webpack_require__(186)();
var newPromiseCapabilityModule = __webpack_require__(171);
var perform = __webpack_require__(175);
var userAgent = __webpack_require__(187);
var promiseResolve = __webpack_require__(176);
=======
var LIBRARY = __webpack_require__(33);
var global = __webpack_require__(11);
var ctx = __webpack_require__(53);
var classof = __webpack_require__(173);
var $export = __webpack_require__(13);
var isObject = __webpack_require__(18);
var aFunction = __webpack_require__(76);
var anInstance = __webpack_require__(181);
var forOf = __webpack_require__(182);
var speciesConstructor = __webpack_require__(174);
var task = __webpack_require__(175).set;
var microtask = __webpack_require__(187)();
var newPromiseCapabilityModule = __webpack_require__(172);
var perform = __webpack_require__(176);
var promiseResolve = __webpack_require__(177);
>>>>>>> upstream/master
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
<<<<<<< HEAD
    var FakePromise = (promise.constructor = {})[__webpack_require__(16)('species')] = function (exec) {
=======
    var FakePromise = (promise.constructor = {})[__webpack_require__(17)('species')] = function (exec) {
>>>>>>> upstream/master
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(188)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(34)($Promise, PROMISE);
__webpack_require__(189)(PROMISE);
<<<<<<< HEAD
Wrapper = __webpack_require__(8)[PROMISE];
=======
Wrapper = __webpack_require__(9)[PROMISE];
>>>>>>> upstream/master

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(190)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
<<<<<<< HEAD
/* 180 */
=======
/* 181 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
<<<<<<< HEAD
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(49);
var call = __webpack_require__(182);
var isArrayIter = __webpack_require__(183);
var anObject = __webpack_require__(23);
var toLength = __webpack_require__(77);
var getIterFn = __webpack_require__(184);
=======
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(53);
var call = __webpack_require__(183);
var isArrayIter = __webpack_require__(184);
var anObject = __webpack_require__(24);
var toLength = __webpack_require__(79);
var getIterFn = __webpack_require__(185);
>>>>>>> upstream/master
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
<<<<<<< HEAD
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(23);
=======
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(24);
>>>>>>> upstream/master
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
<<<<<<< HEAD
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33);
var ITERATOR = __webpack_require__(16)('iterator');
=======
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(32);
var ITERATOR = __webpack_require__(17)('iterator');
>>>>>>> upstream/master
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
<<<<<<< HEAD
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(172);
var ITERATOR = __webpack_require__(16)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
=======
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(173);
var ITERATOR = __webpack_require__(17)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
>>>>>>> upstream/master
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
<<<<<<< HEAD
/* 185 */
=======
/* 186 */
>>>>>>> upstream/master
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
<<<<<<< HEAD
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var macrotask = __webpack_require__(174).set;
=======
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var macrotask = __webpack_require__(175).set;
>>>>>>> upstream/master
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(54)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
<<<<<<< HEAD
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(11);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
=======
>>>>>>> upstream/master
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(20);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(11);
<<<<<<< HEAD
var core = __webpack_require__(8);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(16)('species');
=======
var core = __webpack_require__(9);
var dP = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(15);
var SPECIES = __webpack_require__(17)('species');
>>>>>>> upstream/master

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
var ITERATOR = __webpack_require__(16)('iterator');
=======
var ITERATOR = __webpack_require__(17)('iterator');
>>>>>>> upstream/master
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(13);
var core = __webpack_require__(9);
var global = __webpack_require__(11);
<<<<<<< HEAD
var speciesConstructor = __webpack_require__(173);
var promiseResolve = __webpack_require__(176);
=======
var speciesConstructor = __webpack_require__(174);
var promiseResolve = __webpack_require__(177);
>>>>>>> upstream/master

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(13);
<<<<<<< HEAD
var newPromiseCapability = __webpack_require__(171);
var perform = __webpack_require__(175);
=======
var newPromiseCapability = __webpack_require__(172);
var perform = __webpack_require__(176);
>>>>>>> upstream/master

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);
=======
var _reactDom = __webpack_require__(19);
>>>>>>> upstream/master

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(194);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

<<<<<<< HEAD
var _promise = __webpack_require__(177);
=======
var _promise = __webpack_require__(178);
>>>>>>> upstream/master

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
var _reactDom = __webpack_require__(24);
=======
var _reactDom = __webpack_require__(19);
>>>>>>> upstream/master

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(195);

<<<<<<< HEAD
__webpack_require__(109);

var _zzcDesignMobile = __webpack_require__(110);
=======
__webpack_require__(111);

var _zzcDesignMobile = __webpack_require__(112);
>>>>>>> upstream/master

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClose = false;

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);
        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
    }

    (0, _createClass3.default)(App, [{
        key: 'defaultBtn',
        value: function defaultBtn() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                closable: true
            });
        }
    }, {
        key: 'titleAlert',
        value: function titleAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        return false;
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }],
                style: {
                    color: 'blue'
                },
                className: 'a233'
            });
        }
    }, {
        key: 'contentAlert',
        value: function contentAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                content: _react2.default.createElement(
                    'p',
                    null,
                    'asdadasdas'
                ),
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }]
            });
        }
    }, {
        key: 'doubleBtnAlert',
        value: function doubleBtnAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                content: _react2.default.createElement(
                    'p',
                    null,
                    'asdasdasdasd'
                ),
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }, {
                    text: '确认',
                    onPress: function onPress() {
                        console.log('点击确认');
                    },
                    props: {
                        type: 'main',
                        className: 'aaaa'
                    }

                }]
            });
        }
    }, {
        key: 'maskCloseAlert',
        value: function maskCloseAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                content: _react2.default.createElement(
                    'p',
                    null,
                    'asdasdasdasd'
                ),
                maskClose: true,
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }, {
                    text: '确认',
                    onPress: function onPress() {
                        console.log('点击确认');
                    },
                    props: {
                        type: 'main',
                        className: 'aaaa'
                    }

                }]
            });
        }
    }, {
        key: 'autoCloseAlert',
        value: function autoCloseAlert() {
            var closeEvent = (0, _zzcDesignMobile.Alert)({
                title: '标题',
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }]
            });

            setTimeout(function () {
                closeEvent();
            }, 2000);
        }
    }, {
        key: 'promiseAlert',
        value: function promiseAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '发起一个请求',
                maskClose: true,
                buttons: [{
                    text: '确认',
                    onPress: function onPress() {
                        return new _promise2.default(function (resolve) {
                            _zzcDesignMobile.Toast.info('onPress Promise', 1);
                            setTimeout(resolve, 1000);
                        });
                    },
                    props: {
                        type: 'main',
                        className: 'aaaa'
                    }

                }]
            });
        }
    }, {
        key: 'imgAlert',
        value: function imgAlert() {
            (0, _zzcDesignMobile.Alert)({
                title: '标题',
                content: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: 'http://imgcdn50.zuzuche.com/world/base/329/214/556/f89e270b09ef8651fa4fea12867543d5.jpg!/fw/150/quality/100/format/png' })
                ),
                closeCallback: function closeCallback() {
                    console.log('Alert关闭了');
                },
                buttons: [{
                    text: '取消',
                    onPress: function onPress() {
                        console.log('点击取消');
                    },
                    props: {
                        style: { color: '#254FCB' }
                    }
                }]
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'zzc-demo' },
                _react2.default.createElement(
                    'div',
                    { className: 'zzc-demo-header' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'zzc-demo-title' },
                        'Alert \u8B66\u544A\u5F39\u7A97'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'zzc-demo-body' },
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.defaultBtn },
                        '\u4F7F\u7528\u9ED8\u8BA4\u6309\u94AE'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.titleAlert },
                        '\u53EA\u6709\u6807\u9898\u7684Alert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.contentAlert },
                        '\u5E26\u6709\u5185\u5BB9\u7684Alert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.doubleBtnAlert },
                        '\u53CC\u6309\u94AEAlert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.maskCloseAlert },
                        '\u70B9\u51FBmask\u5173\u95EDAlert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.autoCloseAlert },
                        '2\u79D2\u540E\u81EA\u52A8\u5173\u95EDAlert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.promiseAlert },
                        '\u5EF6\u8FDF\u5173\u95EDAlert'
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: this.imgAlert },
                        '\u5E26\u56FE\u7247\u7684Alert'
                    )
                )
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=alert.js.map