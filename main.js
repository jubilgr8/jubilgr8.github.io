(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************************!*\
  !*** multi ./apps/stitchwill-vendor/src/main.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SW_COND\Stitchwill\apps\stitchwill-vendor\src\main.ts */"mDOX");


/***/ }),

/***/ "0oDr":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.reducer.ts ***!
  \**************************************************************/
/*! exports provided: ngrxErrorFeatureKey, ngrxErrorInitialState, ngrxErrorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorFeatureKey", function() { return ngrxErrorFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorInitialState", function() { return ngrxErrorInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorReducer", function() { return ngrxErrorReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");


const ngrxErrorFeatureKey = 'ngrxError';
const ngrxErrorInitialState = {
    code: -1,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(ngrxErrorInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__["throw401Error"], (state, action) => ({ code: action.error.status, message: action.error.message })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_1__["throw404Error"], (state, action) => ({ code: action.error.status, message: action.error.message })));
function ngrxErrorReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "14lc":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.effects.ts ***!
  \**************************************************************/
/*! exports provided: NgrxErrorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorEffects", function() { return NgrxErrorEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");
/* harmony import */ var _stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitchwill/ngrx-router */ "EdWO");







class NgrxErrorEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.error401$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["throw401Error"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => Object(_stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_4__["go"])({ to: { path: ['/login'] } }))));
        this.error404$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["throw404Error"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_ => Object(_stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_4__["go"])({ to: { path: ['/'] } }))));
    }
}
NgrxErrorEffects.ɵfac = function NgrxErrorEffects_Factory(t) { return new (t || NgrxErrorEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
NgrxErrorEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxErrorEffects, factory: NgrxErrorEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "17QB":
/*!***********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.actions.ts ***!
  \***********************************************************/
/*! exports provided: go, back, forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return forward; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const go = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] Go', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const back = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] BACK');
const forward = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[router] FORWARD');


/***/ }),

/***/ "1Amc":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.actions.ts ***!
  \**************************************************/
/*! exports provided: getUser, getUserSuccess, getUserFail, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return getUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFail", function() { return getUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return registerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] GET_USER_FAIL', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN');
const loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGIN_FAIL');
const register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER');
const registerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER_SUCCESS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] REGISTER_FAIL');
const logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[auth] LOGOUT');


/***/ }),

/***/ "2S4z":
/*!******************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/ngrx-forms.module.ts ***!
  \******************************************************/
/*! exports provided: NgrxFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return NgrxFormsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/ngrx-forms.effects */ "atB1");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/ngrx-forms.facade */ "w6+i");
/* harmony import */ var _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/ngrx-forms.reducer */ "ndgL");
/* harmony import */ var _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-form/dynamic-field.directive */ "bhtH");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "5W4/");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fields/input/input.component */ "HPTZ");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/textarea/textarea.component */ "zt7d");
/* harmony import */ var _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-errors/list-errors.component */ "T7Fx");
















class NgrxFormsModule {
}
NgrxFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgrxFormsModule });
NgrxFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgrxFormsModule_Factory(t) { return new (t || NgrxFormsModule)(); }, providers: [_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"], _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsFacade"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsFeatureKey"], _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsReducer"], {
                initialState: _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgrxFormsModule, { declarations: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__["DynamicFieldDirective"], _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]], exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsFeatureKey"], _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsReducer"], {
                        initialState: _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_7__["ngrxFormsInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"]]),
                ],
                providers: [_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_5__["NgrxFormsEffects"], _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsFacade"]],
                declarations: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_8__["DynamicFieldDirective"], _fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]],
                entryComponents: [_fields_input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_11__["TextareaComponent"]],
                exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["DynamicFormComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_12__["ListErrorsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "2dsC":
/*!**************************************!*\
  !*** ./libs/ngrx-error/src/index.ts ***!
  \**************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-error.module */ "V/ak");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__["NgrxErrorModule"]; });




/***/ }),

/***/ "5HVB":
/*!********************************************************!*\
  !*** ./libs/auth/src/lib/local-storage-jwt.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return LocalStorageJwtService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class LocalStorageJwtService {
    getItem() {
        const data = localStorage.getItem('jwtToken');
        if (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    setItem(data) {
        localStorage.setItem('jwtToken', data);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);
    }
    removeItem() {
        localStorage.removeItem('jwtToken');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    }
}
LocalStorageJwtService.ɵfac = function LocalStorageJwtService_Factory(t) { return new (t || LocalStorageJwtService)(); };
LocalStorageJwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LocalStorageJwtService, factory: LocalStorageJwtService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalStorageJwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "5W4/":
/*!************************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.ts ***!
  \************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-field.directive */ "bhtH");








function DynamicFormComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 2);
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", field_r1)("group", ctx_r0.form);
} }
class DynamicFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.updateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.formBuilder = (structure) => {
            const group = this.fb.group({});
            structure.forEach(field => group.addControl(field.name, this.control(field)));
            return group;
        };
        this.control = (field) => {
            return this.fb.control('', field.validator);
        };
        this.patchValue = ([form, data]) => {
            !!data ? form.patchValue(data, { emitEvent: false }) : form.patchValue({}, { emitEvent: false });
        };
    }
    ngOnInit() {
        this.structure$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.formBuilder), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(f => (this.form = f)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(f => this.listenFormChanges(f)), f$ => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([f$, this.data$]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(this.patchValue);
        if (this.touchedForm$) {
            this.touchedForm$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(t => !t && !!this.form), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
                .subscribe(_ => this.form.reset());
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    listenFormChanges(form) {
        form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe((changes) => this.updateForm.emit(changes));
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { structure$: "structure$", data$: "data$", touchedForm$: "touchedForm$" }, outputs: { updateForm: "updateForm" }, decls: 3, vars: 4, consts: [["autocomplete", "off", 1, "dynamic-form", 3, "formGroup"], ["appDynamicField", "", 3, "field", "group", 4, "ngFor", "ngForOf"], ["appDynamicField", "", 3, "field", "group"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DynamicFormComponent_ng_container_1_Template, 1, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.structure$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _dynamic_field_directive__WEBPACK_IMPORTED_MODULE_5__["DynamicFieldDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-form',
                templateUrl: './dynamic-form.component.html',
                styleUrls: ['./dynamic-form.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { structure$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], touchedForm$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7GVx":
/*!*************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.facade.ts ***!
  \*************************************************/
/*! exports provided: AuthFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return AuthFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.selectors */ "MFcj");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "1Amc");






class AuthFacade {
    constructor(store) {
        this.store = store;
        this.auht$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getAuth);
        this.user$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getUser);
        this.isLoggedIn$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["authQuery"].getLoggedIn);
    }
    login() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["login"]());
    }
    logout() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["logout"]());
    }
    register() {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["register"]());
    }
    user(token) {
        this.store.dispatch(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["getUser"]({ authToken: token }));
    }
}
AuthFacade.ɵfac = function AuthFacade_Factory(t) { return new (t || AuthFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AuthFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthFacade, factory: AuthFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "A47K":
/*!*******************************!*\
  !*** ./libs/api/src/index.ts ***!
  \*******************************/
/*! exports provided: ApiModule, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api.module */ "v3oI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _lib_api_module__WEBPACK_IMPORTED_MODULE_0__["ApiModule"]; });

/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api.service */ "yPkS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _lib_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony import */ var _lib_shared_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shared.interfaces */ "bXkE");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "AxuA":
/*!**************************************!*\
  !*** ./libs/ngrx-forms/src/index.ts ***!
  \**************************************/
/*! exports provided: NgrxFormsModule, setData, updateData, setStructure, setErrors, initializeErrors, initializeForm, resetForm, ngrxFormsFeatureKey, ngrxFormsInitialState, ngrxFormsReducer, NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-forms.module */ "2S4z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"]; });

/* harmony import */ var _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.actions */ "StMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["updateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setStructure", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setStructure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["setErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["initializeErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["initializeForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["resetForm"]; });

/* harmony import */ var _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.reducer */ "ndgL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsFeatureKey", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsReducer"]; });

/* harmony import */ var _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.facade */ "w6+i");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsFacade"]; });

/* harmony import */ var _lib_state_ngrx_forms_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.interfaces */ "SIXF");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "B0Tb":
/*!******************************************!*\
  !*** ./libs/auth/src/lib/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/ngrx-forms */ "AxuA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/auth.effects */ "M+C9");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/auth.facade */ "7GVx");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/auth.reducer */ "OCb0");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guard.service */ "KovN");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.service */ "PjsD");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "FVTS");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "h3W9");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./token-interceptor.service */ "rIoB");




















const authRouting = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
    },
]);
class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [
        _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"],
        _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
        _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__["AuthFacade"],
        _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
        _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageJwtService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"],
            authRouting,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authFeatureKey"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"], {
                initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"],
                    authRouting,
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authFeatureKey"], _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authReducer"], {
                        initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_9__["authInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"]]),
                ],
                providers: [
                    _state_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"],
                    _auth_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"],
                    _auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                    _state_auth_facade__WEBPACK_IMPORTED_MODULE_8__["AuthFacade"],
                    _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                    _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_12__["LocalStorageJwtService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptorService"],
                        multi: true,
                    },
                ],
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "EdWO":
/*!***************************************!*\
  !*** ./libs/ngrx-router/src/index.ts ***!
  \***************************************/
/*! exports provided: NgrxRouterModule, go, back, forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-router.module */ "ddfQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__["NgrxRouterModule"]; });

/* harmony import */ var _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/router.actions */ "17QB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "go", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "back", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forward", function() { return _lib_state_router_actions__WEBPACK_IMPORTED_MODULE_1__["forward"]; });





/***/ }),

/***/ "FVTS":
/*!****************************************************!*\
  !*** ./libs/auth/src/lib/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/ngrx-forms */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/auth.facade */ "7GVx");
/* harmony import */ var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */ "T7Fx");
/* harmony import */ var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */ "5W4/");









const structure = [
    {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Username',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        attrs: {
            type: 'password',
        },
    },
];
class LoginComponent {
    constructor(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    ngOnInit() {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    }
    updateForm(changes) {
        this.ngrxFormsFacade.updateData(changes);
    }
    submit() {
        this.facade.login();
    }
    ngOnDestroy() {
        this.ngrxFormsFacade.initializeForm();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 52, vars: 2, consts: [[1, "sf-modal__content", "mobile-only"], ["data-v-04d1c100", "", 1, "form"], ["data-v-04d1c100", "", 1, "sf-input", "form__element"], [1, "sf-input__wrapper"], ["id", "email", "required", "required", "name", "email", "type", "text", 1, "", 2, "outline", "none"], [1, "sf-input__bar"], ["for", "email", 1, "sf-input__label"], [1, "sf-input__error-message"], ["id", "password", "required", "required", "name", "password", "type", "password", 1, "", 2, "outline", "none"], ["for", "password", 1, "sf-input__label"], ["data-v-04d1c100", "", 1, "sf-checkbox", "form__element", "form__checkbox"], [1, "sf-checkbox__container"], ["type", "checkbox", "name", "remember-me", "value", "", 1, "sf-checkbox__input", 2, "outline", "none"], [1, "sf-checkbox__checkmark"], [1, "sf-checkbox__label"], ["data-v-04d1c100", "", 1, "sf-button", "sf-button--full-width", "form__submit", 2, "outline", "none"], ["data-v-04d1c100", "", 1, "sf-button", "sf-button--text", "action-button", 2, "outline", "none"], ["data-v-04d1c100", "", 1, "aside"], ["data-v-04d1c100", "", 1, "sf-heading", "aside__heading"], [1, "sf-heading__title", "sf-heading__title--h3"], ["data-v-04d1c100", "", 1, "sf-button", "sf-button--text", 2, "outline", "none"], [1, "app", "login2-bg", "header-fixed", "desktop-only", 2, "margin-top", "100px"], [1, "app-body", "flex-row", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-6", 2, "text-align", "center"], [1, "card-group", "mb-0"], [1, "card", "pl-5", "p-4"], [1, "card-body"], ["src", "assets/img/logo.png", 1, "login-icon", 2, "max-width", "10%"], [1, "text-muted"], [3, "data$", "structure$", "updateForm"], [1, "row"], [1, "col-8"], [1, "col-4", "text-right"], ["type", "button", 1, "btn", "btn-danger", "px-4", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Forgotten password?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "header", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Don't have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Register now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Welcome to Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "app-list-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "app-dynamic-form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updateForm", function LoginComponent_Template_app_dynamic_form_updateForm_46_listener($event) { return ctx.updateForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_50_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$);
    } }, directives: [_ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_4__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"] }, { type: _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "HPTZ":
/*!*****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/fields/input/input.component.ts ***!
  \*****************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class InputComponent {
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { field: "field", group: "group" }, decls: 2, vars: 4, consts: [[1, "form-group", 3, "formGroup"], [1, "form-control", "form-control-lg", 3, "formControlName"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.field == null ? null : ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx.field == null ? null : ctx.field.placeholder)("type", (ctx.field == null ? null : ctx.field.attrs == null ? null : ctx.field.attrs.type) || "text");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input',
                templateUrl: './input.component.html',
                styleUrls: ['./input.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ItLX":
/*!**************************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/custom-serializer.ts ***!
  \**************************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomSerializer {
    serialize(routerState) {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}
CustomSerializer.ɵfac = function CustomSerializer_Factory(t) { return new (t || CustomSerializer)(); };
CustomSerializer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomSerializer, factory: CustomSerializer.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSerializer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "J614":
/*!**************************************************************************!*\
  !*** ./apps/stitchwill-vendor/src/app/layout/header/header.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["stitchwill-header"]], inputs: { user: "user", isLoggedIn: "isLoggedIn" }, decls: 7, vars: 0, consts: [["data-v-43f96ae2", "", "data-cy", "app-header", 1, "sf-header", "sf-header--has-mobile-search"], [1, "sf-header__wrapper"], [1, "sf-header__header"], ["data-v-43f96ae2", "", "href", "/", "data-cy", "app-header-url_logo", 1, "sf-header__logo", "nuxt-link-active"], ["data-v-43f96ae2", "", "data-loaded", "true", 1, "sf-image", "sf-header__logo-image"], ["alt", "Vue Storefront Next", "src", "assets/icons/logo.png"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "noscript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sf-header[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLGFBQWE7QUFDZiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZi1oZWFkZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stitchwill-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Jy6Z":
/*!**************************************************************************!*\
  !*** ./apps/stitchwill-vendor/src/app/layout/footer/footer.component.ts ***!
  \**************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/menu"]; };
const _c3 = function () { return ["/search"]; };
const _c4 = function () { return ["/profile"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["stitchwill-footer"]], decls: 17, vars: 20, consts: [["data-v-1c5cdfb2", "", 1, "o-bottom-navigation"], ["data-v-1c5cdfb2", "", 1, "sf-bottom-navigation"], ["data-v-1c5cdfb2", "", 1, "sf-bottom-navigation-item"], ["routerLinkActive", "active", 1, "sf-button", "sf-button--pure", "sf-bottom-navigation-item__icon", 2, "outline", "none", 3, "routerLink", "routerLinkActiveOptions"], ["_ngcontent-xfp-c55", "", 1, "ti-home"], ["_ngcontent-xfp-c55", "", 1, "ti-list"], ["_ngcontent-xfp-c55", "", 1, "ti-search"], ["_ngcontent-xfp-c55", "", 1, "ti-user"], ["data-v-1c5cdfb2", "", 1, "sf-bottom-navigation-item", "sf-bottom-navigation-item--floating"], ["routerLinkActive", "active", 1, "sf-button", "sf-circle-icon", 2, "outline", "none", 3, "routerLink", "routerLinkActiveOptions"], ["_ngcontent-xfp-c55", "", 1, "ti-shopping-cart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".o-bottom-navigation[_ngcontent-%COMP%]   .sf-bottom-navigation-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #000;\r\n  font-size: 30px;\r\n  bottom: 4px;\r\n  position: relative;\r\n}\r\n\r\n.o-bottom-navigation[_ngcontent-%COMP%]   .sf-bottom-navigation-item--floating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  color: #fff;\r\n  font-size: 30px;\r\n  position: relative;\r\n  position: initial;\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm8tYm90dG9tLW5hdmlnYXRpb24gLnNmLWJvdHRvbS1uYXZpZ2F0aW9uLWl0ZW0gaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3R0b206IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5vLWJvdHRvbS1uYXZpZ2F0aW9uIC5zZi1ib3R0b20tbmF2aWdhdGlvbi1pdGVtLS1mbG9hdGluZyBpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stitchwill-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KovN":
/*!*************************************************!*\
  !*** ./libs/auth/src/lib/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");







class AuthGuardService {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    canActivate() {
        return this.storage.getItem().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(token => {
            if (!token) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageJwtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageJwtService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "LnF5":
/*!*****************************************************************************!*\
  !*** ./apps/stitchwill-vendor/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "LnF5";

/***/ }),

/***/ "M+C9":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.effects.ts ***!
  \**************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ "PjsD");
/* harmony import */ var _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stitchwill/ngrx-forms */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.actions */ "1Amc");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../local-storage-jwt.service */ "5HVB");
















class AuthEffects {
    constructor(actions$, localStorageJwtService, ngrxFormsFacade, authService, router) {
        this.actions$ = actions$;
        this.localStorageJwtService = localStorageJwtService;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.authService = authService;
        this.router = router;
        this.getUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(item => this.authService.user(item.authToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUserSuccess"]({ isValid: data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUserFail"](error)))))));
        this.getUserFail$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["getUserFail"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(action => {
            // this.localStorageJwtService.setItem(action.user.token);
            this.router.navigateByUrl('/login');
        })), { dispatch: false });
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["login"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(([action, data]) => this.authService.login(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"]({ user: response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(result => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["setErrors"]({ errors: result.error.errors }));
        })))));
        this.loginOrRegisterSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["loginSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_7__["registerSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(action => {
            this.localStorageJwtService.setItem(action.user.token);
            this.router.navigateByUrl('/dashboard');
        })), { dispatch: false });
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["register"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(([action, data]) => this.authService.register(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => _auth_actions__WEBPACK_IMPORTED_MODULE_7__["registerSuccess"]({ user: response.user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(Object(_stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["setErrors"])({ errors: result.error.errors })))))));
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["logout"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(action => {
            this.localStorageJwtService.removeItem();
            this.router.navigateByUrl('login');
        })), { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageJwtService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageJwtService"] }, { type: _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "MFcj":
/*!****************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.selectors.ts ***!
  \****************************************************/
/*! exports provided: getAuth, getLoggedIn, getUser, authQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedIn", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authQuery", function() { return authQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.reducer */ "OCb0");


const getAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authFeatureKey"]);
const getLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, (auth) => auth.loggedIn);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, (auth) => auth.user);
const authQuery = {
    getAuth,
    getLoggedIn,
    getUser,
};


/***/ }),

/***/ "MsXz":
/*!*********************************************************!*\
  !*** ./apps/stitchwill-vendor/src/app/app.component.ts ***!
  \*********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/footer/footer.component */ "Jy6Z");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ "J614");







function AppComponent_stitchwill_header_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "stitchwill-header");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'stitchwill-vendor';
        this.showHead = true;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event['url'] == '/' || event['url'] == '/home') {
                    this.showHead = true;
                }
                else {
                    this.showHead = false;
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["stitchwill-root"]], decls: 6, vars: 1, consts: [["id", "app"], [1, "default-layout"], ["id", "viewport"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_stitchwill_header_3_Template, 1, 0, "stitchwill-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "stitchwill-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHead);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'stitchwill-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "OCb0":
/*!**************************************************!*\
  !*** ./libs/auth/src/lib/+state/auth.reducer.ts ***!
  \**************************************************/
/*! exports provided: authFeatureKey, Status, authInitialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authFeatureKey", function() { return authFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "1Amc");


const authFeatureKey = 'auth';
var Status;
(function (Status) {
    Status["INIT"] = "INIT";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
})(Status || (Status = {}));
const authInitialState = {
    loggedIn: false,
    status: Status.INIT,
    isTokenValid: false,
    user: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: '',
    },
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(authInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { loggedIn: true, isTokenValid: action.isValid }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserFail"], (state, action) => (Object.assign({}, authInitialState))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["register"], (state, _) => (Object.assign(Object.assign({}, state), { status: Status.IN_PROGRESS }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { loggedIn: true, status: Status.INIT, user: action.user }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerFail"], _auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginFail"], (state, _) => (Object.assign(Object.assign({}, state), { status: Status.INIT }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"], (state, action) => (Object.assign({}, authInitialState))));
function authReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "PjsD":
/*!*******************************************!*\
  !*** ./libs/auth/src/lib/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/api */ "A47K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    user(authToken) {
        return this.apiService.post('Login/Auth', { authToken: authToken });
    }
    login(credentials) {
        return this.apiService.post('Login/LoginRequest', credentials);
    }
    register(credentials) {
        return this.apiService.post('/users', { user: credentials });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _stitchwill_api__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "SIXF":
/*!*****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.interfaces.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// export interface Errors {
//   errors: string[];
// }


/***/ }),

/***/ "StMj":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts ***!
  \**************************************************************/
/*! exports provided: setData, updateData, setStructure, setErrors, initializeErrors, initializeForm, resetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateData", function() { return updateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStructure", function() { return setStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrors", function() { return setErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeErrors", function() { return initializeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeForm", function() { return initializeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetForm", function() { return resetForm; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
// import { Errors } from './ngrx-forms.interfaces';

const setData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] UPDATE_DATA', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_STRUCTURE', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] SET_ERRORS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initializeErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] INITIALIZE_ERRORS');
const initializeForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] INITIALIZE_FORM');
const resetForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrxForms] RESET_FORM');


/***/ }),

/***/ "T13k":
/*!*************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts ***!
  \*************************************************************/
/*! exports provided: NgrxErrorFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorFacade", function() { return NgrxErrorFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-error.actions */ "cb9J");





class NgrxErrorFacade {
    constructor(store) {
        this.store = store;
    }
    throw401Error(error) {
        this.store.dispatch(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__["throw401Error"]({ error }));
    }
    throw404Error(error) {
        this.store.dispatch(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_2__["throw404Error"]({ error }));
    }
}
NgrxErrorFacade.ɵfac = function NgrxErrorFacade_Factory(t) { return new (t || NgrxErrorFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
NgrxErrorFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxErrorFacade, factory: NgrxErrorFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "T7Fx":
/*!**********************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/list-errors/list-errors.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/ngrx-forms.facade */ "w6+i");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ListErrorsComponent_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r2, " ");
} }
function ListErrorsComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListErrorsComponent_ul_0_li_1_Template, 2, 1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.errors);
} }
class ListErrorsComponent {
    constructor(ngrxFormsFacade, changeDetectorRef) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.changeDetectorRef = changeDetectorRef;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.ngrxFormsFacade.errors$.subscribe(e => {
            this.errors = e;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.ngrxFormsFacade.initializeErrors();
    }
}
ListErrorsComponent.ɵfac = function ListErrorsComponent_Factory(t) { return new (t || ListErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ListErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListErrorsComponent, selectors: [["app-list-errors"]], decls: 1, vars: 1, consts: [["class", "error-messages", "style", "text-align: left; color: red;", 4, "ngIf"], [1, "error-messages", 2, "text-align", "left", "color", "red"], [4, "ngFor", "ngForOf"]], template: function ListErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListErrorsComponent_ul_0_Template, 2, 1, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.errors == null ? null : ctx.errors.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-errors',
                templateUrl: './list-errors.component.html',
                styleUrls: ['./list-errors.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "V/ak":
/*!******************************************************!*\
  !*** ./libs/ngrx-error/src/lib/ngrx-error.module.ts ***!
  \******************************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return NgrxErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/ngrx-error.effects */ "14lc");
/* harmony import */ var _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/ngrx-error.reducer */ "0oDr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngrx-error-interceptor.service */ "hE7n");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "T13k");











class NgrxErrorModule {
}
NgrxErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgrxErrorModule });
NgrxErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgrxErrorModule_Factory(t) { return new (t || NgrxErrorModule)(); }, providers: [
        _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__["NgrxErrorFacade"],
        _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["NgrxErrorInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorFeatureKey"], _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorReducer"], {
                initialState: _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorInitialState"],
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgrxErrorModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature(_state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorFeatureKey"], _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorReducer"], {
                        initialState: _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_4__["ngrxErrorInitialState"],
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"]]),
                ],
                providers: [
                    _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_7__["NgrxErrorFacade"],
                    _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorEffects"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["NgrxErrorInterceptorService"],
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "WgHb":
/*!****************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.selectors.ts ***!
  \****************************************************************/
/*! exports provided: getStructure, getData, isValid, getErrors, getTouchedForm, ngrxFormsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStructure", function() { return getStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchedForm", function() { return getTouchedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsQuery", function() { return ngrxFormsQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-forms.reducer */ "ndgL");


const getNgrxForms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_1__["ngrxFormsFeatureKey"]);
const getStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.structure);
const getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.data);
const isValid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.valid);
const getErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.errors);
const getTouchedForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, (state) => state.touched);
const ngrxFormsQuery = {
    getStructure,
    getData,
    isValid,
    getErrors,
    getTouchedForm,
};


/***/ }),

/***/ "YL2o":
/*!***********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.effects.ts ***!
  \***********************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router.actions */ "17QB");










class RouterEffects {
    constructor(action$, router, location) {
        this.action$ = action$;
        this.router = router;
        this.location = location;
        this.navigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["go"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.to), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(({ path, query: queryParams, extras }) => this.router.navigate(path, Object.assign({ queryParams }, extras)))), { dispatch: false });
        this.navigateBack$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["back"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.location.back())), { dispatch: false });
        this.navigateForward$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_router_actions__WEBPACK_IMPORTED_MODULE_5__["forward"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.location.forward())), { dispatch: false });
    }
}
RouterEffects.ɵfac = function RouterEffects_Factory(t) { return new (t || RouterEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); };
RouterEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouterEffects, factory: RouterEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouterEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"] }]; }, null); })();


/***/ }),

/***/ "atB1":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.effects.ts ***!
  \**************************************************************/
/*! exports provided: NgrxFormsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsEffects", function() { return NgrxFormsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class NgrxFormsEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.setData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["setData"], _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["updateData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_2__["initializeErrors"]())));
    }
}
NgrxFormsEffects.ɵfac = function NgrxFormsEffects_Factory(t) { return new (t || NgrxFormsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
NgrxFormsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxFormsEffects, factory: NgrxFormsEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxFormsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "bXkE":
/*!***********************************************!*\
  !*** ./libs/api/src/lib/shared.interfaces.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "bhtH":
/*!*************************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/dynamic-form/dynamic-field.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fields/input/input.component */ "HPTZ");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fields/textarea/textarea.component */ "zt7d");





const componentsMapper = {
    INPUT: _fields_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"],
    TEXTAREA: _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_3__["TextareaComponent"],
};
class DynamicFieldDirective {
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    ngOnChanges() {
        if (this.component) {
            this.component.instance.field = this.field;
            this.component.instance.group = this.group;
        }
    }
    ngOnInit() {
        const component = this.resolver.resolveComponentFactory(componentsMapper[this.field.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.field = this.field;
        this.component.instance.group = this.group;
    }
}
DynamicFieldDirective.ɵfac = function DynamicFieldDirective_Factory(t) { return new (t || DynamicFieldDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
DynamicFieldDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicFieldDirective, selectors: [["", "appDynamicField", ""]], inputs: { field: "field", group: "group" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFieldDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDynamicField]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cb9J":
/*!**************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts ***!
  \**************************************************************/
/*! exports provided: throw401Error, throw404Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throw401Error", function() { return throw401Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throw404Error", function() { return throw404Error; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const throw401Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrx-error] THROW_401_ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const throw404Error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[ngrx-error] THROW_404_ERROR', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "ddfQ":
/*!********************************************************!*\
  !*** ./libs/ngrx-router/src/lib/ngrx-router.module.ts ***!
  \********************************************************/
/*! exports provided: NgrxRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return NgrxRouterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/custom-serializer */ "ItLX");
/* harmony import */ var _state_router_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/router.effects */ "YL2o");
/* harmony import */ var _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/router.interfaces */ "woSD");












class NgrxRouterModule {
}
NgrxRouterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgrxRouterModule });
NgrxRouterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgrxRouterModule_Factory(t) { return new (t || NgrxRouterModule)(); }, providers: [_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"], [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__["CustomSerializer"] }]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"]]),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"] }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgrxRouterModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxRouterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["routerReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"]]),
                    _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot({ stateKey: _state_router_interfaces__WEBPACK_IMPORTED_MODULE_7__["ngrxRouterFeatureKey"] }),
                ],
                providers: [_state_router_effects__WEBPACK_IMPORTED_MODULE_6__["RouterEffects"], [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["RouterStateSerializer"], useClass: _state_custom_serializer__WEBPACK_IMPORTED_MODULE_5__["CustomSerializer"] }]],
            }]
    }], null, null); })();


/***/ }),

/***/ "e7ns":
/*!******************************************************!*\
  !*** ./apps/stitchwill-vendor/src/app/app.module.ts ***!
  \******************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stitchwill_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stitchwill/api */ "A47K");
/* harmony import */ var _stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stitchwill/auth */ "gy9y");
/* harmony import */ var _stitchwill_ngrx_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitchwill/ngrx-error */ "2dsC");
/* harmony import */ var _stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stitchwill/ngrx-router */ "EdWO");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "MsXz");
/* harmony import */ var _nrwl_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nrwl/angular */ "74yJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "nUOV");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/header/header.component */ "J614");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/footer/footer.component */ "Jy6Z");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _stitchwill_api__WEBPACK_IMPORTED_MODULE_2__["ApiModule"],
            _stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _nrwl_angular__WEBPACK_IMPORTED_MODULE_7__["NxModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                {
                    path: '',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-home */ "stitchwill-home").then(__webpack_require__.bind(null, /*! @stitchwill/home */ "GXy1")).then((m) => m.HomeModule),
                },
                {
                    path: 'home',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-home */ "stitchwill-home").then(__webpack_require__.bind(null, /*! @stitchwill/home */ "GXy1")).then((m) => m.HomeModule),
                },
                {
                    path: 'profile',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-profile */ "stitchwill-profile").then(__webpack_require__.bind(null, /*! @stitchwill/profile */ "hgQb")).then((m) => m.ProfileModule),
                    canActivate: [_stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
                },
                {
                    path: 'menu',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-menu */ "stitchwill-menu").then(__webpack_require__.bind(null, /*! @stitchwill/menu */ "kU97")).then((m) => m.MenuModule),
                },
                {
                    path: 'search',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-search */ "stitchwill-search").then(__webpack_require__.bind(null, /*! @stitchwill/search */ "tu0A")).then((m) => m.SearchModule),
                },
                {
                    path: 'product',
                    loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-product */ "stitchwill-product").then(__webpack_require__.bind(null, /*! @stitchwill/product */ "xNNO")).then((m) => m.ProductModule),
                },
            ], {
                initialNavigation: 'enabled',
                useHash: true,
                relativeLinkResolution: 'legacy',
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument() : [],
            _stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_5__["NgrxRouterModule"],
            _stitchwill_ngrx_error__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]], imports: [_stitchwill_api__WEBPACK_IMPORTED_MODULE_2__["ApiModule"],
        _stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _nrwl_angular__WEBPACK_IMPORTED_MODULE_7__["NxModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"], _stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_5__["NgrxRouterModule"],
        _stitchwill_ngrx_error__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]],
                imports: [
                    _stitchwill_api__WEBPACK_IMPORTED_MODULE_2__["ApiModule"],
                    _stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _nrwl_angular__WEBPACK_IMPORTED_MODULE_7__["NxModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                        {
                            path: '',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-home */ "stitchwill-home").then(__webpack_require__.bind(null, /*! @stitchwill/home */ "GXy1")).then((m) => m.HomeModule),
                        },
                        {
                            path: 'home',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-home */ "stitchwill-home").then(__webpack_require__.bind(null, /*! @stitchwill/home */ "GXy1")).then((m) => m.HomeModule),
                        },
                        {
                            path: 'profile',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-profile */ "stitchwill-profile").then(__webpack_require__.bind(null, /*! @stitchwill/profile */ "hgQb")).then((m) => m.ProfileModule),
                            canActivate: [_stitchwill_auth__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
                        },
                        {
                            path: 'menu',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-menu */ "stitchwill-menu").then(__webpack_require__.bind(null, /*! @stitchwill/menu */ "kU97")).then((m) => m.MenuModule),
                        },
                        {
                            path: 'search',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-search */ "stitchwill-search").then(__webpack_require__.bind(null, /*! @stitchwill/search */ "tu0A")).then((m) => m.SearchModule),
                        },
                        {
                            path: 'product',
                            loadChildren: () => __webpack_require__.e(/*! import() | stitchwill-product */ "stitchwill-product").then(__webpack_require__.bind(null, /*! @stitchwill/product */ "xNNO")).then((m) => m.ProductModule),
                        },
                    ], {
                        initialNavigation: 'enabled',
                        useHash: true,
                        relativeLinkResolution: 'legacy',
                    }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot({}),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot([]),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument() : [],
                    _stitchwill_ngrx_router__WEBPACK_IMPORTED_MODULE_5__["NgrxRouterModule"],
                    _stitchwill_ngrx_error__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "gy9y":
/*!********************************!*\
  !*** ./libs/auth/src/index.ts ***!
  \********************************/
/*! exports provided: AuthModule, getUser, getUserSuccess, getUserFail, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout, authFeatureKey, Status, authInitialState, authReducer, AuthFacade, AuthGuardService, LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ "B0Tb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/auth.actions */ "1Amc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["getUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logout"]; });

/* harmony import */ var _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/auth.reducer */ "OCb0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authFeatureKey", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authFeatureKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"]; });

/* harmony import */ var _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/auth.facade */ "7GVx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]; });

/* harmony import */ var _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/auth-guard.service */ "KovN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/local-storage-jwt.service */ "5HVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageJwtService"]; });









/***/ }),

/***/ "h3W9":
/*!**********************************************************!*\
  !*** ./libs/auth/src/lib/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitchwill/ngrx-forms */ "AxuA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/auth.facade */ "7GVx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/list-errors/list-errors.component */ "T7Fx");
/* harmony import */ var _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ngrx-forms/src/lib/dynamic-form/dynamic-form.component */ "5W4/");










const _c0 = function () { return ["/login"]; };
const structure = [
    {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Username',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Email',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        attrs: {
            type: 'password',
        },
    },
];
class RegisterComponent {
    constructor(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    ngOnInit() {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    }
    updateForm(changes) {
        this.ngrxFormsFacade.updateData(changes);
    }
    submit() {
        this.facade.register();
    }
    ngOnDestroy() {
        this.ngrxFormsFacade.initializeForm();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 13, vars: 4, consts: [[1, "auth-page"], [1, "container", "page"], [1, "row"], [1, "col-md-6", "offset-md-3", "col-xs-12"], [1, "text-xs-center"], [3, "routerLink"], [3, "data$", "structure$", "updateForm"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "pull-xs-right", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-list-errors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-dynamic-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("updateForm", function RegisterComponent_Template_app_dynamic_form_updateForm_10_listener($event) { return ctx.updateForm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data$", ctx.data$)("structure$", ctx.structure$);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ngrx_forms_src_lib_list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_5__["ListErrorsComponent"], _ngrx_forms_src_lib_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _stitchwill_ngrx_forms__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsFacade"] }, { type: _state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"] }]; }, null); })();


/***/ }),

/***/ "hE7n":
/*!*******************************************************************!*\
  !*** ./libs/ngrx-error/src/lib/ngrx-error-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: NgrxErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorInterceptorService", function() { return NgrxErrorInterceptorService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "T13k");







class NgrxErrorInterceptorService {
    constructor(facade) {
        this.facade = facade;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error, caught) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                switch (error.status) {
                    case 401:
                        this.facade.throw401Error(error);
                        break;
                    case 404:
                        this.facade.throw404Error(error);
                        break;
                    default:
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
NgrxErrorInterceptorService.ɵfac = function NgrxErrorInterceptorService_Factory(t) { return new (t || NgrxErrorInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorFacade"])); };
NgrxErrorInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NgrxErrorInterceptorService, factory: NgrxErrorInterceptorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgrxErrorInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorFacade"] }]; }, null); })();


/***/ }),

/***/ "mDOX":
/*!********************************************!*\
  !*** ./apps/stitchwill-vendor/src/main.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "nUOV");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "e7ns");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "nUOV":
/*!****************************************************************!*\
  !*** ./apps/stitchwill-vendor/src/environments/environment.ts ***!
  \****************************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api_url: "https://localhost:44399/api/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ndgL":
/*!**************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts ***!
  \**************************************************************/
/*! exports provided: ngrxFormsFeatureKey, ngrxFormsInitialState, ngrxFormsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsFeatureKey", function() { return ngrxFormsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return ngrxFormsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return ngrxFormsReducer; });
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const ngrxFormsFeatureKey = 'ngrxForms';
const ngrxFormsInitialState = {
    data: {},
    structure: [],
    valid: true,
    errors: [],
    touched: false,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(ngrxFormsInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setData"], (state, action) => (Object.assign(Object.assign({}, state), { data: action.data }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["updateData"], (state, action) => {
    const data = Object.assign(Object.assign({}, state.data), action.data);
    return Object.assign(Object.assign({}, state), { data, touched: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setStructure"], (state, action) => (Object.assign(Object.assign({}, state), { structure: action.structure.slice(0) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["setErrors"], (state, action) => (Object.assign(Object.assign({}, state), { errors: action.errors }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["initializeErrors"], (state, action) => (Object.assign(Object.assign({}, state), { errors: [] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["initializeForm"], (state, action) => ngrxFormsInitialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_0__["resetForm"], (state, action) => (Object.assign(Object.assign({}, state), { touched: false }))));
function ngrxFormsReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "rIoB":
/*!********************************************************!*\
  !*** ./libs/auth/src/lib/token-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-jwt.service */ "5HVB");




class TokenInterceptorService {
    constructor(localStorage) {
        this.localStorage = localStorage;
    }
    intercept(request, next) {
        let token;
        this.localStorage.getItem().subscribe(t => (token = t));
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${token}`,
                },
            });
        }
        return next.handle(request);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageJwtService"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageJwtService"] }]; }, null); })();


/***/ }),

/***/ "v3oI":
/*!****************************************!*\
  !*** ./libs/api/src/lib/api.module.ts ***!
  \****************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "yPkS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ApiModule {
}
ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ApiModule });
ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(); }, providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ApiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
                providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "w6+i":
/*!*************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts ***!
  \*************************************************************/
/*! exports provided: NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return NgrxFormsFacade; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngrx-forms.selectors */ "WgHb");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-forms.actions */ "StMj");






class NgrxFormsFacade {
    constructor(store) {
        this.store = store;
        this.data$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getData);
        this.structure$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getStructure);
        this.errors$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getErrors);
        this.touched$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsQuery"].getTouchedForm);
    }
    setStructure(structure) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["setStructure"]({ structure }));
    }
    setData(data) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["setData"]({ data }));
    }
    updateData(data) {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["updateData"]({ data }));
    }
    initializeForm() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["initializeForm"]());
    }
    initializeErrors() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["initializeErrors"]());
    }
    resetForm() {
        this.store.dispatch(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["resetForm"]());
    }
}
NgrxFormsFacade.ɵfac = function NgrxFormsFacade_Factory(t) { return new (t || NgrxFormsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
NgrxFormsFacade.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgrxFormsFacade, factory: NgrxFormsFacade.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxFormsFacade, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "woSD":
/*!**************************************************************!*\
  !*** ./libs/ngrx-router/src/lib/+state/router.interfaces.ts ***!
  \**************************************************************/
/*! exports provided: ngrxRouterFeatureKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxRouterFeatureKey", function() { return ngrxRouterFeatureKey; });
const ngrxRouterFeatureKey = 'router';


/***/ }),

/***/ "yPkS":
/*!*****************************************!*\
  !*** ./libs/api/src/lib/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var apps_stitchwill_vendor_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apps/stitchwill-vendor/src/environments/environment */ "nUOV");





class ApiService {
    constructor(http) {
        this.http = http;
    }
    get(url, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()) {
        return this.http.get(`${apps_stitchwill_vendor_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, {
            headers: this.headers,
            params,
        });
    }
    post(url, data) {
        return this.http.post(`${apps_stitchwill_vendor_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, JSON.stringify(data), { headers: this.headers });
    }
    put(url, data) {
        return this.http.put(`${apps_stitchwill_vendor_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, JSON.stringify(data), {
            headers: this.headers,
        });
    }
    delete(url) {
        return this.http.delete(`${apps_stitchwill_vendor_src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url}${url}`, {
            headers: this.headers,
        });
    }
    get headers() {
        const headersConfig = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headersConfig);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zt7d":
/*!***********************************************************************!*\
  !*** ./libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts ***!
  \***********************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class TextareaComponent {
}
TextareaComponent.ɵfac = function TextareaComponent_Factory(t) { return new (t || TextareaComponent)(); };
TextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextareaComponent, selectors: [["app-textarea"]], inputs: { field: "field", group: "group" }, decls: 3, vars: 4, consts: [[1, "form-group", 3, "formGroup"], [1, "form-control", "form-control-lg", 3, "formControlName"]], template: function TextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.field == null ? null : ctx.field.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rows", (ctx.field == null ? null : ctx.field.attrs == null ? null : ctx.field.attrs.rows) || 5)("placeholder", ctx.field == null ? null : ctx.field.placeholder);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0YXJlYS5jb21wb25lbnQuY3NzIn0= */"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-textarea',
                templateUrl: './textarea.component.html',
                styleUrls: ['./textarea.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map