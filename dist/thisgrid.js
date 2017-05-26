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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BloggListGrid;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function BloggListGrid(elementName, callback) {
    var BlogList = document.getElementById(elementName);
    if (!BlogList) {
        return;
    }

    var BlogListDeepCopy = BlogList.cloneNode(true);
    var BlogListCopy = BlogList.cloneNode(false);

    var columnOne = document.createElement('div');
    var columnTwo = document.createElement('div');

    BlogListCopy.appendChild(columnOne);
    BlogListCopy.appendChild(columnTwo);

    columnOne.className = 'u-flexColumn js-BlogList-column is-left';
    columnTwo.className = 'u-flexColumn js-BlogList-column is-right';

    var firstRuntime = true;
    var gridCreated = false;
    var gridActive = false;

    function deactivateGrid() {
        gridActive = false;
        BlogListCopy.parentNode.replaceChild(BlogList, BlogListCopy);
    }
    function activateGrid() {
        gridActive = true;
        BlogList.parentNode.replaceChild(BlogListCopy, BlogList);
    }
    function createGrid() {
        var children = [].concat(_toConsumableArray(BlogListDeepCopy.children));

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                if (firstRuntime) {
                    columnOne.appendChild(child);
                    firstRuntime = false;
                } else {
                    columnOne.offsetHeight > columnTwo.offsetHeight ? columnTwo.appendChild(child) : columnOne.appendChild(child);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        gridCreated = true;
        BlogListCopy.classList.add('u-flexRow');
        callback();
    }

    if (window.innerWidth >= 800) {
        activateGrid();
        createGrid();
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth <= 1439 && window.innerWidth >= 801 && !gridActive) {
            activateGrid();
            if (!gridCreated) {
                createGrid();
            } else {
                callback();
            }
        } else if (window.innerWidth <= 800 && gridActive) {
            deactivateGrid();
            callback();
        }
    });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);