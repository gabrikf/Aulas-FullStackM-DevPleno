module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files,
      devOnlyCacheBusterQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => f.endsWith('.css')) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return _react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      files,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) === null || _buildManifest$lowPri === void 0 ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(), disableRuntimeJS ? null : this.getScripts());
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJwcm9jZXNzIiwiQ29tcG9uZW50IiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY3R4Iiwic3R5bGVzIiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJpbkFtcE1vZGUiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsImNzc0xpbmtFbGVtZW50cyIsImZpbGUiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQiLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsIlJlYWN0IiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInVybCIsIm5ld1Byb3BzIiwiZGlzYWJsZVJ1bnRpbWVKUyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImNoaWxkcmVuIiwiY2hpbGQiLCJpc1JlYWN0SGVsbWV0IiwiY29uc29sZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJoZWFkIiwiYmFkUHJvcCIsInR5cGUiLCJPYmplY3QiLCJwcm9wIiwiX19ORVhUX0RBVEFfXyIsInBhZ2UiLCJjdXJTdHlsZXMiLCJBcnJheSIsImhhc1N0eWxlcyIsImVsIiwiX19odG1sIiwiY2Fub25pY2FsQmFzZSIsInN0eWxlIiwiZ2V0QW1wUGF0aCIsImhlYWRUYWdzIiwiSGVhZCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwibm9uY2UiLCJQcm9wVHlwZXMiLCJjcm9zc09yaWdpbiIsIkFNUF9SRU5ERVJfVEFSR0VUIiwiZ2V0RHluYW1pY0NodW5rcyIsImRlZHVwZSIsIm1vZGVyblByb3BzIiwiZ2V0U2NyaXB0cyIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJidWlsZE1hbmlmZXN0IiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImVyciIsImFtcERldkZpbGVzIiwiTmV4dFNjcmlwdCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYW1wUGF0aCIsImFzUGF0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztR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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIENvbXBvbmVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZWR1cGUoYnVuZGxlczogYW55W10pOiBhbnlbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IGtlcHQgPSBbXVxuXG4gIGZvciAoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpIHtcbiAgICBpZiAoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSkgY29udGludWVcbiAgICBmaWxlcy5hZGQoYnVuZGxlLmZpbGUpXG4gICAga2VwdC5wdXNoKGJ1bmRsZSlcbiAgfVxuICByZXR1cm4ga2VwdFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCAnLm1vZHVsZS5qcycpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHA6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChwcm9wczogYW55KSA9PiA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICBjb25zdCB7IGh0bWwsIGhlYWQgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHsgZW5oYW5jZUFwcCB9KVxuICAgIGNvbnN0IHN0eWxlcyA9IFsuLi5mbHVzaCgpXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnRDb21wb25lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvcHN9PlxuICAgICAgICA8RG9jdW1lbnRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIdG1sKFxuICBwcm9wczogUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgUmVhY3QuSHRtbEhUTUxBdHRyaWJ1dGVzPEhUTUxIdG1sRWxlbWVudD4sXG4gICAgSFRNTEh0bWxFbGVtZW50XG4gID5cbikge1xuICBjb25zdCB7IGluQW1wTW9kZSB9ID0gdXNlQ29udGV4dChEb2N1bWVudENvbXBvbmVudENvbnRleHQpXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGZpbGVzLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgY3NzRmlsZXMgPVxuICAgICAgZmlsZXMgJiYgZmlsZXMubGVuZ3RoID8gZmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpIDogW11cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPixcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlbiB0aGVcbiAgICAgICAgICAvLyBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlIG1vZGVyblxuICAgICAgICAgIC8vIHZhcmlhbnRzIG9ubHkuXG4gICAgICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgKVxuICB9XG5cbiAgZ2V0UHJlbG9hZE1haW5MaW5rcygpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZmlsZXMsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9XG4gICAgICBmaWxlcyAmJiBmaWxlcy5sZW5ndGhcbiAgICAgICAgPyBmaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgICAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAgICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBbXVxuXG4gICAgcmV0dXJuICFwcmVsb2FkRmlsZXMubGVuZ3RoXG4gICAgICA/IG51bGxcbiAgICAgIDogcHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICB9XG5cbiAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlOiBSZWFjdE5vZGUpOiBSZWFjdE5vZGUge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHRcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkPy5wcm9wcz8uWydkYXRhLXJlYWN0LWhlbG1ldCddXG4gICAgICAgIGlmICghaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgIGlmIChjaGlsZD8udHlwZSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGNoaWxkPy50eXBlID09PSAnbWV0YScgJiZcbiAgICAgICAgICAgIGNoaWxkPy5wcm9wcz8ubmFtZSA9PT0gJ3ZpZXdwb3J0J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2hlYWR9XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cIm5leHQtaGVhZC1jb3VudFwiXG4gICAgICAgICAgY29udGVudD17UmVhY3QuQ2hpbGRyZW4uY291bnQoaGVhZCB8fCBbXSkudG9TdHJpbmcoKX1cbiAgICAgICAgLz5cbiAgICAgICAge2luQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgeyFoYXNDYW5vbmljYWxSZWwgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGNsZWFuQW1wUGF0aChkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBodHRwczovL3d3dy5hbXBwcm9qZWN0Lm9yZy9kb2NzL2Z1bmRhbWVudGFscy9vcHRpbWl6ZV9hbXAjb3B0aW1pemUtdGhlLWFtcC1ydW50aW1lLWxvYWRpbmcgKi99XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBBZGQgY3VzdG9tIHN0eWxlcyBiZWZvcmUgQU1QIHN0eWxlcyB0byBwcmV2ZW50IGFjY2lkZW50YWwgb3ZlcnJpZGVzICovfVxuICAgICAgICAgICAge3N0eWxlcyAmJiAoXG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1jdXN0b209XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGN1clN0eWxlc1xuICAgICAgICAgICAgICAgICAgICAubWFwKChzdHlsZSkgPT4gc3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKVxuICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCAnJyksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshaW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgeyFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiYW1waHRtbFwiXG4gICAgICAgICAgICAgICAgaHJlZj17Y2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTXG4gICAgICAgICAgICAgID8gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KHRoaXMuZ2V0Q3NzTGlua3MoKSlcbiAgICAgICAgICAgICAgOiB0aGlzLmdldENzc0xpbmtzKCl9XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcygpfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwgfSA9IHVzZUNvbnRleHQoRG9jdW1lbnRDb21wb25lbnRDb250ZXh0KVxuICBpZiAoaW5BbXBNb2RlKSByZXR1cm4gPD57QU1QX1JFTkRFUl9UQVJHRVR9PC8+XG4gIHJldHVybiA8ZGl2IGlkPVwiX19uZXh0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+XG59XG5cbmV4cG9ydCBjbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgQ29tcG9uZW50PE9yaWdpblByb3BzPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICAvLyBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3NhbXRob3IvNjRiMTE0ZTRhNGY1Mzk5MTVhOTViOTFmZmQzNDBhY2NcbiAgc3RhdGljIHNhZmFyaU5vbW9kdWxlRml4ID1cbiAgICAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnXG5cbiAgZ2V0RHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZmlsZXMsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKChidW5kbGU6IGFueSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKVxuICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBmaWxlcyxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzPy5maWx0ZXIoKGZpbGUpID0+IGZpbGUuZW5kc1dpdGgoJy5qcycpKVxuICAgIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcz8uZmlsdGVyKChmaWxlKSA9PlxuICAgICAgZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApXG5cbiAgICByZXR1cm4gWy4uLm5vcm1hbFNjcmlwdHMsIC4uLmxvd1ByaW9yaXR5U2NyaXB0c10ubWFwKChmaWxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBmaWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgICAgICA/IHsgdHlwZTogJ21vZHVsZScgfVxuICAgICAgICAgIDogeyBub01vZHVsZTogdHJ1ZSB9XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgIWRpc2FibGVSdW50aW1lSlMgPyAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKCl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cygpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=