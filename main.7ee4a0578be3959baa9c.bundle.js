webpackJsonp([1,4],{"/fcW":function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="/fcW"},0:function(n,t,e){n.exports=e("x35b")},"1A80":function(n,t,e){"use strict";function l(n){return o._29(0,[(n()(),o._30(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),o._31(null,["\n  ","\n"])),(n()(),o._31(null,["\n"])),(n()(),o._30(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o._32(147456,null,0,_.y,[_.l,o.U,o.V,[8,null]],null,null),(n()(),o._31(null,["\n\n\n"]))],null,function(n,t){n(t,1,0,t.component.title)})}function i(n){return o._29(0,[(n()(),o._30(0,null,null,1,"app-root",[],null,null,null,l,c)),o._32(114688,null,0,r.a,[u.k,a.a,_.j],null,null)],function(n,t){n(t,1,0)},null)}var o=e("3j3K"),_=e("5oXY"),r=e("YWx4"),u=e("Fzro"),a=e("3lLu");e.d(t,"a",function(){return g});var s=[],c=o._28({encapsulation:2,styles:s,data:{}}),g=o._33("app-root",r.a,i,{},{},[])},"3lLu":function(n,t,e){"use strict";var l=e("497g"),i=e("Fzro"),o=e("eErF");e.n(o);e.d(t,"a",function(){return _});var _=function(){function n(n){this.http=n,this.urlUsers="https://jsonplaceholder.typicode.com/users",this.urlComments="https://jsonplaceholder.typicode.com/comments",this.headers=new i.l({"Content-Type":"application/json"})}return n.prototype.getUsersSync=function(){return l.a},n.prototype.getUser=function(n){return new Promise(function(t){t(l.a.find(function(t){return t.id==n}))})},n.prototype.getUsers=function(){return this.http.get(this.urlUsers).toPromise().then(function(n){return n.json()}).catch(this.handleError)},n.prototype.getComments=function(){return this.http.get(this.urlComments).toPromise().then(function(n){return n.json()})},n.prototype.handleError=function(n){return console.error("An error occurred",n),Promise.reject(n.message||n)},n.ctorParameters=function(){return[{type:i.k}]},n}()},"497g":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[{id:1,name:"Alberto Fujimori",username:"afujimori",phone:"995742639",email:"afujimori@pucp.pe",website:""},{id:2,name:"Alan García",username:"agarcia",phone:"991234567",email:"agarcia@pucp.pe",website:""},{id:3,name:"Ollanta Humala",username:"ohumala",phone:"987654321",email:"ohumala@pucp.pe",website:""},{id:4,name:"Alejandro Toledo",username:"atoledo",phone:"998747874",email:"atoledo@pucp.pe",website:""},{id:5,name:"Pedro Pablo kuczynski",username:"pkuczynski",phone:"992589974",email:"pkuczynski@pucp.pe",website:""}]},"9Yk8":function(n,t,e){"use strict";var l=e("Fzro"),i=e("3lLu"),o=e("5oXY"),_=e("eErF");e.n(_);e.d(t,"a",function(){return r});var r=function(){function n(n,t,e){this.http=n,this.fakeService=t,this.router=e}return n.prototype.ngOnInit=function(){this.users=this.fakeService.getUsersSync()},n.prototype.edit=function(n){this.router.navigate(["/detail",n.id])},n.prototype.details=function(n){},n.ctorParameters=function(){return[{type:l.k},{type:i.a},{type:o.j}]},n.ctorParameters=function(){return[{type:l.k},{type:i.a},{type:o.j}]},n}()},Cd9f:function(n,t,e){"use strict";var l=e("9Yk8"),i=e("f3HK");e.d(t,"a",function(){return o});var o=(i.a,l.a,function(){function n(){}return n}())},Iksp:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},YWx4:function(n,t,e){"use strict";var l=e("Fzro"),i=e("3lLu"),o=e("5oXY"),_=e("eErF");e.n(_);e.d(t,"a",function(){return r});var r=function(){function n(n,t,e){this.http=n,this.fakeService=t,this.router=e,this.title="Master - details: users"}return n.prototype.ngOnInit=function(){this.users=this.fakeService.getUsersSync()},n.prototype.onSelect=function(n){this.selectedUser=n},n.prototype.editar=function(n){this.router.navigate(["/detail",n.id])},n.ctorParameters=function(){return[{type:l.k},{type:i.a},{type:o.j}]},n.ctorParameters=function(){return[{type:l.k},{type:i.a},{type:o.j}]},n}()},f3HK:function(n,t,e){"use strict";var l=e("3lLu"),i=e("5oXY"),o=e("2Je8"),_=e("uCY4");e.n(_);e.d(t,"a",function(){return r});var r=function(){function n(n,t,e){this.fakeService=n,this.route=t,this.location=e}return n.prototype.ngOnInit=function(){var n=this;this.users=this.fakeService.getUsersSync(),this.route.params.switchMap(function(t){return n.fakeService.getUser(+t.id)}).subscribe(function(t){return n.user=t})},n.prototype.goBack=function(){this.location.back()},n.ctorParameters=function(){return[{type:l.a},{type:i.v},{type:o.e}]},n}()},kZql:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0}},kke6:function(n,t,e){"use strict";var l=e("3j3K"),i=e("Iksp"),o=e("2Je8"),_=e("5oXY"),r=e("Qbdm"),u=e("NVOs"),a=e("Fzro"),s=e("Cd9f"),c=e("RX2M"),g=e("M0cT"),p=e("vfkA"),h=e("1Z2I"),f=e("yDyO"),d=e("K/oD"),b=e("eCJc"),m=e("/I96"),y=e("qsK9"),N=e("MSQt"),P=e("UyZi"),C=e("Ep2y"),M=e("WKBe"),O=e("A8b0"),R=e("as+d"),S=e("62nT"),w=e("kzcK"),T=e("CXHW"),k=e("3kwk"),v=e("gFLb"),I=e("nCuf"),A=e("qKow"),E=e("cG9e"),j=e("ZwZs"),D=e("DDfv"),F=e("lcaH"),L=e("gEbu"),U=e("7DGp"),H=e("hwnt"),G=e("c7mC"),z=e("K0TW"),x=e("ETCP"),X=e("aKiW"),B=e("v4DA"),K=e("tyH+"),Z=e("3lLu"),V=e("obDq"),q=e("sZHb"),Y=e("7ldD"),$=e("h+Bk"),J=e("IiyU"),W=e("2NoN"),Q=e("xiEB"),nn=e("SDm3"),tn=e("jtp5"),en=e("1A80"),ln=e("f3HK"),on=e("9Yk8");e.d(t,"a",function(){return un});var _n=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function l(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),rn=function(n){function t(t){return n.call(this,t,[V.a,q.a,Y.a,$.a,J.a,W.a,Q.a,nn.a,tn.a,en.a],[en.a])||this}return _n(t,n),Object.defineProperty(t.prototype,"_LOCALE_ID_43",{get:function(){return null==this.__LOCALE_ID_43&&(this.__LOCALE_ID_43=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_43},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_44",{get:function(){return null==this.__NgLocalization_44&&(this.__NgLocalization_44=new o.a(this._LOCALE_ID_43)),this.__NgLocalization_44},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_45",{get:function(){return null==this.__APP_ID_45&&(this.__APP_ID_45=l.d()),this.__APP_ID_45},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_46",{get:function(){return null==this.__IterableDiffers_46&&(this.__IterableDiffers_46=l.e()),this.__IterableDiffers_46},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_47",{get:function(){return null==this.__KeyValueDiffers_47&&(this.__KeyValueDiffers_47=l.f()),this.__KeyValueDiffers_47},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_48",{get:function(){return null==this.__DomSanitizer_48&&(this.__DomSanitizer_48=new r.b(this.parent.get(r.c))),this.__DomSanitizer_48},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_49",{get:function(){return null==this.__Sanitizer_49&&(this.__Sanitizer_49=this._DomSanitizer_48),this.__Sanitizer_49},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_50",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_50&&(this.__HAMMER_GESTURE_CONFIG_50=new r.d),this.__HAMMER_GESTURE_CONFIG_50},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_51",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_51&&(this.__EVENT_MANAGER_PLUGINS_51=[new r.e(this.parent.get(r.c)),new r.f(this.parent.get(r.c)),new r.g(this.parent.get(r.c),this._HAMMER_GESTURE_CONFIG_50)]),this.__EVENT_MANAGER_PLUGINS_51},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_52",{get:function(){return null==this.__EventManager_52&&(this.__EventManager_52=new r.h(this._EVENT_MANAGER_PLUGINS_51,this.parent.get(l.g))),this.__EventManager_52},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_53",{get:function(){return null==this.__ɵDomSharedStylesHost_53&&(this.__ɵDomSharedStylesHost_53=new r.i(this.parent.get(r.c))),this.__ɵDomSharedStylesHost_53},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_54",{get:function(){return null==this.__ɵDomRendererFactory2_54&&(this.__ɵDomRendererFactory2_54=new r.j(this._EventManager_52,this._ɵDomSharedStylesHost_53)),this.__ɵDomRendererFactory2_54},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_55",{get:function(){return null==this.__RendererFactory2_55&&(this.__RendererFactory2_55=this._ɵDomRendererFactory2_54),this.__RendererFactory2_55},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_56",{get:function(){return null==this.__ɵSharedStylesHost_56&&(this.__ɵSharedStylesHost_56=this._ɵDomSharedStylesHost_53),this.__ɵSharedStylesHost_56},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_57",{get:function(){return null==this.__Testability_57&&(this.__Testability_57=new l.h(this.parent.get(l.g))),this.__Testability_57},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_58",{get:function(){return null==this.__Meta_58&&(this.__Meta_58=new r.k(this.parent.get(r.c))),this.__Meta_58},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_59",{get:function(){return null==this.__Title_59&&(this.__Title_59=new r.l(this.parent.get(r.c))),this.__Title_59},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_60",{get:function(){return null==this.__ɵi_60&&(this.__ɵi_60=new u.a),this.__ɵi_60},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_61",{get:function(){return null==this.__BrowserXhr_61&&(this.__BrowserXhr_61=new a.a),this.__BrowserXhr_61},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_62",{get:function(){return null==this.__ResponseOptions_62&&(this.__ResponseOptions_62=new a.b),this.__ResponseOptions_62},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_63",{get:function(){return null==this.__XSRFStrategy_63&&(this.__XSRFStrategy_63=a.c()),this.__XSRFStrategy_63},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_64",{get:function(){return null==this.__XHRBackend_64&&(this.__XHRBackend_64=new a.d(this._BrowserXhr_61,this._ResponseOptions_62,this._XSRFStrategy_63)),this.__XHRBackend_64},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_65",{get:function(){return null==this.__RequestOptions_65&&(this.__RequestOptions_65=new a.e),this.__RequestOptions_65},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_66",{get:function(){return null==this.__Http_66&&(this.__Http_66=a.f(this._XHRBackend_64,this._RequestOptions_65)),this.__Http_66},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ActivatedRoute_67",{get:function(){return null==this.__ActivatedRoute_67&&(this.__ActivatedRoute_67=_.a(this._Router_22)),this.__ActivatedRoute_67},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NoPreloading_68",{get:function(){return null==this.__NoPreloading_68&&(this.__NoPreloading_68=new _.b),this.__NoPreloading_68},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_PreloadingStrategy_69",{get:function(){return null==this.__PreloadingStrategy_69&&(this.__PreloadingStrategy_69=this._NoPreloading_68),this.__PreloadingStrategy_69},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RouterPreloader_70",{get:function(){return null==this.__RouterPreloader_70&&(this.__RouterPreloader_70=new _.c(this._Router_22,this._NgModuleFactoryLoader_20,this._Compiler_19,this,this._PreloadingStrategy_69)),this.__RouterPreloader_70},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_PreloadAllModules_71",{get:function(){return null==this.__PreloadAllModules_71&&(this.__PreloadAllModules_71=new _.d),this.__PreloadAllModules_71},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTER_INITIALIZER_72",{get:function(){return null==this.__ROUTER_INITIALIZER_72&&(this.__ROUTER_INITIALIZER_72=_.e(this._ɵg_3)),this.__ROUTER_INITIALIZER_72},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_BOOTSTRAP_LISTENER_73",{get:function(){return null==this.__APP_BOOTSTRAP_LISTENER_73&&(this.__APP_BOOTSTRAP_LISTENER_73=[this._ROUTER_INITIALIZER_72]),this.__APP_BOOTSTRAP_LISTENER_73},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbModalStack_74",{get:function(){return null==this.__NgbModalStack_74&&(this.__NgbModalStack_74=new T.a(this._ApplicationRef_7,this,this.componentFactoryResolver)),this.__NgbModalStack_74},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbModal_75",{get:function(){return null==this.__NgbModal_75&&(this.__NgbModal_75=new k.a(this.componentFactoryResolver,this,this._NgbModalStack_74)),this.__NgbModal_75},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbAlertConfig_76",{get:function(){return null==this.__NgbAlertConfig_76&&(this.__NgbAlertConfig_76=new v.a),this.__NgbAlertConfig_76},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbProgressbarConfig_77",{get:function(){return null==this.__NgbProgressbarConfig_77&&(this.__NgbProgressbarConfig_77=new I.a),this.__NgbProgressbarConfig_77},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbTooltipConfig_78",{get:function(){return null==this.__NgbTooltipConfig_78&&(this.__NgbTooltipConfig_78=new A.a),this.__NgbTooltipConfig_78},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbTypeaheadConfig_79",{get:function(){return null==this.__NgbTypeaheadConfig_79&&(this.__NgbTypeaheadConfig_79=new E.a),this.__NgbTypeaheadConfig_79},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbAccordionConfig_80",{get:function(){return null==this.__NgbAccordionConfig_80&&(this.__NgbAccordionConfig_80=new j.a),this.__NgbAccordionConfig_80},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbCarouselConfig_81",{get:function(){return null==this.__NgbCarouselConfig_81&&(this.__NgbCarouselConfig_81=new D.a),this.__NgbCarouselConfig_81},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbCalendar_82",{get:function(){return null==this.__NgbCalendar_82&&(this.__NgbCalendar_82=new F.a),this.__NgbCalendar_82},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbDatepickerI18n_83",{get:function(){return null==this.__NgbDatepickerI18n_83&&(this.__NgbDatepickerI18n_83=new L.a),this.__NgbDatepickerI18n_83},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbDateParserFormatter_84",{get:function(){return null==this.__NgbDateParserFormatter_84&&(this.__NgbDateParserFormatter_84=new U.a),this.__NgbDateParserFormatter_84},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbDatepickerConfig_85",{get:function(){return null==this.__NgbDatepickerConfig_85&&(this.__NgbDatepickerConfig_85=new H.a),this.__NgbDatepickerConfig_85},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbDropdownConfig_86",{get:function(){return null==this.__NgbDropdownConfig_86&&(this.__NgbDropdownConfig_86=new G.a),this.__NgbDropdownConfig_86},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbPaginationConfig_87",{get:function(){return null==this.__NgbPaginationConfig_87&&(this.__NgbPaginationConfig_87=new z.a),this.__NgbPaginationConfig_87},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbPopoverConfig_88",{get:function(){return null==this.__NgbPopoverConfig_88&&(this.__NgbPopoverConfig_88=new x.a),this.__NgbPopoverConfig_88},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbRatingConfig_89",{get:function(){return null==this.__NgbRatingConfig_89&&(this.__NgbRatingConfig_89=new X.a),this.__NgbRatingConfig_89},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbTabsetConfig_90",{get:function(){return null==this.__NgbTabsetConfig_90&&(this.__NgbTabsetConfig_90=new B.a),this.__NgbTabsetConfig_90},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgbTimepickerConfig_91",{get:function(){return null==this.__NgbTimepickerConfig_91&&(this.__NgbTimepickerConfig_91=new K.a),this.__NgbTimepickerConfig_91},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FakeService_92",{get:function(){return null==this.__FakeService_92&&(this.__FakeService_92=new Z.a(this._Http_66)),this.__FakeService_92},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new o.b,this._ErrorHandler_1=r.m(),this._NgProbeToken_2=[_.f()],this._ɵg_3=new _.g(this),this._APP_INITIALIZER_4=[l.i,r.n(this.parent.get(r.o,null),this._NgProbeToken_2),_.h(this._ɵg_3)],this._ApplicationInitStatus_5=new l.j(this._APP_INITIALIZER_4),this._ɵf_6=new l.k(this.parent.get(l.g),this.parent.get(l.l),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5),this._ApplicationRef_7=this._ɵf_6,this._ApplicationModule_8=new l.m(this._ApplicationRef_7),this._BrowserModule_9=new r.p(this.parent.get(r.p,null)),this._ɵba_10=new u.b,this._FormsModule_11=new u.c,this._HttpModule_12=new a.g,this._ɵa_13=_.i(this.parent.get(_.j,null)),this._UrlSerializer_14=new _.k,this._RouterOutletMap_15=new _.l,this._ROUTER_CONFIGURATION_16={},this._LocationStrategy_17=_.m(this.parent.get(o.c),this.parent.get(o.d,null),this._ROUTER_CONFIGURATION_16),this._Location_18=new o.e(this._LocationStrategy_17),this._Compiler_19=new l.n,this._NgModuleFactoryLoader_20=new l.o(this._Compiler_19,this.parent.get(l.p,null)),this._ROUTES_21=[[{path:"detail/:id",component:ln.a},{path:"users",component:on.a},{path:"",redirectTo:"/users",pathMatch:"full"}]],this._Router_22=_.n(this._ApplicationRef_7,this._UrlSerializer_14,this._RouterOutletMap_15,this._Location_18,this,this._NgModuleFactoryLoader_20,this._Compiler_19,this._ROUTES_21,this._ROUTER_CONFIGURATION_16,this.parent.get(_.o,null),this.parent.get(_.p,null)),this._RouterModule_23=new _.q(this._ɵa_13,this._Router_22),this._AppRoutingModule_24=new s.a,this._NgbAlertModule_25=new c.a,this._NgbButtonsModule_26=new g.a,this._NgbCollapseModule_27=new p.a,this._NgbProgressbarModule_28=new h.a,this._NgbTooltipModule_29=new f.a,this._NgbTypeaheadModule_30=new d.a,this._NgbAccordionModule_31=new b.a,this._NgbCarouselModule_32=new m.a,this._NgbDatepickerModule_33=new y.a,this._NgbDropdownModule_34=new N.a,this._NgbModalModule_35=new P.a,this._NgbPaginationModule_36=new C.a,this._NgbPopoverModule_37=new M.a,this._NgbRatingModule_38=new O.a,this._NgbTabsetModule_39=new R.a,this._NgbTimepickerModule_40=new S.a,this._NgbRootModule_41=new w.a,this._AppModule_42=new i.a,this._AppModule_42},t.prototype.getInternal=function(n,t){return n===o.b?this._CommonModule_0:n===l.q?this._ErrorHandler_1:n===l.r?this._NgProbeToken_2:n===_.g?this._ɵg_3:n===l.s?this._APP_INITIALIZER_4:n===l.j?this._ApplicationInitStatus_5:n===l.k?this._ɵf_6:n===l.t?this._ApplicationRef_7:n===l.m?this._ApplicationModule_8:n===r.p?this._BrowserModule_9:n===u.b?this._ɵba_10:n===u.c?this._FormsModule_11:n===a.g?this._HttpModule_12:n===_.r?this._ɵa_13:n===_.s?this._UrlSerializer_14:n===_.l?this._RouterOutletMap_15:n===_.t?this._ROUTER_CONFIGURATION_16:n===o.f?this._LocationStrategy_17:n===o.e?this._Location_18:n===l.n?this._Compiler_19:n===l.u?this._NgModuleFactoryLoader_20:n===_.u?this._ROUTES_21:n===_.j?this._Router_22:n===_.q?this._RouterModule_23:n===s.a?this._AppRoutingModule_24:n===c.a?this._NgbAlertModule_25:n===g.a?this._NgbButtonsModule_26:n===p.a?this._NgbCollapseModule_27:n===h.a?this._NgbProgressbarModule_28:n===f.a?this._NgbTooltipModule_29:n===d.a?this._NgbTypeaheadModule_30:n===b.a?this._NgbAccordionModule_31:n===m.a?this._NgbCarouselModule_32:n===y.a?this._NgbDatepickerModule_33:n===N.a?this._NgbDropdownModule_34:n===P.a?this._NgbModalModule_35:n===C.a?this._NgbPaginationModule_36:n===M.a?this._NgbPopoverModule_37:n===O.a?this._NgbRatingModule_38:n===R.a?this._NgbTabsetModule_39:n===S.a?this._NgbTimepickerModule_40:n===w.a?this._NgbRootModule_41:n===i.a?this._AppModule_42:n===l.c?this._LOCALE_ID_43:n===o.g?this._NgLocalization_44:n===l.v?this._APP_ID_45:n===l.w?this._IterableDiffers_46:n===l.x?this._KeyValueDiffers_47:n===r.q?this._DomSanitizer_48:n===l.y?this._Sanitizer_49:n===r.r?this._HAMMER_GESTURE_CONFIG_50:n===r.s?this._EVENT_MANAGER_PLUGINS_51:n===r.h?this._EventManager_52:n===r.i?this._ɵDomSharedStylesHost_53:n===r.j?this._ɵDomRendererFactory2_54:n===l.z?this._RendererFactory2_55:n===r.t?this._ɵSharedStylesHost_56:n===l.h?this._Testability_57:n===r.k?this._Meta_58:n===r.l?this._Title_59:n===u.a?this._ɵi_60:n===a.a?this._BrowserXhr_61:n===a.h?this._ResponseOptions_62:n===a.i?this._XSRFStrategy_63:n===a.d?this._XHRBackend_64:n===a.j?this._RequestOptions_65:n===a.k?this._Http_66:n===_.v?this._ActivatedRoute_67:n===_.b?this._NoPreloading_68:n===_.w?this._PreloadingStrategy_69:n===_.c?this._RouterPreloader_70:n===_.d?this._PreloadAllModules_71:n===_.x?this._ROUTER_INITIALIZER_72:n===l.A?this._APP_BOOTSTRAP_LISTENER_73:n===T.a?this._NgbModalStack_74:n===k.a?this._NgbModal_75:n===v.a?this._NgbAlertConfig_76:n===I.a?this._NgbProgressbarConfig_77:n===A.a?this._NgbTooltipConfig_78:n===E.a?this._NgbTypeaheadConfig_79:n===j.a?this._NgbAccordionConfig_80:n===D.a?this._NgbCarouselConfig_81:n===F.b?this._NgbCalendar_82:n===L.b?this._NgbDatepickerI18n_83:n===U.b?this._NgbDateParserFormatter_84:n===H.a?this._NgbDatepickerConfig_85:n===G.a?this._NgbDropdownConfig_86:n===z.a?this._NgbPaginationConfig_87:n===x.a?this._NgbPopoverConfig_88:n===X.a?this._NgbRatingConfig_89:n===B.a?this._NgbTabsetConfig_90:n===K.a?this._NgbTimepickerConfig_91:n===Z.a?this._FakeService_92:t},t.prototype.destroyInternal=function(){this._ɵf_6.ngOnDestroy(),this.__ɵDomSharedStylesHost_53&&this._ɵDomSharedStylesHost_53.ngOnDestroy(),this.__RouterPreloader_70&&this._RouterPreloader_70.ngOnDestroy()},t}(l.B),un=new l.C(rn,i.a)},obDq:function(n,t,e){"use strict";function l(n){return a._29(0,[(n()(),a._30(0,null,null,32,"div",[],null,null,null,null,null)),(n()(),a._31(null,["\n\n    "])),(n()(),a._30(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),a._31(null,["Information: "])),(n()(),a._31(null,["\n    "])),(n()(),a._30(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,i=n.component;if("input"===t){l=!1!==a._35(n,6)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._35(n,6).onTouched()&&l}if("compositionstart"===t){l=!1!==a._35(n,6)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._35(n,6)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(i.user.name=e)&&l}return l},null,null)),a._32(16384,null,0,s.h,[a.L,a.M,[2,s.i]],null,null),a._37(1024,null,s.d,function(n){return[n]},[s.h]),a._32(671744,null,0,s.j,[[8,null],[8,null],[8,null],[2,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),a._37(2048,null,s.k,null,[s.j]),a._32(16384,null,0,s.l,[s.k],null,null),(n()(),a._31(null,["\n    "])),(n()(),a._30(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,i=n.component;if("input"===t){l=!1!==a._35(n,13)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._35(n,13).onTouched()&&l}if("compositionstart"===t){l=!1!==a._35(n,13)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._35(n,13)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(i.user.username=e)&&l}return l},null,null)),a._32(16384,null,0,s.h,[a.L,a.M,[2,s.i]],null,null),a._37(1024,null,s.d,function(n){return[n]},[s.h]),a._32(671744,null,0,s.j,[[8,null],[8,null],[8,null],[2,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),a._37(2048,null,s.k,null,[s.j]),a._32(16384,null,0,s.l,[s.k],null,null),(n()(),a._31(null,["\n    "])),(n()(),a._30(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,i=n.component;if("input"===t){l=!1!==a._35(n,20)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._35(n,20).onTouched()&&l}if("compositionstart"===t){l=!1!==a._35(n,20)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._35(n,20)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(i.user.email=e)&&l}return l},null,null)),a._32(16384,null,0,s.h,[a.L,a.M,[2,s.i]],null,null),a._37(1024,null,s.d,function(n){return[n]},[s.h]),a._32(671744,null,0,s.j,[[8,null],[8,null],[8,null],[2,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),a._37(2048,null,s.k,null,[s.j]),a._32(16384,null,0,s.l,[s.k],null,null),(n()(),a._31(null,["\n    "])),(n()(),a._30(0,null,null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,i=n.component;if("input"===t){l=!1!==a._35(n,27)._handleInput(e.target.value)&&l}if("blur"===t){l=!1!==a._35(n,27).onTouched()&&l}if("compositionstart"===t){l=!1!==a._35(n,27)._compositionStart()&&l}if("compositionend"===t){l=!1!==a._35(n,27)._compositionEnd(e.target.value)&&l}if("ngModelChange"===t){l=!1!==(i.user.phone=e)&&l}return l},null,null)),a._32(16384,null,0,s.h,[a.L,a.M,[2,s.i]],null,null),a._37(1024,null,s.d,function(n){return[n]},[s.h]),a._32(671744,null,0,s.j,[[8,null],[8,null],[8,null],[2,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),a._37(2048,null,s.k,null,[s.j]),a._32(16384,null,0,s.l,[s.k],null,null),(n()(),a._31(null,["\n\n"]))],function(n,t){var e=t.component;n(t,8,0,e.user.name),n(t,15,0,e.user.username),n(t,22,0,e.user.email),n(t,29,0,e.user.phone)},function(n,t){n(t,5,0,a._35(t,10).ngClassUntouched,a._35(t,10).ngClassTouched,a._35(t,10).ngClassPristine,a._35(t,10).ngClassDirty,a._35(t,10).ngClassValid,a._35(t,10).ngClassInvalid,a._35(t,10).ngClassPending),n(t,12,0,a._35(t,17).ngClassUntouched,a._35(t,17).ngClassTouched,a._35(t,17).ngClassPristine,a._35(t,17).ngClassDirty,a._35(t,17).ngClassValid,a._35(t,17).ngClassInvalid,a._35(t,17).ngClassPending),n(t,19,0,a._35(t,24).ngClassUntouched,a._35(t,24).ngClassTouched,a._35(t,24).ngClassPristine,a._35(t,24).ngClassDirty,a._35(t,24).ngClassValid,a._35(t,24).ngClassInvalid,a._35(t,24).ngClassPending),n(t,26,0,a._35(t,31).ngClassUntouched,a._35(t,31).ngClassTouched,a._35(t,31).ngClassPristine,a._35(t,31).ngClassDirty,a._35(t,31).ngClassValid,a._35(t,31).ngClassInvalid,a._35(t,31).ngClassPending)})}function i(n){return a._29(0,[(n()(),a._31(null,["\n          Título: ","     \n        "]))],null,function(n,t){n(t,0,0,t.parent.context.$implicit.name)})}function o(n){return a._29(0,[(n()(),a._31(null,["\n            ","\n        "])),a._40(0,c.o,[])],null,function(n,t){n(t,0,0,a._41(t,0,0,a._35(t,1).transform(t.parent.context.$implicit)))})}function _(n){return a._29(0,[(n()(),a._30(0,null,null,10,"ngb-panel",[],null,null,null,null,null)),a._32(16384,[[1,4]],2,g.b,[],null,null),a._42(335544320,2,{contentTpl:0}),a._42(335544320,3,{titleTpl:0}),(n()(),a._31(null,["\n        "])),(n()(),a._36(0,null,null,1,null,i)),a._32(16384,[[3,4]],0,g.c,[a._6],null,null),(n()(),a._31(null,["\n        "])),(n()(),a._36(0,null,null,1,null,o)),a._32(16384,[[2,4]],0,g.d,[a._6],null,null),(n()(),a._31(null,["    \n    "]))],null,null)}function r(n){return a._29(0,[(n()(),a._36(16777216,null,null,1,null,l)),a._32(16384,null,0,c.l,[a.U,a._6],{ngIf:[0,"ngIf"]},null),(n()(),a._31(null,["\n\n"])),(n()(),a._30(0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.goBack()&&l}return l},null,null)),(n()(),a._31(null,["Go back!"])),(n()(),a._31(null,["\n\n"])),(n()(),a._30(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),a._31(null,["\n\n"])),(n()(),a._30(0,null,null,4,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(n()(),a._31(null,["\n  "])),(n()(),a._30(0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a._31(null,["Well done!"])),(n()(),a._31(null,[" You successfully read this important alert message.\n"])),(n()(),a._31(null,["\n\n"])),(n()(),a._30(0,null,null,6,"ngb-accordion",[["role","tablist"]],[[1,"aria-multiselectable",0]],null,null,h.a,h.b)),a._32(2146304,null,1,g.a,[f.a],null,null),a._42(603979776,1,{panels:1}),(n()(),a._31(null,["\n    "])),(n()(),a._36(16777216,null,null,1,null,_)),a._32(802816,null,0,c.m,[a.U,a._6,a.w],{ngForOf:[0,"ngForOf"]},null),(n()(),a._31(null,["    \n"])),(n()(),a._31(null,["\n"]))],function(n,t){var e=t.component;n(t,1,0,e.user),n(t,19,0,e.users)},function(n,t){n(t,14,0,!a._35(t,15).closeOtherPanels)})}function u(n){return a._29(0,[(n()(),a._30(0,null,null,1,"user-detail",[],null,null,null,r,y)),a._32(114688,null,0,p.a,[d.a,b.v,c.e],null,null)],function(n,t){n(t,1,0)},null)}var a=e("3j3K"),s=e("NVOs"),c=e("2Je8"),g=e("hApb"),p=e("f3HK"),h=e("IQJX"),f=e("ZwZs"),d=e("3lLu"),b=e("5oXY");e.d(t,"a",function(){return N});var m=[],y=a._28({encapsulation:2,styles:m,data:{}}),N=a._33("user-detail",p.a,u,{},{},[])},sZHb:function(n,t,e){"use strict";function l(n){return r._29(0,[(n()(),r._30(0,null,null,25,"li",[],[[2,"selected",null]],[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.onSelect(n.context.$implicit)&&l}return l},null,null)),(n()(),r._31(null,["\n      "])),(n()(),r._30(0,null,null,1,"span",[["class","badge"]],null,null,null,null,null)),(n()(),r._31(null,["",""])),(n()(),r._31(null,[" -\n      "])),(n()(),r._30(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._31(null,[""," "])),(n()(),r._31(null,[" -\n      "])),(n()(),r._30(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._31(null,[""," "])),(n()(),r._31(null,["    \n\n      "])),(n()(),r._30(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._31(null,[""," "])),(n()(),r._31(null,[" -\n      "])),(n()(),r._30(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._31(null,[""," "])),(n()(),r._31(null,[" -\n      "])),(n()(),r._30(0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r._31(null,[""," "])),(n()(),r._31(null,["    \n      "])),(n()(),r._30(0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.details(n.context.$implicit)&&l}return l},null,null)),(n()(),r._31(null,["details"])),(n()(),r._31(null,[" \n      "])),(n()(),r._30(0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.edit(n.context.$implicit)&&l}return l},null,null)),(n()(),r._31(null,["go to edit"])),(n()(),r._31(null,[" \n    "]))],null,function(n,t){var e=t.component;n(t,0,0,t.context.$implicit===e.selectedHero),n(t,3,0,t.context.$implicit.id),n(t,6,0,t.context.$implicit.name),n(t,9,0,t.context.$implicit.username),n(t,12,0,t.context.$implicit.email),n(t,15,0,t.context.$implicit.phone),n(t,18,0,t.context.$implicit.website)})}function i(n){return r._29(0,[(n()(),r._31(null,["\n"])),(n()(),r._30(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),r._31(null,["Users list:"])),(n()(),r._31(null,["\n "])),(n()(),r._30(0,null,null,4,"ul",[["class","users"]],null,null,null,null,null)),(n()(),r._31(null,["\n    "])),(n()(),r._36(16777216,null,null,1,null,l)),r._32(802816,null,0,u.m,[r.U,r._6,r.w],{ngForOf:[0,"ngForOf"]},null),(n()(),r._31(null,["\n  "])),(n()(),r._31(null,[" \n\n\n"]))],function(n,t){n(t,7,0,t.component.users)},null)}function o(n){return r._29(0,[(n()(),r._30(0,null,null,1,"ng-component",[],null,null,null,i,h)),r._32(114688,null,0,a.a,[s.k,c.a,g.j],null,null)],function(n,t){n(t,1,0)},null)}var _=e("y7NJ"),r=e("3j3K"),u=e("2Je8"),a=e("9Yk8"),s=e("Fzro"),c=e("3lLu"),g=e("5oXY");e.d(t,"a",function(){return f});var p=[_.a],h=r._28({encapsulation:0,styles:p,data:{}}),f=r._33("ng-component",a.a,o,{},{},[])},x35b:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("3j3K"),i=e("kZql"),o=e("Qbdm"),_=e("kke6");i.a.production&&e.i(l.a)(),e.i(o.a)().bootstrapModuleFactory(_.a)},y7NJ:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=[".selected[_ngcontent-%COMP%]{background-color:#cfd8dc!important;color:red}.users[_ngcontent-%COMP%]{margin:0 0 2em 0;list-style-type:none;padding:0}.users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;position:relative;left:0;background-color:#eee;margin:.5em;padding:.3em 0;height:1.6em;border-radius:4px}.users[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#bbd8dc!important;color:#fff}.users[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{color:#607d8b;background-color:#ddd;left:.1em}.users[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:relative;top:-3px}.users[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{display:inline-block;font-size:small;padding:.8em .7em 0 .7em;background-color:#607d8b;line-height:1em;position:relative;left:-1px;top:-4px;height:1.8em;border-radius:4px 0 0 4px}.users[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], button.edit[_ngcontent-%COMP%]{color:#fff;margin-right:.8em}button.edit[_ngcontent-%COMP%]{float:right;margin-top:2px;background-color:gray!important}"]}},[0]);