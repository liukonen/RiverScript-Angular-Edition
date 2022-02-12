"use strict";
(self["webpackChunkChatAng"] = self["webpackChunkChatAng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-component/messages-component.component */ 7698);



class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'River - RiveScript based chatbot in Angular';
        this.titleService.setTitle(this.title);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-messages-component");
    } }, directives: [_messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_0__.MessagesComponentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-component/messages-component.component */ 7698);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);

 // <-- NgModel lives here








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_2__.MessagesComponentComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 9901:
/*!*******************************************!*\
  !*** ./src/app/chat-interface.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatInterfaceService": () => (/* binding */ ChatInterfaceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class ChatInterfaceService {
    constructor(http) {
        this.http = http;
        this.hostUrl = "https://bot.liukonen.dev";
        this.hostUrlBackup = "https://river-backend.herokuapp.com";
    }
    Talk(message) {
        try {
            return this.http.get(this.hostUrl, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('text', message), responseType: "json" });
        }
        catch (_a) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
                .set('Bypass-Tunnel-Reminder', '*')
                .set('User-Agent', 'Chatbot');
            return this.http.get(this.hostUrlBackup, { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('text', message), responseType: "json" });
        }
    }
}
ChatInterfaceService.ɵfac = function ChatInterfaceService_Factory(t) { return new (t || ChatInterfaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ChatInterfaceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatInterfaceService, factory: ChatInterfaceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7698:
/*!********************************************************************!*\
  !*** ./src/app/messages-component/messages-component.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponentComponent": () => (/* binding */ MessagesComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _chat_interface_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-interface.service */ 9901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




const _c0 = ["scrollMe"];
function MessagesComponentComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessagesComponentComponent_div_19_div_1_Template, 8, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MessagesComponentComponent_div_19_ng_template_2_Template, 8, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !message_r2.UserIsHuman)("ngIfElse", _r4);
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
MessagesComponentComponent.ɵfac = function MessagesComponentComponent_Factory(t) { return new (t || MessagesComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_chat_interface_service__WEBPACK_IMPORTED_MODULE_0__.ChatInterfaceService)); };
MessagesComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponentComponent, selectors: [["app-messages-component"]], viewQuery: function MessagesComponentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 30, vars: 3, consts: [["id", "app", 1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "h-100"], [1, "col-12", "card", "h-100"], [1, "card-header", "msg_head"], [1, "d-flex", "bd-highlight", "justify-content-between"], [1, "img_cont"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img"], [1, "online_icon"], [1, "user_info"], ["id", "msgCount"], ["href", "#", "aria-label", "Info", "data-toggle", "modal", "data-target", "#aboutModal", 1, "text-light"], [1, "fas", "fa-info-circle", "fa-3x"], ["id", "dialogue", 1, "card-body", "msg_card_body", "scr"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "ngSubmit"], [1, "input-group"], [1, "input-group-append"], [1, "input-group-text", "attach_btn"], ["type", "text", "aria-label", "Input Message", "name", "mgText", "placeholder", "Type your message...", 1, "form-control", "type_msg", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "input-group-text", "send_btn"], [1, "fas", "fa-location-arrow"], ["class", "d-flex justify-content-start mb-4", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-start", "mb-4"], [1, "img_cont_msg"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img_msg"], [1, "msg_cotainer"], [1, "msg_time"], [1, "d-flex", "justify-content-end", "mb-4"], [1, "msg_cotainer_send"], [1, "msg_time_send"], ["src", "./assets/images/user.png", "alt", "User", 1, "rounded-circle", "user_img_msg"]], template: function MessagesComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Chat with River");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MessagesComponentComponent_div_19_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MessagesComponentComponent_Template_form_ngSubmit_21_listener() { return ctx.sendMessage(ctx.messageText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponentComponent_Template_input_ngModelChange_25_listener($event) { return ctx.messageText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.messageText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".card[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n\n.msg_card_body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-radius: 15px 15px 0 0 !important;\n  border-bottom: 0 !important;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  border-radius: 0 0 15px 15px !important;\n  border-top: 0 !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn[_ngcontent-%COMP%] {\n  border-radius: 15px 0 0 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.send_btn[_ngcontent-%COMP%] {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.user_img[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.user_img_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.img_cont[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  width: 70px;\n}\n\n.img_cont_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.online_icon[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  background-color: #4cd137;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0.4em;\n  border: 1.5px solid white;\n}\n\n.user_info[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 15px;\n}\n\n.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: white;\n}\n\n.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 25px;\n  background-color: #82ccdd;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_cotainer_send[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 25px;\n  background-color: #78e08f;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n  left: 0;\n}\n\n.msg_time_send[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -15px;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 10px;\n  right: 0;\n}\n\n.msg_head[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[v-cloak][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.scr[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLDhCQUFBO0VBQ0EsK0NBQUE7QUFQSjs7QUFTQTtFQUNJLGdCQUFBO0FBTko7O0FBUUE7RUFDSSx1Q0FBQTtFQUNBLDJCQUFBO0FBTEo7O0FBT0E7RUFDSSx1Q0FBQTtFQUNBLHdCQUFBO0FBSko7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQVVBO0VBSkksK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBSUEsdUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQU9BO0VBQ0csMkJBQUE7RUFDQSx1QkFBQTtBQUpIOztBQVVBO0VBQ0ksdUNBQUE7RUFsQkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQUFKOztBQU1BO0VBQ0ksdUNBQUE7RUF0QkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQVFKOztBQUVBO0VBQ0ksdUNBQUE7RUExQkEsK0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBYUEsZUFBQTtBQWdCSjs7QUFFQTtFQUhJLFlBcERVO0VBcURWLFdBckRVO0VBeURWLDJCQUFBO0FBRUo7O0FBQ0E7RUFSSSxZQW5EVTtFQW9EVixXQXBEVTtFQTZEViwyQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFiQSxZQXBEVTtFQXFEVixXQXJEVTtBQXVFZDs7QUFIQTtFQWhCSSxZQW5EVTtFQW9EVixXQXBEVTtBQTJFZDs7QUFMQTtFQUNJLGtCQUFBO0VBcEJBLFlBdERNO0VBdUROLFdBdkRNO0VBNEVOLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBckZNO0FBK0ZWOztBQVRJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFXUjs7QUFWSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQVlSOztBQURBO0VBUkksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFLUztFQUpULGFBQUE7RUFDQSxrQkFBQTtBQWFKOztBQVJBO0VBWEksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFRUztFQVBULGFBQUE7RUFDQSxrQkFBQTtBQXVCSjs7QUFUQTtFQUxJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUlBLE9BQUE7QUFlSjs7QUFiQTtFQVRJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQVFBLFFBQUE7QUFtQko7O0FBakJBO0VBQ0ksa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksYUFBQTtBQXFCSjs7QUFwQkE7RUFDSSxjQUFBO0FBdUJKIiwiZmlsZSI6Im1lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdGFydDogIzY2Y2NjY1xyXG4kbWlkIDogIzg3YTllOVxyXG4kVGFpbCA6ICM3ZjdmZjdcclxuJFJhZGl1cyA6IDE1cHhcclxuJEl0ZW1CRyA6IHJnYmEoMCwwLDAsMC4zKVxyXG4kQm90SW1nU2l6ZSA6IDcwcHhcclxuJFVzckltZ1NpemUgOiA0MHB4XHJcblxyXG4uY2FyZFxyXG4gICAgYm9yZGVyLXJhZGl1czogJFJhZGl1cyAhaW1wb3J0YW50XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkSXRlbUJHICFpbXBvcnRhbnRcclxuXHJcbi5tc2dfY2FyZF9ib2R5XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvXHJcblxyXG4uY2FyZC1oZWFkZXJcclxuICAgIGJvcmRlci1yYWRpdXM6ICRSYWRpdXMgJFJhZGl1cyAwIDAgIWltcG9ydGFudFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMCAhaW1wb3J0YW50XHJcblxyXG4uY2FyZC1mb290ZXJcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAkUmFkaXVzICRSYWRpdXMgIWltcG9ydGFudFxyXG4gICAgYm9yZGVyLXRvcDogMCAhaW1wb3J0YW50XHJcblxyXG4uY29udGFpbmVyXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcclxuXHJcbj1zaGFyZWJveFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEl0ZW1CRyAhaW1wb3J0YW50XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudFxyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcclxuXHJcbi50eXBlX21zZ1xyXG4gICAgK3NoYXJlYm94XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudFxyXG4gICAgb3ZlcmZsb3cteTogYXV0b1xyXG5cclxuLnR5cGVfbXNnOmZvY3VzXHJcbiAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICBvdXRsaW5lOjBweCAhaW1wb3J0YW50XHJcblxyXG49c2hhcmVkQnV0dG9uXHJcbiAgICArc2hhcmVib3hcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLmF0dGFjaF9idG5cclxuICAgIGJvcmRlci1yYWRpdXM6ICRSYWRpdXMgMCAwICRSYWRpdXMgIWltcG9ydGFudFxyXG4gICAgK3NoYXJlZEJ1dHRvblxyXG5cclxuLnNlbmRfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbi5zZWFyY2hfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbj1pbWdGb3JtYXQoJHNpemUpXHJcbiAgICBoZWlnaHQ6ICRzaXplXHJcbiAgICB3aWR0aDogJHNpemVcclxuXHJcbi51c2VyX2ltZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkQm90SW1nU2l6ZSlcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2Y1ZjZmYVxyXG5cclxuXHJcbi51c2VyX2ltZ19tc2dcclxuICAgICtpbWdGb3JtYXQoJFVzckltZ1NpemUpXHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNmNWY2ZmFcclxuXHJcbi5pbWdfY29udFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAraW1nRm9ybWF0KCRCb3RJbWdTaXplKVxyXG5cclxuLmltZ19jb250X21zZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkVXNySW1nU2l6ZSlcclxuXHJcbi5vbmxpbmVfaWNvblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAraW1nRm9ybWF0KCRSYWRpdXMpXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkMTM3XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCVcclxuICAgIGJvdHRvbTogMC4yZW1cclxuICAgIHJpZ2h0OiAwLjRlbVxyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZVxyXG5cclxuLnVzZXJfaW5mb1xyXG4gICAgbWFyZ2luLXRvcDogYXV0b1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0b1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRSYWRpdXNcclxuICAgIHNwYW5cclxuICAgICAgICBmb250LXNpemU6IDIwcHhcclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgIHBcclxuICAgICAgICBmb250LXNpemU6IDEwcHhcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpXHJcblxyXG49bXNnQ29udCgkY29sb3IpXHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvXHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuXHJcbi5tc2dfY290YWluZXJcclxuICAgICttc2dDb250KCM4MmNjZGQpXHJcblxyXG4ubXNnX2NvdGFpbmVyX3NlbmRcclxuICAgICttc2dDb250KCM3OGUwOGYpXHJcblxyXG49bXNnVGltZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBib3R0b206IC0kUmFkaXVzXHJcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpXHJcbiAgICBmb250LXNpemU6IDEwcHhcclxuXHJcbi5tc2dfdGltZVxyXG4gICAgK21zZ1RpbWVcclxuICAgIGxlZnQ6IDBcclxuXHJcbi5tc2dfdGltZV9zZW5kXHJcbiAgICArbXNnVGltZVxyXG4gICAgcmlnaHQ6IDBcclxuICAgIFxyXG4ubXNnX2hlYWRcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cclxuW3YtY2xvYWtdXHJcbiAgICBkaXNwbGF5OiBub25lXHJcbi5zY3JcclxuICAgIG92ZXJmbG93OiBhdXRvIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map