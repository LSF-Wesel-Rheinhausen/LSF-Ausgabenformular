(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wl(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const Ct={},Is=[],Ae=()=>{},Xp=()=>!1,ar=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),$l=i=>i.startsWith("onUpdate:"),Xt=Object.assign,kl=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},Yp=Object.prototype.hasOwnProperty,ht=(i,t)=>Yp.call(i,t),st=Array.isArray,Rs=i=>lr(i)==="[object Map]",Th=i=>lr(i)==="[object Set]",ot=i=>typeof i=="function",zt=i=>typeof i=="string",Xs=i=>typeof i=="symbol",At=i=>i!==null&&typeof i=="object",Ih=i=>(At(i)||ot(i))&&ot(i.then)&&ot(i.catch),Rh=Object.prototype.toString,lr=i=>Rh.call(i),Jp=i=>lr(i).slice(8,-1),Dh=i=>lr(i)==="[object Object]",Cl=i=>zt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,bo=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Qp=/-(\w)/g,_s=cr(i=>i.replace(Qp,(t,e)=>e?e.toUpperCase():"")),Zp=/\B([A-Z])/g,Ys=cr(i=>i.replace(Zp,"-$1").toLowerCase()),Eh=cr(i=>i.charAt(0).toUpperCase()+i.slice(1)),ua=cr(i=>i?`on${Eh(i)}`:""),_i=(i,t)=>!Object.is(i,t),En=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},qn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},qa=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Mc;const Ah=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sl(i){if(st(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=zt(s)?ig(s):Sl(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(zt(i)||At(i))return i}const Kp=/;(?![^(]*\))/g,tg=/:([^]+)/,eg=/\/\*[^]*?\*\//g;function ig(i){const t={};return i.replace(eg,"").split(Kp).forEach(e=>{if(e){const s=e.split(tg);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Fl(i){let t="";if(zt(i))t=i;else if(st(i))for(let e=0;e<i.length;e++){const s=Fl(i[e]);s&&(t+=s+" ")}else if(At(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const sg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=wl(sg);function Oh(i){return!!i||i===""}const an=i=>zt(i)?i:i==null?"":st(i)||At(i)&&(i.toString===Rh||!ot(i.toString))?JSON.stringify(i,Vh,2):String(i),Vh=(i,t)=>t&&t.__v_isRef?Vh(i,t.value):Rs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[fa(s,n)+" =>"]=o,e),{})}:Th(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>fa(e))}:Xs(t)?fa(t):At(t)&&!st(t)&&!Dh(t)?String(t):t,fa=(i,t="")=>{var e;return Xs(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class ng{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=je;try{return je=this,t()}finally{je=e}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function rg(i,t=je){t&&t.active&&t.effects.push(i)}function ag(){return je}let ns;class Tl{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rg(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,fs();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(lg(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ps()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Vi,e=ns;try{return Vi=!0,ns=this,this._runnings++,Nc(this),this.fn()}finally{Bc(this),this._runnings--,ns=e,Vi=t}}stop(){var t;this.active&&(Nc(this),Bc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function lg(i){return i.value}function Nc(i){i._trackId++,i._depsLength=0}function Bc(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Lh(i.deps[t],i);i.deps.length=i._depsLength}}function Lh(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let Vi=!0,Wa=0;const _h=[];function fs(){_h.push(Vi),Vi=!1}function ps(){const i=_h.pop();Vi=i===void 0?!0:i}function Il(){Wa++}function Rl(){for(Wa--;!Wa&&Ga.length;)Ga.shift()()}function Ph(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Lh(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const Ga=[];function Hh(i,t,e){Il();for(const s of i.keys()){let o;s._dirtyLevel<t&&(o??(o=i.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=i.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ga.push(s.scheduler)))}Rl()}const Mh=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},Xa=new WeakMap,rs=Symbol(""),Ya=Symbol("");function ge(i,t,e){if(Vi&&ns){let s=Xa.get(i);s||Xa.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Mh(()=>s.delete(e))),Ph(ns,o)}}function ui(i,t,e,s,o,n){const r=Xa.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&st(i)){const l=Number(s);r.forEach((c,d)=>{(d==="length"||!Xs(d)&&d>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":st(i)?Cl(e)&&a.push(r.get("length")):(a.push(r.get(rs)),Rs(i)&&a.push(r.get(Ya)));break;case"delete":st(i)||(a.push(r.get(rs)),Rs(i)&&a.push(r.get(Ya)));break;case"set":Rs(i)&&a.push(r.get(rs));break}Il();for(const l of a)l&&Hh(l,4);Rl()}const cg=wl("__proto__,__v_isRef,__isVue"),Nh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Xs)),zc=dg();function dg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ft(this);for(let n=0,r=this.length;n<r;n++)ge(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ft)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){fs(),Il();const s=ft(this)[t].apply(this,e);return Rl(),ps(),s}}),i}function hg(i){const t=ft(this);return ge(t,"has",i),t.hasOwnProperty(i)}class Bh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){const o=this._isReadonly,n=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?Cg:qh:n?Uh:jh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=st(t);if(!o){if(r&&ht(zc,e))return Reflect.get(zc,e,s);if(e==="hasOwnProperty")return hg}const a=Reflect.get(t,e,s);return(Xs(e)?Nh.has(e):cg(e))||(o||ge(t,"get",e),n)?a:me(a)?r&&Cl(e)?a:a.value:At(a)?o?Wh(a):Al(a):a}}class zh extends Bh{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._isShallow){const l=Ps(n);if(!Wn(s)&&!Ps(s)&&(n=ft(n),s=ft(s)),!st(t)&&me(n)&&!me(s))return l?!1:(n.value=s,!0)}const r=st(t)&&Cl(e)?Number(e)<t.length:ht(t,e),a=Reflect.set(t,e,s,o);return t===ft(o)&&(r?_i(s,n)&&ui(t,"set",e,s):ui(t,"add",e,s)),a}deleteProperty(t,e){const s=ht(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&ui(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!Xs(e)||!Nh.has(e))&&ge(t,"has",e),s}ownKeys(t){return ge(t,"iterate",st(t)?"length":rs),Reflect.ownKeys(t)}}class ug extends Bh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const fg=new zh,pg=new ug,gg=new zh(!0),Dl=i=>i,dr=i=>Reflect.getPrototypeOf(i);function ln(i,t,e=!1,s=!1){i=i.__v_raw;const o=ft(i),n=ft(t);e||(_i(t,n)&&ge(o,"get",t),ge(o,"get",n));const{has:r}=dr(o),a=s?Dl:e?Vl:Fo;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function cn(i,t=!1){const e=this.__v_raw,s=ft(e),o=ft(i);return t||(_i(i,o)&&ge(s,"has",i),ge(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function dn(i,t=!1){return i=i.__v_raw,!t&&ge(ft(i),"iterate",rs),Reflect.get(i,"size",i)}function jc(i){i=ft(i);const t=ft(this);return dr(t).has.call(t,i)||(t.add(i),ui(t,"add",i,i)),this}function Uc(i,t){t=ft(t);const e=ft(this),{has:s,get:o}=dr(e);let n=s.call(e,i);n||(i=ft(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?_i(t,r)&&ui(e,"set",i,t):ui(e,"add",i,t),this}function qc(i){const t=ft(this),{has:e,get:s}=dr(t);let o=e.call(t,i);o||(i=ft(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&ui(t,"delete",i,void 0),n}function Wc(){const i=ft(this),t=i.size!==0,e=i.clear();return t&&ui(i,"clear",void 0,void 0),e}function hn(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ft(r),l=t?Dl:i?Vl:Fo;return!i&&ge(a,"iterate",rs),r.forEach((c,d)=>s.call(o,l(c),l(d),n))}}function un(i,t,e){return function(...s){const o=this.__v_raw,n=ft(o),r=Rs(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,c=o[i](...s),d=e?Dl:t?Vl:Fo;return!t&&ge(n,"iterate",l?Ya:rs),{next(){const{value:u,done:b}=c.next();return b?{value:u,done:b}:{value:a?[d(u[0]),d(u[1])]:d(u),done:b}},[Symbol.iterator](){return this}}}}function Fi(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function mg(){const i={get(n){return ln(this,n)},get size(){return dn(this)},has:cn,add:jc,set:Uc,delete:qc,clear:Wc,forEach:hn(!1,!1)},t={get(n){return ln(this,n,!1,!0)},get size(){return dn(this)},has:cn,add:jc,set:Uc,delete:qc,clear:Wc,forEach:hn(!1,!0)},e={get(n){return ln(this,n,!0)},get size(){return dn(this,!0)},has(n){return cn.call(this,n,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:hn(!0,!1)},s={get(n){return ln(this,n,!0,!0)},get size(){return dn(this,!0)},has(n){return cn.call(this,n,!0)},add:Fi("add"),set:Fi("set"),delete:Fi("delete"),clear:Fi("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=un(n,!1,!1),e[n]=un(n,!0,!1),t[n]=un(n,!1,!0),s[n]=un(n,!0,!0)}),[i,e,t,s]}const[bg,vg,yg,xg]=mg();function El(i,t){const e=t?i?xg:yg:i?vg:bg;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(ht(e,o)&&o in s?e:s,o,n)}const wg={get:El(!1,!1)},$g={get:El(!1,!0)},kg={get:El(!0,!1)},jh=new WeakMap,Uh=new WeakMap,qh=new WeakMap,Cg=new WeakMap;function Sg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fg(i){return i.__v_skip||!Object.isExtensible(i)?0:Sg(Jp(i))}function Al(i){return Ps(i)?i:Ol(i,!1,fg,wg,jh)}function Tg(i){return Ol(i,!1,gg,$g,Uh)}function Wh(i){return Ol(i,!0,pg,kg,qh)}function Ol(i,t,e,s,o){if(!At(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=Fg(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function Ds(i){return Ps(i)?Ds(i.__v_raw):!!(i&&i.__v_isReactive)}function Ps(i){return!!(i&&i.__v_isReadonly)}function Wn(i){return!!(i&&i.__v_isShallow)}function Gh(i){return Ds(i)||Ps(i)}function ft(i){const t=i&&i.__v_raw;return t?ft(t):i}function Xh(i){return Object.isExtensible(i)&&qn(i,"__v_skip",!0),i}const Fo=i=>At(i)?Al(i):i,Vl=i=>At(i)?Wh(i):i;class Yh{constructor(t,e,s,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Tl(()=>t(this._value),()=>An(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ft(this);return(!t._cacheable||t.effect.dirty)&&_i(t._value,t._value=t.effect.run())&&An(t,4),Jh(t),t.effect._dirtyLevel>=2&&An(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Ig(i,t,e=!1){let s,o;const n=ot(i);return n?(s=i,o=Ae):(s=i.get,o=i.set),new Yh(s,o,n||!o,e)}function Jh(i){var t;Vi&&ns&&(i=ft(i),Ph(ns,(t=i.dep)!=null?t:i.dep=Mh(()=>i.dep=void 0,i instanceof Yh?i:void 0)))}function An(i,t=4,e){i=ft(i);const s=i.dep;s&&Hh(s,t)}function me(i){return!!(i&&i.__v_isRef===!0)}function ss(i){return Rg(i,!1)}function Rg(i,t){return me(i)?i:new Dg(i,t)}class Dg{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ft(t),this._value=e?t:Fo(t)}get value(){return Jh(this),this._value}set value(t){const e=this.__v_isShallow||Wn(t)||Ps(t);t=e?t:ft(t),_i(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Fo(t),An(this,4))}}function Eg(i){return me(i)?i.value:i}const Ag={get:(i,t,e)=>Eg(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return me(o)&&!me(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function Qh(i){return Ds(i)?i:new Proxy(i,Ag)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Li(i,t,e,s){try{return s?i(...s):i()}catch(o){hr(o,t,e)}}function We(i,t,e,s){if(ot(i)){const n=Li(i,t,e,s);return n&&Ih(n)&&n.catch(r=>{hr(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(We(i[n],t,e,s));return o}function hr(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const c=n.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Li(l,null,10,[i,r,a]);return}}Og(i,e,o,s)}function Og(i,t,e,s=!0){console.error(i)}let To=!1,Ja=!1;const Zt=[];let ei=0;const Es=[];let Di=null,es=0;const Zh=Promise.resolve();let Ll=null;function Vg(i){const t=Ll||Zh;return i?t.then(this?i.bind(this):i):t}function Lg(i){let t=ei+1,e=Zt.length;for(;t<e;){const s=t+e>>>1,o=Zt[s],n=Io(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function _l(i){(!Zt.length||!Zt.includes(i,To&&i.allowRecurse?ei+1:ei))&&(i.id==null?Zt.push(i):Zt.splice(Lg(i.id),0,i),Kh())}function Kh(){!To&&!Ja&&(Ja=!0,Ll=Zh.then(eu))}function _g(i){const t=Zt.indexOf(i);t>ei&&Zt.splice(t,1)}function Pg(i){st(i)?Es.push(...i):(!Di||!Di.includes(i,i.allowRecurse?es+1:es))&&Es.push(i),Kh()}function Gc(i,t,e=To?ei+1:0){for(;e<Zt.length;e++){const s=Zt[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;Zt.splice(e,1),e--,s()}}}function tu(i){if(Es.length){const t=[...new Set(Es)].sort((e,s)=>Io(e)-Io(s));if(Es.length=0,Di){Di.push(...t);return}for(Di=t,es=0;es<Di.length;es++)Di[es]();Di=null,es=0}}const Io=i=>i.id==null?1/0:i.id,Hg=(i,t)=>{const e=Io(i)-Io(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function eu(i){Ja=!1,To=!0,Zt.sort(Hg);try{for(ei=0;ei<Zt.length;ei++){const t=Zt[ei];t&&t.active!==!1&&Li(t,null,14)}}finally{ei=0,Zt.length=0,tu(),To=!1,Ll=null,(Zt.length||Es.length)&&eu()}}function Mg(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||Ct;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:b}=s[d]||Ct;b&&(o=e.map(w=>zt(w)?w.trim():w)),u&&(o=e.map(qa))}let a,l=s[a=ua(t)]||s[a=ua(_s(t))];!l&&n&&(l=s[a=ua(Ys(t))]),l&&We(l,i,6,o);const c=s[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,We(c,i,6,o)}}function iu(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!ot(i)){const l=c=>{const d=iu(c,t,!0);d&&(a=!0,Xt(r,d))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(At(i)&&s.set(i,null),null):(st(n)?n.forEach(l=>r[l]=null):Xt(r,n),At(i)&&s.set(i,r),r)}function ur(i,t){return!i||!ar(t)?!1:(t=t.slice(2).replace(/Once$/,""),ht(i,t[0].toLowerCase()+t.slice(1))||ht(i,Ys(t))||ht(i,t))}let Gt=null,fr=null;function Gn(i){const t=Gt;return Gt=i,fr=i&&i.type.__scopeId||null,t}function su(i){fr=i}function ou(){fr=null}function nu(i,t=Gt,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&sd(-1);const n=Gn(t);let r;try{r=i(...o)}finally{Gn(n),s._d&&sd(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function pa(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:b,setupState:w,ctx:y,inheritAttrs:k}=i;let S,Q;const B=Gn(i);try{if(e.shapeFlag&4){const q=o||s,kt=q;S=ti(d.call(kt,q,u,n,w,b,y)),Q=l}else{const q=t;S=ti(q.length>1?q(n,{attrs:l,slots:a,emit:c}):q(n,null)),Q=t.props?l:Ng(l)}}catch(q){wo.length=0,hr(q,i,1),S=ke(Pi)}let A=S;if(Q&&k!==!1){const q=Object.keys(Q),{shapeFlag:kt}=A;q.length&&kt&7&&(r&&q.some($l)&&(Q=Bg(Q,r)),A=Hs(A,Q))}return e.dirs&&(A=Hs(A),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&(A.transition=e.transition),S=A,Gn(B),S}const Ng=i=>{let t;for(const e in i)(e==="class"||e==="style"||ar(e))&&((t||(t={}))[e]=i[e]);return t},Bg=(i,t)=>{const e={};for(const s in i)(!$l(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function zg(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?Xc(s,r,c):!!r;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const b=d[u];if(r[b]!==s[b]&&!ur(c,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Xc(s,r,c):!0:!!r;return!1}function Xc(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!ur(e,n))return!0}return!1}function jg({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const Ug=Symbol.for("v-ndc"),qg=i=>i.__isSuspense;function Wg(i,t){t&&t.pendingBranch?st(i)?t.effects.push(...i):t.effects.push(i):Pg(i)}const Gg=Symbol.for("v-scx"),Xg=()=>On(Gg);function Yg(i,t){return Pl(i,null,t)}const fn={};function ga(i,t,e){return Pl(i,t,e)}function Pl(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=Ct){if(t&&n){const X=t;t=(...Vt)=>{X(...Vt),kt()}}const l=ne,c=X=>s===!0?X:os(X,s===!1?1:void 0);let d,u=!1,b=!1;if(me(i)?(d=()=>i.value,u=Wn(i)):Ds(i)?(d=()=>c(i),u=!0):st(i)?(b=!0,u=i.some(X=>Ds(X)||Wn(X)),d=()=>i.map(X=>{if(me(X))return X.value;if(Ds(X))return c(X);if(ot(X))return Li(X,l,2)})):ot(i)?t?d=()=>Li(i,l,2):d=()=>(w&&w(),We(i,l,3,[y])):d=Ae,t&&s){const X=d;d=()=>os(X())}let w,y=X=>{w=A.onStop=()=>{Li(X,l,4),w=A.onStop=void 0}},k;if(br)if(y=Ae,t?e&&We(t,l,3,[d(),b?[]:void 0,y]):d(),o==="sync"){const X=Xg();k=X.__watcherHandles||(X.__watcherHandles=[])}else return Ae;let S=b?new Array(i.length).fill(fn):fn;const Q=()=>{if(!(!A.active||!A.dirty))if(t){const X=A.run();(s||u||(b?X.some((Vt,ue)=>_i(Vt,S[ue])):_i(X,S)))&&(w&&w(),We(t,l,3,[X,S===fn?void 0:b&&S[0]===fn?[]:S,y]),S=X)}else A.run()};Q.allowRecurse=!!t;let B;o==="sync"?B=Q:o==="post"?B=()=>pe(Q,l&&l.suspense):(Q.pre=!0,l&&(Q.id=l.uid),B=()=>_l(Q));const A=new Tl(d,Ae,B),q=ag(),kt=()=>{A.stop(),q&&kl(q.effects,A)};return t?e?Q():S=A.run():o==="post"?pe(A.run.bind(A),l&&l.suspense):A.run(),k&&k.push(kt),kt}function Jg(i,t,e){const s=this.proxy,o=zt(i)?i.includes(".")?ru(s,i):()=>s[i]:i.bind(s,s);let n;ot(t)?n=t:(n=t.handler,e=t);const r=Bo(this),a=Pl(o,n.bind(s),e);return r(),a}function ru(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function os(i,t,e=0,s){if(!At(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),me(i))os(i.value,t,e,s);else if(st(i))for(let o=0;o<i.length;o++)os(i[o],t,e,s);else if(Th(i)||Rs(i))i.forEach(o=>{os(o,t,e,s)});else if(Dh(i))for(const o in i)os(i[o],t,e,s);return i}function li(i,t){if(Gt===null)return i;const e=vr(Gt)||Gt.proxy,s=i.dirs||(i.dirs=[]);for(let o=0;o<t.length;o++){let[n,r,a,l=Ct]=t[o];n&&(ot(n)&&(n={mounted:n,updated:n}),n.deep&&os(r),s.push({dir:n,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return i}function Ji(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(fs(),We(l,e,8,[i.el,a,i,t]),ps())}}/*! #__NO_SIDE_EFFECTS__ */function No(i,t){return ot(i)?Xt({name:i.name},t,{setup:i}):i}const vo=i=>!!i.type.__asyncLoader,au=i=>i.type.__isKeepAlive;function Qg(i,t){lu(i,"a",t)}function Zg(i,t){lu(i,"da",t)}function lu(i,t,e=ne){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(pr(t,s,e),e){let o=e.parent;for(;o&&o.parent;)au(o.parent.vnode)&&Kg(s,t,e,o),o=o.parent}}function Kg(i,t,e,s){const o=pr(t,i,s,!0);Ml(()=>{kl(s[t],o)},e)}function pr(i,t,e=ne,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;fs();const a=Bo(e),l=We(t,e,i,r);return a(),ps(),l});return s?o.unshift(n):o.push(n),n}}const mi=i=>(t,e=ne)=>(!br||i==="sp")&&pr(i,(...s)=>t(...s),e),tm=mi("bm"),Hl=mi("m"),em=mi("bu"),im=mi("u"),sm=mi("bum"),Ml=mi("um"),om=mi("sp"),nm=mi("rtg"),rm=mi("rtc");function am(i,t=ne){pr("ec",i,t)}function ro(i,t,e,s){let o;const n=e&&e[s];if(st(i)||zt(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(At(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];o[a]=t(i[c],c,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function cu(i,t,e={},s,o){if(Gt.isCE||Gt.parent&&vo(Gt.parent)&&Gt.parent.isCE)return t!=="default"&&(e.name=t),ke("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),Mt();const r=n&&du(n(e)),a=Yn(Qt,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function du(i){return i.some(t=>wu(t)?!(t.type===Pi||t.type===Qt&&!du(t.children)):!0)?i:null}const Qa=i=>i?Cu(i)?vr(i)||i.proxy:Qa(i.parent):null,yo=Xt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Qa(i.parent),$root:i=>Qa(i.root),$emit:i=>i.emit,$options:i=>Nl(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,_l(i.update)}),$nextTick:i=>i.n||(i.n=Vg.bind(i.proxy)),$watch:i=>Jg.bind(i)}),ma=(i,t)=>i!==Ct&&!i.__isScriptSetup&&ht(i,t),lm={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(ma(s,t))return r[t]=1,s[t];if(o!==Ct&&ht(o,t))return r[t]=2,o[t];if((c=i.propsOptions[0])&&ht(c,t))return r[t]=3,n[t];if(e!==Ct&&ht(e,t))return r[t]=4,e[t];Za&&(r[t]=0)}}const d=yo[t];let u,b;if(d)return t==="$attrs"&&ge(i,"get",t),d(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ct&&ht(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,ht(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return ma(o,t)?(o[t]=e,!0):s!==Ct&&ht(s,t)?(s[t]=e,!0):ht(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==Ct&&ht(i,r)||ma(t,r)||(a=n[0])&&ht(a,r)||ht(s,r)||ht(yo,r)||ht(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ht(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Yc(i){return st(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Za=!0;function cm(i){const t=Nl(i),e=i.proxy,s=i.ctx;Za=!1,t.beforeCreate&&Jc(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:b,beforeUpdate:w,updated:y,activated:k,deactivated:S,beforeDestroy:Q,beforeUnmount:B,destroyed:A,unmounted:q,render:kt,renderTracked:X,renderTriggered:Vt,errorCaptured:ue,serverPrefetch:so,expose:Gi,inheritAttrs:oo,components:sn,directives:on,filters:la}=t;if(c&&dm(c,s,null),r)for(const Rt in r){const yt=r[Rt];ot(yt)&&(s[Rt]=yt.bind(e))}if(o){const Rt=o.call(e,e);At(Rt)&&(i.data=Al(Rt))}if(Za=!0,n)for(const Rt in n){const yt=n[Rt],Xi=ot(yt)?yt.bind(e,e):ot(yt.get)?yt.get.bind(e,e):Ae,nn=!ot(yt)&&ot(yt.set)?yt.set.bind(e):Ae,Yi=Fu({get:Xi,set:nn});Object.defineProperty(s,Rt,{enumerable:!0,configurable:!0,get:()=>Yi.value,set:Je=>Yi.value=Je})}if(a)for(const Rt in a)hu(a[Rt],s,e,Rt);if(l){const Rt=ot(l)?l.call(e):l;Reflect.ownKeys(Rt).forEach(yt=>{mm(yt,Rt[yt])})}d&&Jc(d,i,"c");function ie(Rt,yt){st(yt)?yt.forEach(Xi=>Rt(Xi.bind(e))):yt&&Rt(yt.bind(e))}if(ie(tm,u),ie(Hl,b),ie(em,w),ie(im,y),ie(Qg,k),ie(Zg,S),ie(am,ue),ie(rm,X),ie(nm,Vt),ie(sm,B),ie(Ml,q),ie(om,so),st(Gi))if(Gi.length){const Rt=i.exposed||(i.exposed={});Gi.forEach(yt=>{Object.defineProperty(Rt,yt,{get:()=>e[yt],set:Xi=>e[yt]=Xi})})}else i.exposed||(i.exposed={});kt&&i.render===Ae&&(i.render=kt),oo!=null&&(i.inheritAttrs=oo),sn&&(i.components=sn),on&&(i.directives=on)}function dm(i,t,e=Ae){st(i)&&(i=Ka(i));for(const s in i){const o=i[s];let n;At(o)?"default"in o?n=On(o.from||s,o.default,!0):n=On(o.from||s):n=On(o),me(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function Jc(i,t,e){We(st(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function hu(i,t,e,s){const o=s.includes(".")?ru(e,s):()=>e[s];if(zt(i)){const n=t[i];ot(n)&&ga(o,n)}else if(ot(i))ga(o,i.bind(e));else if(At(i))if(st(i))i.forEach(n=>hu(n,t,e,s));else{const n=ot(i.handler)?i.handler.bind(e):t[i.handler];ot(n)&&ga(o,n,i)}}function Nl(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(c=>Xn(l,c,r,!0)),Xn(l,t,r)),At(t)&&n.set(t,l),l}function Xn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&Xn(i,n,e,!0),o&&o.forEach(r=>Xn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=hm[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const hm={data:Qc,props:Zc,emits:Zc,methods:go,computed:go,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:go,directives:go,watch:fm,provide:Qc,inject:um};function Qc(i,t){return t?i?function(){return Xt(ot(i)?i.call(this,this):i,ot(t)?t.call(this,this):t)}:t:i}function um(i,t){return go(Ka(i),Ka(t))}function Ka(i){if(st(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function se(i,t){return i?[...new Set([].concat(i,t))]:t}function go(i,t){return i?Xt(Object.create(null),i,t):t}function Zc(i,t){return i?st(i)&&st(t)?[...new Set([...i,...t])]:Xt(Object.create(null),Yc(i),Yc(t??{})):t}function fm(i,t){if(!i)return t;if(!t)return i;const e=Xt(Object.create(null),i);for(const s in t)e[s]=se(i[s],t[s]);return e}function uu(){return{app:null,config:{isNativeTag:Xp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pm=0;function gm(i,t){return function(s,o=null){ot(s)||(s=Xt({},s)),o!=null&&!At(o)&&(o=null);const n=uu(),r=new WeakSet;let a=!1;const l=n.app={_uid:pm++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:Mm,get config(){return n.config},set config(c){},use(c,...d){return r.has(c)||(c&&ot(c.install)?(r.add(c),c.install(l,...d)):ot(c)&&(r.add(c),c(l,...d))),l},mixin(c){return n.mixins.includes(c)||n.mixins.push(c),l},component(c,d){return d?(n.components[c]=d,l):n.components[c]},directive(c,d){return d?(n.directives[c]=d,l):n.directives[c]},mount(c,d,u){if(!a){const b=ke(s,o);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),d&&t?t(b,c):i(b,c,u),a=!0,l._container=c,c.__vue_app__=l,vr(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,d){return n.provides[c]=d,l},runWithContext(c){const d=xo;xo=l;try{return c()}finally{xo=d}}};return l}}let xo=null;function mm(i,t){if(ne){let e=ne.provides;const s=ne.parent&&ne.parent.provides;s===e&&(e=ne.provides=Object.create(s)),e[i]=t}}function On(i,t,e=!1){const s=ne||Gt;if(s||xo){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:xo._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&ot(t)?t.call(s&&s.proxy):t}}function bm(i,t,e,s=!1){const o={},n={};qn(n,mr,1),i.propsDefaults=Object.create(null),fu(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:Tg(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function vm(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ft(o),[l]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=i.vnode.dynamicProps;for(let u=0;u<d.length;u++){let b=d[u];if(ur(i.emitsOptions,b))continue;const w=t[b];if(l)if(ht(n,b))w!==n[b]&&(n[b]=w,c=!0);else{const y=_s(b);o[y]=tl(l,a,y,w,i,!1)}else w!==n[b]&&(n[b]=w,c=!0)}}}else{fu(i,t,o,n)&&(c=!0);let d;for(const u in a)(!t||!ht(t,u)&&((d=Ys(u))===u||!ht(t,d)))&&(l?e&&(e[u]!==void 0||e[d]!==void 0)&&(o[u]=tl(l,a,u,void 0,i,!0)):delete o[u]);if(n!==a)for(const u in n)(!t||!ht(t,u))&&(delete n[u],c=!0)}c&&ui(i,"set","$attrs")}function fu(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(bo(l))continue;const c=t[l];let d;o&&ht(o,d=_s(l))?!n||!n.includes(d)?e[d]=c:(a||(a={}))[d]=c:ur(i.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(n){const l=ft(e),c=a||Ct;for(let d=0;d<n.length;d++){const u=n[d];e[u]=tl(o,l,u,c[u],i,!ht(c,u))}}return r}function tl(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=ht(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ot(l)){const{propsDefaults:c}=o;if(e in c)s=c[e];else{const d=Bo(o);s=c[e]=l.call(null,t),d()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===Ys(e))&&(s=!0))}return s}function pu(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!ot(i)){const d=u=>{l=!0;const[b,w]=pu(u,t,!0);Xt(r,b),w&&a.push(...w)};!e&&t.mixins.length&&t.mixins.forEach(d),i.extends&&d(i.extends),i.mixins&&i.mixins.forEach(d)}if(!n&&!l)return At(i)&&s.set(i,Is),Is;if(st(n))for(let d=0;d<n.length;d++){const u=_s(n[d]);Kc(u)&&(r[u]=Ct)}else if(n)for(const d in n){const u=_s(d);if(Kc(u)){const b=n[d],w=r[u]=st(b)||ot(b)?{type:b}:Xt({},b);if(w){const y=id(Boolean,w.type),k=id(String,w.type);w[0]=y>-1,w[1]=k<0||y<k,(y>-1||ht(w,"default"))&&a.push(u)}}}const c=[r,a];return At(i)&&s.set(i,c),c}function Kc(i){return i[0]!=="$"&&!bo(i)}function td(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function ed(i,t){return td(i)===td(t)}function id(i,t){return st(t)?t.findIndex(e=>ed(e,i)):ot(t)&&ed(t,i)?0:-1}const gu=i=>i[0]==="_"||i==="$stable",Bl=i=>st(i)?i.map(ti):[ti(i)],ym=(i,t,e)=>{if(t._n)return t;const s=nu((...o)=>Bl(t(...o)),e);return s._c=!1,s},mu=(i,t,e)=>{const s=i._ctx;for(const o in i){if(gu(o))continue;const n=i[o];if(ot(n))t[o]=ym(o,n,s);else if(n!=null){const r=Bl(n);t[o]=()=>r}}},bu=(i,t)=>{const e=Bl(t);i.slots.default=()=>e},xm=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ft(t),qn(t,"_",e)):mu(t,i.slots={})}else i.slots={},t&&bu(i,t);qn(i.slots,mr,1)},wm=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=Ct;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Xt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,mu(t,o)),r=t}else t&&(bu(i,t),r={default:1});if(n)for(const a in o)!gu(a)&&r[a]==null&&delete o[a]};function el(i,t,e,s,o=!1){if(st(i)){i.forEach((b,w)=>el(b,t&&(st(t)?t[w]:t),e,s,o));return}if(vo(s)&&!o)return;const n=s.shapeFlag&4?vr(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,c=t&&t.r,d=a.refs===Ct?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(zt(c)?(d[c]=null,ht(u,c)&&(u[c]=null)):me(c)&&(c.value=null)),ot(l))Li(l,a,12,[r,d]);else{const b=zt(l),w=me(l);if(b||w){const y=()=>{if(i.f){const k=b?ht(u,l)?u[l]:d[l]:l.value;o?st(k)&&kl(k,n):st(k)?k.includes(n)||k.push(n):b?(d[l]=[n],ht(u,l)&&(u[l]=d[l])):(l.value=[n],i.k&&(d[i.k]=l.value))}else b?(d[l]=r,ht(u,l)&&(u[l]=r)):w&&(l.value=r,i.k&&(d[i.k]=r))};r?(y.id=-1,pe(y,e)):y()}}}const pe=Wg;function $m(i){return km(i)}function km(i,t){const e=Ah();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:b,setScopeId:w=Ae,insertStaticContent:y}=i,k=(p,m,$,F=null,T=null,O=null,H=void 0,E=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!ao(p,m)&&(F=rn(p),Je(p,T,O,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:R,ref:z,shapeFlag:Y}=m;switch(R){case gr:S(p,m,$,F);break;case Pi:Q(p,m,$,F);break;case Vn:p==null&&B(m,$,F,H);break;case Qt:sn(p,m,$,F,T,O,H,E,L);break;default:Y&1?kt(p,m,$,F,T,O,H,E,L):Y&6?on(p,m,$,F,T,O,H,E,L):(Y&64||Y&128)&&R.process(p,m,$,F,T,O,H,E,L,$s)}z!=null&&T&&el(z,p&&p.ref,O,m||p,!m)},S=(p,m,$,F)=>{if(p==null)s(m.el=a(m.children),$,F);else{const T=m.el=p.el;m.children!==p.children&&c(T,m.children)}},Q=(p,m,$,F)=>{p==null?s(m.el=l(m.children||""),$,F):m.el=p.el},B=(p,m,$,F)=>{[p.el,p.anchor]=y(p.children,m,$,F,p.el,p.anchor)},A=({el:p,anchor:m},$,F)=>{let T;for(;p&&p!==m;)T=b(p),s(p,$,F),p=T;s(m,$,F)},q=({el:p,anchor:m})=>{let $;for(;p&&p!==m;)$=b(p),o(p),p=$;o(m)},kt=(p,m,$,F,T,O,H,E,L)=>{m.type==="svg"?H="svg":m.type==="math"&&(H="mathml"),p==null?X(m,$,F,T,O,H,E,L):so(p,m,T,O,H,E,L)},X=(p,m,$,F,T,O,H,E)=>{let L,R;const{props:z,shapeFlag:Y,transition:G,dirs:it}=p;if(L=p.el=r(p.type,O,z&&z.is,z),Y&8?d(L,p.children):Y&16&&ue(p.children,L,null,F,T,ba(p,O),H,E),it&&Ji(p,null,F,"created"),Vt(L,p,p.scopeId,H,F),z){for(const bt in z)bt!=="value"&&!bo(bt)&&n(L,bt,null,z[bt],O,p.children,F,T,ai);"value"in z&&n(L,"value",null,z.value,O),(R=z.onVnodeBeforeMount)&&Ze(R,F,p)}it&&Ji(p,null,F,"beforeMount");const ct=Cm(T,G);ct&&G.beforeEnter(L),s(L,m,$),((R=z&&z.onVnodeMounted)||ct||it)&&pe(()=>{R&&Ze(R,F,p),ct&&G.enter(L),it&&Ji(p,null,F,"mounted")},T)},Vt=(p,m,$,F,T)=>{if($&&w(p,$),F)for(let O=0;O<F.length;O++)w(p,F[O]);if(T){let O=T.subTree;if(m===O){const H=T.vnode;Vt(p,H,H.scopeId,H.slotScopeIds,T.parent)}}},ue=(p,m,$,F,T,O,H,E,L=0)=>{for(let R=L;R<p.length;R++){const z=p[R]=E?Ei(p[R]):ti(p[R]);k(null,z,m,$,F,T,O,H,E)}},so=(p,m,$,F,T,O,H)=>{const E=m.el=p.el;let{patchFlag:L,dynamicChildren:R,dirs:z}=m;L|=p.patchFlag&16;const Y=p.props||Ct,G=m.props||Ct;let it;if($&&Qi($,!1),(it=G.onVnodeBeforeUpdate)&&Ze(it,$,m,p),z&&Ji(m,p,$,"beforeUpdate"),$&&Qi($,!0),R?Gi(p.dynamicChildren,R,E,$,F,ba(m,T),O):H||yt(p,m,E,null,$,F,ba(m,T),O,!1),L>0){if(L&16)oo(E,m,Y,G,$,F,T);else if(L&2&&Y.class!==G.class&&n(E,"class",null,G.class,T),L&4&&n(E,"style",Y.style,G.style,T),L&8){const ct=m.dynamicProps;for(let bt=0;bt<ct.length;bt++){const Tt=ct[bt],Ut=Y[Tt],ze=G[Tt];(ze!==Ut||Tt==="value")&&n(E,Tt,Ut,ze,T,p.children,$,F,ai)}}L&1&&p.children!==m.children&&d(E,m.children)}else!H&&R==null&&oo(E,m,Y,G,$,F,T);((it=G.onVnodeUpdated)||z)&&pe(()=>{it&&Ze(it,$,m,p),z&&Ji(m,p,$,"updated")},F)},Gi=(p,m,$,F,T,O,H)=>{for(let E=0;E<m.length;E++){const L=p[E],R=m[E],z=L.el&&(L.type===Qt||!ao(L,R)||L.shapeFlag&70)?u(L.el):$;k(L,R,z,null,F,T,O,H,!0)}},oo=(p,m,$,F,T,O,H)=>{if($!==F){if($!==Ct)for(const E in $)!bo(E)&&!(E in F)&&n(p,E,$[E],null,H,m.children,T,O,ai);for(const E in F){if(bo(E))continue;const L=F[E],R=$[E];L!==R&&E!=="value"&&n(p,E,R,L,H,m.children,T,O,ai)}"value"in F&&n(p,"value",$.value,F.value,H)}},sn=(p,m,$,F,T,O,H,E,L)=>{const R=m.el=p?p.el:a(""),z=m.anchor=p?p.anchor:a("");let{patchFlag:Y,dynamicChildren:G,slotScopeIds:it}=m;it&&(E=E?E.concat(it):it),p==null?(s(R,$,F),s(z,$,F),ue(m.children||[],$,z,T,O,H,E,L)):Y>0&&Y&64&&G&&p.dynamicChildren?(Gi(p.dynamicChildren,G,$,T,O,H,E),(m.key!=null||T&&m===T.subTree)&&vu(p,m,!0)):yt(p,m,$,z,T,O,H,E,L)},on=(p,m,$,F,T,O,H,E,L)=>{m.slotScopeIds=E,p==null?m.shapeFlag&512?T.ctx.activate(m,$,F,H,L):la(m,$,F,T,O,H,L):Oc(p,m,L)},la=(p,m,$,F,T,O,H)=>{const E=p.component=Om(p,F,T);if(au(p)&&(E.ctx.renderer=$s),Vm(E),E.asyncDep){if(T&&T.registerDep(E,ie),!p.el){const L=E.subTree=ke(Pi);Q(null,L,m,$)}}else ie(E,p,m,$,T,O,H)},Oc=(p,m,$)=>{const F=m.component=p.component;if(zg(p,m,$))if(F.asyncDep&&!F.asyncResolved){Rt(F,m,$);return}else F.next=m,_g(F.update),F.effect.dirty=!0,F.update();else m.el=p.el,F.vnode=m},ie=(p,m,$,F,T,O,H)=>{const E=()=>{if(p.isMounted){let{next:z,bu:Y,u:G,parent:it,vnode:ct}=p;{const ks=yu(p);if(ks){z&&(z.el=ct.el,Rt(p,z,H)),ks.asyncDep.then(()=>{p.isUnmounted||E()});return}}let bt=z,Tt;Qi(p,!1),z?(z.el=ct.el,Rt(p,z,H)):z=ct,Y&&En(Y),(Tt=z.props&&z.props.onVnodeBeforeUpdate)&&Ze(Tt,it,z,ct),Qi(p,!0);const Ut=pa(p),ze=p.subTree;p.subTree=Ut,k(ze,Ut,u(ze.el),rn(ze),p,T,O),z.el=Ut.el,bt===null&&jg(p,Ut.el),G&&pe(G,T),(Tt=z.props&&z.props.onVnodeUpdated)&&pe(()=>Ze(Tt,it,z,ct),T)}else{let z;const{el:Y,props:G}=m,{bm:it,m:ct,parent:bt}=p,Tt=vo(m);if(Qi(p,!1),it&&En(it),!Tt&&(z=G&&G.onVnodeBeforeMount)&&Ze(z,bt,m),Qi(p,!0),Y&&ha){const Ut=()=>{p.subTree=pa(p),ha(Y,p.subTree,p,T,null)};Tt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ut()):Ut()}else{const Ut=p.subTree=pa(p);k(null,Ut,$,F,p,T,O),m.el=Ut.el}if(ct&&pe(ct,T),!Tt&&(z=G&&G.onVnodeMounted)){const Ut=m;pe(()=>Ze(z,bt,Ut),T)}(m.shapeFlag&256||bt&&vo(bt.vnode)&&bt.vnode.shapeFlag&256)&&p.a&&pe(p.a,T),p.isMounted=!0,m=$=F=null}},L=p.effect=new Tl(E,Ae,()=>_l(R),p.scope),R=p.update=()=>{L.dirty&&L.run()};R.id=p.uid,Qi(p,!0),R()},Rt=(p,m,$)=>{m.component=p;const F=p.vnode.props;p.vnode=m,p.next=null,vm(p,m.props,F,$),wm(p,m.children,$),fs(),Gc(p),ps()},yt=(p,m,$,F,T,O,H,E,L=!1)=>{const R=p&&p.children,z=p?p.shapeFlag:0,Y=m.children,{patchFlag:G,shapeFlag:it}=m;if(G>0){if(G&128){nn(R,Y,$,F,T,O,H,E,L);return}else if(G&256){Xi(R,Y,$,F,T,O,H,E,L);return}}it&8?(z&16&&ai(R,T,O),Y!==R&&d($,Y)):z&16?it&16?nn(R,Y,$,F,T,O,H,E,L):ai(R,T,O,!0):(z&8&&d($,""),it&16&&ue(Y,$,F,T,O,H,E,L))},Xi=(p,m,$,F,T,O,H,E,L)=>{p=p||Is,m=m||Is;const R=p.length,z=m.length,Y=Math.min(R,z);let G;for(G=0;G<Y;G++){const it=m[G]=L?Ei(m[G]):ti(m[G]);k(p[G],it,$,null,T,O,H,E,L)}R>z?ai(p,T,O,!0,!1,Y):ue(m,$,F,T,O,H,E,L,Y)},nn=(p,m,$,F,T,O,H,E,L)=>{let R=0;const z=m.length;let Y=p.length-1,G=z-1;for(;R<=Y&&R<=G;){const it=p[R],ct=m[R]=L?Ei(m[R]):ti(m[R]);if(ao(it,ct))k(it,ct,$,null,T,O,H,E,L);else break;R++}for(;R<=Y&&R<=G;){const it=p[Y],ct=m[G]=L?Ei(m[G]):ti(m[G]);if(ao(it,ct))k(it,ct,$,null,T,O,H,E,L);else break;Y--,G--}if(R>Y){if(R<=G){const it=G+1,ct=it<z?m[it].el:F;for(;R<=G;)k(null,m[R]=L?Ei(m[R]):ti(m[R]),$,ct,T,O,H,E,L),R++}}else if(R>G)for(;R<=Y;)Je(p[R],T,O,!0),R++;else{const it=R,ct=R,bt=new Map;for(R=ct;R<=G;R++){const we=m[R]=L?Ei(m[R]):ti(m[R]);we.key!=null&&bt.set(we.key,R)}let Tt,Ut=0;const ze=G-ct+1;let ks=!1,_c=0;const no=new Array(ze);for(R=0;R<ze;R++)no[R]=0;for(R=it;R<=Y;R++){const we=p[R];if(Ut>=ze){Je(we,T,O,!0);continue}let Qe;if(we.key!=null)Qe=bt.get(we.key);else for(Tt=ct;Tt<=G;Tt++)if(no[Tt-ct]===0&&ao(we,m[Tt])){Qe=Tt;break}Qe===void 0?Je(we,T,O,!0):(no[Qe-ct]=R+1,Qe>=_c?_c=Qe:ks=!0,k(we,m[Qe],$,null,T,O,H,E,L),Ut++)}const Pc=ks?Sm(no):Is;for(Tt=Pc.length-1,R=ze-1;R>=0;R--){const we=ct+R,Qe=m[we],Hc=we+1<z?m[we+1].el:F;no[R]===0?k(null,Qe,$,Hc,T,O,H,E,L):ks&&(Tt<0||R!==Pc[Tt]?Yi(Qe,$,Hc,2):Tt--)}}},Yi=(p,m,$,F,T=null)=>{const{el:O,type:H,transition:E,children:L,shapeFlag:R}=p;if(R&6){Yi(p.component.subTree,m,$,F);return}if(R&128){p.suspense.move(m,$,F);return}if(R&64){H.move(p,m,$,$s);return}if(H===Qt){s(O,m,$);for(let Y=0;Y<L.length;Y++)Yi(L[Y],m,$,F);s(p.anchor,m,$);return}if(H===Vn){A(p,m,$);return}if(F!==2&&R&1&&E)if(F===0)E.beforeEnter(O),s(O,m,$),pe(()=>E.enter(O),T);else{const{leave:Y,delayLeave:G,afterLeave:it}=E,ct=()=>s(O,m,$),bt=()=>{Y(O,()=>{ct(),it&&it()})};G?G(O,ct,bt):bt()}else s(O,m,$)},Je=(p,m,$,F=!1,T=!1)=>{const{type:O,props:H,ref:E,children:L,dynamicChildren:R,shapeFlag:z,patchFlag:Y,dirs:G}=p;if(E!=null&&el(E,null,$,p,!0),z&256){m.ctx.deactivate(p);return}const it=z&1&&G,ct=!vo(p);let bt;if(ct&&(bt=H&&H.onVnodeBeforeUnmount)&&Ze(bt,m,p),z&6)Gp(p.component,$,F);else{if(z&128){p.suspense.unmount($,F);return}it&&Ji(p,null,m,"beforeUnmount"),z&64?p.type.remove(p,m,$,T,$s,F):R&&(O!==Qt||Y>0&&Y&64)?ai(R,m,$,!1,!0):(O===Qt&&Y&384||!T&&z&16)&&ai(L,m,$),F&&Vc(p)}(ct&&(bt=H&&H.onVnodeUnmounted)||it)&&pe(()=>{bt&&Ze(bt,m,p),it&&Ji(p,null,m,"unmounted")},$)},Vc=p=>{const{type:m,el:$,anchor:F,transition:T}=p;if(m===Qt){Wp($,F);return}if(m===Vn){q(p);return}const O=()=>{o($),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:H,delayLeave:E}=T,L=()=>H($,O);E?E(p.el,O,L):L()}else O()},Wp=(p,m)=>{let $;for(;p!==m;)$=b(p),o(p),p=$;o(m)},Gp=(p,m,$)=>{const{bum:F,scope:T,update:O,subTree:H,um:E}=p;F&&En(F),T.stop(),O&&(O.active=!1,Je(H,p,m,$)),E&&pe(E,m),pe(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ai=(p,m,$,F=!1,T=!1,O=0)=>{for(let H=O;H<p.length;H++)Je(p[H],m,$,F,T)},rn=p=>p.shapeFlag&6?rn(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let ca=!1;const Lc=(p,m,$)=>{p==null?m._vnode&&Je(m._vnode,null,null,!0):k(m._vnode||null,p,m,null,null,null,$),ca||(ca=!0,Gc(),tu(),ca=!1),m._vnode=p},$s={p:k,um:Je,m:Yi,r:Vc,mt:la,mc:ue,pc:yt,pbc:Gi,n:rn,o:i};let da,ha;return t&&([da,ha]=t($s)),{render:Lc,hydrate:da,createApp:gm(Lc,da)}}function ba({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Qi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function Cm(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function vu(i,t,e=!1){const s=i.children,o=t.children;if(st(s)&&st(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=Ei(o[n]),a.el=r.el),e||vu(r,a)),a.type===gr&&(a.el=r.el)}}function Sm(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const c=i[s];if(c!==0){if(o=e[e.length-1],i[o]<c){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<c?n=a+1:r=a;c<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function yu(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yu(t)}const Fm=i=>i.__isTeleport,Qt=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),Pi=Symbol.for("v-cmt"),Vn=Symbol.for("v-stc"),wo=[];let qe=null;function Mt(i=!1){wo.push(qe=i?null:[])}function Tm(){wo.pop(),qe=wo[wo.length-1]||null}let Ro=1;function sd(i){Ro+=i}function xu(i){return i.dynamicChildren=Ro>0?qe||Is:null,Tm(),Ro>0&&qe&&qe.push(i),i}function Jt(i,t,e,s,o,n){return xu(_(i,t,e,s,o,n,!0))}function Yn(i,t,e,s,o){return xu(ke(i,t,e,s,o,!0))}function wu(i){return i?i.__v_isVNode===!0:!1}function ao(i,t){return i.type===t.type&&i.key===t.key}const mr="__vInternal",$u=({key:i})=>i??null,Ln=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?zt(i)||me(i)||ot(i)?{i:Gt,r:i,k:t,f:!!e}:i:null);function _(i,t=null,e=null,s=0,o=null,n=i===Qt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&$u(t),ref:t&&Ln(t),scopeId:fr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Gt};return a?(zl(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=zt(e)?8:16),Ro>0&&!r&&qe&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&qe.push(l),l}const ke=Im;function Im(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===Ug)&&(i=Pi),wu(i)){const a=Hs(i,t,!0);return e&&zl(a,e),Ro>0&&!n&&qe&&(a.shapeFlag&6?qe[qe.indexOf(i)]=a:qe.push(a)),a.patchFlag|=-2,a}if(Hm(i)&&(i=i.__vccOpts),t){t=Rm(t);let{class:a,style:l}=t;a&&!zt(a)&&(t.class=Fl(a)),At(l)&&(Gh(l)&&!st(l)&&(l=Xt({},l)),t.style=Sl(l))}const r=zt(i)?1:qg(i)?128:Fm(i)?64:At(i)?4:ot(i)?2:0;return _(i,t,e,s,o,r,n,!0)}function Rm(i){return i?Gh(i)||mr in i?Xt({},i):i:null}function Hs(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?Dm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&$u(a),ref:t&&t.ref?e&&o?st(o)?o.concat(Ln(t)):[o,Ln(t)]:Ln(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Qt?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Hs(i.ssContent),ssFallback:i.ssFallback&&Hs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function _n(i=" ",t=0){return ke(gr,null,i,t)}function ku(i,t){const e=ke(Vn,null,i);return e.staticCount=t,e}function mo(i="",t=!1){return t?(Mt(),Yn(Pi,null,i)):ke(Pi,null,i)}function ti(i){return i==null||typeof i=="boolean"?ke(Pi):st(i)?ke(Qt,null,i.slice()):typeof i=="object"?Ei(i):ke(gr,null,String(i))}function Ei(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Hs(i)}function zl(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(st(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),zl(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(mr in t)?t._ctx=Gt:o===3&&Gt&&(Gt.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else ot(t)?(t={default:t,_ctx:Gt},e=32):(t=String(t),s&64?(e=16,t=[_n(t)]):e=8);i.children=t,i.shapeFlag|=e}function Dm(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Fl([t.class,s.class]));else if(o==="style")t.style=Sl([t.style,s.style]);else if(ar(o)){const n=t[o],r=s[o];r&&n!==r&&!(st(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function Ze(i,t,e,s=null){We(i,t,7,[e,s])}const Em=uu();let Am=0;function Om(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||Em,n={uid:Am++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ng(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pu(s,o),emitsOptions:iu(s,o),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:s.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Mg.bind(null,n),i.ce&&i.ce(n),n}let ne=null,Jn,il;{const i=Ah(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};Jn=t("__VUE_INSTANCE_SETTERS__",e=>ne=e),il=t("__VUE_SSR_SETTERS__",e=>br=e)}const Bo=i=>{const t=ne;return Jn(i),i.scope.on(),()=>{i.scope.off(),Jn(t)}},od=()=>{ne&&ne.scope.off(),Jn(null)};function Cu(i){return i.vnode.shapeFlag&4}let br=!1;function Vm(i,t=!1){t&&il(t);const{props:e,children:s}=i.vnode,o=Cu(i);bm(i,e,o,t),xm(i,s);const n=o?Lm(i,t):void 0;return t&&il(!1),n}function Lm(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=Xh(new Proxy(i.ctx,lm));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?Pm(i):null,n=Bo(i);fs();const r=Li(s,i,0,[i.props,o]);if(ps(),n(),Ih(r)){if(r.then(od,od),t)return r.then(a=>{nd(i,a,t)}).catch(a=>{hr(a,i,0)});i.asyncDep=r}else nd(i,r,t)}else Su(i,t)}function nd(i,t,e){ot(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:At(t)&&(i.setupState=Qh(t)),Su(i,e)}let rd;function Su(i,t,e){const s=i.type;if(!i.render){if(!t&&rd&&!s.render){const o=s.template||Nl(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Xt(Xt({isCustomElement:n,delimiters:a},r),l);s.render=rd(o,c)}}i.render=s.render||Ae}{const o=Bo(i);fs();try{cm(i)}finally{ps(),o()}}}function _m(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return ge(i,"get","$attrs"),t[e]}}))}function Pm(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return _m(i)},slots:i.slots,emit:i.emit,expose:t}}function vr(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Qh(Xh(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in yo)return yo[e](i)},has(t,e){return e in t||e in yo}}))}function Hm(i){return ot(i)&&"__vccOpts"in i}const Fu=(i,t)=>Ig(i,t,br),Mm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Nm="http://www.w3.org/2000/svg",Bm="http://www.w3.org/1998/Math/MathML",Ai=typeof document<"u"?document:null,ad=Ai&&Ai.createElement("template"),zm={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?Ai.createElementNS(Nm,i):t==="mathml"?Ai.createElementNS(Bm,i):Ai.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>Ai.createTextNode(i),createComment:i=>Ai.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ai.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{ad.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=ad.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},jm=Symbol("_vtc");function Um(i,t,e){const s=i[jm];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const ld=Symbol("_vod"),qm=Symbol("_vsh"),Wm=Symbol(""),Gm=/(^|;)\s*display\s*:/;function Xm(i,t,e){const s=i.style,o=zt(e);let n=!1;if(e&&!o){if(t)if(zt(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&Pn(s,a,"")}else for(const r in t)e[r]==null&&Pn(s,r,"");for(const r in e)r==="display"&&(n=!0),Pn(s,r,e[r])}else if(o){if(t!==e){const r=s[Wm];r&&(e+=";"+r),s.cssText=e,n=Gm.test(e)}}else t&&i.removeAttribute("style");ld in i&&(i[ld]=n?s.display:"",i[qm]&&(s.display="none"))}const cd=/\s*!important$/;function Pn(i,t,e){if(st(e))e.forEach(s=>Pn(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=Ym(i,t);cd.test(e)?i.setProperty(Ys(s),e.replace(cd,""),"important"):i[s]=e}}const dd=["Webkit","Moz","ms"],va={};function Ym(i,t){const e=va[t];if(e)return e;let s=_s(t);if(s!=="filter"&&s in i)return va[t]=s;s=Eh(s);for(let o=0;o<dd.length;o++){const n=dd[o]+s;if(n in i)return va[t]=n}return t}const hd="http://www.w3.org/1999/xlink";function Jm(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(hd,t.slice(6,t.length)):i.setAttributeNS(hd,t,e);else{const n=og(t);e==null||n&&!Oh(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Qm(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,d=e??"";(c!==d||!("_value"in i))&&(i.value=d),e==null&&i.removeAttribute(t),i._value=e;return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=Oh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function Ss(i,t,e,s){i.addEventListener(t,e,s)}function Zm(i,t,e,s){i.removeEventListener(t,e,s)}const ud=Symbol("_vei");function Km(i,t,e,s,o=null){const n=i[ud]||(i[ud]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=tb(t);if(s){const c=n[t]=sb(s,o);Ss(i,a,c,l)}else r&&(Zm(i,a,r,l),n[t]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function tb(i){let t;if(fd.test(i)){t={};let s;for(;s=i.match(fd);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ys(i.slice(2)),t]}let ya=0;const eb=Promise.resolve(),ib=()=>ya||(eb.then(()=>ya=0),ya=Date.now());function sb(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;We(ob(s,e.value),t,5,[s])};return e.value=i,e.attached=ib(),e}function ob(i,t){if(st(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const pd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,nb=(i,t,e,s,o,n,r,a,l)=>{const c=o==="svg";t==="class"?Um(i,s,c):t==="style"?Xm(i,e,s):ar(t)?$l(t)||Km(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rb(i,t,s,c))?Qm(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Jm(i,t,s,c))};function rb(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&pd(t)&&ot(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return pd(t)&&zt(e)?!1:t in i}const gd=i=>{const t=i.props["onUpdate:modelValue"]||!1;return st(t)?e=>En(t,e):t};function ab(i){i.target.composing=!0}function md(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xa=Symbol("_assign"),ci={created(i,{modifiers:{lazy:t,trim:e,number:s}},o){i[xa]=gd(o);const n=s||o.props&&o.props.type==="number";Ss(i,t?"change":"input",r=>{if(r.target.composing)return;let a=i.value;e&&(a=a.trim()),n&&(a=qa(a)),i[xa](a)}),e&&Ss(i,"change",()=>{i.value=i.value.trim()}),t||(Ss(i,"compositionstart",ab),Ss(i,"compositionend",md),Ss(i,"change",md))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,modifiers:{lazy:e,trim:s,number:o}},n){if(i[xa]=gd(n),i.composing)return;const r=o||i.type==="number"?qa(i.value):i.value,a=t??"";r!==a&&(document.activeElement===i&&i.type!=="range"&&(e||s&&i.value.trim()===a)||(i.value=a))}},lb=["ctrl","shift","alt","meta"],cb={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>lb.some(e=>i[`${e}Key`]&&!t.includes(e))},db=(i,t)=>{const e=i._withMods||(i._withMods={}),s=t.join(".");return e[s]||(e[s]=(o,...n)=>{for(let r=0;r<t.length;r++){const a=cb[t[r]];if(a&&a(o,t))return}return i(o,...n)})},hb=Xt({patchProp:nb},zm);let bd;function ub(){return bd||(bd=$m(hb))}const fb=(...i)=>{const t=ub().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=gb(s);if(!o)return;const n=t._component;!ot(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,pb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function pb(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function gb(i){return zt(i)?document.querySelector(i):i}const mb="/assets/Logo-BgdiXH0i.jpg",pi=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();pi.trustedTypes===void 0&&(pi.trustedTypes={createPolicy:(i,t)=>t});const Tu={configurable:!1,enumerable:!1,writable:!1};pi.FAST===void 0&&Reflect.defineProperty(pi,"FAST",Object.assign({value:Object.create(null)},Tu));const Do=pi.FAST;if(Do.getById===void 0){const i=Object.create(null);Reflect.defineProperty(Do,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},Tu))}const as=Object.freeze([]);function Iu(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const wa=pi.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,c=i.length-a;l<c;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&pi.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),Ru=pi.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let $a=Ru;const $o=`fast-${Math.random().toString(36).substring(2,8)}`,Du=`${$o}{`,jl=`}${$o}`,K=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if($a!==Ru)throw new Error("The HTML policy can only be set once.");$a=i},createHTML(i){return $a.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith($o)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${$o}:`,""))},createInterpolationPlaceholder(i){return`${Du}${i}${jl}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${$o}:${i}-->`},queueUpdate:wa.enqueue,processUpdates:wa.process,nextUpdate(){return new Promise(wa.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class Qn{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class Eu{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new Qn(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Qn(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const Z=Do.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=K.queueUpdate;let s,o=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let d=c.$fastController||t.get(c);return d===void 0&&(Array.isArray(c)?d=o(c):t.set(c,d=new Eu(c))),d}const r=Iu();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,u){const b=this.field,w=d[b];if(w!==u){d[b]=u;const y=d[this.callback];typeof y=="function"&&y.call(d,w,u),n(d).notify(this.name)}}}class l extends Qn{constructor(d,u,b=!1){super(d,u),this.binding=d,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(d,u);return s=b,w}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const b=this.last,w=n(d),y=b===null?this.first:{};if(y.propertySource=d,y.propertyName=u,y.notifier=w,w.subscribe(this,u),b!==null){if(!this.needsRefresh){let k;s=void 0,k=b.propertySource[b.propertyName],s=this,d===k&&(this.needsRefresh=!0)}b.next=y}this.last=y}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){o=c},getNotifier:n,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){n(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return i.test(c.toString())}})});function x(i,t){Z.defineProperty(i,t)}function bb(i,t,e){return Object.assign({},e,{get:function(){return Z.trackVolatile(),e.get.apply(this)}})}const vd=Do.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class Eo{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return vd.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){vd.set(t)}}Z.defineProperty(Eo.prototype,"index");Z.defineProperty(Eo.prototype,"length");const ko=Object.seal(new Eo);class yr{constructor(){this.targetIndex=0}}class Au extends yr{constructor(){super(...arguments),this.createPlaceholder=K.createInterpolationPlaceholder}}class Ul extends yr{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return K.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function vb(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=Z.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function yb(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function xb(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function wb(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function $b(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function kb(i){K.setAttribute(this.target,this.targetName,i)}function Cb(i){K.setBooleanAttribute(this.target,this.targetName,i)}function Sb(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function Fb(i){this.target[this.targetName]=i}function Tb(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class ql extends Au{constructor(t){super(),this.binding=t,this.bind=vb,this.unbind=xb,this.updateTarget=kb,this.isBindingVolatile=Z.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Fb,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>K.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Cb;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=yb,this.unbind=$b;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Tb);break}}targetAtContent(){this.updateTarget=Sb,this.unbind=wb}createBehavior(t){return new Ib(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Ib{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){Eo.setEvent(t);const e=this.binding(this.source,this.context);Eo.setEvent(null),e!==!0&&t.preventDefault()}}let ka=null;class Wl{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ka=this}static borrow(t){const e=ka||new Wl;return e.directives=t,e.reset(),ka=null,e}}function Rb(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let c=0;c<e;++c)l+=s[c](r,a);return l},n=new ql(o);return n.targetName=t,n}const Db=jl.length;function Ou(i,t){const e=t.split(Du);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(jl);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(i.directives[c]),l=r.substring(a+Db)}l!==""&&s.push(l)}return s}function yd(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Ou(i,a);let c=null;l===null?e&&(c=new ql(()=>a),c.targetName=r.name):c=Rb(l),c!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(c))}}function Eb(i,t,e){const s=Ou(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function Ab(i,t){const e=i.content;document.adoptNode(e);const s=Wl.borrow(t);yd(s,i,!0);const o=s.behaviorFactories;s.reset();const n=K.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:yd(s,r);break;case 3:Eb(s,r,n);break;case 8:K.isMarker(r)&&s.addFactory(t[K.extractDirectiveIndexFromMarker(r)])}let a=0;(K.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const Ca=document.createRange();class Vu{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){Ca.setStartBefore(t[0].firstChild),Ca.setEndAfter(t[t.length-1].lastChild),Ca.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class xd{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=K.createHTML(d);const b=c.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(c=b)}else c=d;const u=Ab(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=K.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let c=s.length;r<c;++r){const d=s[r],u=d.targetIndex;for(;l!==null;)if(a===u){o[r]=d.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)o[r]=c[d].createBehavior(t)}return new Vu(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,ko),o.appendTo(e),o}}const Ob=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function D(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof xd){const l=a;a=()=>l}if(typeof a=="function"&&(a=new ql(a)),a instanceof Au){const l=Ob.exec(r);l!==null&&(a.targetName=l[2])}a instanceof yr?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new xd(s,e)}class le{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}le.create=(()=>{if(K.supportsAdoptedStyleSheets){const i=new Map;return t=>new Vb(t,i)}return i=>new Pb(i)})();function Gl(i){return i.map(t=>t instanceof le?Gl(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Lu(i){return i.map(t=>t instanceof le?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let _u=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Pu=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(K.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),_u=(i,t)=>{i.adoptedStyleSheets.push(...t)},Pu=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class Vb extends le{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Lu(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=Gl(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){_u(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Pu(t,this.styleSheets),super.removeStylesFrom(t)}}let Lb=0;function _b(){return`fast-style-class-${++Lb}`}class Pb extends le{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Lu(t),this.styleSheets=Gl(t),this.styleClass=_b()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Zn=Object.freeze({locate:Iu()}),zo={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},N={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Kn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=zo)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return Z.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||K.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;K.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":K.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(Zn.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new Kn(t,c)):s.push(new Kn(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),Zn.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const wd={mode:"open"},$d={},sl=Do.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class xr{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=Kn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];o[a]=c.attribute,n[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?wd:e.shadowOptions===null?void 0:Object.assign(Object.assign({},wd),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?$d:Object.assign(Object.assign({},$d),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?le.create(e.styles):e.styles instanceof le?e.styles:le.create([e.styles])}get isDefined(){return!!sl.getByType(this.type)}define(t=customElements){const e=this.type;if(sl.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)Z.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}xr.forType=sl.getByType;const Hu=new WeakMap,Hb={bubbles:!0,composed:!0,cancelable:!0};function Sa(i){return i.shadowRoot||Hu.get(i)||null}class Xl extends Eu{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Hu.set(t,n)}const o=Z.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,c=t[l];c!==void 0&&(delete t[l],n[l]=c)}}}get isConnected(){return Z.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,Z.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=Sa(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=Sa(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,ko)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,ko);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,ko);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},Hb),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=Sa(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||K.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=xr.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Xl(t,s)}}function kd(i){return class extends i{constructor(){super(),Xl.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const wr=Object.assign(kd(HTMLElement),{from(i){return kd(i)},define(i,t){return new xr(i,t).define().type}});class Yl{createCSS(){return""}createBehavior(){}}function Mu(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof Yl){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof le||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function I(i,...t){const{styles:e,behaviors:s}=Mu(i,t),o=le.create(e);return s.length&&o.withBehaviors(...s),o}class Mb extends Yl{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=le.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function Ce(i,...t){const{styles:e,behaviors:s}=Mu(i,t);return new Mb(e,s)}function Ue(i,t,e){return{index:i,removed:t,addedCount:e}}const Nu=0,Bu=1,ol=2,nl=3;function Nb(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let b=1;b<a;++b)i[t+b-1]===s[o+u-1]?l[u][b]=l[u-1][b-1]:(c=l[u-1][b]+1,d=l[u][b-1]+1,l[u][b]=c<d?c:d);return l}function Bb(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(ol),e--;continue}if(e===0){o.push(nl),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(Nu):(o.push(Bu),s=n),t--,e--):l===r?(o.push(nl),t--,s=r):(o.push(ol),e--,s=a)}return o.reverse(),o}function zb(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function jb(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function Ub(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function zu(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=zb(i,s,l)),e===i.length&&n===s.length&&(a=jb(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return as;if(t===e){const y=Ue(t,[],0);for(;o<n;)y.removed.push(s[o++]);return[y]}else if(o===n)return[Ue(t,[],e-t)];const c=Bb(Nb(i,t,e,s,o,n)),d=[];let u,b=t,w=o;for(let y=0;y<c.length;++y)switch(c[y]){case Nu:u!==void 0&&(d.push(u),u=void 0),b++,w++;break;case Bu:u===void 0&&(u=Ue(b,[],0)),u.addedCount++,b++,u.removed.push(s[w]),w++;break;case ol:u===void 0&&(u=Ue(b,[],0)),u.addedCount++,b++;break;case nl:u===void 0&&(u=Ue(b,[],0)),u.removed.push(s[w]),w++;break}return u!==void 0&&d.push(u),d}const Cd=Array.prototype.push;function qb(i,t,e,s){const o=Ue(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const c=Ub(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(c>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-c;const d=o.removed.length+l.removed.length-c;if(!o.addedCount&&!d)n=!0;else{let u=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);Cd.apply(b,u),u=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);Cd.apply(u,b)}o.removed=u,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const d=o.addedCount-o.removed.length;l.index+=d,r+=d}}n||i.push(o)}function Wb(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];qb(t,o.index,o.removed,o.addedCount)}return t}function Gb(i,t){let e=[];const s=Wb(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(zu(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let Sd=!1;function Fa(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class Xb extends Qn{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,K.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,K.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?Gb(this.source,t):zu(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function Yb(){if(Sd)return;Sd=!0,Z.setArrayObserverFactory(l=>new Xb(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,c=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Ue(this.length,[c],0)),c},i.push=function(){const l=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Fa(Ue(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.shift=function(){const l=this.length>0,c=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(Ue(0,[c],0)),c},i.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=n.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Fa(Ue(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(Fa(Ue(0,[],arguments.length),this)),l}}class Jb{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function ut(i){return new Ul("fast-ref",Jb,i)}const ju=i=>typeof i=="function",Qb=()=>null;function Fd(i){return i===void 0?Qb:ju(i)?i:()=>i}function Et(i,t,e){const s=ju(i)?i:()=>i,o=Fd(t),n=Fd(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const Td=Object.freeze({positioning:!1,recycle:!0});function Zb(i,t,e,s){i.bind(t[e],s)}function Kb(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class tv{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Zb,this.itemsBindingObserver=Z.binding(e,this,s),this.templateBindingObserver=Z.binding(o,this,n),r.positioning&&(this.bindView=Kb)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=as;return}const e=this.itemsObserver,s=this.itemsObserver=Z.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,b=t.length;u<b;++u){const w=t[u],y=w.removed;let k=0,S=w.index;const Q=S+w.addedCount,B=s.splice(w.index,y.length),A=d=l.length+B.length;for(;S<Q;++S){const q=s[S],kt=q?q.firstChild:this.location;let X;a&&d>0?(k<=A&&B.length>0?(X=B[k],k++):(X=l[c],c++),d--):X=r.create(),s.splice(S,0,X),o(X,n,S,e),X.insertBefore(kt)}B[k]&&l.push(...B.slice(k))}for(let u=c,b=l.length;u<b;++u)l[u].dispose();if(this.options.positioning)for(let u=0,b=s.length;u<b;++u){const w=s[u].context;w.length=b,w.index=u}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Vu.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=o.create();r(u,e,d,s),l[d]=u,u.insertBefore(n)}}else{let d=0;for(;d<a;++d)if(d<c){const b=l[d];r(b,e,d,s)}else{const b=o.create();r(b,e,d,s),l.push(b),b.insertBefore(n)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class Jl extends yr{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=K.createBlockPlaceholder,Yb(),this.isItemsBindingVolatile=Z.isVolatileBinding(t),this.isTemplateBindingVolatile=Z.isVolatileBinding(e)}createBehavior(t){return new tv(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function As(i,t,e=Td){const s=typeof t=="function"?t:()=>t;return new Jl(i,s,Object.assign(Object.assign({},Td),e))}function gi(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class Uu{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=Z.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(as),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class ev extends Uu{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function St(i){return typeof i=="string"&&(i={property:i}),new Ul("fast-slotted",ev,i)}class iv extends Uu{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function $r(i){return typeof i=="string"&&(i={property:i}),new Ul("fast-children",iv,i)}class be{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ce=(i,t)=>D`
    <span
        part="end"
        ${ut("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${ut("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,de=(i,t)=>D`
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
`,sv=D`
    <span part="end" ${ut("endContainer")}>
        <slot
            name="end"
            ${ut("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,ov=D`
    <span part="start" ${ut("startContainer")}>
        <slot
            name="start"
            ${ut("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,nv=(i,t)=>D`
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
            ${de(i,t)}
            ${ce(i,t)}
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
***************************************************************************** */function h(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const Ta=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=Ta.get(e);s===void 0&&Ta.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=Ta.get(t);if(e!==void 0)return e.get(i)});class rv{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Wu(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new De(o,t,e))}}function lo(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],Gu(o)||(t[o]=i[o]);return t}const av=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new De(i,1,i)},transient(i){return new De(i,2,i)}}),Ia=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:av.singleton})}),Id=new Map;function Rd(i){return t=>Reflect.getOwnMetadata(i,t)}let Dd=null;const Dt=Object.freeze({createContainer(i){return new Co(null,Object.assign({},Ia.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:Dt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(qu,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||Dt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new Co(i,Object.assign({},Ia.default,t,{parentLocator:Dt.findParentContainer})):Dd||(Dd=new Co(null,Object.assign({},Ia.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Rd("design:paramtypes"),getAnnotationParamtypes:Rd("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Id.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=Dt.getDesignParamtypes(i),o=Dt.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=lo(Dt.getDependencies(n)):t=[]}else t=lo(o);else if(o===void 0)t=lo(s);else{t=lo(s);let n=o.length,r;for(let c=0;c<n;++c)r=o[c],r!==void 0&&(t[c]=r);const a=Object.keys(o);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],Gu(l)||(t[l]=o[l])}}else t=lo(e);Id.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?Dt.findResponsibleContainer(this):Dt.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof wr)){const a=this.$fastController,l=()=>{const d=Dt.findResponsibleContainer(this).get(e),u=this[o];d!==u&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Vd,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)Dt.defineProperty(r,a,n,o);else{const c=Dt.getOrCreateAnnotationParamTypes(r);c[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new rv(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=Dt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)Dt.defineProperty(t,e,i[0]);else{const o=s?Dt.getOrCreateAnnotationParamTypes(s.value):Dt.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return Ao.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=cv){return i.register=function(s){return Ao.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),lv=Dt.createInterface("Container");Dt.inject;const cv={scoped:!1};class De{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Ed(i){return this.get(i)}function dv(i,t){return t(i)}class hv{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Ed,t)):s=new this.Type(...this.dependencies.map(Ed,t),...e),this.transformers==null?s:this.transformers.reduce(dv,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const uv={$isResolver:!0,resolve(i,t){return t}};function Hn(i){return typeof i.register=="function"}function fv(i){return Hn(i)&&typeof i.registerInRequestor=="boolean"}function Ad(i){return fv(i)&&i.registerInRequestor}function pv(i){return i.prototype!==void 0}const gv=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),qu="__DI_LOCATE_PARENT__",Ra=new Map;class Co{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(lv,uv),t instanceof Node&&t.addEventListener(qu,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(e=t[l],!!Ld(e))if(Hn(e))e.register(this,a);else if(pv(e))Ao.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Ld(o)&&(Hn(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){pn(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof De&&o.strategy===4?o.state.push(e):s.set(t,new De(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(pn(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=Ad(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(pn(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=Ad(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){pn(t);const s=this;let o=s,n;if(e){let r=as;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(Od(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return as}else return Od(n,o,s);return as}getFactory(t){let e=Ra.get(t);if(e===void 0){if(mv(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ra.set(t,e=new hv(t,Dt.getDependencies(t)))}return e}registerFactory(t,e){Ra.set(t,e)}createChild(t){return new Co(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(gv.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(Hn(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const Da=new WeakMap;function Wu(i){return function(t,e,s){if(Da.has(s))return Da.get(s);const o=i(t,e,s);return Da.set(s,o),o}}const Ao=Object.freeze({instance(i,t){return new De(i,0,t)},singleton(i,t){return new De(i,1,t)},transient(i,t){return new De(i,2,t)},callback(i,t){return new De(i,3,t)},cachedCallback(i,t){return new De(i,3,Wu(t))},aliasTo(i,t){return new De(t,5,i)}});function pn(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Od(i,t,e){if(i instanceof De&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const Vd="(anonymous)";function Ld(i){return typeof i=="object"&&i!==null||typeof i=="function"}const mv=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),gn={};function Gu(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=gn[i];if(t!==void 0)return t;const e=i.length;if(e===0)return gn[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return gn[i]=!1;return gn[i]=!0}default:return!1}}function _d(i){return`${i.toLowerCase()}:presentation`}const mn=new Map,Xu=Object.freeze({define(i,t,e){const s=_d(i);mn.get(s)===void 0?mn.set(s,t):mn.set(s,!1),e.register(Ao.instance(s,t))},forTag(i,t){const e=_d(i),s=mn.get(e);return s===!1?Dt.findResponsibleContainer(t).get(e):s||null}});class bv{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?le.create(e):e instanceof le?e:le.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class tt extends wr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Xu.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new vv(this===tt?class extends tt{}:this,t,e)}}h([x],tt.prototype,"template",void 0);h([x],tt.prototype,"styles",void 0);function co(i,t,e){return typeof i=="function"?i(t,e):i}class vv{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new bv(co(s.template,a,s),co(s.styles,a,s));a.definePresentation(l);let c=co(s.shadowOptions,a,s);a.shadowRootMode&&(c?o.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:co(s.elementOptions,a,s),shadowOptions:c,attributes:co(s.attributes,a,s)})}})}}function Ft(i,...t){const e=Zn.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Zn.locate(s).forEach(n=>e.push(n))})}class cs extends tt{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([f({attribute:"heading-level",mode:"fromView",converter:N})],cs.prototype,"headinglevel",void 0);h([f({mode:"boolean"})],cs.prototype,"expanded",void 0);h([f],cs.prototype,"id",void 0);Ft(cs,be);const yv=(i,t)=>D`
    <template>
        <slot ${St({property:"accordionItems",filter:gi()})}></slot>
        <slot name="item" part="item" ${St("accordionItems")}></slot>
    </template>
`,Lt={horizontal:"horizontal",vertical:"vertical"};function xv(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function wv(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ms(...i){return i.every(t=>t instanceof HTMLElement)}function $v(i,t){return!i||!t||!Ms(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function kv(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Zi;function Cv(){if(typeof Zi=="boolean")return Zi;if(!wv())return Zi=!1,Zi;const i=document.createElement("style"),t=kv();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Zi=!0}catch{Zi=!1}finally{document.head.removeChild(i)}return Zi}const Pd="focus",Hd="focusin",Ns="focusout",Bs="keydown",Md="resize",Nd="scroll";var Bd;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Bd||(Bd={}));const _e="ArrowDown",Hi="ArrowLeft",Mi="ArrowRight",Pe="ArrowUp",bi="Enter",Js="Escape",si="Home",oi="End",Sv="F2",Fv="PageDown",Tv="PageUp",gs=" ",kr="Tab",Fs={ArrowDown:_e,ArrowLeft:Hi,ArrowRight:Mi,ArrowUp:Pe};var xt;(function(i){i.ltr="ltr",i.rtl="rtl"})(xt||(xt={}));function Iv(i,t,e){return e<i?t:e>t?i:e}function Cr(i,t,e){return Math.min(Math.max(e,i),t)}function bn(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let Rv=0;function Oo(i=""){return`${i}${Rv++}`}var g;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(g||(g={}));const zd={single:"single",multi:"multi"};class Ql extends tt{constructor(){super(...arguments),this.expandmode=zd.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof cs&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Pe:t.preventDefault(),this.adjust(-1);break;case _e:t.preventDefault(),this.adjust(1);break;case si:this.activeItemIndex=0,this.focusItem();break;case oi:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===zd.single}adjust(t){this.activeItemIndex=Iv(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof cs&&t.expandbutton.focus()}}h([f({attribute:"expand-mode"})],Ql.prototype,"expandmode",void 0);h([x],Ql.prototype,"accordionItems",void 0);const Yu=(i,t)=>D`
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
        ${de(i,t)}
        <span class="content" part="content">
            <slot ${St("defaultSlottedContent")}></slot>
        </span>
        ${ce(i,t)}
    </a>
`;class wt{}h([f({attribute:"aria-atomic"})],wt.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],wt.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],wt.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],wt.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],wt.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],wt.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],wt.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],wt.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],wt.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],wt.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],wt.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],wt.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],wt.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],wt.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],wt.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],wt.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],wt.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],wt.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],wt.prototype,"ariaRoledescription",void 0);let Se=class extends tt{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([f],Se.prototype,"download",void 0);h([f],Se.prototype,"href",void 0);h([f],Se.prototype,"hreflang",void 0);h([f],Se.prototype,"ping",void 0);h([f],Se.prototype,"referrerpolicy",void 0);h([f],Se.prototype,"rel",void 0);h([f],Se.prototype,"target",void 0);h([f],Se.prototype,"type",void 0);h([x],Se.prototype,"defaultSlottedContent",void 0);class Sr{}h([f({attribute:"aria-expanded"})],Sr.prototype,"ariaExpanded",void 0);Ft(Sr,wt);Ft(Se,be,Sr);const Dv=(i,t)=>D`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${Et(e=>e.initialLayoutComplete,D`
                <slot></slot>
            `)}
    </template>
`,ds=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?xt.rtl:xt.ltr};class Ev{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{pi.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class J extends tt{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=xt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(J.intersectionService.requestPosition(this,this.handleIntersection),J.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&J.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,J.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&J.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&J.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=ds(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const w=ds(this);if(w!==this.currentDirection){this.currentDirection=w,this.initialize();return}this.currentDirection===xt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,d,u)<r)&&(t=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Md,this.update,{passive:!0}),window.addEventListener(Nd,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Md,this.update),window.removeEventListener(Nd,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),K.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}J.intersectionService=new Ev;h([f],J.prototype,"anchor",void 0);h([f],J.prototype,"viewport",void 0);h([f({attribute:"horizontal-positioning-mode"})],J.prototype,"horizontalPositioningMode",void 0);h([f({attribute:"horizontal-default-position"})],J.prototype,"horizontalDefaultPosition",void 0);h([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],J.prototype,"horizontalViewportLock",void 0);h([f({attribute:"horizontal-inset",mode:"boolean"})],J.prototype,"horizontalInset",void 0);h([f({attribute:"horizontal-threshold"})],J.prototype,"horizontalThreshold",void 0);h([f({attribute:"horizontal-scaling"})],J.prototype,"horizontalScaling",void 0);h([f({attribute:"vertical-positioning-mode"})],J.prototype,"verticalPositioningMode",void 0);h([f({attribute:"vertical-default-position"})],J.prototype,"verticalDefaultPosition",void 0);h([f({attribute:"vertical-viewport-lock",mode:"boolean"})],J.prototype,"verticalViewportLock",void 0);h([f({attribute:"vertical-inset",mode:"boolean"})],J.prototype,"verticalInset",void 0);h([f({attribute:"vertical-threshold"})],J.prototype,"verticalThreshold",void 0);h([f({attribute:"vertical-scaling"})],J.prototype,"verticalScaling",void 0);h([f({attribute:"fixed-placement",mode:"boolean"})],J.prototype,"fixedPlacement",void 0);h([f({attribute:"auto-update-mode"})],J.prototype,"autoUpdateMode",void 0);h([x],J.prototype,"anchorElement",void 0);h([x],J.prototype,"viewportElement",void 0);h([x],J.prototype,"initialLayoutComplete",void 0);const Av=(i,t)=>D`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let jo=class extends tt{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};h([f({attribute:"fill"})],jo.prototype,"fill",void 0);h([f({attribute:"color"})],jo.prototype,"color",void 0);h([f({mode:"boolean"})],jo.prototype,"circular",void 0);const Ov=(i,t)=>D`
    <div role="listitem" class="listitem" part="listitem">
        ${Et(e=>e.href&&e.href.length>0,D`
                ${Yu(i,t)}
            `)}
        ${Et(e=>!e.href,D`
                ${de(i,t)}
                <slot></slot>
                ${ce(i,t)}
            `)}
        ${Et(e=>e.separator,D`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Vo extends Se{constructor(){super(...arguments),this.separator=!0}}h([x],Vo.prototype,"separator",void 0);Ft(Vo,be,Sr);const Vv=(i,t)=>D`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${St({property:"slottedBreadcrumbItems",filter:gi()})}
            ></slot>
        </div>
    </template>
`;class Ju extends tt{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof Vo&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof Vo?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([x],Ju.prototype,"slottedBreadcrumbItems",void 0);const Lv=(i,t)=>D`
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
        ${de(i,t)}
        <span class="content" part="content">
            <slot ${St("defaultSlottedContent")}></slot>
        </span>
        ${ce(i,t)}
    </button>
`,jd="form-associated-proxy",Ud="ElementInternals",qd=Ud in window&&"setFormValue"in window[Ud].prototype,Wd=new WeakMap;function vi(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return qd}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return as}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),K.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),K.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!qd)return null;let e=Wd.get(this);return e||(e=this.attachInternals(),Wd.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",jd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",jd)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case bi:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return f({mode:"boolean"})(t.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),f({attribute:"current-value"})(t.prototype,"currentValue"),f(t.prototype,"name"),f({mode:"boolean"})(t.prototype,"required"),x(t.prototype,"value"),t}function Zl(i){class t extends vi(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:zo})(e.prototype,"currentChecked"),x(e.prototype,"defaultChecked"),x(e.prototype,"checked"),e}class _v extends tt{}class Pv extends vi(_v){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Fe=class extends Pv{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([f({mode:"boolean"})],Fe.prototype,"autofocus",void 0);h([f({attribute:"form"})],Fe.prototype,"formId",void 0);h([f],Fe.prototype,"formaction",void 0);h([f],Fe.prototype,"formenctype",void 0);h([f],Fe.prototype,"formmethod",void 0);h([f({mode:"boolean"})],Fe.prototype,"formnovalidate",void 0);h([f],Fe.prototype,"formtarget",void 0);h([f],Fe.prototype,"type",void 0);h([x],Fe.prototype,"defaultSlottedContent",void 0);class Fr{}h([f({attribute:"aria-expanded"})],Fr.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],Fr.prototype,"ariaPressed",void 0);Ft(Fr,wt);Ft(Fe,be,Fr);class Hv{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let He=class extends tt{constructor(){super(...arguments),this.dateFormatter=new Hv,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?n:l>o?r:t,u=l<1?n.length+l:l>o?l-o:l,b=`${c}-${u}-${d}`,w=this.dateInString(b,this.disabledDates),y=this.dateInString(b,this.selectedDates),k={day:u,month:c,year:d,disabled:w,selected:y},S=a[a.length-1];a.length===0||S.length%7===0?a.push([k]):S.push(k),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,c=this.month!==o;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===bi&&this.handleDateSelect(t,e),!0}};h([f({mode:"boolean"})],He.prototype,"readonly",void 0);h([f],He.prototype,"locale",void 0);h([f({converter:N})],He.prototype,"month",void 0);h([f({converter:N})],He.prototype,"year",void 0);h([f({attribute:"day-format",mode:"fromView"})],He.prototype,"dayFormat",void 0);h([f({attribute:"weekday-format",mode:"fromView"})],He.prototype,"weekdayFormat",void 0);h([f({attribute:"month-format",mode:"fromView"})],He.prototype,"monthFormat",void 0);h([f({attribute:"year-format",mode:"fromView"})],He.prototype,"yearFormat",void 0);h([f({attribute:"min-weeks",converter:N})],He.prototype,"minWeeks",void 0);h([f({attribute:"disabled-dates"})],He.prototype,"disabledDates",void 0);h([f({attribute:"selected-dates"})],He.prototype,"selectedDates",void 0);const vn={none:"none",default:"default",sticky:"sticky"},Ti={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},So={default:"default",header:"header",stickyHeader:"sticky-header"};class Yt extends tt{constructor(){super(...arguments),this.rowType=So.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Jl(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ns,this.handleFocusout),this.addEventListener(Bs,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ns,this.handleFocusout),this.removeEventListener(Bs,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Hi:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Mi:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case si:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case oi:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===So.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===So.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],Yt.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],Yt.prototype,"rowType",void 0);h([x],Yt.prototype,"rowData",void 0);h([x],Yt.prototype,"columnDefinitions",void 0);h([x],Yt.prototype,"cellItemTemplate",void 0);h([x],Yt.prototype,"headerCellItemTemplate",void 0);h([x],Yt.prototype,"rowIndex",void 0);h([x],Yt.prototype,"isActiveRow",void 0);h([x],Yt.prototype,"activeCellItemTemplate",void 0);h([x],Yt.prototype,"defaultCellItemTemplate",void 0);h([x],Yt.prototype,"defaultHeaderCellItemTemplate",void 0);h([x],Yt.prototype,"cellElements",void 0);function Mv(i){const t=i.tagFor(Yt);return D`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const Nv=(i,t)=>{const e=Mv(i),s=i.tagFor(Yt);return D`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${$r({property:"rowElements",filter:gi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class jt extends tt{constructor(){super(),this.noTabbing=!1,this.generateHeader=vn.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,K.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=jt.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=jt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Jl(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Pd,this.handleFocus),this.addEventListener(Bs,this.handleKeydown),this.addEventListener(Ns,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),K.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Pd,this.handleFocus),this.removeEventListener(Bs,this.handleKeydown),this.removeEventListener(Ns,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case Pe:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case _e:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Tv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Fv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===vn.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case si:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case oi:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,K.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==vn.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===vn.sticky?So.stickyHeader:So.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}jt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],jt.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],jt.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],jt.prototype,"gridTemplateColumns",void 0);h([x],jt.prototype,"rowsData",void 0);h([x],jt.prototype,"columnDefinitions",void 0);h([x],jt.prototype,"rowItemTemplate",void 0);h([x],jt.prototype,"cellItemTemplate",void 0);h([x],jt.prototype,"headerCellItemTemplate",void 0);h([x],jt.prototype,"focusRowIndex",void 0);h([x],jt.prototype,"focusColumnIndex",void 0);h([x],jt.prototype,"defaultRowItemTemplate",void 0);h([x],jt.prototype,"rowElementTag",void 0);h([x],jt.prototype,"rowElements",void 0);const Bv=D`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,zv=D`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class yi extends tt{constructor(){super(...arguments),this.cellType=Ti.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Hd,this.handleFocusin),this.addEventListener(Ns,this.handleFocusout),this.addEventListener(Bs,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Hd,this.handleFocusin),this.removeEventListener(Ns,this.handleFocusout),this.removeEventListener(Bs,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Ti.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===Ti.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Ti.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case bi:case Sv:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Ti.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Js:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Ti.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=zv.render(this,this);break;case void 0:case Ti.rowHeader:case Ti.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Bv.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],yi.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],yi.prototype,"gridColumn",void 0);h([x],yi.prototype,"rowData",void 0);h([x],yi.prototype,"columnDefinition",void 0);function jv(i){const t=i.tagFor(yi);return D`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function Uv(i){const t=i.tagFor(yi);return D`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const qv=(i,t)=>{const e=jv(i),s=Uv(i);return D`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${$r({property:"cellElements",filter:gi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${St("slottedCellElements")}></slot>
        </template>
    `},Wv=(i,t)=>D`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Gv=D`
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
`,Xv=i=>{const t=i.tagFor(yi);return D`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},Yv=(i,t)=>{const e=i.tagFor(yi);return D`
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
    `},Jv=(i,t)=>{const e=i.tagFor(Yt);return D`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${As(s=>s,Yv(i,t),{positioning:!0})}
        </${e}>
    `},Qv=(i,t)=>{const e=i.tagFor(jt),s=i.tagFor(Yt);return D`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${As(o=>o.getWeekdayText(),Xv(i),{positioning:!0})}
        </${s}>
        ${As(o=>o.getDays(),Jv(i,t))}
    </${e}>
`},Zv=i=>D`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${As(t=>t.getWeekdayText(),D`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${As(t=>t.getDays(),D`
                    <div class="week">
                        ${As(t=>t,D`
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
    `,Kv=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return D`
        <template>
            ${ov}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${Et(n=>n.readonly,Zv(o),Qv(i,o))}
            ${sv}
        </template>
    `},ty=(i,t)=>D`
    <slot></slot>
`;let Qu=class extends tt{};const ey=(i,t)=>D`
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
            <slot ${St("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class iy extends tt{}class sy extends Zl(iy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Tr extends sy{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case gs:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],Tr.prototype,"readOnly",void 0);h([x],Tr.prototype,"defaultSlottedNodes",void 0);h([x],Tr.prototype,"indeterminate",void 0);function Zu(i){return Ms(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class ni extends tt{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),Z.notify(this,"value")}get value(){var t;return Z.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([x],ni.prototype,"checked",void 0);h([x],ni.prototype,"content",void 0);h([x],ni.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],ni.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],ni.prototype,"selectedAttribute",void 0);h([x],ni.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],ni.prototype,"initialValue",void 0);class Qs{}h([x],Qs.prototype,"ariaChecked",void 0);h([x],Qs.prototype,"ariaPosInSet",void 0);h([x],Qs.prototype,"ariaSelected",void 0);h([x],Qs.prototype,"ariaSetSize",void 0);Ft(Qs,wt);Ft(ni,be,Qs);let ve=class Mn extends tt{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return Z.track(this,"options"),this._options}set options(t){this._options=t,Z.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{Mn.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Mn.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case si:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case _e:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Pe:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case oi:{t.preventDefault(),this.selectLastOption();break}case kr:return this.focusAndScrollOptionIntoView(),!0;case bi:case Js:return!0;case gs:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(Mn.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=Z.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=xv(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(Zu(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=Oo("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};ve.slottedOptionFilter=i=>Zu(i)&&!i.hidden;ve.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],ve.prototype,"disabled",void 0);h([x],ve.prototype,"selectedIndex",void 0);h([x],ve.prototype,"selectedOptions",void 0);h([x],ve.prototype,"slottedOptions",void 0);h([x],ve.prototype,"typeaheadBuffer",void 0);class zi{}h([x],zi.prototype,"ariaActiveDescendant",void 0);h([x],zi.prototype,"ariaDisabled",void 0);h([x],zi.prototype,"ariaExpanded",void 0);h([x],zi.prototype,"ariaMultiSelectable",void 0);Ft(zi,wt);Ft(ve,zi);const Os={above:"above",below:"below"};class oy extends ve{}class ny extends vi(oy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const yn={inline:"inline",list:"list",both:"both",none:"none"};let xi=class extends ny{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Oo("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===yn.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===yn.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===yn.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),K.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return Z.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,Z.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return Z.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),Z.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===yn.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=Cr(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Os.above:Os.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Os.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([f({attribute:"autocomplete",mode:"fromView"})],xi.prototype,"autocomplete",void 0);h([x],xi.prototype,"maxHeight",void 0);h([f({attribute:"open",mode:"boolean"})],xi.prototype,"open",void 0);h([f],xi.prototype,"placeholder",void 0);h([f({attribute:"position"})],xi.prototype,"positionAttribute",void 0);h([x],xi.prototype,"position",void 0);class Ir{}h([x],Ir.prototype,"ariaAutoComplete",void 0);h([x],Ir.prototype,"ariaControls",void 0);Ft(Ir,zi);Ft(xi,be,Ir);const ry=(i,t)=>D`
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
            ${de(i,t)}
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
            ${ce(i,t)}
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
                ${St({filter:ve.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function tr(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function ay(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=tr(e)}return!1}const di=document.createElement("div");function ly(i){return i instanceof wr}class Kl{setProperty(t,e){K.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){K.queueUpdate(()=>this.target.removeProperty(t))}}class cy extends Kl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(le.create([e]))}}class dy extends Kl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class hy extends Kl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Ku{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),Z.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),K.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),K.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}h([x],Ku.prototype,"target",void 0);class uy{constructor(t){this.target=t.style}setProperty(t,e){K.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){K.queueUpdate(()=>this.target.removeProperty(t))}}class qt{setProperty(t,e){qt.properties[t]=e;for(const s of qt.roots.values())Ts.getOrCreate(qt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete qt.properties[t];for(const e of qt.roots.values())Ts.getOrCreate(qt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=qt;if(!e.has(t)){e.add(t);const s=Ts.getOrCreate(this.normalizeRoot(t));for(const o in qt.properties)s.setProperty(o,qt.properties[o])}}static unregisterRoot(t){const{roots:e}=qt;if(e.has(t)){e.delete(t);const s=Ts.getOrCreate(qt.normalizeRoot(t));for(const o in qt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===di?document:t}}qt.roots=new Set;qt.properties={};const Ea=new WeakMap,fy=K.supportsAdoptedStyleSheets?cy:Ku,Ts=Object.freeze({getOrCreate(i){if(Ea.has(i))return Ea.get(i);let t;return i===di?t=new qt:i instanceof Document?t=K.supportsAdoptedStyleSheets?new dy:new hy:ly(i)?t=new fy(i):t=new uy(i),Ea.set(i,t),t}});class oe extends Yl{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=oe.uniqueId(),oe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new oe({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return oe.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=_t.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof oe&&(e=this.alias(e)),_t.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),_t.existsFor(t)&&_t.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(di,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!_t.existsFor(e)&&_t.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}oe.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();oe.tokensById=new Map;class py{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){Ts.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(_t.getOrCreate(e).get(t)))}remove(t,e){Ts.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class gy{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=Z.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,ko))}}class my{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),Z.getNotifier(this).notify(t.id))}get(t){return Z.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ho=new WeakMap,uo=new WeakMap;class _t{constructor(t){this.target=t,this.store=new my,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=oe.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},ho.set(t,this),Z.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof wr?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ho.get(t)||new _t(t)}static existsFor(t){return ho.has(t)}static findParent(t){if(di!==t.target){let e=tr(t.target);for(;e!==null;){if(ho.has(e))return ho.get(e);e=tr(e)}return _t.getOrCreate(di)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==di?_t.getOrCreate(di):null}while(s!==null);return null}get parent(){return uo.get(this)||null}updateCSSTokenReflection(t,e){if(oe.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=_t.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){oe.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),oe.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=_t.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&uo.get(this).removeChild(this)}appendChild(t){t.parent&&uo.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));uo.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),Z.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),Z.getNotifier(this.store).unsubscribe(t),t.parent===this?uo.delete(t):!1}contains(t){return ay(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),_t.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),_t.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=oe.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);oe.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new gy(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}_t.cssCustomPropertyReflector=new py;h([x],_t.prototype,"children",void 0);function by(i){return oe.from(i)}const mt=Object.freeze({create:by,notifyConnection(i){return!i.isConnected||!_t.existsFor(i)?!1:(_t.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!_t.existsFor(i)?!1:(_t.getOrCreate(i).unbind(),!0)},registerRoot(i=di){qt.registerRoot(i)},unregisterRoot(i=di){qt.unregisterRoot(i)}}),Aa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Oa=new Map,Nn=new Map;let Vs=null;const fo=Dt.createInterface(i=>i.cachedCallback(t=>(Vs===null&&(Vs=new ef(null,t)),Vs))),tf=Object.freeze({tagFor(i){return Nn.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||Dt.findResponsibleContainer(i).get(fo)},getOrCreate(i){if(!i)return Vs===null&&(Vs=Dt.getOrCreateDOMContainer().get(fo)),Vs;const t=i.$$designSystem$$;if(t)return t;const e=Dt.getOrCreateDOMContainer(i);if(e.has(fo,!1))return e.get(fo);{const s=new ef(i,e);return e.register(Ao.instance(fo,s)),s}}});function vy(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class ef{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Aa.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=vy(a,l,c),{name:u,callback:b,baseClass:w}=d;let{type:y}=d,k=u,S=Oa.get(k),Q=!0;for(;S;){const B=o(k,y,S);switch(B){case Aa.ignoreDuplicate:return;case Aa.definitionCallbackOnly:Q=!1,S=void 0;break;default:k=B,S=Oa.get(k);break}}Q&&((Nn.has(y)||y===tt)&&(y=class extends y{}),Oa.set(k,y),Nn.set(y,k),w&&Nn.set(w,k)),s.push(new yy(e,k,y,n,b,Q))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&mt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class yy{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){Xu.define(this.name,t,this.container)}defineElement(t){this.definition=new xr(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return tf.tagFor(t)}}const xy=(i,t)=>D`
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
*/var sf=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],wy=sf.join(","),of=typeof Element>"u",Lo=of?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,rl=!of&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},$y=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},nf=function(t){return t.tagName==="INPUT"},ky=function(t){return nf(t)&&t.type==="hidden"},Cy=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},Sy=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},Fy=function(t){if(!t.name)return!0;var e=t.form||rl(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=Sy(o,t.form);return!n||n===t},Ty=function(t){return nf(t)&&t.type==="radio"},Iy=function(t){return Ty(t)&&!Fy(t)},Gd=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},Ry=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Lo.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(Lo.call(r,"details:not([open]) *"))return!0;var a=rl(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var c=t;t;){var d=t.parentElement,u=rl(t);if(d&&!d.shadowRoot&&o(d)===!0)return Gd(t);t.assignedSlot?t=t.assignedSlot:!d&&u!==t.ownerDocument?t=u.host:t=d}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return Gd(t);return!1},Dy=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return Lo.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},rf=function(t,e){return!(e.disabled||ky(e)||Ry(e,t)||Cy(e)||Dy(e))},Ey=function(t,e){return!(Iy(e)||$y(e)<0||!rf(t,e))},Xd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Lo.call(t,wy)===!1?!1:Ey(e,t)},Ay=sf.concat("iframe").join(","),Yd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Lo.call(t,Ay)===!1?!1:rf(e,t)};class Oe extends tt{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Js:this.dismiss(),t.preventDefault();break;case kr:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Oe.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),K.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=Z.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:Xd(e)||Oe.isFocusableFastElement(e)&&Oe.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Oe.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>Xd(o))}}h([f({mode:"boolean"})],Oe.prototype,"modal",void 0);h([f({mode:"boolean"})],Oe.prototype,"hidden",void 0);h([f({attribute:"trap-focus",mode:"boolean"})],Oe.prototype,"trapFocus",void 0);h([f({attribute:"aria-describedby"})],Oe.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-labelledby"})],Oe.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Oe.prototype,"ariaLabel",void 0);const Oy=(i,t)=>D`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,Vy={separator:"separator",presentation:"presentation"};class Rr extends tt{constructor(){super(...arguments),this.role=Vy.separator,this.orientation=Lt.horizontal}}h([f],Rr.prototype,"role",void 0);h([f],Rr.prototype,"orientation",void 0);const al={next:"next",previous:"previous"},Ly=(i,t)=>D`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${Et(e=>e.direction===al.next,D`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${Et(e=>e.direction===al.previous,D`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class Dr extends tt{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=al.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}h([f({mode:"boolean"})],Dr.prototype,"disabled",void 0);h([f({attribute:"aria-hidden",converter:zo})],Dr.prototype,"hiddenFromAT",void 0);h([f],Dr.prototype,"direction",void 0);const _y=(i,t)=>D`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${de(i,t)}
        <span class="content" part="content">
            <slot ${St("content")}></slot>
        </span>
        ${ce(i,t)}
    </template>
`;class Uo extends ve{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=bn(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=bn(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=bn(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=bn(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case si:{this.checkFirstOption(s);return}case _e:{this.checkNextOption(s);return}case Pe:{this.checkPreviousOption(s);return}case oi:{this.checkLastOption(s);return}case kr:return this.focusAndScrollOptionIntoView(),!0;case Js:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case gs:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&K.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([x],Uo.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],Uo.prototype,"multiple",void 0);h([f({converter:N})],Uo.prototype,"size",void 0);const Py=(i,t)=>D`
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
            ${St({filter:Uo.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,re={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Hy={[re.menuitem]:"menuitem",[re.menuitemcheckbox]:"menuitemcheckbox",[re.menuitemradio]:"menuitemradio"};class Te extends tt{constructor(){super(...arguments),this.role=re.menuitem,this.hasSubmenu=!1,this.currentDirection=xt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case bi:case gs:return this.invoke(),!1;case Mi:return this.expandAndFocus(),!1;case Hi:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case re.menuitemcheckbox:this.checked=!this.checked;break;case re.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case re.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=ds(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),K.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([f({mode:"boolean"})],Te.prototype,"disabled",void 0);h([f({mode:"boolean"})],Te.prototype,"expanded",void 0);h([x],Te.prototype,"startColumnCount",void 0);h([f],Te.prototype,"role",void 0);h([f({mode:"boolean"})],Te.prototype,"checked",void 0);h([x],Te.prototype,"submenuRegion",void 0);h([x],Te.prototype,"hasSubmenu",void 0);h([x],Te.prototype,"currentDirection",void 0);h([x],Te.prototype,"submenu",void 0);Ft(Te,be);const My=(i,t)=>D`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==re.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,s)=>e.handleMenuItemKeyDown(s.event)}"
        @click="${(e,s)=>e.handleMenuItemClick(s.event)}"
        @mouseover="${(e,s)=>e.handleMouseOver(s.event)}"
        @mouseout="${(e,s)=>e.handleMouseOut(s.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${Et(e=>e.role===re.menuitemcheckbox,D`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Et(e=>e.role===re.menuitemradio,D`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${de(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ce(i,t)}
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
                <${i.tagFor(J)}
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
                </${i.tagFor(J)}>
            `)}
    </template>
`,Ny=(i,t)=>D`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${St("items")}></slot>
    </template>
`;let Er=class af extends tt{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Ms(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==re.menuitem&&a===null||r===re.menuitem&&a!==null?1:r!==re.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof Te||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===re.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===re.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Ms(t)&&af.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),K.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case _e:this.setFocus(this.focusIndex+1,1);return;case Pe:this.setFocus(this.focusIndex-1,-1);return;case oi:this.setFocus(this.menuItems.length-1,-1);return;case si:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};Er.focusableElementRoles=Hy;h([x],Er.prototype,"items",void 0);const By=(i,t)=>D`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${St("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${de(i,t)}
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
            ${ce(i,t)}
        </div>
    </template>
`;class zy extends tt{}class jy extends vi(zy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Uy={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let ye=class extends jy{constructor(){super(...arguments),this.type=Uy.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&K.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({attribute:"readonly",mode:"boolean"})],ye.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ye.prototype,"autofocus",void 0);h([f],ye.prototype,"placeholder",void 0);h([f],ye.prototype,"type",void 0);h([f],ye.prototype,"list",void 0);h([f({converter:N})],ye.prototype,"maxlength",void 0);h([f({converter:N})],ye.prototype,"minlength",void 0);h([f],ye.prototype,"pattern",void 0);h([f({converter:N})],ye.prototype,"size",void 0);h([f({mode:"boolean"})],ye.prototype,"spellcheck",void 0);h([x],ye.prototype,"defaultSlottedNodes",void 0);class Ar{}Ft(Ar,wt);Ft(ye,be,Ar);class qy extends tt{}class Wy extends vi(qy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let he=class extends Wy{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&K.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Pe:return this.stepUp(),!1;case _e:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([f({attribute:"readonly",mode:"boolean"})],he.prototype,"readOnly",void 0);h([f({mode:"boolean"})],he.prototype,"autofocus",void 0);h([f({attribute:"hide-step",mode:"boolean"})],he.prototype,"hideStep",void 0);h([f],he.prototype,"placeholder",void 0);h([f],he.prototype,"list",void 0);h([f({converter:N})],he.prototype,"maxlength",void 0);h([f({converter:N})],he.prototype,"minlength",void 0);h([f({converter:N})],he.prototype,"size",void 0);h([f({converter:N})],he.prototype,"step",void 0);h([f({converter:N})],he.prototype,"max",void 0);h([f({converter:N})],he.prototype,"min",void 0);h([x],he.prototype,"defaultSlottedNodes",void 0);Ft(he,be,Ar);const Jd=44,Gy=(i,t)=>D`
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
                        style="stroke-dasharray: ${e=>Jd*e.percentComplete/100}px ${Jd}px"
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
`;class ms extends tt{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}h([f({converter:N})],ms.prototype,"value",void 0);h([f({converter:N})],ms.prototype,"min",void 0);h([f({converter:N})],ms.prototype,"max",void 0);h([f({mode:"boolean"})],ms.prototype,"paused",void 0);h([x],ms.prototype,"percentComplete",void 0);const Xy=(i,t)=>D`
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
`,Yy=(i,t)=>D`
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
            class="positioning-region ${e=>e.orientation===Lt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${St({property:"slottedRadioButtons",filter:gi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class ji extends tt{constructor(){super(...arguments),this.orientation=Lt.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Mi,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Hi,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in Fs&&this.isInsideFoundationToolbar)return!0;switch(e){case bi:{this.checkFocusedRadio();break}case Mi:case _e:{this.direction===xt.ltr?this.moveRight(t):this.moveLeft(t);break}case Hi:case Pe:{this.direction===xt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=ds(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],ji.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],ji.prototype,"disabled",void 0);h([f],ji.prototype,"name",void 0);h([f],ji.prototype,"value",void 0);h([f],ji.prototype,"orientation",void 0);h([x],ji.prototype,"childItems",void 0);h([x],ji.prototype,"slottedRadioButtons",void 0);const Jy=(i,t)=>D`
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
            <slot ${St("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Qy extends tt{}class Zy extends Zl(Qy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Or extends Zy{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case gs:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],Or.prototype,"readOnly",void 0);h([x],Or.prototype,"name",void 0);h([x],Or.prototype,"defaultSlottedNodes",void 0);let wi=class extends tt{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&K.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+e-o),b=Math.round(u+d);return this.isRtl?-b:(n=b,l===0?0:u)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=n.getBoundingClientRect(),d=r[t],{width:u}=a[t].getBoundingClientRect(),b=d+u,w=l+e>d;if(w||l+c-s<b){const k=(o=[...r].sort((S,Q)=>w?Q-S:S-Q).find(S=>w?S+e<d:S+c-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(k)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([f({converter:N})],wi.prototype,"speed",void 0);h([f],wi.prototype,"duration",void 0);h([f],wi.prototype,"easing",void 0);h([f({attribute:"flippers-hidden-from-at",converter:zo})],wi.prototype,"flippersHiddenFromAT",void 0);h([x],wi.prototype,"scrolling",void 0);h([x],wi.prototype,"scrollItems",void 0);h([f({attribute:"view"})],wi.prototype,"view",void 0);const Ky=(i,t)=>{var e,s;return D`
    <template
        class="horizontal-scroll"
        @keyup="${(o,n)=>o.keyupHandler(n.event)}"
    >
        ${de(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${o=>o.scrolled()}"
                ${ut("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${ut("content")}>
                    <slot
                        ${St({property:"scrollItems",filter:gi()})}
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
        ${ce(i,t)}
    </template>
`};function lf(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class t0 extends tt{}class e0 extends vi(t0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ie=class extends e0{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&K.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([f({attribute:"readonly",mode:"boolean"})],Ie.prototype,"readOnly",void 0);h([f({mode:"boolean"})],Ie.prototype,"autofocus",void 0);h([f],Ie.prototype,"placeholder",void 0);h([f],Ie.prototype,"list",void 0);h([f({converter:N})],Ie.prototype,"maxlength",void 0);h([f({converter:N})],Ie.prototype,"minlength",void 0);h([f],Ie.prototype,"pattern",void 0);h([f({converter:N})],Ie.prototype,"size",void 0);h([f({mode:"boolean"})],Ie.prototype,"spellcheck",void 0);h([x],Ie.prototype,"defaultSlottedNodes",void 0);class cf{}Ft(cf,wt);Ft(Ie,be,cf);class i0 extends Uo{}class s0 extends vi(i0){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let $i=class extends s0{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Oo("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,K.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return Z.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const c=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const d=this._options.findIndex(w=>w.value===t),u=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[d])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(d===-1||u!==b)&&(t="",this.selectedIndex=d),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),Z.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Os.above:Os.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Os.above?~~t.top:~~s}get displayValue(){var t,e;return Z.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{Z.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{Z.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(ve.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case gs:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case si:case oi:{t.preventDefault();break}case bi:{t.preventDefault(),this.open=!this.open;break}case Js:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case kr:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===_e||e===Pe)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&Z.notify(this,"displayValue")}};h([f({attribute:"open",mode:"boolean"})],$i.prototype,"open",void 0);h([bb],$i.prototype,"collapsible",null);h([x],$i.prototype,"control",void 0);h([f({attribute:"position"})],$i.prototype,"positionAttribute",void 0);h([x],$i.prototype,"position",void 0);h([x],$i.prototype,"maxHeight",void 0);class tc{}h([x],tc.prototype,"ariaControls",void 0);Ft(tc,zi);Ft($i,be,tc);const o0=(i,t)=>D`
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
                    ${de(i,t)}
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
                    ${ce(i,t)}
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
                ${St({filter:ve.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,n0=(i,t)=>D`
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
`;class qo extends tt{constructor(){super(...arguments),this.shape="rect"}}h([f],qo.prototype,"fill",void 0);h([f],qo.prototype,"shape",void 0);h([f],qo.prototype,"pattern",void 0);h([f({mode:"boolean"})],qo.prototype,"shimmer",void 0);const r0=(i,t)=>D`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||Lt.horizontal}
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
`;function ll(i,t,e,s){let o=Cr(0,1,(i-t)/(e-t));return s===xt.rtl&&(o=1-o),o}const xn={min:0,max:0,direction:xt.ltr,orientation:Lt.horizontal,disabled:!1};class ki extends tt{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=xt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=xn.direction||xt.ltr,this.sliderOrientation=xn.orientation,this.sliderMaxPosition=xn.max,this.sliderMinPosition=xn.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||xt.ltr,this.sliderOrientation=n||Lt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:xt.ltr,e=ll(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===Lt.horizontal?t===xt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=Z.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([x],ki.prototype,"positionStyle",void 0);h([f],ki.prototype,"position",void 0);h([f({attribute:"hide-mark",mode:"boolean"})],ki.prototype,"hideMark",void 0);h([f({attribute:"disabled",mode:"boolean"})],ki.prototype,"disabled",void 0);h([x],ki.prototype,"sliderOrientation",void 0);h([x],ki.prototype,"sliderMinPosition",void 0);h([x],ki.prototype,"sliderMaxPosition",void 0);h([x],ki.prototype,"sliderDirection",void 0);const a0=(i,t)=>D`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||Lt.horizontal}"
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
`;class l0 extends tt{}class c0 extends vi(l0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const d0={singleValue:"single-value"};class te extends c0{constructor(){super(...arguments),this.direction=xt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Lt.horizontal,this.mode=d0.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===si)t.preventDefault(),this.value=`${this.min}`;else if(t.key===oi)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Mi:case Pe:t.preventDefault(),this.increment();break;case Hi:case _e:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===Lt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=ll(t,this.orientation===Lt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Lt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===Lt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=ds(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==xt.rtl&&this.orientation!==Lt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==xt.rtl&&this.orientation!==Lt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-ll(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===Lt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([f({attribute:"readonly",mode:"boolean"})],te.prototype,"readOnly",void 0);h([x],te.prototype,"direction",void 0);h([x],te.prototype,"isDragging",void 0);h([x],te.prototype,"position",void 0);h([x],te.prototype,"trackWidth",void 0);h([x],te.prototype,"trackMinWidth",void 0);h([x],te.prototype,"trackHeight",void 0);h([x],te.prototype,"trackLeft",void 0);h([x],te.prototype,"trackMinHeight",void 0);h([x],te.prototype,"valueTextFormatter",void 0);h([f({converter:N})],te.prototype,"min",void 0);h([f({converter:N})],te.prototype,"max",void 0);h([f({converter:N})],te.prototype,"step",void 0);h([f],te.prototype,"orientation",void 0);h([f],te.prototype,"mode",void 0);const h0=(i,t)=>D`
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
            <slot ${St("defaultSlottedNodes")}></slot>
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
`;class u0 extends tt{}class f0 extends Zl(u0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ec extends f0{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case bi:case gs:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([f({attribute:"readonly",mode:"boolean"})],ec.prototype,"readOnly",void 0);h([x],ec.prototype,"defaultSlottedNodes",void 0);const p0=(i,t)=>D`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class g0 extends tt{}const m0=(i,t)=>D`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class df extends tt{}h([f({mode:"boolean"})],df.prototype,"disabled",void 0);const b0=(i,t)=>D`
    <template class="${e=>e.orientation}">
        ${de(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${St("tabs")}></slot>

            ${Et(e=>e.showActiveIndicator,D`
                    <div
                        ${ut("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ce(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${St("tabpanels")}></slot>
        </div>
    </template>
`,Qd={vertical:"vertical",horizontal:"horizontal"};class Ci extends tt{constructor(){super(...arguments),this.orientation=Qd.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Hi:t.preventDefault(),this.adjustBackward(t);break;case Mi:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Pe:t.preventDefault(),this.adjustBackward(t);break;case _e:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case si:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case oi:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${Oo()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${Oo()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Qd.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=Cr(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],Ci.prototype,"orientation",void 0);h([f],Ci.prototype,"activeid",void 0);h([x],Ci.prototype,"tabs",void 0);h([x],Ci.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],Ci.prototype,"activeindicator",void 0);h([x],Ci.prototype,"activeIndicatorRef",void 0);h([x],Ci.prototype,"showActiveIndicator",void 0);Ft(Ci,be);class v0 extends tt{}class y0 extends vi(v0){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const hf={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let ee=class extends y0{constructor(){super(...arguments),this.resize=hf.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({mode:"boolean"})],ee.prototype,"readOnly",void 0);h([f],ee.prototype,"resize",void 0);h([f({mode:"boolean"})],ee.prototype,"autofocus",void 0);h([f({attribute:"form"})],ee.prototype,"formId",void 0);h([f],ee.prototype,"list",void 0);h([f({converter:N})],ee.prototype,"maxlength",void 0);h([f({converter:N})],ee.prototype,"minlength",void 0);h([f],ee.prototype,"name",void 0);h([f],ee.prototype,"placeholder",void 0);h([f({converter:N,mode:"fromView"})],ee.prototype,"cols",void 0);h([f({converter:N,mode:"fromView"})],ee.prototype,"rows",void 0);h([f({mode:"boolean"})],ee.prototype,"spellcheck",void 0);h([x],ee.prototype,"defaultSlottedNodes",void 0);Ft(ee,Ar);const x0=(i,t)=>D`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==hf.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${St("defaultSlottedNodes")}></slot>
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
`,w0=(i,t)=>D`
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
                ${St({property:"defaultSlottedNodes",filter:lf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${de(i,t)}
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
            ${ce(i,t)}
        </div>
    </template>
`,$0=(i,t)=>D`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${$r({property:"childItems",attributeFilter:["disabled","hidden"],filter:gi(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${de(i,t)}
            <slot
                ${St({filter:gi(),property:"slottedItems"})}
            ></slot>
            ${ce(i,t)}
        </div>
    </template>
`,Zd=Object.freeze({[Fs.ArrowUp]:{[Lt.vertical]:-1},[Fs.ArrowDown]:{[Lt.vertical]:1},[Fs.ArrowLeft]:{[Lt.horizontal]:{[xt.ltr]:-1,[xt.rtl]:1}},[Fs.ArrowRight]:{[Lt.horizontal]:{[xt.ltr]:1,[xt.rtl]:-1}}});let Ui=class cl extends tt{constructor(){super(...arguments),this._activeIndex=0,this.direction=xt.ltr,this.orientation=Lt.horizontal}get activeIndex(){return Z.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Cr(0,this.focusableElements.length-1,t),Z.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=ds(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=Zd[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=Zd[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in Fs)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(cl.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,c=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Yd(d));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(Yd(e)||a||l||c)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(cl.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};h([x],Ui.prototype,"direction",void 0);h([f],Ui.prototype,"orientation",void 0);h([x],Ui.prototype,"slottedItems",void 0);h([x],Ui.prototype,"slottedLabel",void 0);h([x],Ui.prototype,"childItems",void 0);class Vr{}h([f({attribute:"aria-labelledby"})],Vr.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Vr.prototype,"ariaLabel",void 0);Ft(Vr,wt);Ft(Ui,be,Vr);const k0=(i,t)=>D`
        ${Et(e=>e.tooltipVisible,D`
            <${i.tagFor(J)}
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
            </${i.tagFor(J)}>
        `)}
    `,fe={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Ht=class extends tt{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=xt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Js:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=ds(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),K.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case fe.top:case fe.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case fe.right:case fe.left:case fe.start:case fe.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case fe.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case fe.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case fe.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case fe.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case fe.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case fe.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case fe.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case fe.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([f({mode:"boolean"})],Ht.prototype,"visible",void 0);h([f],Ht.prototype,"anchor",void 0);h([f],Ht.prototype,"delay",void 0);h([f],Ht.prototype,"position",void 0);h([f({attribute:"auto-update-mode"})],Ht.prototype,"autoUpdateMode",void 0);h([f({attribute:"horizontal-viewport-lock"})],Ht.prototype,"horizontalViewportLock",void 0);h([f({attribute:"vertical-viewport-lock"})],Ht.prototype,"verticalViewportLock",void 0);h([x],Ht.prototype,"anchorElement",void 0);h([x],Ht.prototype,"viewportElement",void 0);h([x],Ht.prototype,"verticalPositioningMode",void 0);h([x],Ht.prototype,"horizontalPositioningMode",void 0);h([x],Ht.prototype,"horizontalInset",void 0);h([x],Ht.prototype,"verticalInset",void 0);h([x],Ht.prototype,"horizontalScaling",void 0);h([x],Ht.prototype,"verticalScaling",void 0);h([x],Ht.prototype,"verticalDefaultPosition",void 0);h([x],Ht.prototype,"horizontalDefaultPosition",void 0);h([x],Ht.prototype,"tooltipVisible",void 0);h([x],Ht.prototype,"currentDirection",void 0);const C0=(i,t)=>D`
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
        ${$r({property:"childItems",filter:gi()})}
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
                ${de(i,t)}
                <slot></slot>
                ${ce(i,t)}
            </div>
        </div>
        ${Et(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),D`
                <div role="group" class="items" part="items">
                    <slot name="item" ${St("items")}></slot>
                </div>
            `)}
    </template>
`;function Oi(i){return Ms(i)&&i.getAttribute("role")==="treeitem"}class Nt extends tt{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Oi(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{Oi(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>Oi(e));return t?t.length:0}}h([f({mode:"boolean"})],Nt.prototype,"expanded",void 0);h([f({mode:"boolean"})],Nt.prototype,"selected",void 0);h([f({mode:"boolean"})],Nt.prototype,"disabled",void 0);h([x],Nt.prototype,"focusable",void 0);h([x],Nt.prototype,"childItems",void 0);h([x],Nt.prototype,"items",void 0);h([x],Nt.prototype,"nested",void 0);h([x],Nt.prototype,"renderCollapsedChildren",void 0);Ft(Nt,be);const S0=(i,t)=>D`
    <template
        role="tree"
        ${ut("treeView")}
        @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        @click="${(e,s)=>e.handleClick(s.event)}"
        @selected-change="${(e,s)=>e.handleSelectedChange(s.event)}"
    >
        <slot ${St("slottedTreeItems")}></slot>
    </template>
`;class Lr extends tt{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Nt.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case si:e.length&&Nt.focusItem(e[0]);return;case oi:e.length&&Nt.focusItem(e[e.length-1]);return;case Hi:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Nt&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof Nt&&s.parentElement instanceof Nt&&Nt.focusItem(s.parentElement)}return!1;case Mi:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Nt&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof Nt&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case _e:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Pe:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case bi:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Oi(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Oi(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>Oi(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),K.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Oi(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Ms(o)&&Nt.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Oi(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return $v(this,"[role='treeitem']")||[]}}h([f({attribute:"render-collapsed-nodes"})],Lr.prototype,"renderCollapsedNodes",void 0);h([x],Lr.prototype,"currentSelected",void 0);h([x],Lr.prototype,"slottedTreeItems",void 0);class F0{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class Wo extends F0{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Wo(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const at=Wo.with(window.matchMedia("(forced-colors)"));Wo.with(window.matchMedia("(prefers-color-scheme: dark)"));Wo.with(window.matchMedia("(prefers-color-scheme: light)"));class T0{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){Z.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){Z.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Me="not-allowed",I0=":host([hidden]){display:none}";function lt(i){return`${I0}:host{display:${i}}`}const et=Cv()?"focus-visible":"focus";function is(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function Va(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Ki(i,t,e){return isNaN(i)?t:t+i*(e-t)}function R0(i){const t=Math.round(is(i,0,255)).toString(16);return t.length===1?"0"+t:t}function wn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function ae(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class _o{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new _o(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new _o(ae(this.h,t),ae(this.s,t),ae(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Wt{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Wt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Wt(ae(this.l,t),ae(this.a,t),ae(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Wt.epsilon=216/24389;Wt.kappa=24389/27;class Pt{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new Pt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ki(this.r,0,255))},${Math.round(Ki(this.g,0,255))},${Math.round(Ki(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ki(this.r,0,255))},${Math.round(Ki(this.g,0,255))},${Math.round(Ki(this.b,0,255))},${is(this.a,0,1)})`}roundToPrecision(t){return new Pt(ae(this.r,t),ae(this.g,t),ae(this.b,t),ae(this.a,t))}clamp(){return new Pt(is(this.r,0,1),is(this.g,0,1),is(this.b,0,1),is(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return R0(Ki(t,0,255))}}class $e{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new $e(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new $e(ae(this.x,t),ae(this.y,t),ae(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}$e.whitePoint=new $e(.95047,1,1.08883);function D0(i){return i.r*.2126+i.g*.7152+i.b*.0722}function uf(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return D0(new Pt(t(i.r),t(i.g),t(i.b),1))}function La(i,t,e){return e-t===0?0:(i-t)/(e-t)}function _a(i,t,e){const s=La(i.r,t.r,e.r),o=La(i.g,t.g,e.g),n=La(i.b,t.b,e.b);return(s+o+n)/3}function E0(i,t,e=null){let s=0,o=e;return o!==null?s=_a(i,t,o):(o=new Pt(0,0,0,1),s=_a(i,t,o),s<=0&&(o=new Pt(1,1,1,1),s=_a(i,t,o))),s=Math.round(s*1e3)/1e3,new Pt(o.r,o.g,o.b,s)}function Kd(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new _o(o,r,n)}function A0(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new Pt(n+o,r+o,a+o,t)}function O0(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Wt.epsilon?a=o:a=(116*e-16)/Wt.kappa;let l=0;i.l>Wt.epsilon*Wt.kappa?l=n:l=i.l/Wt.kappa;let c=0;return r>Wt.epsilon?c=r:c=(116*s-16)/Wt.kappa,a=$e.whitePoint.x*a,l=$e.whitePoint.y*l,c=$e.whitePoint.z*c,new $e(a,l,c)}function V0(i){function t(l){return l>Wt.epsilon?Math.pow(l,1/3):(Wt.kappa*l+16)/116}const e=t(i.x/$e.whitePoint.x),s=t(i.y/$e.whitePoint.y),o=t(i.z/$e.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Wt(n,r,a)}function L0(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new $e(n,r,a)}function _0(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new Pt(s,o,n,t)}function P0(i){return V0(L0(i))}function Pa(i,t=1){return _0(O0(i),t)}var th;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(th||(th={}));function H0(i,t){if(t.a>=1)return t;if(t.a<=0)return new Pt(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new Pt(e,s,o,1)}function $n(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Pt(wn(i,t.r,e.r),wn(i,t.g,e.g),wn(i,t.b,e.b),wn(i,t.a,e.a))}var eh;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(eh||(eh={}));const M0=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ls(i){const t=M0.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new Pt(Va((s&16711680)>>>16,0,255),Va((s&65280)>>>8,0,255),Va(s&255,0,255),1)}function er(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Le=Object.freeze({create(i,t,e){return new ir(i,t,e)},from(i){return new ir(i.r,i.g,i.b)}});function N0(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class ir extends Pt{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=er.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=uf(this)}static fromObject(t){return new ir(t.r,t.g,t.b)}}function dl(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?dl(i,t,e,o):dl(i,t,o+1,s)}const B0=(-.1+Math.sqrt(.21))/2;function Go(i){return i.relativeLuminance<=B0}function bs(i){return Go(i)?-1:1}const ih={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function z0(i,t,e){return typeof i=="number"?Po.from(Le.create(i,t,e)):Po.from(i)}function j0(i,t){return N0(i)?Ke.from(i,t):Ke.from(Le.create(i.r,i.g,i.b),t)}const Po=Object.freeze({create:z0,from:j0});class Ke{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=bs(t));const l=c=>er(t,c)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),dl(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[is(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=Kd(t).s,n=Kd(e);if(n.s<o){const r=new _o(n.h,o,n.l);return A0(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=P0(Pt.fromObject(t).roundToPrecision(4)),o=Pa(new Wt(0,s.a,s.b)).clamp().roundToPrecision(4),n=Pa(new Wt(50,s.a,s.b)).clamp().roundToPrecision(4),r=Pa(new Wt(100,s.a,s.b)).clamp().roundToPrecision(4),a=new Pt(0,0,0),l=new Pt(1,1,1),c=r.equalValue(l)?0:14,d=o.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let b;if(u<0){const w=u/d+1;b=$n(w,a,o)}else if(u<=50)b=$n(Ke.ramp(u),o,n);else if(u<=100)b=$n(Ke.ramp(u),n,r);else{const w=(u-100)/c;b=$n(w,r,l)}b=Ke.saturationBump(n,b).roundToPrecision(4),e.push(Le.from(b))}return new Ke(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=c=>{const d=e.closestIndexOf(c);return o===1?e.lastIndex-d:d};o===1&&s.reverse();const a=t(s[s.length-2]);if(ae(er(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=e.colorContrast(n[e.lastIndex],a,void 0,o),d=r(c),u=r(s[s.length-2]),b=d-u;let w=1;for(let y=s.length-b-1;y<s.length;y++){const k=r(s[y]),S=y===s.length-1?e.lastIndex:k+w;s[y]=n[S],w++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=Ke.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return ae(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?ih:Object.assign(Object.assign({},ih),e);return new Ke(t,Object.freeze(Ke.createColorPaletteByContrast(t,s)))}}const sr=Le.create(1,1,1),ic=Le.create(0,0,0),U0=Le.create(.5,.5,.5),Ha=ls("#0078D4"),q0=Le.create(Ha.r,Ha.g,Ha.b);function ff(i,t,e,s,o){const n=d=>d.contrast(sr)>=o?sr:ic,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),c=n(s);return{rest:r,hover:a,active:l,focus:c}}class _r{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=er.bind(null,this),this.createCSS=this.toColorString,this.color=new Pt(t,e,s),this.cssGradient=o,this.relativeLuminance=uf(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new _r(t.r,t.g,t.b,e)}}const W0=new Pt(0,0,0),G0=new Pt(1,1,1);function pf(i,t,e,s,o,n,r,a,l=10,c=!1){const d=i.closestIndexOf(t);a===void 0&&(a=bs(t));function u(A){if(c){const q=i.closestIndexOf(t),kt=i.get(q),X=A.relativeLuminance<t.relativeLuminance?W0:G0,Vt=E0(ls(A.toColorString()),ls(kt.toColorString()),X).roundToPrecision(2),ue=H0(ls(t.toColorString()),Vt);return Le.from(ue)}else return A}const b=d+a*e,w=b+a*(s-e),y=b+a*(o-e),k=b+a*(n-e),S=a===-1?0:100-l,Q=a===-1?l:100;function B(A,q){const kt=i.get(A);if(q){const X=i.get(A+a*r),Vt=a===-1?X:kt,ue=a===-1?kt:X,so=`linear-gradient(${u(Vt).toColorString()} ${S}%, ${u(ue).toColorString()} ${Q}%)`;return _r.fromObject(Vt,so)}else return u(kt)}return{rest:B(b,!0),hover:B(w,!0),active:B(y,!1),focus:B(k,!0)}}function X0(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),c=bs(t),d=l+c*e,u=d+c*(s-e),b=d+c*(o-e),w=d+c*(n-e),y=`calc(100% - ${a})`;function k(S,Q){const B=i.get(S);if(Q){const A=i.get(S+c*r),q=`linear-gradient(${B.toColorString()} ${y}, ${A.toColorString()} ${y}, ${A.toColorString()})`;return _r.fromObject(B,q)}else return B}return{rest:k(d,!0),hover:k(u,!0),active:k(b,!1),focus:k(w,!0)}}function Y0(i,t,e){return i.colorContrast(t,e)}function zs(i,t,e,s,o,n,r,a){a==null&&(a=bs(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function J0(i,t,e,s,o,n,r,a=void 0,l,c,d,u,b,w=void 0){return Go(t)?zs(i,t,l,c,d,u,b,w):zs(i,t,e,s,o,n,r,a)}function Q0(i,t,e){return i.get(i.closestIndexOf(t)+bs(t)*e)}function Ni(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=bs(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function sc(i,t,e,s,o,n,r=void 0,a,l,c,d,u=void 0){return Go(t)?Ni(i,t,a,l,c,d,u):Ni(i,t,e,s,o,n,r)}function Z0(i,t){return Go(t)?sr:ic}function K0(i,t,e){return Go(t)?ic:sr}function tx(i){return Le.create(i,i,i)}var hl;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(hl||(hl={}));function Xo(i,t){return i.closestIndexOf(tx(t))}function ex(i,t){return i.get(Xo(i,t))}function ix(i,t,e){return i.get(Xo(i,t)+e)}function gf(i,t,e){return i.get(Xo(i,t)+e*-1)}function sx(i,t,e){return i.get(Xo(i,t)+e*-1*2)}function ox(i,t,e){return i.get(Xo(i,t)+e*-1*3)}const nx={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=mt;function V(i){return mt.create({name:i,cssCustomPropertyName:null})}const Bn=v("direction").withDefault(xt.ltr),Re=v("disabled-opacity").withDefault(.3),Pr=v("base-height-multiplier").withDefault(8),rx=v("base-horizontal-spacing-multiplier").withDefault(3),qi=v("density").withDefault(0),M=v("design-unit").withDefault(4),pt=v("control-corner-radius").withDefault(4),hi=v("layer-corner-radius").withDefault(8),W=v("stroke-width").withDefault(1),Kt=v("focus-stroke-width").withDefault(2),Ne=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),ax=v("font-weight").withDefault(nx.Normal);function Si(i){return t=>{const e=i.getValueFor(t),s=ax.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const Hr=v("type-ramp-base-font-size").withDefault("14px"),mf=v("type-ramp-base-line-height").withDefault("20px"),lx=v("type-ramp-base-font-variations").withDefault(Si(Hr)),oc=v("type-ramp-minus-1-font-size").withDefault("12px"),nc=v("type-ramp-minus-1-line-height").withDefault("16px"),cx=v("type-ramp-minus-1-font-variations").withDefault(Si(oc)),rc=v("type-ramp-minus-2-font-size").withDefault("10px"),bf=v("type-ramp-minus-2-line-height").withDefault("14px"),dx=v("type-ramp-minus-2-font-variations").withDefault(Si(rc)),ac=v("type-ramp-plus-1-font-size").withDefault("16px"),vf=v("type-ramp-plus-1-line-height").withDefault("22px"),hx=v("type-ramp-plus-1-font-variations").withDefault(Si(ac)),Mr=v("type-ramp-plus-2-font-size").withDefault("20px"),yf=v("type-ramp-plus-2-line-height").withDefault("26px"),ux=v("type-ramp-plus-2-font-variations").withDefault(Si(Mr)),lc=v("type-ramp-plus-3-font-size").withDefault("24px"),xf=v("type-ramp-plus-3-line-height").withDefault("32px"),fx=v("type-ramp-plus-3-font-variations").withDefault(Si(lc)),cc=v("type-ramp-plus-4-font-size").withDefault("28px"),wf=v("type-ramp-plus-4-line-height").withDefault("36px"),px=v("type-ramp-plus-4-font-variations").withDefault(Si(cc)),dc=v("type-ramp-plus-5-font-size").withDefault("32px"),$f=v("type-ramp-plus-5-line-height").withDefault("40px"),gx=v("type-ramp-plus-5-font-variations").withDefault(Si(dc)),hc=v("type-ramp-plus-6-font-size").withDefault("40px"),kf=v("type-ramp-plus-6-line-height").withDefault("52px"),mx=v("type-ramp-plus-6-font-variations").withDefault(Si(hc)),vs=v("base-layer-luminance").withDefault(hl.LightMode),ul=V("accent-fill-rest-delta").withDefault(0),fl=V("accent-fill-hover-delta").withDefault(-2),pl=V("accent-fill-active-delta").withDefault(-5),gl=V("accent-fill-focus-delta").withDefault(0),Cf=V("accent-foreground-rest-delta").withDefault(0),Sf=V("accent-foreground-hover-delta").withDefault(3),Ff=V("accent-foreground-active-delta").withDefault(-8),Tf=V("accent-foreground-focus-delta").withDefault(0),If=V("neutral-fill-rest-delta").withDefault(-1),Rf=V("neutral-fill-hover-delta").withDefault(1),Df=V("neutral-fill-active-delta").withDefault(0),Ef=V("neutral-fill-focus-delta").withDefault(0),Af=V("neutral-fill-input-rest-delta").withDefault(-1),Of=V("neutral-fill-input-hover-delta").withDefault(1),Vf=V("neutral-fill-input-active-delta").withDefault(0),Lf=V("neutral-fill-input-focus-delta").withDefault(-2),kn=V("neutral-fill-input-alt-rest-delta").withDefault(2),sh=V("neutral-fill-input-alt-hover-delta").withDefault(4),oh=V("neutral-fill-input-alt-active-delta").withDefault(6),nh=V("neutral-fill-input-alt-focus-delta").withDefault(2),Bi=V("neutral-fill-layer-rest-delta").withDefault(-2),bx=V("neutral-fill-layer-hover-delta").withDefault(-3),vx=V("neutral-fill-layer-active-delta").withDefault(-3),Cn=V("neutral-fill-layer-alt-rest-delta").withDefault(-1),yx=V("neutral-fill-secondary-rest-delta").withDefault(3),xx=V("neutral-fill-secondary-hover-delta").withDefault(2),wx=V("neutral-fill-secondary-active-delta").withDefault(1),$x=V("neutral-fill-secondary-focus-delta").withDefault(3),_f=V("neutral-fill-stealth-rest-delta").withDefault(0),Pf=V("neutral-fill-stealth-hover-delta").withDefault(3),Hf=V("neutral-fill-stealth-active-delta").withDefault(2),Mf=V("neutral-fill-stealth-focus-delta").withDefault(0),kx=V("neutral-fill-strong-rest-delta").withDefault(0),Nf=V("neutral-fill-strong-hover-delta").withDefault(8),Bf=V("neutral-fill-strong-active-delta").withDefault(-5),zf=V("neutral-fill-strong-focus-delta").withDefault(0),jf=V("neutral-stroke-rest-delta").withDefault(8),Uf=V("neutral-stroke-hover-delta").withDefault(12),qf=V("neutral-stroke-active-delta").withDefault(6),Wf=V("neutral-stroke-focus-delta").withDefault(8),Gf=V("neutral-stroke-control-rest-delta").withDefault(3),Xf=V("neutral-stroke-control-hover-delta").withDefault(5),Yf=V("neutral-stroke-control-active-delta").withDefault(5),Jf=V("neutral-stroke-control-focus-delta").withDefault(5),Qf=V("neutral-stroke-divider-rest-delta").withDefault(4),rh=V("neutral-stroke-layer-rest-delta").withDefault(3),Cx=V("neutral-stroke-layer-hover-delta").withDefault(3),Sx=V("neutral-stroke-layer-active-delta").withDefault(3),Fx=V("neutral-stroke-strong-hover-delta").withDefault(0),Tx=V("neutral-stroke-strong-active-delta").withDefault(0),Ix=V("neutral-stroke-strong-focus-delta").withDefault(0),Zf=v("neutral-base-color").withDefault(U0),$t=V("neutral-palette").withDefault(i=>Po.from(Zf.getValueFor(i))),Kf=v("accent-base-color").withDefault(q0),uc=V("accent-palette").withDefault(i=>Po.from(Kf.getValueFor(i))),Rx=V("neutral-layer-card-container-recipe").withDefault({evaluate:i=>gf($t.getValueFor(i),vs.getValueFor(i),Bi.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>Rx.getValueFor(i).evaluate(i));const Dx=V("neutral-layer-floating-recipe").withDefault({evaluate:i=>ix($t.getValueFor(i),vs.getValueFor(i),Bi.getValueFor(i))}),Yo=v("neutral-layer-floating").withDefault(i=>Dx.getValueFor(i).evaluate(i)),Ex=V("neutral-layer-1-recipe").withDefault({evaluate:i=>ex($t.getValueFor(i),vs.getValueFor(i))}),Ax=v("neutral-layer-1").withDefault(i=>Ex.getValueFor(i).evaluate(i)),Ox=V("neutral-layer-2-recipe").withDefault({evaluate:i=>gf($t.getValueFor(i),vs.getValueFor(i),Bi.getValueFor(i))});v("neutral-layer-2").withDefault(i=>Ox.getValueFor(i).evaluate(i));const Vx=V("neutral-layer-3-recipe").withDefault({evaluate:i=>sx($t.getValueFor(i),vs.getValueFor(i),Bi.getValueFor(i))});v("neutral-layer-3").withDefault(i=>Vx.getValueFor(i).evaluate(i));const Lx=V("neutral-layer-4-recipe").withDefault({evaluate:i=>ox($t.getValueFor(i),vs.getValueFor(i),Bi.getValueFor(i))});v("neutral-layer-4").withDefault(i=>Lx.getValueFor(i).evaluate(i));const nt=v("fill-color").withDefault(i=>Ax.getValueFor(i));var or;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(or||(or={}));const Nr=V("accent-fill-recipe").withDefault({evaluate:(i,t)=>J0(uc.getValueFor(i),t||nt.getValueFor(i),5,ul.getValueFor(i),fl.getValueFor(i),pl.getValueFor(i),gl.getValueFor(i),void 0,8,ul.getValueFor(i),fl.getValueFor(i),pl.getValueFor(i),gl.getValueFor(i),void 0)}),vt=v("accent-fill-rest").withDefault(i=>Nr.getValueFor(i).evaluate(i).rest),Ge=v("accent-fill-hover").withDefault(i=>Nr.getValueFor(i).evaluate(i).hover),Xe=v("accent-fill-active").withDefault(i=>Nr.getValueFor(i).evaluate(i).active),Br=v("accent-fill-focus").withDefault(i=>Nr.getValueFor(i).evaluate(i).focus),zr=V("foreground-on-accent-recipe").withDefault({evaluate:i=>ff(vt.getValueFor(i),Ge.getValueFor(i),Xe.getValueFor(i),Br.getValueFor(i),or.normal)}),hs=v("foreground-on-accent-rest").withDefault(i=>zr.getValueFor(i).evaluate(i).rest),tp=v("foreground-on-accent-hover").withDefault(i=>zr.getValueFor(i).evaluate(i).hover),ep=v("foreground-on-accent-active").withDefault(i=>zr.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>zr.getValueFor(i).evaluate(i).focus);const jr=V("accent-foreground-recipe").withDefault({evaluate:(i,t)=>zs(uc.getValueFor(i),t||nt.getValueFor(i),9.5,Cf.getValueFor(i),Sf.getValueFor(i),Ff.getValueFor(i),Tf.getValueFor(i))}),ip=v("accent-foreground-rest").withDefault(i=>jr.getValueFor(i).evaluate(i).rest),sp=v("accent-foreground-hover").withDefault(i=>jr.getValueFor(i).evaluate(i).hover),op=v("accent-foreground-active").withDefault(i=>jr.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>jr.getValueFor(i).evaluate(i).focus);const Ur=V("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>pf($t.getValueFor(i),t||nt.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),_x=v("accent-stroke-control-rest").withDefault(i=>Ur.getValueFor(i).evaluate(i,vt.getValueFor(i)).rest),Px=v("accent-stroke-control-hover").withDefault(i=>Ur.getValueFor(i).evaluate(i,Ge.getValueFor(i)).hover),Hx=v("accent-stroke-control-active").withDefault(i=>Ur.getValueFor(i).evaluate(i,Xe.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>Ur.getValueFor(i).evaluate(i,Br.getValueFor(i)).focus);const qr=V("neutral-fill-recipe").withDefault({evaluate:(i,t)=>sc($t.getValueFor(i),t||nt.getValueFor(i),If.getValueFor(i),Rf.getValueFor(i),Df.getValueFor(i),Ef.getValueFor(i),void 0,2,3,1,2,void 0)}),Ee=v("neutral-fill-rest").withDefault(i=>qr.getValueFor(i).evaluate(i).rest),ah=v("neutral-fill-hover").withDefault(i=>qr.getValueFor(i).evaluate(i).hover),lh=v("neutral-fill-active").withDefault(i=>qr.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>qr.getValueFor(i).evaluate(i).focus);const Wi=V("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>sc($t.getValueFor(i),t||nt.getValueFor(i),Af.getValueFor(i),Of.getValueFor(i),Vf.getValueFor(i),Lf.getValueFor(i),void 0,2,3,1,0,void 0)}),Sn=v("neutral-fill-input-rest").withDefault(i=>Wi.getValueFor(i).evaluate(i).rest),ch=v("neutral-fill-input-hover").withDefault(i=>Wi.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>Wi.getValueFor(i).evaluate(i).active);const dh=v("neutral-fill-input-focus").withDefault(i=>Wi.getValueFor(i).evaluate(i).focus),Wr=V("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>sc($t.getValueFor(i),t||nt.getValueFor(i),kn.getValueFor(i),sh.getValueFor(i),oh.getValueFor(i),nh.getValueFor(i),1,kn.getValueFor(i),kn.getValueFor(i)-sh.getValueFor(i),kn.getValueFor(i)-oh.getValueFor(i),nh.getValueFor(i),1)}),fc=v("neutral-fill-input-alt-rest").withDefault(i=>Wr.getValueFor(i).evaluate(i).rest),pc=v("neutral-fill-input-alt-hover").withDefault(i=>Wr.getValueFor(i).evaluate(i).hover),gc=v("neutral-fill-input-alt-active").withDefault(i=>Wr.getValueFor(i).evaluate(i).active),mc=v("neutral-fill-input-alt-focus").withDefault(i=>Wr.getValueFor(i).evaluate(i).focus),ys=V("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),Bi.getValueFor(i),bx.getValueFor(i),vx.getValueFor(i),Bi.getValueFor(i),1)}),Mx=v("neutral-fill-layer-rest").withDefault(i=>ys.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>ys.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>ys.getValueFor(i).evaluate(i).active);const Nx=V("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),Cn.getValueFor(i),Cn.getValueFor(i),Cn.getValueFor(i),Cn.getValueFor(i))}),Bx=v("neutral-fill-layer-alt-rest").withDefault(i=>Nx.getValueFor(i).evaluate(i).rest),xs=V("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),yx.getValueFor(i),xx.getValueFor(i),wx.getValueFor(i),$x.getValueFor(i))}),us=v("neutral-fill-secondary-rest").withDefault(i=>xs.getValueFor(i).evaluate(i).rest),bc=v("neutral-fill-secondary-hover").withDefault(i=>xs.getValueFor(i).evaluate(i).hover),zx=v("neutral-fill-secondary-active").withDefault(i=>xs.getValueFor(i).evaluate(i).active),jx=v("neutral-fill-secondary-focus").withDefault(i=>xs.getValueFor(i).evaluate(i).focus),Ye=V("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),_f.getValueFor(i),Pf.getValueFor(i),Hf.getValueFor(i),Mf.getValueFor(i))}),js=v("neutral-fill-stealth-rest").withDefault(i=>Ye.getValueFor(i).evaluate(i).rest),Us=v("neutral-fill-stealth-hover").withDefault(i=>Ye.getValueFor(i).evaluate(i).hover),qs=v("neutral-fill-stealth-active").withDefault(i=>Ye.getValueFor(i).evaluate(i).active),Ux=v("neutral-fill-stealth-focus").withDefault(i=>Ye.getValueFor(i).evaluate(i).focus),Gr=V("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>zs($t.getValueFor(i),t||nt.getValueFor(i),4.5,kx.getValueFor(i),Nf.getValueFor(i),Bf.getValueFor(i),zf.getValueFor(i))}),np=v("neutral-fill-strong-rest").withDefault(i=>Gr.getValueFor(i).evaluate(i).rest),qx=v("neutral-fill-strong-hover").withDefault(i=>Gr.getValueFor(i).evaluate(i).hover),Wx=v("neutral-fill-strong-active").withDefault(i=>Gr.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>Gr.getValueFor(i).evaluate(i).focus);const Xr=V("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>zs($t.getValueFor(i),t||nt.getValueFor(i),16,0,-19,-30,0)}),gt=v("neutral-foreground-rest").withDefault(i=>Xr.getValueFor(i).evaluate(i).rest),Gx=v("neutral-foreground-hover").withDefault(i=>Xr.getValueFor(i).evaluate(i).hover),Xx=v("neutral-foreground-active").withDefault(i=>Xr.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>Xr.getValueFor(i).evaluate(i).focus);const Jo=V("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>Y0($t.getValueFor(i),t||nt.getValueFor(i),4.5)}),Ws=v("neutral-foreground-hint").withDefault(i=>Jo.getValueFor(i).evaluate(i)),Yr=V("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),jf.getValueFor(i),Uf.getValueFor(i),qf.getValueFor(i),Wf.getValueFor(i))}),Ho=v("neutral-stroke-rest").withDefault(i=>Yr.getValueFor(i).evaluate(i).rest),Yx=v("neutral-stroke-hover").withDefault(i=>Yr.getValueFor(i).evaluate(i).hover),Jx=v("neutral-stroke-active").withDefault(i=>Yr.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>Yr.getValueFor(i).evaluate(i).focus);const Jr=V("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>pf($t.getValueFor(i),t||nt.getValueFor(i),Gf.getValueFor(i),Xf.getValueFor(i),Yf.getValueFor(i),Jf.getValueFor(i),5)}),vc=v("neutral-stroke-control-rest").withDefault(i=>Jr.getValueFor(i).evaluate(i).rest),rp=v("neutral-stroke-control-hover").withDefault(i=>Jr.getValueFor(i).evaluate(i).hover),ap=v("neutral-stroke-control-active").withDefault(i=>Jr.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>Jr.getValueFor(i).evaluate(i).focus);const Qx=V("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>Q0($t.getValueFor(i),t||nt.getValueFor(i),Qf.getValueFor(i))}),nr=v("neutral-stroke-divider-rest").withDefault(i=>Qx.getValueFor(i).evaluate(i)),Qr=V("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>X0($t.getValueFor(i),t||nt.getValueFor(i),Gf.getValueFor(i),Xf.getValueFor(i),Yf.getValueFor(i),Jf.getValueFor(i),20,W.getValueFor(i)+"px")}),hh=v("neutral-stroke-input-rest").withDefault(i=>Qr.getValueFor(i).evaluate(i).rest),Zx=v("neutral-stroke-input-hover").withDefault(i=>Qr.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>Qr.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>Qr.getValueFor(i).evaluate(i).focus);const yc=V("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>Ni($t.getValueFor(i),t||nt.getValueFor(i),rh.getValueFor(i),Cx.getValueFor(i),Sx.getValueFor(i),rh.getValueFor(i))}),Ls=v("neutral-stroke-layer-rest").withDefault(i=>yc.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>yc.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>yc.getValueFor(i).evaluate(i).active);const Zr=V("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>zs($t.getValueFor(i),t||nt.getValueFor(i),5.5,0,Fx.getValueFor(i),Tx.getValueFor(i),Ix.getValueFor(i))}),Zs=v("neutral-stroke-strong-rest").withDefault(i=>Zr.getValueFor(i).evaluate(i).rest),xc=v("neutral-stroke-strong-hover").withDefault(i=>Zr.getValueFor(i).evaluate(i).hover),wc=v("neutral-stroke-strong-active").withDefault(i=>Zr.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>Zr.getValueFor(i).evaluate(i).focus);const Kx=V("focus-stroke-outer-recipe").withDefault({evaluate:i=>Z0($t.getValueFor(i),nt.getValueFor(i))}),Kr=v("focus-stroke-outer").withDefault(i=>Kx.getValueFor(i).evaluate(i)),tw=V("focus-stroke-inner-recipe").withDefault({evaluate:i=>K0(uc.getValueFor(i),nt.getValueFor(i),Kr.getValueFor(i))}),ew=v("focus-stroke-inner").withDefault(i=>tw.getValueFor(i).evaluate(i)),ta=V("foreground-on-accent-large-recipe").withDefault({evaluate:i=>ff(vt.getValueFor(i),Ge.getValueFor(i),Xe.getValueFor(i),Br.getValueFor(i),or.large)});v("foreground-on-accent-rest-large").withDefault(i=>ta.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>ta.getValueFor(i).evaluate(i,Ge.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>ta.getValueFor(i).evaluate(i,Xe.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>ta.getValueFor(i).evaluate(i,Br.getValueFor(i)).focus);const iw=v("neutral-fill-inverse-rest-delta").withDefault(0),sw=v("neutral-fill-inverse-hover-delta").withDefault(-3),ow=v("neutral-fill-inverse-active-delta").withDefault(7),nw=v("neutral-fill-inverse-focus-delta").withDefault(0);function rw(i,t,e,s,o,n){const r=bs(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),c=r===1?e<s:r*e>r*s;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:i.get(d),hover:i.get(u),active:i.get(d+r*o),focus:i.get(d+r*n)}}const ea=V("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>rw($t.getValueFor(i),t||nt.getValueFor(i),iw.getValueFor(i),sw.getValueFor(i),ow.getValueFor(i),nw.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>ea.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>ea.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>ea.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>ea.getValueFor(i).evaluate(i).focus);const Ot=Ce`
  font-family: ${Ne};
  font-size: ${Hr};
  line-height: ${mf};
  font-weight: initial;
  font-variation-settings: ${lx};
`,lp=Ce`
  font-family: ${Ne};
  font-size: ${oc};
  line-height: ${nc};
  font-weight: initial;
  font-variation-settings: ${cx};
`;Ce`
  font-family: ${Ne};
  font-size: ${rc};
  line-height: ${bf};
  font-weight: initial;
  font-variation-settings: ${dx};
`;Ce`
  font-family: ${Ne};
  font-size: ${ac};
  line-height: ${vf};
  font-weight: initial;
  font-variation-settings: ${hx};
`;Ce`
  font-family: ${Ne};
  font-size: ${Mr};
  line-height: ${yf};
  font-weight: initial;
  font-variation-settings: ${ux};
`;Ce`
  font-family: ${Ne};
  font-size: ${lc};
  line-height: ${xf};
  font-weight: initial;
  font-variation-settings: ${fx};
`;Ce`
  font-family: ${Ne};
  font-size: ${cc};
  line-height: ${wf};
  font-weight: initial;
  font-variation-settings: ${px};
`;Ce`
  font-family: ${Ne};
  font-size: ${dc};
  line-height: ${$f};
  font-weight: initial;
  font-variation-settings: ${gx};
`;Ce`
  font-family: ${Ne};
  font-size: ${hc};
  line-height: ${kf};
  font-weight: initial;
  font-variation-settings: ${mx};
`;const aw=(i,t)=>I`
    ${lt("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Ot}
      color: ${gt};
      gap: calc(${M} * 1px);
    }
  `,Be=Ce`
  outline: calc(${Kt} * 1px) solid ${Kr};
  outline-offset: calc(${Kt} * -1px);
`,Qo=Ce`
  outline: calc(${Kt} * 1px) solid ${Kr};
  outline-offset: calc(${W} * 1px);
`,rt=Ce`(${Pr} + ${qi}) * ${M}`,lw=mt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=ys.getValueFor(i);return Ye.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),cw=mt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=ys.getValueFor(i);return Ye.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),dw=mt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=ys.getValueFor(i);return Ye.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),hw=(i,t)=>I`
    ${lt("flex")} :host {
      box-sizing: border-box;
      ${Ot};
      flex-direction: column;
      background: ${Mx};
      color: ${gt};
      border: calc(${W} * 1px) solid ${Ls};
      border-radius: calc(${hi} * 1px);
    }

    .region {
      display: none;
      padding: calc(${M} * 2 * 1px);
      background: ${Bx};
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
      margin: calc(${M} * 3 * 1px) 0;
      padding: 0 calc(${M} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${W} * -1px);
      left: calc(${W} * -1px);
      right: calc(${W} * -1px);
      bottom: calc(${W} * -1px);
      cursor: pointer;
    }

    .button:${et}::before {
      ${Be}
      border-radius: calc(${hi} * 1px);
    }

    :host(.expanded) .button:${et}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${W} * 1px) solid ${Ls};
      border-bottom-left-radius: calc((${hi} - ${W}) * 1px);
      border-bottom-right-radius: calc((${hi} - ${W}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${lw};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
      width: calc(${rt} * 1px);
      height: calc(${rt} * 1px);
      margin: calc(${M} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${cw};
    }

    .heading:active .icon {
      background: ${dw};
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
      padding-inline-start: calc(${M} * 2 * 1px);
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
  `.withBehaviors(at(I`
        .button:${et}::before {
          outline-color: ${g.Highlight};
        }
        .icon {
          fill: ${g.ButtonText};
        }
      `)),uw=cs.compose({baseName:"accordion-item",template:nv,styles:hw,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),fw=Ql.compose({baseName:"accordion",template:yv,styles:aw});function P(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Ks{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Bn.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new pw(this.ltr,this.rtl,t),s=Bn.getValueFor(t);Bn.subscribe(e),e.attach(s),this.cache.set(t,e)}}class pw{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ws=mt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),gw=mt.create("elevation-shadow-card-rest-size").withDefault(4),mw=mt.create("elevation-shadow-card-hover-size").withDefault(8),bw=mt.create("elevation-shadow-card-active-size").withDefault(0),vw=mt.create("elevation-shadow-card-focus-size").withDefault(8),yw=mt.create("elevation-shadow-card-rest").withDefault(i=>ws.getValueFor(i).evaluate(i,gw.getValueFor(i)));mt.create("elevation-shadow-card-hover").withDefault(i=>ws.getValueFor(i).evaluate(i,mw.getValueFor(i)));mt.create("elevation-shadow-card-active").withDefault(i=>ws.getValueFor(i).evaluate(i,bw.getValueFor(i)));mt.create("elevation-shadow-card-focus").withDefault(i=>ws.getValueFor(i).evaluate(i,vw.getValueFor(i)));const xw=mt.create("elevation-shadow-tooltip-size").withDefault(16),ww=mt.create("elevation-shadow-tooltip").withDefault(i=>ws.getValueFor(i).evaluate(i,xw.getValueFor(i))),$w=mt.create("elevation-shadow-flyout-size").withDefault(32),cp=mt.create("elevation-shadow-flyout").withDefault(i=>ws.getValueFor(i).evaluate(i,$w.getValueFor(i))),kw=mt.create("elevation-shadow-dialog-size").withDefault(128),Cw=mt.create("elevation-shadow-dialog").withDefault(i=>ws.getValueFor(i).evaluate(i,kw.getValueFor(i))),dp=(i,t,e,s="[disabled]")=>I`
    ${lt("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ot}
      height: calc(${rt} * 1px);
      min-width: calc(${rt} * 1px);
      color: ${gt};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${W} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${M} * 2 * ${qi})) * 1px);
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

    .control:${et} {
      ${Be}
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
  `,$c=(i,t,e,s="[disabled]")=>I`
    .control {
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${vc};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${ah}, ${ah}),
        border-box ${rp};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${lh}, ${lh}),
        border-box ${ap};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${Ho};
    }
  `.withBehaviors(at(I`
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

        .control:${et} {
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
    `)),hp=(i,t,e,s="[disabled]")=>I`
    .control {
      background: padding-box linear-gradient(${vt}, ${vt}),
        border-box ${_x};
      color: ${hs};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Ge}, ${Ge}),
        border-box ${Px};
      color: ${tp};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Xe}, ${Xe}),
        border-box ${Hx};
      color: ${ep};
    }

    :host(${s}) .control {
      background: ${vt};
    }

    .control:${et} {
      box-shadow: 0 0 0 calc(${Kt} * 1px) ${ew} inset !important;
    }
  `.withBehaviors(at(I`
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

        .control:${et} {
          outline-color: ${g.CanvasText};
          box-shadow: 0 0 0 calc(${Kt} * 1px) ${g.HighlightText} inset !important;
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
      `)),Sw=(i,t,e,s="[disabled]")=>I`
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
      color: ${ip};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${sp};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${op};
      text-decoration: none;
    }

    .control:${et} {
      ${Qo}
    }
  `.withBehaviors(at(I`
        :host(${e}) .control {
          color: ${g.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${g.CanvasText};
        }

        .control:${et} {
          outline-color: ${g.CanvasText};
        }
      `)),up=(i,t,e,s="[disabled]")=>I`
    :host {
      color: ${ip};
    }

    .control {
      background: ${js};
    }

    :host(${e}:hover) .control {
      background: ${Us};
      color: ${sp};
    }

    :host(${e}:active) .control {
      background: ${qs};
      color: ${op};
    }

    :host(${s}) .control {
      background: ${js};
    }
  `.withBehaviors(at(I`
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

        .control:${et} {
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
      `)),fp=(i,t,e,s="[disabled]")=>I`
    .control {
      background: transparent !important;
      border-color: ${Ho};
    }

    :host(${e}:hover) .control {
      border-color: ${Yx};
    }

    :host(${e}:active) .control {
      border-color: ${Jx};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Ho};
    }
  `.withBehaviors(at(I`
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

        .control:${et} {
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
      `)),kc=(i,t,e,s="[disabled]")=>I`
    .control {
      background: ${js};
    }

    :host(${e}:hover) .control {
      background: ${Us};
    }

    :host(${e}:active) .control {
      background: ${qs};
    }

    :host(${s}) .control {
      background: ${js};
    }
  `.withBehaviors(at(I`
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
        
        .control:${et} {
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
      `)),Fw=mt.create("input-placeholder-rest").withDefault(i=>{const t=Wi.getValueFor(i);return Jo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),Tw=mt.create("input-placeholder-hover").withDefault(i=>{const t=Wi.getValueFor(i);return Jo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Iw=mt.create("input-filled-placeholder-rest").withDefault(i=>{const t=xs.getValueFor(i);return Jo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),Rw=mt.create("input-filled-placeholder-hover").withDefault(i=>{const t=xs.getValueFor(i);return Jo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),ia=(i,t,e)=>I`
  :host {
    ${Ot}
    color: ${gt};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${e} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${W} * 1px) solid transparent;
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
    ${Ot}
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
    cursor: ${Me};
  }

  :host([disabled]) {
    opacity: ${Re};
  }
`,Zo=(i,t,e)=>I`
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
      height: calc(${Kt} * 1px);
      bottom: 0;
      border-bottom: calc(${Kt} * 1px) solid ${vt};
      border-bottom-left-radius: calc(${pt} * 1px);
      border-bottom-right-radius: calc(${pt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Ko=(i,t,e,s=":not([disabled]):not(:focus-within)")=>I`
  ${e} {
    background: padding-box linear-gradient(${Sn}, ${Sn}),
      border-box ${hh};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${ch}, ${ch}),
      border-box ${Zx};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${dh}, ${dh}),
      border-box ${hh};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${Sn}, ${Sn}),
      border-box ${Ho};
  }

  .control::placeholder {
    color: ${Fw};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Tw};
  }
`,to=(i,t,e,s=":not([disabled]):not(:focus-within)")=>I`
  ${e} {
    background: ${us};
  }

  :host(${s}:hover) ${e} {
    background: ${bc};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${jx};
  }

  :host([disabled]) ${e} {
    background: ${us};
  }

  .control::placeholder {
    color: ${Iw};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Rw};
  }
`,eo=(i,t,e,s=":not([disabled]):not(:focus-within)")=>I`
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
    ${Be}
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
`;function It(i,t){return new T0("appearance",i,t)}const Cs="[href]",Dw=(i,t)=>dp().withBehaviors(It("neutral",$c(i,t,Cs)),It("accent",hp(i,t,Cs)),It("hypertext",Sw(i,t,Cs)),It("lightweight",up(i,t,Cs)),It("outline",fp(i,t,Cs)),It("stealth",kc(i,t,Cs)));class pp extends Se{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}P([f],pp.prototype,"appearance",void 0);const Ew=pp.compose({baseName:"anchor",baseClass:Se,template:Yu,styles:Dw,shadowOptions:{delegatesFocus:!0}}),Aw=(i,t)=>I`
  :host {
    contain: layout;
    display: block;
  }
`,Ow=J.compose({baseName:"anchored-region",template:Dv,styles:Aw}),Vw=(i,t)=>I`
    ${lt("inline-block")} :host {
      box-sizing: border-box;
      ${lp};
    }

    .control {
      border-radius: calc(${pt} * 1px);
      padding: calc(((${M} * 0.5) - ${W}) * 1px) calc((${M} - ${W}) * 1px);
      border: calc(${W} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${gt};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${vt};
      color: ${hs};
    }

    :host(.neutral) .control {
      background: ${us};
      color: ${gt};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${nc} - calc(${M} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class gp extends jo{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&K.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}P([f({mode:"fromView"})],gp.prototype,"appearance",void 0);const Lw=gp.compose({baseName:"badge",baseClass:jo,template:Av,styles:Vw}),_w=(i,t)=>I`
  ${lt("inline-block")} :host {
    box-sizing: border-box;
    ${Ot};
  }

  .list {
    display: flex;
  }
`,Pw=Ju.compose({baseName:"breadcrumb",template:Vv,styles:_w}),Hw=(i,t)=>I`
    ${lt("inline-flex")} :host {
      background: transparent;
      color: ${gt};
      fill: currentcolor;
      box-sizing: border-box;
      ${Ot};
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
      color: ${Gx};
    }

    .control:active {
      color: ${Xx};
    }

    .control:${et} {
      ${Qo}
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
  `.withBehaviors(at(I`
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
        .control:${et} {
          outline-color: ${g.LinkText};
        }
      `)),Mw=Vo.compose({baseName:"breadcrumb-item",template:Ov,styles:Hw,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),ts=":not([disabled])",Ii="[disabled]",Nw=(i,t)=>I`
    :host(${ts}) .control {
      cursor: pointer;
    }

    :host(${Ii}) .control {
      cursor: ${Me};
    }

    @media (forced-colors: none) {
      :host(${Ii}) .control {
        opacity: ${Re};
      }
    }

    ${dp(i,t,ts,Ii)}
  `.withBehaviors(It("neutral",$c(i,t,ts,Ii)),It("accent",hp(i,t,ts,Ii)),It("lightweight",up(i,t,ts,Ii)),It("outline",fp(i,t,ts,Ii)),It("stealth",kc(i,t,ts,Ii)));class mp extends Fe{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}P([f],mp.prototype,"appearance",void 0);const Bw=mp.compose({baseName:"button",baseClass:Fe,template:Lv,styles:Nw,shadowOptions:{delegatesFocus:!0}}),zw=I`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,jw=I`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Uw=(i,t)=>I`
${lt("inline-block")} :host {
  --calendar-cell-size: calc((${Pr} + 2 + ${qi}) * ${M} * 1px);
  --calendar-gap: 2px;
  ${Ot}
  color: ${gt};
}

.title {
  padding: calc(${M} * 2px);
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
  border: calc(${W} * 1px) solid transparent;
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
  color: ${Ws};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${W} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${vt};
  border: 1px solid ${vt};
  background: ${nt};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${W} + ${pt}) * 1px);
  margin-inline-start: calc((${pt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${hs};
}

.today .date {
  color: ${hs};
  background: ${vt};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(at(I`
          .day.selected {
              color: ${g.Highlight};
          }

          .today .date {
              background: ${g.Highlight};
              color: ${g.HighlightText};
          }
      `),new Ks(zw,jw));class bp extends He{constructor(){super(...arguments),this.readonly=!0}}P([f({converter:zo})],bp.prototype,"readonly",void 0);const qw=bp.compose({baseName:"calendar",template:Kv,styles:Uw,title:Gv}),Ww=(i,t)=>I`
    ${lt("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${nt};
      color: ${gt};
      border: calc(${W} * 1px) solid ${Ls};
      border-radius: calc(${hi} * 1px);
      box-shadow: ${yw};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(at(I`
        :host {
          background: ${g.Canvas};
          color: ${g.CanvasText};
        }
      `));class Cc extends Qu{cardFillColorChanged(t,e){if(e){const s=ls(e);s!==null&&(this.neutralPaletteSource=e,nt.setValueFor(this,Le.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=ls(e),o=Le.create(s.r,s.g,s.b);$t.setValueFor(this,Po.create(o))}}handleChange(t,e){this.cardFillColor||nt.setValueFor(this,s=>ys.getValueFor(s).evaluate(s,nt.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=tr(this);if(t){const e=Z.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}P([f({attribute:"card-fill-color",mode:"fromView"})],Cc.prototype,"cardFillColor",void 0);P([f({attribute:"neutral-palette-source",mode:"fromView"})],Cc.prototype,"neutralPaletteSource",void 0);const Gw=Cc.compose({baseName:"card",baseClass:Qu,template:ty,styles:Ww}),Xw=(i,t)=>I`
    ${lt("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${rt} / 2 + ${M}) * 1px);
      height: calc((${rt} / 2 + ${M}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      border: calc(${W} * 1px) solid ${Zs};
      background: ${fc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ot}
      color: ${gt};
      ${""} padding-inline-start: calc(${M} * 2px + 2px);
      margin-inline-end: calc(${M} * 2px + 2px);
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
      fill: ${hs};
    }

    :host(:not(.disabled):hover) .control {
      background: ${pc};
      border-color: ${xc};
    }

    :host(:not(.disabled):active) .control {
      background: ${gc};
      border-color: ${wc};
    }

    :host(:${et}) .control {
      background: ${mc};
      ${Qo}
    }

    :host(.checked) .control {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Xe};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Me};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Re};
    }
  `.withBehaviors(at(I`
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
        :host(:${et}) .control {
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
      `)),Yw=Tr.compose({baseName:"checkbox",template:ey,styles:Xw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),uh=".control",Fn=":not([disabled]):not([open])",fh="[disabled]",vp=(i,t)=>I`
    ${lt("inline-flex")}
    
    :host {
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      color: ${gt};
      fill: currentcolor;
      font-family: ${Ne};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${cp};
      background: ${nt};
      border-radius: calc(${hi} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${rt} * 1px));
      padding: calc((${M} - ${W} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${W} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${W} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc(${rt} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Ot}
      min-height: 100%;
      padding: 0 calc(${M} * 2.25px);
      width: 100%;
    }

    :host(:${et}) {
      ${Be}
    }

    :host([disabled]) .control {
      cursor: ${Me};
      opacity: ${Re};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${rt} + ${M} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${rt} + ${M} * 2) * 1px);
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
  `,Jw=(i,t)=>I`
    :host([open]) .listbox {
      background: ${g.ButtonFace};
      border-color: ${g.CanvasText};
    }
  `,Qw=(i,t)=>vp().withBehaviors(It("outline",$c(i,t,Fn,fh)),It("filled",to(i,t,uh,Fn).withBehaviors(at(eo(i,t,uh,Fn)))),It("stealth",kc(i,t,Fn,fh)),at(Jw())),Ma=".control",Na=":not([disabled]):not([open])",Zw=(i,t)=>I`
    ${vp()}

    ${Zo()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Me};
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
      ${Ot}
      height: calc(100% - ${W} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(It("outline",Ko(i,t,Ma,Na)),It("filled",to(i,t,Ma,Na)),at(eo(i,t,Ma,Na)));class yp extends xi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&nt.setValueFor(this.listbox,Yo)}}P([f({mode:"fromView"})],yp.prototype,"appearance",void 0);const Kw=yp.compose({baseName:"combobox",baseClass:xi,shadowOptions:{delegatesFocus:!0},template:ry,styles:Zw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),t$=(i,t)=>I`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,e$=(i,t)=>I`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${W} * 1px) solid ${nr};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${nt};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(at(I`
        :host {
        }
      `)),i$=(i,t)=>I`
    :host {
      padding: calc((${M} + ${Kt} - ${W}) * 1px) calc(((${M} * 3) + ${Kt} - ${W}) * 1px);
      color: ${gt};
      box-sizing: border-box;
      ${Ot}
      border: transparent calc(${W} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${pt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${et}) {
      ${Be}
    }
  `.withBehaviors(at(I`
        :host {
          forced-color-adjust: none;
          background: ${g.Field};
          color: ${g.FieldText};
        }

        :host(:${et}) {
          outline-color: ${g.FieldText};
        }
      `)),s$=yi.compose({baseName:"data-grid-cell",template:Wv,styles:i$}),o$=Yt.compose({baseName:"data-grid-row",template:qv,styles:e$}),n$=jt.compose({baseName:"data-grid",template:Nv,styles:t$}),Sc={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=ls(i);return t?Le.create(t.r,t.g,t.b):null}},ph=I`
  :host {
    background-color: ${nt};
    color: ${gt};
  }
`.withBehaviors(at(I`
      :host {
        background-color: ${g.Canvas};
        box-shadow: 0 0 0 1px ${g.CanvasText};
        color: ${g.CanvasText};
      }
    `));function U(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class j extends tt{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};Z.getNotifier(this).subscribe(t,"fillColor"),Z.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(ph):this.$fastController.removeStyles(ph)}}P([f({attribute:"no-paint",mode:"boolean"})],j.prototype,"noPaint",void 0);P([f({attribute:"fill-color",converter:Sc,mode:"fromView"}),U(nt)],j.prototype,"fillColor",void 0);P([f({attribute:"accent-base-color",converter:Sc,mode:"fromView"}),U(Kf)],j.prototype,"accentBaseColor",void 0);P([f({attribute:"neutral-base-color",converter:Sc,mode:"fromView"}),U(Zf)],j.prototype,"neutralBaseColor",void 0);P([f({converter:N}),U(qi)],j.prototype,"density",void 0);P([f({attribute:"design-unit",converter:N}),U(M)],j.prototype,"designUnit",void 0);P([f({attribute:"direction"}),U(Bn)],j.prototype,"direction",void 0);P([f({attribute:"base-height-multiplier",converter:N}),U(Pr)],j.prototype,"baseHeightMultiplier",void 0);P([f({attribute:"base-horizontal-spacing-multiplier",converter:N}),U(rx)],j.prototype,"baseHorizontalSpacingMultiplier",void 0);P([f({attribute:"control-corner-radius",converter:N}),U(pt)],j.prototype,"controlCornerRadius",void 0);P([f({attribute:"layer-corner-radius",converter:N}),U(hi)],j.prototype,"layerCornerRadius",void 0);P([f({attribute:"stroke-width",converter:N}),U(W)],j.prototype,"strokeWidth",void 0);P([f({attribute:"focus-stroke-width",converter:N}),U(Kt)],j.prototype,"focusStrokeWidth",void 0);P([f({attribute:"disabled-opacity",converter:N}),U(Re)],j.prototype,"disabledOpacity",void 0);P([f({attribute:"type-ramp-minus-2-font-size"}),U(rc)],j.prototype,"typeRampMinus2FontSize",void 0);P([f({attribute:"type-ramp-minus-2-line-height"}),U(bf)],j.prototype,"typeRampMinus2LineHeight",void 0);P([f({attribute:"type-ramp-minus-1-font-size"}),U(oc)],j.prototype,"typeRampMinus1FontSize",void 0);P([f({attribute:"type-ramp-minus-1-line-height"}),U(nc)],j.prototype,"typeRampMinus1LineHeight",void 0);P([f({attribute:"type-ramp-base-font-size"}),U(Hr)],j.prototype,"typeRampBaseFontSize",void 0);P([f({attribute:"type-ramp-base-line-height"}),U(mf)],j.prototype,"typeRampBaseLineHeight",void 0);P([f({attribute:"type-ramp-plus-1-font-size"}),U(ac)],j.prototype,"typeRampPlus1FontSize",void 0);P([f({attribute:"type-ramp-plus-1-line-height"}),U(vf)],j.prototype,"typeRampPlus1LineHeight",void 0);P([f({attribute:"type-ramp-plus-2-font-size"}),U(Mr)],j.prototype,"typeRampPlus2FontSize",void 0);P([f({attribute:"type-ramp-plus-2-line-height"}),U(yf)],j.prototype,"typeRampPlus2LineHeight",void 0);P([f({attribute:"type-ramp-plus-3-font-size"}),U(lc)],j.prototype,"typeRampPlus3FontSize",void 0);P([f({attribute:"type-ramp-plus-3-line-height"}),U(xf)],j.prototype,"typeRampPlus3LineHeight",void 0);P([f({attribute:"type-ramp-plus-4-font-size"}),U(cc)],j.prototype,"typeRampPlus4FontSize",void 0);P([f({attribute:"type-ramp-plus-4-line-height"}),U(wf)],j.prototype,"typeRampPlus4LineHeight",void 0);P([f({attribute:"type-ramp-plus-5-font-size"}),U(dc)],j.prototype,"typeRampPlus5FontSize",void 0);P([f({attribute:"type-ramp-plus-5-line-height"}),U($f)],j.prototype,"typeRampPlus5LineHeight",void 0);P([f({attribute:"type-ramp-plus-6-font-size"}),U(hc)],j.prototype,"typeRampPlus6FontSize",void 0);P([f({attribute:"type-ramp-plus-6-line-height"}),U(kf)],j.prototype,"typeRampPlus6LineHeight",void 0);P([f({attribute:"accent-fill-rest-delta",converter:N}),U(ul)],j.prototype,"accentFillRestDelta",void 0);P([f({attribute:"accent-fill-hover-delta",converter:N}),U(fl)],j.prototype,"accentFillHoverDelta",void 0);P([f({attribute:"accent-fill-active-delta",converter:N}),U(pl)],j.prototype,"accentFillActiveDelta",void 0);P([f({attribute:"accent-fill-focus-delta",converter:N}),U(gl)],j.prototype,"accentFillFocusDelta",void 0);P([f({attribute:"accent-foreground-rest-delta",converter:N}),U(Cf)],j.prototype,"accentForegroundRestDelta",void 0);P([f({attribute:"accent-foreground-hover-delta",converter:N}),U(Sf)],j.prototype,"accentForegroundHoverDelta",void 0);P([f({attribute:"accent-foreground-active-delta",converter:N}),U(Ff)],j.prototype,"accentForegroundActiveDelta",void 0);P([f({attribute:"accent-foreground-focus-delta",converter:N}),U(Tf)],j.prototype,"accentForegroundFocusDelta",void 0);P([f({attribute:"neutral-fill-rest-delta",converter:N}),U(If)],j.prototype,"neutralFillRestDelta",void 0);P([f({attribute:"neutral-fill-hover-delta",converter:N}),U(Rf)],j.prototype,"neutralFillHoverDelta",void 0);P([f({attribute:"neutral-fill-active-delta",converter:N}),U(Df)],j.prototype,"neutralFillActiveDelta",void 0);P([f({attribute:"neutral-fill-focus-delta",converter:N}),U(Ef)],j.prototype,"neutralFillFocusDelta",void 0);P([f({attribute:"neutral-fill-input-rest-delta",converter:N}),U(Af)],j.prototype,"neutralFillInputRestDelta",void 0);P([f({attribute:"neutral-fill-input-hover-delta",converter:N}),U(Of)],j.prototype,"neutralFillInputHoverDelta",void 0);P([f({attribute:"neutral-fill-input-active-delta",converter:N}),U(Vf)],j.prototype,"neutralFillInputActiveDelta",void 0);P([f({attribute:"neutral-fill-input-focus-delta",converter:N}),U(Lf)],j.prototype,"neutralFillInputFocusDelta",void 0);P([f({attribute:"neutral-fill-layer-rest-delta",converter:N}),U(Bi)],j.prototype,"neutralFillLayerRestDelta",void 0);P([f({attribute:"neutral-fill-stealth-rest-delta",converter:N}),U(_f)],j.prototype,"neutralFillStealthRestDelta",void 0);P([f({attribute:"neutral-fill-stealth-hover-delta",converter:N}),U(Pf)],j.prototype,"neutralFillStealthHoverDelta",void 0);P([f({attribute:"neutral-fill-stealth-active-delta",converter:N}),U(Hf)],j.prototype,"neutralFillStealthActiveDelta",void 0);P([f({attribute:"neutral-fill-stealth-focus-delta",converter:N}),U(Mf)],j.prototype,"neutralFillStealthFocusDelta",void 0);P([f({attribute:"neutral-fill-strong-hover-delta",converter:N}),U(Nf)],j.prototype,"neutralFillStrongHoverDelta",void 0);P([f({attribute:"neutral-fill-strong-active-delta",converter:N}),U(Bf)],j.prototype,"neutralFillStrongActiveDelta",void 0);P([f({attribute:"neutral-fill-strong-focus-delta",converter:N}),U(zf)],j.prototype,"neutralFillStrongFocusDelta",void 0);P([f({attribute:"base-layer-luminance",converter:N}),U(vs)],j.prototype,"baseLayerLuminance",void 0);P([f({attribute:"neutral-stroke-divider-rest-delta",converter:N}),U(Qf)],j.prototype,"neutralStrokeDividerRestDelta",void 0);P([f({attribute:"neutral-stroke-rest-delta",converter:N}),U(jf)],j.prototype,"neutralStrokeRestDelta",void 0);P([f({attribute:"neutral-stroke-hover-delta",converter:N}),U(Uf)],j.prototype,"neutralStrokeHoverDelta",void 0);P([f({attribute:"neutral-stroke-active-delta",converter:N}),U(qf)],j.prototype,"neutralStrokeActiveDelta",void 0);P([f({attribute:"neutral-stroke-focus-delta",converter:N}),U(Wf)],j.prototype,"neutralStrokeFocusDelta",void 0);const r$=j.compose({baseName:"design-system-provider",template:D` <slot></slot> `,styles:I`
    ${lt("block")}
  `}),a$=(i,t)=>I`
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
    box-shadow: ${Cw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${hi} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${nt};
    z-index: 1;
    border: calc(${W} * 1px) solid transparent;
  }
`,l$=Oe.compose({baseName:"dialog",template:xy,styles:a$}),c$=(i,t)=>I`
    ${lt("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${W} * 1px) solid ${nr};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${M} * 1px);
      border-left: calc(${W} * 1px) solid ${nr};
  }
  `,d$=Rr.compose({baseName:"divider",template:Oy,styles:c$}),h$=(i,t)=>I`
    ${lt("inline-flex")} :host {
      height: calc((${rt} + ${M}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${np};
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${vc};
      box-sizing: border-box;
      border: calc(${W} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Re};
      cursor: ${Me};
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
      color: ${qx};
    }

    :host(:not(.disabled):active) {
      color: ${Wx};
    }

    :host(:${et}) {
      ${Be}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(at(I`
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
        :host(:${et}) {
          forced-color-adjust: none;
          outline-color: ${g.Highlight};
        }
      `)),u$=Dr.compose({baseName:"flipper",template:Ly,styles:h$,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),f$=I`
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
`,p$=I`
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
`,g$=I`
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
`.withBehaviors(new Ks(f$,p$)),m$=(i,t)=>I`
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
`;class b$ extends wi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(g$)}}const v$=b$.compose({baseName:"horizontal-scroll",baseClass:wi,template:Ky,styles:m$,nextFlipper:D`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:D`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),y$=(i,t)=>I`
    ${lt("inline-flex")} :host {
      border: calc(${W} * 1px) solid ${Ho};
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${M} * 1px) 0;
    }

    ::slotted(${i.tagFor(ni)}) {
      margin: 0 calc(${M} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Be}
    }
  `;class x$ extends ve{}const w$=x$.compose({baseName:"listbox",template:Py,styles:y$}),$$=(i,t)=>I`
    ${lt("inline-flex")} :host {
      position: relative;
      ${Ot}
      background: ${js};
      border-radius: calc(${pt} * 1px);
      border: calc(${W} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${gt};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${rt} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${M} * 3) - ${W} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Kt} - ${W}) * 1px);
      top: calc((${rt} / 4) - ${Kt} * 1px);
      width: 3px;
      height: calc((${rt} / 2) * 1px);
      background: transparent;
      border-radius: calc(${pt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Us};
    }

    :host(:not([disabled]):active) {
      background: ${qs};
    }

    :host(:not([disabled]):active)::before {
      background: ${vt};
      height: calc(((${rt} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${vt};
    }

    :host(:${et}) {
      ${Be}
      background: ${Ux};
    }

    :host([aria-selected='true']) {
      background: ${us};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${bc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${zx};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Us};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${qs};
    }

    :host([disabled]) {
      cursor: ${Me};
      opacity: ${Re};
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
  `.withBehaviors(new Ks(null,I`
      :host::before {
        right: calc((${Kt} - ${W}) * 1px);
      }
    `),at(I`
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
        :host(:${et}) {
          outline-color: ${g.CanvasText};
        }
      `)),k$=ni.compose({baseName:"option",template:_y,styles:$$}),C$=(i,t)=>I`
    ${lt("block")} :host {
      background: ${Yo};
      border: calc(${W} * 1px) solid transparent;
      border-radius: calc(${hi} * 1px);
      box-shadow: ${cp};
      padding: calc((${M} - ${W}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${M} * 2px);
    }

    ::slotted(${i.tagFor(Te)}) {
      margin: 0 calc(${M} * 1px);
    }

    ::slotted(${i.tagFor(Rr)}) {
      margin: calc(${M} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${M} * 1px) 0;
      border: none;
      border-top: calc(${W} * 1px) solid ${nr};
    }
  `.withBehaviors(at(I`
        :host([slot='submenu']) {
          background: ${g.Canvas};
          border-color: ${g.CanvasText};
        }
      `));class S$ extends Er{connectedCallback(){super.connectedCallback(),nt.setValueFor(this,Yo)}}const F$=S$.compose({baseName:"menu",baseClass:Er,template:Ny,styles:C$}),T$=(i,t)=>I`
    ${lt("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Ot}
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
      border: calc(${W} * 1px) solid transparent;
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

    :host(:${et}) {
      ${Be}
    }

    :host(:not([disabled]):hover) {
      background: ${Us};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${qs};
      color: ${gt};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Me};
      opacity: ${Re};
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
      color: ${Ws};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(at(I`
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
        :host(:${et}) ::slotted([slot='end']:not(svg)) {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:${et}) {
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
        :host([disabled]:${et}) {
          background: ${g.ButtonFace};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${et}) {
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
            :host(:${et}) .expanded-toggle,
            :host(:${et}) .checkbox,
            :host(:${et}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${et}) .checkbox,
            :host([checked]:${et}) .radio {
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
      `),new Ks(I`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,I`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),I$=Te.compose({baseName:"menu-item",template:My,styles:T$,checkboxIndicator:`
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
  `}),Tn=".root",R$=(i,t)=>I`
    ${lt("inline-block")}

    ${ia(i,t,Tn)}

    ${Zo()}

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
      padding: 0 calc(${M} * 2px + 1px);
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
  `.withBehaviors(It("outline",Ko(i,t,Tn)),It("filled",to(i,t,Tn)),at(eo(i,t,Tn)));class xp extends he{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],xp.prototype,"appearance",void 0);const D$=xp.compose({baseName:"number-field",baseClass:he,styles:R$,template:By,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),E$=(i,t)=>I`
    ${lt("flex")} :host {
      align-items: center;
      height: calc((${W} * 3) * 1px);
    }

    .progress {
      background-color: ${Zs};
      border-radius: calc(${M} * 1px);
      width: 100%;
      height: calc(${W} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${vt};
      border-radius: calc(${M} * 1px);
      height: calc((${W} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${W} * 3) * 1px);
      border-radius: calc(${M} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${vt};
      border-radius: calc(${M} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${vt};
      border-radius: calc(${M} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Ws};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Ws};
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
  `.withBehaviors(at(I`
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
      `));class A$ extends ms{}const O$=A$.compose({baseName:"progress",template:Xy,styles:E$,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),V$=(i,t)=>I`
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
      stroke: ${vt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${vt};
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
      stroke: ${Ws};
    }

    :host(.paused) .determinate {
      stroke: ${Ws};
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
  `.withBehaviors(at(I`
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
      `));class L$ extends ms{}const _$=L$.compose({baseName:"progress-ring",template:Gy,styles:V$,indeterminateIndicator:`
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
  `}),P$=(i,t)=>I`
    ${lt("inline-flex")} :host {
      --input-size: calc((${rt} / 2) + ${M});
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
      border: calc(${W} * 1px) solid ${Zs};
      background: ${fc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ot}
      color: ${gt};
      ${""} padding-inline-start: calc(${M} * 2px + 2px);
      margin-inline-end: calc(${M} * 2px + 2px);
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
      fill: ${hs};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${pc};
      border-color: ${xc};
    }

    :host(:not(.disabled):active) .control {
      background: ${gc};
      border-color: ${wc};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${et}) .control {
      ${Qo}
      background: ${mc};
    }

    :host(.checked) .control {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Xe};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Me};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Re};
    }
  `.withBehaviors(at(I`
        .control {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
        }
        :host(:${et}) .control {
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
      `)),H$=Or.compose({baseName:"radio",template:Jy,styles:P$,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),M$=(i,t)=>I`
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
`,N$=ji.compose({baseName:"radio-group",template:Yy,styles:M$}),B$=(i,t)=>D`
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
      <slot ${St({property:"defaultSlottedNodes",filter:lf})}></slot>
    </label>
    <div class="root" part="root" ${ut("root")}>
      ${de(i,t)}
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
      ${ce(i,t)}
    </div>
  </template>
`,In=".root",z$=mt.create("clear-button-hover").withDefault(i=>{const t=Ye.getValueFor(i),e=Wi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),j$=mt.create("clear-button-active").withDefault(i=>{const t=Ye.getValueFor(i),e=Wi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),U$=(i,t)=>I`
    ${lt("inline-block")}

    ${ia(i,t,In)}

    ${Zo()}

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
      padding: 0 calc(${M} * 2px + 1px);
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
      ${Ot}
      outline: none;
      padding: 0 calc((10 + (${M} * 2 * ${qi})) * 1px);
    }
    .clear-button:hover {
      background: ${z$};
    }
    .clear-button:active {
      background: ${j$};
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
    ::slotted(${i.tagFor(Fe)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(It("outline",Ko(i,t,In)),It("filled",to(i,t,In)),at(eo(i,t,In)));class wp extends Ie{constructor(){super(...arguments),this.appearance="outline"}}P([f],wp.prototype,"appearance",void 0);const q$=wp.compose({baseName:"search",baseClass:Ie,template:B$,styles:U$,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class $p extends $i{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&nt.setValueFor(this.listbox,Yo)}}P([f({mode:"fromView"})],$p.prototype,"appearance",void 0);const W$=$p.compose({baseName:"select",baseClass:$i,template:o0,styles:Qw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),G$=(i,t)=>I`
    ${lt("block")} :host {
      --skeleton-fill-default: ${us};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${bc} 51%,
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
      background-color: var(--skeleton-animation-fill, ${us});
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
  `.withBehaviors(at(I`
        :host{
          background-color: ${g.CanvasText};
        }
      `)),X$=qo.compose({baseName:"skeleton",template:n0,styles:G$}),Y$=(i,t)=>I`
    ${lt("inline-grid")} :host {
      --thumb-size: calc((${rt} / 2) + ${M} + (${W} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${M} / 2) * -1);
      --track-width: ${M};
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
    :host(:${et}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${nt}, 0 0 0 4px ${Kr};
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
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${vc};
      border: calc(${W} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${vt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Ge};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Xe};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${rp};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Ee}, ${Ee}),
        border-box ${ap};
    }
    .track-start {
      background: ${vt};
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
      background: ${np};
      border: 1px solid ${Zs};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${M} * 60px);
      min-width: calc(${M} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Me};
    }
    :host(.disabled) {
      opacity: ${Re};
    }
  `.withBehaviors(at(I`
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
        :host(:${et}) .thumb-cursor {
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
      `)),J$=te.compose({baseName:"slider",template:a0,styles:Y$,thumb:`
    <div class="thumb-cursor"></div>
  `}),Q$=(i,t)=>I`
    ${lt("block")} :host {
      ${lp}
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
      width: calc(${W} * 1px);
      height: calc(${M} * 1px);
      background: ${Zs};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${M} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${Re};
    }
  `.withBehaviors(at(I`
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
      `)),Z$=ki.compose({baseName:"slider-label",template:r0,styles:Q$}),K$=(i,t)=>I`
    :host([hidden]) {
      display: none;
    }

    ${lt("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Ne};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Re};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Me};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${rt} / 2) + ${M}) * 2px);
      height: calc(((${rt} / 2) + ${M}) * 1px);
      background: ${fc};
      border-radius: calc(${rt} * 1px);
      border: calc(${W} * 1px) solid ${Zs};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${pc};
      border-color: ${xc};
    }

    :host(:not(.disabled):active) .switch {
      background: ${gc};
      border-color: ${wc};
    }

    :host(:${et}) .switch {
      ${Qo}
      background: ${mc};
    }

    :host(.checked) .switch {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ge};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Xe};
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
      ${Ot}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${gt};
      ${Ot}
      margin-inline-end: calc(${M} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${M} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${vt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${hs};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ge};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${tp};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Xe};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${ep};
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
  `.withBehaviors(new Ks(I`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,I`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),at(I`
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
        :host(:${et}) .switch {
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
      `)),t1=ec.compose({baseName:"switch",template:h0,styles:K$,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),e1=(i,t)=>I`
      ${lt("grid")} :host {
        box-sizing: border-box;
        ${Ot}
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
        background: ${vt};
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
        margin-inline-start: calc(${Kt} * 1px);
        border-radius: calc(${pt} * 1px);
        align-self: center;
        background: ${vt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(at(I`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${g.Highlight};
        }
      `)),i1=(i,t)=>I`
      ${lt("inline-flex")} :host {
        box-sizing: border-box;
        ${Ot}
        height: calc((${rt} + (${M} * 2)) * 1px);
        padding: 0 calc((6 + (${M} * 2 * ${qi})) * 1px);
        color: ${gt};
        border-radius: calc(${pt} * 1px);
        border: calc(${W} * 1px) solid transparent;
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

      :host(:${et}) {
        ${Be}
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
    `.withBehaviors(at(I`
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
          :host(:${et}) {
            background: transparent;
            outline-color: ${g.ButtonText};
          }
        `)),s1=df.compose({baseName:"tab",template:m0,styles:i1}),o1=(i,t)=>I`
  ${lt("block")} :host {
    box-sizing: border-box;
    ${Ot}
    padding: 0 calc((6 + (${M} * 2 * ${qi})) * 1px);
  }
`,n1=g0.compose({baseName:"tab-panel",template:p0,styles:o1}),r1=Ci.compose({baseName:"tabs",template:b0,styles:e1}),Rn=".control",a1=(i,t)=>I`
    ${lt("inline-flex")}

    ${ia(i,t,Rn)}

    ${Zo()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${rt} * 2) * 1px);
      padding: calc(${M} * 1.5px) calc(${M} * 2px + 1px);
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
  `.withBehaviors(It("outline",Ko(i,t,Rn)),It("filled",to(i,t,Rn)),at(eo(i,t,Rn)));class kp extends ee{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],kp.prototype,"appearance",void 0);const l1=kp.compose({baseName:"text-area",baseClass:ee,template:x0,styles:a1,shadowOptions:{delegatesFocus:!0}}),Dn=".root",c1=(i,t)=>I`
    ${lt("inline-block")}

    ${ia(i,t,Dn)}

    ${Zo()}

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
      padding: 0 calc(${M} * 2px + 1px);
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
  `.withBehaviors(It("outline",Ko(i,t,Dn)),It("filled",to(i,t,Dn)),at(eo(i,t,Dn)));class Cp extends ye{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}P([f],Cp.prototype,"appearance",void 0);const d1=Cp.compose({baseName:"text-field",baseClass:ye,template:w0,styles:c1,shadowOptions:{delegatesFocus:!0}}),h1=(i,t)=>I`
    ${lt("inline-flex")} :host {
      --toolbar-item-gap: calc(${M} * 1px);
      background: ${nt};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${et}) {
      ${Be}
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
  `.withBehaviors(at(I`
        :host(:${et}) {
          outline-color: ${g.Highlight};
          color: ${g.ButtonText};
          forced-color-adjust: none;
        }
      `));class u1 extends Ui{}const f1=u1.compose({baseName:"toolbar",baseClass:Ui,template:$0,styles:h1}),p1=(i,t)=>I`
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
      border: calc(${W} * 1px) solid ${Ls};
      background: ${nt};
      color: ${gt};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Ot}
      white-space: nowrap;
      box-shadow: ${ww};
    }

    ${i.tagFor(J)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(J)}.right,
    ${i.tagFor(J)}.left {
      flex-direction: column;
    }

    ${i.tagFor(J)}.top .tooltip::after,
    ${i.tagFor(J)}.bottom .tooltip::after,
    ${i.tagFor(J)}.left .tooltip::after,
    ${i.tagFor(J)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${nt};
      border-top: calc(${W} * 1px) solid ${Ls};
      border-left: calc(${W} * 1px) solid ${Ls};
      position: absolute;
    }

    ${i.tagFor(J)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(J)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(J)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(J)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(J)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(J)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(J)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(J)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(at(I`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(J)}.top .tooltip::after,
        ${i.tagFor(J)}.bottom .tooltip::after,
        ${i.tagFor(J)}.left .tooltip::after,
        ${i.tagFor(J)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class g1 extends Ht{connectedCallback(){super.connectedCallback(),nt.setValueFor(this,Yo)}}const m1=g1.compose({baseName:"tooltip",baseClass:Ht,template:k0,styles:p1}),b1=(i,t)=>I`
  :host([hidden]) {
    display: none;
  }

  ${lt("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,v1=Lr.compose({baseName:"tree-view",template:S0,styles:b1}),y1=I`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    left: calc(${Kt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,x1=I`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    right: calc(${Kt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,gh=Ce`((${Pr} / 2) * ${M}) + ((${M} * ${qi}) / 2)`,w1=mt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=Ye.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),$1=mt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=xs.getValueFor(i);return Ye.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),k1=(i,t)=>I`
    ${lt("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${gt};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Ne};
      --expand-collapse-button-size: calc(${rt} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${js};
      border: calc(${W} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc((${rt} + 1) * 1px);
    }

    :host(:${et}) .positioning-region {
      ${Be}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Us};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${qs};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${rt} * 1px);
      margin-inline-start: calc(${M} * 2px + 8px);
      ${Ot}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${M} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${pt} * 1px);
      ${""} width: calc((${gh} + (${M} * 2)) * 1px);
      height: calc((${gh} + (${M} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${M} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${M} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Re};
      cursor: ${Me};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${w1};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${us};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${$1};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${rt} / 4) * 1px);
      width: 3px;
      height: calc((${rt} / 2) * 1px);
      ${""} background: ${vt};
      border-radius: calc(${pt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${rt} * -1px);
    }
  `.withBehaviors(new Ks(y1,x1),at(I`
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
        :host(:${et}) .positioning-region {
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
      `)),C1=Nt.compose({baseName:"tree-item",template:C0,styles:k1,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),S1={fluentAccordion:fw,fluentAccordionItem:uw,fluentAnchor:Ew,fluentAnchoredRegion:Ow,fluentBadge:Lw,fluentBreadcrumb:Pw,fluentBreadcrumbItem:Mw,fluentButton:Bw,fluentCalendar:qw,fluentCard:Gw,fluentCheckbox:Yw,fluentCombobox:Kw,fluentDataGrid:n$,fluentDataGridCell:s$,fluentDataGridRow:o$,fluentDesignSystemProvider:r$,fluentDialog:l$,fluentDivider:d$,fluentFlipper:u$,fluentHorizontalScroll:v$,fluentListbox:w$,fluentOption:k$,fluentMenu:F$,fluentMenuItem:I$,fluentNumberField:D$,fluentProgress:O$,fluentProgressRing:_$,fluentRadio:H$,fluentRadioGroup:N$,fluentSearch:q$,fluentSelect:W$,fluentSkeleton:X$,fluentSlider:J$,fluentSliderLabel:Z$,fluentSwitch:t1,fluentTabs:r1,fluentTab:s1,fluentTabPanel:n1,fluentTextArea:l1,fluentTextField:d1,fluentToolbar:f1,fluentTooltip:m1,fluentTreeView:v1,fluentTreeItem:C1,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function F1(i){return tf.getOrCreate(i).withPrefix("fluent")}function Sp(i,t){return function(){return i.apply(t,arguments)}}const{toString:T1}=Object.prototype,{getPrototypeOf:Fc}=Object,sa=(i=>t=>{const e=T1.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),ri=i=>(i=i.toLowerCase(),t=>sa(t)===i),oa=i=>t=>typeof t===i,{isArray:io}=Array,Mo=oa("undefined");function I1(i){return i!==null&&!Mo(i)&&i.constructor!==null&&!Mo(i.constructor)&&Ve(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Fp=ri("ArrayBuffer");function R1(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&Fp(i.buffer),t}const D1=oa("string"),Ve=oa("function"),Tp=oa("number"),na=i=>i!==null&&typeof i=="object",E1=i=>i===!0||i===!1,zn=i=>{if(sa(i)!=="object")return!1;const t=Fc(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},A1=ri("Date"),O1=ri("File"),V1=ri("Blob"),L1=ri("FileList"),_1=i=>na(i)&&Ve(i.pipe),P1=i=>{let t;return i&&(typeof FormData=="function"&&i instanceof FormData||Ve(i.append)&&((t=sa(i))==="formdata"||t==="object"&&Ve(i.toString)&&i.toString()==="[object FormData]"))},H1=ri("URLSearchParams"),M1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function tn(i,t,{allOwnKeys:e=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),io(i))for(s=0,o=i.length;s<o;s++)t.call(null,i[s],s,i);else{const n=e?Object.getOwnPropertyNames(i):Object.keys(i),r=n.length;let a;for(s=0;s<r;s++)a=n[s],t.call(null,i[a],a,i)}}function Ip(i,t){t=t.toLowerCase();const e=Object.keys(i);let s=e.length,o;for(;s-- >0;)if(o=e[s],t===o.toLowerCase())return o;return null}const Rp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dp=i=>!Mo(i)&&i!==Rp;function ml(){const{caseless:i}=Dp(this)&&this||{},t={},e=(s,o)=>{const n=i&&Ip(t,o)||o;zn(t[n])&&zn(s)?t[n]=ml(t[n],s):zn(s)?t[n]=ml({},s):io(s)?t[n]=s.slice():t[n]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&tn(arguments[s],e);return t}const N1=(i,t,e,{allOwnKeys:s}={})=>(tn(t,(o,n)=>{e&&Ve(o)?i[n]=Sp(o,e):i[n]=o},{allOwnKeys:s}),i),B1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),z1=(i,t,e,s)=>{i.prototype=Object.create(t.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:t.prototype}),e&&Object.assign(i.prototype,e)},j1=(i,t,e,s)=>{let o,n,r;const a={};if(t=t||{},i==null)return t;do{for(o=Object.getOwnPropertyNames(i),n=o.length;n-- >0;)r=o[n],(!s||s(r,i,t))&&!a[r]&&(t[r]=i[r],a[r]=!0);i=e!==!1&&Fc(i)}while(i&&(!e||e(i,t))&&i!==Object.prototype);return t},U1=(i,t,e)=>{i=String(i),(e===void 0||e>i.length)&&(e=i.length),e-=t.length;const s=i.indexOf(t,e);return s!==-1&&s===e},q1=i=>{if(!i)return null;if(io(i))return i;let t=i.length;if(!Tp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=i[t];return e},W1=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&Fc(Uint8Array)),G1=(i,t)=>{const s=(i&&i[Symbol.iterator]).call(i);let o;for(;(o=s.next())&&!o.done;){const n=o.value;t.call(i,n[0],n[1])}},X1=(i,t)=>{let e;const s=[];for(;(e=i.exec(t))!==null;)s.push(e);return s},Y1=ri("HTMLFormElement"),J1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,s,o){return s.toUpperCase()+o}),mh=(({hasOwnProperty:i})=>(t,e)=>i.call(t,e))(Object.prototype),Q1=ri("RegExp"),Ep=(i,t)=>{const e=Object.getOwnPropertyDescriptors(i),s={};tn(e,(o,n)=>{let r;(r=t(o,n,i))!==!1&&(s[n]=r||o)}),Object.defineProperties(i,s)},Z1=i=>{Ep(i,(t,e)=>{if(Ve(i)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const s=i[e];if(Ve(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},K1=(i,t)=>{const e={},s=o=>{o.forEach(n=>{e[n]=!0})};return io(i)?s(i):s(String(i).split(t)),e},tk=()=>{},ek=(i,t)=>(i=+i,Number.isFinite(i)?i:t),Ba="abcdefghijklmnopqrstuvwxyz",bh="0123456789",Ap={DIGIT:bh,ALPHA:Ba,ALPHA_DIGIT:Ba+Ba.toUpperCase()+bh},ik=(i=16,t=Ap.ALPHA_DIGIT)=>{let e="";const{length:s}=t;for(;i--;)e+=t[Math.random()*s|0];return e};function sk(i){return!!(i&&Ve(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const ok=i=>{const t=new Array(10),e=(s,o)=>{if(na(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[o]=s;const n=io(s)?[]:{};return tn(s,(r,a)=>{const l=e(r,o+1);!Mo(l)&&(n[a]=l)}),t[o]=void 0,n}}return s};return e(i,0)},nk=ri("AsyncFunction"),rk=i=>i&&(na(i)||Ve(i))&&Ve(i.then)&&Ve(i.catch),C={isArray:io,isArrayBuffer:Fp,isBuffer:I1,isFormData:P1,isArrayBufferView:R1,isString:D1,isNumber:Tp,isBoolean:E1,isObject:na,isPlainObject:zn,isUndefined:Mo,isDate:A1,isFile:O1,isBlob:V1,isRegExp:Q1,isFunction:Ve,isStream:_1,isURLSearchParams:H1,isTypedArray:W1,isFileList:L1,forEach:tn,merge:ml,extend:N1,trim:M1,stripBOM:B1,inherits:z1,toFlatObject:j1,kindOf:sa,kindOfTest:ri,endsWith:U1,toArray:q1,forEachEntry:G1,matchAll:X1,isHTMLForm:Y1,hasOwnProperty:mh,hasOwnProp:mh,reduceDescriptors:Ep,freezeMethods:Z1,toObjectSet:K1,toCamelCase:J1,noop:tk,toFiniteNumber:ek,findKey:Ip,global:Rp,isContextDefined:Dp,ALPHABET:Ap,generateString:ik,isSpecCompliantForm:sk,toJSONObject:ok,isAsyncFn:nk,isThenable:rk};function dt(i,t,e,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),s&&(this.request=s),o&&(this.response=o)}C.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Op=dt.prototype,Vp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Vp[i]={value:i}});Object.defineProperties(dt,Vp);Object.defineProperty(Op,"isAxiosError",{value:!0});dt.from=(i,t,e,s,o,n)=>{const r=Object.create(Op);return C.toFlatObject(i,r,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),dt.call(r,i.message,t,e,s,o),r.cause=i,r.name=i.name,n&&Object.assign(r,n),r};const ak=null;function bl(i){return C.isPlainObject(i)||C.isArray(i)}function Lp(i){return C.endsWith(i,"[]")?i.slice(0,-2):i}function vh(i,t,e){return i?i.concat(t).map(function(o,n){return o=Lp(o),!e&&n?"["+o+"]":o}).join(e?".":""):t}function lk(i){return C.isArray(i)&&!i.some(bl)}const ck=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function ra(i,t,e){if(!C.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,e=C.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,S){return!C.isUndefined(S[k])});const s=e.metaTokens,o=e.visitor||d,n=e.dots,r=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(o))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(C.isDate(y))return y.toISOString();if(!l&&C.isBlob(y))throw new dt("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(y)||C.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,k,S){let Q=y;if(y&&!S&&typeof y=="object"){if(C.endsWith(k,"{}"))k=s?k:k.slice(0,-2),y=JSON.stringify(y);else if(C.isArray(y)&&lk(y)||(C.isFileList(y)||C.endsWith(k,"[]"))&&(Q=C.toArray(y)))return k=Lp(k),Q.forEach(function(A,q){!(C.isUndefined(A)||A===null)&&t.append(r===!0?vh([k],q,n):r===null?k:k+"[]",c(A))}),!1}return bl(y)?!0:(t.append(vh(S,k,n),c(y)),!1)}const u=[],b=Object.assign(ck,{defaultVisitor:d,convertValue:c,isVisitable:bl});function w(y,k){if(!C.isUndefined(y)){if(u.indexOf(y)!==-1)throw Error("Circular reference detected in "+k.join("."));u.push(y),C.forEach(y,function(Q,B){(!(C.isUndefined(Q)||Q===null)&&o.call(t,Q,C.isString(B)?B.trim():B,k,b))===!0&&w(Q,k?k.concat(B):[B])}),u.pop()}}if(!C.isObject(i))throw new TypeError("data must be an object");return w(i),t}function yh(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function Tc(i,t){this._pairs=[],i&&ra(i,this,t)}const _p=Tc.prototype;_p.append=function(t,e){this._pairs.push([t,e])};_p.toString=function(t){const e=t?function(s){return t.call(this,s,yh)}:yh;return this._pairs.map(function(o){return e(o[0])+"="+e(o[1])},"").join("&")};function dk(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pp(i,t,e){if(!t)return i;const s=e&&e.encode||dk,o=e&&e.serialize;let n;if(o?n=o(t,e):n=C.isURLSearchParams(t)?t.toString():new Tc(t,e).toString(s),n){const r=i.indexOf("#");r!==-1&&(i=i.slice(0,r)),i+=(i.indexOf("?")===-1?"?":"&")+n}return i}class xh{constructor(){this.handlers=[]}use(t,e,s){return this.handlers.push({fulfilled:t,rejected:e,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Hp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hk=typeof URLSearchParams<"u"?URLSearchParams:Tc,uk=typeof FormData<"u"?FormData:null,fk=typeof Blob<"u"?Blob:null,pk={isBrowser:!0,classes:{URLSearchParams:hk,FormData:uk,Blob:fk},protocols:["http","https","file","blob","url","data"]},Mp=typeof window<"u"&&typeof document<"u",gk=(i=>Mp&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),mk=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bk=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Mp,hasStandardBrowserEnv:gk,hasStandardBrowserWebWorkerEnv:mk},Symbol.toStringTag,{value:"Module"})),ii={...bk,...pk};function vk(i,t){return ra(i,new ii.classes.URLSearchParams,Object.assign({visitor:function(e,s,o,n){return ii.isNode&&C.isBuffer(e)?(this.append(s,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}function yk(i){return C.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function xk(i){const t={},e=Object.keys(i);let s;const o=e.length;let n;for(s=0;s<o;s++)n=e[s],t[n]=i[n];return t}function Np(i){function t(e,s,o,n){let r=e[n++];if(r==="__proto__")return!0;const a=Number.isFinite(+r),l=n>=e.length;return r=!r&&C.isArray(o)?o.length:r,l?(C.hasOwnProp(o,r)?o[r]=[o[r],s]:o[r]=s,!a):((!o[r]||!C.isObject(o[r]))&&(o[r]=[]),t(e,s,o[r],n)&&C.isArray(o[r])&&(o[r]=xk(o[r])),!a)}if(C.isFormData(i)&&C.isFunction(i.entries)){const e={};return C.forEachEntry(i,(s,o)=>{t(yk(s),o,e,0)}),e}return null}function wk(i,t,e){if(C.isString(i))try{return(t||JSON.parse)(i),C.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(e||JSON.stringify)(i)}const Ic={transitional:Hp,adapter:["xhr","http"],transformRequest:[function(t,e){const s=e.getContentType()||"",o=s.indexOf("application/json")>-1,n=C.isObject(t);if(n&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return o?JSON.stringify(Np(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(n){if(s.indexOf("application/x-www-form-urlencoded")>-1)return vk(t,this.formSerializer).toString();if((a=C.isFileList(t))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ra(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return n||o?(e.setContentType("application/json",!1),wk(t)):t}],transformResponse:[function(t){const e=this.transitional||Ic.transitional,s=e&&e.forcedJSONParsing,o=this.responseType==="json";if(t&&C.isString(t)&&(s&&!this.responseType||o)){const r=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(r)throw a.name==="SyntaxError"?dt.from(a,dt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ii.classes.FormData,Blob:ii.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],i=>{Ic.headers[i]={}});const Rc=Ic,$k=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kk=i=>{const t={};let e,s,o;return i&&i.split(`
`).forEach(function(r){o=r.indexOf(":"),e=r.substring(0,o).trim().toLowerCase(),s=r.substring(o+1).trim(),!(!e||t[e]&&$k[e])&&(e==="set-cookie"?t[e]?t[e].push(s):t[e]=[s]:t[e]=t[e]?t[e]+", "+s:s)}),t},wh=Symbol("internals");function po(i){return i&&String(i).trim().toLowerCase()}function jn(i){return i===!1||i==null?i:C.isArray(i)?i.map(jn):String(i)}function Ck(i){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=e.exec(i);)t[s[1]]=s[2];return t}const Sk=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function za(i,t,e,s,o){if(C.isFunction(s))return s.call(this,t,e);if(o&&(t=e),!!C.isString(t)){if(C.isString(s))return t.indexOf(s)!==-1;if(C.isRegExp(s))return s.test(t)}}function Fk(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,s)=>e.toUpperCase()+s)}function Tk(i,t){const e=C.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+e,{value:function(o,n,r){return this[s].call(this,t,o,n,r)},configurable:!0})})}class aa{constructor(t){t&&this.set(t)}set(t,e,s){const o=this;function n(a,l,c){const d=po(l);if(!d)throw new Error("header name must be a non-empty string");const u=C.findKey(o,d);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||l]=jn(a))}const r=(a,l)=>C.forEach(a,(c,d)=>n(c,d,l));return C.isPlainObject(t)||t instanceof this.constructor?r(t,e):C.isString(t)&&(t=t.trim())&&!Sk(t)?r(kk(t),e):t!=null&&n(e,t,s),this}get(t,e){if(t=po(t),t){const s=C.findKey(this,t);if(s){const o=this[s];if(!e)return o;if(e===!0)return Ck(o);if(C.isFunction(e))return e.call(this,o,s);if(C.isRegExp(e))return e.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=po(t),t){const s=C.findKey(this,t);return!!(s&&this[s]!==void 0&&(!e||za(this,this[s],s,e)))}return!1}delete(t,e){const s=this;let o=!1;function n(r){if(r=po(r),r){const a=C.findKey(s,r);a&&(!e||za(s,s[a],a,e))&&(delete s[a],o=!0)}}return C.isArray(t)?t.forEach(n):n(t),o}clear(t){const e=Object.keys(this);let s=e.length,o=!1;for(;s--;){const n=e[s];(!t||za(this,this[n],n,t,!0))&&(delete this[n],o=!0)}return o}normalize(t){const e=this,s={};return C.forEach(this,(o,n)=>{const r=C.findKey(s,n);if(r){e[r]=jn(o),delete e[n];return}const a=t?Fk(n):String(n).trim();a!==n&&delete e[n],e[a]=jn(o),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return C.forEach(this,(s,o)=>{s!=null&&s!==!1&&(e[o]=t&&C.isArray(s)?s.join(", "):s)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const s=new this(t);return e.forEach(o=>s.set(o)),s}static accessor(t){const s=(this[wh]=this[wh]={accessors:{}}).accessors,o=this.prototype;function n(r){const a=po(r);s[a]||(Tk(o,r),s[a]=!0)}return C.isArray(t)?t.forEach(n):n(t),this}}aa.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(aa.prototype,({value:i},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(s){this[e]=s}}});C.freezeMethods(aa);const fi=aa;function ja(i,t){const e=this||Rc,s=t||e,o=fi.from(s.headers);let n=s.data;return C.forEach(i,function(a){n=a.call(e,n,o.normalize(),t?t.status:void 0)}),o.normalize(),n}function Bp(i){return!!(i&&i.__CANCEL__)}function en(i,t,e){dt.call(this,i??"canceled",dt.ERR_CANCELED,t,e),this.name="CanceledError"}C.inherits(en,dt,{__CANCEL__:!0});function Ik(i,t,e){const s=e.config.validateStatus;!e.status||!s||s(e.status)?i(e):t(new dt("Request failed with status code "+e.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}const Rk=ii.hasStandardBrowserEnv?{write(i,t,e,s,o,n){const r=[i+"="+encodeURIComponent(t)];C.isNumber(e)&&r.push("expires="+new Date(e).toGMTString()),C.isString(s)&&r.push("path="+s),C.isString(o)&&r.push("domain="+o),n===!0&&r.push("secure"),document.cookie=r.join("; ")},read(i){const t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dk(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function Ek(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function zp(i,t){return i&&!Dk(t)?Ek(i,t):t}const Ak=ii.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let s;function o(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return s=o(window.location.href),function(r){const a=C.isString(r)?o(r):r;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function Ok(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function Vk(i,t){i=i||10;const e=new Array(i),s=new Array(i);let o=0,n=0,r;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=s[n];r||(r=c),e[o]=l,s[o]=c;let u=n,b=0;for(;u!==o;)b+=e[u++],u=u%i;if(o=(o+1)%i,o===n&&(n=(n+1)%i),c-r<t)return;const w=d&&c-d;return w?Math.round(b*1e3/w):void 0}}function $h(i,t){let e=0;const s=Vk(50,250);return o=>{const n=o.loaded,r=o.lengthComputable?o.total:void 0,a=n-e,l=s(a),c=n<=r;e=n;const d={loaded:n,total:r,progress:r?n/r:void 0,bytes:a,rate:l||void 0,estimated:l&&r&&c?(r-n)/l:void 0,event:o};d[t?"download":"upload"]=!0,i(d)}}const Lk=typeof XMLHttpRequest<"u",_k=Lk&&function(i){return new Promise(function(e,s){let o=i.data;const n=fi.from(i.headers).normalize();let{responseType:r,withXSRFToken:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d;if(C.isFormData(o)){if(ii.hasStandardBrowserEnv||ii.hasStandardBrowserWebWorkerEnv)n.setContentType(!1);else if((d=n.getContentType())!==!1){const[k,...S]=d?d.split(";").map(Q=>Q.trim()).filter(Boolean):[];n.setContentType([k||"multipart/form-data",...S].join("; "))}}let u=new XMLHttpRequest;if(i.auth){const k=i.auth.username||"",S=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";n.set("Authorization","Basic "+btoa(k+":"+S))}const b=zp(i.baseURL,i.url);u.open(i.method.toUpperCase(),Pp(b,i.params,i.paramsSerializer),!0),u.timeout=i.timeout;function w(){if(!u)return;const k=fi.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),Q={data:!r||r==="text"||r==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:k,config:i,request:u};Ik(function(A){e(A),c()},function(A){s(A),c()},Q),u=null}if("onloadend"in u?u.onloadend=w:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(w)},u.onabort=function(){u&&(s(new dt("Request aborted",dt.ECONNABORTED,i,u)),u=null)},u.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,u)),u=null},u.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const Q=i.transitional||Hp;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),s(new dt(S,Q.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,u)),u=null},ii.hasStandardBrowserEnv&&(a&&C.isFunction(a)&&(a=a(i)),a||a!==!1&&Ak(b))){const k=i.xsrfHeaderName&&i.xsrfCookieName&&Rk.read(i.xsrfCookieName);k&&n.set(i.xsrfHeaderName,k)}o===void 0&&n.setContentType(null),"setRequestHeader"in u&&C.forEach(n.toJSON(),function(S,Q){u.setRequestHeader(Q,S)}),C.isUndefined(i.withCredentials)||(u.withCredentials=!!i.withCredentials),r&&r!=="json"&&(u.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&u.addEventListener("progress",$h(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",$h(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=k=>{u&&(s(!k||k.type?new en(null,i,u):k),u.abort(),u=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const y=Ok(b);if(y&&ii.protocols.indexOf(y)===-1){s(new dt("Unsupported protocol "+y+":",dt.ERR_BAD_REQUEST,i));return}u.send(o||null)})},vl={http:ak,xhr:_k};C.forEach(vl,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const kh=i=>`- ${i}`,Pk=i=>C.isFunction(i)||i===null||i===!1,jp={getAdapter:i=>{i=C.isArray(i)?i:[i];const{length:t}=i;let e,s;const o={};for(let n=0;n<t;n++){e=i[n];let r;if(s=e,!Pk(e)&&(s=vl[(r=String(e)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${r}'`);if(s)break;o[r||"#"+n]=s}if(!s){const n=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let r=t?n.length>1?`since :
`+n.map(kh).join(`
`):" "+kh(n[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return s},adapters:vl};function Ua(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new en(null,i)}function Ch(i){return Ua(i),i.headers=fi.from(i.headers),i.data=ja.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),jp.getAdapter(i.adapter||Rc.adapter)(i).then(function(s){return Ua(i),s.data=ja.call(i,i.transformResponse,s),s.headers=fi.from(s.headers),s},function(s){return Bp(s)||(Ua(i),s&&s.response&&(s.response.data=ja.call(i,i.transformResponse,s.response),s.response.headers=fi.from(s.response.headers))),Promise.reject(s)})}const Sh=i=>i instanceof fi?i.toJSON():i;function Gs(i,t){t=t||{};const e={};function s(c,d,u){return C.isPlainObject(c)&&C.isPlainObject(d)?C.merge.call({caseless:u},c,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function o(c,d,u){if(C.isUndefined(d)){if(!C.isUndefined(c))return s(void 0,c,u)}else return s(c,d,u)}function n(c,d){if(!C.isUndefined(d))return s(void 0,d)}function r(c,d){if(C.isUndefined(d)){if(!C.isUndefined(c))return s(void 0,c)}else return s(void 0,d)}function a(c,d,u){if(u in t)return s(c,d);if(u in i)return s(void 0,c)}const l={url:n,method:n,data:n,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(c,d)=>o(Sh(c),Sh(d),!0)};return C.forEach(Object.keys(Object.assign({},i,t)),function(d){const u=l[d]||o,b=u(i[d],t[d],d);C.isUndefined(b)&&u!==a||(e[d]=b)}),e}const Up="1.6.7",Dc={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{Dc[i]=function(s){return typeof s===i||"a"+(t<1?"n ":" ")+i}});const Fh={};Dc.transitional=function(t,e,s){function o(n,r){return"[Axios v"+Up+"] Transitional option '"+n+"'"+r+(s?". "+s:"")}return(n,r,a)=>{if(t===!1)throw new dt(o(r," has been removed"+(e?" in "+e:"")),dt.ERR_DEPRECATED);return e&&!Fh[r]&&(Fh[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(n,r,a):!0}};function Hk(i,t,e){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const n=s[o],r=t[n];if(r){const a=i[n],l=a===void 0||r(a,n,i);if(l!==!0)throw new dt("option "+n+" must be "+l,dt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new dt("Unknown option "+n,dt.ERR_BAD_OPTION)}}const yl={assertOptions:Hk,validators:Dc},Ri=yl.validators;class rr{constructor(t){this.defaults=t,this.interceptors={request:new xh,response:new xh}}async request(t,e){try{return await this._request(t,e)}catch(s){if(s instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const n=o.stack?o.stack.replace(/^.+\n/,""):"";s.stack?n&&!String(s.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+n):s.stack=n}throw s}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=Gs(this.defaults,e);const{transitional:s,paramsSerializer:o,headers:n}=e;s!==void 0&&yl.assertOptions(s,{silentJSONParsing:Ri.transitional(Ri.boolean),forcedJSONParsing:Ri.transitional(Ri.boolean),clarifyTimeoutError:Ri.transitional(Ri.boolean)},!1),o!=null&&(C.isFunction(o)?e.paramsSerializer={serialize:o}:yl.assertOptions(o,{encode:Ri.function,serialize:Ri.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let r=n&&C.merge(n.common,n[e.method]);n&&C.forEach(["delete","get","head","post","put","patch","common"],y=>{delete n[y]}),e.headers=fi.concat(r,n);const a=[];let l=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(e)===!1||(l=l&&k.synchronous,a.unshift(k.fulfilled,k.rejected))});const c=[];this.interceptors.response.forEach(function(k){c.push(k.fulfilled,k.rejected)});let d,u=0,b;if(!l){const y=[Ch.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,c),b=y.length,d=Promise.resolve(e);u<b;)d=d.then(y[u++],y[u++]);return d}b=a.length;let w=e;for(u=0;u<b;){const y=a[u++],k=a[u++];try{w=y(w)}catch(S){k.call(this,S);break}}try{d=Ch.call(this,w)}catch(y){return Promise.reject(y)}for(u=0,b=c.length;u<b;)d=d.then(c[u++],c[u++]);return d}getUri(t){t=Gs(this.defaults,t);const e=zp(t.baseURL,t.url);return Pp(e,t.params,t.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){rr.prototype[t]=function(e,s){return this.request(Gs(s||{},{method:t,url:e,data:(s||{}).data}))}});C.forEach(["post","put","patch"],function(t){function e(s){return function(n,r,a){return this.request(Gs(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}rr.prototype[t]=e(),rr.prototype[t+"Form"]=e(!0)});const Un=rr;class Ec{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(n){e=n});const s=this;this.promise.then(o=>{if(!s._listeners)return;let n=s._listeners.length;for(;n-- >0;)s._listeners[n](o);s._listeners=null}),this.promise.then=o=>{let n;const r=new Promise(a=>{s.subscribe(a),n=a}).then(o);return r.cancel=function(){s.unsubscribe(n)},r},t(function(n,r,a){s.reason||(s.reason=new en(n,r,a),e(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ec(function(o){t=o}),cancel:t}}}const Mk=Ec;function Nk(i){return function(e){return i.apply(null,e)}}function Bk(i){return C.isObject(i)&&i.isAxiosError===!0}const xl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xl).forEach(([i,t])=>{xl[t]=i});const zk=xl;function qp(i){const t=new Un(i),e=Sp(Un.prototype.request,t);return C.extend(e,Un.prototype,t,{allOwnKeys:!0}),C.extend(e,t,null,{allOwnKeys:!0}),e.create=function(o){return qp(Gs(i,o))},e}const Bt=qp(Rc);Bt.Axios=Un;Bt.CanceledError=en;Bt.CancelToken=Mk;Bt.isCancel=Bp;Bt.VERSION=Up;Bt.toFormData=ra;Bt.AxiosError=dt;Bt.Cancel=Bt.CanceledError;Bt.all=function(t){return Promise.all(t)};Bt.spread=Nk;Bt.isAxiosError=Bk;Bt.mergeConfig=Gs;Bt.AxiosHeaders=fi;Bt.formToJSON=i=>Np(C.isHTMLForm(i)?new FormData(i):i);Bt.getAdapter=jp.getAdapter;Bt.HttpStatusCode=zk;Bt.default=Bt;const jk=["value"],Uk=No({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Mt(),Jt("fluent-text-field",{value:o.modelValue,onInput:s},[cu(o.$slots,"default")],40,jk))}}),qk=["value"],Wk=No({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Mt(),Jt("fluent-combobox",{value:o.modelValue,onChange:s},[cu(o.$slots,"default")],40,qk))}}),Gk=i=>(su("data-v-292d6e6c"),i=i(),ou(),i),Xk={class:"signature-pad"},Yk=Gk(()=>_("br",null,null,-1)),Jk=No({__name:"SignaturePad",emits:["updateSignature"],setup(i,{emit:t}){const e=ss(null),s=ss(null),o=t;let n=!1;const r=()=>{if(!e.value)return;const w=window.innerWidth,y=Math.min(w*.9,900),k=4/1,S=y/k;e.value.width=y,e.value.height=S,s.value||(s.value=e.value.getContext("2d")),s.value&&(s.value.strokeStyle="#000000",s.value.lineWidth=2)};Hl(()=>{r(),window.addEventListener("resize",r)}),Ml(()=>{window.removeEventListener("resize",r)});function a(w){return typeof TouchEvent<"u"&&w instanceof TouchEvent}function l(w){if(!e.value)return{offsetX:0,offsetY:0};const y=e.value.getBoundingClientRect();let k=0,S=0;return a(w)?(k=w.touches[0].clientX-y.left,S=w.touches[0].clientY-y.top):(k=w.clientX-y.left,S=w.clientY-y.top),{offsetX:k,offsetY:S}}function c(w){n=!0;const{offsetX:y,offsetY:k}=l(w);s.value&&(s.value.beginPath(),s.value.moveTo(y,k))}function d(w){if(!n||!s.value)return;const{offsetX:y,offsetY:k}=l(w);s.value.lineTo(y,k),s.value.stroke()}function u(){if(n=!1,!e.value)return;const w=e.value.toDataURL("image/png");o("updateSignature",w)}function b(){!s.value||!e.value||s.value.clearRect(0,0,e.value.width,e.value.height)}return(w,y)=>(Mt(),Jt("div",Xk,[_("canvas",{ref_key:"canvas",ref:e,onMousedown:c,onMousemove:d,onMouseup:u,onMouseleave:u,onTouchstart:c,onTouchmove:d,onTouchend:u},null,544),Yk,_("fluent-button",{appearance:"accent",onClick:b},"Löschen")]))}}),Ac=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},Qk=Ac(Jk,[["__scopeId","data-v-292d6e6c"]]),Zk=ku("<table data-v-76e45382><tr data-v-76e45382><th data-v-76e45382>Kostenstellennummer</th><th data-v-76e45382>Bezeichnung</th></tr><tr data-v-76e45382><td data-v-76e45382>4240</td><td data-v-76e45382>Strom/Heizung/Wasser</td></tr><tr data-v-76e45382><td data-v-76e45382>4250</td><td data-v-76e45382>Abfallbeseitigung</td></tr><tr data-v-76e45382><td data-v-76e45382>4300</td><td data-v-76e45382>Treibstoff Einkauf</td></tr><tr data-v-76e45382><td data-v-76e45382>4360</td><td data-v-76e45382>Versicherung allgemein</td></tr><tr data-v-76e45382><td data-v-76e45382>4361</td><td data-v-76e45382>Versicherung Segelflug/Anhänger</td></tr><tr data-v-76e45382><td data-v-76e45382>4362</td><td data-v-76e45382>Versicherung Motorflug</td></tr><tr data-v-76e45382><td data-v-76e45382>4500</td><td data-v-76e45382>Flugleiterdienst Aufwände</td></tr><tr data-v-76e45382><td data-v-76e45382>4510</td><td data-v-76e45382>Wartung / Reparatur Fluggeräte / Werkstatt</td></tr><tr data-v-76e45382><td data-v-76e45382>4520</td><td data-v-76e45382>Lehrgangsgebühren</td></tr><tr data-v-76e45382><td data-v-76e45382>4600</td><td data-v-76e45382>Verbandsgebühren</td></tr><tr data-v-76e45382><td data-v-76e45382>4610</td><td data-v-76e45382>Werbeaufwendungen</td></tr><tr data-v-76e45382><td data-v-76e45382>4700</td><td data-v-76e45382>Aufwendungen Landeplatz</td></tr><tr data-v-76e45382><td data-v-76e45382>4705</td><td data-v-76e45382>Aufwendungen Hallenneubau</td></tr><tr data-v-76e45382><td data-v-76e45382>4710</td><td data-v-76e45382>Aufwendungen Luftaufsicht</td></tr><tr data-v-76e45382><td data-v-76e45382>4720</td><td data-v-76e45382>Aufwendungen Brückenbögen</td></tr><tr data-v-76e45382><td data-v-76e45382>4721</td><td data-v-76e45382>Aufwendungen Jugendgruppe</td></tr><tr data-v-76e45382><td data-v-76e45382>4722</td><td data-v-76e45382>Aufwendungen TanteJu</td></tr><tr data-v-76e45382><td data-v-76e45382>4730</td><td data-v-76e45382>Aufwendungen Segelflugbetrieb</td></tr><tr data-v-76e45382><td data-v-76e45382>4740</td><td data-v-76e45382>Aufwendungen Gaststarts (anteilig)</td></tr><tr data-v-76e45382><td data-v-76e45382>4800</td><td data-v-76e45382>Instandhaltung Flugzeuge (alle)</td></tr><tr data-v-76e45382><td data-v-76e45382>4805</td><td data-v-76e45382>Instandhaltung Winde rot</td></tr><tr data-v-76e45382><td data-v-76e45382>4806</td><td data-v-76e45382>Instandhaltung Winde Silber</td></tr><tr data-v-76e45382><td data-v-76e45382>4810</td><td data-v-76e45382>Instandhaltung Segelflugzeuge</td></tr><tr data-v-76e45382><td data-v-76e45382>4811</td><td data-v-76e45382>Instandhaltung D-6684 (ASK21)</td></tr><tr data-v-76e45382><td data-v-76e45382>4812</td><td data-v-76e45382>Instandhaltung D-6654 (ASK21)</td></tr><tr data-v-76e45382><td data-v-76e45382>4813</td><td data-v-76e45382>Instandhaltung D-6489 (ASK13)</td></tr><tr data-v-76e45382><td data-v-76e45382>4814</td><td data-v-76e45382>Instandhaltung D-7044 (LS4b)</td></tr><tr data-v-76e45382><td data-v-76e45382>4815</td><td data-v-76e45382>Instandhaltung D-3437 (LS4)</td></tr><tr data-v-76e45382><td data-v-76e45382>4816</td><td data-v-76e45382>Instandhaltung D-8325 (ASK23)</td></tr><tr data-v-76e45382><td data-v-76e45382>4817</td><td data-v-76e45382>Instandhaltung D-KOLA</td></tr><tr data-v-76e45382><td data-v-76e45382>4818</td><td data-v-76e45382>Instandhaltung D-9255 (K8b)</td></tr><tr data-v-76e45382><td data-v-76e45382>4824</td><td data-v-76e45382>Abschreibungen</td></tr><tr data-v-76e45382><td data-v-76e45382>4830</td><td data-v-76e45382>Instandhaltung Motorflug (MoSe+UL)</td></tr><tr data-v-76e45382><td data-v-76e45382>4831</td><td data-v-76e45382>Instandhaltung Motorsegler</td></tr><tr data-v-76e45382><td data-v-76e45382>4832</td><td data-v-76e45382>Instandhaltung D-KBUL</td></tr><tr data-v-76e45382><td data-v-76e45382>4833</td><td data-v-76e45382>Instandhaltung D-KTIA</td></tr><tr data-v-76e45382><td data-v-76e45382>4834</td><td data-v-76e45382>Instandhaltung D-KBUC</td></tr><tr data-v-76e45382><td data-v-76e45382>4835</td><td data-v-76e45382>Instandhaltung Ultraleichtflugzeug D-MAXY</td></tr><tr data-v-76e45382><td data-v-76e45382>4850</td><td data-v-76e45382>Instandhaltung Lepos</td></tr><tr data-v-76e45382><td data-v-76e45382>4860</td><td data-v-76e45382>Instandhaltung Fallschirme</td></tr><tr data-v-76e45382><td data-v-76e45382>4900</td><td data-v-76e45382>Allgemeine Aufwendungen</td></tr><tr data-v-76e45382><td data-v-76e45382>4910</td><td data-v-76e45382>Außergewöhnliche Aufwendungen</td></tr><tr data-v-76e45382><td data-v-76e45382>4920</td><td data-v-76e45382>Getränkeeinkäufe</td></tr><tr data-v-76e45382><td data-v-76e45382>4930</td><td data-v-76e45382>Verwaltung (Internet/Telefon/Software)</td></tr><tr data-v-76e45382><td data-v-76e45382>4940</td><td data-v-76e45382>Shopeinkauf</td></tr><tr data-v-76e45382><td data-v-76e45382>4950</td><td data-v-76e45382>Aufwendungen eigenes Fliegerlager</td></tr><tr data-v-76e45382><td data-v-76e45382>4951</td><td data-v-76e45382>Aufwendungen Osterfeuer</td></tr><tr data-v-76e45382><td data-v-76e45382>4960</td><td data-v-76e45382>Rechts- und Beratungskosten</td></tr></table>",1),Kk=No({__name:"DialogComponent",setup(i,{expose:t}){const e=ss(!1);function s(){e.value=!0}function o(){e.value=!1}return t({openDialog:s,closeDialog:o}),(n,r)=>e.value?(Mt(),Jt("div",{key:0,class:"dialog",onClick:db(o,["self"])},[_("div",{class:"dialog-content"},[_("span",{class:"close-button",onClick:o},"×"),Zk])])):mo("",!0)}}),tC=Ac(Kk,[["__scopeId","data-v-76e45382"]]),xe=i=>(su("data-v-721bef75"),i=i(),ou(),i),eC=xe(()=>_("div",{class:"header"},[_("img",{src:mb,class:"logo",alt:"Logo"}),_("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),iC={class:"general-information-container"},sC={class:"row"},oC=xe(()=>_("div",{class:"col"},[_("p",null,"Datum: ")],-1)),nC={class:"col"},rC={class:"row"},aC=xe(()=>_("div",{class:"col"},[_("p",null,"Rechnungsnummer: ")],-1)),lC={class:"col"},cC={class:"row"},dC=xe(()=>_("div",{class:"col"},[_("p",null,"Name des Mitgliedes: ")],-1)),hC={class:"col"},uC={class:"row"},fC=xe(()=>_("div",{class:"col"},[_("p",null,"Rechnungsdateien: ")],-1)),pC={class:"col"},gC={for:"file",class:"custum-file-upload"},mC=ku('<div class="icon" data-v-721bef75><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-721bef75><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-721bef75></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-721bef75></g><g id="SVGRepo_iconCarrier" data-v-721bef75><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-721bef75></path></g></svg></div><div class="text" data-v-721bef75><span data-v-721bef75>Click to Upload</span></div>',2),bC={ref:"fileNameDisplay",class:"uploaded-lable"},vC={key:0,class:"row"},yC=xe(()=>_("div",{class:"col"},[_("p",null,"Ausgewählte Dateien:")],-1)),xC={class:"col"},wC={class:"uploaded-files-container"},$C=["onClick"],kC=xe(()=>_("div",{class:"bill-disclaimer-container"},[_("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),_("p",null,"LSF-Wesel-Rheinhausen"),_("p",null,"Postfach 100240"),_("p",null,"46462 Wesel")],-1)),CC={class:"dialog-container"},SC={class:"article-list-wrapper"},FC={class:"article-list-card"},TC=["value"],IC={class:"total-sum"},RC={class:"withdrawal-container"},DC={class:"withdrawal-card"},EC=xe(()=>_("fluent-option",{position:"below",selected:"",value:"vf"},"Gutschrift auf Vereinsfliegerkonto",-1)),AC=xe(()=>_("fluent-option",{position:"below",value:"transfer-bank"},"Überweisung auf Bankkonto",-1)),OC=xe(()=>_("fluent-option",{position:"below",value:"transfer-biller"},"Überweisung an Rechnungssteller",-1)),VC=xe(()=>_("fluent-option",{position:"below",value:"directdebit-biller"},"Lastschrift durch Rechnungssteller",-1)),LC=[EC,AC,OC,VC],_C={key:0,class:"bank-inputs"},PC=xe(()=>_("fluent-divider",null,null,-1)),HC={key:0},MC=xe(()=>_("strong",null,"abweichendes",-1)),NC={key:1},BC={class:"approver-container"},zC={class:"signature-container"},jC=xe(()=>_("p",null,"Unterschrift des Vereinsmitgliedes:",-1)),UC={class:"remarks-container"},qC=No({__name:"App",setup(i){Hr.withDefault(Mr);const t=ss(null);function e(){var B;(B=t.value)==null||B.openDialog()}const s=["articleNumber","description","usage","costCenter","amount"],o=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],n=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function r(){return s.reduce((B,A)=>(B[A]=A==="amount"?0:"",B),{})}const a=ss([r()]),l=()=>{a.value.push(r())},c=B=>B==="amount"?"number":"text",d=B=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[B]||"",u=Fu(()=>a.value.reduce((B,A)=>B+parseFloat(A.amount||"0"),0).toFixed(2).replace(".",",")),b=ss(null);Hl(()=>{b.value&&b.value.addEventListener("change",w)});function w(B){const A=B.target;if(A.files){const q=Array.from(A.files);S.value.files.push(...q),A.value=""}}function y(B){S.value.files.splice(B,1)}function k(B){S.value.signature=B}const S=ss({date:"",invoiceNumber:"",memberName:"",files:[],total:u.value,withdrawalSelection:"",bankRecipient:"",iban:"",bic:"",approver:"",signature:"",remarks:""});Yg(()=>{S.value.total=u.value});async function Q(){if(S.value.files.length===0){console.error("Keine Datei ausgewählt"),alert("Keine Datei ausgewählt");return}const B=new FormData;B.append("date",S.value.date),B.append("invoiceNumber",S.value.invoiceNumber),B.append("memberName",S.value.memberName),B.append("total",S.value.total),B.append("withdrawalSelection",S.value.withdrawalSelection),B.append("signature",S.value.signature),B.append("remarks",S.value.remarks),S.value.files.forEach(A=>{B.append("files",A)});try{const A=await Bt.post("/api/v1/test_with_mail",B);console.log(A.data)}catch(A){console.error(A),alert(A)}}return(B,A)=>(Mt(),Jt("div",null,[eC,_("div",iC,[_("div",sC,[oC,_("div",nC,[li(_("fluent-text-field",{"onUpdate:modelValue":A[0]||(A[0]=q=>S.value.date=q),type:"date"},null,512),[[ci,S.value.date]])])]),_("div",rC,[aC,_("div",lC,[li(_("fluent-text-field",{"onUpdate:modelValue":A[1]||(A[1]=q=>S.value.invoiceNumber=q),placeholder:"Rechnugnsnummer..."},null,512),[[ci,S.value.invoiceNumber]])])]),_("div",cC,[dC,_("div",hC,[li(_("fluent-text-field",{"onUpdate:modelValue":A[2]||(A[2]=q=>S.value.memberName=q),placeholder:"Name..."},null,512),[[ci,S.value.memberName]])])]),_("div",uC,[fC,_("div",pC,[_("label",gC,[mC,_("input",{id:"file",type:"file",ref_key:"fileInput",ref:b,multiple:""},null,512)]),_("div",bC,null,512)])]),S.value.files.length!==0?(Mt(),Jt("div",vC,[yC,_("div",xC,[_("div",wC,[(Mt(!0),Jt(Qt,null,ro(S.value.files,(q,kt)=>(Mt(),Jt("p",{key:kt,class:"uploaded-file"},[_n(an(q.name)+" ",1),_("button",{onClick:X=>y(kt)},"❌",8,$C)]))),128))])])])):mo("",!0)]),kC,_("div",CC,[_("fluent-button",{appearance:"accent",onClick:e},"Kostenstellen Übersicht"),ke(tC,{ref_key:"dialogRef",ref:t},null,512)]),_("div",SC,[_("fluent-card",FC,[_("table",null,[_("thead",null,[_("tr",null,[(Mt(),Jt(Qt,null,ro(o,q=>_("th",{key:q},an(q),1)),64))])]),_("tbody",null,[(Mt(!0),Jt(Qt,null,ro(a.value,(q,kt)=>(Mt(),Jt("tr",{key:kt},[(Mt(),Jt(Qt,null,ro(s,X=>_("td",{key:X},[X!=="costCenter"?(Mt(),Yn(Uk,{key:0,type:c(X),modelValue:q[X],"onUpdate:modelValue":Vt=>q[X]=Vt,placeholder:d(X)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(Mt(),Yn(Wk,{key:1,modelValue:q[X],"onUpdate:modelValue":Vt=>q[X]=Vt,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:nu(()=>[(Mt(),Jt(Qt,null,ro(n,Vt=>_("fluent-option",{position:"below",class:"combo-option",key:Vt,value:Vt},an(Vt),9,TC)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),_("fluent-button",{appearance:"accent",onClick:l},"＋ Artikel hinzufügen"),_("div",IC,"Gesamtbetrag: "+an(u.value)+" €",1)])]),_("div",RC,[_("fluent-card",DC,[li(_("fluent-select",{"onUpdate:modelValue":A[3]||(A[3]=q=>S.value.withdrawalSelection=q),placeholder:"-- Auswählen --",class:"withdrawal-select",position:"below"},LC,512),[[ci,S.value.withdrawalSelection]]),S.value.withdrawalSelection.startsWith("transfer")?(Mt(),Jt("div",_C,[PC,S.value.withdrawalSelection.includes("bank")?(Mt(),Jt("p",HC,[_n("Für "),MC,_n(" Konto den Betrag auf folgendes Bankkonto überweisen:")])):mo("",!0),S.value.withdrawalSelection.includes("transfer-biller")?(Mt(),Jt("p",NC,"Kontodaten des Rechnungsstellers:")):mo("",!0),li(_("fluent-text-field",{"onUpdate:modelValue":A[4]||(A[4]=q=>S.value.bankRecipient=q),placeholder:"Vorname Nachname"},"Name des Empfängers",512),[[ci,S.value.bankRecipient]]),li(_("fluent-text-field",{"onUpdate:modelValue":A[5]||(A[5]=q=>S.value.iban=q),placeholder:"IBAN"},"IBAN",512),[[ci,S.value.iban]]),li(_("fluent-text-field",{"onUpdate:modelValue":A[6]||(A[6]=q=>S.value.bic=q),placeholder:"BIC"},"BIC",512),[[ci,S.value.bic]])])):mo("",!0)])]),_("div",BC,[_("fluent-card",null,[li(_("fluent-text-field",{"onUpdate:modelValue":A[7]||(A[7]=q=>S.value.approver=q),placeholder:"Name des Genehmigers"},"Ausgabe genehmigt durch:",512),[[ci,S.value.approver]])])]),_("div",zC,[jC,ke(Qk,{onUpdateSignature:k})]),_("div",UC,[li(_("fluent-text-area",{"onUpdate:modelValue":A[8]||(A[8]=q=>S.value.remarks=q),class:"remarks",resize:"both"}," Bemerkungen: ",512),[[ci,S.value.remarks]])]),_("fluent-button",{appearance:"accent",onClick:Q},"Submit")]))}}),WC=Ac(qC,[["__scopeId","data-v-721bef75"]]);F1().register(S1);fb(WC).mount("#app");
