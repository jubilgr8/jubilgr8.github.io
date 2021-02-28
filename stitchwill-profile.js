(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stitchwill-profile"],{

/***/ "/frm":
/*!*******************************************************!*\
  !*** ./libs/profile/src/lib/+state/profile.facade.ts ***!
  \*******************************************************/
/*! exports provided: ProfileFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFacade", function() { return ProfileFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.actions */ "PPni");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.reducer */ "FeX3");






class ProfileFacade {
    constructor(store) {
        this.store = store;
        this.profile$ = this.store.select(_profile_reducer__WEBPACK_IMPORTED_MODULE_3__["getProfile"]);
    }
    follow(id) {
        this.store.dispatch(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["follow"]({ id }));
    }
    unfollow(id) {
        this.store.dispatch(_profile_actions__WEBPACK_IMPORTED_MODULE_2__["unFollow"]({ id }));
    }
}
ProfileFacade.ɵfac = function ProfileFacade_Factory(t) { return new (t || ProfileFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ProfileFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileFacade, factory: ProfileFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "0VYw":
/*!***************************************************!*\
  !*** ./libs/profile/src/lib/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_profile_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/profile.facade */ "/frm");







class ProfileComponent {
    constructor(facade, authFacade) {
        this.facade = facade;
        this.authFacade = authFacade;
        this.isUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        debugger;
        // this.profile$ = this.facade.profile$;
        // this.currentUser$ = this.authFacade.user$;
        // combineLatest([this.profile$, this.currentUser$])
        //   .pipe(
        //     tap(([p, u]) => {
        //       this.username = p.username;
        //       this.following = p.following;
        //     }),
        //     map(([p, u]) => p.username === u.username),
        //     takeUntil(this.unsubscribe$),
        //   )
        //   .subscribe(isUser => this.isUser$.next(isUser));
    }
    // toggleFollowing() {
    //   if (this.following) {
    //     this.facade.unfollow(this.username);
    //   } else {
    //     this.facade.follow(this.username);
    //   }
    // }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_profile_facade__WEBPACK_IMPORTED_MODULE_3__["ProfileFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Profile Works!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _state_profile_facade__WEBPACK_IMPORTED_MODULE_3__["ProfileFacade"] }, { type: _stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "3tcF":
/*!**********************************************************!*\
  !*** ./libs/profile/src/lib/profile-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: ProfileResolverService, ProfileArticlesResolverService, ProfileFavoritesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolverService", function() { return ProfileResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesResolverService", function() { return ProfileArticlesResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFavoritesResolverService", function() { return ProfileFavoritesResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
// import { articleListInitialState } from '@stitchwill/article-list';
// import * as fromArticleList from '@stitchwill/article-list';




class ProfileResolverService {
    constructor(store) {
        this.store = store;
    }
    resolve(route, state) {
        const username = route.params['username'];
        // this.store.dispatch(getProfile({ id: username }));
    }
}
ProfileResolverService.ɵfac = function ProfileResolverService_Factory(t) { return new (t || ProfileResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ProfileResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileResolverService, factory: ProfileResolverService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();
class ProfileArticlesResolverService {
    constructor(store) {
        this.store = store;
    }
    resolve(route, state) {
        const username = route.params['username'];
        // this.store.dispatch(
        //   fromArticleList.setListConfig({
        //     config: {
        //       ...articleListInitialState.listConfig,
        //       filters: {
        //         ...articleListInitialState.listConfig.filters,
        //         author: username,
        //       },
        //     },
        //   }),
        // );
    }
}
ProfileArticlesResolverService.ɵfac = function ProfileArticlesResolverService_Factory(t) { return new (t || ProfileArticlesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ProfileArticlesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileArticlesResolverService, factory: ProfileArticlesResolverService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileArticlesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();
class ProfileFavoritesResolverService {
    constructor(store) {
        this.store = store;
    }
    resolve(route, state) {
        const username = route.parent.params['username'];
        // this.store.dispatch(
        //   fromArticleList.setListConfig({
        //     config: {
        //       ...articleListInitialState.listConfig,
        //       filters: {
        //         ...articleListInitialState.listConfig.filters,
        //         favorited: username,
        //       },
        //     },
        //   }),
        // );
    }
}
ProfileFavoritesResolverService.ɵfac = function ProfileFavoritesResolverService_Factory(t) { return new (t || ProfileFavoritesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ProfileFavoritesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileFavoritesResolverService, factory: ProfileFavoritesResolverService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileFavoritesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "9WJ0":
/*!************************************************************!*\
  !*** ./libs/profile/src/lib/profile-articles.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function() { return ProfileArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileArticlesComponent {
    constructor() { }
    ngOnInit() { }
}
ProfileArticlesComponent.ɵfac = function ProfileArticlesComponent_Factory(t) { return new (t || ProfileArticlesComponent)(); };
ProfileArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileArticlesComponent, selectors: [["app-profile-articles"]], decls: 0, vars: 0, template: function ProfileArticlesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLWFydGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileArticlesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-articles',
                templateUrl: './profile-articles.component.html',
                styleUrls: ['./profile-articles.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FeX3":
/*!********************************************************!*\
  !*** ./libs/profile/src/lib/+state/profile.reducer.ts ***!
  \********************************************************/
/*! exports provided: profileFeatureKey, profileInitialState, getProfile, profileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFeatureKey", function() { return profileFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileInitialState", function() { return profileInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReducer", function() { return profileReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.actions */ "PPni");


const profileFeatureKey = 'profile';
const profileInitialState = {
    username: '',
    bio: '',
    image: '',
    following: false,
    loading: false,
};
const getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(profileFeatureKey);
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(profileInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfile"], (state, action) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfileSuccess"], (state, action) => (Object.assign(Object.assign({}, action.profile), { loading: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["getProfileFail"], (state, action) => profileInitialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_profile_actions__WEBPACK_IMPORTED_MODULE_1__["followSuccess"], _profile_actions__WEBPACK_IMPORTED_MODULE_1__["unFollowSuccess"], (state, action) => action.profile));
function profileReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "PPni":
/*!********************************************************!*\
  !*** ./libs/profile/src/lib/+state/profile.actions.ts ***!
  \********************************************************/
/*! exports provided: getProfile, getProfileSuccess, getProfileFail, follow, followSuccess, followFail, unFollow, unFollowSuccess, unFollowFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileSuccess", function() { return getProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileFail", function() { return getProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "follow", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followSuccess", function() { return followSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followFail", function() { return followFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollow", function() { return unFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowSuccess", function() { return unFollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFollowFail", function() { return unFollowFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProfileFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] GET_PROFILE_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const follow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const followSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const followFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] FOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unFollowFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[profile] UNFOLLOW_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Y7sV":
/*!*************************************************!*\
  !*** ./libs/profile/src/lib/profile.service.ts ***!
  \*************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/api */ "A47K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class ProfileService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getProfile(username) {
        return this.apiService.get('/profiles/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.profile));
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "bl76":
/*!********************************************************!*\
  !*** ./libs/profile/src/lib/+state/profile.effects.ts ***!
  \********************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile.service */ "Y7sV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.actions */ "PPni");
// import { ActionsService } from '@stitchwill/shared';









class ProfileEffects {
    // follow$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(ProfileActions.follow),
    //     map(action => action.id),
    //     concatMap(slug =>
    //       this.actionsService.followUser(slug).pipe(
    //         map(response => ProfileActions.followSuccess({ profile: response.profile })),
    //         catchError(error => of(ProfileActions.followFail({ error }))),
    //       ),
    //     ),
    //   ),
    // );
    // unFollow$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(ProfileActions.unFollow),
    //     map(action => action.id),
    //     concatMap(slug =>
    //       this.actionsService.unfollowUser(slug).pipe(
    //         map(response => ProfileActions.unFollowSuccess({ profile: response.profile })),
    //         catchError(error => of(ProfileActions.unFollowFail({ error }))),
    //       ),
    //     ),
    //   ),
    // );
    constructor(actions$, 
    // private actionsService: ActionsService,
    profileService) {
        this.actions$ = actions$;
        this.profileService = profileService;
        this.getProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_profile_actions__WEBPACK_IMPORTED_MODULE_5__["getProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(action => action.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(username => this.profileService.getProfile(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(profile => _profile_actions__WEBPACK_IMPORTED_MODULE_5__["getProfileSuccess"]({ profile })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_profile_actions__WEBPACK_IMPORTED_MODULE_5__["getProfileFail"]({ error })))))))));
    }
}
ProfileEffects.ɵfac = function ProfileEffects_Factory(t) { return new (t || ProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"])); };
ProfileEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileEffects, factory: ProfileEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _profile_service__WEBPACK_IMPORTED_MODULE_0__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "hgQb":
/*!***********************************!*\
  !*** ./libs/profile/src/index.ts ***!
  \***********************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_profile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/profile.module */ "o0Gc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return _lib_profile_module__WEBPACK_IMPORTED_MODULE_0__["ProfileModule"]; });




/***/ }),

/***/ "o0Gc":
/*!************************************************!*\
  !*** ./libs/profile/src/lib/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_profile_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/profile.effects */ "bl76");
/* harmony import */ var _state_profile_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/profile.facade */ "/frm");
/* harmony import */ var _state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/profile.reducer */ "FeX3");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile-articles.component */ "9WJ0");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile-resolver.service */ "3tcF");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile.component */ "0VYw");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile.service */ "Y7sV");
// import { ArticleListModule } from '@stitchwill/article-list';

// import { SharedModule } from '@stitchwill/shared';
















class ProfileModule {
}
ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfileModule });
ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ProfileModule_Factory(t) { return new (t || ProfileModule)(); }, providers: [
        _state_profile_effects__WEBPACK_IMPORTED_MODULE_6__["ProfileEffects"],
        _profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"],
        _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileResolverService"],
        _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileArticlesResolverService"],
        _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileFavoritesResolverService"],
        _state_profile_facade__WEBPACK_IMPORTED_MODULE_7__["ProfileFacade"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // ArticleListModule,
            // SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    resolve: { ProfileResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileResolverService"] },
                    canActivate: [_stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
                    children: [
                        {
                            path: '',
                            component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"],
                            resolve: { ProfileArticlesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileArticlesResolverService"] },
                        },
                        {
                            path: 'favorites',
                            component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"],
                            resolve: { ProfileFavoritesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileFavoritesResolverService"] },
                        },
                    ],
                },
            ]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileFeatureKey"], _state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileReducer"], {
                initialState: _state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_6__["ProfileEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfileModule, { declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // ArticleListModule,
                    // SharedModule,
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                            resolve: { ProfileResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileResolverService"] },
                            canActivate: [_stitchwill_auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
                            children: [
                                {
                                    path: '',
                                    component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"],
                                    resolve: { ProfileArticlesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileArticlesResolverService"] },
                                },
                                {
                                    path: 'favorites',
                                    component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"],
                                    resolve: { ProfileFavoritesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileFavoritesResolverService"] },
                                },
                            ],
                        },
                    ]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileFeatureKey"], _state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileReducer"], {
                        initialState: _state_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["profileInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_6__["ProfileEffects"]]),
                ],
                providers: [
                    _state_profile_effects__WEBPACK_IMPORTED_MODULE_6__["ProfileEffects"],
                    _profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"],
                    _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileResolverService"],
                    _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileArticlesResolverService"],
                    _profile_resolver_service__WEBPACK_IMPORTED_MODULE_10__["ProfileFavoritesResolverService"],
                    _state_profile_facade__WEBPACK_IMPORTED_MODULE_7__["ProfileFacade"],
                ],
                declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"], _profile_articles_component__WEBPACK_IMPORTED_MODULE_9__["ProfileArticlesComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=stitchwill-profile.js.map