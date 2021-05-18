(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Order_Checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      paymentProcessing: false
    };
  },
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.quantity;
      amount = amount / 100;
      return amount.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY"
      });
    },
    processPayment: function processPayment() {
      this.paymentProcessing = true; // fake delay

      var that = this;
      setTimeout(function () {
        that.$store.commit("setToOrder");
        that.$store.dispatch("clearCart");
        that.$router.push({
          name: "order.summary"
        });
      }, 2000);
    }
  },
  computed: {
    cart: function cart() {
      return this.$store.state.cart;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var amount = this.$store.state.cart.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString("tr-TR", {
        style: "currency",
        currency: "TRY"
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue":
/*!************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=b4c63204& */ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Checkout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!*******************************************************************************!*\
  !*** ./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_b4c63204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=template&id=b4c63204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Checkout.vue?vue&type=template&id=b4c63204& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm._l(_vm.cart, function(item, index) {
            return _c("tr", { key: item.id }, [
              _c("td", { domProps: { textContent: _vm._s(item.name) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(item.quantity) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(_vm.cartLineTotal(item)) }
              }),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.$store.commit("removeFromCart", index)
                      }
                    }
                  },
                  [_vm._v("Remove")]
                )
              ])
            ])
          }),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Toplam Tutar")]),
            _vm._v(" "),
            _c("td", { domProps: { textContent: _vm._s(_vm.cartQuantity) } }),
            _vm._v(" "),
            _c("td", { domProps: { textContent: _vm._s(_vm.cartTotal) } })
          ])
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-2 pl-0" }, [
      !_vm.paymentProcessing
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary",
              on: {
                click: function($event) {
                  return _vm.processPayment()
                }
              }
            },
            [_vm._v("Alışverişi Tamamla")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.paymentProcessing
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button", disabled: "" }
            },
            [
              _c("span", {
                staticClass: "spinner-border spinner-border-sm",
                attrs: { role: "status", "aria-hidden": "true" }
              }),
              _vm._v("\n      processing...\n    ")
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ürün adı")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Ürün adedi")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fiyat")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("İşlem")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", [
      _c("fieldset", { attrs: { disabled: "" } }, [
        _c("div", { staticClass: "form-group", attrs: { disabled: "" } }, [
          _c("label", { attrs: { for: "cardNumber" } }, [
            _vm._v("Kart numarası")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control col-md-4",
            attrs: {
              type: "text",
              id: "cardNumber",
              placeholder: "Kart numarası"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [
            _vm._v("Kart üzerindeki isim")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control col-md-4",
            attrs: {
              type: "text",
              id: "name",
              placeholder: "Kart üzerindeki isim"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "expirationDate" } }, [
            _vm._v("Son kullanma tarihi")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control col-md-4",
            attrs: {
              type: "text",
              id: "expirationDate",
              placeholder: "Son kullanma tarihi"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "cardVerificationCode" } }, [
            _vm._v("Güvenlik kodu")
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control col-md-4",
            attrs: {
              type: "text",
              id: "cardVerificationCode",
              placeholder: "Güvenlik kodu"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);