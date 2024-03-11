(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ml(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const Ct={},Cs=[],Ie=()=>{},zp=()=>!1,Kn=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),bl=i=>i.startsWith("onUpdate:"),Wt=Object.assign,vl=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},Bp=Object.prototype.hasOwnProperty,ht=(i,t)=>Bp.call(i,t),K=Array.isArray,ks=i=>tr(i)==="[object Map]",yh=i=>tr(i)==="[object Set]",et=i=>typeof i=="function",Nt=i=>typeof i=="string",Us=i=>typeof i=="symbol",Et=i=>i!==null&&typeof i=="object",xh=i=>(Et(i)||et(i))&&et(i.then)&&et(i.catch),wh=Object.prototype.toString,tr=i=>wh.call(i),jp=i=>tr(i).slice(8,-1),$h=i=>tr(i)==="[object Object]",yl=i=>Nt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ho=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Up=/-(\w)/g,Es=er(i=>i.replace(Up,(t,e)=>e?e.toUpperCase():"")),qp=/\B([A-Z])/g,qs=er(i=>i.replace(qp,"-$1").toLowerCase()),Ch=er(i=>i.charAt(0).toUpperCase()+i.slice(1)),na=er(i=>i?`on${Ch(i)}`:""),Ai=(i,t)=>!Object.is(i,t),Fn=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},Hn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Ma=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Ec;const kh=()=>Ec||(Ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(i){if(K(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=Nt(s)?Yp(s):xl(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(Nt(i)||Et(i))return i}const Wp=/;(?![^(]*\))/g,Gp=/:([^]+)/,Xp=/\/\*[^]*?\*\//g;function Yp(i){const t={};return i.replace(Xp,"").split(Wp).forEach(e=>{if(e){const s=e.split(Gp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function wl(i){let t="";if(Nt(i))t=i;else if(K(i))for(let e=0;e<i.length;e++){const s=wl(i[e]);s&&(t+=s+" ")}else if(Et(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qp=ml(Jp);function Fh(i){return!!i||i===""}const ra=i=>Nt(i)?i:i==null?"":K(i)||Et(i)&&(i.toString===wh||!et(i.toString))?JSON.stringify(i,Sh,2):String(i),Sh=(i,t)=>t&&t.__v_isRef?Sh(i,t.value):ks(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[aa(s,n)+" =>"]=o,e),{})}:yh(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>aa(e))}:Us(t)?aa(t):Et(t)&&!K(t)&&!$h(t)?String(t):t,aa=(i,t="")=>{var e;return Us(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Zp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Me;try{return Me=this,t()}finally{Me=e}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Kp(i,t=Me){t&&t.active&&t.effects.push(i)}function tg(){return Me}let ts;class $l{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Kp(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ls();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(eg(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cs()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ei,e=ts;try{return Ei=!0,ts=this,this._runnings++,Oc(this),this.fn()}finally{Ac(this),this._runnings--,ts=e,Ei=t}}stop(){var t;this.active&&(Oc(this),Ac(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function eg(i){return i.value}function Oc(i){i._trackId++,i._depsLength=0}function Ac(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Th(i.deps[t],i);i.deps.length=i._depsLength}}function Th(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let Ei=!0,Na=0;const Ih=[];function ls(){Ih.push(Ei),Ei=!1}function cs(){const i=Ih.pop();Ei=i===void 0?!0:i}function Cl(){Na++}function kl(){for(Na--;!Na&&za.length;)za.shift()()}function Rh(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Th(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const za=[];function Dh(i,t,e){Cl();for(const s of i.keys()){let o;s._dirtyLevel<t&&(o??(o=i.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=i.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&za.push(s.scheduler)))}kl()}const Eh=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},Ba=new WeakMap,es=Symbol(""),ja=Symbol("");function fe(i,t,e){if(Ei&&ts){let s=Ba.get(i);s||Ba.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Eh(()=>s.delete(e))),Rh(ts,o)}}function li(i,t,e,s,o,n){const r=Ba.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&K(i)){const l=Number(s);r.forEach((c,d)=>{(d==="length"||!Us(d)&&d>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":K(i)?yl(e)&&a.push(r.get("length")):(a.push(r.get(es)),ks(i)&&a.push(r.get(ja)));break;case"delete":K(i)||(a.push(r.get(es)),ks(i)&&a.push(r.get(ja)));break;case"set":ks(i)&&a.push(r.get(es));break}Cl();for(const l of a)l&&Dh(l,4);kl()}const ig=ml("__proto__,__v_isRef,__isVue"),Oh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Us)),Lc=sg();function sg(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ft(this);for(let n=0,r=this.length;n<r;n++)fe(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ft)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){ls(),Cl();const s=ft(this)[t].apply(this,e);return kl(),cs(),s}}),i}function og(i){const t=ft(this);return fe(t,"has",i),t.hasOwnProperty(i)}class Ah{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){const o=this._isReadonly,n=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?bg:_h:n?Ph:Vh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=K(t);if(!o){if(r&&ht(Lc,e))return Reflect.get(Lc,e,s);if(e==="hasOwnProperty")return og}const a=Reflect.get(t,e,s);return(Us(e)?Oh.has(e):ig(e))||(o||fe(t,"get",e),n)?a:pe(a)?r&&yl(e)?a:a.value:Et(a)?o?Hh(a):Tl(a):a}}class Lh extends Ah{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._isShallow){const l=Os(n);if(!Mn(s)&&!Os(s)&&(n=ft(n),s=ft(s)),!K(t)&&pe(n)&&!pe(s))return l?!1:(n.value=s,!0)}const r=K(t)&&yl(e)?Number(e)<t.length:ht(t,e),a=Reflect.set(t,e,s,o);return t===ft(o)&&(r?Ai(s,n)&&li(t,"set",e,s):li(t,"add",e,s)),a}deleteProperty(t,e){const s=ht(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&li(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!Us(e)||!Oh.has(e))&&fe(t,"has",e),s}ownKeys(t){return fe(t,"iterate",K(t)?"length":es),Reflect.ownKeys(t)}}class ng extends Ah{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const rg=new Lh,ag=new ng,lg=new Lh(!0),Fl=i=>i,ir=i=>Reflect.getPrototypeOf(i);function Ko(i,t,e=!1,s=!1){i=i.__v_raw;const o=ft(i),n=ft(t);e||(Ai(t,n)&&fe(o,"get",t),fe(o,"get",n));const{has:r}=ir(o),a=s?Fl:e?Rl:xo;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function tn(i,t=!1){const e=this.__v_raw,s=ft(e),o=ft(i);return t||(Ai(i,o)&&fe(s,"has",i),fe(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function en(i,t=!1){return i=i.__v_raw,!t&&fe(ft(i),"iterate",es),Reflect.get(i,"size",i)}function Vc(i){i=ft(i);const t=ft(this);return ir(t).has.call(t,i)||(t.add(i),li(t,"add",i,i)),this}function Pc(i,t){t=ft(t);const e=ft(this),{has:s,get:o}=ir(e);let n=s.call(e,i);n||(i=ft(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?Ai(t,r)&&li(e,"set",i,t):li(e,"add",i,t),this}function _c(i){const t=ft(this),{has:e,get:s}=ir(t);let o=e.call(t,i);o||(i=ft(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&li(t,"delete",i,void 0),n}function Hc(){const i=ft(this),t=i.size!==0,e=i.clear();return t&&li(i,"clear",void 0,void 0),e}function sn(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ft(r),l=t?Fl:i?Rl:xo;return!i&&fe(a,"iterate",es),r.forEach((c,d)=>s.call(o,l(c),l(d),n))}}function on(i,t,e){return function(...s){const o=this.__v_raw,n=ft(o),r=ks(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,c=o[i](...s),d=e?Fl:t?Rl:xo;return!t&&fe(n,"iterate",l?ja:es),{next(){const{value:u,done:b}=c.next();return b?{value:u,done:b}:{value:a?[d(u[0]),d(u[1])]:d(u),done:b}},[Symbol.iterator](){return this}}}}function $i(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function cg(){const i={get(n){return Ko(this,n)},get size(){return en(this)},has:tn,add:Vc,set:Pc,delete:_c,clear:Hc,forEach:sn(!1,!1)},t={get(n){return Ko(this,n,!1,!0)},get size(){return en(this)},has:tn,add:Vc,set:Pc,delete:_c,clear:Hc,forEach:sn(!1,!0)},e={get(n){return Ko(this,n,!0)},get size(){return en(this,!0)},has(n){return tn.call(this,n,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:sn(!0,!1)},s={get(n){return Ko(this,n,!0,!0)},get size(){return en(this,!0)},has(n){return tn.call(this,n,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=on(n,!1,!1),e[n]=on(n,!0,!1),t[n]=on(n,!1,!0),s[n]=on(n,!0,!0)}),[i,e,t,s]}const[dg,hg,ug,fg]=cg();function Sl(i,t){const e=t?i?fg:ug:i?hg:dg;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(ht(e,o)&&o in s?e:s,o,n)}const pg={get:Sl(!1,!1)},gg={get:Sl(!1,!0)},mg={get:Sl(!0,!1)},Vh=new WeakMap,Ph=new WeakMap,_h=new WeakMap,bg=new WeakMap;function vg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yg(i){return i.__v_skip||!Object.isExtensible(i)?0:vg(jp(i))}function Tl(i){return Os(i)?i:Il(i,!1,rg,pg,Vh)}function xg(i){return Il(i,!1,lg,gg,Ph)}function Hh(i){return Il(i,!0,ag,mg,_h)}function Il(i,t,e,s,o){if(!Et(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=yg(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function Fs(i){return Os(i)?Fs(i.__v_raw):!!(i&&i.__v_isReactive)}function Os(i){return!!(i&&i.__v_isReadonly)}function Mn(i){return!!(i&&i.__v_isShallow)}function Mh(i){return Fs(i)||Os(i)}function ft(i){const t=i&&i.__v_raw;return t?ft(t):i}function Nh(i){return Object.isExtensible(i)&&Hn(i,"__v_skip",!0),i}const xo=i=>Et(i)?Tl(i):i,Rl=i=>Et(i)?Hh(i):i;class zh{constructor(t,e,s,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new $l(()=>t(this._value),()=>Sn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ft(this);return(!t._cacheable||t.effect.dirty)&&Ai(t._value,t._value=t.effect.run())&&Sn(t,4),Bh(t),t.effect._dirtyLevel>=2&&Sn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function wg(i,t,e=!1){let s,o;const n=et(i);return n?(s=i,o=Ie):(s=i.get,o=i.set),new zh(s,o,n||!o,e)}function Bh(i){var t;Ei&&ts&&(i=ft(i),Rh(ts,(t=i.dep)!=null?t:i.dep=Eh(()=>i.dep=void 0,i instanceof zh?i:void 0)))}function Sn(i,t=4,e){i=ft(i);const s=i.dep;s&&Dh(s,t)}function pe(i){return!!(i&&i.__v_isRef===!0)}function nn(i){return $g(i,!1)}function $g(i,t){return pe(i)?i:new Cg(i,t)}class Cg{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ft(t),this._value=e?t:xo(t)}get value(){return Bh(this),this._value}set value(t){const e=this.__v_isShallow||Mn(t)||Os(t);t=e?t:ft(t),Ai(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:xo(t),Sn(this,4))}}function kg(i){return pe(i)?i.value:i}const Fg={get:(i,t,e)=>kg(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return pe(o)&&!pe(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function jh(i){return Fs(i)?i:new Proxy(i,Fg)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(i,t,e,s){try{return s?i(...s):i()}catch(o){sr(o,t,e)}}function je(i,t,e,s){if(et(i)){const n=Oi(i,t,e,s);return n&&xh(n)&&n.catch(r=>{sr(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(je(i[n],t,e,s));return o}function sr(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const c=n.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Oi(l,null,10,[i,r,a]);return}}Sg(i,e,o,s)}function Sg(i,t,e,s=!0){console.error(i)}let wo=!1,Ua=!1;const Xt=[];let Ze=0;const Ss=[];let Si=null,Qi=0;const Uh=Promise.resolve();let Dl=null;function Tg(i){const t=Dl||Uh;return i?t.then(this?i.bind(this):i):t}function Ig(i){let t=Ze+1,e=Xt.length;for(;t<e;){const s=t+e>>>1,o=Xt[s],n=$o(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function El(i){(!Xt.length||!Xt.includes(i,wo&&i.allowRecurse?Ze+1:Ze))&&(i.id==null?Xt.push(i):Xt.splice(Ig(i.id),0,i),qh())}function qh(){!wo&&!Ua&&(Ua=!0,Dl=Uh.then(Gh))}function Rg(i){const t=Xt.indexOf(i);t>Ze&&Xt.splice(t,1)}function Dg(i){K(i)?Ss.push(...i):(!Si||!Si.includes(i,i.allowRecurse?Qi+1:Qi))&&Ss.push(i),qh()}function Mc(i,t,e=wo?Ze+1:0){for(;e<Xt.length;e++){const s=Xt[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;Xt.splice(e,1),e--,s()}}}function Wh(i){if(Ss.length){const t=[...new Set(Ss)].sort((e,s)=>$o(e)-$o(s));if(Ss.length=0,Si){Si.push(...t);return}for(Si=t,Qi=0;Qi<Si.length;Qi++)Si[Qi]();Si=null,Qi=0}}const $o=i=>i.id==null?1/0:i.id,Eg=(i,t)=>{const e=$o(i)-$o(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Gh(i){Ua=!1,wo=!0,Xt.sort(Eg);try{for(Ze=0;Ze<Xt.length;Ze++){const t=Xt[Ze];t&&t.active!==!1&&Oi(t,null,14)}}finally{Ze=0,Xt.length=0,Wh(),wo=!1,Dl=null,(Xt.length||Ss.length)&&Gh()}}function Og(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||Ct;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:b}=s[d]||Ct;b&&(o=e.map(k=>Nt(k)?k.trim():k)),u&&(o=e.map(Ma))}let a,l=s[a=na(t)]||s[a=na(Es(t))];!l&&n&&(l=s[a=na(qs(t))]),l&&je(l,i,6,o);const c=s[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,je(c,i,6,o)}}function Xh(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!et(i)){const l=c=>{const d=Xh(c,t,!0);d&&(a=!0,Wt(r,d))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(Et(i)&&s.set(i,null),null):(K(n)?n.forEach(l=>r[l]=null):Wt(r,n),Et(i)&&s.set(i,r),r)}function or(i,t){return!i||!Kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),ht(i,t[0].toLowerCase()+t.slice(1))||ht(i,qs(t))||ht(i,t))}let qt=null,nr=null;function Nn(i){const t=qt;return qt=i,nr=i&&i.type.__scopeId||null,t}function Ag(i){nr=i}function Lg(){nr=null}function Yh(i,t=qt,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&Yc(-1);const n=Nn(t);let r;try{r=i(...o)}finally{Nn(n),s._d&&Yc(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function la(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:b,setupState:k,ctx:C,inheritAttrs:y}=i;let V,B;const st=Nn(i);try{if(e.shapeFlag&4){const ot=o||s,_t=ot;V=Qe(d.call(_t,ot,u,n,k,b,C)),B=l}else{const ot=t;V=Qe(ot.length>1?ot(n,{attrs:l,slots:a,emit:c}):ot(n,null)),B=t.props?l:Vg(l)}}catch(ot){go.length=0,sr(ot,i,1),V=ti(As)}let j=V;if(B&&y!==!1){const ot=Object.keys(B),{shapeFlag:_t}=j;ot.length&&_t&7&&(r&&ot.some(bl)&&(B=Pg(B,r)),j=Ls(j,B))}return e.dirs&&(j=Ls(j),j.dirs=j.dirs?j.dirs.concat(e.dirs):e.dirs),e.transition&&(j.transition=e.transition),V=j,Nn(st),V}const Vg=i=>{let t;for(const e in i)(e==="class"||e==="style"||Kn(e))&&((t||(t={}))[e]=i[e]);return t},Pg=(i,t)=>{const e={};for(const s in i)(!bl(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function _g(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?Nc(s,r,c):!!r;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const b=d[u];if(r[b]!==s[b]&&!or(c,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Nc(s,r,c):!0:!!r;return!1}function Nc(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!or(e,n))return!0}return!1}function Hg({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const Mg=Symbol.for("v-ndc"),Ng=i=>i.__isSuspense;function zg(i,t){t&&t.pendingBranch?K(i)?t.effects.push(...i):t.effects.push(i):Dg(i)}const Bg=Symbol.for("v-scx"),jg=()=>Tn(Bg),rn={};function ca(i,t,e){return Jh(i,t,e)}function Jh(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=Ct){if(t&&n){const tt=t;t=(...ce)=>{tt(...ce),_t()}}const l=ie,c=tt=>s===!0?tt:Ki(tt,s===!1?1:void 0);let d,u=!1,b=!1;if(pe(i)?(d=()=>i.value,u=Mn(i)):Fs(i)?(d=()=>c(i),u=!0):K(i)?(b=!0,u=i.some(tt=>Fs(tt)||Mn(tt)),d=()=>i.map(tt=>{if(pe(tt))return tt.value;if(Fs(tt))return c(tt);if(et(tt))return Oi(tt,l,2)})):et(i)?t?d=()=>Oi(i,l,2):d=()=>(k&&k(),je(i,l,3,[C])):d=Ie,t&&s){const tt=d;d=()=>Ki(tt())}let k,C=tt=>{k=j.onStop=()=>{Oi(tt,l,4),k=j.onStop=void 0}},y;if(cr)if(C=Ie,t?e&&je(t,l,3,[d(),b?[]:void 0,C]):d(),o==="sync"){const tt=jg();y=tt.__watcherHandles||(tt.__watcherHandles=[])}else return Ie;let V=b?new Array(i.length).fill(rn):rn;const B=()=>{if(!(!j.active||!j.dirty))if(t){const tt=j.run();(s||u||(b?tt.some((ce,de)=>Ai(ce,V[de])):Ai(tt,V)))&&(k&&k(),je(t,l,3,[tt,V===rn?void 0:b&&V[0]===rn?[]:V,C]),V=tt)}else j.run()};B.allowRecurse=!!t;let st;o==="sync"?st=B:o==="post"?st=()=>ue(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),st=()=>El(B));const j=new $l(d,Ie,st),ot=tg(),_t=()=>{j.stop(),ot&&vl(ot.effects,j)};return t?e?B():V=j.run():o==="post"?ue(j.run.bind(j),l&&l.suspense):j.run(),y&&y.push(_t),_t}function Ug(i,t,e){const s=this.proxy,o=Nt(i)?i.includes(".")?Qh(s,i):()=>s[i]:i.bind(s,s);let n;et(t)?n=t:(n=t.handler,e=t);const r=Lo(this),a=Jh(o,n.bind(s),e);return r(),a}function Qh(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function Ki(i,t,e=0,s){if(!Et(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),pe(i))Ki(i.value,t,e,s);else if(K(i))for(let o=0;o<i.length;o++)Ki(i[o],t,e,s);else if(yh(i)||ks(i))i.forEach(o=>{Ki(o,t,e,s)});else if($h(i))for(const o in i)Ki(i[o],t,e,s);return i}function qg(i,t){if(qt===null)return i;const e=dr(qt)||qt.proxy,s=i.dirs||(i.dirs=[]);for(let o=0;o<t.length;o++){let[n,r,a,l=Ct]=t[o];n&&(et(n)&&(n={mounted:n,updated:n}),n.deep&&Ki(r),s.push({dir:n,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return i}function Wi(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(ls(),je(l,e,8,[i.el,a,i,t]),cs())}}/*! #__NO_SIDE_EFFECTS__ */function Ol(i,t){return et(i)?Wt({name:i.name},t,{setup:i}):i}const uo=i=>!!i.type.__asyncLoader,Zh=i=>i.type.__isKeepAlive;function Wg(i,t){Kh(i,"a",t)}function Gg(i,t){Kh(i,"da",t)}function Kh(i,t,e=ie){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(rr(t,s,e),e){let o=e.parent;for(;o&&o.parent;)Zh(o.parent.vnode)&&Xg(s,t,e,o),o=o.parent}}function Xg(i,t,e,s){const o=rr(t,i,s,!0);eu(()=>{vl(s[t],o)},e)}function rr(i,t,e=ie,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;ls();const a=Lo(e),l=je(t,e,i,r);return a(),cs(),l});return s?o.unshift(n):o.push(n),n}}const ui=i=>(t,e=ie)=>(!cr||i==="sp")&&rr(i,(...s)=>t(...s),e),Yg=ui("bm"),tu=ui("m"),Jg=ui("bu"),Qg=ui("u"),Zg=ui("bum"),eu=ui("um"),Kg=ui("sp"),tm=ui("rtg"),em=ui("rtc");function im(i,t=ie){rr("ec",i,t)}function an(i,t,e,s){let o;const n=e&&e[s];if(K(i)||Nt(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(Et(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];o[a]=t(i[c],c,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function iu(i,t,e={},s,o){if(qt.isCE||qt.parent&&uo(qt.parent)&&qt.parent.isCE)return t!=="default"&&(e.name=t),ti("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),Ne();const r=n&&su(n(e)),a=Ja(te,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function su(i){return i.some(t=>pu(t)?!(t.type===As||t.type===te&&!su(t.children)):!0)?i:null}const qa=i=>i?bu(i)?dr(i)||i.proxy:qa(i.parent):null,fo=Wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>qa(i.parent),$root:i=>qa(i.root),$emit:i=>i.emit,$options:i=>Al(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,El(i.update)}),$nextTick:i=>i.n||(i.n=Tg.bind(i.proxy)),$watch:i=>Ug.bind(i)}),da=(i,t)=>i!==Ct&&!i.__isScriptSetup&&ht(i,t),sm={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const k=r[t];if(k!==void 0)switch(k){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(da(s,t))return r[t]=1,s[t];if(o!==Ct&&ht(o,t))return r[t]=2,o[t];if((c=i.propsOptions[0])&&ht(c,t))return r[t]=3,n[t];if(e!==Ct&&ht(e,t))return r[t]=4,e[t];Wa&&(r[t]=0)}}const d=fo[t];let u,b;if(d)return t==="$attrs"&&fe(i,"get",t),d(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Ct&&ht(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,ht(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return da(o,t)?(o[t]=e,!0):s!==Ct&&ht(s,t)?(s[t]=e,!0):ht(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==Ct&&ht(i,r)||da(t,r)||(a=n[0])&&ht(a,r)||ht(s,r)||ht(fo,r)||ht(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ht(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function zc(i){return K(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Wa=!0;function om(i){const t=Al(i),e=i.proxy,s=i.ctx;Wa=!1,t.beforeCreate&&Bc(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:b,beforeUpdate:k,updated:C,activated:y,deactivated:V,beforeDestroy:B,beforeUnmount:st,destroyed:j,unmounted:ot,render:_t,renderTracked:tt,renderTriggered:ce,errorCaptured:de,serverPrefetch:Ks,expose:ji,inheritAttrs:to,components:Yo,directives:Jo,filters:ea}=t;if(c&&nm(c,s,null),r)for(const It in r){const yt=r[It];et(yt)&&(s[It]=yt.bind(e))}if(o){const It=o.call(e,e);Et(It)&&(i.data=Tl(It))}if(Wa=!0,n)for(const It in n){const yt=n[It],Ui=et(yt)?yt.bind(e,e):et(yt.get)?yt.get.bind(e,e):Ie,Qo=!et(yt)&&et(yt.set)?yt.set.bind(e):Ie,qi=yu({get:Ui,set:Qo});Object.defineProperty(s,It,{enumerable:!0,configurable:!0,get:()=>qi.value,set:Ge=>qi.value=Ge})}if(a)for(const It in a)ou(a[It],s,e,It);if(l){const It=et(l)?l.call(e):l;Reflect.ownKeys(It).forEach(yt=>{hm(yt,It[yt])})}d&&Bc(d,i,"c");function Zt(It,yt){K(yt)?yt.forEach(Ui=>It(Ui.bind(e))):yt&&It(yt.bind(e))}if(Zt(Yg,u),Zt(tu,b),Zt(Jg,k),Zt(Qg,C),Zt(Wg,y),Zt(Gg,V),Zt(im,de),Zt(em,tt),Zt(tm,ce),Zt(Zg,st),Zt(eu,ot),Zt(Kg,Ks),K(ji))if(ji.length){const It=i.exposed||(i.exposed={});ji.forEach(yt=>{Object.defineProperty(It,yt,{get:()=>e[yt],set:Ui=>e[yt]=Ui})})}else i.exposed||(i.exposed={});_t&&i.render===Ie&&(i.render=_t),to!=null&&(i.inheritAttrs=to),Yo&&(i.components=Yo),Jo&&(i.directives=Jo)}function nm(i,t,e=Ie){K(i)&&(i=Ga(i));for(const s in i){const o=i[s];let n;Et(o)?"default"in o?n=Tn(o.from||s,o.default,!0):n=Tn(o.from||s):n=Tn(o),pe(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function Bc(i,t,e){je(K(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function ou(i,t,e,s){const o=s.includes(".")?Qh(e,s):()=>e[s];if(Nt(i)){const n=t[i];et(n)&&ca(o,n)}else if(et(i))ca(o,i.bind(e));else if(Et(i))if(K(i))i.forEach(n=>ou(n,t,e,s));else{const n=et(i.handler)?i.handler.bind(e):t[i.handler];et(n)&&ca(o,n,i)}}function Al(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(c=>zn(l,c,r,!0)),zn(l,t,r)),Et(t)&&n.set(t,l),l}function zn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&zn(i,n,e,!0),o&&o.forEach(r=>zn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=rm[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const rm={data:jc,props:Uc,emits:Uc,methods:co,computed:co,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:co,directives:co,watch:lm,provide:jc,inject:am};function jc(i,t){return t?i?function(){return Wt(et(i)?i.call(this,this):i,et(t)?t.call(this,this):t)}:t:i}function am(i,t){return co(Ga(i),Ga(t))}function Ga(i){if(K(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Kt(i,t){return i?[...new Set([].concat(i,t))]:t}function co(i,t){return i?Wt(Object.create(null),i,t):t}function Uc(i,t){return i?K(i)&&K(t)?[...new Set([...i,...t])]:Wt(Object.create(null),zc(i),zc(t??{})):t}function lm(i,t){if(!i)return t;if(!t)return i;const e=Wt(Object.create(null),i);for(const s in t)e[s]=Kt(i[s],t[s]);return e}function nu(){return{app:null,config:{isNativeTag:zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cm=0;function dm(i,t){return function(s,o=null){et(s)||(s=Wt({},s)),o!=null&&!Et(o)&&(o=null);const n=nu(),r=new WeakSet;let a=!1;const l=n.app={_uid:cm++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:Vm,get config(){return n.config},set config(c){},use(c,...d){return r.has(c)||(c&&et(c.install)?(r.add(c),c.install(l,...d)):et(c)&&(r.add(c),c(l,...d))),l},mixin(c){return n.mixins.includes(c)||n.mixins.push(c),l},component(c,d){return d?(n.components[c]=d,l):n.components[c]},directive(c,d){return d?(n.directives[c]=d,l):n.directives[c]},mount(c,d,u){if(!a){const b=ti(s,o);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),d&&t?t(b,c):i(b,c,u),a=!0,l._container=c,c.__vue_app__=l,dr(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,d){return n.provides[c]=d,l},runWithContext(c){const d=po;po=l;try{return c()}finally{po=d}}};return l}}let po=null;function hm(i,t){if(ie){let e=ie.provides;const s=ie.parent&&ie.parent.provides;s===e&&(e=ie.provides=Object.create(s)),e[i]=t}}function Tn(i,t,e=!1){const s=ie||qt;if(s||po){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:po._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&et(t)?t.call(s&&s.proxy):t}}function um(i,t,e,s=!1){const o={},n={};Hn(n,lr,1),i.propsDefaults=Object.create(null),ru(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:xg(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function fm(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ft(o),[l]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=i.vnode.dynamicProps;for(let u=0;u<d.length;u++){let b=d[u];if(or(i.emitsOptions,b))continue;const k=t[b];if(l)if(ht(n,b))k!==n[b]&&(n[b]=k,c=!0);else{const C=Es(b);o[C]=Xa(l,a,C,k,i,!1)}else k!==n[b]&&(n[b]=k,c=!0)}}}else{ru(i,t,o,n)&&(c=!0);let d;for(const u in a)(!t||!ht(t,u)&&((d=qs(u))===u||!ht(t,d)))&&(l?e&&(e[u]!==void 0||e[d]!==void 0)&&(o[u]=Xa(l,a,u,void 0,i,!0)):delete o[u]);if(n!==a)for(const u in n)(!t||!ht(t,u))&&(delete n[u],c=!0)}c&&li(i,"set","$attrs")}function ru(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(ho(l))continue;const c=t[l];let d;o&&ht(o,d=Es(l))?!n||!n.includes(d)?e[d]=c:(a||(a={}))[d]=c:or(i.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(n){const l=ft(e),c=a||Ct;for(let d=0;d<n.length;d++){const u=n[d];e[u]=Xa(o,l,u,c[u],i,!ht(c,u))}}return r}function Xa(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=ht(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&et(l)){const{propsDefaults:c}=o;if(e in c)s=c[e];else{const d=Lo(o);s=c[e]=l.call(null,t),d()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===qs(e))&&(s=!0))}return s}function au(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!et(i)){const d=u=>{l=!0;const[b,k]=au(u,t,!0);Wt(r,b),k&&a.push(...k)};!e&&t.mixins.length&&t.mixins.forEach(d),i.extends&&d(i.extends),i.mixins&&i.mixins.forEach(d)}if(!n&&!l)return Et(i)&&s.set(i,Cs),Cs;if(K(n))for(let d=0;d<n.length;d++){const u=Es(n[d]);qc(u)&&(r[u]=Ct)}else if(n)for(const d in n){const u=Es(d);if(qc(u)){const b=n[d],k=r[u]=K(b)||et(b)?{type:b}:Wt({},b);if(k){const C=Xc(Boolean,k.type),y=Xc(String,k.type);k[0]=C>-1,k[1]=y<0||C<y,(C>-1||ht(k,"default"))&&a.push(u)}}}const c=[r,a];return Et(i)&&s.set(i,c),c}function qc(i){return i[0]!=="$"&&!ho(i)}function Wc(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function Gc(i,t){return Wc(i)===Wc(t)}function Xc(i,t){return K(t)?t.findIndex(e=>Gc(e,i)):et(t)&&Gc(t,i)?0:-1}const lu=i=>i[0]==="_"||i==="$stable",Ll=i=>K(i)?i.map(Qe):[Qe(i)],pm=(i,t,e)=>{if(t._n)return t;const s=Yh((...o)=>Ll(t(...o)),e);return s._c=!1,s},cu=(i,t,e)=>{const s=i._ctx;for(const o in i){if(lu(o))continue;const n=i[o];if(et(n))t[o]=pm(o,n,s);else if(n!=null){const r=Ll(n);t[o]=()=>r}}},du=(i,t)=>{const e=Ll(t);i.slots.default=()=>e},gm=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ft(t),Hn(t,"_",e)):cu(t,i.slots={})}else i.slots={},t&&du(i,t);Hn(i.slots,lr,1)},mm=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=Ct;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Wt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,cu(t,o)),r=t}else t&&(du(i,t),r={default:1});if(n)for(const a in o)!lu(a)&&r[a]==null&&delete o[a]};function Ya(i,t,e,s,o=!1){if(K(i)){i.forEach((b,k)=>Ya(b,t&&(K(t)?t[k]:t),e,s,o));return}if(uo(s)&&!o)return;const n=s.shapeFlag&4?dr(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,c=t&&t.r,d=a.refs===Ct?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Nt(c)?(d[c]=null,ht(u,c)&&(u[c]=null)):pe(c)&&(c.value=null)),et(l))Oi(l,a,12,[r,d]);else{const b=Nt(l),k=pe(l);if(b||k){const C=()=>{if(i.f){const y=b?ht(u,l)?u[l]:d[l]:l.value;o?K(y)&&vl(y,n):K(y)?y.includes(n)||y.push(n):b?(d[l]=[n],ht(u,l)&&(u[l]=d[l])):(l.value=[n],i.k&&(d[i.k]=l.value))}else b?(d[l]=r,ht(u,l)&&(u[l]=r)):k&&(l.value=r,i.k&&(d[i.k]=r))};r?(C.id=-1,ue(C,e)):C()}}}const ue=zg;function bm(i){return vm(i)}function vm(i,t){const e=kh();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:b,setScopeId:k=Ie,insertStaticContent:C}=i,y=(p,m,w,F=null,S=null,E=null,P=void 0,D=null,A=!!m.dynamicChildren)=>{if(p===m)return;p&&!io(p,m)&&(F=Zo(p),Ge(p,S,E,!0),p=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:I,ref:M,shapeFlag:W}=m;switch(I){case ar:V(p,m,w,F);break;case As:B(p,m,w,F);break;case In:p==null&&st(m,w,F,P);break;case te:Yo(p,m,w,F,S,E,P,D,A);break;default:W&1?_t(p,m,w,F,S,E,P,D,A):W&6?Jo(p,m,w,F,S,E,P,D,A):(W&64||W&128)&&I.process(p,m,w,F,S,E,P,D,A,bs)}M!=null&&S&&Ya(M,p&&p.ref,E,m||p,!m)},V=(p,m,w,F)=>{if(p==null)s(m.el=a(m.children),w,F);else{const S=m.el=p.el;m.children!==p.children&&c(S,m.children)}},B=(p,m,w,F)=>{p==null?s(m.el=l(m.children||""),w,F):m.el=p.el},st=(p,m,w,F)=>{[p.el,p.anchor]=C(p.children,m,w,F,p.el,p.anchor)},j=({el:p,anchor:m},w,F)=>{let S;for(;p&&p!==m;)S=b(p),s(p,w,F),p=S;s(m,w,F)},ot=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=b(p),o(p),p=w;o(m)},_t=(p,m,w,F,S,E,P,D,A)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),p==null?tt(m,w,F,S,E,P,D,A):Ks(p,m,S,E,P,D,A)},tt=(p,m,w,F,S,E,P,D)=>{let A,I;const{props:M,shapeFlag:W,transition:q,dirs:Z}=p;if(A=p.el=r(p.type,E,M&&M.is,M),W&8?d(A,p.children):W&16&&de(p.children,A,null,F,S,ha(p,E),P,D),Z&&Wi(p,null,F,"created"),ce(A,p,p.scopeId,P,F),M){for(const bt in M)bt!=="value"&&!ho(bt)&&n(A,bt,null,M[bt],E,p.children,F,S,ni);"value"in M&&n(A,"value",null,M.value,E),(I=M.onVnodeBeforeMount)&&Ye(I,F,p)}Z&&Wi(p,null,F,"beforeMount");const lt=ym(S,q);lt&&q.beforeEnter(A),s(A,m,w),((I=M&&M.onVnodeMounted)||lt||Z)&&ue(()=>{I&&Ye(I,F,p),lt&&q.enter(A),Z&&Wi(p,null,F,"mounted")},S)},ce=(p,m,w,F,S)=>{if(w&&k(p,w),F)for(let E=0;E<F.length;E++)k(p,F[E]);if(S){let E=S.subTree;if(m===E){const P=S.vnode;ce(p,P,P.scopeId,P.slotScopeIds,S.parent)}}},de=(p,m,w,F,S,E,P,D,A=0)=>{for(let I=A;I<p.length;I++){const M=p[I]=D?Ii(p[I]):Qe(p[I]);y(null,M,m,w,F,S,E,P,D)}},Ks=(p,m,w,F,S,E,P)=>{const D=m.el=p.el;let{patchFlag:A,dynamicChildren:I,dirs:M}=m;A|=p.patchFlag&16;const W=p.props||Ct,q=m.props||Ct;let Z;if(w&&Gi(w,!1),(Z=q.onVnodeBeforeUpdate)&&Ye(Z,w,m,p),M&&Wi(m,p,w,"beforeUpdate"),w&&Gi(w,!0),I?ji(p.dynamicChildren,I,D,w,F,ha(m,S),E):P||yt(p,m,D,null,w,F,ha(m,S),E,!1),A>0){if(A&16)to(D,m,W,q,w,F,S);else if(A&2&&W.class!==q.class&&n(D,"class",null,q.class,S),A&4&&n(D,"style",W.style,q.style,S),A&8){const lt=m.dynamicProps;for(let bt=0;bt<lt.length;bt++){const St=lt[bt],Bt=W[St],He=q[St];(He!==Bt||St==="value")&&n(D,St,Bt,He,S,p.children,w,F,ni)}}A&1&&p.children!==m.children&&d(D,m.children)}else!P&&I==null&&to(D,m,W,q,w,F,S);((Z=q.onVnodeUpdated)||M)&&ue(()=>{Z&&Ye(Z,w,m,p),M&&Wi(m,p,w,"updated")},F)},ji=(p,m,w,F,S,E,P)=>{for(let D=0;D<m.length;D++){const A=p[D],I=m[D],M=A.el&&(A.type===te||!io(A,I)||A.shapeFlag&70)?u(A.el):w;y(A,I,M,null,F,S,E,P,!0)}},to=(p,m,w,F,S,E,P)=>{if(w!==F){if(w!==Ct)for(const D in w)!ho(D)&&!(D in F)&&n(p,D,w[D],null,P,m.children,S,E,ni);for(const D in F){if(ho(D))continue;const A=F[D],I=w[D];A!==I&&D!=="value"&&n(p,D,I,A,P,m.children,S,E,ni)}"value"in F&&n(p,"value",w.value,F.value,P)}},Yo=(p,m,w,F,S,E,P,D,A)=>{const I=m.el=p?p.el:a(""),M=m.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:Z}=m;Z&&(D=D?D.concat(Z):Z),p==null?(s(I,w,F),s(M,w,F),de(m.children||[],w,M,S,E,P,D,A)):W>0&&W&64&&q&&p.dynamicChildren?(ji(p.dynamicChildren,q,w,S,E,P,D),(m.key!=null||S&&m===S.subTree)&&hu(p,m,!0)):yt(p,m,w,M,S,E,P,D,A)},Jo=(p,m,w,F,S,E,P,D,A)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?S.ctx.activate(m,w,F,P,A):ea(m,w,F,S,E,P,A):Fc(p,m,A)},ea=(p,m,w,F,S,E,P)=>{const D=p.component=Rm(p,F,S);if(Zh(p)&&(D.ctx.renderer=bs),Dm(D),D.asyncDep){if(S&&S.registerDep(D,Zt),!p.el){const A=D.subTree=ti(As);B(null,A,m,w)}}else Zt(D,p,m,w,S,E,P)},Fc=(p,m,w)=>{const F=m.component=p.component;if(_g(p,m,w))if(F.asyncDep&&!F.asyncResolved){It(F,m,w);return}else F.next=m,Rg(F.update),F.effect.dirty=!0,F.update();else m.el=p.el,F.vnode=m},Zt=(p,m,w,F,S,E,P)=>{const D=()=>{if(p.isMounted){let{next:M,bu:W,u:q,parent:Z,vnode:lt}=p;{const vs=uu(p);if(vs){M&&(M.el=lt.el,It(p,M,P)),vs.asyncDep.then(()=>{p.isUnmounted||D()});return}}let bt=M,St;Gi(p,!1),M?(M.el=lt.el,It(p,M,P)):M=lt,W&&Fn(W),(St=M.props&&M.props.onVnodeBeforeUpdate)&&Ye(St,Z,M,lt),Gi(p,!0);const Bt=la(p),He=p.subTree;p.subTree=Bt,y(He,Bt,u(He.el),Zo(He),p,S,E),M.el=Bt.el,bt===null&&Hg(p,Bt.el),q&&ue(q,S),(St=M.props&&M.props.onVnodeUpdated)&&ue(()=>Ye(St,Z,M,lt),S)}else{let M;const{el:W,props:q}=m,{bm:Z,m:lt,parent:bt}=p,St=uo(m);if(Gi(p,!1),Z&&Fn(Z),!St&&(M=q&&q.onVnodeBeforeMount)&&Ye(M,bt,m),Gi(p,!0),W&&oa){const Bt=()=>{p.subTree=la(p),oa(W,p.subTree,p,S,null)};St?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Bt()):Bt()}else{const Bt=p.subTree=la(p);y(null,Bt,w,F,p,S,E),m.el=Bt.el}if(lt&&ue(lt,S),!St&&(M=q&&q.onVnodeMounted)){const Bt=m;ue(()=>Ye(M,bt,Bt),S)}(m.shapeFlag&256||bt&&uo(bt.vnode)&&bt.vnode.shapeFlag&256)&&p.a&&ue(p.a,S),p.isMounted=!0,m=w=F=null}},A=p.effect=new $l(D,Ie,()=>El(I),p.scope),I=p.update=()=>{A.dirty&&A.run()};I.id=p.uid,Gi(p,!0),I()},It=(p,m,w)=>{m.component=p;const F=p.vnode.props;p.vnode=m,p.next=null,fm(p,m.props,F,w),mm(p,m.children,w),ls(),Mc(p),cs()},yt=(p,m,w,F,S,E,P,D,A=!1)=>{const I=p&&p.children,M=p?p.shapeFlag:0,W=m.children,{patchFlag:q,shapeFlag:Z}=m;if(q>0){if(q&128){Qo(I,W,w,F,S,E,P,D,A);return}else if(q&256){Ui(I,W,w,F,S,E,P,D,A);return}}Z&8?(M&16&&ni(I,S,E),W!==I&&d(w,W)):M&16?Z&16?Qo(I,W,w,F,S,E,P,D,A):ni(I,S,E,!0):(M&8&&d(w,""),Z&16&&de(W,w,F,S,E,P,D,A))},Ui=(p,m,w,F,S,E,P,D,A)=>{p=p||Cs,m=m||Cs;const I=p.length,M=m.length,W=Math.min(I,M);let q;for(q=0;q<W;q++){const Z=m[q]=A?Ii(m[q]):Qe(m[q]);y(p[q],Z,w,null,S,E,P,D,A)}I>M?ni(p,S,E,!0,!1,W):de(m,w,F,S,E,P,D,A,W)},Qo=(p,m,w,F,S,E,P,D,A)=>{let I=0;const M=m.length;let W=p.length-1,q=M-1;for(;I<=W&&I<=q;){const Z=p[I],lt=m[I]=A?Ii(m[I]):Qe(m[I]);if(io(Z,lt))y(Z,lt,w,null,S,E,P,D,A);else break;I++}for(;I<=W&&I<=q;){const Z=p[W],lt=m[q]=A?Ii(m[q]):Qe(m[q]);if(io(Z,lt))y(Z,lt,w,null,S,E,P,D,A);else break;W--,q--}if(I>W){if(I<=q){const Z=q+1,lt=Z<M?m[Z].el:F;for(;I<=q;)y(null,m[I]=A?Ii(m[I]):Qe(m[I]),w,lt,S,E,P,D,A),I++}}else if(I>q)for(;I<=W;)Ge(p[I],S,E,!0),I++;else{const Z=I,lt=I,bt=new Map;for(I=lt;I<=q;I++){const ve=m[I]=A?Ii(m[I]):Qe(m[I]);ve.key!=null&&bt.set(ve.key,I)}let St,Bt=0;const He=q-lt+1;let vs=!1,Ic=0;const eo=new Array(He);for(I=0;I<He;I++)eo[I]=0;for(I=Z;I<=W;I++){const ve=p[I];if(Bt>=He){Ge(ve,S,E,!0);continue}let Xe;if(ve.key!=null)Xe=bt.get(ve.key);else for(St=lt;St<=q;St++)if(eo[St-lt]===0&&io(ve,m[St])){Xe=St;break}Xe===void 0?Ge(ve,S,E,!0):(eo[Xe-lt]=I+1,Xe>=Ic?Ic=Xe:vs=!0,y(ve,m[Xe],w,null,S,E,P,D,A),Bt++)}const Rc=vs?xm(eo):Cs;for(St=Rc.length-1,I=He-1;I>=0;I--){const ve=lt+I,Xe=m[ve],Dc=ve+1<M?m[ve+1].el:F;eo[I]===0?y(null,Xe,w,Dc,S,E,P,D,A):vs&&(St<0||I!==Rc[St]?qi(Xe,w,Dc,2):St--)}}},qi=(p,m,w,F,S=null)=>{const{el:E,type:P,transition:D,children:A,shapeFlag:I}=p;if(I&6){qi(p.component.subTree,m,w,F);return}if(I&128){p.suspense.move(m,w,F);return}if(I&64){P.move(p,m,w,bs);return}if(P===te){s(E,m,w);for(let W=0;W<A.length;W++)qi(A[W],m,w,F);s(p.anchor,m,w);return}if(P===In){j(p,m,w);return}if(F!==2&&I&1&&D)if(F===0)D.beforeEnter(E),s(E,m,w),ue(()=>D.enter(E),S);else{const{leave:W,delayLeave:q,afterLeave:Z}=D,lt=()=>s(E,m,w),bt=()=>{W(E,()=>{lt(),Z&&Z()})};q?q(E,lt,bt):bt()}else s(E,m,w)},Ge=(p,m,w,F=!1,S=!1)=>{const{type:E,props:P,ref:D,children:A,dynamicChildren:I,shapeFlag:M,patchFlag:W,dirs:q}=p;if(D!=null&&Ya(D,null,w,p,!0),M&256){m.ctx.deactivate(p);return}const Z=M&1&&q,lt=!uo(p);let bt;if(lt&&(bt=P&&P.onVnodeBeforeUnmount)&&Ye(bt,m,p),M&6)Np(p.component,w,F);else{if(M&128){p.suspense.unmount(w,F);return}Z&&Wi(p,null,m,"beforeUnmount"),M&64?p.type.remove(p,m,w,S,bs,F):I&&(E!==te||W>0&&W&64)?ni(I,m,w,!1,!0):(E===te&&W&384||!S&&M&16)&&ni(A,m,w),F&&Sc(p)}(lt&&(bt=P&&P.onVnodeUnmounted)||Z)&&ue(()=>{bt&&Ye(bt,m,p),Z&&Wi(p,null,m,"unmounted")},w)},Sc=p=>{const{type:m,el:w,anchor:F,transition:S}=p;if(m===te){Mp(w,F);return}if(m===In){ot(p);return}const E=()=>{o(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:P,delayLeave:D}=S,A=()=>P(w,E);D?D(p.el,E,A):A()}else E()},Mp=(p,m)=>{let w;for(;p!==m;)w=b(p),o(p),p=w;o(m)},Np=(p,m,w)=>{const{bum:F,scope:S,update:E,subTree:P,um:D}=p;F&&Fn(F),S.stop(),E&&(E.active=!1,Ge(P,p,m,w)),D&&ue(D,m),ue(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ni=(p,m,w,F=!1,S=!1,E=0)=>{for(let P=E;P<p.length;P++)Ge(p[P],m,w,F,S)},Zo=p=>p.shapeFlag&6?Zo(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let ia=!1;const Tc=(p,m,w)=>{p==null?m._vnode&&Ge(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,w),ia||(ia=!0,Mc(),Wh(),ia=!1),m._vnode=p},bs={p:y,um:Ge,m:qi,r:Sc,mt:ea,mc:de,pc:yt,pbc:ji,n:Zo,o:i};let sa,oa;return t&&([sa,oa]=t(bs)),{render:Tc,hydrate:sa,createApp:dm(Tc,sa)}}function ha({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function ym(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function hu(i,t,e=!1){const s=i.children,o=t.children;if(K(s)&&K(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=Ii(o[n]),a.el=r.el),e||hu(r,a)),a.type===ar&&(a.el=r.el)}}function xm(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const c=i[s];if(c!==0){if(o=e[e.length-1],i[o]<c){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<c?n=a+1:r=a;c<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function uu(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:uu(t)}const wm=i=>i.__isTeleport,te=Symbol.for("v-fgt"),ar=Symbol.for("v-txt"),As=Symbol.for("v-cmt"),In=Symbol.for("v-stc"),go=[];let Be=null;function Ne(i=!1){go.push(Be=i?null:[])}function $m(){go.pop(),Be=go[go.length-1]||null}let Co=1;function Yc(i){Co+=i}function fu(i){return i.dynamicChildren=Co>0?Be||Cs:null,$m(),Co>0&&Be&&Be.push(i),i}function Ti(i,t,e,s,o,n){return fu(ct(i,t,e,s,o,n,!0))}function Ja(i,t,e,s,o){return fu(ti(i,t,e,s,o,!0))}function pu(i){return i?i.__v_isVNode===!0:!1}function io(i,t){return i.type===t.type&&i.key===t.key}const lr="__vInternal",gu=({key:i})=>i??null,Rn=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Nt(i)||pe(i)||et(i)?{i:qt,r:i,k:t,f:!!e}:i:null);function ct(i,t=null,e=null,s=0,o=null,n=i===te?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&gu(t),ref:t&&Rn(t),scopeId:nr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:qt};return a?(Vl(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=Nt(e)?8:16),Co>0&&!r&&Be&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&Be.push(l),l}const ti=Cm;function Cm(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===Mg)&&(i=As),pu(i)){const a=Ls(i,t,!0);return e&&Vl(a,e),Co>0&&!n&&Be&&(a.shapeFlag&6?Be[Be.indexOf(i)]=a:Be.push(a)),a.patchFlag|=-2,a}if(Lm(i)&&(i=i.__vccOpts),t){t=km(t);let{class:a,style:l}=t;a&&!Nt(a)&&(t.class=wl(a)),Et(l)&&(Mh(l)&&!K(l)&&(l=Wt({},l)),t.style=xl(l))}const r=Nt(i)?1:Ng(i)?128:wm(i)?64:Et(i)?4:et(i)?2:0;return ct(i,t,e,s,o,r,n,!0)}function km(i){return i?Mh(i)||lr in i?Wt({},i):i:null}function Ls(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?Sm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&gu(a),ref:t&&t.ref?e&&o?K(o)?o.concat(Rn(t)):[o,Rn(t)]:Rn(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==te?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ls(i.ssContent),ssFallback:i.ssFallback&&Ls(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Fm(i=" ",t=0){return ti(ar,null,i,t)}function mu(i,t){const e=ti(In,null,i);return e.staticCount=t,e}function Qe(i){return i==null||typeof i=="boolean"?ti(As):K(i)?ti(te,null,i.slice()):typeof i=="object"?Ii(i):ti(ar,null,String(i))}function Ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ls(i)}function Vl(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(K(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Vl(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(lr in t)?t._ctx=qt:o===3&&qt&&(qt.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else et(t)?(t={default:t,_ctx:qt},e=32):(t=String(t),s&64?(e=16,t=[Fm(t)]):e=8);i.children=t,i.shapeFlag|=e}function Sm(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=wl([t.class,s.class]));else if(o==="style")t.style=xl([t.style,s.style]);else if(Kn(o)){const n=t[o],r=s[o];r&&n!==r&&!(K(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function Ye(i,t,e,s=null){je(i,t,7,[e,s])}const Tm=nu();let Im=0;function Rm(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||Tm,n={uid:Im++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:au(s,o),emitsOptions:Xh(s,o),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:s.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Og.bind(null,n),i.ce&&i.ce(n),n}let ie=null,Bn,Qa;{const i=kh(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};Bn=t("__VUE_INSTANCE_SETTERS__",e=>ie=e),Qa=t("__VUE_SSR_SETTERS__",e=>cr=e)}const Lo=i=>{const t=ie;return Bn(i),i.scope.on(),()=>{i.scope.off(),Bn(t)}},Jc=()=>{ie&&ie.scope.off(),Bn(null)};function bu(i){return i.vnode.shapeFlag&4}let cr=!1;function Dm(i,t=!1){t&&Qa(t);const{props:e,children:s}=i.vnode,o=bu(i);um(i,e,o,t),gm(i,s);const n=o?Em(i,t):void 0;return t&&Qa(!1),n}function Em(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=Nh(new Proxy(i.ctx,sm));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?Am(i):null,n=Lo(i);ls();const r=Oi(s,i,0,[i.props,o]);if(cs(),n(),xh(r)){if(r.then(Jc,Jc),t)return r.then(a=>{Qc(i,a,t)}).catch(a=>{sr(a,i,0)});i.asyncDep=r}else Qc(i,r,t)}else vu(i,t)}function Qc(i,t,e){et(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Et(t)&&(i.setupState=jh(t)),vu(i,e)}let Zc;function vu(i,t,e){const s=i.type;if(!i.render){if(!t&&Zc&&!s.render){const o=s.template||Al(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Wt(Wt({isCustomElement:n,delimiters:a},r),l);s.render=Zc(o,c)}}i.render=s.render||Ie}{const o=Lo(i);ls();try{om(i)}finally{cs(),o()}}}function Om(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return fe(i,"get","$attrs"),t[e]}}))}function Am(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return Om(i)},slots:i.slots,emit:i.emit,expose:t}}function dr(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(jh(Nh(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in fo)return fo[e](i)},has(t,e){return e in t||e in fo}}))}function Lm(i){return et(i)&&"__vccOpts"in i}const yu=(i,t)=>wg(i,t,cr),Vm="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Pm="http://www.w3.org/2000/svg",_m="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,Kc=Ri&&Ri.createElement("template"),Hm={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?Ri.createElementNS(Pm,i):t==="mathml"?Ri.createElementNS(_m,i):Ri.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>Ri.createTextNode(i),createComment:i=>Ri.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ri.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{Kc.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=Kc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Mm=Symbol("_vtc");function Nm(i,t,e){const s=i[Mm];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const td=Symbol("_vod"),zm=Symbol("_vsh"),Bm=Symbol(""),jm=/(^|;)\s*display\s*:/;function Um(i,t,e){const s=i.style,o=Nt(e);let n=!1;if(e&&!o){if(t)if(Nt(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&Dn(s,a,"")}else for(const r in t)e[r]==null&&Dn(s,r,"");for(const r in e)r==="display"&&(n=!0),Dn(s,r,e[r])}else if(o){if(t!==e){const r=s[Bm];r&&(e+=";"+r),s.cssText=e,n=jm.test(e)}}else t&&i.removeAttribute("style");td in i&&(i[td]=n?s.display:"",i[zm]&&(s.display="none"))}const ed=/\s*!important$/;function Dn(i,t,e){if(K(e))e.forEach(s=>Dn(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=qm(i,t);ed.test(e)?i.setProperty(qs(s),e.replace(ed,""),"important"):i[s]=e}}const id=["Webkit","Moz","ms"],ua={};function qm(i,t){const e=ua[t];if(e)return e;let s=Es(t);if(s!=="filter"&&s in i)return ua[t]=s;s=Ch(s);for(let o=0;o<id.length;o++){const n=id[o]+s;if(n in i)return ua[t]=n}return t}const sd="http://www.w3.org/1999/xlink";function Wm(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(sd,t.slice(6,t.length)):i.setAttributeNS(sd,t,e);else{const n=Qp(t);e==null||n&&!Fh(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Gm(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,d=e??"";(c!==d||!("_value"in i))&&(i.value=d),e==null&&i.removeAttribute(t),i._value=e;return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=Fh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function xs(i,t,e,s){i.addEventListener(t,e,s)}function Xm(i,t,e,s){i.removeEventListener(t,e,s)}const od=Symbol("_vei");function Ym(i,t,e,s,o=null){const n=i[od]||(i[od]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=Jm(t);if(s){const c=n[t]=Km(s,o);xs(i,a,c,l)}else r&&(Xm(i,a,r,l),n[t]=void 0)}}const nd=/(?:Once|Passive|Capture)$/;function Jm(i){let t;if(nd.test(i)){t={};let s;for(;s=i.match(nd);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):qs(i.slice(2)),t]}let fa=0;const Qm=Promise.resolve(),Zm=()=>fa||(Qm.then(()=>fa=0),fa=Date.now());function Km(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;je(tb(s,e.value),t,5,[s])};return e.value=i,e.attached=Zm(),e}function tb(i,t){if(K(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const rd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,eb=(i,t,e,s,o,n,r,a,l)=>{const c=o==="svg";t==="class"?Nm(i,s,c):t==="style"?Um(i,e,s):Kn(t)?bl(t)||Ym(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ib(i,t,s,c))?Gm(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Wm(i,t,s,c))};function ib(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&rd(t)&&et(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return rd(t)&&Nt(e)?!1:t in i}const ad=i=>{const t=i.props["onUpdate:modelValue"]||!1;return K(t)?e=>Fn(t,e):t};function sb(i){i.target.composing=!0}function ld(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pa=Symbol("_assign"),ob={created(i,{modifiers:{lazy:t,trim:e,number:s}},o){i[pa]=ad(o);const n=s||o.props&&o.props.type==="number";xs(i,t?"change":"input",r=>{if(r.target.composing)return;let a=i.value;e&&(a=a.trim()),n&&(a=Ma(a)),i[pa](a)}),e&&xs(i,"change",()=>{i.value=i.value.trim()}),t||(xs(i,"compositionstart",sb),xs(i,"compositionend",ld),xs(i,"change",ld))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,modifiers:{lazy:e,trim:s,number:o}},n){if(i[pa]=ad(n),i.composing)return;const r=o||i.type==="number"?Ma(i.value):i.value,a=t??"";r!==a&&(document.activeElement===i&&i.type!=="range"&&(e||s&&i.value.trim()===a)||(i.value=a))}},nb=Wt({patchProp:eb},Hm);let cd;function rb(){return cd||(cd=bm(nb))}const ab=(...i)=>{const t=rb().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=cb(s);if(!o)return;const n=t._component;!et(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,lb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function lb(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function cb(i){return Nt(i)?document.querySelector(i):i}const db="/assets/Logo-BgdiXH0i.jpg",di=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();di.trustedTypes===void 0&&(di.trustedTypes={createPolicy:(i,t)=>t});const xu={configurable:!1,enumerable:!1,writable:!1};di.FAST===void 0&&Reflect.defineProperty(di,"FAST",Object.assign({value:Object.create(null)},xu));const ko=di.FAST;if(ko.getById===void 0){const i=Object.create(null);Reflect.defineProperty(ko,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},xu))}const is=Object.freeze([]);function wu(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const ga=di.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,c=i.length-a;l<c;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&di.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),$u=di.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let ma=$u;const mo=`fast-${Math.random().toString(36).substring(2,8)}`,Cu=`${mo}{`,Pl=`}${mo}`,Y=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(ma!==$u)throw new Error("The HTML policy can only be set once.");ma=i},createHTML(i){return ma.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(mo)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${mo}:`,""))},createInterpolationPlaceholder(i){return`${Cu}${i}${Pl}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${mo}:${i}-->`},queueUpdate:ga.enqueue,processUpdates:ga.process,nextUpdate(){return new Promise(ga.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class jn{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class ku{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new jn(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new jn(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const X=ko.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=Y.queueUpdate;let s,o=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let d=c.$fastController||t.get(c);return d===void 0&&(Array.isArray(c)?d=o(c):t.set(c,d=new ku(c))),d}const r=wu();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,u){const b=this.field,k=d[b];if(k!==u){d[b]=u;const C=d[this.callback];typeof C=="function"&&C.call(d,k,u),n(d).notify(this.name)}}}class l extends jn{constructor(d,u,b=!1){super(d,u),this.binding=d,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const k=this.binding(d,u);return s=b,k}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const b=this.last,k=n(d),C=b===null?this.first:{};if(C.propertySource=d,C.propertyName=u,C.notifier=k,k.subscribe(this,u),b!==null){if(!this.needsRefresh){let y;s=void 0,y=b.propertySource[b.propertyName],s=this,d===y&&(this.needsRefresh=!0)}b.next=C}this.last=C}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){o=c},getNotifier:n,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){n(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return i.test(c.toString())}})});function x(i,t){X.defineProperty(i,t)}function hb(i,t,e){return Object.assign({},e,{get:function(){return X.trackVolatile(),e.get.apply(this)}})}const dd=ko.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class Fo{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return dd.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){dd.set(t)}}X.defineProperty(Fo.prototype,"index");X.defineProperty(Fo.prototype,"length");const bo=Object.seal(new Fo);class hr{constructor(){this.targetIndex=0}}class Fu extends hr{constructor(){super(...arguments),this.createPlaceholder=Y.createInterpolationPlaceholder}}class _l extends hr{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return Y.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function ub(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=X.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function fb(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function pb(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function gb(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function mb(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function bb(i){Y.setAttribute(this.target,this.targetName,i)}function vb(i){Y.setBooleanAttribute(this.target,this.targetName,i)}function yb(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function xb(i){this.target[this.targetName]=i}function wb(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class Hl extends Fu{constructor(t){super(),this.binding=t,this.bind=ub,this.unbind=pb,this.updateTarget=bb,this.isBindingVolatile=X.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=xb,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>Y.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=vb;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=fb,this.unbind=mb;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=wb);break}}targetAtContent(){this.updateTarget=yb,this.unbind=gb}createBehavior(t){return new $b(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class $b{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){Fo.setEvent(t);const e=this.binding(this.source,this.context);Fo.setEvent(null),e!==!0&&t.preventDefault()}}let ba=null;class Ml{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ba=this}static borrow(t){const e=ba||new Ml;return e.directives=t,e.reset(),ba=null,e}}function Cb(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let c=0;c<e;++c)l+=s[c](r,a);return l},n=new Hl(o);return n.targetName=t,n}const kb=Pl.length;function Su(i,t){const e=t.split(Cu);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(Pl);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(i.directives[c]),l=r.substring(a+kb)}l!==""&&s.push(l)}return s}function hd(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Su(i,a);let c=null;l===null?e&&(c=new Hl(()=>a),c.targetName=r.name):c=Cb(l),c!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(c))}}function Fb(i,t,e){const s=Su(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function Sb(i,t){const e=i.content;document.adoptNode(e);const s=Ml.borrow(t);hd(s,i,!0);const o=s.behaviorFactories;s.reset();const n=Y.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:hd(s,r);break;case 3:Fb(s,r,n);break;case 8:Y.isMarker(r)&&s.addFactory(t[Y.extractDirectiveIndexFromMarker(r)])}let a=0;(Y.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const va=document.createRange();class Tu{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){va.setStartBefore(t[0].firstChild),va.setEndAfter(t[t.length-1].lastChild),va.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class ud{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=Y.createHTML(d);const b=c.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(c=b)}else c=d;const u=Sb(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=Y.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let c=s.length;r<c;++r){const d=s[r],u=d.targetIndex;for(;l!==null;)if(a===u){o[r]=d.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)o[r]=c[d].createBehavior(t)}return new Tu(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,bo),o.appendTo(e),o}}const Tb=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function R(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof ud){const l=a;a=()=>l}if(typeof a=="function"&&(a=new Hl(a)),a instanceof Fu){const l=Tb.exec(r);l!==null&&(a.targetName=l[2])}a instanceof hr?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new ud(s,e)}class ne{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}ne.create=(()=>{if(Y.supportsAdoptedStyleSheets){const i=new Map;return t=>new Ib(t,i)}return i=>new Eb(i)})();function Nl(i){return i.map(t=>t instanceof ne?Nl(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Iu(i){return i.map(t=>t instanceof ne?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let Ru=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Du=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(Y.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Ru=(i,t)=>{i.adoptedStyleSheets.push(...t)},Du=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class Ib extends ne{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Iu(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=Nl(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){Ru(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Du(t,this.styleSheets),super.removeStylesFrom(t)}}let Rb=0;function Db(){return`fast-style-class-${++Rb}`}class Eb extends ne{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Iu(t),this.styleSheets=Nl(t),this.styleClass=Db()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Un=Object.freeze({locate:wu()}),Vo={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},H={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class qn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=Vo)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return X.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||Y.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;Y.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":Y.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(Un.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new qn(t,c)):s.push(new qn(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),Un.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const fd={mode:"open"},pd={},Za=ko.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class ur{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=qn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];o[a]=c.attribute,n[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?fd:e.shadowOptions===null?void 0:Object.assign(Object.assign({},fd),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?pd:Object.assign(Object.assign({},pd),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?ne.create(e.styles):e.styles instanceof ne?e.styles:ne.create([e.styles])}get isDefined(){return!!Za.getByType(this.type)}define(t=customElements){const e=this.type;if(Za.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)X.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}ur.forType=Za.getByType;const Eu=new WeakMap,Ob={bubbles:!0,composed:!0,cancelable:!0};function ya(i){return i.shadowRoot||Eu.get(i)||null}class zl extends ku{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Eu.set(t,n)}const o=X.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,c=t[l];c!==void 0&&(delete t[l],n[l]=c)}}}get isConnected(){return X.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,X.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=ya(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=ya(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,bo)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,bo);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,bo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},Ob),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=ya(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||Y.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=ur.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new zl(t,s)}}function gd(i){return class extends i{constructor(){super(),zl.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const fr=Object.assign(gd(HTMLElement),{from(i){return gd(i)},define(i,t){return new ur(i,t).define().type}});class Bl{createCSS(){return""}createBehavior(){}}function Ou(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof Bl){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof ne||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function T(i,...t){const{styles:e,behaviors:s}=Ou(i,t),o=ne.create(e);return s.length&&o.withBehaviors(...s),o}class Ab extends Bl{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=ne.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function xe(i,...t){const{styles:e,behaviors:s}=Ou(i,t);return new Ab(e,s)}function ze(i,t,e){return{index:i,removed:t,addedCount:e}}const Au=0,Lu=1,Ka=2,tl=3;function Lb(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let b=1;b<a;++b)i[t+b-1]===s[o+u-1]?l[u][b]=l[u-1][b-1]:(c=l[u-1][b]+1,d=l[u][b-1]+1,l[u][b]=c<d?c:d);return l}function Vb(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(Ka),e--;continue}if(e===0){o.push(tl),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(Au):(o.push(Lu),s=n),t--,e--):l===r?(o.push(tl),t--,s=r):(o.push(Ka),e--,s=a)}return o.reverse(),o}function Pb(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function _b(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function Hb(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function Vu(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=Pb(i,s,l)),e===i.length&&n===s.length&&(a=_b(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return is;if(t===e){const C=ze(t,[],0);for(;o<n;)C.removed.push(s[o++]);return[C]}else if(o===n)return[ze(t,[],e-t)];const c=Vb(Lb(i,t,e,s,o,n)),d=[];let u,b=t,k=o;for(let C=0;C<c.length;++C)switch(c[C]){case Au:u!==void 0&&(d.push(u),u=void 0),b++,k++;break;case Lu:u===void 0&&(u=ze(b,[],0)),u.addedCount++,b++,u.removed.push(s[k]),k++;break;case Ka:u===void 0&&(u=ze(b,[],0)),u.addedCount++,b++;break;case tl:u===void 0&&(u=ze(b,[],0)),u.removed.push(s[k]),k++;break}return u!==void 0&&d.push(u),d}const md=Array.prototype.push;function Mb(i,t,e,s){const o=ze(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const c=Hb(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(c>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-c;const d=o.removed.length+l.removed.length-c;if(!o.addedCount&&!d)n=!0;else{let u=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);md.apply(b,u),u=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);md.apply(u,b)}o.removed=u,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const d=o.addedCount-o.removed.length;l.index+=d,r+=d}}n||i.push(o)}function Nb(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];Mb(t,o.index,o.removed,o.addedCount)}return t}function zb(i,t){let e=[];const s=Nb(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(Vu(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let bd=!1;function xa(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class Bb extends jn{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,Y.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,Y.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?zb(this.source,t):Vu(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function jb(){if(bd)return;bd=!0,X.setArrayObserverFactory(l=>new Bb(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,c=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ze(this.length,[c],0)),c},i.push=function(){const l=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(xa(ze(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.shift=function(){const l=this.length>0,c=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ze(0,[c],0)),c},i.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=n.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(xa(ze(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(xa(ze(0,[],arguments.length),this)),l}}class Ub{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function ut(i){return new _l("fast-ref",Ub,i)}const Pu=i=>typeof i=="function",qb=()=>null;function vd(i){return i===void 0?qb:Pu(i)?i:()=>i}function Dt(i,t,e){const s=Pu(i)?i:()=>i,o=vd(t),n=vd(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const yd=Object.freeze({positioning:!1,recycle:!0});function Wb(i,t,e,s){i.bind(t[e],s)}function Gb(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class Xb{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Wb,this.itemsBindingObserver=X.binding(e,this,s),this.templateBindingObserver=X.binding(o,this,n),r.positioning&&(this.bindView=Gb)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=is;return}const e=this.itemsObserver,s=this.itemsObserver=X.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,b=t.length;u<b;++u){const k=t[u],C=k.removed;let y=0,V=k.index;const B=V+k.addedCount,st=s.splice(k.index,C.length),j=d=l.length+st.length;for(;V<B;++V){const ot=s[V],_t=ot?ot.firstChild:this.location;let tt;a&&d>0?(y<=j&&st.length>0?(tt=st[y],y++):(tt=l[c],c++),d--):tt=r.create(),s.splice(V,0,tt),o(tt,n,V,e),tt.insertBefore(_t)}st[y]&&l.push(...st.slice(y))}for(let u=c,b=l.length;u<b;++u)l[u].dispose();if(this.options.positioning)for(let u=0,b=s.length;u<b;++u){const k=s[u].context;k.length=b,k.index=u}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Tu.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=o.create();r(u,e,d,s),l[d]=u,u.insertBefore(n)}}else{let d=0;for(;d<a;++d)if(d<c){const b=l[d];r(b,e,d,s)}else{const b=o.create();r(b,e,d,s),l.push(b),b.insertBefore(n)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class jl extends hr{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=Y.createBlockPlaceholder,jb(),this.isItemsBindingVolatile=X.isVolatileBinding(t),this.isTemplateBindingVolatile=X.isVolatileBinding(e)}createBehavior(t){return new Xb(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Ts(i,t,e=yd){const s=typeof t=="function"?t:()=>t;return new jl(i,s,Object.assign(Object.assign({},yd),e))}function hi(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class _u{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=X.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(is),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Yb extends _u{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function kt(i){return typeof i=="string"&&(i={property:i}),new _l("fast-slotted",Yb,i)}class Jb extends _u{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function pr(i){return typeof i=="string"&&(i={property:i}),new _l("fast-children",Jb,i)}class ge{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const re=(i,t)=>R`
    <span
        part="end"
        ${ut("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${ut("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,ae=(i,t)=>R`
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
`,Qb=R`
    <span part="end" ${ut("endContainer")}>
        <slot
            name="end"
            ${ut("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,Zb=R`
    <span part="start" ${ut("startContainer")}>
        <slot
            name="start"
            ${ut("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,Kb=(i,t)=>R`
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
            ${ae(i,t)}
            ${re(i,t)}
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
***************************************************************************** */function h(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const wa=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=wa.get(e);s===void 0&&wa.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=wa.get(t);if(e!==void 0)return e.get(i)});class tv{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Mu(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new Se(o,t,e))}}function so(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],Nu(o)||(t[o]=i[o]);return t}const ev=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Se(i,1,i)},transient(i){return new Se(i,2,i)}}),$a=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:ev.singleton})}),xd=new Map;function wd(i){return t=>Reflect.getOwnMetadata(i,t)}let $d=null;const Rt=Object.freeze({createContainer(i){return new vo(null,Object.assign({},$a.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:Rt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Hu,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||Rt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new vo(i,Object.assign({},$a.default,t,{parentLocator:Rt.findParentContainer})):$d||($d=new vo(null,Object.assign({},$a.default,t,{parentLocator:()=>null})))},getDesignParamtypes:wd("design:paramtypes"),getAnnotationParamtypes:wd("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=xd.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=Rt.getDesignParamtypes(i),o=Rt.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=so(Rt.getDependencies(n)):t=[]}else t=so(o);else if(o===void 0)t=so(s);else{t=so(s);let n=o.length,r;for(let c=0;c<n;++c)r=o[c],r!==void 0&&(t[c]=r);const a=Object.keys(o);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],Nu(l)||(t[l]=o[l])}}else t=so(e);xd.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?Rt.findResponsibleContainer(this):Rt.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof fr)){const a=this.$fastController,l=()=>{const d=Rt.findResponsibleContainer(this).get(e),u=this[o];d!==u&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Sd,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)Rt.defineProperty(r,a,n,o);else{const c=Rt.getOrCreateAnnotationParamTypes(r);c[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new tv(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=Rt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)Rt.defineProperty(t,e,i[0]);else{const o=s?Rt.getOrCreateAnnotationParamTypes(s.value):Rt.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return So.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=sv){return i.register=function(s){return So.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),iv=Rt.createInterface("Container");Rt.inject;const sv={scoped:!1};class Se{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Cd(i){return this.get(i)}function ov(i,t){return t(i)}class nv{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Cd,t)):s=new this.Type(...this.dependencies.map(Cd,t),...e),this.transformers==null?s:this.transformers.reduce(ov,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const rv={$isResolver:!0,resolve(i,t){return t}};function En(i){return typeof i.register=="function"}function av(i){return En(i)&&typeof i.registerInRequestor=="boolean"}function kd(i){return av(i)&&i.registerInRequestor}function lv(i){return i.prototype!==void 0}const cv=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Hu="__DI_LOCATE_PARENT__",Ca=new Map;class vo{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(iv,rv),t instanceof Node&&t.addEventListener(Hu,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(e=t[l],!!Td(e))if(En(e))e.register(this,a);else if(lv(e))So.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Td(o)&&(En(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){ln(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof Se&&o.strategy===4?o.state.push(e):s.set(t,new Se(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(ln(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=kd(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(ln(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=kd(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){ln(t);const s=this;let o=s,n;if(e){let r=is;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(Fd(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return is}else return Fd(n,o,s);return is}getFactory(t){let e=Ca.get(t);if(e===void 0){if(dv(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ca.set(t,e=new nv(t,Rt.getDependencies(t)))}return e}registerFactory(t,e){Ca.set(t,e)}createChild(t){return new vo(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(cv.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(En(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const ka=new WeakMap;function Mu(i){return function(t,e,s){if(ka.has(s))return ka.get(s);const o=i(t,e,s);return ka.set(s,o),o}}const So=Object.freeze({instance(i,t){return new Se(i,0,t)},singleton(i,t){return new Se(i,1,t)},transient(i,t){return new Se(i,2,t)},callback(i,t){return new Se(i,3,t)},cachedCallback(i,t){return new Se(i,3,Mu(t))},aliasTo(i,t){return new Se(t,5,i)}});function ln(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Fd(i,t,e){if(i instanceof Se&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const Sd="(anonymous)";function Td(i){return typeof i=="object"&&i!==null||typeof i=="function"}const dv=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),cn={};function Nu(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=cn[i];if(t!==void 0)return t;const e=i.length;if(e===0)return cn[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return cn[i]=!1;return cn[i]=!0}default:return!1}}function Id(i){return`${i.toLowerCase()}:presentation`}const dn=new Map,zu=Object.freeze({define(i,t,e){const s=Id(i);dn.get(s)===void 0?dn.set(s,t):dn.set(s,!1),e.register(So.instance(s,t))},forTag(i,t){const e=Id(i),s=dn.get(e);return s===!1?Rt.findResponsibleContainer(t).get(e):s||null}});class hv{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?ne.create(e):e instanceof ne?e:ne.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class J extends fr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=zu.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new uv(this===J?class extends J{}:this,t,e)}}h([x],J.prototype,"template",void 0);h([x],J.prototype,"styles",void 0);function oo(i,t,e){return typeof i=="function"?i(t,e):i}class uv{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new hv(oo(s.template,a,s),oo(s.styles,a,s));a.definePresentation(l);let c=oo(s.shadowOptions,a,s);a.shadowRootMode&&(c?o.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:oo(s.elementOptions,a,s),shadowOptions:c,attributes:oo(s.attributes,a,s)})}})}}function Ft(i,...t){const e=Un.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Un.locate(s).forEach(n=>e.push(n))})}class os extends J{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([f({attribute:"heading-level",mode:"fromView",converter:H})],os.prototype,"headinglevel",void 0);h([f({mode:"boolean"})],os.prototype,"expanded",void 0);h([f],os.prototype,"id",void 0);Ft(os,ge);const fv=(i,t)=>R`
    <template>
        <slot ${kt({property:"accordionItems",filter:hi()})}></slot>
        <slot name="item" part="item" ${kt("accordionItems")}></slot>
    </template>
`,At={horizontal:"horizontal",vertical:"vertical"};function pv(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function gv(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Vs(...i){return i.every(t=>t instanceof HTMLElement)}function mv(i,t){return!i||!t||!Vs(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function bv(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Xi;function vv(){if(typeof Xi=="boolean")return Xi;if(!gv())return Xi=!1,Xi;const i=document.createElement("style"),t=bv();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Xi=!0}catch{Xi=!1}finally{document.head.removeChild(i)}return Xi}const Rd="focus",Dd="focusin",Ps="focusout",_s="keydown",Ed="resize",Od="scroll";var Ad;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Ad||(Ad={}));const Oe="ArrowDown",Li="ArrowLeft",Vi="ArrowRight",Ae="ArrowUp",fi="Enter",Ws="Escape",ei="Home",ii="End",yv="F2",xv="PageDown",wv="PageUp",ds=" ",gr="Tab",ws={ArrowDown:Oe,ArrowLeft:Li,ArrowRight:Vi,ArrowUp:Ae};var xt;(function(i){i.ltr="ltr",i.rtl="rtl"})(xt||(xt={}));function $v(i,t,e){return e<i?t:e>t?i:e}function mr(i,t,e){return Math.min(Math.max(e,i),t)}function hn(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let Cv=0;function To(i=""){return`${i}${Cv++}`}var g;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(g||(g={}));const Ld={single:"single",multi:"multi"};class Ul extends J{constructor(){super(...arguments),this.expandmode=Ld.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof os&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Ae:t.preventDefault(),this.adjust(-1);break;case Oe:t.preventDefault(),this.adjust(1);break;case ei:this.activeItemIndex=0,this.focusItem();break;case ii:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Ld.single}adjust(t){this.activeItemIndex=$v(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof os&&t.expandbutton.focus()}}h([f({attribute:"expand-mode"})],Ul.prototype,"expandmode",void 0);h([x],Ul.prototype,"accordionItems",void 0);const Bu=(i,t)=>R`
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
        ${ae(i,t)}
        <span class="content" part="content">
            <slot ${kt("defaultSlottedContent")}></slot>
        </span>
        ${re(i,t)}
    </a>
`;class wt{}h([f({attribute:"aria-atomic"})],wt.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],wt.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],wt.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],wt.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],wt.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],wt.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],wt.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],wt.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],wt.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],wt.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],wt.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],wt.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],wt.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],wt.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],wt.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],wt.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],wt.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],wt.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],wt.prototype,"ariaRoledescription",void 0);let we=class extends J{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([f],we.prototype,"download",void 0);h([f],we.prototype,"href",void 0);h([f],we.prototype,"hreflang",void 0);h([f],we.prototype,"ping",void 0);h([f],we.prototype,"referrerpolicy",void 0);h([f],we.prototype,"rel",void 0);h([f],we.prototype,"target",void 0);h([f],we.prototype,"type",void 0);h([x],we.prototype,"defaultSlottedContent",void 0);class br{}h([f({attribute:"aria-expanded"})],br.prototype,"ariaExpanded",void 0);Ft(br,wt);Ft(we,ge,br);const kv=(i,t)=>R`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${Dt(e=>e.initialLayoutComplete,R`
                <slot></slot>
            `)}
    </template>
`,ns=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?xt.rtl:xt.ltr};class Fv{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{di.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class G extends J{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=xt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(G.intersectionService.requestPosition(this,this.handleIntersection),G.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&G.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,G.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&G.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&G.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=ns(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const k=ns(this);if(k!==this.currentDirection){this.currentDirection=k,this.initialize();return}this.currentDirection===xt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,d,u)<r)&&(t=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Ed,this.update,{passive:!0}),window.addEventListener(Od,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Ed,this.update),window.removeEventListener(Od,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),Y.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}G.intersectionService=new Fv;h([f],G.prototype,"anchor",void 0);h([f],G.prototype,"viewport",void 0);h([f({attribute:"horizontal-positioning-mode"})],G.prototype,"horizontalPositioningMode",void 0);h([f({attribute:"horizontal-default-position"})],G.prototype,"horizontalDefaultPosition",void 0);h([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],G.prototype,"horizontalViewportLock",void 0);h([f({attribute:"horizontal-inset",mode:"boolean"})],G.prototype,"horizontalInset",void 0);h([f({attribute:"horizontal-threshold"})],G.prototype,"horizontalThreshold",void 0);h([f({attribute:"horizontal-scaling"})],G.prototype,"horizontalScaling",void 0);h([f({attribute:"vertical-positioning-mode"})],G.prototype,"verticalPositioningMode",void 0);h([f({attribute:"vertical-default-position"})],G.prototype,"verticalDefaultPosition",void 0);h([f({attribute:"vertical-viewport-lock",mode:"boolean"})],G.prototype,"verticalViewportLock",void 0);h([f({attribute:"vertical-inset",mode:"boolean"})],G.prototype,"verticalInset",void 0);h([f({attribute:"vertical-threshold"})],G.prototype,"verticalThreshold",void 0);h([f({attribute:"vertical-scaling"})],G.prototype,"verticalScaling",void 0);h([f({attribute:"fixed-placement",mode:"boolean"})],G.prototype,"fixedPlacement",void 0);h([f({attribute:"auto-update-mode"})],G.prototype,"autoUpdateMode",void 0);h([x],G.prototype,"anchorElement",void 0);h([x],G.prototype,"viewportElement",void 0);h([x],G.prototype,"initialLayoutComplete",void 0);const Sv=(i,t)=>R`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let Po=class extends J{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};h([f({attribute:"fill"})],Po.prototype,"fill",void 0);h([f({attribute:"color"})],Po.prototype,"color",void 0);h([f({mode:"boolean"})],Po.prototype,"circular",void 0);const Tv=(i,t)=>R`
    <div role="listitem" class="listitem" part="listitem">
        ${Dt(e=>e.href&&e.href.length>0,R`
                ${Bu(i,t)}
            `)}
        ${Dt(e=>!e.href,R`
                ${ae(i,t)}
                <slot></slot>
                ${re(i,t)}
            `)}
        ${Dt(e=>e.separator,R`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Io extends we{constructor(){super(...arguments),this.separator=!0}}h([x],Io.prototype,"separator",void 0);Ft(Io,ge,br);const Iv=(i,t)=>R`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${kt({property:"slottedBreadcrumbItems",filter:hi()})}
            ></slot>
        </div>
    </template>
`;class ju extends J{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof Io&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof Io?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([x],ju.prototype,"slottedBreadcrumbItems",void 0);const Rv=(i,t)=>R`
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
        ${ae(i,t)}
        <span class="content" part="content">
            <slot ${kt("defaultSlottedContent")}></slot>
        </span>
        ${re(i,t)}
    </button>
`,Vd="form-associated-proxy",Pd="ElementInternals",_d=Pd in window&&"setFormValue"in window[Pd].prototype,Hd=new WeakMap;function pi(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return _d}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return is}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),Y.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),Y.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!_d)return null;let e=Hd.get(this);return e||(e=this.attachInternals(),Hd.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Vd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Vd)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case fi:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return f({mode:"boolean"})(t.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),f({attribute:"current-value"})(t.prototype,"currentValue"),f(t.prototype,"name"),f({mode:"boolean"})(t.prototype,"required"),x(t.prototype,"value"),t}function ql(i){class t extends pi(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:Vo})(e.prototype,"currentChecked"),x(e.prototype,"defaultChecked"),x(e.prototype,"checked"),e}class Dv extends J{}class Ev extends pi(Dv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let $e=class extends Ev{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([f({mode:"boolean"})],$e.prototype,"autofocus",void 0);h([f({attribute:"form"})],$e.prototype,"formId",void 0);h([f],$e.prototype,"formaction",void 0);h([f],$e.prototype,"formenctype",void 0);h([f],$e.prototype,"formmethod",void 0);h([f({mode:"boolean"})],$e.prototype,"formnovalidate",void 0);h([f],$e.prototype,"formtarget",void 0);h([f],$e.prototype,"type",void 0);h([x],$e.prototype,"defaultSlottedContent",void 0);class vr{}h([f({attribute:"aria-expanded"})],vr.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],vr.prototype,"ariaPressed",void 0);Ft(vr,wt);Ft($e,ge,vr);class Ov{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let Le=class extends J{constructor(){super(...arguments),this.dateFormatter=new Ov,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?n:l>o?r:t,u=l<1?n.length+l:l>o?l-o:l,b=`${c}-${u}-${d}`,k=this.dateInString(b,this.disabledDates),C=this.dateInString(b,this.selectedDates),y={day:u,month:c,year:d,disabled:k,selected:C},V=a[a.length-1];a.length===0||V.length%7===0?a.push([y]):V.push(y),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,c=this.month!==o;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===fi&&this.handleDateSelect(t,e),!0}};h([f({mode:"boolean"})],Le.prototype,"readonly",void 0);h([f],Le.prototype,"locale",void 0);h([f({converter:H})],Le.prototype,"month",void 0);h([f({converter:H})],Le.prototype,"year",void 0);h([f({attribute:"day-format",mode:"fromView"})],Le.prototype,"dayFormat",void 0);h([f({attribute:"weekday-format",mode:"fromView"})],Le.prototype,"weekdayFormat",void 0);h([f({attribute:"month-format",mode:"fromView"})],Le.prototype,"monthFormat",void 0);h([f({attribute:"year-format",mode:"fromView"})],Le.prototype,"yearFormat",void 0);h([f({attribute:"min-weeks",converter:H})],Le.prototype,"minWeeks",void 0);h([f({attribute:"disabled-dates"})],Le.prototype,"disabledDates",void 0);h([f({attribute:"selected-dates"})],Le.prototype,"selectedDates",void 0);const un={none:"none",default:"default",sticky:"sticky"},Ci={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},yo={default:"default",header:"header",stickyHeader:"sticky-header"};class Gt extends J{constructor(){super(...arguments),this.rowType=yo.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new jl(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ps,this.handleFocusout),this.addEventListener(_s,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ps,this.handleFocusout),this.removeEventListener(_s,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Li:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Vi:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case ei:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case ii:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===yo.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===yo.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],Gt.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],Gt.prototype,"rowType",void 0);h([x],Gt.prototype,"rowData",void 0);h([x],Gt.prototype,"columnDefinitions",void 0);h([x],Gt.prototype,"cellItemTemplate",void 0);h([x],Gt.prototype,"headerCellItemTemplate",void 0);h([x],Gt.prototype,"rowIndex",void 0);h([x],Gt.prototype,"isActiveRow",void 0);h([x],Gt.prototype,"activeCellItemTemplate",void 0);h([x],Gt.prototype,"defaultCellItemTemplate",void 0);h([x],Gt.prototype,"defaultHeaderCellItemTemplate",void 0);h([x],Gt.prototype,"cellElements",void 0);function Av(i){const t=i.tagFor(Gt);return R`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const Lv=(i,t)=>{const e=Av(i),s=i.tagFor(Gt);return R`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${pr({property:"rowElements",filter:hi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class zt extends J{constructor(){super(),this.noTabbing=!1,this.generateHeader=un.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,Y.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=zt.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=zt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new jl(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Rd,this.handleFocus),this.addEventListener(_s,this.handleKeydown),this.addEventListener(Ps,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),Y.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Rd,this.handleFocus),this.removeEventListener(_s,this.handleKeydown),this.removeEventListener(Ps,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case Ae:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Oe:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case wv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case xv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===un.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case ei:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case ii:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,Y.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==un.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===un.sticky?yo.stickyHeader:yo.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}zt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],zt.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],zt.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],zt.prototype,"gridTemplateColumns",void 0);h([x],zt.prototype,"rowsData",void 0);h([x],zt.prototype,"columnDefinitions",void 0);h([x],zt.prototype,"rowItemTemplate",void 0);h([x],zt.prototype,"cellItemTemplate",void 0);h([x],zt.prototype,"headerCellItemTemplate",void 0);h([x],zt.prototype,"focusRowIndex",void 0);h([x],zt.prototype,"focusColumnIndex",void 0);h([x],zt.prototype,"defaultRowItemTemplate",void 0);h([x],zt.prototype,"rowElementTag",void 0);h([x],zt.prototype,"rowElements",void 0);const Vv=R`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,Pv=R`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class gi extends J{constructor(){super(...arguments),this.cellType=Ci.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Dd,this.handleFocusin),this.addEventListener(Ps,this.handleFocusout),this.addEventListener(_s,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Dd,this.handleFocusin),this.removeEventListener(Ps,this.handleFocusout),this.removeEventListener(_s,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Ci.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===Ci.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Ci.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case fi:case yv:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Ci.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Ws:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Ci.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Pv.render(this,this);break;case void 0:case Ci.rowHeader:case Ci.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Vv.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],gi.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],gi.prototype,"gridColumn",void 0);h([x],gi.prototype,"rowData",void 0);h([x],gi.prototype,"columnDefinition",void 0);function _v(i){const t=i.tagFor(gi);return R`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function Hv(i){const t=i.tagFor(gi);return R`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const Mv=(i,t)=>{const e=_v(i),s=Hv(i);return R`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${pr({property:"cellElements",filter:hi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${kt("slottedCellElements")}></slot>
        </template>
    `},Nv=(i,t)=>R`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,zv=R`
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
`,Bv=i=>{const t=i.tagFor(gi);return R`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},jv=(i,t)=>{const e=i.tagFor(gi);return R`
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
    `},Uv=(i,t)=>{const e=i.tagFor(Gt);return R`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Ts(s=>s,jv(i,t),{positioning:!0})}
        </${e}>
    `},qv=(i,t)=>{const e=i.tagFor(zt),s=i.tagFor(Gt);return R`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Ts(o=>o.getWeekdayText(),Bv(i),{positioning:!0})}
        </${s}>
        ${Ts(o=>o.getDays(),Uv(i,t))}
    </${e}>
`},Wv=i=>R`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Ts(t=>t.getWeekdayText(),R`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Ts(t=>t.getDays(),R`
                    <div class="week">
                        ${Ts(t=>t,R`
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
    `,Gv=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return R`
        <template>
            ${Zb}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${Dt(n=>n.readonly,Wv(o),qv(i,o))}
            ${Qb}
        </template>
    `},Xv=(i,t)=>R`
    <slot></slot>
`;let Uu=class extends J{};const Yv=(i,t)=>R`
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
            <slot ${kt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Jv extends J{}class Qv extends ql(Jv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class yr extends Qv{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case ds:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],yr.prototype,"readOnly",void 0);h([x],yr.prototype,"defaultSlottedNodes",void 0);h([x],yr.prototype,"indeterminate",void 0);function qu(i){return Vs(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class si extends J{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),X.notify(this,"value")}get value(){var t;return X.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([x],si.prototype,"checked",void 0);h([x],si.prototype,"content",void 0);h([x],si.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],si.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],si.prototype,"selectedAttribute",void 0);h([x],si.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],si.prototype,"initialValue",void 0);class Gs{}h([x],Gs.prototype,"ariaChecked",void 0);h([x],Gs.prototype,"ariaPosInSet",void 0);h([x],Gs.prototype,"ariaSelected",void 0);h([x],Gs.prototype,"ariaSetSize",void 0);Ft(Gs,wt);Ft(si,ge,Gs);let me=class On extends J{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return X.track(this,"options"),this._options}set options(t){this._options=t,X.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{On.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,On.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case ei:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Oe:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Ae:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case ii:{t.preventDefault(),this.selectLastOption();break}case gr:return this.focusAndScrollOptionIntoView(),!0;case fi:case Ws:return!0;case ds:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(On.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=X.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=pv(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(qu(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=To("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};me.slottedOptionFilter=i=>qu(i)&&!i.hidden;me.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],me.prototype,"disabled",void 0);h([x],me.prototype,"selectedIndex",void 0);h([x],me.prototype,"selectedOptions",void 0);h([x],me.prototype,"slottedOptions",void 0);h([x],me.prototype,"typeaheadBuffer",void 0);class Hi{}h([x],Hi.prototype,"ariaActiveDescendant",void 0);h([x],Hi.prototype,"ariaDisabled",void 0);h([x],Hi.prototype,"ariaExpanded",void 0);h([x],Hi.prototype,"ariaMultiSelectable",void 0);Ft(Hi,wt);Ft(me,Hi);const Is={above:"above",below:"below"};class Zv extends me{}class Kv extends pi(Zv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const fn={inline:"inline",list:"list",both:"both",none:"none"};let mi=class extends Kv{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=To("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===fn.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===fn.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===fn.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),Y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return X.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,X.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return X.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),X.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===fn.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=mr(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Is.above:Is.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Is.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([f({attribute:"autocomplete",mode:"fromView"})],mi.prototype,"autocomplete",void 0);h([x],mi.prototype,"maxHeight",void 0);h([f({attribute:"open",mode:"boolean"})],mi.prototype,"open",void 0);h([f],mi.prototype,"placeholder",void 0);h([f({attribute:"position"})],mi.prototype,"positionAttribute",void 0);h([x],mi.prototype,"position",void 0);class xr{}h([x],xr.prototype,"ariaAutoComplete",void 0);h([x],xr.prototype,"ariaControls",void 0);Ft(xr,Hi);Ft(mi,ge,xr);const ty=(i,t)=>R`
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
            ${ae(i,t)}
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
            ${re(i,t)}
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
                ${kt({filter:me.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Wn(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function ey(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=Wn(e)}return!1}const ri=document.createElement("div");function iy(i){return i instanceof fr}class Wl{setProperty(t,e){Y.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){Y.queueUpdate(()=>this.target.removeProperty(t))}}class sy extends Wl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(ne.create([e]))}}class oy extends Wl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ny extends Wl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Wu{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),X.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),Y.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),Y.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}h([x],Wu.prototype,"target",void 0);class ry{constructor(t){this.target=t.style}setProperty(t,e){Y.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){Y.queueUpdate(()=>this.target.removeProperty(t))}}class jt{setProperty(t,e){jt.properties[t]=e;for(const s of jt.roots.values())$s.getOrCreate(jt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete jt.properties[t];for(const e of jt.roots.values())$s.getOrCreate(jt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=jt;if(!e.has(t)){e.add(t);const s=$s.getOrCreate(this.normalizeRoot(t));for(const o in jt.properties)s.setProperty(o,jt.properties[o])}}static unregisterRoot(t){const{roots:e}=jt;if(e.has(t)){e.delete(t);const s=$s.getOrCreate(jt.normalizeRoot(t));for(const o in jt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===ri?document:t}}jt.roots=new Set;jt.properties={};const Fa=new WeakMap,ay=Y.supportsAdoptedStyleSheets?sy:Wu,$s=Object.freeze({getOrCreate(i){if(Fa.has(i))return Fa.get(i);let t;return i===ri?t=new jt:i instanceof Document?t=Y.supportsAdoptedStyleSheets?new oy:new ny:iy(i)?t=new ay(i):t=new ry(i),Fa.set(i,t),t}});class ee extends Bl{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ee.uniqueId(),ee.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new ee({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return ee.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Lt.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof ee&&(e=this.alias(e)),Lt.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Lt.existsFor(t)&&Lt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ri,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!Lt.existsFor(e)&&Lt.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}ee.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();ee.tokensById=new Map;class ly{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){$s.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Lt.getOrCreate(e).get(t)))}remove(t,e){$s.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class cy{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=X.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,bo))}}class dy{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),X.getNotifier(this).notify(t.id))}get(t){return X.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const no=new WeakMap,ro=new WeakMap;class Lt{constructor(t){this.target=t,this.store=new dy,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=ee.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},no.set(t,this),X.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof fr?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return no.get(t)||new Lt(t)}static existsFor(t){return no.has(t)}static findParent(t){if(ri!==t.target){let e=Wn(t.target);for(;e!==null;){if(no.has(e))return no.get(e);e=Wn(e)}return Lt.getOrCreate(ri)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ri?Lt.getOrCreate(ri):null}while(s!==null);return null}get parent(){return ro.get(this)||null}updateCSSTokenReflection(t,e){if(ee.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=Lt.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){ee.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),ee.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Lt.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&ro.get(this).removeChild(this)}appendChild(t){t.parent&&ro.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));ro.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),X.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),X.getNotifier(this.store).unsubscribe(t),t.parent===this?ro.delete(t):!1}contains(t){return ey(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Lt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Lt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=ee.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);ee.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new cy(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}Lt.cssCustomPropertyReflector=new ly;h([x],Lt.prototype,"children",void 0);function hy(i){return ee.from(i)}const mt=Object.freeze({create:hy,notifyConnection(i){return!i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).unbind(),!0)},registerRoot(i=ri){jt.registerRoot(i)},unregisterRoot(i=ri){jt.unregisterRoot(i)}}),Sa=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ta=new Map,An=new Map;let Rs=null;const ao=Rt.createInterface(i=>i.cachedCallback(t=>(Rs===null&&(Rs=new Xu(null,t)),Rs))),Gu=Object.freeze({tagFor(i){return An.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||Rt.findResponsibleContainer(i).get(ao)},getOrCreate(i){if(!i)return Rs===null&&(Rs=Rt.getOrCreateDOMContainer().get(ao)),Rs;const t=i.$$designSystem$$;if(t)return t;const e=Rt.getOrCreateDOMContainer(i);if(e.has(ao,!1))return e.get(ao);{const s=new Xu(i,e);return e.register(So.instance(ao,s)),s}}});function uy(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Xu{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Sa.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=uy(a,l,c),{name:u,callback:b,baseClass:k}=d;let{type:C}=d,y=u,V=Ta.get(y),B=!0;for(;V;){const st=o(y,C,V);switch(st){case Sa.ignoreDuplicate:return;case Sa.definitionCallbackOnly:B=!1,V=void 0;break;default:y=st,V=Ta.get(y);break}}B&&((An.has(C)||C===J)&&(C=class extends C{}),Ta.set(y,C),An.set(C,y),k&&An.set(k,y)),s.push(new fy(e,y,C,n,b,B))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&mt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class fy{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){zu.define(this.name,t,this.container)}defineElement(t){this.definition=new ur(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Gu.tagFor(t)}}const py=(i,t)=>R`
    <div class="positioning-region" part="positioning-region">
        ${Dt(e=>e.modal,R`
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
*/var Yu=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],gy=Yu.join(","),Ju=typeof Element>"u",Ro=Ju?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,el=!Ju&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},my=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Qu=function(t){return t.tagName==="INPUT"},by=function(t){return Qu(t)&&t.type==="hidden"},vy=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},yy=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},xy=function(t){if(!t.name)return!0;var e=t.form||el(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=yy(o,t.form);return!n||n===t},wy=function(t){return Qu(t)&&t.type==="radio"},$y=function(t){return wy(t)&&!xy(t)},Md=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},Cy=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Ro.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(Ro.call(r,"details:not([open]) *"))return!0;var a=el(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var c=t;t;){var d=t.parentElement,u=el(t);if(d&&!d.shadowRoot&&o(d)===!0)return Md(t);t.assignedSlot?t=t.assignedSlot:!d&&u!==t.ownerDocument?t=u.host:t=d}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return Md(t);return!1},ky=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return Ro.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},Zu=function(t,e){return!(e.disabled||by(e)||Cy(e,t)||vy(e)||ky(e))},Fy=function(t,e){return!($y(e)||my(e)<0||!Zu(t,e))},Nd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Ro.call(t,gy)===!1?!1:Fy(e,t)},Sy=Yu.concat("iframe").join(","),zd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Ro.call(t,Sy)===!1?!1:Zu(e,t)};class Re extends J{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Ws:this.dismiss(),t.preventDefault();break;case gr:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Re.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),Y.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=X.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:Nd(e)||Re.isFocusableFastElement(e)&&Re.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Re.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>Nd(o))}}h([f({mode:"boolean"})],Re.prototype,"modal",void 0);h([f({mode:"boolean"})],Re.prototype,"hidden",void 0);h([f({attribute:"trap-focus",mode:"boolean"})],Re.prototype,"trapFocus",void 0);h([f({attribute:"aria-describedby"})],Re.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-labelledby"})],Re.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Re.prototype,"ariaLabel",void 0);const Ty=(i,t)=>R`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,Iy={separator:"separator",presentation:"presentation"};class wr extends J{constructor(){super(...arguments),this.role=Iy.separator,this.orientation=At.horizontal}}h([f],wr.prototype,"role",void 0);h([f],wr.prototype,"orientation",void 0);const il={next:"next",previous:"previous"},Ry=(i,t)=>R`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${Dt(e=>e.direction===il.next,R`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${Dt(e=>e.direction===il.previous,R`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class $r extends J{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=il.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}h([f({mode:"boolean"})],$r.prototype,"disabled",void 0);h([f({attribute:"aria-hidden",converter:Vo})],$r.prototype,"hiddenFromAT",void 0);h([f],$r.prototype,"direction",void 0);const Dy=(i,t)=>R`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ae(i,t)}
        <span class="content" part="content">
            <slot ${kt("content")}></slot>
        </span>
        ${re(i,t)}
    </template>
`;class _o extends me{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=hn(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=hn(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=hn(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=hn(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case ei:{this.checkFirstOption(s);return}case Oe:{this.checkNextOption(s);return}case Ae:{this.checkPreviousOption(s);return}case ii:{this.checkLastOption(s);return}case gr:return this.focusAndScrollOptionIntoView(),!0;case Ws:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ds:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&Y.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([x],_o.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],_o.prototype,"multiple",void 0);h([f({converter:H})],_o.prototype,"size",void 0);const Ey=(i,t)=>R`
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
            ${kt({filter:_o.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,se={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Oy={[se.menuitem]:"menuitem",[se.menuitemcheckbox]:"menuitemcheckbox",[se.menuitemradio]:"menuitemradio"};class Ce extends J{constructor(){super(...arguments),this.role=se.menuitem,this.hasSubmenu=!1,this.currentDirection=xt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case fi:case ds:return this.invoke(),!1;case Vi:return this.expandAndFocus(),!1;case Li:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case se.menuitemcheckbox:this.checked=!this.checked;break;case se.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case se.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=ns(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),Y.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([f({mode:"boolean"})],Ce.prototype,"disabled",void 0);h([f({mode:"boolean"})],Ce.prototype,"expanded",void 0);h([x],Ce.prototype,"startColumnCount",void 0);h([f],Ce.prototype,"role",void 0);h([f({mode:"boolean"})],Ce.prototype,"checked",void 0);h([x],Ce.prototype,"submenuRegion",void 0);h([x],Ce.prototype,"hasSubmenu",void 0);h([x],Ce.prototype,"currentDirection",void 0);h([x],Ce.prototype,"submenu",void 0);Ft(Ce,ge);const Ay=(i,t)=>R`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==se.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,s)=>e.handleMenuItemKeyDown(s.event)}"
        @click="${(e,s)=>e.handleMenuItemClick(s.event)}"
        @mouseover="${(e,s)=>e.handleMouseOver(s.event)}"
        @mouseout="${(e,s)=>e.handleMouseOut(s.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${Dt(e=>e.role===se.menuitemcheckbox,R`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Dt(e=>e.role===se.menuitemradio,R`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${ae(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${re(i,t)}
        ${Dt(e=>e.hasSubmenu,R`
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
        ${Dt(e=>e.expanded,R`
                <${i.tagFor(G)}
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
                </${i.tagFor(G)}>
            `)}
    </template>
`,Ly=(i,t)=>R`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${kt("items")}></slot>
    </template>
`;let Cr=class Ku extends J{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Vs(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==se.menuitem&&a===null||r===se.menuitem&&a!==null?1:r!==se.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof Ce||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===se.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===se.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Vs(t)&&Ku.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),Y.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Oe:this.setFocus(this.focusIndex+1,1);return;case Ae:this.setFocus(this.focusIndex-1,-1);return;case ii:this.setFocus(this.menuItems.length-1,-1);return;case ei:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};Cr.focusableElementRoles=Oy;h([x],Cr.prototype,"items",void 0);const Vy=(i,t)=>R`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kt("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${ae(i,t)}
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
            ${Dt(e=>!e.hideStep&&!e.readOnly&&!e.disabled,R`
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
            ${re(i,t)}
        </div>
    </template>
`;class Py extends J{}class _y extends pi(Py){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Hy={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let be=class extends _y{constructor(){super(...arguments),this.type=Hy.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&Y.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({attribute:"readonly",mode:"boolean"})],be.prototype,"readOnly",void 0);h([f({mode:"boolean"})],be.prototype,"autofocus",void 0);h([f],be.prototype,"placeholder",void 0);h([f],be.prototype,"type",void 0);h([f],be.prototype,"list",void 0);h([f({converter:H})],be.prototype,"maxlength",void 0);h([f({converter:H})],be.prototype,"minlength",void 0);h([f],be.prototype,"pattern",void 0);h([f({converter:H})],be.prototype,"size",void 0);h([f({mode:"boolean"})],be.prototype,"spellcheck",void 0);h([x],be.prototype,"defaultSlottedNodes",void 0);class kr{}Ft(kr,wt);Ft(be,ge,kr);class My extends J{}class Ny extends pi(My){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let le=class extends Ny{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&Y.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Ae:return this.stepUp(),!1;case Oe:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([f({attribute:"readonly",mode:"boolean"})],le.prototype,"readOnly",void 0);h([f({mode:"boolean"})],le.prototype,"autofocus",void 0);h([f({attribute:"hide-step",mode:"boolean"})],le.prototype,"hideStep",void 0);h([f],le.prototype,"placeholder",void 0);h([f],le.prototype,"list",void 0);h([f({converter:H})],le.prototype,"maxlength",void 0);h([f({converter:H})],le.prototype,"minlength",void 0);h([f({converter:H})],le.prototype,"size",void 0);h([f({converter:H})],le.prototype,"step",void 0);h([f({converter:H})],le.prototype,"max",void 0);h([f({converter:H})],le.prototype,"min",void 0);h([x],le.prototype,"defaultSlottedNodes",void 0);Ft(le,ge,kr);const Bd=44,zy=(i,t)=>R`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Dt(e=>typeof e.value=="number",R`
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
                        style="stroke-dasharray: ${e=>Bd*e.percentComplete/100}px ${Bd}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,R`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class hs extends J{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}h([f({converter:H})],hs.prototype,"value",void 0);h([f({converter:H})],hs.prototype,"min",void 0);h([f({converter:H})],hs.prototype,"max",void 0);h([f({mode:"boolean"})],hs.prototype,"paused",void 0);h([x],hs.prototype,"percentComplete",void 0);const By=(i,t)=>R`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Dt(e=>typeof e.value=="number",R`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${e=>e.percentComplete}%"
                    ></div>
                </div>
            `,R`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${t.indeterminateIndicator1||""}
                        ${t.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,jy=(i,t)=>R`
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
            class="positioning-region ${e=>e.orientation===At.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${kt({property:"slottedRadioButtons",filter:hi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Mi extends J{constructor(){super(...arguments),this.orientation=At.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Vi,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Li,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in ws&&this.isInsideFoundationToolbar)return!0;switch(e){case fi:{this.checkFocusedRadio();break}case Vi:case Oe:{this.direction===xt.ltr?this.moveRight(t):this.moveLeft(t);break}case Li:case Ae:{this.direction===xt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=ns(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],Mi.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],Mi.prototype,"disabled",void 0);h([f],Mi.prototype,"name",void 0);h([f],Mi.prototype,"value",void 0);h([f],Mi.prototype,"orientation",void 0);h([x],Mi.prototype,"childItems",void 0);h([x],Mi.prototype,"slottedRadioButtons",void 0);const Uy=(i,t)=>R`
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
            <slot ${kt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class qy extends J{}class Wy extends ql(qy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fr extends Wy{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case ds:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],Fr.prototype,"readOnly",void 0);h([x],Fr.prototype,"name",void 0);h([x],Fr.prototype,"defaultSlottedNodes",void 0);let bi=class extends J{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&Y.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+e-o),b=Math.round(u+d);return this.isRtl?-b:(n=b,l===0?0:u)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=n.getBoundingClientRect(),d=r[t],{width:u}=a[t].getBoundingClientRect(),b=d+u,k=l+e>d;if(k||l+c-s<b){const y=(o=[...r].sort((V,B)=>k?B-V:V-B).find(V=>k?V+e<d:V+c-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(y)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([f({converter:H})],bi.prototype,"speed",void 0);h([f],bi.prototype,"duration",void 0);h([f],bi.prototype,"easing",void 0);h([f({attribute:"flippers-hidden-from-at",converter:Vo})],bi.prototype,"flippersHiddenFromAT",void 0);h([x],bi.prototype,"scrolling",void 0);h([x],bi.prototype,"scrollItems",void 0);h([f({attribute:"view"})],bi.prototype,"view",void 0);const Gy=(i,t)=>{var e,s;return R`
    <template
        class="horizontal-scroll"
        @keyup="${(o,n)=>o.keyupHandler(n.event)}"
    >
        ${ae(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${o=>o.scrolled()}"
                ${ut("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${ut("content")}>
                    <slot
                        ${kt({property:"scrollItems",filter:hi()})}
                    ></slot>
                </div>
            </div>
            ${Dt(o=>o.view!=="mobile",R`
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
        ${re(i,t)}
    </template>
`};function tf(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class Xy extends J{}class Yy extends pi(Xy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ke=class extends Yy{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&Y.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([f({attribute:"readonly",mode:"boolean"})],ke.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ke.prototype,"autofocus",void 0);h([f],ke.prototype,"placeholder",void 0);h([f],ke.prototype,"list",void 0);h([f({converter:H})],ke.prototype,"maxlength",void 0);h([f({converter:H})],ke.prototype,"minlength",void 0);h([f],ke.prototype,"pattern",void 0);h([f({converter:H})],ke.prototype,"size",void 0);h([f({mode:"boolean"})],ke.prototype,"spellcheck",void 0);h([x],ke.prototype,"defaultSlottedNodes",void 0);class ef{}Ft(ef,wt);Ft(ke,ge,ef);class Jy extends _o{}class Qy extends pi(Jy){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let vi=class extends Qy{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=To("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,Y.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return X.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const c=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const d=this._options.findIndex(k=>k.value===t),u=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[d])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(d===-1||u!==b)&&(t="",this.selectedIndex=d),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),X.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Is.above:Is.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Is.above?~~t.top:~~s}get displayValue(){var t,e;return X.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{X.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{X.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(me.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case ds:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ei:case ii:{t.preventDefault();break}case fi:{t.preventDefault(),this.open=!this.open;break}case Ws:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case gr:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===Oe||e===Ae)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&X.notify(this,"displayValue")}};h([f({attribute:"open",mode:"boolean"})],vi.prototype,"open",void 0);h([hb],vi.prototype,"collapsible",null);h([x],vi.prototype,"control",void 0);h([f({attribute:"position"})],vi.prototype,"positionAttribute",void 0);h([x],vi.prototype,"position",void 0);h([x],vi.prototype,"maxHeight",void 0);class Gl{}h([x],Gl.prototype,"ariaControls",void 0);Ft(Gl,Hi);Ft(vi,ge,Gl);const Zy=(i,t)=>R`
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
        ${Dt(e=>e.collapsible,R`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${ut("control")}
                >
                    ${ae(i,t)}
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
                    ${re(i,t)}
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
                ${kt({filter:me.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Ky=(i,t)=>R`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${Dt(e=>e.shimmer===!0,R`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Ho extends J{constructor(){super(...arguments),this.shape="rect"}}h([f],Ho.prototype,"fill",void 0);h([f],Ho.prototype,"shape",void 0);h([f],Ho.prototype,"pattern",void 0);h([f({mode:"boolean"})],Ho.prototype,"shimmer",void 0);const t0=(i,t)=>R`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||At.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${ut("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${Dt(e=>!e.hideMark,R`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function sl(i,t,e,s){let o=mr(0,1,(i-t)/(e-t));return s===xt.rtl&&(o=1-o),o}const pn={min:0,max:0,direction:xt.ltr,orientation:At.horizontal,disabled:!1};class yi extends J{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=xt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=pn.direction||xt.ltr,this.sliderOrientation=pn.orientation,this.sliderMaxPosition=pn.max,this.sliderMinPosition=pn.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||xt.ltr,this.sliderOrientation=n||At.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:xt.ltr,e=sl(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===At.horizontal?t===xt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=X.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([x],yi.prototype,"positionStyle",void 0);h([f],yi.prototype,"position",void 0);h([f({attribute:"hide-mark",mode:"boolean"})],yi.prototype,"hideMark",void 0);h([f({attribute:"disabled",mode:"boolean"})],yi.prototype,"disabled",void 0);h([x],yi.prototype,"sliderOrientation",void 0);h([x],yi.prototype,"sliderMinPosition",void 0);h([x],yi.prototype,"sliderMaxPosition",void 0);h([x],yi.prototype,"sliderDirection",void 0);const e0=(i,t)=>R`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||At.horizontal}"
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
`;class i0 extends J{}class s0 extends pi(i0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const o0={singleValue:"single-value"};class Jt extends s0{constructor(){super(...arguments),this.direction=xt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=At.horizontal,this.mode=o0.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===ei)t.preventDefault(),this.value=`${this.min}`;else if(t.key===ii)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Vi:case Ae:t.preventDefault(),this.increment();break;case Li:case Oe:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===At.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=sl(t,this.orientation===At.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===At.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===At.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=ns(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==xt.rtl&&this.orientation!==At.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==xt.rtl&&this.orientation!==At.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-sl(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===At.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([f({attribute:"readonly",mode:"boolean"})],Jt.prototype,"readOnly",void 0);h([x],Jt.prototype,"direction",void 0);h([x],Jt.prototype,"isDragging",void 0);h([x],Jt.prototype,"position",void 0);h([x],Jt.prototype,"trackWidth",void 0);h([x],Jt.prototype,"trackMinWidth",void 0);h([x],Jt.prototype,"trackHeight",void 0);h([x],Jt.prototype,"trackLeft",void 0);h([x],Jt.prototype,"trackMinHeight",void 0);h([x],Jt.prototype,"valueTextFormatter",void 0);h([f({converter:H})],Jt.prototype,"min",void 0);h([f({converter:H})],Jt.prototype,"max",void 0);h([f({converter:H})],Jt.prototype,"step",void 0);h([f],Jt.prototype,"orientation",void 0);h([f],Jt.prototype,"mode",void 0);const n0=(i,t)=>R`
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
            <slot ${kt("defaultSlottedNodes")}></slot>
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
`;class r0 extends J{}class a0 extends ql(r0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Xl extends a0{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case fi:case ds:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([f({attribute:"readonly",mode:"boolean"})],Xl.prototype,"readOnly",void 0);h([x],Xl.prototype,"defaultSlottedNodes",void 0);const l0=(i,t)=>R`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class c0 extends J{}const d0=(i,t)=>R`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class sf extends J{}h([f({mode:"boolean"})],sf.prototype,"disabled",void 0);const h0=(i,t)=>R`
    <template class="${e=>e.orientation}">
        ${ae(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${kt("tabs")}></slot>

            ${Dt(e=>e.showActiveIndicator,R`
                    <div
                        ${ut("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${re(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${kt("tabpanels")}></slot>
        </div>
    </template>
`,jd={vertical:"vertical",horizontal:"horizontal"};class xi extends J{constructor(){super(...arguments),this.orientation=jd.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Li:t.preventDefault(),this.adjustBackward(t);break;case Vi:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Ae:t.preventDefault(),this.adjustBackward(t);break;case Oe:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case ei:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case ii:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${To()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${To()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===jd.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=mr(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],xi.prototype,"orientation",void 0);h([f],xi.prototype,"activeid",void 0);h([x],xi.prototype,"tabs",void 0);h([x],xi.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],xi.prototype,"activeindicator",void 0);h([x],xi.prototype,"activeIndicatorRef",void 0);h([x],xi.prototype,"showActiveIndicator",void 0);Ft(xi,ge);class u0 extends J{}class f0 extends pi(u0){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const of={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Qt=class extends f0{constructor(){super(...arguments),this.resize=of.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({mode:"boolean"})],Qt.prototype,"readOnly",void 0);h([f],Qt.prototype,"resize",void 0);h([f({mode:"boolean"})],Qt.prototype,"autofocus",void 0);h([f({attribute:"form"})],Qt.prototype,"formId",void 0);h([f],Qt.prototype,"list",void 0);h([f({converter:H})],Qt.prototype,"maxlength",void 0);h([f({converter:H})],Qt.prototype,"minlength",void 0);h([f],Qt.prototype,"name",void 0);h([f],Qt.prototype,"placeholder",void 0);h([f({converter:H,mode:"fromView"})],Qt.prototype,"cols",void 0);h([f({converter:H,mode:"fromView"})],Qt.prototype,"rows",void 0);h([f({mode:"boolean"})],Qt.prototype,"spellcheck",void 0);h([x],Qt.prototype,"defaultSlottedNodes",void 0);Ft(Qt,kr);const p0=(i,t)=>R`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==of.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${kt("defaultSlottedNodes")}></slot>
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
`,g0=(i,t)=>R`
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
                ${kt({property:"defaultSlottedNodes",filter:tf})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ae(i,t)}
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
            ${re(i,t)}
        </div>
    </template>
`,m0=(i,t)=>R`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${pr({property:"childItems",attributeFilter:["disabled","hidden"],filter:hi(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${ae(i,t)}
            <slot
                ${kt({filter:hi(),property:"slottedItems"})}
            ></slot>
            ${re(i,t)}
        </div>
    </template>
`,Ud=Object.freeze({[ws.ArrowUp]:{[At.vertical]:-1},[ws.ArrowDown]:{[At.vertical]:1},[ws.ArrowLeft]:{[At.horizontal]:{[xt.ltr]:-1,[xt.rtl]:1}},[ws.ArrowRight]:{[At.horizontal]:{[xt.ltr]:1,[xt.rtl]:-1}}});let Ni=class ol extends J{constructor(){super(...arguments),this._activeIndex=0,this.direction=xt.ltr,this.orientation=At.horizontal}get activeIndex(){return X.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=mr(0,this.focusableElements.length-1,t),X.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=ns(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=Ud[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=Ud[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in ws)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(ol.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,c=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>zd(d));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(zd(e)||a||l||c)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(ol.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};h([x],Ni.prototype,"direction",void 0);h([f],Ni.prototype,"orientation",void 0);h([x],Ni.prototype,"slottedItems",void 0);h([x],Ni.prototype,"slottedLabel",void 0);h([x],Ni.prototype,"childItems",void 0);class Sr{}h([f({attribute:"aria-labelledby"})],Sr.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Sr.prototype,"ariaLabel",void 0);Ft(Sr,wt);Ft(Ni,ge,Sr);const b0=(i,t)=>R`
        ${Dt(e=>e.tooltipVisible,R`
            <${i.tagFor(G)}
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
            </${i.tagFor(G)}>
        `)}
    `,he={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Pt=class extends J{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=xt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Ws:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=ns(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),Y.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case he.top:case he.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case he.right:case he.left:case he.start:case he.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case he.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case he.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case he.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case he.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case he.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case he.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case he.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case he.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([f({mode:"boolean"})],Pt.prototype,"visible",void 0);h([f],Pt.prototype,"anchor",void 0);h([f],Pt.prototype,"delay",void 0);h([f],Pt.prototype,"position",void 0);h([f({attribute:"auto-update-mode"})],Pt.prototype,"autoUpdateMode",void 0);h([f({attribute:"horizontal-viewport-lock"})],Pt.prototype,"horizontalViewportLock",void 0);h([f({attribute:"vertical-viewport-lock"})],Pt.prototype,"verticalViewportLock",void 0);h([x],Pt.prototype,"anchorElement",void 0);h([x],Pt.prototype,"viewportElement",void 0);h([x],Pt.prototype,"verticalPositioningMode",void 0);h([x],Pt.prototype,"horizontalPositioningMode",void 0);h([x],Pt.prototype,"horizontalInset",void 0);h([x],Pt.prototype,"verticalInset",void 0);h([x],Pt.prototype,"horizontalScaling",void 0);h([x],Pt.prototype,"verticalScaling",void 0);h([x],Pt.prototype,"verticalDefaultPosition",void 0);h([x],Pt.prototype,"horizontalDefaultPosition",void 0);h([x],Pt.prototype,"tooltipVisible",void 0);h([x],Pt.prototype,"currentDirection",void 0);const v0=(i,t)=>R`
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
        ${pr({property:"childItems",filter:hi()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Dt(e=>e.childItems&&e.childItemLength()>0,R`
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
                ${ae(i,t)}
                <slot></slot>
                ${re(i,t)}
            </div>
        </div>
        ${Dt(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),R`
                <div role="group" class="items" part="items">
                    <slot name="item" ${kt("items")}></slot>
                </div>
            `)}
    </template>
`;function Di(i){return Vs(i)&&i.getAttribute("role")==="treeitem"}class Ht extends J{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Di(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{Di(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>Di(e));return t?t.length:0}}h([f({mode:"boolean"})],Ht.prototype,"expanded",void 0);h([f({mode:"boolean"})],Ht.prototype,"selected",void 0);h([f({mode:"boolean"})],Ht.prototype,"disabled",void 0);h([x],Ht.prototype,"focusable",void 0);h([x],Ht.prototype,"childItems",void 0);h([x],Ht.prototype,"items",void 0);h([x],Ht.prototype,"nested",void 0);h([x],Ht.prototype,"renderCollapsedChildren",void 0);Ft(Ht,ge);const y0=(i,t)=>R`
    <template
        role="tree"
        ${ut("treeView")}
        @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        @click="${(e,s)=>e.handleClick(s.event)}"
        @selected-change="${(e,s)=>e.handleSelectedChange(s.event)}"
    >
        <slot ${kt("slottedTreeItems")}></slot>
    </template>
`;class Tr extends J{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Ht.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case ei:e.length&&Ht.focusItem(e[0]);return;case ii:e.length&&Ht.focusItem(e[e.length-1]);return;case Li:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Ht&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof Ht&&s.parentElement instanceof Ht&&Ht.focusItem(s.parentElement)}return!1;case Vi:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Ht&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof Ht&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Oe:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Ae:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case fi:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Di(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>Di(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),Y.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Vs(o)&&Ht.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Di(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return mv(this,"[role='treeitem']")||[]}}h([f({attribute:"render-collapsed-nodes"})],Tr.prototype,"renderCollapsedNodes",void 0);h([x],Tr.prototype,"currentSelected",void 0);h([x],Tr.prototype,"slottedTreeItems",void 0);class x0{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class Mo extends x0{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Mo(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const rt=Mo.with(window.matchMedia("(forced-colors)"));Mo.with(window.matchMedia("(prefers-color-scheme: dark)"));Mo.with(window.matchMedia("(prefers-color-scheme: light)"));class w0{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){X.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){X.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Ve="not-allowed",$0=":host([hidden]){display:none}";function at(i){return`${$0}:host{display:${i}}`}const Q=vv()?"focus-visible":"focus";function Zi(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function Ia(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Yi(i,t,e){return isNaN(i)?t:t+i*(e-t)}function C0(i){const t=Math.round(Zi(i,0,255)).toString(16);return t.length===1?"0"+t:t}function gn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function oe(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class Do{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Do(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Do(oe(this.h,t),oe(this.s,t),oe(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ut{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Ut(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ut(oe(this.l,t),oe(this.a,t),oe(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ut.epsilon=216/24389;Ut.kappa=24389/27;class Vt{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new Vt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Yi(this.r,0,255))},${Math.round(Yi(this.g,0,255))},${Math.round(Yi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Yi(this.r,0,255))},${Math.round(Yi(this.g,0,255))},${Math.round(Yi(this.b,0,255))},${Zi(this.a,0,1)})`}roundToPrecision(t){return new Vt(oe(this.r,t),oe(this.g,t),oe(this.b,t),oe(this.a,t))}clamp(){return new Vt(Zi(this.r,0,1),Zi(this.g,0,1),Zi(this.b,0,1),Zi(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return C0(Yi(t,0,255))}}class ye{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new ye(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new ye(oe(this.x,t),oe(this.y,t),oe(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}ye.whitePoint=new ye(.95047,1,1.08883);function k0(i){return i.r*.2126+i.g*.7152+i.b*.0722}function nf(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return k0(new Vt(t(i.r),t(i.g),t(i.b),1))}function Ra(i,t,e){return e-t===0?0:(i-t)/(e-t)}function Da(i,t,e){const s=Ra(i.r,t.r,e.r),o=Ra(i.g,t.g,e.g),n=Ra(i.b,t.b,e.b);return(s+o+n)/3}function F0(i,t,e=null){let s=0,o=e;return o!==null?s=Da(i,t,o):(o=new Vt(0,0,0,1),s=Da(i,t,o),s<=0&&(o=new Vt(1,1,1,1),s=Da(i,t,o))),s=Math.round(s*1e3)/1e3,new Vt(o.r,o.g,o.b,s)}function qd(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new Do(o,r,n)}function S0(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new Vt(n+o,r+o,a+o,t)}function T0(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Ut.epsilon?a=o:a=(116*e-16)/Ut.kappa;let l=0;i.l>Ut.epsilon*Ut.kappa?l=n:l=i.l/Ut.kappa;let c=0;return r>Ut.epsilon?c=r:c=(116*s-16)/Ut.kappa,a=ye.whitePoint.x*a,l=ye.whitePoint.y*l,c=ye.whitePoint.z*c,new ye(a,l,c)}function I0(i){function t(l){return l>Ut.epsilon?Math.pow(l,1/3):(Ut.kappa*l+16)/116}const e=t(i.x/ye.whitePoint.x),s=t(i.y/ye.whitePoint.y),o=t(i.z/ye.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Ut(n,r,a)}function R0(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new ye(n,r,a)}function D0(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new Vt(s,o,n,t)}function E0(i){return I0(R0(i))}function Ea(i,t=1){return D0(T0(i),t)}var Wd;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(Wd||(Wd={}));function O0(i,t){if(t.a>=1)return t;if(t.a<=0)return new Vt(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new Vt(e,s,o,1)}function mn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Vt(gn(i,t.r,e.r),gn(i,t.g,e.g),gn(i,t.b,e.b),gn(i,t.a,e.a))}var Gd;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(Gd||(Gd={}));const A0=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ss(i){const t=A0.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new Vt(Ia((s&16711680)>>>16,0,255),Ia((s&65280)>>>8,0,255),Ia(s&255,0,255),1)}function Gn(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Ee=Object.freeze({create(i,t,e){return new Xn(i,t,e)},from(i){return new Xn(i.r,i.g,i.b)}});function L0(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class Xn extends Vt{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Gn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=nf(this)}static fromObject(t){return new Xn(t.r,t.g,t.b)}}function nl(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?nl(i,t,e,o):nl(i,t,o+1,s)}const V0=(-.1+Math.sqrt(.21))/2;function No(i){return i.relativeLuminance<=V0}function us(i){return No(i)?-1:1}const Xd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function P0(i,t,e){return typeof i=="number"?Eo.from(Ee.create(i,t,e)):Eo.from(i)}function _0(i,t){return L0(i)?Je.from(i,t):Je.from(Ee.create(i.r,i.g,i.b),t)}const Eo=Object.freeze({create:P0,from:_0});class Je{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=us(t));const l=c=>Gn(t,c)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),nl(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[Zi(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=qd(t).s,n=qd(e);if(n.s<o){const r=new Do(n.h,o,n.l);return S0(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=E0(Vt.fromObject(t).roundToPrecision(4)),o=Ea(new Ut(0,s.a,s.b)).clamp().roundToPrecision(4),n=Ea(new Ut(50,s.a,s.b)).clamp().roundToPrecision(4),r=Ea(new Ut(100,s.a,s.b)).clamp().roundToPrecision(4),a=new Vt(0,0,0),l=new Vt(1,1,1),c=r.equalValue(l)?0:14,d=o.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let b;if(u<0){const k=u/d+1;b=mn(k,a,o)}else if(u<=50)b=mn(Je.ramp(u),o,n);else if(u<=100)b=mn(Je.ramp(u),n,r);else{const k=(u-100)/c;b=mn(k,r,l)}b=Je.saturationBump(n,b).roundToPrecision(4),e.push(Ee.from(b))}return new Je(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=c=>{const d=e.closestIndexOf(c);return o===1?e.lastIndex-d:d};o===1&&s.reverse();const a=t(s[s.length-2]);if(oe(Gn(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=e.colorContrast(n[e.lastIndex],a,void 0,o),d=r(c),u=r(s[s.length-2]),b=d-u;let k=1;for(let C=s.length-b-1;C<s.length;C++){const y=r(s[C]),V=C===s.length-1?e.lastIndex:y+k;s[C]=n[V],k++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=Je.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return oe(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?Xd:Object.assign(Object.assign({},Xd),e);return new Je(t,Object.freeze(Je.createColorPaletteByContrast(t,s)))}}const Yn=Ee.create(1,1,1),Yl=Ee.create(0,0,0),H0=Ee.create(.5,.5,.5),Oa=ss("#0078D4"),M0=Ee.create(Oa.r,Oa.g,Oa.b);function rf(i,t,e,s,o){const n=d=>d.contrast(Yn)>=o?Yn:Yl,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),c=n(s);return{rest:r,hover:a,active:l,focus:c}}class Ir{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=Gn.bind(null,this),this.createCSS=this.toColorString,this.color=new Vt(t,e,s),this.cssGradient=o,this.relativeLuminance=nf(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new Ir(t.r,t.g,t.b,e)}}const N0=new Vt(0,0,0),z0=new Vt(1,1,1);function af(i,t,e,s,o,n,r,a,l=10,c=!1){const d=i.closestIndexOf(t);a===void 0&&(a=us(t));function u(j){if(c){const ot=i.closestIndexOf(t),_t=i.get(ot),tt=j.relativeLuminance<t.relativeLuminance?N0:z0,ce=F0(ss(j.toColorString()),ss(_t.toColorString()),tt).roundToPrecision(2),de=O0(ss(t.toColorString()),ce);return Ee.from(de)}else return j}const b=d+a*e,k=b+a*(s-e),C=b+a*(o-e),y=b+a*(n-e),V=a===-1?0:100-l,B=a===-1?l:100;function st(j,ot){const _t=i.get(j);if(ot){const tt=i.get(j+a*r),ce=a===-1?tt:_t,de=a===-1?_t:tt,Ks=`linear-gradient(${u(ce).toColorString()} ${V}%, ${u(de).toColorString()} ${B}%)`;return Ir.fromObject(ce,Ks)}else return u(_t)}return{rest:st(b,!0),hover:st(k,!0),active:st(C,!1),focus:st(y,!0)}}function B0(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),c=us(t),d=l+c*e,u=d+c*(s-e),b=d+c*(o-e),k=d+c*(n-e),C=`calc(100% - ${a})`;function y(V,B){const st=i.get(V);if(B){const j=i.get(V+c*r),ot=`linear-gradient(${st.toColorString()} ${C}, ${j.toColorString()} ${C}, ${j.toColorString()})`;return Ir.fromObject(st,ot)}else return st}return{rest:y(d,!0),hover:y(u,!0),active:y(b,!1),focus:y(k,!0)}}function j0(i,t,e){return i.colorContrast(t,e)}function Hs(i,t,e,s,o,n,r,a){a==null&&(a=us(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function U0(i,t,e,s,o,n,r,a=void 0,l,c,d,u,b,k=void 0){return No(t)?Hs(i,t,l,c,d,u,b,k):Hs(i,t,e,s,o,n,r,a)}function q0(i,t,e){return i.get(i.closestIndexOf(t)+us(t)*e)}function Pi(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=us(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function Jl(i,t,e,s,o,n,r=void 0,a,l,c,d,u=void 0){return No(t)?Pi(i,t,a,l,c,d,u):Pi(i,t,e,s,o,n,r)}function W0(i,t){return No(t)?Yn:Yl}function G0(i,t,e){return No(t)?Yl:Yn}function X0(i){return Ee.create(i,i,i)}var rl;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(rl||(rl={}));function zo(i,t){return i.closestIndexOf(X0(t))}function Y0(i,t){return i.get(zo(i,t))}function J0(i,t,e){return i.get(zo(i,t)+e)}function lf(i,t,e){return i.get(zo(i,t)+e*-1)}function Q0(i,t,e){return i.get(zo(i,t)+e*-1*2)}function Z0(i,t,e){return i.get(zo(i,t)+e*-1*3)}const K0={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=mt;function O(i){return mt.create({name:i,cssCustomPropertyName:null})}const Ln=v("direction").withDefault(xt.ltr),Fe=v("disabled-opacity").withDefault(.3),Rr=v("base-height-multiplier").withDefault(8),tx=v("base-horizontal-spacing-multiplier").withDefault(3),zi=v("density").withDefault(0),_=v("design-unit").withDefault(4),pt=v("control-corner-radius").withDefault(4),ai=v("layer-corner-radius").withDefault(8),U=v("stroke-width").withDefault(1),Yt=v("focus-stroke-width").withDefault(2),Pe=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),ex=v("font-weight").withDefault(K0.Normal);function wi(i){return t=>{const e=i.getValueFor(t),s=ex.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const Dr=v("type-ramp-base-font-size").withDefault("14px"),cf=v("type-ramp-base-line-height").withDefault("20px"),ix=v("type-ramp-base-font-variations").withDefault(wi(Dr)),Ql=v("type-ramp-minus-1-font-size").withDefault("12px"),Zl=v("type-ramp-minus-1-line-height").withDefault("16px"),sx=v("type-ramp-minus-1-font-variations").withDefault(wi(Ql)),Kl=v("type-ramp-minus-2-font-size").withDefault("10px"),df=v("type-ramp-minus-2-line-height").withDefault("14px"),ox=v("type-ramp-minus-2-font-variations").withDefault(wi(Kl)),tc=v("type-ramp-plus-1-font-size").withDefault("16px"),hf=v("type-ramp-plus-1-line-height").withDefault("22px"),nx=v("type-ramp-plus-1-font-variations").withDefault(wi(tc)),Er=v("type-ramp-plus-2-font-size").withDefault("20px"),uf=v("type-ramp-plus-2-line-height").withDefault("26px"),rx=v("type-ramp-plus-2-font-variations").withDefault(wi(Er)),ec=v("type-ramp-plus-3-font-size").withDefault("24px"),ff=v("type-ramp-plus-3-line-height").withDefault("32px"),ax=v("type-ramp-plus-3-font-variations").withDefault(wi(ec)),ic=v("type-ramp-plus-4-font-size").withDefault("28px"),pf=v("type-ramp-plus-4-line-height").withDefault("36px"),lx=v("type-ramp-plus-4-font-variations").withDefault(wi(ic)),sc=v("type-ramp-plus-5-font-size").withDefault("32px"),gf=v("type-ramp-plus-5-line-height").withDefault("40px"),cx=v("type-ramp-plus-5-font-variations").withDefault(wi(sc)),oc=v("type-ramp-plus-6-font-size").withDefault("40px"),mf=v("type-ramp-plus-6-line-height").withDefault("52px"),dx=v("type-ramp-plus-6-font-variations").withDefault(wi(oc)),fs=v("base-layer-luminance").withDefault(rl.LightMode),al=O("accent-fill-rest-delta").withDefault(0),ll=O("accent-fill-hover-delta").withDefault(-2),cl=O("accent-fill-active-delta").withDefault(-5),dl=O("accent-fill-focus-delta").withDefault(0),bf=O("accent-foreground-rest-delta").withDefault(0),vf=O("accent-foreground-hover-delta").withDefault(3),yf=O("accent-foreground-active-delta").withDefault(-8),xf=O("accent-foreground-focus-delta").withDefault(0),wf=O("neutral-fill-rest-delta").withDefault(-1),$f=O("neutral-fill-hover-delta").withDefault(1),Cf=O("neutral-fill-active-delta").withDefault(0),kf=O("neutral-fill-focus-delta").withDefault(0),Ff=O("neutral-fill-input-rest-delta").withDefault(-1),Sf=O("neutral-fill-input-hover-delta").withDefault(1),Tf=O("neutral-fill-input-active-delta").withDefault(0),If=O("neutral-fill-input-focus-delta").withDefault(-2),bn=O("neutral-fill-input-alt-rest-delta").withDefault(2),Yd=O("neutral-fill-input-alt-hover-delta").withDefault(4),Jd=O("neutral-fill-input-alt-active-delta").withDefault(6),Qd=O("neutral-fill-input-alt-focus-delta").withDefault(2),_i=O("neutral-fill-layer-rest-delta").withDefault(-2),hx=O("neutral-fill-layer-hover-delta").withDefault(-3),ux=O("neutral-fill-layer-active-delta").withDefault(-3),vn=O("neutral-fill-layer-alt-rest-delta").withDefault(-1),fx=O("neutral-fill-secondary-rest-delta").withDefault(3),px=O("neutral-fill-secondary-hover-delta").withDefault(2),gx=O("neutral-fill-secondary-active-delta").withDefault(1),mx=O("neutral-fill-secondary-focus-delta").withDefault(3),Rf=O("neutral-fill-stealth-rest-delta").withDefault(0),Df=O("neutral-fill-stealth-hover-delta").withDefault(3),Ef=O("neutral-fill-stealth-active-delta").withDefault(2),Of=O("neutral-fill-stealth-focus-delta").withDefault(0),bx=O("neutral-fill-strong-rest-delta").withDefault(0),Af=O("neutral-fill-strong-hover-delta").withDefault(8),Lf=O("neutral-fill-strong-active-delta").withDefault(-5),Vf=O("neutral-fill-strong-focus-delta").withDefault(0),Pf=O("neutral-stroke-rest-delta").withDefault(8),_f=O("neutral-stroke-hover-delta").withDefault(12),Hf=O("neutral-stroke-active-delta").withDefault(6),Mf=O("neutral-stroke-focus-delta").withDefault(8),Nf=O("neutral-stroke-control-rest-delta").withDefault(3),zf=O("neutral-stroke-control-hover-delta").withDefault(5),Bf=O("neutral-stroke-control-active-delta").withDefault(5),jf=O("neutral-stroke-control-focus-delta").withDefault(5),Uf=O("neutral-stroke-divider-rest-delta").withDefault(4),Zd=O("neutral-stroke-layer-rest-delta").withDefault(3),vx=O("neutral-stroke-layer-hover-delta").withDefault(3),yx=O("neutral-stroke-layer-active-delta").withDefault(3),xx=O("neutral-stroke-strong-hover-delta").withDefault(0),wx=O("neutral-stroke-strong-active-delta").withDefault(0),$x=O("neutral-stroke-strong-focus-delta").withDefault(0),qf=v("neutral-base-color").withDefault(H0),$t=O("neutral-palette").withDefault(i=>Eo.from(qf.getValueFor(i))),Wf=v("accent-base-color").withDefault(M0),nc=O("accent-palette").withDefault(i=>Eo.from(Wf.getValueFor(i))),Cx=O("neutral-layer-card-container-recipe").withDefault({evaluate:i=>lf($t.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>Cx.getValueFor(i).evaluate(i));const kx=O("neutral-layer-floating-recipe").withDefault({evaluate:i=>J0($t.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))}),Bo=v("neutral-layer-floating").withDefault(i=>kx.getValueFor(i).evaluate(i)),Fx=O("neutral-layer-1-recipe").withDefault({evaluate:i=>Y0($t.getValueFor(i),fs.getValueFor(i))}),Sx=v("neutral-layer-1").withDefault(i=>Fx.getValueFor(i).evaluate(i)),Tx=O("neutral-layer-2-recipe").withDefault({evaluate:i=>lf($t.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-2").withDefault(i=>Tx.getValueFor(i).evaluate(i));const Ix=O("neutral-layer-3-recipe").withDefault({evaluate:i=>Q0($t.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-3").withDefault(i=>Ix.getValueFor(i).evaluate(i));const Rx=O("neutral-layer-4-recipe").withDefault({evaluate:i=>Z0($t.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-4").withDefault(i=>Rx.getValueFor(i).evaluate(i));const it=v("fill-color").withDefault(i=>Sx.getValueFor(i));var Jn;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(Jn||(Jn={}));const Or=O("accent-fill-recipe").withDefault({evaluate:(i,t)=>U0(nc.getValueFor(i),t||it.getValueFor(i),5,al.getValueFor(i),ll.getValueFor(i),cl.getValueFor(i),dl.getValueFor(i),void 0,8,al.getValueFor(i),ll.getValueFor(i),cl.getValueFor(i),dl.getValueFor(i),void 0)}),vt=v("accent-fill-rest").withDefault(i=>Or.getValueFor(i).evaluate(i).rest),Ue=v("accent-fill-hover").withDefault(i=>Or.getValueFor(i).evaluate(i).hover),qe=v("accent-fill-active").withDefault(i=>Or.getValueFor(i).evaluate(i).active),Ar=v("accent-fill-focus").withDefault(i=>Or.getValueFor(i).evaluate(i).focus),Lr=O("foreground-on-accent-recipe").withDefault({evaluate:i=>rf(vt.getValueFor(i),Ue.getValueFor(i),qe.getValueFor(i),Ar.getValueFor(i),Jn.normal)}),rs=v("foreground-on-accent-rest").withDefault(i=>Lr.getValueFor(i).evaluate(i).rest),Gf=v("foreground-on-accent-hover").withDefault(i=>Lr.getValueFor(i).evaluate(i).hover),Xf=v("foreground-on-accent-active").withDefault(i=>Lr.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>Lr.getValueFor(i).evaluate(i).focus);const Vr=O("accent-foreground-recipe").withDefault({evaluate:(i,t)=>Hs(nc.getValueFor(i),t||it.getValueFor(i),9.5,bf.getValueFor(i),vf.getValueFor(i),yf.getValueFor(i),xf.getValueFor(i))}),Yf=v("accent-foreground-rest").withDefault(i=>Vr.getValueFor(i).evaluate(i).rest),Jf=v("accent-foreground-hover").withDefault(i=>Vr.getValueFor(i).evaluate(i).hover),Qf=v("accent-foreground-active").withDefault(i=>Vr.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>Vr.getValueFor(i).evaluate(i).focus);const Pr=O("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>af($t.getValueFor(i),t||it.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),Dx=v("accent-stroke-control-rest").withDefault(i=>Pr.getValueFor(i).evaluate(i,vt.getValueFor(i)).rest),Ex=v("accent-stroke-control-hover").withDefault(i=>Pr.getValueFor(i).evaluate(i,Ue.getValueFor(i)).hover),Ox=v("accent-stroke-control-active").withDefault(i=>Pr.getValueFor(i).evaluate(i,qe.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>Pr.getValueFor(i).evaluate(i,Ar.getValueFor(i)).focus);const _r=O("neutral-fill-recipe").withDefault({evaluate:(i,t)=>Jl($t.getValueFor(i),t||it.getValueFor(i),wf.getValueFor(i),$f.getValueFor(i),Cf.getValueFor(i),kf.getValueFor(i),void 0,2,3,1,2,void 0)}),Te=v("neutral-fill-rest").withDefault(i=>_r.getValueFor(i).evaluate(i).rest),Kd=v("neutral-fill-hover").withDefault(i=>_r.getValueFor(i).evaluate(i).hover),th=v("neutral-fill-active").withDefault(i=>_r.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>_r.getValueFor(i).evaluate(i).focus);const Bi=O("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>Jl($t.getValueFor(i),t||it.getValueFor(i),Ff.getValueFor(i),Sf.getValueFor(i),Tf.getValueFor(i),If.getValueFor(i),void 0,2,3,1,0,void 0)}),yn=v("neutral-fill-input-rest").withDefault(i=>Bi.getValueFor(i).evaluate(i).rest),eh=v("neutral-fill-input-hover").withDefault(i=>Bi.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>Bi.getValueFor(i).evaluate(i).active);const ih=v("neutral-fill-input-focus").withDefault(i=>Bi.getValueFor(i).evaluate(i).focus),Hr=O("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>Jl($t.getValueFor(i),t||it.getValueFor(i),bn.getValueFor(i),Yd.getValueFor(i),Jd.getValueFor(i),Qd.getValueFor(i),1,bn.getValueFor(i),bn.getValueFor(i)-Yd.getValueFor(i),bn.getValueFor(i)-Jd.getValueFor(i),Qd.getValueFor(i),1)}),rc=v("neutral-fill-input-alt-rest").withDefault(i=>Hr.getValueFor(i).evaluate(i).rest),ac=v("neutral-fill-input-alt-hover").withDefault(i=>Hr.getValueFor(i).evaluate(i).hover),lc=v("neutral-fill-input-alt-active").withDefault(i=>Hr.getValueFor(i).evaluate(i).active),cc=v("neutral-fill-input-alt-focus").withDefault(i=>Hr.getValueFor(i).evaluate(i).focus),ps=O("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),_i.getValueFor(i),hx.getValueFor(i),ux.getValueFor(i),_i.getValueFor(i),1)}),Ax=v("neutral-fill-layer-rest").withDefault(i=>ps.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>ps.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>ps.getValueFor(i).evaluate(i).active);const Lx=O("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),vn.getValueFor(i),vn.getValueFor(i),vn.getValueFor(i),vn.getValueFor(i))}),Vx=v("neutral-fill-layer-alt-rest").withDefault(i=>Lx.getValueFor(i).evaluate(i).rest),gs=O("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),fx.getValueFor(i),px.getValueFor(i),gx.getValueFor(i),mx.getValueFor(i))}),as=v("neutral-fill-secondary-rest").withDefault(i=>gs.getValueFor(i).evaluate(i).rest),dc=v("neutral-fill-secondary-hover").withDefault(i=>gs.getValueFor(i).evaluate(i).hover),Px=v("neutral-fill-secondary-active").withDefault(i=>gs.getValueFor(i).evaluate(i).active),_x=v("neutral-fill-secondary-focus").withDefault(i=>gs.getValueFor(i).evaluate(i).focus),We=O("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),Rf.getValueFor(i),Df.getValueFor(i),Ef.getValueFor(i),Of.getValueFor(i))}),Ms=v("neutral-fill-stealth-rest").withDefault(i=>We.getValueFor(i).evaluate(i).rest),Ns=v("neutral-fill-stealth-hover").withDefault(i=>We.getValueFor(i).evaluate(i).hover),zs=v("neutral-fill-stealth-active").withDefault(i=>We.getValueFor(i).evaluate(i).active),Hx=v("neutral-fill-stealth-focus").withDefault(i=>We.getValueFor(i).evaluate(i).focus),Mr=O("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>Hs($t.getValueFor(i),t||it.getValueFor(i),4.5,bx.getValueFor(i),Af.getValueFor(i),Lf.getValueFor(i),Vf.getValueFor(i))}),Zf=v("neutral-fill-strong-rest").withDefault(i=>Mr.getValueFor(i).evaluate(i).rest),Mx=v("neutral-fill-strong-hover").withDefault(i=>Mr.getValueFor(i).evaluate(i).hover),Nx=v("neutral-fill-strong-active").withDefault(i=>Mr.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>Mr.getValueFor(i).evaluate(i).focus);const Nr=O("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>Hs($t.getValueFor(i),t||it.getValueFor(i),16,0,-19,-30,0)}),gt=v("neutral-foreground-rest").withDefault(i=>Nr.getValueFor(i).evaluate(i).rest),zx=v("neutral-foreground-hover").withDefault(i=>Nr.getValueFor(i).evaluate(i).hover),Bx=v("neutral-foreground-active").withDefault(i=>Nr.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>Nr.getValueFor(i).evaluate(i).focus);const jo=O("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>j0($t.getValueFor(i),t||it.getValueFor(i),4.5)}),Bs=v("neutral-foreground-hint").withDefault(i=>jo.getValueFor(i).evaluate(i)),zr=O("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),Pf.getValueFor(i),_f.getValueFor(i),Hf.getValueFor(i),Mf.getValueFor(i))}),Oo=v("neutral-stroke-rest").withDefault(i=>zr.getValueFor(i).evaluate(i).rest),jx=v("neutral-stroke-hover").withDefault(i=>zr.getValueFor(i).evaluate(i).hover),Ux=v("neutral-stroke-active").withDefault(i=>zr.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>zr.getValueFor(i).evaluate(i).focus);const Br=O("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>af($t.getValueFor(i),t||it.getValueFor(i),Nf.getValueFor(i),zf.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),5)}),hc=v("neutral-stroke-control-rest").withDefault(i=>Br.getValueFor(i).evaluate(i).rest),Kf=v("neutral-stroke-control-hover").withDefault(i=>Br.getValueFor(i).evaluate(i).hover),tp=v("neutral-stroke-control-active").withDefault(i=>Br.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>Br.getValueFor(i).evaluate(i).focus);const qx=O("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>q0($t.getValueFor(i),t||it.getValueFor(i),Uf.getValueFor(i))}),Qn=v("neutral-stroke-divider-rest").withDefault(i=>qx.getValueFor(i).evaluate(i)),jr=O("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>B0($t.getValueFor(i),t||it.getValueFor(i),Nf.getValueFor(i),zf.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),20,U.getValueFor(i)+"px")}),sh=v("neutral-stroke-input-rest").withDefault(i=>jr.getValueFor(i).evaluate(i).rest),Wx=v("neutral-stroke-input-hover").withDefault(i=>jr.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>jr.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>jr.getValueFor(i).evaluate(i).focus);const uc=O("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>Pi($t.getValueFor(i),t||it.getValueFor(i),Zd.getValueFor(i),vx.getValueFor(i),yx.getValueFor(i),Zd.getValueFor(i))}),Ds=v("neutral-stroke-layer-rest").withDefault(i=>uc.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>uc.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>uc.getValueFor(i).evaluate(i).active);const Ur=O("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>Hs($t.getValueFor(i),t||it.getValueFor(i),5.5,0,xx.getValueFor(i),wx.getValueFor(i),$x.getValueFor(i))}),Xs=v("neutral-stroke-strong-rest").withDefault(i=>Ur.getValueFor(i).evaluate(i).rest),fc=v("neutral-stroke-strong-hover").withDefault(i=>Ur.getValueFor(i).evaluate(i).hover),pc=v("neutral-stroke-strong-active").withDefault(i=>Ur.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>Ur.getValueFor(i).evaluate(i).focus);const Gx=O("focus-stroke-outer-recipe").withDefault({evaluate:i=>W0($t.getValueFor(i),it.getValueFor(i))}),qr=v("focus-stroke-outer").withDefault(i=>Gx.getValueFor(i).evaluate(i)),Xx=O("focus-stroke-inner-recipe").withDefault({evaluate:i=>G0(nc.getValueFor(i),it.getValueFor(i),qr.getValueFor(i))}),Yx=v("focus-stroke-inner").withDefault(i=>Xx.getValueFor(i).evaluate(i)),Wr=O("foreground-on-accent-large-recipe").withDefault({evaluate:i=>rf(vt.getValueFor(i),Ue.getValueFor(i),qe.getValueFor(i),Ar.getValueFor(i),Jn.large)});v("foreground-on-accent-rest-large").withDefault(i=>Wr.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>Wr.getValueFor(i).evaluate(i,Ue.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>Wr.getValueFor(i).evaluate(i,qe.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>Wr.getValueFor(i).evaluate(i,Ar.getValueFor(i)).focus);const Jx=v("neutral-fill-inverse-rest-delta").withDefault(0),Qx=v("neutral-fill-inverse-hover-delta").withDefault(-3),Zx=v("neutral-fill-inverse-active-delta").withDefault(7),Kx=v("neutral-fill-inverse-focus-delta").withDefault(0);function tw(i,t,e,s,o,n){const r=us(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),c=r===1?e<s:r*e>r*s;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:i.get(d),hover:i.get(u),active:i.get(d+r*o),focus:i.get(d+r*n)}}const Gr=O("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>tw($t.getValueFor(i),t||it.getValueFor(i),Jx.getValueFor(i),Qx.getValueFor(i),Zx.getValueFor(i),Kx.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>Gr.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>Gr.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>Gr.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>Gr.getValueFor(i).evaluate(i).focus);const Ot=xe`
  font-family: ${Pe};
  font-size: ${Dr};
  line-height: ${cf};
  font-weight: initial;
  font-variation-settings: ${ix};
`,ep=xe`
  font-family: ${Pe};
  font-size: ${Ql};
  line-height: ${Zl};
  font-weight: initial;
  font-variation-settings: ${sx};
`;xe`
  font-family: ${Pe};
  font-size: ${Kl};
  line-height: ${df};
  font-weight: initial;
  font-variation-settings: ${ox};
`;xe`
  font-family: ${Pe};
  font-size: ${tc};
  line-height: ${hf};
  font-weight: initial;
  font-variation-settings: ${nx};
`;xe`
  font-family: ${Pe};
  font-size: ${Er};
  line-height: ${uf};
  font-weight: initial;
  font-variation-settings: ${rx};
`;xe`
  font-family: ${Pe};
  font-size: ${ec};
  line-height: ${ff};
  font-weight: initial;
  font-variation-settings: ${ax};
`;xe`
  font-family: ${Pe};
  font-size: ${ic};
  line-height: ${pf};
  font-weight: initial;
  font-variation-settings: ${lx};
`;xe`
  font-family: ${Pe};
  font-size: ${sc};
  line-height: ${gf};
  font-weight: initial;
  font-variation-settings: ${cx};
`;xe`
  font-family: ${Pe};
  font-size: ${oc};
  line-height: ${mf};
  font-weight: initial;
  font-variation-settings: ${dx};
`;const ew=(i,t)=>T`
    ${at("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Ot}
      color: ${gt};
      gap: calc(${_} * 1px);
    }
  `,_e=xe`
  outline: calc(${Yt} * 1px) solid ${qr};
  outline-offset: calc(${Yt} * -1px);
`,Uo=xe`
  outline: calc(${Yt} * 1px) solid ${qr};
  outline-offset: calc(${U} * 1px);
`,nt=xe`(${Rr} + ${zi}) * ${_}`,iw=mt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),sw=mt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),ow=mt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),nw=(i,t)=>T`
    ${at("flex")} :host {
      box-sizing: border-box;
      ${Ot};
      flex-direction: column;
      background: ${Ax};
      color: ${gt};
      border: calc(${U} * 1px) solid ${Ds};
      border-radius: calc(${ai} * 1px);
    }

    .region {
      display: none;
      padding: calc(${_} * 2 * 1px);
      background: ${Vx};
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
      margin: calc(${_} * 3 * 1px) 0;
      padding: 0 calc(${_} * 2 * 1px);
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

    .button:${Q}::before {
      ${_e}
      border-radius: calc(${ai} * 1px);
    }

    :host(.expanded) .button:${Q}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${U} * 1px) solid ${Ds};
      border-bottom-left-radius: calc((${ai} - ${U}) * 1px);
      border-bottom-right-radius: calc((${ai} - ${U}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${iw};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
      width: calc(${nt} * 1px);
      height: calc(${nt} * 1px);
      margin: calc(${_} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${sw};
    }

    .heading:active .icon {
      background: ${ow};
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
      padding-inline-start: calc(${_} * 2 * 1px);
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
  `.withBehaviors(rt(T`
        .button:${Q}::before {
          outline-color: ${g.Highlight};
        }
        .icon {
          fill: ${g.ButtonText};
        }
      `)),rw=os.compose({baseName:"accordion-item",template:Kb,styles:nw,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),aw=Ul.compose({baseName:"accordion",template:fv,styles:ew});function L(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Ys{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Ln.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new lw(this.ltr,this.rtl,t),s=Ln.getValueFor(t);Ln.subscribe(e),e.attach(s),this.cache.set(t,e)}}class lw{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ms=mt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),cw=mt.create("elevation-shadow-card-rest-size").withDefault(4),dw=mt.create("elevation-shadow-card-hover-size").withDefault(8),hw=mt.create("elevation-shadow-card-active-size").withDefault(0),uw=mt.create("elevation-shadow-card-focus-size").withDefault(8),fw=mt.create("elevation-shadow-card-rest").withDefault(i=>ms.getValueFor(i).evaluate(i,cw.getValueFor(i)));mt.create("elevation-shadow-card-hover").withDefault(i=>ms.getValueFor(i).evaluate(i,dw.getValueFor(i)));mt.create("elevation-shadow-card-active").withDefault(i=>ms.getValueFor(i).evaluate(i,hw.getValueFor(i)));mt.create("elevation-shadow-card-focus").withDefault(i=>ms.getValueFor(i).evaluate(i,uw.getValueFor(i)));const pw=mt.create("elevation-shadow-tooltip-size").withDefault(16),gw=mt.create("elevation-shadow-tooltip").withDefault(i=>ms.getValueFor(i).evaluate(i,pw.getValueFor(i))),mw=mt.create("elevation-shadow-flyout-size").withDefault(32),ip=mt.create("elevation-shadow-flyout").withDefault(i=>ms.getValueFor(i).evaluate(i,mw.getValueFor(i))),bw=mt.create("elevation-shadow-dialog-size").withDefault(128),vw=mt.create("elevation-shadow-dialog").withDefault(i=>ms.getValueFor(i).evaluate(i,bw.getValueFor(i))),sp=(i,t,e,s="[disabled]")=>T`
    ${at("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Ot}
      height: calc(${nt} * 1px);
      min-width: calc(${nt} * 1px);
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
      padding: 0 calc((10 + (${_} * 2 * ${zi})) * 1px);
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
      ${_e}
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
  `,gc=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${hc};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Kd}, ${Kd}),
        border-box ${Kf};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${th}, ${th}),
        border-box ${tp};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${Oo};
    }
  `.withBehaviors(rt(T`
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

        .control:${Q} {
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
    `)),op=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${vt}, ${vt}),
        border-box ${Dx};
      color: ${rs};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Ue}, ${Ue}),
        border-box ${Ex};
      color: ${Gf};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${qe}, ${qe}),
        border-box ${Ox};
      color: ${Xf};
    }

    :host(${s}) .control {
      background: ${vt};
    }

    .control:${Q} {
      box-shadow: 0 0 0 calc(${Yt} * 1px) ${Yx} inset !important;
    }
  `.withBehaviors(rt(T`
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

        .control:${Q} {
          outline-color: ${g.CanvasText};
          box-shadow: 0 0 0 calc(${Yt} * 1px) ${g.HighlightText} inset !important;
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
      `)),yw=(i,t,e,s="[disabled]")=>T`
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
      color: ${Yf};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${Jf};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Qf};
      text-decoration: none;
    }

    .control:${Q} {
      ${Uo}
    }
  `.withBehaviors(rt(T`
        :host(${e}) .control {
          color: ${g.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${g.CanvasText};
        }

        .control:${Q} {
          outline-color: ${g.CanvasText};
        }
      `)),np=(i,t,e,s="[disabled]")=>T`
    :host {
      color: ${Yf};
    }

    .control {
      background: ${Ms};
    }

    :host(${e}:hover) .control {
      background: ${Ns};
      color: ${Jf};
    }

    :host(${e}:active) .control {
      background: ${zs};
      color: ${Qf};
    }

    :host(${s}) .control {
      background: ${Ms};
    }
  `.withBehaviors(rt(T`
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

        .control:${Q} {
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
      `)),rp=(i,t,e,s="[disabled]")=>T`
    .control {
      background: transparent !important;
      border-color: ${Oo};
    }

    :host(${e}:hover) .control {
      border-color: ${jx};
    }

    :host(${e}:active) .control {
      border-color: ${Ux};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Oo};
    }
  `.withBehaviors(rt(T`
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

        .control:${Q} {
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
      `)),mc=(i,t,e,s="[disabled]")=>T`
    .control {
      background: ${Ms};
    }

    :host(${e}:hover) .control {
      background: ${Ns};
    }

    :host(${e}:active) .control {
      background: ${zs};
    }

    :host(${s}) .control {
      background: ${Ms};
    }
  `.withBehaviors(rt(T`
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
        
        .control:${Q} {
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
      `)),xw=mt.create("input-placeholder-rest").withDefault(i=>{const t=Bi.getValueFor(i);return jo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),ww=mt.create("input-placeholder-hover").withDefault(i=>{const t=Bi.getValueFor(i);return jo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),$w=mt.create("input-filled-placeholder-rest").withDefault(i=>{const t=gs.getValueFor(i);return jo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),Cw=mt.create("input-filled-placeholder-hover").withDefault(i=>{const t=gs.getValueFor(i);return jo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Xr=(i,t,e)=>T`
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
    border: calc(${U} * 1px) solid transparent;
    border-radius: calc(${pt} * 1px);
    height: calc(${nt} * 1px);
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
    cursor: ${Ve};
  }

  :host([disabled]) {
    opacity: ${Fe};
  }
`,qo=(i,t,e)=>T`
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
      height: calc(${Yt} * 1px);
      bottom: 0;
      border-bottom: calc(${Yt} * 1px) solid ${vt};
      border-bottom-left-radius: calc(${pt} * 1px);
      border-bottom-right-radius: calc(${pt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Wo=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: padding-box linear-gradient(${yn}, ${yn}),
      border-box ${sh};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${eh}, ${eh}),
      border-box ${Wx};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${ih}, ${ih}),
      border-box ${sh};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${yn}, ${yn}),
      border-box ${Oo};
  }

  .control::placeholder {
    color: ${xw};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${ww};
  }
`,Js=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: ${as};
  }

  :host(${s}:hover) ${e} {
    background: ${dc};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${_x};
  }

  :host([disabled]) ${e} {
    background: ${as};
  }

  .control::placeholder {
    color: ${$w};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${Cw};
  }
`,Qs=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
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
    ${_e}
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
`;function Tt(i,t){return new w0("appearance",i,t)}const ys="[href]",kw=(i,t)=>sp().withBehaviors(Tt("neutral",gc(i,t,ys)),Tt("accent",op(i,t,ys)),Tt("hypertext",yw(i,t,ys)),Tt("lightweight",np(i,t,ys)),Tt("outline",rp(i,t,ys)),Tt("stealth",mc(i,t,ys)));class ap extends we{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}L([f],ap.prototype,"appearance",void 0);const Fw=ap.compose({baseName:"anchor",baseClass:we,template:Bu,styles:kw,shadowOptions:{delegatesFocus:!0}}),Sw=(i,t)=>T`
  :host {
    contain: layout;
    display: block;
  }
`,Tw=G.compose({baseName:"anchored-region",template:kv,styles:Sw}),Iw=(i,t)=>T`
    ${at("inline-block")} :host {
      box-sizing: border-box;
      ${ep};
    }

    .control {
      border-radius: calc(${pt} * 1px);
      padding: calc(((${_} * 0.5) - ${U}) * 1px) calc((${_} - ${U}) * 1px);
      border: calc(${U} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${gt};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${vt};
      color: ${rs};
    }

    :host(.neutral) .control {
      background: ${as};
      color: ${gt};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${Zl} - calc(${_} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class lp extends Po{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&Y.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}L([f({mode:"fromView"})],lp.prototype,"appearance",void 0);const Rw=lp.compose({baseName:"badge",baseClass:Po,template:Sv,styles:Iw}),Dw=(i,t)=>T`
  ${at("inline-block")} :host {
    box-sizing: border-box;
    ${Ot};
  }

  .list {
    display: flex;
  }
`,Ew=ju.compose({baseName:"breadcrumb",template:Iv,styles:Dw}),Ow=(i,t)=>T`
    ${at("inline-flex")} :host {
      background: transparent;
      color: ${gt};
      fill: currentcolor;
      box-sizing: border-box;
      ${Ot};
      min-width: calc(${nt} * 1px);
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
      color: ${zx};
    }

    .control:active {
      color: ${Bx};
    }

    .control:${Q} {
      ${Uo}
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
  `.withBehaviors(rt(T`
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
        .control:${Q} {
          outline-color: ${g.LinkText};
        }
      `)),Aw=Io.compose({baseName:"breadcrumb-item",template:Tv,styles:Ow,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Ji=":not([disabled])",ki="[disabled]",Lw=(i,t)=>T`
    :host(${Ji}) .control {
      cursor: pointer;
    }

    :host(${ki}) .control {
      cursor: ${Ve};
    }

    @media (forced-colors: none) {
      :host(${ki}) .control {
        opacity: ${Fe};
      }
    }

    ${sp(i,t,Ji,ki)}
  `.withBehaviors(Tt("neutral",gc(i,t,Ji,ki)),Tt("accent",op(i,t,Ji,ki)),Tt("lightweight",np(i,t,Ji,ki)),Tt("outline",rp(i,t,Ji,ki)),Tt("stealth",mc(i,t,Ji,ki)));class cp extends $e{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}L([f],cp.prototype,"appearance",void 0);const Vw=cp.compose({baseName:"button",baseClass:$e,template:Rv,styles:Lw,shadowOptions:{delegatesFocus:!0}}),Pw=T`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,_w=T`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Hw=(i,t)=>T`
${at("inline-block")} :host {
  --calendar-cell-size: calc((${Rr} + 2 + ${zi}) * ${_} * 1px);
  --calendar-gap: 2px;
  ${Ot}
  color: ${gt};
}

.title {
  padding: calc(${_} * 2px);
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
  color: ${Bs};
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
  color: ${vt};
  border: 1px solid ${vt};
  background: ${it};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${U} + ${pt}) * 1px);
  margin-inline-start: calc((${pt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${rs};
}

.today .date {
  color: ${rs};
  background: ${vt};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(rt(T`
          .day.selected {
              color: ${g.Highlight};
          }

          .today .date {
              background: ${g.Highlight};
              color: ${g.HighlightText};
          }
      `),new Ys(Pw,_w));class dp extends Le{constructor(){super(...arguments),this.readonly=!0}}L([f({converter:Vo})],dp.prototype,"readonly",void 0);const Mw=dp.compose({baseName:"calendar",template:Gv,styles:Hw,title:zv}),Nw=(i,t)=>T`
    ${at("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${it};
      color: ${gt};
      border: calc(${U} * 1px) solid ${Ds};
      border-radius: calc(${ai} * 1px);
      box-shadow: ${fw};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(rt(T`
        :host {
          background: ${g.Canvas};
          color: ${g.CanvasText};
        }
      `));class bc extends Uu{cardFillColorChanged(t,e){if(e){const s=ss(e);s!==null&&(this.neutralPaletteSource=e,it.setValueFor(this,Ee.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=ss(e),o=Ee.create(s.r,s.g,s.b);$t.setValueFor(this,Eo.create(o))}}handleChange(t,e){this.cardFillColor||it.setValueFor(this,s=>ps.getValueFor(s).evaluate(s,it.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=Wn(this);if(t){const e=X.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}L([f({attribute:"card-fill-color",mode:"fromView"})],bc.prototype,"cardFillColor",void 0);L([f({attribute:"neutral-palette-source",mode:"fromView"})],bc.prototype,"neutralPaletteSource",void 0);const zw=bc.compose({baseName:"card",baseClass:Uu,template:Xv,styles:Nw}),Bw=(i,t)=>T`
    ${at("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${nt} / 2 + ${_}) * 1px);
      height: calc((${nt} / 2 + ${_}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid ${Xs};
      background: ${rc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ot}
      color: ${gt};
      ${""} padding-inline-start: calc(${_} * 2px + 2px);
      margin-inline-end: calc(${_} * 2px + 2px);
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
      fill: ${rs};
    }

    :host(:not(.disabled):hover) .control {
      background: ${ac};
      border-color: ${fc};
    }

    :host(:not(.disabled):active) .control {
      background: ${lc};
      border-color: ${pc};
    }

    :host(:${Q}) .control {
      background: ${cc};
      ${Uo}
    }

    :host(.checked) .control {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ue};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${qe};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ve};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Fe};
    }
  `.withBehaviors(rt(T`
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
        :host(:${Q}) .control {
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
      `)),jw=yr.compose({baseName:"checkbox",template:Yv,styles:Bw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),oh=".control",xn=":not([disabled]):not([open])",nh="[disabled]",hp=(i,t)=>T`
    ${at("inline-flex")}
    
    :host {
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      color: ${gt};
      fill: currentcolor;
      font-family: ${Pe};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${ip};
      background: ${it};
      border-radius: calc(${ai} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${nt} * 1px));
      padding: calc((${_} - ${U} ) * 1px);
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
      height: calc(${nt} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Ot}
      min-height: 100%;
      padding: 0 calc(${_} * 2.25px);
      width: 100%;
    }

    :host(:${Q}) {
      ${_e}
    }

    :host([disabled]) .control {
      cursor: ${Ve};
      opacity: ${Fe};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${nt} + ${_} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${nt} + ${_} * 2) * 1px);
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
  `,Uw=(i,t)=>T`
    :host([open]) .listbox {
      background: ${g.ButtonFace};
      border-color: ${g.CanvasText};
    }
  `,qw=(i,t)=>hp().withBehaviors(Tt("outline",gc(i,t,xn,nh)),Tt("filled",Js(i,t,oh,xn).withBehaviors(rt(Qs(i,t,oh,xn)))),Tt("stealth",mc(i,t,xn,nh)),rt(Uw())),Aa=".control",La=":not([disabled]):not([open])",Ww=(i,t)=>T`
    ${hp()}

    ${qo()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Ve};
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
      height: calc(100% - ${U} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Tt("outline",Wo(i,t,Aa,La)),Tt("filled",Js(i,t,Aa,La)),rt(Qs(i,t,Aa,La)));class up extends mi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&it.setValueFor(this.listbox,Bo)}}L([f({mode:"fromView"})],up.prototype,"appearance",void 0);const Gw=up.compose({baseName:"combobox",baseClass:mi,shadowOptions:{delegatesFocus:!0},template:ty,styles:Ww,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Xw=(i,t)=>T`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Yw=(i,t)=>T`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${U} * 1px) solid ${Qn};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${it};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(rt(T`
        :host {
        }
      `)),Jw=(i,t)=>T`
    :host {
      padding: calc((${_} + ${Yt} - ${U}) * 1px) calc(((${_} * 3) + ${Yt} - ${U}) * 1px);
      color: ${gt};
      box-sizing: border-box;
      ${Ot}
      border: transparent calc(${U} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${pt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${Q}) {
      ${_e}
    }
  `.withBehaviors(rt(T`
        :host {
          forced-color-adjust: none;
          background: ${g.Field};
          color: ${g.FieldText};
        }

        :host(:${Q}) {
          outline-color: ${g.FieldText};
        }
      `)),Qw=gi.compose({baseName:"data-grid-cell",template:Nv,styles:Jw}),Zw=Gt.compose({baseName:"data-grid-row",template:Mv,styles:Yw}),Kw=zt.compose({baseName:"data-grid",template:Lv,styles:Xw}),vc={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=ss(i);return t?Ee.create(t.r,t.g,t.b):null}},rh=T`
  :host {
    background-color: ${it};
    color: ${gt};
  }
`.withBehaviors(rt(T`
      :host {
        background-color: ${g.Canvas};
        box-shadow: 0 0 0 1px ${g.CanvasText};
        color: ${g.CanvasText};
      }
    `));function z(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class N extends J{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};X.getNotifier(this).subscribe(t,"fillColor"),X.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(rh):this.$fastController.removeStyles(rh)}}L([f({attribute:"no-paint",mode:"boolean"})],N.prototype,"noPaint",void 0);L([f({attribute:"fill-color",converter:vc,mode:"fromView"}),z(it)],N.prototype,"fillColor",void 0);L([f({attribute:"accent-base-color",converter:vc,mode:"fromView"}),z(Wf)],N.prototype,"accentBaseColor",void 0);L([f({attribute:"neutral-base-color",converter:vc,mode:"fromView"}),z(qf)],N.prototype,"neutralBaseColor",void 0);L([f({converter:H}),z(zi)],N.prototype,"density",void 0);L([f({attribute:"design-unit",converter:H}),z(_)],N.prototype,"designUnit",void 0);L([f({attribute:"direction"}),z(Ln)],N.prototype,"direction",void 0);L([f({attribute:"base-height-multiplier",converter:H}),z(Rr)],N.prototype,"baseHeightMultiplier",void 0);L([f({attribute:"base-horizontal-spacing-multiplier",converter:H}),z(tx)],N.prototype,"baseHorizontalSpacingMultiplier",void 0);L([f({attribute:"control-corner-radius",converter:H}),z(pt)],N.prototype,"controlCornerRadius",void 0);L([f({attribute:"layer-corner-radius",converter:H}),z(ai)],N.prototype,"layerCornerRadius",void 0);L([f({attribute:"stroke-width",converter:H}),z(U)],N.prototype,"strokeWidth",void 0);L([f({attribute:"focus-stroke-width",converter:H}),z(Yt)],N.prototype,"focusStrokeWidth",void 0);L([f({attribute:"disabled-opacity",converter:H}),z(Fe)],N.prototype,"disabledOpacity",void 0);L([f({attribute:"type-ramp-minus-2-font-size"}),z(Kl)],N.prototype,"typeRampMinus2FontSize",void 0);L([f({attribute:"type-ramp-minus-2-line-height"}),z(df)],N.prototype,"typeRampMinus2LineHeight",void 0);L([f({attribute:"type-ramp-minus-1-font-size"}),z(Ql)],N.prototype,"typeRampMinus1FontSize",void 0);L([f({attribute:"type-ramp-minus-1-line-height"}),z(Zl)],N.prototype,"typeRampMinus1LineHeight",void 0);L([f({attribute:"type-ramp-base-font-size"}),z(Dr)],N.prototype,"typeRampBaseFontSize",void 0);L([f({attribute:"type-ramp-base-line-height"}),z(cf)],N.prototype,"typeRampBaseLineHeight",void 0);L([f({attribute:"type-ramp-plus-1-font-size"}),z(tc)],N.prototype,"typeRampPlus1FontSize",void 0);L([f({attribute:"type-ramp-plus-1-line-height"}),z(hf)],N.prototype,"typeRampPlus1LineHeight",void 0);L([f({attribute:"type-ramp-plus-2-font-size"}),z(Er)],N.prototype,"typeRampPlus2FontSize",void 0);L([f({attribute:"type-ramp-plus-2-line-height"}),z(uf)],N.prototype,"typeRampPlus2LineHeight",void 0);L([f({attribute:"type-ramp-plus-3-font-size"}),z(ec)],N.prototype,"typeRampPlus3FontSize",void 0);L([f({attribute:"type-ramp-plus-3-line-height"}),z(ff)],N.prototype,"typeRampPlus3LineHeight",void 0);L([f({attribute:"type-ramp-plus-4-font-size"}),z(ic)],N.prototype,"typeRampPlus4FontSize",void 0);L([f({attribute:"type-ramp-plus-4-line-height"}),z(pf)],N.prototype,"typeRampPlus4LineHeight",void 0);L([f({attribute:"type-ramp-plus-5-font-size"}),z(sc)],N.prototype,"typeRampPlus5FontSize",void 0);L([f({attribute:"type-ramp-plus-5-line-height"}),z(gf)],N.prototype,"typeRampPlus5LineHeight",void 0);L([f({attribute:"type-ramp-plus-6-font-size"}),z(oc)],N.prototype,"typeRampPlus6FontSize",void 0);L([f({attribute:"type-ramp-plus-6-line-height"}),z(mf)],N.prototype,"typeRampPlus6LineHeight",void 0);L([f({attribute:"accent-fill-rest-delta",converter:H}),z(al)],N.prototype,"accentFillRestDelta",void 0);L([f({attribute:"accent-fill-hover-delta",converter:H}),z(ll)],N.prototype,"accentFillHoverDelta",void 0);L([f({attribute:"accent-fill-active-delta",converter:H}),z(cl)],N.prototype,"accentFillActiveDelta",void 0);L([f({attribute:"accent-fill-focus-delta",converter:H}),z(dl)],N.prototype,"accentFillFocusDelta",void 0);L([f({attribute:"accent-foreground-rest-delta",converter:H}),z(bf)],N.prototype,"accentForegroundRestDelta",void 0);L([f({attribute:"accent-foreground-hover-delta",converter:H}),z(vf)],N.prototype,"accentForegroundHoverDelta",void 0);L([f({attribute:"accent-foreground-active-delta",converter:H}),z(yf)],N.prototype,"accentForegroundActiveDelta",void 0);L([f({attribute:"accent-foreground-focus-delta",converter:H}),z(xf)],N.prototype,"accentForegroundFocusDelta",void 0);L([f({attribute:"neutral-fill-rest-delta",converter:H}),z(wf)],N.prototype,"neutralFillRestDelta",void 0);L([f({attribute:"neutral-fill-hover-delta",converter:H}),z($f)],N.prototype,"neutralFillHoverDelta",void 0);L([f({attribute:"neutral-fill-active-delta",converter:H}),z(Cf)],N.prototype,"neutralFillActiveDelta",void 0);L([f({attribute:"neutral-fill-focus-delta",converter:H}),z(kf)],N.prototype,"neutralFillFocusDelta",void 0);L([f({attribute:"neutral-fill-input-rest-delta",converter:H}),z(Ff)],N.prototype,"neutralFillInputRestDelta",void 0);L([f({attribute:"neutral-fill-input-hover-delta",converter:H}),z(Sf)],N.prototype,"neutralFillInputHoverDelta",void 0);L([f({attribute:"neutral-fill-input-active-delta",converter:H}),z(Tf)],N.prototype,"neutralFillInputActiveDelta",void 0);L([f({attribute:"neutral-fill-input-focus-delta",converter:H}),z(If)],N.prototype,"neutralFillInputFocusDelta",void 0);L([f({attribute:"neutral-fill-layer-rest-delta",converter:H}),z(_i)],N.prototype,"neutralFillLayerRestDelta",void 0);L([f({attribute:"neutral-fill-stealth-rest-delta",converter:H}),z(Rf)],N.prototype,"neutralFillStealthRestDelta",void 0);L([f({attribute:"neutral-fill-stealth-hover-delta",converter:H}),z(Df)],N.prototype,"neutralFillStealthHoverDelta",void 0);L([f({attribute:"neutral-fill-stealth-active-delta",converter:H}),z(Ef)],N.prototype,"neutralFillStealthActiveDelta",void 0);L([f({attribute:"neutral-fill-stealth-focus-delta",converter:H}),z(Of)],N.prototype,"neutralFillStealthFocusDelta",void 0);L([f({attribute:"neutral-fill-strong-hover-delta",converter:H}),z(Af)],N.prototype,"neutralFillStrongHoverDelta",void 0);L([f({attribute:"neutral-fill-strong-active-delta",converter:H}),z(Lf)],N.prototype,"neutralFillStrongActiveDelta",void 0);L([f({attribute:"neutral-fill-strong-focus-delta",converter:H}),z(Vf)],N.prototype,"neutralFillStrongFocusDelta",void 0);L([f({attribute:"base-layer-luminance",converter:H}),z(fs)],N.prototype,"baseLayerLuminance",void 0);L([f({attribute:"neutral-stroke-divider-rest-delta",converter:H}),z(Uf)],N.prototype,"neutralStrokeDividerRestDelta",void 0);L([f({attribute:"neutral-stroke-rest-delta",converter:H}),z(Pf)],N.prototype,"neutralStrokeRestDelta",void 0);L([f({attribute:"neutral-stroke-hover-delta",converter:H}),z(_f)],N.prototype,"neutralStrokeHoverDelta",void 0);L([f({attribute:"neutral-stroke-active-delta",converter:H}),z(Hf)],N.prototype,"neutralStrokeActiveDelta",void 0);L([f({attribute:"neutral-stroke-focus-delta",converter:H}),z(Mf)],N.prototype,"neutralStrokeFocusDelta",void 0);const t$=N.compose({baseName:"design-system-provider",template:R` <slot></slot> `,styles:T`
    ${at("block")}
  `}),e$=(i,t)=>T`
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
    box-shadow: ${vw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ai} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${it};
    z-index: 1;
    border: calc(${U} * 1px) solid transparent;
  }
`,i$=Re.compose({baseName:"dialog",template:py,styles:e$}),s$=(i,t)=>T`
    ${at("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${U} * 1px) solid ${Qn};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${_} * 1px);
      border-left: calc(${U} * 1px) solid ${Qn};
  }
  `,o$=wr.compose({baseName:"divider",template:Ty,styles:s$}),n$=(i,t)=>T`
    ${at("inline-flex")} :host {
      height: calc((${nt} + ${_}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Zf};
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${hc};
      box-sizing: border-box;
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Fe};
      cursor: ${Ve};
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
      color: ${Mx};
    }

    :host(:not(.disabled):active) {
      color: ${Nx};
    }

    :host(:${Q}) {
      ${_e}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(rt(T`
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
        :host(:${Q}) {
          forced-color-adjust: none;
          outline-color: ${g.Highlight};
        }
      `)),r$=$r.compose({baseName:"flipper",template:Ry,styles:n$,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),a$=T`
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
`,l$=T`
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
`,c$=T`
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
`.withBehaviors(new Ys(a$,l$)),d$=(i,t)=>T`
  ${at("block")} :host {
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
`;class h$ extends bi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(c$)}}const u$=h$.compose({baseName:"horizontal-scroll",baseClass:bi,template:Gy,styles:d$,nextFlipper:R`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:R`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),f$=(i,t)=>T`
    ${at("inline-flex")} :host {
      border: calc(${U} * 1px) solid ${Oo};
      border-radius: calc(${pt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${_} * 1px) 0;
    }

    ::slotted(${i.tagFor(si)}) {
      margin: 0 calc(${_} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${_e}
    }
  `;class p$ extends me{}const g$=p$.compose({baseName:"listbox",template:Ey,styles:f$}),m$=(i,t)=>T`
    ${at("inline-flex")} :host {
      position: relative;
      ${Ot}
      background: ${Ms};
      border-radius: calc(${pt} * 1px);
      border: calc(${U} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${gt};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${nt} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${_} * 3) - ${U} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Yt} - ${U}) * 1px);
      top: calc((${nt} / 4) - ${Yt} * 1px);
      width: 3px;
      height: calc((${nt} / 2) * 1px);
      background: transparent;
      border-radius: calc(${pt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Ns};
    }

    :host(:not([disabled]):active) {
      background: ${zs};
    }

    :host(:not([disabled]):active)::before {
      background: ${vt};
      height: calc(((${nt} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${vt};
    }

    :host(:${Q}) {
      ${_e}
      background: ${Hx};
    }

    :host([aria-selected='true']) {
      background: ${as};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${dc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Px};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Ns};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${zs};
    }

    :host([disabled]) {
      cursor: ${Ve};
      opacity: ${Fe};
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
  `.withBehaviors(new Ys(null,T`
      :host::before {
        right: calc((${Yt} - ${U}) * 1px);
      }
    `),rt(T`
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
        :host(:${Q}) {
          outline-color: ${g.CanvasText};
        }
      `)),b$=si.compose({baseName:"option",template:Dy,styles:m$}),v$=(i,t)=>T`
    ${at("block")} :host {
      background: ${Bo};
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${ai} * 1px);
      box-shadow: ${ip};
      padding: calc((${_} - ${U}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${_} * 2px);
    }

    ::slotted(${i.tagFor(Ce)}) {
      margin: 0 calc(${_} * 1px);
    }

    ::slotted(${i.tagFor(wr)}) {
      margin: calc(${_} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${_} * 1px) 0;
      border: none;
      border-top: calc(${U} * 1px) solid ${Qn};
    }
  `.withBehaviors(rt(T`
        :host([slot='submenu']) {
          background: ${g.Canvas};
          border-color: ${g.CanvasText};
        }
      `));class y$ extends Cr{connectedCallback(){super.connectedCallback(),it.setValueFor(this,Bo)}}const x$=y$.compose({baseName:"menu",baseClass:Cr,template:Ly,styles:v$}),w$=(i,t)=>T`
    ${at("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Ot}
      box-sizing: border-box;
      height: calc(${nt} * 1px);
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

    :host(:${Q}) {
      ${_e}
    }

    :host(:not([disabled]):hover) {
      background: ${Ns};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${zs};
      color: ${gt};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Ve};
      opacity: ${Fe};
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
      color: ${Bs};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(rt(T`
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
        :host(:${Q}) ::slotted([slot='end']:not(svg)) {
          color: ${g.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${g.Highlight};
          color: ${g.HighlightText};
        }
        :host(:${Q}) {
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
        :host([disabled]:${Q}) {
          background: ${g.ButtonFace};
          color: ${g.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Q}) {
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
            :host(:${Q}) .expanded-toggle,
            :host(:${Q}) .checkbox,
            :host(:${Q}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Q}) .checkbox,
            :host([checked]:${Q}) .radio {
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
      `),new Ys(T`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,T`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),$$=Ce.compose({baseName:"menu-item",template:Ay,styles:w$,checkboxIndicator:`
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
  `}),wn=".root",C$=(i,t)=>T`
    ${at("inline-block")}

    ${Xr(i,t,wn)}

    ${qo()}

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
      padding: 0 calc(${_} * 2px + 1px);
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
  `.withBehaviors(Tt("outline",Wo(i,t,wn)),Tt("filled",Js(i,t,wn)),rt(Qs(i,t,wn)));class fp extends le{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],fp.prototype,"appearance",void 0);const k$=fp.compose({baseName:"number-field",baseClass:le,styles:C$,template:Vy,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),F$=(i,t)=>T`
    ${at("flex")} :host {
      align-items: center;
      height: calc((${U} * 3) * 1px);
    }

    .progress {
      background-color: ${Xs};
      border-radius: calc(${_} * 1px);
      width: 100%;
      height: calc(${U} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${vt};
      border-radius: calc(${_} * 1px);
      height: calc((${U} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${U} * 3) * 1px);
      border-radius: calc(${_} * 1px);
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
      border-radius: calc(${_} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${vt};
      border-radius: calc(${_} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${Bs};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${Bs};
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
  `.withBehaviors(rt(T`
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
      `));class S$ extends hs{}const T$=S$.compose({baseName:"progress",template:By,styles:F$,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),I$=(i,t)=>T`
    ${at("flex")} :host {
      align-items: center;
      height: calc(${nt} * 1px);
      width: calc(${nt} * 1px);
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
      stroke: ${Bs};
    }

    :host(.paused) .determinate {
      stroke: ${Bs};
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
  `.withBehaviors(rt(T`
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
      `));class R$ extends hs{}const D$=R$.compose({baseName:"progress-ring",template:zy,styles:I$,indeterminateIndicator:`
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
  `}),E$=(i,t)=>T`
    ${at("inline-flex")} :host {
      --input-size: calc((${nt} / 2) + ${_});
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
      border: calc(${U} * 1px) solid ${Xs};
      background: ${rc};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Ot}
      color: ${gt};
      ${""} padding-inline-start: calc(${_} * 2px + 2px);
      margin-inline-end: calc(${_} * 2px + 2px);
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
      fill: ${rs};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${ac};
      border-color: ${fc};
    }

    :host(:not(.disabled):active) .control {
      background: ${lc};
      border-color: ${pc};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Q}) .control {
      ${Uo}
      background: ${cc};
    }

    :host(.checked) .control {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${Ue};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${qe};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ve};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Fe};
    }
  `.withBehaviors(rt(T`
        .control {
          background: ${g.Field};
          border-color: ${g.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${g.Highlight};
        }
        :host(:${Q}) .control {
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
      `)),O$=Fr.compose({baseName:"radio",template:Uy,styles:E$,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),A$=(i,t)=>T`
  ${at("flex")} :host {
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
`,L$=Mi.compose({baseName:"radio-group",template:jy,styles:A$}),V$=(i,t)=>R`
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
      <slot ${kt({property:"defaultSlottedNodes",filter:tf})}></slot>
    </label>
    <div class="root" part="root" ${ut("root")}>
      ${ae(i,t)}
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
      ${re(i,t)}
    </div>
  </template>
`,$n=".root",P$=mt.create("clear-button-hover").withDefault(i=>{const t=We.getValueFor(i),e=Bi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),_$=mt.create("clear-button-active").withDefault(i=>{const t=We.getValueFor(i),e=Bi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),H$=(i,t)=>T`
    ${at("inline-block")}

    ${Xr(i,t,$n)}

    ${qo()}

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
      padding: 0 calc(${_} * 2px + 1px);
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
      min-width: calc(${nt} * 1px);
      ${Ot}
      outline: none;
      padding: 0 calc((10 + (${_} * 2 * ${zi})) * 1px);
    }
    .clear-button:hover {
      background: ${P$};
    }
    .clear-button:active {
      background: ${_$};
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
    ::slotted(${i.tagFor($e)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Tt("outline",Wo(i,t,$n)),Tt("filled",Js(i,t,$n)),rt(Qs(i,t,$n)));class pp extends ke{constructor(){super(...arguments),this.appearance="outline"}}L([f],pp.prototype,"appearance",void 0);const M$=pp.compose({baseName:"search",baseClass:ke,template:V$,styles:H$,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class gp extends vi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&it.setValueFor(this.listbox,Bo)}}L([f({mode:"fromView"})],gp.prototype,"appearance",void 0);const N$=gp.compose({baseName:"select",baseClass:vi,template:Zy,styles:qw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),z$=(i,t)=>T`
    ${at("block")} :host {
      --skeleton-fill-default: ${as};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${dc} 51%,
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

    ${at("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${as});
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
  `.withBehaviors(rt(T`
        :host{
          background-color: ${g.CanvasText};
        }
      `)),B$=Ho.compose({baseName:"skeleton",template:Ky,styles:z$}),j$=(i,t)=>T`
    ${at("inline-grid")} :host {
      --thumb-size: calc((${nt} / 2) + ${_} + (${U} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${_} / 2) * -1);
      --track-width: ${_};
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
    :host(:${Q}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${it}, 0 0 0 4px ${qr};
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
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${hc};
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
      background: ${vt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${Ue};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${qe};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${Kf};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${tp};
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
      background: ${Zf};
      border: 1px solid ${Xs};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${_} * 60px);
      min-width: calc(${_} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${Ve};
    }
    :host(.disabled) {
      opacity: ${Fe};
    }
  `.withBehaviors(rt(T`
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
        :host(:${Q}) .thumb-cursor {
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
      `)),U$=Jt.compose({baseName:"slider",template:e0,styles:j$,thumb:`
    <div class="thumb-cursor"></div>
  `}),q$=(i,t)=>T`
    ${at("block")} :host {
      ${ep}
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
      height: calc(${_} * 1px);
      background: ${Xs};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${_} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${Fe};
    }
  `.withBehaviors(rt(T`
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
      `)),W$=yi.compose({baseName:"slider-label",template:t0,styles:q$}),G$=(i,t)=>T`
    :host([hidden]) {
      display: none;
    }

    ${at("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Pe};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Fe};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Ve};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${nt} / 2) + ${_}) * 2px);
      height: calc(((${nt} / 2) + ${_}) * 1px);
      background: ${rc};
      border-radius: calc(${nt} * 1px);
      border: calc(${U} * 1px) solid ${Xs};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${ac};
      border-color: ${fc};
    }

    :host(:not(.disabled):active) .switch {
      background: ${lc};
      border-color: ${pc};
    }

    :host(:${Q}) .switch {
      ${Uo}
      background: ${cc};
    }

    :host(.checked) .switch {
      background: ${vt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${Ue};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${qe};
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
      margin-inline-end: calc(${_} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${_} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${vt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${rs};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ue};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Gf};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${qe};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Xf};
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
  `.withBehaviors(new Ys(T`
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
      `),rt(T`
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
        :host(:${Q}) .switch {
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
      `)),X$=Xl.compose({baseName:"switch",template:n0,styles:G$,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Y$=(i,t)=>T`
      ${at("grid")} :host {
        box-sizing: border-box;
        ${Ot}
        color: ${gt};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${nt} * 1px); auto;
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
        margin-inline-start: calc(${Yt} * 1px);
        border-radius: calc(${pt} * 1px);
        align-self: center;
        background: ${vt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(rt(T`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${g.Highlight};
        }
      `)),J$=(i,t)=>T`
      ${at("inline-flex")} :host {
        box-sizing: border-box;
        ${Ot}
        height: calc((${nt} + (${_} * 2)) * 1px);
        padding: 0 calc((6 + (${_} * 2 * ${zi})) * 1px);
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

      :host(:${Q}) {
        ${_e}
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
    `.withBehaviors(rt(T`
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
          :host(:${Q}) {
            background: transparent;
            outline-color: ${g.ButtonText};
          }
        `)),Q$=sf.compose({baseName:"tab",template:d0,styles:J$}),Z$=(i,t)=>T`
  ${at("block")} :host {
    box-sizing: border-box;
    ${Ot}
    padding: 0 calc((6 + (${_} * 2 * ${zi})) * 1px);
  }
`,K$=c0.compose({baseName:"tab-panel",template:l0,styles:Z$}),t1=xi.compose({baseName:"tabs",template:h0,styles:Y$}),Cn=".control",e1=(i,t)=>T`
    ${at("inline-flex")}

    ${Xr(i,t,Cn)}

    ${qo()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${nt} * 2) * 1px);
      padding: calc(${_} * 1.5px) calc(${_} * 2px + 1px);
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
  `.withBehaviors(Tt("outline",Wo(i,t,Cn)),Tt("filled",Js(i,t,Cn)),rt(Qs(i,t,Cn)));class mp extends Qt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],mp.prototype,"appearance",void 0);const i1=mp.compose({baseName:"text-area",baseClass:Qt,template:p0,styles:e1,shadowOptions:{delegatesFocus:!0}}),kn=".root",s1=(i,t)=>T`
    ${at("inline-block")}

    ${Xr(i,t,kn)}

    ${qo()}

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
      padding: 0 calc(${_} * 2px + 1px);
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
  `.withBehaviors(Tt("outline",Wo(i,t,kn)),Tt("filled",Js(i,t,kn)),rt(Qs(i,t,kn)));class bp extends be{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],bp.prototype,"appearance",void 0);const o1=bp.compose({baseName:"text-field",baseClass:be,template:g0,styles:s1,shadowOptions:{delegatesFocus:!0}}),n1=(i,t)=>T`
    ${at("inline-flex")} :host {
      --toolbar-item-gap: calc(${_} * 1px);
      background: ${it};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${Q}) {
      ${_e}
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
  `.withBehaviors(rt(T`
        :host(:${Q}) {
          outline-color: ${g.Highlight};
          color: ${g.ButtonText};
          forced-color-adjust: none;
        }
      `));class r1 extends Ni{}const a1=r1.compose({baseName:"toolbar",baseClass:Ni,template:m0,styles:n1}),l1=(i,t)=>T`
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
      border: calc(${U} * 1px) solid ${Ds};
      background: ${it};
      color: ${gt};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Ot}
      white-space: nowrap;
      box-shadow: ${gw};
    }

    ${i.tagFor(G)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(G)}.right,
    ${i.tagFor(G)}.left {
      flex-direction: column;
    }

    ${i.tagFor(G)}.top .tooltip::after,
    ${i.tagFor(G)}.bottom .tooltip::after,
    ${i.tagFor(G)}.left .tooltip::after,
    ${i.tagFor(G)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${it};
      border-top: calc(${U} * 1px) solid ${Ds};
      border-left: calc(${U} * 1px) solid ${Ds};
      position: absolute;
    }

    ${i.tagFor(G)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(G)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(G)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(G)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(G)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(G)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(G)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(G)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(rt(T`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(G)}.top .tooltip::after,
        ${i.tagFor(G)}.bottom .tooltip::after,
        ${i.tagFor(G)}.left .tooltip::after,
        ${i.tagFor(G)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class c1 extends Pt{connectedCallback(){super.connectedCallback(),it.setValueFor(this,Bo)}}const d1=c1.compose({baseName:"tooltip",baseClass:Pt,template:b0,styles:l1}),h1=(i,t)=>T`
  :host([hidden]) {
    display: none;
  }

  ${at("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,u1=Tr.compose({baseName:"tree-view",template:y0,styles:h1}),f1=T`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${nt} * -1px));
  }
  :host([selected])::after {
    left: calc(${Yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,p1=T`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${nt} * -1px));
  }
  :host([selected])::after {
    right: calc(${Yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,ah=xe`((${Rr} / 2) * ${_}) + ((${_} * ${zi}) / 2)`,g1=mt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=We.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),m1=mt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=gs.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),b1=(i,t)=>T`
    ${at("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${gt};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Pe};
      --expand-collapse-button-size: calc(${nt} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Ms};
      border: calc(${U} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc((${nt} + 1) * 1px);
    }

    :host(:${Q}) .positioning-region {
      ${_e}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Ns};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${zs};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${nt} * 1px);
      margin-inline-start: calc(${_} * 2px + 8px);
      ${Ot}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${_} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${pt} * 1px);
      ${""} width: calc((${ah} + (${_} * 2)) * 1px);
      height: calc((${ah} + (${_} * 2)) * 1px);
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
      ${""} margin-inline-end: calc(${_} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${_} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Fe};
      cursor: ${Ve};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${g1};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${as};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${m1};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${nt} / 4) * 1px);
      width: 3px;
      height: calc((${nt} / 2) * 1px);
      ${""} background: ${vt};
      border-radius: calc(${pt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${nt} * -1px);
    }
  `.withBehaviors(new Ys(f1,p1),rt(T`
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
        :host(:${Q}) .positioning-region {
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
      `)),v1=Ht.compose({baseName:"tree-item",template:v0,styles:b1,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),y1={fluentAccordion:aw,fluentAccordionItem:rw,fluentAnchor:Fw,fluentAnchoredRegion:Tw,fluentBadge:Rw,fluentBreadcrumb:Ew,fluentBreadcrumbItem:Aw,fluentButton:Vw,fluentCalendar:Mw,fluentCard:zw,fluentCheckbox:jw,fluentCombobox:Gw,fluentDataGrid:Kw,fluentDataGridCell:Qw,fluentDataGridRow:Zw,fluentDesignSystemProvider:t$,fluentDialog:i$,fluentDivider:o$,fluentFlipper:r$,fluentHorizontalScroll:u$,fluentListbox:g$,fluentOption:b$,fluentMenu:x$,fluentMenuItem:$$,fluentNumberField:k$,fluentProgress:T$,fluentProgressRing:D$,fluentRadio:O$,fluentRadioGroup:L$,fluentSearch:M$,fluentSelect:N$,fluentSkeleton:B$,fluentSlider:U$,fluentSliderLabel:W$,fluentSwitch:X$,fluentTabs:t1,fluentTab:Q$,fluentTabPanel:K$,fluentTextArea:i1,fluentTextField:o1,fluentToolbar:a1,fluentTooltip:d1,fluentTreeView:u1,fluentTreeItem:v1,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function x1(i){return Gu.getOrCreate(i).withPrefix("fluent")}function vp(i,t){return function(){return i.apply(t,arguments)}}const{toString:w1}=Object.prototype,{getPrototypeOf:yc}=Object,Yr=(i=>t=>{const e=w1.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),oi=i=>(i=i.toLowerCase(),t=>Yr(t)===i),Jr=i=>t=>typeof t===i,{isArray:Zs}=Array,Ao=Jr("undefined");function $1(i){return i!==null&&!Ao(i)&&i.constructor!==null&&!Ao(i.constructor)&&De(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const yp=oi("ArrayBuffer");function C1(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&yp(i.buffer),t}const k1=Jr("string"),De=Jr("function"),xp=Jr("number"),Qr=i=>i!==null&&typeof i=="object",F1=i=>i===!0||i===!1,Vn=i=>{if(Yr(i)!=="object")return!1;const t=yc(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},S1=oi("Date"),T1=oi("File"),I1=oi("Blob"),R1=oi("FileList"),D1=i=>Qr(i)&&De(i.pipe),E1=i=>{let t;return i&&(typeof FormData=="function"&&i instanceof FormData||De(i.append)&&((t=Yr(i))==="formdata"||t==="object"&&De(i.toString)&&i.toString()==="[object FormData]"))},O1=oi("URLSearchParams"),A1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Go(i,t,{allOwnKeys:e=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),Zs(i))for(s=0,o=i.length;s<o;s++)t.call(null,i[s],s,i);else{const n=e?Object.getOwnPropertyNames(i):Object.keys(i),r=n.length;let a;for(s=0;s<r;s++)a=n[s],t.call(null,i[a],a,i)}}function wp(i,t){t=t.toLowerCase();const e=Object.keys(i);let s=e.length,o;for(;s-- >0;)if(o=e[s],t===o.toLowerCase())return o;return null}const $p=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Cp=i=>!Ao(i)&&i!==$p;function hl(){const{caseless:i}=Cp(this)&&this||{},t={},e=(s,o)=>{const n=i&&wp(t,o)||o;Vn(t[n])&&Vn(s)?t[n]=hl(t[n],s):Vn(s)?t[n]=hl({},s):Zs(s)?t[n]=s.slice():t[n]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&Go(arguments[s],e);return t}const L1=(i,t,e,{allOwnKeys:s}={})=>(Go(t,(o,n)=>{e&&De(o)?i[n]=vp(o,e):i[n]=o},{allOwnKeys:s}),i),V1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),P1=(i,t,e,s)=>{i.prototype=Object.create(t.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:t.prototype}),e&&Object.assign(i.prototype,e)},_1=(i,t,e,s)=>{let o,n,r;const a={};if(t=t||{},i==null)return t;do{for(o=Object.getOwnPropertyNames(i),n=o.length;n-- >0;)r=o[n],(!s||s(r,i,t))&&!a[r]&&(t[r]=i[r],a[r]=!0);i=e!==!1&&yc(i)}while(i&&(!e||e(i,t))&&i!==Object.prototype);return t},H1=(i,t,e)=>{i=String(i),(e===void 0||e>i.length)&&(e=i.length),e-=t.length;const s=i.indexOf(t,e);return s!==-1&&s===e},M1=i=>{if(!i)return null;if(Zs(i))return i;let t=i.length;if(!xp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=i[t];return e},N1=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&yc(Uint8Array)),z1=(i,t)=>{const s=(i&&i[Symbol.iterator]).call(i);let o;for(;(o=s.next())&&!o.done;){const n=o.value;t.call(i,n[0],n[1])}},B1=(i,t)=>{let e;const s=[];for(;(e=i.exec(t))!==null;)s.push(e);return s},j1=oi("HTMLFormElement"),U1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,s,o){return s.toUpperCase()+o}),lh=(({hasOwnProperty:i})=>(t,e)=>i.call(t,e))(Object.prototype),q1=oi("RegExp"),kp=(i,t)=>{const e=Object.getOwnPropertyDescriptors(i),s={};Go(e,(o,n)=>{let r;(r=t(o,n,i))!==!1&&(s[n]=r||o)}),Object.defineProperties(i,s)},W1=i=>{kp(i,(t,e)=>{if(De(i)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const s=i[e];if(De(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},G1=(i,t)=>{const e={},s=o=>{o.forEach(n=>{e[n]=!0})};return Zs(i)?s(i):s(String(i).split(t)),e},X1=()=>{},Y1=(i,t)=>(i=+i,Number.isFinite(i)?i:t),Va="abcdefghijklmnopqrstuvwxyz",ch="0123456789",Fp={DIGIT:ch,ALPHA:Va,ALPHA_DIGIT:Va+Va.toUpperCase()+ch},J1=(i=16,t=Fp.ALPHA_DIGIT)=>{let e="";const{length:s}=t;for(;i--;)e+=t[Math.random()*s|0];return e};function Q1(i){return!!(i&&De(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const Z1=i=>{const t=new Array(10),e=(s,o)=>{if(Qr(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[o]=s;const n=Zs(s)?[]:{};return Go(s,(r,a)=>{const l=e(r,o+1);!Ao(l)&&(n[a]=l)}),t[o]=void 0,n}}return s};return e(i,0)},K1=oi("AsyncFunction"),tC=i=>i&&(Qr(i)||De(i))&&De(i.then)&&De(i.catch),$={isArray:Zs,isArrayBuffer:yp,isBuffer:$1,isFormData:E1,isArrayBufferView:C1,isString:k1,isNumber:xp,isBoolean:F1,isObject:Qr,isPlainObject:Vn,isUndefined:Ao,isDate:S1,isFile:T1,isBlob:I1,isRegExp:q1,isFunction:De,isStream:D1,isURLSearchParams:O1,isTypedArray:N1,isFileList:R1,forEach:Go,merge:hl,extend:L1,trim:A1,stripBOM:V1,inherits:P1,toFlatObject:_1,kindOf:Yr,kindOfTest:oi,endsWith:H1,toArray:M1,forEachEntry:z1,matchAll:B1,isHTMLForm:j1,hasOwnProperty:lh,hasOwnProp:lh,reduceDescriptors:kp,freezeMethods:W1,toObjectSet:G1,toCamelCase:U1,noop:X1,toFiniteNumber:Y1,findKey:wp,global:$p,isContextDefined:Cp,ALPHABET:Fp,generateString:J1,isSpecCompliantForm:Q1,toJSONObject:Z1,isAsyncFn:K1,isThenable:tC};function dt(i,t,e,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),s&&(this.request=s),o&&(this.response=o)}$.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Sp=dt.prototype,Tp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Tp[i]={value:i}});Object.defineProperties(dt,Tp);Object.defineProperty(Sp,"isAxiosError",{value:!0});dt.from=(i,t,e,s,o,n)=>{const r=Object.create(Sp);return $.toFlatObject(i,r,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),dt.call(r,i.message,t,e,s,o),r.cause=i,r.name=i.name,n&&Object.assign(r,n),r};const eC=null;function ul(i){return $.isPlainObject(i)||$.isArray(i)}function Ip(i){return $.endsWith(i,"[]")?i.slice(0,-2):i}function dh(i,t,e){return i?i.concat(t).map(function(o,n){return o=Ip(o),!e&&n?"["+o+"]":o}).join(e?".":""):t}function iC(i){return $.isArray(i)&&!i.some(ul)}const sC=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function Zr(i,t,e){if(!$.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,e=$.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,V){return!$.isUndefined(V[y])});const s=e.metaTokens,o=e.visitor||d,n=e.dots,r=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(C){if(C===null)return"";if($.isDate(C))return C.toISOString();if(!l&&$.isBlob(C))throw new dt("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(C)||$.isTypedArray(C)?l&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function d(C,y,V){let B=C;if(C&&!V&&typeof C=="object"){if($.endsWith(y,"{}"))y=s?y:y.slice(0,-2),C=JSON.stringify(C);else if($.isArray(C)&&iC(C)||($.isFileList(C)||$.endsWith(y,"[]"))&&(B=$.toArray(C)))return y=Ip(y),B.forEach(function(j,ot){!($.isUndefined(j)||j===null)&&t.append(r===!0?dh([y],ot,n):r===null?y:y+"[]",c(j))}),!1}return ul(C)?!0:(t.append(dh(V,y,n),c(C)),!1)}const u=[],b=Object.assign(sC,{defaultVisitor:d,convertValue:c,isVisitable:ul});function k(C,y){if(!$.isUndefined(C)){if(u.indexOf(C)!==-1)throw Error("Circular reference detected in "+y.join("."));u.push(C),$.forEach(C,function(B,st){(!($.isUndefined(B)||B===null)&&o.call(t,B,$.isString(st)?st.trim():st,y,b))===!0&&k(B,y?y.concat(st):[st])}),u.pop()}}if(!$.isObject(i))throw new TypeError("data must be an object");return k(i),t}function hh(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function xc(i,t){this._pairs=[],i&&Zr(i,this,t)}const Rp=xc.prototype;Rp.append=function(t,e){this._pairs.push([t,e])};Rp.toString=function(t){const e=t?function(s){return t.call(this,s,hh)}:hh;return this._pairs.map(function(o){return e(o[0])+"="+e(o[1])},"").join("&")};function oC(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Dp(i,t,e){if(!t)return i;const s=e&&e.encode||oC,o=e&&e.serialize;let n;if(o?n=o(t,e):n=$.isURLSearchParams(t)?t.toString():new xc(t,e).toString(s),n){const r=i.indexOf("#");r!==-1&&(i=i.slice(0,r)),i+=(i.indexOf("?")===-1?"?":"&")+n}return i}class uh{constructor(){this.handlers=[]}use(t,e,s){return this.handlers.push({fulfilled:t,rejected:e,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Ep={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nC=typeof URLSearchParams<"u"?URLSearchParams:xc,rC=typeof FormData<"u"?FormData:null,aC=typeof Blob<"u"?Blob:null,lC={isBrowser:!0,classes:{URLSearchParams:nC,FormData:rC,Blob:aC},protocols:["http","https","file","blob","url","data"]},Op=typeof window<"u"&&typeof document<"u",cC=(i=>Op&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),dC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Op,hasStandardBrowserEnv:cC,hasStandardBrowserWebWorkerEnv:dC},Symbol.toStringTag,{value:"Module"})),Ke={...hC,...lC};function uC(i,t){return Zr(i,new Ke.classes.URLSearchParams,Object.assign({visitor:function(e,s,o,n){return Ke.isNode&&$.isBuffer(e)?(this.append(s,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}function fC(i){return $.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pC(i){const t={},e=Object.keys(i);let s;const o=e.length;let n;for(s=0;s<o;s++)n=e[s],t[n]=i[n];return t}function Ap(i){function t(e,s,o,n){let r=e[n++];if(r==="__proto__")return!0;const a=Number.isFinite(+r),l=n>=e.length;return r=!r&&$.isArray(o)?o.length:r,l?($.hasOwnProp(o,r)?o[r]=[o[r],s]:o[r]=s,!a):((!o[r]||!$.isObject(o[r]))&&(o[r]=[]),t(e,s,o[r],n)&&$.isArray(o[r])&&(o[r]=pC(o[r])),!a)}if($.isFormData(i)&&$.isFunction(i.entries)){const e={};return $.forEachEntry(i,(s,o)=>{t(fC(s),o,e,0)}),e}return null}function gC(i,t,e){if($.isString(i))try{return(t||JSON.parse)(i),$.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(e||JSON.stringify)(i)}const wc={transitional:Ep,adapter:["xhr","http"],transformRequest:[function(t,e){const s=e.getContentType()||"",o=s.indexOf("application/json")>-1,n=$.isObject(t);if(n&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(Ap(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(n){if(s.indexOf("application/x-www-form-urlencoded")>-1)return uC(t,this.formSerializer).toString();if((a=$.isFileList(t))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Zr(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return n||o?(e.setContentType("application/json",!1),gC(t)):t}],transformResponse:[function(t){const e=this.transitional||wc.transitional,s=e&&e.forcedJSONParsing,o=this.responseType==="json";if(t&&$.isString(t)&&(s&&!this.responseType||o)){const r=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(r)throw a.name==="SyntaxError"?dt.from(a,dt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],i=>{wc.headers[i]={}});const $c=wc,mC=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bC=i=>{const t={};let e,s,o;return i&&i.split(`
`).forEach(function(r){o=r.indexOf(":"),e=r.substring(0,o).trim().toLowerCase(),s=r.substring(o+1).trim(),!(!e||t[e]&&mC[e])&&(e==="set-cookie"?t[e]?t[e].push(s):t[e]=[s]:t[e]=t[e]?t[e]+", "+s:s)}),t},fh=Symbol("internals");function lo(i){return i&&String(i).trim().toLowerCase()}function Pn(i){return i===!1||i==null?i:$.isArray(i)?i.map(Pn):String(i)}function vC(i){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=e.exec(i);)t[s[1]]=s[2];return t}const yC=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Pa(i,t,e,s,o){if($.isFunction(s))return s.call(this,t,e);if(o&&(t=e),!!$.isString(t)){if($.isString(s))return t.indexOf(s)!==-1;if($.isRegExp(s))return s.test(t)}}function xC(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,s)=>e.toUpperCase()+s)}function wC(i,t){const e=$.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+e,{value:function(o,n,r){return this[s].call(this,t,o,n,r)},configurable:!0})})}class Kr{constructor(t){t&&this.set(t)}set(t,e,s){const o=this;function n(a,l,c){const d=lo(l);if(!d)throw new Error("header name must be a non-empty string");const u=$.findKey(o,d);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||l]=Pn(a))}const r=(a,l)=>$.forEach(a,(c,d)=>n(c,d,l));return $.isPlainObject(t)||t instanceof this.constructor?r(t,e):$.isString(t)&&(t=t.trim())&&!yC(t)?r(bC(t),e):t!=null&&n(e,t,s),this}get(t,e){if(t=lo(t),t){const s=$.findKey(this,t);if(s){const o=this[s];if(!e)return o;if(e===!0)return vC(o);if($.isFunction(e))return e.call(this,o,s);if($.isRegExp(e))return e.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=lo(t),t){const s=$.findKey(this,t);return!!(s&&this[s]!==void 0&&(!e||Pa(this,this[s],s,e)))}return!1}delete(t,e){const s=this;let o=!1;function n(r){if(r=lo(r),r){const a=$.findKey(s,r);a&&(!e||Pa(s,s[a],a,e))&&(delete s[a],o=!0)}}return $.isArray(t)?t.forEach(n):n(t),o}clear(t){const e=Object.keys(this);let s=e.length,o=!1;for(;s--;){const n=e[s];(!t||Pa(this,this[n],n,t,!0))&&(delete this[n],o=!0)}return o}normalize(t){const e=this,s={};return $.forEach(this,(o,n)=>{const r=$.findKey(s,n);if(r){e[r]=Pn(o),delete e[n];return}const a=t?xC(n):String(n).trim();a!==n&&delete e[n],e[a]=Pn(o),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return $.forEach(this,(s,o)=>{s!=null&&s!==!1&&(e[o]=t&&$.isArray(s)?s.join(", "):s)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const s=new this(t);return e.forEach(o=>s.set(o)),s}static accessor(t){const s=(this[fh]=this[fh]={accessors:{}}).accessors,o=this.prototype;function n(r){const a=lo(r);s[a]||(wC(o,r),s[a]=!0)}return $.isArray(t)?t.forEach(n):n(t),this}}Kr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(Kr.prototype,({value:i},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(s){this[e]=s}}});$.freezeMethods(Kr);const ci=Kr;function _a(i,t){const e=this||$c,s=t||e,o=ci.from(s.headers);let n=s.data;return $.forEach(i,function(a){n=a.call(e,n,o.normalize(),t?t.status:void 0)}),o.normalize(),n}function Lp(i){return!!(i&&i.__CANCEL__)}function Xo(i,t,e){dt.call(this,i??"canceled",dt.ERR_CANCELED,t,e),this.name="CanceledError"}$.inherits(Xo,dt,{__CANCEL__:!0});function $C(i,t,e){const s=e.config.validateStatus;!e.status||!s||s(e.status)?i(e):t(new dt("Request failed with status code "+e.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}const CC=Ke.hasStandardBrowserEnv?{write(i,t,e,s,o,n){const r=[i+"="+encodeURIComponent(t)];$.isNumber(e)&&r.push("expires="+new Date(e).toGMTString()),$.isString(s)&&r.push("path="+s),$.isString(o)&&r.push("domain="+o),n===!0&&r.push("secure"),document.cookie=r.join("; ")},read(i){const t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kC(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function FC(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function Vp(i,t){return i&&!kC(t)?FC(i,t):t}const SC=Ke.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let s;function o(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return s=o(window.location.href),function(r){const a=$.isString(r)?o(r):r;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function TC(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function IC(i,t){i=i||10;const e=new Array(i),s=new Array(i);let o=0,n=0,r;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=s[n];r||(r=c),e[o]=l,s[o]=c;let u=n,b=0;for(;u!==o;)b+=e[u++],u=u%i;if(o=(o+1)%i,o===n&&(n=(n+1)%i),c-r<t)return;const k=d&&c-d;return k?Math.round(b*1e3/k):void 0}}function ph(i,t){let e=0;const s=IC(50,250);return o=>{const n=o.loaded,r=o.lengthComputable?o.total:void 0,a=n-e,l=s(a),c=n<=r;e=n;const d={loaded:n,total:r,progress:r?n/r:void 0,bytes:a,rate:l||void 0,estimated:l&&r&&c?(r-n)/l:void 0,event:o};d[t?"download":"upload"]=!0,i(d)}}const RC=typeof XMLHttpRequest<"u",DC=RC&&function(i){return new Promise(function(e,s){let o=i.data;const n=ci.from(i.headers).normalize();let{responseType:r,withXSRFToken:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d;if($.isFormData(o)){if(Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv)n.setContentType(!1);else if((d=n.getContentType())!==!1){const[y,...V]=d?d.split(";").map(B=>B.trim()).filter(Boolean):[];n.setContentType([y||"multipart/form-data",...V].join("; "))}}let u=new XMLHttpRequest;if(i.auth){const y=i.auth.username||"",V=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";n.set("Authorization","Basic "+btoa(y+":"+V))}const b=Vp(i.baseURL,i.url);u.open(i.method.toUpperCase(),Dp(b,i.params,i.paramsSerializer),!0),u.timeout=i.timeout;function k(){if(!u)return;const y=ci.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),B={data:!r||r==="text"||r==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:i,request:u};$C(function(j){e(j),c()},function(j){s(j),c()},B),u=null}if("onloadend"in u?u.onloadend=k:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(k)},u.onabort=function(){u&&(s(new dt("Request aborted",dt.ECONNABORTED,i,u)),u=null)},u.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,u)),u=null},u.ontimeout=function(){let V=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const B=i.transitional||Ep;i.timeoutErrorMessage&&(V=i.timeoutErrorMessage),s(new dt(V,B.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,u)),u=null},Ke.hasStandardBrowserEnv&&(a&&$.isFunction(a)&&(a=a(i)),a||a!==!1&&SC(b))){const y=i.xsrfHeaderName&&i.xsrfCookieName&&CC.read(i.xsrfCookieName);y&&n.set(i.xsrfHeaderName,y)}o===void 0&&n.setContentType(null),"setRequestHeader"in u&&$.forEach(n.toJSON(),function(V,B){u.setRequestHeader(B,V)}),$.isUndefined(i.withCredentials)||(u.withCredentials=!!i.withCredentials),r&&r!=="json"&&(u.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&u.addEventListener("progress",ph(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",ph(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=y=>{u&&(s(!y||y.type?new Xo(null,i,u):y),u.abort(),u=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const C=TC(b);if(C&&Ke.protocols.indexOf(C)===-1){s(new dt("Unsupported protocol "+C+":",dt.ERR_BAD_REQUEST,i));return}u.send(o||null)})},fl={http:eC,xhr:DC};$.forEach(fl,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const gh=i=>`- ${i}`,EC=i=>$.isFunction(i)||i===null||i===!1,Pp={getAdapter:i=>{i=$.isArray(i)?i:[i];const{length:t}=i;let e,s;const o={};for(let n=0;n<t;n++){e=i[n];let r;if(s=e,!EC(e)&&(s=fl[(r=String(e)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${r}'`);if(s)break;o[r||"#"+n]=s}if(!s){const n=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let r=t?n.length>1?`since :
`+n.map(gh).join(`
`):" "+gh(n[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return s},adapters:fl};function Ha(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Xo(null,i)}function mh(i){return Ha(i),i.headers=ci.from(i.headers),i.data=_a.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Pp.getAdapter(i.adapter||$c.adapter)(i).then(function(s){return Ha(i),s.data=_a.call(i,i.transformResponse,s),s.headers=ci.from(s.headers),s},function(s){return Lp(s)||(Ha(i),s&&s.response&&(s.response.data=_a.call(i,i.transformResponse,s.response),s.response.headers=ci.from(s.response.headers))),Promise.reject(s)})}const bh=i=>i instanceof ci?i.toJSON():i;function js(i,t){t=t||{};const e={};function s(c,d,u){return $.isPlainObject(c)&&$.isPlainObject(d)?$.merge.call({caseless:u},c,d):$.isPlainObject(d)?$.merge({},d):$.isArray(d)?d.slice():d}function o(c,d,u){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c,u)}else return s(c,d,u)}function n(c,d){if(!$.isUndefined(d))return s(void 0,d)}function r(c,d){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c)}else return s(void 0,d)}function a(c,d,u){if(u in t)return s(c,d);if(u in i)return s(void 0,c)}const l={url:n,method:n,data:n,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(c,d)=>o(bh(c),bh(d),!0)};return $.forEach(Object.keys(Object.assign({},i,t)),function(d){const u=l[d]||o,b=u(i[d],t[d],d);$.isUndefined(b)&&u!==a||(e[d]=b)}),e}const _p="1.6.7",Cc={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{Cc[i]=function(s){return typeof s===i||"a"+(t<1?"n ":" ")+i}});const vh={};Cc.transitional=function(t,e,s){function o(n,r){return"[Axios v"+_p+"] Transitional option '"+n+"'"+r+(s?". "+s:"")}return(n,r,a)=>{if(t===!1)throw new dt(o(r," has been removed"+(e?" in "+e:"")),dt.ERR_DEPRECATED);return e&&!vh[r]&&(vh[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(n,r,a):!0}};function OC(i,t,e){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const n=s[o],r=t[n];if(r){const a=i[n],l=a===void 0||r(a,n,i);if(l!==!0)throw new dt("option "+n+" must be "+l,dt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new dt("Unknown option "+n,dt.ERR_BAD_OPTION)}}const pl={assertOptions:OC,validators:Cc},Fi=pl.validators;class Zn{constructor(t){this.defaults=t,this.interceptors={request:new uh,response:new uh}}async request(t,e){try{return await this._request(t,e)}catch(s){if(s instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const n=o.stack?o.stack.replace(/^.+\n/,""):"";s.stack?n&&!String(s.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+n):s.stack=n}throw s}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=js(this.defaults,e);const{transitional:s,paramsSerializer:o,headers:n}=e;s!==void 0&&pl.assertOptions(s,{silentJSONParsing:Fi.transitional(Fi.boolean),forcedJSONParsing:Fi.transitional(Fi.boolean),clarifyTimeoutError:Fi.transitional(Fi.boolean)},!1),o!=null&&($.isFunction(o)?e.paramsSerializer={serialize:o}:pl.assertOptions(o,{encode:Fi.function,serialize:Fi.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let r=n&&$.merge(n.common,n[e.method]);n&&$.forEach(["delete","get","head","post","put","patch","common"],C=>{delete n[C]}),e.headers=ci.concat(r,n);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(e)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let d,u=0,b;if(!l){const C=[mh.bind(this),void 0];for(C.unshift.apply(C,a),C.push.apply(C,c),b=C.length,d=Promise.resolve(e);u<b;)d=d.then(C[u++],C[u++]);return d}b=a.length;let k=e;for(u=0;u<b;){const C=a[u++],y=a[u++];try{k=C(k)}catch(V){y.call(this,V);break}}try{d=mh.call(this,k)}catch(C){return Promise.reject(C)}for(u=0,b=c.length;u<b;)d=d.then(c[u++],c[u++]);return d}getUri(t){t=js(this.defaults,t);const e=Vp(t.baseURL,t.url);return Dp(e,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){Zn.prototype[t]=function(e,s){return this.request(js(s||{},{method:t,url:e,data:(s||{}).data}))}});$.forEach(["post","put","patch"],function(t){function e(s){return function(n,r,a){return this.request(js(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Zn.prototype[t]=e(),Zn.prototype[t+"Form"]=e(!0)});const _n=Zn;class kc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(n){e=n});const s=this;this.promise.then(o=>{if(!s._listeners)return;let n=s._listeners.length;for(;n-- >0;)s._listeners[n](o);s._listeners=null}),this.promise.then=o=>{let n;const r=new Promise(a=>{s.subscribe(a),n=a}).then(o);return r.cancel=function(){s.unsubscribe(n)},r},t(function(n,r,a){s.reason||(s.reason=new Xo(n,r,a),e(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}static source(){let t;return{token:new kc(function(o){t=o}),cancel:t}}}const AC=kc;function LC(i){return function(e){return i.apply(null,e)}}function VC(i){return $.isObject(i)&&i.isAxiosError===!0}const gl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gl).forEach(([i,t])=>{gl[t]=i});const PC=gl;function Hp(i){const t=new _n(i),e=vp(_n.prototype.request,t);return $.extend(e,_n.prototype,t,{allOwnKeys:!0}),$.extend(e,t,null,{allOwnKeys:!0}),e.create=function(o){return Hp(js(i,o))},e}const Mt=Hp($c);Mt.Axios=_n;Mt.CanceledError=Xo;Mt.CancelToken=AC;Mt.isCancel=Lp;Mt.VERSION=_p;Mt.toFormData=Zr;Mt.AxiosError=dt;Mt.Cancel=Mt.CanceledError;Mt.all=function(t){return Promise.all(t)};Mt.spread=LC;Mt.isAxiosError=VC;Mt.mergeConfig=js;Mt.AxiosHeaders=ci;Mt.formToJSON=i=>Ap($.isHTMLForm(i)?new FormData(i):i);Mt.getAdapter=Pp.getAdapter;Mt.HttpStatusCode=PC;Mt.default=Mt;const _C=["value"],HC=Ol({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Ne(),Ti("fluent-text-field",{value:o.modelValue,onInput:s},[iu(o.$slots,"default")],40,_C))}}),MC=["value"],NC=Ol({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Ne(),Ti("fluent-combobox",{value:o.modelValue,onChange:s},[iu(o.$slots,"default")],40,MC))}}),ta=i=>(Ag("data-v-32cec173"),i=i(),Lg(),i),zC=ta(()=>ct("div",{class:"header"},[ct("img",{src:db,class:"logo",alt:"Logo"}),ct("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),BC={class:"general-information-container"},jC=mu('<div class="row" data-v-32cec173><div class="col" data-v-32cec173><p data-v-32cec173>Datum: </p></div><div class="col" data-v-32cec173><fluent-text-field type="date" data-v-32cec173></fluent-text-field></div></div><div class="row" data-v-32cec173><div class="col" data-v-32cec173><p data-v-32cec173>Rechnungsnummer: </p></div><div class="col" data-v-32cec173><fluent-text-field placeholder="Rechnugnsnummer..." data-v-32cec173></fluent-text-field></div></div>',2),UC={class:"row"},qC=ta(()=>ct("div",{class:"col"},[ct("p",null,"Name des Mitgliedes: ")],-1)),WC={class:"col"},GC={class:"row"},XC=ta(()=>ct("div",{class:"col"},[ct("p",null,"Rechnungsdatei: ")],-1)),YC={class:"col"},JC={for:"file",class:"custum-file-upload"},QC=mu('<div class="icon" data-v-32cec173><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-32cec173><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-32cec173></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-32cec173></g><g id="SVGRepo_iconCarrier" data-v-32cec173><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-32cec173></path></g></svg></div><div class="text" data-v-32cec173><span data-v-32cec173>Click to Upload</span></div>',2),ZC=ta(()=>ct("div",{class:"bill-disclaimer-container"},[ct("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),ct("p",null,"LSF-Wesel-Rheinhausen"),ct("p",null,"Postfach 100240"),ct("p",null,"46462 Wesel")],-1)),KC={class:"article-list-wrapper"},tk={class:"article-list-card"},ek=["value"],ik={class:"total-sum"},sk=Ol({__name:"App",setup(i){Dr.withDefault(Er);const t=["articleNumber","description","usage","costCenter","amount"],e=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],s=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function o(){return t.reduce((y,V)=>(y[V]=V==="amount"?0:"",y),{})}const n=nn([o()]),r=()=>{n.value.push(o())},a=y=>y==="amount"?"number":"text",l=y=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[y]||"",c=yu(()=>n.value.reduce((y,V)=>y+parseFloat(V.amount||"0"),0).toFixed(2).replace(".",",")),d=nn(null),u=nn(null);tu(()=>{d.value&&d.value.addEventListener("change",b)});function b(){if(d.value&&d.value.files&&d.value.files.length>0){const y=d.value.files[0].name;u.value&&(u.value.textContent=`Augewählte Datei: ${y}`)}}const k=nn({memberName:""});async function C(){try{const y=await Mt.post("/api/v1/test",k.value);console.log(y.data),alert(y.data)}catch(y){console.error(y),alert(y)}}return(y,V)=>(Ne(),Ti("div",null,[zC,ct("div",BC,[jC,ct("div",UC,[qC,ct("div",WC,[qg(ct("fluent-text-field",{"onUpdate:modelValue":V[0]||(V[0]=B=>k.value.memberName=B),placeholder:"Name..."},null,512),[[ob,k.value.memberName]])])]),ct("div",GC,[XC,ct("div",YC,[ct("label",JC,[QC,ct("input",{id:"file",type:"file",ref_key:"fileInput",ref:d},null,512)]),ct("div",{ref_key:"fileNameDisplay",ref:u,class:"uploaded-lable"},null,512)])])]),ZC,ct("div",KC,[ct("fluent-card",tk,[ct("table",null,[ct("thead",null,[ct("tr",null,[(Ne(),Ti(te,null,an(e,B=>ct("th",{key:B},ra(B),1)),64))])]),ct("tbody",null,[(Ne(!0),Ti(te,null,an(n.value,(B,st)=>(Ne(),Ti("tr",{key:st},[(Ne(),Ti(te,null,an(t,j=>ct("td",{key:j},[j!=="costCenter"?(Ne(),Ja(HC,{key:0,type:a(j),modelValue:B[j],"onUpdate:modelValue":ot=>B[j]=ot,placeholder:l(j)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(Ne(),Ja(NC,{key:1,modelValue:B[j],"onUpdate:modelValue":ot=>B[j]=ot,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:Yh(()=>[(Ne(),Ti(te,null,an(s,ot=>ct("fluent-option",{position:"below",class:"combo-option",key:ot,value:ot},ra(ot),9,ek)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),ct("fluent-button",{appearance:"accent",onClick:r},"＋ Artikel hinzufügen"),ct("div",ik,"Gesamtbetrag: "+ra(c.value)+" €",1)])]),ct("fluent-button",{appearance:"accent",onClick:C},"Test Submit")]))}}),ok=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},nk=ok(sk,[["__scopeId","data-v-32cec173"]]);x1().register(y1);ab(nk).mount("#app");
