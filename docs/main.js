(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/luke/git/RiverScript-Angular-Edition/ChatAng/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-component/messages-component.component */ "iCrp");




class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'River - RiveScript based chatbot in Angular';
        this.titleService.setTitle(this.title);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-messages-component");
    } }, directives: [_messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "XqsF":
/*!*******************************************!*\
  !*** ./src/app/chat-interface.service.ts ***!
  \*******************************************/
/*! exports provided: ChatInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInterfaceService", function() { return ChatInterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ChatInterfaceService {
    constructor(http) {
        this.http = http;
        this.hostUrl = "https://bot.liukonen.dev";
        this.hostUrlBackup = "https://river-backend.herokuapp.com";
    }
    Talk(message) {
        try {
            return this.http.get(this.hostUrl, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('text', message), responseType: "json" });
        }
        catch (_a) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Bypass-Tunnel-Reminder', '*')
                .set('User-Agent', 'Chatbot');
            return this.http.get(this.hostUrlBackup, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('text', message), responseType: "json" });
        }
    }
}
ChatInterfaceService.ɵfac = function ChatInterfaceService_Factory(t) { return new (t || ChatInterfaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChatInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatInterfaceService, factory: ChatInterfaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatInterfaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-component/messages-component.component */ "iCrp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "AytR");


 // <-- NgModel lives here








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iCrp":
/*!********************************************************************!*\
  !*** ./src/app/messages-component/messages-component.component.ts ***!
  \********************************************************************/
/*! exports provided: MessagesComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponentComponent", function() { return MessagesComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chat_interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-interface.service */ "XqsF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





const _c0 = ["scrollMe"];
function MessagesComponentComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessagesComponentComponent_div_19_div_1_Template, 8, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponentComponent_div_19_ng_template_2_Template, 8, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !message_r2.UserIsHuman)("ngIfElse", _r4);
} }
class MessagesComponentComponent {
    constructor(botService) {
        this.botService = botService;
        this.messages = [];
        this.Counter = 0;
    }
    ngOnInit() {
        this.scrollToBottom();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    sendMessage(message) {
        let msg = this.messageText;
        this.messageText = "";
        this.messages.push({ timestamp: new Date(), Message: msg, UserIsHuman: true });
        this.TalkToBot(msg);
        this.Counter++;
    }
    TalkToBot(message) {
        this.botService.Talk(message).subscribe((data) => { this.messages.push({ timestamp: new Date(), Message: data.response, UserIsHuman: false }); });
    }
}
MessagesComponentComponent.ɵfac = function MessagesComponentComponent_Factory(t) { return new (t || MessagesComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_interface_service__WEBPACK_IMPORTED_MODULE_1__["ChatInterfaceService"])); };
MessagesComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponentComponent, selectors: [["app-messages-component"]], viewQuery: function MessagesComponentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 30, vars: 3, consts: [["id", "app", 1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "h-100"], [1, "col-12", "card", "h-100"], [1, "card-header", "msg_head"], [1, "d-flex", "bd-highlight", "justify-content-between"], [1, "img_cont"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img"], [1, "online_icon"], [1, "user_info"], ["id", "msgCount"], ["href", "#", "aria-label", "Info", "data-toggle", "modal", "data-target", "#aboutModal", 1, "text-light"], [1, "fas", "fa-info-circle", "fa-3x"], ["id", "dialogue", 1, "card-body", "msg_card_body", "scr"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "ngSubmit"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text", "attach_btn"], ["type", "text", "aria-label", "Input Message", "name", "mgText", "placeholder", "Type your message...", 1, "form-control", "type_msg", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "input-group-text", "send_btn"], [1, "fas", "fa-location-arrow"], ["class", "d-flex justify-content-start mb-4", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-start", "mb-4"], [1, "img_cont_msg"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img_msg"], [1, "msg_cotainer"], [1, "msg_time"], [1, "d-flex", "justify-content-end", "mb-4"], [1, "msg_cotainer_send"], [1, "msg_time_send"], ["src", "./assets/images/user.png", "alt", "User", 1, "rounded-circle", "user_img_msg"]], template: function MessagesComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Chat with River");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MessagesComponentComponent_div_19_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MessagesComponentComponent_Template_form_ngSubmit_21_listener() { return ctx.sendMessage(ctx.messageText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MessagesComponentComponent_Template_input_ngModelChange_25_listener($event) { return ctx.messageText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.messageText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n\n.msg_card_body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0 !important;\n  border-bottom: 0 !important;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 15px 15px !important;\n  border-top: 0 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn[_ngcontent-%COMP%] {\n  border-radius: 15px 0 0 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.send_btn[_ngcontent-%COMP%] {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.user_img[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.user_img_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.img_cont[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  width: 70px;\n}\n\n.img_cont_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.online_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  background-color: #4cd137;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0.4em;\n  border: 1.5px solid white;\n}\n\n.user_info[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 15px;\n}\n\n.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n\n.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 25px;\n  background-color: #82ccdd;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_cotainer_send[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 25px;\n  background-color: #78e08f;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n  left: 0;\n}\n\n.msg_time_send[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n  right: 0;\n}\n\n.msg_head[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[v-cloak][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.scr[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLDhCQUFBO0VBQ0EsK0NBQUE7QUFQSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBUUE7RUFDSSx1Q0FBQTtFQUNBLDJCQUFBO0FBTEo7O0FBT0E7RUFDSSx1Q0FBQTtFQUNBLHdCQUFBO0FBSko7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQVVBO0VBSkksK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBSUEsdUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQU9BO0VBQ0csMkJBQUE7RUFDQSx1QkFBQTtBQUpIOztBQVVBO0VBQ0ksdUNBQUE7RUFsQkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQUFKOztBQU1BO0VBQ0ksdUNBQUE7RUF0QkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQVFKOztBQUVBO0VBQ0ksdUNBQUE7RUExQkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQWdCSjs7QUFFQTtFQUhJLFlBcERVO0VBcURWLFdBckRVO0VBeURWLDJCQUFBO0FBRUo7O0FBQ0E7RUFSSSxZQW5EVTtFQW9EVixXQXBEVTtFQTZEViwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFiQSxZQXBEVTtFQXFEVixXQXJEVTtBQXVFZDs7QUFIQTtFQWhCSSxZQW5EVTtFQW9EVixXQXBEVTtBQTJFZDs7QUFMQTtFQUNJLGtCQUFBO0VBcEJBLFlBdERNO0VBdUROLFdBdkRNO0VBNEVOLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBckZNO0FBK0ZWOztBQVRJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFXUjs7QUFWSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQVlSOztBQURBO0VBUkksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFLUztFQUpULGFBQUE7RUFDQSxrQkFBQTtBQWFKOztBQVJBO0VBWEksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFRUztFQVBULGFBQUE7RUFDQSxrQkFBQTtBQXVCSjs7QUFUQTtFQUxJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUlBLE9BQUE7QUFlSjs7QUFiQTtFQVRJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQVFBLFFBQUE7QUFtQko7O0FBakJBO0VBQ0ksa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksYUFBQTtBQXFCSjs7QUFwQkE7RUFDSSxjQUFBO0FBdUJKIiwiZmlsZSI6Im1lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdGFydDogIzY2Y2NjY1xuJG1pZCA6ICM4N2E5ZTlcbiRUYWlsIDogIzdmN2ZmN1xuJFJhZGl1cyA6IDE1cHhcbiRJdGVtQkcgOiByZ2JhKDAsMCwwLDAuMylcbiRCb3RJbWdTaXplIDogNzBweFxuJFVzckltZ1NpemUgOiA0MHB4XG5cbi5jYXJkXG4gICAgYm9yZGVyLXJhZGl1czogJFJhZGl1cyAhaW1wb3J0YW50XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEl0ZW1CRyAhaW1wb3J0YW50XG5cbi5tc2dfY2FyZF9ib2R5XG4gICAgb3ZlcmZsb3cteTogYXV0b1xuXG4uY2FyZC1oZWFkZXJcbiAgICBib3JkZXItcmFkaXVzOiAkUmFkaXVzICRSYWRpdXMgMCAwICFpbXBvcnRhbnRcbiAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnRcblxuLmNhcmQtZm9vdGVyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwICRSYWRpdXMgJFJhZGl1cyAhaW1wb3J0YW50XG4gICAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50XG5cbi5jb250YWluZXJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcblxuPXNoYXJlYm94XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEl0ZW1CRyAhaW1wb3J0YW50XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnRcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudFxuXG4udHlwZV9tc2dcbiAgICArc2hhcmVib3hcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudFxuICAgIG92ZXJmbG93LXk6IGF1dG9cblxuLnR5cGVfbXNnOmZvY3VzXG4gICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcbiAgIG91dGxpbmU6MHB4ICFpbXBvcnRhbnRcblxuPXNoYXJlZEJ1dHRvblxuICAgICtzaGFyZWJveFxuICAgIGN1cnNvcjogcG9pbnRlclxuXG4uYXR0YWNoX2J0blxuICAgIGJvcmRlci1yYWRpdXM6ICRSYWRpdXMgMCAwICRSYWRpdXMgIWltcG9ydGFudFxuICAgICtzaGFyZWRCdXR0b25cblxuLnNlbmRfYnRuXG4gICAgYm9yZGVyLXJhZGl1czogMCAkUmFkaXVzICRSYWRpdXMgMCAhaW1wb3J0YW50XG4gICAgK3NoYXJlZEJ1dHRvblxuXG4uc2VhcmNoX2J0blxuICAgIGJvcmRlci1yYWRpdXM6IDAgJFJhZGl1cyAkUmFkaXVzIDAgIWltcG9ydGFudFxuICAgICtzaGFyZWRCdXR0b25cblxuPWltZ0Zvcm1hdCgkc2l6ZSlcbiAgICBoZWlnaHQ6ICRzaXplXG4gICAgd2lkdGg6ICRzaXplXG5cbi51c2VyX2ltZ1xuICAgICtpbWdGb3JtYXQoJEJvdEltZ1NpemUpXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjVmNmZhXG5cblxuLnVzZXJfaW1nX21zZ1xuICAgICtpbWdGb3JtYXQoJFVzckltZ1NpemUpXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjZjVmNmZhXG5cbi5pbWdfY29udFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuICAgICtpbWdGb3JtYXQoJEJvdEltZ1NpemUpXG5cbi5pbWdfY29udF9tc2dcbiAgICAraW1nRm9ybWF0KCRVc3JJbWdTaXplKVxuXG4ub25saW5lX2ljb25cbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAraW1nRm9ybWF0KCRSYWRpdXMpXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDEzN1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJVxuICAgIGJvdHRvbTogMC4yZW1cbiAgICByaWdodDogMC40ZW1cbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHdoaXRlXG5cbi51c2VyX2luZm9cbiAgICBtYXJnaW4tdG9wOiBhdXRvXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0b1xuICAgIG1hcmdpbi1sZWZ0OiAkUmFkaXVzXG4gICAgc3BhblxuICAgICAgICBmb250LXNpemU6IDIwcHhcbiAgICAgICAgY29sb3I6IHdoaXRlXG4gICAgcFxuICAgICAgICBmb250LXNpemU6IDEwcHhcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KVxuXG49bXNnQ29udCgkY29sb3IpXG4gICAgbWFyZ2luLXRvcDogYXV0b1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG9cbiAgICBtYXJnaW4tbGVmdDogMTBweFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHhcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JcbiAgICBwYWRkaW5nOiAxMHB4XG4gICAgcG9zaXRpb246IHJlbGF0aXZlXG5cbi5tc2dfY290YWluZXJcbiAgICArbXNnQ29udCgjODJjY2RkKVxuXG4ubXNnX2NvdGFpbmVyX3NlbmRcbiAgICArbXNnQ29udCgjNzhlMDhmKVxuXG49bXNnVGltZVxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIGJvdHRvbTogLSRSYWRpdXNcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpXG4gICAgZm9udC1zaXplOiAxMHB4XG5cbi5tc2dfdGltZVxuICAgICttc2dUaW1lXG4gICAgbGVmdDogMFxuXG4ubXNnX3RpbWVfc2VuZFxuICAgICttc2dUaW1lXG4gICAgcmlnaHQ6IDBcbiAgICBcbi5tc2dfaGVhZFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuXG5bdi1jbG9ha11cbiAgICBkaXNwbGF5OiBub25lXG4uc2NyXG4gICAgb3ZlcmZsb3c6IGF1dG8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages-component',
                templateUrl: './messages-component.component.html',
                styleUrls: ['./messages-component.component.sass']
            }]
    }], function () { return [{ type: _chat_interface_service__WEBPACK_IMPORTED_MODULE_1__["ChatInterfaceService"] }]; }, { myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollMe']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
