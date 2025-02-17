(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["VictoryChart"] = factory(require("react"));
	else
		root["VictoryChart"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/assign.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 49),
    copyObject = __webpack_require__(/*! ./_copyObject */ 156),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 157),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 34),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 89),
    keys = __webpack_require__(/*! ./keys */ 17);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 2 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/prop-types/index.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ 160)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ 163)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 36)))

/***/ }),
/* 3 */
/*!********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/helpers.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick__ = __webpack_require__(/*! lodash/pick */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_property__ = __webpack_require__(/*! lodash/property */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);






/* eslint-disable func-style */

/* eslint-disable no-use-before-define */


// Private Functions
function getCartesianRange(props, axis) {
  // determine how to lay the axis and what direction positive and negative are
  var vertical = axis !== "x";
  var padding = getPadding(props);

  if (vertical) {
    return [props.height - padding.bottom, padding.top];
  }

  return [padding.left, props.width - padding.right];
}

function getPolarRange(props, axis) {
  if (axis === "x") {
    var startAngle = degreesToRadians(props.startAngle || 0);
    var endAngle = degreesToRadians(props.endAngle || 360);
    return [startAngle, endAngle];
  }

  return [props.innerRadius || 0, getRadius(props)];
} // Exported Functions

/**
 * creates an object with some keys excluded
 * replacement for lodash.omit for performance. does not mimick the entire lodash.omit api
 * @param {Object} originalObject: created object will be based on this object
 * @param {Array<String>} keys: an array of keys to omit from the new object
 * @returns {Object} new object with same properties as originalObject
 */


function omit(originalObject) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // code based on babel's _objectWithoutProperties
  var newObject = {};

  for (var key in originalObject) {
    if (keys.indexOf(key) >= 0) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(originalObject, key)) {
      continue;
    }

    newObject[key] = originalObject[key];
  }

  return newObject;
}

function getPoint(datum) {
  var exists = function (val) {
    return val !== undefined;
  };

  var _x = datum._x,
      _x1 = datum._x1,
      _x0 = datum._x0,
      _voronoiX = datum._voronoiX,
      _y = datum._y,
      _y1 = datum._y1,
      _y0 = datum._y0,
      _voronoiY = datum._voronoiY;
  var defaultX = exists(_x1) ? _x1 : _x;
  var defaultY = exists(_y1) ? _y1 : _y;
  var point = {
    x: exists(_voronoiX) ? _voronoiX : defaultX,
    x0: exists(_x0) ? _x0 : _x,
    y: exists(_voronoiY) ? _voronoiY : defaultY,
    y0: exists(_y0) ? _y0 : _y
  };
  return __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()({}, point, datum);
}

function scalePoint(props, datum) {
  var scale = props.scale,
      polar = props.polar,
      horizontal = props.horizontal;
  var d = getPoint(datum);
  var origin = props.origin || {
    x: 0,
    y: 0
  };
  var x = horizontal ? scale.y(d.y) : scale.x(d.x);
  var x0 = horizontal ? scale.y(d.y0) : scale.x(d.x0);
  var y = horizontal ? scale.x(d.x) : scale.y(d.y);
  var y0 = horizontal ? scale.x(d.x0) : scale.y(d.y0);
  return {
    x: polar ? y * Math.cos(x) + origin.x : x,
    x0: polar ? y0 * Math.cos(x0) + origin.x : x0,
    y: polar ? -y * Math.sin(x) + origin.y : y,
    y0: polar ? -y0 * Math.sin(x0) + origin.x : y0
  };
}

function getPadding(props) {
  var padding = props.padding;
  var paddingVal = typeof padding === "number" ? padding : 0;
  var paddingObj = typeof padding === "object" ? padding : {};
  return {
    top: paddingObj.top || paddingVal,
    bottom: paddingObj.bottom || paddingVal,
    left: paddingObj.left || paddingVal,
    right: paddingObj.right || paddingVal
  };
}

function getStyles(style, defaultStyles) {
  var width = "100%";
  var height = "100%";

  if (!style) {
    return __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()({
      parent: {
        height: height,
        width: width
      }
    }, defaultStyles);
  }

  var data = style.data,
      labels = style.labels,
      parent = style.parent;
  var defaultParent = defaultStyles && defaultStyles.parent || {};
  var defaultLabels = defaultStyles && defaultStyles.labels || {};
  var defaultData = defaultStyles && defaultStyles.data || {};
  return {
    parent: __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()({}, parent, defaultParent, {
      width: width,
      height: height
    }),
    labels: __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()({}, labels, defaultLabels),
    data: __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()({}, data, defaultData)
  };
}

function evaluateProp(prop, props) {
  return __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(prop) ? prop(props) : prop;
}

function evaluateStyle(style, props) {
  if (!style || !Object.keys(style).some(function (value) {
    return __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(style[value]);
  })) {
    return style;
  }

  return Object.keys(style).reduce(function (prev, curr) {
    prev[curr] = evaluateProp(style[curr], props);
    return prev;
  }, {});
}

function degreesToRadians(degrees) {
  return typeof degrees === "number" ? degrees * (Math.PI / 180) : degrees;
}

function radiansToDegrees(radians) {
  return typeof radians === "number" ? radians / (Math.PI / 180) : radians;
}

function getRadius(props) {
  var _getPadding = getPadding(props),
      left = _getPadding.left,
      right = _getPadding.right,
      top = _getPadding.top,
      bottom = _getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
}

function getPolarOrigin(props) {
  var width = props.width,
      height = props.height;

  var _getPadding2 = getPadding(props),
      top = _getPadding2.top,
      bottom = _getPadding2.bottom,
      left = _getPadding2.left,
      right = _getPadding2.right;

  var radius = Math.min(width - left - right, height - top - bottom) / 2;
  var offsetWidth = width / 2 + left - right;
  var offsetHeight = height / 2 + top - bottom;
  return {
    x: offsetWidth + radius > width ? radius + left - right : offsetWidth,
    y: offsetHeight + radius > height ? radius + top - bottom : offsetHeight
  };
}

function getRange(props, axis) {
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  return props.polar ? getPolarRange(props, axis) : getCartesianRange(props, axis);
}

function createAccessor(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(key)) {
    return key;
  } else if (key === null || key === undefined) {
    // null/undefined means "return the data item itself"
    return function (x) {
      return x;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return __WEBPACK_IMPORTED_MODULE_2_lodash_property___default()(key);
}

function modifyProps(props, fallbackProps, role) {
  var theme = props.theme && props.theme[role] ? props.theme[role] : {};
  var themeProps = omit(theme, ["style"]);
  var horizontal = isHorizontal(props);
  var defaultObject = horizontal === undefined ? {} : {
    horizontal: horizontal
  };
  return __WEBPACK_IMPORTED_MODULE_4_lodash_defaults___default()(defaultObject, props, themeProps, fallbackProps);
}
/**
 * Returns the given axis or the opposite axis when horizontal
 * @param {string} axis: the given axis, either "x" pr "y"
 * @param {Boolean} horizontal: true when the chart is flipped to the horizontal orientation
 * @returns {String} the dimension appropriate for the axis given its props "x" or "y"
 */


function getCurrentAxis(axis, horizontal) {
  var otherAxis = axis === "x" ? "y" : "x";
  return horizontal ? otherAxis : axis;
}
/**
 * @param {Array} children: an array of child components
 * @param {Function} iteratee: a function with arguments "child", "childName", and "parent"
 * @param {Object} parentProps: props from the parent that are applied to children
 * @param {any}  initialMemo: The object in which the iteration results are combined.
 * @param {Function} combine: Combines the result of the iteratee with the current memo
 *   to the memo for the next iteration step
 * @returns {Array} returns an array of results from calling the iteratee on all nested children
 */

/* eslint-disable max-params */


function reduceChildren(children, iteratee) {
  var parentProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var initialMemo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var combine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (memo, item) {
    return memo.concat(item);
  };
  var sharedProps = ["data", "domain", "categories", "polar", "startAngle", "endAngle", "minDomain", "maxDomain", "horizontal"];

  var traverseChildren = function (childArray, names, parent) {
    return childArray.reduce(function (memo, child, index) {
      var childRole = child.type && child.type.role;
      var childName = child.props.name || "".concat(childRole, "-").concat(names[index]);

      if (child.props && child.props.children) {
        var childProps = __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, child.props, __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(parentProps, sharedProps));

        var nestedChildren = child.type && __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(child.type.getChildren) ? child.type.getChildren(childProps) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(child.props.children).map(function (c) {
          var nestedChildProps = __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, c.props, __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(childProps, sharedProps));

          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(c, nestedChildProps);
        });

        var _childNames = nestedChildren.map(function (c, i) {
          return "".concat(childName, "-").concat(i);
        });

        var nestedResults = traverseChildren(nestedChildren, _childNames, child);
        memo = combine(memo, nestedResults);
      } else {
        var result = iteratee(child, childName, parent);

        if (result) {
          memo = combine(memo, result);
        }
      }

      return memo;
    }, initialMemo);
  };

  var childNames = children.map(function (c, i) {
    return i;
  });
  return traverseChildren(children, childNames);
}
/**
 * @param {Object} props: the props object
 * @returns {Boolean} returns true if the props object contains `horizontal: true` of if any
 * children or nested children are hoizontal
 */


function isHorizontal(props) {
  if (props.horizontal !== undefined || !props.children) {
    return props.horizontal;
  }

  var traverseChildren = function (childArray) {
    return childArray.reduce(function (memo, child) {
      var childProps = child.props || {};

      if (memo || childProps.horizontal || !childProps.children) {
        memo = memo || childProps.horizontal;
        return memo;
      }

      return traverseChildren(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(childProps.children));
    }, false);
  };

  return traverseChildren(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(props.children));
}

/* harmony default export */ __webpack_exports__["a"] = ({
  omit: omit,
  getPoint: getPoint,
  scalePoint: scalePoint,
  getPadding: getPadding,
  getStyles: getStyles,
  evaluateProp: evaluateProp,
  evaluateStyle: evaluateStyle,
  degreesToRadians: degreesToRadians,
  radiansToDegrees: radiansToDegrees,
  getRadius: getRadius,
  getPolarOrigin: getPolarOrigin,
  getRange: getRange,
  createAccessor: createAccessor,
  modifyProps: modifyProps,
  getCurrentAxis: getCurrentAxis,
  reduceChildren: reduceChildren,
  isHorizontal: isHorizontal
});

/***/ }),
/* 4 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/defaults.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 51),
    eq = __webpack_require__(/*! ./eq */ 35),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 52),
    keysIn = __webpack_require__(/*! ./keysIn */ 159);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 5 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/interval.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 6 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isFunction.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 48),
    isObject = __webpack_require__(/*! ./isObject */ 11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 7 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isArray.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 8 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/index.js ***!
  \******************************************************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/*! exports used: ascending, bisect, bisector, quantile, range, tickIncrement, tickStep, ticks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(/*! ./bisect */ 124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__bisect__["a"]; });
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(/*! ./ascending */ 23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector__ = __webpack_require__(/*! ./bisector */ 125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cross__ = __webpack_require__(/*! ./cross */ 267);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descending__ = __webpack_require__(/*! ./descending */ 268);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation__ = __webpack_require__(/*! ./deviation */ 127);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent__ = __webpack_require__(/*! ./extent */ 129);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histogram__ = __webpack_require__(/*! ./histogram */ 269);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold_freedmanDiaconis__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ 272);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__threshold_scott__ = __webpack_require__(/*! ./threshold/scott */ 273);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_sturges__ = __webpack_require__(/*! ./threshold/sturges */ 133);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max__ = __webpack_require__(/*! ./max */ 274);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mean__ = __webpack_require__(/*! ./mean */ 275);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__median__ = __webpack_require__(/*! ./median */ 276);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__merge__ = __webpack_require__(/*! ./merge */ 277);
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__min__ = __webpack_require__(/*! ./min */ 134);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pairs__ = __webpack_require__(/*! ./pairs */ 126);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permute__ = __webpack_require__(/*! ./permute */ 278);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quantile__ = __webpack_require__(/*! ./quantile */ 79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__range__ = __webpack_require__(/*! ./range */ 131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_19__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scan__ = __webpack_require__(/*! ./scan */ 279);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shuffle__ = __webpack_require__(/*! ./shuffle */ 280);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sum__ = __webpack_require__(/*! ./sum */ 281);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ticks__ = __webpack_require__(/*! ./ticks */ 132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_23__ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transpose__ = __webpack_require__(/*! ./transpose */ 135);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variance__ = __webpack_require__(/*! ./variance */ 128);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zip__ = __webpack_require__(/*! ./zip */ 282);
/* unused harmony reexport zip */





























/***/ }),
/* 9 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/duration.js ***!
  \********************************************************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/*! exports used: durationDay, durationHour, durationMinute, durationSecond, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 10 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isEmpty.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ 153),
    getTag = __webpack_require__(/*! ./_getTag */ 86),
    isArguments = __webpack_require__(/*! ./isArguments */ 47),
    isArray = __webpack_require__(/*! ./isArray */ 7),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 34),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 88),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 89),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 90);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 11 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isObject.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/index.js ***!
  \******************************************************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/*! exports used: color, cubehelix, hcl, hsl, lab, rgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color__ = __webpack_require__(/*! ./color */ 64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lab__ = __webpack_require__(/*! ./lab */ 207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lab__["b"]; });
/* unused harmony reexport lch */
/* unused harmony reexport gray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubehelix__ = __webpack_require__(/*! ./cubehelix */ 208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__cubehelix__["a"]; });





/***/ }),
/* 13 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/collection.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
function isNonEmptyArray(collection) {
  return Array.isArray(collection) && collection.length > 0;
}

function containsStrings(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "string";
  });
}

function containsDates(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return value instanceof Date;
  });
}

function containsNumbers(collection) {
  return Array.isArray(collection) && collection.some(function (value) {
    return typeof value === "number";
  });
}

function containsOnlyStrings(collection) {
  return isNonEmptyArray(collection) && collection.every(function (value) {
    return typeof value === "string";
  });
}

function isArrayOfArrays(collection) {
  return isNonEmptyArray(collection) && collection.every(Array.isArray);
}

function removeUndefined(arr) {
  return arr.filter(function (el) {
    return el !== undefined;
  });
}

function getMaxValue(arr) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.max.apply(Math, _toConsumableArray(array))) : Math.max.apply(Math, _toConsumableArray(array));
}

function getMinValue(arr) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  var array = arr.concat(values);
  return containsDates(array) ? new Date(Math.min.apply(Math, _toConsumableArray(array))) : Math.min.apply(Math, _toConsumableArray(array));
}

/* harmony default export */ __webpack_exports__["a"] = ({
  containsDates: containsDates,
  containsNumbers: containsNumbers,
  containsOnlyStrings: containsOnlyStrings,
  containsStrings: containsStrings,
  getMaxValue: getMaxValue,
  getMinValue: getMinValue,
  isArrayOfArrays: isArrayOfArrays,
  removeUndefined: removeUndefined
});

/***/ }),
/* 14 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: VictoryAnimation, VictoryContainer, VictoryLabel, VictoryTransition, VictoryClipContainer, VictoryTheme, VictoryPortal, Portal, Arc, Border, Box, ClipPath, LineSegment, Point, Whisker, addEvents, Collection, Data, DefaultTransitions, Domain, Events, Helpers, Immutable, LabelHelpers, Log, PropTypes, Scale, Selection, Style, TextSize, Timer, Transitions, Rect, Path, Line, Circle, TSpan, Text, CommonProps, Wrapper, Axis */
/*! exports used: Arc, Axis, CommonProps, Events, Helpers, LabelHelpers, LineSegment, PropTypes, Scale, TextSize, Timer, VictoryContainer, VictoryLabel, VictoryTheme, Wrapper, addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__victory_animation_victory_animation__ = __webpack_require__(/*! ./victory-animation/victory-animation */ 93);
/* unused harmony reexport VictoryAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__victory_container_victory_container__ = __webpack_require__(/*! ./victory-container/victory-container */ 225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_1__victory_container_victory_container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__victory_label_victory_label__ = __webpack_require__(/*! ./victory-label/victory-label */ 242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__victory_label_victory_label__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_transition_victory_transition__ = __webpack_require__(/*! ./victory-transition/victory-transition */ 118);
/* unused harmony reexport VictoryTransition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_clip_container_victory_clip_container__ = __webpack_require__(/*! ./victory-clip-container/victory-clip-container */ 243);
/* unused harmony reexport VictoryClipContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__victory_theme_victory_theme__ = __webpack_require__(/*! ./victory-theme/victory-theme */ 244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__victory_theme_victory_theme__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__victory_portal_victory_portal__ = __webpack_require__(/*! ./victory-portal/victory-portal */ 114);
/* unused harmony reexport VictoryPortal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__victory_portal_portal__ = __webpack_require__(/*! ./victory-portal/portal */ 112);
/* unused harmony reexport Portal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__victory_primitives_arc__ = __webpack_require__(/*! ./victory-primitives/arc */ 247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__victory_primitives_arc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__victory_primitives_border__ = __webpack_require__(/*! ./victory-primitives/border */ 248);
/* unused harmony reexport Border */
/* unused harmony reexport Box */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__victory_primitives_clip_path__ = __webpack_require__(/*! ./victory-primitives/clip-path */ 119);
/* unused harmony reexport ClipPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__victory_primitives_line_segment__ = __webpack_require__(/*! ./victory-primitives/line-segment */ 249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_11__victory_primitives_line_segment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__victory_primitives_point__ = __webpack_require__(/*! ./victory-primitives/point */ 250);
/* unused harmony reexport Point */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__victory_primitives_whisker__ = __webpack_require__(/*! ./victory-primitives/whisker */ 254);
/* unused harmony reexport Whisker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__victory_util_add_events__ = __webpack_require__(/*! ./victory-util/add-events */ 255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_14__victory_util_add_events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__victory_util_collection__ = __webpack_require__(/*! ./victory-util/collection */ 13);
/* unused harmony reexport Collection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__victory_util_data__ = __webpack_require__(/*! ./victory-util/data */ 78);
/* unused harmony reexport Data */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__victory_util_default_transitions__ = __webpack_require__(/*! ./victory-util/default-transitions */ 330);
/* unused harmony reexport DefaultTransitions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__victory_util_domain__ = __webpack_require__(/*! ./victory-util/domain */ 85);
/* unused harmony reexport Domain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__victory_util_events__ = __webpack_require__(/*! ./victory-util/events */ 77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_19__victory_util_events__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__victory_util_helpers__ = __webpack_require__(/*! ./victory-util/helpers */ 3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_20__victory_util_helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__victory_util_immutable__ = __webpack_require__(/*! ./victory-util/immutable */ 147);
/* unused harmony reexport Immutable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__victory_util_label_helpers__ = __webpack_require__(/*! ./victory-util/label-helpers */ 115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_22__victory_util_label_helpers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__victory_util_log__ = __webpack_require__(/*! ./victory-util/log */ 42);
/* unused harmony reexport Log */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__victory_util_prop_types__ = __webpack_require__(/*! ./victory-util/prop-types */ 21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_24__victory_util_prop_types__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__victory_util_scale__ = __webpack_require__(/*! ./victory-util/scale */ 44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_25__victory_util_scale__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__victory_util_selection__ = __webpack_require__(/*! ./victory-util/selection */ 333);
/* unused harmony reexport Selection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__victory_util_style__ = __webpack_require__(/*! ./victory-util/style */ 70);
/* unused harmony reexport Style */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__victory_util_textsize__ = __webpack_require__(/*! ./victory-util/textsize */ 334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_28__victory_util_textsize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__victory_util_timer__ = __webpack_require__(/*! ./victory-util/timer */ 41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_29__victory_util_timer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__victory_util_transitions__ = __webpack_require__(/*! ./victory-util/transitions */ 71);
/* unused harmony reexport Transitions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__victory_primitives_rect__ = __webpack_require__(/*! ./victory-primitives/rect */ 72);
/* unused harmony reexport Rect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__victory_primitives_path__ = __webpack_require__(/*! ./victory-primitives/path */ 73);
/* unused harmony reexport Path */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__victory_primitives_line__ = __webpack_require__(/*! ./victory-primitives/line */ 74);
/* unused harmony reexport Line */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__victory_primitives_circle__ = __webpack_require__(/*! ./victory-primitives/circle */ 120);
/* unused harmony reexport Circle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__victory_primitives_tspan__ = __webpack_require__(/*! ./victory-primitives/tspan */ 116);
/* unused harmony reexport TSpan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__victory_primitives_text__ = __webpack_require__(/*! ./victory-primitives/text */ 117);
/* unused harmony reexport Text */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__victory_util_common_props__ = __webpack_require__(/*! ./victory-util/common-props */ 22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_37__victory_util_common_props__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__victory_util_wrapper__ = __webpack_require__(/*! ./victory-util/wrapper */ 335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_38__victory_util_wrapper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__victory_util_axis__ = __webpack_require__(/*! ./victory-util/axis */ 150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_39__victory_util_axis__["a"]; });









































/***/ }),
/* 15 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/array.js ***!
  \******************************************************************************/
/*! exports provided: map, slice */
/*! exports used: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 16 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/identity.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 17 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/keys.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 33);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 18 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIteratee.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ 177),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 191),
    identity = __webpack_require__(/*! ./identity */ 16),
    isArray = __webpack_require__(/*! ./isArray */ 7),
    property = __webpack_require__(/*! ./property */ 61);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 19 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/index.js ***!
  \************************************************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/*! exports used: interpolate, interpolateCubehelixLong, interpolateNumber, interpolateRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(/*! ./value */ 63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(/*! ./array */ 106);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basis__ = __webpack_require__(/*! ./basis */ 66);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basisClosed__ = __webpack_require__(/*! ./basisClosed */ 104);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date__ = __webpack_require__(/*! ./date */ 107);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discrete__ = __webpack_require__(/*! ./discrete */ 209);
/* unused harmony reexport interpolateDiscrete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hue__ = __webpack_require__(/*! ./hue */ 210);
/* unused harmony reexport interpolateHue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__number__ = __webpack_require__(/*! ./number */ 40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object__ = __webpack_require__(/*! ./object */ 108);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__round__ = __webpack_require__(/*! ./round */ 211);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__string__ = __webpack_require__(/*! ./string */ 109);
/* unused harmony reexport interpolateString */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transform_index__ = __webpack_require__(/*! ./transform/index */ 212);
/* unused harmony reexport interpolateTransformCss */
/* unused harmony reexport interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__zoom__ = __webpack_require__(/*! ./zoom */ 215);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rgb__ = __webpack_require__(/*! ./rgb */ 103);
/* unused harmony reexport interpolateRgb */
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hsl__ = __webpack_require__(/*! ./hsl */ 216);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lab__ = __webpack_require__(/*! ./lab */ 217);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hcl__ = __webpack_require__(/*! ./hcl */ 218);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cubehelix__ = __webpack_require__(/*! ./cubehelix */ 219);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_17__cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__piecewise__ = __webpack_require__(/*! ./piecewise */ 220);
/* unused harmony reexport piecewise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quantize__ = __webpack_require__(/*! ./quantize */ 221);
/* unused harmony reexport quantize */






















/***/ }),
/* 20 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/color.js ***!
  \************************************************************************************/
/*! exports provided: hue, gamma, default */
/*! exports used: default, gamma, hue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(/*! ./constant */ 105);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 21 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/prop-types.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isRegExp__ = __webpack_require__(/*! lodash/isRegExp */ 226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find__ = __webpack_require__(/*! lodash/find */ 230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__log__ = __webpack_require__(/*! ./log */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Return a new validator based on `validator` but with the option to chain
 * `isRequired` onto the validation. This is nearly identical to how React
 * does it internally, but they don't expose their helper for us to use.
 * @param {Function} validator Validation function.
 * @returns {Function} Validator with `isRequired` option.
 */

var makeChainable = function (validator) {
  /* eslint-disable max-params */
  var _chainable = function (isRequired, props, propName, componentName) {
    var value = props[propName];

    if (value === undefined || value === null) {
      if (isRequired) {
        return new Error("Required `".concat(propName, "` was not specified in `").concat(componentName, "`."));
      }

      return null;
    }

    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    return validator.apply(void 0, [props, propName, componentName].concat(rest));
  };

  var chainable = _chainable.bind(null, false);

  chainable.isRequired = _chainable.bind(null, true);
  return chainable;
};

var nullConstructor = function () {
  return null;
};

var undefinedConstructor = function () {
  return undefined;
};
/**
 * Get the constructor of `value`. If `value` is null or undefined, return the
 * special singletons `nullConstructor` or `undefinedConstructor`, respectively.
 * @param {*} value Instance to return the constructor of.
 * @returns {Function} Constructor of `value`.
 */


var getConstructor = function (value) {
  if (value === undefined) {
    return undefinedConstructor;
  } else if (value === null) {
    return nullConstructor;
  } else {
    return value.constructor;
  }
};
/**
 * Get the name of the constructor used to create `value`, using
 * `Object.protoype.toString`. If the value is null or undefined, return
 * "null" or "undefined", respectively.
 * @param {*} value Instance to return the constructor name of.
 * @returns {String} Name of the constructor.
 */


var getConstructorName = function (value) {
  if (value === undefined) {
    return "undefined";
  } else if (value === null) {
    return "null";
  }

  return Object.prototype.toString.call(value).slice(8, -1); // eslint-disable-line no-magic-numbers
};

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * Return a new validator based on `propType` but which logs a `console.error`
   * with `explanation` if used.
   * @param {Function} propType The old, deprecated propType.
   * @param {String} explanation The message to provide the user of the deprecated propType.
   * @returns {Function} Validator which logs usage of this propType
   */
  deprecated: function (propType, explanation) {
    return function (props, propName, componentName) {
      var value = props[propName];

      if (value !== null && value !== undefined) {
        __WEBPACK_IMPORTED_MODULE_3__log__["a" /* default */].warn("\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated ").concat(explanation));
      }

      return __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.checkPropTypes(_defineProperty({}, propName, propType), props, propName, componentName);
    };
  },

  /**
   * Return a new validator which returns true
   * if and only if all validators passed as arguments return true.
   * Like React.propTypes.oneOfType, except "all" instead of "any"
   * @param {Array} validators Validation functions.
   * @returns {Function} Combined validator function
   */
  allOfType: function (validators) {
    return makeChainable(function (props, propName, componentName) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        rest[_key2 - 3] = arguments[_key2];
      }

      return validators.reduce(function (result, validator) {
        return result || validator.apply(void 0, [props, propName, componentName].concat(rest));
      }, undefined);
    });
  },

  /**
   * Check that the value is a non-negative number.
   */
  nonNegative: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value < 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a non-negative number."));
    }

    return undefined;
  }),

  /**
   * Check that the value is an integer.
   */
  integer: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value % 1 !== 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an integer."));
    }

    return undefined;
  }),

  /**
   * Check that the value is greater than zero.
   */
  greaterThanZero: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (typeof value !== "number" || value <= 0) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a number greater than zero."));
    }

    return undefined;
  }),

  /**
   * Check that the value is an Array of two unique values.
   */
  domain: makeChainable(function (props, propName, componentName) {
    var value = props[propName];

    if (!Array.isArray(value) || value.length !== 2 || value[1] === value[0]) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array of two unique numeric values."));
    }

    return undefined;
  }),

  /**
   * Check that the value looks like a d3 `scale` function.
   */
  scale: makeChainable(function (props, propName, componentName) {
    var supportedScaleStrings = ["linear", "time", "log", "sqrt"];

    var validScale = function (scl) {
      if (__WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default()(scl)) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default()(scl.copy) && __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default()(scl.domain) && __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default()(scl.range);
      } else if (typeof scl === "string") {
        return supportedScaleStrings.indexOf(scl) !== -1;
      }

      return false;
    };

    var value = props[propName];

    if (!validScale(value)) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a d3 scale."));
    }

    return undefined;
  }),

  /**
   * Check that an array contains items of the same type.
   */
  homogeneousArray: makeChainable(function (props, propName, componentName) {
    var values = props[propName];

    if (!Array.isArray(values)) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be an array."));
    }

    if (values.length < 2) {
      return undefined;
    }

    var comparisonConstructor = getConstructor(values[0]);

    var typeMismatchedValue = __WEBPACK_IMPORTED_MODULE_1_lodash_find___default()(values, function (value) {
      return comparisonConstructor !== getConstructor(value);
    });

    if (typeMismatchedValue) {
      var constructorName = getConstructorName(values[0]);
      var otherConstructorName = getConstructorName(typeMismatchedValue);
      return new Error("Expected `".concat(propName, "` in `").concat(componentName, "` to be a ") + "homogeneous array, but found types `".concat(constructorName, "` and ") + "`".concat(otherConstructorName, "`."));
    }

    return undefined;
  }),

  /**
   * Check that array prop length matches props.data.length
   */
  matchDataLength: makeChainable(function (props, propName) {
    if (props[propName] && Array.isArray(props[propName]) && props[propName].length !== props.data.length) {
      return new Error("Length of data and ".concat(propName, " arrays must match."));
    }

    return undefined;
  }),

  /**
   * Check that the value is a regular expression
   */
  regExp: makeChainable(function (props, propName, componentName) {
    if (props[propName] && !__WEBPACK_IMPORTED_MODULE_0_lodash_isRegExp___default()(props[propName])) {
      return new Error("`".concat(propName, "` in `").concat(componentName, "` must be a regular expression."));
    }

    return undefined;
  })
});

/***/ }),
/* 22 */
/*!*************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/common-props.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prop_types__ = __webpack_require__(/*! ./prop-types */ 21);


var dataProps = {
  categories: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string),
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)
  })]),
  data: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object]),
  dataComponent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.element,
  labelComponent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.element,
  labels: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array]),
  samples: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative,
  sortKey: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)]),
  sortOrder: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["ascending", "descending"]),
  style: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    parent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    data: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
    labels: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
  }),
  x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)]),
  y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)]),
  y0: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string)])
};
var baseProps = {
  animate: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object]),
  containerComponent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.element,
  domain: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain,
    y: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain
  })]),
  maxDomain: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date)]),
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date)])
  })]),
  minDomain: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date)]),
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.instanceOf(Date)])
  })]),
  domainPadding: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number)]),
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number)])
  }), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number)]),
  eventKey: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
  events: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    target: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["data", "labels", "parent"]),
    eventKey: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
    eventHandlers: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object
  })),
  externalEventMutations: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    callback: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.function,
    childName: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array]),
    eventKey: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].allOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].integer, __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative]), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
    mutation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.function,
    target: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array])
  })),
  groupComponent: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.element,
  height: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative,
  name: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  origin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
  }),
  padding: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    top: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    left: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
  })]),
  polar: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  range: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain,
    y: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].domain
  })]),
  scale: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale,
    y: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale
  })]),
  sharedEvents: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    events: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array,
    getEventState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func
  }),
  singleQuadrantDomainPadding: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool]),
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool])
  })]),
  standalone: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  theme: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  width: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].nonNegative
};
var primitiveProps = {
  active: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  clipPath: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  data: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object]),
  desc: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),
  events: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  id: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
  index: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string]),
  origin: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
  }),
  polar: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  scale: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale,
    y: __WEBPACK_IMPORTED_MODULE_1__prop_types__["a" /* default */].scale
  })]),
  shapeRendering: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  style: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.object,
  tabIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func]),
  transform: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = ({
  baseProps: baseProps,
  dataProps: dataProps,
  primitiveProps: primitiveProps
});

/***/ }),
/* 23 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/ascending.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 24 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arrayMap.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 25 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isSymbol.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 26 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_toKey.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 27 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isPlainObject.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 48),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ 206),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 38);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 28 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/react-fast-compare/index.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),
/* 29 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/includes.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 58);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 30 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/number.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 31 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/linear.js ***!
  \*******************************************************************************/
/*! exports provided: linearish, default */
/*! exports used: default, linearish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(/*! ./continuous */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(/*! ./tickFormat */ 290);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* ticks */])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["f" /* tickIncrement */])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 32 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/colors.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),
/* 33 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_overArg.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 34 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isArrayLike.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 6),
    isLength = __webpack_require__(/*! ./isLength */ 87);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 35 */
/*!*********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/eq.js ***!
  \*********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 36 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/process/browser.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 37 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_assocIndexOf.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 35);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 38 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isObjectLike.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 39 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_castPath.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 7),
    isKey = __webpack_require__(/*! ./_isKey */ 60),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 193),
    toString = __webpack_require__(/*! ./toString */ 97);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 40 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/number.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 41 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/timer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_timer__ = __webpack_require__(/*! d3-timer */ 222);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Timer =
/*#__PURE__*/
function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.shouldAnimate = true;
    this.subscribers = [];
    this.loop = this.loop.bind(this);
    this.timer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_timer__["b" /* timer */])(this.loop);
  }

  _createClass(Timer, [{
    key: "bypassAnimation",
    value: function bypassAnimation() {
      this.shouldAnimate = false;
    }
  }, {
    key: "resumeAnimation",
    value: function resumeAnimation() {
      this.shouldAnimate = true;
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (s) {
        s.callback(Object(__WEBPACK_IMPORTED_MODULE_0_d3_timer__["a" /* now */])() - s.startTime, s.duration);
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.timer.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.timer.stop();
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, duration) {
      duration = this.shouldAnimate ? duration : 0;
      return this.subscribers.push({
        startTime: Object(__WEBPACK_IMPORTED_MODULE_0_d3_timer__["a" /* now */])(),
        callback: callback,
        duration: duration
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      if (id !== null) {
        delete this.subscribers[id - 1];
      }
    }
  }]);

  return Timer;
}();



/***/ }),
/* 42 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/log.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* global console */

/* eslint-disable no-console */
// TODO: Use "warning" npm module like React is switching to.
/* harmony default export */ __webpack_exports__["a"] = ({
  warn: function (message) {
    if (process.env.NODE_ENV !== "production") {
      if (console && console.warn) {
        console.warn(message);
      }
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ 36)))

/***/ }),
/* 43 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/uniq.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ 123);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 44 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/scale.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject__ = __webpack_require__(/*! lodash/isPlainObject */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_includes__ = __webpack_require__(/*! lodash/includes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__(/*! ./helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__collection__ = __webpack_require__(/*! ./collection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3_scale__ = __webpack_require__(/*! d3-scale */ 265);






var supportedScaleStrings = ["linear", "time", "log", "sqrt"]; // Private Functions

function toNewName(scale) {
  // d3 scale changed the naming scheme for scale from "linear" -> "scaleLinear" etc.
  var capitalize = function (s) {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  return "scale".concat(capitalize(scale));
}

function validScale(scale) {
  if (typeof scale === "function") {
    return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(scale.copy) && __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(scale.domain) && __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(scale.range);
  } else if (typeof scale === "string") {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_includes___default()(supportedScaleStrings, scale);
  }

  return false;
}

function isScaleDefined(props, axis) {
  if (!props.scale) {
    return false;
  } else if (props.scale.x || props.scale.y) {
    return props.scale[axis] ? true : false;
  }

  return true;
}

function getScaleTypeFromProps(props, axis) {
  if (!isScaleDefined(props, axis)) {
    return undefined;
  }

  var scale = props.scale[axis] || props.scale;
  return typeof scale === "string" ? scale : getType(scale);
}

function getScaleFromDomain(props, axis) {
  var domain;

  if (props.domain && props.domain[axis]) {
    domain = props.domain[axis];
  } else if (props.domain && Array.isArray(props.domain)) {
    domain = props.domain;
  }

  if (!domain) {
    return undefined;
  }

  return __WEBPACK_IMPORTED_MODULE_4__collection__["a" /* default */].containsDates(domain) ? "time" : "linear";
}

function getScaleTypeFromData(props, axis) {
  if (!props.data) {
    return "linear";
  }

  var accessor = __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* default */].createAccessor(props[axis]);
  var axisData = props.data.map(function (datum) {
    var processedData = __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject___default()(accessor(datum)) ? accessor(datum)[axis] : accessor(datum);
    return processedData !== undefined ? processedData : datum[axis];
  });
  return __WEBPACK_IMPORTED_MODULE_4__collection__["a" /* default */].containsDates(axisData) ? "time" : "linear";
} // Exported Functions


function getScaleFromName(name) {
  return validScale(name) ? __WEBPACK_IMPORTED_MODULE_5_d3_scale__[toNewName(name)]() : __WEBPACK_IMPORTED_MODULE_5_d3_scale__["scaleLinear"]();
}

function getBaseScale(props, axis) {
  var scale = getScaleFromProps(props, axis);

  if (scale) {
    return typeof scale === "string" ? getScaleFromName(scale) : scale;
  }

  var defaultScale = getScaleFromDomain(props, axis) || getScaleTypeFromData(props, axis);
  return __WEBPACK_IMPORTED_MODULE_5_d3_scale__[toNewName(defaultScale)]();
}

function getDefaultScale() {
  return __WEBPACK_IMPORTED_MODULE_5_d3_scale__["scaleLinear"]();
}

function getScaleFromProps(props, axis) {
  if (!isScaleDefined(props, axis)) {
    return undefined;
  }

  var scale = props.scale[axis] || props.scale;

  if (validScale(scale)) {
    return __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(scale) ? scale : __WEBPACK_IMPORTED_MODULE_5_d3_scale__[toNewName(scale)]();
  }

  return undefined;
}

function getScaleType(props, axis) {
  // if the scale was not given in props, it will be set to linear or time depending on data
  return getScaleTypeFromProps(props, axis) || getScaleTypeFromData(props, axis);
}

function getType(scale) {
  if (typeof scale === "string") {
    return scale;
  }

  var duckTypes = [{
    name: "log",
    method: "base"
  }, {
    name: "ordinal",
    method: "unknown"
  }, {
    name: "pow-sqrt",
    method: "exponent"
  }, {
    name: "quantile",
    method: "quantiles"
  }, {
    name: "quantize-threshold",
    method: "invertExtent"
  }];
  var scaleType = duckTypes.filter(function (type) {
    return scale[type.method] !== undefined;
  })[0];
  return scaleType ? scaleType.name : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getBaseScale: getBaseScale,
  getDefaultScale: getDefaultScale,
  getScaleFromProps: getScaleFromProps,
  getScaleType: getScaleType,
  getType: getType,
  getScaleFromName: getScaleFromName
});

/***/ }),
/* 45 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/continuous.js ***!
  \***********************************************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/*! exports used: copy, default, deinterpolateLinear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(/*! ./array */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(/*! ./constant */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(/*! ./number */ 137);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 46 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/exponent.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(/*! ./formatDecimal */ 82);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 47 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isArguments.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 48 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseGetTag.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 49 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_assignValue.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 50),
    eq = __webpack_require__(/*! ./eq */ 35);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 50 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseAssignValue.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 154);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 51 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseRest.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 16),
    overRest = __webpack_require__(/*! ./_overRest */ 91),
    setToString = __webpack_require__(/*! ./_setToString */ 92);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 52 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isIterateeCall.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 53 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 54 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/orderBy.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__(/*! ./_baseOrderBy */ 176),
    isArray = __webpack_require__(/*! ./isArray */ 7);

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),
/* 55 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIsEqual.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 184),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 38);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 56 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_SetCache.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 7);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 57 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_cacheHas.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 58);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 58 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIndexOf.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 59 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseGet.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 39),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 60 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isKey.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 7),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 61 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/property.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ 200),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 201),
    isKey = __webpack_require__(/*! ./_isKey */ 60),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 62 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseUnary.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 63 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/value.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(/*! ./rgb */ 103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(/*! ./array */ 106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(/*! ./date */ 107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(/*! ./number */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(/*! ./object */ 108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(/*! ./string */ 109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(/*! ./constant */ 105);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 64 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/color.js ***!
  \******************************************************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/*! exports used: Color, Rgb, brighter, darker, default, hsl, rgb, rgbConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(/*! ./define */ 65);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: function() {
    return this.rgb().hex();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: function() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 65 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/define.js ***!
  \*******************************************************************************/
/*! exports provided: default, extend */
/*! exports used: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 66 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/basis.js ***!
  \************************************************************************************/
/*! exports provided: basis, default */
/*! exports used: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 67 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-timer/src/timer.js ***!
  \******************************************************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/*! exports used: Timer, now, timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 68 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/pick.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ 236),
    flatRest = __webpack_require__(/*! ./_flatRest */ 238);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 69 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/flatten.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ 239);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 70 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/style.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Given an object with CSS/SVG transform definitions, return the string value
 * for use with the `transform` CSS property or SVG attribute. Note that we
 * can't always guarantee the order will match the author's intended order, so
 * authors should only use the object notation if they know that their transform
 * is commutative or that there is only one.
 * @param {Object} obj An object of transform definitions.
 * @returns {String} The generated transform string.
 */
var toTransformString = function (obj) {
  for (var _len = arguments.length, more = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    more[_key - 1] = arguments[_key];
  }

  if (more.length > 0) {
    return more.reduce(function (memo, currentObj) {
      return [memo, toTransformString(currentObj)].join(" ");
    }, toTransformString(obj)).trim();
  } else {
    if (obj === undefined || obj === null || typeof obj === "string") {
      return obj;
    }

    var transforms = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var value = obj[key];
        transforms.push("".concat(key, "(").concat(value, ")"));
      }
    }

    return transforms.join(" ").trim();
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  toTransformString: toTransformString,

  /**
   * Given the name of a color scale, getColorScale will return an array
   * of 5 hex string values in that color scale. If no 'name' parameter
   * is given, it will return the Victory default grayscale.
   * @param {String} name The name of the color scale to return (optional).
   * @returns {Array} An array of 5 hex string values composing a color scale.
   */
  getColorScale: function (name) {
    var scales = {
      grayscale: ["#cccccc", "#969696", "#636363", "#252525"],
      qualitative: ["#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "#DF5A49", "#4F7DA1", "#55DBC1", "#EFDA97", "#E2A37F", "#DF948A"],
      heatmap: ["#428517", "#77D200", "#D6D305", "#EC8E19", "#C92B05"],
      warm: ["#940031", "#C43343", "#DC5429", "#FF821D", "#FFAF55"],
      cool: ["#2746B9", "#0B69D4", "#2794DB", "#31BB76", "#60E83B"],
      red: ["#FCAE91", "#FB6A4A", "#DE2D26", "#A50F15", "#750B0E"],
      blue: ["#002C61", "#004B8F", "#006BC9", "#3795E5", "#65B4F4"],
      green: ["#354722", "#466631", "#649146", "#8AB25C", "#A9C97E"]
    };
    return name ? scales[name] : scales.grayscale;
  }
});

/***/ }),
/* 71 */
/*!************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/transitions.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_identity__ = __webpack_require__(/*! lodash/identity */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);





function getDatumKey(datum, idx) {
  return (datum.key || idx).toString();
}

function getKeyedData(data) {
  return data.reduce(function (keyedData, datum, idx) {
    var key = getDatumKey(datum, idx);
    keyedData[key] = datum;
    return keyedData;
  }, {});
}

function getKeyedDataDifference(a, b) {
  var hasDifference = false;
  var difference = Object.keys(a).reduce(function (_difference, key) {
    if (!(key in b)) {
      hasDifference = true;
      _difference[key] = true;
    }

    return _difference;
  }, {});
  return hasDifference && difference;
}
/**
 * Calculate which data-points exist in oldData and not nextData -
 * these are the `exiting` data-points.  Also calculate which
 * data-points exist in nextData and not oldData - these are the
 * `entering` data-points.
 *
 * @param  {Array} oldData   this.props.data Array
 * @param  {Array} nextData  this.props.data Array
 *
 * @return {Object}          Object with `entering` and `exiting` properties.
 *                           entering[datum.key] will be true if the data is
 *                           entering, and similarly for `exiting`.
 */


function getNodeTransitions(oldData, nextData) {
  var oldDataKeyed = oldData && getKeyedData(oldData);
  var nextDataKeyed = nextData && getKeyedData(nextData);
  return {
    entering: oldDataKeyed && getKeyedDataDifference(nextDataKeyed, oldDataKeyed),
    exiting: nextDataKeyed && getKeyedDataDifference(oldDataKeyed, nextDataKeyed)
  };
}

function getChildData(child) {
  if (child.type && child.type.getData) {
    return child.type.getData(child.props);
  }

  return child.props && child.props.data || false;
}
/**
 * If a parent component has animation enabled, calculate the transitions
 * for any data of any child component that supports data transitions
 * Data transitions are defined as any two datasets where data nodes exist
 * in the first set and not the second, in the second and not the first,
 * or both.
 *
 * @param  {Children}  oldChildren   this.props.children from old props
 * @param  {Children}  nextChildren  this.props.children from next props
 *
 * @return {Object}                  Object with the following properties:
 *                                    - nodesWillExit
 *                                    - nodesWillEnter
 *                                    - childrenTransitions
 *                                    - nodesShouldEnter
 */


function getInitialTransitionState(oldChildren, nextChildren) {
  var nodesWillExit = false;
  var nodesWillEnter = false;

  var getTransition = function (oldChild, newChild) {
    if (!newChild || oldChild.type !== newChild.type) {
      return {};
    }

    var _ref = getNodeTransitions(getChildData(oldChild), getChildData(newChild)) || {},
        entering = _ref.entering,
        exiting = _ref.exiting;

    nodesWillExit = nodesWillExit || !!exiting;
    nodesWillEnter = nodesWillEnter || !!entering;
    return {
      entering: entering || false,
      exiting: exiting || false
    };
  };

  var getTransitionsFromChildren = function (old, next) {
    return old.map(function (child, idx) {
      if (child && child.props && child.props.children && next[idx]) {
        return getTransitionsFromChildren(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(old[idx].props.children), __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(next[idx].props.children));
      } // get Transition entering and exiting nodes


      return getTransition(child, next[idx]);
    });
  };

  var childrenTransitions = getTransitionsFromChildren(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(oldChildren), __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.toArray(nextChildren));
  return {
    nodesWillExit: nodesWillExit,
    nodesWillEnter: nodesWillEnter,
    childrenTransitions: childrenTransitions,
    // TODO: This may need to be refactored for the following situation.
    //       The component receives new props, and the data provided
    //       is a perfect match for the previous data and domain except
    //       for new nodes. In this case, we wouldn't want a delay before
    //       the new nodes appear.
    nodesShouldEnter: false
  };
}

function getInitialChildProps(animate, data) {
  var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a;
  return {
    data: data.map(function (datum, idx) {
      return __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, after(datum, idx, data));
    })
  };
} // eslint-disable-next-line max-params


function getChildBeforeLoad(animate, child, data, cb) {
  animate = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var before = animate.onLoad && animate.onLoad.before ? animate.onLoad.before : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a; // If nodes need to exit, transform them with the provided onLoad.before function.

  data = data.map(function (datum, idx) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, before(datum, idx, data));
  });
  return {
    animate: animate,
    data: data,
    clipWidth: 0
  };
} // eslint-disable-next-line max-params


function getChildOnLoad(animate, data, cb) {
  animate = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, {
    onEnd: cb
  });

  if (animate && animate.onLoad && !animate.onLoad.duration) {
    return {
      animate: animate,
      data: data
    };
  }

  var after = animate.onLoad && animate.onLoad.after ? animate.onLoad.after : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a; // If nodes need to exit, transform them with the provided onLoad.after function.

  data = data.map(function (datum, idx) {
    return __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, after(datum, idx, data));
  });
  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnExit(animate, child, data, exitingNodes, cb) {
  // Whether or not _this_ child has exiting nodes, we want the exit-
  // transition for all children to have the same duration, delay, etc.
  var onExit = animate && animate.onExit;
  animate = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, onExit);

  if (exitingNodes) {
    // After the exit transition occurs, trigger the animations for
    // nodes that are neither exiting or entering.
    animate.onEnd = cb;
    var before = animate.onExit && animate.onExit.before ? animate.onExit.before : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a; // If nodes need to exit, transform them with the provided onExit.before function.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return exitingNodes[key] ? __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params,max-len


function getChildPropsBeforeEnter(animate, child, data, enteringNodes, cb) {
  if (enteringNodes) {
    // Perform a normal animation here, except - when it finishes - trigger
    // the transition for entering nodes.
    animate = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, {
      onEnd: cb
    });
    var before = animate.onEnter && animate.onEnter.before ? animate.onEnter.before : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a; // We want the entering nodes to be included in the transition target
    // domain.  However, we may not want these nodes to be displayed initially,
    // so perform the `onEnter.before` transformation on each node.

    data = data.map(function (datum, idx) {
      var key = (datum.key || idx).toString();
      return enteringNodes[key] ? __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, before(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
} // eslint-disable-next-line max-params, max-len


function getChildPropsOnEnter(animate, data, enteringNodes, cb) {
  // Whether or not _this_ child has entering nodes, we want the entering-
  // transition for all children to have the same duration, delay, etc.
  var onEnter = animate && animate.onEnter;
  animate = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, onEnter);

  if (enteringNodes) {
    // Old nodes have been transitioned to their new values, and the
    // domain should encompass the nodes that will now enter. So perform
    // the `onEnter.after` transformation on each node.
    animate.onEnd = cb;
    var after = animate.onEnter && animate.onEnter.after ? animate.onEnter.after : __WEBPACK_IMPORTED_MODULE_0_lodash_identity___default.a;
    data = data.map(function (datum, idx) {
      var key = getDatumKey(datum, idx);
      return enteringNodes[key] ? __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, datum, after(datum, idx, data)) : datum;
    });
  }

  return {
    animate: animate,
    data: data
  };
}
/**
 * getTransitionPropsFactory - putting the Java in JavaScript.  This will return a
 * function that returns prop transformations for a child, given that child's props
 * and its index in the parent's children array.
 *
 * In particular, this will include an `animate` object that is set appropriately
 * so that each child will be synchoronized for each stage of a transition
 * animation.  It will also include a transformed `data` object, where each datum
 * is transformed by `animate.onExit` and `animate.onEnter` `before` and `after`
 * functions.
 *
 * @param  {Object}  props       `this.props` for the parent component.
 * @param  {Object} state        `this.state` for the parent component.
 * @param  {Function} setState    Function that, when called, will `this.setState` on
 *                                 the parent component with the provided object.
 *
 * @return {Function}              Child-prop transformation function.
 */


function getTransitionPropsFactory(props, state, setState) {
  var nodesWillExit = state && state.nodesWillExit;
  var nodesWillEnter = state && state.nodesWillEnter;
  var nodesShouldEnter = state && state.nodesShouldEnter;
  var nodesShouldLoad = state && state.nodesShouldLoad;
  var nodesDoneLoad = state && state.nodesDoneLoad;
  var childrenTransitions = state && state.childrenTransitions || [];
  var transitionDurations = {
    enter: props.animate && props.animate.onEnter && props.animate.onEnter.duration,
    exit: props.animate && props.animate.onExit && props.animate.onExit.duration,
    load: props.animate && props.animate.onLoad && props.animate.onLoad.duration,
    move: props.animate && props.animate.duration
  };

  var onLoad = function (child, data, animate) {
    if (nodesShouldLoad) {
      return getChildOnLoad(animate, data, function () {
        setState({
          nodesShouldLoad: false,
          nodesDoneLoad: true
        });
      });
    }

    return getChildBeforeLoad(animate, child, data, function () {
      setState({
        nodesDoneLoad: true
      });
    });
  }; // eslint-disable-next-line max-params


  var onExit = function (nodes, child, data, animate) {
    return getChildPropsOnExit(animate, child, data, nodes, function () {
      setState({
        nodesWillExit: false
      });
    });
  }; // eslint-disable-next-line max-params


  var onEnter = function (nodes, child, data, animate) {
    if (nodesShouldEnter) {
      return getChildPropsOnEnter(animate, data, nodes, function () {
        setState({
          nodesWillEnter: false
        });
      });
    }

    return getChildPropsBeforeEnter(animate, child, data, nodes, function () {
      setState({
        nodesShouldEnter: true
      });
    });
  };

  var getChildTransitionDuration = function (child, type) {
    var animate = child.props.animate;

    if (!child.type) {
      return {};
    }

    var defaultTransitions = child.props && child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;

    if (defaultTransitions) {
      var animationDuration = animate[type] && animate[type].duration;
      return animationDuration !== undefined ? animationDuration : defaultTransitions[type] && defaultTransitions[type].duration;
    } else {
      return {};
    }
  }; // eslint-disable-next-line max-statements, complexity, max-len


  return function getTransitionProps(child, index) {
    var data = getChildData(child) || [];

    var animate = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, props.animate, child.props.animate);

    var defaultTransitions = child.props.polar ? child.type.defaultPolarTransitions || child.type.defaultTransitions : child.type.defaultTransitions;
    animate.onExit = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, animate.onExit, defaultTransitions && defaultTransitions.onExit);
    animate.onEnter = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, animate.onEnter, defaultTransitions && defaultTransitions.onEnter);
    animate.onLoad = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, animate.onLoad, defaultTransitions && defaultTransitions.onLoad);
    var childTransitions = childrenTransitions[index] || childrenTransitions[0];

    if (!nodesDoneLoad) {
      // should do onLoad animation
      var load = transitionDurations.load !== undefined ? transitionDurations.load : getChildTransitionDuration(child, "onLoad");
      var animation = {
        duration: load
      };
      return onLoad(child, data, __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, animation));
    } else if (nodesWillExit) {
      var exitingNodes = childTransitions && childTransitions.exiting;
      var exit = transitionDurations.exit !== undefined ? transitionDurations.exit : getChildTransitionDuration(child, "onExit"); // if nodesWillExit, but this child has no exiting nodes, set a delay instead of a duration

      var _animation = exitingNodes ? {
        duration: exit
      } : {
        delay: exit
      };

      return onExit(exitingNodes, child, data, __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, _animation));
    } else if (nodesWillEnter) {
      var enteringNodes = childTransitions && childTransitions.entering;
      var enter = transitionDurations.enter !== undefined ? transitionDurations.enter : getChildTransitionDuration(child, "onEnter");
      var move = transitionDurations.move !== undefined ? transitionDurations.move : child.props.animate && child.props.animate.duration;
      var _animation2 = {
        duration: nodesShouldEnter && enteringNodes ? enter : move
      };
      return onEnter(enteringNodes, child, data, __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, animate, _animation2));
    } else if (!state && animate && animate.onExit) {
      // This is the initial render, and nodes may enter when props change. Because
      // animation interpolation is determined by old- and next- props, data may need
      // to be augmented with certain properties.
      //
      // For example, it may be desired that exiting nodes go from `opacity: 1` to
      // `opacity: 0`. Without setting this on a per-datum basis, the interpolation
      // might go from `opacity: undefined` to `opacity: 0`, which would result in
      // interpolated `opacity: NaN` values.
      //
      return getInitialChildProps(animate, data);
    }

    return {
      animate: animate,
      data: data
    };
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getInitialTransitionState: getInitialTransitionState,
  getTransitionPropsFactory: getTransitionPropsFactory
});

/***/ }),
/* 72 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/rect.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Rect = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("desc", null, desc)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

/* harmony default export */ __webpack_exports__["a"] = (Rect);

/***/ }),
/* 73 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/path.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Path = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", rest, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("desc", null, desc)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", rest);
};

/* harmony default export */ __webpack_exports__["a"] = (Path);

/***/ }),
/* 74 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/line.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Line = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("desc", null, desc)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("line", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

/* harmony default export */ __webpack_exports__["a"] = (Line);

/***/ }),
/* 75 */
/*!************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/range.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(/*! ./_createRange */ 252);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 76 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/without.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(/*! ./_baseDifference */ 257),
    baseRest = __webpack_require__(/*! ./_baseRest */ 51),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ 258);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),
/* 77 */
/*!*******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/events.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes__ = __webpack_require__(/*! lodash/includes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_uniq__ = __webpack_require__(/*! lodash/uniq */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_pickBy__ = __webpack_require__(/*! lodash/pickBy */ 261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_pickBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_pickBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_without__ = __webpack_require__(/*! lodash/without */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_assign__);








function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* harmony default export */ __webpack_exports__["a"] = ({
  /* Returns all own and shared events that should be attached to a single target element,
   * i.e. an individual bar specified by target: "data", eventKey: [index].
   * Returned events are scoped to the appropriate state. Either that of the component itself
   * (i.e. VictoryBar) in the case of own events, or that of the parent component
   * (i.e. VictoryChart) in the case of shared events
   */
  // eslint-disable-next-line max-params
  getEvents: function (props, target, eventKey, getScopedEvents) {
    var _this = this;

    // Returns all events that apply to a particular target element
    var getEventsByTarget = function (events) {
      var getSelectedEvents = function () {
        var targetEvents = events.reduce(function (memo, event) {
          if (event.target !== undefined) {
            var matchesTarget = Array.isArray(event.target) ? __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default()(event.target, target) : "".concat(event.target) === "".concat(target);
            return matchesTarget ? memo.concat(event) : memo;
          }

          return memo.concat(event);
        }, []);

        if (eventKey !== undefined && target !== "parent") {
          return targetEvents.filter(function (obj) {
            var targetKeys = obj.eventKey;

            var useKey = function (key) {
              return key ? "".concat(key) === "".concat(eventKey) : true;
            };

            return Array.isArray(targetKeys) ? targetKeys.some(function (k) {
              return useKey(k);
            }) : useKey(targetKeys);
          });
        }

        return targetEvents;
      };

      var selectedEvents = getSelectedEvents();
      return Array.isArray(selectedEvents) && selectedEvents.reduce(function (memo, event) {
        return event ? __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(memo, event.eventHandlers) : memo;
      }, {});
    };
    /* Returns all events from props and defaultEvents from components. Events handlers
     * specified in props will override handlers for the same event if they are also
     * specified in defaultEvents of a sub-component
     */


    var getAllEvents = function () {
      if (Array.isArray(_this.componentEvents)) {
        var _this$componentEvents;

        return Array.isArray(props.events) ? (_this$componentEvents = _this.componentEvents).concat.apply(_this$componentEvents, _toConsumableArray(props.events)) : _this.componentEvents;
      }

      return props.events;
    };

    var allEvents = getAllEvents();
    var ownEvents = allEvents && __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(getScopedEvents) ? getScopedEvents(getEventsByTarget(allEvents), target) : undefined;

    if (!props.sharedEvents) {
      return ownEvents;
    }

    var getSharedEvents = props.sharedEvents.getEvents;
    var sharedEvents = props.sharedEvents.events && getSharedEvents(getEventsByTarget(props.sharedEvents.events), target);
    return __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, sharedEvents, ownEvents);
  },

  /* Returns a modified events object where each event handler is replaced by a new
   * function that calls the original handler and then calls setState with the return
   * of the original event handler assigned to state property that maps to the target
   * element.
   */
  // eslint-disable-next-line max-params
  getScopedEvents: function (events, namespace, childType, baseProps) {
    var _this2 = this;

    if (__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(events)) {
      return {};
    }

    baseProps = baseProps || this.baseProps; // returns the original base props or base state of a given target element

    var getTargetProps = function (identifier, type) {
      var childName = identifier.childName,
          target = identifier.target,
          key = identifier.key;
      var baseType = type === "props" ? baseProps : _this2.state || {};
      var base = childName === undefined || childName === null || !baseType[childName] ? baseType : baseType[childName];
      return key === "parent" ? base.parent : base[key] && base[key][target];
    }; // Returns the state object with the mutation caused by a given eventReturn
    // applied to the appropriate property on the state object


    var parseEvent = function (eventReturn, eventKey) {
      var childNames = namespace === "parent" ? eventReturn.childName : eventReturn.childName || childType;
      var target = eventReturn.target || namespace; // returns all eventKeys to modify for a targeted childName

      var getKeys = function (childName) {
        if (target === "parent") {
          return "parent";
        }

        if (eventReturn.eventKey === "all") {
          return baseProps[childName] ? __WEBPACK_IMPORTED_MODULE_3_lodash_without___default()(Object.keys(baseProps[childName]), "parent") : __WEBPACK_IMPORTED_MODULE_3_lodash_without___default()(Object.keys(baseProps), "parent");
        } else if (eventReturn.eventKey === undefined && eventKey === "parent") {
          return baseProps[childName] ? Object.keys(baseProps[childName]) : Object.keys(baseProps);
        }

        return eventReturn.eventKey !== undefined ? eventReturn.eventKey : eventKey;
      }; // returns the state object with mutated props applied for a single key


      var getMutationObject = function (key, childName) {
        var baseState = _this2.state || {};

        if (!__WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(eventReturn.mutation)) {
          return baseState;
        }

        var mutationTargetProps = getTargetProps({
          childName: childName,
          key: key,
          target: target
        }, "props");
        var mutationTargetState = getTargetProps({
          childName: childName,
          key: key,
          target: target
        }, "state");
        var mutatedProps = eventReturn.mutation(__WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, mutationTargetProps, mutationTargetState), baseProps);
        var childState = baseState[childName] || {};

        var filterState = function (state) {
          if (state[key] && state[key][target]) {
            delete state[key][target];
          }

          if (state[key] && !Object.keys(state[key]).length) {
            delete state[key];
          }

          return state;
        };

        var extendState = function (state) {
          return target === "parent" ? __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(state, _defineProperty({}, key, __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(state[key], mutatedProps))) : __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(state, _defineProperty({}, key, __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(state[key], _defineProperty({}, target, mutatedProps))));
        };

        var updateState = function (state) {
          return mutatedProps ? extendState(state) : filterState(state);
        };

        return childName !== undefined && childName !== null ? __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(baseState, _defineProperty({}, childName, updateState(childState))) : updateState(baseState);
      }; // returns entire mutated state for a given childName


      var getReturnByChild = function (childName) {
        var mutationKeys = getKeys(childName);
        return Array.isArray(mutationKeys) ? mutationKeys.reduce(function (memo, key) {
          return __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(memo, getMutationObject(key, childName));
        }, {}) : getMutationObject(mutationKeys, childName);
      }; // returns an entire mutated state for all children


      var allChildNames = childNames === "all" ? __WEBPACK_IMPORTED_MODULE_3_lodash_without___default()(Object.keys(baseProps), "parent") : childNames;
      return Array.isArray(allChildNames) ? allChildNames.reduce(function (memo, childName) {
        return __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()(memo, getReturnByChild(childName));
      }, {}) : getReturnByChild(allChildNames);
    }; // Parses an array of event returns into a single state mutation


    var parseEventReturn = function (eventReturn, eventKey) {
      return Array.isArray(eventReturn) ? eventReturn.reduce(function (memo, props) {
        memo = __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, memo, parseEvent(props, eventKey));
        return memo;
      }, {}) : parseEvent(eventReturn, eventKey);
    };

    var compileCallbacks = function (eventReturn) {
      var getCallback = function (obj) {
        return __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(obj.callback) && obj.callback;
      };

      var callbacks = Array.isArray(eventReturn) ? eventReturn.map(function (evtObj) {
        return getCallback(evtObj);
      }) : [getCallback(eventReturn)];
      var callbackArray = callbacks.filter(function (callback) {
        return callback !== false;
      });
      return callbackArray.length ? function () {
        return callbackArray.forEach(function (callback) {
          return callback();
        });
      } : undefined;
    }; // A function that calls a particular event handler, parses its return
    // into a state mutation, and calls setState
    // eslint-disable-next-line max-params


    var onEvent = function (evt, childProps, eventKey, eventName) {
      var eventReturn = events[eventName](evt, childProps, eventKey, _this2);

      if (eventReturn) {
        var callbacks = compileCallbacks(eventReturn);

        _this2.setState(parseEventReturn(eventReturn, eventKey), callbacks);
      }
    }; // returns a new events object with enhanced event handlers


    return Object.keys(events).reduce(function (memo, event) {
      memo[event] = onEvent;
      return memo;
    }, {});
  },

  /* Returns a partially applied event handler for a specific target element
   * This allows event handlers to have access to props controlling each element
   */
  getPartialEvents: function (events, eventKey, childProps) {
    return events ? Object.keys(events).reduce(function (memo, eventName) {
      var appliedEvent = function (evt) {
        return events[eventName](evt, childProps, eventKey, eventName);
      };

      memo[eventName] = appliedEvent;
      return memo;
    }, {}) : {};
  },

  /* Returns the property of the state object corresponding to event changes for
   * a particular element
   */
  getEventState: function (eventKey, namespace, childType) {
    var state = this.state || {};

    if (!childType) {
      return eventKey === "parent" ? state[eventKey] && state[eventKey][namespace] || state[eventKey] : state[eventKey] && state[eventKey][namespace];
    }

    return state[childType] && state[childType][eventKey] && state[childType][eventKey][namespace];
  },

  /**
   * Returns a set of all mutations for shared events
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps an object that describes all props for children of VictorySharedEvents
   * @param  {Object} baseState an object that describes state for children of VictorySharedEvents
   * @param  {Array} childNames an array of childNames
   *
   * @return {Object} a object describing all mutations for VictorySharedEvents
   */
  // eslint-disable-next-line max-params
  getExternalMutationsWithChildren: function (mutations, baseProps, baseState, childNames) {
    var _this3 = this;

    baseProps = baseProps || {};
    baseState = baseState || {};
    return childNames.reduce(function (memo, childName) {
      var childState = baseState[childName];

      var mutation = _this3.getExternalMutations(mutations, baseProps[childName], baseState[childName], childName);

      memo[childName] = mutation ? mutation : childState;
      return __WEBPACK_IMPORTED_MODULE_2_lodash_pickBy___default()(memo, function (v) {
        return !__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(v);
      });
    }, {});
  },

  /**
   * Returns a set of all mutations for a component
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps a props object (scoped to a childName when used by shared events)
   * @param  {Object} baseState a state object (scoped to a childName when used by shared events)
   * @param  {String} childName an optional childName
   *
   * @return {Object} a object describing mutations for a given component
   */
  // eslint-disable-next-line max-params
  getExternalMutations: function (mutations, baseProps, baseState, childName) {
    var _this4 = this;

    baseProps = baseProps || {};
    baseState = baseState || {};
    var eventKeys = Object.keys(baseProps);
    return eventKeys.reduce(function (memo, eventKey) {
      var keyState = baseState[eventKey] || {};
      var keyProps = baseProps[eventKey] || {};

      if (eventKey === "parent") {
        var identifier = {
          eventKey: eventKey,
          target: "parent"
        };

        var mutation = _this4.getExternalMutation(mutations, keyProps, keyState, identifier);

        memo[eventKey] = mutation !== undefined ? __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, keyState, mutation) : keyState;
      } else {
        // use keys from both state and props so that elements not intially included in baseProps
        // will be used. (i.e. labels)
        var targets = __WEBPACK_IMPORTED_MODULE_1_lodash_uniq___default()(Object.keys(keyProps).concat(Object.keys(keyState)));

        memo[eventKey] = targets.reduce(function (m, target) {
          var identifier = {
            eventKey: eventKey,
            target: target,
            childName: childName
          };

          var mutation = _this4.getExternalMutation(mutations, keyProps[target], keyState[target], identifier);

          m[target] = mutation !== undefined ? __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, keyState[target], mutation) : keyState[target];
          return __WEBPACK_IMPORTED_MODULE_2_lodash_pickBy___default()(m, function (v) {
            return !__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(v);
          });
        }, {});
      }

      return __WEBPACK_IMPORTED_MODULE_2_lodash_pickBy___default()(memo, function (v) {
        return !__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(v);
      });
    }, {});
  },

  /**
   * Returns a set of mutations for a particular element given scoped baseProps and baseState
   *
   * @param  {Array} mutations an array of mutations objects
   * @param  {Object} baseProps a props object (scoped the element specified by the identifier)
   * @param  {Object} baseState a state object (scoped the element specified by the identifier)
   * @param  {Object} identifier { eventKey, target, childName }
   *
   * @return {Object | undefined} a object describing mutations for a given element, or undefined
   */
  // eslint-disable-next-line max-params
  getExternalMutation: function (mutations, baseProps, baseState, identifier) {
    var filterMutations = function (mutation, type) {
      if (typeof mutation[type] === "string") {
        return mutation[type] === "all" || mutation[type] === identifier[type];
      } else if (Array.isArray(mutation[type])) {
        // coerce arrays to strings before matching
        var stringArray = mutation[type].map(function (m) {
          return "".concat(m);
        });
        return __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default()(stringArray, identifier[type]);
      } else {
        return false;
      }
    };

    mutations = Array.isArray(mutations) ? mutations : [mutations];
    var scopedMutations = mutations;

    if (identifier.childName) {
      scopedMutations = mutations.filter(function (m) {
        return filterMutations(m, "childName");
      });
    } // find any mutation objects that match the target


    var targetMutations = scopedMutations.filter(function (m) {
      return filterMutations(m, "target");
    });

    if (__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(targetMutations)) {
      return undefined;
    }

    var keyMutations = targetMutations.filter(function (m) {
      return filterMutations(m, "eventKey");
    });

    if (__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(keyMutations)) {
      return undefined;
    }

    return keyMutations.reduce(function (memo, curr) {
      var mutationFunction = curr && __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(curr.mutation) ? curr.mutation : function () {
        return undefined;
      };
      var currentMutation = mutationFunction(__WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, baseProps, baseState));
      return __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, memo, currentMutation);
    }, {});
  },

  /* Returns an array of defaultEvents from sub-components of a given component.
   * i.e. any static `defaultEvents` on `labelComponent` will be returned
   */
  getComponentEvents: function (props, components) {
    var events = Array.isArray(components) && components.reduce(function (memo, componentName) {
      var _memo;

      var component = props[componentName];
      var defaultEvents = component && component.type && component.type.defaultEvents;
      var componentEvents = __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(defaultEvents) ? defaultEvents(component.props) : defaultEvents;
      memo = Array.isArray(componentEvents) ? (_memo = memo).concat.apply(_memo, _toConsumableArray(componentEvents)) : memo;
      return memo;
    }, []);
    return events && events.length ? events : undefined;
  }
});

/***/ }),
/* 78 */
/*!*****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/data.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes__ = __webpack_require__(/*! lodash/includes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEqual__ = __webpack_require__(/*! lodash/isEqual */ 263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__ = __webpack_require__(/*! lodash/orderBy */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_property__ = __webpack_require__(/*! lodash/property */ 61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__ = __webpack_require__(/*! lodash/isPlainObject */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_last__ = __webpack_require__(/*! lodash/last */ 264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range__ = __webpack_require__(/*! lodash/range */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniq__ = __webpack_require__(/*! lodash/uniq */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers__ = __webpack_require__(/*! ./helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collection__ = __webpack_require__(/*! ./collection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scale__ = __webpack_require__(/*! ./scale */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__immutable__ = __webpack_require__(/*! ./immutable */ 147);












function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */




 // Private Functions

function parseDatum(datum) {
  var immutableDatumWhitelist = {
    errorX: true,
    errorY: true
  };
  return __WEBPACK_IMPORTED_MODULE_15__immutable__["a" /* default */].isImmutable(datum) ? __WEBPACK_IMPORTED_MODULE_15__immutable__["a" /* default */].shallowToJS(datum, immutableDatumWhitelist) : datum;
}

function getLength(data) {
  return __WEBPACK_IMPORTED_MODULE_15__immutable__["a" /* default */].isIterable(data) ? data.size : data.length;
} // Returns generated data for a given axis based on domain and sample from props


function generateDataArray(props, axis) {
  var propsDomain = __WEBPACK_IMPORTED_MODULE_5_lodash_isPlainObject___default()(props.domain) ? props.domain[axis] : props.domain;
  var domain = propsDomain || __WEBPACK_IMPORTED_MODULE_14__scale__["a" /* default */].getBaseScale(props, axis).domain();
  var samples = props.samples || 1;
  var domainMax = Math.max.apply(Math, _toConsumableArray(domain));
  var domainMin = Math.min.apply(Math, _toConsumableArray(domain));
  var step = (domainMax - domainMin) / samples;

  var values = __WEBPACK_IMPORTED_MODULE_8_lodash_range___default()(domainMin, domainMax, step);

  return __WEBPACK_IMPORTED_MODULE_7_lodash_last___default()(values) === domainMax ? values : values.concat(domainMax);
} // Returns sorted data. If no sort keys are provided, data is returned unaltered.


function sortData(dataset, sortKey) {
  var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ascending";

  if (!sortKey) {
    return dataset;
  } // Ensures previous VictoryLine api for sortKey prop stays consistent


  if (sortKey === "x" || sortKey === "y") {
    sortKey = "_".concat(sortKey);
  }

  var order = sortOrder === "ascending" ? "asc" : "desc";
  return __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default()(dataset, sortKey, order);
} // This method will remove data points that break certain scales. (log scale only)


function cleanData(dataset, props) {
  var smallNumber = 1 / Number.MAX_SAFE_INTEGER;
  var scaleType = {
    x: __WEBPACK_IMPORTED_MODULE_14__scale__["a" /* default */].getScaleType(props, "x"),
    y: __WEBPACK_IMPORTED_MODULE_14__scale__["a" /* default */].getScaleType(props, "y")
  };

  if (scaleType.x !== "log" && scaleType.y !== "log") {
    return dataset;
  }

  var rules = function (datum, axis) {
    return scaleType[axis] === "log" ? datum["_".concat(axis)] !== 0 : true;
  };

  var sanitize = function (datum) {
    var _x = rules(datum, "x") ? datum._x : smallNumber;

    var _y = rules(datum, "y") ? datum._y : smallNumber;

    var _y0 = rules(datum, "y0") ? datum._y0 : smallNumber;

    return __WEBPACK_IMPORTED_MODULE_10_lodash_assign___default()({}, datum, {
      _x: _x,
      _y: _y,
      _y0: _y0
    });
  };

  return dataset.map(function (datum) {
    if (rules(datum, "x") && rules(datum, "y") && rules(datum, "y0")) {
      return datum;
    }

    return sanitize(datum);
  });
} // Returns a data accessor given an eventKey prop


function getEventKey(key) {
  // creates a data accessor function
  // given a property key, path, array index, or null for identity.
  if (__WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default()(key)) {
    return key;
  } else if (key === null || key === undefined) {
    return function () {
      return undefined;
    };
  } // otherwise, assume it is an array index, property key or path (_.property handles all three)


  return __WEBPACK_IMPORTED_MODULE_4_lodash_property___default()(key);
} // Returns data with an eventKey prop added to each datum


function addEventKeys(props, data) {
  var hasEventKeyAccessor = !!props.eventKey;
  var eventKeyAccessor = getEventKey(props.eventKey);
  return data.map(function (datum, index) {
    if (datum.eventKey !== undefined) {
      return datum;
    } else if (hasEventKeyAccessor) {
      var eventKey = eventKeyAccessor(datum, index);
      return eventKey !== undefined ? __WEBPACK_IMPORTED_MODULE_10_lodash_assign___default()({
        eventKey: eventKey
      }, datum) : datum;
    } else {
      return datum;
    }
  });
} // Exported Functions

/**
 * Returns an object mapping string data to numeric data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Object} an object mapping string data to numeric data
 */


function createStringMap(props, axis) {
  var stringsFromAxes = getStringsFromAxes(props, axis);
  var stringsFromCategories = getStringsFromCategories(props, axis);
  var stringsFromData = getStringsFromData(props, axis);

  var allStrings = __WEBPACK_IMPORTED_MODULE_9_lodash_uniq___default()(_toConsumableArray(stringsFromAxes).concat(_toConsumableArray(stringsFromCategories), _toConsumableArray(stringsFromData)));

  return allStrings.length === 0 ? null : allStrings.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
}
/**
 * Reduces the size of a data array, such that it is <= maxPoints.
 * @param {Array} data: an array of data; must be sorted
 * @param {Number} maxPoints: maximum number of data points to return
 * @param {Number} startingIndex: the index of the data[0] *in the entire dataset*; this function
                   assumes `data` param is a subset of larger dataset that has been zoommed
  * @returns {Array} an array of data, a subset of data param
  */


function downsample(data, maxPoints) {
  var startingIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  // ensures that the downampling of data while zooming looks good.
  var dataLength = getLength(data);

  if (dataLength > maxPoints) {
    // limit k to powers of 2, e.g. 64, 128, 256
    // so that the same points will be chosen reliably, reducing flicker on zoom
    var k = Math.pow(2, Math.ceil(Math.log2(dataLength / maxPoints)));
    return data.filter( // ensure modulo is always calculated from same reference: i + startingIndex
    function (d, i) {
      return (i + startingIndex) % k === 0;
    });
  }

  return data;
}
/**
 * Returns formatted data. Data accessors are applied, and string values are replaced.
 * @param {Array} dataset: the original domain
 * @param {Object} props: the props object
 * @param {Array} expectedKeys: an array of expected data keys
 * @returns {Array} the formatted data
 */


function formatData(dataset, props, expectedKeys) {
  var isArrayOrIterable = Array.isArray(dataset) || __WEBPACK_IMPORTED_MODULE_15__immutable__["a" /* default */].isIterable(dataset);

  if (!isArrayOrIterable || getLength(dataset) < 1) {
    return [];
  }

  var defaultKeys = ["x", "y", "y0"];
  expectedKeys = Array.isArray(expectedKeys) ? expectedKeys : defaultKeys;
  var stringMap = {
    x: expectedKeys.indexOf("x") !== -1 ? createStringMap(props, "x") : undefined,
    y: expectedKeys.indexOf("y") !== -1 ? createStringMap(props, "y") : undefined,
    y0: expectedKeys.indexOf("y0") !== -1 ? createStringMap(props, "y") : undefined
  };

  var createAccessor = function (name) {
    return __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* default */].createAccessor(props[name] !== undefined ? props[name] : name);
  };

  var accessor = expectedKeys.reduce(function (memo, type) {
    memo[type] = createAccessor(type);
    return memo;
  }, {});
  var preformattedData = __WEBPACK_IMPORTED_MODULE_1_lodash_isEqual___default()(expectedKeys, defaultKeys) && props.x === "_x" && props.y === "_y" && props.y0 === "_y0";
  var data = preformattedData ? dataset : dataset.reduce(function (dataArr, datum, index) {
    // eslint-disable-line complexity
    datum = parseDatum(datum);
    var fallbackValues = {
      x: index,
      y: datum
    };
    var processedValues = expectedKeys.reduce(function (memo, type) {
      var processedValue = accessor[type](datum);
      var value = processedValue !== undefined ? processedValue : fallbackValues[type];

      if (value !== undefined) {
        if (typeof value === "string" && stringMap[type]) {
          memo["".concat(type, "Name")] = value;
          memo["_".concat(type)] = stringMap[type][value];
        } else {
          memo["_".concat(type)] = value;
        }
      }

      return memo;
    }, {});

    var formattedDatum = __WEBPACK_IMPORTED_MODULE_10_lodash_assign___default()({}, processedValues, datum);

    if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default()(formattedDatum)) {
      dataArr.push(formattedDatum);
    }

    return dataArr;
  }, []);
  var sortedData = sortData(data, props.sortKey, props.sortOrder);
  var cleanedData = cleanData(sortedData, props);
  return addEventKeys(props, cleanedData);
}
/**
 * Returns generated x and y data based on domain and sample from props
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function generateData(props) {
  var xValues = generateDataArray(props, "x");
  var yValues = generateDataArray(props, "y");
  var values = xValues.map(function (x, i) {
    return {
      x: x,
      y: yValues[i]
    };
  });
  return values;
}
/**
 * Returns an array of categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of categories
 */


function getCategories(props, axis) {
  return props.categories && !Array.isArray(props.categories) ? props.categories[axis] : props.categories;
}
/**
 * Returns an array of formatted data
 * @param {Object} props: the props object
 * @returns {Array} an array of data
 */


function getData(props) {
  return props.data ? formatData(props.data, props) : formatData(generateData(props), props);
}
/**
 * Returns an array of strings from axis tickValues for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromAxes(props, axis) {
  var tickValues = props.tickValues,
      tickFormat = props.tickFormat;
  var tickValueArray;

  if (!tickValues || !Array.isArray(tickValues) && !tickValues[axis]) {
    tickValueArray = tickFormat && Array.isArray(tickFormat) ? tickFormat : [];
  } else {
    tickValueArray = tickValues[axis] || tickValues;
  }

  return tickValueArray.filter(function (val) {
    return typeof val === "string";
  });
}
/**
 * Returns an array of strings from categories for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromCategories(props, axis) {
  if (!props.categories) {
    return [];
  }

  var categories = getCategories(props, axis);
  var categoryStrings = categories && categories.filter(function (val) {
    return typeof val === "string";
  });
  return categoryStrings ? __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].removeUndefined(categoryStrings) : [];
}
/**
 * Returns an array of strings from data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} an array of strings
 */


function getStringsFromData(props, axis) {
  var isArrayOrIterable = Array.isArray(props.data) || __WEBPACK_IMPORTED_MODULE_15__immutable__["a" /* default */].isIterable(props.data);

  if (!isArrayOrIterable) {
    return [];
  }

  var key = props[axis] === undefined ? axis : props[axis];
  var accessor = __WEBPACK_IMPORTED_MODULE_12__helpers__["a" /* default */].createAccessor(key); // support immutable data

  var data = props.data.reduce(function (memo, d) {
    memo.push(parseDatum(d));
    return memo;
  }, []);
  var sortedData = sortData(data, props.sortKey, props.sortOrder);
  var dataStrings = sortedData.reduce(function (dataArr, datum) {
    datum = parseDatum(datum);
    dataArr.push(accessor(datum));
    return dataArr;
  }, []).filter(function (datum) {
    return typeof datum === "string";
  }); // return a unique set of strings

  return dataStrings.reduce(function (prev, curr) {
    if (curr !== undefined && curr !== null && prev.indexOf(curr) === -1) {
      prev.push(curr);
    }

    return prev;
  }, []);
}
/**
 * Checks whether a given component can be used to calculate date
 * @param {Component} component: a React component instance
 * @returns {Boolean} Returns true if the given component has a role included in the whitelist
 */


function isDataComponent(component) {
  var getRole = function (child) {
    return child && child.type ? child.type.role : "";
  };

  var role = getRole(component);

  if (role === "portal") {
    var children = __WEBPACK_IMPORTED_MODULE_11_react___default.a.Children.toArray(component.props.children);
    role = children.length ? getRole(children[0]) : "";
  }

  var whitelist = ["area", "bar", "boxplot", "candlestick", "errorbar", "group", "line", "pie", "scatter", "stack", "voronoi"];
  return __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default()(whitelist, role);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  createStringMap: createStringMap,
  downsample: downsample,
  formatData: formatData,
  generateData: generateData,
  getCategories: getCategories,
  getData: getData,
  getStringsFromAxes: getStringsFromAxes,
  getStringsFromCategories: getStringsFromCategories,
  getStringsFromData: getStringsFromData,
  isDataComponent: isDataComponent
});

/***/ }),
/* 79 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/quantile.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(/*! ./number */ 30);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 80 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/map.js ***!
  \*********************************************************************************/
/*! exports provided: prefix, default */
/*! exports used: default, prefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 81 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/constant.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 82 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatDecimal.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 83 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/index.js ***!
  \*****************************************************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/*! exports used: timeDay, timeHour, timeMillisecond, timeMinute, timeMonday, timeMonth, timeSecond, timeSunday, timeThursday, timeWeek, timeYear, utcDay, utcHour, utcMillisecond, utcMinute, utcMonday, utcMonth, utcSecond, utcSunday, utcThursday, utcWeek, utcYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__millisecond__ = __webpack_require__(/*! ./millisecond */ 306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second__ = __webpack_require__(/*! ./second */ 307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minute__ = __webpack_require__(/*! ./minute */ 308);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hour__ = __webpack_require__(/*! ./hour */ 309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__day__ = __webpack_require__(/*! ./day */ 310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week__ = __webpack_require__(/*! ./week */ 311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__month__ = __webpack_require__(/*! ./month */ 312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__year__ = __webpack_require__(/*! ./year */ 313);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utcMinute__ = __webpack_require__(/*! ./utcMinute */ 314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utcHour__ = __webpack_require__(/*! ./utcHour */ 315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utcDay__ = __webpack_require__(/*! ./utcDay */ 316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utcWeek__ = __webpack_require__(/*! ./utcWeek */ 317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utcMonth__ = __webpack_require__(/*! ./utcMonth */ 318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utcYear__ = __webpack_require__(/*! ./utcYear */ 319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 84 */
/*!********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time-format/src/defaultLocale.js ***!
  \********************************************************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/*! exports used: timeFormat, utcFormat, utcParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(/*! ./locale */ 145);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 85 */
/*!*******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/domain.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes__ = __webpack_require__(/*! lodash/includes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_sortedUniq__ = __webpack_require__(/*! lodash/sortedUniq */ 331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_sortedUniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_sortedUniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__ = __webpack_require__(/*! lodash/isPlainObject */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flatten__ = __webpack_require__(/*! lodash/flatten */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__(/*! ./data */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scale__ = __webpack_require__(/*! ./scale */ 44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers__ = __webpack_require__(/*! ./helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__collection__ = __webpack_require__(/*! ./collection */ 13);






function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */

/* eslint-disable no-use-before-define */




 // Private Methods

function cleanDomain(domain, props, axis) {
  var scaleType = __WEBPACK_IMPORTED_MODULE_7__scale__["a" /* default */].getScaleType(props, axis);

  if (scaleType !== "log") {
    return domain;
  }

  var rules = function (dom) {
    var almostZero = dom[0] < 0 || dom[1] < 0 ? -1 / Number.MAX_SAFE_INTEGER : 1 / Number.MAX_SAFE_INTEGER;
    var domainOne = dom[0] === 0 ? almostZero : dom[0];
    var domainTwo = dom[1] === 0 ? almostZero : dom[1];
    return [domainOne, domainTwo];
  };

  return rules(domain);
}

function getDomainPadding(props, axis) {
  var formatPadding = function (padding) {
    return Array.isArray(padding) ? {
      left: padding[0],
      right: padding[1]
    } : {
      left: padding,
      right: padding
    };
  };

  return __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(props.domainPadding) ? formatPadding(props.domainPadding[axis]) : formatPadding(props.domainPadding);
}

function getFlatData(dataset, axis) {
  return __WEBPACK_IMPORTED_MODULE_4_lodash_flatten___default()(dataset).map(function (datum) {
    return datum["_".concat(axis)] && datum["_".concat(axis)][1] !== undefined ? datum["_".concat(axis)][1] : datum["_".concat(axis)];
  });
}

function getExtremeFromData(dataset, axis) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "min";

  var getExtreme = function (arr) {
    return type === "max" ? Math.max.apply(Math, _toConsumableArray(arr)) : Math.min.apply(Math, _toConsumableArray(arr));
  };

  var initialValue = type === "max" ? -Infinity : Infinity;
  var containsDate = false;

  var result = __WEBPACK_IMPORTED_MODULE_4_lodash_flatten___default()(dataset).reduce(function (memo, datum) {
    var current0 = datum["_".concat(axis, "0")] !== undefined ? datum["_".concat(axis, "0")] : datum["_".concat(axis)];
    var current1 = datum["_".concat(axis, "1")] !== undefined ? datum["_".concat(axis, "1")] : datum["_".concat(axis)];
    var current = getExtreme([current0, current1]);
    containsDate = containsDate || current0 instanceof Date || current1 instanceof Date;
    return getExtreme([memo, current]);
  }, initialValue);

  return containsDate ? new Date(result) : result;
} //eslint-disable-next-line max-statements


function padDomain(domain, props, axis) {
  if (!props.domainPadding) {
    return domain;
  }

  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);
  var padding = getDomainPadding(props, axis);

  if (!padding.left && !padding.right) {
    return domain;
  }

  var min = __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMinValue(domain);
  var max = __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMaxValue(domain);
  var currentAxis = __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* default */].getCurrentAxis(axis, props.horizontal);
  var range = __WEBPACK_IMPORTED_MODULE_8__helpers__["a" /* default */].getRange(props, currentAxis);
  var rangeExtent = Math.abs(range[0] - range[1]); // Naive initial padding calculation

  var initialPadding = {
    left: Math.abs(max - min) * padding.left / rangeExtent,
    right: Math.abs(max - min) * padding.right / rangeExtent
  };
  var singleQuadrantDomainPadding = __WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(props.singleQuadrantDomainPadding) ? props.singleQuadrantDomainPadding[axis] : props.singleQuadrantDomainPadding;

  var adjust = function (val, type) {
    if (singleQuadrantDomainPadding === false) {
      return val;
    }

    var coerce = type === "min" && min >= 0 && val <= 0 || type === "max" && max <= 0 && val >= 0;
    return coerce ? 0 : val;
  }; // Adjust the domain by the initial padding


  var adjustedDomain = {
    min: adjust(min.valueOf() - initialPadding.left, "min"),
    max: adjust(max.valueOf() + initialPadding.right, "max")
  }; // re-calculate padding, taking the adjusted domain into account

  var finalPadding = {
    left: Math.abs(adjustedDomain.max - adjustedDomain.min) * padding.left / rangeExtent,
    right: Math.abs(adjustedDomain.max - adjustedDomain.min) * padding.right / rangeExtent
  }; // Adjust the domain by the final padding

  var paddedDomain = {
    min: adjust(min.valueOf() - finalPadding.left, "min"),
    max: adjust(max.valueOf() + finalPadding.right, "max")
  }; // default to minDomain / maxDomain if they exist

  var finalDomain = {
    min: minDomain !== undefined ? minDomain : paddedDomain.min,
    max: maxDomain !== undefined ? maxDomain : paddedDomain.max
  };
  return min instanceof Date || max instanceof Date ? getDomainFromMinMax(new Date(finalDomain.min), new Date(finalDomain.max)) : getDomainFromMinMax(finalDomain.min, finalDomain.max);
} // Public Methods

/**
 * Returns a getDomain function
 * @param {Function} getDomainFromDataFunction: a function that takes props and axis and
 * returns a domain based on data
 * @param {Function} formatDomainFunction: a function that takes domain, props, and axis and
 * returns a formatted domain
 * @returns {Function} a function that takes props and axis and returns a formatted domain
 */


function createDomainFunction(getDomainFromDataFunction, formatDomainFunction) {
  getDomainFromDataFunction = __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(getDomainFromDataFunction) ? getDomainFromDataFunction : getDomainFromData;
  formatDomainFunction = __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(formatDomainFunction) ? formatDomainFunction : formatDomain;
  return function (props, axis) {
    var propsDomain = getDomainFromProps(props, axis);

    if (propsDomain) {
      return formatDomainFunction(propsDomain, props, axis);
    }

    var categories = __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].getCategories(props, axis);
    var domain = categories ? getDomainFromCategories(props, axis, categories) : getDomainFromDataFunction(props, axis);
    return domain ? formatDomainFunction(domain, props, axis) : undefined;
  };
}
/**
 * Returns a formatted domain.
 * @param {Array} domain: a domain in the form of a two element array
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} a domain in the form of a two element array
 */


function formatDomain(domain, props, axis) {
  return cleanDomain(padDomain(domain, props, axis), props, axis);
}
/**
 * Returns a domain for a given axis based on props, category, or data
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} the domain for the given axis
 */


function getDomain(props, axis) {
  return createDomainFunction()(props, axis);
}
/**
 * Returns a domain based on categories if they exist
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @param {Array} categories: an array of categories corresponding to a given axis
 * @returns {Array|undefined} returns a domain from categories or undefined
 */


function getDomainFromCategories(props, axis, categories) {
  categories = categories || __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].getCategories(props, axis);
  var polar = props.polar,
      _props$startAngle = props.startAngle,
      startAngle = _props$startAngle === void 0 ? 0 : _props$startAngle,
      _props$endAngle = props.endAngle,
      endAngle = _props$endAngle === void 0 ? 360 : _props$endAngle;

  if (!categories) {
    return undefined;
  }

  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);
  var stringArray = __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].containsStrings(categories) ? __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].getStringsFromCategories(props, axis) : [];
  var stringMap = stringArray.length === 0 ? null : stringArray.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  var categoryValues = stringMap ? categories.map(function (value) {
    return stringMap[value];
  }) : categories;
  var min = minDomain !== undefined ? minDomain : __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMinValue(categoryValues);
  var max = maxDomain !== undefined ? maxDomain : __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMaxValue(categoryValues);
  var categoryDomain = getDomainFromMinMax(min, max);
  return polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? getSymmetricDomain(categoryDomain, categoryValues) : categoryDomain;
}
/**
 * Returns a domain from a dataset for a given axis
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @param {Array} dataset: an array of data
 * @returns {Array} the domain based on data
 */


function getDomainFromData(props, axis, dataset) {
  dataset = dataset || __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].getData(props);
  var polar = props.polar,
      _props$startAngle2 = props.startAngle,
      startAngle = _props$startAngle2 === void 0 ? 0 : _props$startAngle2,
      _props$endAngle2 = props.endAngle,
      endAngle = _props$endAngle2 === void 0 ? 360 : _props$endAngle2;
  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);

  if (dataset.length < 1) {
    return minDomain !== undefined && maxDomain !== undefined ? getDomainFromMinMax(minDomain, maxDomain) : undefined;
  }

  var min = minDomain !== undefined ? minDomain : getExtremeFromData(dataset, axis, "min");
  var max = maxDomain !== undefined ? maxDomain : getExtremeFromData(dataset, axis, "max");
  var domain = getDomainFromMinMax(min, max);
  return polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? getSymmetricDomain(domain, getFlatData(dataset, axis)) : domain;
}
/**
 * Returns a domain in the form of a two element array given a min and max value.
 * @param {Number|Date} min: the props object
 * @param {Number|Date} max: the current axis
 * @returns {Array} the minDomain based on props
 */


function getDomainFromMinMax(min, max) {
  var getSinglePointDomain = function (val) {
    // d3-scale does not properly resolve very small differences.
    // eslint-disable-next-line no-magic-numbers
    var verySmallNumber = val === 0 ? 2 * Math.pow(10, -10) : Math.pow(10, -10);
    var verySmallDate = 1;
    var minVal = val instanceof Date ? new Date(+val - verySmallDate) : +val - verySmallNumber;
    var maxVal = val instanceof Date ? new Date(+val + verySmallDate) : +val + verySmallNumber;
    return val === 0 ? [0, maxVal] : [minVal, maxVal];
  };

  return +min === +max ? getSinglePointDomain(max) : [min, max];
}
/**
 * Returns a the domain for a given axis if domain is given in props
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array|undefined} the domain based on props
 */


function getDomainFromProps(props, axis) {
  var minDomain = getMinFromProps(props, axis);
  var maxDomain = getMaxFromProps(props, axis);

  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(props.domain) && props.domain[axis]) {
    return props.domain[axis];
  } else if (Array.isArray(props.domain)) {
    return props.domain;
  } else if (minDomain !== undefined && maxDomain !== undefined) {
    return getDomainFromMinMax(minDomain, maxDomain);
  }

  return undefined;
}
/**
 * Returns a domain for a given axis. This method forces the domain to include
 * zero unless the domain is explicitly specified in props.
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Array} the domain for the given axis
 */


function getDomainWithZero(props, axis) {
  var propsDomain = getDomainFromProps(props, axis);

  if (propsDomain) {
    return propsDomain;
  }

  var dataset = __WEBPACK_IMPORTED_MODULE_6__data__["a" /* default */].getData(props);
  var y0Min = dataset.reduce(function (min, datum) {
    return datum._y0 < min ? datum._y0 : min;
  }, Infinity);

  var ensureZero = function (domain) {
    if (axis === "x") {
      return domain;
    }

    var defaultMin = y0Min !== Infinity ? y0Min : 0;
    var maxDomainProp = getMaxFromProps(props, axis);
    var minDomainProp = getMinFromProps(props, axis);
    var max = maxDomainProp !== undefined ? maxDomainProp : __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMaxValue(domain, defaultMin);
    var min = minDomainProp !== undefined ? minDomainProp : __WEBPACK_IMPORTED_MODULE_9__collection__["a" /* default */].getMinValue(domain, defaultMin);
    return getDomainFromMinMax(min, max);
  };

  var getDomainFunction = function () {
    return getDomainFromData(props, axis, dataset);
  };

  var formatDomainFunction = function (domain) {
    return formatDomain(ensureZero(domain), props, axis);
  };

  return createDomainFunction(getDomainFunction, formatDomainFunction)(props, axis);
}
/**
 * Returns the maxDomain from props if it exists
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Number|undefined} the maxDomain based on props
 */


function getMaxFromProps(props, axis) {
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(props.maxDomain) && props.maxDomain[axis] !== undefined) {
    return props.maxDomain[axis];
  }

  return typeof props.maxDomain === "number" ? props.maxDomain : undefined;
}
/**
 * Returns the minDomain from props if it exists
 * @param {Object} props: the props object
 * @param {String} axis: the current axis
 * @returns {Number|undefined} the minDomain based on props
 */


function getMinFromProps(props, axis) {
  if (__WEBPACK_IMPORTED_MODULE_3_lodash_isPlainObject___default()(props.minDomain) && props.minDomain[axis] !== undefined) {
    return props.minDomain[axis];
  }

  return typeof props.minDomain === "number" ? props.minDomain : undefined;
}
/**
 * Returns a symmetrically padded domain for polar charts
 * @param {Array} domain: the original domain
 * @param {Array} values: a flat array of values corresponding to either tickValues, or data values
 * for a given dimension i.e. only x values.
 * @returns {Array} the symmetric domain
 */


function getSymmetricDomain(domain, values) {
  var processedData = __WEBPACK_IMPORTED_MODULE_2_lodash_sortedUniq___default()(values.sort(function (a, b) {
    return a - b;
  }));

  var step = processedData[1] - processedData[0];
  return [domain[0], domain[1] + step];
}
/**
 * Checks whether a given component can be used to calculate domain
 * @param {Component} component: a React component instance
 * @returns {Boolean} Returns true if the given component has a role included in the whitelist
 */


function isDomainComponent(component) {
  var getRole = function (child) {
    return child && child.type ? child.type.role : "";
  };

  var role = getRole(component);

  if (role === "portal") {
    var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(component.props.children);
    role = children.length ? getRole(children[0]) : "";
  }

  var whitelist = ["area", "axis", "bar", "boxplot", "candlestick", "errorbar", "group", "line", "pie", "scatter", "stack", "voronoi"];
  return __WEBPACK_IMPORTED_MODULE_0_lodash_includes___default()(whitelist, role);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  createDomainFunction: createDomainFunction,
  formatDomain: formatDomain,
  getDomain: getDomain,
  getDomainFromCategories: getDomainFromCategories,
  getDomainFromData: getDomainFromData,
  getDomainFromMinMax: getDomainFromMinMax,
  getDomainFromProps: getDomainFromProps,
  getDomainWithZero: getDomainWithZero,
  getMaxFromProps: getMaxFromProps,
  getMinFromProps: getMinFromProps,
  getSymmetricDomain: getSymmetricDomain,
  isDomainComponent: isDomainComponent
});

/***/ }),
/* 86 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getTag.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 87 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isLength.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 88 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isBuffer.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 89 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isPrototype.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 90 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isTypedArray.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 91 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_overRest.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 158);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 92 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_setToString.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 93 */
/*!***********************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-animation/victory-animation.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictoryAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(/*! d3-ease */ 164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(/*! ./util */ 175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_timer__ = __webpack_require__(/*! ../victory-util/timer */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_fast_compare__ = __webpack_require__(/*! react-fast-compare */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_fast_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_fast_compare__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/*global setTimeout:false */







var VictoryAnimation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryAnimation, _React$Component);

  function VictoryAnimation(props) {
    var _this;

    _classCallCheck(this, VictoryAnimation);

    _this = _possibleConstructorReturn(this, (VictoryAnimation.__proto__ || Object.getPrototypeOf(VictoryAnimation)).call(this, props));
    /* defaults */

    _this.state = {
      data: Array.isArray(_this.props.data) ? _this.props.data[0] : _this.props.data,
      animationInfo: {
        progress: 0,
        animating: false
      }
    };
    _this.interpolator = null;
    _this.queue = Array.isArray(_this.props.data) ? _this.props.data.slice(1) : [];
    /* build easing function */

    _this.ease = __WEBPACK_IMPORTED_MODULE_2_d3_ease__[_this.toNewName(_this.props.easing)];
    /*
      There is no autobinding of this in ES6 classes
      so we bind functionToBeRunEachFrame to current instance of victory animation class
    */

    _this.functionToBeRunEachFrame = _this.functionToBeRunEachFrame.bind(_assertThisInitialized(_this));
    _this.getTimer = _this.getTimer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VictoryAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Length check prevents us from triggering `onEnd` in `traverseQueue`.
      if (this.queue.length) {
        this.traverseQueue();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var equalProps = __WEBPACK_IMPORTED_MODULE_5_react_fast_compare___default()(this.props, nextProps);

      if (!equalProps) {
        /* cancel existing loop if it exists */
        this.getTimer().unsubscribe(this.loopID);
        /* If an object was supplied */

        if (!Array.isArray(nextProps.data)) {
          // Replace the tween queue. Could set `this.queue = [nextProps.data]`,
          // but let's reuse the same array.
          this.queue.length = 0;
          this.queue.push(nextProps.data);
          /* If an array was supplied */
        } else {
          var _queue;

          /* Extend the tween queue */
          (_queue = this.queue).push.apply(_queue, _toConsumableArray(nextProps.data));
        }
        /* Start traversing the tween queue */


        this.traverseQueue();
      }

      return nextState.animationInfo.animating || nextState.animationInfo.terminating || !equalProps;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loopID) {
        this.getTimer().unsubscribe(this.loopID);
      } else {
        this.getTimer().stop();
      }
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      if (this.context.getTimer) {
        return this.context.getTimer();
      }

      if (!this.timer) {
        this.timer = new __WEBPACK_IMPORTED_MODULE_4__victory_util_timer__["a" /* default */]();
      }

      return this.timer;
    }
  }, {
    key: "toNewName",
    value: function toNewName(ease) {
      // d3-ease changed the naming scheme for ease from "linear" -> "easeLinear" etc.
      var capitalize = function (s) {
        return s && s[0].toUpperCase() + s.slice(1);
      };

      return "ease".concat(capitalize(ease));
    }
    /* Traverse the tween queue */

  }, {
    key: "traverseQueue",
    value: function traverseQueue() {
      var _this2 = this;

      if (this.queue.length) {
        /* Get the next index */
        var data = this.queue[0];
        /* compare cached version to next props */

        this.interpolator = Object(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* victoryInterpolator */])(this.state.data, data);
        /* reset step to zero */

        if (this.props.delay) {
          setTimeout(function () {
            _this2.loopID = _this2.getTimer().subscribe(_this2.functionToBeRunEachFrame, _this2.props.duration);
          }, this.props.delay);
        } else {
          this.loopID = this.getTimer().subscribe(this.functionToBeRunEachFrame, this.props.duration);
        }
      } else if (this.props.onEnd) {
        this.props.onEnd();
      }
    }
    /* every frame we... */

  }, {
    key: "functionToBeRunEachFrame",
    value: function functionToBeRunEachFrame(elapsed, duration) {
      /*
        step can generate imprecise values, sometimes greater than 1
        if this happens set the state to 1 and return, cancelling the timer
      */
      duration = duration !== undefined ? duration : this.props.duration;
      var step = duration ? elapsed / duration : 1;

      if (step >= 1) {
        this.setState({
          data: this.interpolator(1),
          animationInfo: {
            progress: 1,
            animating: false,
            terminating: true
          }
        });

        if (this.loopID) {
          this.getTimer().unsubscribe(this.loopID);
        }

        this.queue.shift();
        this.traverseQueue();
        return;
      }
      /*
        if we're not at the end of the timer, set the state by passing
        current step value that's transformed by the ease function to the
        interpolator, which is cached for performance whenever props are received
      */


      this.setState({
        data: this.interpolator(this.ease(step)),
        animationInfo: {
          progress: step,
          animating: step < 1
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state.data, this.state.animationInfo);
    }
  }]);

  return VictoryAnimation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(VictoryAnimation, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAnimation"
});
Object.defineProperty(VictoryAnimation, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
    delay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    duration: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    easing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"]),
    onEnd: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  }
});
Object.defineProperty(VictoryAnimation, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    data: {},
    delay: 0,
    duration: 1000,
    easing: "quadInOut"
  }
});
Object.defineProperty(VictoryAnimation, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTimer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  }
});


/***/ }),
/* 94 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_Stack.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 179),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 180),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 181),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 182),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 183);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 95 */
/*!**************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isStrictComparable.js ***!
  \**************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 11);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 96 */
/*!*******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_matchesStrictComparable.js ***!
  \*******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 97 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/toString.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 195);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 98 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_Symbol.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 196);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 99 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_freeGlobal.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 197)))

/***/ }),
/* 100 */
/*!************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/hasIn.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 198),
    hasPath = __webpack_require__(/*! ./_hasPath */ 199);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 101 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isIndex.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 102 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/math.js ***!
  \*****************************************************************************/
/*! exports provided: deg2rad, rad2deg */
/*! exports used: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 103 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/rgb.js ***!
  \**********************************************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(/*! ./basis */ 66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(/*! ./basisClosed */ 104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(/*! ./color */ 20);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 104 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/basisClosed.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(/*! ./basis */ 66);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 105 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/constant.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 106 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/array.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(/*! ./value */ 63);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 107 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/date.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 108 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/object.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(/*! ./value */ 63);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 109 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/string.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(/*! ./number */ 40);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 110 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/uniqueId.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ 97);

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),
/* 111 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/toFinite.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ 235);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 112 */
/*!*********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-portal/portal.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__victory_util_prop_types__ = __webpack_require__(/*! ../victory-util/prop-types */ 21);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal(props) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));
    _this.map = {};
    _this.index = 1;
    _this.portalUpdate = _this.portalUpdate.bind(_assertThisInitialized(_this));
    _this.portalRegister = _this.portalRegister.bind(_assertThisInitialized(_this));
    _this.portalDeregister = _this.portalDeregister.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Portal, [{
    key: "portalRegister",
    value: function portalRegister() {
      return ++this.index;
    }
  }, {
    key: "portalUpdate",
    value: function portalUpdate(key, element) {
      this.map[key] = element;
      this.forceUpdate();
    }
  }, {
    key: "portalDeregister",
    value: function portalDeregister(key) {
      delete this.map[key];
      this.forceUpdate();
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this2 = this;

      return Object.keys(this.map).map(function (key) {
        var el = _this2.map[key];
        return el ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(el, {
          key: key
        }) : el;
      });
    } // Overridden in victory-core-native

  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", this.props, this.getChildren());
    }
  }]);

  return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Object.defineProperty(Portal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "Portal"
});
Object.defineProperty(Portal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    height: __WEBPACK_IMPORTED_MODULE_2__victory_util_prop_types__["a" /* default */].nonNegative,
    style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    viewBox: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    width: __WEBPACK_IMPORTED_MODULE_2__victory_util_prop_types__["a" /* default */].nonNegative
  }
});


/***/ }),
/* 113 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_basePickBy.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 59),
    baseSet = __webpack_require__(/*! ./_baseSet */ 237),
    castPath = __webpack_require__(/*! ./_castPath */ 39);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 114 */
/*!*****************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-portal/victory-portal.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictoryPortal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_util_log__ = __webpack_require__(/*! ../victory-util/log */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var VictoryPortal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryPortal, _React$Component);

  function VictoryPortal() {
    _classCallCheck(this, VictoryPortal);

    return _possibleConstructorReturn(this, (VictoryPortal.__proto__ || Object.getPrototypeOf(VictoryPortal)).apply(this, arguments));
  }

  _createClass(VictoryPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.checkedContext) {
        if (typeof this.context.portalUpdate !== "function") {
          var msg = "`renderInPortal` is not supported outside of `VictoryContainer`. " + "Component will be rendered in place";
          __WEBPACK_IMPORTED_MODULE_3__victory_util_log__["a" /* default */].warn(msg);
          this.renderInPlace = true;
        }

        this.checkedContext = true;
      }

      this.forceUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.renderInPlace) {
        this.portalKey = this.portalKey || this.context.portalRegister();
        this.context.portalUpdate(this.portalKey, this.element);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.context && this.context.portalDeregister) {
        this.context.portalDeregister(this.portalKey);
      }
    } // Overridden in victory-core-native

  }, {
    key: "renderPortal",
    value: function renderPortal(child) {
      if (this.renderInPlace) {
        return child;
      }

      this.element = child;
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var children = Array.isArray(this.props.children) ? this.props.children[0] : this.props.children;
      var groupComponent = this.props.groupComponent;
      var childProps = children && children.props || {};
      var standardProps = childProps.groupComponent ? {
        groupComponent: groupComponent,
        standalone: false
      } : {};

      var newProps = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()(standardProps, childProps, __WEBPACK_IMPORTED_MODULE_4__victory_util_helpers__["a" /* default */].omit(this.props, ["children", "groupComponent"]));

      var child = children && __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(children, newProps);
      return this.renderPortal(child);
    }
  }]);

  return VictoryPortal;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Object.defineProperty(VictoryPortal, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryPortal"
});
Object.defineProperty(VictoryPortal, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "portal"
});
Object.defineProperty(VictoryPortal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
    groupComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element
  }
});
Object.defineProperty(VictoryPortal, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    groupComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", null)
  }
});
Object.defineProperty(VictoryPortal, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    portalDeregister: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    portalRegister: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    portalUpdate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
  }
});


/***/ }),
/* 115 */
/*!**************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/label-helpers.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(/*! ./helpers */ 3);
/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
 // Private Functions

function getVerticalAnchor(props, datum) {
  datum = datum || {};
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = props.style && props.style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!props.horizontal) {
    return sign >= 0 ? "end" : "start";
  } else {
    return "middle";
  }
}

function getTextAnchor(props, datum) {
  datum = datum || {};
  var style = props.style,
      horizontal = props.horizontal;
  var sign = datum._y >= 0 ? 1 : -1;
  var labelStyle = style && style.labels || {};

  if (datum.verticalAnchor || labelStyle.verticalAnchor) {
    return datum.verticalAnchor || labelStyle.verticalAnchor;
  } else if (!horizontal) {
    return "middle";
  } else {
    return sign >= 0 ? "start" : "end";
  }
}

function getAngle(props, datum) {
  datum = datum || {};
  var labelStyle = props.style && props.style.labels || {};
  return datum.angle === undefined ? labelStyle.angle : datum.angle;
}

function getPadding(props, datum) {
  datum = datum || {};
  var horizontal = props.horizontal,
      style = props.style;
  var labelStyle = style.labels || {};
  var defaultPadding = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].evaluateProp(labelStyle.padding, props) || 0;
  var sign = datum._y < 0 ? -1 : 1;
  return {
    x: horizontal ? sign * defaultPadding : 0,
    y: horizontal ? 0 : -1 * sign * defaultPadding
  };
}

function getOffset(props, datum) {
  if (props.polar) {
    return {};
  }

  var padding = getPadding(props, datum);
  return {
    dx: padding.x,
    dy: padding.y
  };
}

function getPosition(props, datum) {
  var polar = props.polar;

  var _Helpers$scalePoint = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].scalePoint(props, datum),
      x = _Helpers$scalePoint.x,
      y = _Helpers$scalePoint.y;

  if (!polar) {
    return {
      x: x,
      y: y
    };
  } else {
    var polarPadding = getPolarPadding(props, datum);
    return {
      x: x + polarPadding.x,
      y: y + polarPadding.y
    };
  }
}

function getPolarPadding(props, datum) {
  var style = props.style;
  var degrees = getDegrees(props, datum);
  var labelStyle = style.labels || {};
  var padding = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].evaluateProp(labelStyle.padding, props) || 0;
  var angle = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].degreesToRadians(degrees);
  return {
    x: padding * Math.cos(angle),
    y: -padding * Math.sin(angle)
  };
}

function getLabelPlacement(props) {
  var labelComponent = props.labelComponent,
      labelPlacement = props.labelPlacement,
      polar = props.polar;
  var defaultLabelPlacement = polar ? "perpendicular" : "vertical";
  return labelPlacement ? labelPlacement : labelComponent.props && labelComponent.props.labelPlacement || defaultLabelPlacement;
}

function getPolarOrientation(degrees) {
  // eslint-disable-next-line no-magic-numbers
  if (degrees < 45 || degrees > 315) {
    return "right"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees >= 45 && degrees <= 135) {
    return "top"; // eslint-disable-next-line no-magic-numbers
  } else if (degrees > 135 && degrees < 225) {
    return "left";
  } else {
    return "bottom";
  }
} // Exported Functions


function getText(props, datum, index) {
  datum = datum || {};

  if (datum.label !== undefined) {
    return datum.label;
  }

  return Array.isArray(props.labels) ? props.labels[index] : props.labels;
}

function getPolarTextAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);

  if (labelPlacement === "perpendicular" || labelPlacement === "vertical" && (degrees === 90 || degrees === 270)) {
    return "middle";
  }

  return degrees <= 90 || degrees > 270 ? "start" : "end";
}

function getPolarVerticalAnchor(props, degrees) {
  var labelPlacement = getLabelPlacement(props);
  var orientation = getPolarOrientation(degrees);

  if (labelPlacement === "parallel" || orientation === "left" || orientation === "right") {
    return "middle";
  }

  return orientation === "top" ? "end" : "start";
}

function getPolarAngle(props, baseAngle) {
  var labelPlacement = props.labelPlacement,
      datum = props.datum;

  if (!labelPlacement || labelPlacement === "vertical") {
    return 0;
  }

  var degrees = baseAngle !== undefined ? baseAngle : getDegrees(props, datum);
  var sign = degrees > 90 && degrees < 180 || degrees > 270 ? 1 : -1;
  var angle;

  if (degrees === 0 || degrees === 180) {
    angle = 90;
  } else if (degrees > 0 && degrees < 180) {
    angle = 90 - degrees;
  } else if (degrees > 180 && degrees < 360) {
    angle = 270 - degrees;
  }

  var labelRotation = labelPlacement === "perpendicular" ? 0 : 90;
  return angle + sign * labelRotation;
}

function getDegrees(props, datum) {
  var _Helpers$getPoint = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].getPoint(datum),
      x = _Helpers$getPoint.x;

  return __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].radiansToDegrees(props.scale.x(x));
}

function getProps(props, index) {
  var scale = props.scale,
      data = props.data,
      style = props.style,
      horizontal = props.horizontal,
      polar = props.polar,
      width = props.width,
      height = props.height;
  var datum = data[index];
  var degrees = getDegrees(props, datum);
  var textAnchor = polar ? getPolarTextAnchor(props, degrees) : getTextAnchor(props, datum);
  var verticalAnchor = polar ? getPolarVerticalAnchor(props, degrees) : getVerticalAnchor(props, datum);
  var angle = getAngle(props, datum);
  var text = getText(props, datum, index);
  var labelPlacement = getLabelPlacement(props);

  var _getPosition = getPosition(props, datum),
      x = _getPosition.x,
      y = _getPosition.y;

  var _getOffset = getOffset(props, datum),
      dx = _getOffset.dx,
      dy = _getOffset.dy;

  return {
    angle: angle,
    data: data,
    datum: datum,
    horizontal: horizontal,
    index: index,
    polar: polar,
    scale: scale,
    labelPlacement: labelPlacement,
    text: text,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    width: width,
    height: height,
    style: style.labels
  };
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getText: getText,
  getPolarTextAnchor: getPolarTextAnchor,
  getPolarVerticalAnchor: getPolarVerticalAnchor,
  getPolarAngle: getPolarAngle,
  getDegrees: getDegrees,
  getProps: getProps
});

/***/ }),
/* 116 */
/*!************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/tspan.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var TSpan = function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tspan", props);
};

/* harmony default export */ __webpack_exports__["a"] = (TSpan);

/***/ }),
/* 117 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/text.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var Text = function (props) {
  var children = props.children,
      title = props.title,
      desc = props.desc,
      rest = _objectWithoutProperties(props, ["children", "title", "desc"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("text", rest, title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", null, title), desc && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("desc", null, desc), children);
};

Text.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  desc: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),
/* 118 */
/*!*************************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-transition/victory-transition.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictoryTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject__ = __webpack_require__(/*! lodash/isObject */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick__ = __webpack_require__(/*! lodash/pick */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__victory_animation_victory_animation__ = __webpack_require__(/*! ../victory-animation/victory-animation */ 93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__victory_util_collection__ = __webpack_require__(/*! ../victory-util/collection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__victory_util_timer__ = __webpack_require__(/*! ../victory-util/timer */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__victory_util_transitions__ = __webpack_require__(/*! ../victory-util/transitions */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_fast_compare__ = __webpack_require__(/*! react-fast-compare */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_fast_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_fast_compare__);





function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var VictoryTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryTransition, _React$Component);

  function VictoryTransition(props) {
    var _this;

    _classCallCheck(this, VictoryTransition);

    _this = _possibleConstructorReturn(this, (VictoryTransition.__proto__ || Object.getPrototypeOf(VictoryTransition)).call(this, props));
    _this.state = {
      nodesShouldLoad: false,
      nodesDoneLoad: false
    };
    var child = _this.props.children;
    var polar = child.props.polar;
    _this.continuous = !polar && child.type && child.type.continuous === true;
    _this.getTransitionState = _this.getTransitionState.bind(_assertThisInitialized(_this));
    _this.getTimer = _this.getTimer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(VictoryTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        nodesShouldLoad: true
      }); //eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      if (!__WEBPACK_IMPORTED_MODULE_11_react_fast_compare___default()(this.props, nextProps)) {
        this.getTimer().bypassAnimation();
        this.setState(this.getTransitionState(this.props, nextProps), function () {
          return _this2.getTimer().resumeAnimation();
        });
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.getTimer().stop();
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      if (this.context.getTimer) {
        return this.context.getTimer();
      }

      if (!this.timer) {
        this.timer = new __WEBPACK_IMPORTED_MODULE_9__victory_util_timer__["a" /* default */]();
      }

      return this.timer;
    }
  }, {
    key: "getTransitionState",
    value: function getTransitionState(props, nextProps) {
      var animate = props.animate;

      if (!animate) {
        return {};
      } else if (animate.parentState) {
        var state = animate.parentState;
        var oldProps = state.nodesWillExit ? props : null;
        return {
          oldProps: oldProps,
          nextProps: nextProps
        };
      } else {
        var oldChildren = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(props.children);
        var nextChildren = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(nextProps.children);

        var _Transitions$getIniti = __WEBPACK_IMPORTED_MODULE_10__victory_util_transitions__["a" /* default */].getInitialTransitionState(oldChildren, nextChildren),
            nodesWillExit = _Transitions$getIniti.nodesWillExit,
            nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
            childrenTransitions = _Transitions$getIniti.childrenTransitions,
            nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

        return {
          nodesWillExit: nodesWillExit,
          nodesWillEnter: nodesWillEnter,
          childrenTransitions: childrenTransitions,
          nodesShouldEnter: nodesShouldEnter,
          oldProps: nodesWillExit ? props : null,
          nextProps: nextProps
        };
      }
    }
  }, {
    key: "getDomainFromChildren",
    value: function getDomainFromChildren(props, axis) {
      var getChildDomains = function (children) {
        return children.reduce(function (memo, child) {
          if (child.type && __WEBPACK_IMPORTED_MODULE_2_lodash_isFunction___default()(child.type.getDomain)) {
            var childDomain = child.props && child.type.getDomain(child.props, axis);
            return childDomain ? memo.concat(childDomain) : memo;
          } else if (child.props && child.props.children) {
            return memo.concat(getChildDomains(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(child.props.children)));
          }

          return memo;
        }, []);
      };

      var child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(props.children)[0];
      var childProps = child.props || {};
      var domain = Array.isArray(childProps.domain) ? childProps.domain : childProps.domain && childProps.domain[axis];

      if (!childProps.children && domain) {
        return domain;
      } else {
        var childDomains = getChildDomains([child]);
        return childDomains.length === 0 ? [0, 1] : [__WEBPACK_IMPORTED_MODULE_7__victory_util_collection__["a" /* default */].getMinValue(childDomains), __WEBPACK_IMPORTED_MODULE_7__victory_util_collection__["a" /* default */].getMaxValue(childDomains)];
      }
    }
  }, {
    key: "pickProps",
    value: function pickProps() {
      if (!this.state) {
        return this.props;
      }

      return this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
    }
  }, {
    key: "pickDomainProps",
    value: function pickDomainProps(props) {
      var parentState = __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(props.animate) && props.animate.parentState;

      if (parentState && parentState.nodesWillExit) {
        return this.continous || parentState.continuous ? parentState.nextProps || this.state.nextProps || props : props;
      }

      return this.continuous && this.state.nodesWillExit ? this.state.nextProps || props : props;
    }
  }, {
    key: "getClipWidth",
    value: function getClipWidth(props, child) {
      var getDefaultClipWidth = function () {
        var range = __WEBPACK_IMPORTED_MODULE_8__victory_util_helpers__["a" /* default */].getRange(child.props, "x");
        return range ? Math.abs(range[1] - range[0]) : props.width;
      };

      var clipWidth = this.transitionProps ? this.transitionProps.clipWidth : undefined;
      return clipWidth !== undefined ? clipWidth : getDefaultClipWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.pickProps();
      var getTransitionProps = __WEBPACK_IMPORTED_MODULE_0_lodash_isObject___default()(this.props.animate) && this.props.animate.getTransitions ? this.props.animate.getTransitions : __WEBPACK_IMPORTED_MODULE_10__victory_util_transitions__["a" /* default */].getTransitionPropsFactory(props, this.state, function (newState) {
        return _this3.setState(newState);
      });
      var child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(props.children)[0];
      var transitionProps = getTransitionProps(child);
      this.transitionProps = transitionProps;
      var domain = {
        x: this.getDomainFromChildren(this.pickDomainProps(props), "x"),
        y: this.getDomainFromChildren(props, "y")
      };
      var clipWidth = this.getClipWidth(props, child);

      var combinedProps = __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default()({
        domain: domain,
        clipWidth: clipWidth
      }, transitionProps, child.props);

      var animationWhitelist = props.animationWhitelist || [];
      var whitelist = animationWhitelist.concat(["clipWidth"]);
      var propsToAnimate = whitelist.length ? __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(combinedProps, whitelist) : combinedProps;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__victory_animation_victory_animation__["a" /* default */], _extends({}, combinedProps.animate, {
        data: propsToAnimate
      }), function (newProps) {
        if (child.props.groupComponent) {
          var groupComponent = _this3.continuous ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child.props.groupComponent, {
            clipWidth: newProps.clipWidth || 0
          }) : child.props.groupComponent;
          return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default()({
            animate: null,
            animating: true,
            groupComponent: groupComponent
          }, newProps, combinedProps));
        }

        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default()({
          animate: null,
          animating: true
        }, newProps, combinedProps));
      });
    }
  }]);

  return VictoryTransition;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Object.defineProperty(VictoryTransition, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryTransition"
});
Object.defineProperty(VictoryTransition, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    animate: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object]),
    animationWhitelist: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.array,
    children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node
  }
});


/***/ }),
/* 119 */
/*!****************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/clip-path.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var ClipPath = function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("defs", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("clipPath", {
    id: props.clipId
  }, props.children));
};

ClipPath.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),
  clipId: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
};
/* harmony default export */ __webpack_exports__["a"] = (ClipPath);

/***/ }),
/* 120 */
/*!*************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/circle.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }



var Circle = function (props) {
  // eslint-disable-next-line react/prop-types
  var desc = props.desc,
      rest = _objectWithoutProperties(props, ["desc"]);

  return desc ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("desc", null, desc)) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", _extends({
    vectorEffect: "non-scaling-stroke"
  }, rest));
};

/* harmony default export */ __webpack_exports__["a"] = (Circle);

/***/ }),
/* 121 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arrayIncludes.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ 58);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 122 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arrayIncludesWith.js ***!
  \*************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 123 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseUniq.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 56),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 121),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 122),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 57),
    createSet = __webpack_require__(/*! ./_createSet */ 259),
    setToArray = __webpack_require__(/*! ./_setToArray */ 260);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 124 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/bisect.js ***!
  \*******************************************************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(/*! ./ascending */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(/*! ./bisector */ 125);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 125 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/bisector.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(/*! ./ascending */ 23);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 126 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/pairs.js ***!
  \******************************************************************************/
/*! exports provided: default, pair */
/*! exports used: pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 127 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/deviation.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(/*! ./variance */ 128);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 128 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/variance.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(/*! ./number */ 30);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 129 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/extent.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 130 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/array.js ***!
  \******************************************************************************/
/*! exports provided: slice, map */
/*! exports used: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 131 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/range.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 132 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/ticks.js ***!
  \******************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/*! exports used: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 133 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/threshold/sturges.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 134 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/min.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 135 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/transpose.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(/*! ./min */ 134);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 136 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/ordinal.js ***!
  \********************************************************************************/
/*! exports provided: implicit, default */
/*! exports used: default, implicit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(/*! d3-collection */ 283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(/*! ./array */ 15);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 137 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/number.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 138 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/index.js ***!
  \*******************************************************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/*! exports used: format, formatPrefix, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(/*! ./defaultLocale */ 291);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale__ = __webpack_require__(/*! ./locale */ 139);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatSpecifier__ = __webpack_require__(/*! ./formatSpecifier */ 140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__precisionFixed__ = __webpack_require__(/*! ./precisionFixed */ 298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__precisionPrefix__ = __webpack_require__(/*! ./precisionPrefix */ 299);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__precisionRound__ = __webpack_require__(/*! ./precisionRound */ 300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__precisionRound__["a"]; });








/***/ }),
/* 139 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/locale.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(/*! ./exponent */ 46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(/*! ./formatGroup */ 292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(/*! ./formatNumerals */ 293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(/*! ./formatSpecifier */ 140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTrim__ = __webpack_require__(/*! ./formatTrim */ 294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatTypes__ = __webpack_require__(/*! ./formatTypes */ 295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__ = __webpack_require__(/*! ./formatPrefixAuto */ 141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__identity__ = __webpack_require__(/*! ./identity */ 297);









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_7__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!__WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_5__formatTypes__["a" /* default */][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(__WEBPACK_IMPORTED_MODULE_4__formatTrim__["a" /* default */])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_6__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 140 */
/*!*****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatSpecifier.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),
/* 141 */
/*!******************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatPrefixAuto.js ***!
  \******************************************************************************************/
/*! exports provided: prefixExponent, default */
/*! exports used: default, prefixExponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(/*! ./formatDecimal */ 82);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 142 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/nice.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 143 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/time.js ***!
  \*****************************************************************************/
/*! exports provided: calendar, default */
/*! exports used: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(/*! d3-time */ 83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(/*! d3-time-format */ 144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(/*! ./array */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(/*! ./continuous */ 45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(/*! ./nice */ 142);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["c" /* bisector */])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 144 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time-format/src/index.js ***!
  \************************************************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/*! exports used: timeFormat, utcFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(/*! ./defaultLocale */ 84);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale__ = __webpack_require__(/*! ./locale */ 145);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isoFormat__ = __webpack_require__(/*! ./isoFormat */ 146);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isoParse__ = __webpack_require__(/*! ./isoParse */ 320);
/* unused harmony reexport isoParse */






/***/ }),
/* 145 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time-format/src/locale.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(/*! d3-time */ 83);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 146 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time-format/src/isoFormat.js ***!
  \****************************************************************************************/
/*! exports provided: isoSpecifier, default */
/*! exports used: isoSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(/*! ./defaultLocale */ 84);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 147 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/immutable.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  IMMUTABLE_ITERABLE: "@@__IMMUTABLE_ITERABLE__@@",
  IMMUTABLE_RECORD: "@@__IMMUTABLE_RECORD__@@",
  IMMUTABLE_LIST: "@@__IMMUTABLE_LIST__@@",
  IMMUTABLE_MAP: "@@__IMMUTABLE_MAP__@@",
  isImmutable: function (x) {
    return this.isIterable(x) || this.isRecord(x);
  },
  isIterable: function (x) {
    return !!(x && x[this.IMMUTABLE_ITERABLE]);
  },
  isRecord: function (x) {
    return !!(x && x[this.IMMUTABLE_RECORD]);
  },
  isList: function (x) {
    return !!(x && x[this.IMMUTABLE_LIST]);
  },
  isMap: function (x) {
    return !!(x && x[this.IMMUTABLE_MAP]);
  },
  shallowToJS: function (x, whitelist) {
    var _this = this;

    return this.isIterable(x) ? x.reduce(function (prev, curr, key) {
      if (whitelist && whitelist[key]) {
        curr = _this.shallowToJS(curr);
      }

      prev[key] = curr;
      return prev;
    }, this.isList(x) ? [] : {}) : x;
  }
});

/***/ }),
/* 148 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/values.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(/*! ./_baseValues */ 336),
    keys = __webpack_require__(/*! ./keys */ 17);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 149 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/uniqBy.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ 123);

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),
/* 150 */
/*!*****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/axis.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_without__ = __webpack_require__(/*! lodash/without */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes__ = __webpack_require__(/*! lodash/includes */ 29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_values__ = __webpack_require__(/*! lodash/values */ 148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__ = __webpack_require__(/*! lodash/orderBy */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_range__ = __webpack_require__(/*! lodash/range */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_range__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq__ = __webpack_require__(/*! lodash/uniq */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_invert__ = __webpack_require__(/*! lodash/invert */ 342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_invert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_invert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isObject__ = __webpack_require__(/*! lodash/isObject */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_identity__ = __webpack_require__(/*! lodash/identity */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__collection__ = __webpack_require__(/*! ./collection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__domain__ = __webpack_require__(/*! ./domain */ 85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers__ = __webpack_require__(/*! ./helpers */ 3);













function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* eslint-disable func-style */




/**
 * Returns the axis (x or y) of a particular axis component
 * @param {Object} props: the props object.
 * @param {Boolean} horizontal: true for horizontal charts
 * @returns {String} the dimension appropriate for the axis given its props
 */

function getAxis(props) {
  var dependentAxis = props.dependentAxis;
  return dependentAxis ? "y" : "x";
}
/**
 * Returns all axis components that pass a given predicate
 * @param {Array} childComponents: an array of children
 * @param {Function} predicate: a predicate function that will be called with each
 * @returns {Array} all axis components that pass the given predicate or []
 */


function findAxisComponents(childComponents, predicate) {
  predicate = predicate || __WEBPACK_IMPORTED_MODULE_9_lodash_identity___default.a;

  var findAxes = function (children) {
    return children.reduce(function (memo, child) {
      if (child.type && child.type.role === "axis" && predicate(child)) {
        return memo.concat(child);
      } else if (child.props && child.props.children) {
        return memo.concat(findAxes(__WEBPACK_IMPORTED_MODULE_12_react___default.a.Children.toArray(child.props.children)));
      }

      return memo;
    }, []);
  };

  return findAxes(childComponents);
}
/**
 * Returns a single axis component of the desired axis type (x or y)
 * @param {Array} childComponents: an array of children
 * @param {String} axis: desired axis either "x" or "y".
 * @returns {ReactComponent} an axis component of the desired axis or undefined
 */


function getAxisComponent(childComponents, axis) {
  var matchesAxis = function (component) {
    var type = component.type.getAxis(component.props);
    return type === axis;
  };

  return findAxisComponents(childComponents, matchesAxis)[0];
}
/**
 * Returns all axis components of the desired axis type (x or y) along with any
 * parent components excluding VictoryChart
 * @param {Array} childComponents: an optional array of children.
 * @param {String} type: desired axis either "dependent" or "independent".
 * @returns {ReactComponent} an axis component of the desired type or undefined
 */


function getAxisComponentsWithParent(childComponents, type) {
  var matchesType = function (child) {
    return type === "dependent" ? child.props.dependentAxis : !child.props.dependentAxis;
  };

  var findComponents = function (children) {
    return children.reduce(function (memo, child) {
      if (child.type && child.type.role === "axis" && matchesType(child)) {
        return memo.concat(child);
      } else if (child.props && child.props.children) {
        var childAxis = findComponents(__WEBPACK_IMPORTED_MODULE_12_react___default.a.Children.toArray(child.props.children));
        return childAxis.length > 0 ? memo.concat(child) : memo;
      }

      return memo;
    }, []);
  };

  return findComponents(childComponents);
}

function getOrigin(domain) {
  var getSingleOrigin = function (d) {
    var domainMin = Math.min.apply(Math, _toConsumableArray(d));
    var domainMax = Math.max.apply(Math, _toConsumableArray(d));
    return domainMax < 0 ? domainMax : Math.max(0, domainMin);
  };

  return {
    x: __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsDates(domain.x) ? new Date(Math.min.apply(Math, _toConsumableArray(domain.x))) : getSingleOrigin(domain.x),
    y: __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsDates(domain.y) ? new Date(Math.min.apply(Math, _toConsumableArray(domain.y))) : getSingleOrigin(domain.y)
  };
}

function getOriginSign(origin, domain) {
  var getSign = function () {
    return origin <= 0 && Math.max.apply(Math, _toConsumableArray(domain)) <= 0 ? "negative" : "positive";
  };

  return __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsDates(domain) ? "positive" : getSign();
}
/**
 * @param {Object} props: axis component props
 * @returns {Boolean} true when the axis is vertical
 */


function isVertical(props) {
  var orientation = props.orientation || (props.dependentAxis ? "left" : "bottom");
  var vertical = {
    top: false,
    bottom: false,
    left: true,
    right: true
  };
  return vertical[orientation];
}
/**
 * @param {Object} props: axis component props
 * @returns {Boolean} true when tickValues contain strings
 */


function stringTicks(props) {
  return props.tickValues !== undefined && __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsStrings(props.tickValues);
}

function getDefaultTickFormat(props) {
  var tickValues = props.tickValues;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];
  var fallbackFormat = tickValues && !__WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsDates(tickValues) ? function (x) {
    return x;
  } : undefined;

  if (!stringMap) {
    return stringTicks(props) ? function (x, index) {
      return tickValues[index];
    } : fallbackFormat;
  } else {
    var invertedStringMap = stringMap && __WEBPACK_IMPORTED_MODULE_6_lodash_invert___default()(stringMap);

    var tickValueArray = __WEBPACK_IMPORTED_MODULE_3_lodash_orderBy___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_values___default()(stringMap), function (n) {
      return n;
    });

    var dataNames = tickValueArray.map(function (tick) {
      return invertedStringMap[tick];
    }); // string ticks should have one tick of padding at the beginning

    var dataTicks = [""].concat(_toConsumableArray(dataNames), [""]);
    return function (x) {
      return dataTicks[x];
    };
  }
}

function getTickFormat(props, scale) {
  var tickFormat = props.tickFormat;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];

  if (!tickFormat) {
    var defaultTickFormat = getDefaultTickFormat(props);
    var scaleTickFormat = scale.tickFormat && __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default()(scale.tickFormat) ? scale.tickFormat() : function (x) {
      return x;
    };
    return defaultTickFormat || scaleTickFormat;
  } else if (tickFormat && Array.isArray(tickFormat)) {
    return function (x, index) {
      return tickFormat[index];
    };
  } else if (tickFormat && __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default()(tickFormat)) {
    var applyStringTicks = function (tick, index, ticks) {
      var invertedStringMap = __WEBPACK_IMPORTED_MODULE_6_lodash_invert___default()(stringMap);

      var stringTickArray = ticks.map(function (t) {
        return invertedStringMap[t];
      });
      return props.tickFormat(invertedStringMap[tick], index, stringTickArray);
    };

    return stringMap ? applyStringTicks : tickFormat;
  } else {
    return function (x) {
      return x;
    };
  }
}

function getStringTicks(props) {
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];
  var categories = Array.isArray(props.categories) ? props.categories : props.categories && props.categories[axis];
  var ticksFromCategories = categories && __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsOnlyStrings(categories) ? categories.map(function (tick) {
    return stringMap[tick];
  }) : undefined;

  var ticksFromStringMap = stringMap && __WEBPACK_IMPORTED_MODULE_2_lodash_values___default()(stringMap);

  return ticksFromCategories && ticksFromCategories.length !== 0 ? ticksFromCategories : ticksFromStringMap;
}

function getTickArray(props) {
  var tickValues = props.tickValues,
      tickFormat = props.tickFormat;
  var axis = getAxis(props);
  var stringMap = props.stringMap && props.stringMap[axis];

  var getTicksFromFormat = function () {
    if (!tickFormat || !Array.isArray(tickFormat)) {
      return undefined;
    }

    return __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsStrings(tickFormat) ? tickFormat.map(function (t, i) {
      return i;
    }) : tickFormat;
  };

  var ticks = tickValues;

  if (stringMap) {
    ticks = getStringTicks(props);
  }

  if (tickValues && __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].containsStrings(tickValues)) {
    ticks = stringMap ? tickValues.map(function (tick) {
      return stringMap[tick];
    }) : __WEBPACK_IMPORTED_MODULE_4_lodash_range___default()(1, tickValues.length + 1);
  }

  var tickArray = ticks ? __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(ticks) : getTicksFromFormat(props);

  var filterArray = function (arr) {
    var domain = props.domain && props.domain[axis] || props.domain;
    return Array.isArray(domain) ? arr.filter(function (t) {
      return t >= Math.min.apply(Math, _toConsumableArray(domain)) && t <= Math.max.apply(Math, _toConsumableArray(domain));
    }) : arr;
  };

  return Array.isArray(tickArray) && tickArray.length ? filterArray(tickArray) : undefined;
}

function downsampleTicks(ticks, tickCount) {
  if (!tickCount || !Array.isArray(ticks) || ticks.length <= tickCount) {
    return ticks;
  }

  var k = Math.floor(ticks.length / tickCount);
  return ticks.filter(function (d, i) {
    return i % k === 0;
  });
}

function getTicks(props, scale, filterZero) {
  var tickCount = props.tickCount;
  var tickValues = getTickArray(props);

  if (tickValues) {
    return downsampleTicks(tickValues, tickCount);
  } else if (scale.ticks && __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default()(scale.ticks)) {
    // eslint-disable-next-line no-magic-numbers
    var defaultTickCount = tickCount || 5;
    var scaleTicks = scale.ticks(defaultTickCount);
    var tickArray = Array.isArray(scaleTicks) && scaleTicks.length ? scaleTicks : scale.domain();
    var ticks = downsampleTicks(tickArray, tickCount);

    if (filterZero) {
      var filteredTicks = __WEBPACK_IMPORTED_MODULE_1_lodash_includes___default()(ticks, 0) ? __WEBPACK_IMPORTED_MODULE_0_lodash_without___default()(ticks, 0) : ticks;
      return filteredTicks.length ? filteredTicks : ticks;
    }

    return ticks;
  }

  return scale.domain();
}
/**
 * Returns a domain based tickValues
 * @param {Object} props: the props object
 * @param {String} axis: either x or y
 * @returns {Array} returns a domain from tickValues
 */
//eslint-disable-next-line max-statements


function getDomainFromData(props, axis) {
  var polar = props.polar,
      _props$startAngle = props.startAngle,
      startAngle = _props$startAngle === void 0 ? 0 : _props$startAngle,
      _props$endAngle = props.endAngle,
      endAngle = _props$endAngle === void 0 ? 360 : _props$endAngle;
  var tickValues = getTickArray(props);

  if (!Array.isArray(tickValues)) {
    return undefined;
  }

  var minDomain = __WEBPACK_IMPORTED_MODULE_14__domain__["a" /* default */].getMinFromProps(props, axis);
  var maxDomain = __WEBPACK_IMPORTED_MODULE_14__domain__["a" /* default */].getMaxFromProps(props, axis);
  var tickStrings = stringTicks(props);
  var ticks = tickValues.map(function (value) {
    return +value;
  });
  var defaultMin = tickStrings ? 1 : __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].getMinValue(ticks);
  var defaultMax = tickStrings ? tickValues.length : __WEBPACK_IMPORTED_MODULE_13__collection__["a" /* default */].getMaxValue(ticks);
  var min = minDomain !== undefined ? minDomain : defaultMin;
  var max = maxDomain !== undefined ? maxDomain : defaultMax;
  var initialDomain = __WEBPACK_IMPORTED_MODULE_14__domain__["a" /* default */].getDomainFromMinMax(min, max);
  var domain = polar && axis === "x" && Math.abs(startAngle - endAngle) === 360 ? __WEBPACK_IMPORTED_MODULE_14__domain__["a" /* default */].getSymmetricDomain(initialDomain, ticks) : initialDomain;

  if (isVertical(props) && !polar) {
    domain.reverse();
  }

  return domain;
} // exposed for use by VictoryChart


function getDomain(props, axis) {
  var inherentAxis = getAxis(props);

  if (axis && axis !== inherentAxis) {
    return undefined;
  }

  return __WEBPACK_IMPORTED_MODULE_14__domain__["a" /* default */].createDomainFunction(getDomainFromData)(props, inherentAxis);
}

function getAxisValue(props, axis) {
  if (!props.axisValue) {
    return undefined;
  }

  var scaleAxis = axis === "x" ? "y" : "x";
  var scale = __WEBPACK_IMPORTED_MODULE_7_lodash_isObject___default()(props.scale) && __WEBPACK_IMPORTED_MODULE_8_lodash_isFunction___default()(props.scale[scaleAxis]) ? props.scale[scaleAxis] : undefined;

  if (!scale) {
    return undefined;
  }

  var stringMapAxis = axis === "x" ? "y" : "x";
  var stringMap = __WEBPACK_IMPORTED_MODULE_7_lodash_isObject___default()(props.stringMap) && props.stringMap[stringMapAxis];
  var axisValue = stringMap && typeof props.axisValue === "string" ? stringMap[props.axisValue] : props.axisValue;
  return scale(axisValue);
}

function modifyProps(props, fallbackProps) {
  if (!__WEBPACK_IMPORTED_MODULE_7_lodash_isObject___default()(props.theme)) {
    return __WEBPACK_IMPORTED_MODULE_15__helpers__["a" /* default */].modifyProps(props, fallbackProps, "axis");
  }

  var role = "axis";

  if (props.dependentAxis && props.theme.dependentAxis) {
    role = "dependentAxis";
  } else if (!props.dependentAxis && props.theme.independentAxis) {
    role = "independentAxis";
  }

  if (role === "axis") {
    return __WEBPACK_IMPORTED_MODULE_15__helpers__["a" /* default */].modifyProps(props, fallbackProps, "axis");
  }

  var axisTheme = __WEBPACK_IMPORTED_MODULE_10_lodash_defaults___default()({}, props.theme[role], props.theme.axis);

  var theme = __WEBPACK_IMPORTED_MODULE_11_lodash_assign___default()({}, props.theme, {
    axis: axisTheme
  });

  return __WEBPACK_IMPORTED_MODULE_15__helpers__["a" /* default */].modifyProps(__WEBPACK_IMPORTED_MODULE_11_lodash_assign___default()({}, props, {
    theme: theme
  }), fallbackProps, "axis");
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getTicks: getTicks,
  getTickFormat: getTickFormat,
  getAxis: getAxis,
  getAxisComponent: getAxisComponent,
  getAxisComponentsWithParent: getAxisComponentsWithParent,
  getAxisValue: getAxisValue,
  findAxisComponents: findAxisComponents,
  getOrigin: getOrigin,
  getOriginSign: getOriginSign,
  getDomain: getDomain,
  isVertical: isVertical,
  modifyProps: modifyProps,
  stringTicks: stringTicks
});

/***/ }),
/* 151 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: VictoryChart */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__victory_chart__ = __webpack_require__(/*! ./victory-chart */ 152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VictoryChart", function() { return __WEBPACK_IMPORTED_MODULE_0__victory_chart__["a"]; });


/***/ }),
/* 152 */
/*!**************************!*\
  !*** ./victory-chart.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictoryChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_victory_core__ = __webpack_require__(/*! victory-core */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_victory_shared_events__ = __webpack_require__(/*! victory-shared-events */ 349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_victory_axis__ = __webpack_require__(/*! victory-axis */ 352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_victory_polar_axis__ = __webpack_require__(/*! victory-polar-axis */ 355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helper_methods__ = __webpack_require__(/*! ./helper-methods */ 358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_fast_compare__ = __webpack_require__(/*! react-fast-compare */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_fast_compare__);




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};

var VictoryChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryChart, _React$Component);

  function VictoryChart(props) {
    var _this;

    _classCallCheck(this, VictoryChart);

    _this = _possibleConstructorReturn(this, (VictoryChart.__proto__ || Object.getPrototypeOf(VictoryChart)).call(this, props));
    _this.state = {};

    if (props.animate) {
      _this.state = {
        nodesShouldLoad: false,
        nodesDoneLoad: false,
        animating: true
      };
      _this.setAnimationState = __WEBPACK_IMPORTED_MODULE_5_victory_core__["o" /* Wrapper */].setAnimationState.bind(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(VictoryChart, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.animate) {
        if (!__WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default()(this.props, nextProps)) {
          this.setAnimationState(this.props, nextProps);
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getNewChildren",
    value: function getNewChildren(props, childComponents, calculatedProps) {
      var children = Object(__WEBPACK_IMPORTED_MODULE_9__helper_methods__["c" /* getChildren */])(props, childComponents, calculatedProps);
      var getAnimationProps = __WEBPACK_IMPORTED_MODULE_5_victory_core__["o" /* Wrapper */].getAnimationProps.bind(this);
      return children.map(function (child, index) {
        var childProps = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
          animate: getAnimationProps(props, child, index)
        }, child.props);

        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(child, childProps);
      });
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(containerComponent, props) {
      var containerProps = __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default()({}, containerComponent.props, props);

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(containerComponent, containerProps);
    }
  }, {
    key: "getContainerProps",
    value: function getContainerProps(props, calculatedProps) {
      var width = props.width,
          height = props.height,
          standalone = props.standalone,
          theme = props.theme,
          polar = props.polar,
          name = props.name;
      var domain = calculatedProps.domain,
          scale = calculatedProps.scale,
          style = calculatedProps.style,
          origin = calculatedProps.origin,
          radius = calculatedProps.radius,
          horizontal = calculatedProps.horizontal;
      return {
        domain: domain,
        scale: scale,
        width: width,
        height: height,
        standalone: standalone,
        theme: theme,
        style: style.parent,
        horizontal: horizontal,
        name: name,
        polar: polar,
        radius: radius,
        origin: polar ? origin : undefined
      };
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.state && this.state.nodesWillExit ? this.state.oldProps || this.props : this.props;
      var modifiedProps = __WEBPACK_IMPORTED_MODULE_5_victory_core__["e" /* Helpers */].modifyProps(props, fallbackProps, "chart");
      var eventKey = modifiedProps.eventKey,
          containerComponent = modifiedProps.containerComponent,
          groupComponent = modifiedProps.groupComponent,
          standalone = modifiedProps.standalone,
          externalEventMutations = modifiedProps.externalEventMutations;
      var axes = props.polar ? modifiedProps.defaultPolarAxes : modifiedProps.defaultAxes;
      var childComponents = Object(__WEBPACK_IMPORTED_MODULE_9__helper_methods__["b" /* getChildComponents */])(modifiedProps, axes);
      var calculatedProps = Object(__WEBPACK_IMPORTED_MODULE_9__helper_methods__["a" /* getCalculatedProps */])(modifiedProps, childComponents);
      var newChildren = this.getNewChildren(modifiedProps, childComponents, calculatedProps);
      var containerProps = standalone ? this.getContainerProps(modifiedProps, calculatedProps) : {};
      var container = standalone ? this.renderContainer(containerComponent, containerProps) : groupComponent;
      var events = __WEBPACK_IMPORTED_MODULE_5_victory_core__["o" /* Wrapper */].getAllEvents(props);

      if (!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(events)) {
        return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_victory_shared_events__["a" /* VictorySharedEvents */], {
          container: container,
          eventKey: eventKey,
          events: events,
          externalEventMutations: externalEventMutations
        }, newChildren);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(container, container.props, newChildren);
    }
  }]);

  return VictoryChart;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Object.defineProperty(VictoryChart, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryChart"
});
Object.defineProperty(VictoryChart, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_5_victory_core__["c" /* CommonProps */].baseProps, {
    children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
    defaultAxes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      independent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
      dependent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element
    }),
    defaultPolarAxes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      independent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
      dependent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element
    }),
    endAngle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
    innerRadius: __WEBPACK_IMPORTED_MODULE_5_victory_core__["h" /* PropTypes */].nonNegative,
    prependDefaultAxes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    startAngle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number
  })
});
Object.defineProperty(VictoryChart, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    containerComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_victory_core__["l" /* VictoryContainer */], null),
    defaultAxes: {
      independent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_victory_axis__["a" /* VictoryAxis */], null),
      dependent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_victory_axis__["a" /* VictoryAxis */], {
        dependentAxis: true
      })
    },
    defaultPolarAxes: {
      independent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_victory_polar_axis__["a" /* VictoryPolarAxis */], null),
      dependent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_victory_polar_axis__["a" /* VictoryPolarAxis */], {
        dependentAxis: true
      })
    },
    groupComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("g", null),
    standalone: true,
    theme: __WEBPACK_IMPORTED_MODULE_5_victory_core__["n" /* VictoryTheme */].grayscale
  }
});
Object.defineProperty(VictoryChart, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["groupComponent", "containerComponent"]
});


/***/ }),
/* 153 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseKeys.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 33);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 154 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_defineProperty.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 155);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 155 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getNative.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 156 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_copyObject.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 49),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 50);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 157 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createAssigner.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 51),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 52);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 158 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_apply.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 159 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/keysIn.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 160 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \**********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ 161);

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 53);
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ 162);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 36)))

/***/ }),
/* 161 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/object-assign/index.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 162 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/prop-types/checkPropTypes.js ***!
  \*************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 53);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 36)))

/***/ }),
/* 163 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/prop-types/factoryWithThrowingShims.js ***!
  \***********************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ 53);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 164 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/index.js ***!
  \*****************************************************************************/
/*! exports provided: easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(/*! ./linear */ 165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quad__ = __webpack_require__(/*! ./quad */ 166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__quad__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cubic__ = __webpack_require__(/*! ./cubic */ 167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__cubic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poly__ = __webpack_require__(/*! ./poly */ 168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__poly__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sin__ = __webpack_require__(/*! ./sin */ 169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__sin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exp__ = __webpack_require__(/*! ./exp */ 170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__exp__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__circle__ = __webpack_require__(/*! ./circle */ 171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bounce__ = __webpack_require__(/*! ./bounce */ 172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__bounce__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back__ = __webpack_require__(/*! ./back */ 173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__back__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__elastic__ = __webpack_require__(/*! ./elastic */ 174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__elastic__["b"]; });





















/***/ }),
/* 165 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/linear.js ***!
  \******************************************************************************/
/*! exports provided: linear */
/*! exports used: linear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 166 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/quad.js ***!
  \****************************************************************************/
/*! exports provided: quadIn, quadOut, quadInOut */
/*! exports used: quadIn, quadInOut, quadOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 167 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/cubic.js ***!
  \*****************************************************************************/
/*! exports provided: cubicIn, cubicOut, cubicInOut */
/*! exports used: cubicIn, cubicInOut, cubicOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 168 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/poly.js ***!
  \****************************************************************************/
/*! exports provided: polyIn, polyOut, polyInOut */
/*! exports used: polyIn, polyInOut, polyOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 169 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/sin.js ***!
  \***************************************************************************/
/*! exports provided: sinIn, sinOut, sinInOut */
/*! exports used: sinIn, sinInOut, sinOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 170 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/exp.js ***!
  \***************************************************************************/
/*! exports provided: expIn, expOut, expInOut */
/*! exports used: expIn, expInOut, expOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 171 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/circle.js ***!
  \******************************************************************************/
/*! exports provided: circleIn, circleOut, circleInOut */
/*! exports used: circleIn, circleInOut, circleOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 172 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/bounce.js ***!
  \******************************************************************************/
/*! exports provided: bounceIn, bounceOut, bounceInOut */
/*! exports used: bounceIn, bounceInOut, bounceOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 173 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/back.js ***!
  \****************************************************************************/
/*! exports provided: backIn, backOut, backInOut */
/*! exports used: backIn, backInOut, backOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 174 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-ease/src/elastic.js ***!
  \*******************************************************************************/
/*! exports provided: elasticIn, elasticOut, elasticInOut */
/*! exports used: elasticIn, elasticInOut, elasticOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 175 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-animation/util.js ***!
  \**********************************************************************************************/
/*! exports provided: isInterpolatable, interpolateImmediate, interpolateFunction, interpolateObject, interpolateString, victoryInterpolator */
/*! exports used: victoryInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isInterpolatable */
/* unused harmony export interpolateImmediate */
/* unused harmony export interpolateFunction */
/* unused harmony export interpolateObject */
/* unused harmony export interpolateString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return victoryInterpolator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_orderBy__ = __webpack_require__(/*! lodash/orderBy */ 54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_orderBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_orderBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject__ = __webpack_require__(/*! lodash/isPlainObject */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);



var isInterpolatable = function (obj) {
  // d3 turns null into 0 and undefined into NaN, which we don't want.
  if (obj !== null) {
    switch (typeof obj) {
      case "undefined":
        return false;

      case "number":
        // The standard `isNaN` is fine in this case since we already know the
        // type is number.
        return !isNaN(obj) && obj !== Number.POSITIVE_INFINITY && obj !== Number.NEGATIVE_INFINITY;

      case "string":
        // d3 might not *actually* be able to interpolate the string, but it
        // won't cause any issues to let it try.
        return true;

      case "boolean":
        // d3 turns Booleans into integers, which we don't want. Sure, we could
        // interpolate from 0 -> 1, but we'd be sending a non-Boolean to
        // something expecting a Boolean.
        return false;

      case "object":
        // Don't try to interpolate class instances (except Date or Array).
        return obj instanceof Date || Array.isArray(obj) || __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default()(obj);

      case "function":
        // Careful! There may be extra properties on function objects that the
        // component expects to access - for instance, it may be a `d3.scale()`
        // function, which has its own methods attached. We don't know if the
        // component is only going to call the function (in which case it's
        // safely interpolatable) or if it's going to access special properties
        // (in which case our function generated from `interpolateFunction` will
        // most likely cause an error. We could check for enumerable properties
        // on the function object here to see if it's a "plain" function, but
        // let's just require that components prevent such function props from
        // being animated in the first place.
        return true;
    }
  }

  return false;
};
/**
 * Interpolate immediately to the end value at the given step `when`.
 * Some nicer default behavior might be to jump at the halfway point or return
 * `a` if `t` is 0 (instead of always returning `b`). But d3's default
 * interpolator does not do these things:
 *
 *   d3.interpolate('aaa', 'bbb')(0) === 'bbb'
 *
 * ...and things might get wonky if we don't replicate that behavior.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @param {Number} when - Step value (0 to 1) at which to jump to `b`.
 * @returns {Function} An interpolation function.
 */

var interpolateImmediate = function (a, b) {
  var when = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return function (t) {
    return t < when ? a : b;
  };
};
/**
 * Interpolate to or from a function. The interpolated value will be a function
 * that calls `a` (if it's a function) and `b` (if it's a function) and calls
 * `d3.interpolate` on the resulting values. Note that our function won't
 * necessarily be called (that's up to the component this eventually gets
 * passed to) - but if it does get called, it will return an appropriately
 * interpolated value.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateFunction = function (a, b) {
  return function (t) {
    if (t >= 1) {
      return b;
    }

    return function () {
      /* eslint-disable no-invalid-this */
      var aval = typeof a === "function" ? a.apply(this, arguments) : a;
      var bval = typeof b === "function" ? b.apply(this, arguments) : b;
      return Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(aval, bval)(t);
    };
  };
};
/**
 * Interpolate to or from an object. This method is a modification of the object interpolator in
 * d3-interpolate https://github.com/d3/d3-interpolate/blob/master/src/object.js. This interpolator
 * differs in that it uses our custom interpolators when interpolating the value of each property in
 * an object. This allows the correct interpolation of nested objects, including styles
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function} An interpolation function.
 */

var interpolateObject = function (a, b) {
  var interpolateTypes = function (x, y) {
    if (x === y || !isInterpolatable(x) || !isInterpolatable(y)) {
      return interpolateImmediate(x, y);
    }

    if (typeof x === "function" || typeof y === "function") {
      return interpolateFunction(x, y);
    }

    if (typeof x === "object" && __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default()(x) || typeof y === "object" && __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default()(y)) {
      return interpolateObject(x, y);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(x, y);
  }; // When the value is an array, attempt to sort by "key" so that animating nodes may be identified
  // based on "key" instead of index


  var keyData = function (val) {
    return Array.isArray(val) ? __WEBPACK_IMPORTED_MODULE_0_lodash_orderBy___default()(val, "key") : val;
  };

  var i = {};
  var c = {};
  var k;

  if (a === null || typeof a !== "object") {
    a = {};
  }

  if (b === null || typeof b !== "object") {
    b = {};
  }

  for (k in b) {
    if (k in a) {
      i[k] = interpolateTypes(keyData(a[k]), keyData(b[k]));
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) {
      c[k] = i[k](t);
    }

    return c;
  };
};
var interpolateString = function (a, b) {
  var format = function (val) {
    return typeof val === "string" ? val.replace(/,/g, "") : val;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(format(a), format(b));
};
/**
 * By default, the list of interpolators used by `d3.interpolate` has a few
 * downsides:
 *
 * - `null` values get turned into 0.
 * - `undefined`, `function`, and some other value types get turned into NaN.
 * - Boolean types get turned into numbers, which probably will be meaningless
 *   to whatever is consuming them.
 * - It tries to interpolate between identical start and end values, doing
 *   unnecessary calculations that sometimes result in floating point rounding
 *   errors.
 *
 * If only the default interpolators are used, `VictoryAnimation` will happily
 * pass down NaN (and other bad) values as props to the wrapped component.
 * The component will then either use the incorrect values or complain that it
 * was passed props of the incorrect type. This custom interpolator is added
 * using the `d3.interpolators` API, and prevents such cases from happening
 * for most values.
 *
 * @param {any} a - Start value.
 * @param {any} b - End value.
 * @returns {Function|undefined} An interpolation function, if necessary.
 */

var victoryInterpolator = function (a, b) {
  // If the values are strictly equal, or either value is not interpolatable,
  // just use either the start value `a` or end value `b` at every step, as
  // there is no reasonable in-between value.
  if (a === b || !isInterpolatable(a) || !isInterpolatable(b)) {
    return interpolateImmediate(a, b);
  }

  if (typeof a === "function" || typeof b === "function") {
    return interpolateFunction(a, b);
  }

  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default()(a) || __WEBPACK_IMPORTED_MODULE_1_lodash_isPlainObject___default()(b)) {
    return interpolateObject(a, b);
  }

  if (typeof a === "string" || typeof b === "string") {
    return interpolateString(a, b);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["a" /* interpolate */])(a, b);
};

/***/ }),
/* 176 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseOrderBy.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 24),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    baseMap = __webpack_require__(/*! ./_baseMap */ 202),
    baseSortBy = __webpack_require__(/*! ./_baseSortBy */ 203),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 62),
    compareMultiple = __webpack_require__(/*! ./_compareMultiple */ 204),
    identity = __webpack_require__(/*! ./identity */ 16);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 177 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseMatches.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 178),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ 190),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 96);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 178 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIsMatch.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 94),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 55);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 179 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_listCacheClear.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 180 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_listCacheDelete.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 37);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 181 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_listCacheGet.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 37);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 182 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_listCacheHas.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 37);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 183 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_listCacheSet.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 37);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 184 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIsEqualDeep.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 94),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 185),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ 187),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ 188),
    getTag = __webpack_require__(/*! ./_getTag */ 86),
    isArray = __webpack_require__(/*! ./isArray */ 7),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 88),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 90);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 185 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_equalArrays.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 56),
    arraySome = __webpack_require__(/*! ./_arraySome */ 186),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 57);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 186 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arraySome.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 187 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_equalByTag.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 188 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_equalObjects.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 189);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 189 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getAllKeys.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 33);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 190 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getMatchData.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 95),
    keys = __webpack_require__(/*! ./keys */ 17);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 191 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseMatchesProperty.js ***!
  \***************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 55),
    get = __webpack_require__(/*! ./get */ 192),
    hasIn = __webpack_require__(/*! ./hasIn */ 100),
    isKey = __webpack_require__(/*! ./_isKey */ 60),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 95),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 96),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 192 */
/*!**********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/get.js ***!
  \**********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 59);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 193 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_stringToPath.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 194);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 194 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_memoizeCapped.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 195 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseToString.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 98),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 24),
    isArray = __webpack_require__(/*! ./isArray */ 7),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 196 */
/*!************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_root.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 99);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 197 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 198 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseHasIn.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 199 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_hasPath.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 39),
    isArguments = __webpack_require__(/*! ./isArguments */ 47),
    isArray = __webpack_require__(/*! ./isArray */ 7),
    isIndex = __webpack_require__(/*! ./_isIndex */ 101),
    isLength = __webpack_require__(/*! ./isLength */ 87),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 200 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseProperty.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 201 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_basePropertyDeep.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 59);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 202 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseMap.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 203 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseSortBy.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 204 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_compareMultiple.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(/*! ./_compareAscending */ 205);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 205 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_compareAscending.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 206 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getPrototype.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 33);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 207 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/lab.js ***!
  \****************************************************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/*! exports used: default, hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gray */
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* unused harmony export lch */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(/*! ./define */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(/*! ./math */ 102);




// https://beta.observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 208 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-color/src/cubehelix.js ***!
  \**********************************************************************************/
/*! exports provided: default, Cubehelix */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(/*! ./define */ 65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(/*! ./math */ 102);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 209 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/discrete.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),
/* 210 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/hue.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color__ = __webpack_require__(/*! ./color */ 20);


/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  var i = Object(__WEBPACK_IMPORTED_MODULE_0__color__["c" /* hue */])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),
/* 211 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/round.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 212 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/transform/index.js ***!
  \**********************************************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export interpolateTransformCss */
/* unused harmony export interpolateTransformSvg */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(/*! ../number */ 40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(/*! ./parse */ 213);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 213 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/transform/parse.js ***!
  \**********************************************************************************************/
/*! exports provided: parseCss, parseSvg */
/*! exports used: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(/*! ./decompose */ 214);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 214 */
/*!**************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/transform/decompose.js ***!
  \**************************************************************************************************/
/*! exports provided: identity, default */
/*! exports used: default, identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 215 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/zoom.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 216 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/hsl.js ***!
  \**********************************************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 20);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 217 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/lab.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 20);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 218 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/hcl.js ***!
  \**********************************************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 20);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 219 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/cubehelix.js ***!
  \****************************************************************************************/
/*! exports provided: default, cubehelixLong */
/*! exports used: cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(/*! ./color */ 20);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 220 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/piecewise.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),
/* 221 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-interpolate/src/quantize.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 222 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-timer/src/index.js ***!
  \******************************************************************************/
/*! exports provided: now, timer, timerFlush, timeout, interval */
/*! exports used: now, timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(/*! ./timer */ 67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__timer__["c"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timeout__ = __webpack_require__(/*! ./timeout */ 223);
/* unused harmony reexport timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interval__ = __webpack_require__(/*! ./interval */ 224);
/* unused harmony reexport interval */







/***/ }),
/* 223 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-timer/src/timeout.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(/*! ./timer */ 67);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 224 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-timer/src/interval.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(/*! ./timer */ 67);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 225 */
/*!***********************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-container/victory-container.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictoryContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isObject__ = __webpack_require__(/*! lodash/isObject */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__ = __webpack_require__(/*! lodash/uniqueId */ 110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__ = __webpack_require__(/*! ../victory-util/prop-types */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__victory_portal_portal__ = __webpack_require__(/*! ../victory-portal/portal */ 112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__victory_util_timer__ = __webpack_require__(/*! ../victory-util/timer */ 41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);






function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var VictoryContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryContainer, _React$Component);

  function VictoryContainer(props) {
    var _this;

    _classCallCheck(this, VictoryContainer);

    _this = _possibleConstructorReturn(this, (VictoryContainer.__proto__ || Object.getPrototypeOf(VictoryContainer)).call(this, props));
    _this.getTimer = _this.getTimer.bind(_assertThisInitialized(_this));
    _this.containerId = !__WEBPACK_IMPORTED_MODULE_1_lodash_isObject___default()(props) || props.containerId === undefined ? __WEBPACK_IMPORTED_MODULE_2_lodash_uniqueId___default()("victory-container-") : props.containerId;

    _this.savePortalRef = function (portal) {
      _this.portalRef = portal;
      return portal;
    };

    _this.portalUpdate = function (key, el) {
      return _this.portalRef.portalUpdate(key, el);
    };

    _this.portalRegister = function () {
      return _this.portalRef.portalRegister();
    };

    _this.portalDeregister = function (key) {
      return _this.portalRef.portalDeregister(key);
    };

    _this.saveContainerRef = props && __WEBPACK_IMPORTED_MODULE_0_lodash_isFunction___default()(props.containerRef) ? props.containerRef : function (container) {
      _this.containerRef = container;
      return container;
    };
    _this.shouldHandleWheel = props && props.events && props.events.onWheel;

    if (_this.shouldHandleWheel) {
      _this.handleWheel = function (e) {
        return e.preventDefault();
      };
    }

    return _this;
  }

  _createClass(VictoryContainer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        portalUpdate: this.portalUpdate,
        portalRegister: this.portalRegister,
        portalDeregister: this.portalDeregister,
        getTimer: this.getTimer
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.addEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.context.getTimer) {
        this.getTimer().stop();
      }

      if (this.shouldHandleWheel && this.containerRef) {
        this.containerRef.removeEventListener("wheel", this.handleWheel);
      }
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      if (this.context.getTimer) {
        return this.context.getTimer();
      }

      if (!this.timer) {
        this.timer = new __WEBPACK_IMPORTED_MODULE_9__victory_util_timer__["a" /* default */]();
      }

      return this.timer;
    }
  }, {
    key: "getIdForElement",
    value: function getIdForElement(elementName) {
      return "".concat(this.containerId, "-").concat(elementName);
    } // overridden in custom containers

  }, {
    key: "getChildren",
    value: function getChildren(props) {
      return props.children;
    }
  }, {
    key: "renderContainer",
    value: function renderContainer(props, svgProps, style) {
      var title = props.title,
          desc = props.desc,
          portalComponent = props.portalComponent,
          className = props.className,
          width = props.width,
          height = props.height,
          portalZIndex = props.portalZIndex,
          responsive = props.responsive;
      var children = this.getChildren(props);
      var dimensions = responsive ? {
        width: "100%",
        height: "auto"
      } : {
        width: width,
        height: height
      };

      var divStyle = __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
        pointerEvents: "none",
        touchAction: "none",
        position: "relative"
      }, dimensions);

      var portalDivStyle = __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
        zIndex: portalZIndex,
        position: "absolute",
        top: 0,
        left: 0
      }, dimensions);

      var svgStyle = __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
        pointerEvents: "all"
      }, dimensions);

      var portalSvgStyle = __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
        overflow: "visible"
      }, dimensions);

      var portalProps = {
        width: width,
        height: height,
        viewBox: svgProps.viewBox,
        style: portalSvgStyle
      };
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: __WEBPACK_IMPORTED_MODULE_3_lodash_defaults___default()({}, style, divStyle),
        className: className,
        ref: this.saveContainerRef
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("svg", _extends({}, svgProps, {
        style: svgStyle
      }), title ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("title", {
        id: this.getIdForElement("title")
      }, title) : null, desc ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("desc", {
        id: this.getIdForElement("desc")
      }, desc) : null, children), __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
        style: portalDivStyle
      }, __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(portalComponent, _objectSpread({}, portalProps, {
        ref: this.savePortalRef
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          responsive = _props.responsive,
          events = _props.events,
          title = _props.title,
          desc = _props.desc,
          tabIndex = _props.tabIndex;
      var style = responsive ? this.props.style : __WEBPACK_IMPORTED_MODULE_10__victory_util_helpers__["a" /* default */].omit(this.props.style, ["height", "width"]);

      var svgProps = __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
        width: width,
        height: height,
        tabIndex: tabIndex,
        role: "img",
        "aria-labelledby": title ? this.getIdForElement("title") : undefined,
        "aria-describedby": desc ? this.getIdForElement("desc") : undefined,
        viewBox: responsive ? "0 0 ".concat(width, " ").concat(height) : undefined
      }, events);

      return this.renderContainer(this.props, svgProps, style);
    }
  }]);

  return VictoryContainer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Object.defineProperty(VictoryContainer, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryContainer"
});
Object.defineProperty(VictoryContainer, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "container"
});
Object.defineProperty(VictoryContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node]),
    className: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    containerId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
    containerRef: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    desc: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    events: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
    height: __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__["a" /* default */].nonNegative,
    name: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    origin: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
      x: __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__["a" /* default */].nonNegative,
      y: __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__["a" /* default */].nonNegative
    }),
    polar: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    portalComponent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.element,
    portalZIndex: __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__["a" /* default */].integer,
    responsive: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
    style: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
    tabIndex: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number,
    theme: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
    title: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
    width: __WEBPACK_IMPORTED_MODULE_7__victory_util_prop_types__["a" /* default */].nonNegative
  }
});
Object.defineProperty(VictoryContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: "VictoryContainer",
    portalComponent: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__victory_portal_portal__["a" /* default */], null),
    portalZIndex: 99,
    responsive: true
  }
});
Object.defineProperty(VictoryContainer, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTimer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }
});
Object.defineProperty(VictoryContainer, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    portalUpdate: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    portalRegister: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    portalDeregister: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,
    getTimer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }
});


/***/ }),
/* 226 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isRegExp.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ 227),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 62),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 228);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),
/* 227 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseIsRegExp.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 48),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 38);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),
/* 228 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_nodeUtil.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 99);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 229)(module)))

/***/ }),
/* 229 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 230 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/find.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ 231),
    findIndex = __webpack_require__(/*! ./findIndex */ 232);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 231 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createFind.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 34),
    keys = __webpack_require__(/*! ./keys */ 17);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 232 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/findIndex.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 233),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    toInteger = __webpack_require__(/*! ./toInteger */ 234);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 233 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseFindIndex.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 234 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/toInteger.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ 111);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 235 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/toNumber.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 11),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 25);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 236 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_basePick.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ 113),
    hasIn = __webpack_require__(/*! ./hasIn */ 100);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 237 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseSet.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 49),
    castPath = __webpack_require__(/*! ./_castPath */ 39),
    isIndex = __webpack_require__(/*! ./_isIndex */ 101),
    isObject = __webpack_require__(/*! ./isObject */ 11),
    toKey = __webpack_require__(/*! ./_toKey */ 26);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 238 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_flatRest.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ 69),
    overRest = __webpack_require__(/*! ./_overRest */ 91),
    setToString = __webpack_require__(/*! ./_setToString */ 92);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 239 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseFlatten.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 240),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ 241);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 240 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arrayPush.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 241 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_isFlattenable.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 98),
    isArguments = __webpack_require__(/*! ./isArguments */ 47),
    isArray = __webpack_require__(/*! ./isArray */ 7);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 242 */
/*!***************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-label/victory-label.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__victory_portal_victory_portal__ = __webpack_require__(/*! ../victory-portal/victory-portal */ 114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__ = __webpack_require__(/*! ../victory-util/prop-types */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__victory_util_label_helpers__ = __webpack_require__(/*! ../victory-util/label-helpers */ 115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__victory_util_style__ = __webpack_require__(/*! ../victory-util/style */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__victory_util_log__ = __webpack_require__(/*! ../victory-util/log */ 42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__victory_primitives_tspan__ = __webpack_require__(/*! ../victory-primitives/tspan */ 116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__victory_primitives_text__ = __webpack_require__(/*! ../victory-primitives/text */ 117);




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var defaultStyles = {
  fill: "#252525",
  fontSize: 14,
  fontFamily: "'Gill Sans', 'Gill Sans MT', 'Ser­avek', 'Trebuchet MS', sans-serif",
  stroke: "transparent"
};

var getPosition = function (props, dimension) {
  if (!props.datum) {
    return 0;
  }

  var scaledPoint = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].scalePoint(props, props.datum);
  return scaledPoint[dimension];
};

var getFontSize = function (style) {
  var baseSize = style && style.fontSize;

  if (typeof baseSize === "number") {
    return baseSize;
  } else if (baseSize === undefined || baseSize === null) {
    return defaultStyles.fontSize;
  } else if (typeof baseSize === "string") {
    var fontSize = +baseSize.replace("px", "");

    if (!isNaN(fontSize)) {
      return fontSize;
    } else {
      __WEBPACK_IMPORTED_MODULE_10__victory_util_log__["a" /* default */].warn("fontSize should be expressed as a number of pixels");
      return defaultStyles.fontSize;
    }
  }

  return defaultStyles.fontSize;
};

var getStyles = function (style, props) {
  var getSingleStyle = function (s) {
    s = s ? __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, s, defaultStyles) : defaultStyles;
    var baseStyles = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateStyle(s, props);
    return __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, baseStyles, {
      fontSize: getFontSize(baseStyles)
    });
  };

  return Array.isArray(style) && !__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(style) ? style.map(function (s) {
    return getSingleStyle(s);
  }) : [getSingleStyle(style)];
};

var getHeight = function (props, type) {
  return __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props[type], props);
};

var getContent = function (text, props) {
  if (text === undefined || text === null) {
    return undefined;
  }

  if (Array.isArray(text)) {
    return text.map(function (line) {
      return __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(line, props);
    });
  }

  var child = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(text, props);

  if (child === undefined || child === null) {
    return undefined;
  }

  return Array.isArray(child) ? child : "".concat(child).split("\n");
};

var checkLineHeight = function (lineHeight, val, fallbackVal) {
  if (Array.isArray(lineHeight)) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(lineHeight) ? fallbackVal : val;
  }

  return lineHeight;
};

var getDy = function (props, lineHeight) {
  var style = Array.isArray(props.style) ? props.style[0] : props.style;
  lineHeight = checkLineHeight(lineHeight, lineHeight[0], 1);
  var fontSize = style.fontSize;
  var dy = props.dy ? __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props.dy, props) : 0;
  var length = props.text.length;
  var capHeight = getHeight(props, "capHeight");
  var verticalAnchor = style.verticalAnchor || props.verticalAnchor;
  var anchor = verticalAnchor ? __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(verticalAnchor, props) : "middle";

  switch (anchor) {
    case "end":
      return dy + (capHeight / 2 + (0.5 - length) * lineHeight) * fontSize;

    case "middle":
      return dy + (capHeight / 2 + (0.5 - length / 2) * lineHeight) * fontSize;

    default:
      return dy + (capHeight / 2 + lineHeight / 2) * fontSize;
  }
};

var getTransform = function (props) {
  var x = props.x,
      y = props.y,
      polar = props.polar,
      style = props.style;
  var defaultAngle = polar ? __WEBPACK_IMPORTED_MODULE_8__victory_util_label_helpers__["a" /* default */].getPolarAngle(props) : 0;
  var baseAngle = style.angle === undefined ? props.angle : style.angle;
  var angle = baseAngle === undefined ? defaultAngle : baseAngle;
  var transform = props.transform || style.transform;
  var transformPart = transform && __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(transform, props);
  var rotatePart = angle && {
    rotate: [angle, x, y]
  };
  return transformPart || angle ? __WEBPACK_IMPORTED_MODULE_9__victory_util_style__["a" /* default */].toTransformString(transformPart, rotatePart) : undefined;
};

var renderElements = function (props) {
  var inline = props.inline,
      className = props.className,
      title = props.title,
      events = props.events,
      direction = props.direction,
      text = props.text,
      style = props.style;
  var lineHeight = getHeight(props, "lineHeight");
  var textAnchor = props.textAnchor ? __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props.textAnchor, props) : "start";
  var dx = props.dx ? __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props.dx, props) : 0;
  var dy = getDy(props, lineHeight);
  var transform = getTransform(props);
  var x = props.x !== undefined ? props.x : getPosition(props, "x");
  var y = props.y !== undefined ? props.y : getPosition(props, "y");
  var textChildren = text.map(function (line, i) {
    var currentStyle = style[i] || style[0];
    var lastStyle = style[i - 1] || style[0];
    var fontSize = (currentStyle.fontSize + lastStyle.fontSize) / 2;
    var currentLineHeight = checkLineHeight(lineHeight, (lineHeight[i] + (lineHeight[i - 1] || lineHeight[0])) / 2, 1);
    var tspanProps = {
      key: "".concat(props.id, "-key-").concat(i),
      x: !inline ? props.x : undefined,
      dx: dx,
      dy: i && !inline ? currentLineHeight * fontSize : undefined,
      textAnchor: currentStyle.textAnchor || textAnchor,
      style: currentStyle,
      children: line
    };
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(props.tspanComponent, tspanProps);
  });
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(props.textComponent, _objectSpread({}, events, {
    direction: direction,
    dx: dx,
    dy: dy,
    x: x,
    y: y,
    transform: transform,
    className: className,
    title: title,
    desc: __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    id: props.id
  }), textChildren);
};

var evaluateProps = function (props) {
  /* Potential evaluated props are
    1) text
    2) style
    3) everything else
  */
  var text = getContent(props.text, props);
  var style = getStyles(props.style, __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    text: text
  }));
  return __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    style: style,
    text: text
  });
};

var VictoryLabel = function (props) {
  props = evaluateProps(props);

  if (props.text === null || props.text === undefined) {
    return null;
  }

  var label = renderElements(props);
  return props.renderInPortal ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__victory_portal_victory_portal__["a" /* default */], null, label) : label;
};

VictoryLabel.displayName = "VictoryLabel";
VictoryLabel.role = "label";
VictoryLabel.defaultStyles = defaultStyles;
VictoryLabel.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  angle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number]),
  capHeight: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  data: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
  datum: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  desc: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  direction: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["rtl", "ltr", "inherit"]),
  dx: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  dy: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  events: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  id: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string]),
  index: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string]),
  inline: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  labelPlacement: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["parallel", "perpendicular", "vertical"]),
  lineHeight: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array]),
  origin: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative,
    y: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative
  }),
  polar: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  renderInPortal: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  scale: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].scale,
    y: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].scale
  }),
  style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array]),
  tabIndex: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  text: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array]),
  textAnchor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["start", "middle", "end", "inherit"]), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  textComponent: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.element,
  title: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  transform: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  tspanComponent: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.element,
  verticalAnchor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(["start", "middle", "end"]), __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func]),
  x: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string]),
  y: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string])
};
VictoryLabel.defaultProps = {
  direction: "inherit",
  textComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__victory_primitives_text__["a" /* default */], null),
  tspanComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__victory_primitives_tspan__["a" /* default */], null),
  capHeight: 0.71,
  // Magic number from d3.
  lineHeight: 1
};
/* harmony default export */ __webpack_exports__["a"] = (VictoryLabel);

/***/ }),
/* 243 */
/*!*********************************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-clip-container/victory-clip-container.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_uniqueId__ = __webpack_require__(/*! lodash/uniqueId */ 110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_uniqueId___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_uniqueId__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isObject__ = __webpack_require__(/*! lodash/isObject */ 11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__ = __webpack_require__(/*! ../victory-util/prop-types */ 21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__victory_primitives_clip_path__ = __webpack_require__(/*! ../victory-primitives/clip-path */ 119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__victory_primitives_circle__ = __webpack_require__(/*! ../victory-primitives/circle */ 120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__victory_primitives_rect__ = __webpack_require__(/*! ../victory-primitives/rect */ 72);





function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var VictoryClipContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryClipContainer, _React$Component);

  function VictoryClipContainer(props) {
    var _this;

    _classCallCheck(this, VictoryClipContainer);

    _this = _possibleConstructorReturn(this, (VictoryClipContainer.__proto__ || Object.getPrototypeOf(VictoryClipContainer)).call(this, props));
    _this.clipId = !__WEBPACK_IMPORTED_MODULE_1_lodash_isObject___default()(props) || props.clipId === undefined ? __WEBPACK_IMPORTED_MODULE_0_lodash_uniqueId___default()("victory-clip-") : props.clipId;
    return _this;
  }

  _createClass(VictoryClipContainer, [{
    key: "calculateAttributes",
    value: function calculateAttributes(props) {
      var polar = props.polar,
          origin = props.origin,
          _props$clipWidth = props.clipWidth,
          clipWidth = _props$clipWidth === void 0 ? 0 : _props$clipWidth,
          _props$clipHeight = props.clipHeight,
          clipHeight = _props$clipHeight === void 0 ? 0 : _props$clipHeight,
          _props$translateX = props.translateX,
          translateX = _props$translateX === void 0 ? 0 : _props$translateX,
          _props$translateY = props.translateY,
          translateY = _props$translateY === void 0 ? 0 : _props$translateY;
      var clipPadding = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getPadding({
        padding: props.clipPadding
      });
      var radius = props.radius || __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getRadius(props);
      return {
        x: (polar ? origin.x : translateX) - clipPadding.left,
        y: (polar ? origin.y : translateY) - clipPadding.top,
        width: Math.max((polar ? radius : clipWidth) + clipPadding.left + clipPadding.right, 0),
        height: Math.max((polar ? radius : clipHeight) + clipPadding.top + clipPadding.bottom, 0)
      };
    }
  }, {
    key: "renderClippedGroup",
    value: function renderClippedGroup(props, clipId) {
      var style = props.style,
          events = props.events,
          transform = props.transform,
          children = props.children,
          className = props.className,
          groupComponent = props.groupComponent;
      var clipComponent = this.renderClipComponent(props, clipId);

      var groupProps = __WEBPACK_IMPORTED_MODULE_3_lodash_assign___default()({
        className: className,
        style: style,
        transform: transform,
        key: "clipped-group-".concat(clipId),
        clipPath: "url(#".concat(clipId, ")")
      }, events);

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(groupComponent, groupProps, [clipComponent].concat(_toConsumableArray(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.toArray(children))));
    }
  }, {
    key: "renderGroup",
    value: function renderGroup(props) {
      var style = props.style,
          events = props.events,
          transform = props.transform,
          children = props.children,
          className = props.className,
          groupComponent = props.groupComponent;
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(groupComponent, __WEBPACK_IMPORTED_MODULE_3_lodash_assign___default()({
        className: className,
        style: style,
        transform: transform
      }, events), children);
    }
  }, {
    key: "renderClipComponent",
    value: function renderClipComponent(props, clipId) {
      var polar = props.polar,
          origin = props.origin,
          _props$clipWidth2 = props.clipWidth,
          clipWidth = _props$clipWidth2 === void 0 ? 0 : _props$clipWidth2,
          _props$clipHeight2 = props.clipHeight,
          clipHeight = _props$clipHeight2 === void 0 ? 0 : _props$clipHeight2,
          _props$translateX2 = props.translateX,
          translateX = _props$translateX2 === void 0 ? 0 : _props$translateX2,
          _props$translateY2 = props.translateY,
          translateY = _props$translateY2 === void 0 ? 0 : _props$translateY2,
          circleComponent = props.circleComponent,
          rectComponent = props.rectComponent,
          clipPathComponent = props.clipPathComponent;

      var _Helpers$getPadding = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getPadding({
        padding: props.clipPadding
      }),
          top = _Helpers$getPadding.top,
          bottom = _Helpers$getPadding.bottom,
          left = _Helpers$getPadding.left,
          right = _Helpers$getPadding.right;

      var child;

      if (polar) {
        var radius = props.radius || __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getRadius(props);
        var circleProps = {
          r: Math.max(radius + left + right, radius + top + bottom, 0),
          cx: origin.x - left,
          cy: origin.y - top
        };
        child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(circleComponent, circleProps);
      } else {
        var rectProps = {
          x: translateX - left,
          y: translateY - top,
          width: Math.max(clipWidth + left + right, 0),
          height: Math.max(clipHeight + top + bottom, 0)
        };
        child = __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(rectComponent, rectProps);
      }

      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(clipPathComponent, __WEBPACK_IMPORTED_MODULE_3_lodash_assign___default()({
        key: "clip-path-".concat(clipId)
      }, props, {
        clipId: clipId
      }), child);
    }
  }, {
    key: "getClipValue",
    value: function getClipValue(props, axis) {
      var clipValues = {
        x: props.clipWidth,
        y: props.clipHeight
      };

      if (clipValues[axis] !== undefined) {
        return clipValues[axis];
      }

      var range = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getRange(props, axis);
      return range ? Math.abs(range[0] - range[1]) || undefined : undefined;
    }
  }, {
    key: "getTranslateValue",
    value: function getTranslateValue(props, axis) {
      var translateValues = {
        x: props.translateX,
        y: props.translateY
      };

      if (translateValues[axis] !== undefined) {
        return translateValues[axis];
      }

      var range = __WEBPACK_IMPORTED_MODULE_7__victory_util_helpers__["a" /* default */].getRange(props, axis);
      return range ? Math.min.apply(Math, _toConsumableArray(range)) : undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var clipHeight = this.getClipValue(this.props, "y");
      var clipWidth = this.getClipValue(this.props, "x");

      if (clipWidth === undefined || clipHeight === undefined) {
        return this.renderGroup(this.props);
      }

      var translateX = this.getTranslateValue(this.props, "x");
      var translateY = this.getTranslateValue(this.props, "y");

      var clipProps = __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default()({}, this.props, {
        clipHeight: clipHeight,
        clipWidth: clipWidth,
        translateX: translateX,
        translateY: translateY
      });

      return this.renderClippedGroup(clipProps, this.clipId);
    }
  }]);

  return VictoryClipContainer;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

Object.defineProperty(VictoryClipContainer, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryClipContainer"
});
Object.defineProperty(VictoryClipContainer, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "container"
});
Object.defineProperty(VictoryClipContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.node]),
    circleComponent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.element,
    className: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    clipHeight: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative,
    clipId: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string]),
    clipPadding: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
      top: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
      bottom: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
      left: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
      right: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number
    }),
    clipPathComponent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.element,
    clipWidth: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative,
    events: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
    groupComponent: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.element,
    origin: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.shape({
      x: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative,
      y: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative
    }),
    polar: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.bool,
    radius: __WEBPACK_IMPORTED_MODULE_6__victory_util_prop_types__["a" /* default */].nonNegative,
    style: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
    transform: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
    translateX: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number,
    translateY: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.number
  }
});
Object.defineProperty(VictoryClipContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    circleComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__victory_primitives_circle__["a" /* default */], null),
    rectComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__victory_primitives_rect__["a" /* default */], null),
    clipPathComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__victory_primitives_clip_path__["a" /* default */], null),
    groupComponent: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("g", null)
  }
});


/***/ }),
/* 244 */
/*!***************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-theme/victory-theme.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material__ = __webpack_require__(/*! ./material */ 245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grayscale__ = __webpack_require__(/*! ./grayscale */ 246);


/* harmony default export */ __webpack_exports__["a"] = ({
  material: __WEBPACK_IMPORTED_MODULE_0__material__["a" /* default */],
  grayscale: __WEBPACK_IMPORTED_MODULE_1__grayscale__["a" /* default */]
});

/***/ }),
/* 245 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-theme/material.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);

// *
// * Colors
// *
var yellow200 = "#FFF59D";
var deepOrange600 = "#F4511E";
var lime300 = "#DCE775";
var lightGreen500 = "#8BC34A";
var teal700 = "#00796B";
var cyan900 = "#006064";
var colors = [deepOrange600, yellow200, lime300, lightGreen500, teal700, cyan900];
var blueGrey50 = "#ECEFF1";
var blueGrey300 = "#90A4AE";
var blueGrey700 = "#455A64";
var grey900 = "#212121"; // *
// * Typography
// *

var sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
var letterSpacing = "normal";
var fontSize = 12; // *
// * Layout
// *

var padding = 8;
var baseProps = {
  width: 350,
  height: 350,
  padding: 50
}; // *
// * Labels
// *

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0
};

var centeredLabelStyles = __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
  textAnchor: "middle"
}, baseLabelStyles); // *
// * Strokes
// *


var strokeDasharray = "10, 5";
var strokeLinecap = "round";
var strokeLinejoin = "round";
/* harmony default export */ __webpack_exports__["a"] = ({
  area: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: grey900
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, centeredLabelStyles, {
        padding: padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "none",
        stroke: blueGrey50,
        strokeDasharray: strokeDasharray,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin,
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      tickLabels: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        fill: blueGrey700
      })
    }
  }, baseProps),
  bar: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: blueGrey700,
        padding: padding,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      max: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      maxLabels: baseLabelStyles,
      median: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      medianLabels: baseLabelStyles,
      min: {
        padding: padding,
        stroke: blueGrey700,
        strokeWidth: 1
      },
      minLabels: baseLabelStyles,
      q1: {
        padding: padding,
        fill: blueGrey700
      },
      q1Labels: baseLabelStyles,
      q3: {
        padding: padding,
        fill: blueGrey700
      },
      q3Labels: baseLabelStyles
    },
    boxWidth: 20
  }, baseProps),
  candlestick: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        stroke: blueGrey700
      },
      labels: baseLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: blueGrey700
    }
  }, baseProps),
  chart: baseProps,
  errorbar: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  group: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    colorScale: colors
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 5
      })
    }
  },
  line: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: "transparent",
        opacity: 1,
        stroke: blueGrey700,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  pie: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    colorScale: colors,
    style: {
      data: {
        padding: padding,
        stroke: blueGrey50,
        strokeWidth: 1
      },
      labels: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 20
      })
    }
  }, baseProps),
  scatter: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: blueGrey700,
        opacity: 1,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  stack: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: grey900,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
});

/***/ }),
/* 246 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-theme/grayscale.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);

// *
// * Colors
// *
var colors = ["#252525", "#525252", "#737373", "#969696", "#bdbdbd", "#d9d9d9", "#f0f0f0"];
var charcoal = "#252525";
var grey = "#969696"; // *
// * Typography
// *

var sansSerif = "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif";
var letterSpacing = "normal";
var fontSize = 14; // *
// * Layout
// *

var baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
}; // *
// * Labels
// *

var baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize: fontSize,
  letterSpacing: letterSpacing,
  padding: 10,
  fill: charcoal,
  stroke: "transparent"
};

var centeredLabelStyles = __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
  textAnchor: "middle"
}, baseLabelStyles); // *
// * Strokes
// *


var strokeLinecap = "round";
var strokeLinejoin = "round";
/* harmony default export */ __webpack_exports__["a"] = ({
  area: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: charcoal
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  axis: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      axis: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 1,
        strokeLinecap: strokeLinecap,
        strokeLinejoin: strokeLinejoin
      },
      axisLabel: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "none",
        stroke: "none",
        pointerEvents: "painted"
      },
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  bar: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: charcoal,
        padding: 8,
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  boxplot: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      max: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      maxLabels: baseLabelStyles,
      median: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      medianLabels: baseLabelStyles,
      min: {
        padding: 8,
        stroke: charcoal,
        strokeWidth: 1
      },
      minLabels: baseLabelStyles,
      q1: {
        padding: 8,
        fill: grey
      },
      q1Labels: baseLabelStyles,
      q3: {
        padding: 8,
        fill: grey
      },
      q3Labels: baseLabelStyles
    },
    boxWidth: 20
  }, baseProps),
  candlestick: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        stroke: charcoal,
        strokeWidth: 1
      },
      labels: baseLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: charcoal
    }
  }, baseProps),
  chart: baseProps,
  errorbar: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    borderWidth: 8,
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  group: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    colorScale: colors
  }, baseProps),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles,
      title: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 5
      })
    }
  },
  line: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: charcoal,
        strokeWidth: 2
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  pie: {
    style: {
      data: {
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 20
      })
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: charcoal,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: baseLabelStyles
    }
  }, baseProps),
  stack: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    colorScale: colors
  }, baseProps),
  tooltip: {
    style: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: charcoal,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  voronoi: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, baseLabelStyles, {
        padding: 5,
        pointerEvents: "none"
      }),
      flyout: {
        stroke: charcoal,
        strokeWidth: 1,
        fill: "#f0f0f0",
        pointerEvents: "none"
      }
    }
  }, baseProps)
});

/***/ }),
/* 247 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/arc.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__ = __webpack_require__(/*! ../victory-util/common-props */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__path__ = __webpack_require__(/*! ./path */ 73);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*eslint no-magic-numbers: ["error", { "ignore": [0, 1, 2, 180] }]*/






var getArcPath = function (props) {
  var cx = props.cx,
      cy = props.cy,
      r = props.r,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      closedPath = props.closedPath; // Always draw the path as two arcs so that complete circles may be rendered.

  var halfAngle = Math.abs(endAngle - startAngle) / 2 + startAngle;
  var x1 = cx + r * Math.cos(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(startAngle));
  var y1 = cy - r * Math.sin(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(startAngle));
  var x2 = cx + r * Math.cos(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(halfAngle));
  var y2 = cy - r * Math.sin(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(halfAngle));
  var x3 = cx + r * Math.cos(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(endAngle));
  var y3 = cy - r * Math.sin(__WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].degreesToRadians(endAngle));
  var largerArcFlag1 = halfAngle - startAngle <= 180 ? 0 : 1;
  var largerArcFlag2 = endAngle - halfAngle <= 180 ? 0 : 1;
  var arcStart = closedPath ? " M ".concat(cx, ", ").concat(cy, " L ").concat(x1, ", ").concat(y1) : "M ".concat(x1, ", ").concat(y1);
  var arc1 = "A ".concat(r, ", ").concat(r, ", 0, ").concat(largerArcFlag1, ", 0, ").concat(x2, ", ").concat(y2);
  var arc2 = "A ".concat(r, ", ").concat(r, ", 0, ").concat(largerArcFlag2, ", 0, ").concat(x3, ", ").concat(y3);
  var arcEnd = closedPath ? "Z" : "";
  return "".concat(arcStart, " ").concat(arc1, " ").concat(arc2, " ").concat(arcEnd);
};

var Arc = function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
    d: getArcPath(props),
    style: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateStyle(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
      stroke: "black",
      fill: "none"
    }, props.style), props),
    desc: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

Arc.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__["a" /* default */].primitiveProps, {
  closedPath: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  cx: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  cy: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  datum: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  endAngle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  pathComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
  r: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  startAngle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
});
Arc.defaultProps = {
  pathComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__path__["a" /* default */], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* harmony default export */ __webpack_exports__["a"] = (Arc);

/***/ }),
/* 248 */
/*!*************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/border.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__ = __webpack_require__(/*! ../victory-util/common-props */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rect__ = __webpack_require__(/*! ./rect */ 72);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Border = function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(props.rectComponent, _objectSpread({}, props.events, {
    style: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateStyle(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
      fill: "none"
    }, props.style), props),
    desc: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    transform: props.transform,
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x: props.x,
    y: props.y,
    width: props.width,
    height: props.height,
    clipPath: props.clipPath
  }));
};

Border.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__["a" /* default */].primitiveProps, {
  height: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  rectComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
  width: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  x: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  y: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
});
Border.defaultProps = {
  rectComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__rect__["a" /* default */], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* unused harmony default export */ var _unused_webpack_default_export = (Border);

/***/ }),
/* 249 */
/*!*******************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/line-segment.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__ = __webpack_require__(/*! ../victory-util/common-props */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__line__ = __webpack_require__(/*! ./line */ 74);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var LineSegment = function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(props.lineComponent, _objectSpread({}, props.events, {
    style: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateStyle(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
      stroke: "black"
    }, props.style), props),
    desc: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    className: props.className,
    role: props.role,
    shapeRendering: props.shapeRendering,
    x1: props.x1,
    x2: props.x2,
    y1: props.y1,
    y2: props.y2,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

LineSegment.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__["a" /* default */].primitiveProps, {
  datum: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  lineComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
  x1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  x2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  y1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  y2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
});
LineSegment.defaultProps = {
  lineComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__line__["a" /* default */], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* harmony default export */ __webpack_exports__["a"] = (LineSegment);

/***/ }),
/* 250 */
/*!************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/point.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__path_helpers__ = __webpack_require__(/*! ./path-helpers */ 251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__ = __webpack_require__(/*! ../victory-util/common-props */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__path__ = __webpack_require__(/*! ./path */ 73);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var getPath = function (props) {
  var x = props.x,
      y = props.y;
  var size = __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__["a" /* default */].evaluateProp(props.size, props);

  if (props.getPath) {
    return props.getPath(x, y, size);
  }

  var pathFunctions = {
    circle: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].circle,
    square: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].square,
    diamond: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].diamond,
    triangleDown: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].triangleDown,
    triangleUp: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].triangleUp,
    plus: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].plus,
    minus: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].minus,
    star: __WEBPACK_IMPORTED_MODULE_3__path_helpers__["a" /* default */].star
  };
  var symbol = __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__["a" /* default */].evaluateProp(props.symbol, props);
  var symbolFunction = typeof pathFunctions[symbol] === "function" ? pathFunctions[symbol] : pathFunctions.circle;
  return symbolFunction(x, y, size);
};

var Point = function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(props.pathComponent, _objectSpread({}, props.events, {
    d: getPath(props),
    style: __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__["a" /* default */].evaluateStyle(props.style, props),
    desc: __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_2__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    role: props.role,
    shapeRendering: props.shapeRendering,
    className: props.className,
    transform: props.transform,
    clipPath: props.clipPath
  }));
};

Point.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__["a" /* default */].primitiveProps, {
  datum: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  getPath: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  pathComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  size: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  symbol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["circle", "diamond", "plus", "minus", "square", "star", "triangleDown", "triangleUp"]), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
});
Point.defaultProps = {
  pathComponent: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__path__["a" /* default */], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* unused harmony default export */ var _unused_webpack_default_export = (Point);

/***/ }),
/* 251 */
/*!*******************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/path-helpers.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range__ = __webpack_require__(/*! lodash/range */ 75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_range__);

/* harmony default export */ __webpack_exports__["a"] = ({
  circle: function (x, y, size) {
    return "M ".concat(x, ", ").concat(y, "\n      m ").concat(-size, ", 0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(size * 2, ",0\n      a ").concat(size, ", ").concat(size, " 0 1,0 ").concat(-size * 2, ",0");
  },
  square: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + baseSize;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      z");
  },
  diamond: function (x, y, size) {
    var baseSize = 0.87 * size; // eslint-disable-line no-magic-numbers

    var length = Math.sqrt(2 * (baseSize * baseSize));
    return "M ".concat(x, ", ").concat(y + length, "\n      l ").concat(length, ", -").concat(length, "\n      l -").concat(length, ", -").concat(length, "\n      l -").concat(length, ", ").concat(length, "\n      l ").concat(length, ", ").concat(length, "\n      z");
  },
  triangleDown: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - size;
    var y1 = y + height;
    return "M ".concat(x0, ", ").concat(y0, "\n      L ").concat(x1, ", ").concat(y0, "\n      L ").concat(x, ", ").concat(y1, "\n      z");
  },
  triangleUp: function (x, y, size) {
    var height = size / 2 * Math.sqrt(3);
    var x0 = x - size;
    var x1 = x + size;
    var y0 = y - height;
    var y1 = y + size;
    return "M ".concat(x0, ", ").concat(y1, "\n      L ").concat(x1, ", ").concat(y1, "\n      L ").concat(x, ", ").concat(y0, "\n      z");
  },
  plus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var distance = baseSize / 1.5; // eslint-disable-line no-magic-numbers

    return "\n      M ".concat(x - distance / 2, ", ").concat(y + baseSize, "\n      v-").concat(distance, "\n      h-").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v-").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h").concat(distance, "\n      v").concat(distance, "\n      h-").concat(distance, "\n      v").concat(distance, "\n      z");
  },
  minus: function (x, y, size) {
    var baseSize = 1.1 * size; // eslint-disable-line no-magic-numbers

    var lineHeight = baseSize - baseSize * 0.3; // eslint-disable-line no-magic-numbers

    var x0 = x - baseSize;
    var y1 = y + lineHeight / 2;
    var distance = x + baseSize - x0;
    return "M ".concat(x0, ", ").concat(y1, "\n      h").concat(distance, "\n      v-").concat(lineHeight, "\n      h-").concat(distance, "\n      z");
  },
  star: function (x, y, size) {
    var baseSize = 1.35 * size; // eslint-disable-line no-magic-numbers

    var angle = Math.PI / 5; // eslint-disable-line no-magic-numbers
    // eslint-disable-next-line no-magic-numbers

    var starCoords = __WEBPACK_IMPORTED_MODULE_0_lodash_range___default()(10).map(function (index) {
      var length = index % 2 === 0 ? baseSize : baseSize / 2;
      return "".concat(length * Math.sin(angle * (index + 1)) + x, ",\n        ").concat(length * Math.cos(angle * (index + 1)) + y);
    });

    return "M ".concat(starCoords.join("L"), " z");
  }
});

/***/ }),
/* 252 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createRange.js ***!
  \*******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(/*! ./_baseRange */ 253),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 52),
    toFinite = __webpack_require__(/*! ./toFinite */ 111);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 253 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseRange.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 254 */
/*!**************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-primitives/whisker.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__ = __webpack_require__(/*! ../victory-util/helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__ = __webpack_require__(/*! ../victory-util/common-props */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__line__ = __webpack_require__(/*! ./line */ 74);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Whisker = function (props) {
  var groupComponent = props.groupComponent,
      lineComponent = props.lineComponent,
      events = props.events,
      className = props.className,
      majorWhisker = props.majorWhisker,
      minorWhisker = props.minorWhisker,
      transform = props.transform,
      clipPath = props.clipPath,
      role = props.role,
      shapeRendering = props.shapeRendering;

  var baseProps = _objectSpread({}, events, {
    style: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateStyle(props.style, props),
    desc: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.desc, props),
    tabIndex: __WEBPACK_IMPORTED_MODULE_3__victory_util_helpers__["a" /* default */].evaluateProp(props.tabIndex, props),
    className: className,
    transform: transform,
    clipPath: clipPath,
    role: role,
    shapeRendering: shapeRendering
  });

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(groupComponent, {}, [__WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(lineComponent, __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    key: "major-whisker"
  }, baseProps, majorWhisker)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.cloneElement(lineComponent, __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({
    key: "minor-whisker"
  }, baseProps, minorWhisker))]);
};

Whisker.propTypes = _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__victory_util_common_props__["a" /* default */].primitiveProps, {
  groupComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
  lineComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
  majorWhisker: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    x1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    x2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    y1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    y2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  }),
  minorWhisker: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    x1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    x2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    y1: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    y2: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  })
});
Whisker.defaultProps = {
  groupComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", null),
  lineComponent: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__line__["a" /* default */], null),
  role: "presentation",
  shapeRendering: "auto"
};
/* unused harmony default export */ var _unused_webpack_default_export = (Whisker);

/***/ }),
/* 255 */
/*!***********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/add-events.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isNil__ = __webpack_require__(/*! lodash/isNil */ 256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without__ = __webpack_require__(/*! lodash/without */ 76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_pick__ = __webpack_require__(/*! lodash/pick */ 68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keys__ = __webpack_require__(/*! lodash/keys */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events__ = __webpack_require__(/*! ./events */ 77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_fast_compare__ = __webpack_require__(/*! react-fast-compare */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_fast_compare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__victory_transition_victory_transition__ = __webpack_require__(/*! ../victory-transition/victory-transition */ 118);









function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var datumHasXandY = function (datum) {
  return !__WEBPACK_IMPORTED_MODULE_0_lodash_isNil___default()(datum._x) && !__WEBPACK_IMPORTED_MODULE_0_lodash_isNil___default()(datum._y);
}; //  used for checking state changes. Expected components can be passed in via options


var defaultComponents = [{
  name: "parent",
  index: "parent"
}, {
  name: "data"
}, {
  name: "labels"
}];
/* harmony default export */ __webpack_exports__["a"] = (function (WrappedComponent, options) {
  return (
    /*#__PURE__*/
    function (_WrappedComponent) {
      _inherits(addEvents, _WrappedComponent);

      function addEvents(props) {
        var _this;

        _classCallCheck(this, addEvents);

        _this = _possibleConstructorReturn(this, (addEvents.__proto__ || Object.getPrototypeOf(addEvents)).call(this, props));
        var getScopedEvents = __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getScopedEvents.bind(_assertThisInitialized(_this));
        var boundGetEvents = __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getEvents.bind(_assertThisInitialized(_this));
        _this.state = {};

        _this.getEvents = function (p, target, eventKey) {
          return boundGetEvents(p, target, eventKey, getScopedEvents);
        };

        _this.getEventState = __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getEventState.bind(_assertThisInitialized(_this));

        var calculatedValues = _this.getCalculatedValues(props);

        _this.cacheValues(calculatedValues);

        _this.externalMutations = _this.getExternalMutations(props);
        _this.calculatedState = _this.getStateChanges(props, calculatedValues);
        return _this;
      }

      _createClass(addEvents, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var calculatedValues = this.getCalculatedValues(nextProps);
          var externalMutations = this.getExternalMutations(nextProps);
          var animating = this.props.animating || this.props.animate;
          var newMutation = !__WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default()(externalMutations, this.externalMutations);

          if (animating || newMutation) {
            this.cacheValues(calculatedValues);
            this.externalMutations = externalMutations;
            this.applyExternalMutations(nextProps, externalMutations);
            return true;
          }

          var calculatedState = this.getStateChanges(nextProps, calculatedValues);

          if (!__WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default()(this.calculatedState, calculatedState)) {
            this.calculatedState = calculatedState;
            this.cacheValues(calculatedValues);
            return true;
          }

          if (!__WEBPACK_IMPORTED_MODULE_10_react_fast_compare___default()(this.props, nextProps)) {
            this.cacheValues(calculatedValues);
            return true;
          }

          return false;
        } // compile all state changes from own and parent state. Order doesn't matter, as any state
        // state change should trigger a re-render

      }, {
        key: "getStateChanges",
        value: function getStateChanges(props, calculatedValues) {
          var _this2 = this;

          var hasEvents = calculatedValues.hasEvents,
              getSharedEventState = calculatedValues.getSharedEventState;

          if (!hasEvents) {
            return {};
          }

          var getState = function (key, type) {
            var result = __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({}, _this2.getEventState(key, type), getSharedEventState(key, type));

            return __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(result) ? undefined : result;
          };

          options = options || {};
          var components = options.components || defaultComponents;
          var stateChanges = components.map(function (component) {
            if (!props.standalone && component.name === "parent") {
              // don't check for changes on parent props for non-standalone components
              return undefined;
            } else {
              return component.index !== undefined ? getState(component.index, component.name) : calculatedValues.dataKeys.map(function (key) {
                return getState(key, component.name);
              }).filter(Boolean);
            }
          }).filter(Boolean);
          return stateChanges;
        }
      }, {
        key: "applyExternalMutations",
        value: function applyExternalMutations(props, externalMutations) {
          if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(externalMutations)) {
            var callbacks = props.externalEventMutations.reduce(function (memo, mutation) {
              memo = __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(mutation.callback) ? memo.concat(mutation.callback) : memo;
              return memo;
            }, []);
            var compiledCallbacks = callbacks.length ? function () {
              callbacks.forEach(function (c) {
                return c();
              });
            } : undefined;
            this.setState(externalMutations, compiledCallbacks);
          }
        }
      }, {
        key: "getCalculatedValues",
        value: function getCalculatedValues(props) {
          var sharedEvents = props.sharedEvents;
          var components = WrappedComponent.expectedComponents;
          var componentEvents = __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getComponentEvents(props, components);
          var getSharedEventState = sharedEvents && __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(sharedEvents.getEventState) ? sharedEvents.getEventState : function () {
            return undefined;
          };
          var baseProps = this.getBaseProps(props, getSharedEventState);

          var dataKeys = __WEBPACK_IMPORTED_MODULE_5_lodash_keys___default()(baseProps).filter(function (key) {
            return key !== "parent";
          });

          var hasEvents = props.events || props.sharedEvents || componentEvents;
          var events = this.getAllEvents(props);
          return {
            componentEvents: componentEvents,
            getSharedEventState: getSharedEventState,
            baseProps: baseProps,
            dataKeys: dataKeys,
            hasEvents: hasEvents,
            events: events
          };
        }
      }, {
        key: "getExternalMutations",
        value: function getExternalMutations(props) {
          var sharedEvents = props.sharedEvents,
              externalEventMutations = props.externalEventMutations;
          return __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(externalEventMutations) || sharedEvents ? undefined : __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getExternalMutations(externalEventMutations, this.baseProps, this.state);
        }
      }, {
        key: "cacheValues",
        value: function cacheValues(obj) {
          var _this3 = this;

          __WEBPACK_IMPORTED_MODULE_5_lodash_keys___default()(obj).forEach(function (key) {
            _this3[key] = obj[key];
          });
        }
      }, {
        key: "getBaseProps",
        value: function getBaseProps(props, getSharedEventState) {
          getSharedEventState = getSharedEventState || this.getSharedEventState;
          var sharedParentState = getSharedEventState("parent", "parent");
          var parentState = this.getEventState("parent", "parent");

          var baseParentProps = __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({}, parentState, sharedParentState);

          var parentPropsList = baseParentProps.parentControlledProps;
          var parentProps = parentPropsList ? __WEBPACK_IMPORTED_MODULE_3_lodash_pick___default()(baseParentProps, parentPropsList) : {};

          var modifiedProps = __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({}, parentProps, props);

          return __WEBPACK_IMPORTED_MODULE_4_lodash_isFunction___default()(WrappedComponent.getBaseProps) ? WrappedComponent.getBaseProps(modifiedProps) : {};
        }
      }, {
        key: "getAllEvents",
        value: function getAllEvents(props) {
          if (Array.isArray(this.componentEvents)) {
            var _componentEvents;

            return Array.isArray(props.events) ? (_componentEvents = this.componentEvents).concat.apply(_componentEvents, _toConsumableArray(props.events)) : this.componentEvents;
          }

          return props.events;
        }
      }, {
        key: "getComponentProps",
        value: function getComponentProps(component, type, index) {
          var name = this.props.name || WrappedComponent.role;
          var key = this.dataKeys && this.dataKeys[index] || index;
          var id = "".concat(name, "-").concat(type, "-").concat(key);
          var baseProps = this.baseProps[key] && this.baseProps[key][type] || this.baseProps[key];

          if (!baseProps && !this.hasEvents) {
            return undefined;
          }

          if (this.hasEvents) {
            var baseEvents = this.getEvents(this.props, type, key);

            var componentProps = __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({
              index: index,
              key: id
            }, this.getEventState(key, type), this.getSharedEventState(key, type), component.props, baseProps, {
              id: id
            });

            var events = __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({}, __WEBPACK_IMPORTED_MODULE_9__events__["a" /* default */].getPartialEvents(baseEvents, key, componentProps), componentProps.events);

            return __WEBPACK_IMPORTED_MODULE_6_lodash_assign___default()({}, componentProps, {
              events: events
            });
          }

          return __WEBPACK_IMPORTED_MODULE_7_lodash_defaults___default()({
            index: index,
            key: id
          }, component.props, baseProps, {
            id: id
          });
        }
      }, {
        key: "renderContainer",
        value: function renderContainer(component, children) {
          var isContainer = component.type && component.type.role === "container";
          var parentProps = isContainer ? this.getComponentProps(component, "parent", "parent") : {};
          return __WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(component, parentProps, children);
        }
      }, {
        key: "animateComponent",
        value: function animateComponent(props, defaultAnimationWhitelist) {
          var animationWhitelist = props.animate && props.animate.animationWhitelist ? props.animate.animationWhitelist : defaultAnimationWhitelist;
          return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__victory_transition_victory_transition__["a" /* default */], {
            animate: props.animate,
            animationWhitelist: animationWhitelist
          }, __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(this.constructor, props));
        } // Used by `VictoryLine` and `VictoryArea`

      }, {
        key: "renderContinuousData",
        value: function renderContinuousData(props) {
          var _this4 = this;

          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;

          var dataKeys = __WEBPACK_IMPORTED_MODULE_2_lodash_without___default()(this.dataKeys, "all");

          var labelComponents = dataKeys.reduce(function (memo, key) {
            var labelProps = _this4.getComponentProps(labelComponent, "labels", key);

            if (labelProps && labelProps.text !== undefined && labelProps.text !== null) {
              memo = memo.concat(__WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(labelComponent, labelProps));
            }

            return memo;
          }, []);
          var dataProps = this.getComponentProps(dataComponent, "data", "all");
          var children = [__WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(dataComponent, dataProps)].concat(_toConsumableArray(labelComponents));
          return this.renderContainer(groupComponent, children);
        }
      }, {
        key: "renderData",
        value: function renderData(props) {
          var _this5 = this;

          var shouldRenderDatum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : datumHasXandY;
          var dataComponent = props.dataComponent,
              labelComponent = props.labelComponent,
              groupComponent = props.groupComponent;
          var dataComponents = this.dataKeys.reduce(function (validDataComponents, _dataKey, index) {
            var dataProps = _this5.getComponentProps(dataComponent, "data", index);

            if (shouldRenderDatum(dataProps.datum)) {
              validDataComponents.push(__WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(dataComponent, dataProps));
            }

            return validDataComponents;
          }, []);
          var labelComponents = this.dataKeys.map(function (_dataKey, index) {
            var labelProps = _this5.getComponentProps(labelComponent, "labels", index);

            if (labelProps.text !== undefined && labelProps.text !== null) {
              return __WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(labelComponent, labelProps);
            }

            return undefined;
          }).filter(Boolean);

          var children = _toConsumableArray(dataComponents).concat(_toConsumableArray(labelComponents));

          return this.renderContainer(groupComponent, children);
        }
      }]);

      return addEvents;
    }(WrappedComponent)
  );
});

/***/ }),
/* 256 */
/*!************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isNil.js ***!
  \************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 257 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseDifference.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 56),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ 121),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ 122),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 24),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 62),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 57);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 258 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isArrayLikeObject.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 34),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 38);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 259 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createSet.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 260 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_setToArray.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 261 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/pickBy.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 24),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ 113),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ 262);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 262 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_getAllKeysIn.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 263 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/isEqual.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 55);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 264 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/last.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 265 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/index.js ***!
  \**************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, schemeCategory10, schemeCategory20b, schemeCategory20c, schemeCategory20, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, scaleSequential */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(/*! ./src/band */ 266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(/*! ./src/identity */ 289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(/*! ./src/linear */ 31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(/*! ./src/log */ 301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(/*! ./src/ordinal */ 136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(/*! ./src/pow */ 302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(/*! ./src/quantile */ 303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(/*! ./src/quantize */ 304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(/*! ./src/threshold */ 305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(/*! ./src/time */ 143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(/*! ./src/utcTime */ 321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_category10__ = __webpack_require__(/*! ./src/category10 */ 322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_11__src_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_category20b__ = __webpack_require__(/*! ./src/category20b */ 323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_12__src_category20b__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_category20c__ = __webpack_require__(/*! ./src/category20c */ 324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_category20c__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_category20__ = __webpack_require__(/*! ./src/category20 */ 325);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_14__src_category20__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(/*! ./src/cubehelix */ 326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rainbow__ = __webpack_require__(/*! ./src/rainbow */ 327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_viridis__ = __webpack_require__(/*! ./src/viridis */ 328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential__ = __webpack_require__(/*! ./src/sequential */ 329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential__["a"]; });







































/***/ }),
/* 266 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/band.js ***!
  \*****************************************************************************/
/*! exports provided: default, point */
/*! exports used: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(/*! ./ordinal */ 136);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["e" /* range */])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 267 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/cross.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(/*! ./pairs */ 126);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 268 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/descending.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 269 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/histogram.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(/*! ./array */ 130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(/*! ./bisect */ 124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(/*! ./constant */ 270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(/*! ./extent */ 129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(/*! ./identity */ 271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(/*! ./range */ 131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(/*! ./ticks */ 132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(/*! ./threshold/sturges */ 133);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 270 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/constant.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 271 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/identity.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 272 */
/*!***************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(/*! ../array */ 130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(/*! ../ascending */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(/*! ../number */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(/*! ../quantile */ 79);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 273 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/threshold/scott.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(/*! ../deviation */ 127);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 274 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/max.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 275 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/mean.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(/*! ./number */ 30);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 276 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/median.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(/*! ./ascending */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(/*! ./number */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(/*! ./quantile */ 79);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 277 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/merge.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 278 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/permute.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 279 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/scan.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(/*! ./ascending */ 23);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 280 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/shuffle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 281 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/sum.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 282 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-array/src/zip.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(/*! ./transpose */ 135);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 283 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/index.js ***!
  \***********************************************************************************/
/*! exports provided: nest, set, map, keys, values, entries */
/*! exports used: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nest__ = __webpack_require__(/*! ./nest */ 284);
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__set__ = __webpack_require__(/*! ./set */ 285);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(/*! ./map */ 80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keys__ = __webpack_require__(/*! ./keys */ 286);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(/*! ./values */ 287);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entries__ = __webpack_require__(/*! ./entries */ 288);
/* unused harmony reexport entries */








/***/ }),
/* 284 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/nest.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(/*! ./map */ 80);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 285 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/set.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(/*! ./map */ 80);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),
/* 286 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/keys.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 287 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/values.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 288 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-collection/src/entries.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 289 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/identity.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(/*! ./array */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(/*! ./linear */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(/*! ./number */ 137);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 290 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/tickFormat.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(/*! d3-format */ 138);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["g" /* tickStep */])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),
/* 291 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/defaultLocale.js ***!
  \***************************************************************************************/
/*! exports provided: format, formatPrefix, default */
/*! exports used: format, formatPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(/*! ./locale */ 139);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 292 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatGroup.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 293 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatNumerals.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 294 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatTrim.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),
/* 295 */
/*!*************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatTypes.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__ = __webpack_require__(/*! ./formatPrefixAuto */ 141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatRounded__ = __webpack_require__(/*! ./formatRounded */ 296);



/* harmony default export */ __webpack_exports__["a"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_1__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_0__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 296 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/formatRounded.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(/*! ./formatDecimal */ 82);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 297 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/identity.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 298 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/precisionFixed.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(/*! ./exponent */ 46);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 299 */
/*!*****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/precisionPrefix.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(/*! ./exponent */ 46);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 300 */
/*!****************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-format/src/precisionRound.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(/*! ./exponent */ 46);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 301 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/log.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(/*! d3-format */ 138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(/*! ./constant */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(/*! ./nice */ 142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(/*! ./continuous */ 45);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["h" /* ticks */])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 302 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/pow.js ***!
  \****************************************************************************/
/*! exports provided: default, sqrt */
/*! exports used: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* harmony export (immutable) */ __webpack_exports__["b"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(/*! ./constant */ 81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(/*! ./linear */ 31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(/*! ./continuous */ 45);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 303 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/quantile.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(/*! ./array */ 15);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["d" /* quantile */])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* ascending */]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 304 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/quantize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(/*! ./array */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(/*! ./linear */ 31);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 305 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/threshold.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(/*! d3-array */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(/*! ./array */ 15);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* bisect */])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 306 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/millisecond.js ***!
  \***********************************************************************************/
/*! exports provided: default, milliseconds */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 307 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/second.js ***!
  \******************************************************************************/
/*! exports provided: default, seconds */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 308 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/minute.js ***!
  \******************************************************************************/
/*! exports provided: default, minutes */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 309 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/hour.js ***!
  \****************************************************************************/
/*! exports provided: default, hours */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 310 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/day.js ***!
  \***************************************************************************/
/*! exports provided: default, days */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 311 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/week.js ***!
  \****************************************************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/*! exports used: monday, sunday, thursday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 312 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/month.js ***!
  \*****************************************************************************/
/*! exports provided: default, months */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 313 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/year.js ***!
  \****************************************************************************/
/*! exports provided: default, years */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 314 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcMinute.js ***!
  \*********************************************************************************/
/*! exports provided: default, utcMinutes */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 315 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcHour.js ***!
  \*******************************************************************************/
/*! exports provided: default, utcHours */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 316 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcDay.js ***!
  \******************************************************************************/
/*! exports provided: default, utcDays */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 317 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcWeek.js ***!
  \*******************************************************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/*! exports used: utcMonday, utcSunday, utcThursday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(/*! ./duration */ 9);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 318 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcMonth.js ***!
  \********************************************************************************/
/*! exports provided: default, utcMonths */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 319 */
/*!*******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time/src/utcYear.js ***!
  \*******************************************************************************/
/*! exports provided: default, utcYears */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(/*! ./interval */ 5);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 320 */
/*!***************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-time-format/src/isoParse.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(/*! ./isoFormat */ 146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(/*! ./defaultLocale */ 84);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 321 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/utcTime.js ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(/*! ./time */ 143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(/*! d3-time-format */ 144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(/*! d3-time */ 83);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 322 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/category10.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(/*! ./colors */ 32);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 323 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/category20b.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(/*! ./colors */ 32);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));


/***/ }),
/* 324 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/category20c.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(/*! ./colors */ 32);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));


/***/ }),
/* 325 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/category20.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(/*! ./colors */ 32);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));


/***/ }),
/* 326 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/cubehelix.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 327 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/rainbow.js ***!
  \********************************************************************************/
/*! exports provided: warm, cool, default */
/*! exports used: cool, default, warm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(/*! d3-color */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(/*! d3-interpolate */ 19);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var rainbow = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
});


/***/ }),
/* 328 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/viridis.js ***!
  \********************************************************************************/
/*! exports provided: default, magma, inferno, plasma */
/*! exports used: default, inferno, magma, plasma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(/*! ./colors */ 32);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 329 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/d3-scale/src/sequential.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(/*! ./linear */ 31);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 330 */
/*!********************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/default-transitions.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable func-style */
/* unused harmony default export */ var _unused_webpack_default_export = ({
  continuousTransitions: function () {
    return {
      onLoad: {
        duration: 2000
      },
      onExit: {
        duration: 500
      },
      onEnter: {
        duration: 500
      }
    };
  },
  continuousPolarTransitions: function () {
    return {
      onLoad: {
        duration: 2000,
        before: function () {
          return {
            _y: 0,
            _y1: 0,
            _y0: 0
          };
        },
        after: function (datum) {
          return {
            _y: datum._y,
            _y1: datum._y1,
            _y0: datum._y0
          };
        }
      },
      onExit: {
        duration: 500,
        before: function (datum, index, data) {
          var adjacent = function (attr) {
            var adj = index === 0 ? data[index + 1] : data[index - 1];
            return adj[attr];
          };

          return {
            _x: adjacent("_x"),
            _y: adjacent("_y"),
            _y0: adjacent("_y0")
          };
        }
      },
      onEnter: {
        duration: 500,
        before: function (datum, index, data) {
          var adjacent = function (attr) {
            var adj = index === 0 ? data[index + 1] : data[index - 1];
            return adj[attr];
          };

          return {
            _x: adjacent("_x"),
            _y: adjacent("_y"),
            _y0: adjacent("_y0")
          };
        },
        after: function (datum) {
          return {
            _x: datum._x,
            _y: datum._y,
            _y1: datum._y1,
            _y0: datum._y0
          };
        }
      }
    };
  },
  discreteTransitions: function () {
    return {
      onLoad: {
        duration: 2000,
        before: function () {
          return {
            opacity: 0
          };
        },
        after: function (datum) {
          return datum;
        }
      },
      onExit: {
        duration: 600,
        before: function () {
          return {
            opacity: 0
          };
        }
      },
      onEnter: {
        duration: 600,
        before: function () {
          return {
            opacity: 0
          };
        },
        after: function (datum) {
          return datum;
        }
      }
    };
  }
});

/***/ }),
/* 331 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/sortedUniq.js ***!
  \*****************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseSortedUniq = __webpack_require__(/*! ./_baseSortedUniq */ 332);

/**
 * This method is like `_.uniq` except that it's designed and optimized
 * for sorted arrays.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.sortedUniq([1, 1, 2]);
 * // => [1, 2]
 */
function sortedUniq(array) {
  return (array && array.length)
    ? baseSortedUniq(array)
    : [];
}

module.exports = sortedUniq;


/***/ }),
/* 332 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseSortedUniq.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 35);

/**
 * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

module.exports = baseSortedUniq;


/***/ }),
/* 333 */
/*!**********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/selection.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(/*! ./collection */ 13);
/* eslint-disable func-style */

/* eslint-disable no-use-before-define */
 // Private Functions

function transformTarget(target, matrix, dimension) {
  var a = matrix.a,
      d = matrix.d,
      e = matrix.e,
      f = matrix.f;
  return dimension === "y" ? d * target + f : a * target + e;
}

function getTransformationMatrix(svg) {
  return svg.getScreenCTM().inverse();
} // Exported Functions


function getParentSVG(evt) {
  if (evt.nativeEvent && evt.nativeEvent.identifier !== undefined) {
    return undefined;
  }

  var getParent = function (target) {
    if (target.nodeName === "svg") {
      return target;
    } else {
      return target.parentNode ? getParent(target.parentNode) : target;
    }
  };

  return getParent(evt.target);
}

function getSVGEventCoordinates(evt, svg) {
  if (evt.nativeEvent && evt.nativeEvent.identifier !== undefined) {
    // react-native override. relies on the RN.View being the _exact_ same size as its child SVG.
    // this should be fine: the svg is the only child of View and the View shirks to its children
    return {
      x: evt.nativeEvent.locationX,
      y: evt.nativeEvent.locationY
    };
  }

  evt = evt.changedTouches && evt.changedTouches.length ? evt.changedTouches[0] : evt;
  svg = svg || getParentSVG(evt);
  var matrix = getTransformationMatrix(svg);
  return {
    x: transformTarget(evt.clientX, matrix, "x"),
    y: transformTarget(evt.clientY, matrix, "y")
  };
}

function getDomainCoordinates(props, domain) {
  var scale = props.scale,
      horizontal = props.horizontal;
  domain = domain || {
    x: scale.x.domain(),
    y: scale.y.domain()
  };
  return {
    x: horizontal ? [scale.y(domain.y[0]), scale.y(domain.y[1])] : [scale.x(domain.x[0]), scale.x(domain.x[1])],
    y: horizontal ? [scale.x(domain.x[0]), scale.x(domain.x[1])] : [scale.y(domain.y[0]), scale.y(domain.y[1])]
  };
} // eslint-disable-next-line max-params


function getDataCoordinates(props, scale, x, y) {
  var polar = props.polar,
      horizontal = props.horizontal;

  if (!polar) {
    return {
      x: horizontal ? scale.x.invert(y) : scale.x.invert(x),
      y: horizontal ? scale.y.invert(x) : scale.y.invert(y)
    };
  } else {
    var origin = props.origin || {
      x: 0,
      y: 0
    };
    var baseX = x - origin.x;
    var baseY = y - origin.y;
    var radius = Math.abs(baseX * Math.sqrt(1 + Math.pow(-baseY / baseX, 2)));
    var angle = (-Math.atan2(baseY, baseX) + Math.PI * 2) % (Math.PI * 2);
    return {
      x: scale.x.invert(angle),
      y: scale.y.invert(radius)
    };
  }
}

function getBounds(props) {
  var x1 = props.x1,
      x2 = props.x2,
      y1 = props.y1,
      y2 = props.y2,
      scale = props.scale;
  var point1 = getDataCoordinates(props, scale, x1, y1);
  var point2 = getDataCoordinates(props, scale, x2, y2);

  var makeBound = function (a, b) {
    return [__WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */].getMinValue([a, b]), __WEBPACK_IMPORTED_MODULE_0__collection__["a" /* default */].getMaxValue([a, b])];
  };

  return {
    x: makeBound(point1.x, point2.x),
    y: makeBound(point1.y, point2.y)
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  getParentSVG: getParentSVG,
  getSVGEventCoordinates: getSVGEventCoordinates,
  getDomainCoordinates: getDomainCoordinates,
  getDataCoordinates: getDataCoordinates,
  getBounds: getBounds
});

/***/ }),
/* 334 */
/*!*********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/textsize.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var fontDictionary = {
  "American Typewriter": 2.09,
  Baskerville: 2.51,
  Georgia: 2.27,
  "Hoefler Text": 2.39,
  Palatino: 2.26,
  "Times New Roman": 2.48,
  Arial: 2.26,
  "Gill Sans": 2.47,
  "Gill Sans 300": 2.58,
  "Helvetica Neue": 2.24,
  "Lucida Grande": 2.05,
  Tahoma: 2.25,
  "Trebuchet MS": 2.2,
  Verdana: 1.96,
  "Courier New": 1.67,
  cursive: 1.84,
  fantasy: 2.09,
  monospace: 1.81,
  serif: 2.04,
  "sans-serif": 1.89
}; //https://developer.mozilla.org/en/docs/Web/CSS/length
// Absolute sizes in pixels for obsolete measurement units.

var absoluteMeasurementUnitsToPixels = {
  mm: 3.8,
  sm: 38,
  pt: 1.33,
  pc: 16,
  in: 96,
  px: 1
};
var relativeMeasurementUnitsCoef = {
  em: 1,
  ex: 0.5
};
var coefficients = {
  averageFontConstant: 2.1675,
  // Average pixels per glyph in existing font.
  widthOverlapCoef: 1.25,
  // Coefficient for width value to prevent overlap.
  heightOverlapCoef: 1.05,
  // Coefficient for height value to prevent overlap.
  lineCapitalCoef: 1.15,
  // Coefficient for height value. Reserve space for capital chars.
  lineSpaceHeightCoef: 0.2 // Coefficient for height value. Reserve space between lines.

};
var defaultStyle = {
  lineHeight: 1,
  letterSpacing: "0px",
  fontSize: 0,
  angle: 0,
  fontFamily: ""
};

var _degreeToRadian = function (angle) {
  return angle * Math.PI / 180;
};

var _getFontCharacterConstant = function (fontFamily) {
  var firstFont = fontFamily.split(",")[0].replace(/'|"/g, "");
  return fontDictionary[firstFont] || coefficients.averageFontConstant;
};

var _splitToLines = function (text) {
  return Array.isArray(text) ? text : text.toString().split(/\r\n|\r|\n/g);
};

var _getSizeWithRotate = function (axisSize, dependentSize, angle) {
  var angleInRadian = _degreeToRadian(angle);

  return Math.abs(Math.cos(angleInRadian) * axisSize) + Math.abs(Math.sin(angleInRadian) * dependentSize);
};
/**
 * Convert length-type parameters from specific measurement units to pixels
 * @param  {string} length Css length string value.
 * @param  {number} fontSize Current text font-size.
 * @returns {number} Approximate Css length in pixels.
 */


var convertLengthToPixels = function (length, fontSize) {
  var attribute = length.match(/[a-zA-Z%]+/)[0];
  var value = length.match(/[0-9.,]+/);
  var result;

  if (absoluteMeasurementUnitsToPixels.hasOwnProperty(attribute)) {
    result = value * absoluteMeasurementUnitsToPixels[attribute];
  } else if (relativeMeasurementUnitsCoef.hasOwnProperty(attribute)) {
    result = (fontSize ? value * fontSize : value * defaultStyle.fontSize) * relativeMeasurementUnitsCoef[attribute];
  } else {
    result = value;
  }

  return result;
};

var _prepareParams = function (inputStyle, index) {
  var lineStyle = Array.isArray(inputStyle) ? inputStyle[index] : inputStyle;

  var style = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, lineStyle, defaultStyle);

  return __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, style, {
    characterConstant: style.characterConstant || _getFontCharacterConstant(style.fontFamily),
    letterSpacing: convertLengthToPixels(style.letterSpacing, style.fontSize),
    fontSize: typeof style.fontSize === "number" ? style.fontSize : convertLengthToPixels(String(style.fontSize))
  });
};

var _approximateTextWidthInternal = function (text, style) {
  if (text === undefined || text === "") {
    return 0;
  }

  var widths = _splitToLines(text).map(function (line, index) {
    var len = line.toString().length;

    var _prepareParams2 = _prepareParams(style, index),
        fontSize = _prepareParams2.fontSize,
        characterConstant = _prepareParams2.characterConstant,
        letterSpacing = _prepareParams2.letterSpacing;

    return len * fontSize / characterConstant + letterSpacing * Math.max(len - 1, 0);
  });

  return Math.max.apply(Math, _toConsumableArray(widths));
};

var _approximateTextHeightInternal = function (text, style) {
  if (text === undefined || text === "") {
    return 0;
  }

  return _splitToLines(text).reduce(function (total, line, index) {
    var lineStyle = _prepareParams(style, index);

    var containsCaps = line.toString().match(/[(A-Z)(0-9)]/);
    var height = containsCaps ? lineStyle.fontSize * coefficients.lineCapitalCoef : lineStyle.fontSize;
    var emptySpace = index === 0 ? 0 : lineStyle.fontSize * coefficients.lineSpaceHeightCoef;
    return total + lineStyle.lineHeight * (height + emptySpace);
  }, 0);
};
/**
 * Predict text size by font params.
 * @param {string} text Content for width calculation.
 * @param {Object} style Text styles, ,fontFamily, fontSize, etc.
 * @param {string} style.fontFamily Text fontFamily.
 * @param {(number|string)} style.fontSize Text fontSize.
 * @param {number} style.angle Text rotate angle.
 * @param {string} style.letterSpacing Text letterSpacing(space between letters).
 * @param {number} style.characterConstant Average pixels per glyph.
 * @param {number} style.lineHeight Line height coefficient.
 * @returns {number} Approximate text label height.
 */


var approximateTextSize = function (text, style) {
  var angle = Array.isArray(style) ? style[0] && style[0].angle : style && style.angle;

  var height = _approximateTextHeightInternal(text, style);

  var width = _approximateTextWidthInternal(text, style);

  var widthWithRotate = angle ? _getSizeWithRotate(width, height, angle) : width;
  var heightWithRotate = angle ? _getSizeWithRotate(height, width, angle) : height;
  return {
    width: widthWithRotate * coefficients.widthOverlapCoef,
    height: heightWithRotate * coefficients.heightOverlapCoef
  };
};

/* harmony default export */ __webpack_exports__["a"] = ({
  approximateTextSize: approximateTextSize,
  convertLengthToPixels: convertLengthToPixels
});

/***/ }),
/* 335 */
/*!********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-core/es/victory-util/wrapper.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject__ = __webpack_require__(/*! lodash/isPlainObject */ 27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values__ = __webpack_require__(/*! lodash/values */ 148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqBy__ = __webpack_require__(/*! lodash/uniqBy */ 149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_uniqBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_uniqBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_groupBy__ = __webpack_require__(/*! lodash/groupBy */ 337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_groupBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_groupBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_some__ = __webpack_require__(/*! lodash/some */ 341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq__ = __webpack_require__(/*! lodash/uniq */ 43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_uniq__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_flatten__ = __webpack_require__(/*! lodash/flatten */ 69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_flatten___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_flatten__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__axis__ = __webpack_require__(/*! ./axis */ 150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__style__ = __webpack_require__(/*! ./style */ 70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transitions__ = __webpack_require__(/*! ./transitions */ 71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data__ = __webpack_require__(/*! ./data */ 78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__domain__ = __webpack_require__(/*! ./domain */ 85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__events__ = __webpack_require__(/*! ./events */ 77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__collection__ = __webpack_require__(/*! ./collection */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers__ = __webpack_require__(/*! ./helpers */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__scale__ = __webpack_require__(/*! ./scale */ 44);











function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }











/* harmony default export */ __webpack_exports__["a"] = ({
  getData: function (props, childComponents) {
    if (props.data) {
      return __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getData(props);
    }

    childComponents = childComponents || __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
    return this.getDataFromChildren(childComponents);
  },
  getDefaultDomainPadding: function (props, axis, childComponents) {
    if (props.polar || axis !== "x") {
      return undefined;
    }

    var groupComponent = childComponents.filter(function (child) {
      return child.type && child.type.role && child.type.role === "group";
    });

    if (groupComponent.length < 1) {
      return undefined;
    }

    var _groupComponent$0$pro = groupComponent[0].props,
        offset = _groupComponent$0$pro.offset,
        children = _groupComponent$0$pro.children;
    return {
      x: offset * children.length / 2
    };
  },
  getDomain: function (props, axis, childComponents) {
    childComponents = childComponents || __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
    var propsDomain = __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getDomainFromProps(props, axis);
    var minDomain = __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getMinFromProps(props, axis);
    var maxDomain = __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getMaxFromProps(props, axis);
    var domainPadding = this.getDefaultDomainPadding(props, axis, childComponents);
    var domain;

    if (propsDomain) {
      domain = propsDomain;
    } else {
      var dataset = (props.data || props.y) && __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getData(props);
      var dataDomain = dataset ? __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getDomainFromData(props, axis, dataset) : [];
      var childDomain = this.getDomainFromChildren(props, axis, childComponents);
      var min = minDomain || __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].getMinValue(_toConsumableArray(dataDomain).concat(_toConsumableArray(childDomain)));
      var max = maxDomain || __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].getMaxValue(_toConsumableArray(dataDomain).concat(_toConsumableArray(childDomain)));
      domain = __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getDomainFromMinMax(min, max);
    }

    return __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].formatDomain(domain, __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({
      domainPadding: domainPadding
    }, props), axis);
  },
  getScale: function (props, axis, childComponents) {
    if (props.data) {
      return __WEBPACK_IMPORTED_MODULE_19__scale__["a" /* default */].getBaseScale(props, axis);
    }

    var children = childComponents ? childComponents.slice(0) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);

    var iteratee = function (child) {
      var sharedProps = __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({}, child.props, {
        horizontal: props.horizontal
      });

      return __WEBPACK_IMPORTED_MODULE_19__scale__["a" /* default */].getScaleType(sharedProps, axis);
    };

    var childScale = __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(__WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].reduceChildren(children, iteratee, props)); // default to linear scale if more than one uniq scale type is given by children


    return childScale.length > 1 ? __WEBPACK_IMPORTED_MODULE_19__scale__["a" /* default */].getScaleFromName("linear") : __WEBPACK_IMPORTED_MODULE_19__scale__["a" /* default */].getScaleFromName(childScale[0]);
  },
  setAnimationState: function (props, nextProps) {
    if (!props.animate) {
      return;
    }

    if (props.animate.parentState) {
      var nodesWillExit = props.animate.parentState.nodesWillExit;
      var oldProps = nodesWillExit ? props : null;
      this.setState(__WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default()({
        oldProps: oldProps,
        nextProps: nextProps
      }, props.animate.parentState));
    } else {
      var oldChildren = __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
      var nextChildren = __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(nextProps.children);

      var isContinuous = function (child) {
        var check = function (c) {
          return c.type && c.type.continuous;
        };

        return Array.isArray(child) ? __WEBPACK_IMPORTED_MODULE_4_lodash_some___default()(child, check) : check(child);
      };

      var continuous = !props.polar && __WEBPACK_IMPORTED_MODULE_4_lodash_some___default()(oldChildren, function (child) {
        return isContinuous(child) || child.props.children && isContinuous(child.props.children);
      });

      var _Transitions$getIniti = __WEBPACK_IMPORTED_MODULE_13__transitions__["a" /* default */].getInitialTransitionState(oldChildren, nextChildren),
          _nodesWillExit = _Transitions$getIniti.nodesWillExit,
          nodesWillEnter = _Transitions$getIniti.nodesWillEnter,
          childrenTransitions = _Transitions$getIniti.childrenTransitions,
          nodesShouldEnter = _Transitions$getIniti.nodesShouldEnter;

      this.setState({
        nodesWillExit: _nodesWillExit,
        nodesWillEnter: nodesWillEnter,
        nodesShouldEnter: nodesShouldEnter,
        childrenTransitions: __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].isArrayOfArrays(childrenTransitions) ? childrenTransitions[0] : childrenTransitions,
        oldProps: _nodesWillExit ? props : null,
        nextProps: nextProps,
        continuous: continuous
      });
    }
  },
  getAllEvents: function (props) {
    var components = ["groupComponent", "containerComponent", "labelComponent"];
    this.componentEvents = __WEBPACK_IMPORTED_MODULE_16__events__["a" /* default */].getComponentEvents(props, components);
    var events = props.events;

    if (Array.isArray(this.componentEvents)) {
      var _componentEvents;

      events = Array.isArray(props.events) ? (_componentEvents = this.componentEvents).concat.apply(_componentEvents, _toConsumableArray(props.events)) : this.componentEvents;
    }

    return events || [];
  },
  getAnimationProps: function (props, child, index) {
    var _this = this;

    if (!props.animate) {
      return child.props.animate;
    }

    var getFilteredState = function () {
      var childrenTransitions = _this.state && _this.state.childrenTransitions;
      childrenTransitions = __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].isArrayOfArrays(childrenTransitions) ? childrenTransitions[index] : childrenTransitions;
      return __WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default()({
        childrenTransitions: childrenTransitions
      }, _this.state);
    };

    var getTransitions = props.animate && props.animate.getTransitions;
    var state = getFilteredState();
    var parentState = props.animate && props.animate.parentState || state;

    if (!getTransitions) {
      var getTransitionProps = __WEBPACK_IMPORTED_MODULE_13__transitions__["a" /* default */].getTransitionPropsFactory(props, state, function (newState) {
        return _this.setState(newState);
      });

      getTransitions = function (childComponent) {
        return getTransitionProps(childComponent, index);
      };
    }

    return __WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default()({
      getTransitions: getTransitions,
      parentState: parentState
    }, props.animate, child.props.animate);
  },
  getDomainFromChildren: function (props, axis, childComponents) {
    // eslint-disable-line max-statements, complexity, max-len
    var children = childComponents ? childComponents.slice(0) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
    var parentData = props.data ? __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getData(props, axis) : undefined;
    var polar = props.polar,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        categories = props.categories,
        minDomain = props.minDomain,
        maxDomain = props.maxDomain,
        horizontal = props.horizontal;
    var baseParentProps = {
      horizontal: horizontal,
      polar: polar,
      startAngle: startAngle,
      endAngle: endAngle,
      minDomain: minDomain,
      maxDomain: maxDomain,
      categories: categories
    };
    var parentProps = parentData ? __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()(baseParentProps, {
      data: parentData
    }) : baseParentProps;

    var iteratee = function (child) {
      var sharedProps = __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({}, child.props, parentProps);

      if (!__WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].isDomainComponent(child)) {
        return null;
      } else if (child.type && __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default()(child.type.getDomain)) {
        return child.props && child.type.getDomain(sharedProps, axis);
      } else {
        return __WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].getDomain(sharedProps, axis);
      }
    };

    var childDomains = __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].reduceChildren(children, iteratee, props);
    var min = childDomains.length === 0 ? 0 : __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].getMinValue(childDomains);
    var max = childDomains.length === 0 ? 1 : __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].getMaxValue(childDomains);
    return [min, max];
  },
  getDataFromChildren: function (props, childComponents) {
    var polar = props.polar,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        categories = props.categories,
        minDomain = props.minDomain,
        maxDomain = props.maxDomain;
    var parentProps = {
      polar: polar,
      startAngle: startAngle,
      endAngle: endAngle,
      categories: categories,
      minDomain: minDomain,
      maxDomain: maxDomain
    };
    var stack = 0;

    var iteratee = function (child, childName, parent) {
      var childProps = __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({}, child.props, parentProps);

      var childData;

      if (!__WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].isDataComponent(child)) {
        return null;
      } else if (child.type && __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default()(child.type.getData)) {
        child = parent ? __WEBPACK_IMPORTED_MODULE_10_react___default.a.cloneElement(child, parent.props) : child;
        childData = child.type.getData(childProps);
      } else {
        childData = __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getData(childProps);
      }

      stack += 1;
      return childData.map(function (datum, index) {
        return __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({
          _stack: stack,
          _group: index
        }, datum);
      });
    };

    var children = childComponents ? childComponents.slice(0) : __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
    var stacked = children.filter(function (c) {
      return c.type && c.type.role === "stack";
    }).length;

    var combine = function (memo, val) {
      return memo.concat(__WEBPACK_IMPORTED_MODULE_2_lodash_uniqBy___default()(val, "_group"));
    };

    var datasets = __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].reduceChildren(children, iteratee, props, [], combine);
    var group = stacked ? "_group" : "_stack";
    return __WEBPACK_IMPORTED_MODULE_1_lodash_values___default()(__WEBPACK_IMPORTED_MODULE_3_lodash_groupBy___default()(datasets, group));
  },
  getColor: function (calculatedProps, child, index) {
    // check for styles first
    var style = calculatedProps.style;
    var colorScale = calculatedProps.colorScale,
        color = calculatedProps.color;

    if (style && style.data && style.data.fill) {
      return style.data.fill;
    }

    colorScale = child.props && child.props.colorScale ? child.props.colorScale : colorScale;
    color = child.props && child.props.color ? child.props.color : color;

    if (!colorScale && !color) {
      return undefined;
    }

    var colors = Array.isArray(colorScale) ? colorScale : __WEBPACK_IMPORTED_MODULE_12__style__["a" /* default */].getColorScale(colorScale);
    return color || colors[index % colors.length];
  },
  getWidth: function (props) {
    var datasets = props.datasets,
        scale = props.scale,
        horizontal = props.horizontal;
    var range = horizontal ? scale.y.range() : scale.x.range();
    var extent = Math.abs(range[1] - range[0]);
    var seriesLength = Array.isArray(datasets[0]) ? datasets[0].length : 1;
    var bars = datasets.length * seriesLength + 2;
    var barRatio = 0.5;
    return {
      width: Math.round(barRatio * extent / bars)
    };
  },
  getStyle: function (theme, style, role) {
    var defaultStyle = theme && theme[role] && theme[role].style ? theme[role].style : {};
    return __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].getStyles(style, defaultStyle);
  },
  getChildStyle: function (child, index, calculatedProps) {
    var style = calculatedProps.style,
        role = calculatedProps.role;
    var childStyle = child.props.style || {};

    if (Array.isArray(childStyle)) {
      return childStyle;
    }

    var childRole = child.type && child.type.role;
    var defaultFill = childRole === "stack" ? undefined : this.getColor(calculatedProps, child, index);
    var defaultColor = childRole === "line" ? {
      fill: "none",
      stroke: defaultFill
    } : {
      fill: defaultFill
    };
    var dataWidth = role === "stack" ? {} : this.getWidth(calculatedProps);

    var dataStyle = __WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default()({}, childStyle.data, __WEBPACK_IMPORTED_MODULE_9_lodash_assign___default()({}, dataWidth, style.data, defaultColor));

    var labelsStyle = __WEBPACK_IMPORTED_MODULE_8_lodash_defaults___default()({}, childStyle.labels, style.labels);

    return {
      parent: style.parent,
      data: dataStyle,
      labels: labelsStyle
    };
  },
  getStringsFromCategories: function (childComponents, axis) {
    var iteratee = function (child) {
      var childProps = child.props || {};

      if (!__WEBPACK_IMPORTED_MODULE_15__domain__["a" /* default */].isDomainComponent(child) || !childProps.categories) {
        return null;
      } else {
        var categories = childProps.categories && !Array.isArray(childProps.categories) ? childProps.categories[axis] : childProps.props.categories;
        var categoryStrings = categories && categories.filter(function (val) {
          return typeof val === "string";
        });
        return categoryStrings ? __WEBPACK_IMPORTED_MODULE_17__collection__["a" /* default */].removeUndefined(categoryStrings) : [];
      }
    };

    return __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].reduceChildren(childComponents.slice(0), iteratee);
  },
  getStringsFromData: function (childComponents) {
    var iteratee = function (child) {
      var childProps = child.props || {};
      var data;

      if (!__WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].isDataComponent(child)) {
        return null;
      } else if (child.type && __WEBPACK_IMPORTED_MODULE_6_lodash_isFunction___default()(child.type.getData)) {
        data = child.type.getData(childProps);
      } else {
        data = __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getData(childProps);
      }

      return data.map(function (d) {
        return {
          x: d.xName,
          y: d.yName
        };
      });
    };

    var initialMemo = {
      x: [],
      y: []
    };

    var combine = function (memo, datum) {
      var x = Array.isArray(datum) ? datum.map(function (d) {
        return d.x;
      }).filter(Boolean) : datum.x;
      var y = Array.isArray(datum) ? datum.map(function (d) {
        return d.y;
      }).filter(Boolean) : datum.y;
      return {
        x: x !== undefined ? memo.x.concat(x) : memo.x,
        y: y !== undefined ? memo.y.concat(y) : memo.y
      };
    };

    return __WEBPACK_IMPORTED_MODULE_18__helpers__["a" /* default */].reduceChildren(childComponents.slice(0), iteratee, {}, initialMemo, combine);
  },
  getCategoryAndAxisStringsFromChildren: function (props, axis, childComponents) {
    var categories = __WEBPACK_IMPORTED_MODULE_0_lodash_isPlainObject___default()(props.categories) ? props.categories[axis] : props.categories;
    var axisComponent = __WEBPACK_IMPORTED_MODULE_11__axis__["a" /* default */].getAxisComponent(childComponents, axis);
    var axisStrings = axisComponent ? __WEBPACK_IMPORTED_MODULE_14__data__["a" /* default */].getStringsFromAxes(axisComponent.props, axis) : [];
    var categoryStrings = categories || this.getStringsFromCategories(childComponents, axis);
    return __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(__WEBPACK_IMPORTED_MODULE_7_lodash_flatten___default()(_toConsumableArray(categoryStrings).concat(_toConsumableArray(axisStrings))));
  },
  getStringsFromChildren: function (props, childComponents) {
    childComponents = childComponents || __WEBPACK_IMPORTED_MODULE_10_react___default.a.Children.toArray(props.children);
    var xStrings = this.getCategoryAndAxisStringsFromChildren(props, "x", childComponents);
    var yStrings = this.getCategoryAndAxisStringsFromChildren(props, "y", childComponents);
    var dataStrings = this.getStringsFromData(childComponents);
    return {
      x: __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(__WEBPACK_IMPORTED_MODULE_7_lodash_flatten___default()(_toConsumableArray(xStrings).concat(_toConsumableArray(dataStrings.x)))),
      y: __WEBPACK_IMPORTED_MODULE_5_lodash_uniq___default()(__WEBPACK_IMPORTED_MODULE_7_lodash_flatten___default()(_toConsumableArray(yStrings).concat(_toConsumableArray(dataStrings.y))))
    };
  },
  getCategories: function (props) {
    var xPropCategories = props.categories && !Array.isArray(props.categories) ? props.categories.x : props.categories;
    var yPropCategories = props.categories && !Array.isArray(props.categories) ? props.categories.y : props.categories;
    var fallbackRequired = !xPropCategories || !yPropCategories;
    var fallbackProps = fallbackRequired ? this.getStringsFromChildren(props) : {};
    var xCategories = xPropCategories || fallbackProps.x;
    var yCategories = yPropCategories || fallbackProps.y;
    return {
      x: xCategories.length > 0 ? xCategories : undefined,
      y: yCategories.length > 0 ? yCategories : undefined
    };
  }
});

/***/ }),
/* 336 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseValues.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ 24);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 337 */
/*!**************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/groupBy.js ***!
  \**************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 50),
    createAggregator = __webpack_require__(/*! ./_createAggregator */ 338);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),
/* 338 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createAggregator.js ***!
  \************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(/*! ./_arrayAggregator */ 339),
    baseAggregator = __webpack_require__(/*! ./_baseAggregator */ 340),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 18),
    isArray = __webpack_require__(/*! ./isArray */ 7);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),
/* 339 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_arrayAggregator.js ***!
  \***********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 340 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseAggregator.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 341 */
/*!***********************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/some.js ***!
  \***********************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 342 */
/*!*************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/invert.js ***!
  \*************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ 343),
    createInverter = __webpack_require__(/*! ./_createInverter */ 344),
    identity = __webpack_require__(/*! ./identity */ 16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),
/* 343 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/constant.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 344 */
/*!**********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createInverter.js ***!
  \**********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseInverter = __webpack_require__(/*! ./_baseInverter */ 345);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),
/* 345 */
/*!********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseInverter.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 346);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),
/* 346 */
/*!******************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseForOwn.js ***!
  \******************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 347),
    keys = __webpack_require__(/*! ./keys */ 17);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 347 */
/*!***************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_baseFor.js ***!
  \***************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 348);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 348 */
/*!*********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/_createBaseFor.js ***!
  \*********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 349 */
/*!**************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-shared-events/es/index.js ***!
  \**************************************************************************************/
/*! exports provided: VictorySharedEvents */
/*! exports used: VictorySharedEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__victory_shared_events__ = __webpack_require__(/*! ./victory-shared-events */ 350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__victory_shared_events__["a"]; });


/***/ }),
/* 350 */
/*!******************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-shared-events/es/victory-shared-events.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VictorySharedEvents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_fromPairs__ = __webpack_require__(/*! lodash/fromPairs */ 351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_fromPairs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_fromPairs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__ = __webpack_require__(/*! lodash/isFunction */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_victory_core__ = __webpack_require__(/*! victory-core */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_fast_compare__ = __webpack_require__(/*! react-fast-compare */ 28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_fast_compare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_fast_compare__);






function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var VictorySharedEvents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictorySharedEvents, _React$Component);

  function VictorySharedEvents(props) {
    var _this;

    _classCallCheck(this, VictorySharedEvents);

    _this = _possibleConstructorReturn(this, (VictorySharedEvents.__proto__ || Object.getPrototypeOf(VictorySharedEvents)).call(this, props));
    _this.state = _this.state || {};
    _this.getScopedEvents = __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getScopedEvents.bind(_assertThisInitialized(_this));
    _this.getEventState = __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getEventState.bind(_assertThisInitialized(_this));
    _this.getTimer = _this.getTimer.bind(_assertThisInitialized(_this));
    _this.baseProps = _this.getBaseProps(props);
    return _this;
  }

  _createClass(VictorySharedEvents, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getTimer: this.getTimer
      };
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!__WEBPACK_IMPORTED_MODULE_8_react_fast_compare___default()(this.props, nextProps)) {
        this.baseProps = this.getBaseProps(nextProps);
        var externalMutations = this.getExternalMutations(nextProps, this.baseProps);
        this.applyExternalMutations(nextProps, externalMutations);
      }

      return true;
    }
  }, {
    key: "getTimer",
    value: function getTimer() {
      if (this.context.getTimer) {
        return this.context.getTimer();
      }

      if (!this.timer) {
        this.timer = new __WEBPACK_IMPORTED_MODULE_7_victory_core__["k" /* Timer */]();
      }

      return this.timer;
    }
  }, {
    key: "getAllEvents",
    value: function getAllEvents(props) {
      var components = ["container", "groupComponent"];
      var componentEvents = __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getComponentEvents(props, components);

      if (Array.isArray(componentEvents)) {
        return Array.isArray(props.events) ? componentEvents.concat.apply(componentEvents, _toConsumableArray(props.events)) : componentEvents;
      }

      return props.events;
    }
  }, {
    key: "applyExternalMutations",
    value: function applyExternalMutations(props, externalMutations) {
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(externalMutations)) {
        var callbacks = props.externalEventMutations.reduce(function (memo, mutation) {
          memo = __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(mutation.callback) ? memo.concat(mutation.callback) : memo;
          return memo;
        }, []);
        var compiledCallbacks = callbacks.length ? function () {
          callbacks.forEach(function (c) {
            return c();
          });
        } : undefined;
        this.setState(externalMutations, compiledCallbacks);
      }
    }
  }, {
    key: "getExternalMutations",
    value: function getExternalMutations(props, baseProps) {
      return !__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(props.externalEventMutations) ? __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getExternalMutationsWithChildren(props.externalEventMutations, baseProps, this.state, Object.keys(baseProps)) : undefined;
    }
  }, {
    key: "getBaseProps",
    value: function getBaseProps(props) {
      var container = props.container;
      var children = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(this.props.children);
      var childBaseProps = this.getBasePropsFromChildren(children);
      var parentBaseProps = container ? container.props : {};
      return __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({}, childBaseProps, {
        parent: parentBaseProps
      });
    }
  }, {
    key: "getBasePropsFromChildren",
    value: function getBasePropsFromChildren(childComponents) {
      var iteratee = function (child, childName) {
        if (child.type && __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(child.type.getBaseProps)) {
          var _baseProps = child.props && child.type.getBaseProps(child.props);

          return _baseProps ? [[childName, _baseProps]] : null;
        } else {
          return null;
        }
      };

      var baseProps = __WEBPACK_IMPORTED_MODULE_7_victory_core__["e" /* Helpers */].reduceChildren(childComponents, iteratee);
      return __WEBPACK_IMPORTED_MODULE_0_lodash_fromPairs___default()(baseProps);
    }
  }, {
    key: "getNewChildren",
    value: function getNewChildren(props, baseProps) {
      var _this2 = this;

      var events = props.events,
          eventKey = props.eventKey;

      var alterChildren = function (children, childNames) {
        return children.reduce(function (memo, child, index) {
          if (child.props.children) {
            var newChildren = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(child.props.children);
            var names = childNames.slice(index, index + newChildren.length);
            var results = __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, child.props, alterChildren(newChildren, names));
            return memo.concat(results);
          } else if (child.type && __WEBPACK_IMPORTED_MODULE_3_lodash_isFunction___default()(child.type.getBaseProps)) {
            var name = child.props.name || childNames[index];
            var childEvents = Array.isArray(events) && events.filter(function (event) {
              if (event.target === "parent") {
                return false;
              }

              return Array.isArray(event.childName) ? event.childName.indexOf(name) > -1 : event.childName === name || event.childName === "all";
            });
            var sharedEvents = {
              events: childEvents,
              // partially apply child name and baseProps,
              getEvents: function (evts, target) {
                return _this2.getScopedEvents(evts, target, name, baseProps);
              },
              // partially apply child name
              getEventState: function (key, target) {
                return _this2.getEventState(key, target, name);
              }
            };
            return memo.concat(__WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(child, __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({
              key: "events-".concat(name),
              sharedEvents: sharedEvents,
              eventKey: eventKey,
              name: name
            }, child.props)));
          } else {
            return memo.concat(child);
          }
        }, []);
      };

      var childNames = Object.keys(baseProps);
      var childComponents = __WEBPACK_IMPORTED_MODULE_5_react___default.a.Children.toArray(props.children);
      return alterChildren(childComponents, childNames);
    }
  }, {
    key: "getContainer",
    value: function getContainer(props, baseProps, events) {
      var _this3 = this;

      var children = this.getNewChildren(props, baseProps);
      var parents = Array.isArray(events) && events.filter(function (event) {
        return event.target === "parent";
      });
      var sharedEvents = parents.length > 0 ? {
        events: parents,
        // partially apply childName (null) and baseProps,
        getEvents: function (evts, target) {
          return _this3.getScopedEvents(evts, target, null, baseProps);
        },
        getEventState: this.getEventState
      } : null;
      var container = props.container || props.groupComponent;
      var role = container.type && container.type.role;
      var containerProps = container.props || {};
      var boundGetEvents = __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getEvents.bind(this);
      var parentEvents = sharedEvents && boundGetEvents({
        sharedEvents: sharedEvents
      }, "parent");

      var parentProps = __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default()({}, this.getEventState("parent", "parent"), containerProps, baseProps.parent, {
        children: children
      });

      var containerEvents = __WEBPACK_IMPORTED_MODULE_2_lodash_defaults___default()({}, __WEBPACK_IMPORTED_MODULE_7_victory_core__["d" /* Events */].getPartialEvents(parentEvents, "parent", parentProps), containerProps.events);

      return role === "container" ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(container, __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()({}, parentProps, {
        events: containerEvents
      })) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(container, containerEvents, children);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.getAllEvents(this.props);

      if (events) {
        return this.getContainer(this.props, this.baseProps, events);
      }

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.cloneElement(this.props.container, {
        children: this.props.children
      });
    }
  }]);

  return VictorySharedEvents;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

Object.defineProperty(VictorySharedEvents, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictorySharedEvents"
});
Object.defineProperty(VictorySharedEvents, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "shared-event-wrapper"
});
Object.defineProperty(VictorySharedEvents, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node]),
    container: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node,
    eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
    events: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
      childName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array]),
      eventHandlers: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
      eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
      target: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string
    })),
    externalEventMutations: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
      callback: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.function,
      childName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array]),
      eventKey: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_7_victory_core__["h" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string]),
      mutation: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.function,
      target: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array])
    })),
    groupComponent: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.node
  }
});
Object.defineProperty(VictorySharedEvents, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    groupComponent: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("g", null)
  }
});
Object.defineProperty(VictorySharedEvents, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTimer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }
});
Object.defineProperty(VictorySharedEvents, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getTimer: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func
  }
});


/***/ }),
/* 351 */
/*!****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/node_modules/lodash/fromPairs.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ }),
/* 352 */
/*!*****************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-axis/es/index.js ***!
  \*****************************************************************************/
/*! exports provided: VictoryAxis */
/*! exports used: VictoryAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__victory_axis__ = __webpack_require__(/*! ./victory-axis */ 353);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__victory_axis__["a"]; });


/***/ }),
/* 353 */
/*!************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-axis/es/victory-axis.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_victory_core__ = __webpack_require__(/*! victory-core */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_methods__ = __webpack_require__(/*! ./helper-methods */ 354);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};
var options = {
  components: [{
    name: "axis",
    index: 0
  }, {
    name: "axisLabel",
    index: 0
  }, {
    name: "grid"
  }, {
    name: "parent",
    index: "parent"
  }, {
    name: "ticks"
  }, {
    name: "tickLabels"
  }]
};

var VictoryAxis =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryAxis, _React$Component);

  function VictoryAxis() {
    _classCallCheck(this, VictoryAxis);

    return _possibleConstructorReturn(this, (VictoryAxis.__proto__ || Object.getPrototypeOf(VictoryAxis)).apply(this, arguments));
  }

  _createClass(VictoryAxis, [{
    key: "renderLine",
    value: function renderLine(props) {
      var axisComponent = props.axisComponent;
      var axisProps = this.getComponentProps(axisComponent, "axis", 0);
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(axisComponent, axisProps);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(props) {
      var axisLabelComponent = props.axisLabelComponent,
          label = props.label;

      if (!label) {
        return null;
      }

      var axisLabelProps = this.getComponentProps(axisLabelComponent, "axisLabel", 0);
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(axisLabelComponent, axisLabelProps);
    }
  }, {
    key: "renderGridAndTicks",
    value: function renderGridAndTicks(props) {
      var _this = this;

      var tickComponent = props.tickComponent,
          tickLabelComponent = props.tickLabelComponent,
          gridComponent = props.gridComponent,
          name = props.name;

      var shouldRender = function (componentProps) {
        var _componentProps$style = componentProps.style,
            style = _componentProps$style === void 0 ? {} : _componentProps$style,
            _componentProps$event = componentProps.events,
            events = _componentProps$event === void 0 ? {} : _componentProps$event;
        var visible = style.stroke !== "transparent" && style.stroke !== "none" && style.strokeWidth !== 0;
        return visible || !__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(events);
      };

      return this.dataKeys.map(function (key, index) {
        var tickProps = _this.getComponentProps(tickComponent, "ticks", index);

        var BaseTickComponent = __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(tickComponent, tickProps);
        var TickComponent = shouldRender(BaseTickComponent.props) ? BaseTickComponent : undefined;

        var gridProps = _this.getComponentProps(gridComponent, "grid", index);

        var BaseGridComponent = __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(gridComponent, gridProps);
        var GridComponent = shouldRender(BaseGridComponent.props) ? BaseGridComponent : undefined;

        var tickLabelProps = _this.getComponentProps(tickLabelComponent, "tickLabels", index);

        var TickLabel = __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(tickLabelComponent, tickLabelProps);
        var children = [GridComponent, TickComponent, TickLabel].filter(Boolean);
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(props.groupComponent, {
          key: "".concat(name, "-tick-group-").concat(key)
        }, children);
      });
    }
  }, {
    key: "fixLabelOverlap",
    value: function fixLabelOverlap(gridAndTicks, props) {
      var isVertical = __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].isVertical(props);
      var size = isVertical ? props.height : props.width;

      var isVictoryLabel = function (child) {
        return child.type && child.type.role === "label";
      };

      var labels = gridAndTicks.map(function (gridAndTick) {
        return gridAndTick.props.children;
      }).reduce(function (accumulator, childArr) {
        return accumulator.concat(childArr);
      }, []).filter(isVictoryLabel).map(function (child) {
        return child.props;
      });

      var paddingToObject = function (padding) {
        return typeof padding === "object" ? __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }, padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      };

      var labelsSumSize = labels.reduce(function (sum, label) {
        var padding = paddingToObject(label.style.padding);
        var labelSize = __WEBPACK_IMPORTED_MODULE_4_victory_core__["j" /* TextSize */].approximateTextSize(label.text, {
          angle: label.angle,
          fontSize: label.style.fontSize,
          letterSpacing: label.style.letterSpacing,
          fontFamily: label.style.fontFamily
        });
        return sum + (isVertical ? labelSize.height + padding.top + padding.bottom : labelSize.width + padding.right + padding.left);
      }, 0);
      var availiableLabelCount = Math.floor(size * gridAndTicks.length / labelsSumSize);
      var divider = Math.ceil(gridAndTicks.length / availiableLabelCount) || 1;

      var getLabelCoord = function (gridAndTick) {
        return gridAndTick.props.children.filter(isVictoryLabel).reduce(function (prev, child) {
          return (isVertical ? child.props.y : child.props.x) || 0;
        }, 0);
      };

      var sorted = gridAndTicks.sort(function (a, b) {
        return isVertical ? getLabelCoord(b) - getLabelCoord(a) //ordinary axis has top-bottom orientation
        : getLabelCoord(a) - getLabelCoord(b);
      } //ordinary axis has left-right orientation
      );
      return sorted.filter(function (gridAndTick, index) {
        return index % divider === 0;
      });
    } // Overridden in native versions

  }, {
    key: "shouldAnimate",
    value: function shouldAnimate() {
      return !!this.props.animate;
    }
  }, {
    key: "render",
    value: function render() {
      var animationWhitelist = VictoryAxis.animationWhitelist;
      var props = __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].modifyProps(this.props, fallbackProps);

      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var gridAndTicks = this.renderGridAndTicks(props);
      var modifiedGridAndTicks = props.fixLabelOverlap ? this.fixLabelOverlap(gridAndTicks, props) : gridAndTicks;
      var children = [this.renderLine(props), this.renderLabel(props)].concat(_toConsumableArray(modifiedGridAndTicks));
      return props.standalone ? this.renderContainer(props.containerComponent, children) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(props.groupComponent, {}, children);
    }
  }]);

  return VictoryAxis;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Object.defineProperty(VictoryAxis, "animationWhitelist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["style", "domain", "range", "tickCount", "tickValues", "offsetX", "offsetY", "padding", "width", "height"]
});
Object.defineProperty(VictoryAxis, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAxis"
});
Object.defineProperty(VictoryAxis, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "axis"
});
Object.defineProperty(VictoryAxis, "defaultTransitions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onExit: {
      duration: 500
    },
    onEnter: {
      duration: 500
    }
  }
});
Object.defineProperty(VictoryAxis, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4_victory_core__["c" /* CommonProps */].baseProps, {
    axisComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    axisLabelComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    axisValue: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object]),
    categories: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      x: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
      y: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)
    })]),
    crossAxis: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    dependentAxis: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    events: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      target: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["axis", "axisLabel", "grid", "ticks", "tickLabels"]),
      eventKey: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string]),
      eventHandlers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
    })),
    fixLabelOverlap: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    gridComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    groupComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    invertAxis: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
    offsetX: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    offsetY: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    orientation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(["top", "bottom", "left", "right"]),
    origin: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      x: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
      y: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
    }),
    stringMap: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
    style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      parent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
      axis: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
      axisLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
      grid: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
      ticks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
      tickLabels: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
    }),
    tickComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    tickCount: __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].greaterThanZero]),
    tickFormat: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].homogeneousArray]),
    tickLabelComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element,
    tickValues: __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].homogeneousArray
  })
});
Object.defineProperty(VictoryAxis, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    axisComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "axis"
    }),
    axisLabelComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["m" /* VictoryLabel */], null),
    tickLabelComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["m" /* VictoryLabel */], null),
    tickComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "tick"
    }),
    gridComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "grid"
    }),
    standalone: true,
    theme: __WEBPACK_IMPORTED_MODULE_4_victory_core__["n" /* VictoryTheme */].grayscale,
    containerComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["l" /* VictoryContainer */], null),
    groupComponent: __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("g", {
      role: "presentation"
    }),
    fixLabelOverlap: false
  }
});
Object.defineProperty(VictoryAxis, "getDomain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].getDomain
});
Object.defineProperty(VictoryAxis, "getAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].getAxis
});
Object.defineProperty(VictoryAxis, "getStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__helper_methods__["b" /* getStyles */])(props, fallbackProps.style);
  }
});
Object.defineProperty(VictoryAxis, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__helper_methods__["a" /* getBaseProps */])(props, fallbackProps);
  }
});
Object.defineProperty(VictoryAxis, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["axisComponent", "axisLabelComponent", "groupComponent", "containerComponent", "tickComponent", "tickLabelComponent", "gridComponent"]
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_victory_core__["p" /* addEvents */])(VictoryAxis, options));

/***/ }),
/* 354 */
/*!**************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-axis/es/helper-methods.js ***!
  \**************************************************************************************/
/*! exports provided: getBaseProps, getStyles */
/*! exports used: getBaseProps, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStyles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_victory_core__ = __webpack_require__(/*! victory-core */ 14);



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var orientationSign = {
  top: -1,
  left: -1,
  right: 1,
  bottom: 1
};

var getCurrentAxis = function (props, axis) {
  var orientation = props.orientation,
      horizontal = props.horizontal;

  if (orientation) {
    var dimensions = {
      top: "x",
      bottom: "x",
      left: "y",
      right: "y"
    };
    return dimensions[orientation];
  }

  var otherAxis = axis === "x" ? "y" : "x";
  return horizontal ? otherAxis : axis;
};

var getScale = function (props) {
  var axis = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getAxis(props);
  var currentAxis = getCurrentAxis(props, axis);
  var scale = __WEBPACK_IMPORTED_MODULE_2_victory_core__["i" /* Scale */].getBaseScale(props, axis);
  var propsDomain = props.domain && props.domain[axis];
  var domain = propsDomain || __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getDomain(props) || scale.domain();
  scale.range(__WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].getRange(props, currentAxis));
  scale.domain(domain);
  return scale;
};

var getStyleObject = function (props) {
  var theme = props.theme,
      dependentAxis = props.dependentAxis;
  var generalAxisStyle = theme && theme.axis && theme.axis.style;
  var axisType = dependentAxis ? "dependentAxis" : "independentAxis";
  var specificAxisStyle = theme && theme[axisType] && theme[axisType].style;

  var mergeStyles = function () {
    var styleNamespaces = ["axis", "axisLabel", "grid", "parent", "tickLabels", "ticks"];
    return styleNamespaces.reduce(function (memo, curr) {
      memo[curr] = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, specificAxisStyle[curr], generalAxisStyle[curr]);
      return memo;
    }, {});
  };

  return generalAxisStyle && specificAxisStyle ? mergeStyles() : specificAxisStyle || generalAxisStyle;
};

var getStyles = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "100%",
    width: "100%"
  };
  return {
    parent: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()(style.parent, styleObject.parent, parentStyleProps),
    axis: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.axis, styleObject.axis),
    axisLabel: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.axisLabel, styleObject.axisLabel),
    grid: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.grid, styleObject.grid),
    ticks: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.ticks, styleObject.ticks),
    tickLabels: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.tickLabels, styleObject.tickLabels)
  };
};

var getTickProps = function (layout, style, datum) {
  var position = layout.position,
      transform = layout.transform;
  return {
    x1: transform.x,
    y1: transform.y,
    x2: transform.x + position.x2,
    y2: transform.y + position.y2,
    style: style,
    datum: datum
  };
}; // eslint-disable-next-line max-params


var getTickLabelProps = function (layout, style, anchors, datum, text) {
  var position = layout.position,
      transform = layout.transform;
  return {
    style: style,
    x: transform.x + position.x,
    y: transform.y + position.y,
    verticalAnchor: anchors.verticalAnchor,
    textAnchor: anchors.textAnchor,
    angle: style.angle,
    text: text,
    datum: datum
  };
};

var getGridProps = function (layout, style, datum) {
  var edge = layout.edge,
      transform = layout.transform;
  return {
    type: "grid",
    x1: transform.x,
    y1: transform.y,
    x2: edge.x + transform.x,
    y2: edge.y + transform.y,
    style: style,
    datum: datum
  };
};

var getAxisProps = function (modifiedProps, calculatedValues, globalTransform) {
  var style = calculatedValues.style,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical;
  var width = modifiedProps.width,
      height = modifiedProps.height;
  return {
    type: "axis",
    style: style.axis,
    x1: isVertical ? globalTransform.x : padding.left + globalTransform.x,
    x2: isVertical ? globalTransform.x : width - padding.right + globalTransform.x,
    y1: isVertical ? padding.top + globalTransform.y : globalTransform.y,
    y2: isVertical ? height - padding.bottom + globalTransform.y : globalTransform.y
  };
};

var getEvaluatedStyles = function (style, props) {
  return {
    tickStyle: __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].evaluateStyle(style.ticks, props),
    labelStyle: __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].evaluateStyle(style.tickLabels, props),
    gridStyle: __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].evaluateStyle(style.grid, props)
  };
};

var getAxisLabelProps = function (props, calculatedValues, globalTransform) {
  var style = calculatedValues.style,
      orientation = calculatedValues.orientation,
      padding = calculatedValues.padding,
      labelPadding = calculatedValues.labelPadding,
      isVertical = calculatedValues.isVertical;
  var sign = orientationSign[orientation];
  var hPadding = padding.left + padding.right;
  var vPadding = padding.top + padding.bottom;
  var verticalAnchor = sign < 0 ? "end" : "start";
  var labelStyle = style.axisLabel;
  var angle = isVertical ? -90 : 0; // eslint-disable-line no-magic-numbers

  var x = isVertical ? globalTransform.x + sign * labelPadding : (props.width - hPadding) / 2 + padding.left + globalTransform.x;
  var y = isVertical ? (props.height - vPadding) / 2 + padding.top + globalTransform.y : sign * labelPadding + globalTransform.y;
  return {
    x: x,
    y: y,
    verticalAnchor: labelStyle.verticalAnchor || verticalAnchor,
    textAnchor: labelStyle.textAnchor || "middle",
    angle: labelStyle.angle === undefined ? angle : labelStyle.angle,
    style: labelStyle,
    text: props.label
  };
};

var getAnchors = function (orientation, isVertical) {
  var anchorOrientation = {
    top: "end",
    left: "end",
    right: "start",
    bottom: "start"
  };
  var anchor = anchorOrientation[orientation];
  return {
    textAnchor: isVertical ? anchor : "middle",
    verticalAnchor: isVertical ? "middle" : anchor
  };
};

var getLabelPadding = function (props, style) {
  var labelStyle = style.axisLabel || {};

  if (labelStyle.padding !== undefined && labelStyle.padding !== null) {
    return labelStyle.padding;
  }

  var isVertical = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].isVertical(props); // TODO: magic numbers

  /*eslint-disable no-magic-numbers*/

  var fontSize = labelStyle.fontSize || 14;
  return props.label ? fontSize * (isVertical ? 2.3 : 1.6) : 0;
  /*eslint-enable no-magic-numbers*/
};

var getOffset = function (props, calculatedValues) {
  var style = calculatedValues.style,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical,
      orientation = calculatedValues.orientation,
      labelPadding = calculatedValues.labelPadding,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      scale = calculatedValues.scale,
      axis = calculatedValues.axis;
  var polar = props.polar,
      horizontal = props.horizontal;
  var sharedProps = {
    scale: _defineProperty({}, axis, scale),
    polar: polar,
    horizontal: horizontal,
    ticks: ticks,
    stringTicks: stringTicks
  };
  var xPadding = orientation === "right" ? padding.right : padding.left;
  var yPadding = orientation === "top" ? padding.top : padding.bottom;
  var fontSize = style.axisLabel.fontSize || 14; // eslint-disable-line no-magic-numbers

  var offsetX = props.offsetX !== null && props.offsetX !== undefined ? props.offsetX : xPadding;
  var offsetY = props.offsetY !== null && props.offsetY !== undefined ? props.offsetY : yPadding;
  var tickSizes = ticks.map(function (data, index) {
    var tick = stringTicks ? props.tickValues[data - 1] : data;
    var tickStyle = __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].evaluateStyle(style.ticks, __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, {
      tick: tick,
      index: index
    }));
    return tickStyle.size || 0;
  });
  var totalPadding = fontSize + 2 * Math.max.apply(Math, _toConsumableArray(tickSizes)) + labelPadding;
  var minimumPadding = 1.2 * fontSize; // eslint-disable-line no-magic-numbers

  var x = isVertical ? totalPadding : minimumPadding;
  var y = isVertical ? minimumPadding : totalPadding;
  return {
    x: offsetX !== null && offsetX !== undefined ? offsetX : x,
    y: offsetY !== null && offsetY !== undefined ? offsetY : y
  };
};

var getTransform = function (props, calculatedValues, offset) {
  //
  var orientation = calculatedValues.orientation,
      axis = calculatedValues.axis;
  var axisValue = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getAxisValue(props, axis);
  return {
    top: {
      x: 0,
      y: axisValue !== undefined ? axisValue : offset.y
    },
    bottom: {
      x: 0,
      y: axisValue !== undefined ? axisValue : props.height - offset.y
    },
    left: {
      x: axisValue !== undefined ? axisValue : offset.x,
      y: 0
    },
    right: {
      x: axisValue !== undefined ? axisValue : props.width - offset.x,
      y: 0
    }
  }[orientation];
};

var getTickPosition = function (style, orientation, isVertical) {
  var tickStyle = style.tickStyle,
      labelStyle = style.labelStyle;
  var size = tickStyle.size || 0;
  var tickPadding = tickStyle.padding || 0;
  var labelPadding = labelStyle.padding || 0;
  var tickSpacing = size + tickPadding + labelPadding;
  var sign = orientationSign[orientation];
  return {
    x: isVertical ? sign * tickSpacing : 0,
    x2: isVertical ? sign * size : 0,
    y: isVertical ? 0 : sign * tickSpacing,
    y2: isVertical ? 0 : sign * size
  };
};

var getTickTransform = function (tick, globalTransform, isVertical) {
  return {
    x: isVertical ? globalTransform.x : tick + globalTransform.x,
    y: isVertical ? tick + globalTransform.y : globalTransform.y
  };
};

var getGridEdge = function (props, calculatedValues) {
  var orientation = calculatedValues.orientation,
      padding = calculatedValues.padding,
      isVertical = calculatedValues.isVertical;
  var sign = -orientationSign[orientation];
  var x = isVertical ? sign * (props.width - (padding.left + padding.right)) : 0;
  var y = isVertical ? 0 : sign * (props.height - (padding.top + padding.bottom));
  return {
    x: x,
    y: y
  };
};

var getGridOffset = function (props, calculatedValues, offset) {
  var padding = calculatedValues.padding,
      orientation = calculatedValues.orientation;
  var xPadding = orientation === "right" ? padding.right : padding.left;
  var yPadding = orientation === "top" ? padding.top : padding.bottom;
  return {
    x: props.crossAxis ? offset.x - xPadding : 0,
    y: props.crossAxis ? offset.y - yPadding : 0
  };
};

var getLayoutProps = function (modifiedProps, calculatedValues) {
  var offset = getOffset(modifiedProps, calculatedValues);
  return {
    globalTransform: getTransform(modifiedProps, calculatedValues, offset),
    gridOffset: getGridOffset(modifiedProps, calculatedValues, offset),
    gridEdge: getGridEdge(modifiedProps, calculatedValues)
  };
};

var getOrientation = function (props) {
  if (props.orientation) {
    return props.orientation;
  }

  var defaultOrientations = {
    dependent: props.horizontal ? "bottom" : "left",
    independent: props.horizontal ? "left" : "bottom"
  };
  return props.dependentAxis ? defaultOrientations.dependent : defaultOrientations.independent;
};

var getCalculatedValues = function (props) {
  var defaultStyles = getStyleObject(props);
  var style = getStyles(props, defaultStyles);
  var padding = __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].getPadding(props);
  var isVertical = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].isVertical(props);
  var labelPadding = getLabelPadding(props, style);
  var stringTicks = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].stringTicks(props) ? props.tickValues : undefined;
  var axis = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getAxis(props);
  var orientation = getOrientation(props);
  var scale = getScale(props);
  var domain = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getDomain(props);
  var ticks = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getTicks(props, scale, props.crossAxis);
  var tickFormat = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].getTickFormat(props, scale);
  var anchors = getAnchors(orientation, isVertical);
  return {
    axis: axis,
    style: style,
    padding: padding,
    orientation: orientation,
    isVertical: isVertical,
    labelPadding: labelPadding,
    stringTicks: stringTicks,
    anchors: anchors,
    scale: scale,
    ticks: ticks,
    tickFormat: tickFormat,
    domain: domain
  };
};

var getBaseProps = function (props, fallbackProps) {
  props = __WEBPACK_IMPORTED_MODULE_2_victory_core__["b" /* Axis */].modifyProps(props, fallbackProps);
  var calculatedValues = getCalculatedValues(props);
  var axis = calculatedValues.axis,
      style = calculatedValues.style,
      orientation = calculatedValues.orientation,
      isVertical = calculatedValues.isVertical,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat,
      anchors = calculatedValues.anchors,
      domain = calculatedValues.domain,
      stringTicks = calculatedValues.stringTicks,
      name = calculatedValues.name;
  var otherAxis = axis === "x" ? "y" : "x";
  var _props = props,
      width = _props.width,
      height = _props.height,
      standalone = _props.standalone,
      theme = _props.theme,
      polar = _props.polar,
      padding = _props.padding,
      horizontal = _props.horizontal;

  var _getLayoutProps = getLayoutProps(props, calculatedValues),
      globalTransform = _getLayoutProps.globalTransform,
      gridOffset = _getLayoutProps.gridOffset,
      gridEdge = _getLayoutProps.gridEdge;

  var sharedProps = {
    scale: _defineProperty({}, axis, scale),
    polar: polar,
    horizontal: horizontal,
    ticks: ticks,
    stringTicks: stringTicks
  };
  var axisProps = getAxisProps(props, calculatedValues, globalTransform);
  var axisLabelProps = getAxisLabelProps(props, calculatedValues, globalTransform);
  var initialChildProps = {
    parent: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
      style: style.parent,
      ticks: ticks,
      standalone: standalone,
      theme: theme,
      width: width,
      height: height,
      padding: padding,
      domain: domain,
      name: name
    }, sharedProps)
  };
  var gridProps = {
    dimension: otherAxis,
    range: _defineProperty({}, otherAxis, __WEBPACK_IMPORTED_MODULE_2_victory_core__["e" /* Helpers */].getRange(props, otherAxis)),
    scale: props.scale && props.scale[otherAxis] ? _defineProperty({}, otherAxis, props.scale[otherAxis]) : undefined
  };
  return ticks.reduce(function (childProps, tickValue, index) {
    var tick = stringTicks ? stringTicks[index] : tickValue;
    var text = tickFormat(tickValue, index, ticks);
    var styles = getEvaluatedStyles(style, __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, {
      tick: tick,
      tickValue: tickValue,
      index: index,
      text: text
    }));
    var tickLayout = {
      position: getTickPosition(styles, orientation, isVertical),
      transform: getTickTransform(scale(tickValue), globalTransform, isVertical)
    };
    var gridLayout = {
      edge: gridEdge,
      transform: {
        x: isVertical ? -gridOffset.x + globalTransform.x : scale(tickValue) + globalTransform.x,
        y: isVertical ? scale(tickValue) + globalTransform.y : gridOffset.y + globalTransform.y
      }
    };
    childProps[index] = {
      axis: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
        dimension: axis
      }, sharedProps, axisProps),
      axisLabel: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, axisLabelProps),
      ticks: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, getTickProps(tickLayout, styles.tickStyle, tickValue)),
      tickLabels: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, getTickLabelProps(tickLayout, styles.labelStyle, anchors, tickValue, text)),
      grid: __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({}, sharedProps, gridProps, getGridProps(gridLayout, styles.gridStyle, tickValue))
    };
    return childProps;
  }, initialChildProps);
};



/***/ }),
/* 355 */
/*!***********************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-polar-axis/es/index.js ***!
  \***********************************************************************************/
/*! exports provided: VictoryPolarAxis */
/*! exports used: VictoryPolarAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__victory_polar_axis__ = __webpack_require__(/*! ./victory-polar-axis */ 356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__victory_polar_axis__["a"]; });


/***/ }),
/* 356 */
/*!************************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-polar-axis/es/victory-polar-axis.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__ = __webpack_require__(/*! lodash/isEmpty */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(/*! prop-types */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_victory_core__ = __webpack_require__(/*! victory-core */ 14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_methods__ = __webpack_require__(/*! ./helper-methods */ 357);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};
var options = {
  components: [{
    name: "axis",
    index: 0
  }, {
    name: "axisLabel",
    index: 0
  }, {
    name: "grid"
  }, {
    name: "parent",
    index: "parent"
  }, {
    name: "ticks"
  }, {
    name: "tickLabels"
  }]
};

var VictoryPolarAxis =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VictoryPolarAxis, _React$Component);

  function VictoryPolarAxis() {
    _classCallCheck(this, VictoryPolarAxis);

    return _possibleConstructorReturn(this, (VictoryPolarAxis.__proto__ || Object.getPrototypeOf(VictoryPolarAxis)).apply(this, arguments));
  }

  _createClass(VictoryPolarAxis, [{
    key: "renderAxisLine",
    value: function renderAxisLine(props) {
      var dependentAxis = props.dependentAxis;
      var axisComponent = dependentAxis ? props.axisComponent : props.circularAxisComponent;
      var axisProps = this.getComponentProps(axisComponent, "axis", 0);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(axisComponent, axisProps);
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(props) {
      var axisLabelComponent = props.axisLabelComponent,
          dependentAxis = props.dependentAxis,
          label = props.label;

      if (!label || !dependentAxis) {
        return null;
      }

      var axisLabelProps = this.getComponentProps(axisLabelComponent, "axisLabel", 0);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(axisLabelComponent, axisLabelProps);
    }
  }, {
    key: "renderAxis",
    value: function renderAxis(props) {
      var _this = this;

      var tickComponent = props.tickComponent,
          tickLabelComponent = props.tickLabelComponent,
          name = props.name;

      var shouldRender = function (componentProps) {
        var _componentProps$style = componentProps.style,
            style = _componentProps$style === void 0 ? {} : _componentProps$style,
            _componentProps$event = componentProps.events,
            events = _componentProps$event === void 0 ? {} : _componentProps$event;
        var visible = style.stroke !== "transparent" && style.stroke !== "none" && style.strokeWidth !== 0;
        return visible || !__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(events);
      };

      var axisType = props.dependentAxis ? "radial" : "angular";
      var gridComponent = axisType === "radial" ? props.circularGridComponent : props.gridComponent;
      var tickComponents = this.dataKeys.map(function (key, index) {
        var tickProps = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
          key: "".concat(name, "-tick-").concat(key)
        }, _this.getComponentProps(tickComponent, "ticks", index));

        var TickComponent = __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(tickComponent, tickProps);
        return shouldRender(TickComponent.props) ? TickComponent : undefined;
      }).filter(Boolean);
      var gridComponents = this.dataKeys.map(function (key, index) {
        var gridProps = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
          key: "".concat(name, "-grid-").concat(key)
        }, _this.getComponentProps(gridComponent, "grid", index));

        var GridComponent = __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(gridComponent, gridProps);
        return shouldRender(GridComponent.props) ? GridComponent : undefined;
      }).filter(Boolean);
      var tickLabelComponents = this.dataKeys.map(function (key, index) {
        var tickLabelProps = __WEBPACK_IMPORTED_MODULE_1_lodash_assign___default()({
          key: "".concat(name, "-tick-").concat(key)
        }, _this.getComponentProps(tickLabelComponent, "tickLabels", index));

        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(tickLabelComponent, tickLabelProps);
      });
      var axis = this.renderAxisLine(props);
      var axisLabel = this.renderLabel(props);
      var children = [axis, axisLabel].concat(_toConsumableArray(tickComponents), _toConsumableArray(gridComponents), _toConsumableArray(tickLabelComponents));
      return this.renderGroup(props, children);
    } // Overridden in victory-native

  }, {
    key: "renderGroup",
    value: function renderGroup(props, children) {
      var groupComponent = props.groupComponent;
      var groupComponentProps = groupComponent.props || {};
      var origin = __WEBPACK_IMPORTED_MODULE_4_victory_core__["e" /* Helpers */].getPolarOrigin(props);
      var transform = groupComponentProps.transform || "translate(".concat(origin.x, ", ").concat(origin.y, ")");
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(groupComponent, {
        transform: transform
      }, children);
    }
  }, {
    key: "shouldAnimate",
    value: function shouldAnimate() {
      return !!this.props.animate;
    }
  }, {
    key: "render",
    value: function render() {
      var animationWhitelist = VictoryPolarAxis.animationWhitelist;
      var props = __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].modifyProps(this.props, fallbackProps);

      if (this.shouldAnimate()) {
        return this.animateComponent(props, animationWhitelist);
      }

      var children = this.renderAxis(props);
      return props.standalone ? this.renderContainer(props.containerComponent, children) : children;
    }
  }]);

  return VictoryPolarAxis;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Object.defineProperty(VictoryPolarAxis, "animationWhitelist", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["style", "domain", "range", "tickCount", "tickValues", "padding", "width", "height"]
});
Object.defineProperty(VictoryPolarAxis, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "VictoryAxis"
});
Object.defineProperty(VictoryPolarAxis, "role", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "axis"
});
Object.defineProperty(VictoryPolarAxis, "defaultTransitions", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onExit: {
      duration: 500
    },
    onEnter: {
      duration: 500
    }
  }
});
Object.defineProperty(VictoryPolarAxis, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4_victory_core__["c" /* CommonProps */].baseProps, {
    axisAngle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
    axisComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    axisLabelComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    axisValue: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object]),
    categories: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      x: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string),
      y: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string)
    })]),
    circularAxisComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    circularGridComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    containerComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    dependentAxis: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
    endAngle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
    events: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      target: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(["axis", "axisLabel", "grid", "ticks", "tickLabels"]),
      eventKey: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].nonNegative]), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string]),
      eventHandlers: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
    })),
    gridComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    innerRadius: __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].nonNegative,
    labelPlacement: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(["parallel", "perpendicular", "vertical"]),
    startAngle: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.number,
    stringMap: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
    style: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
      parent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
      axis: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
      axisLabel: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
      grid: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
      ticks: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object,
      tickLabels: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
    }),
    tickComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    tickCount: __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].allOfType([__WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].integer, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].greaterThanZero]),
    tickFormat: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].homogeneousArray]),
    tickLabelComponent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.element,
    tickValues: __WEBPACK_IMPORTED_MODULE_4_victory_core__["h" /* PropTypes */].homogeneousArray
  })
});
Object.defineProperty(VictoryPolarAxis, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    axisComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "axis"
    }),
    axisLabelComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["m" /* VictoryLabel */], null),
    circularAxisComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["a" /* Arc */], {
      type: "axis"
    }),
    circularGridComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["a" /* Arc */], {
      type: "grid"
    }),
    containerComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["l" /* VictoryContainer */], null),
    endAngle: 360,
    gridComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "grid"
    }),
    groupComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("g", {
      role: "presentation"
    }),
    labelPlacement: "parallel",
    startAngle: 0,
    standalone: true,
    theme: __WEBPACK_IMPORTED_MODULE_4_victory_core__["n" /* VictoryTheme */].grayscale,
    tickComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["g" /* LineSegment */], {
      type: "tick"
    }),
    tickLabelComponent: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_victory_core__["m" /* VictoryLabel */], null)
  }
});
Object.defineProperty(VictoryPolarAxis, "getDomain", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].getDomain
});
Object.defineProperty(VictoryPolarAxis, "getAxis", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: __WEBPACK_IMPORTED_MODULE_4_victory_core__["b" /* Axis */].getAxis
});
Object.defineProperty(VictoryPolarAxis, "getScale", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: __WEBPACK_IMPORTED_MODULE_5__helper_methods__["b" /* getScale */]
});
Object.defineProperty(VictoryPolarAxis, "getStyles", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__helper_methods__["c" /* getStyles */])(props, fallbackProps.style);
  }
});
Object.defineProperty(VictoryPolarAxis, "getBaseProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__helper_methods__["a" /* getBaseProps */])(props, fallbackProps);
  }
});
Object.defineProperty(VictoryPolarAxis, "expectedComponents", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: ["axisComponent", "circularAxisComponent", "groupComponent", "containerComponent", "tickComponent", "tickLabelComponent", "gridComponent", "circularGridComponent"]
});
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_victory_core__["p" /* addEvents */])(VictoryPolarAxis, options));

/***/ }),
/* 357 */
/*!********************************************************************************************!*\
  !*** /Users/boygirl/formidable/v/victory/packages/victory-polar-axis/es/helper-methods.js ***!
  \********************************************************************************************/
/*! exports provided: getScale, getStyles, getBaseProps */
/*! exports used: getBaseProps, getScale, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseProps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_uniqBy__ = __webpack_require__(/*! lodash/uniqBy */ 149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_uniqBy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_uniqBy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_victory_core__ = __webpack_require__(/*! victory-core */ 14);





var getPosition = function (r, angle, axis) {
  return axis === "x" ? r * Math.cos(angle) : -r * Math.sin(angle);
};

var getAxisType = function (props) {
  var typicalType = props.dependentAxis ? "radial" : "angular";
  var invertedType = typicalType === "angular" ? "radial" : "angular";
  return props.horizontal ? invertedType : typicalType;
};

var filterTicks = function (ticks, scale) {
  var compareTicks = function (t) {
    return scale(t) % (2 * Math.PI);
  };

  return __WEBPACK_IMPORTED_MODULE_1_lodash_uniqBy___default()(ticks, compareTicks);
};

var getEvaluatedStyles = function (style, props) {
  return {
    tickStyle: __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].evaluateStyle(style.ticks, props),
    labelStyle: __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].evaluateStyle(style.tickLabels, props),
    gridStyle: __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].evaluateStyle(style.grid, props)
  };
};

var getStyleObject = function (props) {
  var theme = props.theme,
      dependentAxis = props.dependentAxis;
  var generalAxisStyle = theme && theme.axis && theme.axis.style;
  var axisType = dependentAxis ? "dependentAxis" : "independentAxis";
  var specificAxisStyle = theme && theme[axisType] && theme[axisType].style;

  var mergeStyles = function () {
    var styleNamespaces = ["axis", "axisLabel", "grid", "parent", "tickLabels", "ticks"];
    return styleNamespaces.reduce(function (memo, curr) {
      memo[curr] = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, specificAxisStyle[curr], generalAxisStyle[curr]);
      return memo;
    }, {});
  };

  return generalAxisStyle && specificAxisStyle ? mergeStyles() : specificAxisStyle || generalAxisStyle;
};

var getRadius = function (props) {
  var _Helpers$getPadding = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getPadding(props),
      left = _Helpers$getPadding.left,
      right = _Helpers$getPadding.right,
      top = _Helpers$getPadding.top,
      bottom = _Helpers$getPadding.bottom;

  var width = props.width,
      height = props.height;
  return Math.min(width - left - right, height - top - bottom) / 2;
};

var getRange = function (props, axis) {
  // Return the range from props if one is given.
  if (props.range && props.range[axis]) {
    return props.range[axis];
  } else if (props.range && Array.isArray(props.range)) {
    return props.range;
  }

  var axisType = getAxisType(props);

  if (axisType === "angular") {
    var startAngle = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(props.startAngle);
    var endAngle = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(props.endAngle);
    return [startAngle, endAngle];
  }

  var radius = getRadius(props);
  return [props.innerRadius || 0, radius];
}; // exposed for use by VictoryChart (necessary?)


var getScale = function (props) {
  var axis = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxis(props);
  var scale = __WEBPACK_IMPORTED_MODULE_3_victory_core__["i" /* Scale */].getBaseScale(props, axis);
  var domain = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getDomain(props, axis) || scale.domain();
  var range = getRange(props, axis);
  scale.range(range);
  scale.domain(domain);
  return scale;
};

var getStyles = function (props, styleObject) {
  var style = props.style || {};
  styleObject = styleObject || {};
  var parentStyleProps = {
    height: "auto",
    width: "100%"
  };
  return {
    parent: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()(parentStyleProps, style.parent, styleObject.parent),
    axis: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.axis, styleObject.axis),
    axisLabel: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.axisLabel, styleObject.axisLabel),
    grid: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.grid, styleObject.grid),
    ticks: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.ticks, styleObject.ticks),
    tickLabels: __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()({}, style.tickLabels, styleObject.tickLabels)
  };
};

var getAxisAngle = function (props) {
  var axisAngle = props.axisAngle,
      startAngle = props.startAngle,
      dependentAxis = props.dependentAxis;
  var axis = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxis(props);
  var axisValue = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxisValue(props, axis);

  if (axisValue === undefined || !dependentAxis) {
    return axisAngle === undefined ? startAngle : axisAngle;
  }

  return __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].radiansToDegrees(axisValue);
}; //eslint-disable-next-line max-params


var getTickProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      scale = calculatedValues.scale,
      style = calculatedValues.style,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat;
  var text = tickFormat(tickValue, index, ticks);
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles = getEvaluatedStyles(style, {
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType,
    text: text
  }),
      tickStyle = _getEvaluatedStyles.tickStyle;

  var tickPadding = tickStyle.padding || 0;
  var angularPadding = tickPadding; // TODO: do some geometry

  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: tickStyle,
    x1: radius * Math.cos(scale(tickValue)),
    y1: -radius * Math.sin(scale(tickValue)),
    x2: (radius + tickPadding) * Math.cos(scale(tickValue)),
    y2: -(radius + tickPadding) * Math.sin(scale(tickValue))
  } : {
    style: style,
    index: index,
    datum: tick,
    x1: scale(tickValue) / 2 * Math.cos(axisAngle - angularPadding),
    x2: scale(tickValue) / 2 * Math.cos(axisAngle + angularPadding),
    y1: -(scale(tickValue) / 2) * Math.sin(axisAngle - angularPadding),
    y2: -(scale(tickValue) / 2) * Math.sin(axisAngle + angularPadding)
  };
}; //eslint-disable-next-line max-params


var getTickLabelProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      tickFormat = calculatedValues.tickFormat,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      stringTicks = calculatedValues.stringTicks;
  var text = tickFormat(tickValue, index, ticks);
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles2 = getEvaluatedStyles(style, {
    text: text,
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType
  }),
      labelStyle = _getEvaluatedStyles2.labelStyle;

  var tickLabelComponent = props.tickLabelComponent;
  var labelPlacement = tickLabelComponent.props && tickLabelComponent.props.labelPlacement ? tickLabelComponent.props.labelPlacement : props.labelPlacement;
  var tickPadding = labelStyle.padding || 0;
  var angularPadding = 0; // TODO: do some geometry

  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  var labelAngle = axisType === "angular" ? __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].radiansToDegrees(scale(tickValue)) : axisAngle + angularPadding;
  var textAngle = labelStyle.angle === undefined ? __WEBPACK_IMPORTED_MODULE_3_victory_core__["f" /* LabelHelpers */].getPolarAngle(__WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle) : labelStyle.angle;
  var labelRadius = axisType === "angular" ? radius + tickPadding : scale(tickValue);
  var textAnchor = labelStyle.textAnchor || __WEBPACK_IMPORTED_MODULE_3_victory_core__["f" /* LabelHelpers */].getPolarTextAnchor(__WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    labelPlacement: labelPlacement
  }), labelAngle);
  return {
    index: index,
    datum: tick,
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    text: text,
    x: labelRadius * Math.cos(__WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(labelAngle)),
    y: -labelRadius * Math.sin(__WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(labelAngle))
  };
}; //eslint-disable-next-line max-params


var getGridProps = function (props, calculatedValues, tickValue, index) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style,
      scale = calculatedValues.scale,
      stringTicks = calculatedValues.stringTicks,
      ticks = calculatedValues.ticks,
      tickFormat = calculatedValues.tickFormat;
  var text = tickFormat(tickValue, index, ticks);
  var startAngle = props.startAngle,
      endAngle = props.endAngle,
      _props$innerRadius = props.innerRadius,
      innerRadius = _props$innerRadius === void 0 ? 0 : _props$innerRadius;
  var tick = stringTicks ? stringTicks[index] : tickValue;

  var _getEvaluatedStyles3 = getEvaluatedStyles(style, {
    tick: tick,
    tickValue: tickValue,
    index: index,
    ticks: ticks,
    stringTicks: stringTicks,
    radius: radius,
    scale: scale,
    axisType: axisType,
    text: text
  }),
      gridStyle = _getEvaluatedStyles3.gridStyle;

  var angle = scale(tickValue);
  return axisType === "angular" ? {
    index: index,
    datum: tick,
    style: gridStyle,
    x1: getPosition(radius, angle, "x"),
    y1: getPosition(radius, angle, "y"),
    x2: getPosition(innerRadius, angle, "x"),
    y2: getPosition(innerRadius, angle, "y")
  } : {
    style: gridStyle,
    index: index,
    datum: tick,
    cx: 0,
    cy: 0,
    r: scale(tickValue),
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getAxisLabelProps = function (props, calculatedValues) {
  var axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      style = calculatedValues.style,
      scale = calculatedValues.scale;
  var axisLabelComponent = props.axisLabelComponent;

  if (axisType !== "radial") {
    return {};
  }

  var labelPlacement = axisLabelComponent.props && axisLabelComponent.props.labelPlacement ? axisLabelComponent.props.labelPlacement : props.labelPlacement;
  var labelStyle = style && style.axisLabel || {};
  var axisAngle = axisType === "radial" ? getAxisAngle(props, scale) : undefined;
  var textAngle = labelStyle.angle === undefined ? __WEBPACK_IMPORTED_MODULE_3_victory_core__["f" /* LabelHelpers */].getPolarAngle(__WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle) : labelStyle.angle;
  var labelRadius = radius + (labelStyle.padding || 0);
  var textAnchor = labelStyle.textAnchor || __WEBPACK_IMPORTED_MODULE_3_victory_core__["f" /* LabelHelpers */].getTextPolarAnchor(__WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  var verticalAnchor = labelStyle.verticalAnchor || __WEBPACK_IMPORTED_MODULE_3_victory_core__["f" /* LabelHelpers */].getPolarVerticalAnchor(__WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({}, props, {
    labelPlacement: labelPlacement
  }), axisAngle);
  return {
    style: labelStyle,
    angle: textAngle,
    textAnchor: textAnchor,
    verticalAnchor: verticalAnchor,
    text: props.label,
    x: getPosition(labelRadius, __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(axisAngle), "x"),
    y: getPosition(labelRadius, __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(axisAngle), "y")
  };
};

var getAxisProps = function (modifiedProps, calculatedValues) {
  var style = calculatedValues.style,
      axisType = calculatedValues.axisType,
      radius = calculatedValues.radius,
      scale = calculatedValues.scale;
  var startAngle = modifiedProps.startAngle,
      endAngle = modifiedProps.endAngle,
      _modifiedProps$innerR = modifiedProps.innerRadius,
      innerRadius = _modifiedProps$innerR === void 0 ? 0 : _modifiedProps$innerR;
  var axisAngle = axisType === "radial" ? __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].degreesToRadians(getAxisAngle(modifiedProps, scale)) : undefined;
  return axisType === "radial" ? {
    style: style.axis,
    x1: getPosition(innerRadius, axisAngle, "x"),
    x2: getPosition(radius, axisAngle, "x"),
    y1: getPosition(innerRadius, axisAngle, "y"),
    y2: getPosition(radius, axisAngle, "y")
  } : {
    style: style.axis,
    cx: 0,
    cy: 0,
    r: radius,
    startAngle: startAngle,
    endAngle: endAngle
  };
};

var getCalculatedValues = function (props) {
  props = __WEBPACK_IMPORTED_MODULE_2_lodash_assign___default()({
    polar: true
  }, props);
  var defaultStyles = getStyleObject(props);
  var style = getStyles(props, defaultStyles);
  var padding = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getPadding(props);
  var axis = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxis(props);
  var axisType = getAxisType(props);
  var stringTicks = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].stringTicks(props) ? props.tickValues : undefined;
  var domain = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getDomain(props, axis);
  var range = getRange(props, axis);
  var scale = getScale(props);
  var initialTicks = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getTicks(props, scale);
  var ticks = axisType === "angular" ? filterTicks(initialTicks, scale) : initialTicks;
  var tickFormat = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getTickFormat(props, scale);
  var radius = getRadius(props);
  return {
    axis: axis,
    style: style,
    padding: padding,
    stringTicks: stringTicks,
    axisType: axisType,
    scale: scale,
    ticks: ticks,
    tickFormat: tickFormat,
    domain: domain,
    range: range,
    radius: radius
  };
};

var getBaseProps = function (props, fallbackProps) {
  props = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].modifyProps(props, fallbackProps);
  var calculatedValues = getCalculatedValues(props);
  var style = calculatedValues.style,
      scale = calculatedValues.scale,
      ticks = calculatedValues.ticks,
      domain = calculatedValues.domain;
  var _props = props,
      width = _props.width,
      height = _props.height,
      standalone = _props.standalone,
      theme = _props.theme,
      name = _props.name;
  var axisProps = getAxisProps(props, calculatedValues);
  var axisLabelProps = getAxisLabelProps(props, calculatedValues);
  var initialChildProps = {
    parent: {
      style: style.parent,
      ticks: ticks,
      scale: scale,
      width: width,
      height: height,
      domain: domain,
      standalone: standalone,
      theme: theme,
      name: name
    }
  };
  return ticks.reduce(function (childProps, tick, index) {
    childProps[index] = {
      axis: axisProps,
      axisLabel: axisLabelProps,
      ticks: getTickProps(props, calculatedValues, tick, index),
      tickLabels: getTickLabelProps(props, calculatedValues, tick, index),
      grid: getGridProps(props, calculatedValues, tick, index)
    };
    return childProps;
  }, initialChildProps);
};



/***/ }),
/* 358 */
/*!***************************!*\
  !*** ./helper-methods.js ***!
  \***************************/
/*! exports provided: getChildren, getCalculatedProps, getChildComponents */
/*! exports used: getCalculatedProps, getChildComponents, getChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCalculatedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getChildComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(/*! lodash/assign */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults__ = __webpack_require__(/*! lodash/defaults */ 4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_victory_core__ = __webpack_require__(/*! victory-core */ 14);



/* eslint-disable func-style */

/* eslint-disable no-use-before-define */


var fallbackProps = {
  width: 450,
  height: 300,
  padding: 50
};

function getAxisProps(child, props, calculatedProps) {
  var domain = calculatedProps.domain,
      scale = calculatedProps.scale,
      stringMap = calculatedProps.stringMap,
      categories = calculatedProps.categories,
      horizontal = calculatedProps.horizontal,
      orientations = calculatedProps.orientations;
  var childProps = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].modifyProps(__WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({
    horizontal: horizontal,
    theme: props.theme
  }, child.props));
  var axis = child.type.getAxis(childProps);
  var axisOffset = horizontal ? getHorizontalAxisOffset(props, calculatedProps) : getAxisOffset(props, calculatedProps);
  var crossAxis = childProps.crossAxis === false ? false : true;
  var orientation = childProps.orientation || orientations[axis];
  return {
    stringMap: stringMap,
    horizontal: horizontal,
    categories: categories,
    startAngle: props.startAngle,
    endAngle: props.endAngle,
    innerRadius: props.innerRadius,
    domain: domain,
    scale: scale,
    offsetY: childProps.offsetY !== undefined ? childProps.offsetY : axisOffset.y,
    offsetX: childProps.offsetX !== undefined ? childProps.offsetX : axisOffset.x,
    crossAxis: crossAxis,
    orientation: orientation
  };
}

function getChildProps(child, props, calculatedProps) {
  var axisChild = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].findAxisComponents([child]);

  if (axisChild.length > 0) {
    return getAxisProps(axisChild[0], props, calculatedProps);
  }

  var categories = calculatedProps.categories,
      domain = calculatedProps.domain,
      range = calculatedProps.range,
      scale = calculatedProps.scale,
      stringMap = calculatedProps.stringMap,
      horizontal = calculatedProps.horizontal;
  return {
    categories: categories,
    domain: domain,
    range: range,
    scale: scale,
    stringMap: stringMap,
    horizontal: horizontal
  };
}

function getStyles(props) {
  var styleProps = props.style && props.style.parent;
  return {
    parent: __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, styleProps, {
      height: "100%",
      width: "100%",
      userSelect: "none"
    })
  };
}

function getOrientation(axis, originSign, horizontal) {
  var sign = originSign || "positive";
  var orientations = {
    positive: {
      x: "bottom",
      y: "left"
    },
    negative: {
      x: "top",
      y: "right"
    }
  };
  var horizontalOrientations = {
    positive: {
      x: "left",
      y: "bottom"
    },
    negative: {
      x: "right",
      y: "top"
    }
  };
  return horizontal ? horizontalOrientations[sign][axis] : orientations[sign][axis];
}

function getCalculatedProps(props, childComponents) {
  var style = getStyles(props);
  props = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].modifyProps(props, fallbackProps, "chart");
  var _props = props,
      horizontal = _props.horizontal,
      polar = _props.polar;
  var categories = __WEBPACK_IMPORTED_MODULE_3_victory_core__["o" /* Wrapper */].getCategories(props, childComponents);
  var stringMap = createStringMap(props, childComponents);
  var domain = {
    x: getDomain(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, props, {
      categories: categories
    }), "x", childComponents),
    y: getDomain(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, props, {
      categories: categories
    }), "y", childComponents)
  };
  var range = {
    x: __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getRange(props, "x"),
    y: __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getRange(props, "y")
  };
  var baseScale = {
    x: __WEBPACK_IMPORTED_MODULE_3_victory_core__["i" /* Scale */].getScaleFromProps(props, "x") || __WEBPACK_IMPORTED_MODULE_3_victory_core__["o" /* Wrapper */].getScale(props, "x"),
    y: __WEBPACK_IMPORTED_MODULE_3_victory_core__["i" /* Scale */].getScaleFromProps(props, "y") || __WEBPACK_IMPORTED_MODULE_3_victory_core__["o" /* Wrapper */].getScale(props, "y")
  };
  var scale = {
    x: baseScale.x.domain(domain.x).range(horizontal ? range.y : range.x),
    y: baseScale.y.domain(domain.y).range(horizontal ? range.x : range.y)
  };
  var origin = polar ? __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getPolarOrigin(props) : __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getOrigin(domain);
  var originSign = {
    x: __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getOriginSign(origin.x, domain.x),
    y: __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getOriginSign(origin.y, domain.y)
  };
  var orientations = {
    x: getOrientation("x", originSign.y, horizontal),
    y: getOrientation("y", originSign.x, horizontal)
  };
  var padding = __WEBPACK_IMPORTED_MODULE_3_victory_core__["e" /* Helpers */].getPadding(props);
  return {
    categories: categories,
    domain: domain,
    range: range,
    horizontal: horizontal,
    scale: scale,
    stringMap: stringMap,
    style: style,
    origin: origin,
    padding: padding,
    orientations: orientations
  };
}

function getChildren(props, childComponents, calculatedProps) {
  childComponents = childComponents || getChildComponents(props);
  calculatedProps = calculatedProps || getCalculatedProps(props, childComponents);
  var baseStyle = calculatedProps.style.parent;
  var height = props.height,
      polar = props.polar,
      theme = props.theme,
      width = props.width;
  var _calculatedProps = calculatedProps,
      origin = _calculatedProps.origin,
      horizontal = _calculatedProps.horizontal;
  var parentName = props.name || "chart";
  return childComponents.map(function (child, index) {
    var role = child.type && child.type.role;
    var style = Array.isArray(child.props.style) ? child.props.style : __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({}, child.props.style, {
      parent: baseStyle
    });
    var childProps = getChildProps(child, props, calculatedProps);
    var name = child.props.name || "".concat(parentName, "-").concat(role, "-").concat(index);

    var newProps = __WEBPACK_IMPORTED_MODULE_1_lodash_defaults___default()({
      horizontal: horizontal,
      height: height,
      polar: polar,
      theme: theme,
      width: width,
      style: style,
      name: name,
      origin: polar ? origin : undefined,
      padding: calculatedProps.padding,
      key: "".concat(name, "-key-").concat(index),
      standalone: false
    }, childProps);

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(child, newProps);
  });
}

var getChildComponents = function (props, defaultAxes) {
  var childComponents = __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.toArray(props.children);

  if (childComponents.length === 0) {
    return [defaultAxes.independent, defaultAxes.dependent];
  }

  var axisComponents = {
    dependent: __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxisComponentsWithParent(childComponents, "dependent"),
    independent: __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxisComponentsWithParent(childComponents, "independent")
  };

  if (axisComponents.dependent.length === 0 && axisComponents.independent.length === 0) {
    return props.prependDefaultAxes ? [defaultAxes.independent, defaultAxes.dependent].concat(childComponents) : childComponents.concat([defaultAxes.independent, defaultAxes.dependent]);
  }

  return childComponents;
};

var getDomain = function (props, axis, childComponents) {
  childComponents = childComponents || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.toArray(props.children);
  var domain = __WEBPACK_IMPORTED_MODULE_3_victory_core__["o" /* Wrapper */].getDomain(props, axis, childComponents);
  var axisComponent = __WEBPACK_IMPORTED_MODULE_3_victory_core__["b" /* Axis */].getAxisComponent(childComponents, axis);
  var invertDomain = axisComponent && axisComponent.props && axisComponent.props.invertAxis;
  return invertDomain ? domain.concat().reverse() : domain;
};

var getAxisOffset = function (props, calculatedProps) {
  var scale = calculatedProps.scale,
      origin = calculatedProps.origin,
      domain = calculatedProps.domain,
      padding = calculatedProps.padding,
      orientations = calculatedProps.orientations;
  var top = padding.top,
      bottom = padding.bottom,
      left = padding.left,
      right = padding.right; // make the axes line up, and cross when appropriate

  var orientationOffset = {
    y: orientations.x === "bottom" ? bottom : top,
    x: orientations.y === "left" ? left : right
  };
  var originOffset = {
    x: orientations.y === "left" ? 0 : props.width,
    y: orientations.x === "bottom" ? props.height : 0
  };
  var originPosition = {
    x: origin.x === domain.x[0] || origin.x === domain.x[1] ? 0 : scale.x(origin.x),
    y: origin.y === domain.y[0] || origin.y === domain.y[1] ? 0 : scale.y(origin.y)
  };
  return {
    x: originPosition.x ? Math.abs(originOffset.x - originPosition.x) : orientationOffset.x,
    y: originPosition.y ? Math.abs(originOffset.y - originPosition.y) : orientationOffset.y
  };
};

var getHorizontalAxisOffset = function (props, calculatedProps) {
  var scale = calculatedProps.scale,
      origin = calculatedProps.origin,
      domain = calculatedProps.domain,
      padding = calculatedProps.padding,
      orientations = calculatedProps.orientations;
  var top = padding.top,
      bottom = padding.bottom,
      left = padding.left,
      right = padding.right; // make the axes line up, and cross when appropriate

  var orientationOffset = {
    x: orientations.y === "bottom" ? bottom : top,
    y: orientations.x === "left" ? left : right
  };
  var originOffset = {
    y: orientations.x === "left" ? 0 : props.width,
    x: orientations.y === "bottom" ? props.height : 0
  };
  var originPosition = {
    x: origin.x === domain.x[0] || origin.x === domain.x[1] ? 0 : scale.x(origin.x),
    y: origin.y === domain.y[0] || origin.y === domain.y[1] ? 0 : scale.y(origin.y)
  };
  return {
    y: originPosition.x ? Math.abs(originOffset.x - originPosition.x) : orientationOffset.x,
    x: originPosition.y ? Math.abs(originOffset.y - originPosition.y) : orientationOffset.y
  };
};

var createStringMap = function (props, childComponents) {
  var allStrings = __WEBPACK_IMPORTED_MODULE_3_victory_core__["o" /* Wrapper */].getStringsFromChildren(props, childComponents);
  var x = !allStrings.x || allStrings.x.length === 0 ? null : allStrings.x.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  var y = !allStrings.y || allStrings.y.length === 0 ? null : allStrings.y.reduce(function (memo, string, index) {
    memo[string] = index + 1;
    return memo;
  }, {});
  return {
    x: x,
    y: y
  };
};



/***/ })
/******/ ]);
});
//# sourceMappingURL=victory-chart.js.map