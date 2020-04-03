/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/aboutSection.js":
/*!****************************************!*\
  !*** ./src/js/modules/aboutSection.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AboutSection\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AboutSection = /*#__PURE__*/function () {\n  function AboutSection() {\n    _classCallCheck(this, AboutSection);\n\n    this.aboutText = \"\\n      <p>\\u30AA\\u30FC\\u30B1\\u30B9\\u30C8\\u30EC\\u30FC\\u30BF\\u30FC\\u3068\\u3057\\u3066\\u6D3B\\u8E8D\\u3057\\u3066\\u3044\\u305F\\u4F5C\\u5BB6\\u306B\\u5E2B\\u4E8B\\u3057\\u3001\\u6620\\u753B\\u97F3\\u697D\\u306E\\u9053\\u306B\\u9032\\u3080\\u3002</p>\\n      <p>\\u611F\\u60C5\\u3084\\u60C5\\u666F\\u304C\\u6D6E\\u304B\\u3073\\u3042\\u304C\\u308B\\u3088\\u3046\\u306A\\u3001\\u4E16\\u754C\\u89B3\\u3092\\u30C0\\u30A4\\u30EC\\u30AF\\u30C8\\u306B\\u8868\\u73FE\\u3057\\u305F\\u697D\\u66F2\\u3092\\u88FD\\u4F5C\\u3002</p>\\n    \";\n  }\n  /** about-section を生成 */\n\n\n  _createClass(AboutSection, [{\n    key: \"createAboutSection\",\n    value: function createAboutSection() {\n      var about = document.getElementById('about');\n      about.insertAdjacentHTML('afterbegin', \"\\n    <div class=\\\"contents-body\\\" id=\\\"about-body\\\">\\n      <div class=\\\"contents-container\\\">\\n        <h1 class=\\\"section-title\\\">ABOUT</h1>\\n        <div class=\\\"section-contents\\\">\\n          \".concat(this.aboutText, \"\\n        </div>\\n      </div>\\n    </div>\\n    \"));\n    }\n  }]);\n\n  return AboutSection;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/aboutSection.js?");

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Header\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header() {\n    _classCallCheck(this, Header);\n\n    this.menuInfomation = {\n      menu1: {\n        id: '#top',\n        name: 'TOP'\n      },\n      menu2: {\n        id: '#music',\n        name: 'MUSIC'\n      },\n      menu3: {\n        id: '#about',\n        name: 'ABOUT'\n      },\n      menu4: {\n        id: '#live',\n        name: 'LIVE'\n      }\n    };\n  }\n  /** header を生成 */\n\n\n  _createClass(Header, [{\n    key: \"createHeader\",\n    value: function createHeader() {\n      var header = document.getElementById('header');\n      header.insertAdjacentHTML('afterbegin', \"\\n    <nav id=\\\"menu_content\\\">\\n      <div class=\\\"menu_bg\\\"></div>\\n      <div class=\\\"menu_wrapper\\\">\\n        <div class=\\\"inner\\\">\\n          <ul id=\\\"menu\\\">\\n            <li>\\n              <a class=\\\"menu-item\\\" href=\\\"\".concat(this.menuInfomation.menu1.id, \"\\\">\\n                <span>\").concat(this.menuInfomation.menu1.name, \"</span>\\n              </a>\\n            </li>\\n            <li>\\n              <a class=\\\"menu-item\\\" href=\\\"\").concat(this.menuInfomation.menu2.id, \"\\\">\\n                <span>\").concat(this.menuInfomation.menu2.name, \"</span>\\n              </a>\\n            </li>\\n            <li>\\n              <a class=\\\"menu-item\\\" href=\\\"\").concat(this.menuInfomation.menu3.id, \"\\\">\\n                <span>\").concat(this.menuInfomation.menu3.name, \"</span>\\n              </a>\\n            </li>\\n            <li>\\n              <a class=\\\"menu-item\\\" href=\\\"\").concat(this.menuInfomation.menu4.id, \"\\\">\\n                <span>\").concat(this.menuInfomation.menu4.name, \"</span>\\n              </a>\\n            </li>\\n          </ul>\\n        </div>\\n      </div>\\n    </nav>\\n    <div id=\\\"menu_btn\\\">\\n      <div class=\\\"wrap\\\">\\n        <span></span>\\n        <span></span>\\n        <span></span>\\n      </div>\\n    </div>\\n  \"));\n    }\n  }]);\n\n  return Header;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/header.js?");

/***/ }),

/***/ "./src/js/modules/liveSection.js":
/*!***************************************!*\
  !*** ./src/js/modules/liveSection.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ AboutSection\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar AboutSection = /*#__PURE__*/function () {\n  function AboutSection() {\n    _classCallCheck(this, AboutSection);\n\n    this.liveInfomation = {\n      DATE: '日付',\n      dateDetail: '2020年5月31日',\n      VENUE: '会場',\n      venueDetail: '池袋RED-Zone',\n      TIME: '時間',\n      timeDetail: 'OPEN 18:00 / START 18:30',\n      TICKET: 'チケット',\n      ticketDetail: '¥500（ドリンク別/税込み）'\n    };\n  }\n  /** live-section を生成 */\n\n\n  _createClass(AboutSection, [{\n    key: \"createLiveSection\",\n    value: function createLiveSection() {\n      var live = document.getElementById('live');\n      live.insertAdjacentHTML('afterbegin', \"\\n      <div class=\\\"contents-body\\\" id=\\\"live-body\\\">\\n        <div class=\\\"contents-container\\\">\\n          <h1 class=\\\"section-title\\\">LIVE</h1>\\n          <div class=\\\"section-contents\\\">\\n            <div class=\\\"row\\\">\\n              <div class=\\\"cell\\\">\".concat(this.liveInfomation.DATE, \"</div>\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.dateDetail, \"</div>\\n            </div>\\n            <div class=\\\"row\\\">\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.VENUE, \"</div>\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.venueDetail, \"</div>\\n            </div>\\n            <div class=\\\"row\\\">\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.TIME, \"</div>\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.timeDetail, \"</div>\\n            </div>\\n            <div class=\\\"row\\\">\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.TICKET, \"</div>\\n              <div class=\\\"cell\\\">\").concat(this.liveInfomation.ticketDetail, \"</div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    \"));\n    }\n  }]);\n\n  return AboutSection;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/liveSection.js?");

/***/ }),

/***/ "./src/js/modules/musicSection.js":
/*!****************************************!*\
  !*** ./src/js/modules/musicSection.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Top\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Top = /*#__PURE__*/function () {\n  function Top() {\n    _classCallCheck(this, Top);\n\n    this.options = '&color=%23b59d9f' + '&auto_play=false' + '&buying=false' + '&liking=false' + '&download=true' + '&sharing=false' + '&show_artwork=false' + '&show_comments=false' + '&show_playcount=false' + '&show_user=false' + '&show_reposts=false' + '&hide_related=false' + '&show_teaser=false' + '&visual=false';\n  }\n  /** music-section を生成 */\n\n\n  _createClass(Top, [{\n    key: \"createMusicSection\",\n    value: function createMusicSection() {\n      var music = document.getElementById('music');\n      music.insertAdjacentHTML('afterbegin', \"\\n    <div class=\\\"contents-body\\\" id=\\\"music-body\\\">\\n      <div class=\\\"contents-container\\\">\\n        <h1 class=\\\"section-title\\\">MUSIC</h1>\\n        <div id=\\\"music-contents\\\">\\n          <iframe id=\\\"sc-widget\\\" class=\\\"track\\\" width=\\\"500\\\" height=\\\"400\\\" scrolling=\\\"no\\\" frameborder=\\\"no\\\" allow=\\\"autoplay\\\"\\n            src=\\\"https://w.soundcloud.com/player/?url=https://api.soundcloud.com/playlists/971590474\".concat(this.options, \"\\\">\\n          </iframe>\\n          <i class=\\\"material-icons is-pulled-left\\\" id=\\\"skip-previous\\\">skip_previous</i>\\n          <i class=\\\"material-icons is-pulled-left\\\" id=\\\"skip-next\\\">skip_next</i>\\n        </div>\\n      </div>\\n    </div>\\n  \"));\n    }\n  }]);\n\n  return Top;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/musicSection.js?");

/***/ }),

/***/ "./src/js/modules/script.js":
/*!**********************************!*\
  !*** ./src/js/modules/script.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Top\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Top = /*#__PURE__*/function () {\n  function Top() {\n    _classCallCheck(this, Top);\n\n    this.trackList = {\n      '幻想大陸': '01',\n      '大海原への旅立ち': '02',\n      'Fashionably Late': '03',\n      '別れ': '04',\n      '能力者': '05',\n      '旅の終わり': '06',\n      'Huge Beast': '07',\n      'Forward!': '08'\n    };\n  }\n  /** スクロール位置で背景を変える */\n\n\n  _createClass(Top, [{\n    key: \"onScrollChangeBackGroundImage\",\n    value: function onScrollChangeBackGroundImage() {\n      var scrolled = true;\n      window.addEventListener('scroll', function () {\n        if (scrolled) {\n          scrolled = false;\n          window.setTimeout(function () {\n            var music = document.getElementById('music');\n            var musicRect = music.getClientRects()[0];\n            var musicRectValue = musicRect.bottom / musicRect.height;\n            music.style.opacity = musicRectValue > 1 ? 2 - musicRectValue : musicRectValue;\n            var top = document.getElementById('top');\n            var topRect = top.getClientRects()[0];\n            var aboutRect = document.getElementById('about').getClientRects()[0];\n            top.style.opacity = aboutRect.bottom / aboutRect.height <= 2 ? topRect.bottom / topRect.height : '';\n            var live = document.getElementById('live');\n            var liveRect = live.getClientRects()[0];\n            var liveRectValue = liveRect.bottom / liveRect.height;\n\n            if (musicRectValue < 0) {\n              live.style.visibility = 'visible';\n              live.style.opacity = liveRect.bottom < liveRect.height ? 1 : liveRectValue > 1 ? 2 - liveRectValue : liveRectValue;\n            } else {\n              live.style.visibility = 'hidden';\n              live.style.opacity = '';\n            }\n\n            scrolled = true;\n          }, 200);\n        }\n      });\n    }\n    /** SoundCloudWidget の操作 */\n\n  }, {\n    key: \"SCWidgetController\",\n    value: function SCWidgetController() {\n      var _this = this;\n\n      var widget = SC.Widget(document.getElementById('sc-widget'));\n      widget.bind(SC.Widget.Events.READY, function () {\n        console.log('ロード完了🙆‍♂️');\n        widget.setVolume(50);\n        document.getElementById('skip-previous').addEventListener('click', function () {\n          widget.seekTo(0);\n          widget.prev();\n        });\n        document.getElementById('skip-next').addEventListener('click', function () {\n          widget.seekTo(0);\n          widget.next();\n        });\n      });\n      widget.bind(SC.Widget.Events.FINISH, function () {\n        console.log('終了🙇');\n      });\n      widget.bind(SC.Widget.Events.PLAY, function () {\n        widget.getCurrentSound(function (callback) {\n          var music = document.getElementById('music');\n\n          var _iterator = _createForOfIteratorHelper(music.children),\n              _step;\n\n          try {\n            for (_iterator.s(); !(_step = _iterator.n()).done;) {\n              var child = _step.value;\n              if (child.tagName === 'STYLE') music.removeChild(child);\n            }\n          } catch (err) {\n            _iterator.e(err);\n          } finally {\n            _iterator.f();\n          }\n\n          music.insertAdjacentHTML('afterbegin', \"\\n          <style>\\n            #music:before {\\n              background-image:\\n                linear-gradient(rgba(0, 0, 0, 0),\\n                rgba(0, 0, 0, 0)),\\n                url('images/trackImage/\".concat(_this.trackList[callback.title], \".jpg');\\n            }\\n          </style>\\n        \"));\n        });\n      });\n    }\n    /** ナビバーのイベントを設定する */\n\n  }, {\n    key: \"setNavbarEvent\",\n    value: function setNavbarEvent() {\n      var menuBtn = document.getElementById('menu_btn');\n      var menuContent = document.getElementById('menu_content');\n\n      var switchActive = function switchActive() {\n        menuBtn.classList.toggle('active');\n        menuContent.classList.toggle('active');\n      };\n\n      menuBtn.addEventListener('click', function () {\n        return switchActive();\n      });\n\n      var _iterator2 = _createForOfIteratorHelper(document.getElementsByClassName('menu-item')),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var menuItem = _step2.value;\n          menuItem.addEventListener('click', function () {\n            return switchActive();\n          });\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }]);\n\n  return Top;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/script.js?");

/***/ }),

/***/ "./src/js/modules/top.js":
/*!*******************************!*\
  !*** ./src/js/modules/top.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [used] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Top\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Top = /*#__PURE__*/function () {\n  function Top() {\n    _classCallCheck(this, Top);\n\n    this.logo = \"\\n      <p>Ge</p>\\n      <p>tou</p>\\n      <p>bashi</p>\\n     \";\n  }\n  /** top を生成 */\n\n\n  _createClass(Top, [{\n    key: \"createTop\",\n    value: function createTop() {\n      var top = document.getElementById('top');\n      top.insertAdjacentHTML('afterbegin', \"\\n    <div class=\\\"contents-body\\\">\\n      <div class=\\\"logo\\\">\\n        \".concat(this.logo, \"\\n      </div>\\n    </div>\\n  \"));\n    }\n  }]);\n\n  return Top;\n}();\n\n\n\n//# sourceURL=webpack://music-gallery/./src/js/modules/top.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/aboutSection.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/aboutSection.css ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#about:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -2;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url('images/background-image02.jpg');\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/aboutSection.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/header.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/header.css ***!
  \******************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#menu_btn {\\r\\n  position: fixed;\\r\\n  top: 40px;\\r\\n  right: 30px;\\r\\n  margin-top: 0px;\\r\\n  z-index: 15;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#menu_btn .wrap {\\r\\n  display: inline-block;\\r\\n  position: absolute;\\r\\n  -webkit-transition: all .4s;\\r\\n  transition: all .4s;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n  width: 120px;\\r\\n  height: 80px;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n#menu_btn span {\\r\\n  display: inline-block;\\r\\n  -webkit-transition: all .4s;\\r\\n  transition: all .4s;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  box-sizing: border-box;\\r\\n  position: absolute;\\r\\n  height: 12px;\\r\\n  width: 120px;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n#menu_btn span:nth-child(1){\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n#menu_btn span:nth-child(2){\\r\\n  top: 30px;\\r\\n}\\r\\n\\r\\n#menu_btn span:nth-child(3){\\r\\n  top: 60px;\\r\\n}\\r\\n\\r\\n#menu_btn.active span:nth-of-type(1) {\\r\\n  -webkit-transform: translateY(55px) rotate(45deg);\\r\\n  transform: translateY(55px) rotate(45deg);\\r\\n  top: -20px;\\r\\n}\\r\\n\\r\\n#menu_btn.active span:nth-of-type(2) {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n#menu_btn.active span:nth-of-type(3) {\\r\\n  -webkit-transform: translateY(-5px) rotate(-45deg);\\r\\n  transform: translateY(-5px) rotate(-45deg);\\r\\n  top: 40px;\\r\\n}\\r\\n\\r\\n#menu_content .menu_bg {\\r\\n  background-color: rgba(0, 0, 0, .8);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n#menu_content {\\r\\n  -webkit-transition: all 1s;\\r\\n  transition: all 1s;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  visibility: hidden;\\r\\n  opacity: 0;\\r\\n  z-index: 14;\\r\\n  font-family: \\\"acumin-pro\\\", \\\"游ゴシック体\\\", \\\"Yu Gothic\\\", YuGothic, \\\"ヒラギノ角ゴ Pro W3\\\", \\\"Hiragino Kaku Gothic Pro\\\", \\\"メイリオ\\\", \\\"Meiryo\\\", \\\"MS Pゴシック\\\", \\\"MS P Gothic\\\", sans-serif;\\r\\n}\\r\\n\\r\\n#menu_content.active {\\r\\n  visibility: visible;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n#menu_content .menu_wrapper {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: table;\\r\\n  position: relative;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n#menu_content .menu_wrapper .inner {\\r\\n  display: table-cell;\\r\\n  vertical-align: middle;\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 15%;\\r\\n}\\r\\n\\r\\n#menu_content .menu_wrapper ul#menu {\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n#menu_content .menu_wrapper ul#menu li {\\r\\n  margin: 70px 0;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n#menu_content .menu_wrapper ul#menu li a {\\r\\n  display: inline-block;\\r\\n  color: #fff;\\r\\n  font-size: 35px;\\r\\n  text-decoration: none;\\r\\n  letter-spacing: 3px;\\r\\n  line-height: 1;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n/* mobile */\\r\\n@media screen and (max-width: 767px), (max-height: 400px) {\\r\\n  #menu_btn {\\r\\n    top: 20px;\\r\\n    right: 20px;\\r\\n  }\\r\\n\\r\\n  #menu_btn .wrap {\\r\\n    width: 50px;\\r\\n    height: 40px;\\r\\n  }\\r\\n\\r\\n  #menu_content .menu_wrapper ul#menu li a {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  #menu_btn span {\\r\\n    height: 6px;\\r\\n    width: 50px;\\r\\n  }\\r\\n\\r\\n  #menu_btn span:nth-child(2) {\\r\\n    top: 15px;\\r\\n  }\\r\\n\\r\\n  #menu_btn span:nth-child(3) {\\r\\n    top: 30px;\\r\\n  }\\r\\n\\r\\n  #menu_btn.active span:nth-of-type(1) {\\r\\n    -webkit-transform: translateY(15px) rotate(45deg);\\r\\n    transform: translateY(15px) rotate(45deg);\\r\\n    top: 0;\\r\\n  }\\r\\n\\r\\n  #menu_btn.active span:nth-of-type(3) {\\r\\n    -webkit-transform: translateY(-15px) rotate(-45deg);\\r\\n    transform: translateY(-15px) rotate(-45deg);\\r\\n    top: 30px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n  #menu_content .menu_wrapper ul#menu li {\\r\\n      margin: 60px 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-height: 400px) {\\r\\n  #menu_content .menu_wrapper ul#menu li {\\r\\n      margin: 30px 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/header.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/liveSection.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/liveSection.css ***!
  \***********************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#live:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -2;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url('images/background-image03.jpg');\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/liveSection.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/musicSection.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/musicSection.css ***!
  \************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#music:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  opacity: 1;\\r\\n  filter: brightness(100%);\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('./images/background-image01.jpg');\\r\\n}\\r\\n\\r\\n#music-body {\\r\\n  background-color: rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n#music-contents {\\r\\n  position: relative;\\r\\n  top: 50%;\\r\\n  max-width: 1280px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n#skip-previous, #skip-next {\\r\\n  position: absolute;\\r\\n  cursor: pointer;\\r\\n  bottom: 30%;\\r\\n  color: white;\\r\\n  font-size: 200px;\\r\\n}\\r\\n\\r\\n#skip-previous {\\r\\n  left: 0;\\r\\n}\\r\\n\\r\\n#skip-next {\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n/* mobile */\\r\\n@media screen and (max-width: 767px), (max-height: 400px) {\\r\\n  #skip-previous, #skip-next {\\r\\n    font-size: 60px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n  #music-contents {\\r\\n    top: 40%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-height: 400px) {\\r\\n  #skip-previous, #skip-next {\\r\\n    margin: 0px 80px;\\r\\n  }\\r\\n\\r\\n  #music-contents {\\r\\n    top: 30%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 320px) {\\r\\n  #skip-previous, #skip-next {\\r\\n    bottom: 40%;\\r\\n    font-size: 40px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/musicSection.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/top.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/top.css ***!
  \***************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"#top:before {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: -1;\\r\\n  opacity: 1;\\r\\n  filter: brightness(100%);\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('images/background-image01.jpg');\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  position: absolute;\\r\\n  word-break: break-word;\\r\\n  top: auto;\\r\\n  bottom: 10%;\\r\\n  left: 6%;\\r\\n  font-size: 10rem;\\r\\n  font-weight: 600;\\r\\n  line-height: 1.125;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 1023px) {\\r\\n  .logo {\\r\\n    top: auto;\\r\\n    bottom: 20%;\\r\\n    left: 6%;\\r\\n    right: auto;\\r\\n    font-size: 24vw;\\r\\n    font-size: 12vmax;\\r\\n  }\\r\\n\\r\\n  @media screen and (max-height: 500px) {\\r\\n    .logo {\\r\\n      bottom: 0;\\r\\n    }\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/top.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/style.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/style.css ***!
  \*********************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.id, \"blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Libre Baskerville', serif;\\r\\n}\\r\\n\\r\\niframe {\\r\\n  width: 500px;\\r\\n  height: 400px;\\r\\n}\\r\\n\\r\\n.contents-section {\\r\\n  display: flex;\\r\\n  align-items: stretch;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.contents-body {\\r\\n  box-sizing: inherit;\\r\\n  flex-grow: 1;\\r\\n  flex-shrink: 0;\\r\\n  padding: 3rem 1.5rem;\\r\\n}\\r\\n\\r\\n.contents-container {\\r\\n  position: absolute;\\r\\n  flex-grow: 1;\\r\\n  flex-shrink: 1;\\r\\n  text-align: center;\\r\\n  height: 80%;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n}\\r\\n\\r\\n.section-title {\\r\\n  position: absolute;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  top: 10%;\\r\\n  margin-bottom: 1.5rem;\\r\\n  font-size: 8rem;\\r\\n  font-weight: 600;\\r\\n  line-height: 1.125;\\r\\n  word-break: break-word;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.section-contents {\\r\\n  display: table;\\r\\n  position: relative;\\r\\n  letter-spacing: 2px;\\r\\n  line-height: 2;\\r\\n  text-align: left;\\r\\n  top: 50%;\\r\\n  width: 80%;\\r\\n  max-width: 800px;\\r\\n  margin: auto;\\r\\n  padding: 25px;\\r\\n  font-size: 15px;\\r\\n  color: white;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  font-family: \\\"Yu Gothic\\\";\\r\\n}\\r\\n\\r\\n.section-contents P {\\r\\n  margin: 20px;\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  display: table-cell;\\r\\n  padding: 15px 20px 15px 20px;\\r\\n}\\r\\n\\r\\n.row {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.row:before {\\r\\n  content: \\\"\\\";\\r\\n  width: 100%;\\r\\n  height: 1px;\\r\\n  position: absolute;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  background-color: rgba(255, 255, 255, .7);\\r\\n  opacity: 0.3;\\r\\n}\\r\\n\\r\\n/* mobile */\\r\\n@media screen and (max-width: 767px), (max-height: 400px) {\\r\\n  iframe {\\r\\n    transform: scale(1.1);\\r\\n    width: 250px;\\r\\n    height: 225px;\\r\\n  }\\r\\n\\r\\n  .section-contents {\\r\\n    top: 40%;\\r\\n    font-size: 18px;\\r\\n  }\\r\\n\\r\\n  .cell {\\r\\n    display: block;\\r\\n    padding: 5px 20px 5px 20px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 767px) {\\r\\n  .section-title {\\r\\n    font-size: 4rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-height: 400px) {\\r\\n  .section-title {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 320px) {\\r\\n  iframe {\\r\\n    transform: scale(1.1);\\r\\n    width: 225px;\\r\\n    height: 225px;\\r\\n  }\\r\\n\\r\\n  .section-title {\\r\\n    font-size: 3rem;\\r\\n  }\\r\\n\\r\\n  .section-contents {\\r\\n    top: 25%;\\r\\n  }\\r\\n\\r\\n  .cell {\\r\\n    display: block;\\r\\n    padding: 2px 20px 2px 20px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://music-gallery/./src/css/style.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://music-gallery/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/modules/aboutSection.css":
/*!******************************************!*\
  !*** ./src/css/modules/aboutSection.css ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./aboutSection.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/aboutSection.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/aboutSection.css?");

/***/ }),

/***/ "./src/css/modules/header.css":
/*!************************************!*\
  !*** ./src/css/modules/header.css ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./header.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/header.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/header.css?");

/***/ }),

/***/ "./src/css/modules/liveSection.css":
/*!*****************************************!*\
  !*** ./src/css/modules/liveSection.css ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./liveSection.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/liveSection.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/liveSection.css?");

/***/ }),

/***/ "./src/css/modules/musicSection.css":
/*!******************************************!*\
  !*** ./src/css/modules/musicSection.css ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./musicSection.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/musicSection.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/musicSection.css?");

/***/ }),

/***/ "./src/css/modules/top.css":
/*!*********************************!*\
  !*** ./src/css/modules/top.css ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./top.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/modules/top.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/modules/top.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__, module.id */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack://music-gallery/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://music-gallery/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! namespace exports */
/*! exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
eval("/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/js/modules/header.js\");\n/* harmony import */ var _modules_top__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/top */ \"./src/js/modules/top.js\");\n/* harmony import */ var _modules_musicSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/musicSection */ \"./src/js/modules/musicSection.js\");\n/* harmony import */ var _modules_aboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/aboutSection */ \"./src/js/modules/aboutSection.js\");\n/* harmony import */ var _modules_liveSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/liveSection */ \"./src/js/modules/liveSection.js\");\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/script */ \"./src/js/modules/script.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_modules_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/modules/header.css */ \"./src/css/modules/header.css\");\n/* harmony import */ var _css_modules_header_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_modules_header_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_modules_top_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/modules/top.css */ \"./src/css/modules/top.css\");\n/* harmony import */ var _css_modules_top_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_modules_top_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _css_modules_musicSection_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/modules/musicSection.css */ \"./src/css/modules/musicSection.css\");\n/* harmony import */ var _css_modules_musicSection_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_modules_musicSection_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _css_modules_aboutSection_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/modules/aboutSection.css */ \"./src/css/modules/aboutSection.css\");\n/* harmony import */ var _css_modules_aboutSection_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_modules_aboutSection_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _css_modules_liveSection_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../css/modules/liveSection.css */ \"./src/css/modules/liveSection.css\");\n/* harmony import */ var _css_modules_liveSection_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_modules_liveSection_css__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar header = new _modules_header__WEBPACK_IMPORTED_MODULE_0__.default();\nheader.createHeader();\nvar top = new _modules_top__WEBPACK_IMPORTED_MODULE_1__.default();\ntop.createTop();\nvar musicSection = new _modules_musicSection__WEBPACK_IMPORTED_MODULE_2__.default();\nmusicSection.createMusicSection();\nvar aboutSection = new _modules_aboutSection__WEBPACK_IMPORTED_MODULE_3__.default();\naboutSection.createAboutSection();\nvar liveSection = new _modules_liveSection__WEBPACK_IMPORTED_MODULE_4__.default();\nliveSection.createLiveSection();\nvar script = new _modules_script__WEBPACK_IMPORTED_MODULE_5__.default();\nscript.setNavbarEvent();\nscript.onScrollChangeBackGroundImage();\nscript.SCWidgetController();\n\n//# sourceURL=webpack://music-gallery/./src/js/index.js?");
})();

/******/ })()
;