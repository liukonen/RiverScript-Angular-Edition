"use strict";(self.webpackChunkChatAng=self.webpackChunkChatAng||[]).push([["main"],{7710:(p,f,s)=>{var g=s(2512),e=s(2790),i=s(7981),_=s(4874);class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[_.Bz.forRoot([]),_.Bz]});var u=s(3765);class a{constructor(t){this.http=t,this.hostUrl="https://bot.liukonen.dev"}Talk(t){return this.http.get(this.hostUrl,{params:(new u.LE).set("text",t),responseType:"json"})}}a.\u0275fac=function(t){return new(t||a)(e.LFG(u.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"});var h=s(6477);const b=["scrollMe"];function M(o,t){if(1&o&&(e.TgZ(0,"div",21)(1,"div",22),e._UZ(2,"img",23),e.qZA(),e.TgZ(3,"div",24)(4,"span"),e._uU(5),e.qZA(),e.TgZ(6,"span",25),e._uU(7),e.qZA()()()),2&o){const n=e.oxw().$implicit;e.xp6(5),e.Oqu(n.Message),e.xp6(2),e.Oqu(n.timestamp.toLocaleTimeString())}}function x(o,t){if(1&o&&(e.TgZ(0,"div",26)(1,"div",27)(2,"span"),e._uU(3),e.qZA(),e.TgZ(4,"span",28),e._uU(5),e.qZA()(),e.TgZ(6,"div",22),e._UZ(7,"img",29),e.qZA()()),2&o){const n=e.oxw().$implicit;e.xp6(3),e.Oqu(n.Message),e.xp6(2),e.Oqu(n.timestamp.toLocaleTimeString())}}function T(o,t){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,M,8,2,"div",19),e.YNc(2,x,8,2,"ng-template",null,20,e.W1O),e.qZA()),2&o){const n=t.$implicit,m=e.MAs(3);e.xp6(1),e.Q6J("ngIf",!n.UserIsHuman)("ngIfElse",m)}}class l{constructor(t){this.botService=t,this.messages=[],this.Counter=0}ngOnInit(){this.scrollToBottom()}ngAfterViewChecked(){this.scrollToBottom()}scrollToBottom(){try{this.myScrollContainer.nativeElement.scrollTop=this.myScrollContainer.nativeElement.scrollHeight}catch{}}sendMessage(t){let n=this.messageText;this.messageText="",this.messages.push({timestamp:new Date,Message:n,UserIsHuman:!0}),this.TalkToBot(n),this.Counter++}TalkToBot(t){this.botService.Talk(t).subscribe(n=>{this.messages.push({timestamp:new Date,Message:n.response,UserIsHuman:!1})})}}l.\u0275fac=function(t){return new(t||l)(e.Y36(a))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-messages-component"]],viewQuery:function(t,n){if(1&t&&e.Gf(b,5),2&t){let m;e.iGM(m=e.CRH())&&(n.myScrollContainer=m.first)}},decls:24,vars:3,consts:[["id","app",1,"container-fluid","h-100"],[1,"row","justify-content-center","h-100"],[1,"col-12","card","h-100"],[1,"card-header","msg_head"],[1,"d-flex","bd-highlight","justify-content-between"],[1,"user_info"],["id","msgCount"],["href","#","aria-label","Info","data-bs-toggle","modal","data-bs-target","#aboutModal",1,"text-light"],[1,"fa-solid","fa-address-card","fa-2x"],["id","dialogue",1,"card-body","msg_card_body","scr"],["scrollMe",""],[4,"ngFor","ngForOf"],[1,"card-footer"],[3,"ngSubmit"],[1,"input-group"],[1,"input-group-text","attach_btn"],["type","text","aria-label","Input Message","name","mgText","placeholder","Type your message...","autocomplete","off",1,"form-control","type_msg",3,"ngModel","ngModelChange"],["type","submit",1,"input-group-text","send_btn"],[1,"fas","fa-location-arrow"],["class","d-flex justify-content-start mb-4",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"d-flex","justify-content-start","mb-4"],[1,"img_cont_msg"],["src","./assets/images/msrobot.png","alt","River",1,"rounded-circle","user_img_msg"],[1,"msg_cotainer"],[1,"msg_time"],[1,"d-flex","justify-content-end","mb-4"],[1,"msg_cotainer_send"],[1,"msg_time_send"],["src","./assets/images/user.png","alt","User",1,"rounded-circle","user_img_msg"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"span"),e._uU(7,"River Chatbot"),e.qZA(),e.TgZ(8,"p")(9,"i",6),e._uU(10),e.qZA(),e._uU(11," Messages"),e.qZA()(),e.TgZ(12,"a",7),e._UZ(13,"i",8),e.qZA()()(),e.TgZ(14,"div",9,10),e.YNc(16,T,4,2,"div",11),e.qZA(),e.TgZ(17,"div",12)(18,"form",13),e.NdJ("ngSubmit",function(){return n.sendMessage(n.messageText)}),e.TgZ(19,"div",14),e._UZ(20,"span",15),e.TgZ(21,"input",16),e.NdJ("ngModelChange",function(O){return n.messageText=O}),e.qZA(),e.TgZ(22,"button",17),e._UZ(23,"i",18),e.qZA()()()()()()()),2&t&&(e.xp6(10),e.Oqu(n.Counter),e.xp6(6),e.Q6J("ngForOf",n.messages),e.xp6(5),e.Q6J("ngModel",n.messageText))},dependencies:[h.sg,h.O5,i._Y,i.Fj,i.JJ,i.JL,i.On,i.F],styles:[".msg_card_body[_ngcontent-%COMP%]{overflow-y:auto}.card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%]{background-color:#008bff}.container[_ngcontent-%COMP%]{align-content:center}.type_msg[_ngcontent-%COMP%]{background-color:#fff!important;border:0!important;color:#000!important;height:60px!important;overflow-y:auto}.type_msg[_ngcontent-%COMP%]:focus{box-shadow:none!important;outline:0px!important}.attach_btn[_ngcontent-%COMP%]{border-radius:1em 0 0 1em!important;background-color:#fff!important;border:0!important;color:#000!important;cursor:pointer}.send_btn[_ngcontent-%COMP%], .search_btn[_ngcontent-%COMP%]{border-radius:0 1em 1em 0!important;background-color:#fff!important;border:0!important;color:#000!important;cursor:pointer}.user_img[_ngcontent-%COMP%]{height:70px;width:70px;border:1.5px solid #f5f6fa}.user_img_msg[_ngcontent-%COMP%]{height:40px;width:40px;border:1.5px solid #f5f6fa}.img_cont[_ngcontent-%COMP%]{position:relative;height:70px;width:70px}.img_cont_msg[_ngcontent-%COMP%]{height:40px;width:40px}.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.4em;color:#fff}.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.6em;color:#fff9}.msg_cotainer[_ngcontent-%COMP%]{color:#000;border-radius:1px 1.25em 1.25em;padding:15px 10px;min-width:120px;margin:5px;background-color:#e6e5eb;position:relative;font-family:monospace Arial,Helvetica,sans-serif}.msg_cotainer_send[_ngcontent-%COMP%]{color:#fff;border-radius:1.25em 1px 1.25em 1.25em;padding:15px 10px;min-width:120px;margin:5px;background-color:#008bff;position:relative;font-family:monospace Arial,Helvetica,sans-serif}.msg_time[_ngcontent-%COMP%]{position:absolute;bottom:-2em;color:#00000080;font-size:.6em;left:0}.msg_time_send[_ngcontent-%COMP%]{position:absolute;bottom:-2em;color:#00000080;font-size:.6em;right:0}.msg_head[_ngcontent-%COMP%]{position:relative}[v-cloak][_ngcontent-%COMP%]{display:none}.scr[_ngcontent-%COMP%]{overflow:auto}"]});class d{constructor(t){this.titleService=t,this.title="River - RiveScript based chatbot in Angular",this.titleService.setTitle(this.title)}}d.\u0275fac=function(t){return new(t||d)(e.Y36(g.Dx))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-root"]],decls:1,vars:0,template:function(t,n){1&t&&e._UZ(0,"app-messages-component")},dependencies:[l]});var y=s(5703);const C_production=!1;class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c,bootstrap:[d]}),c.\u0275inj=e.cJS({imports:[g.b2,r,i.u5,u.JF,y.Wr.register("ngsw-worker.js",{enabled:C_production})]}),C_production&&(0,e.G48)(),g.q6().bootstrapModule(c).catch(o=>console.error(o))}},p=>{p.O(0,["vendor"],()=>{return g=7710,p(p.s=g);var g});p.O()}]);
//# sourceMappingURL=main.js.map