(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stitchwill-menu"],{

/***/ "W6YT":
/*!*********************************************!*\
  !*** ./libs/menu/src/lib/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");




// import * as fromArticleList from '@stitchwill/article-list';
// import { ArticleListConfig } from '@stitchwill/article-list';
// import { articleListInitialState, ArticleListFacade } from '@stitchwill/article-list';




// import { HomeFacade } from './+state/home.facade';
class MenuComponent {
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
MenuComponent.??fac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"])); };
MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 188, vars: 0, consts: [["data-v-6bd6b045", "", "data-v-4b0cd9e2", "", 1, "m-menu", "sf-mega-menu", "bg-white", "mobile-menu"], ["data-v-6bd6b045", "", 1, "sf-mega-menu"], [1, "sf-bar", "mobile-only"], [1, "sf-bar__title"], [1, "sf-mega-menu__content", "sf-mega-menu__content--is-active"], [1, "sf-mega-menu__aside"], [1, "sf-list", "sf-mega-menu__menu-mobile", "mobile-only"], [1, "sf-list__item"], [1, "sf-menu-item", "sf-mega-menu__menu-item"], [1, "sf-menu-item__label"], [1, "sf-menu-item__count"], [1, "sf-menu-item__mobile-nav-icon", "sf-icon", 2, "--icon-size", "14px"], ["viewBox", "0 0 24 24", "preserveAspectRatio", "none", 1, "sf-icon-path"], ["d", "M8.364 22L7 20.4l7.254-8.4L7 3.6 8.364 2 17 12z", 2, "height", "100%"], [1, "sf-mega-menu__aside-content"], ["data-v-6bd6b045", "", 1, "aside-menu"], ["data-v-6bd6b045", "", 1, "sf-banner", "aside-banner", "aside-banner--mobile", 2, "--_banner-background-image", "url(\\/assets\\/banner\\/webp\\/bannerSandals-full\\.webp)"], [1, "sf-banner__container"], [1, "sf-banner__title"], ["data-v-6bd6b045", "", 1, "sf-banner", "aside-banner", "aside-banner--desktop", 2, "--_banner-background-image", "url(\\/assets\\/banner\\/webp\\/bannerSandals\\.webp)"], ["data-v-6bd6b045", "", 1, "sf-banner", "aside-banner", "aside-banner--mobile", 2, "--_banner-background-image", "url(\\/assets\\/banner\\/webp\\/bannerBeachBag-full\\.webp)"], ["data-v-6bd6b045", "", 1, "sf-banner", "aside-banner", "aside-banner--desktop", 2, "--_banner-background-image", "url(\\/assets\\/banner\\/webp\\/bannerBeachBag\\.webp)"], [1, "sf-mega-menu__menu"], ["data-v-6bd6b045", "", 1, "sf-mega-menu-column"], [1, "sf-mega-menu-column__title"], ["data-v-6bd6b045", "", 1, "sf-list"], ["data-v-6bd6b045", "", 1, "sf-list__item"], ["data-v-6bd6b045", "", "href", "/women.html", 1, ""], ["data-v-6bd6b045", "", 1, "sf-menu-item"], ["data-v-6bd6b045", "", "href", "/women/tops-women.html", 1, ""], ["data-v-6bd6b045", "", "href", "/women/bottoms-women.html", 1, ""], ["data-v-6bd6b045", "", "href", "/men.html", 1, ""], ["data-v-6bd6b045", "", "href", "/men/tops-men.html", 1, ""], ["data-v-6bd6b045", "", "href", "/men/bottoms-men.html", 1, ""], ["data-v-6bd6b045", "", "href", "/gear.html", 1, ""], ["data-v-6bd6b045", "", "href", "/gear/bags.html", 1, ""], ["data-v-6bd6b045", "", "href", "/gear/fitness-equipment.html", 1, ""], ["data-v-6bd6b045", "", "href", "/gear/watches.html", 1, ""], ["data-v-6bd6b045", "", "href", "/training.html", 1, ""], ["data-v-6bd6b045", "", "href", "/training/training-video.html", 1, ""]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](26, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](35, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, " Last pairs left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, " Last pairs left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, " Beach bags 2=1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, " Beach bags 2=1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](72, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](73, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Tops");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Bottoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](91, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](94, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](97, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](103, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](104, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](107, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](112, "Tops");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](113, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](116, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Bottoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](122, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](125, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](128, "Gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](133, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](134, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](135, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](137, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](143, "Bags");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](144, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](147, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Fitness Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](153, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](154, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](156, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "Watches");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](162, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](165, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](167, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](168, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](169, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](170, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](171, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](172, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](173, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](174, "View all");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](175, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](176, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](177, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](178, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](179, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](180, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](181, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](182, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](183, "Video Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](184, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](185, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](186, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](187, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _stitchwill_auth__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "kU97":
/*!********************************!*\
  !*** ./libs/menu/src/index.ts ***!
  \********************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_menu_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/menu.module */ "vRwi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return _lib_menu_module__WEBPACK_IMPORTED_MODULE_0__["MenuModule"]; });




/***/ }),

/***/ "vRwi":
/*!******************************************!*\
  !*** ./libs/menu/src/lib/menu.module.ts ***!
  \******************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "W6YT");






class MenuModule {
}
MenuModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MenuModule });
MenuModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function MenuModule_Factory(t) { return new (t || MenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', component: _menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MenuModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        { path: '', pathMatch: 'full', component: _menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] }
                    ]),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=stitchwill-menu.js.map