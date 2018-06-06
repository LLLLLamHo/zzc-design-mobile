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
/******/ 	return __webpack_require__(__webpack_require__.s = 182);
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

var _defineProperty = __webpack_require__(57);

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

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(39);

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

var _setPrototypeOf = __webpack_require__(98);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(102);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(39);

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
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(57);

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
/* 9 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(7);
var ctx = __webpack_require__(47);
var hide = __webpack_require__(17);
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
    if (own && key in exports) continue;
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(37)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(9).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var IE8_DOM_DEFINE = __webpack_require__(51);
var toPrimitive = __webpack_require__(34);
var dP = Object.defineProperty;

exports.f = __webpack_require__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__(39);

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
function isDOM(s) {
    if ((typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object') {
        return s instanceof HTMLElement;
    }
    return s && (typeof s === 'undefined' ? 'undefined' : (0, _typeof3.default)(s)) === 'object' && s.nodeType === 1 && typeof s.nodeName === 'string';
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(54);
var defined = __webpack_require__(33);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(38);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(20);

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
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(21);
var dPs = __webpack_require__(78);
var enumBugKeys = __webpack_require__(38);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(49)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(74).appendChild(iframe);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(88);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(90);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(30);
var wksExt = __webpack_require__(40);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(64);

/***/ }),
/* 45 */
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

var _Animate = __webpack_require__(119);

var _Animate2 = _interopRequireDefault(_Animate);

var _class = __webpack_require__(43);

var _animateConfig = __webpack_require__(65);

var _animateConfig2 = _interopRequireDefault(_animateConfig);

__webpack_require__(120);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = function (_PureComponent) {
    (0, _inherits3.default)(Dialog, _PureComponent);

    function Dialog() {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).apply(this, arguments));

        _this2.state = {
            animationTypeList: _animateConfig2.default
        };
        return _this2;
    }
    // mask关闭事件


    (0, _createClass3.default)(Dialog, [{
        key: 'addMarkCloseEvent',
        value: function addMarkCloseEvent() {
            var _this = this;
            var closeCallback = this.props.closeCallback;

            if (!this.props.transparent && this.props.maskClose && this.mask) {
                var maskAnimation = _this.getAnimationClass(_this.props.maskTransitionName);
                var bodyAnimation = _this.getAnimationClass(_this.props.transitionName);
                this.mask.onclick = function () {
                    // 当没有配置动画点击mask关闭dialog，直接调用
                    if (maskAnimation) {
                        (0, _class.addClass)(_this.box, bodyAnimation.leave);
                        (0, _class.addClass)(_this.box, bodyAnimation.leaveActive);
                        (0, _class.addClass)(_this.mask, maskAnimation.leave);
                        (0, _class.addClass)(_this.mask, maskAnimation.leaveActive);
                    } else {
                        closeCallback && closeCallback();
                    }
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

            var _props = this.props,
                prefixCls = _props.prefixCls,
                transparent = _props.transparent,
                maskTransitionName = _props.maskTransitionName,
                closeCallback = _props.closeCallback,
                maskStyle = _props.maskStyle,
                maskClassName = _props.maskClassName,
                visible = _props.visible;

            var newMaskClassName = (0, _classnames2.default)(prefixCls + '-mask', maskClassName);
            if (!transparent) {
                if (maskTransitionName && maskTransitionName !== '') {
                    return _react2.default.createElement(
                        _Animate2.default,
                        { visible: visible, animationName: this.getAnimationClass(maskTransitionName), onEnd: function onEnd(type) {
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

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                visible = _props2.visible,
                transparent = _props2.transparent,
                boxClassName = _props2.boxClassName,
                style = _props2.style,
                transitionName = _props2.transitionName,
                maskTransitionName = _props2.maskTransitionName,
                children = _props2.children,
                title = _props2.title,
                footer = _props2.footer,
                closeCallback = _props2.closeCallback;

            var newBoxClassName = (0, _classnames2.default)(prefixCls + '-box', boxClassName);
            if (transitionName && transitionName !== '') {
                return _react2.default.createElement(
                    _Animate2.default,
                    { visible: visible, animationName: this.getAnimationClass(transitionName), onEnd: function onEnd(type) {
                            // 当选择不创建mask或者mask不使用动画的时候，body动画结束触发closeCallback
                            type === 'leave' && (transparent || maskTransitionName === '') && closeCallback && closeCallback();
                            type === 'enter' && _this4.addMarkCloseEvent();
                        } },
                    _react2.default.createElement(
                        'div',
                        { style: style, ref: function ref(_ref3) {
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
                { style: style, ref: function ref(_ref4) {
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
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                className = _props3.className;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('' + prefixCls, className) },
                this.createDialogMask(),
                this.createDialogBody()
            );
        }
    }]);
    return Dialog;
}(_react.PureComponent);

exports.default = Dialog;

Dialog.defaultProps = {
    prefixCls: 'zzc-dialog',
    className: '',
    maskClassName: '',
    boxClassName: '',
    maskTransitionName: '',
    transitionName: '',
    style: {},
    maskStyle: {},
    visible: false,
    closeCallback: function closeCallback() {},

    title: null,
    footer: null,
    maskClose: false,
    transparent: false
};

/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(70);
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
/* 48 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
var document = __webpack_require__(9).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(52);
var hide = __webpack_require__(17);
var has = __webpack_require__(14);
var Iterators = __webpack_require__(29);
var $iterCreate = __webpack_require__(77);
var setToStringTag = __webpack_require__(31);
var getPrototypeOf = __webpack_require__(55);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(13) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(49)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(79)(false);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(48);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(26);
var IE_PROTO = __webpack_require__(36)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(7);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(9);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(13);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(52);
var META = __webpack_require__(92).KEY;
var $fails = __webpack_require__(18);
var shared = __webpack_require__(37);
var setToStringTag = __webpack_require__(31);
var uid = __webpack_require__(25);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(40);
var wksDefine = __webpack_require__(41);
var enumKeys = __webpack_require__(93);
var isArray = __webpack_require__(94);
var anObject = __webpack_require__(21);
var isObject = __webpack_require__(16);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(34);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(95);
var $GOPD = __webpack_require__(60);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(23);
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
  __webpack_require__(59).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(30)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(53);
var hiddenKeys = __webpack_require__(38).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(24);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(34);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(51);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationEvents = exports.transitionEvents = undefined;

var _keys = __webpack_require__(62);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(108), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(28);

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

var _getOwnPropertySymbols = __webpack_require__(113);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _loadSprite = __webpack_require__(115);

var _loadSprite2 = _interopRequireDefault(_loadSprite);

__webpack_require__(116);

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
    prefixCls: 'zzc-icon',
    type: undefined,
    size: 'md',
    className: '',
    style: {}
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'zzc-slide-bottom': {
        enter: 'zzc-slide-bottom-enter',
        enterActive: 'zzc-slide-bottom-enter-active',
        leave: 'zzc-slide-bottom-leave',
        leaveActive: 'zzc-slide-bottom-leave-active'
    },
    'zzc-slide-top': {
        enter: 'zzc-slide-top-enter',
        enterActive: 'zzc-slide-top-enter-active',
        leave: 'zzc-slide-top-leave',
        leaveActive: 'zzc-slide-top-leave-active'
    },
    'zzc-slide-left': {
        enter: 'zzc-slide-left-enter',
        enterActive: 'zzc-slide-left-enter-active',
        leave: 'zzc-slide-left-leave',
        leaveActive: 'zzc-slide-left-leave-active'
    },
    'zzc-slide-right': {
        enter: 'zzc-slide-right-enter',
        enterActive: 'zzc-slide-right-enter-active',
        leave: 'zzc-slide-right-leave',
        leaveActive: 'zzc-slide-right-leave-active'
    },
    'zzc-zoom': {
        enter: 'zzc-zoom-enter',
        enterActive: 'zzc-zoom-enter-active',
        leave: 'zzc-zoom-leave',
        leaveActive: 'zzc-zoom-leave-active'
    },
    'zzc-fade': {
        enter: 'zzc-fade-enter',
        enterActive: 'zzc-fade-enter-active',
        leave: 'zzc-fade-leave',
        leaveActive: 'zzc-fade-leave-active'
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

var _TouchFeedback = __webpack_require__(121);

var _TouchFeedback2 = _interopRequireDefault(_TouchFeedback);

__webpack_require__(44);

__webpack_require__(123);

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
                _TouchFeedback2.default,
                { activeStyle: activeStyle ? activeStyle : {}, activeClassName: this.setActiveClassName(activeClassName, type, ghost), disabled: disabled },
                _react2.default.createElement(
                    'a',
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
    prefixCls: 'zzc-button',
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(20);

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

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _dialog = __webpack_require__(45);

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__(66);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(133);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_PureComponent) {
    (0, _inherits3.default)(Modal, _PureComponent);

    function Modal() {
        (0, _classCallCheck3.default)(this, Modal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));

        _this.state = {
            visible: _this.props.visible
        };
        return _this;
    }

    (0, _createClass3.default)(Modal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (this.state.visible !== newProps.visible) {
                this.setState({
                    visible: newProps.visible
                });
            }
        }
    }, {
        key: 'createAlertFooter',
        value: function createAlertFooter(closable, buttons) {
            var _this2 = this;

            if (closable) {
                return _react2.default.createElement(
                    _button2.default,
                    { noBorder: true, full: true, onClick: function onClick() {
                            _this2.close();
                        } },
                    '\u5173\u95ED'
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
            return _react2.default.cloneElement(_react2.default.createElement(
                _button2.default,
                { noBorder: true, full: true, onClick: function onClick(event) {
                        event.stopPropagation();
                        var res = onPress();
                        if (res && res.then) {
                            res.then(function () {
                                _this3.close();
                            }).catch(function () {});
                        } else {
                            _this3.close();
                        }
                    } },
                btn.text
            ), (0, _assign2.default)({}, btn.props));
        }
    }, {
        key: 'close',
        value: function close() {
            var _props = this.props,
                transitionName = _props.transitionName,
                maskTransitionName = _props.maskTransitionName,
                closeCallback = _props.closeCallback;
            // 当没有提供动画，无法触发动画事件触发外部传入的closeCallback，所以当没有动画则主动触发外部closeCallback

            if (transitionName === '' && maskTransitionName === '') {
                closeCallback && closeCallback();
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
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                buttons = _props2.buttons,
                closable = _props2.closable;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-footer') },
                this.createAlertFooter(closable, buttons)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                children = _props3.children,
                maskClose = _props3.maskClose,
                transitionName = _props3.transitionName,
                maskTransitionName = _props3.maskTransitionName,
                prefixCls = _props3.prefixCls,
                closeCallback = _props3.closeCallback,
                className = _props3.className,
                style = _props3.style,
                maskStyle = _props3.maskStyle,
                title = _props3.title,
                visible = _props3.visible,
                transparent = _props3.transparent;

            if (visible) {
                return _react2.default.createElement(
                    _dialog2.default,
                    { transparent: transparent, maskTransitionName: maskTransitionName, visible: this.state.visible, style: style, maskStyle: maskStyle, maskClose: maskClose, transitionName: transitionName, boxClassName: (0, _classnames2.default)(prefixCls + '-box', className), closeCallback: closeCallback, title: this.createTitle(title), footer: this.createFooter() },
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

Modal.defaultProps = {
    prefixCls: 'zzc-modal',
    maskTransitionName: 'zzc-fade',
    style: {},
    maskStyle: {},
    className: '',
    closable: false,
    closeCallback: function closeCallback() {},

    visible: false,
    title: '',
    transitionName: 'zzc-zoom',
    buttons: [],
    maskClose: false,
    transparent: false
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(20);

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

var _util = __webpack_require__(139);

var _config = __webpack_require__(69);

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
/* 69 */
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
/* 70 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(76)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(50)(String, 'String', function (iterated) {
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(9).document;
module.exports = document && document.documentElement;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
var global = __webpack_require__(9);
var hide = __webpack_require__(17);
var Iterators = __webpack_require__(29);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(33);
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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(31);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(17)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(21);
var getKeys = __webpack_require__(23);

module.exports = __webpack_require__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(73);
var toAbsoluteIndex = __webpack_require__(80);
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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(82);
var step = __webpack_require__(83);
var Iterators = __webpack_require__(29);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(50)(Array, 'Array', function (iterated, kind) {
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
/* 82 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
module.exports = __webpack_require__(7).Object.getPrototypeOf;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(26);
var $getPrototypeOf = __webpack_require__(55);

__webpack_require__(56)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(13), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(72);
__webpack_require__(75);
module.exports = __webpack_require__(40).f('iterator');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(71);
__webpack_require__(96);
__webpack_require__(97);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(25)('meta');
var isObject = __webpack_require__(16);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(18)(function () {
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(27);
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(48);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(59).f;
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('asyncIterator');


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('observable');


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
module.exports = __webpack_require__(7).Object.setPrototypeOf;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(10);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(101).set });


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(16);
var anObject = __webpack_require__(21);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(47)(Function.call, __webpack_require__(60).f(Object.prototype, '__proto__').set, 2);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
var $Object = __webpack_require__(7).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(35) });


/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Picker = exports.Tabs = exports.Popup = exports.Modal = exports.Alert = exports.Card = exports.Button = exports.Dialog = exports.Icon = exports.Toast = undefined;

var _toast = __webpack_require__(107);

Object.defineProperty(exports, 'Toast', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toast).default;
  }
});

var _icon = __webpack_require__(63);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _dialog = __webpack_require__(45);

Object.defineProperty(exports, 'Dialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_dialog).default;
  }
});

var _button = __webpack_require__(66);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_button).default;
  }
});

var _card = __webpack_require__(124);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_card).default;
  }
});

var _alert = __webpack_require__(132);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alert).default;
  }
});

var _modal = __webpack_require__(67);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _popup = __webpack_require__(135);

Object.defineProperty(exports, 'Popup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_popup).default;
  }
});

var _tabs = __webpack_require__(137);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _picker = __webpack_require__(146);

Object.defineProperty(exports, 'Picker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_picker).default;
  }
});

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 107 */
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

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _class = __webpack_require__(43);

var _Event = __webpack_require__(61);

var _icon = __webpack_require__(63);

var _icon2 = _interopRequireDefault(_icon);

var _alignment = __webpack_require__(117);

var _alignment2 = _interopRequireDefault(_alignment);

__webpack_require__(44);

__webpack_require__(118);

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

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109);
module.exports = __webpack_require__(7).Object.keys;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(26);
var $keys = __webpack_require__(23);

__webpack_require__(56)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
module.exports = __webpack_require__(7).Object.assign;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(112) });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(23);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(27);
var toObject = __webpack_require__(26);
var IObject = __webpack_require__(54);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function () {
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(7).Object.getOwnPropertySymbols;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(62);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* tslint:disable:max-line-length */
// inspried by https://github.com/kisenka/svg-sprite-loader/blob/master/runtime/browser-sprite.js
// Much simplified, do make sure run this after document ready
var svgSprite = function svgSprite(contents) {
    return '\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      xmlns:xlink="http://www.w3.org/1999/xlink"\n      id="__ZZC_MOBILE_SVG_SPRITE_NODE__"\n      style="position:absolute;width:0;height:0"\n    >\n      <defs>\n        ' + contents + '\n      </defs>\n    </svg>\n';
};
// both minified by https://github.com/svg/svgo
var icons = {
    'zzc-icon-loading': '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
    'zzc-icon-waring': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M23.5 12.25h5v18h-5zM23.5 34.75h5v5h-5z"/></svg>',
    'zzc-icon-error': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 50a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/><path d="M33.07 16.1L26 23.17l-7.07-7.07-2.83 2.83L23.17 26l-7.07 7.07 2.83 2.83L26 28.83l7.07 7.07 2.83-2.83L28.83 26l7.07-7.07-2.83-2.83z"/></svg>',
    'zzc-icon-success': '<svg viewBox="0 0 52 52"><path d="M26 0a26 26 0 1 0 26 26A26 26 0 0 0 26 0zm0 49a23 23 0 1 1 23-23 23 23 0 0 1-23 23z"/><path d="M19.99 32.67l-7.07-7.07-2.83 2.83 9.9 9.89L41.91 16.4l-2.83-2.82-19.09 19.09z"/></svg>'
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
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _typeof = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alignment = function () {
    function Alignment() {
        (0, _classCallCheck3.default)(this, Alignment);

        this.list = [];
    }

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

exports.default = Alignment;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
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

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _typeof = __webpack_require__(15);

var _Event = __webpack_require__(61);

var _class = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = function (_React$PureComponent) {
    (0, _inherits3.default)(Animate, _React$PureComponent);

    function Animate() {
        (0, _classCallCheck3.default)(this, Animate);
        return (0, _possibleConstructorReturn3.default)(this, (Animate.__proto__ || (0, _getPrototypeOf2.default)(Animate)).apply(this, arguments));
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
            this.runHookEvent(false);
        }
        // 执行触发钩子事件

    }, {
        key: 'runHookEvent',
        value: function runHookEvent(isFirst) {
            if (this.props.visible) {
                this.enterEvent();
            } else if (!isFirst) {
                this.leaveEvent();
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
            }
        }
        // 动画完成触发事件

    }, {
        key: 'animationEvent',
        value: function animationEvent(event) {
            event.stopPropagation();
            var animationName = this.props.animationName;
            var enter = animationName.enter,
                enterActive = animationName.enterActive;

            var node = _reactDom2.default.findDOMNode(this);
            if ((0, _typeof.isDOM)(node)) {
                var animationType = 'enter';
                // 当传入object会清楚enter钩子，如果只是传入一个字符串，会保留class直至关闭才去掉class
                if ((0, _typeof.isObject)(animationName)) {
                    if ((0, _class.hasClass)(node, enter)) {
                        (0, _class.removeClass)(node, enter);
                        (0, _class.removeClass)(node, enterActive);
                    } else {
                        animationType = 'leave';
                    }
                } else if ((0, _class.hasClass)(node, animationName) && !!this.props.visible) {
                    animationType = 'leave';
                }
                this.props.onEnd && this.props.onEnd(animationType);
            }
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

Animate.defaultProps = {
    animationName: null,
    visible: false,
    onEnd: function onEnd() {}
};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _assign = __webpack_require__(20);

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

var _classNames = __webpack_require__(122);

var _classNames2 = _interopRequireDefault(_classNames);

var _typeof = __webpack_require__(15);

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
/* 122 */
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
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

var _header = __webpack_require__(125);

var _header2 = _interopRequireDefault(_header);

var _body = __webpack_require__(127);

var _body2 = _interopRequireDefault(_body);

var _footer = __webpack_require__(129);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(44);

__webpack_require__(131);

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

exports.default = Card;

Card.defaultProps = {
    prefixCls: 'zzc-card',
    className: '',
    full: false,
    style: {}
};
Card.Header = _header2.default;
Card.Body = _body2.default;
Card.Footer = _footer2.default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

__webpack_require__(126);

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
    prefixCls: 'zzc-card-header',
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
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

__webpack_require__(128);

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
    prefixCls: 'zzc-card-body',
    className: '',
    children: null,
    full: false,
    noBorder: false,
    style: {},
    borderDirection: 'center'
};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

__webpack_require__(130);

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
    prefixCls: 'zzc-card-footer',
    className: '',
    children: null,
    noBorder: false,
    style: {}
};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(28);

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__(20);

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

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = __webpack_require__(67);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function () {
    function Alert(opt) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Alert);

        var defaultPorps = {
            prefixCls: 'zzc-alert',
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
            (0, _extends3.default)({ transitionName: 'zzc-zoom', visible: true }, this.opt, { title: this.createTitle(title, prefixCls, content), closeCallback: function closeCallback() {
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
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(28);

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

var _dialog = __webpack_require__(45);

var _dialog2 = _interopRequireDefault(_dialog);

var _animateConfig = __webpack_require__(65);

var _animateConfig2 = _interopRequireDefault(_animateConfig);

__webpack_require__(136);

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
            var animation = this.state.animationTypeList['zzc-slide-' + direction];
            if (animation) {
                return animation;
            }
            return direction ? direction : null;
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
                    (0, _extends3.default)({ maskTransitionName: 'zzc-fade', transitionName: this.getAnimationClass(direction), prefixCls: prefixCls, boxClassName: prefixCls + '-' + direction, visible: visible, closeCallback: function closeCallback() {
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
    prefixCls: 'zzc-popup',
    visible: false,
    style: {},
    maskStyle: {},
    maskClose: false,
    onClose: function onClose() {},

    transparent: false,
    direction: 'bottom'
};

/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(28);

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

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _tabBar = __webpack_require__(138);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _tabContent = __webpack_require__(143);

var _tabContent2 = _interopRequireDefault(_tabContent);

var _typeof = __webpack_require__(15);

__webpack_require__(145);

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
    prefixCls: 'zzc-tabs',
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

var _classnames2 = __webpack_require__(6);

var _classnames3 = _interopRequireDefault(_classnames2);

var _Gesture = __webpack_require__(68);

var _Gesture2 = _interopRequireDefault(_Gesture);

var _tabList = __webpack_require__(140);

var _tabList2 = _interopRequireDefault(_tabList);

var _util = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabBar = function (_React$PureComponent) {
    (0, _inherits3.default)(TabBar, _React$PureComponent);

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
/* 139 */
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

var _config = __webpack_require__(69);

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

var _classnames3 = __webpack_require__(6);

var _classnames4 = _interopRequireDefault(_classnames3);

var _tabItem = __webpack_require__(141);

var _tabItem2 = _interopRequireDefault(_tabItem);

var _tabsListUnserline = __webpack_require__(142);

var _tabsListUnserline2 = _interopRequireDefault(_tabsListUnserline);

var _util = __webpack_require__(46);

var _typeof = __webpack_require__(15);

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
                return _react2.default.createElement(_tabItem2.default, { key: 'zzc-tabitem-' + key, itemKey: 'zzc-tab-' + key, className: _this2.setTabIsActive(prefixCls, currIndex, key), clickEvent: function clickEvent() {
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

exports.default = TabsList;

/***/ }),
/* 141 */
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

    return _react2.default.createElement(
        'div',
        { key: itemKey, className: className, style: style, onClick: function onClick() {
                clickEvent();
            } },
        _react2.default.isValidElement(item) ? item : item.title
    );
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(8);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(20);

var _assign2 = _interopRequireDefault(_assign);

exports.default = TabsListUnserlineProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(6);

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = __webpack_require__(8);

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

var _classnames2 = __webpack_require__(6);

var _classnames3 = _interopRequireDefault(_classnames2);

var _tabPane = __webpack_require__(144);

var _tabPane2 = _interopRequireDefault(_tabPane);

var _Gesture = __webpack_require__(68);

var _Gesture2 = _interopRequireDefault(_Gesture);

var _util = __webpack_require__(46);

var _typeof = __webpack_require__(15);

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
                            { prefixCls: prefixCls, key: 'tabspane-' + key + '-' + new Date().getTime(), itemKey: 'zzc-tabs-content-item-' + key + '-' + new Date().getTime() },
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
        }
    }, {
        key: 'setLayout',
        value: function setLayout(div) {
            this.layout = div;
        }
    }, {
        key: 'render',
        value: function render() {
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
/* 144 */
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
/* 145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = __webpack_require__(147);

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

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _pickerWrapper = __webpack_require__(149);

var _pickerWrapper2 = _interopRequireDefault(_pickerWrapper);

var _typeof = __webpack_require__(15);

__webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picker = function (_React$Component) {
    (0, _inherits3.default)(Picker, _React$Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.BScrollList = [];
        _this.initBScrollCallback = _this.initBScrollCallback.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextState, nextProps) {
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
        value: function initBScrollCallback(BScrollObj) {
            this.BScrollList.push(BScrollObj);
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
                return _react2.default.createElement(_pickerWrapper2.default, { key: timestamp + '-' + key + '-cm', wrapperIndex: key, wrapperKey: timestamp + '-' + key + '-node', data: item, prefixCls: prefixCls, initBScrollCallback: _this2.initBScrollCallback, onTouchStart: onTouchStart, onTouchEnd: onTouchEnd });
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
    prefixCls: 'zzc-picker',
    className: '',
    style: {},
    pickerData: [],
    scrollData: []
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 149 */
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

var _betterScroll = __webpack_require__(150);

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

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
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                data = _props.data;

            var wrapperNode = this.wrapper ? _reactDom2.default.findDOMNode(this.wrapper) : null;
            if (wrapperNode) {
                this.BScrollObj = new _betterScroll2.default(wrapperNode, {
                    wheel: {
                        selectedIndex: data.selectIndex ? data.selectIndex : 0,
                        rotate: 25,
                        adjustTime: 400,
                        wheelWrapperClass: prefixCls + '-ws',
                        wheelItemClass: prefixCls + '-wi'
                    }
                });
                this.BScrollObj.on('beforeScrollStart', this.touchStart);
                this.BScrollObj.on('scrollEnd', this.touchEnd);
                this.BScrollObj.on('scrollCancel', this.touchEnd);
                this.addActiveItem();
                this.props.initBScrollCallback(this.BScrollObj);
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
            this.addActiveItem();
            this.props.onTouchEnd && this.props.onTouchEnd(this.props.wrapperIndex, this.BScrollObj.getSelectedIndex());
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
            var _this2 = this;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                data = _props3.data,
                wrapperKey = _props3.wrapperKey;

            var ulCls = (0, _classnames2.default)(data.className, prefixCls + '-ws');
            return _react2.default.createElement(
                'div',
                { key: wrapperKey, className: prefixCls + '-wrapper wrapper', ref: function ref(refs) {
                        _this2.getWrapper(refs);
                    } },
                _react2.default.createElement(
                    'ul',
                    { className: ulCls, ref: function ref(refs) {
                            _this2.getWheelScroll(refs);
                        } },
                    this.renderItem()
                )
            );
        }
    }]);
    return PickerWrapper;
}(_react2.default.PureComponent);

exports.default = PickerWrapper;

PickerWrapper.defaultProps = {
    prefixCls: 'zzc-picker',
    wrapperKey: '',
    data: []
};

/***/ }),
/* 150 */
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

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

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

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

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

function initMixin(BScroll) {
  BScroll.prototype._init = function (el, options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

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

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

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

    if (this.options.wheel) {
      this.target = e.target;
    }

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

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

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

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

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

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

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
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

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

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

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
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && el.className !== this.options.wheel.wheelItemClass) {
      return;
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

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = Math.round(pos.top / this.itemHeight) * this.itemHeight;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

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

    this.scrollTo(x, y, time, easeing);

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

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

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

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
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
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
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

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

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

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

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

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

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

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

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

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

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
/* 151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(183);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 183 */
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

var _zzcDesignMobile = __webpack_require__(106);

__webpack_require__(184);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = {
            visible: false,
            visible2: false,
            visible3: false,
            visible4: false,
            visible5: false,
            visible6: false,
            visible7: false
        };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'openDefaultDialog',
        value: function openDefaultDialog() {
            this.setState({
                visible: true
            });
        }
    }, {
        key: 'openDialog',
        value: function openDialog() {
            this.setState({
                visible2: true
            });
        }
    }, {
        key: 'openNoMaskDialog',
        value: function openNoMaskDialog() {
            this.setState({
                visible5: true
            });
        }
    }, {
        key: 'openAnDialog',
        value: function openAnDialog() {
            this.setState({
                visible3: true,
                visible4: true
            });
        }
    }, {
        key: 'openCustomAnDialog',
        value: function openCustomAnDialog() {
            this.setState({
                visible6: true,
                visible7: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'zzc-demo' },
                _react2.default.createElement(
                    'div',
                    { className: 'zzc-demo-header' },
                    _react2.default.createElement(
                        'h1',
                        { className: 'zzc-demo-title' },
                        'Dialog \u5BF9\u8BDD\u6846'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'zzc-demo-body' },
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: function onClick() {
                                _this2.openDefaultDialog();
                            } },
                        '\u9ED8\u8BA4dialog'
                    ),
                    this.state.visible && _react2.default.createElement(
                        _zzcDesignMobile.Dialog,
                        {
                            visible: this.state.visible,
                            maskClose: true,
                            closeCallback: function closeCallback() {
                                _this2.setState({ visible: false });
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-text' },
                            '\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...'
                        )
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: function onClick() {
                                _this2.openDialog();
                            } },
                        '\u5E26title\u548Cfooter\u7684dialog'
                    ),
                    this.state.visible2 && _react2.default.createElement(
                        _zzcDesignMobile.Dialog,
                        {
                            title: _react2.default.createElement(
                                'div',
                                null,
                                '123123123'
                            ),
                            footer: _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _zzcDesignMobile.Button,
                                    { onClick: function onClick() {
                                            _this2.setState({ visible2: false });
                                        } },
                                    '\u5173\u95ED'
                                )
                            ),
                            visible: this.state.visible2,
                            closeCallback: function closeCallback() {
                                _this2.setState({ visible2: false });
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-text' },
                            '...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...'
                        )
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: function onClick() {
                                _this2.openNoMaskDialog();
                            } },
                        '\u900F\u660E\u80CC\u666F\u7684dialog'
                    ),
                    this.state.visible5 && _react2.default.createElement(
                        _zzcDesignMobile.Dialog,
                        {
                            title: _react2.default.createElement(
                                'div',
                                null,
                                '123123123'
                            ),
                            className: 'black',
                            transparent: true,
                            footer: _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _zzcDesignMobile.Button,
                                    { onClick: function onClick() {
                                            _this2.setState({ visible5: false });
                                        } },
                                    '\u5173\u95ED'
                                )
                            ),
                            visible: this.state.visible5,
                            closeCallback: function closeCallback() {
                                _this2.setState({ visible5: false });
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-text' },
                            '...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...'
                        )
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: function onClick() {
                                _this2.openAnDialog();
                            } },
                        '\u5E26\u52A8\u753B\u7684dialog'
                    ),
                    this.state.visible4 && _react2.default.createElement(
                        _zzcDesignMobile.Dialog,
                        {
                            maskTransitionName: 'zzc-fade',
                            transitionName: 'zzc-zoom',
                            maskClose: true,
                            title: _react2.default.createElement(
                                'div',
                                null,
                                '123123123'
                            ),
                            footer: _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _zzcDesignMobile.Button,
                                    { onClick: function onClick() {
                                            _this2.setState({ visible3: false });
                                        } },
                                    '\u5173\u95ED'
                                )
                            ),
                            visible: this.state.visible3,
                            closeCallback: function closeCallback() {
                                _this2.setState({ visible4: false });
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-text' },
                            '...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...'
                        )
                    ),
                    _react2.default.createElement(
                        _zzcDesignMobile.Button,
                        { onClick: function onClick() {
                                _this2.openCustomAnDialog();
                            } },
                        '\u5E26\u81EA\u5B9A\u4E49\u52A8\u753B\u7684dialog'
                    ),
                    this.state.visible6 && _react2.default.createElement(
                        _zzcDesignMobile.Dialog,
                        {
                            maskTransitionName: 'zzc-fade',
                            transitionName: 'custom-an',
                            className: 'custom-dialog',
                            maskClose: true,
                            title: _react2.default.createElement(
                                'div',
                                null,
                                '\u81EA\u5B9A\u4E49\u52A8\u753B'
                            ),
                            footer: _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    _zzcDesignMobile.Button,
                                    { onClick: function onClick() {
                                            _this2.setState({ visible7: false });
                                        } },
                                    '\u5173\u95ED'
                                )
                            ),
                            visible: this.state.visible7,
                            closeCallback: function closeCallback() {
                                _this2.setState({ visible6: false });
                            }
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-text' },
                            '...\u8FD9\u662F\u4E00\u4E2A\u6587\u6848...'
                        )
                    )
                )
            );
        }
    }]);
    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=dialog.js.map