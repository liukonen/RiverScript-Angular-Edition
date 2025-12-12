"use strict";
(self["webpackChunkChatAng"] = self["webpackChunkChatAng"] || []).push([["main"],{

/***/ 1328:
/*!********************************************************************!*\
  !*** ./src/app/messages-component/messages-component.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MessagesComponentComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 8357));
const i1 = tslib_1.__importStar(__webpack_require__(/*! ../chat-interface.service */ 9727));
const i2 = tslib_1.__importStar(__webpack_require__(/*! @angular/common */ 3126));
const i3 = tslib_1.__importStar(__webpack_require__(/*! @angular/forms */ 629));
const _c0 = ["scrollMe"];
function MessagesComponentComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22);
    i0.ɵɵelement(2, "img", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 24)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 25);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(message_r2.Message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(message_r2.timestamp.toLocaleTimeString());
  }
}
function MessagesComponentComponent_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 28);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 22);
    i0.ɵɵelement(7, "img", 29);
    i0.ɵɵelementEnd()();
  }
  if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(message_r2.Message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(message_r2.timestamp.toLocaleTimeString());
  }
}
function MessagesComponentComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, MessagesComponentComponent_div_16_div_1_Template, 8, 2, "div", 20)(2, MessagesComponentComponent_div_16_ng_template_2_Template, 8, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const elseBlock_r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !message_r2.UserIsHuman)("ngIfElse", elseBlock_r3);
  }
}
//import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
class MessagesComponentComponent {
  botService;
  myScrollContainer;
  messages = [];
  messageText;
  Counter = 0;
  constructor(botService) {
    this.botService = botService;
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
    } catch (err) {}
  }
  sendMessage(message) {
    let msg = this.messageText;
    this.messageText = "";
    this.messages.push({
      timestamp: new Date(),
      Message: msg,
      UserIsHuman: true
    });
    this.TalkToBot(msg);
    this.Counter++;
  }
  TalkToBot(message) {
    this.botService.Talk(message).subscribe(data => {
      this.messages.push({
        timestamp: new Date(),
        Message: data.response,
        UserIsHuman: false
      });
    });
  }
  static ɵfac = function MessagesComponentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MessagesComponentComponent)(i0.ɵɵdirectiveInject(i1.ChatInterfaceService));
  };
  static ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: MessagesComponentComponent,
    selectors: [["app-messages-component"]],
    viewQuery: function MessagesComponentComponent_Query(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.myScrollContainer = _t.first);
      }
    },
    standalone: false,
    decls: 24,
    vars: 3,
    consts: [["scrollMe", ""], ["elseBlock", ""], ["id", "app", 1, "container-fluid", "h-100"], [1, "row", "justify-content-center", "h-100"], [1, "col-12", "card", "h-100"], [1, "card-header", "msg_head"], [1, "d-flex", "bd-highlight", "justify-content-between"], [1, "user_info"], ["id", "msgCount"], ["href", "#", "aria-label", "Info", "data-bs-toggle", "modal", "data-bs-target", "#aboutModal", 1, "text-light"], [1, "fa-solid", "fa-address-card", "fa-2x"], ["id", "dialogue", 1, "card-body", "msg_card_body", "scr"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [3, "ngSubmit"], [1, "input-group"], [1, "input-group-text", "attach_btn"], ["type", "text", "aria-label", "Input Message", "name", "mgText", "placeholder", "Type your message...", "autocomplete", "off", 1, "form-control", "type_msg", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "input-group-text", "send_btn"], [1, "fas", "fa-location-arrow"], ["class", "d-flex justify-content-start mb-4", 4, "ngIf", "ngIfElse"], [1, "d-flex", "justify-content-start", "mb-4"], [1, "img_cont_msg"], ["src", "./assets/images/msrobot.png", "alt", "River", 1, "rounded-circle", "user_img_msg"], [1, "msg_cotainer"], [1, "msg_time"], [1, "d-flex", "justify-content-end", "mb-4"], [1, "msg_cotainer_send"], [1, "msg_time_send"], ["src", "./assets/images/user.png", "alt", "User", 1, "rounded-circle", "user_img_msg"]],
    template: function MessagesComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "span");
        i0.ɵɵtext(7, "River Chatbot");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p")(9, "i", 8);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(11, " Messages");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(12, "a", 9);
        i0.ɵɵelement(13, "i", 10);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(14, "div", 11, 0);
        i0.ɵɵtemplate(16, MessagesComponentComponent_div_16_Template, 4, 2, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 13)(18, "form", 14);
        i0.ɵɵlistener("ngSubmit", function MessagesComponentComponent_Template_form_ngSubmit_18_listener() {
          i0.ɵɵrestoreView(_r1);
          return i0.ɵɵresetView(ctx.sendMessage(ctx.messageText));
        });
        i0.ɵɵelementStart(19, "div", 15);
        i0.ɵɵelement(20, "span", 16);
        i0.ɵɵelementStart(21, "input", 17);
        i0.ɵɵtwoWayListener("ngModelChange", function MessagesComponentComponent_Template_input_ngModelChange_21_listener($event) {
          i0.ɵɵrestoreView(_r1);
          i0.ɵɵtwoWayBindingSet(ctx.messageText, $event) || (ctx.messageText = $event);
          return i0.ɵɵresetView($event);
        });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 18);
        i0.ɵɵelement(23, "i", 19);
        i0.ɵɵelementEnd()()()()()()();
      }
      if (rf & 2) {
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate(ctx.Counter);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.messages);
        i0.ɵɵadvance(5);
        i0.ɵɵtwoWayProperty("ngModel", ctx.messageText);
      }
    },
    dependencies: [i2.NgForOf, i2.NgIf, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.NgModel, i3.NgForm],
    styles: [".msg_card_body[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #008bff;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #008bff;\n}\n\n.container[_ngcontent-%COMP%] {\n  align-content: center;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  background-color: #ffffff !important;\n  border: 0 !important;\n  color: black !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn[_ngcontent-%COMP%] {\n  border-radius: 1em 0 0 1em !important;\n  background-color: #ffffff !important;\n  border: 0 !important;\n  color: black !important;\n  cursor: pointer;\n}\n\n.send_btn[_ngcontent-%COMP%] {\n  border-radius: 0 1em 1em 0 !important;\n  background-color: #ffffff !important;\n  border: 0 !important;\n  color: black !important;\n  cursor: pointer;\n}\n\n.search_btn[_ngcontent-%COMP%] {\n  border-radius: 0 1em 1em 0 !important;\n  background-color: #ffffff !important;\n  border: 0 !important;\n  color: black !important;\n  cursor: pointer;\n}\n\n.user_img[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.user_img_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border: 1.5px solid #f5f6fa;\n}\n\n.img_cont[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70px;\n  width: 70px;\n}\n\n.img_cont_msg[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  color: white;\n}\n.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.msg_cotainer[_ngcontent-%COMP%] {\n  color: black;\n  border-radius: 1px 1.25em 1.25em 1.25em;\n  padding: 15px 10px;\n  min-width: 120px;\n  margin-top: auto;\n  margin: 5px;\n  background-color: #e6e5eb;\n  position: relative;\n  font-family: monospace Arial, Helvetica, sans-serif;\n}\n\n.msg_cotainer_send[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 1.25em 1px 1.25em 1.25em;\n  padding: 15px 10px;\n  min-width: 120px;\n  margin-top: auto;\n  margin: 5px;\n  background-color: #008bff;\n  position: relative;\n  font-family: monospace Arial, Helvetica, sans-serif;\n}\n\n.msg_time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2em;\n  color: rgba(0, 0, 0, 0.5019607843);\n  font-size: 0.6em;\n  left: 0;\n}\n\n.msg_time_send[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -2em;\n  color: rgba(0, 0, 0, 0.5019607843);\n  font-size: 0.6em;\n  right: 0;\n}\n\n.msg_head[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n[v-cloak][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.scr[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVzc2FnZXMtY29tcG9uZW50L21lc3NhZ2VzLWNvbXBvbmVudC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLGdCQUFBO0FBTko7O0FBUUE7RUFDRSx5QkFYYztBQU1oQjs7QUFRQTtFQUNFLHlCQWZjO0FBVWhCOztBQVFBO0VBQ0kscUJBQUE7QUFMSjs7QUFZQTtFQUpJLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUlBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFTQTtFQUNHLDJCQUFBO0VBQ0EsdUJBQUE7QUFOSDs7QUFZQTtFQUNJLHFDQUFBO0VBbEJBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQWFBLGVBQUE7QUFGSjs7QUFRQTtFQUNJLHFDQUFBO0VBdEJBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQWFBLGVBQUE7QUFNSjs7QUFJQTtFQUNJLHFDQUFBO0VBMUJBLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQWFBLGVBQUE7QUFjSjs7QUFJQTtFQUhJLFlBaERVO0VBaURWLFdBakRVO0VBcURWLDJCQUFBO0FBQUo7O0FBR0E7RUFSSSxZQS9DVTtFQWdEVixXQWhEVTtFQXlEViwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFiQSxZQWhEVTtFQWlEVixXQWpEVTtBQWlFZDs7QUFEQTtFQWhCSSxZQS9DVTtFQWdEVixXQWhEVTtBQXFFZDs7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUdSO0FBRkk7RUFDSSxnQkFBQTtFQUNBLCtCQUFBO0FBSVI7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsdUNBQUE7RUFWQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBckZlO0VBc0ZmLGtCQUFBO0VBQ0EsbURBQUE7QUFPSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSx1Q0FBQTtFQWZBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkF0Rlk7RUF1Rlosa0JBQUE7RUFDQSxtREFBQTtBQW1CSjs7QUFEQTtFQUxJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFJQSxPQUFBO0FBT0o7O0FBSkE7RUFWSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBU0EsUUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7QUFZSjs7QUFYQTtFQUNJLGNBQUE7QUFjSiIsInNvdXJjZXNDb250ZW50IjpbIiRTdGFuZGFyZENvbG9yOiAjMDA4YmZmXHJcbiRTdGFuZGFyZFJlc3BvbnNlOiAjZTZlNWViXHJcbiRSYWRpdXMgOiAxZW1cclxuJEl0ZW1CRyA6ICNmZmZmZmZcclxuJEJvdEltZ1NpemUgOiA3MHB4XHJcbiRVc3JJbWdTaXplIDogNDBweFxyXG5cclxuLm1zZ19jYXJkX2JvZHlcclxuICAgIG92ZXJmbG93LXk6IGF1dG9cclxuXHJcbi5jYXJkLWhlYWRlclxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRTdGFuZGFyZENvbG9yXHJcblxyXG5cclxuLmNhcmQtZm9vdGVyXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJFN0YW5kYXJkQ29sb3JcclxuXHJcblxyXG4uY29udGFpbmVyXHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXJcclxuXHJcbj1zaGFyZWJveFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJEl0ZW1CRyAhaW1wb3J0YW50XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudFxyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnRcclxuXHJcbi50eXBlX21zZ1xyXG4gICAgK3NoYXJlYm94XHJcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudFxyXG4gICAgb3ZlcmZsb3cteTogYXV0b1xyXG5cclxuLnR5cGVfbXNnOmZvY3VzXHJcbiAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICBvdXRsaW5lOjBweCAhaW1wb3J0YW50XHJcblxyXG49c2hhcmVkQnV0dG9uXHJcbiAgICArc2hhcmVib3hcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLmF0dGFjaF9idG5cclxuICAgIGJvcmRlci1yYWRpdXM6ICRSYWRpdXMgMCAwICRSYWRpdXMgIWltcG9ydGFudFxyXG4gICAgK3NoYXJlZEJ1dHRvblxyXG5cclxuLnNlbmRfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbi5zZWFyY2hfYnRuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICRSYWRpdXMgJFJhZGl1cyAwICFpbXBvcnRhbnRcclxuICAgICtzaGFyZWRCdXR0b25cclxuXHJcbj1pbWdGb3JtYXQoJHNpemUpXHJcbiAgICBoZWlnaHQ6ICRzaXplXHJcbiAgICB3aWR0aDogJHNpemVcclxuXHJcbi51c2VyX2ltZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkQm90SW1nU2l6ZSlcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgI2Y1ZjZmYVxyXG5cclxuXHJcbi51c2VyX2ltZ19tc2dcclxuICAgICtpbWdGb3JtYXQoJFVzckltZ1NpemUpXHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNmNWY2ZmFcclxuXHJcbi5pbWdfY29udFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAraW1nRm9ybWF0KCRCb3RJbWdTaXplKVxyXG5cclxuLmltZ19jb250X21zZ1xyXG4gICAgK2ltZ0Zvcm1hdCgkVXNySW1nU2l6ZSlcclxuXHJcblxyXG5cclxuLnVzZXJfaW5mb1xyXG4gICAgc3BhblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW1cclxuICAgICAgICBjb2xvcjogd2hpdGVcclxuICAgIHBcclxuICAgICAgICBmb250LXNpemU6IDAuNmVtXHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KVxyXG5cclxuPW1zZ0NvbnQoJGNvbG9yKVxyXG4gICAgcGFkZGluZzogMTVweCAxMHB4XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvXHJcbiAgICBtYXJnaW46IDVweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG5cclxuLm1zZ19jb3RhaW5lclxyXG4gICAgY29sb3I6IGJsYWNrXHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHggMS4yNWVtIDEuMjVlbSAxLjI1ZW1cclxuICAgICttc2dDb250KCRTdGFuZGFyZFJlc3BvbnNlKVxyXG5cclxuLm1zZ19jb3RhaW5lcl9zZW5kXHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVlbSAxcHggMS4yNWVtIDEuMjVlbVxyXG4gICAgK21zZ0NvbnQoJFN0YW5kYXJkQ29sb3IpXHJcblxyXG49bXNnVGltZVxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICBib3R0b206IC0kUmFkaXVzICoyXHJcbiAgICBjb2xvcjogIzAwMDAwMDgwXHJcbiAgICBmb250LXNpemU6IDAuNmVtXHJcblxyXG4ubXNnX3RpbWVcclxuICAgICttc2dUaW1lXHJcbiAgICBsZWZ0OiAwXHJcblxyXG5cclxuLm1zZ190aW1lX3NlbmRcclxuICAgICttc2dUaW1lXHJcbiAgICByaWdodDogMFxyXG5cclxuLm1zZ19oZWFkXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuXHJcblt2LWNsb2FrXVxyXG4gICAgZGlzcGxheTogbm9uZVxyXG4uc2NyXHJcbiAgICBvdmVyZmxvdzogYXV0b1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
exports.MessagesComponentComponent = MessagesComponentComponent;

/***/ }),

/***/ 1519:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const __NgCli_bootstrap_1 = tslib_1.__importStar(__webpack_require__(/*! @angular/platform-browser */ 7376));
const core_1 = __webpack_require__(/*! @angular/core */ 8357);
const app_module_1 = __webpack_require__(/*! ./app/app.module */ 6877);
const environment_1 = __webpack_require__(/*! ./environments/environment */ 9574);
if (environment_1.environment.production) {
  (0, core_1.enableProdMode)();
}
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2060:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppRoutingModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const router_1 = __webpack_require__(/*! @angular/router */ 1175);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 8357));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/router */ 1175));
const routes = [];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
    imports: [router_1.RouterModule.forRoot(routes), router_1.RouterModule]
  });
}
exports.AppRoutingModule = AppRoutingModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppRoutingModule, {
    imports: [i1.RouterModule],
    exports: [router_1.RouterModule]
  });
})();

/***/ }),

/***/ 6877:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 7376);
const forms_1 = __webpack_require__(/*! @angular/forms */ 629); // <-- NgModel lives here
const app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ 2060);
const app_component_1 = __webpack_require__(/*! ./app.component */ 8282);
const messages_component_component_1 = __webpack_require__(/*! ./messages-component/messages-component.component */ 1328);
const http_1 = __webpack_require__(/*! @angular/common/http */ 3477);
const service_worker_1 = __webpack_require__(/*! @angular/service-worker */ 5913);
const environment_1 = __webpack_require__(/*! ../environments/environment */ 9574);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 8357));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/service-worker */ 5913));
class AppModule {
  static ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static ɵmod = /*@__PURE__*/i0.ɵɵdefineNgModule({
    type: AppModule,
    bootstrap: [app_component_1.AppComponent]
  });
  static ɵinj = /*@__PURE__*/i0.ɵɵdefineInjector({
    providers: [(0, http_1.provideHttpClient)((0, http_1.withInterceptorsFromDi)())],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, service_worker_1.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment_1.environment.production
    })]
  });
}
exports.AppModule = AppModule;
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, {
    declarations: [app_component_1.AppComponent, messages_component_component_1.MessagesComponentComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, i1.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 8282:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AppComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 8357));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/platform-browser */ 7376));
const i2 = tslib_1.__importStar(__webpack_require__(/*! ./messages-component/messages-component.component */ 1328));
class AppComponent {
  titleService;
  title = 'River - RiveScript based chatbot in Angular';
  constructor(titleService) {
    this.titleService = titleService;
    this.titleService.setTitle(this.title);
  }
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(i0.ɵɵdirectiveInject(i1.Title));
  };
  static ɵcmp = /*@__PURE__*/i0.ɵɵdefineComponent({
    type: AppComponent,
    selectors: [["app-root"]],
    standalone: false,
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelement(0, "app-messages-component");
      }
    },
    dependencies: [i2.MessagesComponentComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
exports.AppComponent = AppComponent;

/***/ }),

/***/ 9574:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {



// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.environment = void 0;
exports.environment = {
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

/***/ 9727:
/*!*******************************************!*\
  !*** ./src/app/chat-interface.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChatInterfaceService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ 945);
const http_1 = __webpack_require__(/*! @angular/common/http */ 3477);
const i0 = tslib_1.__importStar(__webpack_require__(/*! @angular/core */ 8357));
const i1 = tslib_1.__importStar(__webpack_require__(/*! @angular/common/http */ 3477));
class ChatInterfaceService {
  http;
  constructor(http) {
    this.http = http;
  }
  Talk(message) {
    return this.http.get(this.hostUrl, {
      params: new http_1.HttpParams().set('text', message),
      responseType: "json"
    });
  }
  hostUrl = "https://bot.liukonen.dev";
  static ɵfac = function ChatInterfaceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ChatInterfaceService)(i0.ɵɵinject(i1.HttpClient));
  };
  static ɵprov = /*@__PURE__*/i0.ɵɵdefineInjectable({
    token: ChatInterfaceService,
    factory: ChatInterfaceService.ɵfac,
    providedIn: 'root'
  });
}
exports.ChatInterfaceService = ChatInterfaceService;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1519)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map