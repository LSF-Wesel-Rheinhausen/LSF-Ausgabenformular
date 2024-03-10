(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ha(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const Ft={},bs=[],Ie=()=>{},$p=()=>!1,Ln=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Ma=i=>i.startsWith("onUpdate:"),Nt=Object.assign,za=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},kp=Object.prototype.hasOwnProperty,at=(i,t)=>kp.call(i,t),J=Array.isArray,vs=i=>_n(i)==="[object Map]",kd=i=>_n(i)==="[object Set]",K=i=>typeof i=="function",Pt=i=>typeof i=="string",_s=i=>typeof i=="symbol",Rt=i=>i!==null&&typeof i=="object",Cd=i=>(Rt(i)||K(i))&&K(i.then)&&K(i.catch),Fd=Object.prototype.toString,_n=i=>Fd.call(i),Cp=i=>_n(i).slice(8,-1),Id=i=>_n(i)==="[object Object]",Ba=i=>Pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,hn=Ha(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Fp=/-(\w)/g,Qe=Pn(i=>i.replace(Fp,(t,e)=>e?e.toUpperCase():"")),Ip=/\B([A-Z])/g,Ps=Pn(i=>i.replace(Ip,"-$1").toLowerCase()),Hn=Pn(i=>i.charAt(0).toUpperCase()+i.slice(1)),Lr=Pn(i=>i?`on${Hn(i)}`:""),Fi=(i,t)=>!Object.is(i,t),_r=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},xn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Tp=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Yl;const Td=()=>Yl||(Yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Na(i){if(J(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=Pt(s)?Ep(s):Na(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(Pt(i)||Rt(i))return i}const Sp=/;(?![^(]*\))/g,Dp=/:([^]+)/,Rp=/\/\*[^]*?\*\//g;function Ep(i){const t={};return i.replace(Rp,"").split(Sp).forEach(e=>{if(e){const s=e.split(Dp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ja(i){let t="";if(Pt(i))t=i;else if(J(i))for(let e=0;e<i.length;e++){const s=ja(i[e]);s&&(t+=s+" ")}else if(Rt(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ap=Ha(Op);function Sd(i){return!!i||i===""}const Pr=i=>Pt(i)?i:i==null?"":J(i)||Rt(i)&&(i.toString===Fd||!K(i.toString))?JSON.stringify(i,Dd,2):String(i),Dd=(i,t)=>t&&t.__v_isRef?Dd(i,t.value):vs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[Hr(s,n)+" =>"]=o,e),{})}:kd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Hr(e))}:_s(t)?Hr(t):Rt(t)&&!J(t)&&!Id(t)?String(t):t,Hr=(i,t="")=>{var e;return _s(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _e;class Vp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!t&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=_e;try{return _e=this,t()}finally{_e=e}}}on(){_e=this}off(){_e=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Lp(i,t=_e){t&&t.active&&t.effects.push(i)}function _p(){return _e}let Gi;class Ua{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Lp(this,o)}get dirty(){if(this._dirtyLevel===1){ts();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(Pp(e.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),es()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ki,e=Gi;try{return ki=!0,Gi=this,this._runnings++,Xl(this),this.fn()}finally{Ql(this),this._runnings--,Gi=e,ki=t}}stop(){var t;this.active&&(Xl(this),Ql(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Pp(i){return i.value}function Xl(i){i._trackId++,i._depsLength=0}function Ql(i){if(i.deps&&i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Rd(i.deps[t],i);i.deps.length=i._depsLength}}function Rd(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let ki=!0,ua=0;const Ed=[];function ts(){Ed.push(ki),ki=!1}function es(){const i=Ed.pop();ki=i===void 0?!0:i}function qa(){ua++}function Ga(){for(ua--;!ua&&pa.length;)pa.shift()()}function Od(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Rd(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const pa=[];function Ad(i,t,e){qa();for(const s of i.keys())if(s._dirtyLevel<t&&i.get(s)===s._trackId){const o=s._dirtyLevel;s._dirtyLevel=t,o===0&&(s._shouldSchedule=!0,s.trigger())}Vd(i),Ga()}function Vd(i){for(const t of i.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&i.get(t)===t._trackId&&(t._shouldSchedule=!1,pa.push(t.scheduler))}const Ld=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},fa=new WeakMap,Wi=Symbol(""),ga=Symbol("");function he(i,t,e){if(ki&&Gi){let s=fa.get(i);s||fa.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Ld(()=>s.delete(e))),Od(Gi,o)}}function si(i,t,e,s,o,n){const r=fa.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&J(i)){const l=Number(s);r.forEach((d,u)=>{(u==="length"||!_s(u)&&u>=l)&&a.push(d)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":J(i)?Ba(e)&&a.push(r.get("length")):(a.push(r.get(Wi)),vs(i)&&a.push(r.get(ga)));break;case"delete":J(i)||(a.push(r.get(Wi)),vs(i)&&a.push(r.get(ga)));break;case"set":vs(i)&&a.push(r.get(Wi));break}qa();for(const l of a)l&&Ad(l,2);Ga()}const Hp=Ha("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(_s)),Zl=Mp();function Mp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ct(this);for(let n=0,r=this.length;n<r;n++)he(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ct)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){ts(),qa();const s=ct(this)[t].apply(this,e);return Ga(),es(),s}}),i}function zp(i){const t=ct(this);return he(t,"has",i),t.hasOwnProperty(i)}class Pd{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,s){const o=this._isReadonly,n=this._shallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?Kp:Bd:n?zd:Md).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=J(t);if(!o){if(r&&at(Zl,e))return Reflect.get(Zl,e,s);if(e==="hasOwnProperty")return zp}const a=Reflect.get(t,e,s);return(_s(e)?_d.has(e):Hp(e))||(o||he(t,"get",e),n)?a:ue(a)?r&&Ba(e)?a:a.value:Rt(a)?o?Nd(a):Xa(a):a}}class Hd extends Pd{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._shallow){const l=Fs(n);if(!wn(s)&&!Fs(s)&&(n=ct(n),s=ct(s)),!J(t)&&ue(n)&&!ue(s))return l?!1:(n.value=s,!0)}const r=J(t)&&Ba(e)?Number(e)<t.length:at(t,e),a=Reflect.set(t,e,s,o);return t===ct(o)&&(r?Fi(s,n)&&si(t,"set",e,s):si(t,"add",e,s)),a}deleteProperty(t,e){const s=at(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&si(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!_s(e)||!_d.has(e))&&he(t,"has",e),s}ownKeys(t){return he(t,"iterate",J(t)?"length":Wi),Reflect.ownKeys(t)}}class Bp extends Pd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Np=new Hd,jp=new Bp,Up=new Hd(!0),Wa=i=>i,Mn=i=>Reflect.getPrototypeOf(i);function zo(i,t,e=!1,s=!1){i=i.__v_raw;const o=ct(i),n=ct(t);e||(Fi(t,n)&&he(o,"get",t),he(o,"get",n));const{has:r}=Mn(o),a=s?Wa:e?Za:lo;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function Bo(i,t=!1){const e=this.__v_raw,s=ct(e),o=ct(i);return t||(Fi(i,o)&&he(s,"has",i),he(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function No(i,t=!1){return i=i.__v_raw,!t&&he(ct(i),"iterate",Wi),Reflect.get(i,"size",i)}function Jl(i){i=ct(i);const t=ct(this);return Mn(t).has.call(t,i)||(t.add(i),si(t,"add",i,i)),this}function Kl(i,t){t=ct(t);const e=ct(this),{has:s,get:o}=Mn(e);let n=s.call(e,i);n||(i=ct(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?Fi(t,r)&&si(e,"set",i,t):si(e,"add",i,t),this}function tc(i){const t=ct(this),{has:e,get:s}=Mn(t);let o=e.call(t,i);o||(i=ct(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&si(t,"delete",i,void 0),n}function ec(){const i=ct(this),t=i.size!==0,e=i.clear();return t&&si(i,"clear",void 0,void 0),e}function jo(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ct(r),l=t?Wa:i?Za:lo;return!i&&he(a,"iterate",Wi),r.forEach((d,u)=>s.call(o,l(d),l(u),n))}}function Uo(i,t,e){return function(...s){const o=this.__v_raw,n=ct(o),r=vs(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,d=o[i](...s),u=e?Wa:t?Za:lo;return!t&&he(n,"iterate",l?ga:Wi),{next(){const{value:g,done:b}=d.next();return b?{value:g,done:b}:{value:a?[u(g[0]),u(g[1])]:u(g),done:b}},[Symbol.iterator](){return this}}}}function mi(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function qp(){const i={get(n){return zo(this,n)},get size(){return No(this)},has:Bo,add:Jl,set:Kl,delete:tc,clear:ec,forEach:jo(!1,!1)},t={get(n){return zo(this,n,!1,!0)},get size(){return No(this)},has:Bo,add:Jl,set:Kl,delete:tc,clear:ec,forEach:jo(!1,!0)},e={get(n){return zo(this,n,!0)},get size(){return No(this,!0)},has(n){return Bo.call(this,n,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:jo(!0,!1)},s={get(n){return zo(this,n,!0,!0)},get size(){return No(this,!0)},has(n){return Bo.call(this,n,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=Uo(n,!1,!1),e[n]=Uo(n,!0,!1),t[n]=Uo(n,!1,!0),s[n]=Uo(n,!0,!0)}),[i,e,t,s]}const[Gp,Wp,Yp,Xp]=qp();function Ya(i,t){const e=t?i?Xp:Yp:i?Wp:Gp;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(at(e,o)&&o in s?e:s,o,n)}const Qp={get:Ya(!1,!1)},Zp={get:Ya(!1,!0)},Jp={get:Ya(!0,!1)},Md=new WeakMap,zd=new WeakMap,Bd=new WeakMap,Kp=new WeakMap;function tf(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ef(i){return i.__v_skip||!Object.isExtensible(i)?0:tf(Cp(i))}function Xa(i){return Fs(i)?i:Qa(i,!1,Np,Qp,Md)}function sf(i){return Qa(i,!1,Up,Zp,zd)}function Nd(i){return Qa(i,!0,jp,Jp,Bd)}function Qa(i,t,e,s,o){if(!Rt(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=ef(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function ys(i){return Fs(i)?ys(i.__v_raw):!!(i&&i.__v_isReactive)}function Fs(i){return!!(i&&i.__v_isReadonly)}function wn(i){return!!(i&&i.__v_isShallow)}function jd(i){return ys(i)||Fs(i)}function ct(i){const t=i&&i.__v_raw;return t?ct(t):i}function Ud(i){return xn(i,"__v_skip",!0),i}const lo=i=>Rt(i)?Xa(i):i,Za=i=>Rt(i)?Nd(i):i;class qd{constructor(t,e,s,o){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ua(()=>t(this._value),()=>un(this,1),()=>this.dep&&Vd(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ct(this);return(!t._cacheable||t.effect.dirty)&&Fi(t._value,t._value=t.effect.run())&&un(t,2),Gd(t),t.effect._dirtyLevel>=1&&un(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function of(i,t,e=!1){let s,o;const n=K(i);return n?(s=i,o=Ie):(s=i.get,o=i.set),new qd(s,o,n||!o,e)}function Gd(i){ki&&Gi&&(i=ct(i),Od(Gi,i.dep||(i.dep=Ld(()=>i.dep=void 0,i instanceof qd?i:void 0))))}function un(i,t=2,e){i=ct(i);const s=i.dep;s&&Ad(s,t)}function ue(i){return!!(i&&i.__v_isRef===!0)}function Mr(i){return nf(i,!1)}function nf(i,t){return ue(i)?i:new rf(i,t)}class rf{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ct(t),this._value=e?t:lo(t)}get value(){return Gd(this),this._value}set value(t){const e=this.__v_isShallow||wn(t)||Fs(t);t=e?t:ct(t),Fi(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:lo(t),un(this,2))}}function af(i){return ue(i)?i.value:i}const lf={get:(i,t,e)=>af(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return ue(o)&&!ue(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function Wd(i){return ys(i)?i:new Proxy(i,lf)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(i,t,e,s){let o;try{o=s?i(...s):i()}catch(n){zn(n,t,e)}return o}function ze(i,t,e,s){if(K(i)){const n=Ci(i,t,e,s);return n&&Cd(n)&&n.catch(r=>{zn(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(ze(i[n],t,e,s));return o}function zn(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const d=n.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Ci(l,null,10,[i,r,a]);return}}cf(i,e,o,s)}function cf(i,t,e,s=!0){console.error(i)}let co=!1,ma=!1;const qt=[];let Xe=0;const xs=[];let yi=null,ji=0;const Yd=Promise.resolve();let Ja=null;function df(i){const t=Ja||Yd;return i?t.then(this?i.bind(this):i):t}function hf(i){let t=Xe+1,e=qt.length;for(;t<e;){const s=t+e>>>1,o=qt[s],n=ho(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function Ka(i){(!qt.length||!qt.includes(i,co&&i.allowRecurse?Xe+1:Xe))&&(i.id==null?qt.push(i):qt.splice(hf(i.id),0,i),Xd())}function Xd(){!co&&!ma&&(ma=!0,Ja=Yd.then(Zd))}function uf(i){const t=qt.indexOf(i);t>Xe&&qt.splice(t,1)}function pf(i){J(i)?xs.push(...i):(!yi||!yi.includes(i,i.allowRecurse?ji+1:ji))&&xs.push(i),Xd()}function ic(i,t,e=co?Xe+1:0){for(;e<qt.length;e++){const s=qt[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;qt.splice(e,1),e--,s()}}}function Qd(i){if(xs.length){const t=[...new Set(xs)].sort((e,s)=>ho(e)-ho(s));if(xs.length=0,yi){yi.push(...t);return}for(yi=t,ji=0;ji<yi.length;ji++)yi[ji]();yi=null,ji=0}}const ho=i=>i.id==null?1/0:i.id,ff=(i,t)=>{const e=ho(i)-ho(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Zd(i){ma=!1,co=!0,qt.sort(ff);try{for(Xe=0;Xe<qt.length;Xe++){const t=qt[Xe];t&&t.active!==!1&&Ci(t,null,14)}}finally{Xe=0,qt.length=0,Qd(),co=!1,Ja=null,(qt.length||xs.length)&&Zd()}}function gf(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||Ft;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const u=`${r==="modelValue"?"model":r}Modifiers`,{number:g,trim:b}=s[u]||Ft;b&&(o=e.map(w=>Pt(w)?w.trim():w)),g&&(o=e.map(Tp))}let a,l=s[a=Lr(t)]||s[a=Lr(Qe(t))];!l&&n&&(l=s[a=Lr(Ps(t))]),l&&ze(l,i,6,o);const d=s[a+"Once"];if(d){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ze(d,i,6,o)}}function Jd(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!K(i)){const l=d=>{const u=Jd(d,t,!0);u&&(a=!0,Nt(r,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(Rt(i)&&s.set(i,null),null):(J(n)?n.forEach(l=>r[l]=null):Nt(r,n),Rt(i)&&s.set(i,r),r)}function Bn(i,t){return!i||!Ln(t)?!1:(t=t.slice(2).replace(/Once$/,""),at(i,t[0].toLowerCase()+t.slice(1))||at(i,Ps(t))||at(i,t))}let ee=null,Nn=null;function $n(i){const t=ee;return ee=i,Nn=i&&i.type.__scopeId||null,t}function mf(i){Nn=i}function bf(){Nn=null}function qi(i,t=ee,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&pc(-1);const n=$n(t);let r;try{r=i(...o)}finally{$n(n),s._d&&pc(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function zr(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:d,render:u,renderCache:g,data:b,setupState:w,ctx:V,inheritAttrs:P}=i;let B,rt;const ht=$n(i);try{if(e.shapeFlag&4){const pt=o||s,ft=pt;B=Ye(u.call(ft,pt,g,n,w,b,V)),rt=l}else{const pt=t;B=Ye(pt.length>1?pt(n,{attrs:l,slots:a,emit:d}):pt(n,null)),rt=t.props?l:vf(l)}}catch(pt){so.length=0,zn(pt,i,1),B=Ut(Is)}let Y=B;if(rt&&P!==!1){const pt=Object.keys(rt),{shapeFlag:ft}=Y;pt.length&&ft&7&&(r&&pt.some(Ma)&&(rt=yf(rt,r)),Y=Ts(Y,rt))}return e.dirs&&(Y=Ts(Y),Y.dirs=Y.dirs?Y.dirs.concat(e.dirs):e.dirs),e.transition&&(Y.transition=e.transition),B=Y,$n(ht),B}const vf=i=>{let t;for(const e in i)(e==="class"||e==="style"||Ln(e))&&((t||(t={}))[e]=i[e]);return t},yf=(i,t)=>{const e={};for(const s in i)(!Ma(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function xf(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,d=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?sc(s,r,d):!!r;if(l&8){const u=t.dynamicProps;for(let g=0;g<u.length;g++){const b=u[g];if(r[b]!==s[b]&&!Bn(d,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?sc(s,r,d):!0:!!r;return!1}function sc(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!Bn(e,n))return!0}return!1}function wf({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const Kd="components";function ps(i,t){return kf(Kd,i,!0,t)||i}const $f=Symbol.for("v-ndc");function kf(i,t,e=!0,s=!1){const o=ee||Gt;if(o){const n=o.type;if(i===Kd){const a=bg(n,!1);if(a&&(a===t||a===Qe(t)||a===Hn(Qe(t))))return n}const r=oc(o[i]||n[i],t)||oc(o.appContext[i],t);return!r&&s?n:r}}function oc(i,t){return i&&(i[t]||i[Qe(t)]||i[Hn(Qe(t))])}const Cf=i=>i.__isSuspense;function Ff(i,t){t&&t.pendingBranch?J(i)?t.effects.push(...i):t.effects.push(i):pf(i)}const If=Symbol.for("v-scx"),Tf=()=>pn(If),qo={};function Br(i,t,e){return th(i,t,e)}function th(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=Ft){if(t&&n){const j=t;t=(...ae)=>{j(...ae),ft()}}const l=Gt,d=j=>s===!0?j:fs(j,s===!1?1:void 0);let u,g=!1,b=!1;if(ue(i)?(u=()=>i.value,g=wn(i)):ys(i)?(u=()=>d(i),g=!0):J(i)?(b=!0,g=i.some(j=>ys(j)||wn(j)),u=()=>i.map(j=>{if(ue(j))return j.value;if(ys(j))return d(j);if(K(j))return Ci(j,l,2)})):K(i)?t?u=()=>Ci(i,l,2):u=()=>(w&&w(),ze(i,l,3,[V])):u=Ie,t&&s){const j=u;u=()=>fs(j())}let w,V=j=>{w=Y.onStop=()=>{Ci(j,l,4),w=Y.onStop=void 0}},P;if(Gn)if(V=Ie,t?e&&ze(t,l,3,[u(),b?[]:void 0,V]):u(),o==="sync"){const j=Tf();P=j.__watcherHandles||(j.__watcherHandles=[])}else return Ie;let B=b?new Array(i.length).fill(qo):qo;const rt=()=>{if(!(!Y.active||!Y.dirty))if(t){const j=Y.run();(s||g||(b?j.some((ae,le)=>Fi(ae,B[le])):Fi(j,B)))&&(w&&w(),ze(t,l,3,[j,B===qo?void 0:b&&B[0]===qo?[]:B,V]),B=j)}else Y.run()};rt.allowRecurse=!!t;let ht;o==="sync"?ht=rt:o==="post"?ht=()=>de(rt,l&&l.suspense):(rt.pre=!0,l&&(rt.id=l.uid),ht=()=>Ka(rt));const Y=new Ua(u,Ie,ht),pt=_p(),ft=()=>{Y.stop(),pt&&za(pt.effects,Y)};return t?e?rt():B=Y.run():o==="post"?de(Y.run.bind(Y),l&&l.suspense):Y.run(),P&&P.push(ft),ft}function Sf(i,t,e){const s=this.proxy,o=Pt(i)?i.includes(".")?eh(s,i):()=>s[i]:i.bind(s,s);let n;K(t)?n=t:(n=t.handler,e=t);const r=ko(this),a=th(o,n.bind(s),e);return r(),a}function eh(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function fs(i,t,e=0,s){if(!Rt(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),ue(i))fs(i.value,t,e,s);else if(J(i))for(let o=0;o<i.length;o++)fs(i[o],t,e,s);else if(kd(i)||vs(i))i.forEach(o=>{fs(o,t,e,s)});else if(Id(i))for(const o in i)fs(i[o],t,e,s);return i}function Hi(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(ts(),ze(l,e,8,[i.el,a,i,t]),es())}}/*! #__NO_SIDE_EFFECTS__ */function tl(i,t){return K(i)?Nt({name:i.name},t,{setup:i}):i}const eo=i=>!!i.type.__asyncLoader,ih=i=>i.type.__isKeepAlive;function Df(i,t){sh(i,"a",t)}function Rf(i,t){sh(i,"da",t)}function sh(i,t,e=Gt){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(jn(t,s,e),e){let o=e.parent;for(;o&&o.parent;)ih(o.parent.vnode)&&Ef(s,t,e,o),o=o.parent}}function Ef(i,t,e,s){const o=jn(t,i,s,!0);nh(()=>{za(s[t],o)},e)}function jn(i,t,e=Gt,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;ts();const a=ko(e),l=ze(t,e,i,r);return a(),es(),l});return s?o.unshift(n):o.push(n),n}}const ri=i=>(t,e=Gt)=>(!Gn||i==="sp")&&jn(i,(...s)=>t(...s),e),Of=ri("bm"),oh=ri("m"),Af=ri("bu"),Vf=ri("u"),Lf=ri("bum"),nh=ri("um"),_f=ri("sp"),Pf=ri("rtg"),Hf=ri("rtc");function Mf(i,t=Gt){jn("ec",i,t)}function Go(i,t,e,s){let o;const n=e&&e[s];if(J(i)||Pt(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(Rt(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const d=r[a];o[a]=t(i[d],d,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function rh(i,t,e={},s,o){if(ee.isCE||ee.parent&&eo(ee.parent)&&ee.parent.isCE)return t!=="default"&&(e.name=t),Ut("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),Pe();const r=n&&ah(n(e)),a=po(Jt,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function ah(i){return i.some(t=>vh(t)?!(t.type===Is||t.type===Jt&&!ah(t.children)):!0)?i:null}const ba=i=>i?xh(i)?ol(i)||i.proxy:ba(i.parent):null,io=Nt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ba(i.parent),$root:i=>ba(i.root),$emit:i=>i.emit,$options:i=>el(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Ka(i.update)}),$nextTick:i=>i.n||(i.n=df.bind(i.proxy)),$watch:i=>Sf.bind(i)}),Nr=(i,t)=>i!==Ft&&!i.__isScriptSetup&&at(i,t),zf={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let d;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(Nr(s,t))return r[t]=1,s[t];if(o!==Ft&&at(o,t))return r[t]=2,o[t];if((d=i.propsOptions[0])&&at(d,t))return r[t]=3,n[t];if(e!==Ft&&at(e,t))return r[t]=4,e[t];va&&(r[t]=0)}}const u=io[t];let g,b;if(u)return t==="$attrs"&&he(i,"get",t),u(i);if((g=a.__cssModules)&&(g=g[t]))return g;if(e!==Ft&&at(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,at(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return Nr(o,t)?(o[t]=e,!0):s!==Ft&&at(s,t)?(s[t]=e,!0):at(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==Ft&&at(i,r)||Nr(t,r)||(a=n[0])&&at(a,r)||at(s,r)||at(io,r)||at(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:at(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function nc(i){return J(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let va=!0;function Bf(i){const t=el(i),e=i.proxy,s=i.ctx;va=!1,t.beforeCreate&&rc(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:d,created:u,beforeMount:g,mounted:b,beforeUpdate:w,updated:V,activated:P,deactivated:B,beforeDestroy:rt,beforeUnmount:ht,destroyed:Y,unmounted:pt,render:ft,renderTracked:j,renderTriggered:ae,errorCaptured:le,serverPrefetch:qs,expose:Li,inheritAttrs:Gs,components:_o,directives:Po,filters:Er}=t;if(d&&Nf(d,s,null),r)for(const Tt in r){const vt=r[Tt];K(vt)&&(s[Tt]=vt.bind(e))}if(o){const Tt=o.call(e,e);Rt(Tt)&&(i.data=Xa(Tt))}if(va=!0,n)for(const Tt in n){const vt=n[Tt],_i=K(vt)?vt.bind(e,e):K(vt.get)?vt.get.bind(e,e):Ie,Ho=!K(vt)&&K(vt.set)?vt.set.bind(e):Ie,Pi=$h({get:_i,set:Ho});Object.defineProperty(s,Tt,{enumerable:!0,configurable:!0,get:()=>Pi.value,set:Ue=>Pi.value=Ue})}if(a)for(const Tt in a)lh(a[Tt],s,e,Tt);if(l){const Tt=K(l)?l.call(e):l;Reflect.ownKeys(Tt).forEach(vt=>{Yf(vt,Tt[vt])})}u&&rc(u,i,"c");function Qt(Tt,vt){J(vt)?vt.forEach(_i=>Tt(_i.bind(e))):vt&&Tt(vt.bind(e))}if(Qt(Of,g),Qt(oh,b),Qt(Af,w),Qt(Vf,V),Qt(Df,P),Qt(Rf,B),Qt(Mf,le),Qt(Hf,j),Qt(Pf,ae),Qt(Lf,ht),Qt(nh,pt),Qt(_f,qs),J(Li))if(Li.length){const Tt=i.exposed||(i.exposed={});Li.forEach(vt=>{Object.defineProperty(Tt,vt,{get:()=>e[vt],set:_i=>e[vt]=_i})})}else i.exposed||(i.exposed={});ft&&i.render===Ie&&(i.render=ft),Gs!=null&&(i.inheritAttrs=Gs),_o&&(i.components=_o),Po&&(i.directives=Po)}function Nf(i,t,e=Ie){J(i)&&(i=ya(i));for(const s in i){const o=i[s];let n;Rt(o)?"default"in o?n=pn(o.from||s,o.default,!0):n=pn(o.from||s):n=pn(o),ue(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function rc(i,t,e){ze(J(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function lh(i,t,e,s){const o=s.includes(".")?eh(e,s):()=>e[s];if(Pt(i)){const n=t[i];K(n)&&Br(o,n)}else if(K(i))Br(o,i.bind(e));else if(Rt(i))if(J(i))i.forEach(n=>lh(n,t,e,s));else{const n=K(i.handler)?i.handler.bind(e):t[i.handler];K(n)&&Br(o,n,i)}}function el(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(d=>kn(l,d,r,!0)),kn(l,t,r)),Rt(t)&&n.set(t,l),l}function kn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&kn(i,n,e,!0),o&&o.forEach(r=>kn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=jf[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const jf={data:ac,props:lc,emits:lc,methods:to,computed:to,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:to,directives:to,watch:qf,provide:ac,inject:Uf};function ac(i,t){return t?i?function(){return Nt(K(i)?i.call(this,this):i,K(t)?t.call(this,this):t)}:t:i}function Uf(i,t){return to(ya(i),ya(t))}function ya(i){if(J(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Zt(i,t){return i?[...new Set([].concat(i,t))]:t}function to(i,t){return i?Nt(Object.create(null),i,t):t}function lc(i,t){return i?J(i)&&J(t)?[...new Set([...i,...t])]:Nt(Object.create(null),nc(i),nc(t??{})):t}function qf(i,t){if(!i)return t;if(!t)return i;const e=Nt(Object.create(null),i);for(const s in t)e[s]=Zt(i[s],t[s]);return e}function ch(){return{app:null,config:{isNativeTag:$p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gf=0;function Wf(i,t){return function(s,o=null){K(s)||(s=Nt({},s)),o!=null&&!Rt(o)&&(o=null);const n=ch(),r=new WeakSet;let a=!1;const l=n.app={_uid:Gf++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:yg,get config(){return n.config},set config(d){},use(d,...u){return r.has(d)||(d&&K(d.install)?(r.add(d),d.install(l,...u)):K(d)&&(r.add(d),d(l,...u))),l},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),l},component(d,u){return u?(n.components[d]=u,l):n.components[d]},directive(d,u){return u?(n.directives[d]=u,l):n.directives[d]},mount(d,u,g){if(!a){const b=Ut(s,o);return b.appContext=n,g===!0?g="svg":g===!1&&(g=void 0),u&&t?t(b,d):i(b,d,g),a=!0,l._container=d,d.__vue_app__=l,ol(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(d,u){return n.provides[d]=u,l},runWithContext(d){Cn=l;try{return d()}finally{Cn=null}}};return l}}let Cn=null;function Yf(i,t){if(Gt){let e=Gt.provides;const s=Gt.parent&&Gt.parent.provides;s===e&&(e=Gt.provides=Object.create(s)),e[i]=t}}function pn(i,t,e=!1){const s=Gt||ee;if(s||Cn){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Cn._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&K(t)?t.call(s&&s.proxy):t}}function Xf(i,t,e,s=!1){const o={},n={};xn(n,qn,1),i.propsDefaults=Object.create(null),dh(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:sf(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function Qf(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ct(o),[l]=i.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=i.vnode.dynamicProps;for(let g=0;g<u.length;g++){let b=u[g];if(Bn(i.emitsOptions,b))continue;const w=t[b];if(l)if(at(n,b))w!==n[b]&&(n[b]=w,d=!0);else{const V=Qe(b);o[V]=xa(l,a,V,w,i,!1)}else w!==n[b]&&(n[b]=w,d=!0)}}}else{dh(i,t,o,n)&&(d=!0);let u;for(const g in a)(!t||!at(t,g)&&((u=Ps(g))===g||!at(t,u)))&&(l?e&&(e[g]!==void 0||e[u]!==void 0)&&(o[g]=xa(l,a,g,void 0,i,!0)):delete o[g]);if(n!==a)for(const g in n)(!t||!at(t,g))&&(delete n[g],d=!0)}d&&si(i,"set","$attrs")}function dh(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(hn(l))continue;const d=t[l];let u;o&&at(o,u=Qe(l))?!n||!n.includes(u)?e[u]=d:(a||(a={}))[u]=d:Bn(i.emitsOptions,l)||(!(l in s)||d!==s[l])&&(s[l]=d,r=!0)}if(n){const l=ct(e),d=a||Ft;for(let u=0;u<n.length;u++){const g=n[u];e[g]=xa(o,l,g,d[g],i,!at(d,g))}}return r}function xa(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=at(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&K(l)){const{propsDefaults:d}=o;if(e in d)s=d[e];else{const u=ko(o);s=d[e]=l.call(null,t),u()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===Ps(e))&&(s=!0))}return s}function hh(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!K(i)){const u=g=>{l=!0;const[b,w]=hh(g,t,!0);Nt(r,b),w&&a.push(...w)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!n&&!l)return Rt(i)&&s.set(i,bs),bs;if(J(n))for(let u=0;u<n.length;u++){const g=Qe(n[u]);cc(g)&&(r[g]=Ft)}else if(n)for(const u in n){const g=Qe(u);if(cc(g)){const b=n[u],w=r[g]=J(b)||K(b)?{type:b}:Nt({},b);if(w){const V=uc(Boolean,w.type),P=uc(String,w.type);w[0]=V>-1,w[1]=P<0||V<P,(V>-1||at(w,"default"))&&a.push(g)}}}const d=[r,a];return Rt(i)&&s.set(i,d),d}function cc(i){return i[0]!=="$"}function dc(i){const t=i&&i.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:i===null?"null":""}function hc(i,t){return dc(i)===dc(t)}function uc(i,t){return J(t)?t.findIndex(e=>hc(e,i)):K(t)&&hc(t,i)?0:-1}const uh=i=>i[0]==="_"||i==="$stable",il=i=>J(i)?i.map(Ye):[Ye(i)],Zf=(i,t,e)=>{if(t._n)return t;const s=qi((...o)=>il(t(...o)),e);return s._c=!1,s},ph=(i,t,e)=>{const s=i._ctx;for(const o in i){if(uh(o))continue;const n=i[o];if(K(n))t[o]=Zf(o,n,s);else if(n!=null){const r=il(n);t[o]=()=>r}}},fh=(i,t)=>{const e=il(t);i.slots.default=()=>e},Jf=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ct(t),xn(t,"_",e)):ph(t,i.slots={})}else i.slots={},t&&fh(i,t);xn(i.slots,qn,1)},Kf=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=Ft;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Nt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,ph(t,o)),r=t}else t&&(fh(i,t),r={default:1});if(n)for(const a in o)!uh(a)&&r[a]==null&&delete o[a]};function wa(i,t,e,s,o=!1){if(J(i)){i.forEach((b,w)=>wa(b,t&&(J(t)?t[w]:t),e,s,o));return}if(eo(s)&&!o)return;const n=s.shapeFlag&4?ol(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,d=t&&t.r,u=a.refs===Ft?a.refs={}:a.refs,g=a.setupState;if(d!=null&&d!==l&&(Pt(d)?(u[d]=null,at(g,d)&&(g[d]=null)):ue(d)&&(d.value=null)),K(l))Ci(l,a,12,[r,u]);else{const b=Pt(l),w=ue(l),V=i.f;if(b||w){const P=()=>{if(V){const B=b?at(g,l)?g[l]:u[l]:l.value;o?J(B)&&za(B,n):J(B)?B.includes(n)||B.push(n):b?(u[l]=[n],at(g,l)&&(g[l]=u[l])):(l.value=[n],i.k&&(u[i.k]=l.value))}else b?(u[l]=r,at(g,l)&&(g[l]=r)):w&&(l.value=r,i.k&&(u[i.k]=r))};o||V?P():(P.id=-1,de(P,e))}}}const de=Ff;function tg(i){return eg(i)}function eg(i,t){const e=Td();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:d,setElementText:u,parentNode:g,nextSibling:b,setScopeId:w=Ie,insertStaticContent:V}=i,P=(p,m,x,$=null,k=null,S=null,O=void 0,T=null,R=!!m.dynamicChildren)=>{if(p===m)return;p&&!Ys(p,m)&&($=Mo(p),Ue(p,k,S,!0),p=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:F,ref:_,shapeFlag:U}=m;switch(F){case Un:B(p,m,x,$);break;case Is:rt(p,m,x,$);break;case fn:p==null&&ht(m,x,$,O);break;case Jt:_o(p,m,x,$,k,S,O,T,R);break;default:U&1?ft(p,m,x,$,k,S,O,T,R):U&6?Po(p,m,x,$,k,S,O,T,R):(U&64||U&128)&&F.process(p,m,x,$,k,S,O,T,R,cs)}_!=null&&k&&wa(_,p&&p.ref,S,m||p,!m)},B=(p,m,x,$)=>{if(p==null)s(m.el=a(m.children),x,$);else{const k=m.el=p.el;m.children!==p.children&&d(k,m.children)}},rt=(p,m,x,$)=>{p==null?s(m.el=l(m.children||""),x,$):m.el=p.el},ht=(p,m,x,$)=>{[p.el,p.anchor]=V(p.children,m,x,$,p.el,p.anchor)},Y=({el:p,anchor:m},x,$)=>{let k;for(;p&&p!==m;)k=b(p),s(p,x,$),p=k;s(m,x,$)},pt=({el:p,anchor:m})=>{let x;for(;p&&p!==m;)x=b(p),o(p),p=x;o(m)},ft=(p,m,x,$,k,S,O,T,R)=>{m.type==="svg"?O="svg":m.type==="math"&&(O="mathml"),p==null?j(m,x,$,k,S,O,T,R):qs(p,m,k,S,O,T,R)},j=(p,m,x,$,k,S,O,T)=>{let R,F;const{props:_,shapeFlag:U,transition:N,dirs:Z}=p;if(R=p.el=r(p.type,S,_&&_.is,_),U&8?u(R,p.children):U&16&&le(p.children,R,null,$,k,jr(p,S),O,T),Z&&Hi(p,null,$,"created"),ae(R,p,p.scopeId,O,$),_){for(const mt in _)mt!=="value"&&!hn(mt)&&n(R,mt,null,_[mt],S,p.children,$,k,ti);"value"in _&&n(R,"value",null,_.value,S),(F=_.onVnodeBeforeMount)&&Ge(F,$,p)}Z&&Hi(p,null,$,"beforeMount");const nt=ig(k,N);nt&&N.beforeEnter(R),s(R,m,x),((F=_&&_.onVnodeMounted)||nt||Z)&&de(()=>{F&&Ge(F,$,p),nt&&N.enter(R),Z&&Hi(p,null,$,"mounted")},k)},ae=(p,m,x,$,k)=>{if(x&&w(p,x),$)for(let S=0;S<$.length;S++)w(p,$[S]);if(k){let S=k.subTree;if(m===S){const O=k.vnode;ae(p,O,O.scopeId,O.slotScopeIds,k.parent)}}},le=(p,m,x,$,k,S,O,T,R=0)=>{for(let F=R;F<p.length;F++){const _=p[F]=T?xi(p[F]):Ye(p[F]);P(null,_,m,x,$,k,S,O,T)}},qs=(p,m,x,$,k,S,O)=>{const T=m.el=p.el;let{patchFlag:R,dynamicChildren:F,dirs:_}=m;R|=p.patchFlag&16;const U=p.props||Ft,N=m.props||Ft;let Z;if(x&&Mi(x,!1),(Z=N.onVnodeBeforeUpdate)&&Ge(Z,x,m,p),_&&Hi(m,p,x,"beforeUpdate"),x&&Mi(x,!0),F?Li(p.dynamicChildren,F,T,x,$,jr(m,k),S):O||vt(p,m,T,null,x,$,jr(m,k),S,!1),R>0){if(R&16)Gs(T,m,U,N,x,$,k);else if(R&2&&U.class!==N.class&&n(T,"class",null,N.class,k),R&4&&n(T,"style",U.style,N.style,k),R&8){const nt=m.dynamicProps;for(let mt=0;mt<nt.length;mt++){const Ct=nt[mt],Mt=U[Ct],Le=N[Ct];(Le!==Mt||Ct==="value")&&n(T,Ct,Mt,Le,k,p.children,x,$,ti)}}R&1&&p.children!==m.children&&u(T,m.children)}else!O&&F==null&&Gs(T,m,U,N,x,$,k);((Z=N.onVnodeUpdated)||_)&&de(()=>{Z&&Ge(Z,x,m,p),_&&Hi(m,p,x,"updated")},$)},Li=(p,m,x,$,k,S,O)=>{for(let T=0;T<m.length;T++){const R=p[T],F=m[T],_=R.el&&(R.type===Jt||!Ys(R,F)||R.shapeFlag&70)?g(R.el):x;P(R,F,_,null,$,k,S,O,!0)}},Gs=(p,m,x,$,k,S,O)=>{if(x!==$){if(x!==Ft)for(const T in x)!hn(T)&&!(T in $)&&n(p,T,x[T],null,O,m.children,k,S,ti);for(const T in $){if(hn(T))continue;const R=$[T],F=x[T];R!==F&&T!=="value"&&n(p,T,F,R,O,m.children,k,S,ti)}"value"in $&&n(p,"value",x.value,$.value,O)}},_o=(p,m,x,$,k,S,O,T,R)=>{const F=m.el=p?p.el:a(""),_=m.anchor=p?p.anchor:a("");let{patchFlag:U,dynamicChildren:N,slotScopeIds:Z}=m;Z&&(T=T?T.concat(Z):Z),p==null?(s(F,x,$),s(_,x,$),le(m.children||[],x,_,k,S,O,T,R)):U>0&&U&64&&N&&p.dynamicChildren?(Li(p.dynamicChildren,N,x,k,S,O,T),(m.key!=null||k&&m===k.subTree)&&gh(p,m,!0)):vt(p,m,x,_,k,S,O,T,R)},Po=(p,m,x,$,k,S,O,T,R)=>{m.slotScopeIds=T,p==null?m.shapeFlag&512?k.ctx.activate(m,x,$,O,R):Er(m,x,$,k,S,O,R):Nl(p,m,R)},Er=(p,m,x,$,k,S,O)=>{const T=p.component=ug(p,$,k);if(ih(p)&&(T.ctx.renderer=cs),pg(T),T.asyncDep){if(k&&k.registerDep(T,Qt),!p.el){const R=T.subTree=Ut(Is);rt(null,R,m,x)}}else Qt(T,p,m,x,k,S,O)},Nl=(p,m,x)=>{const $=m.component=p.component;if(xf(p,m,x))if($.asyncDep&&!$.asyncResolved){Tt($,m,x);return}else $.next=m,uf($.update),$.effect.dirty=!0,$.update();else m.el=p.el,$.vnode=m},Qt=(p,m,x,$,k,S,O)=>{const T=()=>{if(p.isMounted){let{next:_,bu:U,u:N,parent:Z,vnode:nt}=p;{const ds=mh(p);if(ds){_&&(_.el=nt.el,Tt(p,_,O)),ds.asyncDep.then(()=>{p.isUnmounted||T()});return}}let mt=_,Ct;Mi(p,!1),_?(_.el=nt.el,Tt(p,_,O)):_=nt,U&&_r(U),(Ct=_.props&&_.props.onVnodeBeforeUpdate)&&Ge(Ct,Z,_,nt),Mi(p,!0);const Mt=zr(p),Le=p.subTree;p.subTree=Mt,P(Le,Mt,g(Le.el),Mo(Le),p,k,S),_.el=Mt.el,mt===null&&wf(p,Mt.el),N&&de(N,k),(Ct=_.props&&_.props.onVnodeUpdated)&&de(()=>Ge(Ct,Z,_,nt),k)}else{let _;const{el:U,props:N}=m,{bm:Z,m:nt,parent:mt}=p,Ct=eo(m);if(Mi(p,!1),Z&&_r(Z),!Ct&&(_=N&&N.onVnodeBeforeMount)&&Ge(_,mt,m),Mi(p,!0),U&&Vr){const Mt=()=>{p.subTree=zr(p),Vr(U,p.subTree,p,k,null)};Ct?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Mt()):Mt()}else{const Mt=p.subTree=zr(p);P(null,Mt,x,$,p,k,S),m.el=Mt.el}if(nt&&de(nt,k),!Ct&&(_=N&&N.onVnodeMounted)){const Mt=m;de(()=>Ge(_,mt,Mt),k)}(m.shapeFlag&256||mt&&eo(mt.vnode)&&mt.vnode.shapeFlag&256)&&p.a&&de(p.a,k),p.isMounted=!0,m=x=$=null}},R=p.effect=new Ua(T,Ie,()=>Ka(F),p.scope),F=p.update=()=>{R.dirty&&R.run()};F.id=p.uid,Mi(p,!0),F()},Tt=(p,m,x)=>{m.component=p;const $=p.vnode.props;p.vnode=m,p.next=null,Qf(p,m.props,$,x),Kf(p,m.children,x),ts(),ic(p),es()},vt=(p,m,x,$,k,S,O,T,R=!1)=>{const F=p&&p.children,_=p?p.shapeFlag:0,U=m.children,{patchFlag:N,shapeFlag:Z}=m;if(N>0){if(N&128){Ho(F,U,x,$,k,S,O,T,R);return}else if(N&256){_i(F,U,x,$,k,S,O,T,R);return}}Z&8?(_&16&&ti(F,k,S),U!==F&&u(x,U)):_&16?Z&16?Ho(F,U,x,$,k,S,O,T,R):ti(F,k,S,!0):(_&8&&u(x,""),Z&16&&le(U,x,$,k,S,O,T,R))},_i=(p,m,x,$,k,S,O,T,R)=>{p=p||bs,m=m||bs;const F=p.length,_=m.length,U=Math.min(F,_);let N;for(N=0;N<U;N++){const Z=m[N]=R?xi(m[N]):Ye(m[N]);P(p[N],Z,x,null,k,S,O,T,R)}F>_?ti(p,k,S,!0,!1,U):le(m,x,$,k,S,O,T,R,U)},Ho=(p,m,x,$,k,S,O,T,R)=>{let F=0;const _=m.length;let U=p.length-1,N=_-1;for(;F<=U&&F<=N;){const Z=p[F],nt=m[F]=R?xi(m[F]):Ye(m[F]);if(Ys(Z,nt))P(Z,nt,x,null,k,S,O,T,R);else break;F++}for(;F<=U&&F<=N;){const Z=p[U],nt=m[N]=R?xi(m[N]):Ye(m[N]);if(Ys(Z,nt))P(Z,nt,x,null,k,S,O,T,R);else break;U--,N--}if(F>U){if(F<=N){const Z=N+1,nt=Z<_?m[Z].el:$;for(;F<=N;)P(null,m[F]=R?xi(m[F]):Ye(m[F]),x,nt,k,S,O,T,R),F++}}else if(F>N)for(;F<=U;)Ue(p[F],k,S,!0),F++;else{const Z=F,nt=F,mt=new Map;for(F=nt;F<=N;F++){const me=m[F]=R?xi(m[F]):Ye(m[F]);me.key!=null&&mt.set(me.key,F)}let Ct,Mt=0;const Le=N-nt+1;let ds=!1,ql=0;const Ws=new Array(Le);for(F=0;F<Le;F++)Ws[F]=0;for(F=Z;F<=U;F++){const me=p[F];if(Mt>=Le){Ue(me,k,S,!0);continue}let qe;if(me.key!=null)qe=mt.get(me.key);else for(Ct=nt;Ct<=N;Ct++)if(Ws[Ct-nt]===0&&Ys(me,m[Ct])){qe=Ct;break}qe===void 0?Ue(me,k,S,!0):(Ws[qe-nt]=F+1,qe>=ql?ql=qe:ds=!0,P(me,m[qe],x,null,k,S,O,T,R),Mt++)}const Gl=ds?sg(Ws):bs;for(Ct=Gl.length-1,F=Le-1;F>=0;F--){const me=nt+F,qe=m[me],Wl=me+1<_?m[me+1].el:$;Ws[F]===0?P(null,qe,x,Wl,k,S,O,T,R):ds&&(Ct<0||F!==Gl[Ct]?Pi(qe,x,Wl,2):Ct--)}}},Pi=(p,m,x,$,k=null)=>{const{el:S,type:O,transition:T,children:R,shapeFlag:F}=p;if(F&6){Pi(p.component.subTree,m,x,$);return}if(F&128){p.suspense.move(m,x,$);return}if(F&64){O.move(p,m,x,cs);return}if(O===Jt){s(S,m,x);for(let U=0;U<R.length;U++)Pi(R[U],m,x,$);s(p.anchor,m,x);return}if(O===fn){Y(p,m,x);return}if($!==2&&F&1&&T)if($===0)T.beforeEnter(S),s(S,m,x),de(()=>T.enter(S),k);else{const{leave:U,delayLeave:N,afterLeave:Z}=T,nt=()=>s(S,m,x),mt=()=>{U(S,()=>{nt(),Z&&Z()})};N?N(S,nt,mt):mt()}else s(S,m,x)},Ue=(p,m,x,$=!1,k=!1)=>{const{type:S,props:O,ref:T,children:R,dynamicChildren:F,shapeFlag:_,patchFlag:U,dirs:N}=p;if(T!=null&&wa(T,null,x,p,!0),_&256){m.ctx.deactivate(p);return}const Z=_&1&&N,nt=!eo(p);let mt;if(nt&&(mt=O&&O.onVnodeBeforeUnmount)&&Ge(mt,m,p),_&6)wp(p.component,x,$);else{if(_&128){p.suspense.unmount(x,$);return}Z&&Hi(p,null,m,"beforeUnmount"),_&64?p.type.remove(p,m,x,k,cs,$):F&&(S!==Jt||U>0&&U&64)?ti(F,m,x,!1,!0):(S===Jt&&U&384||!k&&_&16)&&ti(R,m,x),$&&jl(p)}(nt&&(mt=O&&O.onVnodeUnmounted)||Z)&&de(()=>{mt&&Ge(mt,m,p),Z&&Hi(p,null,m,"unmounted")},x)},jl=p=>{const{type:m,el:x,anchor:$,transition:k}=p;if(m===Jt){xp(x,$);return}if(m===fn){pt(p);return}const S=()=>{o(x),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:O,delayLeave:T}=k,R=()=>O(x,S);T?T(p.el,S,R):R()}else S()},xp=(p,m)=>{let x;for(;p!==m;)x=b(p),o(p),p=x;o(m)},wp=(p,m,x)=>{const{bum:$,scope:k,update:S,subTree:O,um:T}=p;$&&_r($),k.stop(),S&&(S.active=!1,Ue(O,p,m,x)),T&&de(T,m),de(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ti=(p,m,x,$=!1,k=!1,S=0)=>{for(let O=S;O<p.length;O++)Ue(p[O],m,x,$,k)},Mo=p=>p.shapeFlag&6?Mo(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let Or=!1;const Ul=(p,m,x)=>{p==null?m._vnode&&Ue(m._vnode,null,null,!0):P(m._vnode||null,p,m,null,null,null,x),Or||(Or=!0,ic(),Qd(),Or=!1),m._vnode=p},cs={p:P,um:Ue,m:Pi,r:jl,mt:Er,mc:le,pc:vt,pbc:Li,n:Mo,o:i};let Ar,Vr;return t&&([Ar,Vr]=t(cs)),{render:Ul,hydrate:Ar,createApp:Wf(Ul,Ar)}}function jr({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Mi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function ig(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function gh(i,t,e=!1){const s=i.children,o=t.children;if(J(s)&&J(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=xi(o[n]),a.el=r.el),e||gh(r,a)),a.type===Un&&(a.el=r.el)}}function sg(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const d=i[s];if(d!==0){if(o=e[e.length-1],i[o]<d){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<d?n=a+1:r=a;d<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function mh(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mh(t)}const og=i=>i.__isTeleport,Jt=Symbol.for("v-fgt"),Un=Symbol.for("v-txt"),Is=Symbol.for("v-cmt"),fn=Symbol.for("v-stc"),so=[];let Me=null;function Pe(i=!1){so.push(Me=i?null:[])}function ng(){so.pop(),Me=so[so.length-1]||null}let uo=1;function pc(i){uo+=i}function bh(i){return i.dynamicChildren=uo>0?Me||bs:null,ng(),uo>0&&Me&&Me.push(i),i}function hs(i,t,e,s,o,n){return bh(et(i,t,e,s,o,n,!0))}function po(i,t,e,s,o){return bh(Ut(i,t,e,s,o,!0))}function vh(i){return i?i.__v_isVNode===!0:!1}function Ys(i,t){return i.type===t.type&&i.key===t.key}const qn="__vInternal",yh=({key:i})=>i??null,gn=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Pt(i)||ue(i)||K(i)?{i:ee,r:i,k:t,f:!!e}:i:null);function et(i,t=null,e=null,s=0,o=null,n=i===Jt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&yh(t),ref:t&&gn(t),scopeId:Nn,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ee};return a?(sl(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=Pt(e)?8:16),uo>0&&!r&&Me&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&Me.push(l),l}const Ut=rg;function rg(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===$f)&&(i=Is),vh(i)){const a=Ts(i,t,!0);return e&&sl(a,e),uo>0&&!n&&Me&&(a.shapeFlag&6?Me[Me.indexOf(i)]=a:Me.push(a)),a.patchFlag|=-2,a}if(vg(i)&&(i=i.__vccOpts),t){t=ag(t);let{class:a,style:l}=t;a&&!Pt(a)&&(t.class=ja(a)),Rt(l)&&(jd(l)&&!J(l)&&(l=Nt({},l)),t.style=Na(l))}const r=Pt(i)?1:Cf(i)?128:og(i)?64:Rt(i)?4:K(i)?2:0;return et(i,t,e,s,o,r,n,!0)}function ag(i){return i?jd(i)||qn in i?Nt({},i):i:null}function Ts(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?cg(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&yh(a),ref:t&&t.ref?e&&o?J(o)?o.concat(gn(t)):[o,gn(t)]:gn(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Jt?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ts(i.ssContent),ssFallback:i.ssFallback&&Ts(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function $a(i=" ",t=0){return Ut(Un,null,i,t)}function lg(i,t){const e=Ut(fn,null,i);return e.staticCount=t,e}function Ye(i){return i==null||typeof i=="boolean"?Ut(Is):J(i)?Ut(Jt,null,i.slice()):typeof i=="object"?xi(i):Ut(Un,null,String(i))}function xi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ts(i)}function sl(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(J(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),sl(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(qn in t)?t._ctx=ee:o===3&&ee&&(ee.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:ee},e=32):(t=String(t),s&64?(e=16,t=[$a(t)]):e=8);i.children=t,i.shapeFlag|=e}function cg(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=ja([t.class,s.class]));else if(o==="style")t.style=Na([t.style,s.style]);else if(Ln(o)){const n=t[o],r=s[o];r&&n!==r&&!(J(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function Ge(i,t,e,s=null){ze(i,t,7,[e,s])}const dg=ch();let hg=0;function ug(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||dg,n={uid:hg++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hh(s,o),emitsOptions:Jd(s,o),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:s.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=gf.bind(null,n),i.ce&&i.ce(n),n}let Gt=null,Fn,ka;{const i=Td(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};Fn=t("__VUE_INSTANCE_SETTERS__",e=>Gt=e),ka=t("__VUE_SSR_SETTERS__",e=>Gn=e)}const ko=i=>{const t=Gt;return Fn(i),i.scope.on(),()=>{i.scope.off(),Fn(t)}},fc=()=>{Gt&&Gt.scope.off(),Fn(null)};function xh(i){return i.vnode.shapeFlag&4}let Gn=!1;function pg(i,t=!1){t&&ka(t);const{props:e,children:s}=i.vnode,o=xh(i);Xf(i,e,o,t),Jf(i,s);const n=o?fg(i,t):void 0;return t&&ka(!1),n}function fg(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=Ud(new Proxy(i.ctx,zf));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?mg(i):null,n=ko(i);ts();const r=Ci(s,i,0,[i.props,o]);if(es(),n(),Cd(r)){if(r.then(fc,fc),t)return r.then(a=>{gc(i,a,t)}).catch(a=>{zn(a,i,0)});i.asyncDep=r}else gc(i,r,t)}else wh(i,t)}function gc(i,t,e){K(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Rt(t)&&(i.setupState=Wd(t)),wh(i,e)}let mc;function wh(i,t,e){const s=i.type;if(!i.render){if(!t&&mc&&!s.render){const o=s.template||el(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,d=Nt(Nt({isCustomElement:n,delimiters:a},r),l);s.render=mc(o,d)}}i.render=s.render||Ie}{const o=ko(i);ts();try{Bf(i)}finally{es(),o()}}}function gg(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return he(i,"get","$attrs"),t[e]}}))}function mg(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return gg(i)},slots:i.slots,emit:i.emit,expose:t}}function ol(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Wd(Ud(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in io)return io[e](i)},has(t,e){return e in t||e in io}}))}function bg(i,t=!0){return K(i)?i.displayName||i.name:i.name||t&&i.__name}function vg(i){return K(i)&&"__vccOpts"in i}const $h=(i,t)=>of(i,t,Gn),yg="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xg="http://www.w3.org/2000/svg",wg="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,bc=wi&&wi.createElement("template"),$g={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?wi.createElementNS(xg,i):t==="mathml"?wi.createElementNS(wg,i):wi.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>wi.createTextNode(i),createComment:i=>wi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>wi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{bc.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=bc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},kg=Symbol("_vtc");function Cg(i,t,e){const s=i[kg];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Fg=Symbol("_vod"),Ig=Symbol("");function Tg(i,t,e){const s=i.style,o=s.display,n=Pt(e);if(e&&!n){if(t&&!Pt(t))for(const r in t)e[r]==null&&Ca(s,r,"");for(const r in e)Ca(s,r,e[r])}else if(n){if(t!==e){const r=s[Ig];r&&(e+=";"+r),s.cssText=e}}else t&&i.removeAttribute("style");Fg in i&&(s.display=o)}const vc=/\s*!important$/;function Ca(i,t,e){if(J(e))e.forEach(s=>Ca(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=Sg(i,t);vc.test(e)?i.setProperty(Ps(s),e.replace(vc,""),"important"):i[s]=e}}const yc=["Webkit","Moz","ms"],Ur={};function Sg(i,t){const e=Ur[t];if(e)return e;let s=Qe(t);if(s!=="filter"&&s in i)return Ur[t]=s;s=Hn(s);for(let o=0;o<yc.length;o++){const n=yc[o]+s;if(n in i)return Ur[t]=n}return t}const xc="http://www.w3.org/1999/xlink";function Dg(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(xc,t.slice(6,t.length)):i.setAttributeNS(xc,t,e);else{const n=Ap(t);e==null||n&&!Sd(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Rg(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=e;const d=a==="OPTION"?i.getAttribute("value"):i.value,u=e??"";d!==u&&(i.value=u),e==null&&i.removeAttribute(t);return}let l=!1;if(e===""||e==null){const d=typeof i[t];d==="boolean"?e=Sd(e):e==null&&d==="string"?(e="",l=!0):d==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function Eg(i,t,e,s){i.addEventListener(t,e,s)}function Og(i,t,e,s){i.removeEventListener(t,e,s)}const wc=Symbol("_vei");function Ag(i,t,e,s,o=null){const n=i[wc]||(i[wc]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=Vg(t);if(s){const d=n[t]=Pg(s,o);Eg(i,a,d,l)}else r&&(Og(i,a,r,l),n[t]=void 0)}}const $c=/(?:Once|Passive|Capture)$/;function Vg(i){let t;if($c.test(i)){t={};let s;for(;s=i.match($c);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ps(i.slice(2)),t]}let qr=0;const Lg=Promise.resolve(),_g=()=>qr||(Lg.then(()=>qr=0),qr=Date.now());function Pg(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;ze(Hg(s,e.value),t,5,[s])};return e.value=i,e.attached=_g(),e}function Hg(i,t){if(J(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const kc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Mg=(i,t,e,s,o,n,r,a,l)=>{const d=o==="svg";t==="class"?Cg(i,s,d):t==="style"?Tg(i,e,s):Ln(t)?Ma(t)||Ag(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zg(i,t,s,d))?Rg(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Dg(i,t,s,d))};function zg(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&kc(t)&&K(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return kc(t)&&Pt(e)?!1:t in i}const Bg=Nt({patchProp:Mg},$g);let Cc;function Ng(){return Cc||(Cc=tg(Bg))}const jg=(...i)=>{const t=Ng().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=qg(s);if(!o)return;const n=t._component;!K(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,Ug(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function Ug(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function qg(i){return Pt(i)?document.querySelector(i):i}const Gg="/assets/Logo-YHYlx9Il.jpg",oi=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();oi.trustedTypes===void 0&&(oi.trustedTypes={createPolicy:(i,t)=>t});const kh={configurable:!1,enumerable:!1,writable:!1};oi.FAST===void 0&&Reflect.defineProperty(oi,"FAST",Object.assign({value:Object.create(null)},kh));const fo=oi.FAST;if(fo.getById===void 0){const i=Object.create(null);Reflect.defineProperty(fo,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},kh))}const Yi=Object.freeze([]);function Ch(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const Gr=oi.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,d=i.length-a;l<d;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&oi.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),Fh=oi.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let Wr=Fh;const oo=`fast-${Math.random().toString(36).substring(2,8)}`,Ih=`${oo}{`,nl=`}${oo}`,W=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(Wr!==Fh)throw new Error("The HTML policy can only be set once.");Wr=i},createHTML(i){return Wr.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(oo)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${oo}:`,""))},createInterpolationPlaceholder(i){return`${Ih}${i}${nl}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${oo}:${i}-->`},queueUpdate:Gr.enqueue,processUpdates:Gr.process,nextUpdate(){return new Promise(Gr.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class In{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class Th{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new In(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new In(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const G=fo.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=W.queueUpdate;let s,o=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(d){let u=d.$fastController||t.get(d);return u===void 0&&(Array.isArray(d)?u=o(d):t.set(d,u=new Th(d))),u}const r=Ch();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return s!==void 0&&s.watch(u,this.name),u[this.field]}setValue(u,g){const b=this.field,w=u[b];if(w!==g){u[b]=g;const V=u[this.callback];typeof V=="function"&&V.call(u,w,g),n(u).notify(this.name)}}}class l extends In{constructor(u,g,b=!1){super(u,g),this.binding=u,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,g){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(u,g);return s=b,w}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,g){const b=this.last,w=n(u),V=b===null?this.first:{};if(V.propertySource=u,V.propertyName=g,V.notifier=w,w.subscribe(this,g),b!==null){if(!this.needsRefresh){let P;s=void 0,P=b.propertySource[b.propertyName],s=this,u===P&&(this.needsRefresh=!0)}b.next=V}this.last=V}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const g=u;return g===void 0?{value:void 0,done:!0}:(u=u.next,{value:g,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){o=d},getNotifier:n,track(d,u){s!==void 0&&s.watch(d,u)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(d,u){n(d).notify(u)},defineProperty(d,u){typeof u=="string"&&(u=new a(u)),r(d).push(u),Reflect.defineProperty(d,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(g){u.setValue(this,g)}})},getAccessors:r,binding(d,u,g=this.isVolatileBinding(d)){return new l(d,u,g)},isVolatileBinding(d){return i.test(d.toString())}})});function y(i,t){G.defineProperty(i,t)}function Wg(i,t,e){return Object.assign({},e,{get:function(){return G.trackVolatile(),e.get.apply(this)}})}const Fc=fo.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class go{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Fc.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){Fc.set(t)}}G.defineProperty(go.prototype,"index");G.defineProperty(go.prototype,"length");const no=Object.seal(new go);class Wn{constructor(){this.targetIndex=0}}class Sh extends Wn{constructor(){super(...arguments),this.createPlaceholder=W.createInterpolationPlaceholder}}class rl extends Wn{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return W.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Yg(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=G.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function Xg(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function Qg(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Zg(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Jg(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Kg(i){W.setAttribute(this.target,this.targetName,i)}function tm(i){W.setBooleanAttribute(this.target,this.targetName,i)}function em(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function im(i){this.target[this.targetName]=i}function sm(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class al extends Sh{constructor(t){super(),this.binding=t,this.bind=Yg,this.unbind=Qg,this.updateTarget=Kg,this.isBindingVolatile=G.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=im,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>W.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=tm;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Xg,this.unbind=Jg;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=sm);break}}targetAtContent(){this.updateTarget=em,this.unbind=Zg}createBehavior(t){return new om(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class om{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){go.setEvent(t);const e=this.binding(this.source,this.context);go.setEvent(null),e!==!0&&t.preventDefault()}}let Yr=null;class ll{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Yr=this}static borrow(t){const e=Yr||new ll;return e.directives=t,e.reset(),Yr=null,e}}function nm(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let d=0;d<e;++d)l+=s[d](r,a);return l},n=new al(o);return n.targetName=t,n}const rm=nl.length;function Dh(i,t){const e=t.split(Ih);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(nl);let l;if(a===-1)l=r;else{const d=parseInt(r.substring(0,a));s.push(i.directives[d]),l=r.substring(a+rm)}l!==""&&s.push(l)}return s}function Ic(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Dh(i,a);let d=null;l===null?e&&(d=new al(()=>a),d.targetName=r.name):d=nm(l),d!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(d))}}function am(i,t,e){const s=Dh(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function lm(i,t){const e=i.content;document.adoptNode(e);const s=ll.borrow(t);Ic(s,i,!0);const o=s.behaviorFactories;s.reset();const n=W.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Ic(s,r);break;case 3:am(s,r,n);break;case 8:W.isMarker(r)&&s.addFactory(t[W.extractDirectiveIndexFromMarker(r)])}let a=0;(W.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const Xr=document.createRange();class Rh{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){Xr.setStartBefore(t[0].firstChild),Xr.setEndAfter(t[t.length-1].lastChild),Xr.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class Tc{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let d;const u=this.html;if(typeof u=="string"){d=document.createElement("template"),d.innerHTML=W.createHTML(u);const b=d.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(d=b)}else d=u;const g=lm(d,this.directives);this.fragment=g.fragment,this.viewBehaviorFactories=g.viewBehaviorFactories,this.hostBehaviorFactories=g.hostBehaviorFactories,this.targetOffset=g.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=W.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let d=s.length;r<d;++r){const u=s[r],g=u.targetIndex;for(;l!==null;)if(a===g){o[r]=u.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let u=0,g=d.length;u<g;++u,++r)o[r]=d[u].createBehavior(t)}return new Rh(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,no),o.appendTo(e),o}}const cm=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function I(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof Tc){const l=a;a=()=>l}if(typeof a=="function"&&(a=new al(a)),a instanceof Sh){const l=cm.exec(r);l!==null&&(a.targetName=l[2])}a instanceof Wn?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new Tc(s,e)}class se{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}se.create=(()=>{if(W.supportsAdoptedStyleSheets){const i=new Map;return t=>new dm(t,i)}return i=>new pm(i)})();function cl(i){return i.map(t=>t instanceof se?cl(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Eh(i){return i.map(t=>t instanceof se?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let Oh=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Ah=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(W.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Oh=(i,t)=>{i.adoptedStyleSheets.push(...t)},Ah=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class dm extends se{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Eh(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=cl(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){Oh(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Ah(t,this.styleSheets),super.removeStylesFrom(t)}}let hm=0;function um(){return`fast-style-class-${++hm}`}class pm extends se{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Eh(t),this.styleSheets=cl(t),this.styleClass=um()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Tn=Object.freeze({locate:Ch()}),Co={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},L={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Sn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=Co)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return G.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||W.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;W.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":W.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(Tn.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const d=r[a];typeof d=="string"?s.push(new Sn(t,d)):s.push(new Sn(t,d.property,d.attribute,d.mode,d.converter))}}return s}}function h(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),Tn.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const Sc={mode:"open"},Dc={},Fa=fo.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class Yn{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=Sn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const d=s[a];o[a]=d.attribute,n[d.name]=d,r[d.attribute]=d}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?Sc:e.shadowOptions===null?void 0:Object.assign(Object.assign({},Sc),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?Dc:Object.assign(Object.assign({},Dc),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?se.create(e.styles):e.styles instanceof se?e.styles:se.create([e.styles])}get isDefined(){return!!Fa.getByType(this.type)}define(t=customElements){const e=this.type;if(Fa.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)G.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}Yn.forType=Fa.getByType;const Vh=new WeakMap,fm={bubbles:!0,composed:!0,cancelable:!0};function Qr(i){return i.shadowRoot||Vh.get(i)||null}class dl extends Th{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Vh.set(t,n)}const o=G.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,d=t[l];d!==void 0&&(delete t[l],n[l]=d)}}}get isConnected(){return G.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,G.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=Qr(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=Qr(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,no)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,no);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,no);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},fm),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=Qr(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||W.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=Yn.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new dl(t,s)}}function Rc(i){return class extends i{constructor(){super(),dl.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const Xn=Object.assign(Rc(HTMLElement),{from(i){return Rc(i)},define(i,t){return new Yn(i,t).define().type}});class hl{createCSS(){return""}createBehavior(){}}function Lh(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof hl){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof se||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function C(i,...t){const{styles:e,behaviors:s}=Lh(i,t),o=se.create(e);return s.length&&o.withBehaviors(...s),o}class gm extends hl{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=se.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function ve(i,...t){const{styles:e,behaviors:s}=Lh(i,t);return new gm(e,s)}function He(i,t,e){return{index:i,removed:t,addedCount:e}}const _h=0,Ph=1,Ia=2,Ta=3;function mm(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let d,u;for(let g=0;g<r;++g)l[g]=new Array(a),l[g][0]=g;for(let g=0;g<a;++g)l[0][g]=g;for(let g=1;g<r;++g)for(let b=1;b<a;++b)i[t+b-1]===s[o+g-1]?l[g][b]=l[g-1][b-1]:(d=l[g-1][b]+1,u=l[g][b-1]+1,l[g][b]=d<u?d:u);return l}function bm(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(Ia),e--;continue}if(e===0){o.push(Ta),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(_h):(o.push(Ph),s=n),t--,e--):l===r?(o.push(Ta),t--,s=r):(o.push(Ia),e--,s=a)}return o.reverse(),o}function vm(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function ym(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function xm(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function Hh(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=vm(i,s,l)),e===i.length&&n===s.length&&(a=ym(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return Yi;if(t===e){const V=He(t,[],0);for(;o<n;)V.removed.push(s[o++]);return[V]}else if(o===n)return[He(t,[],e-t)];const d=bm(mm(i,t,e,s,o,n)),u=[];let g,b=t,w=o;for(let V=0;V<d.length;++V)switch(d[V]){case _h:g!==void 0&&(u.push(g),g=void 0),b++,w++;break;case Ph:g===void 0&&(g=He(b,[],0)),g.addedCount++,b++,g.removed.push(s[w]),w++;break;case Ia:g===void 0&&(g=He(b,[],0)),g.addedCount++,b++;break;case Ta:g===void 0&&(g=He(b,[],0)),g.removed.push(s[w]),w++;break}return g!==void 0&&u.push(g),u}const Ec=Array.prototype.push;function wm(i,t,e,s){const o=He(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const d=xm(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(d>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-d;const u=o.removed.length+l.removed.length-d;if(!o.addedCount&&!u)n=!0;else{let g=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);Ec.apply(b,g),g=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);Ec.apply(g,b)}o.removed=g,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const u=o.addedCount-o.removed.length;l.index+=u,r+=u}}n||i.push(o)}function $m(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];wm(t,o.index,o.removed,o.addedCount)}return t}function km(i,t){let e=[];const s=$m(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(Hh(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let Oc=!1;function Zr(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class Cm extends In{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,W.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,W.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?km(this.source,t):Hh(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function Fm(){if(Oc)return;Oc=!0,G.setArrayObserverFactory(l=>new Cm(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,d=t.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(He(this.length,[d],0)),d},i.push=function(){const l=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Zr(He(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const d=this.$fastController;d!==void 0&&(d.flush(),l=this.slice());const u=s.apply(this,arguments);return d!==void 0&&d.reset(l),u},i.shift=function(){const l=this.length>0,d=o.apply(this,arguments),u=this.$fastController;return u!==void 0&&l&&u.addSplice(He(0,[d],0)),d},i.sort=function(){let l;const d=this.$fastController;d!==void 0&&(d.flush(),l=this.slice());const u=n.apply(this,arguments);return d!==void 0&&d.reset(l),u},i.splice=function(){const l=r.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Zr(He(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Zr(He(0,[],arguments.length),this)),l}}class Im{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function lt(i){return new rl("fast-ref",Im,i)}const Mh=i=>typeof i=="function",Tm=()=>null;function Ac(i){return i===void 0?Tm:Mh(i)?i:()=>i}function Dt(i,t,e){const s=Mh(i)?i:()=>i,o=Ac(t),n=Ac(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const Vc=Object.freeze({positioning:!1,recycle:!0});function Sm(i,t,e,s){i.bind(t[e],s)}function Dm(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class Rm{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Sm,this.itemsBindingObserver=G.binding(e,this,s),this.templateBindingObserver=G.binding(o,this,n),r.positioning&&(this.bindView=Dm)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=Yi;return}const e=this.itemsObserver,s=this.itemsObserver=G.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let d=0,u=0;for(let g=0,b=t.length;g<b;++g){const w=t[g],V=w.removed;let P=0,B=w.index;const rt=B+w.addedCount,ht=s.splice(w.index,V.length),Y=u=l.length+ht.length;for(;B<rt;++B){const pt=s[B],ft=pt?pt.firstChild:this.location;let j;a&&u>0?(P<=Y&&ht.length>0?(j=ht[P],P++):(j=l[d],d++),u--):j=r.create(),s.splice(B,0,j),o(j,n,B,e),j.insertBefore(ft)}ht[P]&&l.push(...ht.slice(P))}for(let g=d,b=l.length;g<b;++g)l[g].dispose();if(this.options.positioning)for(let g=0,b=s.length;g<b;++g){const w=s[g].context;w.length=b,w.index=g}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,d=l.length;if((a===0||t||!this.options.recycle)&&(Rh.disposeContiguousBatch(l),d=0),d===0){this.views=l=new Array(a);for(let u=0;u<a;++u){const g=o.create();r(g,e,u,s),l[u]=g,g.insertBefore(n)}}else{let u=0;for(;u<a;++u)if(u<d){const b=l[u];r(b,e,u,s)}else{const b=o.create();r(b,e,u,s),l.push(b),b.insertBefore(n)}const g=l.splice(u,d-u);for(u=0,a=g.length;u<a;++u)g[u].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class ul extends Wn{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=W.createBlockPlaceholder,Fm(),this.isItemsBindingVolatile=G.isVolatileBinding(t),this.isTemplateBindingVolatile=G.isVolatileBinding(e)}createBehavior(t){return new Rm(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function ws(i,t,e=Vc){const s=typeof t=="function"?t:()=>t;return new ul(i,s,Object.assign(Object.assign({},Vc),e))}function ni(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class zh{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=G.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Yi),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Em extends zh{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function $t(i){return typeof i=="string"&&(i={property:i}),new rl("fast-slotted",Em,i)}class Om extends zh{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Qn(i){return typeof i=="string"&&(i={property:i}),new rl("fast-children",Om,i)}class pe{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const oe=(i,t)=>I`
    <span
        part="end"
        ${lt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${lt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ne=(i,t)=>I`
    <span
        part="start"
        ${lt("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${lt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`,Am=I`
    <span part="end" ${lt("endContainer")}>
        <slot
            name="end"
            ${lt("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,Vm=I`
    <span part="start" ${lt("startContainer")}>
        <slot
            name="start"
            ${lt("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,Lm=(i,t)=>I`
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
                ${lt("expandbutton")}
                aria-expanded="${e=>e.expanded}"
                aria-controls="${e=>e.id}-panel"
                id="${e=>e.id}"
                @click="${(e,s)=>e.clickHandler(s.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${ne(i,t)}
            ${oe(i,t)}
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
***************************************************************************** */function c(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const Jr=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=Jr.get(e);s===void 0&&Jr.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=Jr.get(t);if(e!==void 0)return e.get(i)});class _m{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Nh(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new Ce(o,t,e))}}function Xs(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],jh(o)||(t[o]=i[o]);return t}const Pm=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Ce(i,1,i)},transient(i){return new Ce(i,2,i)}}),Kr=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Pm.singleton})}),Lc=new Map;function _c(i){return t=>Reflect.getOwnMetadata(i,t)}let Pc=null;const St=Object.freeze({createContainer(i){return new ro(null,Object.assign({},Kr.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:St.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Bh,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||St.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new ro(i,Object.assign({},Kr.default,t,{parentLocator:St.findParentContainer})):Pc||(Pc=new ro(null,Object.assign({},Kr.default,t,{parentLocator:()=>null})))},getDesignParamtypes:_c("design:paramtypes"),getAnnotationParamtypes:_c("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Lc.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=St.getDesignParamtypes(i),o=St.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=Xs(St.getDependencies(n)):t=[]}else t=Xs(o);else if(o===void 0)t=Xs(s);else{t=Xs(s);let n=o.length,r;for(let d=0;d<n;++d)r=o[d],r!==void 0&&(t[d]=r);const a=Object.keys(o);n=a.length;let l;for(let d=0;d<n;++d)l=a[d],jh(l)||(t[l]=o[l])}}else t=Xs(e);Lc.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?St.findResponsibleContainer(this):St.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof Xn)){const a=this.$fastController,l=()=>{const u=St.findResponsibleContainer(this).get(e),g=this[o];u!==g&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Bc,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)St.defineProperty(r,a,n,o);else{const d=St.getOrCreateAnnotationParamTypes(r);d[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new _m(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=St.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)St.defineProperty(t,e,i[0]);else{const o=s?St.getOrCreateAnnotationParamTypes(s.value):St.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return mo.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=Mm){return i.register=function(s){return mo.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),Hm=St.createInterface("Container");St.inject;const Mm={scoped:!1};class Ce{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Hc(i){return this.get(i)}function zm(i,t){return t(i)}class Bm{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Hc,t)):s=new this.Type(...this.dependencies.map(Hc,t),...e),this.transformers==null?s:this.transformers.reduce(zm,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Nm={$isResolver:!0,resolve(i,t){return t}};function mn(i){return typeof i.register=="function"}function jm(i){return mn(i)&&typeof i.registerInRequestor=="boolean"}function Mc(i){return jm(i)&&i.registerInRequestor}function Um(i){return i.prototype!==void 0}const qm=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Bh="__DI_LOCATE_PARENT__",ta=new Map;class ro{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Hm,Nm),t instanceof Node&&t.addEventListener(Bh,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,d=t.length;l<d;++l)if(e=t[l],!!Nc(e))if(mn(e))e.register(this,a);else if(Um(e))mo.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Nc(o)&&(mn(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){Wo(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof Ce&&o.strategy===4?o.state.push(e):s.set(t,new Ce(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(Wo(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=Mc(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(Wo(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=Mc(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){Wo(t);const s=this;let o=s,n;if(e){let r=Yi;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(zc(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return Yi}else return zc(n,o,s);return Yi}getFactory(t){let e=ta.get(t);if(e===void 0){if(Gm(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ta.set(t,e=new Bm(t,St.getDependencies(t)))}return e}registerFactory(t,e){ta.set(t,e)}createChild(t){return new ro(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(qm.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(mn(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const ea=new WeakMap;function Nh(i){return function(t,e,s){if(ea.has(s))return ea.get(s);const o=i(t,e,s);return ea.set(s,o),o}}const mo=Object.freeze({instance(i,t){return new Ce(i,0,t)},singleton(i,t){return new Ce(i,1,t)},transient(i,t){return new Ce(i,2,t)},callback(i,t){return new Ce(i,3,t)},cachedCallback(i,t){return new Ce(i,3,Nh(t))},aliasTo(i,t){return new Ce(t,5,i)}});function Wo(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function zc(i,t,e){if(i instanceof Ce&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const Bc="(anonymous)";function Nc(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Gm=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),Yo={};function jh(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=Yo[i];if(t!==void 0)return t;const e=i.length;if(e===0)return Yo[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return Yo[i]=!1;return Yo[i]=!0}default:return!1}}function jc(i){return`${i.toLowerCase()}:presentation`}const Xo=new Map,Uh=Object.freeze({define(i,t,e){const s=jc(i);Xo.get(s)===void 0?Xo.set(s,t):Xo.set(s,!1),e.register(mo.instance(s,t))},forTag(i,t){const e=jc(i),s=Xo.get(e);return s===!1?St.findResponsibleContainer(t).get(e):s||null}});class Wm{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?se.create(e):e instanceof se?e:se.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class X extends Xn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Uh.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Ym(this===X?class extends X{}:this,t,e)}}c([y],X.prototype,"template",void 0);c([y],X.prototype,"styles",void 0);function Qs(i,t,e){return typeof i=="function"?i(t,e):i}class Ym{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new Wm(Qs(s.template,a,s),Qs(s.styles,a,s));a.definePresentation(l);let d=Qs(s.shadowOptions,a,s);a.shadowRootMode&&(d?o.shadowOptions||(d.mode=a.shadowRootMode):d!==null&&(d={mode:a.shadowRootMode})),a.defineElement({elementOptions:Qs(s.elementOptions,a,s),shadowOptions:d,attributes:Qs(s.attributes,a,s)})}})}}function kt(i,...t){const e=Tn.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Tn.locate(s).forEach(n=>e.push(n))})}class Qi extends X{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}c([h({attribute:"heading-level",mode:"fromView",converter:L})],Qi.prototype,"headinglevel",void 0);c([h({mode:"boolean"})],Qi.prototype,"expanded",void 0);c([h],Qi.prototype,"id",void 0);kt(Qi,pe);const Xm=(i,t)=>I`
    <template>
        <slot ${$t({property:"accordionItems",filter:ni()})}></slot>
        <slot name="item" part="item" ${$t("accordionItems")}></slot>
    </template>
`,Ot={horizontal:"horizontal",vertical:"vertical"};function Qm(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function Zm(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ss(...i){return i.every(t=>t instanceof HTMLElement)}function Jm(i,t){return!i||!t||!Ss(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function Km(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let zi;function tb(){if(typeof zi=="boolean")return zi;if(!Zm())return zi=!1,zi;const i=document.createElement("style"),t=Km();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),zi=!0}catch{zi=!1}finally{document.head.removeChild(i)}return zi}const Uc="focus",qc="focusin",Ds="focusout",Rs="keydown",Gc="resize",Wc="scroll";var Yc;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Yc||(Yc={}));const De="ArrowDown",Ii="ArrowLeft",Ti="ArrowRight",Re="ArrowUp",ai="Enter",Hs="Escape",Ze="Home",Je="End",eb="F2",ib="PageDown",sb="PageUp",is=" ",Zn="Tab",gs={ArrowDown:De,ArrowLeft:Ii,ArrowRight:Ti,ArrowUp:Re};var yt;(function(i){i.ltr="ltr",i.rtl="rtl"})(yt||(yt={}));function ob(i,t,e){return e<i?t:e>t?i:e}function Jn(i,t,e){return Math.min(Math.max(e,i),t)}function Qo(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let nb=0;function bo(i=""){return`${i}${nb++}`}var f;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(f||(f={}));const Xc={single:"single",multi:"multi"};class pl extends X{constructor(){super(...arguments),this.expandmode=Xc.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof Qi&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Re:t.preventDefault(),this.adjust(-1);break;case De:t.preventDefault(),this.adjust(1);break;case Ze:this.activeItemIndex=0,this.focusItem();break;case Je:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Xc.single}adjust(t){this.activeItemIndex=ob(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Qi&&t.expandbutton.focus()}}c([h({attribute:"expand-mode"})],pl.prototype,"expandmode",void 0);c([y],pl.prototype,"accordionItems",void 0);const qh=(i,t)=>I`
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
        ${lt("control")}
    >
        ${ne(i,t)}
        <span class="content" part="content">
            <slot ${$t("defaultSlottedContent")}></slot>
        </span>
        ${oe(i,t)}
    </a>
`;class xt{}c([h({attribute:"aria-atomic"})],xt.prototype,"ariaAtomic",void 0);c([h({attribute:"aria-busy"})],xt.prototype,"ariaBusy",void 0);c([h({attribute:"aria-controls"})],xt.prototype,"ariaControls",void 0);c([h({attribute:"aria-current"})],xt.prototype,"ariaCurrent",void 0);c([h({attribute:"aria-describedby"})],xt.prototype,"ariaDescribedby",void 0);c([h({attribute:"aria-details"})],xt.prototype,"ariaDetails",void 0);c([h({attribute:"aria-disabled"})],xt.prototype,"ariaDisabled",void 0);c([h({attribute:"aria-errormessage"})],xt.prototype,"ariaErrormessage",void 0);c([h({attribute:"aria-flowto"})],xt.prototype,"ariaFlowto",void 0);c([h({attribute:"aria-haspopup"})],xt.prototype,"ariaHaspopup",void 0);c([h({attribute:"aria-hidden"})],xt.prototype,"ariaHidden",void 0);c([h({attribute:"aria-invalid"})],xt.prototype,"ariaInvalid",void 0);c([h({attribute:"aria-keyshortcuts"})],xt.prototype,"ariaKeyshortcuts",void 0);c([h({attribute:"aria-label"})],xt.prototype,"ariaLabel",void 0);c([h({attribute:"aria-labelledby"})],xt.prototype,"ariaLabelledby",void 0);c([h({attribute:"aria-live"})],xt.prototype,"ariaLive",void 0);c([h({attribute:"aria-owns"})],xt.prototype,"ariaOwns",void 0);c([h({attribute:"aria-relevant"})],xt.prototype,"ariaRelevant",void 0);c([h({attribute:"aria-roledescription"})],xt.prototype,"ariaRoledescription",void 0);let ye=class extends X{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};c([h],ye.prototype,"download",void 0);c([h],ye.prototype,"href",void 0);c([h],ye.prototype,"hreflang",void 0);c([h],ye.prototype,"ping",void 0);c([h],ye.prototype,"referrerpolicy",void 0);c([h],ye.prototype,"rel",void 0);c([h],ye.prototype,"target",void 0);c([h],ye.prototype,"type",void 0);c([y],ye.prototype,"defaultSlottedContent",void 0);class Kn{}c([h({attribute:"aria-expanded"})],Kn.prototype,"ariaExpanded",void 0);kt(Kn,xt);kt(ye,pe,Kn);const rb=(i,t)=>I`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${Dt(e=>e.initialLayoutComplete,I`
                <slot></slot>
            `)}
    </template>
`,Zi=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?yt.rtl:yt.ltr};class ab{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{oi.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class q extends X{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=yt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(q.intersectionService.requestPosition(this,this.handleIntersection),q.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&q.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,q.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&q.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&q.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Zi(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const w=Zi(this);if(w!==this.currentDirection){this.currentDirection=w,this.initialize();return}this.currentDirection===yt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,d=this.anchorRect!==void 0?this.anchorRect.width:0,u=this.viewportRect!==void 0?this.viewportRect.left:0,g=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,d,u,g)<r)&&(e=this.getAvailableSpace(n[0],a,l,d,u,g)>this.getAvailableSpace(n[1],a,l,d,u,g)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,d=this.anchorRect!==void 0?this.anchorRect.height:0,u=this.viewportRect!==void 0?this.viewportRect.top:0,g=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,d,u,g)<r)&&(t=this.getAvailableSpace(n[0],a,l,d,u,g)>this.getAvailableSpace(n[1],a,l,d,u,g)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Gc,this.update,{passive:!0}),window.addEventListener(Wc,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Gc,this.update),window.removeEventListener(Wc,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),W.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}q.intersectionService=new ab;c([h],q.prototype,"anchor",void 0);c([h],q.prototype,"viewport",void 0);c([h({attribute:"horizontal-positioning-mode"})],q.prototype,"horizontalPositioningMode",void 0);c([h({attribute:"horizontal-default-position"})],q.prototype,"horizontalDefaultPosition",void 0);c([h({attribute:"horizontal-viewport-lock",mode:"boolean"})],q.prototype,"horizontalViewportLock",void 0);c([h({attribute:"horizontal-inset",mode:"boolean"})],q.prototype,"horizontalInset",void 0);c([h({attribute:"horizontal-threshold"})],q.prototype,"horizontalThreshold",void 0);c([h({attribute:"horizontal-scaling"})],q.prototype,"horizontalScaling",void 0);c([h({attribute:"vertical-positioning-mode"})],q.prototype,"verticalPositioningMode",void 0);c([h({attribute:"vertical-default-position"})],q.prototype,"verticalDefaultPosition",void 0);c([h({attribute:"vertical-viewport-lock",mode:"boolean"})],q.prototype,"verticalViewportLock",void 0);c([h({attribute:"vertical-inset",mode:"boolean"})],q.prototype,"verticalInset",void 0);c([h({attribute:"vertical-threshold"})],q.prototype,"verticalThreshold",void 0);c([h({attribute:"vertical-scaling"})],q.prototype,"verticalScaling",void 0);c([h({attribute:"fixed-placement",mode:"boolean"})],q.prototype,"fixedPlacement",void 0);c([h({attribute:"auto-update-mode"})],q.prototype,"autoUpdateMode",void 0);c([y],q.prototype,"anchorElement",void 0);c([y],q.prototype,"viewportElement",void 0);c([y],q.prototype,"initialLayoutComplete",void 0);const lb=(i,t)=>I`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Fo=class extends X{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};c([h({attribute:"fill"})],Fo.prototype,"fill",void 0);c([h({attribute:"color"})],Fo.prototype,"color",void 0);c([h({mode:"boolean"})],Fo.prototype,"circular",void 0);const cb=(i,t)=>I`
    <div role="listitem" class="listitem" part="listitem">
        ${Dt(e=>e.href&&e.href.length>0,I`
                ${qh(i,t)}
            `)}
        ${Dt(e=>!e.href,I`
                ${ne(i,t)}
                <slot></slot>
                ${oe(i,t)}
            `)}
        ${Dt(e=>e.separator,I`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class vo extends ye{constructor(){super(...arguments),this.separator=!0}}c([y],vo.prototype,"separator",void 0);kt(vo,pe,Kn);const db=(i,t)=>I`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${$t({property:"slottedBreadcrumbItems",filter:ni()})}
            ></slot>
        </div>
    </template>
`;class Gh extends X{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof vo&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof vo?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}c([y],Gh.prototype,"slottedBreadcrumbItems",void 0);const hb=(i,t)=>I`
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
        ${lt("control")}
    >
        ${ne(i,t)}
        <span class="content" part="content">
            <slot ${$t("defaultSlottedContent")}></slot>
        </span>
        ${oe(i,t)}
    </button>
`,Qc="form-associated-proxy",Zc="ElementInternals",Jc=Zc in window&&"setFormValue"in window[Zc].prototype,Kc=new WeakMap;function li(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Jc}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return Yi}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),W.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),W.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Jc)return null;let e=Kc.get(this);return e||(e=this.attachInternals(),Kc.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Qc),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Qc)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case ai:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return h({mode:"boolean"})(t.prototype,"disabled"),h({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),h({attribute:"current-value"})(t.prototype,"currentValue"),h(t.prototype,"name"),h({mode:"boolean"})(t.prototype,"required"),y(t.prototype,"value"),t}function fl(i){class t extends li(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return h({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),h({attribute:"current-checked",converter:Co})(e.prototype,"currentChecked"),y(e.prototype,"defaultChecked"),y(e.prototype,"checked"),e}class ub extends X{}class pb extends li(ub){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let xe=class extends pb{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};c([h({mode:"boolean"})],xe.prototype,"autofocus",void 0);c([h({attribute:"form"})],xe.prototype,"formId",void 0);c([h],xe.prototype,"formaction",void 0);c([h],xe.prototype,"formenctype",void 0);c([h],xe.prototype,"formmethod",void 0);c([h({mode:"boolean"})],xe.prototype,"formnovalidate",void 0);c([h],xe.prototype,"formtarget",void 0);c([h],xe.prototype,"type",void 0);c([y],xe.prototype,"defaultSlottedContent",void 0);class tr{}c([h({attribute:"aria-expanded"})],tr.prototype,"ariaExpanded",void 0);c([h({attribute:"aria-pressed"})],tr.prototype,"ariaPressed",void 0);kt(tr,xt);kt(xe,pe,tr);class fb{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let Ee=class extends X{constructor(){super(...arguments),this.dateFormatter=new fb,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const d=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(d.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:d,year:u}=l<1?n:l>o?r:t,g=l<1?n.length+l:l>o?l-o:l,b=`${d}-${g}-${u}`,w=this.dateInString(b,this.disabledDates),V=this.dateInString(b,this.selectedDates),P={day:g,month:d,year:u,disabled:w,selected:V},B=a[a.length-1];a.length===0||B.length%7===0?a.push([P]):B.push(P),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,d=this.month!==o;return["day",l&&"today",d&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===ai&&this.handleDateSelect(t,e),!0}};c([h({mode:"boolean"})],Ee.prototype,"readonly",void 0);c([h],Ee.prototype,"locale",void 0);c([h({converter:L})],Ee.prototype,"month",void 0);c([h({converter:L})],Ee.prototype,"year",void 0);c([h({attribute:"day-format",mode:"fromView"})],Ee.prototype,"dayFormat",void 0);c([h({attribute:"weekday-format",mode:"fromView"})],Ee.prototype,"weekdayFormat",void 0);c([h({attribute:"month-format",mode:"fromView"})],Ee.prototype,"monthFormat",void 0);c([h({attribute:"year-format",mode:"fromView"})],Ee.prototype,"yearFormat",void 0);c([h({attribute:"min-weeks",converter:L})],Ee.prototype,"minWeeks",void 0);c([h({attribute:"disabled-dates"})],Ee.prototype,"disabledDates",void 0);c([h({attribute:"selected-dates"})],Ee.prototype,"selectedDates",void 0);const Zo={none:"none",default:"default",sticky:"sticky"},bi={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},ao={default:"default",header:"header",stickyHeader:"sticky-header"};class jt extends X{constructor(){super(...arguments),this.rowType=ao.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ul(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ds,this.handleFocusout),this.addEventListener(Rs,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ds,this.handleFocusout),this.removeEventListener(Rs,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Ii:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Ti:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case Ze:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case Je:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ao.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===ao.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}c([h({attribute:"grid-template-columns"})],jt.prototype,"gridTemplateColumns",void 0);c([h({attribute:"row-type"})],jt.prototype,"rowType",void 0);c([y],jt.prototype,"rowData",void 0);c([y],jt.prototype,"columnDefinitions",void 0);c([y],jt.prototype,"cellItemTemplate",void 0);c([y],jt.prototype,"headerCellItemTemplate",void 0);c([y],jt.prototype,"rowIndex",void 0);c([y],jt.prototype,"isActiveRow",void 0);c([y],jt.prototype,"activeCellItemTemplate",void 0);c([y],jt.prototype,"defaultCellItemTemplate",void 0);c([y],jt.prototype,"defaultHeaderCellItemTemplate",void 0);c([y],jt.prototype,"cellElements",void 0);function gb(i){const t=i.tagFor(jt);return I`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const mb=(i,t)=>{const e=gb(i),s=i.tagFor(jt);return I`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${Qn({property:"rowElements",filter:ni("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class Ht extends X{constructor(){super(),this.noTabbing=!1,this.generateHeader=Zo.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,W.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Ht.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Ht.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ul(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Uc,this.handleFocus),this.addEventListener(Rs,this.handleKeydown),this.addEventListener(Ds,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),W.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Uc,this.handleFocus),this.removeEventListener(Rs,this.handleKeydown),this.removeEventListener(Ds,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case Re:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case De:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case sb:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case ib:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===Zo.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Ze:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case Je:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,W.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Zo.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Zo.sticky?ao.stickyHeader:ao.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}Ht.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));c([h({attribute:"no-tabbing",mode:"boolean"})],Ht.prototype,"noTabbing",void 0);c([h({attribute:"generate-header"})],Ht.prototype,"generateHeader",void 0);c([h({attribute:"grid-template-columns"})],Ht.prototype,"gridTemplateColumns",void 0);c([y],Ht.prototype,"rowsData",void 0);c([y],Ht.prototype,"columnDefinitions",void 0);c([y],Ht.prototype,"rowItemTemplate",void 0);c([y],Ht.prototype,"cellItemTemplate",void 0);c([y],Ht.prototype,"headerCellItemTemplate",void 0);c([y],Ht.prototype,"focusRowIndex",void 0);c([y],Ht.prototype,"focusColumnIndex",void 0);c([y],Ht.prototype,"defaultRowItemTemplate",void 0);c([y],Ht.prototype,"rowElementTag",void 0);c([y],Ht.prototype,"rowElements",void 0);const bb=I`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,vb=I`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class ci extends X{constructor(){super(...arguments),this.cellType=bi.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(qc,this.handleFocusin),this.addEventListener(Ds,this.handleFocusout),this.addEventListener(Rs,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(qc,this.handleFocusin),this.removeEventListener(Ds,this.handleFocusout),this.removeEventListener(Rs,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case bi.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===bi.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===bi.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case ai:case eb:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case bi.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Hs:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case bi.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=vb.render(this,this);break;case void 0:case bi.rowHeader:case bi.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=bb.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}c([h({attribute:"cell-type"})],ci.prototype,"cellType",void 0);c([h({attribute:"grid-column"})],ci.prototype,"gridColumn",void 0);c([y],ci.prototype,"rowData",void 0);c([y],ci.prototype,"columnDefinition",void 0);function yb(i){const t=i.tagFor(ci);return I`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function xb(i){const t=i.tagFor(ci);return I`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const wb=(i,t)=>{const e=yb(i),s=xb(i);return I`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${Qn({property:"cellElements",filter:ni('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${$t("slottedCellElements")}></slot>
        </template>
    `},$b=(i,t)=>I`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,kb=I`
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
`,Cb=i=>{const t=i.tagFor(ci);return I`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},Fb=(i,t)=>{const e=i.tagFor(ci);return I`
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
    `},Ib=(i,t)=>{const e=i.tagFor(jt);return I`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${ws(s=>s,Fb(i,t),{positioning:!0})}
        </${e}>
    `},Tb=(i,t)=>{const e=i.tagFor(Ht),s=i.tagFor(jt);return I`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${ws(o=>o.getWeekdayText(),Cb(i),{positioning:!0})}
        </${s}>
        ${ws(o=>o.getDays(),Ib(i,t))}
    </${e}>
`},Sb=i=>I`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${ws(t=>t.getWeekdayText(),I`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${ws(t=>t.getDays(),I`
                    <div class="week">
                        ${ws(t=>t,I`
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
    `,Db=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return I`
        <template>
            ${Vm}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${Dt(n=>n.readonly,Sb(o),Tb(i,o))}
            ${Am}
        </template>
    `},Rb=(i,t)=>I`
    <slot></slot>
`;let Wh=class extends X{};const Eb=(i,t)=>I`
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
            <slot ${$t("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Ob extends X{}class Ab extends fl(Ob){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class er extends Ab{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case is:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}c([h({attribute:"readonly",mode:"boolean"})],er.prototype,"readOnly",void 0);c([y],er.prototype,"defaultSlottedNodes",void 0);c([y],er.prototype,"indeterminate",void 0);function Yh(i){return Ss(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class Ke extends X{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),G.notify(this,"value")}get value(){var t;return G.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}c([y],Ke.prototype,"checked",void 0);c([y],Ke.prototype,"content",void 0);c([y],Ke.prototype,"defaultSelected",void 0);c([h({mode:"boolean"})],Ke.prototype,"disabled",void 0);c([h({attribute:"selected",mode:"boolean"})],Ke.prototype,"selectedAttribute",void 0);c([y],Ke.prototype,"selected",void 0);c([h({attribute:"value",mode:"fromView"})],Ke.prototype,"initialValue",void 0);class Ms{}c([y],Ms.prototype,"ariaChecked",void 0);c([y],Ms.prototype,"ariaPosInSet",void 0);c([y],Ms.prototype,"ariaSelected",void 0);c([y],Ms.prototype,"ariaSetSize",void 0);kt(Ms,xt);kt(Ke,pe,Ms);let fe=class bn extends X{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return G.track(this,"options"),this._options}set options(t){this._options=t,G.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{bn.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,bn.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case Ze:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case De:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Re:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case Je:{t.preventDefault(),this.selectLastOption();break}case Zn:return this.focusAndScrollOptionIntoView(),!0;case ai:case Hs:return!0;case is:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(bn.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=G.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Qm(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(Yh(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=bo("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};fe.slottedOptionFilter=i=>Yh(i)&&!i.hidden;fe.TYPE_AHEAD_TIMEOUT_MS=1e3;c([h({mode:"boolean"})],fe.prototype,"disabled",void 0);c([y],fe.prototype,"selectedIndex",void 0);c([y],fe.prototype,"selectedOptions",void 0);c([y],fe.prototype,"slottedOptions",void 0);c([y],fe.prototype,"typeaheadBuffer",void 0);class Ri{}c([y],Ri.prototype,"ariaActiveDescendant",void 0);c([y],Ri.prototype,"ariaDisabled",void 0);c([y],Ri.prototype,"ariaExpanded",void 0);c([y],Ri.prototype,"ariaMultiSelectable",void 0);kt(Ri,xt);kt(fe,Ri);const $s={above:"above",below:"below"};class Vb extends fe{}class Lb extends li(Vb){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Jo={inline:"inline",list:"list",both:"both",none:"none"};let di=class extends Lb{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=bo("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Jo.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Jo.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Jo.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),W.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return G.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,G.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return G.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(d=>d.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),G.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Jo.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=Jn(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?$s.above:$s.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$s.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};c([h({attribute:"autocomplete",mode:"fromView"})],di.prototype,"autocomplete",void 0);c([y],di.prototype,"maxHeight",void 0);c([h({attribute:"open",mode:"boolean"})],di.prototype,"open",void 0);c([h],di.prototype,"placeholder",void 0);c([h({attribute:"position"})],di.prototype,"positionAttribute",void 0);c([y],di.prototype,"position",void 0);class ir{}c([y],ir.prototype,"ariaAutoComplete",void 0);c([y],ir.prototype,"ariaControls",void 0);kt(ir,Ri);kt(di,pe,ir);const _b=(i,t)=>I`
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
            ${ne(i,t)}
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
                    ${lt("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${t.indicator||""}
                    </slot>
                </div>
            </slot>
            ${oe(i,t)}
        </div>
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>!e.open}"
            ${lt("listbox")}
        >
            <slot
                ${$t({filter:fe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Dn(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function Pb(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=Dn(e)}return!1}const ei=document.createElement("div");function Hb(i){return i instanceof Xn}class gl{setProperty(t,e){W.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){W.queueUpdate(()=>this.target.removeProperty(t))}}class Mb extends gl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(se.create([e]))}}class zb extends gl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class Bb extends gl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Xh{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),G.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),W.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),W.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}c([y],Xh.prototype,"target",void 0);class Nb{constructor(t){this.target=t.style}setProperty(t,e){W.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){W.queueUpdate(()=>this.target.removeProperty(t))}}class zt{setProperty(t,e){zt.properties[t]=e;for(const s of zt.roots.values())ms.getOrCreate(zt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete zt.properties[t];for(const e of zt.roots.values())ms.getOrCreate(zt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=zt;if(!e.has(t)){e.add(t);const s=ms.getOrCreate(this.normalizeRoot(t));for(const o in zt.properties)s.setProperty(o,zt.properties[o])}}static unregisterRoot(t){const{roots:e}=zt;if(e.has(t)){e.delete(t);const s=ms.getOrCreate(zt.normalizeRoot(t));for(const o in zt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===ei?document:t}}zt.roots=new Set;zt.properties={};const ia=new WeakMap,jb=W.supportsAdoptedStyleSheets?Mb:Xh,ms=Object.freeze({getOrCreate(i){if(ia.has(i))return ia.get(i);let t;return i===ei?t=new zt:i instanceof Document?t=W.supportsAdoptedStyleSheets?new zb:new Bb:Hb(i)?t=new jb(i):t=new Nb(i),ia.set(i,t),t}});class Kt extends hl{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Kt.uniqueId(),Kt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Kt({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Kt.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=At.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Kt&&(e=this.alias(e)),At.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),At.existsFor(t)&&At.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ei,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!At.existsFor(e)&&At.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}Kt.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Kt.tokensById=new Map;class Ub{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){ms.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(At.getOrCreate(e).get(t)))}remove(t,e){ms.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class qb{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=G.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,no))}}class Gb{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),G.getNotifier(this).notify(t.id))}get(t){return G.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const Zs=new WeakMap,Js=new WeakMap;class At{constructor(t){this.target=t,this.store=new Gb,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=Kt.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},Zs.set(t,this),G.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof Xn?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Zs.get(t)||new At(t)}static existsFor(t){return Zs.has(t)}static findParent(t){if(ei!==t.target){let e=Dn(t.target);for(;e!==null;){if(Zs.has(e))return Zs.get(e);e=Dn(e)}return At.getOrCreate(ei)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ei?At.getOrCreate(ei):null}while(s!==null);return null}get parent(){return Js.get(this)||null}updateCSSTokenReflection(t,e){if(Kt.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=At.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){Kt.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Kt.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=At.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Js.get(this).removeChild(this)}appendChild(t){t.parent&&Js.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));Js.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),G.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),G.getNotifier(this.store).unsubscribe(t),t.parent===this?Js.delete(t):!1}contains(t){return Pb(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),At.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),At.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=Kt.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);Kt.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new qb(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}At.cssCustomPropertyReflector=new Ub;c([y],At.prototype,"children",void 0);function Wb(i){return Kt.from(i)}const gt=Object.freeze({create:Wb,notifyConnection(i){return!i.isConnected||!At.existsFor(i)?!1:(At.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!At.existsFor(i)?!1:(At.getOrCreate(i).unbind(),!0)},registerRoot(i=ei){zt.registerRoot(i)},unregisterRoot(i=ei){zt.unregisterRoot(i)}}),sa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),oa=new Map,vn=new Map;let ks=null;const Ks=St.createInterface(i=>i.cachedCallback(t=>(ks===null&&(ks=new Zh(null,t)),ks))),Qh=Object.freeze({tagFor(i){return vn.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||St.findResponsibleContainer(i).get(Ks)},getOrCreate(i){if(!i)return ks===null&&(ks=St.getOrCreateDOMContainer().get(Ks)),ks;const t=i.$$designSystem$$;if(t)return t;const e=St.getOrCreateDOMContainer(i);if(e.has(Ks,!1))return e.get(Ks);{const s=new Zh(i,e);return e.register(mo.instance(Ks,s)),s}}});function Yb(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Zh{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>sa.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,d){const u=Yb(a,l,d),{name:g,callback:b,baseClass:w}=u;let{type:V}=u,P=g,B=oa.get(P),rt=!0;for(;B;){const ht=o(P,V,B);switch(ht){case sa.ignoreDuplicate:return;case sa.definitionCallbackOnly:rt=!1,B=void 0;break;default:P=ht,B=oa.get(P);break}}rt&&((vn.has(V)||V===X)&&(V=class extends V{}),oa.set(P,V),vn.set(V,P),w&&vn.set(w,P)),s.push(new Xb(e,P,V,n,b,rt))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&gt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class Xb{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){Uh.define(this.name,t,this.container)}defineElement(t){this.definition=new Yn(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Qh.tagFor(t)}}const Qb=(i,t)=>I`
    <div class="positioning-region" part="positioning-region">
        ${Dt(e=>e.modal,I`
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
            ${lt("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`;/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Jh=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Zb=Jh.join(","),Kh=typeof Element>"u",yo=Kh?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Sa=!Kh&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},Jb=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},tu=function(t){return t.tagName==="INPUT"},Kb=function(t){return tu(t)&&t.type==="hidden"},tv=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},ev=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},iv=function(t){if(!t.name)return!0;var e=t.form||Sa(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=ev(o,t.form);return!n||n===t},sv=function(t){return tu(t)&&t.type==="radio"},ov=function(t){return sv(t)&&!iv(t)},td=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},nv=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=yo.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(yo.call(r,"details:not([open]) *"))return!0;var a=Sa(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var d=t;t;){var u=t.parentElement,g=Sa(t);if(u&&!u.shadowRoot&&o(u)===!0)return td(t);t.assignedSlot?t=t.assignedSlot:!u&&g!==t.ownerDocument?t=g.host:t=u}t=d}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return td(t);return!1},rv=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return yo.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},eu=function(t,e){return!(e.disabled||Kb(e)||nv(e,t)||tv(e)||rv(e))},av=function(t,e){return!(ov(e)||Jb(e)<0||!eu(t,e))},ed=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return yo.call(t,Zb)===!1?!1:av(e,t)},lv=Jh.concat("iframe").join(","),id=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return yo.call(t,lv)===!1?!1:eu(e,t)};class Te extends X{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Hs:this.dismiss(),t.preventDefault();break;case Zn:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Te.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),W.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=G.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:ed(e)||Te.isFocusableFastElement(e)&&Te.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Te.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>ed(o))}}c([h({mode:"boolean"})],Te.prototype,"modal",void 0);c([h({mode:"boolean"})],Te.prototype,"hidden",void 0);c([h({attribute:"trap-focus",mode:"boolean"})],Te.prototype,"trapFocus",void 0);c([h({attribute:"aria-describedby"})],Te.prototype,"ariaDescribedby",void 0);c([h({attribute:"aria-labelledby"})],Te.prototype,"ariaLabelledby",void 0);c([h({attribute:"aria-label"})],Te.prototype,"ariaLabel",void 0);const cv=(i,t)=>I`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,dv={separator:"separator",presentation:"presentation"};class sr extends X{constructor(){super(...arguments),this.role=dv.separator,this.orientation=Ot.horizontal}}c([h],sr.prototype,"role",void 0);c([h],sr.prototype,"orientation",void 0);const Da={next:"next",previous:"previous"},hv=(i,t)=>I`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${Dt(e=>e.direction===Da.next,I`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${Dt(e=>e.direction===Da.previous,I`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class or extends X{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Da.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}c([h({mode:"boolean"})],or.prototype,"disabled",void 0);c([h({attribute:"aria-hidden",converter:Co})],or.prototype,"hiddenFromAT",void 0);c([h],or.prototype,"direction",void 0);const uv=(i,t)=>I`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ne(i,t)}
        <span class="content" part="content">
            <slot ${$t("content")}></slot>
        </span>
        ${oe(i,t)}
    </template>
`;class Io extends fe{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=Qo(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=Qo(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=Qo(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=Qo(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case Ze:{this.checkFirstOption(s);return}case De:{this.checkNextOption(s);return}case Re:{this.checkPreviousOption(s);return}case Je:{this.checkLastOption(s);return}case Zn:return this.focusAndScrollOptionIntoView(),!0;case Hs:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case is:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&W.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}c([y],Io.prototype,"activeIndex",void 0);c([h({mode:"boolean"})],Io.prototype,"multiple",void 0);c([h({converter:L})],Io.prototype,"size",void 0);const pv=(i,t)=>I`
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
            ${$t({filter:Io.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,te={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},fv={[te.menuitem]:"menuitem",[te.menuitemcheckbox]:"menuitemcheckbox",[te.menuitemradio]:"menuitemradio"};class we extends X{constructor(){super(...arguments),this.role=te.menuitem,this.hasSubmenu=!1,this.currentDirection=yt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case ai:case is:return this.invoke(),!1;case Ti:return this.expandAndFocus(),!1;case Ii:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case te.menuitemcheckbox:this.checked=!this.checked;break;case te.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case te.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Zi(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),W.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}c([h({mode:"boolean"})],we.prototype,"disabled",void 0);c([h({mode:"boolean"})],we.prototype,"expanded",void 0);c([y],we.prototype,"startColumnCount",void 0);c([h],we.prototype,"role",void 0);c([h({mode:"boolean"})],we.prototype,"checked",void 0);c([y],we.prototype,"submenuRegion",void 0);c([y],we.prototype,"hasSubmenu",void 0);c([y],we.prototype,"currentDirection",void 0);c([y],we.prototype,"submenu",void 0);kt(we,pe);const gv=(i,t)=>I`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==te.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,s)=>e.handleMenuItemKeyDown(s.event)}"
        @click="${(e,s)=>e.handleMenuItemClick(s.event)}"
        @mouseover="${(e,s)=>e.handleMouseOver(s.event)}"
        @mouseout="${(e,s)=>e.handleMouseOut(s.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${Dt(e=>e.role===te.menuitemcheckbox,I`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Dt(e=>e.role===te.menuitemradio,I`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${ne(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${oe(i,t)}
        ${Dt(e=>e.hasSubmenu,I`
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
        ${Dt(e=>e.expanded,I`
                <${i.tagFor(q)}
                    :anchorElement="${e=>e}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${e=>e.currentDirection}"
                    @loaded="${e=>e.submenuLoaded()}"
                    ${lt("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${i.tagFor(q)}>
            `)}
    </template>
`,mv=(i,t)=>I`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${$t("items")}></slot>
    </template>
`;let nr=class iu extends X{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Ss(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==te.menuitem&&a===null||r===te.menuitem&&a!==null?1:r!==te.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof we||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===te.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===te.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Ss(t)&&iu.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),W.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case De:this.setFocus(this.focusIndex+1,1);return;case Re:this.setFocus(this.focusIndex-1,-1);return;case Je:this.setFocus(this.menuItems.length-1,-1);return;case Ze:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};nr.focusableElementRoles=fv;c([y],nr.prototype,"items",void 0);const bv=(i,t)=>I`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${$t("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${ne(i,t)}
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
                ${lt("control")}
            />
            ${Dt(e=>!e.hideStep&&!e.readOnly&&!e.disabled,I`
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
            ${oe(i,t)}
        </div>
    </template>
`;class vv extends X{}class yv extends li(vv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const xv={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ge=class extends yv{constructor(){super(...arguments),this.type=xv.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&W.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};c([h({attribute:"readonly",mode:"boolean"})],ge.prototype,"readOnly",void 0);c([h({mode:"boolean"})],ge.prototype,"autofocus",void 0);c([h],ge.prototype,"placeholder",void 0);c([h],ge.prototype,"type",void 0);c([h],ge.prototype,"list",void 0);c([h({converter:L})],ge.prototype,"maxlength",void 0);c([h({converter:L})],ge.prototype,"minlength",void 0);c([h],ge.prototype,"pattern",void 0);c([h({converter:L})],ge.prototype,"size",void 0);c([h({mode:"boolean"})],ge.prototype,"spellcheck",void 0);c([y],ge.prototype,"defaultSlottedNodes",void 0);class rr{}kt(rr,xt);kt(ge,pe,rr);class wv extends X{}class $v extends li(wv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let re=class extends $v{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&W.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Re:return this.stepUp(),!1;case De:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};c([h({attribute:"readonly",mode:"boolean"})],re.prototype,"readOnly",void 0);c([h({mode:"boolean"})],re.prototype,"autofocus",void 0);c([h({attribute:"hide-step",mode:"boolean"})],re.prototype,"hideStep",void 0);c([h],re.prototype,"placeholder",void 0);c([h],re.prototype,"list",void 0);c([h({converter:L})],re.prototype,"maxlength",void 0);c([h({converter:L})],re.prototype,"minlength",void 0);c([h({converter:L})],re.prototype,"size",void 0);c([h({converter:L})],re.prototype,"step",void 0);c([h({converter:L})],re.prototype,"max",void 0);c([h({converter:L})],re.prototype,"min",void 0);c([y],re.prototype,"defaultSlottedNodes",void 0);kt(re,pe,rr);const sd=44,kv=(i,t)=>I`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Dt(e=>typeof e.value=="number",I`
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
                        style="stroke-dasharray: ${e=>sd*e.percentComplete/100}px ${sd}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,I`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class ss extends X{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}c([h({converter:L})],ss.prototype,"value",void 0);c([h({converter:L})],ss.prototype,"min",void 0);c([h({converter:L})],ss.prototype,"max",void 0);c([h({mode:"boolean"})],ss.prototype,"paused",void 0);c([y],ss.prototype,"percentComplete",void 0);const Cv=(i,t)=>I`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Dt(e=>typeof e.value=="number",I`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,I`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,Fv=(i,t)=>I`
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
            class="positioning-region ${e=>e.orientation===Ot.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${$t({property:"slottedRadioButtons",filter:ni("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Ei extends X{constructor(){super(...arguments),this.orientation=Ot.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Ti,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Ii,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in gs&&this.isInsideFoundationToolbar)return!0;switch(e){case ai:{this.checkFocusedRadio();break}case Ti:case De:{this.direction===yt.ltr?this.moveRight(t):this.moveLeft(t);break}case Ii:case Re:{this.direction===yt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Zi(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}c([h({attribute:"readonly",mode:"boolean"})],Ei.prototype,"readOnly",void 0);c([h({attribute:"disabled",mode:"boolean"})],Ei.prototype,"disabled",void 0);c([h],Ei.prototype,"name",void 0);c([h],Ei.prototype,"value",void 0);c([h],Ei.prototype,"orientation",void 0);c([y],Ei.prototype,"childItems",void 0);c([y],Ei.prototype,"slottedRadioButtons",void 0);const Iv=(i,t)=>I`
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
            <slot ${$t("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Tv extends X{}class Sv extends fl(Tv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ar extends Sv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case is:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}c([h({attribute:"readonly",mode:"boolean"})],ar.prototype,"readOnly",void 0);c([y],ar.prototype,"name",void 0);c([y],ar.prototype,"defaultSlottedNodes",void 0);let hi=class extends X{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&W.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:d,width:u}=a.getBoundingClientRect(),g=Math.round(d+e-o),b=Math.round(g+u);return this.isRtl?-b:(n=b,l===0?0:g)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:d}=n.getBoundingClientRect(),u=r[t],{width:g}=a[t].getBoundingClientRect(),b=u+g,w=l+e>u;if(w||l+d-s<b){const P=(o=[...r].sort((B,rt)=>w?rt-B:B-rt).find(B=>w?B+e<u:B+d-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(P)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=d=>{d&&d.target!==d.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};c([h({converter:L})],hi.prototype,"speed",void 0);c([h],hi.prototype,"duration",void 0);c([h],hi.prototype,"easing",void 0);c([h({attribute:"flippers-hidden-from-at",converter:Co})],hi.prototype,"flippersHiddenFromAT",void 0);c([y],hi.prototype,"scrolling",void 0);c([y],hi.prototype,"scrollItems",void 0);c([h({attribute:"view"})],hi.prototype,"view",void 0);const Dv=(i,t)=>{var e,s;return I`
    <template
        class="horizontal-scroll"
        @keyup="${(o,n)=>o.keyupHandler(n.event)}"
    >
        ${ne(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${o=>o.scrolled()}"
                ${lt("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${lt("content")}>
                    <slot
                        ${$t({property:"scrollItems",filter:ni()})}
                    ></slot>
                </div>
            </div>
            ${Dt(o=>o.view!=="mobile",I`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${lt("previousFlipperContainer")}
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
                        ${lt("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${t.nextFlipper instanceof Function?t.nextFlipper(i,t):(s=t.nextFlipper)!==null&&s!==void 0?s:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${oe(i,t)}
    </template>
`};function su(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class Rv extends X{}class Ev extends li(Rv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let $e=class extends Ev{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&W.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};c([h({attribute:"readonly",mode:"boolean"})],$e.prototype,"readOnly",void 0);c([h({mode:"boolean"})],$e.prototype,"autofocus",void 0);c([h],$e.prototype,"placeholder",void 0);c([h],$e.prototype,"list",void 0);c([h({converter:L})],$e.prototype,"maxlength",void 0);c([h({converter:L})],$e.prototype,"minlength",void 0);c([h],$e.prototype,"pattern",void 0);c([h({converter:L})],$e.prototype,"size",void 0);c([h({mode:"boolean"})],$e.prototype,"spellcheck",void 0);c([y],$e.prototype,"defaultSlottedNodes",void 0);class ou{}kt(ou,xt);kt($e,pe,ou);class Ov extends Io{}class Av extends li(Ov){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let ui=class extends Av{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=bo("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,W.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return G.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const d=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const u=this._options.findIndex(w=>w.value===t),g=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[u])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(u===-1||g!==b)&&(t="",this.selectedIndex=u),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}d!==t&&(this._value=t,super.valueChanged(d,t),G.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?$s.above:$s.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$s.above?~~t.top:~~s}get displayValue(){var t,e;return G.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{G.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{G.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(fe.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case is:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Ze:case Je:{t.preventDefault();break}case ai:{t.preventDefault(),this.open=!this.open;break}case Hs:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case Zn:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===De||e===Re)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&G.notify(this,"displayValue")}};c([h({attribute:"open",mode:"boolean"})],ui.prototype,"open",void 0);c([Wg],ui.prototype,"collapsible",null);c([y],ui.prototype,"control",void 0);c([h({attribute:"position"})],ui.prototype,"positionAttribute",void 0);c([y],ui.prototype,"position",void 0);c([y],ui.prototype,"maxHeight",void 0);class ml{}c([y],ml.prototype,"ariaControls",void 0);kt(ml,Ri);kt(ui,pe,ml);const Vv=(i,t)=>I`
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
        ${Dt(e=>e.collapsible,I`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${lt("control")}
                >
                    ${ne(i,t)}
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
                    ${oe(i,t)}
                </div>
            `)}
        <div
            class="listbox"
            id="${e=>e.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${e=>e.disabled}"
            ?hidden="${e=>e.collapsible?!e.open:!1}"
            ${lt("listbox")}
        >
            <slot
                ${$t({filter:fe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Lv=(i,t)=>I`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${Dt(e=>e.shimmer===!0,I`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class To extends X{constructor(){super(...arguments),this.shape="rect"}}c([h],To.prototype,"fill",void 0);c([h],To.prototype,"shape",void 0);c([h],To.prototype,"pattern",void 0);c([h({mode:"boolean"})],To.prototype,"shimmer",void 0);const _v=(i,t)=>I`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||Ot.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${lt("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${Dt(e=>!e.hideMark,I`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function Ra(i,t,e,s){let o=Jn(0,1,(i-t)/(e-t));return s===yt.rtl&&(o=1-o),o}const Ko={min:0,max:0,direction:yt.ltr,orientation:Ot.horizontal,disabled:!1};class pi extends X{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=yt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Ko.direction||yt.ltr,this.sliderOrientation=Ko.orientation,this.sliderMaxPosition=Ko.max,this.sliderMinPosition=Ko.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||yt.ltr,this.sliderOrientation=n||Ot.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:yt.ltr,e=Ra(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===Ot.horizontal?t===yt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=G.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}c([y],pi.prototype,"positionStyle",void 0);c([h],pi.prototype,"position",void 0);c([h({attribute:"hide-mark",mode:"boolean"})],pi.prototype,"hideMark",void 0);c([h({attribute:"disabled",mode:"boolean"})],pi.prototype,"disabled",void 0);c([y],pi.prototype,"sliderOrientation",void 0);c([y],pi.prototype,"sliderMinPosition",void 0);c([y],pi.prototype,"sliderMaxPosition",void 0);c([y],pi.prototype,"sliderDirection",void 0);const Pv=(i,t)=>I`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||Ot.horizontal}"
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
            <div ${lt("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${e=>e.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${lt("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${e=>e.position}"
            >
                <slot name="thumb">${t.thumb||""}</slot>
            </div>
        </div>
    </template>
`;class Hv extends X{}class Mv extends li(Hv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const zv={singleValue:"single-value"};class Yt extends Mv{constructor(){super(...arguments),this.direction=yt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Ot.horizontal,this.mode=zv.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===Ze)t.preventDefault(),this.value=`${this.min}`;else if(t.key===Je)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Ti:case Re:t.preventDefault(),this.increment();break;case Ii:case De:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===Ot.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=Ra(t,this.orientation===Ot.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Ot.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===Ot.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Zi(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==yt.rtl&&this.orientation!==Ot.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==yt.rtl&&this.orientation!==Ot.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-Ra(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===Ot.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}c([h({attribute:"readonly",mode:"boolean"})],Yt.prototype,"readOnly",void 0);c([y],Yt.prototype,"direction",void 0);c([y],Yt.prototype,"isDragging",void 0);c([y],Yt.prototype,"position",void 0);c([y],Yt.prototype,"trackWidth",void 0);c([y],Yt.prototype,"trackMinWidth",void 0);c([y],Yt.prototype,"trackHeight",void 0);c([y],Yt.prototype,"trackLeft",void 0);c([y],Yt.prototype,"trackMinHeight",void 0);c([y],Yt.prototype,"valueTextFormatter",void 0);c([h({converter:L})],Yt.prototype,"min",void 0);c([h({converter:L})],Yt.prototype,"max",void 0);c([h({converter:L})],Yt.prototype,"step",void 0);c([h],Yt.prototype,"orientation",void 0);c([h],Yt.prototype,"mode",void 0);const Bv=(i,t)=>I`
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
            <slot ${$t("defaultSlottedNodes")}></slot>
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
`;class Nv extends X{}class jv extends fl(Nv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class bl extends jv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case ai:case is:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}c([h({attribute:"readonly",mode:"boolean"})],bl.prototype,"readOnly",void 0);c([y],bl.prototype,"defaultSlottedNodes",void 0);const Uv=(i,t)=>I`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class qv extends X{}const Gv=(i,t)=>I`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class nu extends X{}c([h({mode:"boolean"})],nu.prototype,"disabled",void 0);const Wv=(i,t)=>I`
    <template class="${e=>e.orientation}">
        ${ne(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${$t("tabs")}></slot>

            ${Dt(e=>e.showActiveIndicator,I`
                    <div
                        ${lt("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${oe(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${$t("tabpanels")}></slot>
        </div>
    </template>
`,od={vertical:"vertical",horizontal:"horizontal"};class fi extends X{constructor(){super(...arguments),this.orientation=od.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Ii:t.preventDefault(),this.adjustBackward(t);break;case Ti:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Re:t.preventDefault(),this.adjustBackward(t);break;case De:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case Ze:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case Je:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${bo()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${bo()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===od.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=Jn(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}c([h],fi.prototype,"orientation",void 0);c([h],fi.prototype,"activeid",void 0);c([y],fi.prototype,"tabs",void 0);c([y],fi.prototype,"tabpanels",void 0);c([h({mode:"boolean"})],fi.prototype,"activeindicator",void 0);c([y],fi.prototype,"activeIndicatorRef",void 0);c([y],fi.prototype,"showActiveIndicator",void 0);kt(fi,pe);class Yv extends X{}class Xv extends li(Yv){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const ru={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Xt=class extends Xv{constructor(){super(...arguments),this.resize=ru.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};c([h({mode:"boolean"})],Xt.prototype,"readOnly",void 0);c([h],Xt.prototype,"resize",void 0);c([h({mode:"boolean"})],Xt.prototype,"autofocus",void 0);c([h({attribute:"form"})],Xt.prototype,"formId",void 0);c([h],Xt.prototype,"list",void 0);c([h({converter:L})],Xt.prototype,"maxlength",void 0);c([h({converter:L})],Xt.prototype,"minlength",void 0);c([h],Xt.prototype,"name",void 0);c([h],Xt.prototype,"placeholder",void 0);c([h({converter:L,mode:"fromView"})],Xt.prototype,"cols",void 0);c([h({converter:L,mode:"fromView"})],Xt.prototype,"rows",void 0);c([h({mode:"boolean"})],Xt.prototype,"spellcheck",void 0);c([y],Xt.prototype,"defaultSlottedNodes",void 0);kt(Xt,rr);const Qv=(i,t)=>I`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==ru.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${$t("defaultSlottedNodes")}></slot>
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
            ${lt("control")}
        ></textarea>
    </template>
`,Zv=(i,t)=>I`
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
                ${$t({property:"defaultSlottedNodes",filter:su})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ne(i,t)}
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
                ${lt("control")}
            />
            ${oe(i,t)}
        </div>
    </template>
`,Jv=(i,t)=>I`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${Qn({property:"childItems",attributeFilter:["disabled","hidden"],filter:ni(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${ne(i,t)}
            <slot
                ${$t({filter:ni(),property:"slottedItems"})}
            ></slot>
            ${oe(i,t)}
        </div>
    </template>
`,nd=Object.freeze({[gs.ArrowUp]:{[Ot.vertical]:-1},[gs.ArrowDown]:{[Ot.vertical]:1},[gs.ArrowLeft]:{[Ot.horizontal]:{[yt.ltr]:-1,[yt.rtl]:1}},[gs.ArrowRight]:{[Ot.horizontal]:{[yt.ltr]:1,[yt.rtl]:-1}}});let Oi=class Ea extends X{constructor(){super(...arguments),this._activeIndex=0,this.direction=yt.ltr,this.orientation=Ot.horizontal}get activeIndex(){return G.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Jn(0,this.focusableElements.length-1,t),G.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Zi(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=nd[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=nd[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in gs)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(Ea.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,d=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(u=>id(u));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(id(e)||a||l||d)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Ea.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};c([y],Oi.prototype,"direction",void 0);c([h],Oi.prototype,"orientation",void 0);c([y],Oi.prototype,"slottedItems",void 0);c([y],Oi.prototype,"slottedLabel",void 0);c([y],Oi.prototype,"childItems",void 0);class lr{}c([h({attribute:"aria-labelledby"})],lr.prototype,"ariaLabelledby",void 0);c([h({attribute:"aria-label"})],lr.prototype,"ariaLabel",void 0);kt(lr,xt);kt(Oi,pe,lr);const Kv=(i,t)=>I`
        ${Dt(e=>e.tooltipVisible,I`
            <${i.tagFor(q)}
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
                ${lt("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${i.tagFor(q)}>
        `)}
    `,ce={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Lt=class extends X{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=yt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Hs:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Zi(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),W.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ce.top:case ce.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ce.right:case ce.left:case ce.start:case ce.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ce.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ce.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ce.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ce.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ce.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ce.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ce.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ce.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};c([h({mode:"boolean"})],Lt.prototype,"visible",void 0);c([h],Lt.prototype,"anchor",void 0);c([h],Lt.prototype,"delay",void 0);c([h],Lt.prototype,"position",void 0);c([h({attribute:"auto-update-mode"})],Lt.prototype,"autoUpdateMode",void 0);c([h({attribute:"horizontal-viewport-lock"})],Lt.prototype,"horizontalViewportLock",void 0);c([h({attribute:"vertical-viewport-lock"})],Lt.prototype,"verticalViewportLock",void 0);c([y],Lt.prototype,"anchorElement",void 0);c([y],Lt.prototype,"viewportElement",void 0);c([y],Lt.prototype,"verticalPositioningMode",void 0);c([y],Lt.prototype,"horizontalPositioningMode",void 0);c([y],Lt.prototype,"horizontalInset",void 0);c([y],Lt.prototype,"verticalInset",void 0);c([y],Lt.prototype,"horizontalScaling",void 0);c([y],Lt.prototype,"verticalScaling",void 0);c([y],Lt.prototype,"verticalDefaultPosition",void 0);c([y],Lt.prototype,"horizontalDefaultPosition",void 0);c([y],Lt.prototype,"tooltipVisible",void 0);c([y],Lt.prototype,"currentDirection",void 0);const ty=(i,t)=>I`
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
        ${Qn({property:"childItems",filter:ni()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Dt(e=>e.childItems&&e.childItemLength()>0,I`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(e,s)=>e.handleExpandCollapseButtonClick(s.event)}"
                            ${lt("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${t.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${ne(i,t)}
                <slot></slot>
                ${oe(i,t)}
            </div>
        </div>
        ${Dt(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),I`
                <div role="group" class="items" part="items">
                    <slot name="item" ${$t("items")}></slot>
                </div>
            `)}
    </template>
`;function $i(i){return Ss(i)&&i.getAttribute("role")==="treeitem"}class _t extends X{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>$i(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{$i(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>$i(e));return t?t.length:0}}c([h({mode:"boolean"})],_t.prototype,"expanded",void 0);c([h({mode:"boolean"})],_t.prototype,"selected",void 0);c([h({mode:"boolean"})],_t.prototype,"disabled",void 0);c([y],_t.prototype,"focusable",void 0);c([y],_t.prototype,"childItems",void 0);c([y],_t.prototype,"items",void 0);c([y],_t.prototype,"nested",void 0);c([y],_t.prototype,"renderCollapsedChildren",void 0);kt(_t,pe);const ey=(i,t)=>I`
    <template
        role="tree"
        ${lt("treeView")}
        @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        @click="${(e,s)=>e.handleClick(s.event)}"
        @selected-change="${(e,s)=>e.handleSelectedChange(s.event)}"
    >
        <slot ${$t("slottedTreeItems")}></slot>
    </template>
`;class cr extends X{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&_t.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case Ze:e.length&&_t.focusItem(e[0]);return;case Je:e.length&&_t.focusItem(e[e.length-1]);return;case Ii:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof _t&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof _t&&s.parentElement instanceof _t&&_t.focusItem(s.parentElement)}return!1;case Ti:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof _t&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof _t&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case De:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Re:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case ai:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!$i(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{$i(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>$i(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),W.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!$i(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Ss(o)&&_t.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>$i(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return Jm(this,"[role='treeitem']")||[]}}c([h({attribute:"render-collapsed-nodes"})],cr.prototype,"renderCollapsedNodes",void 0);c([y],cr.prototype,"currentSelected",void 0);c([y],cr.prototype,"slottedTreeItems",void 0);class iy{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class So extends iy{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new So(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const st=So.with(window.matchMedia("(forced-colors)"));So.with(window.matchMedia("(prefers-color-scheme: dark)"));So.with(window.matchMedia("(prefers-color-scheme: light)"));class sy{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){G.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){G.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Oe="not-allowed",oy=":host([hidden]){display:none}";function ot(i){return`${oy}:host{display:${i}}`}const Q=tb()?"focus-visible":"focus";function Ui(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function na(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Bi(i,t,e){return isNaN(i)?t:t+i*(e-t)}function ny(i){const t=Math.round(Ui(i,0,255)).toString(16);return t.length===1?"0"+t:t}function tn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function ie(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class xo{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new xo(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new xo(ie(this.h,t),ie(this.s,t),ie(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Bt{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Bt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Bt(ie(this.l,t),ie(this.a,t),ie(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Bt.epsilon=216/24389;Bt.kappa=24389/27;class Vt{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new Vt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Bi(this.r,0,255))},${Math.round(Bi(this.g,0,255))},${Math.round(Bi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Bi(this.r,0,255))},${Math.round(Bi(this.g,0,255))},${Math.round(Bi(this.b,0,255))},${Ui(this.a,0,1)})`}roundToPrecision(t){return new Vt(ie(this.r,t),ie(this.g,t),ie(this.b,t),ie(this.a,t))}clamp(){return new Vt(Ui(this.r,0,1),Ui(this.g,0,1),Ui(this.b,0,1),Ui(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return ny(Bi(t,0,255))}}class be{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new be(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new be(ie(this.x,t),ie(this.y,t),ie(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}be.whitePoint=new be(.95047,1,1.08883);function ry(i){return i.r*.2126+i.g*.7152+i.b*.0722}function au(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return ry(new Vt(t(i.r),t(i.g),t(i.b),1))}function ra(i,t,e){return e-t===0?0:(i-t)/(e-t)}function aa(i,t,e){const s=ra(i.r,t.r,e.r),o=ra(i.g,t.g,e.g),n=ra(i.b,t.b,e.b);return(s+o+n)/3}function ay(i,t,e=null){let s=0,o=e;return o!==null?s=aa(i,t,o):(o=new Vt(0,0,0,1),s=aa(i,t,o),s<=0&&(o=new Vt(1,1,1,1),s=aa(i,t,o))),s=Math.round(s*1e3)/1e3,new Vt(o.r,o.g,o.b,s)}function rd(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new xo(o,r,n)}function ly(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new Vt(n+o,r+o,a+o,t)}function cy(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Bt.epsilon?a=o:a=(116*e-16)/Bt.kappa;let l=0;i.l>Bt.epsilon*Bt.kappa?l=n:l=i.l/Bt.kappa;let d=0;return r>Bt.epsilon?d=r:d=(116*s-16)/Bt.kappa,a=be.whitePoint.x*a,l=be.whitePoint.y*l,d=be.whitePoint.z*d,new be(a,l,d)}function dy(i){function t(l){return l>Bt.epsilon?Math.pow(l,1/3):(Bt.kappa*l+16)/116}const e=t(i.x/be.whitePoint.x),s=t(i.y/be.whitePoint.y),o=t(i.z/be.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Bt(n,r,a)}function hy(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new be(n,r,a)}function uy(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new Vt(s,o,n,t)}function py(i){return dy(hy(i))}function la(i,t=1){return uy(cy(i),t)}var ad;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(ad||(ad={}));function fy(i,t){if(t.a>=1)return t;if(t.a<=0)return new Vt(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new Vt(e,s,o,1)}function en(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Vt(tn(i,t.r,e.r),tn(i,t.g,e.g),tn(i,t.b,e.b),tn(i,t.a,e.a))}var ld;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(ld||(ld={}));const gy=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Xi(i){const t=gy.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new Vt(na((s&16711680)>>>16,0,255),na((s&65280)>>>8,0,255),na(s&255,0,255),1)}function Rn(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Se=Object.freeze({create(i,t,e){return new En(i,t,e)},from(i){return new En(i.r,i.g,i.b)}});function my(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class En extends Vt{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Rn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=au(this)}static fromObject(t){return new En(t.r,t.g,t.b)}}function Oa(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?Oa(i,t,e,o):Oa(i,t,o+1,s)}const by=(-.1+Math.sqrt(.21))/2;function Do(i){return i.relativeLuminance<=by}function os(i){return Do(i)?-1:1}const cd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function vy(i,t,e){return typeof i=="number"?wo.from(Se.create(i,t,e)):wo.from(i)}function yy(i,t){return my(i)?We.from(i,t):We.from(Se.create(i.r,i.g,i.b),t)}const wo=Object.freeze({create:vy,from:yy});class We{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=os(t));const l=d=>Rn(t,d)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),Oa(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[Ui(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=rd(t).s,n=rd(e);if(n.s<o){const r=new xo(n.h,o,n.l);return ly(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=py(Vt.fromObject(t).roundToPrecision(4)),o=la(new Bt(0,s.a,s.b)).clamp().roundToPrecision(4),n=la(new Bt(50,s.a,s.b)).clamp().roundToPrecision(4),r=la(new Bt(100,s.a,s.b)).clamp().roundToPrecision(4),a=new Vt(0,0,0),l=new Vt(1,1,1),d=r.equalValue(l)?0:14,u=o.equalValue(a)?0:14;for(let g=100+d;g>=0-u;g-=.5){let b;if(g<0){const w=g/u+1;b=en(w,a,o)}else if(g<=50)b=en(We.ramp(g),o,n);else if(g<=100)b=en(We.ramp(g),n,r);else{const w=(g-100)/d;b=en(w,r,l)}b=We.saturationBump(n,b).roundToPrecision(4),e.push(Se.from(b))}return new We(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=d=>{const u=e.closestIndexOf(d);return o===1?e.lastIndex-u:u};o===1&&s.reverse();const a=t(s[s.length-2]);if(ie(Rn(s[s.length-1],s[s.length-2]),2)<a){s.pop();const d=e.colorContrast(n[e.lastIndex],a,void 0,o),u=r(d),g=r(s[s.length-2]),b=u-g;let w=1;for(let V=s.length-b-1;V<s.length;V++){const P=r(s[V]),B=V===s.length-1?e.lastIndex:P+w;s[V]=n[B],w++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=We.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return ie(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?cd:Object.assign(Object.assign({},cd),e);return new We(t,Object.freeze(We.createColorPaletteByContrast(t,s)))}}const On=Se.create(1,1,1),vl=Se.create(0,0,0),xy=Se.create(.5,.5,.5),ca=Xi("#0078D4"),wy=Se.create(ca.r,ca.g,ca.b);function lu(i,t,e,s,o){const n=u=>u.contrast(On)>=o?On:vl,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),d=n(s);return{rest:r,hover:a,active:l,focus:d}}class dr{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=Rn.bind(null,this),this.createCSS=this.toColorString,this.color=new Vt(t,e,s),this.cssGradient=o,this.relativeLuminance=au(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new dr(t.r,t.g,t.b,e)}}const $y=new Vt(0,0,0),ky=new Vt(1,1,1);function cu(i,t,e,s,o,n,r,a,l=10,d=!1){const u=i.closestIndexOf(t);a===void 0&&(a=os(t));function g(Y){if(d){const pt=i.closestIndexOf(t),ft=i.get(pt),j=Y.relativeLuminance<t.relativeLuminance?$y:ky,ae=ay(Xi(Y.toColorString()),Xi(ft.toColorString()),j).roundToPrecision(2),le=fy(Xi(t.toColorString()),ae);return Se.from(le)}else return Y}const b=u+a*e,w=b+a*(s-e),V=b+a*(o-e),P=b+a*(n-e),B=a===-1?0:100-l,rt=a===-1?l:100;function ht(Y,pt){const ft=i.get(Y);if(pt){const j=i.get(Y+a*r),ae=a===-1?j:ft,le=a===-1?ft:j,qs=`linear-gradient(${g(ae).toColorString()} ${B}%, ${g(le).toColorString()} ${rt}%)`;return dr.fromObject(ae,qs)}else return g(ft)}return{rest:ht(b,!0),hover:ht(w,!0),active:ht(V,!1),focus:ht(P,!0)}}function Cy(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),d=os(t),u=l+d*e,g=u+d*(s-e),b=u+d*(o-e),w=u+d*(n-e),V=`calc(100% - ${a})`;function P(B,rt){const ht=i.get(B);if(rt){const Y=i.get(B+d*r),pt=`linear-gradient(${ht.toColorString()} ${V}, ${Y.toColorString()} ${V}, ${Y.toColorString()})`;return dr.fromObject(ht,pt)}else return ht}return{rest:P(u,!0),hover:P(g,!0),active:P(b,!1),focus:P(w,!0)}}function Fy(i,t,e){return i.colorContrast(t,e)}function Es(i,t,e,s,o,n,r,a){a==null&&(a=os(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function Iy(i,t,e,s,o,n,r,a=void 0,l,d,u,g,b,w=void 0){return Do(t)?Es(i,t,l,d,u,g,b,w):Es(i,t,e,s,o,n,r,a)}function Ty(i,t,e){return i.get(i.closestIndexOf(t)+os(t)*e)}function Si(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=os(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function yl(i,t,e,s,o,n,r=void 0,a,l,d,u,g=void 0){return Do(t)?Si(i,t,a,l,d,u,g):Si(i,t,e,s,o,n,r)}function Sy(i,t){return Do(t)?On:vl}function Dy(i,t,e){return Do(t)?vl:On}function Ry(i){return Se.create(i,i,i)}var Aa;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(Aa||(Aa={}));function Ro(i,t){return i.closestIndexOf(Ry(t))}function Ey(i,t){return i.get(Ro(i,t))}function Oy(i,t,e){return i.get(Ro(i,t)+e)}function du(i,t,e){return i.get(Ro(i,t)+e*-1)}function Ay(i,t,e){return i.get(Ro(i,t)+e*-1*2)}function Vy(i,t,e){return i.get(Ro(i,t)+e*-1*3)}const Ly={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=gt;function D(i){return gt.create({name:i,cssCustomPropertyName:null})}const yn=v("direction").withDefault(yt.ltr),ke=v("disabled-opacity").withDefault(.3),hr=v("base-height-multiplier").withDefault(8),_y=v("base-horizontal-spacing-multiplier").withDefault(3),Ai=v("density").withDefault(0),A=v("design-unit").withDefault(4),dt=v("control-corner-radius").withDefault(4),ii=v("layer-corner-radius").withDefault(8),z=v("stroke-width").withDefault(1),Wt=v("focus-stroke-width").withDefault(2),Ae=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Py=v("font-weight").withDefault(Ly.Normal);function gi(i){return t=>{const e=i.getValueFor(t),s=Py.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const ur=v("type-ramp-base-font-size").withDefault("14px"),hu=v("type-ramp-base-line-height").withDefault("20px"),Hy=v("type-ramp-base-font-variations").withDefault(gi(ur)),xl=v("type-ramp-minus-1-font-size").withDefault("12px"),wl=v("type-ramp-minus-1-line-height").withDefault("16px"),My=v("type-ramp-minus-1-font-variations").withDefault(gi(xl)),$l=v("type-ramp-minus-2-font-size").withDefault("10px"),uu=v("type-ramp-minus-2-line-height").withDefault("14px"),zy=v("type-ramp-minus-2-font-variations").withDefault(gi($l)),kl=v("type-ramp-plus-1-font-size").withDefault("16px"),pu=v("type-ramp-plus-1-line-height").withDefault("22px"),By=v("type-ramp-plus-1-font-variations").withDefault(gi(kl)),pr=v("type-ramp-plus-2-font-size").withDefault("20px"),fu=v("type-ramp-plus-2-line-height").withDefault("26px"),Ny=v("type-ramp-plus-2-font-variations").withDefault(gi(pr)),Cl=v("type-ramp-plus-3-font-size").withDefault("24px"),gu=v("type-ramp-plus-3-line-height").withDefault("32px"),jy=v("type-ramp-plus-3-font-variations").withDefault(gi(Cl)),Fl=v("type-ramp-plus-4-font-size").withDefault("28px"),mu=v("type-ramp-plus-4-line-height").withDefault("36px"),Uy=v("type-ramp-plus-4-font-variations").withDefault(gi(Fl)),Il=v("type-ramp-plus-5-font-size").withDefault("32px"),bu=v("type-ramp-plus-5-line-height").withDefault("40px"),qy=v("type-ramp-plus-5-font-variations").withDefault(gi(Il)),Tl=v("type-ramp-plus-6-font-size").withDefault("40px"),vu=v("type-ramp-plus-6-line-height").withDefault("52px"),Gy=v("type-ramp-plus-6-font-variations").withDefault(gi(Tl)),ns=v("base-layer-luminance").withDefault(Aa.LightMode),Va=D("accent-fill-rest-delta").withDefault(0),La=D("accent-fill-hover-delta").withDefault(-2),_a=D("accent-fill-active-delta").withDefault(-5),Pa=D("accent-fill-focus-delta").withDefault(0),yu=D("accent-foreground-rest-delta").withDefault(0),xu=D("accent-foreground-hover-delta").withDefault(3),wu=D("accent-foreground-active-delta").withDefault(-8),$u=D("accent-foreground-focus-delta").withDefault(0),ku=D("neutral-fill-rest-delta").withDefault(-1),Cu=D("neutral-fill-hover-delta").withDefault(1),Fu=D("neutral-fill-active-delta").withDefault(0),Iu=D("neutral-fill-focus-delta").withDefault(0),Tu=D("neutral-fill-input-rest-delta").withDefault(-1),Su=D("neutral-fill-input-hover-delta").withDefault(1),Du=D("neutral-fill-input-active-delta").withDefault(0),Ru=D("neutral-fill-input-focus-delta").withDefault(-2),sn=D("neutral-fill-input-alt-rest-delta").withDefault(2),dd=D("neutral-fill-input-alt-hover-delta").withDefault(4),hd=D("neutral-fill-input-alt-active-delta").withDefault(6),ud=D("neutral-fill-input-alt-focus-delta").withDefault(2),Di=D("neutral-fill-layer-rest-delta").withDefault(-2),Wy=D("neutral-fill-layer-hover-delta").withDefault(-3),Yy=D("neutral-fill-layer-active-delta").withDefault(-3),on=D("neutral-fill-layer-alt-rest-delta").withDefault(-1),Xy=D("neutral-fill-secondary-rest-delta").withDefault(3),Qy=D("neutral-fill-secondary-hover-delta").withDefault(2),Zy=D("neutral-fill-secondary-active-delta").withDefault(1),Jy=D("neutral-fill-secondary-focus-delta").withDefault(3),Eu=D("neutral-fill-stealth-rest-delta").withDefault(0),Ou=D("neutral-fill-stealth-hover-delta").withDefault(3),Au=D("neutral-fill-stealth-active-delta").withDefault(2),Vu=D("neutral-fill-stealth-focus-delta").withDefault(0),Ky=D("neutral-fill-strong-rest-delta").withDefault(0),Lu=D("neutral-fill-strong-hover-delta").withDefault(8),_u=D("neutral-fill-strong-active-delta").withDefault(-5),Pu=D("neutral-fill-strong-focus-delta").withDefault(0),Hu=D("neutral-stroke-rest-delta").withDefault(8),Mu=D("neutral-stroke-hover-delta").withDefault(12),zu=D("neutral-stroke-active-delta").withDefault(6),Bu=D("neutral-stroke-focus-delta").withDefault(8),Nu=D("neutral-stroke-control-rest-delta").withDefault(3),ju=D("neutral-stroke-control-hover-delta").withDefault(5),Uu=D("neutral-stroke-control-active-delta").withDefault(5),qu=D("neutral-stroke-control-focus-delta").withDefault(5),Gu=D("neutral-stroke-divider-rest-delta").withDefault(4),pd=D("neutral-stroke-layer-rest-delta").withDefault(3),t0=D("neutral-stroke-layer-hover-delta").withDefault(3),e0=D("neutral-stroke-layer-active-delta").withDefault(3),i0=D("neutral-stroke-strong-hover-delta").withDefault(0),s0=D("neutral-stroke-strong-active-delta").withDefault(0),o0=D("neutral-stroke-strong-focus-delta").withDefault(0),Wu=v("neutral-base-color").withDefault(xy),wt=D("neutral-palette").withDefault(i=>wo.from(Wu.getValueFor(i))),Yu=v("accent-base-color").withDefault(wy),Sl=D("accent-palette").withDefault(i=>wo.from(Yu.getValueFor(i))),n0=D("neutral-layer-card-container-recipe").withDefault({evaluate:i=>du(wt.getValueFor(i),ns.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>n0.getValueFor(i).evaluate(i));const r0=D("neutral-layer-floating-recipe").withDefault({evaluate:i=>Oy(wt.getValueFor(i),ns.getValueFor(i),Di.getValueFor(i))}),Eo=v("neutral-layer-floating").withDefault(i=>r0.getValueFor(i).evaluate(i)),a0=D("neutral-layer-1-recipe").withDefault({evaluate:i=>Ey(wt.getValueFor(i),ns.getValueFor(i))}),l0=v("neutral-layer-1").withDefault(i=>a0.getValueFor(i).evaluate(i)),c0=D("neutral-layer-2-recipe").withDefault({evaluate:i=>du(wt.getValueFor(i),ns.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-2").withDefault(i=>c0.getValueFor(i).evaluate(i));const d0=D("neutral-layer-3-recipe").withDefault({evaluate:i=>Ay(wt.getValueFor(i),ns.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-3").withDefault(i=>d0.getValueFor(i).evaluate(i));const h0=D("neutral-layer-4-recipe").withDefault({evaluate:i=>Vy(wt.getValueFor(i),ns.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-4").withDefault(i=>h0.getValueFor(i).evaluate(i));const tt=v("fill-color").withDefault(i=>l0.getValueFor(i));var An;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(An||(An={}));const fr=D("accent-fill-recipe").withDefault({evaluate:(i,t)=>Iy(Sl.getValueFor(i),t||tt.getValueFor(i),5,Va.getValueFor(i),La.getValueFor(i),_a.getValueFor(i),Pa.getValueFor(i),void 0,8,Va.getValueFor(i),La.getValueFor(i),_a.getValueFor(i),Pa.getValueFor(i),void 0)}),bt=v("accent-fill-rest").withDefault(i=>fr.getValueFor(i).evaluate(i).rest),Be=v("accent-fill-hover").withDefault(i=>fr.getValueFor(i).evaluate(i).hover),Ne=v("accent-fill-active").withDefault(i=>fr.getValueFor(i).evaluate(i).active),gr=v("accent-fill-focus").withDefault(i=>fr.getValueFor(i).evaluate(i).focus),mr=D("foreground-on-accent-recipe").withDefault({evaluate:i=>lu(bt.getValueFor(i),Be.getValueFor(i),Ne.getValueFor(i),gr.getValueFor(i),An.normal)}),Ji=v("foreground-on-accent-rest").withDefault(i=>mr.getValueFor(i).evaluate(i).rest),Xu=v("foreground-on-accent-hover").withDefault(i=>mr.getValueFor(i).evaluate(i).hover),Qu=v("foreground-on-accent-active").withDefault(i=>mr.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>mr.getValueFor(i).evaluate(i).focus);const br=D("accent-foreground-recipe").withDefault({evaluate:(i,t)=>Es(Sl.getValueFor(i),t||tt.getValueFor(i),9.5,yu.getValueFor(i),xu.getValueFor(i),wu.getValueFor(i),$u.getValueFor(i))}),Zu=v("accent-foreground-rest").withDefault(i=>br.getValueFor(i).evaluate(i).rest),Ju=v("accent-foreground-hover").withDefault(i=>br.getValueFor(i).evaluate(i).hover),Ku=v("accent-foreground-active").withDefault(i=>br.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>br.getValueFor(i).evaluate(i).focus);const vr=D("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>cu(wt.getValueFor(i),t||tt.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),u0=v("accent-stroke-control-rest").withDefault(i=>vr.getValueFor(i).evaluate(i,bt.getValueFor(i)).rest),p0=v("accent-stroke-control-hover").withDefault(i=>vr.getValueFor(i).evaluate(i,Be.getValueFor(i)).hover),f0=v("accent-stroke-control-active").withDefault(i=>vr.getValueFor(i).evaluate(i,Ne.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>vr.getValueFor(i).evaluate(i,gr.getValueFor(i)).focus);const yr=D("neutral-fill-recipe").withDefault({evaluate:(i,t)=>yl(wt.getValueFor(i),t||tt.getValueFor(i),ku.getValueFor(i),Cu.getValueFor(i),Fu.getValueFor(i),Iu.getValueFor(i),void 0,2,3,1,2,void 0)}),Fe=v("neutral-fill-rest").withDefault(i=>yr.getValueFor(i).evaluate(i).rest),fd=v("neutral-fill-hover").withDefault(i=>yr.getValueFor(i).evaluate(i).hover),gd=v("neutral-fill-active").withDefault(i=>yr.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>yr.getValueFor(i).evaluate(i).focus);const Vi=D("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>yl(wt.getValueFor(i),t||tt.getValueFor(i),Tu.getValueFor(i),Su.getValueFor(i),Du.getValueFor(i),Ru.getValueFor(i),void 0,2,3,1,0,void 0)}),nn=v("neutral-fill-input-rest").withDefault(i=>Vi.getValueFor(i).evaluate(i).rest),md=v("neutral-fill-input-hover").withDefault(i=>Vi.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>Vi.getValueFor(i).evaluate(i).active);const bd=v("neutral-fill-input-focus").withDefault(i=>Vi.getValueFor(i).evaluate(i).focus),xr=D("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>yl(wt.getValueFor(i),t||tt.getValueFor(i),sn.getValueFor(i),dd.getValueFor(i),hd.getValueFor(i),ud.getValueFor(i),1,sn.getValueFor(i),sn.getValueFor(i)-dd.getValueFor(i),sn.getValueFor(i)-hd.getValueFor(i),ud.getValueFor(i),1)}),Dl=v("neutral-fill-input-alt-rest").withDefault(i=>xr.getValueFor(i).evaluate(i).rest),Rl=v("neutral-fill-input-alt-hover").withDefault(i=>xr.getValueFor(i).evaluate(i).hover),El=v("neutral-fill-input-alt-active").withDefault(i=>xr.getValueFor(i).evaluate(i).active),Ol=v("neutral-fill-input-alt-focus").withDefault(i=>xr.getValueFor(i).evaluate(i).focus),rs=D("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),Di.getValueFor(i),Wy.getValueFor(i),Yy.getValueFor(i),Di.getValueFor(i),1)}),g0=v("neutral-fill-layer-rest").withDefault(i=>rs.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>rs.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>rs.getValueFor(i).evaluate(i).active);const m0=D("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),on.getValueFor(i),on.getValueFor(i),on.getValueFor(i),on.getValueFor(i))}),b0=v("neutral-fill-layer-alt-rest").withDefault(i=>m0.getValueFor(i).evaluate(i).rest),as=D("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),Xy.getValueFor(i),Qy.getValueFor(i),Zy.getValueFor(i),Jy.getValueFor(i))}),Ki=v("neutral-fill-secondary-rest").withDefault(i=>as.getValueFor(i).evaluate(i).rest),Al=v("neutral-fill-secondary-hover").withDefault(i=>as.getValueFor(i).evaluate(i).hover),v0=v("neutral-fill-secondary-active").withDefault(i=>as.getValueFor(i).evaluate(i).active),y0=v("neutral-fill-secondary-focus").withDefault(i=>as.getValueFor(i).evaluate(i).focus),je=D("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),Eu.getValueFor(i),Ou.getValueFor(i),Au.getValueFor(i),Vu.getValueFor(i))}),Os=v("neutral-fill-stealth-rest").withDefault(i=>je.getValueFor(i).evaluate(i).rest),As=v("neutral-fill-stealth-hover").withDefault(i=>je.getValueFor(i).evaluate(i).hover),Vs=v("neutral-fill-stealth-active").withDefault(i=>je.getValueFor(i).evaluate(i).active),x0=v("neutral-fill-stealth-focus").withDefault(i=>je.getValueFor(i).evaluate(i).focus),wr=D("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>Es(wt.getValueFor(i),t||tt.getValueFor(i),4.5,Ky.getValueFor(i),Lu.getValueFor(i),_u.getValueFor(i),Pu.getValueFor(i))}),tp=v("neutral-fill-strong-rest").withDefault(i=>wr.getValueFor(i).evaluate(i).rest),w0=v("neutral-fill-strong-hover").withDefault(i=>wr.getValueFor(i).evaluate(i).hover),$0=v("neutral-fill-strong-active").withDefault(i=>wr.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>wr.getValueFor(i).evaluate(i).focus);const $r=D("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>Es(wt.getValueFor(i),t||tt.getValueFor(i),16,0,-19,-30,0)}),ut=v("neutral-foreground-rest").withDefault(i=>$r.getValueFor(i).evaluate(i).rest),k0=v("neutral-foreground-hover").withDefault(i=>$r.getValueFor(i).evaluate(i).hover),C0=v("neutral-foreground-active").withDefault(i=>$r.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>$r.getValueFor(i).evaluate(i).focus);const Oo=D("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>Fy(wt.getValueFor(i),t||tt.getValueFor(i),4.5)}),Ls=v("neutral-foreground-hint").withDefault(i=>Oo.getValueFor(i).evaluate(i)),kr=D("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),Hu.getValueFor(i),Mu.getValueFor(i),zu.getValueFor(i),Bu.getValueFor(i))}),$o=v("neutral-stroke-rest").withDefault(i=>kr.getValueFor(i).evaluate(i).rest),F0=v("neutral-stroke-hover").withDefault(i=>kr.getValueFor(i).evaluate(i).hover),I0=v("neutral-stroke-active").withDefault(i=>kr.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>kr.getValueFor(i).evaluate(i).focus);const Cr=D("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>cu(wt.getValueFor(i),t||tt.getValueFor(i),Nu.getValueFor(i),ju.getValueFor(i),Uu.getValueFor(i),qu.getValueFor(i),5)}),Vl=v("neutral-stroke-control-rest").withDefault(i=>Cr.getValueFor(i).evaluate(i).rest),ep=v("neutral-stroke-control-hover").withDefault(i=>Cr.getValueFor(i).evaluate(i).hover),ip=v("neutral-stroke-control-active").withDefault(i=>Cr.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>Cr.getValueFor(i).evaluate(i).focus);const T0=D("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>Ty(wt.getValueFor(i),t||tt.getValueFor(i),Gu.getValueFor(i))}),Vn=v("neutral-stroke-divider-rest").withDefault(i=>T0.getValueFor(i).evaluate(i)),Fr=D("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>Cy(wt.getValueFor(i),t||tt.getValueFor(i),Nu.getValueFor(i),ju.getValueFor(i),Uu.getValueFor(i),qu.getValueFor(i),20,z.getValueFor(i)+"px")}),vd=v("neutral-stroke-input-rest").withDefault(i=>Fr.getValueFor(i).evaluate(i).rest),S0=v("neutral-stroke-input-hover").withDefault(i=>Fr.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>Fr.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>Fr.getValueFor(i).evaluate(i).focus);const Ll=D("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>Si(wt.getValueFor(i),t||tt.getValueFor(i),pd.getValueFor(i),t0.getValueFor(i),e0.getValueFor(i),pd.getValueFor(i))}),Cs=v("neutral-stroke-layer-rest").withDefault(i=>Ll.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>Ll.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>Ll.getValueFor(i).evaluate(i).active);const Ir=D("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>Es(wt.getValueFor(i),t||tt.getValueFor(i),5.5,0,i0.getValueFor(i),s0.getValueFor(i),o0.getValueFor(i))}),zs=v("neutral-stroke-strong-rest").withDefault(i=>Ir.getValueFor(i).evaluate(i).rest),_l=v("neutral-stroke-strong-hover").withDefault(i=>Ir.getValueFor(i).evaluate(i).hover),Pl=v("neutral-stroke-strong-active").withDefault(i=>Ir.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>Ir.getValueFor(i).evaluate(i).focus);const D0=D("focus-stroke-outer-recipe").withDefault({evaluate:i=>Sy(wt.getValueFor(i),tt.getValueFor(i))}),Tr=v("focus-stroke-outer").withDefault(i=>D0.getValueFor(i).evaluate(i)),R0=D("focus-stroke-inner-recipe").withDefault({evaluate:i=>Dy(Sl.getValueFor(i),tt.getValueFor(i),Tr.getValueFor(i))}),E0=v("focus-stroke-inner").withDefault(i=>R0.getValueFor(i).evaluate(i)),Sr=D("foreground-on-accent-large-recipe").withDefault({evaluate:i=>lu(bt.getValueFor(i),Be.getValueFor(i),Ne.getValueFor(i),gr.getValueFor(i),An.large)});v("foreground-on-accent-rest-large").withDefault(i=>Sr.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>Sr.getValueFor(i).evaluate(i,Be.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>Sr.getValueFor(i).evaluate(i,Ne.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>Sr.getValueFor(i).evaluate(i,gr.getValueFor(i)).focus);const O0=v("neutral-fill-inverse-rest-delta").withDefault(0),A0=v("neutral-fill-inverse-hover-delta").withDefault(-3),V0=v("neutral-fill-inverse-active-delta").withDefault(7),L0=v("neutral-fill-inverse-focus-delta").withDefault(0);function _0(i,t,e,s,o,n){const r=os(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),d=r===1?e<s:r*e>r*s;let u,g;return d?(u=a,g=l):(u=l,g=a),{rest:i.get(u),hover:i.get(g),active:i.get(u+r*o),focus:i.get(u+r*n)}}const Dr=D("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>_0(wt.getValueFor(i),t||tt.getValueFor(i),O0.getValueFor(i),A0.getValueFor(i),V0.getValueFor(i),L0.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>Dr.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>Dr.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>Dr.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>Dr.getValueFor(i).evaluate(i).focus);const Et=ve`
  font-family: ${Ae};
  font-size: ${ur};
  line-height: ${hu};
  font-weight: initial;
  font-variation-settings: ${Hy};
`,sp=ve`
  font-family: ${Ae};
  font-size: ${xl};
  line-height: ${wl};
  font-weight: initial;
  font-variation-settings: ${My};
`;ve`
  font-family: ${Ae};
  font-size: ${$l};
  line-height: ${uu};
  font-weight: initial;
  font-variation-settings: ${zy};
`;ve`
  font-family: ${Ae};
  font-size: ${kl};
  line-height: ${pu};
  font-weight: initial;
  font-variation-settings: ${By};
`;ve`
  font-family: ${Ae};
  font-size: ${pr};
  line-height: ${fu};
  font-weight: initial;
  font-variation-settings: ${Ny};
`;ve`
  font-family: ${Ae};
  font-size: ${Cl};
  line-height: ${gu};
  font-weight: initial;
  font-variation-settings: ${jy};
`;ve`
  font-family: ${Ae};
  font-size: ${Fl};
  line-height: ${mu};
  font-weight: initial;
  font-variation-settings: ${Uy};
`;ve`
  font-family: ${Ae};
  font-size: ${Il};
  line-height: ${bu};
  font-weight: initial;
  font-variation-settings: ${qy};
`;ve`
  font-family: ${Ae};
  font-size: ${Tl};
  line-height: ${vu};
  font-weight: initial;
  font-variation-settings: ${Gy};
`;const P0=(i,t)=>C`
    ${ot("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Et}
      color: ${ut};
      gap: calc(${A} * 1px);
    }
  `,Ve=ve`
  outline: calc(${Wt} * 1px) solid ${Tr};
  outline-offset: calc(${Wt} * -1px);
`,Ao=ve`
  outline: calc(${Wt} * 1px) solid ${Tr};
  outline-offset: calc(${z} * 1px);
`,it=ve`(${hr} + ${Ai}) * ${A}`,H0=gt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=rs.getValueFor(i);return je.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),M0=gt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=rs.getValueFor(i);return je.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),z0=gt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=rs.getValueFor(i);return je.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),B0=(i,t)=>C`
    ${ot("flex")} :host {
      box-sizing: border-box;
      ${Et};
      flex-direction: column;
      background: ${g0};
      color: ${ut};
      border: calc(${z} * 1px) solid ${Cs};
      border-radius: calc(${ii} * 1px);
    }

    .region {
      display: none;
      padding: calc(${A} * 2 * 1px);
      background: ${b0};
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
      margin: calc(${A} * 3 * 1px) 0;
      padding: 0 calc(${A} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${z} * -1px);
      left: calc(${z} * -1px);
      right: calc(${z} * -1px);
      bottom: calc(${z} * -1px);
      cursor: pointer;
    }

    .button:${Q}::before {
      ${Ve}
      border-radius: calc(${ii} * 1px);
    }

    :host(.expanded) .button:${Q}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${z} * 1px) solid ${Cs};
      border-bottom-left-radius: calc((${ii} - ${z}) * 1px);
      border-bottom-right-radius: calc((${ii} - ${z}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${H0};
      border-radius: calc(${dt} * 1px);
      fill: currentcolor;
      width: calc(${it} * 1px);
      height: calc(${it} * 1px);
      margin: calc(${A} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${M0};
    }

    .heading:active .icon {
      background: ${z0};
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
      padding-inline-start: calc(${A} * 2 * 1px);
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
  `.withBehaviors(st(C`
        .button:${Q}::before {
          outline-color: ${f.Highlight};
        }
        .icon {
          fill: ${f.ButtonText};
        }
      `)),N0=Qi.compose({baseName:"accordion-item",template:Lm,styles:B0,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),j0=pl.compose({baseName:"accordion",template:Xm,styles:P0});function E(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Bs{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&yn.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new U0(this.ltr,this.rtl,t),s=yn.getValueFor(t);yn.subscribe(e),e.attach(s),this.cache.set(t,e)}}class U0{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ls=gt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),q0=gt.create("elevation-shadow-card-rest-size").withDefault(4),G0=gt.create("elevation-shadow-card-hover-size").withDefault(8),W0=gt.create("elevation-shadow-card-active-size").withDefault(0),Y0=gt.create("elevation-shadow-card-focus-size").withDefault(8),X0=gt.create("elevation-shadow-card-rest").withDefault(i=>ls.getValueFor(i).evaluate(i,q0.getValueFor(i)));gt.create("elevation-shadow-card-hover").withDefault(i=>ls.getValueFor(i).evaluate(i,G0.getValueFor(i)));gt.create("elevation-shadow-card-active").withDefault(i=>ls.getValueFor(i).evaluate(i,W0.getValueFor(i)));gt.create("elevation-shadow-card-focus").withDefault(i=>ls.getValueFor(i).evaluate(i,Y0.getValueFor(i)));const Q0=gt.create("elevation-shadow-tooltip-size").withDefault(16),Z0=gt.create("elevation-shadow-tooltip").withDefault(i=>ls.getValueFor(i).evaluate(i,Q0.getValueFor(i))),J0=gt.create("elevation-shadow-flyout-size").withDefault(32),op=gt.create("elevation-shadow-flyout").withDefault(i=>ls.getValueFor(i).evaluate(i,J0.getValueFor(i))),K0=gt.create("elevation-shadow-dialog-size").withDefault(128),tx=gt.create("elevation-shadow-dialog").withDefault(i=>ls.getValueFor(i).evaluate(i,K0.getValueFor(i))),np=(i,t,e,s="[disabled]")=>C`
    ${ot("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Et}
      height: calc(${it} * 1px);
      min-width: calc(${it} * 1px);
      color: ${ut};
      border-radius: calc(${dt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${z} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${A} * 2 * ${Ai})) * 1px);
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

    .control:${Q} {
      ${Ve}
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
  `,Hl=(i,t,e,s="[disabled]")=>C`
    .control {
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${Vl};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${fd}, ${fd}),
        border-box ${ep};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${gd}, ${gd}),
        border-box ${ip};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${$o};
    }
  `.withBehaviors(st(C`
        .control {
          background: ${f.ButtonFace};
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          forced-color-adjust: none;
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${Q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${f.CanvasText};
          color: ${f.CanvasText};
        }
    `)),rp=(i,t,e,s="[disabled]")=>C`
    .control {
      background: padding-box linear-gradient(${bt}, ${bt}),
        border-box ${u0};
      color: ${Ji};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Be}, ${Be}),
        border-box ${p0};
      color: ${Xu};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Ne}, ${Ne}),
        border-box ${f0};
      color: ${Qu};
    }

    :host(${s}) .control {
      background: ${bt};
    }

    .control:${Q} {
      box-shadow: 0 0 0 calc(${Wt} * 1px) ${E0} inset !important;
    }
  `.withBehaviors(st(C`
        .control {
          forced-color-adjust: none;
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${s}) .control {
          background: transparent;
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${Q} {
          outline-color: ${f.CanvasText};
          box-shadow: 0 0 0 calc(${Wt} * 1px) ${f.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${f.LinkText};
          color: ${f.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${f.ButtonFace};
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),ex=(i,t,e,s="[disabled]")=>C`
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
      color: ${Zu};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${Ju};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Ku};
      text-decoration: none;
    }

    .control:${Q} {
      ${Ao}
    }
  `.withBehaviors(st(C`
        :host(${e}) .control {
          color: ${f.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${f.CanvasText};
        }

        .control:${Q} {
          outline-color: ${f.CanvasText};
        }
      `)),ap=(i,t,e,s="[disabled]")=>C`
    :host {
      color: ${Zu};
    }

    .control {
      background: ${Os};
    }

    :host(${e}:hover) .control {
      background: ${As};
      color: ${Ju};
    }

    :host(${e}:active) .control {
      background: ${Vs};
      color: ${Ku};
    }

    :host(${s}) .control {
      background: ${Os};
    }
  `.withBehaviors(st(C`
        :host {
          color: ${f.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${f.GrayText};
        }

        .control:${Q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),lp=(i,t,e,s="[disabled]")=>C`
    .control {
      background: transparent !important;
      border-color: ${$o};
    }

    :host(${e}:hover) .control {
      border-color: ${F0};
    }

    :host(${e}:active) .control {
      border-color: ${I0};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${$o};
    }
  `.withBehaviors(st(C`
        .control {
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
          color: ${f.Highlight};
        }

        :host(${s}) .control {
          border-color: ${f.GrayText};
          color: ${f.GrayText};
        }

        .control:${Q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${f.CanvasText};
          color: ${f.CanvasText};
        }
      `)),Ml=(i,t,e,s="[disabled]")=>C`
    .control {
      background: ${Os};
    }

    :host(${e}:hover) .control {
      background: ${As};
    }

    :host(${e}:active) .control {
      background: ${Vs};
    }

    :host(${s}) .control {
      background: ${Os};
    }
  `.withBehaviors(st(C`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${f.ButtonText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          background: transparent;
          border-color: ${f.ButtonText};
          color: ${f.ButtonText};
        }

        :host(${s}) .control {
          background: transparent;
          color: ${f.GrayText};
        }
        
        .control:${Q} {
          outline-color: ${f.CanvasText};
        }

        :host([href]) .control {
          color: ${f.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${f.LinkText};
          color: ${f.LinkText};
        }
      `)),ix=gt.create("input-placeholder-rest").withDefault(i=>{const t=Vi.getValueFor(i);return Oo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),sx=gt.create("input-placeholder-hover").withDefault(i=>{const t=Vi.getValueFor(i);return Oo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),ox=gt.create("input-filled-placeholder-rest").withDefault(i=>{const t=as.getValueFor(i);return Oo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),nx=gt.create("input-filled-placeholder-hover").withDefault(i=>{const t=as.getValueFor(i);return Oo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Rr=(i,t,e)=>C`
  :host {
    ${Et}
    color: ${ut};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${e} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${z} * 1px) solid transparent;
    border-radius: calc(${dt} * 1px);
    height: calc(${it} * 1px);
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
    color: ${ut};
    cursor: pointer;
    ${Et}
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
    cursor: ${Oe};
  }

  :host([disabled]) {
    opacity: ${ke};
  }
`,Vo=(i,t,e)=>C`
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
      height: calc(${Wt} * 1px);
      bottom: 0;
      border-bottom: calc(${Wt} * 1px) solid ${bt};
      border-bottom-left-radius: calc(${dt} * 1px);
      border-bottom-right-radius: calc(${dt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Lo=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
  ${e} {
    background: padding-box linear-gradient(${nn}, ${nn}),
      border-box ${vd};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${md}, ${md}),
      border-box ${S0};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${bd}, ${bd}),
      border-box ${vd};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${nn}, ${nn}),
      border-box ${$o};
  }

  .control::placeholder {
    color: ${ix};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${sx};
  }
`,Ns=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
  ${e} {
    background: ${Ki};
  }

  :host(${s}:hover) ${e} {
    background: ${Al};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${y0};
  }

  :host([disabled]) ${e} {
    background: ${Ki};
  }

  .control::placeholder {
    color: ${ox};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${nx};
  }
`,js=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
  :host {
    color: ${f.ButtonText};
  }

  ${e} {
    background: ${f.ButtonFace};
    border-color: ${f.ButtonText};
  }

  :host(${s}:hover) ${e},
  :host(:not([disabled]):focus-within) ${e} {
    border-color: ${f.Highlight};
  }

  :host([disabled]) ${e} {
    opacity: 1;
    background: ${f.ButtonFace};
    border-color: ${f.GrayText};
  }

  .control::placeholder,
  :host(${s}:hover) .control::placeholder {
    color: ${f.CanvasText};
  }

  :host(:not([disabled]):focus) ${e} {
    ${Ve}
    outline-color: ${f.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${f.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${f.GrayText};
  }
`;function It(i,t){return new sy("appearance",i,t)}const us="[href]",rx=(i,t)=>np().withBehaviors(It("neutral",Hl(i,t,us)),It("accent",rp(i,t,us)),It("hypertext",ex(i,t,us)),It("lightweight",ap(i,t,us)),It("outline",lp(i,t,us)),It("stealth",Ml(i,t,us)));class cp extends ye{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}E([h],cp.prototype,"appearance",void 0);const ax=cp.compose({baseName:"anchor",baseClass:ye,template:qh,styles:rx,shadowOptions:{delegatesFocus:!0}}),lx=(i,t)=>C`
  :host {
    contain: layout;
    display: block;
  }
`,cx=q.compose({baseName:"anchored-region",template:rb,styles:lx}),dx=(i,t)=>C`
    ${ot("inline-block")} :host {
      box-sizing: border-box;
      ${sp};
    }

    .control {
      border-radius: calc(${dt} * 1px);
      padding: calc(((${A} * 0.5) - ${z}) * 1px) calc((${A} - ${z}) * 1px);
      border: calc(${z} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${ut};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${bt};
      color: ${Ji};
    }

    :host(.neutral) .control {
      background: ${Ki};
      color: ${ut};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${wl} - calc(${A} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class dp extends Fo{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&W.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}E([h({mode:"fromView"})],dp.prototype,"appearance",void 0);const hx=dp.compose({baseName:"badge",baseClass:Fo,template:lb,styles:dx}),ux=(i,t)=>C`
  ${ot("inline-block")} :host {
    box-sizing: border-box;
    ${Et};
  }

  .list {
    display: flex;
  }
`,px=Gh.compose({baseName:"breadcrumb",template:db,styles:ux}),fx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      background: transparent;
      color: ${ut};
      fill: currentcolor;
      box-sizing: border-box;
      ${Et};
      min-width: calc(${it} * 1px);
      border-radius: calc(${dt} * 1px);
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
      color: ${k0};
    }

    .control:active {
      color: ${C0};
    }

    .control:${Q} {
      ${Ao}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${ut};
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
  `.withBehaviors(st(C`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${f.ButtonFace};
          color: ${f.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${f.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${f.ButtonFace};
          color: ${f.LinkText};
        }
        :host([href]) .control:hover {
          background: ${f.LinkText};
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        .control:${Q} {
          outline-color: ${f.LinkText};
        }
      `)),gx=vo.compose({baseName:"breadcrumb-item",template:cb,styles:fx,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Ni=":not([disabled])",vi="[disabled]",mx=(i,t)=>C`
    :host(${Ni}) .control {
      cursor: pointer;
    }

    :host(${vi}) .control {
      cursor: ${Oe};
    }

    @media (forced-colors: none) {
      :host(${vi}) .control {
        opacity: ${ke};
      }
    }

    ${np(i,t,Ni,vi)}
  `.withBehaviors(It("neutral",Hl(i,t,Ni,vi)),It("accent",rp(i,t,Ni,vi)),It("lightweight",ap(i,t,Ni,vi)),It("outline",lp(i,t,Ni,vi)),It("stealth",Ml(i,t,Ni,vi)));class hp extends xe{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}E([h],hp.prototype,"appearance",void 0);const bx=hp.compose({baseName:"button",baseClass:xe,template:hb,styles:mx,shadowOptions:{delegatesFocus:!0}}),vx=C`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,yx=C`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,xx=(i,t)=>C`
${ot("inline-block")} :host {
  --calendar-cell-size: calc((${hr} + 2 + ${Ai}) * ${A} * 1px);
  --calendar-gap: 2px;
  ${Et}
  color: ${ut};
}

.title {
  padding: calc(${A} * 2px);
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
  border: calc(${z} * 1px) solid transparent;
  border-radius: calc(${dt} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${Ls};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${z} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${bt};
  border: 1px solid ${bt};
  background: ${tt};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${z} + ${dt}) * 1px);
  margin-inline-start: calc((${dt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${Ji};
}

.today .date {
  color: ${Ji};
  background: ${bt};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(st(C`
          .day.selected {
              color: ${f.Highlight};
          }

          .today .date {
              background: ${f.Highlight};
              color: ${f.HighlightText};
          }
      `),new Bs(vx,yx));class up extends Ee{constructor(){super(...arguments),this.readonly=!0}}E([h({converter:Co})],up.prototype,"readonly",void 0);const wx=up.compose({baseName:"calendar",template:Db,styles:xx,title:kb}),$x=(i,t)=>C`
    ${ot("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${tt};
      color: ${ut};
      border: calc(${z} * 1px) solid ${Cs};
      border-radius: calc(${ii} * 1px);
      box-shadow: ${X0};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(st(C`
        :host {
          background: ${f.Canvas};
          color: ${f.CanvasText};
        }
      `));class zl extends Wh{cardFillColorChanged(t,e){if(e){const s=Xi(e);s!==null&&(this.neutralPaletteSource=e,tt.setValueFor(this,Se.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=Xi(e),o=Se.create(s.r,s.g,s.b);wt.setValueFor(this,wo.create(o))}}handleChange(t,e){this.cardFillColor||tt.setValueFor(this,s=>rs.getValueFor(s).evaluate(s,tt.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=Dn(this);if(t){const e=G.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}E([h({attribute:"card-fill-color",mode:"fromView"})],zl.prototype,"cardFillColor",void 0);E([h({attribute:"neutral-palette-source",mode:"fromView"})],zl.prototype,"neutralPaletteSource",void 0);const kx=zl.compose({baseName:"card",baseClass:Wh,template:Rb,styles:$x}),Cx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${it} / 2 + ${A}) * 1px);
      height: calc((${it} / 2 + ${A}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${dt} * 1px);
      border: calc(${z} * 1px) solid ${zs};
      background: ${Dl};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Et}
      color: ${ut};
      ${""} padding-inline-start: calc(${A} * 2px + 2px);
      margin-inline-end: calc(${A} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${ut};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Ji};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Rl};
      border-color: ${_l};
    }

    :host(:not(.disabled):active) .control {
      background: ${El};
      border-color: ${Pl};
    }

    :host(:${Q}) .control {
      background: ${Ol};
      ${Ao}
    }

    :host(.checked) .control {
      background: ${bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Be};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ne};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Oe};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${ke};
    }
  `.withBehaviors(st(C`
        .control {
          border-color: ${f.FieldText};
          background: ${f.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${f.Highlight};
          background: ${f.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${f.FieldText};
        }
        :host(:${Q}) .control {
          forced-color-adjust: none;
          outline-color: ${f.FieldText};
          background: ${f.Field};
          border-color: ${f.Highlight};
        }
        :host(.checked) .control {
          background: ${f.Highlight};
          border-color: ${f.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${f.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${f.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${f.GrayText};
          background: ${f.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${f.GrayText};
        }
      `)),Fx=er.compose({baseName:"checkbox",template:Eb,styles:Cx,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),yd=".control",rn=":not([disabled]):not([open])",xd="[disabled]",pp=(i,t)=>C`
    ${ot("inline-flex")}
    
    :host {
      border-radius: calc(${dt} * 1px);
      box-sizing: border-box;
      color: ${ut};
      fill: currentcolor;
      font-family: ${Ae};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${op};
      background: ${tt};
      border-radius: calc(${ii} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${it} * 1px));
      padding: calc((${A} - ${z} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${z} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${dt} * 1px);
      height: calc(${it} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Et}
      min-height: 100%;
      padding: 0 calc(${A} * 2.25px);
      width: 100%;
    }

    :host(:${Q}) {
      ${Ve}
    }

    :host([disabled]) .control {
      cursor: ${Oe};
      opacity: ${ke};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${it} + ${A} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${it} + ${A} * 2) * 1px);
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
  `,Ix=(i,t)=>C`
    :host([open]) .listbox {
      background: ${f.ButtonFace};
      border-color: ${f.CanvasText};
    }
  `,Tx=(i,t)=>pp().withBehaviors(It("outline",Hl(i,t,rn,xd)),It("filled",Ns(i,t,yd,rn).withBehaviors(st(js(i,t,yd,rn)))),It("stealth",Ml(i,t,rn,xd)),st(Ix())),da=".control",ha=":not([disabled]):not([open])",Sx=(i,t)=>C`
    ${pp()}

    ${Vo()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Oe};
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
      ${Et}
      height: calc(100% - ${z} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(It("outline",Lo(i,t,da,ha)),It("filled",Ns(i,t,da,ha)),st(js(i,t,da,ha)));class fp extends di{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tt.setValueFor(this.listbox,Eo)}}E([h({mode:"fromView"})],fp.prototype,"appearance",void 0);const Dx=fp.compose({baseName:"combobox",baseClass:di,shadowOptions:{delegatesFocus:!0},template:_b,styles:Sx,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Rx=(i,t)=>C`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Ex=(i,t)=>C`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${z} * 1px) solid ${Vn};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${tt};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(st(C`
        :host {
        }
      `)),Ox=(i,t)=>C`
    :host {
      padding: calc((${A} + ${Wt} - ${z}) * 1px) calc(((${A} * 3) + ${Wt} - ${z}) * 1px);
      color: ${ut};
      box-sizing: border-box;
      ${Et}
      border: transparent calc(${z} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${dt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${Q}) {
      ${Ve}
    }
  `.withBehaviors(st(C`
        :host {
          forced-color-adjust: none;
          background: ${f.Field};
          color: ${f.FieldText};
        }

        :host(:${Q}) {
          outline-color: ${f.FieldText};
        }
      `)),Ax=ci.compose({baseName:"data-grid-cell",template:$b,styles:Ox}),Vx=jt.compose({baseName:"data-grid-row",template:wb,styles:Ex}),Lx=Ht.compose({baseName:"data-grid",template:mb,styles:Rx}),Bl={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=Xi(i);return t?Se.create(t.r,t.g,t.b):null}},wd=C`
  :host {
    background-color: ${tt};
    color: ${ut};
  }
`.withBehaviors(st(C`
      :host {
        background-color: ${f.Canvas};
        box-shadow: 0 0 0 1px ${f.CanvasText};
        color: ${f.CanvasText};
      }
    `));function M(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class H extends X{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};G.getNotifier(this).subscribe(t,"fillColor"),G.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(wd):this.$fastController.removeStyles(wd)}}E([h({attribute:"no-paint",mode:"boolean"})],H.prototype,"noPaint",void 0);E([h({attribute:"fill-color",converter:Bl,mode:"fromView"}),M(tt)],H.prototype,"fillColor",void 0);E([h({attribute:"accent-base-color",converter:Bl,mode:"fromView"}),M(Yu)],H.prototype,"accentBaseColor",void 0);E([h({attribute:"neutral-base-color",converter:Bl,mode:"fromView"}),M(Wu)],H.prototype,"neutralBaseColor",void 0);E([h({converter:L}),M(Ai)],H.prototype,"density",void 0);E([h({attribute:"design-unit",converter:L}),M(A)],H.prototype,"designUnit",void 0);E([h({attribute:"direction"}),M(yn)],H.prototype,"direction",void 0);E([h({attribute:"base-height-multiplier",converter:L}),M(hr)],H.prototype,"baseHeightMultiplier",void 0);E([h({attribute:"base-horizontal-spacing-multiplier",converter:L}),M(_y)],H.prototype,"baseHorizontalSpacingMultiplier",void 0);E([h({attribute:"control-corner-radius",converter:L}),M(dt)],H.prototype,"controlCornerRadius",void 0);E([h({attribute:"layer-corner-radius",converter:L}),M(ii)],H.prototype,"layerCornerRadius",void 0);E([h({attribute:"stroke-width",converter:L}),M(z)],H.prototype,"strokeWidth",void 0);E([h({attribute:"focus-stroke-width",converter:L}),M(Wt)],H.prototype,"focusStrokeWidth",void 0);E([h({attribute:"disabled-opacity",converter:L}),M(ke)],H.prototype,"disabledOpacity",void 0);E([h({attribute:"type-ramp-minus-2-font-size"}),M($l)],H.prototype,"typeRampMinus2FontSize",void 0);E([h({attribute:"type-ramp-minus-2-line-height"}),M(uu)],H.prototype,"typeRampMinus2LineHeight",void 0);E([h({attribute:"type-ramp-minus-1-font-size"}),M(xl)],H.prototype,"typeRampMinus1FontSize",void 0);E([h({attribute:"type-ramp-minus-1-line-height"}),M(wl)],H.prototype,"typeRampMinus1LineHeight",void 0);E([h({attribute:"type-ramp-base-font-size"}),M(ur)],H.prototype,"typeRampBaseFontSize",void 0);E([h({attribute:"type-ramp-base-line-height"}),M(hu)],H.prototype,"typeRampBaseLineHeight",void 0);E([h({attribute:"type-ramp-plus-1-font-size"}),M(kl)],H.prototype,"typeRampPlus1FontSize",void 0);E([h({attribute:"type-ramp-plus-1-line-height"}),M(pu)],H.prototype,"typeRampPlus1LineHeight",void 0);E([h({attribute:"type-ramp-plus-2-font-size"}),M(pr)],H.prototype,"typeRampPlus2FontSize",void 0);E([h({attribute:"type-ramp-plus-2-line-height"}),M(fu)],H.prototype,"typeRampPlus2LineHeight",void 0);E([h({attribute:"type-ramp-plus-3-font-size"}),M(Cl)],H.prototype,"typeRampPlus3FontSize",void 0);E([h({attribute:"type-ramp-plus-3-line-height"}),M(gu)],H.prototype,"typeRampPlus3LineHeight",void 0);E([h({attribute:"type-ramp-plus-4-font-size"}),M(Fl)],H.prototype,"typeRampPlus4FontSize",void 0);E([h({attribute:"type-ramp-plus-4-line-height"}),M(mu)],H.prototype,"typeRampPlus4LineHeight",void 0);E([h({attribute:"type-ramp-plus-5-font-size"}),M(Il)],H.prototype,"typeRampPlus5FontSize",void 0);E([h({attribute:"type-ramp-plus-5-line-height"}),M(bu)],H.prototype,"typeRampPlus5LineHeight",void 0);E([h({attribute:"type-ramp-plus-6-font-size"}),M(Tl)],H.prototype,"typeRampPlus6FontSize",void 0);E([h({attribute:"type-ramp-plus-6-line-height"}),M(vu)],H.prototype,"typeRampPlus6LineHeight",void 0);E([h({attribute:"accent-fill-rest-delta",converter:L}),M(Va)],H.prototype,"accentFillRestDelta",void 0);E([h({attribute:"accent-fill-hover-delta",converter:L}),M(La)],H.prototype,"accentFillHoverDelta",void 0);E([h({attribute:"accent-fill-active-delta",converter:L}),M(_a)],H.prototype,"accentFillActiveDelta",void 0);E([h({attribute:"accent-fill-focus-delta",converter:L}),M(Pa)],H.prototype,"accentFillFocusDelta",void 0);E([h({attribute:"accent-foreground-rest-delta",converter:L}),M(yu)],H.prototype,"accentForegroundRestDelta",void 0);E([h({attribute:"accent-foreground-hover-delta",converter:L}),M(xu)],H.prototype,"accentForegroundHoverDelta",void 0);E([h({attribute:"accent-foreground-active-delta",converter:L}),M(wu)],H.prototype,"accentForegroundActiveDelta",void 0);E([h({attribute:"accent-foreground-focus-delta",converter:L}),M($u)],H.prototype,"accentForegroundFocusDelta",void 0);E([h({attribute:"neutral-fill-rest-delta",converter:L}),M(ku)],H.prototype,"neutralFillRestDelta",void 0);E([h({attribute:"neutral-fill-hover-delta",converter:L}),M(Cu)],H.prototype,"neutralFillHoverDelta",void 0);E([h({attribute:"neutral-fill-active-delta",converter:L}),M(Fu)],H.prototype,"neutralFillActiveDelta",void 0);E([h({attribute:"neutral-fill-focus-delta",converter:L}),M(Iu)],H.prototype,"neutralFillFocusDelta",void 0);E([h({attribute:"neutral-fill-input-rest-delta",converter:L}),M(Tu)],H.prototype,"neutralFillInputRestDelta",void 0);E([h({attribute:"neutral-fill-input-hover-delta",converter:L}),M(Su)],H.prototype,"neutralFillInputHoverDelta",void 0);E([h({attribute:"neutral-fill-input-active-delta",converter:L}),M(Du)],H.prototype,"neutralFillInputActiveDelta",void 0);E([h({attribute:"neutral-fill-input-focus-delta",converter:L}),M(Ru)],H.prototype,"neutralFillInputFocusDelta",void 0);E([h({attribute:"neutral-fill-layer-rest-delta",converter:L}),M(Di)],H.prototype,"neutralFillLayerRestDelta",void 0);E([h({attribute:"neutral-fill-stealth-rest-delta",converter:L}),M(Eu)],H.prototype,"neutralFillStealthRestDelta",void 0);E([h({attribute:"neutral-fill-stealth-hover-delta",converter:L}),M(Ou)],H.prototype,"neutralFillStealthHoverDelta",void 0);E([h({attribute:"neutral-fill-stealth-active-delta",converter:L}),M(Au)],H.prototype,"neutralFillStealthActiveDelta",void 0);E([h({attribute:"neutral-fill-stealth-focus-delta",converter:L}),M(Vu)],H.prototype,"neutralFillStealthFocusDelta",void 0);E([h({attribute:"neutral-fill-strong-hover-delta",converter:L}),M(Lu)],H.prototype,"neutralFillStrongHoverDelta",void 0);E([h({attribute:"neutral-fill-strong-active-delta",converter:L}),M(_u)],H.prototype,"neutralFillStrongActiveDelta",void 0);E([h({attribute:"neutral-fill-strong-focus-delta",converter:L}),M(Pu)],H.prototype,"neutralFillStrongFocusDelta",void 0);E([h({attribute:"base-layer-luminance",converter:L}),M(ns)],H.prototype,"baseLayerLuminance",void 0);E([h({attribute:"neutral-stroke-divider-rest-delta",converter:L}),M(Gu)],H.prototype,"neutralStrokeDividerRestDelta",void 0);E([h({attribute:"neutral-stroke-rest-delta",converter:L}),M(Hu)],H.prototype,"neutralStrokeRestDelta",void 0);E([h({attribute:"neutral-stroke-hover-delta",converter:L}),M(Mu)],H.prototype,"neutralStrokeHoverDelta",void 0);E([h({attribute:"neutral-stroke-active-delta",converter:L}),M(zu)],H.prototype,"neutralStrokeActiveDelta",void 0);E([h({attribute:"neutral-stroke-focus-delta",converter:L}),M(Bu)],H.prototype,"neutralStrokeFocusDelta",void 0);const _x=H.compose({baseName:"design-system-provider",template:I` <slot></slot> `,styles:C`
    ${ot("block")}
  `}),Px=(i,t)=>C`
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
    box-shadow: ${tx};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ii} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${tt};
    z-index: 1;
    border: calc(${z} * 1px) solid transparent;
  }
`,Hx=Te.compose({baseName:"dialog",template:Qb,styles:Px}),Mx=(i,t)=>C`
    ${ot("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${z} * 1px) solid ${Vn};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${A} * 1px);
      border-left: calc(${z} * 1px) solid ${Vn};
  }
  `,zx=sr.compose({baseName:"divider",template:cv,styles:Mx}),Bx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      height: calc((${it} + ${A}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${tp};
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${Vl};
      box-sizing: border-box;
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${dt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${ke};
      cursor: ${Oe};
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
      color: ${w0};
    }

    :host(:not(.disabled):active) {
      color: ${$0};
    }

    :host(:${Q}) {
      ${Ve}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(st(C`
        :host {
          background: ${f.ButtonFace};
          border-color: ${f.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${f.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${f.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${f.GrayText};
          color: ${f.GrayText};
          fill: currentcolor;
        }
        :host(:${Q}) {
          forced-color-adjust: none;
          outline-color: ${f.Highlight};
        }
      `)),Nx=or.compose({baseName:"flipper",template:hv,styles:Bx,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),jx=C`
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
`,Ux=C`
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
`,qx=C`
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
`.withBehaviors(new Bs(jx,Ux)),Gx=(i,t)=>C`
  ${ot("block")} :host {
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
`;class Wx extends hi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(qx)}}const Yx=Wx.compose({baseName:"horizontal-scroll",baseClass:hi,template:Dv,styles:Gx,nextFlipper:I`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:I`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),Xx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      border: calc(${z} * 1px) solid ${$o};
      border-radius: calc(${dt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${A} * 1px) 0;
    }

    ::slotted(${i.tagFor(Ke)}) {
      margin: 0 calc(${A} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Ve}
    }
  `;class Qx extends fe{}const Zx=Qx.compose({baseName:"listbox",template:pv,styles:Xx}),Jx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      position: relative;
      ${Et}
      background: ${Os};
      border-radius: calc(${dt} * 1px);
      border: calc(${z} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${ut};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${it} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${A} * 3) - ${z} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Wt} - ${z}) * 1px);
      top: calc((${it} / 4) - ${Wt} * 1px);
      width: 3px;
      height: calc((${it} / 2) * 1px);
      background: transparent;
      border-radius: calc(${dt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${As};
    }

    :host(:not([disabled]):active) {
      background: ${Vs};
    }

    :host(:not([disabled]):active)::before {
      background: ${bt};
      height: calc(((${it} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${bt};
    }

    :host(:${Q}) {
      ${Ve}
      background: ${x0};
    }

    :host([aria-selected='true']) {
      background: ${Ki};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Al};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${v0};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${As};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Vs};
    }

    :host([disabled]) {
      cursor: ${Oe};
      opacity: ${ke};
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
  `.withBehaviors(new Bs(null,C`
      :host::before {
        right: calc((${Wt} - ${z}) * 1px);
      }
    `),st(C`
        :host {
          background: ${f.ButtonFace};
          border-color: ${f.ButtonFace};
          color: ${f.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${f.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${f.Canvas};
          color: ${f.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Q}) {
          outline-color: ${f.CanvasText};
        }
      `)),Kx=Ke.compose({baseName:"option",template:uv,styles:Jx}),tw=(i,t)=>C`
    ${ot("block")} :host {
      background: ${Eo};
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${ii} * 1px);
      box-shadow: ${op};
      padding: calc((${A} - ${z}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${A} * 2px);
    }

    ::slotted(${i.tagFor(we)}) {
      margin: 0 calc(${A} * 1px);
    }

    ::slotted(${i.tagFor(sr)}) {
      margin: calc(${A} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${A} * 1px) 0;
      border: none;
      border-top: calc(${z} * 1px) solid ${Vn};
    }
  `.withBehaviors(st(C`
        :host([slot='submenu']) {
          background: ${f.Canvas};
          border-color: ${f.CanvasText};
        }
      `));class ew extends nr{connectedCallback(){super.connectedCallback(),tt.setValueFor(this,Eo)}}const iw=ew.compose({baseName:"menu",baseClass:nr,template:mv,styles:tw}),sw=(i,t)=>C`
    ${ot("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Et}
      box-sizing: border-box;
      height: calc(${it} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${ut};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${dt} * 1px);
      border: calc(${z} * 1px) solid transparent;
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

    :host(:${Q}) {
      ${Ve}
    }

    :host(:not([disabled]):hover) {
      background: ${As};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Vs};
      color: ${ut};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Oe};
      opacity: ${ke};
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
      color: ${Ls};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(st(C`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${f.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Q}) ::slotted([slot='end']:not(svg)) {
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host(:${Q}) {
          background: ${f.Highlight};
          outline-color: ${f.ButtonText};
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Q}) {
          background: ${f.ButtonFace};
          color: ${f.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Q}) {
          outline-color: ${f.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${f.ButtonText};
          background: ${f.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${f.HighlightText};
          border-color: ${f.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Q}) .expanded-toggle,
            :host(:${Q}) .checkbox,
            :host(:${Q}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Q}) .checkbox,
            :host([checked]:${Q}) .radio {
          border-color: ${f.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${f.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${f.Highlight};
        }
      `),new Bs(C`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,C`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),ow=we.compose({baseName:"menu-item",template:gv,styles:sw,checkboxIndicator:`
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
  `}),an=".root",nw=(i,t)=>C`
    ${ot("inline-block")}

    ${Rr(i,t,an)}

    ${Vo()}

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
      padding: 0 calc(${A} * 2px + 1px);
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
  `.withBehaviors(It("outline",Lo(i,t,an)),It("filled",Ns(i,t,an)),st(js(i,t,an)));class gp extends re{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([h],gp.prototype,"appearance",void 0);const rw=gp.compose({baseName:"number-field",baseClass:re,styles:nw,template:bv,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),aw=(i,t)=>C`
    ${ot("flex")} :host {
      align-items: center;
      height: calc((${z} * 3) * 1px);
    }

    .progress {
      background-color: ${zs};
      border-radius: calc(${A} * 1px);
      width: 100%;
      height: calc(${z} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${bt};
      border-radius: calc(${A} * 1px);
      height: calc((${z} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${z} * 3) * 1px);
      border-radius: calc(${A} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${bt};
      border-radius: calc(${A} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${bt};
      border-radius: calc(${A} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Ls};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Ls};
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
  `.withBehaviors(st(C`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${f.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${f.GrayText};
        }
      `));class lw extends ss{}const cw=lw.compose({baseName:"progress",template:Cv,styles:aw,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),dw=(i,t)=>C`
    ${ot("flex")} :host {
      align-items: center;
      height: calc(${it} * 1px);
      width: calc(${it} * 1px);
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
      stroke: ${bt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${bt};
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
      stroke: ${Ls};
    }

    :host(.paused) .determinate {
      stroke: ${Ls};
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
  `.withBehaviors(st(C`
        .background {
          stroke: ${f.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${f.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${f.GrayText};
        }
      `));class hw extends ss{}const uw=hw.compose({baseName:"progress-ring",template:kv,styles:dw,indeterminateIndicator:`
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
  `}),pw=(i,t)=>C`
    ${ot("inline-flex")} :host {
      --input-size: calc((${it} / 2) + ${A});
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
      border: calc(${z} * 1px) solid ${zs};
      background: ${Dl};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Et}
      color: ${ut};
      ${""} padding-inline-start: calc(${A} * 2px + 2px);
      margin-inline-end: calc(${A} * 2px + 2px);
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
      fill: ${Ji};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${Rl};
      border-color: ${_l};
    }

    :host(:not(.disabled):active) .control {
      background: ${El};
      border-color: ${Pl};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Q}) .control {
      ${Ao}
      background: ${Ol};
    }

    :host(.checked) .control {
      background: ${bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Be};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Ne};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Oe};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${ke};
    }
  `.withBehaviors(st(C`
        .control {
          background: ${f.Field};
          border-color: ${f.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${f.Highlight};
        }
        :host(:${Q}) .control {
          forced-color-adjust: none;
          background: ${f.Field};
          outline-color: ${f.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${f.Highlight};
          background: ${f.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${f.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${f.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${f.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${f.Field};
          border-color: ${f.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${f.GrayText};
        }
      `)),fw=ar.compose({baseName:"radio",template:Iv,styles:pw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),gw=(i,t)=>C`
  ${ot("flex")} :host {
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
`,mw=Ei.compose({baseName:"radio-group",template:Fv,styles:gw}),bw=(i,t)=>I`
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
      <slot ${$t({property:"defaultSlottedNodes",filter:su})}></slot>
    </label>
    <div class="root" part="root" ${lt("root")}>
      ${ne(i,t)}
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
          ${lt("control")}
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
      ${oe(i,t)}
    </div>
  </template>
`,ln=".root",vw=gt.create("clear-button-hover").withDefault(i=>{const t=je.getValueFor(i),e=Vi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),yw=gt.create("clear-button-active").withDefault(i=>{const t=je.getValueFor(i),e=Vi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),xw=(i,t)=>C`
    ${ot("inline-block")}

    ${Rr(i,t,ln)}

    ${Vo()}

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
      padding: 0 calc(${A} * 2px + 1px);
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
      color: ${ut};
      fill: currentcolor;
      border: none;
      border-radius: calc(${dt} * 1px);
      min-width: calc(${it} * 1px);
      ${Et}
      outline: none;
      padding: 0 calc((10 + (${A} * 2 * ${Ai})) * 1px);
    }
    .clear-button:hover {
      background: ${vw};
    }
    .clear-button:active {
      background: ${yw};
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
    ::slotted(${i.tagFor(xe)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(It("outline",Lo(i,t,ln)),It("filled",Ns(i,t,ln)),st(js(i,t,ln)));class mp extends $e{constructor(){super(...arguments),this.appearance="outline"}}E([h],mp.prototype,"appearance",void 0);const ww=mp.compose({baseName:"search",baseClass:$e,template:bw,styles:xw,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class bp extends ui{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tt.setValueFor(this.listbox,Eo)}}E([h({mode:"fromView"})],bp.prototype,"appearance",void 0);const $w=bp.compose({baseName:"select",baseClass:ui,template:Vv,styles:Tx,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),kw=(i,t)=>C`
    ${ot("block")} :host {
      --skeleton-fill-default: ${Ki};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Al} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${dt} * 1px);
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

    ${ot("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${Ki});
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
  `.withBehaviors(st(C`
        :host{
          background-color: ${f.CanvasText};
        }
      `)),Cw=To.compose({baseName:"skeleton",template:Lv,styles:kw}),Fw=(i,t)=>C`
    ${ot("inline-grid")} :host {
      --thumb-size: calc((${it} / 2) + ${A} + (${z} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${A} / 2) * -1);
      --track-width: ${A};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${dt} * 1px);
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
    :host(:${Q}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${tt}, 0 0 0 4px ${Tr};
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
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${Vl};
      border: calc(${z} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${bt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Be};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Ne};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${ep};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Fe}, ${Fe}),
        border-box ${ip};
    }
    .track-start {
      background: ${bt};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${dt} * 1px);
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
      border: 1px solid ${zs};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${A} * 60px);
      min-width: calc(${A} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Oe};
    }
    :host(.disabled) {
      opacity: ${ke};
    }
  `.withBehaviors(st(C`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${f.FieldText};
          background: ${f.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${f.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${f.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${f.Field};
        }
        :host(:${Q}) .thumb-cursor {
          background: ${f.Highlight};
          border-color: ${f.Highlight};
          box-shadow: 0 0 0 1px ${f.Field}, 0 0 0 3px ${f.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${f.GrayText};
        }
      `)),Iw=Yt.compose({baseName:"slider",template:Pv,styles:Fw,thumb:`
    <div class="thumb-cursor"></div>
  `}),Tw=(i,t)=>C`
    ${ot("block")} :host {
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
      width: calc(${z} * 1px);
      height: calc(${A} * 1px);
      background: ${zs};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${A} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${ke};
    }
  `.withBehaviors(st(C`
        .mark {
          forced-color-adjust: none;
          background: ${f.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${f.GrayText};
        }
        :host(.disabled) .mark {
          background: ${f.GrayText};
        }
      `)),Sw=pi.compose({baseName:"slider-label",template:_v,styles:Tw}),Dw=(i,t)=>C`
    :host([hidden]) {
      display: none;
    }

    ${ot("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ae};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${ke};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Oe};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${it} / 2) + ${A}) * 2px);
      height: calc(((${it} / 2) + ${A}) * 1px);
      background: ${Dl};
      border-radius: calc(${it} * 1px);
      border: calc(${z} * 1px) solid ${zs};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Rl};
      border-color: ${_l};
    }

    :host(:not(.disabled):active) .switch {
      background: ${El};
      border-color: ${Pl};
    }

    :host(:${Q}) .switch {
      ${Ao}
      background: ${Ol};
    }

    :host(.checked) .switch {
      background: ${bt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Be};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Ne};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${ut};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${ut};
      cursor: pointer;
      ${Et}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${ut};
      ${Et}
      margin-inline-end: calc(${A} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${A} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${bt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Ji};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Be};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Xu};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Ne};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Qu};
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
  `.withBehaviors(new Bs(C`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,C`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),st(C`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${f.FieldText};
        }
        .switch {
          background: ${f.Field};
          border-color: ${f.FieldText};
        }
        :host(.checked) .switch {
          background: ${f.Highlight};
          border-color: ${f.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${f.HighlightText};
          border-color: ${f.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${f.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${f.Highlight};
        }
        :host(:${Q}) .switch {
          forced-color-adjust: none;
          background: ${f.Field}; 
          border-color: ${f.Highlight};
          outline-color: ${f.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${f.GrayText};
        }
        :host(.disabled) .switch {
          background: ${f.Field};
          border-color: ${f.GrayText};
        }
        .status-message,
        .label {
          color: ${f.FieldText};
        }
      `)),Rw=bl.compose({baseName:"switch",template:Bv,styles:Dw,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Ew=(i,t)=>C`
      ${ot("grid")} :host {
        box-sizing: border-box;
        ${Et}
        color: ${ut};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${it} * 1px); auto;
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
        border-radius: calc(${dt} * 1px);
        justify-self: center;
        background: ${bt};
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
        margin-inline-start: calc(${Wt} * 1px);
        border-radius: calc(${dt} * 1px);
        align-self: center;
        background: ${bt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(st(C`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${f.Highlight};
        }
      `)),Ow=(i,t)=>C`
      ${ot("inline-flex")} :host {
        box-sizing: border-box;
        ${Et}
        height: calc((${it} + (${A} * 2)) * 1px);
        padding: 0 calc((6 + (${A} * 2 * ${Ai})) * 1px);
        color: ${ut};
        border-radius: calc(${dt} * 1px);
        border: calc(${z} * 1px) solid transparent;
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
        color: ${ut};
      }

      :host(:${Q}) {
        ${Ve}
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
        color: ${ut};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(st(C`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${f.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${f.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${f.Highlight};
            fill: currentcolor;
          }
          :host(:${Q}) {
            background: transparent;
            outline-color: ${f.ButtonText};
          }
        `)),Aw=nu.compose({baseName:"tab",template:Gv,styles:Ow}),Vw=(i,t)=>C`
  ${ot("block")} :host {
    box-sizing: border-box;
    ${Et}
    padding: 0 calc((6 + (${A} * 2 * ${Ai})) * 1px);
  }
`,Lw=qv.compose({baseName:"tab-panel",template:Uv,styles:Vw}),_w=fi.compose({baseName:"tabs",template:Wv,styles:Ew}),cn=".control",Pw=(i,t)=>C`
    ${ot("inline-flex")}

    ${Rr(i,t,cn)}

    ${Vo()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${it} * 2) * 1px);
      padding: calc(${A} * 1.5px) calc(${A} * 2px + 1px);
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
  `.withBehaviors(It("outline",Lo(i,t,cn)),It("filled",Ns(i,t,cn)),st(js(i,t,cn)));class vp extends Xt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([h],vp.prototype,"appearance",void 0);const Hw=vp.compose({baseName:"text-area",baseClass:Xt,template:Qv,styles:Pw,shadowOptions:{delegatesFocus:!0}}),dn=".root",Mw=(i,t)=>C`
    ${ot("inline-block")}

    ${Rr(i,t,dn)}

    ${Vo()}

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
      padding: 0 calc(${A} * 2px + 1px);
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
  `.withBehaviors(It("outline",Lo(i,t,dn)),It("filled",Ns(i,t,dn)),st(js(i,t,dn)));class yp extends ge{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([h],yp.prototype,"appearance",void 0);const zw=yp.compose({baseName:"text-field",baseClass:ge,template:Zv,styles:Mw,shadowOptions:{delegatesFocus:!0}}),Bw=(i,t)=>C`
    ${ot("inline-flex")} :host {
      --toolbar-item-gap: calc(${A} * 1px);
      background: ${tt};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${Q}) {
      ${Ve}
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
  `.withBehaviors(st(C`
        :host(:${Q}) {
          outline-color: ${f.Highlight};
          color: ${f.ButtonText};
          forced-color-adjust: none;
        }
      `));class Nw extends Oi{}const jw=Nw.compose({baseName:"toolbar",baseClass:Oi,template:Jv,styles:Bw}),Uw=(i,t)=>C`
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
      border-radius: calc(${dt} * 1px);
      border: calc(${z} * 1px) solid ${Cs};
      background: ${tt};
      color: ${ut};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Et}
      white-space: nowrap;
      box-shadow: ${Z0};
    }

    ${i.tagFor(q)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(q)}.right,
    ${i.tagFor(q)}.left {
      flex-direction: column;
    }

    ${i.tagFor(q)}.top .tooltip::after,
    ${i.tagFor(q)}.bottom .tooltip::after,
    ${i.tagFor(q)}.left .tooltip::after,
    ${i.tagFor(q)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${tt};
      border-top: calc(${z} * 1px) solid ${Cs};
      border-left: calc(${z} * 1px) solid ${Cs};
      position: absolute;
    }

    ${i.tagFor(q)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(q)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(q)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(q)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(q)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(q)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(q)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(q)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(st(C`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(q)}.top .tooltip::after,
        ${i.tagFor(q)}.bottom .tooltip::after,
        ${i.tagFor(q)}.left .tooltip::after,
        ${i.tagFor(q)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class qw extends Lt{connectedCallback(){super.connectedCallback(),tt.setValueFor(this,Eo)}}const Gw=qw.compose({baseName:"tooltip",baseClass:Lt,template:Kv,styles:Uw}),Ww=(i,t)=>C`
  :host([hidden]) {
    display: none;
  }

  ${ot("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Yw=cr.compose({baseName:"tree-view",template:ey,styles:Ww}),Xw=C`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${it} * -1px));
  }
  :host([selected])::after {
    left: calc(${Wt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Qw=C`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${it} * -1px));
  }
  :host([selected])::after {
    right: calc(${Wt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,$d=ve`((${hr} / 2) * ${A}) + ((${A} * ${Ai}) / 2)`,Zw=gt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=je.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),Jw=gt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=as.getValueFor(i);return je.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),Kw=(i,t)=>C`
    ${ot("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${ut};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ae};
      --expand-collapse-button-size: calc(${it} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Os};
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${dt} * 1px);
      height: calc((${it} + 1) * 1px);
    }

    :host(:${Q}) .positioning-region {
      ${Ve}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${As};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Vs};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${it} * 1px);
      margin-inline-start: calc(${A} * 2px + 8px);
      ${Et}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${A} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${dt} * 1px);
      ${""} width: calc((${$d} + (${A} * 2)) * 1px);
      height: calc((${$d} + (${A} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${A} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${A} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${ke};
      cursor: ${Oe};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Zw};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Ki};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Jw};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${it} / 4) * 1px);
      width: 3px;
      height: calc((${it} / 2) * 1px);
      ${""} background: ${bt};
      border-radius: calc(${dt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${it} * -1px);
    }
  `.withBehaviors(new Bs(Xw,Qw),st(C`
        :host {
          color: ${f.ButtonText};
        }
        .positioning-region {
          border-color: ${f.ButtonFace};
          background: ${f.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${f.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${f.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${f.GrayText};
        }
        :host([selected])::after {
          background: ${f.HighlightText};
        }
        :host(:${Q}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${f.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${f.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${f.ButtonFace};
          fill: ${f.ButtonText};
        }
      `)),t$=_t.compose({baseName:"tree-item",template:ty,styles:Kw,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),e$={fluentAccordion:j0,fluentAccordionItem:N0,fluentAnchor:ax,fluentAnchoredRegion:cx,fluentBadge:hx,fluentBreadcrumb:px,fluentBreadcrumbItem:gx,fluentButton:bx,fluentCalendar:wx,fluentCard:kx,fluentCheckbox:Fx,fluentCombobox:Dx,fluentDataGrid:Lx,fluentDataGridCell:Ax,fluentDataGridRow:Vx,fluentDesignSystemProvider:_x,fluentDialog:Hx,fluentDivider:zx,fluentFlipper:Nx,fluentHorizontalScroll:Yx,fluentListbox:Zx,fluentOption:Kx,fluentMenu:iw,fluentMenuItem:ow,fluentNumberField:rw,fluentProgress:cw,fluentProgressRing:uw,fluentRadio:fw,fluentRadioGroup:mw,fluentSearch:ww,fluentSelect:$w,fluentSkeleton:Cw,fluentSlider:Iw,fluentSliderLabel:Sw,fluentSwitch:Rw,fluentTabs:_w,fluentTab:Aw,fluentTabPanel:Lw,fluentTextArea:Hw,fluentTextField:zw,fluentToolbar:jw,fluentTooltip:Gw,fluentTreeView:Yw,fluentTreeItem:t$,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function i$(i){return Qh.getOrCreate(i).withPrefix("fluent")}const s$=tl({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>{const r=ps("fluent-text-field");return Pe(),po(r,{value:o.modelValue,onInput:s},{default:qi(()=>[rh(o.$slots,"default")]),_:3},8,["value"])}}}),o$=tl({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>{const r=ps("fluent-combobox");return Pe(),po(r,{value:o.modelValue,onChange:s},{default:qi(()=>[rh(o.$slots,"default")]),_:3},8,["value"])}}}),Us=i=>(mf("data-v-6c51fd11"),i=i(),bf(),i),n$=Us(()=>et("div",{class:"header"},[et("img",{src:Gg,class:"logo",alt:"Logo"}),et("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),r$={class:"general-information-container"},a$={class:"row"},l$=Us(()=>et("div",{class:"col"},[et("p",null,"Datum: ")],-1)),c$={class:"col"},d$={class:"row"},h$=Us(()=>et("div",{class:"col"},[et("p",null,"Rechnungsnummer: ")],-1)),u$={class:"col"},p$={class:"row"},f$=Us(()=>et("div",{class:"col"},[et("p",null,"Name des Mitgliedes: ")],-1)),g$={class:"col"},m$={class:"row"},b$=Us(()=>et("div",{class:"col"},[et("p",null,"Rechnungsdatei: ")],-1)),v$={class:"col"},y$={for:"file",class:"custum-file-upload"},x$=lg('<div class="icon" data-v-6c51fd11><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-6c51fd11><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-6c51fd11></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-6c51fd11></g><g id="SVGRepo_iconCarrier" data-v-6c51fd11><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-6c51fd11></path></g></svg></div><div class="text" data-v-6c51fd11><span data-v-6c51fd11>Click to Upload</span></div>',2),w$=Us(()=>et("div",{class:"bill-disclaimer-container"},[et("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),et("p",null,"LSF-Wesel-Rheinhausen"),et("p",null,"Postfach 100240"),et("p",null,"46462 Wesel")],-1)),$$={class:"article-list-wrapper"},k$={class:"total-sum"},C$=tl({__name:"App",setup(i){ur.withDefault(pr);const t=["articleNumber","description","usage","costCenter","amount"],e=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],s=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function o(){return t.reduce((w,V)=>(w[V]=V==="amount"?0:"",w),{})}const n=Mr([o()]),r=()=>{n.value.push(o())},a=w=>w==="amount"?"number":"text",l=w=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[w]||"",d=$h(()=>n.value.reduce((w,V)=>w+parseFloat(V.amount||"0"),0).toFixed(2).replace(".",",")),u=Mr(null),g=Mr(null);oh(()=>{u.value&&u.value.addEventListener("change",b)});function b(){if(u.value&&u.value.files&&u.value.files.length>0){const w=u.value.files[0].name;g.value&&(g.value.textContent=`Augewählte Datei: ${w}`)}}return(w,V)=>{const P=ps("fluent-text-field"),B=ps("fluent-option"),rt=ps("fluent-button"),ht=ps("fluent-card");return Pe(),hs("div",null,[n$,et("div",r$,[et("div",a$,[l$,et("div",c$,[Ut(P,{type:"date"})])]),et("div",d$,[h$,et("div",u$,[Ut(P,{placeholder:"Rechnugnsnummer..."})])]),et("div",p$,[f$,et("div",g$,[Ut(P,{placeholder:"Name..."})])]),et("div",m$,[b$,et("div",v$,[et("label",y$,[x$,et("input",{id:"file",type:"file",ref_key:"fileInput",ref:u},null,512)]),et("div",{ref_key:"fileNameDisplay",ref:g,class:"uploaded-lable"},null,512)])])]),w$,et("div",$$,[Ut(ht,{class:"article-list-card"},{default:qi(()=>[et("table",null,[et("thead",null,[et("tr",null,[(Pe(),hs(Jt,null,Go(e,Y=>et("th",{key:Y},Pr(Y),1)),64))])]),et("tbody",null,[(Pe(!0),hs(Jt,null,Go(n.value,(Y,pt)=>(Pe(),hs("tr",{key:pt},[(Pe(),hs(Jt,null,Go(t,ft=>et("td",{key:ft},[ft!=="costCenter"?(Pe(),po(s$,{key:0,type:a(ft),modelValue:Y[ft],"onUpdate:modelValue":j=>Y[ft]=j,placeholder:l(ft)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(Pe(),po(o$,{key:1,modelValue:Y[ft],"onUpdate:modelValue":j=>Y[ft]=j,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:qi(()=>[(Pe(),hs(Jt,null,Go(s,j=>Ut(B,{position:"below",class:"combo-option",key:j,value:j},{default:qi(()=>[$a(Pr(j),1)]),_:2},1032,["value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),Ut(rt,{appearance:"accent",onClick:r},{default:qi(()=>[$a("＋ Artikel hinzufügen")]),_:1}),et("div",k$,"Gesamtbetrag: "+Pr(d.value)+" €",1)]),_:1})])])}}}),F$=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},I$=F$(C$,[["__scopeId","data-v-6c51fd11"]]);i$().register(e$);jg(I$).mount("#app");
