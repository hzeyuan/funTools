require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pagesComm/img2char/img2char"],{

/***/ 155:
/*!***************************************************************************************************!*\
  !*** /Users/hdheart/Documents/GitHub/funTools/main.js?{"page":"pagesComm%2Fimg2char%2Fimg2char"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _img2char = _interopRequireDefault(__webpack_require__(/*! ./pagesComm/img2char/img2char.vue */ 156));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_img2char.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 156:
/*!********************************************************************************!*\
  !*** /Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img2char.vue?vue&type=template&id=474f195c&scoped=true& */ 157);
/* harmony import */ var _img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img2char.vue?vue&type=script&lang=js& */ 159);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img2char.vue?vue&type=style&index=0&id=474f195c&scoped=true&lang=css& */ 161);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "474f195c",
  null,
  false,
  _img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pagesComm/img2char/img2char.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/*!***************************************************************************************************************************!*\
  !*** /Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=template&id=474f195c&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./img2char.vue?vue&type=template&id=474f195c&scoped=true& */ 158);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_template_id_474f195c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 158:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=template&id=474f195c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 159:
/*!*********************************************************************************************************!*\
  !*** /Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./img2char.vue?vue&type=script&lang=js& */ 160);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 160:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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
var _default =
{
  onLoad: function onLoad() {var _this = this;
    setTimeout(function () {_this.artText = "EXXXXXXXXXXXXXXXXXCCCCCCC[[[C[[[[[[[[[[[[[[[[[[[((((((/////////////////?///????/?/////(//(/(//////////(/(//////((([XXEEEEEEEEEEEOEEEEEEOOOOOOOOEEEEEEEEXEEEEXXXXXXCC[[(([(((((((((/(((((((((((((([[[[[[[[[[[CCCC[CCCCC[[CCCCCCCC[CC[[[[C[[[[[[[[[[[[[[[[[[[[[[[[CCCC[CCC\nXXXXXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[[[[[[[[[[(((((((///////////??/////??/////?///(/////((////////////(((////(CXEEEEEEEOOOOOOOOOOEEEEEOOOOOOOOOOOOOOOOOOOEEEEEEEEEEEEXXCC(((((((((((/((((((((((([(([[[[([[[[[[[[[[[[[[[[[[[CCC[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[C[CCC\nXXXXXXXXXXXXXXXXXCCCCCCC[[[[[[[[[[[[[[[[[[[[[[[(((((////////////??/////????????/////////////////////////(/((CXEEEEEEEEOOOO$$$$O$$$OOOOOOOOOOOO$$$OO$$$$$OOOOOOEEEEEEEEEEEEEXC[/((((//((/(/((/((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[([[[[[[[[[[[[CC\nXXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[[[[[[(([(([(((/////////////????//??????????//////////////////////////(CXEEEEEEEEOO$$$$$$$$$$$OOOOOOOOOO(OOO$$OOOOOOOO$$$$$$OOOOOOOEEEEEEEEX[[[(///////(//((((((((((((((([[[[[[[[[[[[[[[[[[[[[[(([[[((((((((((((((((((((([((([[[[[[[[[\nXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[([([[[[((((((((((///////???//?????????????????????/////////////////([XEEEEOOOOOO$$$$$$$#$$#$$$$$$$$OO$OOO$$$$OOOOOO$OOOOOOOO$$$OOOOOOOEEEEEEEEXC[(/////////(((((/(((((((((([([[([((((([(((((([[((((((((((((((((((((/(///(((((((([[([[[\nXXXXXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[((((((((((((/(//(///////????????????????????????????????????/??//[XEEEEOOOOO$$OCX$$$$$$$###$###$$$$$$$$O$$$$$OOO$$$$$$$OO$OO$$OOOOOOOOOOOEEEEEEXXCC(///////(/////(((((((((((([((((((((((((((((((((((((((/((//////////////////(((((((((\nXXXXXXXXXXXCCCCCCCCCCC[[[[[[[[[([[(((((((((((////////////??????????===??=======????????????????/([XEEEEOOOO$$$$$OCX$$$#$#########$##$$$$$$$$$$OOO$$$$#$$O$$$OOOOOOOOOOOOOOOOOOEEEEEEXCC[////////////(////((//(((((((((((((////((((//////////////////////////////(((//(((\nXXXXXXXXXXCCCCCCCC[[[[[[[[[[[[([[[(((((((((//////?///?/?????????=================????????????/([XEEEEOOO$$$OO$$$$##################$$$$O$$$OOOOO##$$$O$$#$$$OOOO$OOO$$OOOOOO$OOOEEEEEXXCC(/??///////////((////((((/??////////////////////?/?/??????????????????///////(/\nXXXXXXXCCCCCCCCCCC[[[[[[[([[(([[(='^(((/////////?????????????====================?======????/[XEOOOOO$$$$$$$$######################$EE$$OOO$$$$$#$$$$OO$$$$$$$$$O$$$$$$$$OOO$$OOOEEEEEEXXC[/????????////((//((((((?__?////////////??//??????????????????????????///?////\nXXXXCCCCCCCCCCCCC[[[[[[[[[[((((((((((((////////?????????==============================^~^?/(XOOOOOO$$$$$$####WWWWWWWWW###$W#####$##$$$$$$OO$$$O$###$$$OO$$$$$$$$$$$$$$$$$$$$$O$$$$OOOOOEEEXC(/?????///////////(////////////??????????????????????=====?=??====??///??///\nCXXCCCCCCCCCCCC[[[[[[[[[[(([(((((((/((/////////?????????=====^^==^=^==================^.^/COOOOOO$$#####$WW###WWWW##WW$$$############$$O$$#$$$$###$$$$$O$$OOO$$$$$$$O$$$$$$$$$$$O#$OOOEEOEEEEC/????????//////////////?//???????????????????=??=================???????/?\nCCCCCCCCCCCCCC[[[[[[[[([((((((((((////////?/???????=?==========^^^^^=====^^==^^====^^==//EOOOOO$#######WWWWW#W###WWWW#$##$#############$##$$$$##$$$$$$OOOOOO$$$$$$$OO$$######$$$O$##$EEEEEOOOEE[(//????////??//???????????????????=====?=============^^^========???=????\nCCCCCCCCCC[[[[[[[[((((((((((((((((/////?/??????===?=======^^^^^^^^^^===^^~^==^^^^^^^^?/[OOO$$$###WWWWW@WW@@@WWW#WWWW#$#@@WWW#####W#$########$$##$O$$$OOOOOOOO$$$O$$$$$#$#W###$$#$O$##$OEEEEEOOOOEXXCC[[[([(((//???????????====================^^^^^^^^^^^^^^^^^======??=\nCCCCCCC[[[[[[[[[[((((((((((((((((//////???????===========^^^^^^^^^^^^^^^~^^^^^^^^^^^?/COO$$$$WW#WWW@@@@@@@@@@WW#WW##$#W@WWWW#W##WWW####W#####$WW$$$$$OOOOOO$OOO$$$$$$##W##W#W####$O####OEEEOEOOOOOEEEC[(////(((/????=??===?================^^^^^^^^^^^~^~^~~~~^^===^==?=\nCC[[C[[[[[[[[[([(((((((((////////////?????===?===========^^^^~^~~^^^^^~~^^^^^^^^~^^/?XOO$#$WWWWW@@@@@@@@@@@WWW@@W$#$#@W@WWWWWWWWWWW###WW###W##W#$$$$$OOOOOOOOOO$$$$$$######WW#WW##$$####OOEEOOOOOOOOOOEXC[/?==?((/===========^==^==^^^^^^^^^^^~~~~~~~~~~_~~~~~~^^==^====\n[[[[[[[[[[((((((((//?//(///////////?????==============^^^^^^^^~~^~~^^^^^^^^^^^^^^^/=XOO##$#WWWWW@@@@@@@@@WWW@@W#$$##@@@@@@WWWW@W#WWW#W@W####$WW$$$$$$$$OOOO$$$$$$$$#$$###WW#WWWWW####WW##OOEOOOOOO$OOOOOEEXC(??/[[?=^=^^^^^^^^^^^^^^^^^^^^^^~~~~~_____________~~^^^~^===\n[[[[[[[[[[[(((((((?===?//////////??????========^^=====^^^^~~~~~~~~^^~^~^^^^^^~~~~/=COO##$#WWWW@@@@@@@@@@@W@W###$#OEW@@@@WW##WW#WWWWWWW@####W#WW##$$$$$$OO$$$$$$#$$$$####WWWW##WW@#W###WWW#OOOOO$$$$$$OOOOECXXX[[[C(=^^^^^~~~~~~~~~~~~~~~~~~~~~~~________.______~^^^~~^^^\n[[[[[[[[((((((((((/?==?////?//?/?????=========^^===^==^^^~~^~~~~~~~~^^^^^^~^^~~~?=COO####WWWW@W@@@@@@@@WW@W@W##$EEO@@@@WWWW#W@##WWWW#@W#W#WW#@WW##$$$$$$$$$$$$#$######W##WWWW#WW@@W#W#WWWW$$OOO$#$$$$$OOOOEEEEEEEXC?_._~^~~~___~___~~~_~_~~______..............~~^^_~^^^\n[[[[[[[(((((((((((////////???????????======^=^^^^=^^^=^~~~~~~~~~~~~~~^^~~~~~~~~^/[OO####WW##WW@@@@@@@@W@@@WW#$OEEE#W@@@@WWWW@@W##WW##@@W##WWW@@WWW##$$$$$#$###########WW$($WWW##W@@WWW##WW$#$OO$##$O$$$O$$OOOOOOOEX/. .~~~~_____.___________.....'''''''''''''.__~~__~~~\n(([[((((((((((/////////????????????=======^=^^^^^^^^=^^^~~~~~~~~~~~~_~~~_~~~_~_(?OO#W#O$OO###W@@@@@@WWWW@WWW$EEEXE$WWWWWWW#WWWWWWWW#W@@W#W@WWW@WW#WW#$$$$###$###WWWWWWWWW###W@W$#W@W$WW#WWW##OOO$#$O$$$$##$$$$$$$OEX/^~~__.''......._._.....'''''''''''''''''''.___.__~~\n(((((((((((((/////////???????????==========^^^^^^^^^^^^~~~~~~~~_~_~~~~~~~_____=?EE$#W##$E##WW@@@WWW####@WWW$EEXCCO$WWWWW#####W###W##W@@W#W@WWW@WW###WW####$####WWWWWWWW#WW@W#W@WOW@@$W@#WWW$##OOO##$$$$$####$$$$$$OEE[=~_'   '''.........''''''''''            '___.._~_\n((((((((((((/////////???????????===========^^^^^^^^^^^~~~_~~~_~_______________([OO##W$W#W#W@@@@W$O$$$#WW##OEXXCC[O$WWW####WW#W######W@@W#WWWWWWWWWWW############WWWWWWWWWW#WW#WW#$WWWWWWWWW$W#O$$$W$$$$##WWW#$$$$$$$OEX(^'  '''''''''''''''''''''              '...'..__\n(((((((((((//////////?????????=========^^^^^^~^^^^~~~~~~~~_______________..._^(EE###W#WW@#@@@@WW$$$$#W##$EXXCCC[XE$W##$$##W##W######@@@##WWW#WWW@WWW$##W###W####$###$#WWWWWWWWW####@@WW@WWW#W#$$$O#######WW#$$$OO$$$$$OEC=_'''''''''''''''''''' '              '...'..__\n((((((((/(/////////??????=?==??========^^^^^^~~~^~..~~~_~___~_____.__........?XEOW#W##W@WW@@@W#$$$$#W##$EXCCC[[[EX$W$#$$$#W$#W$#####W@@WWW@W$WW@@WWWW####$$$#WW#$#WWWWWWWW@@WWWW##W#@@W@@$$$##$##$$WWWWWWW#$$$OO$$##$##$OX?~.'''''''''''''''''                 '''.''...\n((((((((////////??????????========~~^^^^^^~~^~~^^~~~~~____________...........(XE##WWWW@W#@@@W$$##$###$$XCCCC[[[[EXOW##$E$#W##W$###EXE@$WWWW#OW#W@W#WW###$$$$$###WWWWWW@@@WWWWWW@W##WW@@@@EEEXO###$$#@WW##$O$$$O$$##W#WWW#OX?^_'''''''''..'''''                 ''''''.._\n(((((//////////??????????=======^^_.~^^^^^^^~~~~^~~~~~_________.___........._CCOWWWWW@@W#@WW#####W##$$XCCCC[[[[[EXO####$#WW##W#####$W@WW#W##OW##W@W#W#OE$$$$###$WWWWWWW@WW@@@WW#WWWW###@@EXXXEWWW#$$WW#$$$$O$$$$#WWWWWWWW#$X/^~.'.'''..'''''' '''               '.'''...\n/(((/////////??????????======^^^^=^^^^^^^^^~~~~~~~~~~_______...._..___......~XC$WWWW@@W@W#WW#$##W$$$$XCCCC[[[[[[EXE#WWW##W#$#W######WWWW#WW$O####WWWWW###########WWWW@@@@WWWWWWWWWW$X[(EW$XXXXWWWOEE#WWWWWW$$$$W#W#WWWWWWW#$OC?^_''''..'''''  '                 '''''...\n/(///////////????????=======^^^^=^^^^^^~~~~~~~~~~~~~~________......._..____.=CX$#W#W@@WW##W#$$$#OEOOECCCCCC[[[[[EXE#WW#W#W########$$WWWW#WW$O#####WWWWWW#####WW##WWW@@WWWWWWWWWW@@EXXC(CCOXCCCXXC[[[OWWWWWW###WWW#$#WWWWWWW##$X?^_'''''''                      ''''''...\n///////////?/??????========^^^^^^^^^^~~~~~~~~~~~~~_____...........'''...._..?(X$##W@@@WWW$OO$#$EXXOOEO$$#####$$$##$#WWWWWWW#######$$WWW###WOO$$$#####WWWW###WWWW##WWWWWWWW###WWW@WECC[[[[[CC[[[CCCCX$@WWWWWWWWWWWW##WWWWWW#WW#O[^~_'                           ''''''...\n//////////?????????======^^^^^^^^^^^^~~~~~~~~~~~~_____...........'...'......//X$$##W@@@WEOO$$EXXXXOEEOEEEEEXXXXCX[E#WW#W###W###$$$$$WWW###WOO$$$##$#####WW###W#####WWWW#WWWWWWWWWW$E[((((?=(/[[CCCXO#@WWWWWWWWWWWWWWW###WWWWW#$E?~~.'                           '''''...\n//////////????????======^^^^^^^^^^^^~^~~~~~~_________._.........'.'''''.''..?/C$$$$WWW$$EE$OXXXXXXOXCCXXXXXXXCCCX[X$WW#WW######$$$$$WWWW###OEOOO#$#$#######$O$#OOO$#WWW########W@W###O/~__~?/(([CCX$WWWWWWWWWW@WWWWWW$OEO#WWW##O(~.^.''        '' '            ''''''...\n///////??????????======^^^^^^^^^^^^^~~~~~~~~__________............'''.'''''.=?[$$E#@#EOEOOEXXXCCCXECCCCCXXXXXXXXXCX$WW$@W#OO$#$$$$$$#WWW##$OEOOO$$##$######W$OO$$OEEO$###$$###$$#W###~''''~^?(=?//(EWW##W@@@@W@@WWWWW$EXE$WWWWW$C=__^.''''''''''''''''          '''''...\n///////?????????=^^^^==^^^^^^^^^^^^^~~~~_~~______.___.....'.......''.'''''''~//EO$W#$$O$OEEXXCCCCXXCC[CCXXXEEE$EEEX#WW$W#$##$$$$$$$$##WW##$EEOO$O$####$#$#####OOO$OEEEO#$$$##C[[[EO([.    '.=(/._^=($##WWWWWW@WWWWWWWW###WWWWWW$E?~_=.......''''.''''  ''       '''''...\n///?/??????????=^~~^=====^^^^^^^^~^~~~~__~___________.............''''''''''./?XE$#W@@W#OEEXXCCCCCCCCCCX$W@@WW@@W@###W#W#$###$$$$$OO$#W##$$OEOOOO$O#$$#$$$$$###$OOOOOEEO$$$$$(((((CC(=.'   .CEEC/=?[O##WW@WWW#$$#WWWWWWWWWWWWWW#O(~_~........'''.''''' ''''    ''''''...\n???//??????????==^=======^^^^^^^^~~~~____~__________..........'''''''''''''''_(COOO#W$O#W#EXCCCCC[CCCXXEEO$$#WWWWW@@##WWW$W$$$OOO$$O$###$OOOEEOOOOO$#$O$$$$$#$###$$$OOOEEO$##OC[[(([((??^~_?XEEO$$OOO$##WWW#$$#OOOO##WWWW###W###O[=~...........''''''''''''''''''''''...\n??///////???????==========^_.~^^^~~~_~~__~_______..._..........''.''''''''''''~[EEXE$EEOOOECCCC[[[[[[[[CCC[[XOOOO$$EE$WW@@@#$$$OOO$OO$$$OEEEOEEEOOEOO$OO$$OOO$$$OOO$######$#E[[C[([[[(([[[XXOOOO$$$O$#WWWWW#$OO##$#O$#WW#W$####$OC=~_.........'''''''''''''''''''''''''.\n?///??//??????=??=========^^~^^^^^^~~~___________..............''''''''''''''''~COEEOEXEEECCCC[[[[[[[[[[((//(EEEEXEXEO$O$W#OOOEOOOOOOO$$OEEEEEOEEEEEEOOO$$$OEEOOOOOO$####W#$O/?[CCC[[CC[/[[[COOOO$$#WW@@WWWW#$OO$WW#O####W#$###OEC=~___......''''''''''''''''''''''''''.\n??/?//?????????=??=========^^^^^^^^~~~___~______......''''....'''''''''''' ''''_=[EEOOXXXCCCCC[[[[[[[[[[[((//[CXXCCXEEOOEEEOEEEEOOO$OOO$OEEEEEEOOEEEECXXOO$$OXXEOOO$$$$#####$$OEXC(((C$C[[C[[XOOO$##WW@@@#WWWW#O$$##$####WW##$OEX/^~_.........'''''''''''''''''''''''''.\n??/?/????????????=?=========~^^^^^^~~___________......'''......''''''''''''''''_^~XO$#EXCCCCC[[[[[[[[[[[[[[[CXXEXXXXXXXXXEEOEEEEEEOO$OOOOEEEEXXXXXEE(/[XEEO$$$OXEEO$$$$$$$$$####W[~~~C##$ECCCCXE$##WWW@@WW$WWWWW$O$###W#WW#$$OOE[=^_.......'.''''''''''''''''''''''''...\n???//?????????????==========^^^^^^^~~__________...........'...'''''''''''''''''..~=EXXCCCCCCC[[[[[[[[[[[[[[[CC[C[[[((XXC[XOOEEEEEEEEOOOOOEEXXC[//??X##E[XXEEO$$$$$$OOO$$$$$###WW$X=(/######EEXXE$##WWW@WWWWOWW##WW#$#$###$$OOOEX?^__...........'''''''''''''''''''''....\n??/?????????????=============^^^^^^^~~__.._............'..''..'''''''''  '''''''^(CCCCCCCCCCC[[[[[[[[[[[[[[[[[((((((/[X[/XOOEEEEEEEEE$OOEEEXXC[/???XXEEEEEEEEEEOO$##$$$OO$$$$$$$$#$ECWWW###E$$O$###WWWWWWWW##OEE###$$$$$O$OOOEX/^__.'''.'.''''''''''''''''''''''''''....\n?/???==============^=======^^^^^^^^~~~__.....................'.'''''''''''''''?XXCCCCCCCCCCCC[[[[[[[[[[[[[([(((((((//(X(/(EOEEEEEEEEEEOOEEEECC(??/[XXXC[XOOEEEOEOOEEEOOOOO$####WWWWXX#WW#$$XXO$##W#WWWWWWWW$$OC$W##$OOOOO$OOEC?~...    ''''''.''''''''''''  '..''''''...\n/???===^^^^====^^^=^^^^==^^^^^^^^^^~~__._.....................'.''''''''''''''/EXXXXCCCCCCCCC[[[[[[[[[[[[[(((((((((///C(//COEEEEEEEEEEEOOEEEC[[?=?[([[X[/[XEO$$$$$$$$$$#W##$$##WWWEXXO#$$$XCCXO#WW$WWWWWWWWW$WWW##$OEOOOOOEX(=_....'  ''''.''''''''''''''' ''''''''''...\n???===^^~^^^^^~^^^^^^~~^^~~~^^^^^^^~~_._.._.........................'.'''''''''?XXXXXXCCCCCC[[[[[[[[[[[[[[(((((((((///[(//(EOEEEXEEEEEEEXEEEC(C?==CCCCC(?/CXXXXO$$$#WW#$$$####WW$XCCXO$$##$OC[XW#W#WWWWWWWWWW###$OOOEOOOEXC?~............'.'''..'''''''''''''.''''''''..\n??===^^^^^^^^^^^^^^^~~~____~~~~^^^^~___.__.......................''.''''''''''''./XXXXXXCCCC[[[[[[[[[[[[[[(((((((((///([///COEEEXEEEEEEE[[EEC([(/[CCC[/(//[XXXEOO$$###WWW##$$$$OXCCE$$######$$$#W###WWWWWWWW#$OOOEEEEEEEX(=_...........'''''''''''''''''''''....'''.....\n====^^^^^~^^^^^~~~~~____...._~~~~~~~~______...........................''.'''''''''~XXXCXCCCC[[[[[[[[[[[[[[(((((((((////[///(EEEEXXEEEEEO[CXXEC[C(([[[(//[/?(XO$$$#WWW#WWWWW#$$$OEO$O########$WWW###$##$$$$##$OEEEEEEEEX[/^_...''........''''''.'''''''''''..............\n^===^^^^^^~~^~~~~~_____.....___~^~~~_______..' ...._.....................''''''''''(XXXCCCCCCC[[[[[[[[[[[[(((((((((////((///XEEEEEEEEEEE[XC/XE[[[//??////(/[$$$##WWWWWWWWWW#####$$EX#######EE#WW#$$$$$$OOOOOOOEEEEEEXC/=~__....__..._........'.''''''''''.........._....\n^=^^^^^^^^~~~~~~~~_____.......__~~~~~______.................._...........''''''''''([XXCCCCCCC[[[[[[[[[[[[(((((((((/////(///CEEEEEEEEEEECX/?/[XC[/??????/[O$#$###WWWWWWWWW##$$$$$OXXECO###OXXE###$$$$$OOEEEEEEEEEEXC/=~_._...'._.__.._...........''''''''''..._____.____\n^^^=^^^~~~~~~~~______._........__~~~_____''___._..__._......__...........''''''''''?[XCCCCCCCC[[[[[[[[[[[[(((((((((/////((//(CEEEEEEEEEEX(????(XC[????/[XO$O$$##WWWWWWWWW##$$$$$$XC[[EO$##XEEEE###$$$OEEEEEEEEEEX[?=~__..._..._.__.___.._._.....'''''''     .___________\n^^^^^^^^^^~~~~___~___._._...'..__~~~~____..__..._.._..._._..__......'...'''''''''''=CCCCCCCCCC[[[[[[[[[[[[((((((((((/////(//(CEEEEEEEEEX[?????//CC[/([XXXEEOO$#WW#########$$$$OOXC[[OO########$OO$O$OEEEEEEEEXC(=^^_______._..__._____..........'''''''     '._.________\n^^^^^^^^^~~~~~_~~________..' '._~~~~~_________..._______.__.__..........'''''''''''.XXCCCCCCCCC[[[[[[[[[[[[((((((((((/////(//CXEEEEEEEE[/??/([C[[CXXXXXXXXXEOO#####$####$$$$$OOOEEOX$$$$##$$##$OOOOEXXCXC[[[/=^~~^.__.......__._....___.........''''''''  ''.'..._._____\n^^^^^~^^^~~~~~__~_____~__...._~~~~~~_~~______._._.__.______.._.........'''''''''''''?XEOEEEEXXCCC[[[[[[[[[[(((((((((((////((/CXEEECCEEX?//([CCCCCCCXXXCCCXXEEEE$$$$$$##$OOOOOOOOOOOXOOOO$EXEO#OOOOEC/??/(?^~__~^~_........_._...................''''''   ''''''''...___~\n^^^^^~~~~~~~~______~~~~~~_~~~~~~^~~~~~~______________.________..........'''''''''''''[XXEEEEEEXXXC[[[[[[[[[[((((((((((/////([XXXXX(CEEX(/([CCCCCCCCCCCXCCXXXEEEEO$$$$#$OOOOOOOOOOOE[EEEEEEEEEEOOEEX(=~___~=^^=~__........_.___.................'''''''     ''''''...__~~\n^^^^^^~^^~~~____~~^^^=^^^^^=^~~^^^^~~~~_~______________.._____.........''''''''''''''~[XXXXC[CCC[[[[[[[[[[[[[((((((((((/////[XXXXC(XCCXX([CCCCCCCCCCCCCCXXXXEEEEO$$$$$$$OOOO$$$OOOX[[[([CXEXXXEEEX(=_..._._______._.________...'''''''..........'''''''    '''''..._~~^^\n^^^^^^^^~~~~____~=============^^^^^~~~~~_________~____________............''''''''''''?[CXXXCCCC[[[[[[[[[[[[[[((((((((((((/((XEXX(X[/(CXCCCCCCXXCCCCCCCXXXXXEEEOOOOOOO$$$$$$$OOOECCC(=^^^==[(([C(^_.....____________..______.'''      '''.......'''''' '   ''''...__~^^=\n^^^^^^^^^^^^~^^^=??==?========^^^^^~~~~~~~__~~____________~____...._....'.''''''''''''~/CCXCCCCCCCC[[[[[[[[[[[[[(((((//((((([XEECX[([[CXXCCXXXCC[[[[[CCCXXXEEEEEEEOEOOOOOOOOOEX((((?^...._==^^^^.  '.._.___________....._....''      ''''.....''''''  '   '''''..__~~^==\n^^^^^^^^^^===^===?????======^=^^^^~^^~~~____~~_~~~~~~______............'.'.''''''''''''/[XCCCCCCCCCCCC[[[[[[[[[[[(((((((((([CXEE[(([[CCCCXXCC[(((((([[[CCCXXEEEEEEEEEEEOOOOOE[==/?=...._~=?~~__....___~__~____~___.''''''''''        ''''''..'''''      '''''...___~~^^=\n^^^^^^^~^^^^^^^======?===^^^^=^^^^^^^~~~~_______~__~~~~~~~_._...............'''''''''''?[XCCCCCCCCCCCCC[[[[[[[[[[[(((((((([[(XXCC[[CCCCCCCC[(((((((([[[CCCCXEEEEXXXXXXXXEEX[?~_.''_.._=?/^=____~___~_.___._______.'                   ''''''''''       ' '''...___~~~~^^\n=^^^^~~~~^~^~^^^^^^=====^^^^^==^^^^^~~~~__~~_~~~_~~____~~~~_..............'.'''''''''''=CCCCCCCCCCCCCCCC[[[[[[[[[[[[[[[[[[[[[EC[XXCCCCCCCC[[((((((((([[[CCCXXEX[[[[CCXC[(?^^^^^^^~=/====~^^____~__________~_~____.'                      '''''         ''''...___~~~^^^^\n^^^^^^^^^^~^^^~^^^^^^^^^^^^^^===^^^^^~~~~~~___~~~~~____~~~__.............'.''''''''''''~CCCCCCCCCCCCCCCCCCCCC[[[[[[[[[[[CC[CXXCCCCCCCCCCC[([[(((((((([[[[CCCCCCCCC(//?===^_..._.._(C[^__~=~~~~~~~~_.__~~___~~_____'                                   '''''..__~~~~^^^^^\n^^^^^^^^^^^^^^~^^~^^^^^^^~^^^===^^^^^^~~~~~~~~____~~__~_~_' '_.._...........''''''''''''(XCCCCCCCCCCCCCCCCCCCCCCCCCCCCCXXCCXXCCCCCCCCCC[[(((((((((((([[[[CCCC[^^^_......._^==^^=^/CCC^_~=~_~~~_~~~_.~_~~____~~~~~_.'                                 ''''...___~~~^^^^==\n^^^^^^^^^^^^^^~^^^^^^^^^^^^====^==^^~~~~~~~~~__~__~~____^~.'..__.._...........''''''''''.?CXXXXXXXXXXXXCCCCC[[//[XXXXXXXXXXXCCCCCCCCCC[[[((((((((((((([[[CCCC(~...'.....__..~~~~_CC(/(^^~__~~~~~~._~__~_~_~~_~~~_..'                                 '''...__~~~^^^^====\n^=^^^^^^^^^^^^^^^^^^^^^^^^^======^^^^^~^~~~~~~~~~~~~~_~~~^____..._............'''''''''''''.____=_.'''.''_?//?~.~?CXXXXXXXXXCCCCCCCCC[[[[[((((((((((((([[C[CC(~........._.______(C[^^~~~~~~__~~~~____~~____~_~~__.''                                '''..__~~^^^^=======\n^^^=^^^^^^^^^^^^^^^^^^^^^^=======^^^^^^^^~~~~_~~~~~_~~~~~~_______......'......''''.''''''''''''_.''''''.''.=//?=^^^[XXXXXXXCCCCCCCCC[[[[[[((((((((((((([[[[[[(~..........._____^[?__~~_._~~.~~__~_~~_~~~_~~~~~~___''                              '''''.__~~^===========\n===^^^===^^^^=========~^=========^^^^^^^^^~~~~~~~~~~~~~~^~~~________._.''...'.......'........._.'''''''..''.~??=_~^=CXXXXXXCCCCCCCCC[[[[[((((((((((((([[[[[[[[^__....______________~~~_..~~~~~~~~~~~__~__~~~~~~~__..'                 ''''     ' '''''.__~~^==??????????\n==================??=?^=?==?=?=====^^^^^^^^~^~^~^~~~~~~^^~~~~~~__________..' '..............._....'''''._.'''.~~~.'.(XXXXXXCCCCCCCC[[[[[(((((((((((((((([[[[[[=_______~_____~~~__~[C[^~~~~~~~__~_~~~~~~_~~~~~~~__...'                ''''''    '''''..__~~^==???????????\n=======???=====?????????????=======^^=^^^^^^^^^^^^^^^^~~^~~~~~~~~~~________.........._._.______.....''.....'''''^=~.=XXXXXXCCCCCCCC[[[[[((((((((((((((/(([[[[[?~~____~~___~~~~~~~(XCC[~~~~~~~~_~~~~_~~~~~~~^~~__..'''''   ''  '' ''''''''''   '''''...__~^^==?//////?/?/\n??=====???????????//?//???????=========^=^^^^^^^^^^^^~^^^^~~~~~~~~~~__________...__._.._________............''''._^==XXXXXXCCCCCCCC[[[[(((((((((((((((((((/([[(^~_~__~~~~~~~~~~~=XX(=C(~~~~~~~~^~~~^^^^~~^^^~~~__    .''''''''''''.'''''''''''''''..._~_~===??//////////\n========?////////////?//??????==========~..._^^^^^^^^^^^^^^^~~~~~~~~~_________._________~____~~___...........'''''..~CXXXXXCCCCCCC[[[[((((((((((((((((((((([[[[?~~~~~_~~~~~~~~~~[/^~~^^~~~~~~~~^^^^^^^^^^^^^^^^^_    ._..'.'''.'.''..''''''''''''..__~~~^==??///////////\n=======??///?///////////????????=======~..''.~^^^^^^^^^^^^^^^~~~~~~_~~____________________~_______..........'''''''.'(CXXXXCCCCCC[[[[((((((/////////((((((([[[C(^~~~~_~~~~~~~~~~~~~~~~~~~~~_~~^^^^^^^=^^^====^^^~_.._~__.'.''''...''..'''''''''.'.___~~~^==??//////////(\n=======??????////////////??????========^_.'._^^^^^^^^^^==^^^^^~~^~~~~~~___________________~_~~____._._.......''''''''?CCCXXXCCCC[[[(((((//////////////(((((([[[[?~~~~~~~~~~~~.~~~~~~~~^~~~~~~~^^^=^^^^^^^^^==^~~~~^^^~_.''''''.....'..''''''''...._~__~^====??///(((((((\n???=?=?=?===??//(///////???===============^^====^^===^===^^^^^^^~~~~~~~_~~_~_~~_______~~~~__~~~___.___.._.....'''''''~[CCCXXCCC[[[((((/////////////////((((([[[C[=~~~~~~~..~~_~~~~~~~~~~~~~^~^^^^^^===^_._~^^^~~~~^^~~_..........''....''''......___~~~^^====??////(((((\n(//???????===?///((////??==^======^^^^^^===========^======^=^^^~~~~~~~~~~~_~~~~~~_~_~~~~~~~~~~~_________......'''''''~(C[CCCCC[[((((///////////////////(((((([[[C(^~~~~~~__~~~_~~~~~~~~~~~~~~~^^^^===^^~__~^=^^~~~~~^~_........''''''.'........____~~~^^^^==??///=^(((([\n((/??=????===??//(((///??=^^====^~_____~^=================^^^^^~~~~~~~~~~~~~~~~~~~~~_~~~~~~~~~~~~~~_____...'.'''''''.=/[(((((///??//////////////////////(((((([[CC/^~~~~~~~~~~~~~~~^~~~~~~____~~~^^^^==^^^^====^^^~~^~~.._____.'  '........________~~~^^====??///?/((([[\n(/???????=?=?=??//////==?=====^~~_~____~^^~..^=?==========^^^^^^^^^^~~^~~~~~~~~~~~~~~~~^^~~~~~~__~______.....''_^?([[C[[(((//??==^~~~__~~^^=?////////////((((([[[CC/====^^~~~~~~~~~~~^~~~___..___~~^^=======?========^^^~~~~~~_'''.....____~____~~~~^^^^===???///(((([[[\n(//////?????????//////??????=^^^~~__~~~^^=^_~=====?=?=======^^^^^^~^^^~^^~^~~~^^~~~~~~~^^^^^^^~~~~~~~___...__^[EO$$$##$$$$OOEEXXC(/?=^~________~^??/((////((((([[[CC(((((/?==^^^~~~~~~^~~~__......_~~^^^=====?????????====^^^^~~~~~_____~_~~~_~~~~^^^====??//////((([[[[\n((////////??????//////???????==^^^^__~~~~^==???????=??=======^^^^^^^~^^^^^^^^^^^^^^~~~~~^^^^^^^^^~~~~~___~?[E#@@@W@WWWW##$$$$OOOOOOOEXC[/=~_______~~~^?//(((((([[[CCC[[([[[[[(//?=^^^^~~~~_.''''...._~~^^===========??/???===^^^^^^~~~~~~^^^^^^^^^====?????////(([[[[[[C\n(///////////???///(((///=_=??===^^^~~~~^^^=???????????????====^^^^^^~~~~~~^^^^^^^^^^^^^^^^^^^^^^^^~~~_~~?X#WW@@@WWW#WWWWW##$$$$OOOOOOOOOOOEX[/=~__~~~~~~^^=/(([[[[CCCCC[(([CCCCCC[(/?=^^~~_' '''''' '._~~~~^^========??/????=======^^^^^^==========???//////(((([[[[[CCC\n/((((((((((/////////////?======^^=^^^^^^^=???==???????????=?=====^^^~____~^^^^^^^~==^^^^^^^^^^=^^^~~~^?XW@@WWWW#W#####W###$$$$$$OOOOOOOOOO$OOOEXC/?^~~~^^^^===?/([CCCCCCC(([CCCXXXXXC[/?=^~'      ''''.__~~~^^========????????=============?======???//(((((((([[[[[CCCC\n/(((((([(((((/////(//////???=======^==^===?????????????????=?====^^~_____~~^^^~' '^=====^=^^=====^^^/X$W#WWW##WW####WW###$$$OOOOO$$OOOOOOOOOOO$$OOEXC(?=^======???//([[CCCC[[CCCXXEXXXXC[(?^_.''  '''.._~~~~^^========???//?????===?===??????==?????//([[[([[[[[[CCCCCCC\n((((([[[[[(((((/((((/////???===============^????///?/?//???=======^~___~~~~^==~.'.^==~_====^======(XO#WWWWWW###WWWWWW###$$OOOOOOOOOOOOOO$$$OOOOOOOOOOOEXC(?======??????/([[CCCCXXXXXXXXXXXCC[(?=~_...._~~~^~^^^^=====???////???????????????/???/?///((([[[[[[[[[CCCCCCCX\n((([[[[[[[[[[[[((((((((((//????============???////(////??????????==^~~~_~~~^^=======^=====^^====(X$$#WWW@WWW##WWWWWWW##$$$OOOOOOOOOOOOOOO$$$$$$OOOOOOO$OOOEXC(/?====???????/([CCXXXXXXXXXXXXXXXCC[/?=^^^^^^^^=====????////////???/???//?/////////((((([[[[[[[CCCCCCXXXXX\n[[[[CCCCCC[[[CCCCC[CCC[[((///???====????=???//////(///???=????=?===^^~~~~~^====?=========^^==?/CO$####WWWWWWWW@@WWWWW#$$$$$$$$OOOOOOOOO$OO$$$$$OO$OOOOOOOO$$OOEX[(/???????????/([CXXXXXXXXXXXXXXXXCCC[(/?=======?????///((((/(////////////(((//(((((([[[[[[[CCCCCXXXXXXX\n[CCCCCCCCC[CCCCCCCCCCCC[((((////????????/?////(((((///?====??======^^^~^^^^===??============/CEO$##$$####WWWWWW@WWWWWW###$$$$$$OOOOOOOOOOO$$$$$$$$$$$OOOOOOO$$$$OEXC[(/??????????/([CXXXXXXXXXXXXXXXXXXCC[(/???????//((([[[[[[((((((((((((((/((((([[[[[CCCCCCCCCXXXXXXXX\nCCCCCCCCCCCCCXXC?CCCCC[[(((((((//?///////((((((((/////??===??========^^^^^===??=????=====?/[XOO$$$#####W#WW##WWW@W@@@@WW###$$$$$OOOOOOOOOOO$$$$$$$$$$$$$$OOOOO$$$$$OEEXC(//????///((([CCXXXXXXXXXXXXXXXXXXXC[[(/(((((([[[CCCCCCCC[[[[(((([([([[[[[[[[[CCCCCCCCXXXXXXXXXX\nCCCCCCCCCCCXXXXX(CCCC[[[((((((((/(((((((((([[((((//??//???????????==========??????????/(CXEEOOOOO$$$########WWWW@W@@WWWW#####$$$$$$OOOOOOOOOOO$$$$$$OO$$O$$$$$O$$$$$$$OOEXC(//////(((([[[[CCXXXXEEXXXXXXXXXXXXXCCXXCCCCCCCCCCCXCCCCCC[[[[[[[[[[[[[C[CCCCCCCCCXXXXXXXXXEE\n[CCCCCCCCXXXXXXXXXCC[[[[[[[((((([[[[[[((//(([(((////////???????????=======????????//(CXEEEEXXXXEO$$$$$####WWWWWWWWW@@WW#WWW####$$$$$$OOOOOOOOOO$$O$OOOO$OO$$$$$$$$$$$$$##$$OEXC[[((([[[[[[[[[CCCXXXXXXXXXXXXEEEEOOOEXXCXCCCXXXXXXXXCCCCCCC[C[CCCCCCCCCXCXXXXXXXXXXEEEEEE\n[CCCCCCCCCCXCCXXXXCC[[[[[[[[(((/([[C[[(//(((((((/(((((//?????//???????????????///(CXEEEEOEXC[([CE$$$#####WWWW#WWWW@WWWWWWW#####$$$$$$$$$$$OO$$OOOOOOOOOOOOO$$#$#$##$$$$#W#W###$OEEEXXXXXXXXXXXXXEEEEEOOOOO$$$$$$#$OEXXXXXXCXCXXXXXXXXXCCCCCCCCCCCCCCCCXXXXXXXXXXEEEEEEEE\nCCCCCCCCCCCCCCXXXXCC[[CCC[[[[[[([[CCCC[((((((((((((((((///?///??????????=????/([XEEOOOO$$OXCCCCXO$#######WWWWWWW#WWWWWWWW#####W###$$$$$$$$$$$OOO$OOOOOOOOO$$$$$$#$$#####W####WW##$$$OOOOOOOOOOOO$$OO$WW#W##WW####$OEXXXXCXXXXXXXXXXXXXXXCCCCXXCCXXXXXXXXXXXXXXEEEEEEEEEE\nCCCCCCCCCCCCCCXXXXXXXXXXCC[[[[[[[[CCCCC[((((((=(((((((/////////////???/????/(CXEOOOO$$$$##$OOOO$$$#######W##W######WWW#######WW########$$$$$$$$$$$OOOOEO$$O$$OO$#################$$#$$$$$O$$$$###$OEX$WWWWWW#W###$OEXXXXXXXXXXXXXXXXXCXXXCCCXXXXXXXXXXXXXXXEEEEEEEEEEEEE\nCCCXCXCXXXXXXXXXXXXXXXCCCCCC[[[C[CCCCC[[[[[[[[[((((([((((((////////////////[XEEOOO$O$$######$$$$$##########$OOOO$######$#$X$##########$#$$$$$$$$$$$$$OOO$$$$$$$$###WWWW#$##WW#####W#############W#$$$#WWWWW#W####OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEE\nCXXXXXXXXXXXXXXXXXXXCXCCCCCCCC[CC[CCC[[[[[[[[[[[[[[[([((((((((((/(/(///(([XEEOOOOO$$$#######$$$$$###$$$###$EXXXEE$OE$######$###$######OO$$$$$$$######$$$$##$$$$#$####W#W###W###$####WWWW####$##WWWWWWWWW@W######$OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEE\nCXXXXXXXXXXXXXXXXXXXXXXXXCCXCCCCCCCC[CCC[[[[[[[[[[[[[[[[[[[[[(((((((((([XEEEOOO$$$#########$$$$$$$####$$$$$OEXXXXEXEE$####$#####W####$#$####$###W##############$####W########$$$$$####WWWW###WWWW##W@W####W###$$OEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEE\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCC[CC[[[[[[(/[[[[[[[((([[[XEEEEOOOO$$$#######$$$$$$$$$$$###$OEEEEEXXEEEEEE##$#$########$##$O#WW#W##WW##W#####W#WW#W##W#$$##$##$$$#$$O$#$#W#W#W$##W##WWW#W#WW###$$$$OEEXXXXXXXXXXC[XXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEE\nXXXEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCC[C[[[[[C[/?[[[[[[[CXEEOOOOO$$$###W#####$$$$$$$OOOO$$$$OEEEEEEEEEEEE$$###$##W#####$$$$###$#WWW####WW####WWWW##W##W#$###$$OOO$#$####WWW######W##########$#$$$OOOEXXXXXXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEO\nXEEEEXXXXXXXXXEEXXXXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCC[CCCC[[C[C[[CXEEEOOOOO$$$$$#####$$$$$$O$OOEEE$$$$$$OOOEEEEEE$$#####$$####W#$##$###$$$###W####WWWWWWWWW####W#W#$####OOO$###$###W#W####W#######$#####$$OOOOEEXXXXXXXXXXXXXXXXXXXEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEO\nXXEEEXXXXXXEEEEEEEEXEEXEEXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCCCCCCCCXXEEOOOOO$$$$$######$$O$O$OOOEEEEOOOO$$$$$$OEEEEO$$$###################$$$EXE$######W#WWWWW#WWWW###$##$$$$$########WW#W#########$$$$#$$$OOOOOOEEXXXXXXXXXXXXEXXEEEEEEEEEEEEEEEEEEOEEEEEEEEEEOEOOOOOEOOO\nXXEEEXXXXXXEEEEEEEEEEEEEEEEXXEXXXXXXXXXXXXXXXXXXXCCCCCCCCCCCCCCCXEEEOOOOO$$$$$$####$$$$OOOOOOEEEEEOOOO$OO$$$$O$$O$$$$$$#$$$#########$$$##$$OEE$#$$##WWWW#WW###WWW##W###O$$$##WW###$$############$$$$$$OOOOOOOOOEXXXXEEXXXXXXEEEEEEEEEEEEEEEEEEEEEOOEEEEOOOOOOOOOOOOOOOOO\nXXXEEXXXXXEEEEEEEEEEEEEEEEEEEEEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXCCXXEEEOOOOO$$$OO$$O$$$$$$$OOOOOOOOOOOOOOOOOOOO$$$$$$$$$$$$##$$$###$$$$OOEE$##$$$$$#$$###W##WW###W#W##$$$$####W##WW###$###$#####$$##$$$$$$$$$O$$O$$$EXEEEEEEEEXXXEEEEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOOOOOOOOO\nXXXEEXXXXXXEEEEEEEEEEEEEEEEEEEEEXXXXXXXCCCCXXXXXXXXXXXXXXXXXXXXEEEEOOOO$$$$$$$$$$$$$$$$OOOOEEEEOOOOOOOOO$$O$$$$$$$$$$$$$$$$$$$$$$$OOOEEEO$$$$$##$$$###$OO$#W#######$$#######W#####$$$$$$$$$$#$#$$$OOEEXCXEE$$O$$$EEEEEEEEEEEXEEXEEEEEEEEEEEEEEEEEEOOOOOOOOOOOOOOOOOOOOOO";


































































































    }, 50);
  },
  data: function data() {
    return {
      imgList: [],
      modalName: null,
      index: -1,
      artText: '',
      imgName: '',
      fontSize: 2.4,
      windowHeight: this.windowHeight,
      windowWidth: this.windowWidth };

  },
  methods: {
    uploadImg: function uploadImg() {var _this2 = this;
      uni.uploadFile({
        url: 'https://wngj.hzeyuan.cn/api/v1/img2Text', //仅为示例，非真实的接口地址
        filePath: this.imgList[0],
        name: 'file',
        formData: {
          'user': 'test' },

        success: function success(uploadFileRes) {
          var res = JSON.parse(uploadFileRes.data);
          _this2.artText = res.data;
          console.log(res);
        },
        fail: function fail(err) {
          console.log(err);
        } });

    },
    ChooseImage: function ChooseImage() {var _this3 = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], //从相册选择
        success: function success(res) {
          if (_this3.imgList.length != 0) {
            _this3.imgList = _this3.imgList.concat(res.tempFilePaths);
          } else {
            _this3.imgList = res.tempFilePaths;
          }
        } });

    },
    //预览图片
    ViewImage: function ViewImage(e) {
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url });

    },
    //删除图片
    DelImg: function DelImg(e) {var _this4 = this;
      uni.showModal({
        title: '删除照片',
        content: '确定要删除这张照片吗？',
        cancelText: '取消',
        confirmText: '确定',
        success: function success(res) {
          if (res.confirm) {
            _this4.imgList.splice(e.currentTarget.dataset.index, 1);
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 161:
/*!*****************************************************************************************************************************************!*\
  !*** /Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=style&index=0&id=474f195c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./img2char.vue?vue&type=style&index=0&id=474f195c&scoped=true&lang=css& */ 162);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_img2char_vue_vue_type_style_index_0_id_474f195c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hdheart/Documents/GitHub/funTools/pagesComm/img2char/img2char.vue?vue&type=style&index=0&id=474f195c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[155,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesComm/img2char/img2char.js.map