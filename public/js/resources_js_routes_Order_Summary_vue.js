(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_routes_Order_Summary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      this.$store.dispatch("clearCart");
      this.$router.push({
        name: "order.summary"
      });
    }
  },
  computed: {
    order: function order() {
      return this.$store.state.order;
    },
    cartQuantity: function cartQuantity() {
      return this.$store.state.order.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    },
    cartTotal: function cartTotal() {
      var amount = this.$store.state.order.reduce(function (acc, item) {
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

/***/ "./resources/js/routes/Order/Summary.vue":
/*!***********************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=3f7e591e& */ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/routes/Order/Summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!******************************************************************************!*\
  !*** ./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_3f7e591e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=template&id=3f7e591e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/routes/Order/Summary.vue?vue&type=template&id=3f7e591e& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "min-height": "83vh" } }, [
    _c("h1", { staticClass: "py-2 my-24px;" }, [
      _vm._v("Alışverişiniz için Teşekkür Ederiz")
    ]),
    _vm._v(" "),
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm._l(_vm.order, function(item) {
            return _c("tr", { key: item.id }, [
              _c("td", { domProps: { textContent: _vm._s(item.name) } }),
              _vm._v(" "),
              _c("td", { domProps: { textContent: _vm._s(item.quantity) } }),
              _vm._v(" "),
              _c("td", {
                domProps: { textContent: _vm._s(_vm.cartLineTotal(item)) }
              })
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Fiyat")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);