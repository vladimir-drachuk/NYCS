function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/RNW":function(e,t,n){"use strict";n.r(t);var c,a,s=n("ofXK"),r=n("tyNb"),o=n("+0xr"),l=n("jKYZ"),i=n("fXoL"),p=n("kt0X"),u=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=i.Qb({type:a,selectors:[["app-place-slot"]],inputs:{team:"team",place:"place"},decls:6,vars:3,consts:[[1,"team"],[1,"half"]],template:function(e,t){1&e&&(i.cc(0,"div"),i.Hc(1),i.bc(),i.cc(2,"div",0),i.Hc(3),i.bc(),i.cc(4,"div",1),i.Hc(5),i.bc()),2&e&&(i.Kb(1),i.Ic(t.place),i.Kb(2),i.Ic(t.team.stats.totalPlace?t.team.name:"-"),i.Kb(2),i.Ic(t.team.stats.totalPlace?t.team.half:"-"))},styles:["[_nghost-%COMP%]{display:flex;border:1px solid #d3d3d3;margin:10px 20px}"]}),a),f=((c=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return e.sort((function(e,t){return t.stats.totalPlace-e.stats.totalPlace})).reverse()}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275pipe=i.Vb({name:"sortslots",type:c,pure:!0}),c);function m(e,t){if(1&e&&i.Xb(0,"app-place-slot",1),2&e){var n=t.index;i.uc("team",t.$implicit)("place",n+1)}}var b,d=((b=function(){function e(t){_classCallCheck(this,e),this.store=t,this.teams=this.store.select(l.a)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||b)(i.Wb(p.h))},b.\u0275cmp=i.Qb({type:b,selectors:[["app-results"]],decls:3,vars:5,consts:[[3,"team","place",4,"ngFor","ngForOf"],[3,"team","place"]],template:function(e,t){1&e&&(i.Fc(0,m,1,2,"app-place-slot",0),i.oc(1,"sortslots"),i.oc(2,"async")),2&e&&i.uc("ngForOf",i.pc(1,1,i.pc(2,3,t.teams)))},directives:[s.l,u],pipes:[f,s.b],styles:[""]}),b);n.d(t,"ResultsModule",(function(){return y}));var h,v=[{path:"",component:d}],y=((h=function e(){_classCallCheck(this,e)}).\u0275mod=i.Ub({type:h}),h.\u0275inj=i.Tb({factory:function(e){return new(e||h)},imports:[[s.c,o.k,r.h.forChild(v)]]}),h)}}]);