(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stitchwill-home"],{

/***/ "09O7":
/*!*************************************************!*\
  !*** ./libs/home/src/lib/+state/home.facade.ts ***!
  \*************************************************/
/*! exports provided: HomeFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFacade", function() { return HomeFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _home_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.selectors */ "ZGVP");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.actions */ "Fi4X");






class HomeFacade {
    constructor(store) {
        this.store = store;
        this.home$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_2__["homeQuery"].getHome);
        this.tags$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_2__["homeQuery"].getTags);
    }
    loadTags() {
        this.store.dispatch(_home_actions__WEBPACK_IMPORTED_MODULE_3__["loadTags"]());
    }
}
HomeFacade.ɵfac = function HomeFacade_Factory(t) { return new (t || HomeFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
HomeFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeFacade, factory: HomeFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "1jZ3":
/*!*******************************************!*\
  !*** ./libs/home/src/lib/home.service.ts ***!
  \*******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/api */ "A47K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class HomeService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getTags() {
        return this.apiService.get('/tags');
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "3jty":
/*!**************************************************************************!*\
  !*** ./libs/home/src/lib/designer-product/designer-product.component.ts ***!
  \**************************************************************************/
/*! exports provided: DesignerProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerProductComponent", function() { return DesignerProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/product"]; };
const _c1 = function () { return { exact: true }; };
class DesignerProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
DesignerProductComponent.ɵfac = function DesignerProductComponent_Factory(t) { return new (t || DesignerProductComponent)(); };
DesignerProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesignerProductComponent, selectors: [["stitchwill-designer-product"]], decls: 47, vars: 4, consts: [[1, "newsfeed", "bg-white"], [1, "header-section", "d-flex"], [1, "left-cab"], [1, "avatar", "mr-0"], ["href", "#", 1, "profile-detail-bttn"], ["src", "assets/images/user_1.jpg", "alt", "image", 1, "rounded-circle"], [2, "color", "blue"], [1, "right-cab", "text-right", 2, "font-size", "larger", "font-weight", "bold"], [1, "content-section", "pt-2", "pb-2"], [1, "post-media"], ["src", "assets/images/post_1.jpg", "alt", "post", "routerLinkActive", "active", 1, "img-responsive", 3, "routerLink", "routerLinkActiveOptions"], [1, "footer-section"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mr-3"], ["href", "#", 1, "emoji-bttn"], [1, "ti-heart", "text-red"], [1, "emoji-wrap"], [1, "emojis", "list-inline", "mb-0"], [1, "emoji", "list-inline-item"], [1, "em", "em---1"], [1, "em", "em-angry"], [1, "em", "em-anguished"], [1, "em", "em-astonished"], [1, "em", "em-blush"], [1, "em", "em-clap"], [1, "em", "em-cry"], [1, "em", "em-full_moon_with_face"], [1, "list-inline-item"], ["href", "/comment/"], [1, "ti-comment-alt"], [1, "list-inline-item", "float-right"], ["href", "#", "data-actions", ".my-actions", 1, "actions-open"], [1, "ti-shopping-cart"]], template: function DesignerProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Anish Ray");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u20B9 3569/- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1124");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "77");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "56");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNpZ25lci1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignerProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stitchwill-designer-product',
                templateUrl: './designer-product.component.html',
                styleUrls: ['./designer-product.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DmbK":
/*!************************************************************!*\
  !*** ./libs/home/src/lib/tags-list/tags-list.component.ts ***!
  \************************************************************/
/*! exports provided: TagsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListComponent", function() { return TagsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TagsListComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsListComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tag_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setListTag.emit(tag_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class TagsListComponent {
    constructor() {
        this.setListTag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
TagsListComponent.ɵfac = function TagsListComponent_Factory(t) { return new (t || TagsListComponent)(); };
TagsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsListComponent, selectors: [["app-tags-list"]], inputs: { tags: "tags" }, outputs: { setListTag: "setListTag" }, decls: 4, vars: 1, consts: [[1, "tag-list"], ["class", "tag-pill tag-default", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag-pill", "tag-default", 3, "click"]], template: function TagsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Popular Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TagsListComponent_a_3_Template, 2, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWdzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags-list',
                templateUrl: './tags-list.component.html',
                styleUrls: ['./tags-list.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], setListTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Fi4X":
/*!**************************************************!*\
  !*** ./libs/home/src/lib/+state/home.actions.ts ***!
  \**************************************************/
/*! exports provided: loadTags, loadTagsSuccess, loadTagsFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTags", function() { return loadTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTagsSuccess", function() { return loadTagsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTagsFail", function() { return loadTagsFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS');
const loadTagsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadTagsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[home] LOAD_TAGS_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "GXy1":
/*!********************************!*\
  !*** ./libs/home/src/index.ts ***!
  \********************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/home.module */ "QpK0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _lib_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]; });




/***/ }),

/***/ "I6fe":
/*!**************************************************!*\
  !*** ./libs/home/src/lib/+state/home.reducer.ts ***!
  \**************************************************/
/*! exports provided: homeFeatureKey, homeInitialState, homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeFeatureKey", function() { return homeFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeInitialState", function() { return homeInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeReducer", function() { return homeReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.actions */ "Fi4X");


const homeFeatureKey = 'home';
const homeInitialState = {
    tags: [],
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(homeInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadTagsSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { tags: action.tags }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_home_actions__WEBPACK_IMPORTED_MODULE_1__["loadTagsFail"], (state, action) => (Object.assign(Object.assign({}, state), { tags: [] }))));
function homeReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "QpK0":
/*!******************************************!*\
  !*** ./libs/home/src/lib/home.module.ts ***!
  \******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_home_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/home.effects */ "XREl");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/home.facade */ "09O7");
/* harmony import */ var _state_home_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/home.reducer */ "I6fe");
/* harmony import */ var _home_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-resolver.service */ "SvAZ");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "jndO");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.service */ "1jZ3");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tags-list/tags-list.component */ "DmbK");
/* harmony import */ var _designer_product_designer_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./designer-product/designer-product.component */ "3jty");
/* harmony import */ var _fabric_product_fabric_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fabric-product/fabric-product.component */ "s9Lt");
// import { ArticleListModule } from '@stitchwill/article-list';


















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [_state_home_effects__WEBPACK_IMPORTED_MODULE_5__["HomeEffects"], _home_resolver_service__WEBPACK_IMPORTED_MODULE_8__["HomeResolverService"], _home_service__WEBPACK_IMPORTED_MODULE_10__["HomeService"], _state_home_facade__WEBPACK_IMPORTED_MODULE_6__["HomeFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            // ArticleListModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    pathMatch: 'full',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    resolve: { HomeResolverService: _home_resolver_service__WEBPACK_IMPORTED_MODULE_8__["HomeResolverService"] },
                },
            ]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeFeatureKey"], _state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeReducer"], {
                initialState: _state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_home_effects__WEBPACK_IMPORTED_MODULE_5__["HomeEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_11__["TagsListComponent"], _designer_product_designer_product_component__WEBPACK_IMPORTED_MODULE_12__["DesignerProductComponent"], _fabric_product_fabric_product_component__WEBPACK_IMPORTED_MODULE_13__["FabricProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    // ArticleListModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            pathMatch: 'full',
                            component: _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                            resolve: { HomeResolverService: _home_resolver_service__WEBPACK_IMPORTED_MODULE_8__["HomeResolverService"] },
                        },
                    ]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeFeatureKey"], _state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeReducer"], {
                        initialState: _state_home_reducer__WEBPACK_IMPORTED_MODULE_7__["homeInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_home_effects__WEBPACK_IMPORTED_MODULE_5__["HomeEffects"]]),
                ],
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_11__["TagsListComponent"], _designer_product_designer_product_component__WEBPACK_IMPORTED_MODULE_12__["DesignerProductComponent"], _fabric_product_fabric_product_component__WEBPACK_IMPORTED_MODULE_13__["FabricProductComponent"]],
                providers: [_state_home_effects__WEBPACK_IMPORTED_MODULE_5__["HomeEffects"], _home_resolver_service__WEBPACK_IMPORTED_MODULE_8__["HomeResolverService"], _home_service__WEBPACK_IMPORTED_MODULE_10__["HomeService"], _state_home_facade__WEBPACK_IMPORTED_MODULE_6__["HomeFacade"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "SvAZ":
/*!****************************************************!*\
  !*** ./libs/home/src/lib/home-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: HomeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolverService", function() { return HomeResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/home.facade */ "09O7");





class HomeResolverService {
    constructor(facade) {
        this.facade = facade;
    }
    resolve(route, state) {
        this.facade.loadTags();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}
HomeResolverService.ɵfac = function HomeResolverService_Factory(t) { return new (t || HomeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_home_facade__WEBPACK_IMPORTED_MODULE_2__["HomeFacade"])); };
HomeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeResolverService, factory: HomeResolverService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _state_home_facade__WEBPACK_IMPORTED_MODULE_2__["HomeFacade"] }]; }, null); })();


/***/ }),

/***/ "XREl":
/*!**************************************************!*\
  !*** ./libs/home/src/lib/+state/home.effects.ts ***!
  \**************************************************/
/*! exports provided: HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return HomeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "1jZ3");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.actions */ "Fi4X");









class HomeEffects {
    constructor(actions$, homeService) {
        this.actions$ = actions$;
        this.homeService = homeService;
        this.loadTags$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTags"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.homeService.getTags().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(results => _home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTagsSuccess"]({ tags: results.tags })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_home_actions__WEBPACK_IMPORTED_MODULE_5__["loadTagsFail"](error)))))));
    }
}
HomeEffects.ɵfac = function HomeEffects_Factory(t) { return new (t || HomeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
HomeEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeEffects, factory: HomeEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "ZGVP":
/*!****************************************************!*\
  !*** ./libs/home/src/lib/+state/home.selectors.ts ***!
  \****************************************************/
/*! exports provided: getHome, getTags, homeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeQuery", function() { return homeQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _home_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.reducer */ "I6fe");


const getHome = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_home_reducer__WEBPACK_IMPORTED_MODULE_1__["homeFeatureKey"]);
const getTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHome, (state) => state.tags);
const homeQuery = {
    getTags,
    getHome,
};


/***/ }),

/***/ "jndO":
/*!*********************************************!*\
  !*** ./libs/home/src/lib/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/home.facade */ "09O7");
/* harmony import */ var _designer_product_designer_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./designer-product/designer-product.component */ "3jty");
/* harmony import */ var _fabric_product_fabric_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabric-product/fabric-product.component */ "s9Lt");




// import * as fromArticleList from '@stitchwill/article-list';
// import { ArticleListConfig } from '@stitchwill/article-list';
// import { articleListInitialState, ArticleListFacade } from '@stitchwill/article-list';








class HomeComponent {
    constructor(facade, router, 
    // private articleListFacade: ArticleListFacade,
    authFacade) {
        this.facade = facade;
        this.router = router;
        this.authFacade = authFacade;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.authFacade.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(isLoggedIn => {
            this.isAuthenticated = isLoggedIn;
            // this.getArticles();
        });
        // this.listConfig$ = this.articleListFacade.listConfig$;
        this.tags$ = this.facade.tags$;
    }
    // setListTo(type: string = 'ALL') {
    //   this.articleListFacade.setListConfig(<ArticleListConfig>{
    //     ...articleListInitialState.listConfig,
    //     type,
    //   });
    // }
    // getArticles() {
    //   if (this.isAuthenticated) {
    //     this.setListTo('FEED');
    //   } else {
    //     this.setListTo('ALL');
    //   }
    // }
    // setListTag(tag: string) {
    //   this.articleListFacade.setListConfig(<ArticleListConfig>{
    //     ...articleListInitialState.listConfig,
    //     filters: {
    //       ...articleListInitialState.listConfig.filters,
    //       tag,
    //     },
    //   });
    // }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_home_facade__WEBPACK_IMPORTED_MODULE_5__["HomeFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "page", "explore-root", "page-current"], [1, "main-content"], [1, "app-body"], [1, "row"], [1, "col-sm-12", "newsfeed-post"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "stitchwill-designer-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "stitchwill-fabric-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_designer_product_designer_product_component__WEBPACK_IMPORTED_MODULE_6__["DesignerProductComponent"], _fabric_product_fabric_product_component__WEBPACK_IMPORTED_MODULE_7__["FabricProductComponent"]], styles: [".main-content[_ngcontent-%COMP%] {\n  order: 1;\n  position: relative;\n  height: calc(100vh - 60px);\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gIG9yZGVyOiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuIl19 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _state_home_facade__WEBPACK_IMPORTED_MODULE_5__["HomeFacade"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "s9Lt":
/*!**********************************************************************!*\
  !*** ./libs/home/src/lib/fabric-product/fabric-product.component.ts ***!
  \**********************************************************************/
/*! exports provided: FabricProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricProductComponent", function() { return FabricProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FabricProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
FabricProductComponent.ɵfac = function FabricProductComponent_Factory(t) { return new (t || FabricProductComponent)(); };
FabricProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FabricProductComponent, selectors: [["stitchwill-fabric-product"]], decls: 65, vars: 0, consts: [[1, "newsfeed", "bg-white"], [1, "header-section", "d-flex"], [1, "left-cab"], [1, "avatar", "mr-0"], ["href", "#", 1, "profile-detail-bttn"], ["src", "assets/images/user_2.jpg", "alt", "image", 1, "rounded-circle"], [2, "color", "blue"], [1, "right-cab", "text-right", 2, "font-size", "larger", "font-weight", "bold"], [1, "content-section", "pt-2", "pb-2"], [1, "mb-3", "mt-1"], [1, "post-gallery", "mb-2"], [1, "post-gallery-large"], ["href", "/newsfeed-post/"], ["src", "assets/images/post_2.jpg", "alt", "post", 1, "img-responsive"], [1, "post-gallery-small", "mb-2"], ["src", "assets/images/post_3.jpg", "alt", "post", 1, "img-responsive"], ["src", "assets/images/post_4.jpg", "alt", "post", 1, "img-responsive"], [1, "post-gallery-small"], ["src", "assets/images/post_5.jpg", "alt", "post", 1, "img-responsive"], ["src", "assets/images/post.jpg", "alt", "post", 1, "img-responsive"], [1, "footer-section"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mr-3"], ["href", "#", 1, "emoji-bttn"], [1, "ti-heart", "text-red"], [1, "emoji-wrap"], [1, "emojis", "list-inline", "mb-0"], [1, "emoji", "list-inline-item"], [1, "em", "em---1"], [1, "em", "em-angry"], [1, "em", "em-anguished"], [1, "em", "em-astonished"], [1, "em", "em-blush"], [1, "em", "em-clap"], [1, "em", "em-cry"], [1, "em", "em-full_moon_with_face"], [1, "list-inline-item"], ["href", "/comment/"], [1, "ti-comment-alt"], [1, "list-inline-item", "float-right"], ["href", "#", "data-actions", ".my-actions", 1, "actions-open"], [1, "ti-shopping-cart"]], template: function FabricProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hurin Seary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mumbai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u20B9 350/meter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Plain multicolored cotton fabrics.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "233");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYWJyaWMtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FabricProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stitchwill-fabric-product',
                templateUrl: './fabric-product.component.html',
                styleUrls: ['./fabric-product.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=stitchwill-home.js.map