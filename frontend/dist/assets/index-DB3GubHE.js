(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const kt={},Cs=[],Ie=()=>{},Bp=()=>!1,tr=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),yl=i=>i.startsWith("onUpdate:"),Wt=Object.assign,xl=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},jp=Object.prototype.hasOwnProperty,ht=(i,t)=>jp.call(i,t),et=Array.isArray,ks=i=>er(i)==="[object Map]",$h=i=>er(i)==="[object Set]",st=i=>typeof i=="function",Nt=i=>typeof i=="string",Us=i=>typeof i=="symbol",Ot=i=>i!==null&&typeof i=="object",Ch=i=>(Ot(i)||st(i))&&st(i.then)&&st(i.catch),kh=Object.prototype.toString,er=i=>kh.call(i),Up=i=>er(i).slice(8,-1),Fh=i=>er(i)==="[object Object]",wl=i=>Nt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,uo=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},qp=/-(\w)/g,Es=ir(i=>i.replace(qp,(t,e)=>e?e.toUpperCase():"")),Wp=/\B([A-Z])/g,qs=ir(i=>i.replace(Wp,"-$1").toLowerCase()),Sh=ir(i=>i.charAt(0).toUpperCase()+i.slice(1)),na=ir(i=>i?`on${Sh(i)}`:""),Ai=(i,t)=>!Object.is(i,t),Sn=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},Mn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},za=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Vc;const Th=()=>Vc||(Vc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $l(i){if(et(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=Nt(s)?Jp(s):$l(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(Nt(i)||Ot(i))return i}const Gp=/;(?![^(]*\))/g,Xp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function Jp(i){const t={};return i.replace(Yp,"").split(Gp).forEach(e=>{if(e){const s=e.split(Xp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Cl(i){let t="";if(Nt(i))t=i;else if(et(i))for(let e=0;e<i.length;e++){const s=Cl(i[e]);s&&(t+=s+" ")}else if(Ot(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Qp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=vl(Qp);function Ih(i){return!!i||i===""}const ra=i=>Nt(i)?i:i==null?"":et(i)||Ot(i)&&(i.toString===kh||!st(i.toString))?JSON.stringify(i,Rh,2):String(i),Rh=(i,t)=>t&&t.__v_isRef?Rh(i,t.value):ks(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[aa(s,n)+" =>"]=o,e),{})}:$h(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>aa(e))}:Us(t)?aa(t):Ot(t)&&!et(t)&&!Fh(t)?String(t):t,aa=(i,t="")=>{var e;return Us(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Kp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Me;try{return Me=this,t()}finally{Me=e}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function tg(i,t=Me){t&&t.active&&t.effects.push(i)}function eg(){return Me}let ts;class kl{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,tg(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ls();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(ig(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cs()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Ei,e=ts;try{return Ei=!0,ts=this,this._runnings++,Lc(this),this.fn()}finally{Pc(this),this._runnings--,ts=e,Ei=t}}stop(){var t;this.active&&(Lc(this),Pc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function ig(i){return i.value}function Lc(i){i._trackId++,i._depsLength=0}function Pc(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Dh(i.deps[t],i);i.deps.length=i._depsLength}}function Dh(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let Ei=!0,Ba=0;const Eh=[];function ls(){Eh.push(Ei),Ei=!1}function cs(){const i=Eh.pop();Ei=i===void 0?!0:i}function Fl(){Ba++}function Sl(){for(Ba--;!Ba&&ja.length;)ja.shift()()}function Oh(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Dh(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const ja=[];function Ah(i,t,e){Fl();for(const s of i.keys()){let o;s._dirtyLevel<t&&(o??(o=i.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=i.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ja.push(s.scheduler)))}Sl()}const Vh=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},Ua=new WeakMap,es=Symbol(""),qa=Symbol("");function fe(i,t,e){if(Ei&&ts){let s=Ua.get(i);s||Ua.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Vh(()=>s.delete(e))),Oh(ts,o)}}function li(i,t,e,s,o,n){const r=Ua.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&et(i)){const l=Number(s);r.forEach((c,d)=>{(d==="length"||!Us(d)&&d>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":et(i)?wl(e)&&a.push(r.get("length")):(a.push(r.get(es)),ks(i)&&a.push(r.get(qa)));break;case"delete":et(i)||(a.push(r.get(es)),ks(i)&&a.push(r.get(qa)));break;case"set":ks(i)&&a.push(r.get(es));break}Fl();for(const l of a)l&&Ah(l,4);Sl()}const sg=vl("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Us)),_c=og();function og(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ft(this);for(let n=0,r=this.length;n<r;n++)fe(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ft)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){ls(),Fl();const s=ft(this)[t].apply(this,e);return Sl(),cs(),s}}),i}function ng(i){const t=ft(this);return fe(t,"has",i),t.hasOwnProperty(i)}class Ph{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){const o=this._isReadonly,n=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?vg:Nh:n?Mh:Hh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=et(t);if(!o){if(r&&ht(_c,e))return Reflect.get(_c,e,s);if(e==="hasOwnProperty")return ng}const a=Reflect.get(t,e,s);return(Us(e)?Lh.has(e):sg(e))||(o||fe(t,"get",e),n)?a:pe(a)?r&&wl(e)?a:a.value:Ot(a)?o?zh(a):Rl(a):a}}class _h extends Ph{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._isShallow){const l=Os(n);if(!Nn(s)&&!Os(s)&&(n=ft(n),s=ft(s)),!et(t)&&pe(n)&&!pe(s))return l?!1:(n.value=s,!0)}const r=et(t)&&wl(e)?Number(e)<t.length:ht(t,e),a=Reflect.set(t,e,s,o);return t===ft(o)&&(r?Ai(s,n)&&li(t,"set",e,s):li(t,"add",e,s)),a}deleteProperty(t,e){const s=ht(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&li(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!Us(e)||!Lh.has(e))&&fe(t,"has",e),s}ownKeys(t){return fe(t,"iterate",et(t)?"length":es),Reflect.ownKeys(t)}}class rg extends Ph{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ag=new _h,lg=new rg,cg=new _h(!0),Tl=i=>i,sr=i=>Reflect.getPrototypeOf(i);function tn(i,t,e=!1,s=!1){i=i.__v_raw;const o=ft(i),n=ft(t);e||(Ai(t,n)&&fe(o,"get",t),fe(o,"get",n));const{has:r}=sr(o),a=s?Tl:e?El:wo;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function en(i,t=!1){const e=this.__v_raw,s=ft(e),o=ft(i);return t||(Ai(i,o)&&fe(s,"has",i),fe(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function sn(i,t=!1){return i=i.__v_raw,!t&&fe(ft(i),"iterate",es),Reflect.get(i,"size",i)}function Hc(i){i=ft(i);const t=ft(this);return sr(t).has.call(t,i)||(t.add(i),li(t,"add",i,i)),this}function Mc(i,t){t=ft(t);const e=ft(this),{has:s,get:o}=sr(e);let n=s.call(e,i);n||(i=ft(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?Ai(t,r)&&li(e,"set",i,t):li(e,"add",i,t),this}function Nc(i){const t=ft(this),{has:e,get:s}=sr(t);let o=e.call(t,i);o||(i=ft(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&li(t,"delete",i,void 0),n}function zc(){const i=ft(this),t=i.size!==0,e=i.clear();return t&&li(i,"clear",void 0,void 0),e}function on(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ft(r),l=t?Tl:i?El:wo;return!i&&fe(a,"iterate",es),r.forEach((c,d)=>s.call(o,l(c),l(d),n))}}function nn(i,t,e){return function(...s){const o=this.__v_raw,n=ft(o),r=ks(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,c=o[i](...s),d=e?Tl:t?El:wo;return!t&&fe(n,"iterate",l?qa:es),{next(){const{value:u,done:b}=c.next();return b?{value:u,done:b}:{value:a?[d(u[0]),d(u[1])]:d(u),done:b}},[Symbol.iterator](){return this}}}}function $i(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function dg(){const i={get(n){return tn(this,n)},get size(){return sn(this)},has:en,add:Hc,set:Mc,delete:Nc,clear:zc,forEach:on(!1,!1)},t={get(n){return tn(this,n,!1,!0)},get size(){return sn(this)},has:en,add:Hc,set:Mc,delete:Nc,clear:zc,forEach:on(!1,!0)},e={get(n){return tn(this,n,!0)},get size(){return sn(this,!0)},has(n){return en.call(this,n,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:on(!0,!1)},s={get(n){return tn(this,n,!0,!0)},get size(){return sn(this,!0)},has(n){return en.call(this,n,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:on(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=nn(n,!1,!1),e[n]=nn(n,!0,!1),t[n]=nn(n,!1,!0),s[n]=nn(n,!0,!0)}),[i,e,t,s]}const[hg,ug,fg,pg]=dg();function Il(i,t){const e=t?i?pg:fg:i?ug:hg;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(ht(e,o)&&o in s?e:s,o,n)}const gg={get:Il(!1,!1)},mg={get:Il(!1,!0)},bg={get:Il(!0,!1)},Hh=new WeakMap,Mh=new WeakMap,Nh=new WeakMap,vg=new WeakMap;function yg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xg(i){return i.__v_skip||!Object.isExtensible(i)?0:yg(Up(i))}function Rl(i){return Os(i)?i:Dl(i,!1,ag,gg,Hh)}function wg(i){return Dl(i,!1,cg,mg,Mh)}function zh(i){return Dl(i,!0,lg,bg,Nh)}function Dl(i,t,e,s,o){if(!Ot(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=xg(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function Fs(i){return Os(i)?Fs(i.__v_raw):!!(i&&i.__v_isReactive)}function Os(i){return!!(i&&i.__v_isReadonly)}function Nn(i){return!!(i&&i.__v_isShallow)}function Bh(i){return Fs(i)||Os(i)}function ft(i){const t=i&&i.__v_raw;return t?ft(t):i}function jh(i){return Object.isExtensible(i)&&Mn(i,"__v_skip",!0),i}const wo=i=>Ot(i)?Rl(i):i,El=i=>Ot(i)?zh(i):i;class Uh{constructor(t,e,s,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new kl(()=>t(this._value),()=>Tn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ft(this);return(!t._cacheable||t.effect.dirty)&&Ai(t._value,t._value=t.effect.run())&&Tn(t,4),qh(t),t.effect._dirtyLevel>=2&&Tn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function $g(i,t,e=!1){let s,o;const n=st(i);return n?(s=i,o=Ie):(s=i.get,o=i.set),new Uh(s,o,n||!o,e)}function qh(i){var t;Ei&&ts&&(i=ft(i),Oh(ts,(t=i.dep)!=null?t:i.dep=Vh(()=>i.dep=void 0,i instanceof Uh?i:void 0)))}function Tn(i,t=4,e){i=ft(i);const s=i.dep;s&&Ah(s,t)}function pe(i){return!!(i&&i.__v_isRef===!0)}function rn(i){return Cg(i,!1)}function Cg(i,t){return pe(i)?i:new kg(i,t)}class kg{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ft(t),this._value=e?t:wo(t)}get value(){return qh(this),this._value}set value(t){const e=this.__v_isShallow||Nn(t)||Os(t);t=e?t:ft(t),Ai(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:wo(t),Tn(this,4))}}function Fg(i){return pe(i)?i.value:i}const Sg={get:(i,t,e)=>Fg(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return pe(o)&&!pe(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function Wh(i){return Fs(i)?i:new Proxy(i,Sg)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oi(i,t,e,s){try{return s?i(...s):i()}catch(o){or(o,t,e)}}function je(i,t,e,s){if(st(i)){const n=Oi(i,t,e,s);return n&&Ch(n)&&n.catch(r=>{or(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(je(i[n],t,e,s));return o}function or(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const c=n.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Oi(l,null,10,[i,r,a]);return}}Tg(i,e,o,s)}function Tg(i,t,e,s=!0){console.error(i)}let $o=!1,Wa=!1;const Xt=[];let Ze=0;const Ss=[];let Si=null,Qi=0;const Gh=Promise.resolve();let Ol=null;function Ig(i){const t=Ol||Gh;return i?t.then(this?i.bind(this):i):t}function Rg(i){let t=Ze+1,e=Xt.length;for(;t<e;){const s=t+e>>>1,o=Xt[s],n=Co(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function Al(i){(!Xt.length||!Xt.includes(i,$o&&i.allowRecurse?Ze+1:Ze))&&(i.id==null?Xt.push(i):Xt.splice(Rg(i.id),0,i),Xh())}function Xh(){!$o&&!Wa&&(Wa=!0,Ol=Gh.then(Jh))}function Dg(i){const t=Xt.indexOf(i);t>Ze&&Xt.splice(t,1)}function Eg(i){et(i)?Ss.push(...i):(!Si||!Si.includes(i,i.allowRecurse?Qi+1:Qi))&&Ss.push(i),Xh()}function Bc(i,t,e=$o?Ze+1:0){for(;e<Xt.length;e++){const s=Xt[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;Xt.splice(e,1),e--,s()}}}function Yh(i){if(Ss.length){const t=[...new Set(Ss)].sort((e,s)=>Co(e)-Co(s));if(Ss.length=0,Si){Si.push(...t);return}for(Si=t,Qi=0;Qi<Si.length;Qi++)Si[Qi]();Si=null,Qi=0}}const Co=i=>i.id==null?1/0:i.id,Og=(i,t)=>{const e=Co(i)-Co(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Jh(i){Wa=!1,$o=!0,Xt.sort(Og);try{for(Ze=0;Ze<Xt.length;Ze++){const t=Xt[Ze];t&&t.active!==!1&&Oi(t,null,14)}}finally{Ze=0,Xt.length=0,Yh(),$o=!1,Ol=null,(Xt.length||Ss.length)&&Jh()}}function Ag(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||kt;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:u,trim:b}=s[d]||kt;b&&(o=e.map(w=>Nt(w)?w.trim():w)),u&&(o=e.map(za))}let a,l=s[a=na(t)]||s[a=na(Es(t))];!l&&n&&(l=s[a=na(qs(t))]),l&&je(l,i,6,o);const c=s[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,je(c,i,6,o)}}function Qh(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!st(i)){const l=c=>{const d=Qh(c,t,!0);d&&(a=!0,Wt(r,d))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(Ot(i)&&s.set(i,null),null):(et(n)?n.forEach(l=>r[l]=null):Wt(r,n),Ot(i)&&s.set(i,r),r)}function nr(i,t){return!i||!tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ht(i,t[0].toLowerCase()+t.slice(1))||ht(i,qs(t))||ht(i,t))}let qt=null,rr=null;function zn(i){const t=qt;return qt=i,rr=i&&i.type.__scopeId||null,t}function Vg(i){rr=i}function Lg(){rr=null}function Zh(i,t=qt,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&Zc(-1);const n=zn(t);let r;try{r=i(...o)}finally{zn(n),s._d&&Zc(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function la(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:c,render:d,renderCache:u,data:b,setupState:w,ctx:C,inheritAttrs:k}=i;let D,N;const U=zn(i);try{if(e.shapeFlag&4){const nt=o||s,bt=nt;D=Qe(d.call(bt,nt,u,n,w,b,C)),N=l}else{const nt=t;D=Qe(nt.length>1?nt(n,{attrs:l,slots:a,emit:c}):nt(n,null)),N=t.props?l:Pg(l)}}catch(nt){mo.length=0,or(nt,i,1),D=ti(As)}let W=D;if(N&&k!==!1){const nt=Object.keys(N),{shapeFlag:bt}=W;nt.length&&bt&7&&(r&&nt.some(yl)&&(N=_g(N,r)),W=Vs(W,N))}return e.dirs&&(W=Vs(W),W.dirs=W.dirs?W.dirs.concat(e.dirs):e.dirs),e.transition&&(W.transition=e.transition),D=W,zn(U),D}const Pg=i=>{let t;for(const e in i)(e==="class"||e==="style"||tr(e))&&((t||(t={}))[e]=i[e]);return t},_g=(i,t)=>{const e={};for(const s in i)(!yl(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function Hg(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?jc(s,r,c):!!r;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const b=d[u];if(r[b]!==s[b]&&!nr(c,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?jc(s,r,c):!0:!!r;return!1}function jc(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!nr(e,n))return!0}return!1}function Mg({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const Ng=Symbol.for("v-ndc"),zg=i=>i.__isSuspense;function Bg(i,t){t&&t.pendingBranch?et(i)?t.effects.push(...i):t.effects.push(i):Eg(i)}const jg=Symbol.for("v-scx"),Ug=()=>In(jg);function qg(i,t){return Vl(i,null,t)}const an={};function ca(i,t,e){return Vl(i,t,e)}function Vl(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=kt){if(t&&n){const it=t;t=(...ce)=>{it(...ce),bt()}}const l=ie,c=it=>s===!0?it:Ki(it,s===!1?1:void 0);let d,u=!1,b=!1;if(pe(i)?(d=()=>i.value,u=Nn(i)):Fs(i)?(d=()=>c(i),u=!0):et(i)?(b=!0,u=i.some(it=>Fs(it)||Nn(it)),d=()=>i.map(it=>{if(pe(it))return it.value;if(Fs(it))return c(it);if(st(it))return Oi(it,l,2)})):st(i)?t?d=()=>Oi(i,l,2):d=()=>(w&&w(),je(i,l,3,[C])):d=Ie,t&&s){const it=d;d=()=>Ki(it())}let w,C=it=>{w=W.onStop=()=>{Oi(it,l,4),w=W.onStop=void 0}},k;if(dr)if(C=Ie,t?e&&je(t,l,3,[d(),b?[]:void 0,C]):d(),o==="sync"){const it=Ug();k=it.__watcherHandles||(it.__watcherHandles=[])}else return Ie;let D=b?new Array(i.length).fill(an):an;const N=()=>{if(!(!W.active||!W.dirty))if(t){const it=W.run();(s||u||(b?it.some((ce,de)=>Ai(ce,D[de])):Ai(it,D)))&&(w&&w(),je(t,l,3,[it,D===an?void 0:b&&D[0]===an?[]:D,C]),D=it)}else W.run()};N.allowRecurse=!!t;let U;o==="sync"?U=N:o==="post"?U=()=>ue(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),U=()=>Al(N));const W=new kl(d,Ie,U),nt=eg(),bt=()=>{W.stop(),nt&&xl(nt.effects,W)};return t?e?N():D=W.run():o==="post"?ue(W.run.bind(W),l&&l.suspense):W.run(),k&&k.push(bt),bt}function Wg(i,t,e){const s=this.proxy,o=Nt(i)?i.includes(".")?Kh(s,i):()=>s[i]:i.bind(s,s);let n;st(t)?n=t:(n=t.handler,e=t);const r=Lo(this),a=Vl(o,n.bind(s),e);return r(),a}function Kh(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function Ki(i,t,e=0,s){if(!Ot(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),pe(i))Ki(i.value,t,e,s);else if(et(i))for(let o=0;o<i.length;o++)Ki(i[o],t,e,s);else if($h(i)||ks(i))i.forEach(o=>{Ki(o,t,e,s)});else if(Fh(i))for(const o in i)Ki(i[o],t,e,s);return i}function da(i,t){if(qt===null)return i;const e=hr(qt)||qt.proxy,s=i.dirs||(i.dirs=[]);for(let o=0;o<t.length;o++){let[n,r,a,l=kt]=t[o];n&&(st(n)&&(n={mounted:n,updated:n}),n.deep&&Ki(r),s.push({dir:n,instance:e,value:r,oldValue:void 0,arg:a,modifiers:l}))}return i}function Wi(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(ls(),je(l,e,8,[i.el,a,i,t]),cs())}}/*! #__NO_SIDE_EFFECTS__ */function Ll(i,t){return st(i)?Wt({name:i.name},t,{setup:i}):i}const fo=i=>!!i.type.__asyncLoader,tu=i=>i.type.__isKeepAlive;function Gg(i,t){eu(i,"a",t)}function Xg(i,t){eu(i,"da",t)}function eu(i,t,e=ie){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(ar(t,s,e),e){let o=e.parent;for(;o&&o.parent;)tu(o.parent.vnode)&&Yg(s,t,e,o),o=o.parent}}function Yg(i,t,e,s){const o=ar(t,i,s,!0);su(()=>{xl(s[t],o)},e)}function ar(i,t,e=ie,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;ls();const a=Lo(e),l=je(t,e,i,r);return a(),cs(),l});return s?o.unshift(n):o.push(n),n}}const ui=i=>(t,e=ie)=>(!dr||i==="sp")&&ar(i,(...s)=>t(...s),e),Jg=ui("bm"),iu=ui("m"),Qg=ui("bu"),Zg=ui("u"),Kg=ui("bum"),su=ui("um"),tm=ui("sp"),em=ui("rtg"),im=ui("rtc");function sm(i,t=ie){ar("ec",i,t)}function ln(i,t,e,s){let o;const n=e&&e[s];if(et(i)||Nt(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(Ot(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const c=r[a];o[a]=t(i[c],c,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function ou(i,t,e={},s,o){if(qt.isCE||qt.parent&&fo(qt.parent)&&qt.parent.isCE)return t!=="default"&&(e.name=t),ti("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),Ne();const r=n&&nu(n(e)),a=Za(te,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function nu(i){return i.some(t=>mu(t)?!(t.type===As||t.type===te&&!nu(t.children)):!0)?i:null}const Ga=i=>i?vu(i)?hr(i)||i.proxy:Ga(i.parent):null,po=Wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ga(i.parent),$root:i=>Ga(i.root),$emit:i=>i.emit,$options:i=>Pl(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Al(i.update)}),$nextTick:i=>i.n||(i.n=Ig.bind(i.proxy)),$watch:i=>Wg.bind(i)}),ha=(i,t)=>i!==kt&&!i.__isScriptSetup&&ht(i,t),om={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(ha(s,t))return r[t]=1,s[t];if(o!==kt&&ht(o,t))return r[t]=2,o[t];if((c=i.propsOptions[0])&&ht(c,t))return r[t]=3,n[t];if(e!==kt&&ht(e,t))return r[t]=4,e[t];Xa&&(r[t]=0)}}const d=po[t];let u,b;if(d)return t==="$attrs"&&fe(i,"get",t),d(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==kt&&ht(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,ht(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return ha(o,t)?(o[t]=e,!0):s!==kt&&ht(s,t)?(s[t]=e,!0):ht(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==kt&&ht(i,r)||ha(t,r)||(a=n[0])&&ht(a,r)||ht(s,r)||ht(po,r)||ht(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:ht(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Uc(i){return et(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Xa=!0;function nm(i){const t=Pl(i),e=i.proxy,s=i.ctx;Xa=!1,t.beforeCreate&&qc(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:c,created:d,beforeMount:u,mounted:b,beforeUpdate:w,updated:C,activated:k,deactivated:D,beforeDestroy:N,beforeUnmount:U,destroyed:W,unmounted:nt,render:bt,renderTracked:it,renderTriggered:ce,errorCaptured:de,serverPrefetch:to,expose:ji,inheritAttrs:eo,components:Jo,directives:Qo,filters:ea}=t;if(c&&rm(c,s,null),r)for(const Rt in r){const xt=r[Rt];st(xt)&&(s[Rt]=xt.bind(e))}if(o){const Rt=o.call(e,e);Ot(Rt)&&(i.data=Rl(Rt))}if(Xa=!0,n)for(const Rt in n){const xt=n[Rt],Ui=st(xt)?xt.bind(e,e):st(xt.get)?xt.get.bind(e,e):Ie,Zo=!st(xt)&&st(xt.set)?xt.set.bind(e):Ie,qi=xu({get:Ui,set:Zo});Object.defineProperty(s,Rt,{enumerable:!0,configurable:!0,get:()=>qi.value,set:Ge=>qi.value=Ge})}if(a)for(const Rt in a)ru(a[Rt],s,e,Rt);if(l){const Rt=st(l)?l.call(e):l;Reflect.ownKeys(Rt).forEach(xt=>{um(xt,Rt[xt])})}d&&qc(d,i,"c");function Zt(Rt,xt){et(xt)?xt.forEach(Ui=>Rt(Ui.bind(e))):xt&&Rt(xt.bind(e))}if(Zt(Jg,u),Zt(iu,b),Zt(Qg,w),Zt(Zg,C),Zt(Gg,k),Zt(Xg,D),Zt(sm,de),Zt(im,it),Zt(em,ce),Zt(Kg,U),Zt(su,nt),Zt(tm,to),et(ji))if(ji.length){const Rt=i.exposed||(i.exposed={});ji.forEach(xt=>{Object.defineProperty(Rt,xt,{get:()=>e[xt],set:Ui=>e[xt]=Ui})})}else i.exposed||(i.exposed={});bt&&i.render===Ie&&(i.render=bt),eo!=null&&(i.inheritAttrs=eo),Jo&&(i.components=Jo),Qo&&(i.directives=Qo)}function rm(i,t,e=Ie){et(i)&&(i=Ya(i));for(const s in i){const o=i[s];let n;Ot(o)?"default"in o?n=In(o.from||s,o.default,!0):n=In(o.from||s):n=In(o),pe(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function qc(i,t,e){je(et(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function ru(i,t,e,s){const o=s.includes(".")?Kh(e,s):()=>e[s];if(Nt(i)){const n=t[i];st(n)&&ca(o,n)}else if(st(i))ca(o,i.bind(e));else if(Ot(i))if(et(i))i.forEach(n=>ru(n,t,e,s));else{const n=st(i.handler)?i.handler.bind(e):t[i.handler];st(n)&&ca(o,n,i)}}function Pl(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(c=>Bn(l,c,r,!0)),Bn(l,t,r)),Ot(t)&&n.set(t,l),l}function Bn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&Bn(i,n,e,!0),o&&o.forEach(r=>Bn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=am[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const am={data:Wc,props:Gc,emits:Gc,methods:ho,computed:ho,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:ho,directives:ho,watch:cm,provide:Wc,inject:lm};function Wc(i,t){return t?i?function(){return Wt(st(i)?i.call(this,this):i,st(t)?t.call(this,this):t)}:t:i}function lm(i,t){return ho(Ya(i),Ya(t))}function Ya(i){if(et(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Kt(i,t){return i?[...new Set([].concat(i,t))]:t}function ho(i,t){return i?Wt(Object.create(null),i,t):t}function Gc(i,t){return i?et(i)&&et(t)?[...new Set([...i,...t])]:Wt(Object.create(null),Uc(i),Uc(t??{})):t}function cm(i,t){if(!i)return t;if(!t)return i;const e=Wt(Object.create(null),i);for(const s in t)e[s]=Kt(i[s],t[s]);return e}function au(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dm=0;function hm(i,t){return function(s,o=null){st(s)||(s=Wt({},s)),o!=null&&!Ot(o)&&(o=null);const n=au(),r=new WeakSet;let a=!1;const l=n.app={_uid:dm++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:_m,get config(){return n.config},set config(c){},use(c,...d){return r.has(c)||(c&&st(c.install)?(r.add(c),c.install(l,...d)):st(c)&&(r.add(c),c(l,...d))),l},mixin(c){return n.mixins.includes(c)||n.mixins.push(c),l},component(c,d){return d?(n.components[c]=d,l):n.components[c]},directive(c,d){return d?(n.directives[c]=d,l):n.directives[c]},mount(c,d,u){if(!a){const b=ti(s,o);return b.appContext=n,u===!0?u="svg":u===!1&&(u=void 0),d&&t?t(b,c):i(b,c,u),a=!0,l._container=c,c.__vue_app__=l,hr(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,d){return n.provides[c]=d,l},runWithContext(c){const d=go;go=l;try{return c()}finally{go=d}}};return l}}let go=null;function um(i,t){if(ie){let e=ie.provides;const s=ie.parent&&ie.parent.provides;s===e&&(e=ie.provides=Object.create(s)),e[i]=t}}function In(i,t,e=!1){const s=ie||qt;if(s||go){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:go._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&st(t)?t.call(s&&s.proxy):t}}function fm(i,t,e,s=!1){const o={},n={};Mn(n,cr,1),i.propsDefaults=Object.create(null),lu(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:wg(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function pm(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ft(o),[l]=i.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=i.vnode.dynamicProps;for(let u=0;u<d.length;u++){let b=d[u];if(nr(i.emitsOptions,b))continue;const w=t[b];if(l)if(ht(n,b))w!==n[b]&&(n[b]=w,c=!0);else{const C=Es(b);o[C]=Ja(l,a,C,w,i,!1)}else w!==n[b]&&(n[b]=w,c=!0)}}}else{lu(i,t,o,n)&&(c=!0);let d;for(const u in a)(!t||!ht(t,u)&&((d=qs(u))===u||!ht(t,d)))&&(l?e&&(e[u]!==void 0||e[d]!==void 0)&&(o[u]=Ja(l,a,u,void 0,i,!0)):delete o[u]);if(n!==a)for(const u in n)(!t||!ht(t,u))&&(delete n[u],c=!0)}c&&li(i,"set","$attrs")}function lu(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(uo(l))continue;const c=t[l];let d;o&&ht(o,d=Es(l))?!n||!n.includes(d)?e[d]=c:(a||(a={}))[d]=c:nr(i.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(n){const l=ft(e),c=a||kt;for(let d=0;d<n.length;d++){const u=n[d];e[u]=Ja(o,l,u,c[u],i,!ht(c,u))}}return r}function Ja(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=ht(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&st(l)){const{propsDefaults:c}=o;if(e in c)s=c[e];else{const d=Lo(o);s=c[e]=l.call(null,t),d()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===qs(e))&&(s=!0))}return s}function cu(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!st(i)){const d=u=>{l=!0;const[b,w]=cu(u,t,!0);Wt(r,b),w&&a.push(...w)};!e&&t.mixins.length&&t.mixins.forEach(d),i.extends&&d(i.extends),i.mixins&&i.mixins.forEach(d)}if(!n&&!l)return Ot(i)&&s.set(i,Cs),Cs;if(et(n))for(let d=0;d<n.length;d++){const u=Es(n[d]);Xc(u)&&(r[u]=kt)}else if(n)for(const d in n){const u=Es(d);if(Xc(u)){const b=n[d],w=r[u]=et(b)||st(b)?{type:b}:Wt({},b);if(w){const C=Qc(Boolean,w.type),k=Qc(String,w.type);w[0]=C>-1,w[1]=k<0||C<k,(C>-1||ht(w,"default"))&&a.push(u)}}}const c=[r,a];return Ot(i)&&s.set(i,c),c}function Xc(i){return i[0]!=="$"&&!uo(i)}function Yc(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function Jc(i,t){return Yc(i)===Yc(t)}function Qc(i,t){return et(t)?t.findIndex(e=>Jc(e,i)):st(t)&&Jc(t,i)?0:-1}const du=i=>i[0]==="_"||i==="$stable",_l=i=>et(i)?i.map(Qe):[Qe(i)],gm=(i,t,e)=>{if(t._n)return t;const s=Zh((...o)=>_l(t(...o)),e);return s._c=!1,s},hu=(i,t,e)=>{const s=i._ctx;for(const o in i){if(du(o))continue;const n=i[o];if(st(n))t[o]=gm(o,n,s);else if(n!=null){const r=_l(n);t[o]=()=>r}}},uu=(i,t)=>{const e=_l(t);i.slots.default=()=>e},mm=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ft(t),Mn(t,"_",e)):hu(t,i.slots={})}else i.slots={},t&&uu(i,t);Mn(i.slots,cr,1)},bm=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=kt;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Wt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,hu(t,o)),r=t}else t&&(uu(i,t),r={default:1});if(n)for(const a in o)!du(a)&&r[a]==null&&delete o[a]};function Qa(i,t,e,s,o=!1){if(et(i)){i.forEach((b,w)=>Qa(b,t&&(et(t)?t[w]:t),e,s,o));return}if(fo(s)&&!o)return;const n=s.shapeFlag&4?hr(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,c=t&&t.r,d=a.refs===kt?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Nt(c)?(d[c]=null,ht(u,c)&&(u[c]=null)):pe(c)&&(c.value=null)),st(l))Oi(l,a,12,[r,d]);else{const b=Nt(l),w=pe(l);if(b||w){const C=()=>{if(i.f){const k=b?ht(u,l)?u[l]:d[l]:l.value;o?et(k)&&xl(k,n):et(k)?k.includes(n)||k.push(n):b?(d[l]=[n],ht(u,l)&&(u[l]=d[l])):(l.value=[n],i.k&&(d[i.k]=l.value))}else b?(d[l]=r,ht(u,l)&&(u[l]=r)):w&&(l.value=r,i.k&&(d[i.k]=r))};r?(C.id=-1,ue(C,e)):C()}}}const ue=Bg;function vm(i){return ym(i)}function ym(i,t){const e=Th();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:b,setScopeId:w=Ie,insertStaticContent:C}=i,k=(p,m,x,F=null,S=null,O=null,P=void 0,E=null,V=!!m.dynamicChildren)=>{if(p===m)return;p&&!so(p,m)&&(F=Ko(p),Ge(p,S,O,!0),p=null),m.patchFlag===-2&&(V=!1,m.dynamicChildren=null);const{type:I,ref:M,shapeFlag:G}=m;switch(I){case lr:D(p,m,x,F);break;case As:N(p,m,x,F);break;case Rn:p==null&&U(m,x,F,P);break;case te:Jo(p,m,x,F,S,O,P,E,V);break;default:G&1?bt(p,m,x,F,S,O,P,E,V):G&6?Qo(p,m,x,F,S,O,P,E,V):(G&64||G&128)&&I.process(p,m,x,F,S,O,P,E,V,bs)}M!=null&&S&&Qa(M,p&&p.ref,O,m||p,!m)},D=(p,m,x,F)=>{if(p==null)s(m.el=a(m.children),x,F);else{const S=m.el=p.el;m.children!==p.children&&c(S,m.children)}},N=(p,m,x,F)=>{p==null?s(m.el=l(m.children||""),x,F):m.el=p.el},U=(p,m,x,F)=>{[p.el,p.anchor]=C(p.children,m,x,F,p.el,p.anchor)},W=({el:p,anchor:m},x,F)=>{let S;for(;p&&p!==m;)S=b(p),s(p,x,F),p=S;s(m,x,F)},nt=({el:p,anchor:m})=>{let x;for(;p&&p!==m;)x=b(p),o(p),p=x;o(m)},bt=(p,m,x,F,S,O,P,E,V)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),p==null?it(m,x,F,S,O,P,E,V):to(p,m,S,O,P,E,V)},it=(p,m,x,F,S,O,P,E)=>{let V,I;const{props:M,shapeFlag:G,transition:q,dirs:tt}=p;if(V=p.el=r(p.type,O,M&&M.is,M),G&8?d(V,p.children):G&16&&de(p.children,V,null,F,S,ua(p,O),P,E),tt&&Wi(p,null,F,"created"),ce(V,p,p.scopeId,P,F),M){for(const vt in M)vt!=="value"&&!uo(vt)&&n(V,vt,null,M[vt],O,p.children,F,S,ni);"value"in M&&n(V,"value",null,M.value,O),(I=M.onVnodeBeforeMount)&&Ye(I,F,p)}tt&&Wi(p,null,F,"beforeMount");const ct=xm(S,q);ct&&q.beforeEnter(V),s(V,m,x),((I=M&&M.onVnodeMounted)||ct||tt)&&ue(()=>{I&&Ye(I,F,p),ct&&q.enter(V),tt&&Wi(p,null,F,"mounted")},S)},ce=(p,m,x,F,S)=>{if(x&&w(p,x),F)for(let O=0;O<F.length;O++)w(p,F[O]);if(S){let O=S.subTree;if(m===O){const P=S.vnode;ce(p,P,P.scopeId,P.slotScopeIds,S.parent)}}},de=(p,m,x,F,S,O,P,E,V=0)=>{for(let I=V;I<p.length;I++){const M=p[I]=E?Ii(p[I]):Qe(p[I]);k(null,M,m,x,F,S,O,P,E)}},to=(p,m,x,F,S,O,P)=>{const E=m.el=p.el;let{patchFlag:V,dynamicChildren:I,dirs:M}=m;V|=p.patchFlag&16;const G=p.props||kt,q=m.props||kt;let tt;if(x&&Gi(x,!1),(tt=q.onVnodeBeforeUpdate)&&Ye(tt,x,m,p),M&&Wi(m,p,x,"beforeUpdate"),x&&Gi(x,!0),I?ji(p.dynamicChildren,I,E,x,F,ua(m,S),O):P||xt(p,m,E,null,x,F,ua(m,S),O,!1),V>0){if(V&16)eo(E,m,G,q,x,F,S);else if(V&2&&G.class!==q.class&&n(E,"class",null,q.class,S),V&4&&n(E,"style",G.style,q.style,S),V&8){const ct=m.dynamicProps;for(let vt=0;vt<ct.length;vt++){const Tt=ct[vt],Bt=G[Tt],He=q[Tt];(He!==Bt||Tt==="value")&&n(E,Tt,Bt,He,S,p.children,x,F,ni)}}V&1&&p.children!==m.children&&d(E,m.children)}else!P&&I==null&&eo(E,m,G,q,x,F,S);((tt=q.onVnodeUpdated)||M)&&ue(()=>{tt&&Ye(tt,x,m,p),M&&Wi(m,p,x,"updated")},F)},ji=(p,m,x,F,S,O,P)=>{for(let E=0;E<m.length;E++){const V=p[E],I=m[E],M=V.el&&(V.type===te||!so(V,I)||V.shapeFlag&70)?u(V.el):x;k(V,I,M,null,F,S,O,P,!0)}},eo=(p,m,x,F,S,O,P)=>{if(x!==F){if(x!==kt)for(const E in x)!uo(E)&&!(E in F)&&n(p,E,x[E],null,P,m.children,S,O,ni);for(const E in F){if(uo(E))continue;const V=F[E],I=x[E];V!==I&&E!=="value"&&n(p,E,I,V,P,m.children,S,O,ni)}"value"in F&&n(p,"value",x.value,F.value,P)}},Jo=(p,m,x,F,S,O,P,E,V)=>{const I=m.el=p?p.el:a(""),M=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:q,slotScopeIds:tt}=m;tt&&(E=E?E.concat(tt):tt),p==null?(s(I,x,F),s(M,x,F),de(m.children||[],x,M,S,O,P,E,V)):G>0&&G&64&&q&&p.dynamicChildren?(ji(p.dynamicChildren,q,x,S,O,P,E),(m.key!=null||S&&m===S.subTree)&&fu(p,m,!0)):xt(p,m,x,M,S,O,P,E,V)},Qo=(p,m,x,F,S,O,P,E,V)=>{m.slotScopeIds=E,p==null?m.shapeFlag&512?S.ctx.activate(m,x,F,P,V):ea(m,x,F,S,O,P,V):Ic(p,m,V)},ea=(p,m,x,F,S,O,P)=>{const E=p.component=Em(p,F,S);if(tu(p)&&(E.ctx.renderer=bs),Om(E),E.asyncDep){if(S&&S.registerDep(E,Zt),!p.el){const V=E.subTree=ti(As);N(null,V,m,x)}}else Zt(E,p,m,x,S,O,P)},Ic=(p,m,x)=>{const F=m.component=p.component;if(Hg(p,m,x))if(F.asyncDep&&!F.asyncResolved){Rt(F,m,x);return}else F.next=m,Dg(F.update),F.effect.dirty=!0,F.update();else m.el=p.el,F.vnode=m},Zt=(p,m,x,F,S,O,P)=>{const E=()=>{if(p.isMounted){let{next:M,bu:G,u:q,parent:tt,vnode:ct}=p;{const vs=pu(p);if(vs){M&&(M.el=ct.el,Rt(p,M,P)),vs.asyncDep.then(()=>{p.isUnmounted||E()});return}}let vt=M,Tt;Gi(p,!1),M?(M.el=ct.el,Rt(p,M,P)):M=ct,G&&Sn(G),(Tt=M.props&&M.props.onVnodeBeforeUpdate)&&Ye(Tt,tt,M,ct),Gi(p,!0);const Bt=la(p),He=p.subTree;p.subTree=Bt,k(He,Bt,u(He.el),Ko(He),p,S,O),M.el=Bt.el,vt===null&&Mg(p,Bt.el),q&&ue(q,S),(Tt=M.props&&M.props.onVnodeUpdated)&&ue(()=>Ye(Tt,tt,M,ct),S)}else{let M;const{el:G,props:q}=m,{bm:tt,m:ct,parent:vt}=p,Tt=fo(m);if(Gi(p,!1),tt&&Sn(tt),!Tt&&(M=q&&q.onVnodeBeforeMount)&&Ye(M,vt,m),Gi(p,!0),G&&oa){const Bt=()=>{p.subTree=la(p),oa(G,p.subTree,p,S,null)};Tt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Bt()):Bt()}else{const Bt=p.subTree=la(p);k(null,Bt,x,F,p,S,O),m.el=Bt.el}if(ct&&ue(ct,S),!Tt&&(M=q&&q.onVnodeMounted)){const Bt=m;ue(()=>Ye(M,vt,Bt),S)}(m.shapeFlag&256||vt&&fo(vt.vnode)&&vt.vnode.shapeFlag&256)&&p.a&&ue(p.a,S),p.isMounted=!0,m=x=F=null}},V=p.effect=new kl(E,Ie,()=>Al(I),p.scope),I=p.update=()=>{V.dirty&&V.run()};I.id=p.uid,Gi(p,!0),I()},Rt=(p,m,x)=>{m.component=p;const F=p.vnode.props;p.vnode=m,p.next=null,pm(p,m.props,F,x),bm(p,m.children,x),ls(),Bc(p),cs()},xt=(p,m,x,F,S,O,P,E,V=!1)=>{const I=p&&p.children,M=p?p.shapeFlag:0,G=m.children,{patchFlag:q,shapeFlag:tt}=m;if(q>0){if(q&128){Zo(I,G,x,F,S,O,P,E,V);return}else if(q&256){Ui(I,G,x,F,S,O,P,E,V);return}}tt&8?(M&16&&ni(I,S,O),G!==I&&d(x,G)):M&16?tt&16?Zo(I,G,x,F,S,O,P,E,V):ni(I,S,O,!0):(M&8&&d(x,""),tt&16&&de(G,x,F,S,O,P,E,V))},Ui=(p,m,x,F,S,O,P,E,V)=>{p=p||Cs,m=m||Cs;const I=p.length,M=m.length,G=Math.min(I,M);let q;for(q=0;q<G;q++){const tt=m[q]=V?Ii(m[q]):Qe(m[q]);k(p[q],tt,x,null,S,O,P,E,V)}I>M?ni(p,S,O,!0,!1,G):de(m,x,F,S,O,P,E,V,G)},Zo=(p,m,x,F,S,O,P,E,V)=>{let I=0;const M=m.length;let G=p.length-1,q=M-1;for(;I<=G&&I<=q;){const tt=p[I],ct=m[I]=V?Ii(m[I]):Qe(m[I]);if(so(tt,ct))k(tt,ct,x,null,S,O,P,E,V);else break;I++}for(;I<=G&&I<=q;){const tt=p[G],ct=m[q]=V?Ii(m[q]):Qe(m[q]);if(so(tt,ct))k(tt,ct,x,null,S,O,P,E,V);else break;G--,q--}if(I>G){if(I<=q){const tt=q+1,ct=tt<M?m[tt].el:F;for(;I<=q;)k(null,m[I]=V?Ii(m[I]):Qe(m[I]),x,ct,S,O,P,E,V),I++}}else if(I>q)for(;I<=G;)Ge(p[I],S,O,!0),I++;else{const tt=I,ct=I,vt=new Map;for(I=ct;I<=q;I++){const ve=m[I]=V?Ii(m[I]):Qe(m[I]);ve.key!=null&&vt.set(ve.key,I)}let Tt,Bt=0;const He=q-ct+1;let vs=!1,Ec=0;const io=new Array(He);for(I=0;I<He;I++)io[I]=0;for(I=tt;I<=G;I++){const ve=p[I];if(Bt>=He){Ge(ve,S,O,!0);continue}let Xe;if(ve.key!=null)Xe=vt.get(ve.key);else for(Tt=ct;Tt<=q;Tt++)if(io[Tt-ct]===0&&so(ve,m[Tt])){Xe=Tt;break}Xe===void 0?Ge(ve,S,O,!0):(io[Xe-ct]=I+1,Xe>=Ec?Ec=Xe:vs=!0,k(ve,m[Xe],x,null,S,O,P,E,V),Bt++)}const Oc=vs?wm(io):Cs;for(Tt=Oc.length-1,I=He-1;I>=0;I--){const ve=ct+I,Xe=m[ve],Ac=ve+1<M?m[ve+1].el:F;io[I]===0?k(null,Xe,x,Ac,S,O,P,E,V):vs&&(Tt<0||I!==Oc[Tt]?qi(Xe,x,Ac,2):Tt--)}}},qi=(p,m,x,F,S=null)=>{const{el:O,type:P,transition:E,children:V,shapeFlag:I}=p;if(I&6){qi(p.component.subTree,m,x,F);return}if(I&128){p.suspense.move(m,x,F);return}if(I&64){P.move(p,m,x,bs);return}if(P===te){s(O,m,x);for(let G=0;G<V.length;G++)qi(V[G],m,x,F);s(p.anchor,m,x);return}if(P===Rn){W(p,m,x);return}if(F!==2&&I&1&&E)if(F===0)E.beforeEnter(O),s(O,m,x),ue(()=>E.enter(O),S);else{const{leave:G,delayLeave:q,afterLeave:tt}=E,ct=()=>s(O,m,x),vt=()=>{G(O,()=>{ct(),tt&&tt()})};q?q(O,ct,vt):vt()}else s(O,m,x)},Ge=(p,m,x,F=!1,S=!1)=>{const{type:O,props:P,ref:E,children:V,dynamicChildren:I,shapeFlag:M,patchFlag:G,dirs:q}=p;if(E!=null&&Qa(E,null,x,p,!0),M&256){m.ctx.deactivate(p);return}const tt=M&1&&q,ct=!fo(p);let vt;if(ct&&(vt=P&&P.onVnodeBeforeUnmount)&&Ye(vt,m,p),M&6)zp(p.component,x,F);else{if(M&128){p.suspense.unmount(x,F);return}tt&&Wi(p,null,m,"beforeUnmount"),M&64?p.type.remove(p,m,x,S,bs,F):I&&(O!==te||G>0&&G&64)?ni(I,m,x,!1,!0):(O===te&&G&384||!S&&M&16)&&ni(V,m,x),F&&Rc(p)}(ct&&(vt=P&&P.onVnodeUnmounted)||tt)&&ue(()=>{vt&&Ye(vt,m,p),tt&&Wi(p,null,m,"unmounted")},x)},Rc=p=>{const{type:m,el:x,anchor:F,transition:S}=p;if(m===te){Np(x,F);return}if(m===Rn){nt(p);return}const O=()=>{o(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(p.shapeFlag&1&&S&&!S.persisted){const{leave:P,delayLeave:E}=S,V=()=>P(x,O);E?E(p.el,O,V):V()}else O()},Np=(p,m)=>{let x;for(;p!==m;)x=b(p),o(p),p=x;o(m)},zp=(p,m,x)=>{const{bum:F,scope:S,update:O,subTree:P,um:E}=p;F&&Sn(F),S.stop(),O&&(O.active=!1,Ge(P,p,m,x)),E&&ue(E,m),ue(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ni=(p,m,x,F=!1,S=!1,O=0)=>{for(let P=O;P<p.length;P++)Ge(p[P],m,x,F,S)},Ko=p=>p.shapeFlag&6?Ko(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let ia=!1;const Dc=(p,m,x)=>{p==null?m._vnode&&Ge(m._vnode,null,null,!0):k(m._vnode||null,p,m,null,null,null,x),ia||(ia=!0,Bc(),Yh(),ia=!1),m._vnode=p},bs={p:k,um:Ge,m:qi,r:Rc,mt:ea,mc:de,pc:xt,pbc:ji,n:Ko,o:i};let sa,oa;return t&&([sa,oa]=t(bs)),{render:Dc,hydrate:sa,createApp:hm(Dc,sa)}}function ua({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function xm(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function fu(i,t,e=!1){const s=i.children,o=t.children;if(et(s)&&et(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=Ii(o[n]),a.el=r.el),e||fu(r,a)),a.type===lr&&(a.el=r.el)}}function wm(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const c=i[s];if(c!==0){if(o=e[e.length-1],i[o]<c){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<c?n=a+1:r=a;c<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function pu(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pu(t)}const $m=i=>i.__isTeleport,te=Symbol.for("v-fgt"),lr=Symbol.for("v-txt"),As=Symbol.for("v-cmt"),Rn=Symbol.for("v-stc"),mo=[];let Be=null;function Ne(i=!1){mo.push(Be=i?null:[])}function Cm(){mo.pop(),Be=mo[mo.length-1]||null}let ko=1;function Zc(i){ko+=i}function gu(i){return i.dynamicChildren=ko>0?Be||Cs:null,Cm(),ko>0&&Be&&Be.push(i),i}function Ti(i,t,e,s,o,n){return gu(Q(i,t,e,s,o,n,!0))}function Za(i,t,e,s,o){return gu(ti(i,t,e,s,o,!0))}function mu(i){return i?i.__v_isVNode===!0:!1}function so(i,t){return i.type===t.type&&i.key===t.key}const cr="__vInternal",bu=({key:i})=>i??null,Dn=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Nt(i)||pe(i)||st(i)?{i:qt,r:i,k:t,f:!!e}:i:null);function Q(i,t=null,e=null,s=0,o=null,n=i===te?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&bu(t),ref:t&&Dn(t),scopeId:rr,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:qt};return a?(Hl(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=Nt(e)?8:16),ko>0&&!r&&Be&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&Be.push(l),l}const ti=km;function km(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===Ng)&&(i=As),mu(i)){const a=Vs(i,t,!0);return e&&Hl(a,e),ko>0&&!n&&Be&&(a.shapeFlag&6?Be[Be.indexOf(i)]=a:Be.push(a)),a.patchFlag|=-2,a}if(Pm(i)&&(i=i.__vccOpts),t){t=Fm(t);let{class:a,style:l}=t;a&&!Nt(a)&&(t.class=Cl(a)),Ot(l)&&(Bh(l)&&!et(l)&&(l=Wt({},l)),t.style=$l(l))}const r=Nt(i)?1:zg(i)?128:$m(i)?64:Ot(i)?4:st(i)?2:0;return Q(i,t,e,s,o,r,n,!0)}function Fm(i){return i?Bh(i)||cr in i?Wt({},i):i:null}function Vs(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?Im(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&bu(a),ref:t&&t.ref?e&&o?et(o)?o.concat(Dn(t)):[o,Dn(t)]:Dn(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==te?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Vs(i.ssContent),ssFallback:i.ssFallback&&Vs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Sm(i=" ",t=0){return ti(lr,null,i,t)}function Tm(i,t){const e=ti(Rn,null,i);return e.staticCount=t,e}function Qe(i){return i==null||typeof i=="boolean"?ti(As):et(i)?ti(te,null,i.slice()):typeof i=="object"?Ii(i):ti(lr,null,String(i))}function Ii(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Vs(i)}function Hl(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(et(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Hl(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(cr in t)?t._ctx=qt:o===3&&qt&&(qt.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else st(t)?(t={default:t,_ctx:qt},e=32):(t=String(t),s&64?(e=16,t=[Sm(t)]):e=8);i.children=t,i.shapeFlag|=e}function Im(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Cl([t.class,s.class]));else if(o==="style")t.style=$l([t.style,s.style]);else if(tr(o)){const n=t[o],r=s[o];r&&n!==r&&!(et(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function Ye(i,t,e,s=null){je(i,t,7,[e,s])}const Rm=au();let Dm=0;function Em(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||Rm,n={uid:Dm++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cu(s,o),emitsOptions:Qh(s,o),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:s.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=Ag.bind(null,n),i.ce&&i.ce(n),n}let ie=null,jn,Ka;{const i=Th(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};jn=t("__VUE_INSTANCE_SETTERS__",e=>ie=e),Ka=t("__VUE_SSR_SETTERS__",e=>dr=e)}const Lo=i=>{const t=ie;return jn(i),i.scope.on(),()=>{i.scope.off(),jn(t)}},Kc=()=>{ie&&ie.scope.off(),jn(null)};function vu(i){return i.vnode.shapeFlag&4}let dr=!1;function Om(i,t=!1){t&&Ka(t);const{props:e,children:s}=i.vnode,o=vu(i);fm(i,e,o,t),mm(i,s);const n=o?Am(i,t):void 0;return t&&Ka(!1),n}function Am(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=jh(new Proxy(i.ctx,om));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?Lm(i):null,n=Lo(i);ls();const r=Oi(s,i,0,[i.props,o]);if(cs(),n(),Ch(r)){if(r.then(Kc,Kc),t)return r.then(a=>{td(i,a,t)}).catch(a=>{or(a,i,0)});i.asyncDep=r}else td(i,r,t)}else yu(i,t)}function td(i,t,e){st(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Ot(t)&&(i.setupState=Wh(t)),yu(i,e)}let ed;function yu(i,t,e){const s=i.type;if(!i.render){if(!t&&ed&&!s.render){const o=s.template||Pl(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Wt(Wt({isCustomElement:n,delimiters:a},r),l);s.render=ed(o,c)}}i.render=s.render||Ie}{const o=Lo(i);ls();try{nm(i)}finally{cs(),o()}}}function Vm(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return fe(i,"get","$attrs"),t[e]}}))}function Lm(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return Vm(i)},slots:i.slots,emit:i.emit,expose:t}}function hr(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Wh(jh(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in po)return po[e](i)},has(t,e){return e in t||e in po}}))}function Pm(i){return st(i)&&"__vccOpts"in i}const xu=(i,t)=>$g(i,t,dr),_m="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Hm="http://www.w3.org/2000/svg",Mm="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,id=Ri&&Ri.createElement("template"),Nm={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?Ri.createElementNS(Hm,i):t==="mathml"?Ri.createElementNS(Mm,i):Ri.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>Ri.createTextNode(i),createComment:i=>Ri.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ri.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{id.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=id.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},zm=Symbol("_vtc");function Bm(i,t,e){const s=i[zm];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const sd=Symbol("_vod"),jm=Symbol("_vsh"),Um=Symbol(""),qm=/(^|;)\s*display\s*:/;function Wm(i,t,e){const s=i.style,o=Nt(e);let n=!1;if(e&&!o){if(t)if(Nt(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&En(s,a,"")}else for(const r in t)e[r]==null&&En(s,r,"");for(const r in e)r==="display"&&(n=!0),En(s,r,e[r])}else if(o){if(t!==e){const r=s[Um];r&&(e+=";"+r),s.cssText=e,n=qm.test(e)}}else t&&i.removeAttribute("style");sd in i&&(i[sd]=n?s.display:"",i[jm]&&(s.display="none"))}const od=/\s*!important$/;function En(i,t,e){if(et(e))e.forEach(s=>En(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=Gm(i,t);od.test(e)?i.setProperty(qs(s),e.replace(od,""),"important"):i[s]=e}}const nd=["Webkit","Moz","ms"],fa={};function Gm(i,t){const e=fa[t];if(e)return e;let s=Es(t);if(s!=="filter"&&s in i)return fa[t]=s;s=Sh(s);for(let o=0;o<nd.length;o++){const n=nd[o]+s;if(n in i)return fa[t]=n}return t}const rd="http://www.w3.org/1999/xlink";function Xm(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(rd,t.slice(6,t.length)):i.setAttributeNS(rd,t,e);else{const n=Zp(t);e==null||n&&!Ih(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Ym(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,d=e??"";(c!==d||!("_value"in i))&&(i.value=d),e==null&&i.removeAttribute(t),i._value=e;return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=Ih(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function xs(i,t,e,s){i.addEventListener(t,e,s)}function Jm(i,t,e,s){i.removeEventListener(t,e,s)}const ad=Symbol("_vei");function Qm(i,t,e,s,o=null){const n=i[ad]||(i[ad]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=Zm(t);if(s){const c=n[t]=eb(s,o);xs(i,a,c,l)}else r&&(Jm(i,a,r,l),n[t]=void 0)}}const ld=/(?:Once|Passive|Capture)$/;function Zm(i){let t;if(ld.test(i)){t={};let s;for(;s=i.match(ld);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):qs(i.slice(2)),t]}let pa=0;const Km=Promise.resolve(),tb=()=>pa||(Km.then(()=>pa=0),pa=Date.now());function eb(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;je(ib(s,e.value),t,5,[s])};return e.value=i,e.attached=tb(),e}function ib(i,t){if(et(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const cd=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,sb=(i,t,e,s,o,n,r,a,l)=>{const c=o==="svg";t==="class"?Bm(i,s,c):t==="style"?Wm(i,e,s):tr(t)?yl(t)||Qm(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ob(i,t,s,c))?Ym(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Xm(i,t,s,c))};function ob(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&cd(t)&&st(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return cd(t)&&Nt(e)?!1:t in i}const dd=i=>{const t=i.props["onUpdate:modelValue"]||!1;return et(t)?e=>Sn(t,e):t};function nb(i){i.target.composing=!0}function hd(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ga=Symbol("_assign"),ma={created(i,{modifiers:{lazy:t,trim:e,number:s}},o){i[ga]=dd(o);const n=s||o.props&&o.props.type==="number";xs(i,t?"change":"input",r=>{if(r.target.composing)return;let a=i.value;e&&(a=a.trim()),n&&(a=za(a)),i[ga](a)}),e&&xs(i,"change",()=>{i.value=i.value.trim()}),t||(xs(i,"compositionstart",nb),xs(i,"compositionend",hd),xs(i,"change",hd))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,modifiers:{lazy:e,trim:s,number:o}},n){if(i[ga]=dd(n),i.composing)return;const r=o||i.type==="number"?za(i.value):i.value,a=t??"";r!==a&&(document.activeElement===i&&i.type!=="range"&&(e||s&&i.value.trim()===a)||(i.value=a))}},rb=Wt({patchProp:sb},Nm);let ud;function ab(){return ud||(ud=vm(rb))}const lb=(...i)=>{const t=ab().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=db(s);if(!o)return;const n=t._component;!st(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,cb(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function cb(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function db(i){return Nt(i)?document.querySelector(i):i}const hb="/assets/Logo-BgdiXH0i.jpg",di=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();di.trustedTypes===void 0&&(di.trustedTypes={createPolicy:(i,t)=>t});const wu={configurable:!1,enumerable:!1,writable:!1};di.FAST===void 0&&Reflect.defineProperty(di,"FAST",Object.assign({value:Object.create(null)},wu));const Fo=di.FAST;if(Fo.getById===void 0){const i=Object.create(null);Reflect.defineProperty(Fo,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},wu))}const is=Object.freeze([]);function $u(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const ba=di.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,c=i.length-a;l<c;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&di.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),Cu=di.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let va=Cu;const bo=`fast-${Math.random().toString(36).substring(2,8)}`,ku=`${bo}{`,Ml=`}${bo}`,J=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(va!==Cu)throw new Error("The HTML policy can only be set once.");va=i},createHTML(i){return va.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(bo)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${bo}:`,""))},createInterpolationPlaceholder(i){return`${ku}${i}${Ml}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${bo}:${i}-->`},queueUpdate:ba.enqueue,processUpdates:ba.process,nextUpdate(){return new Promise(ba.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class Un{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class Fu{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new Un(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Un(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const Y=Fo.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=J.queueUpdate;let s,o=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(c){let d=c.$fastController||t.get(c);return d===void 0&&(Array.isArray(c)?d=o(c):t.set(c,d=new Fu(c))),d}const r=$u();class a{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,u){const b=this.field,w=d[b];if(w!==u){d[b]=u;const C=d[this.callback];typeof C=="function"&&C.call(d,w,u),n(d).notify(this.name)}}}class l extends Un{constructor(d,u,b=!1){super(d,u),this.binding=d,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,u){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(d,u);return s=b,w}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,u){const b=this.last,w=n(d),C=b===null?this.first:{};if(C.propertySource=d,C.propertyName=u,C.notifier=w,w.subscribe(this,u),b!==null){if(!this.needsRefresh){let k;s=void 0,k=b.propertySource[b.propertyName],s=this,d===k&&(this.needsRefresh=!0)}b.next=C}this.last=C}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const u=d;return u===void 0?{value:void 0,done:!0}:(d=d.next,{value:u,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){o=c},getNotifier:n,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){n(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new a(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(u){d.setValue(this,u)}})},getAccessors:r,binding(c,d,u=this.isVolatileBinding(c)){return new l(c,d,u)},isVolatileBinding(c){return i.test(c.toString())}})});function y(i,t){Y.defineProperty(i,t)}function ub(i,t,e){return Object.assign({},e,{get:function(){return Y.trackVolatile(),e.get.apply(this)}})}const fd=Fo.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class So{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return fd.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){fd.set(t)}}Y.defineProperty(So.prototype,"index");Y.defineProperty(So.prototype,"length");const vo=Object.seal(new So);class ur{constructor(){this.targetIndex=0}}class Su extends ur{constructor(){super(...arguments),this.createPlaceholder=J.createInterpolationPlaceholder}}class Nl extends ur{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return J.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function fb(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=Y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function pb(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function gb(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function mb(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function bb(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function vb(i){J.setAttribute(this.target,this.targetName,i)}function yb(i){J.setBooleanAttribute(this.target,this.targetName,i)}function xb(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function wb(i){this.target[this.targetName]=i}function $b(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class zl extends Su{constructor(t){super(),this.binding=t,this.bind=fb,this.unbind=gb,this.updateTarget=vb,this.isBindingVolatile=Y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=wb,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>J.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=yb;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=pb,this.unbind=bb;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=$b);break}}targetAtContent(){this.updateTarget=xb,this.unbind=mb}createBehavior(t){return new Cb(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Cb{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){So.setEvent(t);const e=this.binding(this.source,this.context);So.setEvent(null),e!==!0&&t.preventDefault()}}let ya=null;class Bl{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ya=this}static borrow(t){const e=ya||new Bl;return e.directives=t,e.reset(),ya=null,e}}function kb(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let c=0;c<e;++c)l+=s[c](r,a);return l},n=new zl(o);return n.targetName=t,n}const Fb=Ml.length;function Tu(i,t){const e=t.split(ku);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(Ml);let l;if(a===-1)l=r;else{const c=parseInt(r.substring(0,a));s.push(i.directives[c]),l=r.substring(a+Fb)}l!==""&&s.push(l)}return s}function pd(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Tu(i,a);let c=null;l===null?e&&(c=new zl(()=>a),c.targetName=r.name):c=kb(l),c!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(c))}}function Sb(i,t,e){const s=Tu(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function Tb(i,t){const e=i.content;document.adoptNode(e);const s=Bl.borrow(t);pd(s,i,!0);const o=s.behaviorFactories;s.reset();const n=J.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:pd(s,r);break;case 3:Sb(s,r,n);break;case 8:J.isMarker(r)&&s.addFactory(t[J.extractDirectiveIndexFromMarker(r)])}let a=0;(J.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const xa=document.createRange();class Iu{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){xa.setStartBefore(t[0].firstChild),xa.setEndAfter(t[t.length-1].lastChild),xa.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class gd{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=J.createHTML(d);const b=c.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(c=b)}else c=d;const u=Tb(c,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=J.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let c=s.length;r<c;++r){const d=s[r],u=d.targetIndex;for(;l!==null;)if(a===u){o[r]=d.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,u=c.length;d<u;++d,++r)o[r]=c[d].createBehavior(t)}return new Iu(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,vo),o.appendTo(e),o}}const Ib=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function R(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof gd){const l=a;a=()=>l}if(typeof a=="function"&&(a=new zl(a)),a instanceof Su){const l=Ib.exec(r);l!==null&&(a.targetName=l[2])}a instanceof ur?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new gd(s,e)}class ne{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}ne.create=(()=>{if(J.supportsAdoptedStyleSheets){const i=new Map;return t=>new Rb(t,i)}return i=>new Ob(i)})();function jl(i){return i.map(t=>t instanceof ne?jl(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Ru(i){return i.map(t=>t instanceof ne?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let Du=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Eu=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(J.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Du=(i,t)=>{i.adoptedStyleSheets.push(...t)},Eu=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class Rb extends ne{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Ru(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=jl(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){Du(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Eu(t,this.styleSheets),super.removeStylesFrom(t)}}let Db=0;function Eb(){return`fast-style-class-${++Db}`}class Ob extends ne{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Ru(t),this.styleSheets=jl(t),this.styleClass=Eb()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const qn=Object.freeze({locate:$u()}),Po={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},H={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Wn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=Po)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return Y.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||J.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;J.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":J.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(qn.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const c=r[a];typeof c=="string"?s.push(new Wn(t,c)):s.push(new Wn(t,c.property,c.attribute,c.mode,c.converter))}}return s}}function f(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),qn.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const md={mode:"open"},bd={},tl=Fo.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class fr{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=Wn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const c=s[a];o[a]=c.attribute,n[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?md:e.shadowOptions===null?void 0:Object.assign(Object.assign({},md),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?bd:Object.assign(Object.assign({},bd),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?ne.create(e.styles):e.styles instanceof ne?e.styles:ne.create([e.styles])}get isDefined(){return!!tl.getByType(this.type)}define(t=customElements){const e=this.type;if(tl.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)Y.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}fr.forType=tl.getByType;const Ou=new WeakMap,Ab={bubbles:!0,composed:!0,cancelable:!0};function wa(i){return i.shadowRoot||Ou.get(i)||null}class Ul extends Fu{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Ou.set(t,n)}const o=Y.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,c=t[l];c!==void 0&&(delete t[l],n[l]=c)}}}get isConnected(){return Y.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,Y.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=wa(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=wa(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,vo)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,vo);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,vo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},Ab),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=wa(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||J.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=fr.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new Ul(t,s)}}function vd(i){return class extends i{constructor(){super(),Ul.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const pr=Object.assign(vd(HTMLElement),{from(i){return vd(i)},define(i,t){return new fr(i,t).define().type}});class ql{createCSS(){return""}createBehavior(){}}function Au(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof ql){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof ne||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function T(i,...t){const{styles:e,behaviors:s}=Au(i,t),o=ne.create(e);return s.length&&o.withBehaviors(...s),o}class Vb extends ql{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=ne.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function xe(i,...t){const{styles:e,behaviors:s}=Au(i,t);return new Vb(e,s)}function ze(i,t,e){return{index:i,removed:t,addedCount:e}}const Vu=0,Lu=1,el=2,il=3;function Lb(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let c,d;for(let u=0;u<r;++u)l[u]=new Array(a),l[u][0]=u;for(let u=0;u<a;++u)l[0][u]=u;for(let u=1;u<r;++u)for(let b=1;b<a;++b)i[t+b-1]===s[o+u-1]?l[u][b]=l[u-1][b-1]:(c=l[u-1][b]+1,d=l[u][b-1]+1,l[u][b]=c<d?c:d);return l}function Pb(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(el),e--;continue}if(e===0){o.push(il),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(Vu):(o.push(Lu),s=n),t--,e--):l===r?(o.push(il),t--,s=r):(o.push(el),e--,s=a)}return o.reverse(),o}function _b(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function Hb(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function Mb(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function Pu(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=_b(i,s,l)),e===i.length&&n===s.length&&(a=Hb(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return is;if(t===e){const C=ze(t,[],0);for(;o<n;)C.removed.push(s[o++]);return[C]}else if(o===n)return[ze(t,[],e-t)];const c=Pb(Lb(i,t,e,s,o,n)),d=[];let u,b=t,w=o;for(let C=0;C<c.length;++C)switch(c[C]){case Vu:u!==void 0&&(d.push(u),u=void 0),b++,w++;break;case Lu:u===void 0&&(u=ze(b,[],0)),u.addedCount++,b++,u.removed.push(s[w]),w++;break;case el:u===void 0&&(u=ze(b,[],0)),u.addedCount++,b++;break;case il:u===void 0&&(u=ze(b,[],0)),u.removed.push(s[w]),w++;break}return u!==void 0&&d.push(u),d}const yd=Array.prototype.push;function Nb(i,t,e,s){const o=ze(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const c=Mb(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(c>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-c;const d=o.removed.length+l.removed.length-c;if(!o.addedCount&&!d)n=!0;else{let u=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);yd.apply(b,u),u=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);yd.apply(u,b)}o.removed=u,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const d=o.addedCount-o.removed.length;l.index+=d,r+=d}}n||i.push(o)}function zb(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];Nb(t,o.index,o.removed,o.addedCount)}return t}function Bb(i,t){let e=[];const s=zb(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(Pu(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let xd=!1;function $a(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class jb extends Un{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,J.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,J.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?Bb(this.source,t):Pu(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function Ub(){if(xd)return;xd=!0,Y.setArrayObserverFactory(l=>new jb(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,c=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ze(this.length,[c],0)),c},i.push=function(){const l=e.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice($a(ze(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.shift=function(){const l=this.length>0,c=o.apply(this,arguments),d=this.$fastController;return d!==void 0&&l&&d.addSplice(ze(0,[c],0)),c},i.sort=function(){let l;const c=this.$fastController;c!==void 0&&(c.flush(),l=this.slice());const d=n.apply(this,arguments);return c!==void 0&&c.reset(l),d},i.splice=function(){const l=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice($a(ze(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice($a(ze(0,[],arguments.length),this)),l}}class qb{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function ut(i){return new Nl("fast-ref",qb,i)}const _u=i=>typeof i=="function",Wb=()=>null;function wd(i){return i===void 0?Wb:_u(i)?i:()=>i}function Et(i,t,e){const s=_u(i)?i:()=>i,o=wd(t),n=wd(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const $d=Object.freeze({positioning:!1,recycle:!0});function Gb(i,t,e,s){i.bind(t[e],s)}function Xb(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class Yb{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Gb,this.itemsBindingObserver=Y.binding(e,this,s),this.templateBindingObserver=Y.binding(o,this,n),r.positioning&&(this.bindView=Xb)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=is;return}const e=this.itemsObserver,s=this.itemsObserver=Y.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let c=0,d=0;for(let u=0,b=t.length;u<b;++u){const w=t[u],C=w.removed;let k=0,D=w.index;const N=D+w.addedCount,U=s.splice(w.index,C.length),W=d=l.length+U.length;for(;D<N;++D){const nt=s[D],bt=nt?nt.firstChild:this.location;let it;a&&d>0?(k<=W&&U.length>0?(it=U[k],k++):(it=l[c],c++),d--):it=r.create(),s.splice(D,0,it),o(it,n,D,e),it.insertBefore(bt)}U[k]&&l.push(...U.slice(k))}for(let u=c,b=l.length;u<b;++u)l[u].dispose();if(this.options.positioning)for(let u=0,b=s.length;u<b;++u){const w=s[u].context;w.length=b,w.index=u}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,c=l.length;if((a===0||t||!this.options.recycle)&&(Iu.disposeContiguousBatch(l),c=0),c===0){this.views=l=new Array(a);for(let d=0;d<a;++d){const u=o.create();r(u,e,d,s),l[d]=u,u.insertBefore(n)}}else{let d=0;for(;d<a;++d)if(d<c){const b=l[d];r(b,e,d,s)}else{const b=o.create();r(b,e,d,s),l.push(b),b.insertBefore(n)}const u=l.splice(d,c-d);for(d=0,a=u.length;d<a;++d)u[d].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class Wl extends ur{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=J.createBlockPlaceholder,Ub(),this.isItemsBindingVolatile=Y.isVolatileBinding(t),this.isTemplateBindingVolatile=Y.isVolatileBinding(e)}createBehavior(t){return new Yb(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Ts(i,t,e=$d){const s=typeof t=="function"?t:()=>t;return new Wl(i,s,Object.assign(Object.assign({},$d),e))}function hi(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class Hu{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=Y.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(is),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Jb extends Hu{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ft(i){return typeof i=="string"&&(i={property:i}),new Nl("fast-slotted",Jb,i)}class Qb extends Hu{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function gr(i){return typeof i=="string"&&(i={property:i}),new Nl("fast-children",Qb,i)}class ge{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const re=(i,t)=>R`
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
`,Zb=R`
    <span part="end" ${ut("endContainer")}>
        <slot
            name="end"
            ${ut("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,Kb=R`
    <span part="start" ${ut("startContainer")}>
        <slot
            name="start"
            ${ut("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,tv=(i,t)=>R`
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
***************************************************************************** */function h(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const Ca=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=Ca.get(e);s===void 0&&Ca.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=Ca.get(t);if(e!==void 0)return e.get(i)});class ev{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Nu(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new Se(o,t,e))}}function oo(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],zu(o)||(t[o]=i[o]);return t}const iv=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new Se(i,1,i)},transient(i){return new Se(i,2,i)}}),ka=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:iv.singleton})}),Cd=new Map;function kd(i){return t=>Reflect.getOwnMetadata(i,t)}let Fd=null;const Dt=Object.freeze({createContainer(i){return new yo(null,Object.assign({},ka.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:Dt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Mu,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||Dt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new yo(i,Object.assign({},ka.default,t,{parentLocator:Dt.findParentContainer})):Fd||(Fd=new yo(null,Object.assign({},ka.default,t,{parentLocator:()=>null})))},getDesignParamtypes:kd("design:paramtypes"),getAnnotationParamtypes:kd("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Cd.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=Dt.getDesignParamtypes(i),o=Dt.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=oo(Dt.getDependencies(n)):t=[]}else t=oo(o);else if(o===void 0)t=oo(s);else{t=oo(s);let n=o.length,r;for(let c=0;c<n;++c)r=o[c],r!==void 0&&(t[c]=r);const a=Object.keys(o);n=a.length;let l;for(let c=0;c<n;++c)l=a[c],zu(l)||(t[l]=o[l])}}else t=oo(e);Cd.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?Dt.findResponsibleContainer(this):Dt.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof pr)){const a=this.$fastController,l=()=>{const d=Dt.findResponsibleContainer(this).get(e),u=this[o];d!==u&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||Rd,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)Dt.defineProperty(r,a,n,o);else{const c=Dt.getOrCreateAnnotationParamTypes(r);c[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new ev(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=Dt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)Dt.defineProperty(t,e,i[0]);else{const o=s?Dt.getOrCreateAnnotationParamTypes(s.value):Dt.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return To.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=ov){return i.register=function(s){return To.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),sv=Dt.createInterface("Container");Dt.inject;const ov={scoped:!1};class Se{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Sd(i){return this.get(i)}function nv(i,t){return t(i)}class rv{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Sd,t)):s=new this.Type(...this.dependencies.map(Sd,t),...e),this.transformers==null?s:this.transformers.reduce(nv,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const av={$isResolver:!0,resolve(i,t){return t}};function On(i){return typeof i.register=="function"}function lv(i){return On(i)&&typeof i.registerInRequestor=="boolean"}function Td(i){return lv(i)&&i.registerInRequestor}function cv(i){return i.prototype!==void 0}const dv=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Mu="__DI_LOCATE_PARENT__",Fa=new Map;class yo{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(sv,av),t instanceof Node&&t.addEventListener(Mu,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,c=t.length;l<c;++l)if(e=t[l],!!Dd(e))if(On(e))e.register(this,a);else if(cv(e))To.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Dd(o)&&(On(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){cn(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof Se&&o.strategy===4?o.state.push(e):s.set(t,new Se(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(cn(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=Td(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(cn(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=Td(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){cn(t);const s=this;let o=s,n;if(e){let r=is;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(Id(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return is}else return Id(n,o,s);return is}getFactory(t){let e=Fa.get(t);if(e===void 0){if(hv(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Fa.set(t,e=new rv(t,Dt.getDependencies(t)))}return e}registerFactory(t,e){Fa.set(t,e)}createChild(t){return new yo(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(dv.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(On(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const Sa=new WeakMap;function Nu(i){return function(t,e,s){if(Sa.has(s))return Sa.get(s);const o=i(t,e,s);return Sa.set(s,o),o}}const To=Object.freeze({instance(i,t){return new Se(i,0,t)},singleton(i,t){return new Se(i,1,t)},transient(i,t){return new Se(i,2,t)},callback(i,t){return new Se(i,3,t)},cachedCallback(i,t){return new Se(i,3,Nu(t))},aliasTo(i,t){return new Se(t,5,i)}});function cn(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Id(i,t,e){if(i instanceof Se&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const Rd="(anonymous)";function Dd(i){return typeof i=="object"&&i!==null||typeof i=="function"}const hv=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),dn={};function zu(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=dn[i];if(t!==void 0)return t;const e=i.length;if(e===0)return dn[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return dn[i]=!1;return dn[i]=!0}default:return!1}}function Ed(i){return`${i.toLowerCase()}:presentation`}const hn=new Map,Bu=Object.freeze({define(i,t,e){const s=Ed(i);hn.get(s)===void 0?hn.set(s,t):hn.set(s,!1),e.register(To.instance(s,t))},forTag(i,t){const e=Ed(i),s=hn.get(e);return s===!1?Dt.findResponsibleContainer(t).get(e):s||null}});class uv{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?ne.create(e):e instanceof ne?e:ne.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class Z extends pr{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Bu.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new fv(this===Z?class extends Z{}:this,t,e)}}h([y],Z.prototype,"template",void 0);h([y],Z.prototype,"styles",void 0);function no(i,t,e){return typeof i=="function"?i(t,e):i}class fv{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new uv(no(s.template,a,s),no(s.styles,a,s));a.definePresentation(l);let c=no(s.shadowOptions,a,s);a.shadowRootMode&&(c?o.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:no(s.elementOptions,a,s),shadowOptions:c,attributes:no(s.attributes,a,s)})}})}}function St(i,...t){const e=qn.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),qn.locate(s).forEach(n=>e.push(n))})}class os extends Z{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}h([f({attribute:"heading-level",mode:"fromView",converter:H})],os.prototype,"headinglevel",void 0);h([f({mode:"boolean"})],os.prototype,"expanded",void 0);h([f],os.prototype,"id",void 0);St(os,ge);const pv=(i,t)=>R`
    <template>
        <slot ${Ft({property:"accordionItems",filter:hi()})}></slot>
        <slot name="item" part="item" ${Ft("accordionItems")}></slot>
    </template>
`,Vt={horizontal:"horizontal",vertical:"vertical"};function gv(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function mv(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Ls(...i){return i.every(t=>t instanceof HTMLElement)}function bv(i,t){return!i||!t||!Ls(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function vv(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let Xi;function yv(){if(typeof Xi=="boolean")return Xi;if(!mv())return Xi=!1,Xi;const i=document.createElement("style"),t=vv();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),Xi=!0}catch{Xi=!1}finally{document.head.removeChild(i)}return Xi}const Od="focus",Ad="focusin",Ps="focusout",_s="keydown",Vd="resize",Ld="scroll";var Pd;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Pd||(Pd={}));const Oe="ArrowDown",Vi="ArrowLeft",Li="ArrowRight",Ae="ArrowUp",fi="Enter",Ws="Escape",ei="Home",ii="End",xv="F2",wv="PageDown",$v="PageUp",ds=" ",mr="Tab",ws={ArrowDown:Oe,ArrowLeft:Vi,ArrowRight:Li,ArrowUp:Ae};var wt;(function(i){i.ltr="ltr",i.rtl="rtl"})(wt||(wt={}));function Cv(i,t,e){return e<i?t:e>t?i:e}function br(i,t,e){return Math.min(Math.max(e,i),t)}function un(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let kv=0;function Io(i=""){return`${i}${kv++}`}var g;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(g||(g={}));const _d={single:"single",multi:"multi"};class Gl extends Z{constructor(){super(...arguments),this.expandmode=_d.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof os&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case Ae:t.preventDefault(),this.adjust(-1);break;case Oe:t.preventDefault(),this.adjust(1);break;case ei:this.activeItemIndex=0,this.focusItem();break;case ii:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===_d.single}adjust(t){this.activeItemIndex=Cv(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof os&&t.expandbutton.focus()}}h([f({attribute:"expand-mode"})],Gl.prototype,"expandmode",void 0);h([y],Gl.prototype,"accordionItems",void 0);const ju=(i,t)=>R`
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
            <slot ${Ft("defaultSlottedContent")}></slot>
        </span>
        ${re(i,t)}
    </a>
`;class $t{}h([f({attribute:"aria-atomic"})],$t.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],$t.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],$t.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],$t.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],$t.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],$t.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],$t.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],$t.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],$t.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],$t.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],$t.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],$t.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],$t.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],$t.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],$t.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],$t.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],$t.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],$t.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],$t.prototype,"ariaRoledescription",void 0);let we=class extends Z{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};h([f],we.prototype,"download",void 0);h([f],we.prototype,"href",void 0);h([f],we.prototype,"hreflang",void 0);h([f],we.prototype,"ping",void 0);h([f],we.prototype,"referrerpolicy",void 0);h([f],we.prototype,"rel",void 0);h([f],we.prototype,"target",void 0);h([f],we.prototype,"type",void 0);h([y],we.prototype,"defaultSlottedContent",void 0);class vr{}h([f({attribute:"aria-expanded"})],vr.prototype,"ariaExpanded",void 0);St(vr,$t);St(we,ge,vr);const Fv=(i,t)=>R`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${Et(e=>e.initialLayoutComplete,R`
                <slot></slot>
            `)}
    </template>
`,ns=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?wt.rtl:wt.ltr};class Sv{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{di.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class X extends Z{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=wt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(X.intersectionService.requestPosition(this,this.handleIntersection),X.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&X.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,X.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&X.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&X.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=ns(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const w=ns(this);if(w!==this.currentDirection){this.currentDirection=w,this.initialize();return}this.currentDirection===wt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,c=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,c,d,u)<r)&&(e=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,c=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,c,d,u)<r)&&(t=this.getAvailableSpace(n[0],a,l,c,d,u)>this.getAvailableSpace(n[1],a,l,c,d,u)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Vd,this.update,{passive:!0}),window.addEventListener(Ld,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Vd,this.update),window.removeEventListener(Ld,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),J.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}X.intersectionService=new Sv;h([f],X.prototype,"anchor",void 0);h([f],X.prototype,"viewport",void 0);h([f({attribute:"horizontal-positioning-mode"})],X.prototype,"horizontalPositioningMode",void 0);h([f({attribute:"horizontal-default-position"})],X.prototype,"horizontalDefaultPosition",void 0);h([f({attribute:"horizontal-viewport-lock",mode:"boolean"})],X.prototype,"horizontalViewportLock",void 0);h([f({attribute:"horizontal-inset",mode:"boolean"})],X.prototype,"horizontalInset",void 0);h([f({attribute:"horizontal-threshold"})],X.prototype,"horizontalThreshold",void 0);h([f({attribute:"horizontal-scaling"})],X.prototype,"horizontalScaling",void 0);h([f({attribute:"vertical-positioning-mode"})],X.prototype,"verticalPositioningMode",void 0);h([f({attribute:"vertical-default-position"})],X.prototype,"verticalDefaultPosition",void 0);h([f({attribute:"vertical-viewport-lock",mode:"boolean"})],X.prototype,"verticalViewportLock",void 0);h([f({attribute:"vertical-inset",mode:"boolean"})],X.prototype,"verticalInset",void 0);h([f({attribute:"vertical-threshold"})],X.prototype,"verticalThreshold",void 0);h([f({attribute:"vertical-scaling"})],X.prototype,"verticalScaling",void 0);h([f({attribute:"fixed-placement",mode:"boolean"})],X.prototype,"fixedPlacement",void 0);h([f({attribute:"auto-update-mode"})],X.prototype,"autoUpdateMode",void 0);h([y],X.prototype,"anchorElement",void 0);h([y],X.prototype,"viewportElement",void 0);h([y],X.prototype,"initialLayoutComplete",void 0);const Tv=(i,t)=>R`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let _o=class extends Z{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};h([f({attribute:"fill"})],_o.prototype,"fill",void 0);h([f({attribute:"color"})],_o.prototype,"color",void 0);h([f({mode:"boolean"})],_o.prototype,"circular",void 0);const Iv=(i,t)=>R`
    <div role="listitem" class="listitem" part="listitem">
        ${Et(e=>e.href&&e.href.length>0,R`
                ${ju(i,t)}
            `)}
        ${Et(e=>!e.href,R`
                ${ae(i,t)}
                <slot></slot>
                ${re(i,t)}
            `)}
        ${Et(e=>e.separator,R`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class Ro extends we{constructor(){super(...arguments),this.separator=!0}}h([y],Ro.prototype,"separator",void 0);St(Ro,ge,vr);const Rv=(i,t)=>R`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Ft({property:"slottedBreadcrumbItems",filter:hi()})}
            ></slot>
        </div>
    </template>
`;class Uu extends Z{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof Ro&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof Ro?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}h([y],Uu.prototype,"slottedBreadcrumbItems",void 0);const Dv=(i,t)=>R`
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
            <slot ${Ft("defaultSlottedContent")}></slot>
        </span>
        ${re(i,t)}
    </button>
`,Hd="form-associated-proxy",Md="ElementInternals",Nd=Md in window&&"setFormValue"in window[Md].prototype,zd=new WeakMap;function pi(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Nd}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return is}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),J.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),J.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Nd)return null;let e=zd.get(this);return e||(e=this.attachInternals(),zd.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Hd),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Hd)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case fi:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return f({mode:"boolean"})(t.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),f({attribute:"current-value"})(t.prototype,"currentValue"),f(t.prototype,"name"),f({mode:"boolean"})(t.prototype,"required"),y(t.prototype,"value"),t}function Xl(i){class t extends pi(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:Po})(e.prototype,"currentChecked"),y(e.prototype,"defaultChecked"),y(e.prototype,"checked"),e}class Ev extends Z{}class Ov extends pi(Ev){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let $e=class extends Ov{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};h([f({mode:"boolean"})],$e.prototype,"autofocus",void 0);h([f({attribute:"form"})],$e.prototype,"formId",void 0);h([f],$e.prototype,"formaction",void 0);h([f],$e.prototype,"formenctype",void 0);h([f],$e.prototype,"formmethod",void 0);h([f({mode:"boolean"})],$e.prototype,"formnovalidate",void 0);h([f],$e.prototype,"formtarget",void 0);h([f],$e.prototype,"type",void 0);h([y],$e.prototype,"defaultSlottedContent",void 0);class yr{}h([f({attribute:"aria-expanded"})],yr.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],yr.prototype,"ariaPressed",void 0);St(yr,$t);St($e,ge,yr);class Av{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let Ve=class extends Z{constructor(){super(...arguments),this.dateFormatter=new Av,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const c=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(c.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:c,year:d}=l<1?n:l>o?r:t,u=l<1?n.length+l:l>o?l-o:l,b=`${c}-${u}-${d}`,w=this.dateInString(b,this.disabledDates),C=this.dateInString(b,this.selectedDates),k={day:u,month:c,year:d,disabled:w,selected:C},D=a[a.length-1];a.length===0||D.length%7===0?a.push([k]):D.push(k),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,c=this.month!==o;return["day",l&&"today",c&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===fi&&this.handleDateSelect(t,e),!0}};h([f({mode:"boolean"})],Ve.prototype,"readonly",void 0);h([f],Ve.prototype,"locale",void 0);h([f({converter:H})],Ve.prototype,"month",void 0);h([f({converter:H})],Ve.prototype,"year",void 0);h([f({attribute:"day-format",mode:"fromView"})],Ve.prototype,"dayFormat",void 0);h([f({attribute:"weekday-format",mode:"fromView"})],Ve.prototype,"weekdayFormat",void 0);h([f({attribute:"month-format",mode:"fromView"})],Ve.prototype,"monthFormat",void 0);h([f({attribute:"year-format",mode:"fromView"})],Ve.prototype,"yearFormat",void 0);h([f({attribute:"min-weeks",converter:H})],Ve.prototype,"minWeeks",void 0);h([f({attribute:"disabled-dates"})],Ve.prototype,"disabledDates",void 0);h([f({attribute:"selected-dates"})],Ve.prototype,"selectedDates",void 0);const fn={none:"none",default:"default",sticky:"sticky"},Ci={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},xo={default:"default",header:"header",stickyHeader:"sticky-header"};class Gt extends Z{constructor(){super(...arguments),this.rowType=xo.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Wl(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ps,this.handleFocusout),this.addEventListener(_s,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ps,this.handleFocusout),this.removeEventListener(_s,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Vi:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Li:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case ei:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case ii:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===xo.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===xo.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],Gt.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],Gt.prototype,"rowType",void 0);h([y],Gt.prototype,"rowData",void 0);h([y],Gt.prototype,"columnDefinitions",void 0);h([y],Gt.prototype,"cellItemTemplate",void 0);h([y],Gt.prototype,"headerCellItemTemplate",void 0);h([y],Gt.prototype,"rowIndex",void 0);h([y],Gt.prototype,"isActiveRow",void 0);h([y],Gt.prototype,"activeCellItemTemplate",void 0);h([y],Gt.prototype,"defaultCellItemTemplate",void 0);h([y],Gt.prototype,"defaultHeaderCellItemTemplate",void 0);h([y],Gt.prototype,"cellElements",void 0);function Vv(i){const t=i.tagFor(Gt);return R`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const Lv=(i,t)=>{const e=Vv(i),s=i.tagFor(Gt);return R`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${gr({property:"rowElements",filter:hi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class zt extends Z{constructor(){super(),this.noTabbing=!1,this.generateHeader=fn.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,J.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=zt.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=zt.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Wl(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Od,this.handleFocus),this.addEventListener(_s,this.handleKeydown),this.addEventListener(Ps,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),J.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Od,this.handleFocus),this.removeEventListener(_s,this.handleKeydown),this.removeEventListener(Ps,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case Ae:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Oe:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case $v:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case wv:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===fn.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case ei:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case ii:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,J.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==fn.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===fn.sticky?xo.stickyHeader:xo.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}zt.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],zt.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],zt.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],zt.prototype,"gridTemplateColumns",void 0);h([y],zt.prototype,"rowsData",void 0);h([y],zt.prototype,"columnDefinitions",void 0);h([y],zt.prototype,"rowItemTemplate",void 0);h([y],zt.prototype,"cellItemTemplate",void 0);h([y],zt.prototype,"headerCellItemTemplate",void 0);h([y],zt.prototype,"focusRowIndex",void 0);h([y],zt.prototype,"focusColumnIndex",void 0);h([y],zt.prototype,"defaultRowItemTemplate",void 0);h([y],zt.prototype,"rowElementTag",void 0);h([y],zt.prototype,"rowElements",void 0);const Pv=R`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,_v=R`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class gi extends Z{constructor(){super(...arguments),this.cellType=Ci.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Ad,this.handleFocusin),this.addEventListener(Ps,this.handleFocusout),this.addEventListener(_s,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ad,this.handleFocusin),this.removeEventListener(Ps,this.handleFocusout),this.removeEventListener(_s,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case Ci.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===Ci.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===Ci.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case fi:case xv:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case Ci.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Ws:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case Ci.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=_v.render(this,this);break;case void 0:case Ci.rowHeader:case Ci.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Pv.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],gi.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],gi.prototype,"gridColumn",void 0);h([y],gi.prototype,"rowData",void 0);h([y],gi.prototype,"columnDefinition",void 0);function Hv(i){const t=i.tagFor(gi);return R`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function Mv(i){const t=i.tagFor(gi);return R`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const Nv=(i,t)=>{const e=Hv(i),s=Mv(i);return R`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${gr({property:"cellElements",filter:hi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ft("slottedCellElements")}></slot>
        </template>
    `},zv=(i,t)=>R`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Bv=R`
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
`,jv=i=>{const t=i.tagFor(gi);return R`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},Uv=(i,t)=>{const e=i.tagFor(gi);return R`
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
    `},qv=(i,t)=>{const e=i.tagFor(Gt);return R`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Ts(s=>s,Uv(i,t),{positioning:!0})}
        </${e}>
    `},Wv=(i,t)=>{const e=i.tagFor(zt),s=i.tagFor(Gt);return R`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Ts(o=>o.getWeekdayText(),jv(i),{positioning:!0})}
        </${s}>
        ${Ts(o=>o.getDays(),qv(i,t))}
    </${e}>
`},Gv=i=>R`
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
    `,Xv=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return R`
        <template>
            ${Kb}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${Et(n=>n.readonly,Gv(o),Wv(i,o))}
            ${Zb}
        </template>
    `},Yv=(i,t)=>R`
    <slot></slot>
`;let qu=class extends Z{};const Jv=(i,t)=>R`
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
`;class Qv extends Z{}class Zv extends Xl(Qv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class xr extends Zv{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case ds:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],xr.prototype,"readOnly",void 0);h([y],xr.prototype,"defaultSlottedNodes",void 0);h([y],xr.prototype,"indeterminate",void 0);function Wu(i){return Ls(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class si extends Z{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),Y.notify(this,"value")}get value(){var t;return Y.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}h([y],si.prototype,"checked",void 0);h([y],si.prototype,"content",void 0);h([y],si.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],si.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],si.prototype,"selectedAttribute",void 0);h([y],si.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],si.prototype,"initialValue",void 0);class Gs{}h([y],Gs.prototype,"ariaChecked",void 0);h([y],Gs.prototype,"ariaPosInSet",void 0);h([y],Gs.prototype,"ariaSelected",void 0);h([y],Gs.prototype,"ariaSetSize",void 0);St(Gs,$t);St(si,ge,Gs);let me=class An extends Z{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return Y.track(this,"options"),this._options}set options(t){this._options=t,Y.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{An.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,An.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case ei:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Oe:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case Ae:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case ii:{t.preventDefault(),this.selectLastOption();break}case mr:return this.focusAndScrollOptionIntoView(),!0;case fi:case Ws:return!0;case ds:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(An.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=Y.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=gv(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(Wu(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=Io("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};me.slottedOptionFilter=i=>Wu(i)&&!i.hidden;me.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],me.prototype,"disabled",void 0);h([y],me.prototype,"selectedIndex",void 0);h([y],me.prototype,"selectedOptions",void 0);h([y],me.prototype,"slottedOptions",void 0);h([y],me.prototype,"typeaheadBuffer",void 0);class Hi{}h([y],Hi.prototype,"ariaActiveDescendant",void 0);h([y],Hi.prototype,"ariaDisabled",void 0);h([y],Hi.prototype,"ariaExpanded",void 0);h([y],Hi.prototype,"ariaMultiSelectable",void 0);St(Hi,$t);St(me,Hi);const Is={above:"above",below:"below"};class Kv extends me{}class ty extends pi(Kv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const pn={inline:"inline",list:"list",both:"both",none:"none"};let mi=class extends ty{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Io("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===pn.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===pn.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===pn.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),J.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return Y.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,Y.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return Y.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(c=>c.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),Y.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===pn.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=br(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Is.above:Is.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Is.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};h([f({attribute:"autocomplete",mode:"fromView"})],mi.prototype,"autocomplete",void 0);h([y],mi.prototype,"maxHeight",void 0);h([f({attribute:"open",mode:"boolean"})],mi.prototype,"open",void 0);h([f],mi.prototype,"placeholder",void 0);h([f({attribute:"position"})],mi.prototype,"positionAttribute",void 0);h([y],mi.prototype,"position",void 0);class wr{}h([y],wr.prototype,"ariaAutoComplete",void 0);h([y],wr.prototype,"ariaControls",void 0);St(wr,Hi);St(mi,ge,wr);const ey=(i,t)=>R`
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
                ${Ft({filter:me.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function Gn(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function iy(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=Gn(e)}return!1}const ri=document.createElement("div");function sy(i){return i instanceof pr}class Yl{setProperty(t,e){J.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){J.queueUpdate(()=>this.target.removeProperty(t))}}class oy extends Yl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(ne.create([e]))}}class ny extends Yl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class ry extends Yl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Gu{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),Y.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),J.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),J.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}h([y],Gu.prototype,"target",void 0);class ay{constructor(t){this.target=t.style}setProperty(t,e){J.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){J.queueUpdate(()=>this.target.removeProperty(t))}}class jt{setProperty(t,e){jt.properties[t]=e;for(const s of jt.roots.values())$s.getOrCreate(jt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete jt.properties[t];for(const e of jt.roots.values())$s.getOrCreate(jt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=jt;if(!e.has(t)){e.add(t);const s=$s.getOrCreate(this.normalizeRoot(t));for(const o in jt.properties)s.setProperty(o,jt.properties[o])}}static unregisterRoot(t){const{roots:e}=jt;if(e.has(t)){e.delete(t);const s=$s.getOrCreate(jt.normalizeRoot(t));for(const o in jt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===ri?document:t}}jt.roots=new Set;jt.properties={};const Ta=new WeakMap,ly=J.supportsAdoptedStyleSheets?oy:Gu,$s=Object.freeze({getOrCreate(i){if(Ta.has(i))return Ta.get(i);let t;return i===ri?t=new jt:i instanceof Document?t=J.supportsAdoptedStyleSheets?new ny:new ry:sy(i)?t=new ly(i):t=new ay(i),Ta.set(i,t),t}});class ee extends ql{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ee.uniqueId(),ee.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new ee({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return ee.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Lt.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof ee&&(e=this.alias(e)),Lt.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Lt.existsFor(t)&&Lt.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ri,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!Lt.existsFor(e)&&Lt.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}ee.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();ee.tokensById=new Map;class cy{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){$s.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Lt.getOrCreate(e).get(t)))}remove(t,e){$s.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class dy{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=Y.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,vo))}}class hy{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),Y.getNotifier(this).notify(t.id))}get(t){return Y.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ro=new WeakMap,ao=new WeakMap;class Lt{constructor(t){this.target=t,this.store=new hy,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=ee.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},ro.set(t,this),Y.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof pr?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ro.get(t)||new Lt(t)}static existsFor(t){return ro.has(t)}static findParent(t){if(ri!==t.target){let e=Gn(t.target);for(;e!==null;){if(ro.has(e))return ro.get(e);e=Gn(e)}return Lt.getOrCreate(ri)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ri?Lt.getOrCreate(ri):null}while(s!==null);return null}get parent(){return ao.get(this)||null}updateCSSTokenReflection(t,e){if(ee.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=Lt.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){ee.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),ee.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Lt.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&ao.get(this).removeChild(this)}appendChild(t){t.parent&&ao.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));ao.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),Y.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),Y.getNotifier(this.store).unsubscribe(t),t.parent===this?ao.delete(t):!1}contains(t){return iy(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Lt.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Lt.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=ee.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);ee.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new dy(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}Lt.cssCustomPropertyReflector=new cy;h([y],Lt.prototype,"children",void 0);function uy(i){return ee.from(i)}const mt=Object.freeze({create:uy,notifyConnection(i){return!i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!Lt.existsFor(i)?!1:(Lt.getOrCreate(i).unbind(),!0)},registerRoot(i=ri){jt.registerRoot(i)},unregisterRoot(i=ri){jt.unregisterRoot(i)}}),Ia=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ra=new Map,Vn=new Map;let Rs=null;const lo=Dt.createInterface(i=>i.cachedCallback(t=>(Rs===null&&(Rs=new Yu(null,t)),Rs))),Xu=Object.freeze({tagFor(i){return Vn.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||Dt.findResponsibleContainer(i).get(lo)},getOrCreate(i){if(!i)return Rs===null&&(Rs=Dt.getOrCreateDOMContainer().get(lo)),Rs;const t=i.$$designSystem$$;if(t)return t;const e=Dt.getOrCreateDOMContainer(i);if(e.has(lo,!1))return e.get(lo);{const s=new Yu(i,e);return e.register(To.instance(lo,s)),s}}});function fy(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Yu{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Ia.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,c){const d=fy(a,l,c),{name:u,callback:b,baseClass:w}=d;let{type:C}=d,k=u,D=Ra.get(k),N=!0;for(;D;){const U=o(k,C,D);switch(U){case Ia.ignoreDuplicate:return;case Ia.definitionCallbackOnly:N=!1,D=void 0;break;default:k=U,D=Ra.get(k);break}}N&&((Vn.has(C)||C===Z)&&(C=class extends C{}),Ra.set(k,C),Vn.set(C,k),w&&Vn.set(w,k)),s.push(new py(e,k,C,n,b,N))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&mt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class py{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){Bu.define(this.name,t,this.container)}defineElement(t){this.definition=new fr(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Xu.tagFor(t)}}const gy=(i,t)=>R`
    <div class="positioning-region" part="positioning-region">
        ${Et(e=>e.modal,R`
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
*/var Ju=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],my=Ju.join(","),Qu=typeof Element>"u",Do=Qu?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,sl=!Qu&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},by=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Zu=function(t){return t.tagName==="INPUT"},vy=function(t){return Zu(t)&&t.type==="hidden"},yy=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},xy=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},wy=function(t){if(!t.name)return!0;var e=t.form||sl(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=xy(o,t.form);return!n||n===t},$y=function(t){return Zu(t)&&t.type==="radio"},Cy=function(t){return $y(t)&&!wy(t)},Bd=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},ky=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=Do.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(Do.call(r,"details:not([open]) *"))return!0;var a=sl(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var c=t;t;){var d=t.parentElement,u=sl(t);if(d&&!d.shadowRoot&&o(d)===!0)return Bd(t);t.assignedSlot?t=t.assignedSlot:!d&&u!==t.ownerDocument?t=u.host:t=d}t=c}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return Bd(t);return!1},Fy=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return Do.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},Ku=function(t,e){return!(e.disabled||vy(e)||ky(e,t)||yy(e)||Fy(e))},Sy=function(t,e){return!(Cy(e)||by(e)<0||!Ku(t,e))},jd=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Do.call(t,my)===!1?!1:Sy(e,t)},Ty=Ju.concat("iframe").join(","),Ud=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return Do.call(t,Ty)===!1?!1:Ku(e,t)};class Re extends Z{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Ws:this.dismiss(),t.preventDefault();break;case mr:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Re.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),J.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=Y.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:jd(e)||Re.isFocusableFastElement(e)&&Re.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Re.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>jd(o))}}h([f({mode:"boolean"})],Re.prototype,"modal",void 0);h([f({mode:"boolean"})],Re.prototype,"hidden",void 0);h([f({attribute:"trap-focus",mode:"boolean"})],Re.prototype,"trapFocus",void 0);h([f({attribute:"aria-describedby"})],Re.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-labelledby"})],Re.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Re.prototype,"ariaLabel",void 0);const Iy=(i,t)=>R`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,Ry={separator:"separator",presentation:"presentation"};class $r extends Z{constructor(){super(...arguments),this.role=Ry.separator,this.orientation=Vt.horizontal}}h([f],$r.prototype,"role",void 0);h([f],$r.prototype,"orientation",void 0);const ol={next:"next",previous:"previous"},Dy=(i,t)=>R`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${Et(e=>e.direction===ol.next,R`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${Et(e=>e.direction===ol.previous,R`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class Cr extends Z{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=ol.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}h([f({mode:"boolean"})],Cr.prototype,"disabled",void 0);h([f({attribute:"aria-hidden",converter:Po})],Cr.prototype,"hiddenFromAT",void 0);h([f],Cr.prototype,"direction",void 0);const Ey=(i,t)=>R`
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
            <slot ${Ft("content")}></slot>
        </span>
        ${re(i,t)}
    </template>
`;class Ho extends me{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=un(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=un(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case ei:{this.checkFirstOption(s);return}case Oe:{this.checkNextOption(s);return}case Ae:{this.checkPreviousOption(s);return}case ii:{this.checkLastOption(s);return}case mr:return this.focusAndScrollOptionIntoView(),!0;case Ws:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ds:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&J.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}h([y],Ho.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],Ho.prototype,"multiple",void 0);h([f({converter:H})],Ho.prototype,"size",void 0);const Oy=(i,t)=>R`
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
            ${Ft({filter:Ho.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,se={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Ay={[se.menuitem]:"menuitem",[se.menuitemcheckbox]:"menuitemcheckbox",[se.menuitemradio]:"menuitemradio"};class Ce extends Z{constructor(){super(...arguments),this.role=se.menuitem,this.hasSubmenu=!1,this.currentDirection=wt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case fi:case ds:return this.invoke(),!1;case Li:return this.expandAndFocus(),!1;case Vi:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case se.menuitemcheckbox:this.checked=!this.checked;break;case se.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case se.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=ns(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),J.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}h([f({mode:"boolean"})],Ce.prototype,"disabled",void 0);h([f({mode:"boolean"})],Ce.prototype,"expanded",void 0);h([y],Ce.prototype,"startColumnCount",void 0);h([f],Ce.prototype,"role",void 0);h([f({mode:"boolean"})],Ce.prototype,"checked",void 0);h([y],Ce.prototype,"submenuRegion",void 0);h([y],Ce.prototype,"hasSubmenu",void 0);h([y],Ce.prototype,"currentDirection",void 0);h([y],Ce.prototype,"submenu",void 0);St(Ce,ge);const Vy=(i,t)=>R`
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
            ${Et(e=>e.role===se.menuitemcheckbox,R`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Et(e=>e.role===se.menuitemradio,R`
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
        ${Et(e=>e.hasSubmenu,R`
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
        ${Et(e=>e.expanded,R`
                <${i.tagFor(X)}
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
                </${i.tagFor(X)}>
            `)}
    </template>
`,Ly=(i,t)=>R`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${Ft("items")}></slot>
    </template>
`;let kr=class tf extends Z{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Ls(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==se.menuitem&&a===null||r===se.menuitem&&a!==null?1:r!==se.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof Ce||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===se.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===se.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Ls(t)&&tf.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),J.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Oe:this.setFocus(this.focusIndex+1,1);return;case Ae:this.setFocus(this.focusIndex-1,-1);return;case ii:this.setFocus(this.menuItems.length-1,-1);return;case ei:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};kr.focusableElementRoles=Ay;h([y],kr.prototype,"items",void 0);const Py=(i,t)=>R`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ft("defaultSlottedNodes")}></slot>
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
            ${Et(e=>!e.hideStep&&!e.readOnly&&!e.disabled,R`
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
`;class _y extends Z{}class Hy extends pi(_y){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const My={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let be=class extends Hy{constructor(){super(...arguments),this.type=My.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&J.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({attribute:"readonly",mode:"boolean"})],be.prototype,"readOnly",void 0);h([f({mode:"boolean"})],be.prototype,"autofocus",void 0);h([f],be.prototype,"placeholder",void 0);h([f],be.prototype,"type",void 0);h([f],be.prototype,"list",void 0);h([f({converter:H})],be.prototype,"maxlength",void 0);h([f({converter:H})],be.prototype,"minlength",void 0);h([f],be.prototype,"pattern",void 0);h([f({converter:H})],be.prototype,"size",void 0);h([f({mode:"boolean"})],be.prototype,"spellcheck",void 0);h([y],be.prototype,"defaultSlottedNodes",void 0);class Fr{}St(Fr,$t);St(be,ge,Fr);class Ny extends Z{}class zy extends pi(Ny){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let le=class extends zy{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&J.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case Ae:return this.stepUp(),!1;case Oe:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};h([f({attribute:"readonly",mode:"boolean"})],le.prototype,"readOnly",void 0);h([f({mode:"boolean"})],le.prototype,"autofocus",void 0);h([f({attribute:"hide-step",mode:"boolean"})],le.prototype,"hideStep",void 0);h([f],le.prototype,"placeholder",void 0);h([f],le.prototype,"list",void 0);h([f({converter:H})],le.prototype,"maxlength",void 0);h([f({converter:H})],le.prototype,"minlength",void 0);h([f({converter:H})],le.prototype,"size",void 0);h([f({converter:H})],le.prototype,"step",void 0);h([f({converter:H})],le.prototype,"max",void 0);h([f({converter:H})],le.prototype,"min",void 0);h([y],le.prototype,"defaultSlottedNodes",void 0);St(le,ge,Fr);const qd=44,By=(i,t)=>R`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Et(e=>typeof e.value=="number",R`
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
            `,R`
                <slot name="indeterminate" slot="indeterminate">
                    ${t.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class hs extends Z{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}h([f({converter:H})],hs.prototype,"value",void 0);h([f({converter:H})],hs.prototype,"min",void 0);h([f({converter:H})],hs.prototype,"max",void 0);h([f({mode:"boolean"})],hs.prototype,"paused",void 0);h([y],hs.prototype,"percentComplete",void 0);const jy=(i,t)=>R`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${Et(e=>typeof e.value=="number",R`
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
`,Uy=(i,t)=>R`
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
                ${Ft({property:"slottedRadioButtons",filter:hi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Mi extends Z{constructor(){super(...arguments),this.orientation=Vt.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Li,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Vi,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in ws&&this.isInsideFoundationToolbar)return!0;switch(e){case fi:{this.checkFocusedRadio();break}case Li:case Oe:{this.direction===wt.ltr?this.moveRight(t):this.moveLeft(t);break}case Vi:case Ae:{this.direction===wt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=ns(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],Mi.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],Mi.prototype,"disabled",void 0);h([f],Mi.prototype,"name",void 0);h([f],Mi.prototype,"value",void 0);h([f],Mi.prototype,"orientation",void 0);h([y],Mi.prototype,"childItems",void 0);h([y],Mi.prototype,"slottedRadioButtons",void 0);const qy=(i,t)=>R`
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
`;class Wy extends Z{}class Gy extends Xl(Wy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Sr extends Gy{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case ds:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],Sr.prototype,"readOnly",void 0);h([y],Sr.prototype,"name",void 0);h([y],Sr.prototype,"defaultSlottedNodes",void 0);let bi=class extends Z{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&J.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:c,width:d}=a.getBoundingClientRect(),u=Math.round(c+e-o),b=Math.round(u+d);return this.isRtl?-b:(n=b,l===0?0:u)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:c}=n.getBoundingClientRect(),d=r[t],{width:u}=a[t].getBoundingClientRect(),b=d+u,w=l+e>d;if(w||l+c-s<b){const k=(o=[...r].sort((D,N)=>w?N-D:D-N).find(D=>w?D+e<d:D+c-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(k)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=c=>{c&&c.target!==c.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};h([f({converter:H})],bi.prototype,"speed",void 0);h([f],bi.prototype,"duration",void 0);h([f],bi.prototype,"easing",void 0);h([f({attribute:"flippers-hidden-from-at",converter:Po})],bi.prototype,"flippersHiddenFromAT",void 0);h([y],bi.prototype,"scrolling",void 0);h([y],bi.prototype,"scrollItems",void 0);h([f({attribute:"view"})],bi.prototype,"view",void 0);const Xy=(i,t)=>{var e,s;return R`
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
                        ${Ft({property:"scrollItems",filter:hi()})}
                    ></slot>
                </div>
            </div>
            ${Et(o=>o.view!=="mobile",R`
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
`};function ef(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class Yy extends Z{}class Jy extends pi(Yy){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ke=class extends Jy{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&J.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};h([f({attribute:"readonly",mode:"boolean"})],ke.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ke.prototype,"autofocus",void 0);h([f],ke.prototype,"placeholder",void 0);h([f],ke.prototype,"list",void 0);h([f({converter:H})],ke.prototype,"maxlength",void 0);h([f({converter:H})],ke.prototype,"minlength",void 0);h([f],ke.prototype,"pattern",void 0);h([f({converter:H})],ke.prototype,"size",void 0);h([f({mode:"boolean"})],ke.prototype,"spellcheck",void 0);h([y],ke.prototype,"defaultSlottedNodes",void 0);class sf{}St(sf,$t);St(ke,ge,sf);class Qy extends Ho{}class Zy extends pi(Qy){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let vi=class extends Zy{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Io("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,J.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return Y.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const c=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const d=this._options.findIndex(w=>w.value===t),u=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[d])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(d===-1||u!==b)&&(t="",this.selectedIndex=d),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}c!==t&&(this._value=t,super.valueChanged(c,t),Y.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?Is.above:Is.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Is.above?~~t.top:~~s}get displayValue(){var t,e;return Y.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{Y.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{Y.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(me.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case ds:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ei:case ii:{t.preventDefault();break}case fi:{t.preventDefault(),this.open=!this.open;break}case Ws:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case mr:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===Oe||e===Ae)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&Y.notify(this,"displayValue")}};h([f({attribute:"open",mode:"boolean"})],vi.prototype,"open",void 0);h([ub],vi.prototype,"collapsible",null);h([y],vi.prototype,"control",void 0);h([f({attribute:"position"})],vi.prototype,"positionAttribute",void 0);h([y],vi.prototype,"position",void 0);h([y],vi.prototype,"maxHeight",void 0);class Jl{}h([y],Jl.prototype,"ariaControls",void 0);St(Jl,Hi);St(vi,ge,Jl);const Ky=(i,t)=>R`
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
        ${Et(e=>e.collapsible,R`
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
                ${Ft({filter:me.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,t0=(i,t)=>R`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${Et(e=>e.shimmer===!0,R`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Mo extends Z{constructor(){super(...arguments),this.shape="rect"}}h([f],Mo.prototype,"fill",void 0);h([f],Mo.prototype,"shape",void 0);h([f],Mo.prototype,"pattern",void 0);h([f({mode:"boolean"})],Mo.prototype,"shimmer",void 0);const e0=(i,t)=>R`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||Vt.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${ut("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${Et(e=>!e.hideMark,R`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function nl(i,t,e,s){let o=br(0,1,(i-t)/(e-t));return s===wt.rtl&&(o=1-o),o}const gn={min:0,max:0,direction:wt.ltr,orientation:Vt.horizontal,disabled:!1};class yi extends Z{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=wt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=gn.direction||wt.ltr,this.sliderOrientation=gn.orientation,this.sliderMaxPosition=gn.max,this.sliderMinPosition=gn.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||wt.ltr,this.sliderOrientation=n||Vt.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:wt.ltr,e=nl(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===Vt.horizontal?t===wt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=Y.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}h([y],yi.prototype,"positionStyle",void 0);h([f],yi.prototype,"position",void 0);h([f({attribute:"hide-mark",mode:"boolean"})],yi.prototype,"hideMark",void 0);h([f({attribute:"disabled",mode:"boolean"})],yi.prototype,"disabled",void 0);h([y],yi.prototype,"sliderOrientation",void 0);h([y],yi.prototype,"sliderMinPosition",void 0);h([y],yi.prototype,"sliderMaxPosition",void 0);h([y],yi.prototype,"sliderDirection",void 0);const i0=(i,t)=>R`
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
`;class s0 extends Z{}class o0 extends pi(s0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const n0={singleValue:"single-value"};class Jt extends o0{constructor(){super(...arguments),this.direction=wt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Vt.horizontal,this.mode=n0.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===ei)t.preventDefault(),this.value=`${this.min}`;else if(t.key===ii)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Li:case Ae:t.preventDefault(),this.increment();break;case Vi:case Oe:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===Vt.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=nl(t,this.orientation===Vt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Vt.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===Vt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=ns(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==wt.rtl&&this.orientation!==Vt.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==wt.rtl&&this.orientation!==Vt.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-nl(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===Vt.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}h([f({attribute:"readonly",mode:"boolean"})],Jt.prototype,"readOnly",void 0);h([y],Jt.prototype,"direction",void 0);h([y],Jt.prototype,"isDragging",void 0);h([y],Jt.prototype,"position",void 0);h([y],Jt.prototype,"trackWidth",void 0);h([y],Jt.prototype,"trackMinWidth",void 0);h([y],Jt.prototype,"trackHeight",void 0);h([y],Jt.prototype,"trackLeft",void 0);h([y],Jt.prototype,"trackMinHeight",void 0);h([y],Jt.prototype,"valueTextFormatter",void 0);h([f({converter:H})],Jt.prototype,"min",void 0);h([f({converter:H})],Jt.prototype,"max",void 0);h([f({converter:H})],Jt.prototype,"step",void 0);h([f],Jt.prototype,"orientation",void 0);h([f],Jt.prototype,"mode",void 0);const r0=(i,t)=>R`
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
`;class a0 extends Z{}class l0 extends Xl(a0){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ql extends l0{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case fi:case ds:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}h([f({attribute:"readonly",mode:"boolean"})],Ql.prototype,"readOnly",void 0);h([y],Ql.prototype,"defaultSlottedNodes",void 0);const c0=(i,t)=>R`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class d0 extends Z{}const h0=(i,t)=>R`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class of extends Z{}h([f({mode:"boolean"})],of.prototype,"disabled",void 0);const u0=(i,t)=>R`
    <template class="${e=>e.orientation}">
        ${ae(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ft("tabs")}></slot>

            ${Et(e=>e.showActiveIndicator,R`
                    <div
                        ${ut("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${re(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Ft("tabpanels")}></slot>
        </div>
    </template>
`,Wd={vertical:"vertical",horizontal:"horizontal"};class xi extends Z{constructor(){super(...arguments),this.orientation=Wd.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Vi:t.preventDefault(),this.adjustBackward(t);break;case Li:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case Ae:t.preventDefault(),this.adjustBackward(t);break;case Oe:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case ei:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case ii:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${Io()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${Io()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Wd.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=br(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],xi.prototype,"orientation",void 0);h([f],xi.prototype,"activeid",void 0);h([y],xi.prototype,"tabs",void 0);h([y],xi.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],xi.prototype,"activeindicator",void 0);h([y],xi.prototype,"activeIndicatorRef",void 0);h([y],xi.prototype,"showActiveIndicator",void 0);St(xi,ge);class f0 extends Z{}class p0 extends pi(f0){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const nf={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Qt=class extends p0{constructor(){super(...arguments),this.resize=nf.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};h([f({mode:"boolean"})],Qt.prototype,"readOnly",void 0);h([f],Qt.prototype,"resize",void 0);h([f({mode:"boolean"})],Qt.prototype,"autofocus",void 0);h([f({attribute:"form"})],Qt.prototype,"formId",void 0);h([f],Qt.prototype,"list",void 0);h([f({converter:H})],Qt.prototype,"maxlength",void 0);h([f({converter:H})],Qt.prototype,"minlength",void 0);h([f],Qt.prototype,"name",void 0);h([f],Qt.prototype,"placeholder",void 0);h([f({converter:H,mode:"fromView"})],Qt.prototype,"cols",void 0);h([f({converter:H,mode:"fromView"})],Qt.prototype,"rows",void 0);h([f({mode:"boolean"})],Qt.prototype,"spellcheck",void 0);h([y],Qt.prototype,"defaultSlottedNodes",void 0);St(Qt,Fr);const g0=(i,t)=>R`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==nf.none?`resize-${e.resize}`:""}"
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
`,m0=(i,t)=>R`
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
                ${Ft({property:"defaultSlottedNodes",filter:ef})}
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
`,b0=(i,t)=>R`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${gr({property:"childItems",attributeFilter:["disabled","hidden"],filter:hi(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${ae(i,t)}
            <slot
                ${Ft({filter:hi(),property:"slottedItems"})}
            ></slot>
            ${re(i,t)}
        </div>
    </template>
`,Gd=Object.freeze({[ws.ArrowUp]:{[Vt.vertical]:-1},[ws.ArrowDown]:{[Vt.vertical]:1},[ws.ArrowLeft]:{[Vt.horizontal]:{[wt.ltr]:-1,[wt.rtl]:1}},[ws.ArrowRight]:{[Vt.horizontal]:{[wt.ltr]:1,[wt.rtl]:-1}}});let Ni=class rl extends Z{constructor(){super(...arguments),this._activeIndex=0,this.direction=wt.ltr,this.orientation=Vt.horizontal}get activeIndex(){return Y.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=br(0,this.focusableElements.length-1,t),Y.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=ns(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=Gd[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=Gd[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in ws)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(rl.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,c=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(d=>Ud(d));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(Ud(e)||a||l||c)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(rl.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};h([y],Ni.prototype,"direction",void 0);h([f],Ni.prototype,"orientation",void 0);h([y],Ni.prototype,"slottedItems",void 0);h([y],Ni.prototype,"slottedLabel",void 0);h([y],Ni.prototype,"childItems",void 0);class Tr{}h([f({attribute:"aria-labelledby"})],Tr.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-label"})],Tr.prototype,"ariaLabel",void 0);St(Tr,$t);St(Ni,ge,Tr);const v0=(i,t)=>R`
        ${Et(e=>e.tooltipVisible,R`
            <${i.tagFor(X)}
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
            </${i.tagFor(X)}>
        `)}
    `,he={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Ht=class extends Z{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=wt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Ws:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=ns(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),J.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case he.top:case he.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case he.right:case he.left:case he.start:case he.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case he.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case he.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case he.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case he.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case he.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case he.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case he.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case he.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};h([f({mode:"boolean"})],Ht.prototype,"visible",void 0);h([f],Ht.prototype,"anchor",void 0);h([f],Ht.prototype,"delay",void 0);h([f],Ht.prototype,"position",void 0);h([f({attribute:"auto-update-mode"})],Ht.prototype,"autoUpdateMode",void 0);h([f({attribute:"horizontal-viewport-lock"})],Ht.prototype,"horizontalViewportLock",void 0);h([f({attribute:"vertical-viewport-lock"})],Ht.prototype,"verticalViewportLock",void 0);h([y],Ht.prototype,"anchorElement",void 0);h([y],Ht.prototype,"viewportElement",void 0);h([y],Ht.prototype,"verticalPositioningMode",void 0);h([y],Ht.prototype,"horizontalPositioningMode",void 0);h([y],Ht.prototype,"horizontalInset",void 0);h([y],Ht.prototype,"verticalInset",void 0);h([y],Ht.prototype,"horizontalScaling",void 0);h([y],Ht.prototype,"verticalScaling",void 0);h([y],Ht.prototype,"verticalDefaultPosition",void 0);h([y],Ht.prototype,"horizontalDefaultPosition",void 0);h([y],Ht.prototype,"tooltipVisible",void 0);h([y],Ht.prototype,"currentDirection",void 0);const y0=(i,t)=>R`
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
        ${gr({property:"childItems",filter:hi()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Et(e=>e.childItems&&e.childItemLength()>0,R`
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
        ${Et(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),R`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Ft("items")}></slot>
                </div>
            `)}
    </template>
`;function Di(i){return Ls(i)&&i.getAttribute("role")==="treeitem"}class Mt extends Z{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>Di(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{Di(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>Di(e));return t?t.length:0}}h([f({mode:"boolean"})],Mt.prototype,"expanded",void 0);h([f({mode:"boolean"})],Mt.prototype,"selected",void 0);h([f({mode:"boolean"})],Mt.prototype,"disabled",void 0);h([y],Mt.prototype,"focusable",void 0);h([y],Mt.prototype,"childItems",void 0);h([y],Mt.prototype,"items",void 0);h([y],Mt.prototype,"nested",void 0);h([y],Mt.prototype,"renderCollapsedChildren",void 0);St(Mt,ge);const x0=(i,t)=>R`
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
`;class Ir extends Z{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Mt.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case ei:e.length&&Mt.focusItem(e[0]);return;case ii:e.length&&Mt.focusItem(e[e.length-1]);return;case Vi:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Mt&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof Mt&&s.parentElement instanceof Mt&&Mt.focusItem(s.parentElement)}return!1;case Li:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Mt&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof Mt&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Oe:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case Ae:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case fi:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{Di(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>Di(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),J.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!Di(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Ls(o)&&Mt.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>Di(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return bv(this,"[role='treeitem']")||[]}}h([f({attribute:"render-collapsed-nodes"})],Ir.prototype,"renderCollapsedNodes",void 0);h([y],Ir.prototype,"currentSelected",void 0);h([y],Ir.prototype,"slottedTreeItems",void 0);class w0{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class No extends w0{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new No(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const at=No.with(window.matchMedia("(forced-colors)"));No.with(window.matchMedia("(prefers-color-scheme: dark)"));No.with(window.matchMedia("(prefers-color-scheme: light)"));class $0{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){Y.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){Y.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Le="not-allowed",C0=":host([hidden]){display:none}";function lt(i){return`${C0}:host{display:${i}}`}const K=yv()?"focus-visible":"focus";function Zi(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function Da(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Yi(i,t,e){return isNaN(i)?t:t+i*(e-t)}function k0(i){const t=Math.round(Zi(i,0,255)).toString(16);return t.length===1?"0"+t:t}function mn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function oe(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class Eo{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new Eo(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new Eo(oe(this.h,t),oe(this.s,t),oe(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Ut{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Ut(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Ut(oe(this.l,t),oe(this.a,t),oe(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Ut.epsilon=216/24389;Ut.kappa=24389/27;class Pt{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new Pt(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Yi(this.r,0,255))},${Math.round(Yi(this.g,0,255))},${Math.round(Yi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Yi(this.r,0,255))},${Math.round(Yi(this.g,0,255))},${Math.round(Yi(this.b,0,255))},${Zi(this.a,0,1)})`}roundToPrecision(t){return new Pt(oe(this.r,t),oe(this.g,t),oe(this.b,t),oe(this.a,t))}clamp(){return new Pt(Zi(this.r,0,1),Zi(this.g,0,1),Zi(this.b,0,1),Zi(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return k0(Yi(t,0,255))}}class ye{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new ye(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new ye(oe(this.x,t),oe(this.y,t),oe(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}ye.whitePoint=new ye(.95047,1,1.08883);function F0(i){return i.r*.2126+i.g*.7152+i.b*.0722}function rf(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return F0(new Pt(t(i.r),t(i.g),t(i.b),1))}function Ea(i,t,e){return e-t===0?0:(i-t)/(e-t)}function Oa(i,t,e){const s=Ea(i.r,t.r,e.r),o=Ea(i.g,t.g,e.g),n=Ea(i.b,t.b,e.b);return(s+o+n)/3}function S0(i,t,e=null){let s=0,o=e;return o!==null?s=Oa(i,t,o):(o=new Pt(0,0,0,1),s=Oa(i,t,o),s<=0&&(o=new Pt(1,1,1,1),s=Oa(i,t,o))),s=Math.round(s*1e3)/1e3,new Pt(o.r,o.g,o.b,s)}function Xd(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new Eo(o,r,n)}function T0(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new Pt(n+o,r+o,a+o,t)}function I0(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Ut.epsilon?a=o:a=(116*e-16)/Ut.kappa;let l=0;i.l>Ut.epsilon*Ut.kappa?l=n:l=i.l/Ut.kappa;let c=0;return r>Ut.epsilon?c=r:c=(116*s-16)/Ut.kappa,a=ye.whitePoint.x*a,l=ye.whitePoint.y*l,c=ye.whitePoint.z*c,new ye(a,l,c)}function R0(i){function t(l){return l>Ut.epsilon?Math.pow(l,1/3):(Ut.kappa*l+16)/116}const e=t(i.x/ye.whitePoint.x),s=t(i.y/ye.whitePoint.y),o=t(i.z/ye.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Ut(n,r,a)}function D0(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new ye(n,r,a)}function E0(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new Pt(s,o,n,t)}function O0(i){return R0(D0(i))}function Aa(i,t=1){return E0(I0(i),t)}var Yd;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(Yd||(Yd={}));function A0(i,t){if(t.a>=1)return t;if(t.a<=0)return new Pt(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new Pt(e,s,o,1)}function bn(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new Pt(mn(i,t.r,e.r),mn(i,t.g,e.g),mn(i,t.b,e.b),mn(i,t.a,e.a))}var Jd;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(Jd||(Jd={}));const V0=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function ss(i){const t=V0.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new Pt(Da((s&16711680)>>>16,0,255),Da((s&65280)>>>8,0,255),Da(s&255,0,255),1)}function Xn(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Ee=Object.freeze({create(i,t,e){return new Yn(i,t,e)},from(i){return new Yn(i.r,i.g,i.b)}});function L0(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class Yn extends Pt{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Xn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=rf(this)}static fromObject(t){return new Yn(t.r,t.g,t.b)}}function al(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?al(i,t,e,o):al(i,t,o+1,s)}const P0=(-.1+Math.sqrt(.21))/2;function zo(i){return i.relativeLuminance<=P0}function us(i){return zo(i)?-1:1}const Qd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function _0(i,t,e){return typeof i=="number"?Oo.from(Ee.create(i,t,e)):Oo.from(i)}function H0(i,t){return L0(i)?Je.from(i,t):Je.from(Ee.create(i.r,i.g,i.b),t)}const Oo=Object.freeze({create:_0,from:H0});class Je{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=us(t));const l=c=>Xn(t,c)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),al(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[Zi(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=Xd(t).s,n=Xd(e);if(n.s<o){const r=new Eo(n.h,o,n.l);return T0(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=O0(Pt.fromObject(t).roundToPrecision(4)),o=Aa(new Ut(0,s.a,s.b)).clamp().roundToPrecision(4),n=Aa(new Ut(50,s.a,s.b)).clamp().roundToPrecision(4),r=Aa(new Ut(100,s.a,s.b)).clamp().roundToPrecision(4),a=new Pt(0,0,0),l=new Pt(1,1,1),c=r.equalValue(l)?0:14,d=o.equalValue(a)?0:14;for(let u=100+c;u>=0-d;u-=.5){let b;if(u<0){const w=u/d+1;b=bn(w,a,o)}else if(u<=50)b=bn(Je.ramp(u),o,n);else if(u<=100)b=bn(Je.ramp(u),n,r);else{const w=(u-100)/c;b=bn(w,r,l)}b=Je.saturationBump(n,b).roundToPrecision(4),e.push(Ee.from(b))}return new Je(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=c=>{const d=e.closestIndexOf(c);return o===1?e.lastIndex-d:d};o===1&&s.reverse();const a=t(s[s.length-2]);if(oe(Xn(s[s.length-1],s[s.length-2]),2)<a){s.pop();const c=e.colorContrast(n[e.lastIndex],a,void 0,o),d=r(c),u=r(s[s.length-2]),b=d-u;let w=1;for(let C=s.length-b-1;C<s.length;C++){const k=r(s[C]),D=C===s.length-1?e.lastIndex:k+w;s[C]=n[D],w++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=Je.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return oe(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?Qd:Object.assign(Object.assign({},Qd),e);return new Je(t,Object.freeze(Je.createColorPaletteByContrast(t,s)))}}const Jn=Ee.create(1,1,1),Zl=Ee.create(0,0,0),M0=Ee.create(.5,.5,.5),Va=ss("#0078D4"),N0=Ee.create(Va.r,Va.g,Va.b);function af(i,t,e,s,o){const n=d=>d.contrast(Jn)>=o?Jn:Zl,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),c=n(s);return{rest:r,hover:a,active:l,focus:c}}class Rr{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=Xn.bind(null,this),this.createCSS=this.toColorString,this.color=new Pt(t,e,s),this.cssGradient=o,this.relativeLuminance=rf(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new Rr(t.r,t.g,t.b,e)}}const z0=new Pt(0,0,0),B0=new Pt(1,1,1);function lf(i,t,e,s,o,n,r,a,l=10,c=!1){const d=i.closestIndexOf(t);a===void 0&&(a=us(t));function u(W){if(c){const nt=i.closestIndexOf(t),bt=i.get(nt),it=W.relativeLuminance<t.relativeLuminance?z0:B0,ce=S0(ss(W.toColorString()),ss(bt.toColorString()),it).roundToPrecision(2),de=A0(ss(t.toColorString()),ce);return Ee.from(de)}else return W}const b=d+a*e,w=b+a*(s-e),C=b+a*(o-e),k=b+a*(n-e),D=a===-1?0:100-l,N=a===-1?l:100;function U(W,nt){const bt=i.get(W);if(nt){const it=i.get(W+a*r),ce=a===-1?it:bt,de=a===-1?bt:it,to=`linear-gradient(${u(ce).toColorString()} ${D}%, ${u(de).toColorString()} ${N}%)`;return Rr.fromObject(ce,to)}else return u(bt)}return{rest:U(b,!0),hover:U(w,!0),active:U(C,!1),focus:U(k,!0)}}function j0(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),c=us(t),d=l+c*e,u=d+c*(s-e),b=d+c*(o-e),w=d+c*(n-e),C=`calc(100% - ${a})`;function k(D,N){const U=i.get(D);if(N){const W=i.get(D+c*r),nt=`linear-gradient(${U.toColorString()} ${C}, ${W.toColorString()} ${C}, ${W.toColorString()})`;return Rr.fromObject(U,nt)}else return U}return{rest:k(d,!0),hover:k(u,!0),active:k(b,!1),focus:k(w,!0)}}function U0(i,t,e){return i.colorContrast(t,e)}function Hs(i,t,e,s,o,n,r,a){a==null&&(a=us(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function q0(i,t,e,s,o,n,r,a=void 0,l,c,d,u,b,w=void 0){return zo(t)?Hs(i,t,l,c,d,u,b,w):Hs(i,t,e,s,o,n,r,a)}function W0(i,t,e){return i.get(i.closestIndexOf(t)+us(t)*e)}function Pi(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=us(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function Kl(i,t,e,s,o,n,r=void 0,a,l,c,d,u=void 0){return zo(t)?Pi(i,t,a,l,c,d,u):Pi(i,t,e,s,o,n,r)}function G0(i,t){return zo(t)?Jn:Zl}function X0(i,t,e){return zo(t)?Zl:Jn}function Y0(i){return Ee.create(i,i,i)}var ll;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(ll||(ll={}));function Bo(i,t){return i.closestIndexOf(Y0(t))}function J0(i,t){return i.get(Bo(i,t))}function Q0(i,t,e){return i.get(Bo(i,t)+e)}function cf(i,t,e){return i.get(Bo(i,t)+e*-1)}function Z0(i,t,e){return i.get(Bo(i,t)+e*-1*2)}function K0(i,t,e){return i.get(Bo(i,t)+e*-1*3)}const tx={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=mt;function A(i){return mt.create({name:i,cssCustomPropertyName:null})}const Ln=v("direction").withDefault(wt.ltr),Fe=v("disabled-opacity").withDefault(.3),Dr=v("base-height-multiplier").withDefault(8),ex=v("base-horizontal-spacing-multiplier").withDefault(3),zi=v("density").withDefault(0),_=v("design-unit").withDefault(4),pt=v("control-corner-radius").withDefault(4),ai=v("layer-corner-radius").withDefault(8),j=v("stroke-width").withDefault(1),Yt=v("focus-stroke-width").withDefault(2),Pe=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),ix=v("font-weight").withDefault(tx.Normal);function wi(i){return t=>{const e=i.getValueFor(t),s=ix.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const Er=v("type-ramp-base-font-size").withDefault("14px"),df=v("type-ramp-base-line-height").withDefault("20px"),sx=v("type-ramp-base-font-variations").withDefault(wi(Er)),tc=v("type-ramp-minus-1-font-size").withDefault("12px"),ec=v("type-ramp-minus-1-line-height").withDefault("16px"),ox=v("type-ramp-minus-1-font-variations").withDefault(wi(tc)),ic=v("type-ramp-minus-2-font-size").withDefault("10px"),hf=v("type-ramp-minus-2-line-height").withDefault("14px"),nx=v("type-ramp-minus-2-font-variations").withDefault(wi(ic)),sc=v("type-ramp-plus-1-font-size").withDefault("16px"),uf=v("type-ramp-plus-1-line-height").withDefault("22px"),rx=v("type-ramp-plus-1-font-variations").withDefault(wi(sc)),Or=v("type-ramp-plus-2-font-size").withDefault("20px"),ff=v("type-ramp-plus-2-line-height").withDefault("26px"),ax=v("type-ramp-plus-2-font-variations").withDefault(wi(Or)),oc=v("type-ramp-plus-3-font-size").withDefault("24px"),pf=v("type-ramp-plus-3-line-height").withDefault("32px"),lx=v("type-ramp-plus-3-font-variations").withDefault(wi(oc)),nc=v("type-ramp-plus-4-font-size").withDefault("28px"),gf=v("type-ramp-plus-4-line-height").withDefault("36px"),cx=v("type-ramp-plus-4-font-variations").withDefault(wi(nc)),rc=v("type-ramp-plus-5-font-size").withDefault("32px"),mf=v("type-ramp-plus-5-line-height").withDefault("40px"),dx=v("type-ramp-plus-5-font-variations").withDefault(wi(rc)),ac=v("type-ramp-plus-6-font-size").withDefault("40px"),bf=v("type-ramp-plus-6-line-height").withDefault("52px"),hx=v("type-ramp-plus-6-font-variations").withDefault(wi(ac)),fs=v("base-layer-luminance").withDefault(ll.LightMode),cl=A("accent-fill-rest-delta").withDefault(0),dl=A("accent-fill-hover-delta").withDefault(-2),hl=A("accent-fill-active-delta").withDefault(-5),ul=A("accent-fill-focus-delta").withDefault(0),vf=A("accent-foreground-rest-delta").withDefault(0),yf=A("accent-foreground-hover-delta").withDefault(3),xf=A("accent-foreground-active-delta").withDefault(-8),wf=A("accent-foreground-focus-delta").withDefault(0),$f=A("neutral-fill-rest-delta").withDefault(-1),Cf=A("neutral-fill-hover-delta").withDefault(1),kf=A("neutral-fill-active-delta").withDefault(0),Ff=A("neutral-fill-focus-delta").withDefault(0),Sf=A("neutral-fill-input-rest-delta").withDefault(-1),Tf=A("neutral-fill-input-hover-delta").withDefault(1),If=A("neutral-fill-input-active-delta").withDefault(0),Rf=A("neutral-fill-input-focus-delta").withDefault(-2),vn=A("neutral-fill-input-alt-rest-delta").withDefault(2),Zd=A("neutral-fill-input-alt-hover-delta").withDefault(4),Kd=A("neutral-fill-input-alt-active-delta").withDefault(6),th=A("neutral-fill-input-alt-focus-delta").withDefault(2),_i=A("neutral-fill-layer-rest-delta").withDefault(-2),ux=A("neutral-fill-layer-hover-delta").withDefault(-3),fx=A("neutral-fill-layer-active-delta").withDefault(-3),yn=A("neutral-fill-layer-alt-rest-delta").withDefault(-1),px=A("neutral-fill-secondary-rest-delta").withDefault(3),gx=A("neutral-fill-secondary-hover-delta").withDefault(2),mx=A("neutral-fill-secondary-active-delta").withDefault(1),bx=A("neutral-fill-secondary-focus-delta").withDefault(3),Df=A("neutral-fill-stealth-rest-delta").withDefault(0),Ef=A("neutral-fill-stealth-hover-delta").withDefault(3),Of=A("neutral-fill-stealth-active-delta").withDefault(2),Af=A("neutral-fill-stealth-focus-delta").withDefault(0),vx=A("neutral-fill-strong-rest-delta").withDefault(0),Vf=A("neutral-fill-strong-hover-delta").withDefault(8),Lf=A("neutral-fill-strong-active-delta").withDefault(-5),Pf=A("neutral-fill-strong-focus-delta").withDefault(0),_f=A("neutral-stroke-rest-delta").withDefault(8),Hf=A("neutral-stroke-hover-delta").withDefault(12),Mf=A("neutral-stroke-active-delta").withDefault(6),Nf=A("neutral-stroke-focus-delta").withDefault(8),zf=A("neutral-stroke-control-rest-delta").withDefault(3),Bf=A("neutral-stroke-control-hover-delta").withDefault(5),jf=A("neutral-stroke-control-active-delta").withDefault(5),Uf=A("neutral-stroke-control-focus-delta").withDefault(5),qf=A("neutral-stroke-divider-rest-delta").withDefault(4),eh=A("neutral-stroke-layer-rest-delta").withDefault(3),yx=A("neutral-stroke-layer-hover-delta").withDefault(3),xx=A("neutral-stroke-layer-active-delta").withDefault(3),wx=A("neutral-stroke-strong-hover-delta").withDefault(0),$x=A("neutral-stroke-strong-active-delta").withDefault(0),Cx=A("neutral-stroke-strong-focus-delta").withDefault(0),Wf=v("neutral-base-color").withDefault(M0),Ct=A("neutral-palette").withDefault(i=>Oo.from(Wf.getValueFor(i))),Gf=v("accent-base-color").withDefault(N0),lc=A("accent-palette").withDefault(i=>Oo.from(Gf.getValueFor(i))),kx=A("neutral-layer-card-container-recipe").withDefault({evaluate:i=>cf(Ct.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>kx.getValueFor(i).evaluate(i));const Fx=A("neutral-layer-floating-recipe").withDefault({evaluate:i=>Q0(Ct.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))}),jo=v("neutral-layer-floating").withDefault(i=>Fx.getValueFor(i).evaluate(i)),Sx=A("neutral-layer-1-recipe").withDefault({evaluate:i=>J0(Ct.getValueFor(i),fs.getValueFor(i))}),Tx=v("neutral-layer-1").withDefault(i=>Sx.getValueFor(i).evaluate(i)),Ix=A("neutral-layer-2-recipe").withDefault({evaluate:i=>cf(Ct.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-2").withDefault(i=>Ix.getValueFor(i).evaluate(i));const Rx=A("neutral-layer-3-recipe").withDefault({evaluate:i=>Z0(Ct.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-3").withDefault(i=>Rx.getValueFor(i).evaluate(i));const Dx=A("neutral-layer-4-recipe").withDefault({evaluate:i=>K0(Ct.getValueFor(i),fs.getValueFor(i),_i.getValueFor(i))});v("neutral-layer-4").withDefault(i=>Dx.getValueFor(i).evaluate(i));const ot=v("fill-color").withDefault(i=>Tx.getValueFor(i));var Qn;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(Qn||(Qn={}));const Ar=A("accent-fill-recipe").withDefault({evaluate:(i,t)=>q0(lc.getValueFor(i),t||ot.getValueFor(i),5,cl.getValueFor(i),dl.getValueFor(i),hl.getValueFor(i),ul.getValueFor(i),void 0,8,cl.getValueFor(i),dl.getValueFor(i),hl.getValueFor(i),ul.getValueFor(i),void 0)}),yt=v("accent-fill-rest").withDefault(i=>Ar.getValueFor(i).evaluate(i).rest),Ue=v("accent-fill-hover").withDefault(i=>Ar.getValueFor(i).evaluate(i).hover),qe=v("accent-fill-active").withDefault(i=>Ar.getValueFor(i).evaluate(i).active),Vr=v("accent-fill-focus").withDefault(i=>Ar.getValueFor(i).evaluate(i).focus),Lr=A("foreground-on-accent-recipe").withDefault({evaluate:i=>af(yt.getValueFor(i),Ue.getValueFor(i),qe.getValueFor(i),Vr.getValueFor(i),Qn.normal)}),rs=v("foreground-on-accent-rest").withDefault(i=>Lr.getValueFor(i).evaluate(i).rest),Xf=v("foreground-on-accent-hover").withDefault(i=>Lr.getValueFor(i).evaluate(i).hover),Yf=v("foreground-on-accent-active").withDefault(i=>Lr.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>Lr.getValueFor(i).evaluate(i).focus);const Pr=A("accent-foreground-recipe").withDefault({evaluate:(i,t)=>Hs(lc.getValueFor(i),t||ot.getValueFor(i),9.5,vf.getValueFor(i),yf.getValueFor(i),xf.getValueFor(i),wf.getValueFor(i))}),Jf=v("accent-foreground-rest").withDefault(i=>Pr.getValueFor(i).evaluate(i).rest),Qf=v("accent-foreground-hover").withDefault(i=>Pr.getValueFor(i).evaluate(i).hover),Zf=v("accent-foreground-active").withDefault(i=>Pr.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>Pr.getValueFor(i).evaluate(i).focus);const _r=A("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>lf(Ct.getValueFor(i),t||ot.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),Ex=v("accent-stroke-control-rest").withDefault(i=>_r.getValueFor(i).evaluate(i,yt.getValueFor(i)).rest),Ox=v("accent-stroke-control-hover").withDefault(i=>_r.getValueFor(i).evaluate(i,Ue.getValueFor(i)).hover),Ax=v("accent-stroke-control-active").withDefault(i=>_r.getValueFor(i).evaluate(i,qe.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>_r.getValueFor(i).evaluate(i,Vr.getValueFor(i)).focus);const Hr=A("neutral-fill-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),$f.getValueFor(i),Cf.getValueFor(i),kf.getValueFor(i),Ff.getValueFor(i),void 0,2,3,1,2,void 0)}),Te=v("neutral-fill-rest").withDefault(i=>Hr.getValueFor(i).evaluate(i).rest),ih=v("neutral-fill-hover").withDefault(i=>Hr.getValueFor(i).evaluate(i).hover),sh=v("neutral-fill-active").withDefault(i=>Hr.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>Hr.getValueFor(i).evaluate(i).focus);const Bi=A("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),Sf.getValueFor(i),Tf.getValueFor(i),If.getValueFor(i),Rf.getValueFor(i),void 0,2,3,1,0,void 0)}),xn=v("neutral-fill-input-rest").withDefault(i=>Bi.getValueFor(i).evaluate(i).rest),oh=v("neutral-fill-input-hover").withDefault(i=>Bi.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>Bi.getValueFor(i).evaluate(i).active);const nh=v("neutral-fill-input-focus").withDefault(i=>Bi.getValueFor(i).evaluate(i).focus),Mr=A("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>Kl(Ct.getValueFor(i),t||ot.getValueFor(i),vn.getValueFor(i),Zd.getValueFor(i),Kd.getValueFor(i),th.getValueFor(i),1,vn.getValueFor(i),vn.getValueFor(i)-Zd.getValueFor(i),vn.getValueFor(i)-Kd.getValueFor(i),th.getValueFor(i),1)}),cc=v("neutral-fill-input-alt-rest").withDefault(i=>Mr.getValueFor(i).evaluate(i).rest),dc=v("neutral-fill-input-alt-hover").withDefault(i=>Mr.getValueFor(i).evaluate(i).hover),hc=v("neutral-fill-input-alt-active").withDefault(i=>Mr.getValueFor(i).evaluate(i).active),uc=v("neutral-fill-input-alt-focus").withDefault(i=>Mr.getValueFor(i).evaluate(i).focus),ps=A("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),_i.getValueFor(i),ux.getValueFor(i),fx.getValueFor(i),_i.getValueFor(i),1)}),Vx=v("neutral-fill-layer-rest").withDefault(i=>ps.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>ps.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>ps.getValueFor(i).evaluate(i).active);const Lx=A("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i),yn.getValueFor(i))}),Px=v("neutral-fill-layer-alt-rest").withDefault(i=>Lx.getValueFor(i).evaluate(i).rest),gs=A("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),px.getValueFor(i),gx.getValueFor(i),mx.getValueFor(i),bx.getValueFor(i))}),as=v("neutral-fill-secondary-rest").withDefault(i=>gs.getValueFor(i).evaluate(i).rest),fc=v("neutral-fill-secondary-hover").withDefault(i=>gs.getValueFor(i).evaluate(i).hover),_x=v("neutral-fill-secondary-active").withDefault(i=>gs.getValueFor(i).evaluate(i).active),Hx=v("neutral-fill-secondary-focus").withDefault(i=>gs.getValueFor(i).evaluate(i).focus),We=A("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),Df.getValueFor(i),Ef.getValueFor(i),Of.getValueFor(i),Af.getValueFor(i))}),Ms=v("neutral-fill-stealth-rest").withDefault(i=>We.getValueFor(i).evaluate(i).rest),Ns=v("neutral-fill-stealth-hover").withDefault(i=>We.getValueFor(i).evaluate(i).hover),zs=v("neutral-fill-stealth-active").withDefault(i=>We.getValueFor(i).evaluate(i).active),Mx=v("neutral-fill-stealth-focus").withDefault(i=>We.getValueFor(i).evaluate(i).focus),Nr=A("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>Hs(Ct.getValueFor(i),t||ot.getValueFor(i),4.5,vx.getValueFor(i),Vf.getValueFor(i),Lf.getValueFor(i),Pf.getValueFor(i))}),Kf=v("neutral-fill-strong-rest").withDefault(i=>Nr.getValueFor(i).evaluate(i).rest),Nx=v("neutral-fill-strong-hover").withDefault(i=>Nr.getValueFor(i).evaluate(i).hover),zx=v("neutral-fill-strong-active").withDefault(i=>Nr.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>Nr.getValueFor(i).evaluate(i).focus);const zr=A("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>Hs(Ct.getValueFor(i),t||ot.getValueFor(i),16,0,-19,-30,0)}),gt=v("neutral-foreground-rest").withDefault(i=>zr.getValueFor(i).evaluate(i).rest),Bx=v("neutral-foreground-hover").withDefault(i=>zr.getValueFor(i).evaluate(i).hover),jx=v("neutral-foreground-active").withDefault(i=>zr.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>zr.getValueFor(i).evaluate(i).focus);const Uo=A("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>U0(Ct.getValueFor(i),t||ot.getValueFor(i),4.5)}),Bs=v("neutral-foreground-hint").withDefault(i=>Uo.getValueFor(i).evaluate(i)),Br=A("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),_f.getValueFor(i),Hf.getValueFor(i),Mf.getValueFor(i),Nf.getValueFor(i))}),Ao=v("neutral-stroke-rest").withDefault(i=>Br.getValueFor(i).evaluate(i).rest),Ux=v("neutral-stroke-hover").withDefault(i=>Br.getValueFor(i).evaluate(i).hover),qx=v("neutral-stroke-active").withDefault(i=>Br.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>Br.getValueFor(i).evaluate(i).focus);const jr=A("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>lf(Ct.getValueFor(i),t||ot.getValueFor(i),zf.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),Uf.getValueFor(i),5)}),pc=v("neutral-stroke-control-rest").withDefault(i=>jr.getValueFor(i).evaluate(i).rest),tp=v("neutral-stroke-control-hover").withDefault(i=>jr.getValueFor(i).evaluate(i).hover),ep=v("neutral-stroke-control-active").withDefault(i=>jr.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>jr.getValueFor(i).evaluate(i).focus);const Wx=A("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>W0(Ct.getValueFor(i),t||ot.getValueFor(i),qf.getValueFor(i))}),Zn=v("neutral-stroke-divider-rest").withDefault(i=>Wx.getValueFor(i).evaluate(i)),Ur=A("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>j0(Ct.getValueFor(i),t||ot.getValueFor(i),zf.getValueFor(i),Bf.getValueFor(i),jf.getValueFor(i),Uf.getValueFor(i),20,j.getValueFor(i)+"px")}),rh=v("neutral-stroke-input-rest").withDefault(i=>Ur.getValueFor(i).evaluate(i).rest),Gx=v("neutral-stroke-input-hover").withDefault(i=>Ur.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>Ur.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>Ur.getValueFor(i).evaluate(i).focus);const gc=A("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>Pi(Ct.getValueFor(i),t||ot.getValueFor(i),eh.getValueFor(i),yx.getValueFor(i),xx.getValueFor(i),eh.getValueFor(i))}),Ds=v("neutral-stroke-layer-rest").withDefault(i=>gc.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>gc.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>gc.getValueFor(i).evaluate(i).active);const qr=A("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>Hs(Ct.getValueFor(i),t||ot.getValueFor(i),5.5,0,wx.getValueFor(i),$x.getValueFor(i),Cx.getValueFor(i))}),Xs=v("neutral-stroke-strong-rest").withDefault(i=>qr.getValueFor(i).evaluate(i).rest),mc=v("neutral-stroke-strong-hover").withDefault(i=>qr.getValueFor(i).evaluate(i).hover),bc=v("neutral-stroke-strong-active").withDefault(i=>qr.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>qr.getValueFor(i).evaluate(i).focus);const Xx=A("focus-stroke-outer-recipe").withDefault({evaluate:i=>G0(Ct.getValueFor(i),ot.getValueFor(i))}),Wr=v("focus-stroke-outer").withDefault(i=>Xx.getValueFor(i).evaluate(i)),Yx=A("focus-stroke-inner-recipe").withDefault({evaluate:i=>X0(lc.getValueFor(i),ot.getValueFor(i),Wr.getValueFor(i))}),Jx=v("focus-stroke-inner").withDefault(i=>Yx.getValueFor(i).evaluate(i)),Gr=A("foreground-on-accent-large-recipe").withDefault({evaluate:i=>af(yt.getValueFor(i),Ue.getValueFor(i),qe.getValueFor(i),Vr.getValueFor(i),Qn.large)});v("foreground-on-accent-rest-large").withDefault(i=>Gr.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>Gr.getValueFor(i).evaluate(i,Ue.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>Gr.getValueFor(i).evaluate(i,qe.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>Gr.getValueFor(i).evaluate(i,Vr.getValueFor(i)).focus);const Qx=v("neutral-fill-inverse-rest-delta").withDefault(0),Zx=v("neutral-fill-inverse-hover-delta").withDefault(-3),Kx=v("neutral-fill-inverse-active-delta").withDefault(7),tw=v("neutral-fill-inverse-focus-delta").withDefault(0);function ew(i,t,e,s,o,n){const r=us(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),c=r===1?e<s:r*e>r*s;let d,u;return c?(d=a,u=l):(d=l,u=a),{rest:i.get(d),hover:i.get(u),active:i.get(d+r*o),focus:i.get(d+r*n)}}const Xr=A("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>ew(Ct.getValueFor(i),t||ot.getValueFor(i),Qx.getValueFor(i),Zx.getValueFor(i),Kx.getValueFor(i),tw.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>Xr.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>Xr.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>Xr.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>Xr.getValueFor(i).evaluate(i).focus);const At=xe`
  font-family: ${Pe};
  font-size: ${Er};
  line-height: ${df};
  font-weight: initial;
  font-variation-settings: ${sx};
`,ip=xe`
  font-family: ${Pe};
  font-size: ${tc};
  line-height: ${ec};
  font-weight: initial;
  font-variation-settings: ${ox};
`;xe`
  font-family: ${Pe};
  font-size: ${ic};
  line-height: ${hf};
  font-weight: initial;
  font-variation-settings: ${nx};
`;xe`
  font-family: ${Pe};
  font-size: ${sc};
  line-height: ${uf};
  font-weight: initial;
  font-variation-settings: ${rx};
`;xe`
  font-family: ${Pe};
  font-size: ${Or};
  line-height: ${ff};
  font-weight: initial;
  font-variation-settings: ${ax};
`;xe`
  font-family: ${Pe};
  font-size: ${oc};
  line-height: ${pf};
  font-weight: initial;
  font-variation-settings: ${lx};
`;xe`
  font-family: ${Pe};
  font-size: ${nc};
  line-height: ${gf};
  font-weight: initial;
  font-variation-settings: ${cx};
`;xe`
  font-family: ${Pe};
  font-size: ${rc};
  line-height: ${mf};
  font-weight: initial;
  font-variation-settings: ${dx};
`;xe`
  font-family: ${Pe};
  font-size: ${ac};
  line-height: ${bf};
  font-weight: initial;
  font-variation-settings: ${hx};
`;const iw=(i,t)=>T`
    ${lt("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${At}
      color: ${gt};
      gap: calc(${_} * 1px);
    }
  `,_e=xe`
  outline: calc(${Yt} * 1px) solid ${Wr};
  outline-offset: calc(${Yt} * -1px);
`,qo=xe`
  outline: calc(${Yt} * 1px) solid ${Wr};
  outline-offset: calc(${j} * 1px);
`,rt=xe`(${Dr} + ${zi}) * ${_}`,sw=mt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),ow=mt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),nw=mt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=ps.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),rw=(i,t)=>T`
    ${lt("flex")} :host {
      box-sizing: border-box;
      ${At};
      flex-direction: column;
      background: ${Vx};
      color: ${gt};
      border: calc(${j} * 1px) solid ${Ds};
      border-radius: calc(${ai} * 1px);
    }

    .region {
      display: none;
      padding: calc(${_} * 2 * 1px);
      background: ${Px};
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
      top: calc(${j} * -1px);
      left: calc(${j} * -1px);
      right: calc(${j} * -1px);
      bottom: calc(${j} * -1px);
      cursor: pointer;
    }

    .button:${K}::before {
      ${_e}
      border-radius: calc(${ai} * 1px);
    }

    :host(.expanded) .button:${K}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${j} * 1px) solid ${Ds};
      border-bottom-left-radius: calc((${ai} - ${j}) * 1px);
      border-bottom-right-radius: calc((${ai} - ${j}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${sw};
      border-radius: calc(${pt} * 1px);
      fill: currentcolor;
      width: calc(${rt} * 1px);
      height: calc(${rt} * 1px);
      margin: calc(${_} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${ow};
    }

    .heading:active .icon {
      background: ${nw};
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
  `.withBehaviors(at(T`
        .button:${K}::before {
          outline-color: ${g.Highlight};
        }
        .icon {
          fill: ${g.ButtonText};
        }
      `)),aw=os.compose({baseName:"accordion-item",template:tv,styles:rw,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),lw=Gl.compose({baseName:"accordion",template:pv,styles:iw});function L(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Ys{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Ln.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new cw(this.ltr,this.rtl,t),s=Ln.getValueFor(t);Ln.subscribe(e),e.attach(s),this.cache.set(t,e)}}class cw{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const ms=mt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),dw=mt.create("elevation-shadow-card-rest-size").withDefault(4),hw=mt.create("elevation-shadow-card-hover-size").withDefault(8),uw=mt.create("elevation-shadow-card-active-size").withDefault(0),fw=mt.create("elevation-shadow-card-focus-size").withDefault(8),pw=mt.create("elevation-shadow-card-rest").withDefault(i=>ms.getValueFor(i).evaluate(i,dw.getValueFor(i)));mt.create("elevation-shadow-card-hover").withDefault(i=>ms.getValueFor(i).evaluate(i,hw.getValueFor(i)));mt.create("elevation-shadow-card-active").withDefault(i=>ms.getValueFor(i).evaluate(i,uw.getValueFor(i)));mt.create("elevation-shadow-card-focus").withDefault(i=>ms.getValueFor(i).evaluate(i,fw.getValueFor(i)));const gw=mt.create("elevation-shadow-tooltip-size").withDefault(16),mw=mt.create("elevation-shadow-tooltip").withDefault(i=>ms.getValueFor(i).evaluate(i,gw.getValueFor(i))),bw=mt.create("elevation-shadow-flyout-size").withDefault(32),sp=mt.create("elevation-shadow-flyout").withDefault(i=>ms.getValueFor(i).evaluate(i,bw.getValueFor(i))),vw=mt.create("elevation-shadow-dialog-size").withDefault(128),yw=mt.create("elevation-shadow-dialog").withDefault(i=>ms.getValueFor(i).evaluate(i,vw.getValueFor(i))),op=(i,t,e,s="[disabled]")=>T`
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
      border: calc(${j} * 1px) solid transparent;
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

    .control:${K} {
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
  `,vc=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${pc};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${ih}, ${ih}),
        border-box ${tp};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${sh}, ${sh}),
        border-box ${ep};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${Ao};
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
    `)),np=(i,t,e,s="[disabled]")=>T`
    .control {
      background: padding-box linear-gradient(${yt}, ${yt}),
        border-box ${Ex};
      color: ${rs};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${Ue}, ${Ue}),
        border-box ${Ox};
      color: ${Xf};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${qe}, ${qe}),
        border-box ${Ax};
      color: ${Yf};
    }

    :host(${s}) .control {
      background: ${yt};
    }

    .control:${K} {
      box-shadow: 0 0 0 calc(${Yt} * 1px) ${Jx} inset !important;
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
      `)),xw=(i,t,e,s="[disabled]")=>T`
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
      color: ${Jf};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${Qf};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Zf};
      text-decoration: none;
    }

    .control:${K} {
      ${qo}
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
      `)),rp=(i,t,e,s="[disabled]")=>T`
    :host {
      color: ${Jf};
    }

    .control {
      background: ${Ms};
    }

    :host(${e}:hover) .control {
      background: ${Ns};
      color: ${Qf};
    }

    :host(${e}:active) .control {
      background: ${zs};
      color: ${Zf};
    }

    :host(${s}) .control {
      background: ${Ms};
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
      `)),ap=(i,t,e,s="[disabled]")=>T`
    .control {
      background: transparent !important;
      border-color: ${Ao};
    }

    :host(${e}:hover) .control {
      border-color: ${Ux};
    }

    :host(${e}:active) .control {
      border-color: ${qx};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${Ao};
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
      `)),ww=mt.create("input-placeholder-rest").withDefault(i=>{const t=Bi.getValueFor(i);return Uo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),$w=mt.create("input-placeholder-hover").withDefault(i=>{const t=Bi.getValueFor(i);return Uo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Cw=mt.create("input-filled-placeholder-rest").withDefault(i=>{const t=gs.getValueFor(i);return Uo.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),kw=mt.create("input-filled-placeholder-hover").withDefault(i=>{const t=gs.getValueFor(i);return Uo.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Yr=(i,t,e)=>T`
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
    border: calc(${j} * 1px) solid transparent;
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
    cursor: ${Le};
  }

  :host([disabled]) {
    opacity: ${Fe};
  }
`,Wo=(i,t,e)=>T`
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
      border-bottom: calc(${Yt} * 1px) solid ${yt};
      border-bottom-left-radius: calc(${pt} * 1px);
      border-bottom-right-radius: calc(${pt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Go=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: padding-box linear-gradient(${xn}, ${xn}),
      border-box ${rh};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${oh}, ${oh}),
      border-box ${Gx};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${nh}, ${nh}),
      border-box ${rh};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${xn}, ${xn}),
      border-box ${Ao};
  }

  .control::placeholder {
    color: ${ww};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${$w};
  }
`,Js=(i,t,e,s=":not([disabled]):not(:focus-within)")=>T`
  ${e} {
    background: ${as};
  }

  :host(${s}:hover) ${e} {
    background: ${fc};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${Hx};
  }

  :host([disabled]) ${e} {
    background: ${as};
  }

  .control::placeholder {
    color: ${Cw};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${kw};
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
`;function It(i,t){return new $0("appearance",i,t)}const ys="[href]",Fw=(i,t)=>op().withBehaviors(It("neutral",vc(i,t,ys)),It("accent",np(i,t,ys)),It("hypertext",xw(i,t,ys)),It("lightweight",rp(i,t,ys)),It("outline",ap(i,t,ys)),It("stealth",yc(i,t,ys)));class lp extends we{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}L([f],lp.prototype,"appearance",void 0);const Sw=lp.compose({baseName:"anchor",baseClass:we,template:ju,styles:Fw,shadowOptions:{delegatesFocus:!0}}),Tw=(i,t)=>T`
  :host {
    contain: layout;
    display: block;
  }
`,Iw=X.compose({baseName:"anchored-region",template:Fv,styles:Tw}),Rw=(i,t)=>T`
    ${lt("inline-block")} :host {
      box-sizing: border-box;
      ${ip};
    }

    .control {
      border-radius: calc(${pt} * 1px);
      padding: calc(((${_} * 0.5) - ${j}) * 1px) calc((${_} - ${j}) * 1px);
      border: calc(${j} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${gt};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${yt};
      color: ${rs};
    }

    :host(.neutral) .control {
      background: ${as};
      color: ${gt};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${ec} - calc(${_} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class cp extends _o{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&J.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}L([f({mode:"fromView"})],cp.prototype,"appearance",void 0);const Dw=cp.compose({baseName:"badge",baseClass:_o,template:Tv,styles:Rw}),Ew=(i,t)=>T`
  ${lt("inline-block")} :host {
    box-sizing: border-box;
    ${At};
  }

  .list {
    display: flex;
  }
`,Ow=Uu.compose({baseName:"breadcrumb",template:Rv,styles:Ew}),Aw=(i,t)=>T`
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
      color: ${Bx};
    }

    .control:active {
      color: ${jx};
    }

    .control:${K} {
      ${qo}
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
      `)),Vw=Ro.compose({baseName:"breadcrumb-item",template:Iv,styles:Aw,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Ji=":not([disabled])",ki="[disabled]",Lw=(i,t)=>T`
    :host(${Ji}) .control {
      cursor: pointer;
    }

    :host(${ki}) .control {
      cursor: ${Le};
    }

    @media (forced-colors: none) {
      :host(${ki}) .control {
        opacity: ${Fe};
      }
    }

    ${op(i,t,Ji,ki)}
  `.withBehaviors(It("neutral",vc(i,t,Ji,ki)),It("accent",np(i,t,Ji,ki)),It("lightweight",rp(i,t,Ji,ki)),It("outline",ap(i,t,Ji,ki)),It("stealth",yc(i,t,Ji,ki)));class dp extends $e{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}L([f],dp.prototype,"appearance",void 0);const Pw=dp.compose({baseName:"button",baseClass:$e,template:Dv,styles:Lw,shadowOptions:{delegatesFocus:!0}}),_w=T`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,Hw=T`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,Mw=(i,t)=>T`
${lt("inline-block")} :host {
  --calendar-cell-size: calc((${Dr} + 2 + ${zi}) * ${_} * 1px);
  --calendar-gap: 2px;
  ${At}
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
  border: calc(${j} * 1px) solid transparent;
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
  height: calc(${j} * 1px);
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
  padding-inline-start: calc(var(--calendar-gap) + (${j} + ${pt}) * 1px);
  margin-inline-start: calc((${pt} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${rs};
}

.today .date {
  color: ${rs};
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
      `),new Ys(_w,Hw));class hp extends Ve{constructor(){super(...arguments),this.readonly=!0}}L([f({converter:Po})],hp.prototype,"readonly",void 0);const Nw=hp.compose({baseName:"calendar",template:Xv,styles:Mw,title:Bv}),zw=(i,t)=>T`
    ${lt("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${ot};
      color: ${gt};
      border: calc(${j} * 1px) solid ${Ds};
      border-radius: calc(${ai} * 1px);
      box-shadow: ${pw};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(at(T`
        :host {
          background: ${g.Canvas};
          color: ${g.CanvasText};
        }
      `));class xc extends qu{cardFillColorChanged(t,e){if(e){const s=ss(e);s!==null&&(this.neutralPaletteSource=e,ot.setValueFor(this,Ee.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=ss(e),o=Ee.create(s.r,s.g,s.b);Ct.setValueFor(this,Oo.create(o))}}handleChange(t,e){this.cardFillColor||ot.setValueFor(this,s=>ps.getValueFor(s).evaluate(s,ot.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=Gn(this);if(t){const e=Y.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}L([f({attribute:"card-fill-color",mode:"fromView"})],xc.prototype,"cardFillColor",void 0);L([f({attribute:"neutral-palette-source",mode:"fromView"})],xc.prototype,"neutralPaletteSource",void 0);const Bw=xc.compose({baseName:"card",baseClass:qu,template:Yv,styles:zw}),jw=(i,t)=>T`
    ${lt("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${rt} / 2 + ${_}) * 1px);
      height: calc((${rt} / 2 + ${_}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${pt} * 1px);
      border: calc(${j} * 1px) solid ${Xs};
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
      background: ${dc};
      border-color: ${mc};
    }

    :host(:not(.disabled):active) .control {
      background: ${hc};
      border-color: ${bc};
    }

    :host(:${K}) .control {
      background: ${uc};
      ${qo}
    }

    :host(.checked) .control {
      background: ${yt};
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
      cursor: ${Le};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Fe};
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
      `)),Uw=xr.compose({baseName:"checkbox",template:Jv,styles:jw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),ah=".control",wn=":not([disabled]):not([open])",lh="[disabled]",up=(i,t)=>T`
    ${lt("inline-flex")}
    
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
      box-shadow: ${sp};
      background: ${ot};
      border-radius: calc(${ai} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${rt} * 1px));
      padding: calc((${_} - ${j} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${j} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${j} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc(${rt} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${At}
      min-height: 100%;
      padding: 0 calc(${_} * 2.25px);
      width: 100%;
    }

    :host(:${K}) {
      ${_e}
    }

    :host([disabled]) .control {
      cursor: ${Le};
      opacity: ${Fe};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${rt} + ${_} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${rt} + ${_} * 2) * 1px);
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
  `,qw=(i,t)=>T`
    :host([open]) .listbox {
      background: ${g.ButtonFace};
      border-color: ${g.CanvasText};
    }
  `,Ww=(i,t)=>up().withBehaviors(It("outline",vc(i,t,wn,lh)),It("filled",Js(i,t,ah,wn).withBehaviors(at(Qs(i,t,ah,wn)))),It("stealth",yc(i,t,wn,lh)),at(qw())),La=".control",Pa=":not([disabled]):not([open])",Gw=(i,t)=>T`
    ${up()}

    ${Wo()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Le};
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
      height: calc(100% - ${j} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(It("outline",Go(i,t,La,Pa)),It("filled",Js(i,t,La,Pa)),at(Qs(i,t,La,Pa)));class fp extends mi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&ot.setValueFor(this.listbox,jo)}}L([f({mode:"fromView"})],fp.prototype,"appearance",void 0);const Xw=fp.compose({baseName:"combobox",baseClass:mi,shadowOptions:{delegatesFocus:!0},template:ey,styles:Gw,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Yw=(i,t)=>T`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Jw=(i,t)=>T`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${j} * 1px) solid ${Zn};
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
      `)),Qw=(i,t)=>T`
    :host {
      padding: calc((${_} + ${Yt} - ${j}) * 1px) calc(((${_} * 3) + ${Yt} - ${j}) * 1px);
      color: ${gt};
      box-sizing: border-box;
      ${At}
      border: transparent calc(${j} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${pt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${K}) {
      ${_e}
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
      `)),Zw=gi.compose({baseName:"data-grid-cell",template:zv,styles:Qw}),Kw=Gt.compose({baseName:"data-grid-row",template:Nv,styles:Jw}),t$=zt.compose({baseName:"data-grid",template:Lv,styles:Yw}),wc={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=ss(i);return t?Ee.create(t.r,t.g,t.b):null}},ch=T`
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
    `));function B(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class z extends Z{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};Y.getNotifier(this).subscribe(t,"fillColor"),Y.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(ch):this.$fastController.removeStyles(ch)}}L([f({attribute:"no-paint",mode:"boolean"})],z.prototype,"noPaint",void 0);L([f({attribute:"fill-color",converter:wc,mode:"fromView"}),B(ot)],z.prototype,"fillColor",void 0);L([f({attribute:"accent-base-color",converter:wc,mode:"fromView"}),B(Gf)],z.prototype,"accentBaseColor",void 0);L([f({attribute:"neutral-base-color",converter:wc,mode:"fromView"}),B(Wf)],z.prototype,"neutralBaseColor",void 0);L([f({converter:H}),B(zi)],z.prototype,"density",void 0);L([f({attribute:"design-unit",converter:H}),B(_)],z.prototype,"designUnit",void 0);L([f({attribute:"direction"}),B(Ln)],z.prototype,"direction",void 0);L([f({attribute:"base-height-multiplier",converter:H}),B(Dr)],z.prototype,"baseHeightMultiplier",void 0);L([f({attribute:"base-horizontal-spacing-multiplier",converter:H}),B(ex)],z.prototype,"baseHorizontalSpacingMultiplier",void 0);L([f({attribute:"control-corner-radius",converter:H}),B(pt)],z.prototype,"controlCornerRadius",void 0);L([f({attribute:"layer-corner-radius",converter:H}),B(ai)],z.prototype,"layerCornerRadius",void 0);L([f({attribute:"stroke-width",converter:H}),B(j)],z.prototype,"strokeWidth",void 0);L([f({attribute:"focus-stroke-width",converter:H}),B(Yt)],z.prototype,"focusStrokeWidth",void 0);L([f({attribute:"disabled-opacity",converter:H}),B(Fe)],z.prototype,"disabledOpacity",void 0);L([f({attribute:"type-ramp-minus-2-font-size"}),B(ic)],z.prototype,"typeRampMinus2FontSize",void 0);L([f({attribute:"type-ramp-minus-2-line-height"}),B(hf)],z.prototype,"typeRampMinus2LineHeight",void 0);L([f({attribute:"type-ramp-minus-1-font-size"}),B(tc)],z.prototype,"typeRampMinus1FontSize",void 0);L([f({attribute:"type-ramp-minus-1-line-height"}),B(ec)],z.prototype,"typeRampMinus1LineHeight",void 0);L([f({attribute:"type-ramp-base-font-size"}),B(Er)],z.prototype,"typeRampBaseFontSize",void 0);L([f({attribute:"type-ramp-base-line-height"}),B(df)],z.prototype,"typeRampBaseLineHeight",void 0);L([f({attribute:"type-ramp-plus-1-font-size"}),B(sc)],z.prototype,"typeRampPlus1FontSize",void 0);L([f({attribute:"type-ramp-plus-1-line-height"}),B(uf)],z.prototype,"typeRampPlus1LineHeight",void 0);L([f({attribute:"type-ramp-plus-2-font-size"}),B(Or)],z.prototype,"typeRampPlus2FontSize",void 0);L([f({attribute:"type-ramp-plus-2-line-height"}),B(ff)],z.prototype,"typeRampPlus2LineHeight",void 0);L([f({attribute:"type-ramp-plus-3-font-size"}),B(oc)],z.prototype,"typeRampPlus3FontSize",void 0);L([f({attribute:"type-ramp-plus-3-line-height"}),B(pf)],z.prototype,"typeRampPlus3LineHeight",void 0);L([f({attribute:"type-ramp-plus-4-font-size"}),B(nc)],z.prototype,"typeRampPlus4FontSize",void 0);L([f({attribute:"type-ramp-plus-4-line-height"}),B(gf)],z.prototype,"typeRampPlus4LineHeight",void 0);L([f({attribute:"type-ramp-plus-5-font-size"}),B(rc)],z.prototype,"typeRampPlus5FontSize",void 0);L([f({attribute:"type-ramp-plus-5-line-height"}),B(mf)],z.prototype,"typeRampPlus5LineHeight",void 0);L([f({attribute:"type-ramp-plus-6-font-size"}),B(ac)],z.prototype,"typeRampPlus6FontSize",void 0);L([f({attribute:"type-ramp-plus-6-line-height"}),B(bf)],z.prototype,"typeRampPlus6LineHeight",void 0);L([f({attribute:"accent-fill-rest-delta",converter:H}),B(cl)],z.prototype,"accentFillRestDelta",void 0);L([f({attribute:"accent-fill-hover-delta",converter:H}),B(dl)],z.prototype,"accentFillHoverDelta",void 0);L([f({attribute:"accent-fill-active-delta",converter:H}),B(hl)],z.prototype,"accentFillActiveDelta",void 0);L([f({attribute:"accent-fill-focus-delta",converter:H}),B(ul)],z.prototype,"accentFillFocusDelta",void 0);L([f({attribute:"accent-foreground-rest-delta",converter:H}),B(vf)],z.prototype,"accentForegroundRestDelta",void 0);L([f({attribute:"accent-foreground-hover-delta",converter:H}),B(yf)],z.prototype,"accentForegroundHoverDelta",void 0);L([f({attribute:"accent-foreground-active-delta",converter:H}),B(xf)],z.prototype,"accentForegroundActiveDelta",void 0);L([f({attribute:"accent-foreground-focus-delta",converter:H}),B(wf)],z.prototype,"accentForegroundFocusDelta",void 0);L([f({attribute:"neutral-fill-rest-delta",converter:H}),B($f)],z.prototype,"neutralFillRestDelta",void 0);L([f({attribute:"neutral-fill-hover-delta",converter:H}),B(Cf)],z.prototype,"neutralFillHoverDelta",void 0);L([f({attribute:"neutral-fill-active-delta",converter:H}),B(kf)],z.prototype,"neutralFillActiveDelta",void 0);L([f({attribute:"neutral-fill-focus-delta",converter:H}),B(Ff)],z.prototype,"neutralFillFocusDelta",void 0);L([f({attribute:"neutral-fill-input-rest-delta",converter:H}),B(Sf)],z.prototype,"neutralFillInputRestDelta",void 0);L([f({attribute:"neutral-fill-input-hover-delta",converter:H}),B(Tf)],z.prototype,"neutralFillInputHoverDelta",void 0);L([f({attribute:"neutral-fill-input-active-delta",converter:H}),B(If)],z.prototype,"neutralFillInputActiveDelta",void 0);L([f({attribute:"neutral-fill-input-focus-delta",converter:H}),B(Rf)],z.prototype,"neutralFillInputFocusDelta",void 0);L([f({attribute:"neutral-fill-layer-rest-delta",converter:H}),B(_i)],z.prototype,"neutralFillLayerRestDelta",void 0);L([f({attribute:"neutral-fill-stealth-rest-delta",converter:H}),B(Df)],z.prototype,"neutralFillStealthRestDelta",void 0);L([f({attribute:"neutral-fill-stealth-hover-delta",converter:H}),B(Ef)],z.prototype,"neutralFillStealthHoverDelta",void 0);L([f({attribute:"neutral-fill-stealth-active-delta",converter:H}),B(Of)],z.prototype,"neutralFillStealthActiveDelta",void 0);L([f({attribute:"neutral-fill-stealth-focus-delta",converter:H}),B(Af)],z.prototype,"neutralFillStealthFocusDelta",void 0);L([f({attribute:"neutral-fill-strong-hover-delta",converter:H}),B(Vf)],z.prototype,"neutralFillStrongHoverDelta",void 0);L([f({attribute:"neutral-fill-strong-active-delta",converter:H}),B(Lf)],z.prototype,"neutralFillStrongActiveDelta",void 0);L([f({attribute:"neutral-fill-strong-focus-delta",converter:H}),B(Pf)],z.prototype,"neutralFillStrongFocusDelta",void 0);L([f({attribute:"base-layer-luminance",converter:H}),B(fs)],z.prototype,"baseLayerLuminance",void 0);L([f({attribute:"neutral-stroke-divider-rest-delta",converter:H}),B(qf)],z.prototype,"neutralStrokeDividerRestDelta",void 0);L([f({attribute:"neutral-stroke-rest-delta",converter:H}),B(_f)],z.prototype,"neutralStrokeRestDelta",void 0);L([f({attribute:"neutral-stroke-hover-delta",converter:H}),B(Hf)],z.prototype,"neutralStrokeHoverDelta",void 0);L([f({attribute:"neutral-stroke-active-delta",converter:H}),B(Mf)],z.prototype,"neutralStrokeActiveDelta",void 0);L([f({attribute:"neutral-stroke-focus-delta",converter:H}),B(Nf)],z.prototype,"neutralStrokeFocusDelta",void 0);const e$=z.compose({baseName:"design-system-provider",template:R` <slot></slot> `,styles:T`
    ${lt("block")}
  `}),i$=(i,t)=>T`
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
    box-shadow: ${yw};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ai} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${ot};
    z-index: 1;
    border: calc(${j} * 1px) solid transparent;
  }
`,s$=Re.compose({baseName:"dialog",template:gy,styles:i$}),o$=(i,t)=>T`
    ${lt("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${j} * 1px) solid ${Zn};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${_} * 1px);
      border-left: calc(${j} * 1px) solid ${Zn};
  }
  `,n$=$r.compose({baseName:"divider",template:Iy,styles:o$}),r$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      height: calc((${rt} + ${_}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Kf};
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${pc};
      box-sizing: border-box;
      border: calc(${j} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Fe};
      cursor: ${Le};
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
      color: ${Nx};
    }

    :host(:not(.disabled):active) {
      color: ${zx};
    }

    :host(:${K}) {
      ${_e}
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
      `)),a$=Cr.compose({baseName:"flipper",template:Dy,styles:r$,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),l$=T`
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
`,c$=T`
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
`,d$=T`
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
`.withBehaviors(new Ys(l$,c$)),h$=(i,t)=>T`
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
`;class u$ extends bi{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(d$)}}const f$=u$.compose({baseName:"horizontal-scroll",baseClass:bi,template:Xy,styles:h$,nextFlipper:R`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:R`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),p$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      border: calc(${j} * 1px) solid ${Ao};
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
  `;class g$ extends me{}const m$=g$.compose({baseName:"listbox",template:Oy,styles:p$}),b$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      position: relative;
      ${At}
      background: ${Ms};
      border-radius: calc(${pt} * 1px);
      border: calc(${j} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${gt};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${rt} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${_} * 3) - ${j} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${Yt} - ${j}) * 1px);
      top: calc((${rt} / 4) - ${Yt} * 1px);
      width: 3px;
      height: calc((${rt} / 2) * 1px);
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
      background: ${yt};
      height: calc(((${rt} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${yt};
    }

    :host(:${K}) {
      ${_e}
      background: ${Mx};
    }

    :host([aria-selected='true']) {
      background: ${as};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${fc};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${_x};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Ns};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${zs};
    }

    :host([disabled]) {
      cursor: ${Le};
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
        right: calc((${Yt} - ${j}) * 1px);
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
      `)),v$=si.compose({baseName:"option",template:Ey,styles:b$}),y$=(i,t)=>T`
    ${lt("block")} :host {
      background: ${jo};
      border: calc(${j} * 1px) solid transparent;
      border-radius: calc(${ai} * 1px);
      box-shadow: ${sp};
      padding: calc((${_} - ${j}) * 1px) 0;
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

    ::slotted(${i.tagFor($r)}) {
      margin: calc(${_} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${_} * 1px) 0;
      border: none;
      border-top: calc(${j} * 1px) solid ${Zn};
    }
  `.withBehaviors(at(T`
        :host([slot='submenu']) {
          background: ${g.Canvas};
          border-color: ${g.CanvasText};
        }
      `));class x$ extends kr{connectedCallback(){super.connectedCallback(),ot.setValueFor(this,jo)}}const w$=x$.compose({baseName:"menu",baseClass:kr,template:Ly,styles:y$}),$$=(i,t)=>T`
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
      border: calc(${j} * 1px) solid transparent;
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
      cursor: ${Le};
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
      `),new Ys(T`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,T`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),C$=Ce.compose({baseName:"menu-item",template:Vy,styles:$$,checkboxIndicator:`
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
  `}),$n=".root",k$=(i,t)=>T`
    ${lt("inline-block")}

    ${Yr(i,t,$n)}

    ${Wo()}

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
  `.withBehaviors(It("outline",Go(i,t,$n)),It("filled",Js(i,t,$n)),at(Qs(i,t,$n)));class pp extends le{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],pp.prototype,"appearance",void 0);const F$=pp.compose({baseName:"number-field",baseClass:le,styles:k$,template:Py,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),S$=(i,t)=>T`
    ${lt("flex")} :host {
      align-items: center;
      height: calc((${j} * 3) * 1px);
    }

    .progress {
      background-color: ${Xs};
      border-radius: calc(${_} * 1px);
      width: 100%;
      height: calc(${j} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${yt};
      border-radius: calc(${_} * 1px);
      height: calc((${j} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${j} * 3) * 1px);
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
      background-color: ${yt};
      border-radius: calc(${_} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${yt};
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
      `));class T$ extends hs{}const I$=T$.compose({baseName:"progress",template:jy,styles:S$,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),R$=(i,t)=>T`
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
      `));class D$ extends hs{}const E$=D$.compose({baseName:"progress-ring",template:By,styles:R$,indeterminateIndicator:`
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
  `}),O$=(i,t)=>T`
    ${lt("inline-flex")} :host {
      --input-size: calc((${rt} / 2) + ${_});
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
      border: calc(${j} * 1px) solid ${Xs};
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
      ${qo}
      background: ${uc};
    }

    :host(.checked) .control {
      background: ${yt};
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
      cursor: ${Le};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Fe};
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
      `)),A$=Sr.compose({baseName:"radio",template:qy,styles:O$,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),V$=(i,t)=>T`
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
`,L$=Mi.compose({baseName:"radio-group",template:Uy,styles:V$}),P$=(i,t)=>R`
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
      <slot ${Ft({property:"defaultSlottedNodes",filter:ef})}></slot>
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
`,Cn=".root",_$=mt.create("clear-button-hover").withDefault(i=>{const t=We.getValueFor(i),e=Bi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),H$=mt.create("clear-button-active").withDefault(i=>{const t=We.getValueFor(i),e=Bi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),M$=(i,t)=>T`
    ${lt("inline-block")}

    ${Yr(i,t,Cn)}

    ${Wo()}

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
      min-width: calc(${rt} * 1px);
      ${At}
      outline: none;
      padding: 0 calc((10 + (${_} * 2 * ${zi})) * 1px);
    }
    .clear-button:hover {
      background: ${_$};
    }
    .clear-button:active {
      background: ${H$};
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
  `.withBehaviors(It("outline",Go(i,t,Cn)),It("filled",Js(i,t,Cn)),at(Qs(i,t,Cn)));class gp extends ke{constructor(){super(...arguments),this.appearance="outline"}}L([f],gp.prototype,"appearance",void 0);const N$=gp.compose({baseName:"search",baseClass:ke,template:P$,styles:M$,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class mp extends vi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&ot.setValueFor(this.listbox,jo)}}L([f({mode:"fromView"})],mp.prototype,"appearance",void 0);const z$=mp.compose({baseName:"select",baseClass:vi,template:Ky,styles:Ww,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),B$=(i,t)=>T`
    ${lt("block")} :host {
      --skeleton-fill-default: ${as};
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
  `.withBehaviors(at(T`
        :host{
          background-color: ${g.CanvasText};
        }
      `)),j$=Mo.compose({baseName:"skeleton",template:t0,styles:B$}),U$=(i,t)=>T`
    ${lt("inline-grid")} :host {
      --thumb-size: calc((${rt} / 2) + ${_} + (${j} * 2));
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
    :host(:${K}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${ot}, 0 0 0 4px ${Wr};
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
        border-box ${pc};
      border: calc(${j} * 1px) solid transparent;
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
      background: ${Ue};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${qe};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${tp};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Te}, ${Te}),
        border-box ${ep};
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
      background: ${Kf};
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
      cursor: ${Le};
    }
    :host(.disabled) {
      opacity: ${Fe};
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
      `)),q$=Jt.compose({baseName:"slider",template:i0,styles:U$,thumb:`
    <div class="thumb-cursor"></div>
  `}),W$=(i,t)=>T`
    ${lt("block")} :host {
      ${ip}
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
      width: calc(${j} * 1px);
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
      `)),G$=yi.compose({baseName:"slider-label",template:e0,styles:W$}),X$=(i,t)=>T`
    :host([hidden]) {
      display: none;
    }

    ${lt("inline-flex")} :host {
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
      cursor: ${Le};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${rt} / 2) + ${_}) * 2px);
      height: calc(((${rt} / 2) + ${_}) * 1px);
      background: ${cc};
      border-radius: calc(${rt} * 1px);
      border: calc(${j} * 1px) solid ${Xs};
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
      ${qo}
      background: ${uc};
    }

    :host(.checked) .switch {
      background: ${yt};
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
      ${At}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${gt};
      ${At}
      margin-inline-end: calc(${_} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${_} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${yt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${rs};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${Ue};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Xf};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${qe};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Yf};
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
      `)),Y$=Ql.compose({baseName:"switch",template:r0,styles:X$,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),J$=(i,t)=>T`
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
        margin-inline-start: calc(${Yt} * 1px);
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
      `)),Q$=(i,t)=>T`
      ${lt("inline-flex")} :host {
        box-sizing: border-box;
        ${At}
        height: calc((${rt} + (${_} * 2)) * 1px);
        padding: 0 calc((6 + (${_} * 2 * ${zi})) * 1px);
        color: ${gt};
        border-radius: calc(${pt} * 1px);
        border: calc(${j} * 1px) solid transparent;
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
        `)),Z$=of.compose({baseName:"tab",template:h0,styles:Q$}),K$=(i,t)=>T`
  ${lt("block")} :host {
    box-sizing: border-box;
    ${At}
    padding: 0 calc((6 + (${_} * 2 * ${zi})) * 1px);
  }
`,t1=d0.compose({baseName:"tab-panel",template:c0,styles:K$}),e1=xi.compose({baseName:"tabs",template:u0,styles:J$}),kn=".control",i1=(i,t)=>T`
    ${lt("inline-flex")}

    ${Yr(i,t,kn)}

    ${Wo()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${rt} * 2) * 1px);
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
  `.withBehaviors(It("outline",Go(i,t,kn)),It("filled",Js(i,t,kn)),at(Qs(i,t,kn)));class bp extends Qt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],bp.prototype,"appearance",void 0);const s1=bp.compose({baseName:"text-area",baseClass:Qt,template:g0,styles:i1,shadowOptions:{delegatesFocus:!0}}),Fn=".root",o1=(i,t)=>T`
    ${lt("inline-block")}

    ${Yr(i,t,Fn)}

    ${Wo()}

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
  `.withBehaviors(It("outline",Go(i,t,Fn)),It("filled",Js(i,t,Fn)),at(Qs(i,t,Fn)));class vp extends be{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}L([f],vp.prototype,"appearance",void 0);const n1=vp.compose({baseName:"text-field",baseClass:be,template:m0,styles:o1,shadowOptions:{delegatesFocus:!0}}),r1=(i,t)=>T`
    ${lt("inline-flex")} :host {
      --toolbar-item-gap: calc(${_} * 1px);
      background: ${ot};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${K}) {
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
  `.withBehaviors(at(T`
        :host(:${K}) {
          outline-color: ${g.Highlight};
          color: ${g.ButtonText};
          forced-color-adjust: none;
        }
      `));class a1 extends Ni{}const l1=a1.compose({baseName:"toolbar",baseClass:Ni,template:b0,styles:r1}),c1=(i,t)=>T`
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
      border: calc(${j} * 1px) solid ${Ds};
      background: ${ot};
      color: ${gt};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${At}
      white-space: nowrap;
      box-shadow: ${mw};
    }

    ${i.tagFor(X)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(X)}.right,
    ${i.tagFor(X)}.left {
      flex-direction: column;
    }

    ${i.tagFor(X)}.top .tooltip::after,
    ${i.tagFor(X)}.bottom .tooltip::after,
    ${i.tagFor(X)}.left .tooltip::after,
    ${i.tagFor(X)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${ot};
      border-top: calc(${j} * 1px) solid ${Ds};
      border-left: calc(${j} * 1px) solid ${Ds};
      position: absolute;
    }

    ${i.tagFor(X)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(X)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(X)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(X)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(X)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(X)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(X)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(X)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(at(T`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(X)}.top .tooltip::after,
        ${i.tagFor(X)}.bottom .tooltip::after,
        ${i.tagFor(X)}.left .tooltip::after,
        ${i.tagFor(X)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class d1 extends Ht{connectedCallback(){super.connectedCallback(),ot.setValueFor(this,jo)}}const h1=d1.compose({baseName:"tooltip",baseClass:Ht,template:v0,styles:c1}),u1=(i,t)=>T`
  :host([hidden]) {
    display: none;
  }

  ${lt("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,f1=Ir.compose({baseName:"tree-view",template:x0,styles:u1}),p1=T`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    left: calc(${Yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,g1=T`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${rt} * -1px));
  }
  :host([selected])::after {
    right: calc(${Yt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,dh=xe`((${Dr} / 2) * ${_}) + ((${_} * ${zi}) / 2)`,m1=mt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=We.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),b1=mt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=gs.getValueFor(i);return We.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),v1=(i,t)=>T`
    ${lt("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${gt};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Pe};
      --expand-collapse-button-size: calc(${rt} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Ms};
      border: calc(${j} * 1px) solid transparent;
      border-radius: calc(${pt} * 1px);
      height: calc((${rt} + 1) * 1px);
    }

    :host(:${K}) .positioning-region {
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
      height: calc(${rt} * 1px);
      margin-inline-start: calc(${_} * 2px + 8px);
      ${At}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${_} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${pt} * 1px);
      ${""} width: calc((${dh} + (${_} * 2)) * 1px);
      height: calc((${dh} + (${_} * 2)) * 1px);
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
      cursor: ${Le};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${m1};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${as};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${b1};
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
  `.withBehaviors(new Ys(p1,g1),at(T`
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
      `)),y1=Mt.compose({baseName:"tree-item",template:y0,styles:v1,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),x1={fluentAccordion:lw,fluentAccordionItem:aw,fluentAnchor:Sw,fluentAnchoredRegion:Iw,fluentBadge:Dw,fluentBreadcrumb:Ow,fluentBreadcrumbItem:Vw,fluentButton:Pw,fluentCalendar:Nw,fluentCard:Bw,fluentCheckbox:Uw,fluentCombobox:Xw,fluentDataGrid:t$,fluentDataGridCell:Zw,fluentDataGridRow:Kw,fluentDesignSystemProvider:e$,fluentDialog:s$,fluentDivider:n$,fluentFlipper:a$,fluentHorizontalScroll:f$,fluentListbox:m$,fluentOption:v$,fluentMenu:w$,fluentMenuItem:C$,fluentNumberField:F$,fluentProgress:I$,fluentProgressRing:E$,fluentRadio:A$,fluentRadioGroup:L$,fluentSearch:N$,fluentSelect:z$,fluentSkeleton:j$,fluentSlider:q$,fluentSliderLabel:G$,fluentSwitch:Y$,fluentTabs:e1,fluentTab:Z$,fluentTabPanel:t1,fluentTextArea:s1,fluentTextField:n1,fluentToolbar:l1,fluentTooltip:h1,fluentTreeView:f1,fluentTreeItem:y1,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function w1(i){return Xu.getOrCreate(i).withPrefix("fluent")}function yp(i,t){return function(){return i.apply(t,arguments)}}const{toString:$1}=Object.prototype,{getPrototypeOf:$c}=Object,Jr=(i=>t=>{const e=$1.call(t);return i[e]||(i[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),oi=i=>(i=i.toLowerCase(),t=>Jr(t)===i),Qr=i=>t=>typeof t===i,{isArray:Zs}=Array,Vo=Qr("undefined");function C1(i){return i!==null&&!Vo(i)&&i.constructor!==null&&!Vo(i.constructor)&&De(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const xp=oi("ArrayBuffer");function k1(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&xp(i.buffer),t}const F1=Qr("string"),De=Qr("function"),wp=Qr("number"),Zr=i=>i!==null&&typeof i=="object",S1=i=>i===!0||i===!1,Pn=i=>{if(Jr(i)!=="object")return!1;const t=$c(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},T1=oi("Date"),I1=oi("File"),R1=oi("Blob"),D1=oi("FileList"),E1=i=>Zr(i)&&De(i.pipe),O1=i=>{let t;return i&&(typeof FormData=="function"&&i instanceof FormData||De(i.append)&&((t=Jr(i))==="formdata"||t==="object"&&De(i.toString)&&i.toString()==="[object FormData]"))},A1=oi("URLSearchParams"),V1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xo(i,t,{allOwnKeys:e=!1}={}){if(i===null||typeof i>"u")return;let s,o;if(typeof i!="object"&&(i=[i]),Zs(i))for(s=0,o=i.length;s<o;s++)t.call(null,i[s],s,i);else{const n=e?Object.getOwnPropertyNames(i):Object.keys(i),r=n.length;let a;for(s=0;s<r;s++)a=n[s],t.call(null,i[a],a,i)}}function $p(i,t){t=t.toLowerCase();const e=Object.keys(i);let s=e.length,o;for(;s-- >0;)if(o=e[s],t===o.toLowerCase())return o;return null}const Cp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kp=i=>!Vo(i)&&i!==Cp;function fl(){const{caseless:i}=kp(this)&&this||{},t={},e=(s,o)=>{const n=i&&$p(t,o)||o;Pn(t[n])&&Pn(s)?t[n]=fl(t[n],s):Pn(s)?t[n]=fl({},s):Zs(s)?t[n]=s.slice():t[n]=s};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&Xo(arguments[s],e);return t}const L1=(i,t,e,{allOwnKeys:s}={})=>(Xo(t,(o,n)=>{e&&De(o)?i[n]=yp(o,e):i[n]=o},{allOwnKeys:s}),i),P1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),_1=(i,t,e,s)=>{i.prototype=Object.create(t.prototype,s),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:t.prototype}),e&&Object.assign(i.prototype,e)},H1=(i,t,e,s)=>{let o,n,r;const a={};if(t=t||{},i==null)return t;do{for(o=Object.getOwnPropertyNames(i),n=o.length;n-- >0;)r=o[n],(!s||s(r,i,t))&&!a[r]&&(t[r]=i[r],a[r]=!0);i=e!==!1&&$c(i)}while(i&&(!e||e(i,t))&&i!==Object.prototype);return t},M1=(i,t,e)=>{i=String(i),(e===void 0||e>i.length)&&(e=i.length),e-=t.length;const s=i.indexOf(t,e);return s!==-1&&s===e},N1=i=>{if(!i)return null;if(Zs(i))return i;let t=i.length;if(!wp(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=i[t];return e},z1=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&$c(Uint8Array)),B1=(i,t)=>{const s=(i&&i[Symbol.iterator]).call(i);let o;for(;(o=s.next())&&!o.done;){const n=o.value;t.call(i,n[0],n[1])}},j1=(i,t)=>{let e;const s=[];for(;(e=i.exec(t))!==null;)s.push(e);return s},U1=oi("HTMLFormElement"),q1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,s,o){return s.toUpperCase()+o}),hh=(({hasOwnProperty:i})=>(t,e)=>i.call(t,e))(Object.prototype),W1=oi("RegExp"),Fp=(i,t)=>{const e=Object.getOwnPropertyDescriptors(i),s={};Xo(e,(o,n)=>{let r;(r=t(o,n,i))!==!1&&(s[n]=r||o)}),Object.defineProperties(i,s)},G1=i=>{Fp(i,(t,e)=>{if(De(i)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const s=i[e];if(De(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},X1=(i,t)=>{const e={},s=o=>{o.forEach(n=>{e[n]=!0})};return Zs(i)?s(i):s(String(i).split(t)),e},Y1=()=>{},J1=(i,t)=>(i=+i,Number.isFinite(i)?i:t),_a="abcdefghijklmnopqrstuvwxyz",uh="0123456789",Sp={DIGIT:uh,ALPHA:_a,ALPHA_DIGIT:_a+_a.toUpperCase()+uh},Q1=(i=16,t=Sp.ALPHA_DIGIT)=>{let e="";const{length:s}=t;for(;i--;)e+=t[Math.random()*s|0];return e};function Z1(i){return!!(i&&De(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const K1=i=>{const t=new Array(10),e=(s,o)=>{if(Zr(s)){if(t.indexOf(s)>=0)return;if(!("toJSON"in s)){t[o]=s;const n=Zs(s)?[]:{};return Xo(s,(r,a)=>{const l=e(r,o+1);!Vo(l)&&(n[a]=l)}),t[o]=void 0,n}}return s};return e(i,0)},tC=oi("AsyncFunction"),eC=i=>i&&(Zr(i)||De(i))&&De(i.then)&&De(i.catch),$={isArray:Zs,isArrayBuffer:xp,isBuffer:C1,isFormData:O1,isArrayBufferView:k1,isString:F1,isNumber:wp,isBoolean:S1,isObject:Zr,isPlainObject:Pn,isUndefined:Vo,isDate:T1,isFile:I1,isBlob:R1,isRegExp:W1,isFunction:De,isStream:E1,isURLSearchParams:A1,isTypedArray:z1,isFileList:D1,forEach:Xo,merge:fl,extend:L1,trim:V1,stripBOM:P1,inherits:_1,toFlatObject:H1,kindOf:Jr,kindOfTest:oi,endsWith:M1,toArray:N1,forEachEntry:B1,matchAll:j1,isHTMLForm:U1,hasOwnProperty:hh,hasOwnProp:hh,reduceDescriptors:Fp,freezeMethods:G1,toObjectSet:X1,toCamelCase:q1,noop:Y1,toFiniteNumber:J1,findKey:$p,global:Cp,isContextDefined:kp,ALPHABET:Sp,generateString:Q1,isSpecCompliantForm:Z1,toJSONObject:K1,isAsyncFn:tC,isThenable:eC};function dt(i,t,e,s,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),s&&(this.request=s),o&&(this.response=o)}$.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Tp=dt.prototype,Ip={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Ip[i]={value:i}});Object.defineProperties(dt,Ip);Object.defineProperty(Tp,"isAxiosError",{value:!0});dt.from=(i,t,e,s,o,n)=>{const r=Object.create(Tp);return $.toFlatObject(i,r,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),dt.call(r,i.message,t,e,s,o),r.cause=i,r.name=i.name,n&&Object.assign(r,n),r};const iC=null;function pl(i){return $.isPlainObject(i)||$.isArray(i)}function Rp(i){return $.endsWith(i,"[]")?i.slice(0,-2):i}function fh(i,t,e){return i?i.concat(t).map(function(o,n){return o=Rp(o),!e&&n?"["+o+"]":o}).join(e?".":""):t}function sC(i){return $.isArray(i)&&!i.some(pl)}const oC=$.toFlatObject($,{},null,function(t){return/^is[A-Z]/.test(t)});function Kr(i,t,e){if(!$.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,e=$.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,D){return!$.isUndefined(D[k])});const s=e.metaTokens,o=e.visitor||d,n=e.dots,r=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(o))throw new TypeError("visitor must be a function");function c(C){if(C===null)return"";if($.isDate(C))return C.toISOString();if(!l&&$.isBlob(C))throw new dt("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(C)||$.isTypedArray(C)?l&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function d(C,k,D){let N=C;if(C&&!D&&typeof C=="object"){if($.endsWith(k,"{}"))k=s?k:k.slice(0,-2),C=JSON.stringify(C);else if($.isArray(C)&&sC(C)||($.isFileList(C)||$.endsWith(k,"[]"))&&(N=$.toArray(C)))return k=Rp(k),N.forEach(function(W,nt){!($.isUndefined(W)||W===null)&&t.append(r===!0?fh([k],nt,n):r===null?k:k+"[]",c(W))}),!1}return pl(C)?!0:(t.append(fh(D,k,n),c(C)),!1)}const u=[],b=Object.assign(oC,{defaultVisitor:d,convertValue:c,isVisitable:pl});function w(C,k){if(!$.isUndefined(C)){if(u.indexOf(C)!==-1)throw Error("Circular reference detected in "+k.join("."));u.push(C),$.forEach(C,function(N,U){(!($.isUndefined(N)||N===null)&&o.call(t,N,$.isString(U)?U.trim():U,k,b))===!0&&w(N,k?k.concat(U):[U])}),u.pop()}}if(!$.isObject(i))throw new TypeError("data must be an object");return w(i),t}function ph(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(s){return t[s]})}function Cc(i,t){this._pairs=[],i&&Kr(i,this,t)}const Dp=Cc.prototype;Dp.append=function(t,e){this._pairs.push([t,e])};Dp.toString=function(t){const e=t?function(s){return t.call(this,s,ph)}:ph;return this._pairs.map(function(o){return e(o[0])+"="+e(o[1])},"").join("&")};function nC(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ep(i,t,e){if(!t)return i;const s=e&&e.encode||nC,o=e&&e.serialize;let n;if(o?n=o(t,e):n=$.isURLSearchParams(t)?t.toString():new Cc(t,e).toString(s),n){const r=i.indexOf("#");r!==-1&&(i=i.slice(0,r)),i+=(i.indexOf("?")===-1?"?":"&")+n}return i}class gh{constructor(){this.handlers=[]}use(t,e,s){return this.handlers.push({fulfilled:t,rejected:e,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){$.forEach(this.handlers,function(s){s!==null&&t(s)})}}const Op={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rC=typeof URLSearchParams<"u"?URLSearchParams:Cc,aC=typeof FormData<"u"?FormData:null,lC=typeof Blob<"u"?Blob:null,cC={isBrowser:!0,classes:{URLSearchParams:rC,FormData:aC,Blob:lC},protocols:["http","https","file","blob","url","data"]},Ap=typeof window<"u"&&typeof document<"u",dC=(i=>Ap&&["ReactNative","NativeScript","NS"].indexOf(i)<0)(typeof navigator<"u"&&navigator.product),hC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ap,hasStandardBrowserEnv:dC,hasStandardBrowserWebWorkerEnv:hC},Symbol.toStringTag,{value:"Module"})),Ke={...uC,...cC};function fC(i,t){return Kr(i,new Ke.classes.URLSearchParams,Object.assign({visitor:function(e,s,o,n){return Ke.isNode&&$.isBuffer(e)?(this.append(s,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}function pC(i){return $.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gC(i){const t={},e=Object.keys(i);let s;const o=e.length;let n;for(s=0;s<o;s++)n=e[s],t[n]=i[n];return t}function Vp(i){function t(e,s,o,n){let r=e[n++];if(r==="__proto__")return!0;const a=Number.isFinite(+r),l=n>=e.length;return r=!r&&$.isArray(o)?o.length:r,l?($.hasOwnProp(o,r)?o[r]=[o[r],s]:o[r]=s,!a):((!o[r]||!$.isObject(o[r]))&&(o[r]=[]),t(e,s,o[r],n)&&$.isArray(o[r])&&(o[r]=gC(o[r])),!a)}if($.isFormData(i)&&$.isFunction(i.entries)){const e={};return $.forEachEntry(i,(s,o)=>{t(pC(s),o,e,0)}),e}return null}function mC(i,t,e){if($.isString(i))try{return(t||JSON.parse)(i),$.trim(i)}catch(s){if(s.name!=="SyntaxError")throw s}return(e||JSON.stringify)(i)}const kc={transitional:Op,adapter:["xhr","http"],transformRequest:[function(t,e){const s=e.getContentType()||"",o=s.indexOf("application/json")>-1,n=$.isObject(t);if(n&&$.isHTMLForm(t)&&(t=new FormData(t)),$.isFormData(t))return o?JSON.stringify(Vp(t)):t;if($.isArrayBuffer(t)||$.isBuffer(t)||$.isStream(t)||$.isFile(t)||$.isBlob(t))return t;if($.isArrayBufferView(t))return t.buffer;if($.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(n){if(s.indexOf("application/x-www-form-urlencoded")>-1)return fC(t,this.formSerializer).toString();if((a=$.isFileList(t))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Kr(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return n||o?(e.setContentType("application/json",!1),mC(t)):t}],transformResponse:[function(t){const e=this.transitional||kc.transitional,s=e&&e.forcedJSONParsing,o=this.responseType==="json";if(t&&$.isString(t)&&(s&&!this.responseType||o)){const r=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(r)throw a.name==="SyntaxError"?dt.from(a,dt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],i=>{kc.headers[i]={}});const Fc=kc,bC=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vC=i=>{const t={};let e,s,o;return i&&i.split(`
`).forEach(function(r){o=r.indexOf(":"),e=r.substring(0,o).trim().toLowerCase(),s=r.substring(o+1).trim(),!(!e||t[e]&&bC[e])&&(e==="set-cookie"?t[e]?t[e].push(s):t[e]=[s]:t[e]=t[e]?t[e]+", "+s:s)}),t},mh=Symbol("internals");function co(i){return i&&String(i).trim().toLowerCase()}function _n(i){return i===!1||i==null?i:$.isArray(i)?i.map(_n):String(i)}function yC(i){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=e.exec(i);)t[s[1]]=s[2];return t}const xC=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ha(i,t,e,s,o){if($.isFunction(s))return s.call(this,t,e);if(o&&(t=e),!!$.isString(t)){if($.isString(s))return t.indexOf(s)!==-1;if($.isRegExp(s))return s.test(t)}}function wC(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,s)=>e.toUpperCase()+s)}function $C(i,t){const e=$.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(i,s+e,{value:function(o,n,r){return this[s].call(this,t,o,n,r)},configurable:!0})})}class ta{constructor(t){t&&this.set(t)}set(t,e,s){const o=this;function n(a,l,c){const d=co(l);if(!d)throw new Error("header name must be a non-empty string");const u=$.findKey(o,d);(!u||o[u]===void 0||c===!0||c===void 0&&o[u]!==!1)&&(o[u||l]=_n(a))}const r=(a,l)=>$.forEach(a,(c,d)=>n(c,d,l));return $.isPlainObject(t)||t instanceof this.constructor?r(t,e):$.isString(t)&&(t=t.trim())&&!xC(t)?r(vC(t),e):t!=null&&n(e,t,s),this}get(t,e){if(t=co(t),t){const s=$.findKey(this,t);if(s){const o=this[s];if(!e)return o;if(e===!0)return yC(o);if($.isFunction(e))return e.call(this,o,s);if($.isRegExp(e))return e.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=co(t),t){const s=$.findKey(this,t);return!!(s&&this[s]!==void 0&&(!e||Ha(this,this[s],s,e)))}return!1}delete(t,e){const s=this;let o=!1;function n(r){if(r=co(r),r){const a=$.findKey(s,r);a&&(!e||Ha(s,s[a],a,e))&&(delete s[a],o=!0)}}return $.isArray(t)?t.forEach(n):n(t),o}clear(t){const e=Object.keys(this);let s=e.length,o=!1;for(;s--;){const n=e[s];(!t||Ha(this,this[n],n,t,!0))&&(delete this[n],o=!0)}return o}normalize(t){const e=this,s={};return $.forEach(this,(o,n)=>{const r=$.findKey(s,n);if(r){e[r]=_n(o),delete e[n];return}const a=t?wC(n):String(n).trim();a!==n&&delete e[n],e[a]=_n(o),s[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return $.forEach(this,(s,o)=>{s!=null&&s!==!1&&(e[o]=t&&$.isArray(s)?s.join(", "):s)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const s=new this(t);return e.forEach(o=>s.set(o)),s}static accessor(t){const s=(this[mh]=this[mh]={accessors:{}}).accessors,o=this.prototype;function n(r){const a=co(r);s[a]||($C(o,r),s[a]=!0)}return $.isArray(t)?t.forEach(n):n(t),this}}ta.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);$.reduceDescriptors(ta.prototype,({value:i},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(s){this[e]=s}}});$.freezeMethods(ta);const ci=ta;function Ma(i,t){const e=this||Fc,s=t||e,o=ci.from(s.headers);let n=s.data;return $.forEach(i,function(a){n=a.call(e,n,o.normalize(),t?t.status:void 0)}),o.normalize(),n}function Lp(i){return!!(i&&i.__CANCEL__)}function Yo(i,t,e){dt.call(this,i??"canceled",dt.ERR_CANCELED,t,e),this.name="CanceledError"}$.inherits(Yo,dt,{__CANCEL__:!0});function CC(i,t,e){const s=e.config.validateStatus;!e.status||!s||s(e.status)?i(e):t(new dt("Request failed with status code "+e.status,[dt.ERR_BAD_REQUEST,dt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}const kC=Ke.hasStandardBrowserEnv?{write(i,t,e,s,o,n){const r=[i+"="+encodeURIComponent(t)];$.isNumber(e)&&r.push("expires="+new Date(e).toGMTString()),$.isString(s)&&r.push("path="+s),$.isString(o)&&r.push("domain="+o),n===!0&&r.push("secure"),document.cookie=r.join("; ")},read(i){const t=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FC(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function SC(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function Pp(i,t){return i&&!FC(t)?SC(i,t):t}const TC=Ke.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let s;function o(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return s=o(window.location.href),function(r){const a=$.isString(r)?o(r):r;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}();function IC(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function RC(i,t){i=i||10;const e=new Array(i),s=new Array(i);let o=0,n=0,r;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),d=s[n];r||(r=c),e[o]=l,s[o]=c;let u=n,b=0;for(;u!==o;)b+=e[u++],u=u%i;if(o=(o+1)%i,o===n&&(n=(n+1)%i),c-r<t)return;const w=d&&c-d;return w?Math.round(b*1e3/w):void 0}}function bh(i,t){let e=0;const s=RC(50,250);return o=>{const n=o.loaded,r=o.lengthComputable?o.total:void 0,a=n-e,l=s(a),c=n<=r;e=n;const d={loaded:n,total:r,progress:r?n/r:void 0,bytes:a,rate:l||void 0,estimated:l&&r&&c?(r-n)/l:void 0,event:o};d[t?"download":"upload"]=!0,i(d)}}const DC=typeof XMLHttpRequest<"u",EC=DC&&function(i){return new Promise(function(e,s){let o=i.data;const n=ci.from(i.headers).normalize();let{responseType:r,withXSRFToken:a}=i,l;function c(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d;if($.isFormData(o)){if(Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv)n.setContentType(!1);else if((d=n.getContentType())!==!1){const[k,...D]=d?d.split(";").map(N=>N.trim()).filter(Boolean):[];n.setContentType([k||"multipart/form-data",...D].join("; "))}}let u=new XMLHttpRequest;if(i.auth){const k=i.auth.username||"",D=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";n.set("Authorization","Basic "+btoa(k+":"+D))}const b=Pp(i.baseURL,i.url);u.open(i.method.toUpperCase(),Ep(b,i.params,i.paramsSerializer),!0),u.timeout=i.timeout;function w(){if(!u)return;const k=ci.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),N={data:!r||r==="text"||r==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:k,config:i,request:u};CC(function(W){e(W),c()},function(W){s(W),c()},N),u=null}if("onloadend"in u?u.onloadend=w:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(w)},u.onabort=function(){u&&(s(new dt("Request aborted",dt.ECONNABORTED,i,u)),u=null)},u.onerror=function(){s(new dt("Network Error",dt.ERR_NETWORK,i,u)),u=null},u.ontimeout=function(){let D=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||Op;i.timeoutErrorMessage&&(D=i.timeoutErrorMessage),s(new dt(D,N.clarifyTimeoutError?dt.ETIMEDOUT:dt.ECONNABORTED,i,u)),u=null},Ke.hasStandardBrowserEnv&&(a&&$.isFunction(a)&&(a=a(i)),a||a!==!1&&TC(b))){const k=i.xsrfHeaderName&&i.xsrfCookieName&&kC.read(i.xsrfCookieName);k&&n.set(i.xsrfHeaderName,k)}o===void 0&&n.setContentType(null),"setRequestHeader"in u&&$.forEach(n.toJSON(),function(D,N){u.setRequestHeader(N,D)}),$.isUndefined(i.withCredentials)||(u.withCredentials=!!i.withCredentials),r&&r!=="json"&&(u.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&u.addEventListener("progress",bh(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",bh(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=k=>{u&&(s(!k||k.type?new Yo(null,i,u):k),u.abort(),u=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const C=IC(b);if(C&&Ke.protocols.indexOf(C)===-1){s(new dt("Unsupported protocol "+C+":",dt.ERR_BAD_REQUEST,i));return}u.send(o||null)})},gl={http:iC,xhr:EC};$.forEach(gl,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const vh=i=>`- ${i}`,OC=i=>$.isFunction(i)||i===null||i===!1,_p={getAdapter:i=>{i=$.isArray(i)?i:[i];const{length:t}=i;let e,s;const o={};for(let n=0;n<t;n++){e=i[n];let r;if(s=e,!OC(e)&&(s=gl[(r=String(e)).toLowerCase()],s===void 0))throw new dt(`Unknown adapter '${r}'`);if(s)break;o[r||"#"+n]=s}if(!s){const n=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let r=t?n.length>1?`since :
`+n.map(vh).join(`
`):" "+vh(n[0]):"as no adapter specified";throw new dt("There is no suitable adapter to dispatch the request "+r,"ERR_NOT_SUPPORT")}return s},adapters:gl};function Na(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Yo(null,i)}function yh(i){return Na(i),i.headers=ci.from(i.headers),i.data=Ma.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),_p.getAdapter(i.adapter||Fc.adapter)(i).then(function(s){return Na(i),s.data=Ma.call(i,i.transformResponse,s),s.headers=ci.from(s.headers),s},function(s){return Lp(s)||(Na(i),s&&s.response&&(s.response.data=Ma.call(i,i.transformResponse,s.response),s.response.headers=ci.from(s.response.headers))),Promise.reject(s)})}const xh=i=>i instanceof ci?i.toJSON():i;function js(i,t){t=t||{};const e={};function s(c,d,u){return $.isPlainObject(c)&&$.isPlainObject(d)?$.merge.call({caseless:u},c,d):$.isPlainObject(d)?$.merge({},d):$.isArray(d)?d.slice():d}function o(c,d,u){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c,u)}else return s(c,d,u)}function n(c,d){if(!$.isUndefined(d))return s(void 0,d)}function r(c,d){if($.isUndefined(d)){if(!$.isUndefined(c))return s(void 0,c)}else return s(void 0,d)}function a(c,d,u){if(u in t)return s(c,d);if(u in i)return s(void 0,c)}const l={url:n,method:n,data:n,baseURL:r,transformRequest:r,transformResponse:r,paramsSerializer:r,timeout:r,timeoutMessage:r,withCredentials:r,withXSRFToken:r,adapter:r,responseType:r,xsrfCookieName:r,xsrfHeaderName:r,onUploadProgress:r,onDownloadProgress:r,decompress:r,maxContentLength:r,maxBodyLength:r,beforeRedirect:r,transport:r,httpAgent:r,httpsAgent:r,cancelToken:r,socketPath:r,responseEncoding:r,validateStatus:a,headers:(c,d)=>o(xh(c),xh(d),!0)};return $.forEach(Object.keys(Object.assign({},i,t)),function(d){const u=l[d]||o,b=u(i[d],t[d],d);$.isUndefined(b)&&u!==a||(e[d]=b)}),e}const Hp="1.6.7",Sc={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{Sc[i]=function(s){return typeof s===i||"a"+(t<1?"n ":" ")+i}});const wh={};Sc.transitional=function(t,e,s){function o(n,r){return"[Axios v"+Hp+"] Transitional option '"+n+"'"+r+(s?". "+s:"")}return(n,r,a)=>{if(t===!1)throw new dt(o(r," has been removed"+(e?" in "+e:"")),dt.ERR_DEPRECATED);return e&&!wh[r]&&(wh[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(n,r,a):!0}};function AC(i,t,e){if(typeof i!="object")throw new dt("options must be an object",dt.ERR_BAD_OPTION_VALUE);const s=Object.keys(i);let o=s.length;for(;o-- >0;){const n=s[o],r=t[n];if(r){const a=i[n],l=a===void 0||r(a,n,i);if(l!==!0)throw new dt("option "+n+" must be "+l,dt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new dt("Unknown option "+n,dt.ERR_BAD_OPTION)}}const ml={assertOptions:AC,validators:Sc},Fi=ml.validators;class Kn{constructor(t){this.defaults=t,this.interceptors={request:new gh,response:new gh}}async request(t,e){try{return await this._request(t,e)}catch(s){if(s instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const n=o.stack?o.stack.replace(/^.+\n/,""):"";s.stack?n&&!String(s.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+n):s.stack=n}throw s}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=js(this.defaults,e);const{transitional:s,paramsSerializer:o,headers:n}=e;s!==void 0&&ml.assertOptions(s,{silentJSONParsing:Fi.transitional(Fi.boolean),forcedJSONParsing:Fi.transitional(Fi.boolean),clarifyTimeoutError:Fi.transitional(Fi.boolean)},!1),o!=null&&($.isFunction(o)?e.paramsSerializer={serialize:o}:ml.assertOptions(o,{encode:Fi.function,serialize:Fi.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let r=n&&$.merge(n.common,n[e.method]);n&&$.forEach(["delete","get","head","post","put","patch","common"],C=>{delete n[C]}),e.headers=ci.concat(r,n);const a=[];let l=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(e)===!1||(l=l&&k.synchronous,a.unshift(k.fulfilled,k.rejected))});const c=[];this.interceptors.response.forEach(function(k){c.push(k.fulfilled,k.rejected)});let d,u=0,b;if(!l){const C=[yh.bind(this),void 0];for(C.unshift.apply(C,a),C.push.apply(C,c),b=C.length,d=Promise.resolve(e);u<b;)d=d.then(C[u++],C[u++]);return d}b=a.length;let w=e;for(u=0;u<b;){const C=a[u++],k=a[u++];try{w=C(w)}catch(D){k.call(this,D);break}}try{d=yh.call(this,w)}catch(C){return Promise.reject(C)}for(u=0,b=c.length;u<b;)d=d.then(c[u++],c[u++]);return d}getUri(t){t=js(this.defaults,t);const e=Pp(t.baseURL,t.url);return Ep(e,t.params,t.paramsSerializer)}}$.forEach(["delete","get","head","options"],function(t){Kn.prototype[t]=function(e,s){return this.request(js(s||{},{method:t,url:e,data:(s||{}).data}))}});$.forEach(["post","put","patch"],function(t){function e(s){return function(n,r,a){return this.request(js(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Kn.prototype[t]=e(),Kn.prototype[t+"Form"]=e(!0)});const Hn=Kn;class Tc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(n){e=n});const s=this;this.promise.then(o=>{if(!s._listeners)return;let n=s._listeners.length;for(;n-- >0;)s._listeners[n](o);s._listeners=null}),this.promise.then=o=>{let n;const r=new Promise(a=>{s.subscribe(a),n=a}).then(o);return r.cancel=function(){s.unsubscribe(n)},r},t(function(n,r,a){s.reason||(s.reason=new Yo(n,r,a),e(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}static source(){let t;return{token:new Tc(function(o){t=o}),cancel:t}}}const VC=Tc;function LC(i){return function(e){return i.apply(null,e)}}function PC(i){return $.isObject(i)&&i.isAxiosError===!0}const bl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bl).forEach(([i,t])=>{bl[t]=i});const _C=bl;function Mp(i){const t=new Hn(i),e=yp(Hn.prototype.request,t);return $.extend(e,Hn.prototype,t,{allOwnKeys:!0}),$.extend(e,t,null,{allOwnKeys:!0}),e.create=function(o){return Mp(js(i,o))},e}const _t=Mp(Fc);_t.Axios=Hn;_t.CanceledError=Yo;_t.CancelToken=VC;_t.isCancel=Lp;_t.VERSION=Hp;_t.toFormData=Kr;_t.AxiosError=dt;_t.Cancel=_t.CanceledError;_t.all=function(t){return Promise.all(t)};_t.spread=LC;_t.isAxiosError=PC;_t.mergeConfig=js;_t.AxiosHeaders=ci;_t.formToJSON=i=>Vp($.isHTMLForm(i)?new FormData(i):i);_t.getAdapter=_p.getAdapter;_t.HttpStatusCode=_C;_t.default=_t;const HC=["value"],MC=Ll({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Ne(),Ti("fluent-text-field",{value:o.modelValue,onInput:s},[ou(o.$slots,"default")],40,HC))}}),NC=["value"],zC=Ll({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Ne(),Ti("fluent-combobox",{value:o.modelValue,onChange:s},[ou(o.$slots,"default")],40,NC))}}),Ks=i=>(Vg("data-v-3ed93d4a"),i=i(),Lg(),i),BC=Ks(()=>Q("div",{class:"header"},[Q("img",{src:hb,class:"logo",alt:"Logo"}),Q("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),jC={class:"general-information-container"},UC={class:"row"},qC=Ks(()=>Q("div",{class:"col"},[Q("p",null,"Datum: ")],-1)),WC={class:"col"},GC={class:"row"},XC=Ks(()=>Q("div",{class:"col"},[Q("p",null,"Rechnungsnummer: ")],-1)),YC={class:"col"},JC={class:"row"},QC=Ks(()=>Q("div",{class:"col"},[Q("p",null,"Name des Mitgliedes: ")],-1)),ZC={class:"col"},KC={class:"row"},tk=Ks(()=>Q("div",{class:"col"},[Q("p",null,"Rechnungsdatei: ")],-1)),ek={class:"col"},ik={for:"file",class:"custum-file-upload"},sk=Tm('<div class="icon" data-v-3ed93d4a><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-3ed93d4a><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-3ed93d4a></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-3ed93d4a></g><g id="SVGRepo_iconCarrier" data-v-3ed93d4a><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-3ed93d4a></path></g></svg></div><div class="text" data-v-3ed93d4a><span data-v-3ed93d4a>Click to Upload</span></div>',2),ok=Ks(()=>Q("div",{class:"bill-disclaimer-container"},[Q("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),Q("p",null,"LSF-Wesel-Rheinhausen"),Q("p",null,"Postfach 100240"),Q("p",null,"46462 Wesel")],-1)),nk={class:"article-list-wrapper"},rk={class:"article-list-card"},ak=["value"],lk={class:"total-sum"},ck=Ll({__name:"App",setup(i){Er.withDefault(Or);const t=["articleNumber","description","usage","costCenter","amount"],e=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],s=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function o(){return t.reduce((D,N)=>(D[N]=N==="amount"?0:"",D),{})}const n=rn([o()]),r=()=>{n.value.push(o())},a=D=>D==="amount"?"number":"text",l=D=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[D]||"",c=xu(()=>n.value.reduce((D,N)=>D+parseFloat(N.amount||"0"),0).toFixed(2).replace(".",",")),d=rn(null),u=rn(null);iu(()=>{d.value&&d.value.addEventListener("change",b)});function b(D){var U;if(d.value&&d.value.files&&d.value.files.length>0){const W=d.value.files[0].name;u.value&&(u.value.textContent=`Augewählte Datei: ${W}`)}const N=D.target;(U=N.files)!=null&&U.length?w.value.file=N.files[0]:w.value.file=null}const w=rn({date:"N/A",invoiceNumber:"N/A",memberName:"N/A",file:null,total:c.value});qg(()=>{w.value.total=c.value});async function C(){try{const D=await _t.post("/api/v1/test",w.value);console.log(D.data)}catch(D){console.error(D),alert(D)}}async function k(){try{const D=await _t.post("/api/v1/test_with_mail",w.value);console.log(D.data)}catch(D){console.error(D),alert(D)}}return(D,N)=>(Ne(),Ti("div",null,[BC,Q("div",jC,[Q("div",UC,[qC,Q("div",WC,[da(Q("fluent-text-field",{"onUpdate:modelValue":N[0]||(N[0]=U=>w.value.date=U),type:"date"},null,512),[[ma,w.value.date]])])]),Q("div",GC,[XC,Q("div",YC,[da(Q("fluent-text-field",{"onUpdate:modelValue":N[1]||(N[1]=U=>w.value.invoiceNumber=U),placeholder:"Rechnugnsnummer..."},null,512),[[ma,w.value.invoiceNumber]])])]),Q("div",JC,[QC,Q("div",ZC,[da(Q("fluent-text-field",{"onUpdate:modelValue":N[2]||(N[2]=U=>w.value.memberName=U),placeholder:"Name..."},null,512),[[ma,w.value.memberName]])])]),Q("div",KC,[tk,Q("div",ek,[Q("label",ik,[sk,Q("input",{id:"file",type:"file",ref_key:"fileInput",ref:d},null,512)]),Q("div",{ref_key:"fileNameDisplay",ref:u,class:"uploaded-lable"},null,512)])])]),ok,Q("div",nk,[Q("fluent-card",rk,[Q("table",null,[Q("thead",null,[Q("tr",null,[(Ne(),Ti(te,null,ln(e,U=>Q("th",{key:U},ra(U),1)),64))])]),Q("tbody",null,[(Ne(!0),Ti(te,null,ln(n.value,(U,W)=>(Ne(),Ti("tr",{key:W},[(Ne(),Ti(te,null,ln(t,nt=>Q("td",{key:nt},[nt!=="costCenter"?(Ne(),Za(MC,{key:0,type:a(nt),modelValue:U[nt],"onUpdate:modelValue":bt=>U[nt]=bt,placeholder:l(nt)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(Ne(),Za(zC,{key:1,modelValue:U[nt],"onUpdate:modelValue":bt=>U[nt]=bt,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:Zh(()=>[(Ne(),Ti(te,null,ln(s,bt=>Q("fluent-option",{position:"below",class:"combo-option",key:bt,value:bt},ra(bt),9,ak)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),Q("fluent-button",{appearance:"accent",onClick:r},"＋ Artikel hinzufügen"),Q("div",lk,"Gesamtbetrag: "+ra(c.value)+" €",1)])]),Q("fluent-button",{appearance:"accent",onClick:C},"Test Submit"),Q("fluent-button",{appearance:"accent",onClick:k},"Test Submit with Mail")]))}}),dk=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},hk=dk(ck,[["__scopeId","data-v-3ed93d4a"]]);w1().register(x1);lb(hk).mount("#app");
