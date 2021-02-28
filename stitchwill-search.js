(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stitchwill-search"],{

/***/ "JF+G":
/*!**********************************************!*\
  !*** ./libs/search/src/lib/search.module.ts ***!
  \**********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "fup4");






class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', pathMatch: 'full', component: _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] }
                    ]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "fup4":
/*!*************************************************!*\
  !*** ./libs/search/src/lib/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");




// import * as fromArticleList from '@stitchwill/article-list';
// import { ArticleListConfig } from '@stitchwill/article-list';
// import { articleListInitialState, ArticleListFacade } from '@stitchwill/article-list';




// import { HomeFacade } from './+state/home.facade';
class SearchComponent {
    constructor(
    // private facade: HomeFacade,
    router, 
    // private articleListFacade: ArticleListFacade,
    authFacade) {
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
        // this.tags$ = this.facade.tags$;
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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 0, vars: 0, template: function SearchComponent_Template(rf, ctx) { }, styles: [".sf_header[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQUNGIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZl9oZWFkZXIge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "tu0A":
/*!**********************************!*\
  !*** ./libs/search/src/index.ts ***!
  \**********************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/search.module */ "JF+G");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return _lib_search_module__WEBPACK_IMPORTED_MODULE_0__["SearchModule"]; });




/***/ })

}]);
//# sourceMappingURL=stitchwill-search.js.map