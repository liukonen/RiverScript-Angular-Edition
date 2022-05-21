"use strict";
(self["webpackChunkChatAng"] = self["webpackChunkChatAng"] || []).push([["main"],{

/***/ 2819:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 9853);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2178:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9853);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 3379);
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages-component/messages-component.component */ 9109);



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

/***/ 6064:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 3379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 7986);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2178);
/* harmony import */ var _messages_component_messages_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-component/messages-component.component */ 9109);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 34);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 7540);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 9853);

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

/***/ 365:
/*!*******************************************!*\
  !*** ./src/app/chat-interface.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatInterfaceService": () => (/* binding */ ChatInterfaceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 34);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9853);




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

/***/ 9109:
/*!********************************************************************!*\
  !*** ./src/app/messages-component/messages-component.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponentComponent": () => (/* binding */ MessagesComponentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 9853);
/* harmony import */ var _chat_interface_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-interface.service */ 365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 2060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 7986);




const _c0 = ["scrollMe"];
function MessagesComponentComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 24)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.Message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.timestamp.toLocaleTimeString());
} }
function MessagesComponentComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MessagesComponentComponent_div_16_div_1_Template, 8, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MessagesComponentComponent_div_16_ng_template_2_Template, 8, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
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
    } }, decls: 24, vars: 3, consts: [["id", "app", 1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "h-100"], [1, "col-12", "card", "h-100"], [1, "card-header", "msg_head"], [1, "d-flex", "bd-highlight", "justify-content-between"], [1, "user_info"], ["id", "msgCount"], ["href", "#", "aria-label", "Info", "data-bs-toggle", "modal", "data-bs-target", "#aboutModal", 1, "text-light"], [1, "fa-solid", "fa-address-card", "fa-2x"], ["id", "dialogue", 1, "card-body", "msg_card_body", "scr"], ["scrollMe", ""], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "ngSubmit"], [1, "input-group"], [1, "input-group-text", "attach_btn"], ["type", "text", "aria-label", "Input Message", "name", "mgText", "placeholder", "Type your message...", "autocomplete", "off", 1, "form-control", "type_msg", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "input-group-text", "send_btn"], [1, "fas", "fa-location-arrow"], ["class", "d-flex justify-content-start mb-4", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "d-flex", "justify-content-start", "mb-4"], [1, "img_cont_msg"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img_msg"], [1, "msg_cotainer"], [1, "msg_time"], [1, "d-flex", "justify-content-end", "mb-4"], [1, "msg_cotainer_send"], [1, "msg_time_send"], ["src", "./assets/images/user.png", "alt", "User", 1, "rounded-circle", "user_img_msg"]], template: function MessagesComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "River Chatbot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p")(9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MessagesComponentComponent_div_16_Template, 4, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12)(18, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function MessagesComponentComponent_Template_form_ngSubmit_18_listener() { return ctx.sendMessage(ctx.messageText); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponentComponent_Template_input_ngModelChange_21_listener($event) { return ctx.messageText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.messageText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: [".msg_card_body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #008bff;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #008bff;\n}\n\n.container[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn[_ngcontent-%COMP%] {\n  border-radius: 1em 0 0 1em !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.send_btn[_ngcontent-%COMP%] {\n  border-radius: 0 1em 1em 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n  border-radius: 0 1em 1em 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: white !important;\n  cursor: pointer;\n}\n\n.user_img[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.user_img_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.img_cont[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  width: 70px;\n}\n\n.img_cont_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  color: white;\n}\n\n.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n  color: black;\n  border-radius: 1px 1.25em 1.25em 1.25em;\n  padding: 15px 10px;\n  min-width: 120px;\n  margin-top: auto;\n  margin: 5px;\n  background-color: #e6e5eb;\n  position: relative;\n  font-family: monospace Arial, Helvetica, sans-serif;\n}\n\n.msg_cotainer_send[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 1.25em 1px 1.25em 1.25em;\n  padding: 15px 10px;\n  min-width: 120px;\n  margin-top: auto;\n  margin: 5px;\n  background-color: #008bff;\n  position: relative;\n  font-family: monospace Arial, Helvetica, sans-serif;\n}\n\n.msg_time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2em;\n  color: #00000080;\n  font-size: 0.6em;\n  left: 0;\n}\n\n.msg_time_send[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2em;\n  color: #00000080;\n  font-size: 0.6em;\n  right: 0;\n}\n\n.msg_head[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[v-cloak][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.scr[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLGdCQUFBO0FBVEo7O0FBV0E7RUFDRSx5QkFkYztBQU1oQjs7QUFXQTtFQUNFLHlCQWxCYztBQVVoQjs7QUFXQTtFQUNJLHFCQUFBO0FBUko7O0FBZUE7RUFKSSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFJQSx1QkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBWUE7RUFDRywyQkFBQTtFQUNBLHVCQUFBO0FBVEg7O0FBZUE7RUFDSSxxQ0FBQTtFQWxCQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFhQSxlQUFBO0FBTEo7O0FBV0E7RUFDSSxxQ0FBQTtFQXRCQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFhQSxlQUFBO0FBR0o7O0FBT0E7RUFDSSxxQ0FBQTtFQTFCQSwrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFhQSxlQUFBO0FBV0o7O0FBT0E7RUFISSxZQW5EVTtFQW9EVixXQXBEVTtFQXdEViwyQkFBQTtBQUhKOztBQU1BO0VBUkksWUFsRFU7RUFtRFYsV0FuRFU7RUE0RFYsMkJBQUE7QUFGSjs7QUFJQTtFQUNJLGtCQUFBO0VBYkEsWUFuRFU7RUFvRFYsV0FwRFU7QUFpRWQ7O0FBRUE7RUFoQkksWUFsRFU7RUFtRFYsV0FuRFU7QUFxRWQ7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUFDUjs7QUFVQTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtFQVZBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkF4RmU7RUF5RmYsa0JBQUE7RUFDQSxtREFBQTtBQUlKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLHVDQUFBO0VBZkEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXpGWTtFQTBGWixrQkFBQTtFQUNBLG1EQUFBO0FBZ0JKOztBQUVBO0VBTEksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUlBLE9BQUE7QUFJSjs7QUFEQTtFQVZJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFTQSxRQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtBQVNKOztBQVJBO0VBQ0ksY0FBQTtBQVdKIiwiZmlsZSI6Im1lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRTdGFuZGFyZENvbG9yOiAjMDA4YmZmXHJcbiRTdGFuZGFyZFJlc3BvbnNlOiAjZTZlNWViXHJcbiRSYWRpdXMgOiAxZW1cclxuJEl0ZW1CRyA6IHJnYigwLDAsMCwwLjMpXHJcbiRCb3RJbWdTaXplIDogNzBweFxyXG4kVXNySW1nU2l6ZSA6IDQwcHhcclxuXHJcbi5jYXJkXHJcblxyXG5cclxuLm1zZ19jYXJkX2JvZHlcclxuICAgIG92ZXJmbG93LXk6IGF1dG9cclxuXHJcbi5jYXJkLWhlYWRlclxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRTdGFuZGFyZENvbG9yXHJcblxyXG5cclxuLmNhcmQtZm9vdGVyXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJFN0YW5kYXJkQ29sb3JcclxuXHJcblxyXG4uY29udGFpbmVyXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcclxuXHJcbj1zaGFyZWJveFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEl0ZW1CRyAhaW1wb3J0YW50XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudFxyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnRcclxuXHJcbi50eXBlX21zZ1xyXG4gICAgK3NoYXJlYm94XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudFxyXG4gICAgb3ZlcmZsb3cteTogYXV0b1xyXG5cclxuLnR5cGVfbXNnOmZvY3VzXHJcbiAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICBvdXRsaW5lOjBweCAhaW1wb3J0YW50XHJcblxyXG49c2hhcmVkQnV0dG9uXHJcbiAgICArc2hhcmVib3hcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLmF0dGFjaF9idG5cclxuICAgIGJvcmRlci1yYWRpdXM6ICRSYWRpdXMgMCAwICRSYWRpdXMgIWltcG9ydGFudFxyXG4gICAgK3NoYXJlZEJ1dHRvblxyXG5cclxuLnNlbmRfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbi5zZWFyY2hfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbj1pbWdGb3JtYXQoJHNpemUpXHJcbiAgICBoZWlnaHQ6ICRzaXplXHJcbiAgICB3aWR0aDogJHNpemVcclxuXHJcbi51c2VyX2ltZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkQm90SW1nU2l6ZSlcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2Y1ZjZmYVxyXG5cclxuXHJcbi51c2VyX2ltZ19tc2dcclxuICAgICtpbWdGb3JtYXQoJFVzckltZ1NpemUpXHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNmNWY2ZmFcclxuXHJcbi5pbWdfY29udFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAraW1nRm9ybWF0KCRCb3RJbWdTaXplKVxyXG5cclxuLmltZ19jb250X21zZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkVXNySW1nU2l6ZSlcclxuXHJcblxyXG5cclxuLnVzZXJfaW5mb1xyXG4gICAgc3BhblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW1cclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgIHBcclxuICAgICAgICBmb250LXNpemU6IDAuNmVtXHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KVxyXG5cclxuPW1zZ0NvbnQoJGNvbG9yKVxyXG4gICAgcGFkZGluZzogMTVweCAxMHB4XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvXHJcbiAgICBtYXJnaW46IDVweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG5cclxuLm1zZ19jb3RhaW5lclxyXG4gICAgY29sb3I6IGJsYWNrXHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggMS4yNWVtIDEuMjVlbSAxLjI1ZW1cclxuICAgICttc2dDb250KCRTdGFuZGFyZFJlc3BvbnNlKVxyXG5cclxuLm1zZ19jb3RhaW5lcl9zZW5kXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVlbSAxcHggMS4yNWVtIDEuMjVlbVxyXG4gICAgK21zZ0NvbnQoJFN0YW5kYXJkQ29sb3IpXHJcblxyXG49bXNnVGltZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBib3R0b206IC0kUmFkaXVzICoyXHJcbiAgICBjb2xvcjogIzAwMDAwMDgwXHJcbiAgICBmb250LXNpemU6IDAuNmVtXHJcblxyXG4ubXNnX3RpbWVcclxuICAgICttc2dUaW1lXHJcbiAgICBsZWZ0OiAwXHJcblxyXG5cclxuLm1zZ190aW1lX3NlbmRcclxuICAgICttc2dUaW1lXHJcbiAgICByaWdodDogMFxyXG5cclxuLm1zZ19oZWFkXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuXHJcblt2LWNsb2FrXVxyXG4gICAgZGlzcGxheTogbm9uZVxyXG4uc2NyXHJcbiAgICBvdmVyZmxvdzogYXV0b1xyXG4iXX0= */"] });


/***/ }),

/***/ 115:
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

/***/ 1478:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 9853);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6064);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 115);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1478)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map