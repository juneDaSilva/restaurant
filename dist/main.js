/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/youtube.svg */ \"./src/images/youtube.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/espresso-hero.webp */ \"./src/images/espresso-hero.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/european-breakfast.jpeg */ \"./src/images/european-breakfast.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about-img.jpeg */ \"./src/images/about-img.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* \\n* 1. GENERAL\\n* 2. HOME\\n* 3. MENU\\n* 4. ABOUT\\n */\\n\\n/* ------------ ----- 1. GENERAL ----- -------- */\\n\\n* {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n}\\n\\nbody {\\n  background-color: #fff;\\n  margin: 0;\\n  height: 100vh;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-rows: 1fr 18fr 50px;\\n  height: 100%;\\n}\\n\\nheader {\\n  grid-row: 1/2;\\n  height: 30px;\\n  font-size: 20px;\\n  display: flex;\\n  justify-content: space-evenly;\\n  margin: 10px;\\n  letter-spacing: 3px;\\n}\\n\\nheader div:hover {\\n  border-bottom: 3px solid rgb(237, 177, 49);\\n  transition: all 0.5s ease;\\n  cursor: pointer;\\n  content: \\\"\\\";\\n  height: 21px;\\n}\\n\\nmain {\\n  grid-row: 2/3;\\n}\\n\\nfooter {\\n  grid-row: 3/4;\\n  /* height: 20px; */\\n}\\n\\nfooter {\\n  margin: 10px;\\n  font-size: 14px;\\n  font-weight: 600;\\n  letter-spacing: 2px;\\n  display: flex;\\n  justify-content: start;\\n  align-items: center;\\n}\\n\\n.git-img {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  width: 18px;\\n}\\n\\n.yt-img {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  width: 20px;\\n}\\n\\n.logos {\\n  margin-left: 8px;\\n}\\n\\n.logos:hover {\\n  scale: 1.3;\\n  transition: 0.3s;\\n}\\n\\n/* --------- ---- 2. HOME ---- ----------- */\\n/* ------ 2. Banner ------ */\\n.hero-wrapper {\\n  height: min(300px, 40vw);\\n  width: 100vw;\\n  background: no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  display: flex;\\n}\\n\\n.hero {\\n  background: linear-gradient(\\n    110deg,\\n    rgba(0, 0, 0, 0.686),\\n    rgba(0, 0, 0, 0.131)\\n  );\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.title-wrap {\\n  flex: 1;\\n  padding-top: 3%;\\n  padding-bottom: 3%;\\n  border-top: 1px solid rgba(245, 245, 245, 0.808);\\n  border-bottom: 1px solid rgba(245, 245, 245, 0.785);\\n  display: flex;\\n  justify-content: start;\\n  align-items: center;\\n}\\n\\n.hero p {\\n  color: rgba(245, 245, 245, 0.941);\\n  font-weight: 600;\\n  font-size: 40px;\\n  margin-left: 10%;\\n  letter-spacing: 2px;\\n}\\n\\n/* ------ 2. Main Body ----- */\\n.home-body {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: 5%;\\n  transition: 0.5s;\\n}\\n\\n.albanian-welcome {\\n  font-family: \\\"Luxurious Script\\\", cursive;\\n  font-size: 70px;\\n  color: rgb(220, 165, 47);\\n  margin-bottom: -15px;\\n  transition: 1s;\\n}\\n\\n.english-welcome {\\n  margin-top: -20px;\\n  font-size: 45px;\\n  font-weight: 600;\\n  letter-spacing: -4px;\\n}\\n\\n.short-border {\\n  margin-bottom: 40px;\\n  margin-top: 40px;\\n  width: 200px;\\n  height: 5px;\\n  background-color: rgb(237, 177, 49);\\n  border: none;\\n}\\n\\n.blurb {\\n  font-size: 20px;\\n  letter-spacing: 2px;\\n}\\n\\n.menu-btn {\\n  margin-top: 50px;\\n  border: 2px solid black;\\n  font-size: 22px;\\n  padding: 12px 30px;\\n  background-color: #fff;\\n  transition: 0.3s;\\n}\\n\\n.menu-btn:hover {\\n  transition: 0.3s;\\n  cursor: pointer;\\n  scale: 0.9;\\n}\\n\\n/* ----------- ---- 3. MENU PAGE ---- ---------- */\\n\\n/* -------3. Menu top ------- */\\n.menu-main {\\n  display: flex;\\n  height: 90vh;\\n}\\n\\n.menu-side {\\n  flex: 3;\\n  max-width: 950px;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: top;\\n  align-items: center;\\n}\\n\\n.menu-welcome {\\n  transition: 1s ease;\\n  transform-origin: center;\\n  font-family: \\\"Luxurious Script\\\", cursive;\\n  font-size: 55px;\\n  color: rgb(220, 165, 47);\\n  margin-bottom: -20px;\\n  transition: 1s;\\n}\\n\\n.menu-title {\\n  margin-top: -13px;\\n  font-size: 50px;\\n  font-weight: 600;\\n  letter-spacing: -10px;\\n}\\n\\n#legend div {\\n  font-weight: 400;\\n}\\n\\n/* -----3. Menu items ----- */\\n\\n.item-type {\\n  margin-top: 90px;\\n  font-size: 20px;\\n  font-weight: 600;\\n  color: rgb(220, 165, 47);\\n}\\n\\n.menu-block {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: start;\\n  width: 320px;\\n}\\n\\n.item-block {\\n  flex: 1;\\n  display: flex;\\n  width: 100%;\\n  justify-content: bottom;\\n  align-items: end;\\n}\\n\\n.item-block div {\\n  margin: 10px 5px;\\n  flex: 1;\\n}\\n\\n.item {\\n  text-align: end;\\n  font-weight: 600;\\n  font-size: 15px;\\n  height: 13px;\\n}\\n\\n.spacer {\\n  border-bottom: 1px dotted black;\\n  height: 15px;\\n  width: 90px;\\n}\\n\\n.pricing {\\n  font-weight: 600;\\n  font-size: 13px;\\n  height: 14px;\\n  text-align: start;\\n  white-space: nowrap;\\n}\\n\\n#food {\\n  margin-top: 30px;\\n}\\n\\n/* -----3. Banner side ----- */\\n\\n.banner-side {\\n  flex: 1;\\n  height: 95%;\\n  background: no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: 870px 1200px;\\n  background-position: center;\\n  border-radius: 3px;\\n}\\n\\n.banner-side div {\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(255, 255, 255, 0.126);\\n}\\n\\n/* ------------- ---- 4. ABOUT ---- ----------- */\\n\\n.about-main {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.image {\\n  flex: 1;\\n  background: no-repeat url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: 1600px 1000px;\\n  background-position: center;\\n  height: 100%;\\n  display: flex;\\n  justify-content: end;\\n}\\n\\n.haze {\\n  background: rgba(255, 255, 255, 0.171);\\n  backdrop-filter: blur(5px);\\n  height: 100%;\\n  width: max(45%, 500px);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n  align-items: center;\\n}\\n\\n.haze div {\\n  color: #fff;\\n  margin: 20px;\\n}\\n\\n.about-title {\\n  font-size: 30px;\\n  font-weight: 600;\\n}\\n\\n.aboutme {\\n  padding: 90px;\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/about.js":
/*!**************************!*\
  !*** ./src/app/about.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildAbout\": () => (/* binding */ buildAbout)\n/* harmony export */ });\n/* harmony import */ var _build_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-module */ \"./src/app/build-module.js\");\n\n\nconst buildAbout = () => {\n  const about_main = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"about-main\");\n  const img = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"image\");\n  const haze = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"haze\");\n  const title = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"about-title\", \"A little history\");\n  const me = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\n    \"div\",\n    null,\n    \"aboutme\",\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio accusantium iusto. Nemo totam aut harum fuga? Quod dolorem tempore aliquid, possimus non nulla ad ex architecto, est ipsum error. Eligendi harum dignissimos velit vitae, quaerat iusto enim. Nobis animi repudiandae est ipsa libero nam. Ipsum quas officiis magnam nesciunt.\"\n  );\n\n  haze.append(title, me);\n  img.append(haze);\n  about_main.append(img);\n\n  return about_main;\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/about.js?");

/***/ }),

/***/ "./src/app/build-module.js":
/*!*********************************!*\
  !*** ./src/app/build-module.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildElement\": () => (/* binding */ buildElement)\n/* harmony export */ });\nconst buildElement = (el_type, id_name, class_name, content) => {\n  const element = document.createElement(el_type);\n  if (id_name) element.id = id_name;\n  if (class_name) element.classList.add(class_name);\n  if (content) element.innerText = content;\n\n  return element;\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/build-module.js?");

/***/ }),

/***/ "./src/app/footer.js":
/*!***************************!*\
  !*** ./src/app/footer.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildFooter\": () => (/* binding */ buildFooter)\n/* harmony export */ });\n/* harmony import */ var _build_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-module */ \"./src/app/build-module.js\");\n\n\nconst buildFooter = () => {\n  const footer = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"footer\", null, null, null);\n  const footer_par = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\n    \"p\",\n    null,\n    \"footer-par\",\n    \"--Built by JuneDev\"\n  );\n  const git_img = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"img\", null, \"git-img\", null);\n  const git_link = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"a\", null, \"logos\", null);\n  git_link.append(git_img);\n  git_link.href = \"https://github.com/JuneDev-html\";\n\n  const yt_link = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"a\", null, \"logos\", null);\n  const yt_img = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"img\", null, \"yt-img\", null);\n  yt_link.append(yt_img);\n  yt_link.href = \"https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q\";\n\n  footer.append(footer_par, git_link, yt_link);\n\n  return footer;\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/footer.js?");

/***/ }),

/***/ "./src/app/home.js":
/*!*************************!*\
  !*** ./src/app/home.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildHome\": () => (/* binding */ buildHome)\n/* harmony export */ });\n/* harmony import */ var _build_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-module */ \"./src/app/build-module.js\");\n\n\nconst buildBanner = () => {\n  const main = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"main\");\n  const hero_wrapper = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"hero-wrapper\");\n  const hero = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"hero\");\n  const title_wrap = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"title-wrap\");\n  const title = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"p\", null, null, \"Espress Yourself\");\n\n  title_wrap.appendChild(title);\n  hero.appendChild(title_wrap);\n  hero_wrapper.appendChild(hero);\n  main.appendChild(hero_wrapper);\n\n  return hero_wrapper;\n};\n\nconst buildBody = () => {\n  const body = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"home-body\");\n  const albanian = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\n    \"div\",\n    null,\n    \"albanian-welcome\",\n    \"Mirëseardhje\"\n  );\n  const english = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\n    \"div\",\n    null,\n    \"english-welcome\",\n    \"WELCOME TO ESPRESS YOURSELF\"\n  );\n  const border = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"hr\", \"short-border\");\n  const blurb = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\n    \"div\",\n    null,\n    \"blurb\",\n    \"Central MA's home of traditional european espresso\"\n  );\n  const btn = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"button\", null, \"menu-btn\", \"MENU\");\n\n  body.append(albanian, english, border, blurb, btn);\n\n  return body;\n};\n\nconst buildHome = () => {\n  const main = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"main\");\n\n  main.append(buildBanner(), buildBody());\n\n  return main;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/app/home.js?");

/***/ }),

/***/ "./src/app/menu.js":
/*!*************************!*\
  !*** ./src/app/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildMenu\": () => (/* binding */ buildPage)\n/* harmony export */ });\n/* harmony import */ var _build_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-module */ \"./src/app/build-module.js\");\n\n\nconst buildPage = () => {\n  const main = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"main\", null, \"menu-main\");\n  const menu_side = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu-side\");\n  const welcome = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu-welcome\", \"Mirëseardhje\");\n  const title = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu-title\", \"MENU\");\n  const banner_side = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"banner-side\");\n  const smoke = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\");\n\n  banner_side.append(smoke);\n  menu_side.append(welcome, title, buildBlockOne(), buildBlockTwo());\n  main.append(menu_side, banner_side);\n\n  return main;\n};\n\nconst buildBlockOne = () => {\n  const block = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu-block\");\n  const drink = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-type\", \"DRINK\");\n\n  const legend = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", \"legend\", \"item-block\");\n  const legendD = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"drink\");\n  const legendS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const legendP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"sgl / dbl / trpl\");\n  legend.append(legendD, legendS, legendP);\n\n  const espresso = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const espressoD = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"espresso\");\n  const espressoS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const espressoP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"2.08 / 2.56 / 3.08\");\n  espresso.append(espressoD, espressoS, espressoP);\n\n  const mach = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const machD = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"macchiato\");\n  const machS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const machP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"2.30 / 2.95 / 3.45\");\n  mach.append(machD, machS, machP);\n\n  const latt = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const lattD = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"latte\");\n  const lattS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const lattP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"2.60 / 3.20 / 3.95\");\n  latt.append(lattD, lattS, lattP);\n\n  block.append(drink, legend, espresso, mach, latt);\n\n  return block;\n};\n\nconst buildBlockTwo = () => {\n  const block = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu-block\");\n  const drink = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", \"food\", \"item-type\", \"FOOD\");\n\n  const crois = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const croisF = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"croissant\");\n  const croisS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const croisP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"2.50\");\n  crois.append(croisF, croisS, croisP);\n\n  const pie = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const pieF = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"spinach pie\");\n  const pieS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const pieP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"2.99\");\n  pie.append(pieF, pieS, pieP);\n\n  const sand = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item-block\");\n  const sandF = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"item\", \"sandwich\");\n  const sandS = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"spacer\");\n  const sandP = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"pricing\", \"4.99\");\n  sand.append(sandF, sandS, sandP);\n\n  block.append(drink, crois, pie, sand);\n\n  return block;\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/app/menu.js?");

/***/ }),

/***/ "./src/app/nav-listener.js":
/*!*********************************!*\
  !*** ./src/app/nav-listener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenNav\": () => (/* binding */ listenNav)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _page_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-loaders */ \"./src/app/page-loaders.js\");\n\n\n\nconst listenNav = () => {\n  const header = document.querySelector(\"header\");\n\n  header.addEventListener(\"click\", (event) => {\n    const clicked = event.target.innerText;\n\n    if (clicked === \"HOME\") {\n      ___WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\n      console.log(\"home clicked\");\n      (0,_page_loaders__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n      document.querySelector(\".menu-btn\").addEventListener(\"click\", () => {\n        ___WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\n        console.log(\"menu button clicked\");\n        (0,_page_loaders__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n      });\n    } else if (clicked === \"MENU\") {\n      ___WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\n      console.log(\"menu clicked\");\n      (0,_page_loaders__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    } else if (clicked === \"ABOUT\") {\n      ___WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\n      console.log(\"about clicked\");\n      (0,_page_loaders__WEBPACK_IMPORTED_MODULE_1__.loadAbout)();\n    }\n  });\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/nav-listener.js?");

/***/ }),

/***/ "./src/app/navbar.js":
/*!***************************!*\
  !*** ./src/app/navbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildNav\": () => (/* binding */ buildNav)\n/* harmony export */ });\n/* harmony import */ var _build_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-module */ \"./src/app/build-module.js\");\n\n\nconst buildNav = () => {\n  const header = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"header\", null, null, null);\n  const home = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"home\", \"HOME\");\n  const menu = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"menu\", \"MENU\");\n  const about = (0,_build_module__WEBPACK_IMPORTED_MODULE_0__.buildElement)(\"div\", null, \"about\", \"ABOUT\");\n\n  header.append(home, menu, about);\n\n  return header;\n};\n\n\n//# sourceURL=webpack://restaurant/./src/app/navbar.js?");

/***/ }),

/***/ "./src/app/page-loaders.js":
/*!*********************************!*\
  !*** ./src/app/page-loaders.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAbout\": () => (/* binding */ loadAbout),\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome),\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _nav_listener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-listener */ \"./src/app/nav-listener.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/app/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/app/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/app/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu */ \"./src/app/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ \"./src/app/about.js\");\n\n\n\n\n\n\n\n\nfunction loadHome() {\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.append((0,_navbar__WEBPACK_IMPORTED_MODULE_2__.buildNav)(), (0,_home__WEBPACK_IMPORTED_MODULE_4__.buildHome)(), (0,_footer__WEBPACK_IMPORTED_MODULE_3__.buildFooter)());\n  (0,_nav_listener__WEBPACK_IMPORTED_MODULE_1__.listenNav)();\n}\n\nfunction loadMenu() {\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.append((0,_navbar__WEBPACK_IMPORTED_MODULE_2__.buildNav)(), (0,_menu__WEBPACK_IMPORTED_MODULE_5__.buildMenu)(), (0,_footer__WEBPACK_IMPORTED_MODULE_3__.buildFooter)());\n  (0,_nav_listener__WEBPACK_IMPORTED_MODULE_1__.listenNav)();\n}\n\nfunction loadAbout() {\n  _index__WEBPACK_IMPORTED_MODULE_0__.content.append((0,_navbar__WEBPACK_IMPORTED_MODULE_2__.buildNav)(), (0,_about__WEBPACK_IMPORTED_MODULE_6__.buildAbout)(), (0,_footer__WEBPACK_IMPORTED_MODULE_3__.buildFooter)());\n  (0,_nav_listener__WEBPACK_IMPORTED_MODULE_1__.listenNav)();\n}\n\n\n//# sourceURL=webpack://restaurant/./src/app/page-loaders.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _app_page_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/page-loaders */ \"./src/app/page-loaders.js\");\n\n\n\nconst content = document.getElementById(\"content\");\n\n(0,_app_page_loaders__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/images/about-img.jpeg":
/*!***********************************!*\
  !*** ./src/images/about-img.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67436fa392921a1eaa4c.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/images/about-img.jpeg?");

/***/ }),

/***/ "./src/images/espresso-hero.webp":
/*!***************************************!*\
  !*** ./src/images/espresso-hero.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9749a539f2992653718b.webp\";\n\n//# sourceURL=webpack://restaurant/./src/images/espresso-hero.webp?");

/***/ }),

/***/ "./src/images/european-breakfast.jpeg":
/*!********************************************!*\
  !*** ./src/images/european-breakfast.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"921472749c9e90719df8.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/images/european-breakfast.jpeg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b039b2d83982c8256af3.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/youtube.svg":
/*!********************************!*\
  !*** ./src/images/youtube.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"993a2994b3d0e70225e1.svg\";\n\n//# sourceURL=webpack://restaurant/./src/images/youtube.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;