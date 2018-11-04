/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/App.js":
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Cryptocurrency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Cryptocurrency */ "./src/Cryptocurrency.js"
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var App =
          /*#__PURE__*/
          (function() {
            function App() {
              _classCallCheck(this, App);

              this.currentCurrency = document.querySelector(
                "#currentCurrency"
              ).innerText;
              this.selectIsOpened = false;
              this.ethereum = new _Cryptocurrency__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]("ETH");
              this.litecoin = new _Cryptocurrency__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]("LTC");
              this.bitcoin = new _Cryptocurrency__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]("BTC");
              this.handleSelect = this.handleSelect.bind(this);
              this.handleOptions = this.handleOptions.bind(this);
            }

            _createClass(App, [
              {
                key: "handleSelect",
                value: function handleSelect() {
                  var listStyle = this.selectIsOpened ? "none" : "block";
                  document.querySelector(
                    ".list__items"
                  ).style.display = listStyle;
                  this.selectIsOpened = !this.selectIsOpened;
                }
              },
              {
                key: "handleOptions",
                value: function handleOptions(e) {
                  var selectedCurrency = e.target.innerText;
                  e.target.innerText = this.currentCurrency;
                  this.currentCurrency = selectedCurrency;
                  document.querySelector(
                    "#currentCurrency"
                  ).innerText = this.currentCurrency;
                  this.render();
                }
              },
              {
                key: "init",
                value: function init() {
                  document
                    .querySelector(".list")
                    .addEventListener("click", this.handleSelect);
                  document
                    .querySelector(".list__items")
                    .addEventListener("click", this.handleOptions);
                  this.ethereum.init();
                  this.litecoin.init();
                  this.bitcoin.init();
                  this.render();
                }
              },
              {
                key: "render",
                value: function render() {
                  this.ethereum.update(this.currentCurrency);
                  this.litecoin.update(this.currentCurrency);
                  this.bitcoin.update(this.currentCurrency);
                }
              }
            ]);

            return App;
          })();

        /* harmony default export */ __webpack_exports__["default"] = App;

        /***/
      },

    /***/ "./src/Cryptocurrency.js":
      /*!*******************************!*\
  !*** ./src/Cryptocurrency.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        var Cryptocurrency =
          /*#__PURE__*/
          (function() {
            function Cryptocurrency(name) {
              _classCallCheck(this, Cryptocurrency);

              this.currentCurrency = "USD";
              this.currencySign = "$";
              this.name = name;
              this.toggle = "percent";
              this.data = {};
              this.handleToggle = this.handleToggle.bind(this);
            }

            _createClass(Cryptocurrency, [
              {
                key: "init",
                value: function init() {
                  document
                    .querySelector("#toggle".concat(this.name))
                    .addEventListener("click", this.handleToggle);
                }
              },
              {
                key: "handleToggle",
                value: function handleToggle() {
                  document
                    .querySelector("#buttonBack".concat(this.name))
                    .classList.toggle("toggle-button__back-layer_off");
                  document
                    .querySelector("#buttonFront".concat(this.name))
                    .classList.toggle("toggle-button__front-layer_off");
                  this.toggle = this.toggle === "percent" ? "price" : "percent";
                  this.render();
                }
              },
              {
                key: "update",
                value: function update(currentCurrency) {
                  this.currentCurrency = currentCurrency;
                  this.updateData();
                }
              },
              {
                key: "updateData",
                value: function updateData() {
                  var _this = this;

                  var endOfLink = this.name + this.currentCurrency;
                  fetch(
                    "https://apiv2.bitcoinaverage.com/indices/global/ticker/".concat(
                      endOfLink
                    )
                  )
                    .then(function(results) {
                      return results.json();
                    })
                    .then(function(data) {
                      _this.data = data;

                      _this.render();
                    })
                    .catch(function() {
                      alert("Something went wrong!");
                    });
                }
              },
              {
                key: "renderPrice",
                value: function renderPrice() {
                  switch (this.currentCurrency) {
                    case "USD":
                      this.currencySign = "$";
                      break;

                    case "EUR":
                      this.currencySign = "€";
                      break;

                    case "RUB":
                      this.currencySign = "₽";
                      break;

                    case "GBP":
                      this.currencySign = "£";
                      break;
                  }

                  document.querySelector(
                    "#price".concat(this.name)
                  ).innerText = ""
                    .concat(this.currencySign)
                    .concat(this.data.last.toFixed(2));
                }
              },
              {
                key: "renderTimeIntervalChange",
                value: function renderTimeIntervalChange(interval) {
                  var id = "#".concat(interval, "Change").concat(this.name);
                  var sign =
                    this.toggle === "percent" ? "%" : this.currencySign;
                  var timeIntervalChange = this.data.changes[this.toggle][
                    interval
                  ];

                  if (timeIntervalChange >= 0) {
                    timeIntervalChange = "+"
                      .concat(timeIntervalChange.toFixed(2), " ")
                      .concat(sign);
                    document
                      .querySelector(id)
                      .classList.add("changes-row__value_positive");
                  } else {
                    timeIntervalChange = ""
                      .concat(timeIntervalChange.toFixed(2), " ")
                      .concat(sign);
                    document
                      .querySelector(id)
                      .classList.add("changes-row__value_negative");
                  }

                  document.querySelector(
                    "#".concat(interval, "Change").concat(this.name)
                  ).innerText = timeIntervalChange;
                }
              },
              {
                key: "render",
                value: function render() {
                  this.renderPrice();
                  this.renderTimeIntervalChange("hour");
                  this.renderTimeIntervalChange("day");
                  this.renderTimeIntervalChange("week");
                  this.renderTimeIntervalChange("month");
                }
              }
            ]);

            return Cryptocurrency;
          })();

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = Cryptocurrency;

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../styles/style.scss */ "./styles/style.scss"
        );
        /* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./App */ "./src/App.js"
        );

        var page = new _App__WEBPACK_IMPORTED_MODULE_1__["default"]();
        page.init();

        /***/
      },

    /***/ "./styles/style.scss":
      /*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/
      }

    /******/
  }
);
//# sourceMappingURL=boundle.js.map
