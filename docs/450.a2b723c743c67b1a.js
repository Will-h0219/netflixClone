"use strict";(self.webpackChunknetflixClone=self.webpackChunknetflixClone||[]).push([[450],{450:(ce,g,l)=>{l.r(g),l.d(g,{HomeModule:()=>re});var r=l(895),s=l(433),c=l(736),e=l(256),i=l(340);const x=function(){return[""]};function v(t,a){1&t&&(e.ynx(0),e.TgZ(1,"div",2)(2,"a",3),e._UZ(3,"img",4),e.TgZ(4,"span",5),e._uU(5,"Mi perfil"),e.qZA()()(),e.BQk()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,x)))}function y(t,a){1&t&&(e.TgZ(0,"div",2)(1,"button",6),e._UZ(2,"div",7),e.TgZ(3,"span",5),e._uU(4,"Agregar perfil"),e.qZA()()())}let O=(()=>{class t{constructor(){this.profile=!0}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-card"]],inputs:{profile:"profile"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["addProfile",""],[1,"profile"],[1,"profile__link",3,"routerLink"],["src","https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png","alt","avatar",1,"profile__avatar"],[1,"profile__name"],[1,"profile__add"],[1,"profile__add__icon"]],template:function(n,o){if(1&n&&(e.YNc(0,v,6,2,"ng-container",0),e.YNc(1,y,5,0,"ng-template",null,1,e.W1O)),2&n){const p=e.MAs(2);e.Q6J("ngIf",o.profile)("ngIfElse",p)}},dependencies:[r.O5,c.rH],styles:['.profile[_ngcontent-%COMP%]{max-width:200px;min-width:84px;width:10vw;text-align:center}.profile__link[_ngcontent-%COMP%]{text-decoration:none}.profile__avatar[_ngcontent-%COMP%]{width:100%;max-height:200px;min-height:84px;height:10vw;border-radius:4px}.profile__name[_ngcontent-%COMP%]{color:#6d6d6eb3;font-size:1.4vw;display:block;margin:.5em 0}.profile__add[_ngcontent-%COMP%]{background:none;border:none;width:100%;padding:0}.profile__add__icon[_ngcontent-%COMP%]{height:10vw;max-height:200px;min-height:84px;position:relative;border-radius:4px}.profile__add__icon[_ngcontent-%COMP%]:before{content:"";display:inline-block;position:absolute;mask:url(add.d280dce48ad1e6fa.svg) no-repeat 50% 50%;-webkit-mask:url(add.d280dce48ad1e6fa.svg) no-repeat 50% 50%;background-color:#6d6d6eb3;width:60%;min-width:84px;max-width:120px;height:60%;min-height:84px;max-height:120px;-webkit-mask-size:100%;mask-size:100%;top:50%;right:50%;transform:translateY(-50%) translate(50%)}.profile[_ngcontent-%COMP%]:hover   .profile__avatar[_ngcontent-%COMP%]{outline:solid 4px rgb(255,255,255);outline-offset:-4px}.profile[_ngcontent-%COMP%]:hover   .profile__name[_ngcontent-%COMP%]{color:#fff}.profile[_ngcontent-%COMP%]:hover   .profile__add__icon[_ngcontent-%COMP%]{background-color:#fff}']}),t})(),M=(()=>{class t{constructor(n){this.cdr=n,this.zoomIn=!0}ngAfterViewInit(){this.zoomIn=!1,this.cdr.detectChanges()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-selection"]],decls:9,vars:2,consts:[[1,"profiles"],[3,"profile"],[1,"manage-profiles"]],template:function(n,o){1&n&&(e.TgZ(0,"main")(1,"section")(2,"h1"),e._uU(3,"\xbfQui\xe9n est\xe1 viendo ahora?"),e.qZA(),e.TgZ(4,"div",0),e._UZ(5,"app-profile-card")(6,"app-profile-card",1),e.qZA(),e.TgZ(7,"button",2),e._uU(8," Administrar perfiles "),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("@zoom",o.zoomIn?"zoomIn":"zoomOut"),e.xp6(5),e.Q6J("profile",!1))},dependencies:[O],styles:["main[_ngcontent-%COMP%]{height:calc(100% - 80px);overflow:hidden;display:flex;align-content:center;justify-content:center}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{display:flex;flex-flow:column;align-items:center;justify-content:center;position:relative;gap:30px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5vw;font-weight:400;user-select:none;-webkit-user-select:none;-ms-user-select:none}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .profiles[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:2.5vw}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .manage-profiles[_ngcontent-%COMP%]{border:1px solid rgb(128,128,128);background:none;color:gray;font-size:1.2vw;cursor:pointer;padding:10px 30px;margin-top:30px}main[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .manage-profiles[_ngcontent-%COMP%]:hover{border:1px solid rgb(255,255,255);color:#fff}"],data:{animation:[(0,i.X$)("zoom",[(0,i.SB)("zoomIn",(0,i.oB)({transform:"scale(1.15)",opacity:0})),(0,i.SB)("zoomOut",(0,i.oB)({transform:"scale(1)",opacity:"1"})),(0,i.eR)("zoomIn => zoomOut",[(0,i.jt)(".3s")])])]}}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:1,vars:0,template:function(n,o){1&n&&e._UZ(0,"app-profile-selection")},dependencies:[M]}),t})();const d={features:{tvFeature:"TV_FEATURE",downloadFeature:"DOWNLOAD_FEATURE",multiDeviceFeature:"MULTI_DEVICE_FEATURE",kidsFeature:"KIDS_FEATURE"}},{tvFeature:u,downloadFeature:m,multiDeviceFeature:f,kidsFeature:_}=d.features,k={heroSection:{title:"Peliculas y series ilimitadas y mucho m\xe1s.",subtitle:"Disfruta donde quieras. Cancela cuando quieras.",getStarted:{description:"\xbfQuieres ver algo ya? Escribe tu correo para crear una suscripci\xf3n a Netflix o reactivarla.",inputCta:{name:"heroSection_email",label:"Email",placeholder:"Email"},inputErrors:{required:"El email es obligatorio.",invalidEmail:"Escribe una direcci\xf3n de email v\xe1lida."},getStartedCta:{label:"Comenzar",name:"getStarted"}}},featuresAndBenefits:[{id:u,content:{title:"Disfruta en tu TV",description:"Ve en smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y m\xe1s.",media:{cover:"https://i.imgur.com/k6uvvKS.png",mediaUrl:"https://i.imgur.com/eUyUumw.gif"}},textFirst:!0},{id:m,content:{title:"Descarga tus series para verlas offline",description:"Guarda tu contenido favorito y tendr\xe1s siempre algo para ver.",media:{cover:"https://i.imgur.com/nicC5nh.png",mediaIcon:"https://i.imgur.com/0VC2xJL.gif",title:"Stranger Things",status:"Descargando..."}},textFirst:!1},{id:f,content:{title:"Disfruta donde quieras",description:"Pel\xedculas y series ilimitadas en tu tel\xe9fono, tablet, computadora y TV.",media:{cover:"https://i.imgur.com/iKM1ZNk.png",mediaUrl:"https://i.imgur.com/sp1RyaY.gif"}},textFirst:!0},{id:_,content:{title:"Crea perfiles para ni\xf1os",description:"Los ni\xf1os vivir\xe1n aventuras con sus personajes favoritos en un espacio dise\xf1ado exclusivamente para ellos, sin costo con tu membres\xeda.",media:{cover:"https://i.imgur.com/bFnrgRX.png"}},textFirst:!1}],faqSection:{title:"Preguntas Frecuentes",faqList:[{question:"\xbfQu\xe9 es Netflix?",answer:"Netflix es un servicio de streaming que ofrece una gran variedad de pel\xedculas, series y documentales premiados en casi cualquier pantalla conectada a internet.<br><br>Todo lo que quieras ver, sin l\xedmites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, \xa1y todas las semanas se agregan m\xe1s pel\xedculas y series!"},{question:"\xbfCu\xe1nto cuesta Neflix?",answer:"Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos adicionales ni contratos."},{question:"\xbfD\xf3nde puedo ver Netflix?",answer:"Disfruta donde quieras, cuando quieras. Inicia sesi\xf3n en tu cuenta de Netflix para ver contenido al instante a trav\xe9s de netflix.com desde tu computadora personal o en cualquier dispositivo con conexi\xf3n a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.<br><br>Adem\xe1s, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la funci\xf3n de descarga, puedes ver donde vayas y sin conexi\xf3n a internet. Lleva Netflix contigo adonde sea."},{question:"\xbfC\xf3mo cancelo?",answer:"Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membres\xeda online con solo dos clics. No hay cargos por cancelaci\xf3n. Empieza y termina cuando quieras."},{question:"\xbfQu\xe9 puedo ver en Netflix?",answer:"Netflix tiene un amplio cat\xe1logo de pel\xedculas, series, documentales, animes, originales premiados y m\xe1s. Todo lo que quieras ver, cuando quieras."},{question:"\xbfEs bueno Netflix para los ni\xf1os?",answer:"La experiencia de Netflix para ni\xf1os est\xe1 incluida en la membres\xeda para que los padres tengan el control mientras los peques disfrutan series y pel\xedculas familiares en su propio espacio.<br><br>Los perfiles para ni\xf1os incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los ni\xf1os en funci\xf3n de la clasificaci\xf3n por edad y bloquear determinados t\xedtulos que no quieras que los ni\xf1os vean."}],getStarted:{description:"\xbfQuieres ver algo ya? Escribe tu correo para crear una suscripci\xf3n a Netflix o reactivarla.",inputCta:{name:"faqSection_email",label:"Email",placeholder:"Email"},inputErrors:{required:"El email es obligatorio.",invalidEmail:"Escribe una direcci\xf3n de email v\xe1lida."},getStartedCta:{label:"Comenzar",name:"getStarted"}}},footerSection:{questions:"\xbfPreguntas? Llama al ",phoneNumber:{label:"01 800 917 1564",path:"https://youtu.be/dQw4w9WgXcQ"},links:[{label:"Preguntas frecuentes",path:"/"},{label:"Centro de ayuda",path:"/"},{label:"Cuenta",path:"/"},{label:"Prensa",path:"/"},{label:"Relaciones con inversionistas",path:"/"},{label:"Empleo",path:"/"},{label:"Canjear tarjetas de regalo",path:"/"},{label:"Comprar tarjetas de regalo",path:"/"},{label:"Formas de ver",path:"/"},{label:"T\xe9rminos de uso",path:"/"},{label:"Privacidad",path:"/"},{label:"Preferencias de cookies",path:"/"},{label:"Informaci\xf3n corporativa",path:"/"},{label:"Cont\xe1ctanos",path:"/"},{label:"Prueba de velocidad",path:"/"},{label:"Avisos legales",path:"/"},{label:"Solo en Netflix",path:"/"}]}},T={heroSection:{title:"Unlimited movies, TV shows, and more",subtitle:"Watch enywhere. Cancel anytime.",getStarted:{description:"Ready to watch? Enter your email to create or restart your membership.",inputCta:{name:"heroSection_email",label:"Email address",placeholder:"Email address"},inputErrors:{required:"Email is required!",invalidEmail:"Please enter a valid email address"},getStartedCta:{label:"Get Started",name:"getStarted"}}},featuresAndBenefits:[{id:u,content:{title:"Enjoy on your TV",description:"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",media:{cover:"https://i.imgur.com/k6uvvKS.png",mediaUrl:"https://i.imgur.com/eUyUumw.gif"}},textFirst:!0},{id:m,content:{title:"Download your shows to watch offline",description:"Save your favorites easily and always have something to watch.",media:{cover:"https://i.imgur.com/nicC5nh.png",mediaIcon:"https://i.imgur.com/0VC2xJL.gif",title:"Stranger Things",status:"Downloading..."}},textFirst:!1},{id:f,content:{title:"Watch everywhere",description:"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",media:{cover:"https://i.imgur.com/iKM1ZNk.png",mediaUrl:"https://i.imgur.com/sp1RyaY.gif"}},textFirst:!0},{id:_,content:{title:"Create profiles for kids",description:"Send kids on adventures with their favorite characters in space made just for them-free with your membership.",media:{cover:"https://i.imgur.com/bFnrgRX.png"}},textFirst:!1}],faqSection:{title:"Frequently Asked Questions",faqList:[{question:"What is Netflix?",answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br><br>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},{question:"How much does Netflix cost?",answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP16,900 to COP38,900 a month. No extra costs, no contracts."},{question:"Where can I watch?",answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br><br>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},{question:"How do I cancel?",answer:"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \u2013 start or stop your account anytime."},{question:"What can I watch on Netflix?",answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},{question:"Is Netflix good for kids?",answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br><br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."}],getStarted:{description:"Ready to watch? Enter your email to create or restart your membership.",inputCta:{name:"faqSection_email",label:"Email address",placeholder:"Email address"},inputErrors:{required:"Email is required!",invalidEmail:"Please enter a valid email address"},getStartedCta:{label:"Get Started",name:"getStarted"}}},footerSection:{questions:"Questions? ",phoneNumber:{label:"01 800 917 1564",path:"https://youtu.be/dQw4w9WgXcQ"},links:[{label:"FAQ",path:"/"},{label:"Help center",path:"/"},{label:"Account",path:"/"},{label:"Media center",path:"/"},{label:"Investor relations",path:"/"},{label:"Jobs",path:"/"},{label:"Redeem gift cards",path:"/"},{label:"Buy gift cards",path:"/"},{label:"Ways to watch",path:"/"},{label:"Terms of use",path:"/"},{label:"Privacy",path:"/"},{label:"Cookie preferences",path:"/"},{label:"Corporate information",path:"/"},{label:"Contact us",path:"/"},{label:"Speed test",path:"/"},{label:"Legal notices",path:"/"},{label:"Only on Netflix",path:"/"}]}},S={languages:[{label:"Espa\xf1ol",path:"/co",signIn:"Iniciar sesi\xf3n"},{label:"English",path:"/co-EN",signIn:"Sign In"}]};function q(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"li",7),e.NdJ("click",function(){const se=e.CHM(n).$implicit,le=e.oxw(2);return e.KtG(le.setLang(se))}),e._uU(1),e.qZA()}if(2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.label," ")}}function F(t,a){if(1&t&&(e.TgZ(0,"ul",5),e.YNc(1,q,2,1,"li",6),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.languages)}}let h=(()=>{class t{constructor(n){this.router=n,this.languages=[],this.showLangOpts=!1}ngOnInit(){this.selectedLang=this.languages.find(n=>n.path===this.router.url)||this.languages[0]}toggleLangs(){this.showLangOpts=!this.showLangOpts}setLang(n){this.selectedLang=n,this.showLangOpts=!1,this.router.navigateByUrl(n.path)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-lang-selector"]],inputs:{languages:"languages",selectedLang:"selectedLang"},decls:6,vars:2,consts:[[1,"lang"],[1,"btn","btn__small","btn__outline-secondary",3,"click"],[1,"lang__icon"],[1,"lang__select_icon"],["class","lang__list",4,"ngIf"],[1,"lang__list"],["class","lang__opts",3,"click",4,"ngFor","ngForOf"],[1,"lang__opts",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.toggleLangs()}),e._UZ(2,"span",2),e._uU(3),e._UZ(4,"span",3),e.qZA(),e.YNc(5,F,2,1,"ul",4),e.qZA()),2&n&&(e.xp6(3),e.hij(" ",o.selectedLang.label," "),e.xp6(2),e.Q6J("ngIf",o.showLangOpts))},dependencies:[r.sg,r.O5],styles:['.lang[_ngcontent-%COMP%]{position:relative;cursor:pointer;width:-moz-fit-content;width:fit-content}.lang__icon[_ngcontent-%COMP%]{margin-right:24px}.lang__icon[_ngcontent-%COMP%]:before{content:"";display:inline-block;mask:url(world.1f87c4345f1cfb4b.svg) no-repeat 50% 50%;-webkit-mask:url(world.1f87c4345f1cfb4b.svg) no-repeat 50% 50%;width:16px;height:16px;-webkit-mask-size:16px;mask-size:16px;background-color:#fff;position:absolute;top:50%;transform:translateY(-50%)}.lang__select_icon[_ngcontent-%COMP%]{margin-left:8px;margin-right:10px}.lang__select_icon[_ngcontent-%COMP%]:after{content:"";display:inline-block;mask:url(arrow-down.fe0f6d11f3bebe40.svg) no-repeat 50% 50%;-webkit-mask:url(arrow-down.fe0f6d11f3bebe40.svg) no-repeat 50% 50%;width:16px;height:16px;-webkit-mask-size:10px;mask-size:10px;background-color:#fff;position:absolute;top:50%;transform:translateY(-50%)}.lang__list[_ngcontent-%COMP%]{width:100%;position:absolute;list-style-type:none;padding:0;margin:0;text-align:center;background-color:#fff}.lang__opts[_ngcontent-%COMP%]{font-size:14px;padding:4px 0}.lang__opts[_ngcontent-%COMP%]:hover{background-color:#accef7}']}),t})();const Z=function(t){return[t]};function E(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"a",8),e._uU(2),e.qZA(),e.BQk()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,Z,n.path)),e.xp6(1),e.Oqu(n.label)}}let N=(()=>{class t{constructor(){this.languages=[]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],inputs:{languages:"languages",module:"module"},decls:11,vars:5,consts:[[1,"footer"],[1,"footer__content"],[1,"note"],[3,"href"],[1,"footer__content__links"],[4,"ngFor","ngForOf"],[3,"languages"],[1,"footer__content__mark"],[3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"p",2),e._uU(3),e.TgZ(4,"a",3),e._uU(5),e.qZA()(),e.TgZ(6,"div",4),e.YNc(7,E,3,4,"ng-container",5),e.qZA(),e._UZ(8,"app-lang-selector",6),e.TgZ(9,"p",7),e._uU(10,"Netflix Colombia"),e.qZA()()()),2&n&&(e.xp6(3),e.hij(" ",o.module.questions," "),e.xp6(1),e.Q6J("href",o.module.phoneNumber.path,e.LSH),e.xp6(1),e.Oqu(o.module.phoneNumber.label),e.xp6(2),e.Q6J("ngForOf",o.module.links),e.xp6(1),e.Q6J("languages",o.languages))},dependencies:[r.sg,c.rH,h],styles:[".footer[_ngcontent-%COMP%]{width:100%;background-color:#000}.footer__content[_ngcontent-%COMP%]{max-width:70%;margin:0 auto;padding:5vw 0}.footer__content__links[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);row-gap:15px;margin-bottom:34px;font-size:14px}.footer__content[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{color:#ffffffbf;font-size:16px;margin-bottom:30px}.footer__content__mark[_ngcontent-%COMP%]{color:#ffffffbf;font-size:13px;margin-top:24px}.footer__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ffffffbf}"]}),t})();var I=l(168);const U=function(){return["/browse"]};let A=(()=>{class t{constructor(n){this.router=n,this.languages=[],this.signIn=""}ngOnInit(){const{signIn:n}=this.languages.find(o=>o.path===this.router.url)||this.languages[0];this.signIn=n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-landing-header"]],inputs:{languages:"languages"},decls:7,vars:4,consts:[[1,"header-wrapper"],[1,"header"],["size","bg"],[1,"header__btns"],[3,"languages"],[1,"btn","btn__small","btn__red",3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"header",0)(1,"div",1),e._UZ(2,"app-logo",2),e.TgZ(3,"div",3),e._UZ(4,"app-lang-selector",4),e.TgZ(5,"a",5),e._uU(6),e.qZA()()()()),2&n&&(e.xp6(4),e.Q6J("languages",o.languages),e.xp6(1),e.Q6J("routerLink",e.DdM(3,U)),e.xp6(1),e.Oqu(o.signIn))},dependencies:[c.rH,I.R,h],styles:['.header-wrapper[_ngcontent-%COMP%]{position:absolute;width:100%}.header[_ngcontent-%COMP%]{max-width:66.6%;margin:0 auto;padding:25px 0;display:flex;justify-content:space-between;align-items:center}.header__btns[_ngcontent-%COMP%]{display:flex;gap:1.2vw;align-items:center}.header__btns[_ngcontent-%COMP%]   .lang[_ngcontent-%COMP%]{position:relative;cursor:pointer}.header__btns[_ngcontent-%COMP%]   .lang__icon[_ngcontent-%COMP%]{margin-right:24px}.header__btns[_ngcontent-%COMP%]   .lang__icon[_ngcontent-%COMP%]:before{content:"";display:inline-block;mask:url(world.1f87c4345f1cfb4b.svg) no-repeat 50% 50%;-webkit-mask:url(world.1f87c4345f1cfb4b.svg) no-repeat 50% 50%;width:16px;height:16px;-webkit-mask-size:16px;mask-size:16px;background-color:#fff;position:absolute;top:50%;transform:translateY(-50%)}.header__btns[_ngcontent-%COMP%]   .lang__select_icon[_ngcontent-%COMP%]{margin-left:8px;margin-right:10px}.header__btns[_ngcontent-%COMP%]   .lang__select_icon[_ngcontent-%COMP%]:after{content:"";display:inline-block;mask:url(arrow-down.fe0f6d11f3bebe40.svg) no-repeat 50% 50%;-webkit-mask:url(arrow-down.fe0f6d11f3bebe40.svg) no-repeat 50% 50%;width:16px;height:16px;-webkit-mask-size:10px;mask-size:10px;background-color:#fff;position:absolute;top:50%;transform:translateY(-50%)}.header__btns[_ngcontent-%COMP%]   .lang__list[_ngcontent-%COMP%]{width:100%;position:absolute;list-style-type:none;padding:0;margin:0;text-align:center;background-color:#fff}.header__btns[_ngcontent-%COMP%]   .lang__opts[_ngcontent-%COMP%]{font-size:14px;padding:4px 0}.header__btns[_ngcontent-%COMP%]   .lang__opts[_ngcontent-%COMP%]:hover{background-color:#accef7}']}),t})();const Q=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;function C(){return t=>{const a=t.value;return a?Q.test(a)?null:{invalidEmail:!0}:null}}let L=(()=>{class t{constructor(){this.hasError=!1}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input"]],inputs:{inputContent:"inputContent",hasError:"hasError"},decls:4,vars:7,consts:[[1,"form__group"],[1,"form__field",3,"id","name","type","placeholder","ngClass"],[1,"form__label",3,"for"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"input",1),e.TgZ(2,"label",2),e._uU(3),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("id",o.inputContent.name)("name",o.inputContent.name)("type",o.inputContent.type||"text")("placeholder",o.inputContent.placeholder||"")("ngClass",o.hasError?"has-error":""),e.xp6(1),e.Q6J("for",o.inputContent.name),e.xp6(1),e.Oqu(o.inputContent.label))},dependencies:[r.mk]}),t})();function z(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",2),e.O4$(),e.TgZ(2,"svg",3),e._UZ(3,"rect",4)(4,"path",5),e.qZA(),e._uU(5),e.qZA(),e.BQk()),2&t){const n=a.$implicit,o=e.oxw();e.xp6(5),e.hij(" ",o.getErrorMessage(n)," ")}}let J=(()=>{class t{constructor(){this.errorMessages={},this.singleError=!1,this.errorTypes=[],this.displayedErrorMessage="Test"}ngOnInit(){this.getErrorTypes(),this.getErrors()}getErrorTypes(){this.errorTypes=this.control&&this.control.errors?Object.keys(this.control.errors):[],this.singleError&&this.errorTypes.length>1&&(this.errorTypes=[this.errorTypes[0]])}getErrors(){this.control&&this.control.valueChanges.subscribe({next:()=>{this.control.invalid&&(this.control.dirty||this.control.touched)&&this.getErrorTypes()}})}getErrorMessage(n){return this.errorMessages[n]||`default.${n}`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-error-message"]],inputs:{control:"control",errorMessages:"errorMessages",singleError:"singleError"},decls:2,vars:1,consts:[[1,"wrapper"],[4,"ngFor","ngForOf"],[1,"error"],["fill","rgba(229, 9, 20, 1)","width","20px","height","20px","viewBox","0 0 64 64","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",0,"xml","space","preserve",0,"xmlns","serif","http://www.serif.com/",2,"fill-rule","evenodd","clip-rule","evenodd","stroke-linejoin","round","stroke-miterlimit","2"],["id","Icons","x","-704","y","-64","width","1280","height","800",2,"fill","none"],["id","error-circle","d","M32.085,56.058c6.165,-0.059 12.268,-2.619 16.657,-6.966c5.213,-5.164 7.897,-12.803 6.961,-20.096c-1.605,-12.499 -11.855,-20.98 -23.772,-20.98c-9.053,0 -17.853,5.677 -21.713,13.909c-2.955,6.302 -2.96,13.911 0,20.225c3.832,8.174 12.488,13.821 21.559,13.908c0.103,0.001 0.205,0.001 0.308,0Zm-0.282,-4.003c-9.208,-0.089 -17.799,-7.227 -19.508,-16.378c-1.204,-6.452 1.07,-13.433 5.805,-18.015c5.53,-5.35 14.22,-7.143 21.445,-4.11c6.466,2.714 11.304,9.014 12.196,15.955c0.764,5.949 -1.366,12.184 -5.551,16.48c-3.672,3.767 -8.82,6.016 -14.131,6.068c-0.085,0 -0.171,0 -0.256,0Zm-12.382,-10.29l9.734,-9.734l-9.744,-9.744l2.804,-2.803l9.744,9.744l10.078,-10.078l2.808,2.807l-10.078,10.079l10.098,10.098l-2.803,2.804l-10.099,-10.099l-9.734,9.734l-2.808,-2.808Z"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,z,6,1,"ng-container",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",o.errorTypes))},dependencies:[r.sg],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:6px}.wrapper[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{display:flex;align-items:center;color:#e50914;font-size:12px;gap:4px}"]}),t})();function B(t,a){if(1&t&&(e.TgZ(0,"p",7),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.getStartedContent.description)}}function Y(t,a){if(1&t&&e._UZ(0,"app-error-message",8),2&t){const n=e.oxw();e.Q6J("control",n.getStartedForm.controls.email)("errorMessages",n.getStartedContent.inputErrors)}}let b=(()=>{class t{constructor(n,o,p){this.fb=n,this.router=o,this.renderer=p,this.getStartedForm=this.fb.group({email:["",[s.kI.required,C()]]})}showError(){return!this.getStartedForm.controls.email.valid&&this.getStartedForm.controls.email.dirty}getStarted(){this.getStartedForm.invalid?this.renderer.selectRootElement(`#${this.getStartedContent.inputCta.name}`).focus():(console.log(this.getStartedForm.value),this.router.navigateByUrl("/browse",{state:{email:this.getStartedForm.controls.email.value}}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu),e.Y36(c.F0),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-get-started-form"]],inputs:{getStartedContent:"getStartedContent"},decls:8,vars:7,consts:[["class","description",4,"ngIf"],[1,"row","form",3,"formGroup","ngSubmit"],[1,"form__input__wrapper"],["ngDefaultControl","","formControlName","email",1,"form__group",3,"inputContent","hasError"],["class","error-msg",3,"control","errorMessages",4,"ngIf"],["type","submit",1,"btn","btn__red",3,"id"],[1,"arrow-right-icon"],[1,"description"],[1,"error-msg",3,"control","errorMessages"]],template:function(n,o){1&n&&(e.YNc(0,B,2,1,"p",0),e.TgZ(1,"form",1),e.NdJ("ngSubmit",function(){return o.getStarted()}),e.TgZ(2,"div",2),e._UZ(3,"app-input",3),e.YNc(4,Y,1,2,"app-error-message",4),e.qZA(),e.TgZ(5,"button",5),e._uU(6),e._UZ(7,"span",6),e.qZA()()),2&n&&(e.Q6J("ngIf",o.getStartedContent.description),e.xp6(1),e.Q6J("formGroup",o.getStartedForm),e.xp6(2),e.Q6J("inputContent",o.getStartedContent.inputCta)("hasError",o.showError()),e.xp6(1),e.Q6J("ngIf",o.showError()),e.xp6(1),e.Q6J("id",o.getStartedContent.getStartedCta.name),e.xp6(1),e.hij(" ",o.getStartedContent.getStartedCta.label," "))},dependencies:[r.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,L,J],styles:[".row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;gap:1rem}.form__group[_ngcontent-%COMP%]{width:25vw}.form__input__wrapper[_ngcontent-%COMP%]{position:relative}.form__input__wrapper[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{position:absolute;left:0}.description[_ngcontent-%COMP%]{font-size:19px;margin-bottom:2rem}.btn[_ngcontent-%COMP%]{font-weight:700}"]}),t})(),H=(()=>{class t{constructor(n){this.fb=n,this.getStartedForm=this.fb.group({email:["",[s.kI.required,C()]]})}showError(){return!this.getStartedForm.controls.email.valid&&this.getStartedForm.controls.email.dirty}getStarted(){console.log(this.getStartedForm.value)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(s.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hero-section"]],inputs:{module:"module"},decls:6,vars:3,consts:[[1,"get-started"],[1,"note","note__bg"],[3,"getStartedContent"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"p",1),e._uU(4),e.qZA(),e._UZ(5,"app-get-started-form",2),e.qZA()),2&n&&(e.xp6(2),e.Oqu(o.module.title),e.xp6(2),e.Oqu(o.module.subtitle),e.xp6(1),e.Q6J("getStartedContent",o.module.getStarted))},dependencies:[b],styles:['.get-started[_ngcontent-%COMP%]{background-image:linear-gradient(180deg,rgba(0,0,0,.5) 0%,rgba(255,255,255,0) 50%,rgba(0,0,0,.5) 100%),url(landing-background.0159908048c84420.svg);background-size:cover;height:70vh;min-height:700px;text-align:center;border-bottom:8px solid rgb(35,35,35)}.get-started[_ngcontent-%COMP%]:before{content:"";display:block;height:35%}.get-started[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:54px;max-width:55vw;margin:0 auto 2rem}.get-started[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{margin:0 auto 2rem}.get-started[_ngcontent-%COMP%]   .note__bg[_ngcontent-%COMP%]{font-size:26px}.get-started[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;gap:1rem}.get-started[_ngcontent-%COMP%]   .form__group[_ngcontent-%COMP%]{width:25vw}.get-started[_ngcontent-%COMP%]   .form__input__wrapper[_ngcontent-%COMP%]{position:relative}.get-started[_ngcontent-%COMP%]   .form__input__wrapper[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%]{position:absolute;left:0}']}),t})();const j=function(t){return{"on-top":t}};function V(t,a){if(1&t&&(e.ynx(0),e._UZ(1,"img",2),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,j,n.moduleId===n.constants.features.tvFeature||n.moduleId===n.constants.features.multiDeviceFeature))("src",n.media.cover,e.LSH)}}const D=function(t,a){return{"tv-feature":t,"multi-device-feature":a}};function X(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",3),e._UZ(2,"img",4),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.WLB(2,D,n.moduleId===n.constants.features.tvFeature,n.moduleId===n.constants.features.multiDeviceFeature)),e.xp6(1),e.Q6J("src",n.media.mediaUrl,e.LSH)}}function R(t,a){if(1&t&&(e.ynx(0),e.TgZ(1,"div",5),e._UZ(2,"img",6),e.TgZ(3,"div")(4,"p",7),e._uU(5),e.qZA(),e.TgZ(6,"p",8),e._uU(7),e.qZA()(),e._UZ(8,"img",9),e.qZA(),e.BQk()),2&t){const n=e.oxw(2);e.xp6(5),e.Oqu(n.media.title),e.xp6(2),e.Oqu(n.media.status),e.xp6(1),e.Q6J("src",n.media.mediaIcon,e.LSH)}}function W(t,a){if(1&t&&(e.ynx(0),e.YNc(1,X,3,5,"ng-container",1),e.YNc(2,R,9,3,"ng-container",1),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.media.mediaUrl&&n.moduleId!==n.constants.features.downloadFeature),e.xp6(1),e.Q6J("ngIf",n.media.mediaIcon&&n.moduleId===n.constants.features.downloadFeature)}}let G=(()=>{class t{constructor(){this.moduleId="",this.constants={...d}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-feature-media"]],inputs:{moduleId:"moduleId",media:"media"},decls:3,vars:2,consts:[[1,"media"],[4,"ngIf"],["alt","media-cover",1,"media__cover",3,"ngClass","src"],[1,"media__container",3,"ngClass"],["alt","",1,"media__container__content",3,"src"],[1,"media__download"],["src","../../../../../../assets/images/boxshot.svg","alt","boxshot",1,"preview"],[1,"title"],[1,"status"],["alt","",1,"icon",3,"src"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e.YNc(1,V,2,4,"ng-container",1),e.YNc(2,W,3,2,"ng-container",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngIf",o.media),e.xp6(1),e.Q6J("ngIf",o.media))},dependencies:[r.mk,r.O5],styles:[".media[_ngcontent-%COMP%]{width:100%;position:relative}.media__cover[_ngcontent-%COMP%]{position:relative;width:100%;height:auto}.media__container[_ngcontent-%COMP%]{position:absolute;overflow:hidden}.media__container__content[_ngcontent-%COMP%]{width:100%;height:auto}.media__download[_ngcontent-%COMP%]{width:68%;height:25%;position:absolute;bottom:8%;left:50%;transform:translate(-50%);background-color:#000;padding:8px 12px;outline:2px solid rgb(128,128,128);outline-offset:-2px;border-radius:12px;display:flex;align-items:center;gap:16px;box-sizing:border-box}.media__download[_ngcontent-%COMP%]   .preview[_ngcontent-%COMP%]{height:100%;width:auto}.media__download[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.4vw}.media__download[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font-size:1.2vw;color:#0071eb}.media__download[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:17%;height:auto;margin-left:auto}.media[_ngcontent-%COMP%]   .on-top[_ngcontent-%COMP%]{z-index:100}.media[_ngcontent-%COMP%]   .tv-feature[_ngcontent-%COMP%]{width:75%;top:50%;left:50%;transform:translate(-50%,-55%)}.media[_ngcontent-%COMP%]   .multi-device-feature[_ngcontent-%COMP%]{width:61%;top:10%;left:50%;transform:translate(-50%)}"]}),t})(),$=(()=>{class t{constructor(){this.constants={...d}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-feature-section"]],inputs:{module:"module"},decls:9,vars:5,consts:[[1,"feature"],[1,"feature__wrapper",3,"ngClass"],[1,"feature__item","feature__text"],[1,"feature__item","feature__image"],[3,"moduleId","media"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.TgZ(7,"div",3),e._UZ(8,"app-feature-media",4),e.qZA()()()),2&n&&(e.xp6(1),e.Q6J("ngClass",o.module.textFirst?"text-first":"image-first"),e.xp6(3),e.Oqu(o.module.content.title),e.xp6(2),e.Oqu(o.module.content.description),e.xp6(2),e.Q6J("moduleId",o.module.id)("media",o.module.content.media))},dependencies:[r.mk,G],styles:[".feature[_ngcontent-%COMP%]{background:rgb(0,0,0);width:100%;padding:4.5rem 0;border-bottom:8px solid rgb(35,35,35)}.feature__wrapper[_ngcontent-%COMP%]{max-width:70%;margin:0 auto;padding:0 15vw;display:flex;align-items:center}.feature__item[_ngcontent-%COMP%]{width:50%;position:relative}.feature__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5vw;margin-bottom:2rem}.feature__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.3vw}.feature[_ngcontent-%COMP%]   .text-first[_ngcontent-%COMP%]   .feature__text[_ngcontent-%COMP%]{order:1}.feature[_ngcontent-%COMP%]   .text-first[_ngcontent-%COMP%]   .feature__image[_ngcontent-%COMP%], .feature[_ngcontent-%COMP%]   .image-first[_ngcontent-%COMP%]   .feature__text[_ngcontent-%COMP%]{order:2}.feature[_ngcontent-%COMP%]   .image-first[_ngcontent-%COMP%]   .feature__image[_ngcontent-%COMP%]{order:1}"]}),t})(),K=(()=>{class t{constructor(){this.collapsed=!0}collapseToggle(){this.collapsed=!this.collapsed}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-faq-item"]],inputs:{faq:"faq"},decls:6,vars:4,consts:[[1,"collapsible"],[1,"collapsible__btn",3,"click"],[1,"icon",3,"ngClass"],[1,"collapsible__content"],[1,"content",3,"innerHTML"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return o.collapseToggle()}),e._uU(2),e._UZ(3,"span",2),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"p",4),e.qZA()()),2&n&&(e.xp6(2),e.hij(" ",o.faq.question," "),e.xp6(1),e.Q6J("ngClass",o.collapsed?"icon__plus":"icon__close"),e.xp6(1),e.Q6J("@collapse",o.collapsed?"close":"open"),e.xp6(1),e.Q6J("innerHTML",o.faq.answer,e.oJD))},dependencies:[r.mk],styles:['.collapsible[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:2px}.collapsible__btn[_ngcontent-%COMP%]{background-color:#303030;color:#fff;border:none;padding:1.3vw 2vw;font-size:1.5vw;display:flex;justify-content:space-between;box-sizing:border-box;position:relative;transition:.3s}.collapsible__btn[_ngcontent-%COMP%]:hover{background-color:#6d6d6eb3}.collapsible__btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:block;position:relative}.collapsible__btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:after{content:"";display:inline-block;position:absolute;right:.5vw;background-color:#fff}.collapsible__btn[_ngcontent-%COMP%]   .icon__plus[_ngcontent-%COMP%]:after, .collapsible__btn[_ngcontent-%COMP%]   .icon__close[_ngcontent-%COMP%]:after{mask:url(plus.c6208cae567531b4.svg) no-repeat 50% 50%;-webkit-mask:url(plus.c6208cae567531b4.svg) no-repeat 50% 50%;height:2vw;width:2vw;mask-size:2vw;-webkit-mask-size:2vw}.collapsible__btn[_ngcontent-%COMP%]   .icon__close[_ngcontent-%COMP%]:after{transform:rotate(45deg)}.collapsible__content[_ngcontent-%COMP%]{background-color:#303030;color:#fff;text-align:left;overflow:hidden;margin-bottom:8px}.collapsible__content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1.3vw 2vw;font-size:1.5vw}'],data:{animation:[(0,i.X$)("collapse",[(0,i.SB)("open",(0,i.oB)({height:i.l3,visibility:i.l3})),(0,i.SB)("close",(0,i.oB)({height:"0",visibility:"hidden"})),(0,i.eR)("open => close",(0,i.jt)("0.2s ease-out")),(0,i.eR)("close => open",(0,i.jt)("0.1s ease-in"))])]}}),t})();function ee(t,a){if(1&t&&(e.ynx(0),e._UZ(1,"app-faq-item",4),e.BQk()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("faq",n)}}let te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-faq-section"]],inputs:{module:"module"},decls:6,vars:3,consts:[[1,"faqs"],[1,"faqs__list"],[4,"ngFor","ngForOf"],[3,"getStartedContent"],[3,"faq"]],template:function(n,o){1&n&&(e.TgZ(0,"section",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"div",1),e.YNc(4,ee,2,1,"ng-container",2),e.qZA(),e._UZ(5,"app-get-started-form",3),e.qZA()),2&n&&(e.xp6(2),e.Oqu(o.module.title),e.xp6(2),e.Q6J("ngForOf",o.module.faqList),e.xp6(1),e.Q6J("getStartedContent",o.module.getStarted))},dependencies:[r.sg,K,b],styles:[".faqs[_ngcontent-%COMP%]{width:100%;background-color:#000;padding:56px 0;display:flex;flex-direction:column;align-items:center;gap:50px;border-bottom:8px solid rgb(35,35,35)}.faqs__list[_ngcontent-%COMP%]{max-width:70%;margin:0 auto}.faqs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px}"]}),t})();function ne(t,a){if(1&t&&(e.ynx(0),e._UZ(1,"app-feature-section",1),e.BQk()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("module",n)}}let w=(()=>{class t{constructor(n){this.router=n}ngOnInit(){this.constants={...S,...d},this.constants=this.router.url.includes("EN")?{...this.constants,...T}:{...this.constants,...k}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-landing-page"]],decls:6,vars:6,consts:[[3,"languages"],[3,"module"],[4,"ngFor","ngForOf"],[3,"module","languages"]],template:function(n,o){1&n&&(e.TgZ(0,"main"),e._UZ(1,"app-landing-header",0)(2,"app-hero-section",1),e.YNc(3,ne,2,1,"ng-container",2),e._UZ(4,"app-faq-section",1)(5,"app-footer",3),e.qZA()),2&n&&(e.xp6(1),e.Q6J("languages",o.constants.languages),e.xp6(1),e.Q6J("module",o.constants.heroSection),e.xp6(1),e.Q6J("ngForOf",o.constants.featuresAndBenefits),e.xp6(1),e.Q6J("module",o.constants.faqSection),e.xp6(1),e.Q6J("module",o.constants.footerSection)("languages",o.constants.languages))},dependencies:[r.sg,N,A,H,$,te]}),t})();const oe=[{path:"",children:[{path:"co",component:w},{path:"co-EN",component:w},{path:"browse",component:P},{path:"",redirectTo:"co",pathMatch:"full"}]}];let ae=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(oe),c.Bz]}),t})();var ie=l(466);let re=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,s.UX,ae,ie.m]}),t})()}}]);