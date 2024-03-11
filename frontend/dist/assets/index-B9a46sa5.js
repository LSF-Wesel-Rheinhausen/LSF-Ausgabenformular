(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const kt={},Fs=[],Re=()=>{},jp=()=>!1,er=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),yl=i=>i.startsWith("onUpdate:"),Wt=Object.assign,xl=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},Up=Object.prototype.hasOwnProperty,ht=(i,t)=>Up.call(i,t),et=Array.isArray,Ss=i=>ir(i)==="[object Map]",$h=i=>ir(i)==="[object Set]",st=i=>typeof i=="function",Nt=i=>typeof i=="string",qs=i=>typeof i=="symbol",Ot=i=>i!==null&&typeof i=="object",Ch=i=>(Ot(i)||st(i))&&st(i.then)&&st(i.catch),kh=Object.prototype.toString,ir=i=>kh.call(i),qp=i=>ir(i).slice(8,-1),Fh=i=>ir(i)==="[object Object]",wl=i=>Nt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,fo=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Wp=/-(\w)/g,As=sr(i=>i.replace(Wp,(t,e)=>e?e.toUpperCase():"")),Gp=/\B([A-Z])/g,Ws=sr(i=>i.replace(Gp,"-$1").toLowerCase()),Sh=sr(i=>i.charAt(0).toUpperCase()+i.slice(1)),ra=sr(i=>i?`on${Sh(i)}`:""),Ai=(i,t)=>!Object.is(i,t),Sn=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},Mn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Ba=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Vc;const Th=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(i){if(et(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=Nt(s)?Qp(s):$l(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(Nt(i)||Ot(i))return i}const Xp=/;(?![^(]*\))/g,Yp=/:([^]+)/,Jp=/\/\*[^]*?\*\//g;function Qp(i){const t={};return i.replace(Jp,"").split(Xp).forEach(e=>{if(e){const s=e.split(Yp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Cl(i){let t="";if(Nt(i))t=i;else if(et(i))for(let e=0;e<i.length;e++){const s=Cl(i[e]);s&&(t+=s+" ")}else if(Ot(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=vl(Zp);function Ih(i){return!!i||i===""}const en=i=>Nt(i)?i:i==null?"":et(i)||Ot(i)&&(i.toString===kh||!st(i.toString))?JSON.stringify(i,Rh,2):String(i),Rh=(i,t)=>t&&t.__v_isRef?Rh(i,t.value):Ss(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[aa(s,n)+" =>"]=o,e),{})}:$h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>aa(e))}:qs(t)?aa(t):Ot(t)&&!et(t)&&!Fh(t)?String(t):t,aa=(i,t="")=>{var e;return qs(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class tg{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ne,!t&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Ne;try{return Ne=this,t()}finally{Ne=e}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function eg(i,t=Ne){t&&t.active&&t.effects.push(i)}function ig(){return Ne}let es;class kl{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,eg(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,cs();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(sg(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ds()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ei,e=es;try{return Ei=!0,es=this,this._runnings++,Lc(this),this.fn()}finally{Pc(this),this._runnings--,es=e,Ei=t}}stop(){var t;this.active&&(Lc(this),Pc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function sg(i){return i.value}function Lc(i){i._trackId++,i._depsLength=0}function Pc(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Dh(i.deps[t],i);i.deps.length=i._depsLength}}function Dh(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let Ei=!0,ja=0;const Eh=[];function cs(){Eh.push(Ei),Ei=!1}function ds(){const i=Eh.pop();Ei=i===void 0?!0:i}function Fl(){ja++}function Sl(){for(ja--;!ja&&Ua.length;)Ua.shift()()}function Oh(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Dh(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const Ua=[];function Ah(i,t,e){Fl();for(const s of i.keys()){let o;s._dirtyLevel<t&&(o??(o=i.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=i.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ua.push(s.scheduler)))}Sl()}const Vh=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},qa=new WeakMap,is=Symbol(""),Wa=Symbol("");function pe(i,t,e){if(Ei&&es){let s=qa.get(i);s||qa.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Vh(()=>s.delete(e))),Oh(es,o)}}function ci(i,t,e,s,o,n){const r=qa.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&et(i)){const l=Number(s);r.forEach((c,d)=>{(d==="length"||!qs(d)&&d>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":et(i)?wl(e)&&a.push(r.get("length")):(a.push(r.get(is)),Ss(i)&&a.push(r.get(Wa)));break;case"delete":et(i)||(a.push(r.get(is)),Ss(i)&&a.push(r.get(Wa)));break;case"set":Ss(i)&&a.push(r.get(is));break}Fl();for(const l of a)l&&Ah(l,4);Sl()}const og=vl("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(qs)),_c=ng();function ng(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ft(this);for(let n=0,r=this.length;n<r;n++)pe(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ft)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){cs(),Fl();const s=ft(this)[t].apply(this,e);return Sl(),ds(),s}}),i}function rg(i){const t=ft(this);return pe(t,"has",i),t.hasOwnProperty(i)}class Ph{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){const o=this._isReadonly,n=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?yg:Nh:n?Mh:Hh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=et(t);if(!o){if(r&&ht(_c,e))return Reflect.get(_c,e,s);if(e==="hasOwnProperty")return rg}const a=Reflect.get(t,e,s);return(qs(e)?Lh.has(e):og(e))||(o||pe(t,"get",e),n)?a:ge(a)?r&&wl(e)?a:a.value:Ot(a)?o?zh(a):Rl(a):a}}class _h extends Ph{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._isShallow){const l=Vs(n);if(!Nn(s)&&!Vs(s)&&(n=ft(n),s=ft(s)),!et(t)&&ge(n)&&!ge(s))return l?!1:(n.value=s,!0)}const r=et(t)&&wl(e)?Number(e)<t.length:ht(t,e),a=Reflect.set(t,e,s,o);return t===ft(o)&&(r?Ai(s,n)&&ci(t,"set",e,s):ci(t,"add",e,s)),a}deleteProperty(t,e){const s=ht(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&ci(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!qs(e)||!Lh.has(e))&&pe(t,"has",e),s}ownKeys(t){return pe(t,"iterate",et(t)?"length":is),Reflect.ownKeys(t)}}class ag extends Ph{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const lg=new _h,cg=new ag,dg=new _h(!0),Tl=i=>i,or=i=>Reflect.getPrototypeOf(i);function sn(i,t,e=!1,s=!1){i=i.__v_raw;const o=ft(i),n=ft(t);e||(Ai(t,n)&&pe(o,"get",t),pe(o,"get",n));const{has:r}=or(o),a=s?Tl:e?El:$o;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function on(i,t=!1){const e=this.__v_raw,s=ft(e),o=ft(i);return t||(Ai(i,o)&&pe(s,"has",i),pe(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function nn(i,t=!1){return i=i.__v_raw,!t&&pe(ft(i),"iterate",is),Reflect.get(i,"size",i)}function Hc(i){i=ft(i);const t=ft(this);return or(t).has.call(t,i)||(t.add(i),ci(t,"add",i,i)),this}function Mc(i,t){t=ft(t);const e=ft(this),{has:s,get:o}=or(e);let n=s.call(e,i);n||(i=ft(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?Ai(t,r)&&ci(e,"set",i,t):ci(e,"add",i,t),this}function Nc(i){const t=ft(this),{has:e,get:s}=or(t);let o=e.call(t,i);o||(i=ft(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&ci(t,"delete",i,void 0),n}function zc(){const i=ft(this),t=i.size!==0,e=i.clear();return t&&ci(i,"clear",void 0,void 0),e}function rn(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ft(r),l=t?Tl:i?El:$o;return!i&&pe(a,"iterate",is),r.forEach((c,d)=>s.call(o,l(c),l(d),n))}}function an(i,t,e){return function(...s){const o=this.__v_raw,n=ft(o),r=Ss(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,c=o[i](...s),d=e?Tl:t?El:$o;return!t&&pe(n,"iterate",l?Wa:is),{next(){const{value:u,done:b}=c.next();return b?{value:u,done:b}:{value:a?[d(u[0]),d(u[1])]:d(u),done:b}},[Symbol.iterator](){return this}}}}function Ci(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function hg(){const i={get(n){return sn(this,n)},get size(){return nn(this)},has:on,add:Hc,set:Mc,delete:Nc,clear:zc,forEach:rn(!1,!1)},t={get(n){return sn(this,n,!1,!0)},get size(){return nn(this)},has:on,add:Hc,set:Mc,delete:Nc,clear:zc,forEach:rn(!1,!0)},e={get(n){return sn(this,n,!0)},get size(){return nn(this,!0)},has(n){return on.call(this,n,!0)},add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear"),forEach:rn(!0,!1)},s={get(n){return sn(this,n,!0,!0)},get size(){return nn(this,!0)},has(n){return on.call(this,n,!0)},add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear"),forEach:rn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=an(n,!1,!1),e[n]=an(n,!0,!1),t[n]=an(n,!1,!0),s[n]=an(n,!0,!0)}),[i,e,t,s]}const[ug,fg,pg,gg]=hg();function Il(i,t){const e=t?i?gg:pg:i?fg:ug;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(ht(e,o)&&o in s?e:s,o,n)}const mg={get:Il(!1,!1)},bg={get:Il(!1,!0)},vg={get:Il(!0,!1)},Hh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,yg=new WeakMap;function xg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wg(i){return i.__v_skip||!Object.isExtensible(i)?0:xg(qp(i))}function Rl(i){return Vs(i)?i:Dl(i,!1,lg,mg,Hh)}function $g(i){return Dl(i,!1,dg,bg,Mh)}function zh(i){return Dl(i,!0,cg,vg,Nh)}function Dl(i,t,e,s,o){if(!Ot(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=wg(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function Ts(i){return Vs(i)?Ts(i.__v_raw):!!(i&&i.__v_isReactive)}function Vs(i){return!!(i&&i.__v_isReadonly)}function Nn(i){return!!(i&&i.__v_isShallow)}function Bh(i){return Ts(i)||Vs(i)}function ft(i){const t=i&&i.__v_raw;return t?ft(t):i}function jh(i){return Object.isExtensible(i)&&Mn(i,"__v_skip",!0),i}const $o=i=>Ot(i)?Rl(i):i,El=i=>Ot(i)?zh(i):i;class Uh{constructor(t,e,s,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new kl(()=>t(this._value),()=>Tn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ft(this);return(!t._cacheable||t.effect.dirty)&&Ai(t._value,t._value=t.effect.run())&&Tn(t,4),qh(t),t.effect._dirtyLevel>=2&&Tn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Cg(i,t,e=!1){let s,o;const n=st(i);return n?(s=i,o=Re):(s=i.get,o=i.set),new Uh(s,o,n||!o,e)}function qh(i){var t;Ei&&es&&(i=ft(i),Oh(es,(t=i.dep)!=null?t:i.dep=Vh(()=>i.dep=void 0,i instanceof Uh?i:void 0)))}function Tn(i,t=4,e){i=ft(i);const s=i.dep;s&&Ah(s,t)}function ge(i){return!!(i&&i.__v_isRef===!0)}function la(i){return kg(i,!1)}function kg(i,t){return ge(i)?i:new Fg(i,t)}class Fg{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ft(t),this._value=e?t:$o(t)}get value(){return qh(this),this._value}set value(t){const e=this.__v_isShallow||Nn(t)||Vs(t);t=e?t:ft(t),Ai(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:$o(t),Tn(this,4))}}function Sg(i){return ge(i)?i.value:i}const Tg={get:(i,t,e)=>Sg(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return ge(o)&&!ge(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function Wh(i){return Ts(i)?i:new Proxy(i,Tg)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(i,t,e,s){try{return s?i(...s):i()}catch(o){nr(o,t,e)}}function Ue(i,t,e,s){if(st(i)){const n=Oi(i,t,e,s);return n&&Ch(n)&&n.catch(r=>{nr(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(Ue(i[n],t,e,s));return o}function nr(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const c=n.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Oi(l,null,10,[i,r,a]);return}}Ig(i,e,o,s)}function Ig(i,t,e,s=!0){console.error(i)}let Co=!1,Ga=!1;const Yt=[];let ti=0;const Is=[];let Ti=null,Zi=0;const Gh=Promise.resolve();let Ol=null;function Rg(i){const t=Ol||Gh;return i?t.then(this?i.bind(this):i):t}function Dg(i){let t=ti+1,e=Yt.length;for(;t<e;){const s=t+e>>>1,o=Yt[s],n=ko(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function Al(i){(!Yt.length||!Yt.includes(i,Co&&i.allowRecurse?ti+1:ti))&&(i.id==null?Yt.push(i):Yt.splice(Dg(i.id),0,i),Xh())}function Xh(){!Co&&!Ga&&(Ga=!0,Ol=Gh.then(Jh))}function Eg(i){const t=Yt.indexOf(i);t>ti&&Yt.splice(t,1)}function Og(i){et(i)?Is.push(...i):(!Ti||!Ti.includes(i,i.allowRecurse?Zi+1:Zi))&&Is.push(i),Xh()}function Bc(i,t,e=Co?ti+1:0){for(;e<Yt.length;e++){const s=Yt[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;Yt.splice(e,1),e--,s()}}}function Yh(i){if(Is.length){const t=[...new Set(Is)].sort((e,s)=>ko(e)-ko(s));if(Is.length=0,Ti){Ti.push(...t);return}for(Ti=t,Zi=0;Zi<Ti.length;Zi++)Ti[Zi]();Ti=null,Zi=0}}const ko=i=>i.id==null?1/0:i.id,Ag=(i,t)=>{const e=ko(i)-ko(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Jh(i){Ga=!1,Co=!0,Yt.sort(Ag);try{for(ti=0;ti<Yt.length;ti++){const t=Yt[ti];t&&t.active!==!1&&Oi(t,null,14)}}finally{ti=0,Yt.length=0,Yh(),Co=!1,Ol=null,(Yt.length||Is.length)&&Jh()}}function Vg(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||kt;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:b}=s[d]||kt;b&&(o=e.map(y=>Nt(y)?y.trim():y)),u&&(o=e.map(Ba))}let a,l=s[a=ra(t)]||s[a=ra(As(t))];!l&&n&&(l=s[a=ra(Ws(t))]),l&&Ue(l,i,6,o);const c=s[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Ue(c,i,6,o)}}function Qh(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!st(i)){const l=c=>{const d=Qh(c,t,!0);d&&(a=!0,Wt(r,d))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(Ot(i)&&s.set(i,null),null):(et(n)?n.forEach(l=>r[l]=null):Wt(r,n),Ot(i)&&s.set(i,r),r)}function rr(i,t){return!i||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),ht(i,t[0].toLowerCase()+t.slice(1))||ht(i,Ws(t))||ht(i,t))}let qt=null,ar=null;function zn(i){const t=qt;return qt=i,ar=i&&i.type.__scopeId||null,t}function Lg(i){ar=i}function Pg(){ar=null}function Zh(i,t=qt,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&Zc(-1);const n=zn(t);let r;try{r=i(...o)}finally{zn(n),s._d&&Zc(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function ca(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:b,setupState:y,ctx:C,inheritAttrs:k}=i;let R,V;const j=zn(i);try{if(e.shapeFlag&4){const nt=o||s,bt=nt;R=Ke(d.call(bt,nt,u,n,y,b,C)),V=l}else{const nt=t;R=Ke(nt.length>1?nt(n,{attrs:l,slots:a,emit:c}):nt(n,null)),V=t.props?l:_g(l)}}catch(nt){bo.length=0,nr(nt,i,1),R=qe(Vi)}let W=R;if(V&&k!==!1){const nt=Object.keys(V),{shapeFlag:bt}=W;nt.length&&bt&7&&(r&&nt.some(yl)&&(V=Hg(V,r)),W=Ls(W,V))}return e.dirs&&(W=Ls(W),W.dirs=W.dirs?W.dirs.concat(e.dirs):e.dirs),e.transition&&(W.transition=e.transition),R=W,zn(j),R}const _g=i=>{let t;for(const e in i)(e==="class"||e==="style"||er(e))&&((t||(t={}))[e]=i[e]);return t},Hg=(i,t)=>{const e={};for(const s in i)(!yl(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function Mg(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?jc(s,r,c):!!r;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const b=d[u];if(r[b]!==s[b]&&!rr(c,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?jc(s,r,c):!0:!!r;return!1}function jc(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!rr(e,n))return!0}return!1}function Ng({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const zg=Symbol.for("v-ndc"),Bg=i=>i.__isSuspense;function jg(i,t){t&&t.pendingBranch?et(i)?t.effects.push(...i):t.effects.push(i):Og(i)}const Ug=Symbol.for("v-scx"),qg=()=>In(Ug);function Wg(i,t){return Vl(i,null,t)}const ln={};function da(i,t,e){return Vl(i,t,e)}function Vl(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=kt){if(t&&n){const it=t;t=(...de)=>{it(...de),bt()}}const l=se,c=it=>s===!0?it:ts(it,s===!1?1:void 0);let d,u=!1,b=!1;if(ge(i)?(d=()=>i.value,u=Nn(i)):Ts(i)?(d=()=>c(i),u=!0):et(i)?(b=!0,u=i.some(it=>Ts(it)||Nn(it)),d=()=>i.map(it=>{if(ge(it))return it.value;if(Ts(it))return c(it);if(st(it))return Oi(it,l,2)})):st(i)?t?d=()=>Oi(i,l,2):d=()=>(y&&y(),Ue(i,l,3,[C])):d=Re,t&&s){const it=d;d=()=>ts(it())}let y,C=it=>{y=W.onStop=()=>{Oi(it,l,4),y=W.onStop=void 0}},k;if(hr)if(C=Re,t?e&&Ue(t,l,3,[d(),b?[]:void 0,C]):d(),o==="sync"){const it=qg();k=it.__watcherHandles||(it.__watcherHandles=[])}else return Re;let R=b?new Array(i.length).fill(ln):ln;const V=()=>{if(!(!W.active||!W.dirty))if(t){const it=W.run();(s||u||(b?it.some((de,he)=>Ai(de,R[he])):Ai(it,R)))&&(y&&y(),Ue(t,l,3,[it,R===ln?void 0:b&&R[0]===ln?[]:R,C]),R=it)}else W.run()};V.allowRecurse=!!t;let j;o==="sync"?j=V:o==="post"?j=()=>fe(V,l&&l.suspense):(V.pre=!0,l&&(V.id=l.uid),j=()=>Al(V));const W=new kl(d,Re,j),nt=ig(),bt=()=>{W.stop(),nt&&xl(nt.effects,W)};return t?e?V():R=W.run():o==="post"?fe(W.run.bind(W),l&&l.suspense):W.run(),k&&k.push(bt),bt}function Gg(i,t,e){const s=this.proxy,o=Nt(i)?i.includes(".")?Kh(s,i):()=>s[i]:i.bind(s,s);let n;st(t)?n=t:(n=t.handler,e=t);const r=Po(this),a=Vl(o,n.bind(s),e);return r(),a}function Kh(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function ts(i,t,e=0,s){if(!Ot(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),ge(i))ts(i.value,t,e,s);else if(et(i))for(let o=0;o<i.length;o++)ts(i[o],t,e,s);else if($h(i)||Ss(i))i.forEach(o=>{ts(o,t,e,s)});else if(Fh(i))for(const o in i)ts(i[o],t,e,s);return i}function ha(i,t){if(qt===null)return i;const e=ur(qt)||qt.proxy,s=i.dirs||(i.dirs=[]);for(let o=0;o<t.length;o++){let[n,r,a,l=kt]=t[o];n&&(st(n)&&(n={mounted:n,updated:n}),n.deep&&ts(r),s.push({dir:n,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return i}function Gi(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(cs(),Ue(l,e,8,[i.el,a,i,t]),ds())}}/*! #__NO_SIDE_EFFECTS__ */function Ll(i,t){return st(i)?Wt({name:i.name},t,{setup:i}):i}const po=i=>!!i.type.__asyncLoader,tu=i=>i.type.__isKeepAlive;function Xg(i,t){eu(i,"a",t)}function Yg(i,t){eu(i,"da",t)}function eu(i,t,e=se){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(lr(t,s,e),e){let o=e.parent;for(;o&&o.parent;)tu(o.parent.vnode)&&Jg(s,t,e,o),o=o.parent}}function Jg(i,t,e,s){const o=lr(t,i,s,!0);su(()=>{xl(s[t],o)},e)}function lr(i,t,e=se,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;cs();const a=Po(e),l=Ue(t,e,i,r);return a(),ds(),l});return s?o.unshift(n):o.push(n),n}}const fi=i=>(t,e=se)=>(!hr||i==="sp")&&lr(i,(...s)=>t(...s),e),Qg=fi("bm"),iu=fi("m"),Zg=fi("bu"),Kg=fi("u"),tm=fi("bum"),su=fi("um"),em=fi("sp"),im=fi("rtg"),sm=fi("rtc");function om(i,t=se){lr("ec",i,t)}function so(i,t,e,s){let o;const n=e&&e[s];if(et(i)||Nt(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(Ot(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];o[a]=t(i[c],c,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function ou(i,t,e={},s,o){if(qt.isCE||qt.parent&&po(qt.parent)&&qt.parent.isCE)return t!=="default"&&(e.name=t),qe("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),ee();const r=n&&nu(n(e)),a=jn(Xt,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function nu(i){return i.some(t=>mu(t)?!(t.type===Vi||t.type===Xt&&!nu(t.children)):!0)?i:null}const Xa=i=>i?yu(i)?ur(i)||i.proxy:Xa(i.parent):null,go=Wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Xa(i.parent),$root:i=>Xa(i.root),$emit:i=>i.emit,$options:i=>Pl(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Al(i.update)}),$nextTick:i=>i.n||(i.n=Rg.bind(i.proxy)),$watch:i=>Gg.bind(i)}),ua=(i,t)=>i!==kt&&!i.__isScriptSetup&&ht(i,t),nm={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const y=r[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(ua(s,t))return r[t]=1,s[t];if(o!==kt&&ht(o,t))return r[t]=2,o[t];if((c=i.propsOptions[0])&&ht(c,t))return r[t]=3,n[t];if(e!==kt&&ht(e,t))return r[t]=4,e[t];Ya&&(r[t]=0)}}const d=go[t];let u,b;if(d)return t==="$attrs"&&pe(i,"get",t),d(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==kt&&ht(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,ht(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return ua(o,t)?(o[t]=e,!0):s!==kt&&ht(s,t)?(s[t]=e,!0):ht(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==kt&&ht(i,r)||ua(t,r)||(a=n[0])&&ht(a,r)||ht(s,r)||ht(go,r)||ht(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ht(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Uc(i){return et(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Ya=!0;function rm(i){const t=Pl(i),e=i.proxy,s=i.ctx;Ya=!1,t.beforeCreate&&qc(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:b,beforeUpdate:y,updated:C,activated:k,deactivated:R,beforeDestroy:V,beforeUnmount:j,destroyed:W,unmounted:nt,render:bt,renderTracked:it,renderTriggered:de,errorCaptured:he,serverPrefetch:to,expose:Ui,inheritAttrs:eo,components:Qo,directives:Zo,filters:ia}=t;if(c&&am(c,s,null),r)for(const Rt in r){const xt=r[Rt];st(xt)&&(s[Rt]=xt.bind(e))}if(o){const Rt=o.call(e,e);Ot(Rt)&&(i.data=Rl(Rt))}if(Ya=!0,n)for(const Rt in n){const xt=n[Rt],qi=st(xt)?xt.bind(e,e):st(xt.get)?xt.get.bind(e,e):Re,Ko=!st(xt)&&st(xt.set)?xt.set.bind(e):Re,Wi=wu({get:qi,set:Ko});Object.defineProperty(s,Rt,{enumerable:!0,configurable:!0,get:()=>Wi.value,set:Ye=>Wi.value=Ye})}if(a)for(const Rt in a)ru(a[Rt],s,e,Rt);if(l){const Rt=st(l)?l.call(e):l;Reflect.ownKeys(Rt).forEach(xt=>{fm(xt,Rt[xt])})}d&&qc(d,i,"c");function Kt(Rt,xt){et(xt)?xt.forEach(qi=>Rt(qi.bind(e))):xt&&Rt(xt.bind(e))}if(Kt(Qg,u),Kt(iu,b),Kt(Zg,y),Kt(Kg,C),Kt(Xg,k),Kt(Yg,R),Kt(om,he),Kt(sm,it),Kt(im,de),Kt(tm,j),Kt(su,nt),Kt(em,to),et(Ui))if(Ui.length){const Rt=i.exposed||(i.exposed={});Ui.forEach(xt=>{Object.defineProperty(Rt,xt,{get:()=>e[xt],set:qi=>e[xt]=qi})})}else i.exposed||(i.exposed={});bt&&i.render===Re&&(i.render=bt),eo!=null&&(i.inheritAttrs=eo),Qo&&(i.components=Qo),Zo&&(i.directives=Zo)}function am(i,t,e=Re){et(i)&&(i=Ja(i));for(const s in i){const o=i[s];let n;Ot(o)?"default"in o?n=In(o.from||s,o.default,!0):n=In(o.from||s):n=In(o),ge(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function qc(i,t,e){Ue(et(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function ru(i,t,e,s){const o=s.includes(".")?Kh(e,s):()=>e[s];if(Nt(i)){const n=t[i];st(n)&&da(o,n)}else if(st(i))da(o,i.bind(e));else if(Ot(i))if(et(i))i.forEach(n=>ru(n,t,e,s));else{const n=st(i.handler)?i.handler.bind(e):t[i.handler];st(n)&&da(o,n,i)}}function Pl(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(c=>Bn(l,c,r,!0)),Bn(l,t,r)),Ot(t)&&n.set(t,l),l}function Bn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&Bn(i,n,e,!0),o&&o.forEach(r=>Bn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=lm[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const lm={data:Wc,props:Gc,emits:Gc,methods:uo,computed:uo,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:uo,directives:uo,watch:dm,provide:Wc,inject:cm};function Wc(i,t){return t?i?function(){return Wt(st(i)?i.call(this,this):i,st(t)?t.call(this,this):t)}:t:i}function cm(i,t){return uo(Ja(i),Ja(t))}function Ja(i){if(et(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function te(i,t){return i?[...new Set([].concat(i,t))]:t}function uo(i,t){return i?Wt(Object.create(null),i,t):t}function Gc(i,t){return i?et(i)&&et(t)?[...new Set([...i,...t])]:Wt(Object.create(null),Uc(i),Uc(t??{})):t}function dm(i,t){if(!i)return t;if(!t)return i;const e=Wt(Object.create(null),i);for(const s in t)e[s]=te(i[s],t[s]);return e}function au(){return{app:null,config:{isNativeTag:jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hm=0;function um(i,t){return function(s,o=null){st(s)||(s=Wt({},s)),o!=null&&!Ot(o)&&(o=null);const n=au(),r=new WeakSet;let a=!1;const l=n.app={_uid:hm++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:Hm,get config(){return n.config},set config(c){},use(c,...d){return r.has(c)||(c&&st(c.install)?(r.add(c),c.install(l,...d)):st(c)&&(r.add(c),c(l,...d))),l},mixin(c){return n.mixins.includes(c)||n.mixins.push(c),l},component(c,d){return d?(n.components[c]=d,l):n.components[c]},directive(c,d){return d?(n.directives[c]=d,l):n.directives[c]},mount(c,d,u){if(!a){const b=qe(s,o);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),d&&t?t(b,c):i(b,c,u),a=!0,l._container=c,c.__vue_app__=l,ur(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,d){return n.provides[c]=d,l},runWithContext(c){const d=mo;mo=l;try{return c()}finally{mo=d}}};return l}}let mo=null;function fm(i,t){if(se){let e=se.provides;const s=se.parent&&se.parent.provides;s===e&&(e=se.provides=Object.create(s)),e[i]=t}}function In(i,t,e=!1){const s=se||qt;if(s||mo){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:mo._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&st(t)?t.call(s&&s.proxy):t}}function pm(i,t,e,s=!1){const o={},n={};Mn(n,dr,1),i.propsDefaults=Object.create(null),lu(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:$g(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function gm(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ft(o),[l]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=i.vnode.dynamicProps;for(let u=0;u<d.length;u++){let b=d[u];if(rr(i.emitsOptions,b))continue;const y=t[b];if(l)if(ht(n,b))y!==n[b]&&(n[b]=y,c=!0);else{const C=As(b);o[C]=Qa(l,a,C,y,i,!1)}else y!==n[b]&&(n[b]=y,c=!0)}}}else{lu(i,t,o,n)&&(c=!0);let d;for(const u in a)(!t||!ht(t,u)&&((d=Ws(u))===u||!ht(t,d)))&&(l?e&&(e[u]!==void 0||e[d]!==void 0)&&(o[u]=Qa(l,a,u,void 0,i,!0)):delete o[u]);if(n!==a)for(const u in n)(!t||!ht(t,u))&&(delete n[u],c=!0)}c&&ci(i,"set","$attrs")}function lu(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(fo(l))continue;const c=t[l];let d;o&&ht(o,d=As(l))?!n||!n.includes(d)?e[d]=c:(a||(a={}))[d]=c:rr(i.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(n){const l=ft(e),c=a||kt;for(let d=0;d<n.length;d++){const u=n[d];e[u]=Qa(o,l,u,c[u],i,!ht(c,u))}}return r}function Qa(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=ht(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&st(l)){const{propsDefaults:c}=o;if(e in c)s=c[e];else{const d=Po(o);s=c[e]=l.call(null,t),d()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===Ws(e))&&(s=!0))}return s}function cu(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!st(i)){const d=u=>{l=!0;const[b,y]=cu(u,t,!0);Wt(r,b),y&&a.push(...y)};!e&&t.mixins.length&&t.mixins.forEach(d),i.extends&&d(i.extends),i.mixins&&i.mixins.forEach(d)}if(!n&&!l)return Ot(i)&&s.set(i,Fs),Fs;if(et(n))for(let d=0;d<n.length;d++){const u=As(n[d]);Xc(u)&&(r[u]=kt)}else if(n)for(const d in n){const u=As(d);if(Xc(u)){const b=n[d],y=r[u]=et(b)||st(b)?{type:b}:Wt({},b);if(y){const C=Qc(Boolean,y.type),k=Qc(String,y.type);y[0]=C>-1,y[1]=k<0||C<k,(C>-1||ht(y,"default"))&&a.push(u)}}}const c=[r,a];return Ot(i)&&s.set(i,c),c}function Xc(i){return i[0]!=="$"&&!fo(i)}function Yc(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function Jc(i,t){return Yc(i)===Yc(t)}function Qc(i,t){return et(t)?t.findIndex(e=>Jc(e,i)):st(t)&&Jc(t,i)?0:-1}const du=i=>i[0]==="_"||i==="$stable",_l=i=>et(i)?i.map(Ke):[Ke(i)],mm=(i,t,e)=>{if(t._n)return t;const s=Zh((...o)=>_l(t(...o)),e);return s._c=!1,s},hu=(i,t,e)=>{const s=i._ctx;for(const o in i){if(du(o))continue;const n=i[o];if(st(n))t[o]=mm(o,n,s);else if(n!=null){const r=_l(n);t[o]=()=>r}}},uu=(i,t)=>{const e=_l(t);i.slots.default=()=>e},bm=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ft(t),Mn(t,"_",e)):hu(t,i.slots={})}else i.slots={},t&&uu(i,t);Mn(i.slots,dr,1)},vm=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=kt;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Wt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,hu(t,o)),r=t}else t&&(uu(i,t),r={default:1});if(n)for(const a in o)!du(a)&&r[a]==null&&delete o[a]};function Za(i,t,e,s,o=!1){if(et(i)){i.forEach((b,y)=>Za(b,t&&(et(t)?t[y]:t),e,s,o));return}if(po(s)&&!o)return;const n=s.shapeFlag&4?ur(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,c=t&&t.r,d=a.refs===kt?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Nt(c)?(d[c]=null,ht(u,c)&&(u[c]=null)):ge(c)&&(c.value=null)),st(l))Oi(l,a,12,[r,d]);else{const b=Nt(l),y=ge(l);if(b||y){const C=()=>{if(i.f){const k=b?ht(u,l)?u[l]:d[l]:l.value;o?et(k)&&xl(k,n):et(k)?k.includes(n)||k.push(n):b?(d[l]=[n],ht(u,l)&&(u[l]=d[l])):(l.value=[n],i.k&&(d[i.k]=l.value))}else b?(d[l]=r,ht(u,l)&&(u[l]=r)):y&&(l.value=r,i.k&&(d[i.k]=r))};r?(C.id=-1,fe(C,e)):C()}}}const fe=jg;function ym(i){return xm(i)}function xm(i,t){const e=Th();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:b,setScopeId:y=Re,insertStaticContent:C}=i,k=(p,m,w,F=null,S=null,O=null,_=void 0,E=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!oo(p,m)&&(F=tn(p),Ye(p,S,O,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:I,ref:N,shapeFlag:G}=m;switch(I){case cr:R(p,m,w,F);break;case Vi:V(p,m,w,F);break;case Rn:p==null&&j(m,w,F,_);break;case Xt:Qo(p,m,w,F,S,O,_,E,L);break;default:G&1?bt(p,m,w,F,S,O,_,E,L):G&6?Zo(p,m,w,F,S,O,_,E,L):(G&64||G&128)&&I.process(p,m,w,F,S,O,_,E,L,ys)}N!=null&&S&&Za(N,p&&p.ref,O,m||p,!m)},R=(p,m,w,F)=>{if(p==null)s(m.el=a(m.children),w,F);else{const S=m.el=p.el;m.children!==p.children&&c(S,m.children)}},V=(p,m,w,F)=>{p==null?s(m.el=l(m.children||""),w,F):m.el=p.el},j=(p,m,w,F)=>{[p.el,p.anchor]=C(p.children,m,w,F,p.el,p.anchor)},W=({el:p,anchor:m},w,F)=>{let S;for(;p&&p!==m;)S=b(p),s(p,w,F),p=S;s(m,w,F)},nt=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=b(p),o(p),p=w;o(m)},bt=(p,m,w,F,S,O,_,E,L)=>{m.type==="svg"?_="svg":m.type==="math"&&(_="mathml"),p==null?it(m,w,F,S,O,_,E,L):to(p,m,S,O,_,E,L)},it=(p,m,w,F,S,O,_,E)=>{let L,I;const{props:N,shapeFlag:G,transition:q,dirs:tt}=p;if(L=p.el=r(p.type,O,N&&N.is,N),G&8?d(L,p.children):G&16&&he(p.children,L,null,F,S,fa(p,O),_,E),tt&&Gi(p,null,F,"created"),de(L,p,p.scopeId,_,F),N){for(const vt in N)vt!=="value"&&!fo(vt)&&n(L,vt,null,N[vt],O,p.children,F,S,ri);"value"in N&&n(L,"value",null,N.value,O),(I=N.onVnodeBeforeMount)&&Qe(I,F,p)}tt&&Gi(p,null,F,"beforeMount");const ct=wm(S,q);ct&&q.beforeEnter(L),s(L,m,w),((I=N&&N.onVnodeMounted)||ct||tt)&&fe(()=>{I&&Qe(I,F,p),ct&&q.enter(L),tt&&Gi(p,null,F,"mounted")},S)},de=(p,m,w,F,S)=>{if(w&&y(p,w),F)for(let O=0;O<F.length;O++)y(p,F[O]);if(S){let O=S.subTree;if(m===O){const _=S.vnode;de(p,_,_.scopeId,_.slotScopeIds,S.parent)}}},he=(p,m,w,F,S,O,_,E,L=0)=>{for(let I=L;I<p.length;I++){const N=p[I]=E?Ii(p[I]):Ke(p[I]);k(null,N,m,w,F,S,O,_,E)}},to=(p,m,w,F,S,O,_)=>{const E=m.el=p.el;let{patchFlag:L,dynamicChildren:I,dirs:N}=m;L|=p.patchFlag&16;const G=p.props||kt,q=m.props||kt;let tt;if(w&&Xi(w,!1),(tt=q.onVnodeBeforeUpdate)&&Qe(tt,w,m,p),N&&Gi(m,p,w,"beforeUpdate"),w&&Xi(w,!0),I?Ui(p.dynamicChildren,I,E,w,F,fa(m,S),O):_||xt(p,m,E,null,w,F,fa(m,S),O,!1),L>0){if(L&16)eo(E,m,G,q,w,F,S);else if(L&2&&G.class!==q.class&&n(E,"class",null,q.class,S),L&4&&n(E,"style",G.style,q.style,S),L&8){const ct=m.dynamicProps;for(let vt=0;vt<ct.length;vt++){const Tt=ct[vt],Bt=G[Tt],Me=q[Tt];(Me!==Bt||Tt==="value")&&n(E,Tt,Bt,Me,S,p.children,w,F,ri)}}L&1&&p.children!==m.children&&d(E,m.children)}else!_&&I==null&&eo(E,m,G,q,w,F,S);((tt=q.onVnodeUpdated)||N)&&fe(()=>{tt&&Qe(tt,w,m,p),N&&Gi(m,p,w,"updated")},F)},Ui=(p,m,w,F,S,O,_)=>{for(let E=0;E<m.length;E++){const L=p[E],I=m[E],N=L.el&&(L.type===Xt||!oo(L,I)||L.shapeFlag&70)?u(L.el):w;k(L,I,N,null,F,S,O,_,!0)}},eo=(p,m,w,F,S,O,_)=>{if(w!==F){if(w!==kt)for(const E in w)!fo(E)&&!(E in F)&&n(p,E,w[E],null,_,m.children,S,O,ri);for(const E in F){if(fo(E))continue;const L=F[E],I=w[E];L!==I&&E!=="value"&&n(p,E,I,L,_,m.children,S,O,ri)}"value"in F&&n(p,"value",w.value,F.value,_)}},Qo=(p,m,w,F,S,O,_,E,L)=>{const I=m.el=p?p.el:a(""),N=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:q,slotScopeIds:tt}=m;tt&&(E=E?E.concat(tt):tt),p==null?(s(I,w,F),s(N,w,F),he(m.children||[],w,N,S,O,_,E,L)):G>0&&G&64&&q&&p.dynamicChildren?(Ui(p.dynamicChildren,q,w,S,O,_,E),(m.key!=null||S&&m===S.subTree)&&fu(p,m,!0)):xt(p,m,w,N,S,O,_,E,L)},Zo=(p,m,w,F,S,O,_,E,L)=>{m.slotScopeIds=E,p==null?m.shapeFlag&512?S.ctx.activate(m,w,F,_,L):ia(m,w,F,S,O,_,L):Ic(p,m,L)},ia=(p,m,w,F,S,O,_)=>{const E=p.component=Om(p,F,S);if(tu(p)&&(E.ctx.renderer=ys),Am(E),E.asyncDep){if(S&&S.registerDep(E,Kt),!p.el){const L=E.subTree=qe(Vi);V(null,L,m,w)}}else Kt(E,p,m,w,S,O,_)},Ic=(p,m,w)=>{const F=m.component=p.component;if(Mg(p,m,w))if(F.asyncDep&&!F.asyncResolved){Rt(F,m,w);return}else F.next=m,Eg(F.update),F.effect.dirty=!0,F.update();else m.el=p.el,F.vnode=m},Kt=(p,m,w,F,S,O,_)=>{const E=()=>{if(p.isMounted){let{next:N,bu:G,u:q,parent:tt,vnode:ct}=p;{const xs=pu(p);if(xs){N&&(N.el=ct.el,Rt(p,N,_)),xs.asyncDep.then(()=>{p.isUnmounted||E()});return}}let vt=N,Tt;Xi(p,!1),N?(N.el=ct.el,Rt(p,N,_)):N=ct,G&&Sn(G),(Tt=N.props&&N.props.onVnodeBeforeUpdate)&&Qe(Tt,tt,N,ct),Xi(p,!0);const Bt=ca(p),Me=p.subTree;p.subTree=Bt,k(Me,Bt,u(Me.el),tn(Me),p,S,O),N.el=Bt.el,vt===null&&Ng(p,Bt.el),q&&fe(q,S),(Tt=N.props&&N.props.onVnodeUpdated)&&fe(()=>Qe(Tt,tt,N,ct),S)}else{let N;const{el:G,props:q}=m,{bm:tt,m:ct,parent:vt}=p,Tt=po(m);if(Xi(p,!1),tt&&Sn(tt),!Tt&&(N=q&&q.onVnodeBeforeMount)&&Qe(N,vt,m),Xi(p,!0),G&&na){const Bt=()=>{p.subTree=ca(p),na(G,p.subTree,p,S,null)};Tt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Bt()):Bt()}else{const Bt=p.subTree=ca(p);k(null,Bt,w,F,p,S,O),m.el=Bt.el}if(ct&&fe(ct,S),!Tt&&(N=q&&q.onVnodeMounted)){const Bt=m;fe(()=>Qe(N,vt,Bt),S)}(m.shapeFlag&256||vt&&po(vt.vnode)&&vt.vnode.shapeFlag&256)&&p.a&&fe(p.a,S),p.isMounted=!0,m=w=F=null}},L=p.effect=new kl(E,Re,()=>Al(I),p.scope),I=p.update=()=>{L.dirty&&L.run()};I.id=p.uid,Xi(p,!0),I()},Rt=(p,m,w)=>{m.component=p;const F=p.vnode.props;p.vnode=m,p.next=null,gm(p,m.props,F,w),vm(p,m.children,w),cs(),Bc(p),ds()},xt=(p,m,w,F,S,O,_,E,L=!1)=>{const I=p&&p.children,N=p?p.shapeFlag:0,G=m.children,{patchFlag:q,shapeFlag:tt}=m;if(q>0){if(q&128){Ko(I,G,w,F,S,O,_,E,L);return}else if(q&256){qi(I,G,w,F,S,O,_,E,L);return}}tt&8?(N&16&&ri(I,S,O),G!==I&&d(w,G)):N&16?tt&16?Ko(I,G,w,F,S,O,_,E,L):ri(I,S,O,!0):(N&8&&d(w,""),tt&16&&he(G,w,F,S,O,_,E,L))},qi=(p,m,w,F,S,O,_,E,L)=>{p=p||Fs,m=m||Fs;const I=p.length,N=m.length,G=Math.min(I,N);let q;for(q=0;q<G;q++){const tt=m[q]=L?Ii(m[q]):Ke(m[q]);k(p[q],tt,w,null,S,O,_,E,L)}I>N?ri(p,S,O,!0,!1,G):he(m,w,F,S,O,_,E,L,G)},Ko=(p,m,w,F,S,O,_,E,L)=>{let I=0;const N=m.length;let G=p.length-1,q=N-1;for(;I<=G&&I<=q;){const tt=p[I],ct=m[I]=L?Ii(m[I]):Ke(m[I]);if(oo(tt,ct))k(tt,ct,w,null,S,O,_,E,L);else break;I++}for(;I<=G&&I<=q;){const tt=p[G],ct=m[q]=L?Ii(m[q]):Ke(m[q]);if(oo(tt,ct))k(tt,ct,w,null,S,O,_,E,L);else break;G--,q--}if(I>G){if(I<=q){const tt=q+1,ct=tt<N?m[tt].el:F;for(;I<=q;)k(null,m[I]=L?Ii(m[I]):Ke(m[I]),w,ct,S,O,_,E,L),I++}}else if(I>q)for(;I<=G;)Ye(p[I],S,O,!0),I++;else{const tt=I,ct=I,vt=new Map;for(I=ct;I<=q;I++){const ye=m[I]=L?Ii(m[I]):Ke(m[I]);ye.key!=null&&vt.set(ye.key,I)}let Tt,Bt=0;const Me=q-ct+1;let xs=!1,Ec=0;const io=new Array(Me);for(I=0;I<Me;I++)io[I]=0;for(I=tt;I<=G;I++){const ye=p[I];if(Bt>=Me){Ye(ye,S,O,!0);continue}let Je;if(ye.key!=null)Je=vt.get(ye.key);else for(Tt=ct;Tt<=q;Tt++)if(io[Tt-ct]===0&&oo(ye,m[Tt])){Je=Tt;break}Je===void 0?Ye(ye,S,O,!0):(io[Je-ct]=I+1,Je>=Ec?Ec=Je:xs=!0,k(ye,m[Je],w,null,S,O,_,E,L),Bt++)}const Oc=xs?$m(io):Fs;for(Tt=Oc.length-1,I=Me-1;I>=0;I--){const ye=ct+I,Je=m[ye],Ac=ye+1<N?m[ye+1].el:F;io[I]===0?k(null,Je,w,Ac,S,O,_,E,L):xs&&(Tt<0||I!==Oc[Tt]?Wi(Je,w,Ac,2):Tt--)}}},Wi=(p,m,w,F,S=null)=>{const{el:O,type:_,transition:E,children:L,shapeFlag:I}=p;if(I&6){Wi(p.component.subTree,m,w,F);return}if(I&128){p.suspense.move(m,w,F);return}if(I&64){_.move(p,m,w,ys);return}if(_===Xt){s(O,m,w);for(let G=0;G<L.length;G++)Wi(L[G],m,w,F);s(p.anchor,m,w);return}if(_===Rn){W(p,m,w);return}if(F!==2&&I&1&&E)if(F===0)E.beforeEnter(O),s(O,m,w),fe(()=>E.enter(O),S);else{const{leave:G,delayLeave:q,afterLeave:tt}=E,ct=()=>s(O,m,w),vt=()=>{G(O,()=>{ct(),tt&&tt()})};q?q(O,ct,vt):vt()}else s(O,m,w)},Ye=(p,m,w,F=!1,S=!1)=>{const{type:O,props:_,ref:E,children:L,dynamicChildren:I,shapeFlag:N,patchFlag:G,dirs:q}=p;if(E!=null&&Za(E,null,w,p,!0),N&256){m.ctx.deactivate(p);return}const tt=N&1&&q,ct=!po(p);let vt;if(ct&&(vt=_&&_.onVnodeBeforeUnmount)&&Qe(vt,m,p),N&6)Bp(p.component,w,F);else{if(N&128){p.suspense.unmount(w,F);return}tt&&Gi(p,null,m,"beforeUnmount"),N&64?p.type.remove(p,m,w,S,ys,F):I&&(O!==Xt||G>0&&G&64)?ri(I,m,w,!1,!0):(O===Xt&&G&384||!S&&N&16)&&ri(L,m,w),F&&Rc(p)}(ct&&(vt=_&&_.onVnodeUnmounted)||tt)&&fe(()=>{vt&&Qe(vt,m,p),tt&&Gi(p,null,m,"unmounted")},w)},Rc=p=>{const{type:m,el:w,anchor:F,transition:S}=p;if(m===Xt){zp(w,F);return}if(m===Rn){nt(p);return}const O=()=>{o(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:_,delayLeave:E}=S,L=()=>_(w,O);E?E(p.el,O,L):L()}else O()},zp=(p,m)=>{let w;for(;p!==m;)w=b(p),o(p),p=w;o(m)},Bp=(p,m,w)=>{const{bum:F,scope:S,update:O,subTree:_,um:E}=p;F&&Sn(F),S.stop(),O&&(O.active=!1,Ye(_,p,m,w)),E&&fe(E,m),fe(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ri=(p,m,w,F=!1,S=!1,O=0)=>{for(let _=O;_<p.length;_++)Ye(p[_],m,w,F,S)},tn=p=>p.shapeFlag&6?tn(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let sa=!1;const Dc=(p,m,w)=>{p==null?m._vnode&&Ye(m._vnode,null,null,!0):k(m._vnode||null,p,m,null,null,null,w),sa||(sa=!0,Bc(),Yh(),sa=!1),m._vnode=p},ys={p:k,um:Ye,m:Wi,r:Rc,mt:ia,mc:he,pc:xt,pbc:Ui,n:tn,o:i};let oa,na;return t&&([oa,na]=t(ys)),{render:Dc,hydrate:oa,createApp:um(Dc,oa)}}function fa({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Xi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function wm(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function fu(i,t,e=!1){const s=i.children,o=t.children;if(et(s)&&et(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=Ii(o[n]),a.el=r.el),e||fu(r,a)),a.type===cr&&(a.el=r.el)}}function $m(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const c=i[s];if(c!==0){if(o=e[e.length-1],i[o]<c){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<c?n=a+1:r=a;c<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function pu(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pu(t)}const Cm=i=>i.__isTeleport,Xt=Symbol.for("v-fgt"),cr=Symbol.for("v-txt"),Vi=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),bo=[];let je=null;function ee(i=!1){bo.push(je=i?null:[])}function km(){bo.pop(),je=bo[bo.length-1]||null}let Fo=1;function Zc(i){Fo+=i}function gu(i){return i.dynamicChildren=Fo>0?je||Fs:null,km(),Fo>0&&je&&je.push(i),i}function ze(i,t,e,s,o,n){return gu(X(i,t,e,s,o,n,!0))}function jn(i,t,e,s,o){return gu(qe(i,t,e,s,o,!0))}function mu(i){return i?i.__v_isVNode===!0:!1}function oo(i,t){return i.type===t.type&&i.key===t.key}const dr="__vInternal",bu=({key:i})=>i??null,Dn=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Nt(i)||ge(i)||st(i)?{i:qt,r:i,k:t,f:!!e}:i:null);function X(i,t=null,e=null,s=0,o=null,n=i===Xt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&bu(t),ref:t&&Dn(t),scopeId:ar,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:qt};return a?(Hl(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=Nt(e)?8:16),Fo>0&&!r&&je&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&je.push(l),l}const qe=Fm;function Fm(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===zg)&&(i=Vi),mu(i)){const a=Ls(i,t,!0);return e&&Hl(a,e),Fo>0&&!n&&je&&(a.shapeFlag&6?je[je.indexOf(i)]=a:je.push(a)),a.patchFlag|=-2,a}if(_m(i)&&(i=i.__vccOpts),t){t=Sm(t);let{class:a,style:l}=t;a&&!Nt(a)&&(t.class=Cl(a)),Ot(l)&&(Bh(l)&&!et(l)&&(l=Wt({},l)),t.style=$l(l))}const r=Nt(i)?1:Bg(i)?128:Cm(i)?64:Ot(i)?4:st(i)?2:0;return X(i,t,e,s,o,r,n,!0)}function Sm(i){return i?Bh(i)||dr in i?Wt({},i):i:null}function Ls(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?Rm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&bu(a),ref:t&&t.ref?e&&o?et(o)?o.concat(Dn(t)):[o,Dn(t)]:Dn(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Xt?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ls(i.ssContent),ssFallback:i.ssFallback&&Ls(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function vu(i=" ",t=0){return qe(cr,null,i,t)}function Tm(i,t){const e=qe(Rn,null,i);return e.staticCount=t,e}function Im(i="",t=!1){return t?(ee(),jn(Vi,null,i)):qe(Vi,null,i)}function Ke(i){return i==null||typeof i=="boolean"?qe(Vi):et(i)?qe(Xt,null,i.slice()):typeof i=="object"?Ii(i):qe(cr,null,String(i))}function Ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ls(i)}function Hl(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(et(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Hl(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(dr in t)?t._ctx=qt:o===3&&qt&&(qt.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else st(t)?(t={default:t,_ctx:qt},e=32):(t=String(t),s&64?(e=16,t=[vu(t)]):e=8);i.children=t,i.shapeFlag|=e}function Rm(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Cl([t.class,s.class]));else if(o==="style")t.style=$l([t.style,s.style]);else if(er(o)){const n=t[o],r=s[o];r&&n!==r&&!(et(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function Qe(i,t,e,s=null){Ue(i,t,7,[e,s])}const Dm=au();let Em=0;function Om(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||Dm,n={uid:Em++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new tg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cu(s,o),emitsOptions:Qh(s,o),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:s.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Vg.bind(null,n),i.ce&&i.ce(n),n}let se=null,Un,Ka;{const i=Th(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};Un=t("__VUE_INSTANCE_SETTERS__",e=>se=e),Ka=t("__VUE_SSR_SETTERS__",e=>hr=e)}const Po=i=>{const t=se;return Un(i),i.scope.on(),()=>{i.scope.off(),Un(t)}},Kc=()=>{se&&se.scope.off(),Un(null)};function yu(i){return i.vnode.shapeFlag&4}let hr=!1;function Am(i,t=!1){t&&Ka(t);const{props:e,children:s}=i.vnode,o=yu(i);pm(i,e,o,t),bm(i,s);const n=o?Vm(i,t):void 0;return t&&Ka(!1),n}function Vm(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=jh(new Proxy(i.ctx,nm));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?Pm(i):null,n=Po(i);cs();const r=Oi(s,i,0,[i.props,o]);if(ds(),n(),Ch(r)){if(r.then(Kc,Kc),t)return r.then(a=>{td(i,a,t)}).catch(a=>{nr(a,i,0)});i.asyncDep=r}else td(i,r,t)}else xu(i,t)}function td(i,t,e){st(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Ot(t)&&(i.setupState=Wh(t)),xu(i,e)}let ed;function xu(i,t,e){const s=i.type;if(!i.render){if(!t&&ed&&!s.render){const o=s.template||Pl(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Wt(Wt({isCustomElement:n,delimiters:a},r),l);s.render=ed(o,c)}}i.render=s.render||Re}{const o=Po(i);cs();try{rm(i)}finally{ds(),o()}}}function Lm(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return pe(i,"get","$attrs"),t[e]}}))}function Pm(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return Lm(i)},slots:i.slots,emit:i.emit,expose:t}}function ur(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Wh(jh(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in go)return go[e](i)},has(t,e){return e in t||e in go}}))}function _m(i){return st(i)&&"__vccOpts"in i}const wu=(i,t)=>Cg(i,t,hr),Hm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Mm="http://www.w3.org/2000/svg",Nm="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,id=Ri&&Ri.createElement("template"),zm={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?Ri.createElementNS(Mm,i):t==="mathml"?Ri.createElementNS(Nm,i):Ri.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>Ri.createTextNode(i),createComment:i=>Ri.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ri.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{id.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=id.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Bm=Symbol("_vtc");function jm(i,t,e){const s=i[Bm];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const sd=Symbol("_vod"),Um=Symbol("_vsh"),qm=Symbol(""),Wm=/(^|;)\s*display\s*:/;function Gm(i,t,e){const s=i.style,o=Nt(e);let n=!1;if(e&&!o){if(t)if(Nt(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&En(s,a,"")}else for(const r in t)e[r]==null&&En(s,r,"");for(const r in e)r==="display"&&(n=!0),En(s,r,e[r])}else if(o){if(t!==e){const r=s[qm];r&&(e+=";"+r),s.cssText=e,n=Wm.test(e)}}else t&&i.removeAttribute("style");sd in i&&(i[sd]=n?s.display:"",i[Um]&&(s.display="none"))}const od=/\s*!important$/;function En(i,t,e){if(et(e))e.forEach(s=>En(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=Xm(i,t);od.test(e)?i.setProperty(Ws(s),e.replace(od,""),"important"):i[s]=e}}const nd=["Webkit","Moz","ms"],pa={};function Xm(i,t){const e=pa[t];if(e)return e;let s=As(t);if(s!=="filter"&&s in i)return pa[t]=s;s=Sh(s);for(let o=0;o<nd.length;o++){const n=nd[o]+s;if(n in i)return pa[t]=n}return t}const rd="http://www.w3.org/1999/xlink";function Ym(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(rd,t.slice(6,t.length)):i.setAttributeNS(rd,t,e);else{const n=Kp(t);e==null||n&&!Ih(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Jm(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,d=e??"";(c!==d||!("_value"in i))&&(i.value=d),e==null&&i.removeAttribute(t),i._value=e;return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=Ih(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function $s(i,t,e,s){i.addEventListener(t,e,s)}function Qm(i,t,e,s){i.removeEventListener(t,e,s)}const ad=Symbol("_vei");function Zm(i,t,e,s,o=null){const n=i[ad]||(i[ad]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=Km(t);if(s){const c=n[t]=ib(s,o);$s(i,a,c,l)}else r&&(Qm(i,a,r,l),n[t]=void 0)}}const ld=/(?:Once|Passive|Capture)$/;function Km(i){let t;if(ld.test(i)){t={};let s;for(;s=i.match(ld);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ws(i.slice(2)),t]}let ga=0;const tb=Promise.resolve(),eb=()=>ga||(tb.then(()=>ga=0),ga=Date.now());function ib(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;Ue(sb(s,e.value),t,5,[s])};return e.value=i,e.attached=eb(),e}function sb(i,t){if(et(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const cd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,ob=(i,t,e,s,o,n,r,a,l)=>{const c=o==="svg";t==="class"?jm(i,s,c):t==="style"?Gm(i,e,s):er(t)?yl(t)||Zm(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nb(i,t,s,c))?Jm(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Ym(i,t,s,c))};function nb(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&cd(t)&&st(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return cd(t)&&Nt(e)?!1:t in i}const dd=i=>{const t=i.props["onUpdate:modelValue"]||!1;return et(t)?e=>Sn(t,e):t};function rb(i){i.target.composing=!0}function hd(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ma=Symbol("_assign"),ba={created(i,{modifiers:{lazy:t,trim:e,number:s}},o){i[ma]=dd(o);const n=s||o.props&&o.props.type==="number";$s(i,t?"change":"input",r=>{if(r.target.composing)return;let a=i.value;e&&(a=a.trim()),n&&(a=Ba(a)),i[ma](a)}),e&&$s(i,"change",()=>{i.value=i.value.trim()}),t||($s(i,"compositionstart",rb),$s(i,"compositionend",hd),$s(i,"change",hd))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,modifiers:{lazy:e,trim:s,number:o}},n){if(i[ma]=dd(n),i.composing)return;const r=o||i.type==="number"?Ba(i.value):i.value,a=t??"";r!==a&&(document.activeElement===i&&i.type!=="range"&&(e||s&&i.value.trim()===a)||(i.value=a))}},ab=Wt({patchProp:ob},zm);let ud;function lb(){return ud||(ud=ym(ab))}const cb=(...i)=>{const t=lb().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=hb(s);if(!o)return;const n=t._component;!st(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,db(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function db(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function hb(i){return Nt(i)?document.querySelector(i):i}const ub="/assets/Logo-BgdiXH0i.jpg",hi=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();hi.trustedTypes===void 0&&(hi.trustedTypes={createPolicy:(i,t)=>t});const $u={configurable:!1,enumerable:!1,writable:!1};hi.FAST===void 0&&Reflect.defineProperty(hi,"FAST",Object.assign({value:Object.create(null)},$u));const So=hi.FAST;if(So.getById===void 0){const i=Object.create(null);Reflect.defineProperty(So,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},$u))}const ss=Object.freeze([]);function Cu(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const va=hi.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,c=i.length-a;l<c;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&hi.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),ku=hi.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let ya=ku;const vo=`fast-${Math.random().toString(36).substring(2,8)}`,Fu=`${vo}{`,Ml=`}${vo}`,Q=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(ya!==ku)throw new Error("The HTML policy can only be set once.");ya=i},createHTML(i){return ya.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(vo)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${vo}:`,""))},createInterpolationPlaceholder(i){return`${Fu}${i}${Ml}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${vo}:${i}-->`},queueUpdate:va.enqueue,processUpdates:va.process,nextUpdate(){return new Promise(va.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class qn{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class Su{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new qn(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new qn(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const J=So.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=Q.queueUpdate;let s,o=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let d=c.$fastController||t.get(c);return d===void 0&&(Array.isArray(c)?d=o(c):t.set(c,d=new Su(c))),d}const r=Cu();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,u){const b=this.field,y=d[b];if(y!==u){d[b]=u;const C=d[this.callback];typeof C=="function"&&C.call(d,y,u),n(d).notify(this.name)}}}class l extends qn{constructor(d,u,b=!1){super(d,u),this.binding=d,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const y=this.binding(d,u);return s=b,y}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const b=this.last,y=n(d),C=b===null?this.first:{};if(C.propertySource=d,C.propertyName=u,C.notifier=y,y.subscribe(this,u),b!==null){if(!this.needsRefresh){let k;s=void 0,k=b.propertySource[b.propertyName],s=this,d===k&&(this.needsRefresh=!0)}b.next=C}this.last=C}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){o=c},getNotifier:n,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){n(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return i.test(c.toString())}})});function x(i,t){J.defineProperty(i,t)}function fb(i,t,e){return Object.assign({},e,{get:function(){return J.trackVolatile(),e.get.apply(this)}})}const fd=So.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class To{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return fd.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){fd.set(t)}}J.defineProperty(To.prototype,"index");J.defineProperty(To.prototype,"length");const yo=Object.seal(new To);class fr{constructor(){this.targetIndex=0}}class Tu extends fr{constructor(){super(...arguments),this.createPlaceholder=Q.createInterpolationPlaceholder}}class Nl extends fr{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return Q.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function pb(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=J.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function gb(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function mb(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bb(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function vb(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function yb(i){Q.setAttribute(this.target,this.targetName,i)}function xb(i){Q.setBooleanAttribute(this.target,this.targetName,i)}function wb(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function $b(i){this.target[this.targetName]=i}function Cb(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class zl extends Tu{constructor(t){super(),this.binding=t,this.bind=pb,this.unbind=mb,this.updateTarget=yb,this.isBindingVolatile=J.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=$b,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>Q.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=xb;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=gb,this.unbind=vb;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Cb);break}}targetAtContent(){this.updateTarget=wb,this.unbind=bb}createBehavior(t){return new kb(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class kb{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){To.setEvent(t);const e=this.binding(this.source,this.context);To.setEvent(null),e!==!0&&t.preventDefault()}}let xa=null;class Bl{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){xa=this}static borrow(t){const e=xa||new Bl;return e.directives=t,e.reset(),xa=null,e}}function Fb(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let c=0;c<e;++c)l+=s[c](r,a);return l},n=new zl(o);return n.targetName=t,n}const Sb=Ml.length;function Iu(i,t){const e=t.split(Fu);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(Ml);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(i.directives[c]),l=r.substring(a+Sb)}l!==""&&s.push(l)}return s}function pd(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Iu(i,a);let c=null;l===null?e&&(c=new zl(()=>a),c.targetName=r.name):c=Fb(l),c!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(c))}}function Tb(i,t,e){const s=Iu(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function Ib(i,t){const e=i.content;document.adoptNode(e);const s=Bl.borrow(t);pd(s,i,!0);const o=s.behaviorFactories;s.reset();const n=Q.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:pd(s,r);break;case 3:Tb(s,r,n);break;case 8:Q.isMarker(r)&&s.addFactory(t[Q.extractDirectiveIndexFromMarker(r)])}let a=0;(Q.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const wa=document.createRange();class Ru{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){wa.setStartBefore(t[0].firstChild),wa.setEndAfter(t[t.length-1].lastChild),wa.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class gd{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=Q.createHTML(d);const b=c.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(c=b)}else c=d;const u=Ib(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=Q.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let c=s.length;r<c;++r){const d=s[r],u=d.targetIndex;for(;l!==null;)if(a===u){o[r]=d.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)o[r]=c[d].createBehavior(t)}return new Ru(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,yo),o.appendTo(e),o}}const Rb=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function D(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof gd){const l=a;a=()=>l}if(typeof a=="function"&&(a=new zl(a)),a instanceof Tu){const l=Rb.exec(r);l!==null&&(a.targetName=l[2])}a instanceof fr?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new gd(s,e)}class re{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}re.create=(()=>{if(Q.supportsAdoptedStyleSheets){const i=new Map;return t=>new Db(t,i)}return i=>new Ab(i)})();function jl(i){return i.map(t=>t instanceof re?jl(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Du(i){return i.map(t=>t instanceof re?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let Eu=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Ou=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(Q.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Eu=(i,t)=>{i.adoptedStyleSheets.push(...t)},Ou=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class Db extends re{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Du(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=jl(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){Eu(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Ou(t,this.styleSheets),super.removeStylesFrom(t)}}let Eb=0;function Ob(){return`fast-style-class-${++Eb}`}class Ab extends re{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Du(t),this.styleSheets=jl(t),this.styleClass=Ob()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Wn=Object.freeze({locate:Cu()}),_o={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},M={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Gn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=_o)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return J.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||Q.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;Q.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":Q.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(Wn.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new Gn(t,c)):s.push(new Gn(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),Wn.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const md={mode:"open"},bd={},tl=So.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class pr{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=Gn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];o[a]=c.attribute,n[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?md:e.shadowOptions===null?void 0:Object.assign(Object.assign({},md),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?bd:Object.assign(Object.assign({},bd),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?re.create(e.styles):e.styles instanceof re?e.styles:re.create([e.styles])}get isDefined(){return!!tl.getByType(this.type)}define(t=customElements){const e=this.type;if(tl.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)J.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}pr.forType=tl.getByType;const Au=new WeakMap,Vb={bubbles:!0,composed:!0,cancelable:!0};function $a(i){return i.shadowRoot||Au.get(i)||null}class Ul extends Su{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Au.set(t,n)}const o=J.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,c=t[l];c!==void 0&&(delete t[l],n[l]=c)}}}get isConnected(){return J.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,J.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=$a(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=$a(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,yo)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,yo);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,yo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},Vb),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=$a(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||Q.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=pr.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Ul(t,s)}}function vd(i){return class extends i{constructor(){super(),Ul.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const gr=Object.assign(vd(HTMLElement),{from(i){return vd(i)},define(i,t){return new pr(i,t).define().type}});class ql{createCSS(){return""}createBehavior(){}}function Vu(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof ql){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof re||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function T(i,...t){const{styles:e,behaviors:s}=Vu(i,t),o=re.create(e);return s.length&&o.withBehaviors(...s),o}class Lb extends ql{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=re.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function we(i,...t){const{styles:e,behaviors:s}=Vu(i,t);return new Lb(e,s)}function Be(i,t,e){return{index:i,removed:t,addedCount:e}}const Lu=0,Pu=1,el=2,il=3;function Pb(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let b=1;b<a;++b)i[t+b-1]===s[o+u-1]?l[u][b]=l[u-1][b-1]:(c=l[u-1][b]+1,d=l[u][b-1]+1,l[u][b]=c<d?c:d);return l}function _b(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(el),e--;continue}if(e===0){o.push(il),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(Lu):(o.push(Pu),s=n),t--,e--):l===r?(o.push(il),t--,s=r):(o.push(el),e--,s=a)}return o.reverse(),o}function Hb(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function Mb(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function Nb(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function _u(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=Hb(i,s,l)),e===i.length&&n===s.length&&(a=Mb(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return ss;if(t===e){const C=Be(t,[],0);for(;o<n;)C.removed.push(s[o++]);return[C]}else if(o===n)return[Be(t,[],e-t)];const c=_b(Pb(i,t,e,s,o,n)),d=[];let u,b=t,y=o;for(let C=0;C<c.length;++C)switch(c[C]){case Lu:u!==void 0&&(d.push(u),u=void 0),b++,y++;break;case Pu:u===void 0&&(u=Be(b,[],0)),u.addedCount++,b++,u.removed.push(s[y]),y++;break;case el:u===void 0&&(u=Be(b,[],0)),u.addedCount++,b++;break;case il:u===void 0&&(u=Be(b,[],0)),u.removed.push(s[y]),y++;break}return u!==void 0&&d.push(u),d}const yd=Array.prototype.push;function zb(i,t,e,s){const o=Be(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const c=Nb(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(c>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-c;const d=o.removed.length+l.removed.length-c;if(!o.addedCount&&!d)n=!0;else{let u=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);yd.apply(b,u),u=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);yd.apply(u,b)}o.removed=u,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const d=o.addedCount-o.removed.length;l.index+=d,r+=d}}n||i.push(o)}function Bb(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];zb(t,o.index,o.removed,o.addedCount)}return t}function jb(i,t){let e=[];const s=Bb(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(_u(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let xd=!1;function Ca(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class Ub extends qn{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,Q.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,Q.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?jb(this.source,t):_u(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function qb(){if(xd)return;xd=!0,J.setArrayObserverFactory(l=>new Ub(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,c=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Be(this.length,[c],0)),c},i.push=function(){const l=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ca(Be(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.shift=function(){const l=this.length>0,c=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Be(0,[c],0)),c},i.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=n.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ca(Be(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Ca(Be(0,[],arguments.length),this)),l}}class Wb{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function ut(i){return new Nl("fast-ref",Wb,i)}const Hu=i=>typeof i=="function",Gb=()=>null;function wd(i){return i===void 0?Gb:Hu(i)?i:()=>i}function Et(i,t,e){const s=Hu(i)?i:()=>i,o=wd(t),n=wd(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const $d=Object.freeze({positioning:!1,recycle:!0});function Xb(i,t,e,s){i.bind(t[e],s)}function Yb(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class Jb{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Xb,this.itemsBindingObserver=J.binding(e,this,s),this.templateBindingObserver=J.binding(o,this,n),r.positioning&&(this.bindView=Yb)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=ss;return}const e=this.itemsObserver,s=this.itemsObserver=J.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,b=t.length;u<b;++u){const y=t[u],C=y.removed;let k=0,R=y.index;const V=R+y.addedCount,j=s.splice(y.index,C.length),W=d=l.length+j.length;for(;R<V;++R){const nt=s[R],bt=nt?nt.firstChild:this.location;let it;a&&d>0?(k<=W&&j.length>0?(it=j[k],k++):(it=l[c],c++),d--):it=r.create(),s.splice(R,0,it),o(it,n,R,e),it.insertBefore(bt)}j[k]&&l.push(...j.slice(k))}for(let u=c,b=l.length;u<b;++u)l[u].dispose();if(this.options.positioning)for(let u=0,b=s.length;u<b;++u){const y=s[u].context;y.length=b,y.index=u}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Ru.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=o.create();r(u,e,d,s),l[d]=u,u.insertBefore(n)}}else{let d=0;for(;d<a;++d)if(d<c){const b=l[d];r(b,e,d,s)}else{const b=o.create();r(b,e,d,s),l.push(b),b.insertBefore(n)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class Wl extends fr{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=Q.createBlockPlaceholder,qb(),this.isItemsBindingVolatile=J.isVolatileBinding(t),this.isTemplateBindingVolatile=J.isVolatileBinding(e)}createBehavior(t){return new Jb(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Rs(i,t,e=$d){const s=typeof t=="function"?t:()=>t;return new Wl(i,s,Object.assign(Object.assign({},$d),e))}function ui(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class Mu{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=J.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(ss),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Qb extends Mu{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ft(i){return typeof i=="string"&&(i={property:i}),new Nl("fast-slotted",Qb,i)}class Zb extends Mu{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function mr(i){return typeof i=="string"&&(i={property:i}),new Nl("fast-children",Zb,i)}class me{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ae=(i,t)=>D`
    <span
        part="end"
        ${ut("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${ut("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,le=(i,t)=>D`
    <span
        part="start"
        ${ut("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${ut("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Kb=D`
    <span part="end" ${ut("endContainer")}>
        <slot
            name="end"
            ${ut("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,tv=D`
    <span part="start" ${ut("startContainer")}>
        <slot
            name="start"
            ${ut("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,ev=(i,t)=>D`
    <template class="${e=>e.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${e=>e.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${ut("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,s)=>e.clickHandler(s.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${le(i,t)}
            ${ae(i,t)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${t.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${t.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${e=>e.id}-panel"
            role="region"
            aria-labelledby="${e=>e.id}"
        >
            <slot></slot>
        </div>
    </template>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function h(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const ka=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=ka.get(e);s===void 0&&ka.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=ka.get(t);if(e!==void 0)return e.get(i)});class iv{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,zu(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new Te(o,t,e))}}function no(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],Bu(o)||(t[o]=i[o]);return t}const sv=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Te(i,1,i)},transient(i){return new Te(i,2,i)}}),Fa=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:sv.singleton})}),Cd=new Map;function kd(i){return t=>Reflect.getOwnMetadata(i,t)}let Fd=null;const Dt=Object.freeze({createContainer(i){return new xo(null,Object.assign({},Fa.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:Dt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Nu,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||Dt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new xo(i,Object.assign({},Fa.default,t,{parentLocator:Dt.findParentContainer})):Fd||(Fd=new xo(null,Object.assign({},Fa.default,t,{parentLocator:()=>null})))},getDesignParamtypes:kd("design:paramtypes"),getAnnotationParamtypes:kd("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Cd.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=Dt.getDesignParamtypes(i),o=Dt.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=no(Dt.getDependencies(n)):t=[]}else t=no(o);else if(o===void 0)t=no(s);else{t=no(s);let n=o.length,r;for(let c=0;c<n;++c)r=o[c],r!==void 0&&(t[c]=r);const a=Object.keys(o);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],Bu(l)||(t[l]=o[l])}}else t=no(e);Cd.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?Dt.findResponsibleContainer(this):Dt.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof gr)){const a=this.$fastController,l=()=>{const d=Dt.findResponsibleContainer(this).get(e),u=this[o];d!==u&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Rd,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)Dt.defineProperty(r,a,n,o);else{const c=Dt.getOrCreateAnnotationParamTypes(r);c[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new iv(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=Dt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)Dt.defineProperty(t,e,i[0]);else{const o=s?Dt.getOrCreateAnnotationParamTypes(s.value):Dt.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return Io.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=nv){return i.register=function(s){return Io.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),ov=Dt.createInterface("Container");Dt.inject;const nv={scoped:!1};class Te{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Sd(i){return this.get(i)}function rv(i,t){return t(i)}class av{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Sd,t)):s=new this.Type(...this.dependencies.map(Sd,t),...e),this.transformers==null?s:this.transformers.reduce(rv,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const lv={$isResolver:!0,resolve(i,t){return t}};function On(i){return typeof i.register=="function"}function cv(i){return On(i)&&typeof i.registerInRequestor=="boolean"}function Td(i){return cv(i)&&i.registerInRequestor}function dv(i){return i.prototype!==void 0}const hv=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Nu="__DI_LOCATE_PARENT__",Sa=new Map;class xo{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ov,lv),t instanceof Node&&t.addEventListener(Nu,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(e=t[l],!!Dd(e))if(On(e))e.register(this,a);else if(dv(e))Io.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Dd(o)&&(On(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){cn(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof Te&&o.strategy===4?o.state.push(e):s.set(t,new Te(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(cn(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=Td(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(cn(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=Td(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){cn(t);const s=this;let o=s,n;if(e){let r=ss;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(Id(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return ss}else return Id(n,o,s);return ss}getFactory(t){let e=Sa.get(t);if(e===void 0){if(uv(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Sa.set(t,e=new av(t,Dt.getDependencies(t)))}return e}registerFactory(t,e){Sa.set(t,e)}createChild(t){return new xo(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(hv.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(On(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const Ta=new WeakMap;function zu(i){return function(t,e,s){if(Ta.has(s))return Ta.get(s);const o=i(t,e,s);return Ta.set(s,o),o}}const Io=Object.freeze({instance(i,t){return new Te(i,0,t)},singleton(i,t){return new Te(i,1,t)},transient(i,t){return new Te(i,2,t)},callback(i,t){return new Te(i,3,t)},cachedCallback(i,t){return new Te(i,3,zu(t))},aliasTo(i,t){return new Te(t,5,i)}});function cn(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Id(i,t,e){if(i instanceof Te&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const Rd="(anonymous)";function Dd(i){return typeof i=="object"&&i!==null||typeof i=="function"}const uv=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),dn={};function Bu(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=dn[i];if(t!==void 0)return t;const e=i.length;if(e===0)return dn[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return dn[i]=!1;return dn[i]=!0}default:return!1}}function Ed(i){return`${i.toLowerCase()}:presentation`}const hn=new Map,ju=Object.freeze({define(i,t,e){const s=Ed(i);hn.get(s)===void 0?hn.set(s,t):hn.set(s,!1),e.register(Io.instance(s,t))},forTag(i,t){const e=Ed(i),s=hn.get(e);return s===!1?Dt.findResponsibleContainer(t).get(e):s||null}});class fv{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?re.create(e):e instanceof re?e:re.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class Z extends gr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=ju.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new pv(this===Z?class extends Z{}:this,t,e)}}h([x],Z.prototype,"template",void 0);h([x],Z.prototype,"styles",void 0);function ro(i,t,e){return typeof i=="function"?i(t,e):i}class pv{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new fv(ro(s.template,a,s),ro(s.styles,a,s));a.definePresentation(l);let c=ro(s.shadowOptions,a,s);a.shadowRootMode&&(c?o.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:ro(s.elementOptions,a,s),shadowOptions:c,attributes:ro(s.attributes,a,s)})}})}}function St(i,...t){const e=Wn.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Wn.locate(s).forEach(n=>e.push(n))})}class ns extends Z{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([f({attribute:"heading-level",mode:"fromView",converter:M})],ns.prototype,"headinglevel",void 0);h([f({mode:"boolean"})],ns.prototype,"expanded",void 0);h([f],ns.prototype,"id",void 0);St(ns,me);const gv=(i,t)=>D`
    <template>
        <slot ${Ft({property:"accordionItems",filter:ui()})}></slot>
        <slot name="item" part="item" ${Ft("accordionItems")}></slot>
    </template>
`,Vt={horizontal:"horizontal",vertical:"vertical"};function mv(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function bv(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ps(...i){return i.every(t=>t instanceof HTMLElement)}function vv(i,t){return!i||!t||!Ps(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function yv(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Yi;function xv(){if(typeof Yi=="boolean")return Yi;if(!bv())return Yi=!1,Yi;const i=document.createElement("style"),t=yv();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Yi=!0}catch{Yi=!1}finally{document.head.removeChild(i)}return Yi}const Od="focus",Ad="focusin",_s="focusout",Hs="keydown",Vd="resize",Ld="scroll";var Pd;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Pd||(Pd={}));const Ae="ArrowDown",Li="ArrowLeft",Pi="ArrowRight",Ve="ArrowUp",pi="Enter",Gs="Escape",ii="Home",si="End",wv="F2",$v="PageDown",Cv="PageUp",hs=" ",br="Tab",Cs={ArrowDown:Ae,ArrowLeft:Li,ArrowRight:Pi,ArrowUp:Ve};var wt;(function(i){i.ltr="ltr",i.rtl="rtl"})(wt||(wt={}));function kv(i,t,e){return e<i?t:e>t?i:e}function vr(i,t,e){return Math.min(Math.max(e,i),t)}function un(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let Fv=0;function Ro(i=""){return`${i}${Fv++}`}var g;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(g||(g={}));const _d={single:"single",multi:"multi"};class Gl extends Z{constructor(){super(...arguments),this.expandmode=_d.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof ns&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Ve:t.preventDefault(),this.adjust(-1);break;case Ae:t.preventDefault(),this.adjust(1);break;case ii:this.activeItemIndex=0,this.focusItem();break;case si:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===_d.single}adjust(t){this.activeItemIndex=kv(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof ns&&t.expandbutton.focus()}}h([f({attribute:"expand-mode"})],Gl.prototype,"expandmode",void 0);h([x],Gl.prototype,"accordionItems",void 0);const Uu=(i,t)=>D`
    <a
        class="control"
        part="control"
        download="${e=>e.download}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${ut("control")}
    >
        ${le(i,t)}
        <span class="content" part="content">
            <slot ${Ft("defaultSlottedContent")}></slot>
        </span>
        ${ae(i,t)}
    </a>
`;class $t{}h([f({attribute:"aria-atomic"})],$t.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],$t.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],$t.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],$t.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],$t.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],$t.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],$t.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],$t.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],$t.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],$t.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],$t.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],$t.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],$t.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],$t.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],$t.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],$t.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],$t.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],$t.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],$t.prototype,"ariaRoledescription",void 0);let $e=class extends Z{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([f],$e.prototype,"download",void 0);h([f],$e.prototype,"href",void 0);h([f],$e.prototype,"hreflang",void 0);h([f],$e.prototype,"ping",void 0);h([f],$e.prototype,"referrerpolicy",void 0);h([f],$e.prototype,"rel",void 0);h([f],$e.prototype,"target",void 0);h([f],$e.prototype,"type",void 0);h([x],$e.prototype,"defaultSlottedContent",void 0);class yr{}h([f({attribute:"aria-expanded"})],yr.prototype,"ariaExpanded",void 0);St(yr,$t);St($e,me,yr);const Sv=(i,t)=>D`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${Et(e=>e.initialLayoutComplete,D`
                <slot></slot>
            `)}
    </template>
`,rs=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?wt.rtl:wt.ltr};class Tv{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{hi.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class Y extends Z{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=wt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(Y.intersectionService.requestPosition(this,this.handleIntersection),Y.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&Y.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,Y.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&Y.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&Y.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=rs(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const y=rs(this);if(y!==this.currentDirection){this.currentDirection=y,this.initialize();return}this.currentDirection===wt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,d,u)<r)&&(t=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Vd,this.update,{passive:!0}),window.addEventListener(Ld,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Vd,this.update),window.removeEventListener(Ld,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),Q.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}Y.intersectionService=new Tv;h([f],Y.prototype,"anchor",void 0);h([f],Y.prototype,"viewport",void 0);h([f({attribute:"horizontal-positioning-mode"})],Y.prototype,"horizontalPositioningMode",void 0);h([f({attribute:"horizontal-default-position"})],Y.prototype,"horizontalDefaultPosition",void 0);h([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],Y.prototype,"horizontalViewportLock",void 0);h([f({attribute:"horizontal-inset",mode:"boolean"})],Y.prototype,"horizontalInset",void 0);h([f({attribute:"horizontal-threshold"})],Y.prototype,"horizontalThreshold",void 0);h([f({attribute:"horizontal-scaling"})],Y.prototype,"horizontalScaling",void 0);h([f({attribute:"vertical-positioning-mode"})],Y.prototype,"verticalPositioningMode",void 0);h([f({attribute:"vertical-default-position"})],Y.prototype,"verticalDefaultPosition",void 0);h([f({attribute:"vertical-viewport-lock",mode:"boolean"})],Y.prototype,"verticalViewportLock",void 0);h([f({attribute:"vertical-inset",mode:"boolean"})],Y.prototype,"verticalInset",void 0);h([f({attribute:"vertical-threshold"})],Y.prototype,"verticalThreshold",void 0);h([f({attribute:"vertical-scaling"})],Y.prototype,"verticalScaling",void 0);h([f({attribute:"fixed-placement",mode:"boolean"})],Y.prototype,"fixedPlacement",void 0);h([f({attribute:"auto-update-mode"})],Y.prototype,"autoUpdateMode",void 0);h([x],Y.prototype,"anchorElement",void 0);h([x],Y.prototype,"viewportElement",void 0);h([x],Y.prototype,"initialLayoutComplete",void 0);const Iv=(i,t)=>D`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Ho=class extends Z{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};h([f({attribute:"fill"})],Ho.prototype,"fill",void 0);h([f({attribute:"color"})],Ho.prototype,"color",void 0);h([f({mode:"boolean"})],Ho.prototype,"circular",void 0);const Rv=(i,t)=>D`
    <div role="listitem" class="listitem" part="listitem">
        ${Et(e=>e.href&&e.href.length>0,D`
                ${Uu(i,t)}
            `)}
        ${Et(e=>!e.href,D`
                ${le(i,t)}
                <slot></slot>
                ${ae(i,t)}
            `)}
        ${Et(e=>e.separator,D`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Do extends $e{constructor(){super(...arguments),this.separator=!0}}h([x],Do.prototype,"separator",void 0);St(Do,me,yr);const Dv=(i,t)=>D`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Ft({property:"slottedBreadcrumbItems",filter:ui()})}
            ></slot>
        </div>
    </template>
`;class qu extends Z{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof Do&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof Do?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([x],qu.prototype,"slottedBreadcrumbItems",void 0);const Ev=(i,t)=>D`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${ut("control")}
    >
        ${le(i,t)}
        <span class="content" part="content">
            <slot ${Ft("defaultSlottedContent")}></slot>
        </span>
        ${ae(i,t)}
    </button>
`,Hd="form-associated-proxy",Md="ElementInternals",Nd=Md in window&&"setFormValue"in window[Md].prototype,zd=new WeakMap;function gi(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Nd}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return ss}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Q.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Q.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Nd)return null;let e=zd.get(this);return e||(e=this.attachInternals(),zd.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Hd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Hd)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case pi:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return f({mode:"boolean"})(t.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),f({attribute:"current-value"})(t.prototype,"currentValue"),f(t.prototype,"name"),f({mode:"boolean"})(t.prototype,"required"),x(t.prototype,"value"),t}function Xl(i){class t extends gi(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:_o})(e.prototype,"currentChecked"),x(e.prototype,"defaultChecked"),x(e.prototype,"checked"),e}class Ov extends Z{}class Av extends gi(Ov){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ce=class extends Av{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([f({mode:"boolean"})],Ce.prototype,"autofocus",void 0);h([f({attribute:"form"})],Ce.prototype,"formId",void 0);h([f],Ce.prototype,"formaction",void 0);h([f],Ce.prototype,"formenctype",void 0);h([f],Ce.prototype,"formmethod",void 0);h([f({mode:"boolean"})],Ce.prototype,"formnovalidate",void 0);h([f],Ce.prototype,"formtarget",void 0);h([f],Ce.prototype,"type",void 0);h([x],Ce.prototype,"defaultSlottedContent",void 0);class xr{}h([f({attribute:"aria-expanded"})],xr.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],xr.prototype,"ariaPressed",void 0);St(xr,$t);St(Ce,me,xr);class Vv{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let Le=class extends Z{constructor(){super(...arguments),this.dateFormatter=new Vv,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?n:l>o?r:t,u=l<1?n.length+l:l>o?l-o:l,b=`${c}-${u}-${d}`,y=this.dateInString(b,this.disabledDates),C=this.dateInString(b,this.selectedDates),k={day:u,month:c,year:d,disabled:y,selected:C},R=a[a.length-1];a.length===0||R.length%7===0?a.push([k]):R.push(k),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,c=this.month!==o;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===pi&&this.handleDateSelect(t,e),!0}};h([f({mode:"boolean"})],Le.prototype,"readonly",void 0);h([f],Le.prototype,"locale",void 0);h([f({converter:M})],Le.prototype,"month",void 0);h([f({converter:M})],Le.prototype,"year",void 0);h([f({attribute:"day-format",mode:"fromView"})],Le.prototype,"dayFormat",void 0);h([f({attribute:"weekday-format",mode:"fromView"})],Le.prototype,"weekdayFormat",void 0);h([f({attribute:"month-format",mode:"fromView"})],Le.prototype,"monthFormat",void 0);h([f({attribute:"year-format",mode:"fromView"})],Le.prototype,"yearFormat",void 0);h([f({attribute:"min-weeks",converter:M})],Le.prototype,"minWeeks",void 0);h([f({attribute:"disabled-dates"})],Le.prototype,"disabledDates",void 0);h([f({attribute:"selected-dates"})],Le.prototype,"selectedDates",void 0);const fn={none:"none",default:"default",sticky:"sticky"},ki={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},wo={default:"default",header:"header",stickyHeader:"sticky-header"};class Gt extends Z{constructor(){super(...arguments),this.rowType=wo.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Wl(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(_s,this.handleFocusout),this.addEventListener(Hs,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(_s,this.handleFocusout),this.removeEventListener(Hs,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Li:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Pi:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case ii:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case si:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===wo.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===wo.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],Gt.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],Gt.prototype,"rowType",void 0);h([x],Gt.prototype,"rowData",void 0);h([x],Gt.prototype,"columnDefinitions",void 0);h([x],Gt.prototype,"cellItemTemplate",void 0);h([x],Gt.prototype,"headerCellItemTemplate",void 0);h([x],Gt.prototype,"rowIndex",void 0);h([x],Gt.prototype,"isActiveRow",void 0);h([x],Gt.prototype,"activeCellItemTemplate",void 0);h([x],Gt.prototype,"defaultCellItemTemplate",void 0);h([x],Gt.prototype,"defaultHeaderCellItemTemplate",void 0);h([x],Gt.prototype,"cellElements",void 0);function Lv(i){const t=i.tagFor(Gt);return D`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const Pv=(i,t)=>{const e=Lv(i),s=i.tagFor(Gt);return D`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${mr({property:"rowElements",filter:ui("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class zt extends Z{constructor(){super(),this.noTabbing=!1,this.generateHeader=fn.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Q.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=zt.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=zt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Wl(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Od,this.handleFocus),this.addEventListener(Hs,this.handleKeydown),this.addEventListener(_s,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Q.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Od,this.handleFocus),this.removeEventListener(Hs,this.handleKeydown),this.removeEventListener(_s,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case Ve:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Ae:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Cv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case $v:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===fn.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case ii:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case si:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,Q.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==fn.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===fn.sticky?wo.stickyHeader:wo.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}zt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],zt.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],zt.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],zt.prototype,"gridTemplateColumns",void 0);h([x],zt.prototype,"rowsData",void 0);h([x],zt.prototype,"columnDefinitions",void 0);h([x],zt.prototype,"rowItemTemplate",void 0);h([x],zt.prototype,"cellItemTemplate",void 0);h([x],zt.prototype,"headerCellItemTemplate",void 0);h([x],zt.prototype,"focusRowIndex",void 0);h([x],zt.prototype,"focusColumnIndex",void 0);h([x],zt.prototype,"defaultRowItemTemplate",void 0);h([x],zt.prototype,"rowElementTag",void 0);h([x],zt.prototype,"rowElements",void 0);const _v=D`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,Hv=D`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class mi extends Z{constructor(){super(...arguments),this.cellType=ki.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Ad,this.handleFocusin),this.addEventListener(_s,this.handleFocusout),this.addEventListener(Hs,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ad,this.handleFocusin),this.removeEventListener(_s,this.handleFocusout),this.removeEventListener(Hs,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ki.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===ki.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===ki.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case pi:case wv:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case ki.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Gs:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ki.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Hv.render(this,this);break;case void 0:case ki.rowHeader:case ki.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=_v.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],mi.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],mi.prototype,"gridColumn",void 0);h([x],mi.prototype,"rowData",void 0);h([x],mi.prototype,"columnDefinition",void 0);function Mv(i){const t=i.tagFor(mi);return D`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function Nv(i){const t=i.tagFor(mi);return D`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const zv=(i,t)=>{const e=Mv(i),s=Nv(i);return D`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${mr({property:"cellElements",filter:ui('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ft("slottedCellElements")}></slot>
        </template>
    `},Bv=(i,t)=>D`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,jv=D`
    <div
        class="title"
        part="title"
        aria-label="${i=>i.dateFormatter.getDate(`${i.month}-2-${i.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${i=>i.dateFormatter.getMonth(i.month)}
        </span>
        <span part="year">${i=>i.dateFormatter.getYear(i.year)}</span>
    </div>
`,Uv=i=>{const t=i.tagFor(mi);return D`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},qv=(i,t)=>{const e=i.tagFor(mi);return D`
        <${e}
            class="${(s,o)=>o.parentContext.parent.getDayClassNames(s,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(s,o)=>o.index+1}"
            @click="${(s,o)=>o.parentContext.parent.handleDateSelect(o.event,s)}"
            @keydown="${(s,o)=>o.parentContext.parent.handleKeydown(o.event,s)}"
            aria-label="${(s,o)=>o.parentContext.parent.dateFormatter.getDate(`${s.month}-${s.day}-${s.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${s=>t===`${s.month}-${s.day}-${s.year}`?"today":"date"}"
            >
                ${(s,o)=>o.parentContext.parent.dateFormatter.getDay(s.day)}
            </div>
            <slot name="${s=>s.month}-${s=>s.day}-${s=>s.year}"></slot>
        </${e}>
    `},Wv=(i,t)=>{const e=i.tagFor(Gt);return D`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Rs(s=>s,qv(i,t),{positioning:!0})}
        </${e}>
    `},Gv=(i,t)=>{const e=i.tagFor(zt),s=i.tagFor(Gt);return D`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Rs(o=>o.getWeekdayText(),Uv(i),{positioning:!0})}
        </${s}>
        ${Rs(o=>o.getDays(),Wv(i,t))}
    </${e}>
`},Xv=i=>D`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Rs(t=>t.getWeekdayText(),D`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Rs(t=>t.getDays(),D`
                    <div class="week">
                        ${Rs(t=>t,D`
                                <div
                                    class="${(t,e)=>e.parentContext.parent.getDayClassNames(t,i)}"
                                    part="day"
                                    aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${t=>i===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
                                    >
                                        ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `,Yv=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return D`
        <template>
            ${tv}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${Et(n=>n.readonly,Xv(o),Gv(i,o))}
            ${Kb}
        </template>
    `},Jv=(i,t)=>D`
    <slot></slot>
`;let Wu=class extends Z{};const Qv=(i,t)=>D`
    <template
        role="checkbox"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,s)=>e.keypressHandler(s.event)}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        class="${e=>e.readOnly?"readonly":""} ${e=>e.checked?"checked":""} ${e=>e.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${t.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Zv extends Z{}class Kv extends Xl(Zv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class wr extends Kv{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case hs:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],wr.prototype,"readOnly",void 0);h([x],wr.prototype,"defaultSlottedNodes",void 0);h([x],wr.prototype,"indeterminate",void 0);function Gu(i){return Ps(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class oi extends Z{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),J.notify(this,"value")}get value(){var t;return J.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([x],oi.prototype,"checked",void 0);h([x],oi.prototype,"content",void 0);h([x],oi.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],oi.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],oi.prototype,"selectedAttribute",void 0);h([x],oi.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],oi.prototype,"initialValue",void 0);class Xs{}h([x],Xs.prototype,"ariaChecked",void 0);h([x],Xs.prototype,"ariaPosInSet",void 0);h([x],Xs.prototype,"ariaSelected",void 0);h([x],Xs.prototype,"ariaSetSize",void 0);St(Xs,$t);St(oi,me,Xs);let be=class An extends Z{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return J.track(this,"options"),this._options}set options(t){this._options=t,J.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{An.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,An.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case ii:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Ae:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Ve:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case si:{t.preventDefault(),this.selectLastOption();break}case br:return this.focusAndScrollOptionIntoView(),!0;case pi:case Gs:return!0;case hs:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(An.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=J.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=mv(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(Gu(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=Ro("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};be.slottedOptionFilter=i=>Gu(i)&&!i.hidden;be.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],be.prototype,"disabled",void 0);h([x],be.prototype,"selectedIndex",void 0);h([x],be.prototype,"selectedOptions",void 0);h([x],be.prototype,"slottedOptions",void 0);h([x],be.prototype,"typeaheadBuffer",void 0);class Mi{}h([x],Mi.prototype,"ariaActiveDescendant",void 0);h([x],Mi.prototype,"ariaDisabled",void 0);h([x],Mi.prototype,"ariaExpanded",void 0);h([x],Mi.prototype,"ariaMultiSelectable",void 0);St(Mi,$t);St(be,Mi);const Ds={above:"above",below:"below"};class ty extends be{}class ey extends gi(ty){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pn={inline:"inline",list:"list",both:"both",none:"none"};let bi=class extends ey{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Ro("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===pn.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===pn.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===pn.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),Q.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return J.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,J.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return J.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),J.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===pn.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=vr(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Ds.above:Ds.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ds.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([f({attribute:"autocomplete",mode:"fromView"})],bi.prototype,"autocomplete",void 0);h([x],bi.prototype,"maxHeight",void 0);h([f({attribute:"open",mode:"boolean"})],bi.prototype,"open",void 0);h([f],bi.prototype,"placeholder",void 0);h([f({attribute:"position"})],bi.prototype,"positionAttribute",void 0);h([x],bi.prototype,"position",void 0);class $r{}h([x],$r.prototype,"ariaAutoComplete",void 0);h([x],$r.prototype,"ariaControls",void 0);St($r,Mi);St(bi,me,$r);const iy=(i,t)=>D`
    <template
        aria-disabled="${e=>e.ariaDisabled}"
        autocomplete="${e=>e.autocomplete}"
        class="${e=>e.open?"open":""} ${e=>e.disabled?"disabled":""} ${e=>e.position}"
        ?open="${e=>e.open}"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        @focusout="${(e,s)=>e.focusoutHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
    >
        <div class="control" part="control">
            ${le(i,t)}
            <slot name="control">
                <input
                    aria-activedescendant="${e=>e.open?e.ariaActiveDescendant:null}"
                    aria-autocomplete="${e=>e.ariaAutoComplete}"
                    aria-controls="${e=>e.ariaControls}"
                    aria-disabled="${e=>e.ariaDisabled}"
                    aria-expanded="${e=>e.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${e=>e.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${e=>e.disabled}"
                    :value="${e=>e.value}"
                    @input="${(e,s)=>e.inputHandler(s.event)}"
                    @keyup="${(e,s)=>e.keyupHandler(s.event)}"
                    ${ut("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${ae(i,t)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${ut("listbox")}
        >
            <slot
                ${Ft({filter:be.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Xn(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function sy(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=Xn(e)}return!1}const ai=document.createElement("div");function oy(i){return i instanceof gr}class Yl{setProperty(t,e){Q.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){Q.queueUpdate(()=>this.target.removeProperty(t))}}class ny extends Yl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(re.create([e]))}}class ry extends Yl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ay extends Yl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Xu{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),J.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),Q.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),Q.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}h([x],Xu.prototype,"target",void 0);class ly{constructor(t){this.target=t.style}setProperty(t,e){Q.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){Q.queueUpdate(()=>this.target.removeProperty(t))}}class jt{setProperty(t,e){jt.properties[t]=e;for(const s of jt.roots.values())ks.getOrCreate(jt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete jt.properties[t];for(const e of jt.roots.values())ks.getOrCreate(jt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=jt;if(!e.has(t)){e.add(t);const s=ks.getOrCreate(this.normalizeRoot(t));for(const o in jt.properties)s.setProperty(o,jt.properties[o])}}static unregisterRoot(t){const{roots:e}=jt;if(e.has(t)){e.delete(t);const s=ks.getOrCreate(jt.normalizeRoot(t));for(const o in jt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===ai?document:t}}jt.roots=new Set;jt.properties={};const Ia=new WeakMap,cy=Q.supportsAdoptedStyleSheets?ny:Xu,ks=Object.freeze({getOrCreate(i){if(Ia.has(i))return Ia.get(i);let t;return i===ai?t=new jt:i instanceof Document?t=Q.supportsAdoptedStyleSheets?new ry:new ay:oy(i)?t=new cy(i):t=new ly(i),Ia.set(i,t),t}});class ie extends ql{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ie.uniqueId(),ie.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new ie({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return ie.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Lt.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof ie&&(e=this.alias(e)),Lt.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Lt.existsFor(t)&&Lt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ai,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!Lt.existsFor(e)&&Lt.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}ie.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();ie.tokensById=new Map;class dy{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){ks.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Lt.getOrCreate(e).get(t)))}remove(t,e){ks.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class hy{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=J.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,yo))}}class uy{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),J.getNotifier(this).notify(t.id))}get(t){return J.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ao=new WeakMap,lo=new WeakMap;class Lt{constructor(t){this.target=t,this.store=new uy,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=ie.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},ao.set(t,this),J.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof gr?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ao.get(t)||new Lt(t)}static existsFor(t){return ao.has(t)}static findParent(t){if(ai!==t.target){let e=Xn(t.target);for(;e!==null;){if(ao.has(e))return ao.get(e);e=Xn(e)}return Lt.getOrCreate(ai)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ai?Lt.getOrCreate(ai):null}while(s!==null);return null}get parent(){return lo.get(this)||null}updateCSSTokenReflection(t,e){if(ie.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=Lt.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){ie.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),ie.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Lt.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&lo.get(this).removeChild(this)}appendChild(t){t.parent&&lo.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));lo.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),J.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),J.getNotifier(this.store).unsubscribe(t),t.parent===this?lo.delete(t):!1}contains(t){return sy(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Lt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Lt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=ie.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);ie.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new hy(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}Lt.cssCustomPropertyReflector=new dy;h([x],Lt.prototype,"children",void 0);function fy(i){return ie.from(i)}const mt=Object.freeze({create:fy,notifyConnection(i){return!i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).unbind(),!0)},registerRoot(i=ai){jt.registerRoot(i)},unregisterRoot(i=ai){jt.unregisterRoot(i)}}),Ra=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Da=new Map,Vn=new Map;let Es=null;const co=Dt.createInterface(i=>i.cachedCallback(t=>(Es===null&&(Es=new Ju(null,t)),Es))),Yu=Object.freeze({tagFor(i){return Vn.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||Dt.findResponsibleContainer(i).get(co)},getOrCreate(i){if(!i)return Es===null&&(Es=Dt.getOrCreateDOMContainer().get(co)),Es;const t=i.$$designSystem$$;if(t)return t;const e=Dt.getOrCreateDOMContainer(i);if(e.has(co,!1))return e.get(co);{const s=new Ju(i,e);return e.register(Io.instance(co,s)),s}}});function py(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Ju{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ra.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=py(a,l,c),{name:u,callback:b,baseClass:y}=d;let{type:C}=d,k=u,R=Da.get(k),V=!0;for(;R;){const j=o(k,C,R);switch(j){case Ra.ignoreDuplicate:return;case Ra.definitionCallbackOnly:V=!1,R=void 0;break;default:k=j,R=Da.get(k);break}}V&&((Vn.has(C)||C===Z)&&(C=class extends C{}),Da.set(k,C),Vn.set(C,k),y&&Vn.set(y,k)),s.push(new gy(e,k,C,n,b,V))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&mt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class gy{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){ju.define(this.name,t,this.container)}defineElement(t){this.definition=new pr(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Yu.tagFor(t)}}const my=(i,t)=>D`
    <div class="positioning-region" part="positioning-region">
        ${Et(e=>e.modal,D`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${e=>e.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${e=>e.modal}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-label="${e=>e.ariaLabel}"
            ${ut("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Qu=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],by=Qu.join(","),Zu=typeof Element>"u",Eo=Zu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,sl=!Zu&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},vy=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Ku=function(t){return t.tagName==="INPUT"},yy=function(t){return Ku(t)&&t.type==="hidden"},xy=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},wy=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},$y=function(t){if(!t.name)return!0;var e=t.form||sl(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=wy(o,t.form);return!n||n===t},Cy=function(t){return Ku(t)&&t.type==="radio"},ky=function(t){return Cy(t)&&!$y(t)},Bd=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},Fy=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Eo.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(Eo.call(r,"details:not([open]) *"))return!0;var a=sl(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var c=t;t;){var d=t.parentElement,u=sl(t);if(d&&!d.shadowRoot&&o(d)===!0)return Bd(t);t.assignedSlot?t=t.assignedSlot:!d&&u!==t.ownerDocument?t=u.host:t=d}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return Bd(t);return!1},Sy=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return Eo.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},tf=function(t,e){return!(e.disabled||yy(e)||Fy(e,t)||xy(e)||Sy(e))},Ty=function(t,e){return!(ky(e)||vy(e)<0||!tf(t,e))},jd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Eo.call(t,by)===!1?!1:Ty(e,t)},Iy=Qu.concat("iframe").join(","),Ud=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Eo.call(t,Iy)===!1?!1:tf(e,t)};class De extends Z{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Gs:this.dismiss(),t.preventDefault();break;case br:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return De.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),Q.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=J.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:jd(e)||De.isFocusableFastElement(e)&&De.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(De.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>jd(o))}}h([f({mode:"boolean"})],De.prototype,"modal",void 0);h([f({mode:"boolean"})],De.prototype,"hidden",void 0);h([f({attribute:"trap-focus",mode:"boolean"})],De.prototype,"trapFocus",void 0);h([f({attribute:"aria-describedby"})],De.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-labelledby"})],De.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],De.prototype,"ariaLabel",void 0);const Ry=(i,t)=>D`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,Dy={separator:"separator",presentation:"presentation"};class Cr extends Z{constructor(){super(...arguments),this.role=Dy.separator,this.orientation=Vt.horizontal}}h([f],Cr.prototype,"role",void 0);h([f],Cr.prototype,"orientation",void 0);const ol={next:"next",previous:"previous"},Ey=(i,t)=>D`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${Et(e=>e.direction===ol.next,D`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${Et(e=>e.direction===ol.previous,D`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class kr extends Z{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=ol.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}h([f({mode:"boolean"})],kr.prototype,"disabled",void 0);h([f({attribute:"aria-hidden",converter:_o})],kr.prototype,"hiddenFromAT",void 0);h([f],kr.prototype,"direction",void 0);const Oy=(i,t)=>D`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${le(i,t)}
        <span class="content" part="content">
            <slot ${Ft("content")}></slot>
        </span>
        ${ae(i,t)}
    </template>
`;class Mo extends be{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=un(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case ii:{this.checkFirstOption(s);return}case Ae:{this.checkNextOption(s);return}case Ve:{this.checkPreviousOption(s);return}case si:{this.checkLastOption(s);return}case br:return this.focusAndScrollOptionIntoView(),!0;case Gs:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case hs:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&Q.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([x],Mo.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],Mo.prototype,"multiple",void 0);h([f({converter:M})],Mo.prototype,"size",void 0);const Ay=(i,t)=>D`
    <template
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        @mousedown="${(e,s)=>e.mousedownHandler(s.event)}"
    >
        <slot
            ${Ft({filter:Mo.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,oe={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Vy={[oe.menuitem]:"menuitem",[oe.menuitemcheckbox]:"menuitemcheckbox",[oe.menuitemradio]:"menuitemradio"};class ke extends Z{constructor(){super(...arguments),this.role=oe.menuitem,this.hasSubmenu=!1,this.currentDirection=wt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case pi:case hs:return this.invoke(),!1;case Pi:return this.expandAndFocus(),!1;case Li:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case oe.menuitemcheckbox:this.checked=!this.checked;break;case oe.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case oe.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=rs(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Q.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([f({mode:"boolean"})],ke.prototype,"disabled",void 0);h([f({mode:"boolean"})],ke.prototype,"expanded",void 0);h([x],ke.prototype,"startColumnCount",void 0);h([f],ke.prototype,"role",void 0);h([f({mode:"boolean"})],ke.prototype,"checked",void 0);h([x],ke.prototype,"submenuRegion",void 0);h([x],ke.prototype,"hasSubmenu",void 0);h([x],ke.prototype,"currentDirection",void 0);h([x],ke.prototype,"submenu",void 0);St(ke,me);const Ly=(i,t)=>D`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==oe.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,s)=>e.handleMenuItemKeyDown(s.event)}"
        @click="${(e,s)=>e.handleMenuItemClick(s.event)}"
        @mouseover="${(e,s)=>e.handleMouseOver(s.event)}"
        @mouseout="${(e,s)=>e.handleMouseOut(s.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${Et(e=>e.role===oe.menuitemcheckbox,D`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Et(e=>e.role===oe.menuitemradio,D`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${le(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ae(i,t)}
        ${Et(e=>e.hasSubmenu,D`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${t.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${Et(e=>e.expanded,D`
                <${i.tagFor(Y)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${ut("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${i.tagFor(Y)}>
            `)}
    </template>
`,Py=(i,t)=>D`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${Ft("items")}></slot>
    </template>
`;let Fr=class ef extends Z{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Ps(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==oe.menuitem&&a===null||r===oe.menuitem&&a!==null?1:r!==oe.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof ke||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===oe.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===oe.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Ps(t)&&ef.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),Q.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Ae:this.setFocus(this.focusIndex+1,1);return;case Ve:this.setFocus(this.focusIndex-1,-1);return;case si:this.setFocus(this.menuItems.length-1,-1);return;case ii:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};Fr.focusableElementRoles=Vy;h([x],Fr.prototype,"items",void 0);const _y=(i,t)=>D`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${le(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
                @blur="${(e,s)=>e.handleBlur()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                type="text"
                inputmode="numeric"
                min="${e=>e.min}"
                max="${e=>e.max}"
                step="${e=>e.step}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${ut("control")}
            />
            ${Et(e=>!e.hideStep&&!e.readOnly&&!e.disabled,D`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${e=>e.stepUp()}">
                            <slot name="step-up-glyph">
                                ${t.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${e=>e.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${t.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${ae(i,t)}
        </div>
    </template>
`;class Hy extends Z{}class My extends gi(Hy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Ny={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ve=class extends My{constructor(){super(...arguments),this.type=Ny.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Q.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({attribute:"readonly",mode:"boolean"})],ve.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ve.prototype,"autofocus",void 0);h([f],ve.prototype,"placeholder",void 0);h([f],ve.prototype,"type",void 0);h([f],ve.prototype,"list",void 0);h([f({converter:M})],ve.prototype,"maxlength",void 0);h([f({converter:M})],ve.prototype,"minlength",void 0);h([f],ve.prototype,"pattern",void 0);h([f({converter:M})],ve.prototype,"size",void 0);h([f({mode:"boolean"})],ve.prototype,"spellcheck",void 0);h([x],ve.prototype,"defaultSlottedNodes",void 0);class Sr{}St(Sr,$t);St(ve,me,Sr);class zy extends Z{}class By extends gi(zy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ce=class extends By{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&Q.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Ve:return this.stepUp(),!1;case Ae:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([f({attribute:"readonly",mode:"boolean"})],ce.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ce.prototype,"autofocus",void 0);h([f({attribute:"hide-step",mode:"boolean"})],ce.prototype,"hideStep",void 0);h([f],ce.prototype,"placeholder",void 0);h([f],ce.prototype,"list",void 0);h([f({converter:M})],ce.prototype,"maxlength",void 0);h([f({converter:M})],ce.prototype,"minlength",void 0);h([f({converter:M})],ce.prototype,"size",void 0);h([f({converter:M})],ce.prototype,"step",void 0);h([f({converter:M})],ce.prototype,"max",void 0);h([f({converter:M})],ce.prototype,"min",void 0);h([x],ce.prototype,"defaultSlottedNodes",void 0);St(ce,me,Sr);const qd=44,jy=(i,t)=>D`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Et(e=>typeof e.value=="number",D`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${e=>qd*e.percentComplete/100}px ${qd}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,D`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class us extends Z{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}h([f({converter:M})],us.prototype,"value",void 0);h([f({converter:M})],us.prototype,"min",void 0);h([f({converter:M})],us.prototype,"max",void 0);h([f({mode:"boolean"})],us.prototype,"paused",void 0);h([x],us.prototype,"percentComplete",void 0);const Uy=(i,t)=>D`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Et(e=>typeof e.value=="number",D`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,D`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,qy=(i,t)=>D`
    <template
        role="radiogroup"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        @focusout="${(e,s)=>e.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${e=>e.orientation===Vt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ft({property:"slottedRadioButtons",filter:ui("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Ni extends Z{constructor(){super(...arguments),this.orientation=Vt.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Pi,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Li,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in Cs&&this.isInsideFoundationToolbar)return!0;switch(e){case pi:{this.checkFocusedRadio();break}case Pi:case Ae:{this.direction===wt.ltr?this.moveRight(t):this.moveLeft(t);break}case Li:case Ve:{this.direction===wt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=rs(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],Ni.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],Ni.prototype,"disabled",void 0);h([f],Ni.prototype,"name",void 0);h([f],Ni.prototype,"value",void 0);h([f],Ni.prototype,"orientation",void 0);h([x],Ni.prototype,"childItems",void 0);h([x],Ni.prototype,"slottedRadioButtons",void 0);const Wy=(i,t)=>D`
    <template
        role="radio"
        class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}"
        aria-checked="${e=>e.checked}"
        aria-required="${e=>e.required}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        @keypress="${(e,s)=>e.keypressHandler(s.event)}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${t.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Gy extends Z{}class Xy extends Xl(Gy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Tr extends Xy{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case hs:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],Tr.prototype,"readOnly",void 0);h([x],Tr.prototype,"name",void 0);h([x],Tr.prototype,"defaultSlottedNodes",void 0);let vi=class extends Z{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&Q.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+e-o),b=Math.round(u+d);return this.isRtl?-b:(n=b,l===0?0:u)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=n.getBoundingClientRect(),d=r[t],{width:u}=a[t].getBoundingClientRect(),b=d+u,y=l+e>d;if(y||l+c-s<b){const k=(o=[...r].sort((R,V)=>y?V-R:R-V).find(R=>y?R+e<d:R+c-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(k)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([f({converter:M})],vi.prototype,"speed",void 0);h([f],vi.prototype,"duration",void 0);h([f],vi.prototype,"easing",void 0);h([f({attribute:"flippers-hidden-from-at",converter:_o})],vi.prototype,"flippersHiddenFromAT",void 0);h([x],vi.prototype,"scrolling",void 0);h([x],vi.prototype,"scrollItems",void 0);h([f({attribute:"view"})],vi.prototype,"view",void 0);const Yy=(i,t)=>{var e,s;return D`
    <template
        class="horizontal-scroll"
        @keyup="${(o,n)=>o.keyupHandler(n.event)}"
    >
        ${le(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${o=>o.scrolled()}"
                ${ut("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${ut("content")}>
                    <slot
                        ${Ft({property:"scrollItems",filter:ui()})}
                    ></slot>
                </div>
            </div>
            ${Et(o=>o.view!=="mobile",D`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${ut("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${t.previousFlipper instanceof Function?t.previousFlipper(i,t):(e=t.previousFlipper)!==null&&e!==void 0?e:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${ut("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(i,t):(s=t.nextFlipper)!==null&&s!==void 0?s:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${ae(i,t)}
    </template>
`};function sf(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class Jy extends Z{}class Qy extends gi(Jy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Fe=class extends Qy{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&Q.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([f({attribute:"readonly",mode:"boolean"})],Fe.prototype,"readOnly",void 0);h([f({mode:"boolean"})],Fe.prototype,"autofocus",void 0);h([f],Fe.prototype,"placeholder",void 0);h([f],Fe.prototype,"list",void 0);h([f({converter:M})],Fe.prototype,"maxlength",void 0);h([f({converter:M})],Fe.prototype,"minlength",void 0);h([f],Fe.prototype,"pattern",void 0);h([f({converter:M})],Fe.prototype,"size",void 0);h([f({mode:"boolean"})],Fe.prototype,"spellcheck",void 0);h([x],Fe.prototype,"defaultSlottedNodes",void 0);class of{}St(of,$t);St(Fe,me,of);class Zy extends Mo{}class Ky extends gi(Zy){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let yi=class extends Ky{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ro("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,Q.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return J.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const c=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const d=this._options.findIndex(y=>y.value===t),u=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[d])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(d===-1||u!==b)&&(t="",this.selectedIndex=d),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),J.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Ds.above:Ds.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ds.above?~~t.top:~~s}get displayValue(){var t,e;return J.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{J.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{J.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(be.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case hs:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ii:case si:{t.preventDefault();break}case pi:{t.preventDefault(),this.open=!this.open;break}case Gs:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case br:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===Ae||e===Ve)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&J.notify(this,"displayValue")}};h([f({attribute:"open",mode:"boolean"})],yi.prototype,"open",void 0);h([fb],yi.prototype,"collapsible",null);h([x],yi.prototype,"control",void 0);h([f({attribute:"position"})],yi.prototype,"positionAttribute",void 0);h([x],yi.prototype,"position",void 0);h([x],yi.prototype,"maxHeight",void 0);class Jl{}h([x],Jl.prototype,"ariaControls",void 0);St(Jl,Mi);St(yi,me,Jl);const t0=(i,t)=>D`
    <template
        class="${e=>[e.collapsible&&"collapsible",e.collapsible&&e.open&&"open",e.disabled&&"disabled",e.collapsible&&e.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${e=>e.ariaActiveDescendant}"
        aria-controls="${e=>e.ariaControls}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-haspopup="${e=>e.collapsible?"listbox":null}"
        aria-multiselectable="${e=>e.ariaMultiSelectable}"
        ?open="${e=>e.open}"
        role="combobox"
        tabindex="${e=>e.disabled?null:"0"}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @focusout="${(e,s)=>e.focusoutHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        @mousedown="${(e,s)=>e.mousedownHandler(s.event)}"
    >
        ${Et(e=>e.collapsible,D`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${ut("control")}
                >
                    ${le(i,t)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${e=>e.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${t.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${ae(i,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>e.collapsible?!e.open:!1}"
            ${ut("listbox")}
        >
            <slot
                ${Ft({filter:be.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,e0=(i,t)=>D`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${Et(e=>e.shimmer===!0,D`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class No extends Z{constructor(){super(...arguments),this.shape="rect"}}h([f],No.prototype,"fill",void 0);h([f],No.prototype,"shape",void 0);h([f],No.prototype,"pattern",void 0);h([f({mode:"boolean"})],No.prototype,"shimmer",void 0);const i0=(i,t)=>D`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||Vt.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${ut("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${Et(e=>!e.hideMark,D`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function nl(i,t,e,s){let o=vr(0,1,(i-t)/(e-t));return s===wt.rtl&&(o=1-o),o}const gn={min:0,max:0,direction:wt.ltr,orientation:Vt.horizontal,disabled:!1};class xi extends Z{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=wt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=gn.direction||wt.ltr,this.sliderOrientation=gn.orientation,this.sliderMaxPosition=gn.max,this.sliderMinPosition=gn.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||wt.ltr,this.sliderOrientation=n||Vt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:wt.ltr,e=nl(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===Vt.horizontal?t===wt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=J.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([x],xi.prototype,"positionStyle",void 0);h([f],xi.prototype,"position",void 0);h([f({attribute:"hide-mark",mode:"boolean"})],xi.prototype,"hideMark",void 0);h([f({attribute:"disabled",mode:"boolean"})],xi.prototype,"disabled",void 0);h([x],xi.prototype,"sliderOrientation",void 0);h([x],xi.prototype,"sliderMinPosition",void 0);h([x],xi.prototype,"sliderMaxPosition",void 0);h([x],xi.prototype,"sliderDirection",void 0);const s0=(i,t)=>D`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||Vt.horizontal}"
        tabindex="${e=>e.disabled?null:0}"
        aria-valuetext="${e=>e.valueTextFormatter(e.value)}"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        aria-readonly="${e=>e.readOnly?!0:void 0}"
        aria-orientation="${e=>e.orientation}"
        class="${e=>e.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${ut("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${e=>e.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${ut("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class o0 extends Z{}class n0 extends gi(o0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const r0={singleValue:"single-value"};class Qt extends n0{constructor(){super(...arguments),this.direction=wt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Vt.horizontal,this.mode=r0.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===ii)t.preventDefault(),this.value=`${this.min}`;else if(t.key===si)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Pi:case Ve:t.preventDefault(),this.increment();break;case Li:case Ae:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===Vt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=nl(t,this.orientation===Vt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Vt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===Vt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=rs(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==wt.rtl&&this.orientation!==Vt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==wt.rtl&&this.orientation!==Vt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-nl(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===Vt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([f({attribute:"readonly",mode:"boolean"})],Qt.prototype,"readOnly",void 0);h([x],Qt.prototype,"direction",void 0);h([x],Qt.prototype,"isDragging",void 0);h([x],Qt.prototype,"position",void 0);h([x],Qt.prototype,"trackWidth",void 0);h([x],Qt.prototype,"trackMinWidth",void 0);h([x],Qt.prototype,"trackHeight",void 0);h([x],Qt.prototype,"trackLeft",void 0);h([x],Qt.prototype,"trackMinHeight",void 0);h([x],Qt.prototype,"valueTextFormatter",void 0);h([f({converter:M})],Qt.prototype,"min",void 0);h([f({converter:M})],Qt.prototype,"max",void 0);h([f({converter:M})],Qt.prototype,"step",void 0);h([f],Qt.prototype,"orientation",void 0);h([f],Qt.prototype,"mode",void 0);const a0=(i,t)=>D`
    <template
        role="switch"
        aria-checked="${e=>e.checked}"
        aria-disabled="${e=>e.disabled}"
        aria-readonly="${e=>e.readOnly}"
        tabindex="${e=>e.disabled?null:0}"
        @keypress="${(e,s)=>e.keypressHandler(s.event)}"
        @click="${(e,s)=>e.clickHandler(s.event)}"
        class="${e=>e.checked?"checked":""}"
    >
        <label
            part="label"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${t.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`;class l0 extends Z{}class c0 extends Xl(l0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ql extends c0{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case pi:case hs:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([f({attribute:"readonly",mode:"boolean"})],Ql.prototype,"readOnly",void 0);h([x],Ql.prototype,"defaultSlottedNodes",void 0);const d0=(i,t)=>D`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class h0 extends Z{}const u0=(i,t)=>D`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class nf extends Z{}h([f({mode:"boolean"})],nf.prototype,"disabled",void 0);const f0=(i,t)=>D`
    <template class="${e=>e.orientation}">
        ${le(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ft("tabs")}></slot>

            ${Et(e=>e.showActiveIndicator,D`
                    <div
                        ${ut("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ae(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Ft("tabpanels")}></slot>
        </div>
    </template>
`,Wd={vertical:"vertical",horizontal:"horizontal"};class wi extends Z{constructor(){super(...arguments),this.orientation=Wd.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Li:t.preventDefault(),this.adjustBackward(t);break;case Pi:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Ve:t.preventDefault(),this.adjustBackward(t);break;case Ae:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case ii:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case si:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${Ro()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${Ro()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Wd.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=vr(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],wi.prototype,"orientation",void 0);h([f],wi.prototype,"activeid",void 0);h([x],wi.prototype,"tabs",void 0);h([x],wi.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],wi.prototype,"activeindicator",void 0);h([x],wi.prototype,"activeIndicatorRef",void 0);h([x],wi.prototype,"showActiveIndicator",void 0);St(wi,me);class p0 extends Z{}class g0 extends gi(p0){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const rf={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Zt=class extends g0{constructor(){super(...arguments),this.resize=rf.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({mode:"boolean"})],Zt.prototype,"readOnly",void 0);h([f],Zt.prototype,"resize",void 0);h([f({mode:"boolean"})],Zt.prototype,"autofocus",void 0);h([f({attribute:"form"})],Zt.prototype,"formId",void 0);h([f],Zt.prototype,"list",void 0);h([f({converter:M})],Zt.prototype,"maxlength",void 0);h([f({converter:M})],Zt.prototype,"minlength",void 0);h([f],Zt.prototype,"name",void 0);h([f],Zt.prototype,"placeholder",void 0);h([f({converter:M,mode:"fromView"})],Zt.prototype,"cols",void 0);h([f({converter:M,mode:"fromView"})],Zt.prototype,"rows",void 0);h([f({mode:"boolean"})],Zt.prototype,"spellcheck",void 0);h([x],Zt.prototype,"defaultSlottedNodes",void 0);St(Zt,Sr);const m0=(i,t)=>D`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==rf.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,s)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${ut("control")}
        ></textarea>
    </template>
`,b0=(i,t)=>D`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ft({property:"defaultSlottedNodes",filter:sf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${le(i,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${ut("control")}
            />
            ${ae(i,t)}
        </div>
    </template>
`,v0=(i,t)=>D`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${mr({property:"childItems",attributeFilter:["disabled","hidden"],filter:ui(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${le(i,t)}
            <slot
                ${Ft({filter:ui(),property:"slottedItems"})}
            ></slot>
            ${ae(i,t)}
        </div>
    </template>
`,Gd=Object.freeze({[Cs.ArrowUp]:{[Vt.vertical]:-1},[Cs.ArrowDown]:{[Vt.vertical]:1},[Cs.ArrowLeft]:{[Vt.horizontal]:{[wt.ltr]:-1,[wt.rtl]:1}},[Cs.ArrowRight]:{[Vt.horizontal]:{[wt.ltr]:1,[wt.rtl]:-1}}});let zi=class rl extends Z{constructor(){super(...arguments),this._activeIndex=0,this.direction=wt.ltr,this.orientation=Vt.horizontal}get activeIndex(){return J.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=vr(0,this.focusableElements.length-1,t),J.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=rs(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=Gd[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=Gd[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in Cs)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(rl.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,c=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Ud(d));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(Ud(e)||a||l||c)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(rl.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};h([x],zi.prototype,"direction",void 0);h([f],zi.prototype,"orientation",void 0);h([x],zi.prototype,"slottedItems",void 0);h([x],zi.prototype,"slottedLabel",void 0);h([x],zi.prototype,"childItems",void 0);class Ir{}h([f({attribute:"aria-labelledby"})],Ir.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Ir.prototype,"ariaLabel",void 0);St(Ir,$t);St(zi,me,Ir);const y0=(i,t)=>D`
        ${Et(e=>e.tooltipVisible,D`
            <${i.tagFor(Y)}
                fixed-placement="true"
                auto-update-mode="${e=>e.autoUpdateMode}"
                vertical-positioning-mode="${e=>e.verticalPositioningMode}"
                vertical-default-position="${e=>e.verticalDefaultPosition}"
                vertical-inset="${e=>e.verticalInset}"
                vertical-scaling="${e=>e.verticalScaling}"
                horizontal-positioning-mode="${e=>e.horizontalPositioningMode}"
                horizontal-default-position="${e=>e.horizontalDefaultPosition}"
                horizontal-scaling="${e=>e.horizontalScaling}"
                horizontal-inset="${e=>e.horizontalInset}"
                vertical-viewport-lock="${e=>e.horizontalViewportLock}"
                horizontal-viewport-lock="${e=>e.verticalViewportLock}"
                dir="${e=>e.currentDirection}"
                ${ut("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${i.tagFor(Y)}>
        `)}
    `,ue={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Ht=class extends Z{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=wt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Gs:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=rs(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Q.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ue.top:case ue.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ue.right:case ue.left:case ue.start:case ue.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ue.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ue.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ue.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ue.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ue.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ue.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ue.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ue.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([f({mode:"boolean"})],Ht.prototype,"visible",void 0);h([f],Ht.prototype,"anchor",void 0);h([f],Ht.prototype,"delay",void 0);h([f],Ht.prototype,"position",void 0);h([f({attribute:"auto-update-mode"})],Ht.prototype,"autoUpdateMode",void 0);h([f({attribute:"horizontal-viewport-lock"})],Ht.prototype,"horizontalViewportLock",void 0);h([f({attribute:"vertical-viewport-lock"})],Ht.prototype,"verticalViewportLock",void 0);h([x],Ht.prototype,"anchorElement",void 0);h([x],Ht.prototype,"viewportElement",void 0);h([x],Ht.prototype,"verticalPositioningMode",void 0);h([x],Ht.prototype,"horizontalPositioningMode",void 0);h([x],Ht.prototype,"horizontalInset",void 0);h([x],Ht.prototype,"verticalInset",void 0);h([x],Ht.prototype,"horizontalScaling",void 0);h([x],Ht.prototype,"verticalScaling",void 0);h([x],Ht.prototype,"verticalDefaultPosition",void 0);h([x],Ht.prototype,"horizontalDefaultPosition",void 0);h([x],Ht.prototype,"tooltipVisible",void 0);h([x],Ht.prototype,"currentDirection",void 0);const x0=(i,t)=>D`
    <template
        role="treeitem"
        slot="${e=>e.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${e=>e.expanded?"expanded":""} ${e=>e.selected?"selected":""} ${e=>e.nested?"nested":""}
            ${e=>e.disabled?"disabled":""}"
        aria-expanded="${e=>e.childItems&&e.childItemLength()>0?e.expanded:void 0}"
        aria-selected="${e=>e.selected}"
        aria-disabled="${e=>e.disabled}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        ${mr({property:"childItems",filter:ui()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Et(e=>e.childItems&&e.childItemLength()>0,D`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,s)=>e.handleExpandCollapseButtonClick(s.event)}"
                            ${ut("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${le(i,t)}
                <slot></slot>
                ${ae(i,t)}
            </div>
        </div>
        ${Et(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),D`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Ft("items")}></slot>
                </div>
            `)}
    </template>
`;function Di(i){return Ps(i)&&i.getAttribute("role")==="treeitem"}class Mt extends Z{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Di(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{Di(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>Di(e));return t?t.length:0}}h([f({mode:"boolean"})],Mt.prototype,"expanded",void 0);h([f({mode:"boolean"})],Mt.prototype,"selected",void 0);h([f({mode:"boolean"})],Mt.prototype,"disabled",void 0);h([x],Mt.prototype,"focusable",void 0);h([x],Mt.prototype,"childItems",void 0);h([x],Mt.prototype,"items",void 0);h([x],Mt.prototype,"nested",void 0);h([x],Mt.prototype,"renderCollapsedChildren",void 0);St(Mt,me);const w0=(i,t)=>D`
    <template
        role="tree"
        ${ut("treeView")}
        @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        @click="${(e,s)=>e.handleClick(s.event)}"
        @selected-change="${(e,s)=>e.handleSelectedChange(s.event)}"
    >
        <slot ${Ft("slottedTreeItems")}></slot>
    </template>
`;class Rr extends Z{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Mt.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case ii:e.length&&Mt.focusItem(e[0]);return;case si:e.length&&Mt.focusItem(e[e.length-1]);return;case Li:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Mt&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof Mt&&s.parentElement instanceof Mt&&Mt.focusItem(s.parentElement)}return!1;case Pi:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Mt&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof Mt&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Ae:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Ve:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case pi:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Di(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>Di(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),Q.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Ps(o)&&Mt.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Di(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return vv(this,"[role='treeitem']")||[]}}h([f({attribute:"render-collapsed-nodes"})],Rr.prototype,"renderCollapsedNodes",void 0);h([x],Rr.prototype,"currentSelected",void 0);h([x],Rr.prototype,"slottedTreeItems",void 0);class $0{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class zo extends $0{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new zo(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const at=zo.with(window.matchMedia("(forced-colors)"));zo.with(window.matchMedia("(prefers-color-scheme: dark)"));zo.with(window.matchMedia("(prefers-color-scheme: light)"));class C0{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){J.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){J.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Pe="not-allowed",k0=":host([hidden]){display:none}";function lt(i){return`${k0}:host{display:${i}}`}const K=xv()?"focus-visible":"focus";function Ki(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function Ea(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Ji(i,t,e){return isNaN(i)?t:t+i*(e-t)}function F0(i){const t=Math.round(Ki(i,0,255)).toString(16);return t.length===1?"0"+t:t}function mn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function ne(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class Oo{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Oo(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Oo(ne(this.h,t),ne(this.s,t),ne(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ut{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Ut(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ut(ne(this.l,t),ne(this.a,t),ne(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ut.epsilon=216/24389;Ut.kappa=24389/27;class Pt{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new Pt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ji(this.r,0,255))},${Math.round(Ji(this.g,0,255))},${Math.round(Ji(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ji(this.r,0,255))},${Math.round(Ji(this.g,0,255))},${Math.round(Ji(this.b,0,255))},${Ki(this.a,0,1)})`}roundToPrecision(t){return new Pt(ne(this.r,t),ne(this.g,t),ne(this.b,t),ne(this.a,t))}clamp(){return new Pt(Ki(this.r,0,1),Ki(this.g,0,1),Ki(this.b,0,1),Ki(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return F0(Ji(t,0,255))}}class xe{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new xe(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new xe(ne(this.x,t),ne(this.y,t),ne(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}xe.whitePoint=new xe(.95047,1,1.08883);function S0(i){return i.r*.2126+i.g*.7152+i.b*.0722}function af(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return S0(new Pt(t(i.r),t(i.g),t(i.b),1))}function Oa(i,t,e){return e-t===0?0:(i-t)/(e-t)}function Aa(i,t,e){const s=Oa(i.r,t.r,e.r),o=Oa(i.g,t.g,e.g),n=Oa(i.b,t.b,e.b);return(s+o+n)/3}function T0(i,t,e=null){let s=0,o=e;return o!==null?s=Aa(i,t,o):(o=new Pt(0,0,0,1),s=Aa(i,t,o),s<=0&&(o=new Pt(1,1,1,1),s=Aa(i,t,o))),s=Math.round(s*1e3)/1e3,new Pt(o.r,o.g,o.b,s)}function Xd(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new Oo(o,r,n)}function I0(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new Pt(n+o,r+o,a+o,t)}function R0(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Ut.epsilon?a=o:a=(116*e-16)/Ut.kappa;let l=0;i.l>Ut.epsilon*Ut.kappa?l=n:l=i.l/Ut.kappa;let c=0;return r>Ut.epsilon?c=r:c=(116*s-16)/Ut.kappa,a=xe.whitePoint.x*a,l=xe.whitePoint.y*l,c=xe.whitePoint.z*c,new xe(a,l,c)}function D0(i){function t(l){return l>Ut.epsilon?Math.pow(l,1/3):(Ut.kappa*l+16)/116}const e=t(i.x/xe.whitePoint.x),s=t(i.y/xe.whitePoint.y),o=t(i.z/xe.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Ut(n,r,a)}function E0(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new xe(n,r,a)}function O0(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new Pt(s,o,n,t)}function A0(i){return D0(E0(i))}function Va(i,t=1){return O0(R0(i),t)}var Yd;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(Yd||(Yd={}));function V0(i,t){if(t.a>=1)return t;if(t.a<=0)return new Pt(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new Pt(e,s,o,1)}function bn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Pt(mn(i,t.r,e.r),mn(i,t.g,e.g),mn(i,t.b,e.b),mn(i,t.a,e.a))}var Jd;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(Jd||(Jd={}));const L0=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function os(i){const t=L0.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new Pt(Ea((s&16711680)>>>16,0,255),Ea((s&65280)>>>8,0,255),Ea(s&255,0,255),1)}function Yn(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Oe=Object.freeze({create(i,t,e){return new Jn(i,t,e)},from(i){return new Jn(i.r,i.g,i.b)}});function P0(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class Jn extends Pt{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Yn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=af(this)}static fromObject(t){return new Jn(t.r,t.g,t.b)}}function al(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?al(i,t,e,o):al(i,t,o+1,s)}const _0=(-.1+Math.sqrt(.21))/2;function Bo(i){return i.relativeLuminance<=_0}function fs(i){return Bo(i)?-1:1}const Qd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function H0(i,t,e){return typeof i=="number"?Ao.from(Oe.create(i,t,e)):Ao.from(i)}function M0(i,t){return P0(i)?Ze.from(i,t):Ze.from(Oe.create(i.r,i.g,i.b),t)}const Ao=Object.freeze({create:H0,from:M0});class Ze{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=fs(t));const l=c=>Yn(t,c)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),al(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[Ki(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=Xd(t).s,n=Xd(e);if(n.s<o){const r=new Oo(n.h,o,n.l);return I0(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=A0(Pt.fromObject(t).roundToPrecision(4)),o=Va(new Ut(0,s.a,s.b)).clamp().roundToPrecision(4),n=Va(new Ut(50,s.a,s.b)).clamp().roundToPrecision(4),r=Va(new Ut(100,s.a,s.b)).clamp().roundToPrecision(4),a=new Pt(0,0,0),l=new Pt(1,1,1),c=r.equalValue(l)?0:14,d=o.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let b;if(u<0){const y=u/d+1;b=bn(y,a,o)}else if(u<=50)b=bn(Ze.ramp(u),o,n);else if(u<=100)b=bn(Ze.ramp(u),n,r);else{const y=(u-100)/c;b=bn(y,r,l)}b=Ze.saturationBump(n,b).roundToPrecision(4),e.push(Oe.from(b))}return new Ze(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=c=>{const d=e.closestIndexOf(c);return o===1?e.lastIndex-d:d};o===1&&s.reverse();const a=t(s[s.length-2]);if(ne(Yn(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=e.colorContrast(n[e.lastIndex],a,void 0,o),d=r(c),u=r(s[s.length-2]),b=d-u;let y=1;for(let C=s.length-b-1;C<s.length;C++){const k=r(s[C]),R=C===s.length-1?e.lastIndex:k+y;s[C]=n[R],y++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=Ze.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return ne(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?Qd:Object.assign(Object.assign({},Qd),e);return new Ze(t,Object.freeze(Ze.createColorPaletteByContrast(t,s)))}}const Qn=Oe.create(1,1,1),Zl=Oe.create(0,0,0),N0=Oe.create(.5,.5,.5),La=os("#0078D4"),z0=Oe.create(La.r,La.g,La.b);function lf(i,t,e,s,o){const n=d=>d.contrast(Qn)>=o?Qn:Zl,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),c=n(s);return{rest:r,hover:a,active:l,focus:c}}class Dr{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=Yn.bind(null,this),this.createCSS=this.toColorString,this.color=new Pt(t,e,s),this.cssGradient=o,this.relativeLuminance=af(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new Dr(t.r,t.g,t.b,e)}}const B0=new Pt(0,0,0),j0=new Pt(1,1,1);function cf(i,t,e,s,o,n,r,a,l=10,c=!1){const d=i.closestIndexOf(t);a===void 0&&(a=fs(t));function u(W){if(c){const nt=i.closestIndexOf(t),bt=i.get(nt),it=W.relativeLuminance<t.relativeLuminance?B0:j0,de=T0(os(W.toColorString()),os(bt.toColorString()),it).roundToPrecision(2),he=V0(os(t.toColorString()),de);return Oe.from(he)}else return W}const b=d+a*e,y=b+a*(s-e),C=b+a*(o-e),k=b+a*(n-e),R=a===-1?0:100-l,V=a===-1?l:100;function j(W,nt){const bt=i.get(W);if(nt){const it=i.get(W+a*r),de=a===-1?it:bt,he=a===-1?bt:it,to=`linear-gradient(${u(de).toColorString()} ${R}%, ${u(he).toColorString()} ${V}%)`;return Dr.fromObject(de,to)}else return u(bt)}return{rest:j(b,!0),hover:j(y,!0),active:j(C,!1),focus:j(k,!0)}}function U0(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),c=fs(t),d=l+c*e,u=d+c*(s-e),b=d+c*(o-e),y=d+c*(n-e),C=`calc(100% - ${a})`;function k(R,V){const j=i.get(R);if(V){const W=i.get(R+c*r),nt=`linear-gradient(${j.toColorString()} ${C}, ${W.toColorString()} ${C}, ${W.toColorString()})`;return Dr.fromObject(j,nt)}else return j}return{rest:k(d,!0),hover:k(u,!0),active:k(b,!1),focus:k(y,!0)}}function q0(i,t,e){return i.colorContrast(t,e)}function Ms(i,t,e,s,o,n,r,a){a==null&&(a=fs(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function W0(i,t,e,s,o,n,r,a=void 0,l,c,d,u,b,y=void 0){return Bo(t)?Ms(i,t,l,c,d,u,b,y):Ms(i,t,e,s,o,n,r,a)}function G0(i,t,e){return i.get(i.closestIndexOf(t)+fs(t)*e)}function _i(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=fs(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function Kl(i,t,e,s,o,n,r=void 0,a,l,c,d,u=void 0){return Bo(t)?_i(i,t,a,l,c,d,u):_i(i,t,e,s,o,n,r)}function X0(i,t){return Bo(t)?Qn:Zl}function Y0(i,t,e){return Bo(t)?Zl:Qn}function J0(i){return Oe.create(i,i,i)}var ll;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(ll||(ll={}));function jo(i,t){return i.closestIndexOf(J0(t))}function Q0(i,t){return i.get(jo(i,t))}function Z0(i,t,e){return i.get(jo(i,t)+e)}function df(i,t,e){return i.get(jo(i,t)+e*-1)}function K0(i,t,e){return i.get(jo(i,t)+e*-1*2)}function tx(i,t,e){return i.get(jo(i,t)+e*-1*3)}const ex={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=mt;function A(i){return mt.create({name:i,cssCustomPropertyName:null})}const Ln=v("direction").withDefault(wt.ltr),Se=v("disabled-opacity").withDefault(.3),Er=v("base-height-multiplier").withDefault(8),ix=v("base-horizontal-spacing-multiplier").withDefault(3),Bi=v("density").withDefault(0),H=v("design-unit").withDefault(4),pt=v("control-corner-radius").withDefault(4),li=v("layer-corner-radius").withDefault(8),U=v("stroke-width").withDefault(1),Jt=v("focus-stroke-width").withDefault(2),_e=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),sx=v("font-weight").withDefault(ex.Normal);function $i(i){return t=>{const e=i.getValueFor(t),s=sx.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const Or=v("type-ramp-base-font-size").withDefault("14px"),hf=v("type-ramp-base-line-height").withDefault("20px"),ox=v("type-ramp-base-font-variations").withDefault($i(Or)),tc=v("type-ramp-minus-1-font-size").withDefault("12px"),ec=v("type-ramp-minus-1-line-height").withDefault("16px"),nx=v("type-ramp-minus-1-font-variations").withDefault($i(tc)),ic=v("type-ramp-minus-2-font-size").withDefault("10px"),uf=v("type-ramp-minus-2-line-height").withDefault("14px"),rx=v("type-ramp-minus-2-font-variations").withDefault($i(ic)),sc=v("type-ramp-plus-1-font-size").withDefault("16px"),ff=v("type-ramp-plus-1-line-height").withDefault("22px"),ax=v("type-ramp-plus-1-font-variations").withDefault($i(sc)),Ar=v("type-ramp-plus-2-font-size").withDefault("20px"),pf=v("type-ramp-plus-2-line-height").withDefault("26px"),lx=v("type-ramp-plus-2-font-variations").withDefault($i(Ar)),oc=v("type-ramp-plus-3-font-size").withDefault("24px"),gf=v("type-ramp-plus-3-line-height").withDefault("32px"),cx=v("type-ramp-plus-3-font-variations").withDefault($i(oc)),nc=v("type-ramp-plus-4-font-size").withDefault("28px"),mf=v("type-ramp-plus-4-line-height").withDefault("36px"),dx=v("type-ramp-plus-4-font-variations").withDefault($i(nc)),rc=v("type-ramp-plus-5-font-size").withDefault("32px"),bf=v("type-ramp-plus-5-line-height").withDefault("40px"),hx=v("type-ramp-plus-5-font-variations").withDefault($i(rc)),ac=v("type-ramp-plus-6-font-size").withDefault("40px"),vf=v("type-ramp-plus-6-line-height").withDefault("52px"),ux=v("type-ramp-plus-6-font-variations").withDefault($i(ac)),ps=v("base-layer-luminance").withDefault(ll.LightMode),cl=A("accent-fill-rest-delta").withDefault(0),dl=A("accent-fill-hover-delta").withDefault(-2),hl=A("accent-fill-active-delta").withDefault(-5),ul=A("accent-fill-focus-delta").withDefault(0),yf=A("accent-foreground-rest-delta").withDefault(0),xf=A("accent-foreground-hover-delta").withDefault(3),wf=A("accent-foreground-active-delta").withDefault(-8),$f=A("accent-foreground-focus-delta").withDefault(0),Cf=A("neutral-fill-rest-delta").withDefault(-1),kf=A("neutral-fill-hover-delta").withDefault(1),Ff=A("neutral-fill-active-delta").withDefault(0),Sf=A("neutral-fill-focus-delta").withDefault(0),Tf=A("neutral-fill-input-rest-delta").withDefault(-1),If=A("neutral-fill-input-hover-delta").withDefault(1),Rf=A("neutral-fill-input-active-delta").withDefault(0),Df=A("neutral-fill-input-focus-delta").withDefault(-2),vn=A("neutral-fill-input-alt-rest-delta").withDefault(2),Zd=A("neutral-fill-input-alt-hover-delta").withDefault(4),Kd=A("neutral-fill-input-alt-active-delta").withDefault(6),th=A("neutral-fill-input-alt-focus-delta").withDefault(2),Hi=A("neutral-fill-layer-rest-delta").withDefault(-2),fx=A("neutral-fill-layer-hover-delta").withDefault(-3),px=A("neutral-fill-layer-active-delta").withDefault(-3),yn=A("neutral-fill-layer-alt-rest-delta").withDefault(-1),gx=A("neutral-fill-secondary-rest-delta").withDefault(3),mx=A("neutral-fill-secondary-hover-delta").withDefault(2),bx=A("neutral-fill-secondary-active-delta").withDefault(1),vx=A("neutral-fill-secondary-focus-delta").withDefault(3),Ef=A("neutral-fill-stealth-rest-delta").withDefault(0),Of=A("neutral-fill-stealth-hover-delta").withDefault(3),Af=A("neutral-fill-stealth-active-delta").withDefault(2),Vf=A("neutral-fill-stealth-focus-delta").withDefault(0),yx=A("neutral-fill-strong-rest-delta").withDefault(0),Lf=A("neutral-fill-strong-hover-delta").withDefault(8),Pf=A("neutral-fill-strong-active-delta").withDefault(-5),_f=A("neutral-fill-strong-focus-delta").withDefault(0),Hf=A("neutral-stroke-rest-delta").withDefault(8),Mf=A("neutral-stroke-hover-delta").withDefault(12),Nf=A("neutral-stroke-active-delta").withDefault(6),zf=A("neutral-stroke-focus-delta").withDefault(8),Bf=A("neutral-stroke-control-rest-delta").withDefault(3),jf=A("neutral-stroke-control-hover-delta").withDefault(5),Uf=A("neutral-stroke-control-active-delta").withDefault(5),qf=A("neutral-stroke-control-focus-delta").withDefault(5),Wf=A("neutral-stroke-divider-rest-delta").withDefault(4),eh=A("neutral-stroke-layer-rest-delta").withDefault(3),xx=A("neutral-stroke-layer-hover-delta").withDefault(3),wx=A("neutral-stroke-layer-active-delta").withDefault(3),$x=A("neutral-stroke-strong-hover-delta").withDefault(0),Cx=A("neutral-stroke-strong-active-delta").withDefault(0),kx=A("neutral-stroke-strong-focus-delta").withDefault(0),Gf=v("neutral-base-color").withDefault(N0),Ct=A("neutral-palette").withDefault(i=>Ao.from(Gf.getValueFor(i))),Xf=v("accent-base-color").withDefault(z0),lc=A("accent-palette").withDefault(i=>Ao.from(Xf.getValueFor(i))),Fx=A("neutral-layer-card-container-recipe").withDefault({evaluate:i=>df(Ct.getValueFor(i),ps.getValueFor(i),Hi.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>Fx.getValueFor(i).evaluate(i));const Sx=A("neutral-layer-floating-recipe").withDefault({evaluate:i=>Z0(Ct.getValueFor(i),ps.getValueFor(i),Hi.getValueFor(i))}),Uo=v("neutral-layer-floating").withDefault(i=>Sx.getValueFor(i).evaluate(i)),Tx=A("neutral-layer-1-recipe").withDefault({evaluate:i=>Q0(Ct.getValueFor(i),ps.getValueFor(i))}),Ix=v("neutral-layer-1").withDefault(i=>Tx.getValueFor(i).evaluate(i)),Rx=A("neutral-layer-2-recipe").withDefault({evaluate:i=>df(Ct.getValueFor(i),ps.getValueFor(i),Hi.getValueFor(i))});v("neutral-layer-2").withDefault(i=>Rx.getValueFor(i).evaluate(i));const Dx=A("neutral-layer-3-recipe").withDefault({evaluate:i=>K0(Ct.getValueFor(i),ps.getValueFor(i),Hi.getValueFor(i))});v("neutral-layer-3").withDefault(i=>Dx.getValueFor(i).evaluate(i));const Ex=A("neutral-layer-4-recipe").withDefault({evaluate:i=>tx(Ct.getValueFor(i),ps.getValueFor(i),Hi.getValueFor(i))});v("neutral-layer-4").withDefault(i=>Ex.getValueFor(i).evaluate(i));const ot=v("fill-color").withDefault(i=>Ix.getValueFor(i));var Zn;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(Zn||(Zn={}));const Vr=A("accent-fill-recipe").withDefault({evaluate:(i,t)=>W0(lc.getValueFor(i),t||ot.getValueFor(i),5,cl.getValueFor(i),dl.getValueFor(i),hl.getValueFor(i),ul.getValueFor(i),void 0,8,cl.getValueFor(i),dl.getValueFor(i),hl.getValueFor(i),ul.getValueFor(i),void 0)}),yt=v("accent-fill-rest").withDefault(i=>Vr.getValueFor(i).evaluate(i).rest),We=v("accent-fill-hover").withDefault(i=>Vr.getValueFor(i).evaluate(i).hover),Ge=v("accent-fill-active").withDefault(i=>Vr.getValueFor(i).evaluate(i).active),Lr=v("accent-fill-focus").withDefault(i=>Vr.getValueFor(i).evaluate(i).focus),Pr=A("foreground-on-accent-recipe").withDefault({evaluate:i=>lf(yt.getValueFor(i),We.getValueFor(i),Ge.getValueFor(i),Lr.getValueFor(i),Zn.normal)}),as=v("foreground-on-accent-rest").withDefault(i=>Pr.getValueFor(i).evaluate(i).rest),Yf=v("foreground-on-accent-hover").withDefault(i=>Pr.getValueFor(i).evaluate(i).hover),Jf=v("foreground-on-accent-active").withDefault(i=>Pr.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>Pr.getValueFor(i).evaluate(i).focus);const _r=A("accent-foreground-recipe").withDefault({evaluate:(i,t)=>Ms(lc.getValueFor(i),t||ot.getValueFor(i),9.5,yf.getValueFor(i),xf.getValueFor(i),wf.getValueFor(i),$f.getValueFor(i))}),Qf=v("accent-foreground-rest").withDefault(i=>_r.getValueFor(i).evaluate(i).rest),Zf=v("accent-foreground-hover").withDefault(i=>_r.getValueFor(i).evaluate(i).hover),Kf=v("accent-foreground-active").withDefault(i=>_r.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>_r.getValueFor(i).evaluate(i).focus);const Hr=A("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>cf(Ct.getValueFor(i),t||ot.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),Ox=v("accent-stroke-control-rest").withDefault(i=>Hr.getValueFor(i).evaluate(i,yt.getValueFor(i)).rest),Ax=v("accent-stroke-control-hover").withDefault(i=>Hr.getValueFor(i).evaluate(i,We.getValueFor(i)).hover),Vx=v("accent-stroke-control-active").withDefault(i=>Hr.getValueFor(i).evaluate(i,Ge.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>Hr.getValueFor(i).evaluate(i,Lr.getValueFor(i)).focus);const Mr=A("neutral-fill-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),Cf.getValueFor(i),kf.getValueFor(i),Ff.getValueFor(i),Sf.getValueFor(i),void 0,2,3,1,2,void 0)}),Ie=v("neutral-fill-rest").withDefault(i=>Mr.getValueFor(i).evaluate(i).rest),ih=v("neutral-fill-hover").withDefault(i=>Mr.getValueFor(i).evaluate(i).hover),sh=v("neutral-fill-active").withDefault(i=>Mr.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>Mr.getValueFor(i).evaluate(i).focus);const ji=A("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),Tf.getValueFor(i),If.getValueFor(i),Rf.getValueFor(i),Df.getValueFor(i),void 0,2,3,1,0,void 0)}),xn=v("neutral-fill-input-rest").withDefault(i=>ji.getValueFor(i).evaluate(i).rest),oh=v("neutral-fill-input-hover").withDefault(i=>ji.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>ji.getValueFor(i).evaluate(i).active);const nh=v("neutral-fill-input-focus").withDefault(i=>ji.getValueFor(i).evaluate(i).focus),Nr=A("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),vn.getValueFor(i),Zd.getValueFor(i),Kd.getValueFor(i),th.getValueFor(i),1,vn.getValueFor(i),vn.getValueFor(i)-Zd.getValueFor(i),vn.getValueFor(i)-Kd.getValueFor(i),th.getValueFor(i),1)}),cc=v("neutral-fill-input-alt-rest").withDefault(i=>Nr.getValueFor(i).evaluate(i).rest),dc=v("neutral-fill-input-alt-hover").withDefault(i=>Nr.getValueFor(i).evaluate(i).hover),hc=v("neutral-fill-input-alt-active").withDefault(i=>Nr.getValueFor(i).evaluate(i).active),uc=v("neutral-fill-input-alt-focus").withDefault(i=>Nr.getValueFor(i).evaluate(i).focus),gs=A("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),Hi.getValueFor(i),fx.getValueFor(i),px.getValueFor(i),Hi.getValueFor(i),1)}),Lx=v("neutral-fill-layer-rest").withDefault(i=>gs.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>gs.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>gs.getValueFor(i).evaluate(i).active);const Px=A("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i))}),_x=v("neutral-fill-layer-alt-rest").withDefault(i=>Px.getValueFor(i).evaluate(i).rest),ms=A("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),gx.getValueFor(i),mx.getValueFor(i),bx.getValueFor(i),vx.getValueFor(i))}),ls=v("neutral-fill-secondary-rest").withDefault(i=>ms.getValueFor(i).evaluate(i).rest),fc=v("neutral-fill-secondary-hover").withDefault(i=>ms.getValueFor(i).evaluate(i).hover),Hx=v("neutral-fill-secondary-active").withDefault(i=>ms.getValueFor(i).evaluate(i).active),Mx=v("neutral-fill-secondary-focus").withDefault(i=>ms.getValueFor(i).evaluate(i).focus),Xe=A("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),Ef.getValueFor(i),Of.getValueFor(i),Af.getValueFor(i),Vf.getValueFor(i))}),Ns=v("neutral-fill-stealth-rest").withDefault(i=>Xe.getValueFor(i).evaluate(i).rest),zs=v("neutral-fill-stealth-hover").withDefault(i=>Xe.getValueFor(i).evaluate(i).hover),Bs=v("neutral-fill-stealth-active").withDefault(i=>Xe.getValueFor(i).evaluate(i).active),Nx=v("neutral-fill-stealth-focus").withDefault(i=>Xe.getValueFor(i).evaluate(i).focus),zr=A("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>Ms(Ct.getValueFor(i),t||ot.getValueFor(i),4.5,yx.getValueFor(i),Lf.getValueFor(i),Pf.getValueFor(i),_f.getValueFor(i))}),tp=v("neutral-fill-strong-rest").withDefault(i=>zr.getValueFor(i).evaluate(i).rest),zx=v("neutral-fill-strong-hover").withDefault(i=>zr.getValueFor(i).evaluate(i).hover),Bx=v("neutral-fill-strong-active").withDefault(i=>zr.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>zr.getValueFor(i).evaluate(i).focus);const Br=A("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>Ms(Ct.getValueFor(i),t||ot.getValueFor(i),16,0,-19,-30,0)}),gt=v("neutral-foreground-rest").withDefault(i=>Br.getValueFor(i).evaluate(i).rest),jx=v("neutral-foreground-hover").withDefault(i=>Br.getValueFor(i).evaluate(i).hover),Ux=v("neutral-foreground-active").withDefault(i=>Br.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>Br.getValueFor(i).evaluate(i).focus);const qo=A("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>q0(Ct.getValueFor(i),t||ot.getValueFor(i),4.5)}),js=v("neutral-foreground-hint").withDefault(i=>qo.getValueFor(i).evaluate(i)),jr=A("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),Hf.getValueFor(i),Mf.getValueFor(i),Nf.getValueFor(i),zf.getValueFor(i))}),Vo=v("neutral-stroke-rest").withDefault(i=>jr.getValueFor(i).evaluate(i).rest),qx=v("neutral-stroke-hover").withDefault(i=>jr.getValueFor(i).evaluate(i).hover),Wx=v("neutral-stroke-active").withDefault(i=>jr.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>jr.getValueFor(i).evaluate(i).focus);const Ur=A("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>cf(Ct.getValueFor(i),t||ot.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),Uf.getValueFor(i),qf.getValueFor(i),5)}),pc=v("neutral-stroke-control-rest").withDefault(i=>Ur.getValueFor(i).evaluate(i).rest),ep=v("neutral-stroke-control-hover").withDefault(i=>Ur.getValueFor(i).evaluate(i).hover),ip=v("neutral-stroke-control-active").withDefault(i=>Ur.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>Ur.getValueFor(i).evaluate(i).focus);const Gx=A("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>G0(Ct.getValueFor(i),t||ot.getValueFor(i),Wf.getValueFor(i))}),Kn=v("neutral-stroke-divider-rest").withDefault(i=>Gx.getValueFor(i).evaluate(i)),qr=A("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>U0(Ct.getValueFor(i),t||ot.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),Uf.getValueFor(i),qf.getValueFor(i),20,U.getValueFor(i)+"px")}),rh=v("neutral-stroke-input-rest").withDefault(i=>qr.getValueFor(i).evaluate(i).rest),Xx=v("neutral-stroke-input-hover").withDefault(i=>qr.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>qr.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>qr.getValueFor(i).evaluate(i).focus);const gc=A("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>_i(Ct.getValueFor(i),t||ot.getValueFor(i),eh.getValueFor(i),xx.getValueFor(i),wx.getValueFor(i),eh.getValueFor(i))}),Os=v("neutral-stroke-layer-rest").withDefault(i=>gc.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>gc.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>gc.getValueFor(i).evaluate(i).active);const Wr=A("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>Ms(Ct.getValueFor(i),t||ot.getValueFor(i),5.5,0,$x.getValueFor(i),Cx.getValueFor(i),kx.getValueFor(i))}),Ys=v("neutral-stroke-strong-rest").withDefault(i=>Wr.getValueFor(i).evaluate(i).rest),mc=v("neutral-stroke-strong-hover").withDefault(i=>Wr.getValueFor(i).evaluate(i).hover),bc=v("neutral-stroke-strong-active").withDefault(i=>Wr.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>Wr.getValueFor(i).evaluate(i).focus);const Yx=A("focus-stroke-outer-recipe").withDefault({evaluate:i=>X0(Ct.getValueFor(i),ot.getValueFor(i))}),Gr=v("focus-stroke-outer").withDefault(i=>Yx.getValueFor(i).evaluate(i)),Jx=A("focus-stroke-inner-recipe").withDefault({evaluate:i=>Y0(lc.getValueFor(i),ot.getValueFor(i),Gr.getValueFor(i))}),Qx=v("focus-stroke-inner").withDefault(i=>Jx.getValueFor(i).evaluate(i)),Xr=A("foreground-on-accent-large-recipe").withDefault({evaluate:i=>lf(yt.getValueFor(i),We.getValueFor(i),Ge.getValueFor(i),Lr.getValueFor(i),Zn.large)});v("foreground-on-accent-rest-large").withDefault(i=>Xr.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>Xr.getValueFor(i).evaluate(i,We.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>Xr.getValueFor(i).evaluate(i,Ge.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>Xr.getValueFor(i).evaluate(i,Lr.getValueFor(i)).focus);const Zx=v("neutral-fill-inverse-rest-delta").withDefault(0),Kx=v("neutral-fill-inverse-hover-delta").withDefault(-3),tw=v("neutral-fill-inverse-active-delta").withDefault(7),ew=v("neutral-fill-inverse-focus-delta").withDefault(0);function iw(i,t,e,s,o,n){const r=fs(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),c=r===1?e<s:r*e>r*s;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:i.get(d),hover:i.get(u),active:i.get(d+r*o),focus:i.get(d+r*n)}}const Yr=A("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>iw(Ct.getValueFor(i),t||ot.getValueFor(i),Zx.getValueFor(i),Kx.getValueFor(i),tw.getValueFor(i),ew.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>Yr.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>Yr.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>Yr.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>Yr.getValueFor(i).evaluate(i).focus);const At=we`
  font-family: ${_e};
  font-size: ${Or};
  line-height: ${hf};
  font-weight: initial;
  font-variation-settings: ${ox};
`,sp=we`
  font-family: ${_e};
  font-size: ${tc};
  line-height: ${ec};
  font-weight: initial;
  font-variation-settings: ${nx};
`;we`
  font-family: ${_e};
  font-size: ${ic};
  line-height: ${uf};
  font-weight: initial;
  font-variation-settings: ${rx};
`;we`
  font-family: ${_e};
  font-size: ${sc};
  line-height: ${ff};
  font-weight: initial;
  font-variation-settings: ${ax};
`;we`
  font-family: ${_e};
  font-size: ${Ar};
  line-height: ${pf};
  font-weight: initial;
  font-variation-settings: ${lx};
`;we`
  font-family: ${_e};
  font-size: ${oc};
  line-height: ${gf};
  font-weight: initial;
  font-variation-settings: ${cx};
`;we`
  font-family: ${_e};
  font-size: ${nc};
  line-height: ${mf};
  font-weight: initial;
  font-variation-settings: ${dx};
`;we`
  font-family: ${_e};
  font-size: ${rc};
  line-height: ${bf};
  font-weight: initial;
  font-variation-settings: ${hx};
`;we`
  font-family: ${_e};
  font-size: ${ac};
  line-height: ${vf};
  font-weight: initial;
  font-variation-settings: ${ux};
`;const sw=(i,t)=>T`
    ${lt("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${At}
      color: ${gt};
      gap: calc(${H} * 1px);
    }
  `,He=we`
  outline: calc(${Jt} * 1px) solid ${Gr};
  outline-offset: calc(${Jt} * -1px);
`,Wo=we`
  outline: calc(${Jt} * 1px) solid ${Gr};
  outline-offset: calc(${U} * 1px);
`,rt=we`(${Er} + ${Bi}) * ${H}`,ow=mt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=gs.getValueFor(i);return Xe.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),nw=mt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=gs.getValueFor(i);return Xe.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),rw=mt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=gs.getValueFor(i);return Xe.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),aw=(i,t)=>T`
    ${lt("flex")} :host {
      box-sizing: border-box;
      ${At};
      flex-direction: column;
      background: ${Lx};
      color: ${gt};
      border: calc(${U} * 1px) solid ${Os};
      border-radius: calc(${li} * 1px);
    }

    .region {
      display: none;
      padding: calc(${H} * 2 * 1px);
      background: ${_x};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${H} * 3 * 1px) 0;
      padding: 0 calc(${H} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${U} * -1px);
      left: calc(${U} * -1px);
      right: calc(${U} * -1px);
      bottom: calc(${U} * -1px);
      cursor: pointer;
    }

    .button:${K}::before {
      ${He}
      border-radius: calc(${li} * 1px);
    }

    :host(.expanded) .button:${K}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${U} * 1px) solid ${Os};
      border-bottom-left-radius: calc((${li} - ${U}) * 1px);
      border-bottom-right-radius: calc((${li} - ${U}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${ow};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
      width: calc(${rt} * 1px);
      height: calc(${rt} * 1px);
      margin: calc(${H} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${nw};
    }

    .heading:active .icon {
      background: ${rw};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${H} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(at(T`
        .button:${K}::before {
          outline-color: ${g.Highlight};
        }
        .icon {
          fill: ${g.ButtonText};
        }
      `)),lw=ns.compose({baseName:"accordion-item",template:ev,styles:aw,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),cw=Gl.compose({baseName:"accordion",template:gv,styles:sw});function P(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Js{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Ln.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new dw(this.ltr,this.rtl,t),s=Ln.getValueFor(t);Ln.subscribe(e),e.attach(s),this.cache.set(t,e)}}class dw{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const bs=mt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),hw=mt.create("elevation-shadow-card-rest-size").withDefault(4),uw=mt.create("elevation-shadow-card-hover-size").withDefault(8),fw=mt.create("elevation-shadow-card-active-size").withDefault(0),pw=mt.create("elevation-shadow-card-focus-size").withDefault(8),gw=mt.create("elevation-shadow-card-rest").withDefault(i=>bs.getValueFor(i).evaluate(i,hw.getValueFor(i)));mt.create("elevation-shadow-card-hover").withDefault(i=>bs.getValueFor(i).evaluate(i,uw.getValueFor(i)));mt.create("elevation-shadow-card-active").withDefault(i=>bs.getValueFor(i).evaluate(i,fw.getValueFor(i)));mt.create("elevation-shadow-card-focus").withDefault(i=>bs.getValueFor(i).evaluate(i,pw.getValueFor(i)));const mw=mt.create("elevation-shadow-tooltip-size").withDefault(16),bw=mt.create("elevation-shadow-tooltip").withDefault(i=>bs.getValueFor(i).evaluate(i,mw.getValueFor(i))),vw=mt.create("elevation-shadow-flyout-size").withDefault(32),op=mt.create("elevation-shadow-flyout").withDefault(i=>bs.getValueFor(i).evaluate(i,vw.getValueFor(i))),yw=mt.create("elevation-shadow-dialog-size").withDefault(128),xw=mt.create("elevation-shadow-dialog").withDefault(i=>bs.getValueFor(i).evaluate(i,yw.getValueFor(i))),np=(i,t,e,s="[disabled]")=>T`
    ${lt("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${At}
      height: calc(${rt} * 1px);
      min-width: calc(${rt} * 1px);
      color: ${gt};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${U} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${H} * 2 * ${Bi})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${K} {
      ${He}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,vc=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${pc};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${ih}, ${ih}),
        border-box ${ep};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${sh}, ${sh}),
        border-box ${ip};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${Vo};
    }
  `.withBehaviors(at(T`
        .control {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          forced-color-adjust: none;
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${K} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${g.CanvasText};
          color: ${g.CanvasText};
        }
    `)),rp=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${yt}, ${yt}),
        border-box ${Ox};
      color: ${as};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${We}, ${We}),
        border-box ${Ax};
      color: ${Yf};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Ge}, ${Ge}),
        border-box ${Vx};
      color: ${Jf};
    }

    :host(${s}) .control {
      background: ${yt};
    }

    .control:${K} {
      box-shadow: 0 0 0 calc(${Jt} * 1px) ${Qx} inset !important;
    }
  `.withBehaviors(at(T`
        .control {
          forced-color-adjust: none;
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${K} {
          outline-color: ${g.CanvasText};
          box-shadow: 0 0 0 calc(${Jt} * 1px) ${g.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${g.LinkText};
          color: ${g.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${g.ButtonFace};
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),ww=(i,t,e,s="[disabled]")=>T`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${e}) .control {
      color: ${Qf};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${Zf};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Kf};
      text-decoration: none;
    }

    .control:${K} {
      ${Wo}
    }
  `.withBehaviors(at(T`
        :host(${e}) .control {
          color: ${g.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${g.CanvasText};
        }

        .control:${K} {
          outline-color: ${g.CanvasText};
        }
      `)),ap=(i,t,e,s="[disabled]")=>T`
    :host {
      color: ${Qf};
    }

    .control {
      background: ${Ns};
    }

    :host(${e}:hover) .control {
      background: ${zs};
      color: ${Zf};
    }

    :host(${e}:active) .control {
      background: ${Bs};
      color: ${Kf};
    }

    :host(${s}) .control {
      background: ${Ns};
    }
  `.withBehaviors(at(T`
        :host {
          color: ${g.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${g.GrayText};
        }

        .control:${K} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),lp=(i,t,e,s="[disabled]")=>T`
    .control {
      background: transparent !important;
      border-color: ${Vo};
    }

    :host(${e}:hover) .control {
      border-color: ${qx};
    }

    :host(${e}:active) .control {
      border-color: ${Wx};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Vo};
    }
  `.withBehaviors(at(T`
        .control {
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
          color: ${g.Highlight};
        }

        :host(${s}) .control {
          border-color: ${g.GrayText};
          color: ${g.GrayText};
        }

        .control:${K} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${g.CanvasText};
          color: ${g.CanvasText};
        }
      `)),yc=(i,t,e,s="[disabled]")=>T`
    .control {
      background: ${Ns};
    }

    :host(${e}:hover) .control {
      background: ${zs};
    }

    :host(${e}:active) .control {
      background: ${Bs};
    }

    :host(${s}) .control {
      background: ${Ns};
    }
  `.withBehaviors(at(T`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${g.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${g.ButtonText};
          color: ${g.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${g.GrayText};
        }
        
        .control:${K} {
          outline-color: ${g.CanvasText};
        }

        :host([href]) .control {
          color: ${g.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${g.LinkText};
          color: ${g.LinkText};
        }
      `)),$w=mt.create("input-placeholder-rest").withDefault(i=>{const t=ji.getValueFor(i);return qo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),Cw=mt.create("input-placeholder-hover").withDefault(i=>{const t=ji.getValueFor(i);return qo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),kw=mt.create("input-filled-placeholder-rest").withDefault(i=>{const t=ms.getValueFor(i);return qo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),Fw=mt.create("input-filled-placeholder-hover").withDefault(i=>{const t=ms.getValueFor(i);return qo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Jr=(i,t,e)=>T`
  :host {
    ${At}
    color: ${gt};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${e} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${U} * 1px) solid transparent;
    border-radius: calc(${pt} * 1px);
    height: calc(${rt} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${gt};
    cursor: pointer;
    ${At}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${e},
  :host([readonly]) ${e},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${Pe};
  }

  :host([disabled]) {
    opacity: ${Se};
  }
`,Go=(i,t,e)=>T`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${Jt} * 1px);
      bottom: 0;
      border-bottom: calc(${Jt} * 1px) solid ${yt};
      border-bottom-left-radius: calc(${pt} * 1px);
      border-bottom-right-radius: calc(${pt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Xo=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: padding-box linear-gradient(${xn}, ${xn}),
      border-box ${rh};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${oh}, ${oh}),
      border-box ${Xx};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${nh}, ${nh}),
      border-box ${rh};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${xn}, ${xn}),
      border-box ${Vo};
  }

  .control::placeholder {
    color: ${$w};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Cw};
  }
`,Qs=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: ${ls};
  }

  :host(${s}:hover) ${e} {
    background: ${fc};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${Mx};
  }

  :host([disabled]) ${e} {
    background: ${ls};
  }

  .control::placeholder {
    color: ${kw};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Fw};
  }
`,Zs=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  :host {
    color: ${g.ButtonText};
  }

  ${e} {
    background: ${g.ButtonFace};
    border-color: ${g.ButtonText};
  }

  :host(${s}:hover) ${e},
  :host(:not([disabled]):focus-within) ${e} {
    border-color: ${g.Highlight};
  }

  :host([disabled]) ${e} {
    opacity: 1;
    background: ${g.ButtonFace};
    border-color: ${g.GrayText};
  }

  .control::placeholder,
  :host(${s}:hover) .control::placeholder {
    color: ${g.CanvasText};
  }

  :host(:not([disabled]):focus) ${e} {
    ${He}
    outline-color: ${g.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${g.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${g.GrayText};
  }
`;function It(i,t){return new C0("appearance",i,t)}const ws="[href]",Sw=(i,t)=>np().withBehaviors(It("neutral",vc(i,t,ws)),It("accent",rp(i,t,ws)),It("hypertext",ww(i,t,ws)),It("lightweight",ap(i,t,ws)),It("outline",lp(i,t,ws)),It("stealth",yc(i,t,ws)));class cp extends $e{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}P([f],cp.prototype,"appearance",void 0);const Tw=cp.compose({baseName:"anchor",baseClass:$e,template:Uu,styles:Sw,shadowOptions:{delegatesFocus:!0}}),Iw=(i,t)=>T`
  :host {
    contain: layout;
    display: block;
  }
`,Rw=Y.compose({baseName:"anchored-region",template:Sv,styles:Iw}),Dw=(i,t)=>T`
    ${lt("inline-block")} :host {
      box-sizing: border-box;
      ${sp};
    }

    .control {
      border-radius: calc(${pt} * 1px);
      padding: calc(((${H} * 0.5) - ${U}) * 1px) calc((${H} - ${U}) * 1px);
      border: calc(${U} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${gt};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${yt};
      color: ${as};
    }

    :host(.neutral) .control {
      background: ${ls};
      color: ${gt};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${ec} - calc(${H} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class dp extends Ho{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&Q.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}P([f({mode:"fromView"})],dp.prototype,"appearance",void 0);const Ew=dp.compose({baseName:"badge",baseClass:Ho,template:Iv,styles:Dw}),Ow=(i,t)=>T`
  ${lt("inline-block")} :host {
    box-sizing: border-box;
    ${At};
  }

  .list {
    display: flex;
  }
`,Aw=qu.compose({baseName:"breadcrumb",template:Dv,styles:Ow}),Vw=(i,t)=>T`
    ${lt("inline-flex")} :host {
      background: transparent;
      color: ${gt};
      fill: currentcolor;
      box-sizing: border-box;
      ${At};
      min-width: calc(${rt} * 1px);
      border-radius: calc(${pt} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${jx};
    }

    .control:active {
      color: ${Ux};
    }

    .control:${K} {
      ${Wo}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${gt};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(at(T`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${g.ButtonFace};
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${g.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${g.ButtonFace};
          color: ${g.LinkText};
        }
        :host([href]) .control:hover {
          background: ${g.LinkText};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        .control:${K} {
          outline-color: ${g.LinkText};
        }
      `)),Lw=Do.compose({baseName:"breadcrumb-item",template:Rv,styles:Vw,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Qi=":not([disabled])",Fi="[disabled]",Pw=(i,t)=>T`
    :host(${Qi}) .control {
      cursor: pointer;
    }

    :host(${Fi}) .control {
      cursor: ${Pe};
    }

    @media (forced-colors: none) {
      :host(${Fi}) .control {
        opacity: ${Se};
      }
    }

    ${np(i,t,Qi,Fi)}
  `.withBehaviors(It("neutral",vc(i,t,Qi,Fi)),It("accent",rp(i,t,Qi,Fi)),It("lightweight",ap(i,t,Qi,Fi)),It("outline",lp(i,t,Qi,Fi)),It("stealth",yc(i,t,Qi,Fi)));class hp extends Ce{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}P([f],hp.prototype,"appearance",void 0);const _w=hp.compose({baseName:"button",baseClass:Ce,template:Ev,styles:Pw,shadowOptions:{delegatesFocus:!0}}),Hw=T`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,Mw=T`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Nw=(i,t)=>T`
${lt("inline-block")} :host {
  --calendar-cell-size: calc((${Er} + 2 + ${Bi}) * ${H} * 1px);
  --calendar-gap: 2px;
  ${At}
  color: ${gt};
}

.title {
  padding: calc(${H} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${U} * 1px) solid transparent;
  border-radius: calc(${pt} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${js};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${U} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${yt};
  border: 1px solid ${yt};
  background: ${ot};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${U} + ${pt}) * 1px);
  margin-inline-start: calc((${pt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${as};
}

.today .date {
  color: ${as};
  background: ${yt};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(at(T`
          .day.selected {
              color: ${g.Highlight};
          }

          .today .date {
              background: ${g.Highlight};
              color: ${g.HighlightText};
          }
      `),new Js(Hw,Mw));class up extends Le{constructor(){super(...arguments),this.readonly=!0}}P([f({converter:_o})],up.prototype,"readonly",void 0);const zw=up.compose({baseName:"calendar",template:Yv,styles:Nw,title:jv}),Bw=(i,t)=>T`
    ${lt("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${ot};
      color: ${gt};
      border: calc(${U} * 1px) solid ${Os};
      border-radius: calc(${li} * 1px);
      box-shadow: ${gw};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(at(T`
        :host {
          background: ${g.Canvas};
          color: ${g.CanvasText};
        }
      `));class xc extends Wu{cardFillColorChanged(t,e){if(e){const s=os(e);s!==null&&(this.neutralPaletteSource=e,ot.setValueFor(this,Oe.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=os(e),o=Oe.create(s.r,s.g,s.b);Ct.setValueFor(this,Ao.create(o))}}handleChange(t,e){this.cardFillColor||ot.setValueFor(this,s=>gs.getValueFor(s).evaluate(s,ot.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=Xn(this);if(t){const e=J.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}P([f({attribute:"card-fill-color",mode:"fromView"})],xc.prototype,"cardFillColor",void 0);P([f({attribute:"neutral-palette-source",mode:"fromView"})],xc.prototype,"neutralPaletteSource",void 0);const jw=xc.compose({baseName:"card",baseClass:Wu,template:Jv,styles:Bw}),Uw=(i,t)=>T`
    ${lt("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${rt} / 2 + ${H}) * 1px);
      height: calc((${rt} / 2 + ${H}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid ${Ys};
      background: ${cc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${At}
      color: ${gt};
      ${""} padding-inline-start: calc(${H} * 2px + 2px);
      margin-inline-end: calc(${H} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${gt};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${as};
    }

    :host(:not(.disabled):hover) .control {
      background: ${dc};
      border-color: ${mc};
    }

    :host(:not(.disabled):active) .control {
      background: ${hc};
      border-color: ${bc};
    }

    :host(:${K}) .control {
      background: ${uc};
      ${Wo}
    }

    :host(.checked) .control {
      background: ${yt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Pe};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Se};
    }
  `.withBehaviors(at(T`
        .control {
          border-color: ${g.FieldText};
          background: ${g.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
          background: ${g.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${g.FieldText};
        }
        :host(:${K}) .control {
          forced-color-adjust: none;
          outline-color: ${g.FieldText};
          background: ${g.Field};
          border-color: ${g.Highlight};
        }
        :host(.checked) .control {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${g.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${g.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${g.GrayText};
          background: ${g.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${g.GrayText};
        }
      `)),qw=wr.compose({baseName:"checkbox",template:Qv,styles:Uw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),ah=".control",wn=":not([disabled]):not([open])",lh="[disabled]",fp=(i,t)=>T`
    ${lt("inline-flex")}
    
    :host {
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      color: ${gt};
      fill: currentcolor;
      font-family: ${_e};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${op};
      background: ${ot};
      border-radius: calc(${li} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${rt} * 1px));
      padding: calc((${H} - ${U} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${U} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc(${rt} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${At}
      min-height: 100%;
      padding: 0 calc(${H} * 2.25px);
      width: 100%;
    }

    :host(:${K}) {
      ${He}
    }

    :host([disabled]) .control {
      cursor: ${Pe};
      opacity: ${Se};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${rt} + ${H} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${rt} + ${H} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,Ww=(i,t)=>T`
    :host([open]) .listbox {
      background: ${g.ButtonFace};
      border-color: ${g.CanvasText};
    }
  `,Gw=(i,t)=>fp().withBehaviors(It("outline",vc(i,t,wn,lh)),It("filled",Qs(i,t,ah,wn).withBehaviors(at(Zs(i,t,ah,wn)))),It("stealth",yc(i,t,wn,lh)),at(Ww())),Pa=".control",_a=":not([disabled]):not([open])",Xw=(i,t)=>T`
    ${fp()}

    ${Go()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Pe};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${At}
      height: calc(100% - ${U} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(It("outline",Xo(i,t,Pa,_a)),It("filled",Qs(i,t,Pa,_a)),at(Zs(i,t,Pa,_a)));class pp extends bi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&ot.setValueFor(this.listbox,Uo)}}P([f({mode:"fromView"})],pp.prototype,"appearance",void 0);const Yw=pp.compose({baseName:"combobox",baseClass:bi,shadowOptions:{delegatesFocus:!0},template:iy,styles:Xw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Jw=(i,t)=>T`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Qw=(i,t)=>T`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${U} * 1px) solid ${Kn};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${ot};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(at(T`
        :host {
        }
      `)),Zw=(i,t)=>T`
    :host {
      padding: calc((${H} + ${Jt} - ${U}) * 1px) calc(((${H} * 3) + ${Jt} - ${U}) * 1px);
      color: ${gt};
      box-sizing: border-box;
      ${At}
      border: transparent calc(${U} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${pt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${K}) {
      ${He}
    }
  `.withBehaviors(at(T`
        :host {
          forced-color-adjust: none;
          background: ${g.Field};
          color: ${g.FieldText};
        }

        :host(:${K}) {
          outline-color: ${g.FieldText};
        }
      `)),Kw=mi.compose({baseName:"data-grid-cell",template:Bv,styles:Zw}),t$=Gt.compose({baseName:"data-grid-row",template:zv,styles:Qw}),e$=zt.compose({baseName:"data-grid",template:Pv,styles:Jw}),wc={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=os(i);return t?Oe.create(t.r,t.g,t.b):null}},ch=T`
  :host {
    background-color: ${ot};
    color: ${gt};
  }
`.withBehaviors(at(T`
      :host {
        background-color: ${g.Canvas};
        box-shadow: 0 0 0 1px ${g.CanvasText};
        color: ${g.CanvasText};
      }
    `));function B(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class z extends Z{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};J.getNotifier(this).subscribe(t,"fillColor"),J.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(ch):this.$fastController.removeStyles(ch)}}P([f({attribute:"no-paint",mode:"boolean"})],z.prototype,"noPaint",void 0);P([f({attribute:"fill-color",converter:wc,mode:"fromView"}),B(ot)],z.prototype,"fillColor",void 0);P([f({attribute:"accent-base-color",converter:wc,mode:"fromView"}),B(Xf)],z.prototype,"accentBaseColor",void 0);P([f({attribute:"neutral-base-color",converter:wc,mode:"fromView"}),B(Gf)],z.prototype,"neutralBaseColor",void 0);P([f({converter:M}),B(Bi)],z.prototype,"density",void 0);P([f({attribute:"design-unit",converter:M}),B(H)],z.prototype,"designUnit",void 0);P([f({attribute:"direction"}),B(Ln)],z.prototype,"direction",void 0);P([f({attribute:"base-height-multiplier",converter:M}),B(Er)],z.prototype,"baseHeightMultiplier",void 0);P([f({attribute:"base-horizontal-spacing-multiplier",converter:M}),B(ix)],z.prototype,"baseHorizontalSpacingMultiplier",void 0);P([f({attribute:"control-corner-radius",converter:M}),B(pt)],z.prototype,"controlCornerRadius",void 0);P([f({attribute:"layer-corner-radius",converter:M}),B(li)],z.prototype,"layerCornerRadius",void 0);P([f({attribute:"stroke-width",converter:M}),B(U)],z.prototype,"strokeWidth",void 0);P([f({attribute:"focus-stroke-width",converter:M}),B(Jt)],z.prototype,"focusStrokeWidth",void 0);P([f({attribute:"disabled-opacity",converter:M}),B(Se)],z.prototype,"disabledOpacity",void 0);P([f({attribute:"type-ramp-minus-2-font-size"}),B(ic)],z.prototype,"typeRampMinus2FontSize",void 0);P([f({attribute:"type-ramp-minus-2-line-height"}),B(uf)],z.prototype,"typeRampMinus2LineHeight",void 0);P([f({attribute:"type-ramp-minus-1-font-size"}),B(tc)],z.prototype,"typeRampMinus1FontSize",void 0);P([f({attribute:"type-ramp-minus-1-line-height"}),B(ec)],z.prototype,"typeRampMinus1LineHeight",void 0);P([f({attribute:"type-ramp-base-font-size"}),B(Or)],z.prototype,"typeRampBaseFontSize",void 0);P([f({attribute:"type-ramp-base-line-height"}),B(hf)],z.prototype,"typeRampBaseLineHeight",void 0);P([f({attribute:"type-ramp-plus-1-font-size"}),B(sc)],z.prototype,"typeRampPlus1FontSize",void 0);P([f({attribute:"type-ramp-plus-1-line-height"}),B(ff)],z.prototype,"typeRampPlus1LineHeight",void 0);P([f({attribute:"type-ramp-plus-2-font-size"}),B(Ar)],z.prototype,"typeRampPlus2FontSize",void 0);P([f({attribute:"type-ramp-plus-2-line-height"}),B(pf)],z.prototype,"typeRampPlus2LineHeight",void 0);P([f({attribute:"type-ramp-plus-3-font-size"}),B(oc)],z.prototype,"typeRampPlus3FontSize",void 0);P([f({attribute:"type-ramp-plus-3-line-height"}),B(gf)],z.prototype,"typeRampPlus3LineHeight",void 0);P([f({attribute:"type-ramp-plus-4-font-size"}),B(nc)],z.prototype,"typeRampPlus4FontSize",void 0);P([f({attribute:"type-ramp-plus-4-line-height"}),B(mf)],z.prototype,"typeRampPlus4LineHeight",void 0);P([f({attribute:"type-ramp-plus-5-font-size"}),B(rc)],z.prototype,"typeRampPlus5FontSize",void 0);P([f({attribute:"type-ramp-plus-5-line-height"}),B(bf)],z.prototype,"typeRampPlus5LineHeight",void 0);P([f({attribute:"type-ramp-plus-6-font-size"}),B(ac)],z.prototype,"typeRampPlus6FontSize",void 0);P([f({attribute:"type-ramp-plus-6-line-height"}),B(vf)],z.prototype,"typeRampPlus6LineHeight",void 0);P([f({attribute:"accent-fill-rest-delta",converter:M}),B(cl)],z.prototype,"accentFillRestDelta",void 0);P([f({attribute:"accent-fill-hover-delta",converter:M}),B(dl)],z.prototype,"accentFillHoverDelta",void 0);P([f({attribute:"accent-fill-active-delta",converter:M}),B(hl)],z.prototype,"accentFillActiveDelta",void 0);P([f({attribute:"accent-fill-focus-delta",converter:M}),B(ul)],z.prototype,"accentFillFocusDelta",void 0);P([f({attribute:"accent-foreground-rest-delta",converter:M}),B(yf)],z.prototype,"accentForegroundRestDelta",void 0);P([f({attribute:"accent-foreground-hover-delta",converter:M}),B(xf)],z.prototype,"accentForegroundHoverDelta",void 0);P([f({attribute:"accent-foreground-active-delta",converter:M}),B(wf)],z.prototype,"accentForegroundActiveDelta",void 0);P([f({attribute:"accent-foreground-focus-delta",converter:M}),B($f)],z.prototype,"accentForegroundFocusDelta",void 0);P([f({attribute:"neutral-fill-rest-delta",converter:M}),B(Cf)],z.prototype,"neutralFillRestDelta",void 0);P([f({attribute:"neutral-fill-hover-delta",converter:M}),B(kf)],z.prototype,"neutralFillHoverDelta",void 0);P([f({attribute:"neutral-fill-active-delta",converter:M}),B(Ff)],z.prototype,"neutralFillActiveDelta",void 0);P([f({attribute:"neutral-fill-focus-delta",converter:M}),B(Sf)],z.prototype,"neutralFillFocusDelta",void 0);P([f({attribute:"neutral-fill-input-rest-delta",converter:M}),B(Tf)],z.prototype,"neutralFillInputRestDelta",void 0);P([f({attribute:"neutral-fill-input-hover-delta",converter:M}),B(If)],z.prototype,"neutralFillInputHoverDelta",void 0);P([f({attribute:"neutral-fill-input-active-delta",converter:M}),B(Rf)],z.prototype,"neutralFillInputActiveDelta",void 0);P([f({attribute:"neutral-fill-input-focus-delta",converter:M}),B(Df)],z.prototype,"neutralFillInputFocusDelta",void 0);P([f({attribute:"neutral-fill-layer-rest-delta",converter:M}),B(Hi)],z.prototype,"neutralFillLayerRestDelta",void 0);P([f({attribute:"neutral-fill-stealth-rest-delta",converter:M}),B(Ef)],z.prototype,"neutralFillStealthRestDelta",void 0);P([f({attribute:"neutral-fill-stealth-hover-delta",converter:M}),B(Of)],z.prototype,"neutralFillStealthHoverDelta",void 0);P([f({attribute:"neutral-fill-stealth-active-delta",converter:M}),B(Af)],z.prototype,"neutralFillStealthActiveDelta",void 0);P([f({attribute:"neutral-fill-stealth-focus-delta",converter:M}),B(Vf)],z.prototype,"neutralFillStealthFocusDelta",void 0);P([f({attribute:"neutral-fill-strong-hover-delta",converter:M}),B(Lf)],z.prototype,"neutralFillStrongHoverDelta",void 0);P([f({attribute:"neutral-fill-strong-active-delta",converter:M}),B(Pf)],z.prototype,"neutralFillStrongActiveDelta",void 0);P([f({attribute:"neutral-fill-strong-focus-delta",converter:M}),B(_f)],z.prototype,"neutralFillStrongFocusDelta",void 0);P([f({attribute:"base-layer-luminance",converter:M}),B(ps)],z.prototype,"baseLayerLuminance",void 0);P([f({attribute:"neutral-stroke-divider-rest-delta",converter:M}),B(Wf)],z.prototype,"neutralStrokeDividerRestDelta",void 0);P([f({attribute:"neutral-stroke-rest-delta",converter:M}),B(Hf)],z.prototype,"neutralStrokeRestDelta",void 0);P([f({attribute:"neutral-stroke-hover-delta",converter:M}),B(Mf)],z.prototype,"neutralStrokeHoverDelta",void 0);P([f({attribute:"neutral-stroke-active-delta",converter:M}),B(Nf)],z.prototype,"neutralStrokeActiveDelta",void 0);P([f({attribute:"neutral-stroke-focus-delta",converter:M}),B(zf)],z.prototype,"neutralStrokeFocusDelta",void 0);const i$=z.compose({baseName:"design-system-provider",template:D` <slot></slot> `,styles:T`
    ${lt("block")}
  `}),s$=(i,t)=>T`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${xw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${li} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${ot};
    z-index: 1;
    border: calc(${U} * 1px) solid transparent;
  }
`,o$=De.compose({baseName:"dialog",template:my,styles:s$}),n$=(i,t)=>T`
    ${lt("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${U} * 1px) solid ${Kn};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${H} * 1px);
      border-left: calc(${U} * 1px) solid ${Kn};
  }
  `,r$=Cr.compose({baseName:"divider",template:Ry,styles:n$}),a$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      height: calc((${rt} + ${H}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${tp};
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${pc};
      box-sizing: border-box;
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Se};
      cursor: ${Pe};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${zx};
    }

    :host(:not(.disabled):active) {
      color: ${Bx};
    }

    :host(:${K}) {
      ${He}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(at(T`
        :host {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${g.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${g.GrayText};
          color: ${g.GrayText};
          fill: currentcolor;
        }
        :host(:${K}) {
          forced-color-adjust: none;
          outline-color: ${g.Highlight};
        }
      `)),l$=kr.compose({baseName:"flipper",template:Ey,styles:a$,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),c$=T`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,d$=T`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,h$=T`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Js(c$,d$)),u$=(i,t)=>T`
  ${lt("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;class f$ extends vi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(h$)}}const p$=f$.compose({baseName:"horizontal-scroll",baseClass:vi,template:Yy,styles:u$,nextFlipper:D`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:D`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),g$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      border: calc(${U} * 1px) solid ${Vo};
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${H} * 1px) 0;
    }

    ::slotted(${i.tagFor(oi)}) {
      margin: 0 calc(${H} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${He}
    }
  `;class m$ extends be{}const b$=m$.compose({baseName:"listbox",template:Ay,styles:g$}),v$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      position: relative;
      ${At}
      background: ${Ns};
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${gt};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${rt} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${H} * 3) - ${U} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Jt} - ${U}) * 1px);
      top: calc((${rt} / 4) - ${Jt} * 1px);
      width: 3px;
      height: calc((${rt} / 2) * 1px);
      background: transparent;
      border-radius: calc(${pt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${zs};
    }

    :host(:not([disabled]):active) {
      background: ${Bs};
    }

    :host(:not([disabled]):active)::before {
      background: ${yt};
      height: calc(((${rt} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${yt};
    }

    :host(:${K}) {
      ${He}
      background: ${Nx};
    }

    :host([aria-selected='true']) {
      background: ${ls};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${fc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Hx};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${zs};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Bs};
    }

    :host([disabled]) {
      cursor: ${Pe};
      opacity: ${Se};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new Js(null,T`
      :host::before {
        right: calc((${Jt} - ${U}) * 1px);
      }
    `),at(T`
        :host {
          background: ${g.ButtonFace};
          border-color: ${g.ButtonFace};
          color: ${g.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${g.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${g.Canvas};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${K}) {
          outline-color: ${g.CanvasText};
        }
      `)),y$=oi.compose({baseName:"option",template:Oy,styles:v$}),x$=(i,t)=>T`
    ${lt("block")} :host {
      background: ${Uo};
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${li} * 1px);
      box-shadow: ${op};
      padding: calc((${H} - ${U}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${H} * 2px);
    }

    ::slotted(${i.tagFor(ke)}) {
      margin: 0 calc(${H} * 1px);
    }

    ::slotted(${i.tagFor(Cr)}) {
      margin: calc(${H} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${H} * 1px) 0;
      border: none;
      border-top: calc(${U} * 1px) solid ${Kn};
    }
  `.withBehaviors(at(T`
        :host([slot='submenu']) {
          background: ${g.Canvas};
          border-color: ${g.CanvasText};
        }
      `));class w$ extends Fr{connectedCallback(){super.connectedCallback(),ot.setValueFor(this,Uo)}}const $$=w$.compose({baseName:"menu",baseClass:Fr,template:Py,styles:x$}),C$=(i,t)=>T`
    ${lt("grid")} :host {
      contain: layout;
      overflow: visible;
      ${At}
      box-sizing: border-box;
      height: calc(${rt} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${gt};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${K}) {
      ${He}
    }

    :host(:not([disabled]):hover) {
      background: ${zs};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Bs};
      color: ${gt};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Pe};
      opacity: ${Se};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${js};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(at(T`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${g.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${K}) ::slotted([slot='end']:not(svg)) {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:${K}) {
          background: ${g.Highlight};
          outline-color: ${g.ButtonText};
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${K}) {
          background: ${g.ButtonFace};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${K}) {
          outline-color: ${g.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${g.ButtonText};
          background: ${g.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${g.HighlightText};
          border-color: ${g.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${K}) .expanded-toggle,
            :host(:${K}) .checkbox,
            :host(:${K}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${K}) .checkbox,
            :host([checked]:${K}) .radio {
          border-color: ${g.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${g.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${g.Highlight};
        }
      `),new Js(T`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,T`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),k$=ke.compose({baseName:"menu-item",template:Ly,styles:C$,checkboxIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,expandCollapseGlyph:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>
    </svg>
  `,radioIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2"/>
    </svg>
  `}),$n=".root",F$=(i,t)=>T`
    ${lt("inline-block")}

    ${Jr(i,t,$n)}

    ${Go()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${H} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(It("outline",Xo(i,t,$n)),It("filled",Qs(i,t,$n)),at(Zs(i,t,$n)));class gp extends ce{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],gp.prototype,"appearance",void 0);const S$=gp.compose({baseName:"number-field",baseClass:ce,styles:F$,template:_y,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),T$=(i,t)=>T`
    ${lt("flex")} :host {
      align-items: center;
      height: calc((${U} * 3) * 1px);
    }

    .progress {
      background-color: ${Ys};
      border-radius: calc(${H} * 1px);
      width: 100%;
      height: calc(${U} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${yt};
      border-radius: calc(${H} * 1px);
      height: calc((${U} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${U} * 3) * 1px);
      border-radius: calc(${H} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${yt};
      border-radius: calc(${H} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${yt};
      border-radius: calc(${H} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${js};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${js};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(at(T`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${g.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${g.GrayText};
        }
      `));class I$ extends us{}const R$=I$.compose({baseName:"progress",template:Uy,styles:T$,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),D$=(i,t)=>T`
    ${lt("flex")} :host {
      align-items: center;
      height: calc(${rt} * 1px);
      width: calc(${rt} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${yt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${yt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${js};
    }

    :host(.paused) .determinate {
      stroke: ${js};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(at(T`
        .background {
          stroke: ${g.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${g.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${g.GrayText};
        }
      `));class E$ extends us{}const O$=E$.compose({baseName:"progress-ring",template:jy,styles:D$,indeterminateIndicator:`
    <svg class="progress" part="progress" viewBox="0 0 16 16">
        <circle
            class="background"
            part="background"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
        <circle
            class="indeterminate-indicator-1"
            part="indeterminate-indicator-1"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
    </svg>
  `}),A$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      --input-size: calc((${rt} / 2) + ${H});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${U} * 1px) solid ${Ys};
      background: ${cc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${At}
      color: ${gt};
      ${""} padding-inline-start: calc(${H} * 2px + 2px);
      margin-inline-end: calc(${H} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${as};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${dc};
      border-color: ${mc};
    }

    :host(:not(.disabled):active) .control {
      background: ${hc};
      border-color: ${bc};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${K}) .control {
      ${Wo}
      background: ${uc};
    }

    :host(.checked) .control {
      background: ${yt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Pe};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Se};
    }
  `.withBehaviors(at(T`
        .control {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
        }
        :host(:${K}) .control {
          forced-color-adjust: none;
          background: ${g.Field};
          outline-color: ${g.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${g.Highlight};
          background: ${g.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${g.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${g.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${g.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${g.Field};
          border-color: ${g.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${g.GrayText};
        }
      `)),V$=Tr.compose({baseName:"radio",template:Wy,styles:A$,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),L$=(i,t)=>T`
  ${lt("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`,P$=Ni.compose({baseName:"radio-group",template:qy,styles:L$}),_$=(i,t)=>D`
  <template
    class="
            ${e=>e.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${Ft({property:"defaultSlottedNodes",filter:sf})}></slot>
    </label>
    <div class="root" part="root" ${ut("root")}>
      ${le(i,t)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${e=>e.handleTextInput()}"
          @change="${e=>e.handleChange()}"
          ?autofocus="${e=>e.autofocus}"
          ?disabled="${e=>e.disabled}"
          list="${e=>e.list}"
          maxlength="${e=>e.maxlength}"
          minlength="${e=>e.minlength}"
          pattern="${e=>e.pattern}"
          placeholder="${e=>e.placeholder}"
          ?readonly="${e=>e.readOnly}"
          ?required="${e=>e.required}"
          size="${e=>e.size}"
          ?spellcheck="${e=>e.spellcheck}"
          :value="${e=>e.value}"
          type="search"
          aria-atomic="${e=>e.ariaAtomic}"
          aria-busy="${e=>e.ariaBusy}"
          aria-controls="${e=>e.ariaControls}"
          aria-current="${e=>e.ariaCurrent}"
          aria-describedby="${e=>e.ariaDescribedby}"
          aria-details="${e=>e.ariaDetails}"
          aria-disabled="${e=>e.ariaDisabled}"
          aria-errormessage="${e=>e.ariaErrormessage}"
          aria-flowto="${e=>e.ariaFlowto}"
          aria-haspopup="${e=>e.ariaHaspopup}"
          aria-hidden="${e=>e.ariaHidden}"
          aria-invalid="${e=>e.ariaInvalid}"
          aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
          aria-label="${e=>e.ariaLabel}"
          aria-labelledby="${e=>e.ariaLabelledby}"
          aria-live="${e=>e.ariaLive}"
          aria-owns="${e=>e.ariaOwns}"
          aria-relevant="${e=>e.ariaRelevant}"
          aria-roledescription="${e=>e.ariaRoledescription}"
          ${ut("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${e=>e.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${e=>e.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${ae(i,t)}
    </div>
  </template>
`,Cn=".root",H$=mt.create("clear-button-hover").withDefault(i=>{const t=Xe.getValueFor(i),e=ji.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),M$=mt.create("clear-button-active").withDefault(i=>{const t=Xe.getValueFor(i),e=ji.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),N$=(i,t)=>T`
    ${lt("inline-block")}

    ${Jr(i,t,Cn)}

    ${Go()}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${H} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${gt};
      fill: currentcolor;
      border: none;
      border-radius: calc(${pt} * 1px);
      min-width: calc(${rt} * 1px);
      ${At}
      outline: none;
      padding: 0 calc((10 + (${H} * 2 * ${Bi})) * 1px);
    }
    .clear-button:hover {
      background: ${H$};
    }
    .clear-button:active {
      background: ${M$};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${i.tagFor(Ce)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(It("outline",Xo(i,t,Cn)),It("filled",Qs(i,t,Cn)),at(Zs(i,t,Cn)));class mp extends Fe{constructor(){super(...arguments),this.appearance="outline"}}P([f],mp.prototype,"appearance",void 0);const z$=mp.compose({baseName:"search",baseClass:Fe,template:_$,styles:N$,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class bp extends yi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&ot.setValueFor(this.listbox,Uo)}}P([f({mode:"fromView"})],bp.prototype,"appearance",void 0);const B$=bp.compose({baseName:"select",baseClass:yi,template:t0,styles:Gw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),j$=(i,t)=>T`
    ${lt("block")} :host {
      --skeleton-fill-default: ${ls};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${fc} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${pt} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${lt("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${ls});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(at(T`
        :host{
          background-color: ${g.CanvasText};
        }
      `)),U$=No.compose({baseName:"skeleton",template:e0,styles:j$}),q$=(i,t)=>T`
    ${lt("inline-grid")} :host {
      --thumb-size: calc((${rt} / 2) + ${H} + (${U} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${H} / 2) * -1);
      --track-width: ${H};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${K}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${ot}, 0 0 0 4px ${Gr};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${pc};
      border: calc(${U} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${yt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${We};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Ge};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${ep};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Ie}, ${Ie}),
        border-box ${ip};
    }
    .track-start {
      background: ${yt};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${pt} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${tp};
      border: 1px solid ${Ys};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${H} * 60px);
      min-width: calc(${H} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Pe};
    }
    :host(.disabled) {
      opacity: ${Se};
    }
  `.withBehaviors(at(T`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${g.FieldText};
          background: ${g.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${g.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${g.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${g.Field};
        }
        :host(:${K}) .thumb-cursor {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
          box-shadow: 0 0 0 1px ${g.Field}, 0 0 0 3px ${g.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${g.GrayText};
        }
      `)),W$=Qt.compose({baseName:"slider",template:s0,styles:q$,thumb:`
    <div class="thumb-cursor"></div>
  `}),G$=(i,t)=>T`
    ${lt("block")} :host {
      ${sp}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${U} * 1px);
      height: calc(${H} * 1px);
      background: ${Ys};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${H} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${Se};
    }
  `.withBehaviors(at(T`
        .mark {
          forced-color-adjust: none;
          background: ${g.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${g.GrayText};
        }
        :host(.disabled) .mark {
          background: ${g.GrayText};
        }
      `)),X$=xi.compose({baseName:"slider-label",template:i0,styles:G$}),Y$=(i,t)=>T`
    :host([hidden]) {
      display: none;
    }

    ${lt("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${_e};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Se};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Pe};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${rt} / 2) + ${H}) * 2px);
      height: calc(((${rt} / 2) + ${H}) * 1px);
      background: ${cc};
      border-radius: calc(${rt} * 1px);
      border: calc(${U} * 1px) solid ${Ys};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${dc};
      border-color: ${mc};
    }

    :host(:not(.disabled):active) .switch {
      background: ${hc};
      border-color: ${bc};
    }

    :host(:${K}) .switch {
      ${Wo}
      background: ${uc};
    }

    :host(.checked) .switch {
      background: ${yt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${We};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ge};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${gt};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${gt};
      cursor: pointer;
      ${At}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${gt};
      ${At}
      margin-inline-end: calc(${H} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${H} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${yt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${as};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${We};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Yf};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ge};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Jf};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Js(T`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,T`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),at(T`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${g.FieldText};
        }
        .switch {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(.checked) .switch {
          background: ${g.Highlight};
          border-color: ${g.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${g.HighlightText};
          border-color: ${g.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${g.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${g.Highlight};
        }
        :host(:${K}) .switch {
          forced-color-adjust: none;
          background: ${g.Field}; 
          border-color: ${g.Highlight};
          outline-color: ${g.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${g.GrayText};
        }
        :host(.disabled) .switch {
          background: ${g.Field};
          border-color: ${g.GrayText};
        }
        .status-message,
        .label {
          color: ${g.FieldText};
        }
      `)),J$=Ql.compose({baseName:"switch",template:a0,styles:Y$,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Q$=(i,t)=>T`
      ${lt("grid")} :host {
        box-sizing: border-box;
        ${At}
        color: ${gt};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${rt} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${pt} * 1px);
        justify-self: center;
        background: ${yt};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${Jt} * 1px);
        border-radius: calc(${pt} * 1px);
        align-self: center;
        background: ${yt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(at(T`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${g.Highlight};
        }
      `)),Z$=(i,t)=>T`
      ${lt("inline-flex")} :host {
        box-sizing: border-box;
        ${At}
        height: calc((${rt} + (${H} * 2)) * 1px);
        padding: 0 calc((6 + (${H} * 2 * ${Bi})) * 1px);
        color: ${gt};
        border-radius: calc(${pt} * 1px);
        border: calc(${U} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${gt};
      }

      :host(:${K}) {
        ${He}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${gt};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(at(T`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${g.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${g.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${g.Highlight};
            fill: currentcolor;
          }
          :host(:${K}) {
            background: transparent;
            outline-color: ${g.ButtonText};
          }
        `)),K$=nf.compose({baseName:"tab",template:u0,styles:Z$}),t1=(i,t)=>T`
  ${lt("block")} :host {
    box-sizing: border-box;
    ${At}
    padding: 0 calc((6 + (${H} * 2 * ${Bi})) * 1px);
  }
`,e1=h0.compose({baseName:"tab-panel",template:d0,styles:t1}),i1=wi.compose({baseName:"tabs",template:f0,styles:Q$}),kn=".control",s1=(i,t)=>T`
    ${lt("inline-flex")}

    ${Jr(i,t,kn)}

    ${Go()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${rt} * 2) * 1px);
      padding: calc(${H} * 1.5px) calc(${H} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }

    :host([cols]) {
      width: initial;
    }

    :host([rows]) .control {
      height: initial;
    }
  `.withBehaviors(It("outline",Xo(i,t,kn)),It("filled",Qs(i,t,kn)),at(Zs(i,t,kn)));class vp extends Zt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],vp.prototype,"appearance",void 0);const o1=vp.compose({baseName:"text-area",baseClass:Zt,template:m0,styles:s1,shadowOptions:{delegatesFocus:!0}}),Fn=".root",n1=(i,t)=>T`
    ${lt("inline-block")}

    ${Jr(i,t,Fn)}

    ${Go()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${H} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(It("outline",Xo(i,t,Fn)),It("filled",Qs(i,t,Fn)),at(Zs(i,t,Fn)));class yp extends ve{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],yp.prototype,"appearance",void 0);const r1=yp.compose({baseName:"text-field",baseClass:ve,template:b0,styles:n1,shadowOptions:{delegatesFocus:!0}}),a1=(i,t)=>T`
    ${lt("inline-flex")} :host {
      --toolbar-item-gap: calc(${H} * 1px);
      background: ${ot};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${K}) {
      ${He}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(at(T`
        :host(:${K}) {
          outline-color: ${g.Highlight};
          color: ${g.ButtonText};
          forced-color-adjust: none;
        }
      `));class l1 extends zi{}const c1=l1.compose({baseName:"toolbar",baseClass:zi,template:v0,styles:a1}),d1=(i,t)=>T`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid ${Os};
      background: ${ot};
      color: ${gt};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${At}
      white-space: nowrap;
      box-shadow: ${bw};
    }

    ${i.tagFor(Y)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(Y)}.right,
    ${i.tagFor(Y)}.left {
      flex-direction: column;
    }

    ${i.tagFor(Y)}.top .tooltip::after,
    ${i.tagFor(Y)}.bottom .tooltip::after,
    ${i.tagFor(Y)}.left .tooltip::after,
    ${i.tagFor(Y)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${ot};
      border-top: calc(${U} * 1px) solid ${Os};
      border-left: calc(${U} * 1px) solid ${Os};
      position: absolute;
    }

    ${i.tagFor(Y)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(Y)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(Y)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(Y)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(Y)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(Y)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(Y)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(Y)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(at(T`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(Y)}.top .tooltip::after,
        ${i.tagFor(Y)}.bottom .tooltip::after,
        ${i.tagFor(Y)}.left .tooltip::after,
        ${i.tagFor(Y)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class h1 extends Ht{connectedCallback(){super.connectedCallback(),ot.setValueFor(this,Uo)}}const u1=h1.compose({baseName:"tooltip",baseClass:Ht,template:y0,styles:d1}),f1=(i,t)=>T`
  :host([hidden]) {
    display: none;
  }

  ${lt("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,p1=Rr.compose({baseName:"tree-view",template:w0,styles:f1}),g1=T`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    left: calc(${Jt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,m1=T`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    right: calc(${Jt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,dh=we`((${Er} / 2) * ${H}) + ((${H} * ${Bi}) / 2)`,b1=mt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=Xe.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),v1=mt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=ms.getValueFor(i);return Xe.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),y1=(i,t)=>T`
    ${lt("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${gt};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${_e};
      --expand-collapse-button-size: calc(${rt} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Ns};
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc((${rt} + 1) * 1px);
    }

    :host(:${K}) .positioning-region {
      ${He}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${zs};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Bs};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${rt} * 1px);
      margin-inline-start: calc(${H} * 2px + 8px);
      ${At}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${H} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${pt} * 1px);
      ${""} width: calc((${dh} + (${H} * 2)) * 1px);
      height: calc((${dh} + (${H} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${H} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${H} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Se};
      cursor: ${Pe};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${b1};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${ls};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${v1};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${rt} / 4) * 1px);
      width: 3px;
      height: calc((${rt} / 2) * 1px);
      ${""} background: ${yt};
      border-radius: calc(${pt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${rt} * -1px);
    }
  `.withBehaviors(new Js(g1,m1),at(T`
        :host {
          color: ${g.ButtonText};
        }
        .positioning-region {
          border-color: ${g.ButtonFace};
          background: ${g.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${g.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${g.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${g.GrayText};
        }
        :host([selected])::after {
          background: ${g.HighlightText};
        }
        :host(:${K}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${g.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${g.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${g.ButtonFace};
          fill: ${g.ButtonText};
        }
      `)),x1=Mt.compose({baseName:"tree-item",template:x0,styles:y1,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),w1={fluentAccordion:cw,fluentAccordionItem:lw,fluentAnchor:Tw,fluentAnchoredRegion:Rw,fluentBadge:Ew,fluentBreadcrumb:Aw,fluentBreadcrumbItem:Lw,fluentButton:_w,fluentCalendar:zw,fluentCard:jw,fluentCheckbox:qw,fluentCombobox:Yw,fluentDataGrid:e$,fluentDataGridCell:Kw,fluentDataGridRow:t$,fluentDesignSystemProvider:i$,fluentDialog:o$,fluentDivider:r$,fluentFlipper:l$,fluentHorizontalScroll:p$,fluentListbox:b$,fluentOption:y$,fluentMenu:$$,fluentMenuItem:k$,fluentNumberField:S$,fluentProgress:R$,fluentProgressRing:O$,fluentRadio:V$,fluentRadioGroup:P$,fluentSearch:z$,fluentSelect:B$,fluentSkeleton:U$,fluentSlider:W$,fluentSliderLabel:X$,fluentSwitch:J$,fluentTabs:i1,fluentTab:K$,fluentTabPanel:e1,fluentTextArea:o1,fluentTextField:r1,fluentToolbar:c1,fluentTooltip:u1,fluentTreeView:p1,fluentTreeItem:x1,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function $1(i){return Yu.getOrCreate(i).withPrefix("fluent")}function xp(i,t){return function(){return i.apply(t,arguments)}}const{toString:C1}=Object.prototype,{getPrototypeOf:$c}=Object,Qr=(i=>t=>{const e=C1.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),ni=i=>(i=i.toLowerCase(),t=>Qr(t)===i),Zr=i=>t=>typeof t===i,{isArray:Ks}=Array,Lo=Zr("undefined");function k1(i){return i!==null&&!Lo(i)&&i.constructor!==null&&!Lo(i.constructor)&&Ee(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const wp=ni("ArrayBuffer");function F1(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&wp(i.buffer),t}const S1=Zr("string"),Ee=Zr("function"),$p=Zr("number"),Kr=i=>i!==null&&typeof i=="object",T1=i=>i===!0||i===!1,Pn=i=>{if(Qr(i)!=="object")return!1;const t=$c(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},I1=ni("Date"),R1=ni("File"),D1=ni("Blob"),E1=ni("FileList"),O1=i=>Kr(i)&&Ee(i.pipe),A1=i=>{let t;return i&&(typeof FormData=="function"&&i instanceof FormData||Ee(i.append)&&((t=Qr(i))==="formdata"||t==="object"&&Ee(i.toString)&&i.toString()==="[object FormData]"))},V1=ni("URLSearchParams"),L1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yo(i,t,{allOwnKeys:e=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),Ks(i))for(s=0,o=i.length;s<o;s++)t.call(null,i[s],s,i);else{const n=e?Object.getOwnPropertyNames(i):Object.keys(i),r=n.length;let a;for(s=0;s<r;s++)a=n[s],t.call(null,i[a],a,i)}}function Cp(i,t){t=t.toLowerCase();const e=Object.keys(i);let s=e.length,o;for(;s-- >0;)if(o=e[s],t===o.toLowerCase())return o;return null}const kp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fp=i=>!Lo(i)&&i!==kp;function fl(){const{caseless:i}=Fp(this)&&this||{},t={},e=(s,o)=>{const n=i&&Cp(t,o)||o;Pn(t[n])&&Pn(s)?t[n]=fl(t[n],s):Pn(s)?t[n]=fl({},s):Ks(s)?t[n]=s.slice():t[n]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&Yo(arguments[s],e);return t}const P1=(i,t,e,{allOwnKeys:s}={})=>(Yo(t,(o,n)=>{e&&Ee(o)?i[n]=xp(o,e):i[n]=o},{allOwnKeys:s}),i),_1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),H1=(i,t,e,s)=>{i.prototype=Object.create(t.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:t.prototype}),e&&Object.assign(i.prototype,e)},M1=(i,t,e,s)=>{let o,n,r;const a={};if(t=t||{},i==null)return t;do{for(o=Object.getOwnPropertyNames(i),n=o.length;n-- >0;)r=o[n],(!s||s(r,i,t))&&!a[r]&&(t[r]=i[r],a[r]=!0);i=e!==!1&&$c(i)}while(i&&(!e||e(i,t))&&i!==Object.prototype);return t},N1=(i,t,e)=>{i=String(i),(e===void 0||e>i.length)&&(e=i.length),e-=t.length;const s=i.indexOf(t,e);return s!==-1&&s===e},z1=i=>{if(!i)return null;if(Ks(i))return i;let t=i.length;if(!$p(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=i[t];return e},B1=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&$c(Uint8Array)),j1=(i,t)=>{const s=(i&&i[Symbol.iterator]).call(i);let o;for(;(o=s.next())&&!o.done;){const n=o.value;t.call(i,n[0],n[1])}},U1=(i,t)=>{let e;const s=[];for(;(e=i.exec(t))!==null;)s.push(e);return s},q1=ni("HTMLFormElement"),W1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,s,o){return s.toUpperCase()+o}),hh=(({hasOwnProperty:i})=>(t,e)=>i.call(t,e))(Object.prototype),G1=ni("RegExp"),Sp=(i,t)=>{const e=Object.getOwnPropertyDescriptors(i),s={};Yo(e,(o,n)=>{let r;(r=t(o,n,i))!==!1&&(s[n]=r||o)}),Object.defineProperties(i,s)},X1=i=>{Sp(i,(t,e)=>{if(Ee(i)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const s=i[e];if(Ee(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},Y1=(i,t)=>{const e={},s=o=>{o.forEach(n=>{e[n]=!0})};return Ks(i)?s(i):s(String(i).split(t)),e},J1=()=>{},Q1=(i,t)=>(i=+i,Number.isFinite(i)?i:t),Ha="abcdefghijklmnopqrstuvwxyz",uh="0123456789",Tp={DIGIT:uh,ALPHA:Ha,ALPHA_DIGIT:Ha+Ha.toUpperCase()+uh},Z1=(i=16,t=Tp.ALPHA_DIGIT)=>{let e="";const{length:s}=t;for(;i--;)e+=t[Math.random()*s|0];return e};function K1(i){return!!(i&&Ee(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const tC=i=>{const t=new Array(10),e=(s,o)=>{if(Kr(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[o]=s;const n=Ks(s)?[]:{};return Yo(s,(r,a)=>{const l=e(r,o+1);!Lo(l)&&(n[a]=l)}),t[o]=void 0,n}}return s};return e(i,0)},eC=ni("AsyncFunction"),iC=i=>i&&(Kr(i)||Ee(i))&&Ee(i.then)&&Ee(i.catch),$={isArray:Ks,isArrayBuffer:wp,isBuffer:k1,isFormData:A1,isArrayBufferView:F1,isString:S1,isNumber:$p,isBoolean:T1,isObject:Kr,isPlainObject:Pn,isUndefined:Lo,isDate:I1,isFile:R1,isBlob:D1,isRegExp:G1,isFunction:Ee,isStream:O1,isURLSearchParams:V1,isTypedArray:B1,isFileList:E1,forEach:Yo,merge:fl,extend:P1,trim:L1,stripBOM:_1,inherits:H1,toFlatObject:M1,kindOf:Qr,kindOfTest:ni,endsWith:N1,toArray:z1,forEachEntry:j1,matchAll:U1,isHTMLForm:q1,hasOwnProperty:hh,hasOwnProp:hh,reduceDescriptors:Sp,freezeMethods:X1,toObjectSet:Y1,toCamelCase:W1,noop:J1,toFiniteNumber:Q1,findKey:Cp,global:kp,isContextDefined:Fp,ALPHABET:Tp,generateString:Z1,isSpecCompliantForm:K1,toJSONObject:tC,isAsyncFn:eC,isThenable:iC};function dt(i,t,e,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),s&&(this.request=s),o&&(this.response=o)}$.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ip=dt.prototype,Rp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Rp[i]={value:i}});Object.defineProperties(dt,Rp);Object.defineProperty(Ip,"isAxiosError",{value:!0});dt.from=(i,t,e,s,o,n)=>{const r=Object.create(Ip);return $.toFlatObject(i,r,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),dt.call(r,i.message,t,e,s,o),r.cause=i,r.name=i.name,n&&Object.assign(r,n),r};const sC=null;function pl(i){return $.isPlainObject(i)||$.isArray(i)}function Dp(i){return $.endsWith(i,"[]")?i.slice(0,-2):i}function fh(i,t,e){return i?i.concat(t).map(function(o,n){return o=Dp(o),!e&&n?"["+o+"]":o}).join(e?".":""):t}function oC(i){return $.isArray(i)&&!i.some(pl)}const nC=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function ta(i,t,e){if(!$.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,e=$.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,R){return!$.isUndefined(R[k])});const s=e.metaTokens,o=e.visitor||d,n=e.dots,r=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(C){if(C===null)return"";if($.isDate(C))return C.toISOString();if(!l&&$.isBlob(C))throw new dt("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(C)||$.isTypedArray(C)?l&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function d(C,k,R){let V=C;if(C&&!R&&typeof C=="object"){if($.endsWith(k,"{}"))k=s?k:k.slice(0,-2),C=JSON.stringify(C);else if($.isArray(C)&&oC(C)||($.isFileList(C)||$.endsWith(k,"[]"))&&(V=$.toArray(C)))return k=Dp(k),V.forEach(function(W,nt){!($.isUndefined(W)||W===null)&&t.append(r===!0?fh([k],nt,n):r===null?k:k+"[]",c(W))}),!1}return pl(C)?!0:(t.append(fh(R,k,n),c(C)),!1)}const u=[],b=Object.assign(nC,{defaultVisitor:d,convertValue:c,isVisitable:pl});function y(C,k){if(!$.isUndefined(C)){if(u.indexOf(C)!==-1)throw Error("Circular reference detected in "+k.join("."));u.push(C),$.forEach(C,function(V,j){(!($.isUndefined(V)||V===null)&&o.call(t,V,$.isString(j)?j.trim():j,k,b))===!0&&y(V,k?k.concat(j):[j])}),u.pop()}}if(!$.isObject(i))throw new TypeError("data must be an object");return y(i),t}function ph(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function Cc(i,t){this._pairs=[],i&&ta(i,this,t)}const Ep=Cc.prototype;Ep.append=function(t,e){this._pairs.push([t,e])};Ep.toString=function(t){const e=t?function(s){return t.call(this,s,ph)}:ph;return this._pairs.map(function(o){return e(o[0])+"="+e(o[1])},"").join("&")};function rC(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Op(i,t,e){if(!t)return i;const s=e&&e.encode||rC,o=e&&e.serialize;let n;if(o?n=o(t,e):n=$.isURLSearchParams(t)?t.toString():new Cc(t,e).toString(s),n){const r=i.indexOf("#");r!==-1&&(i=i.slice(0,r)),i+=(i.indexOf("?")===-1?"?":"&")+n}return i}class gh{constructor(){this.handlers=[]}use(t,e,s){return this.handlers.push({fulfilled:t,rejected:e,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ap={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},aC=typeof URLSearchParams<"u"?URLSearchParams:Cc,lC=typeof FormData<"u"?FormData:null,cC=typeof Blob<"u"?Blob:null,dC={isBrowser:!0,classes:{URLSearchParams:aC,FormData:lC,Blob:cC},protocols:["http","https","file","blob","url","data"]},Vp=typeof window<"u"&&typeof document<"u",hC=(i=>Vp&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),uC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Vp,hasStandardBrowserEnv:hC,hasStandardBrowserWebWorkerEnv:uC},Symbol.toStringTag,{value:"Module"})),ei={...fC,...dC};function pC(i,t){return ta(i,new ei.classes.URLSearchParams,Object.assign({visitor:function(e,s,o,n){return ei.isNode&&$.isBuffer(e)?(this.append(s,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}function gC(i){return $.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function mC(i){const t={},e=Object.keys(i);let s;const o=e.length;let n;for(s=0;s<o;s++)n=e[s],t[n]=i[n];return t}function Lp(i){function t(e,s,o,n){let r=e[n++];if(r==="__proto__")return!0;const a=Number.isFinite(+r),l=n>=e.length;return r=!r&&$.isArray(o)?o.length:r,l?($.hasOwnProp(o,r)?o[r]=[o[r],s]:o[r]=s,!a):((!o[r]||!$.isObject(o[r]))&&(o[r]=[]),t(e,s,o[r],n)&&$.isArray(o[r])&&(o[r]=mC(o[r])),!a)}if($.isFormData(i)&&$.isFunction(i.entries)){const e={};return $.forEachEntry(i,(s,o)=>{t(gC(s),o,e,0)}),e}return null}function bC(i,t,e){if($.isString(i))try{return(t||JSON.parse)(i),$.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(e||JSON.stringify)(i)}const kc={transitional:Ap,adapter:["xhr","http"],transformRequest:[function(t,e){const s=e.getContentType()||"",o=s.indexOf("application/json")>-1,n=$.isObject(t);if(n&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(Lp(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(n){if(s.indexOf("application/x-www-form-urlencoded")>-1)return pC(t,this.formSerializer).toString();if((a=$.isFileList(t))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ta(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return n||o?(e.setContentType("application/json",!1),bC(t)):t}],transformResponse:[function(t){const e=this.transitional||kc.transitional,s=e&&e.forcedJSONParsing,o=this.responseType==="json";if(t&&$.isString(t)&&(s&&!this.responseType||o)){const r=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(r)throw a.name==="SyntaxError"?dt.from(a,dt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ei.classes.FormData,Blob:ei.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],i=>{kc.headers[i]={}});const Fc=kc,vC=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yC=i=>{const t={};let e,s,o;return i&&i.split(`
`).forEach(function(r){o=r.indexOf(":"),e=r.substring(0,o).trim().toLowerCase(),s=r.substring(o+1).trim(),!(!e||t[e]&&vC[e])&&(e==="set-cookie"?t[e]?t[e].push(s):t[e]=[s]:t[e]=t[e]?t[e]+", "+s:s)}),t},mh=Symbol("internals");function ho(i){return i&&String(i).trim().toLowerCase()}function _n(i){return i===!1||i==null?i:$.isArray(i)?i.map(_n):String(i)}function xC(i){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=e.exec(i);)t[s[1]]=s[2];return t}const wC=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ma(i,t,e,s,o){if($.isFunction(s))return s.call(this,t,e);if(o&&(t=e),!!$.isString(t)){if($.isString(s))return t.indexOf(s)!==-1;if($.isRegExp(s))return s.test(t)}}function $C(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,s)=>e.toUpperCase()+s)}function CC(i,t){const e=$.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+e,{value:function(o,n,r){return this[s].call(this,t,o,n,r)},configurable:!0})})}class ea{constructor(t){t&&this.set(t)}set(t,e,s){const o=this;function n(a,l,c){const d=ho(l);if(!d)throw new Error("header name must be a non-empty string");const u=$.findKey(o,d);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||l]=_n(a))}const r=(a,l)=>$.forEach(a,(c,d)=>n(c,d,l));return $.isPlainObject(t)||t instanceof this.constructor?r(t,e):$.isString(t)&&(t=t.trim())&&!wC(t)?r(yC(t),e):t!=null&&n(e,t,s),this}get(t,e){if(t=ho(t),t){const s=$.findKey(this,t);if(s){const o=this[s];if(!e)return o;if(e===!0)return xC(o);if($.isFunction(e))return e.call(this,o,s);if($.isRegExp(e))return e.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ho(t),t){const s=$.findKey(this,t);return!!(s&&this[s]!==void 0&&(!e||Ma(this,this[s],s,e)))}return!1}delete(t,e){const s=this;let o=!1;function n(r){if(r=ho(r),r){const a=$.findKey(s,r);a&&(!e||Ma(s,s[a],a,e))&&(delete s[a],o=!0)}}return $.isArray(t)?t.forEach(n):n(t),o}clear(t){const e=Object.keys(this);let s=e.length,o=!1;for(;s--;){const n=e[s];(!t||Ma(this,this[n],n,t,!0))&&(delete this[n],o=!0)}return o}normalize(t){const e=this,s={};return $.forEach(this,(o,n)=>{const r=$.findKey(s,n);if(r){e[r]=_n(o),delete e[n];return}const a=t?$C(n):String(n).trim();a!==n&&delete e[n],e[a]=_n(o),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return $.forEach(this,(s,o)=>{s!=null&&s!==!1&&(e[o]=t&&$.isArray(s)?s.join(", "):s)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const s=new this(t);return e.forEach(o=>s.set(o)),s}static accessor(t){const s=(this[mh]=this[mh]={accessors:{}}).accessors,o=this.prototype;function n(r){const a=ho(r);s[a]||(CC(o,r),s[a]=!0)}return $.isArray(t)?t.forEach(n):n(t),this}}ea.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(ea.prototype,({value:i},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(s){this[e]=s}}});$.freezeMethods(ea);const di=ea;function Na(i,t){const e=this||Fc,s=t||e,o=di.from(s.headers);let n=s.data;return $.forEach(i,function(a){n=a.call(e,n,o.normalize(),t?t.status:void 0)}),o.normalize(),n}function Pp(i){return!!(i&&i.__CANCEL__)}function Jo(i,t,e){dt.call(this,i??"canceled",dt.ERR_CANCELED,t,e),this.name="CanceledError"}$.inherits(Jo,dt,{__CANCEL__:!0});function kC(i,t,e){const s=e.config.validateStatus;!e.status||!s||s(e.status)?i(e):t(new dt("Request failed with status code "+e.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}const FC=ei.hasStandardBrowserEnv?{write(i,t,e,s,o,n){const r=[i+"="+encodeURIComponent(t)];$.isNumber(e)&&r.push("expires="+new Date(e).toGMTString()),$.isString(s)&&r.push("path="+s),$.isString(o)&&r.push("domain="+o),n===!0&&r.push("secure"),document.cookie=r.join("; ")},read(i){const t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function SC(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function TC(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function _p(i,t){return i&&!SC(t)?TC(i,t):t}const IC=ei.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let s;function o(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return s=o(window.location.href),function(r){const a=$.isString(r)?o(r):r;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function RC(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function DC(i,t){i=i||10;const e=new Array(i),s=new Array(i);let o=0,n=0,r;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=s[n];r||(r=c),e[o]=l,s[o]=c;let u=n,b=0;for(;u!==o;)b+=e[u++],u=u%i;if(o=(o+1)%i,o===n&&(n=(n+1)%i),c-r<t)return;const y=d&&c-d;return y?Math.round(b*1e3/y):void 0}}function bh(i,t){let e=0;const s=DC(50,250);return o=>{const n=o.loaded,r=o.lengthComputable?o.total:void 0,a=n-e,l=s(a),c=n<=r;e=n;const d={loaded:n,total:r,progress:r?n/r:void 0,bytes:a,rate:l||void 0,estimated:l&&r&&c?(r-n)/l:void 0,event:o};d[t?"download":"upload"]=!0,i(d)}}const EC=typeof XMLHttpRequest<"u",OC=EC&&function(i){return new Promise(function(e,s){let o=i.data;const n=di.from(i.headers).normalize();let{responseType:r,withXSRFToken:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d;if($.isFormData(o)){if(ei.hasStandardBrowserEnv||ei.hasStandardBrowserWebWorkerEnv)n.setContentType(!1);else if((d=n.getContentType())!==!1){const[k,...R]=d?d.split(";").map(V=>V.trim()).filter(Boolean):[];n.setContentType([k||"multipart/form-data",...R].join("; "))}}let u=new XMLHttpRequest;if(i.auth){const k=i.auth.username||"",R=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";n.set("Authorization","Basic "+btoa(k+":"+R))}const b=_p(i.baseURL,i.url);u.open(i.method.toUpperCase(),Op(b,i.params,i.paramsSerializer),!0),u.timeout=i.timeout;function y(){if(!u)return;const k=di.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),V={data:!r||r==="text"||r==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:k,config:i,request:u};kC(function(W){e(W),c()},function(W){s(W),c()},V),u=null}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){u&&(s(new dt("Request aborted",dt.ECONNABORTED,i,u)),u=null)},u.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,u)),u=null},u.ontimeout=function(){let R=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const V=i.transitional||Ap;i.timeoutErrorMessage&&(R=i.timeoutErrorMessage),s(new dt(R,V.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,u)),u=null},ei.hasStandardBrowserEnv&&(a&&$.isFunction(a)&&(a=a(i)),a||a!==!1&&IC(b))){const k=i.xsrfHeaderName&&i.xsrfCookieName&&FC.read(i.xsrfCookieName);k&&n.set(i.xsrfHeaderName,k)}o===void 0&&n.setContentType(null),"setRequestHeader"in u&&$.forEach(n.toJSON(),function(R,V){u.setRequestHeader(V,R)}),$.isUndefined(i.withCredentials)||(u.withCredentials=!!i.withCredentials),r&&r!=="json"&&(u.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&u.addEventListener("progress",bh(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",bh(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=k=>{u&&(s(!k||k.type?new Jo(null,i,u):k),u.abort(),u=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const C=RC(b);if(C&&ei.protocols.indexOf(C)===-1){s(new dt("Unsupported protocol "+C+":",dt.ERR_BAD_REQUEST,i));return}u.send(o||null)})},gl={http:sC,xhr:OC};$.forEach(gl,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const vh=i=>`- ${i}`,AC=i=>$.isFunction(i)||i===null||i===!1,Hp={getAdapter:i=>{i=$.isArray(i)?i:[i];const{length:t}=i;let e,s;const o={};for(let n=0;n<t;n++){e=i[n];let r;if(s=e,!AC(e)&&(s=gl[(r=String(e)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${r}'`);if(s)break;o[r||"#"+n]=s}if(!s){const n=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let r=t?n.length>1?`since :
`+n.map(vh).join(`
`):" "+vh(n[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return s},adapters:gl};function za(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Jo(null,i)}function yh(i){return za(i),i.headers=di.from(i.headers),i.data=Na.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Hp.getAdapter(i.adapter||Fc.adapter)(i).then(function(s){return za(i),s.data=Na.call(i,i.transformResponse,s),s.headers=di.from(s.headers),s},function(s){return Pp(s)||(za(i),s&&s.response&&(s.response.data=Na.call(i,i.transformResponse,s.response),s.response.headers=di.from(s.response.headers))),Promise.reject(s)})}const xh=i=>i instanceof di?i.toJSON():i;function Us(i,t){t=t||{};const e={};function s(c,d,u){return $.isPlainObject(c)&&$.isPlainObject(d)?$.merge.call({caseless:u},c,d):$.isPlainObject(d)?$.merge({},d):$.isArray(d)?d.slice():d}function o(c,d,u){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c,u)}else return s(c,d,u)}function n(c,d){if(!$.isUndefined(d))return s(void 0,d)}function r(c,d){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c)}else return s(void 0,d)}function a(c,d,u){if(u in t)return s(c,d);if(u in i)return s(void 0,c)}const l={url:n,method:n,data:n,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(c,d)=>o(xh(c),xh(d),!0)};return $.forEach(Object.keys(Object.assign({},i,t)),function(d){const u=l[d]||o,b=u(i[d],t[d],d);$.isUndefined(b)&&u!==a||(e[d]=b)}),e}const Mp="1.6.7",Sc={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{Sc[i]=function(s){return typeof s===i||"a"+(t<1?"n ":" ")+i}});const wh={};Sc.transitional=function(t,e,s){function o(n,r){return"[Axios v"+Mp+"] Transitional option '"+n+"'"+r+(s?". "+s:"")}return(n,r,a)=>{if(t===!1)throw new dt(o(r," has been removed"+(e?" in "+e:"")),dt.ERR_DEPRECATED);return e&&!wh[r]&&(wh[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(n,r,a):!0}};function VC(i,t,e){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const n=s[o],r=t[n];if(r){const a=i[n],l=a===void 0||r(a,n,i);if(l!==!0)throw new dt("option "+n+" must be "+l,dt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new dt("Unknown option "+n,dt.ERR_BAD_OPTION)}}const ml={assertOptions:VC,validators:Sc},Si=ml.validators;class tr{constructor(t){this.defaults=t,this.interceptors={request:new gh,response:new gh}}async request(t,e){try{return await this._request(t,e)}catch(s){if(s instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const n=o.stack?o.stack.replace(/^.+\n/,""):"";s.stack?n&&!String(s.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+n):s.stack=n}throw s}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=Us(this.defaults,e);const{transitional:s,paramsSerializer:o,headers:n}=e;s!==void 0&&ml.assertOptions(s,{silentJSONParsing:Si.transitional(Si.boolean),forcedJSONParsing:Si.transitional(Si.boolean),clarifyTimeoutError:Si.transitional(Si.boolean)},!1),o!=null&&($.isFunction(o)?e.paramsSerializer={serialize:o}:ml.assertOptions(o,{encode:Si.function,serialize:Si.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let r=n&&$.merge(n.common,n[e.method]);n&&$.forEach(["delete","get","head","post","put","patch","common"],C=>{delete n[C]}),e.headers=di.concat(r,n);const a=[];let l=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(e)===!1||(l=l&&k.synchronous,a.unshift(k.fulfilled,k.rejected))});const c=[];this.interceptors.response.forEach(function(k){c.push(k.fulfilled,k.rejected)});let d,u=0,b;if(!l){const C=[yh.bind(this),void 0];for(C.unshift.apply(C,a),C.push.apply(C,c),b=C.length,d=Promise.resolve(e);u<b;)d=d.then(C[u++],C[u++]);return d}b=a.length;let y=e;for(u=0;u<b;){const C=a[u++],k=a[u++];try{y=C(y)}catch(R){k.call(this,R);break}}try{d=yh.call(this,y)}catch(C){return Promise.reject(C)}for(u=0,b=c.length;u<b;)d=d.then(c[u++],c[u++]);return d}getUri(t){t=Us(this.defaults,t);const e=_p(t.baseURL,t.url);return Op(e,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){tr.prototype[t]=function(e,s){return this.request(Us(s||{},{method:t,url:e,data:(s||{}).data}))}});$.forEach(["post","put","patch"],function(t){function e(s){return function(n,r,a){return this.request(Us(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}tr.prototype[t]=e(),tr.prototype[t+"Form"]=e(!0)});const Hn=tr;class Tc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(n){e=n});const s=this;this.promise.then(o=>{if(!s._listeners)return;let n=s._listeners.length;for(;n-- >0;)s._listeners[n](o);s._listeners=null}),this.promise.then=o=>{let n;const r=new Promise(a=>{s.subscribe(a),n=a}).then(o);return r.cancel=function(){s.unsubscribe(n)},r},t(function(n,r,a){s.reason||(s.reason=new Jo(n,r,a),e(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}static source(){let t;return{token:new Tc(function(o){t=o}),cancel:t}}}const LC=Tc;function PC(i){return function(e){return i.apply(null,e)}}function _C(i){return $.isObject(i)&&i.isAxiosError===!0}const bl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bl).forEach(([i,t])=>{bl[t]=i});const HC=bl;function Np(i){const t=new Hn(i),e=xp(Hn.prototype.request,t);return $.extend(e,Hn.prototype,t,{allOwnKeys:!0}),$.extend(e,t,null,{allOwnKeys:!0}),e.create=function(o){return Np(Us(i,o))},e}const _t=Np(Fc);_t.Axios=Hn;_t.CanceledError=Jo;_t.CancelToken=LC;_t.isCancel=Pp;_t.VERSION=Mp;_t.toFormData=ta;_t.AxiosError=dt;_t.Cancel=_t.CanceledError;_t.all=function(t){return Promise.all(t)};_t.spread=PC;_t.isAxiosError=_C;_t.mergeConfig=Us;_t.AxiosHeaders=di;_t.formToJSON=i=>Lp($.isHTMLForm(i)?new FormData(i):i);_t.getAdapter=Hp.getAdapter;_t.HttpStatusCode=HC;_t.default=_t;const MC=["value"],NC=Ll({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(ee(),ze("fluent-text-field",{value:o.modelValue,onInput:s},[ou(o.$slots,"default")],40,MC))}}),zC=["value"],BC=Ll({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(ee(),ze("fluent-combobox",{value:o.modelValue,onChange:s},[ou(o.$slots,"default")],40,zC))}}),vs=i=>(Lg("data-v-1ba6919b"),i=i(),Pg(),i),jC=vs(()=>X("div",{class:"header"},[X("img",{src:ub,class:"logo",alt:"Logo"}),X("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),UC={class:"general-information-container"},qC={class:"row"},WC=vs(()=>X("div",{class:"col"},[X("p",null,"Datum: ")],-1)),GC={class:"col"},XC={class:"row"},YC=vs(()=>X("div",{class:"col"},[X("p",null,"Rechnungsnummer: ")],-1)),JC={class:"col"},QC={class:"row"},ZC=vs(()=>X("div",{class:"col"},[X("p",null,"Name des Mitgliedes: ")],-1)),KC={class:"col"},tk={class:"row"},ek=vs(()=>X("div",{class:"col"},[X("p",null,"Rechnungsdateien: ")],-1)),ik={class:"col"},sk={for:"file",class:"custum-file-upload"},ok=Tm('<div class="icon" data-v-1ba6919b><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-1ba6919b><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-1ba6919b></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-1ba6919b></g><g id="SVGRepo_iconCarrier" data-v-1ba6919b><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-1ba6919b></path></g></svg></div><div class="text" data-v-1ba6919b><span data-v-1ba6919b>Click to Upload</span></div>',2),nk={ref:"fileNameDisplay",class:"uploaded-lable"},rk={key:0,class:"row"},ak=vs(()=>X("div",{class:"col"},[X("p",null,"Ausgewählte Dateien:")],-1)),lk={class:"col"},ck={class:"uploaded-files-container"},dk=["onClick"],hk=vs(()=>X("div",{class:"bill-disclaimer-container"},[X("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),X("p",null,"LSF-Wesel-Rheinhausen"),X("p",null,"Postfach 100240"),X("p",null,"46462 Wesel")],-1)),uk={class:"article-list-wrapper"},fk={class:"article-list-card"},pk=["value"],gk={class:"total-sum"},mk=Ll({__name:"App",setup(i){Or.withDefault(Ar);const t=["articleNumber","description","usage","costCenter","amount"],e=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],s=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function o(){return t.reduce((R,V)=>(R[V]=V==="amount"?0:"",R),{})}const n=la([o()]),r=()=>{n.value.push(o())},a=R=>R==="amount"?"number":"text",l=R=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[R]||"",c=wu(()=>n.value.reduce((R,V)=>R+parseFloat(V.amount||"0"),0).toFixed(2).replace(".",",")),d=la(null);iu(()=>{d.value&&d.value.addEventListener("change",u)});function u(R){const V=R.target;if(V.files){const j=Array.from(V.files);y.value.files.push(...j),V.value=""}}function b(R){y.value.files.splice(R,1)}const y=la({date:"",invoiceNumber:"",memberName:"",files:[],total:c.value});Wg(()=>{y.value.total=c.value});async function C(){if(y.value.files.length===0){console.error("Keine Datei ausgewählt"),alert("Keine Datei ausgewählt");return}const R=new FormData;R.append("date",y.value.date),R.append("invoiceNumber",y.value.invoiceNumber),R.append("memberName",y.value.memberName),R.append("total",y.value.total),y.value.files.forEach((V,j)=>{R.append(`files[${j}]`,V)});try{const V=await _t.post("/api/v1/test",R);console.log(V.data)}catch(V){console.error(V),alert(V)}}async function k(){if(y.value.files.length===0){console.error("Keine Datei ausgewählt"),alert("Keine Datei ausgewählt");return}const R=new FormData;R.append("date",y.value.date),R.append("invoiceNumber",y.value.invoiceNumber),R.append("memberName",y.value.memberName),R.append("total",y.value.total),y.value.files.forEach((V,j)=>{R.append(`files[${j}]`,V)});try{const V=await _t.post("/api/v1/test_with_mail",R);console.log(V.data)}catch(V){console.error(V),alert(V)}}return(R,V)=>(ee(),ze("div",null,[jC,X("div",UC,[X("div",qC,[WC,X("div",GC,[ha(X("fluent-text-field",{"onUpdate:modelValue":V[0]||(V[0]=j=>y.value.date=j),type:"date"},null,512),[[ba,y.value.date]])])]),X("div",XC,[YC,X("div",JC,[ha(X("fluent-text-field",{"onUpdate:modelValue":V[1]||(V[1]=j=>y.value.invoiceNumber=j),placeholder:"Rechnugnsnummer..."},null,512),[[ba,y.value.invoiceNumber]])])]),X("div",QC,[ZC,X("div",KC,[ha(X("fluent-text-field",{"onUpdate:modelValue":V[2]||(V[2]=j=>y.value.memberName=j),placeholder:"Name..."},null,512),[[ba,y.value.memberName]])])]),X("div",tk,[ek,X("div",ik,[X("label",sk,[ok,X("input",{id:"file",type:"file",ref_key:"fileInput",ref:d,multiple:""},null,512)]),X("div",nk,null,512)])]),y.value.files.length!==0?(ee(),ze("div",rk,[ak,X("div",lk,[X("div",ck,[(ee(!0),ze(Xt,null,so(y.value.files,(j,W)=>(ee(),ze("p",{key:W,class:"uploaded-file"},[vu(en(j.name)+" ",1),X("button",{onClick:nt=>b(W)},"❌",8,dk)]))),128))])])])):Im("",!0)]),hk,X("div",uk,[X("fluent-card",fk,[X("table",null,[X("thead",null,[X("tr",null,[(ee(),ze(Xt,null,so(e,j=>X("th",{key:j},en(j),1)),64))])]),X("tbody",null,[(ee(!0),ze(Xt,null,so(n.value,(j,W)=>(ee(),ze("tr",{key:W},[(ee(),ze(Xt,null,so(t,nt=>X("td",{key:nt},[nt!=="costCenter"?(ee(),jn(NC,{key:0,type:a(nt),modelValue:j[nt],"onUpdate:modelValue":bt=>j[nt]=bt,placeholder:l(nt)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(ee(),jn(BC,{key:1,modelValue:j[nt],"onUpdate:modelValue":bt=>j[nt]=bt,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:Zh(()=>[(ee(),ze(Xt,null,so(s,bt=>X("fluent-option",{position:"below",class:"combo-option",key:bt,value:bt},en(bt),9,pk)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),X("fluent-button",{appearance:"accent",onClick:r},"＋ Artikel hinzufügen"),X("div",gk,"Gesamtbetrag: "+en(c.value)+" €",1)])]),X("fluent-button",{appearance:"accent",onClick:C},"Test Submit"),X("fluent-button",{appearance:"accent",onClick:k},"Test Submit with Mail")]))}}),bk=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},vk=bk(mk,[["__scopeId","data-v-1ba6919b"]]);$1().register(w1);cb(vk).mount("#app");
