!(function(n) {
  var r = {};
  function i(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = n),
    (i.c = r),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 1));
})([
  function(e, t, n) {},
  function(e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var c = (function() {
      function t(e) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.currentCurrency = "USD"),
          (this.currencySign = "$"),
          (this.name = e),
          (this.toggle = "percent"),
          (this.data = {}),
          (this.handleToggle = this.handleToggle.bind(this));
      }
      var e, n, r;
      return (
        (e = t),
        (n = [
          {
            key: "init",
            value: function() {
              document
                .querySelector("#toggle".concat(this.name))
                .addEventListener("click", this.handleToggle);
            }
          },
          {
            key: "handleToggle",
            value: function() {
              document
                .querySelector("#buttonBack".concat(this.name))
                .classList.toggle("toggle-button__back-layer_off"),
                document
                  .querySelector("#buttonFront".concat(this.name))
                  .classList.toggle("toggle-button__front-layer_off"),
                (this.toggle = "percent" === this.toggle ? "price" : "percent"),
                this.render();
            }
          },
          {
            key: "update",
            value: function(e) {
              (this.currentCurrency = e), this.updateData();
            }
          },
          {
            key: "updateData",
            value: function() {
              var t = this,
                e = this.name + this.currentCurrency;
              fetch(
                "https://apiv2.bitcoinaverage.com/indices/global/ticker/".concat(
                  e
                )
              )
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  (t.data = e), t.render();
                })
                .catch(function() {
                  console.log("Something went wrong!");
                });
            }
          },
          {
            key: "renderPrice",
            value: function() {
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
            value: function(e) {
              var t = "#".concat(e, "Change").concat(this.name),
                n = "percent" === this.toggle ? "%" : this.currencySign,
                r = this.data.changes[this.toggle][e];
              0 <= r
                ? ((r = "+".concat(r.toFixed(2), " ").concat(n)),
                  document
                    .querySelector(t)
                    .classList.add("changes-row__value_positive"))
                : ((r = "".concat(r.toFixed(2), " ").concat(n)),
                  document
                    .querySelector(t)
                    .classList.add("changes-row__value_negative")),
                (document.querySelector(
                  "#".concat(e, "Change").concat(this.name)
                ).innerText = r);
            }
          },
          {
            key: "render",
            value: function() {
              this.renderPrice(),
                this.renderTimeIntervalChange("hour"),
                this.renderTimeIntervalChange("day"),
                this.renderTimeIntervalChange("week"),
                this.renderTimeIntervalChange("month");
            }
          }
        ]) && i(e.prototype, n),
        r && i(e, r),
        t
      );
    })();
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    new ((function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.currentCurrency = document.querySelector(
            "#currentCurrency"
          ).innerText),
          (this.selectIsOpened = !1),
          (this.ethereum = new c("ETH")),
          (this.litecoin = new c("LTC")),
          (this.bitcoin = new c("BTC")),
          (this.handleSelect = this.handleSelect.bind(this)),
          (this.handleOptions = this.handleOptions.bind(this));
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "handleSelect",
            value: function() {
              var e = this.selectIsOpened ? "none" : "block";
              (document.querySelector(".list__items").style.display = e),
                (this.selectIsOpened = !this.selectIsOpened);
            }
          },
          {
            key: "handleOptions",
            value: function(e) {
              var t = e.target.innerText;
              (e.target.innerText = this.currentCurrency),
                (this.currentCurrency = t),
                (document.querySelector(
                  "#currentCurrency"
                ).innerText = this.currentCurrency),
                this.render();
            }
          },
          {
            key: "init",
            value: function() {
              document
                .querySelector(".list")
                .addEventListener("click", this.handleSelect),
                document
                  .querySelector(".list__items")
                  .addEventListener("click", this.handleOptions),
                this.ethereum.init(),
                this.litecoin.init(),
                this.bitcoin.init(),
                this.render();
            }
          },
          {
            key: "render",
            value: function() {
              this.ethereum.update(this.currentCurrency),
                this.litecoin.update(this.currentCurrency),
                this.bitcoin.update(this.currentCurrency);
            }
          }
        ]) && o(t.prototype, n),
        r && o(t, r),
        e
      );
    })())().init();
  }
]);
