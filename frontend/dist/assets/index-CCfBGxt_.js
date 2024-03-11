(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Aa(i,t){const e=new Set(i.split(","));return t?s=>e.has(s.toLowerCase()):s=>e.has(s)}const Ct={},fs=[],Fe=()=>{},yp=()=>!1,On=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Va=i=>i.startsWith("onUpdate:"),Nt=Object.assign,La=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},xp=Object.prototype.hasOwnProperty,at=(i,t)=>xp.call(i,t),Z=Array.isArray,gs=i=>An(i)==="[object Map]",yd=i=>An(i)==="[object Set]",K=i=>typeof i=="function",_t=i=>typeof i=="string",Vs=i=>typeof i=="symbol",Dt=i=>i!==null&&typeof i=="object",xd=i=>(Dt(i)||K(i))&&K(i.then)&&K(i.catch),wd=Object.prototype.toString,An=i=>wd.call(i),wp=i=>An(i).slice(8,-1),$d=i=>An(i)==="[object Object]",Pa=i=>_t(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Js=Aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},$p=/-(\w)/g,$s=Vn(i=>i.replace($p,(t,e)=>e?e.toUpperCase():"")),kp=/\B([A-Z])/g,Ls=Vn(i=>i.replace(kp,"-$1").toLowerCase()),kd=Vn(i=>i.charAt(0).toUpperCase()+i.slice(1)),Er=Vn(i=>i?`on${kd(i)}`:""),Fi=(i,t)=>!Object.is(i,t),Or=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},vn=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Cp=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Ul;const Cd=()=>Ul||(Ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _a(i){if(Z(i)){const t={};for(let e=0;e<i.length;e++){const s=i[e],o=_t(s)?Sp(s):_a(s);if(o)for(const n in o)t[n]=o[n]}return t}else if(_t(i)||Dt(i))return i}const Fp=/;(?![^(]*\))/g,Ip=/:([^]+)/,Tp=/\/\*[^]*?\*\//g;function Sp(i){const t={};return i.replace(Tp,"").split(Fp).forEach(e=>{if(e){const s=e.split(Ip);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ha(i){let t="";if(_t(i))t=i;else if(Z(i))for(let e=0;e<i.length;e++){const s=Ha(i[e]);s&&(t+=s+" ")}else if(Dt(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Dp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rp=Aa(Dp);function Fd(i){return!!i||i===""}const Ar=i=>_t(i)?i:i==null?"":Z(i)||Dt(i)&&(i.toString===wd||!K(i.toString))?JSON.stringify(i,Id,2):String(i),Id=(i,t)=>t&&t.__v_isRef?Id(i,t.value):gs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[s,o],n)=>(e[Vr(s,n)+" =>"]=o,e),{})}:yd(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Vr(e))}:Vs(t)?Vr(t):Dt(t)&&!Z(t)&&!$d(t)?String(t):t,Vr=(i,t="")=>{var e;return Vs(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Ep{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Le;try{return Le=this,t()}finally{Le=e}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this._active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Op(i,t=Le){t&&t.active&&t.effects.push(i)}function Ap(){return Le}let qi;class Ma{constructor(t,e,s,o){this.fn=t,this.trigger=e,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Op(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ki();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(Vp(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ts()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=ki,e=qi;try{return ki=!0,qi=this,this._runnings++,ql(this),this.fn()}finally{Gl(this),this._runnings--,qi=e,ki=t}}stop(){var t;this.active&&(ql(this),Gl(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Vp(i){return i.value}function ql(i){i._trackId++,i._depsLength=0}function Gl(i){if(i.deps.length>i._depsLength){for(let t=i._depsLength;t<i.deps.length;t++)Td(i.deps[t],i);i.deps.length=i._depsLength}}function Td(i,t){const e=i.get(t);e!==void 0&&t._trackId!==e&&(i.delete(t),i.size===0&&i.cleanup())}let ki=!0,la=0;const Sd=[];function Ki(){Sd.push(ki),ki=!1}function ts(){const i=Sd.pop();ki=i===void 0?!0:i}function za(){la++}function Ba(){for(la--;!la&&ca.length;)ca.shift()()}function Dd(i,t,e){if(t.get(i)!==i._trackId){t.set(i,i._trackId);const s=i.deps[i._depsLength];s!==t?(s&&Td(s,i),i.deps[i._depsLength++]=t):i._depsLength++}}const ca=[];function Rd(i,t,e){za();for(const s of i.keys()){let o;s._dirtyLevel<t&&(o??(o=i.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=i.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ca.push(s.scheduler)))}Ba()}const Ed=(i,t)=>{const e=new Map;return e.cleanup=i,e.computed=t,e},da=new WeakMap,Gi=Symbol(""),ha=Symbol("");function de(i,t,e){if(ki&&qi){let s=da.get(i);s||da.set(i,s=new Map);let o=s.get(e);o||s.set(e,o=Ed(()=>s.delete(e))),Dd(qi,o)}}function ii(i,t,e,s,o,n){const r=da.get(i);if(!r)return;let a=[];if(t==="clear")a=[...r.values()];else if(e==="length"&&Z(i)){const l=Number(s);r.forEach((d,h)=>{(h==="length"||!Vs(h)&&h>=l)&&a.push(d)})}else switch(e!==void 0&&a.push(r.get(e)),t){case"add":Z(i)?Pa(e)&&a.push(r.get("length")):(a.push(r.get(Gi)),gs(i)&&a.push(r.get(ha)));break;case"delete":Z(i)||(a.push(r.get(Gi)),gs(i)&&a.push(r.get(ha)));break;case"set":gs(i)&&a.push(r.get(Gi));break}za();for(const l of a)l&&Rd(l,4);Ba()}const Lp=Aa("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Vs)),Wl=Pp();function Pp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const s=ct(this);for(let n=0,r=this.length;n<r;n++)de(s,"get",n+"");const o=s[t](...e);return o===-1||o===!1?s[t](...e.map(ct)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){Ki(),za();const s=ct(this)[t].apply(this,e);return Ba(),ts(),s}}),i}function _p(i){const t=ct(this);return de(t,"has",i),t.hasOwnProperty(i)}class Ad{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,s){const o=this._isReadonly,n=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return n;if(e==="__v_raw")return s===(o?n?Qp:_d:n?Pd:Ld).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=Z(t);if(!o){if(r&&at(Wl,e))return Reflect.get(Wl,e,s);if(e==="hasOwnProperty")return _p}const a=Reflect.get(t,e,s);return(Vs(e)?Od.has(e):Lp(e))||(o||de(t,"get",e),n)?a:he(a)?r&&Pa(e)?a:a.value:Dt(a)?o?Hd(a):Ua(a):a}}class Vd extends Ad{constructor(t=!1){super(!1,t)}set(t,e,s,o){let n=t[e];if(!this._isShallow){const l=ks(n);if(!yn(s)&&!ks(s)&&(n=ct(n),s=ct(s)),!Z(t)&&he(n)&&!he(s))return l?!1:(n.value=s,!0)}const r=Z(t)&&Pa(e)?Number(e)<t.length:at(t,e),a=Reflect.set(t,e,s,o);return t===ct(o)&&(r?Fi(s,n)&&ii(t,"set",e,s):ii(t,"add",e,s)),a}deleteProperty(t,e){const s=at(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&s&&ii(t,"delete",e,void 0),o}has(t,e){const s=Reflect.has(t,e);return(!Vs(e)||!Od.has(e))&&de(t,"has",e),s}ownKeys(t){return de(t,"iterate",Z(t)?"length":Gi),Reflect.ownKeys(t)}}class Hp extends Ad{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Mp=new Vd,zp=new Hp,Bp=new Vd(!0),Na=i=>i,Ln=i=>Reflect.getPrototypeOf(i);function Ho(i,t,e=!1,s=!1){i=i.__v_raw;const o=ct(i),n=ct(t);e||(Fi(t,n)&&de(o,"get",t),de(o,"get",n));const{has:r}=Ln(o),a=s?Na:e?Ga:ao;if(r.call(o,t))return a(i.get(t));if(r.call(o,n))return a(i.get(n));i!==o&&i.get(t)}function Mo(i,t=!1){const e=this.__v_raw,s=ct(e),o=ct(i);return t||(Fi(i,o)&&de(s,"has",i),de(s,"has",o)),i===o?e.has(i):e.has(i)||e.has(o)}function zo(i,t=!1){return i=i.__v_raw,!t&&de(ct(i),"iterate",Gi),Reflect.get(i,"size",i)}function Xl(i){i=ct(i);const t=ct(this);return Ln(t).has.call(t,i)||(t.add(i),ii(t,"add",i,i)),this}function Yl(i,t){t=ct(t);const e=ct(this),{has:s,get:o}=Ln(e);let n=s.call(e,i);n||(i=ct(i),n=s.call(e,i));const r=o.call(e,i);return e.set(i,t),n?Fi(t,r)&&ii(e,"set",i,t):ii(e,"add",i,t),this}function Ql(i){const t=ct(this),{has:e,get:s}=Ln(t);let o=e.call(t,i);o||(i=ct(i),o=e.call(t,i)),s&&s.call(t,i);const n=t.delete(i);return o&&ii(t,"delete",i,void 0),n}function Zl(){const i=ct(this),t=i.size!==0,e=i.clear();return t&&ii(i,"clear",void 0,void 0),e}function Bo(i,t){return function(s,o){const n=this,r=n.__v_raw,a=ct(r),l=t?Na:i?Ga:ao;return!i&&de(a,"iterate",Gi),r.forEach((d,h)=>s.call(o,l(d),l(h),n))}}function No(i,t,e){return function(...s){const o=this.__v_raw,n=ct(o),r=gs(n),a=i==="entries"||i===Symbol.iterator&&r,l=i==="keys"&&r,d=o[i](...s),h=e?Na:t?Ga:ao;return!t&&de(n,"iterate",l?ha:Gi),{next(){const{value:g,done:b}=d.next();return b?{value:g,done:b}:{value:a?[h(g[0]),h(g[1])]:h(g),done:b}},[Symbol.iterator](){return this}}}}function gi(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function Np(){const i={get(n){return Ho(this,n)},get size(){return zo(this)},has:Mo,add:Xl,set:Yl,delete:Ql,clear:Zl,forEach:Bo(!1,!1)},t={get(n){return Ho(this,n,!1,!0)},get size(){return zo(this)},has:Mo,add:Xl,set:Yl,delete:Ql,clear:Zl,forEach:Bo(!1,!0)},e={get(n){return Ho(this,n,!0)},get size(){return zo(this,!0)},has(n){return Mo.call(this,n,!0)},add:gi("add"),set:gi("set"),delete:gi("delete"),clear:gi("clear"),forEach:Bo(!0,!1)},s={get(n){return Ho(this,n,!0,!0)},get size(){return zo(this,!0)},has(n){return Mo.call(this,n,!0)},add:gi("add"),set:gi("set"),delete:gi("delete"),clear:gi("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{i[n]=No(n,!1,!1),e[n]=No(n,!0,!1),t[n]=No(n,!1,!0),s[n]=No(n,!0,!0)}),[i,e,t,s]}const[jp,Up,qp,Gp]=Np();function ja(i,t){const e=t?i?Gp:qp:i?Up:jp;return(s,o,n)=>o==="__v_isReactive"?!i:o==="__v_isReadonly"?i:o==="__v_raw"?s:Reflect.get(at(e,o)&&o in s?e:s,o,n)}const Wp={get:ja(!1,!1)},Xp={get:ja(!1,!0)},Yp={get:ja(!0,!1)},Ld=new WeakMap,Pd=new WeakMap,_d=new WeakMap,Qp=new WeakMap;function Zp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jp(i){return i.__v_skip||!Object.isExtensible(i)?0:Zp(wp(i))}function Ua(i){return ks(i)?i:qa(i,!1,Mp,Wp,Ld)}function Kp(i){return qa(i,!1,Bp,Xp,Pd)}function Hd(i){return qa(i,!0,zp,Yp,_d)}function qa(i,t,e,s,o){if(!Dt(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const n=o.get(i);if(n)return n;const r=Jp(i);if(r===0)return i;const a=new Proxy(i,r===2?s:e);return o.set(i,a),a}function ms(i){return ks(i)?ms(i.__v_raw):!!(i&&i.__v_isReactive)}function ks(i){return!!(i&&i.__v_isReadonly)}function yn(i){return!!(i&&i.__v_isShallow)}function Md(i){return ms(i)||ks(i)}function ct(i){const t=i&&i.__v_raw;return t?ct(t):i}function zd(i){return Object.isExtensible(i)&&vn(i,"__v_skip",!0),i}const ao=i=>Dt(i)?Ua(i):i,Ga=i=>Dt(i)?Hd(i):i;class Bd{constructor(t,e,s,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ma(()=>t(this._value),()=>cn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ct(this);return(!t._cacheable||t.effect.dirty)&&Fi(t._value,t._value=t.effect.run())&&cn(t,4),Nd(t),t.effect._dirtyLevel>=2&&cn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function tf(i,t,e=!1){let s,o;const n=K(i);return n?(s=i,o=Fe):(s=i.get,o=i.set),new Bd(s,o,n||!o,e)}function Nd(i){var t;ki&&qi&&(i=ct(i),Dd(qi,(t=i.dep)!=null?t:i.dep=Ed(()=>i.dep=void 0,i instanceof Bd?i:void 0)))}function cn(i,t=4,e){i=ct(i);const s=i.dep;s&&Rd(s,t)}function he(i){return!!(i&&i.__v_isRef===!0)}function Lr(i){return ef(i,!1)}function ef(i,t){return he(i)?i:new sf(i,t)}class sf{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:ct(t),this._value=e?t:ao(t)}get value(){return Nd(this),this._value}set value(t){const e=this.__v_isShallow||yn(t)||ks(t);t=e?t:ct(t),Fi(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:ao(t),cn(this,4))}}function of(i){return he(i)?i.value:i}const nf={get:(i,t,e)=>of(Reflect.get(i,t,e)),set:(i,t,e,s)=>{const o=i[t];return he(o)&&!he(e)?(o.value=e,!0):Reflect.set(i,t,e,s)}};function jd(i){return ms(i)?i:new Proxy(i,nf)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ci(i,t,e,s){try{return s?i(...s):i()}catch(o){Pn(o,t,e)}}function Me(i,t,e,s){if(K(i)){const n=Ci(i,t,e,s);return n&&xd(n)&&n.catch(r=>{Pn(r,t,e)}),n}const o=[];for(let n=0;n<i.length;n++)o.push(Me(i[n],t,e,s));return o}function Pn(i,t,e,s=!0){const o=t?t.vnode:null;if(t){let n=t.parent;const r=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const d=n.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](i,r,a)===!1)return}n=n.parent}const l=t.appContext.config.errorHandler;if(l){Ci(l,null,10,[i,r,a]);return}}rf(i,e,o,s)}function rf(i,t,e,s=!0){console.error(i)}let lo=!1,ua=!1;const Ut=[];let Xe=0;const bs=[];let vi=null,ji=0;const Ud=Promise.resolve();let Wa=null;function af(i){const t=Wa||Ud;return i?t.then(this?i.bind(this):i):t}function lf(i){let t=Xe+1,e=Ut.length;for(;t<e;){const s=t+e>>>1,o=Ut[s],n=co(o);n<i||n===i&&o.pre?t=s+1:e=s}return t}function Xa(i){(!Ut.length||!Ut.includes(i,lo&&i.allowRecurse?Xe+1:Xe))&&(i.id==null?Ut.push(i):Ut.splice(lf(i.id),0,i),qd())}function qd(){!lo&&!ua&&(ua=!0,Wa=Ud.then(Wd))}function cf(i){const t=Ut.indexOf(i);t>Xe&&Ut.splice(t,1)}function df(i){Z(i)?bs.push(...i):(!vi||!vi.includes(i,i.allowRecurse?ji+1:ji))&&bs.push(i),qd()}function Jl(i,t,e=lo?Xe+1:0){for(;e<Ut.length;e++){const s=Ut[e];if(s&&s.pre){if(i&&s.id!==i.uid)continue;Ut.splice(e,1),e--,s()}}}function Gd(i){if(bs.length){const t=[...new Set(bs)].sort((e,s)=>co(e)-co(s));if(bs.length=0,vi){vi.push(...t);return}for(vi=t,ji=0;ji<vi.length;ji++)vi[ji]();vi=null,ji=0}}const co=i=>i.id==null?1/0:i.id,hf=(i,t)=>{const e=co(i)-co(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function Wd(i){ua=!1,lo=!0,Ut.sort(hf);try{for(Xe=0;Xe<Ut.length;Xe++){const t=Ut[Xe];t&&t.active!==!1&&Ci(t,null,14)}}finally{Xe=0,Ut.length=0,Gd(),lo=!1,Wa=null,(Ut.length||bs.length)&&Wd()}}function uf(i,t,...e){if(i.isUnmounted)return;const s=i.vnode.props||Ct;let o=e;const n=t.startsWith("update:"),r=n&&t.slice(7);if(r&&r in s){const h=`${r==="modelValue"?"model":r}Modifiers`,{number:g,trim:b}=s[h]||Ct;b&&(o=e.map(w=>_t(w)?w.trim():w)),g&&(o=e.map(Cp))}let a,l=s[a=Er(t)]||s[a=Er($s(t))];!l&&n&&(l=s[a=Er(Ls(t))]),l&&Me(l,i,6,o);const d=s[a+"Once"];if(d){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Me(d,i,6,o)}}function Xd(i,t,e=!1){const s=t.emitsCache,o=s.get(i);if(o!==void 0)return o;const n=i.emits;let r={},a=!1;if(!K(i)){const l=d=>{const h=Xd(d,t,!0);h&&(a=!0,Nt(r,h))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!a?(Dt(i)&&s.set(i,null),null):(Z(n)?n.forEach(l=>r[l]=null):Nt(r,n),Dt(i)&&s.set(i,r),r)}function _n(i,t){return!i||!On(t)?!1:(t=t.slice(2).replace(/Once$/,""),at(i,t[0].toLowerCase()+t.slice(1))||at(i,Ls(t))||at(i,t))}let ce=null,Hn=null;function xn(i){const t=ce;return ce=i,Hn=i&&i.type.__scopeId||null,t}function pf(i){Hn=i}function ff(){Hn=null}function Yd(i,t=ce,e){if(!t||i._n)return i;const s=(...o)=>{s._d&&lc(-1);const n=xn(t);let r;try{r=i(...o)}finally{xn(n),s._d&&lc(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Pr(i){const{type:t,vnode:e,proxy:s,withProxy:o,props:n,propsOptions:[r],slots:a,attrs:l,emit:d,render:h,renderCache:g,data:b,setupState:w,ctx:V,inheritAttrs:L}=i;let q,J;const nt=xn(i);try{if(e.shapeFlag&4){const gt=o||s,Lt=gt;q=We(h.call(Lt,gt,g,n,w,b,V)),J=l}else{const gt=t;q=We(gt.length>1?gt(n,{attrs:l,slots:a,emit:d}):gt(n,null)),J=t.props?l:gf(l)}}catch(gt){io.length=0,Pn(gt,i,1),q=Ye(Cs)}let et=q;if(J&&L!==!1){const gt=Object.keys(J),{shapeFlag:Lt}=et;gt.length&&Lt&7&&(r&&gt.some(Va)&&(J=mf(J,r)),et=Fs(et,J))}return e.dirs&&(et=Fs(et),et.dirs=et.dirs?et.dirs.concat(e.dirs):e.dirs),e.transition&&(et.transition=e.transition),q=et,xn(nt),q}const gf=i=>{let t;for(const e in i)(e==="class"||e==="style"||On(e))&&((t||(t={}))[e]=i[e]);return t},mf=(i,t)=>{const e={};for(const s in i)(!Va(s)||!(s.slice(9)in t))&&(e[s]=i[s]);return e};function bf(i,t,e){const{props:s,children:o,component:n}=i,{props:r,children:a,patchFlag:l}=t,d=n.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?Kl(s,r,d):!!r;if(l&8){const h=t.dynamicProps;for(let g=0;g<h.length;g++){const b=h[g];if(r[b]!==s[b]&&!_n(d,b))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?Kl(s,r,d):!0:!!r;return!1}function Kl(i,t,e){const s=Object.keys(t);if(s.length!==Object.keys(i).length)return!0;for(let o=0;o<s.length;o++){const n=s[o];if(t[n]!==i[n]&&!_n(e,n))return!0}return!1}function vf({vnode:i,parent:t},e){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===i&&(s.el=i.el),s===i)(i=t.vnode).el=e,t=t.parent;else break}}const yf=Symbol.for("v-ndc"),xf=i=>i.__isSuspense;function wf(i,t){t&&t.pendingBranch?Z(i)?t.effects.push(...i):t.effects.push(i):df(i)}const $f=Symbol.for("v-scx"),kf=()=>dn($f),jo={};function _r(i,t,e){return Qd(i,t,e)}function Qd(i,t,{immediate:e,deep:s,flush:o,once:n,onTrack:r,onTrigger:a}=Ct){if(t&&n){const Q=t;t=(...ne)=>{Q(...ne),Lt()}}const l=Jt,d=Q=>s===!0?Q:hs(Q,s===!1?1:void 0);let h,g=!1,b=!1;if(he(i)?(h=()=>i.value,g=yn(i)):ms(i)?(h=()=>d(i),g=!0):Z(i)?(b=!0,g=i.some(Q=>ms(Q)||yn(Q)),h=()=>i.map(Q=>{if(he(Q))return Q.value;if(ms(Q))return d(Q);if(K(Q))return Ci(Q,l,2)})):K(i)?t?h=()=>Ci(i,l,2):h=()=>(w&&w(),Me(i,l,3,[V])):h=Fe,t&&s){const Q=h;h=()=>hs(Q())}let w,V=Q=>{w=et.onStop=()=>{Ci(Q,l,4),w=et.onStop=void 0}},L;if(Nn)if(V=Fe,t?e&&Me(t,l,3,[h(),b?[]:void 0,V]):h(),o==="sync"){const Q=kf();L=Q.__watcherHandles||(Q.__watcherHandles=[])}else return Fe;let q=b?new Array(i.length).fill(jo):jo;const J=()=>{if(!(!et.active||!et.dirty))if(t){const Q=et.run();(s||g||(b?Q.some((ne,re)=>Fi(ne,q[re])):Fi(Q,q)))&&(w&&w(),Me(t,l,3,[Q,q===jo?void 0:b&&q[0]===jo?[]:q,V]),q=Q)}else et.run()};J.allowRecurse=!!t;let nt;o==="sync"?nt=J:o==="post"?nt=()=>le(J,l&&l.suspense):(J.pre=!0,l&&(J.id=l.uid),nt=()=>Xa(J));const et=new Ma(h,Fe,nt),gt=Ap(),Lt=()=>{et.stop(),gt&&La(gt.effects,et)};return t?e?J():q=et.run():o==="post"?le(et.run.bind(et),l&&l.suspense):et.run(),L&&L.push(Lt),Lt}function Cf(i,t,e){const s=this.proxy,o=_t(i)?i.includes(".")?Zd(s,i):()=>s[i]:i.bind(s,s);let n;K(t)?n=t:(n=t.handler,e=t);const r=wo(this),a=Qd(o,n.bind(s),e);return r(),a}function Zd(i,t){const e=t.split(".");return()=>{let s=i;for(let o=0;o<e.length&&s;o++)s=s[e[o]];return s}}function hs(i,t,e=0,s){if(!Dt(i)||i.__v_skip)return i;if(t&&t>0){if(e>=t)return i;e++}if(s=s||new Set,s.has(i))return i;if(s.add(i),he(i))hs(i.value,t,e,s);else if(Z(i))for(let o=0;o<i.length;o++)hs(i[o],t,e,s);else if(yd(i)||gs(i))i.forEach(o=>{hs(o,t,e,s)});else if($d(i))for(const o in i)hs(i[o],t,e,s);return i}function Hi(i,t,e,s){const o=i.dirs,n=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];n&&(a.oldValue=n[r].value);let l=a.dir[s];l&&(Ki(),Me(l,e,8,[i.el,a,i,t]),ts())}}/*! #__NO_SIDE_EFFECTS__ */function Ya(i,t){return K(i)?Nt({name:i.name},t,{setup:i}):i}const Ks=i=>!!i.type.__asyncLoader,Jd=i=>i.type.__isKeepAlive;function Ff(i,t){Kd(i,"a",t)}function If(i,t){Kd(i,"da",t)}function Kd(i,t,e=Jt){const s=i.__wdc||(i.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return i()});if(Mn(t,s,e),e){let o=e.parent;for(;o&&o.parent;)Jd(o.parent.vnode)&&Tf(s,t,e,o),o=o.parent}}function Tf(i,t,e,s){const o=Mn(t,i,s,!0);eh(()=>{La(s[t],o)},e)}function Mn(i,t,e=Jt,s=!1){if(e){const o=e[i]||(e[i]=[]),n=t.__weh||(t.__weh=(...r)=>{if(e.isUnmounted)return;Ki();const a=wo(e),l=Me(t,e,i,r);return a(),ts(),l});return s?o.unshift(n):o.push(n),n}}const ni=i=>(t,e=Jt)=>(!Nn||i==="sp")&&Mn(i,(...s)=>t(...s),e),Sf=ni("bm"),th=ni("m"),Df=ni("bu"),Rf=ni("u"),Ef=ni("bum"),eh=ni("um"),Of=ni("sp"),Af=ni("rtg"),Vf=ni("rtc");function Lf(i,t=Jt){Mn("ec",i,t)}function Uo(i,t,e,s){let o;const n=e&&e[s];if(Z(i)||_t(i)){o=new Array(i.length);for(let r=0,a=i.length;r<a;r++)o[r]=t(i[r],r,void 0,n&&n[r])}else if(typeof i=="number"){o=new Array(i);for(let r=0;r<i;r++)o[r]=t(r+1,r,void 0,n&&n[r])}else if(Dt(i))if(i[Symbol.iterator])o=Array.from(i,(r,a)=>t(r,a,void 0,n&&n[a]));else{const r=Object.keys(i);o=new Array(r.length);for(let a=0,l=r.length;a<l;a++){const d=r[a];o[a]=t(i[d],d,a,n&&n[a])}}else o=[];return e&&(e[s]=o),o}function ih(i,t,e={},s,o){if(ce.isCE||ce.parent&&Ks(ce.parent)&&ce.parent.isCE)return t!=="default"&&(e.name=t),Ye("slot",e,s&&s());let n=i[t];n&&n._c&&(n._d=!1),Pe();const r=n&&sh(n(e)),a=va(Qt,{key:e.key||r&&r.key||`_${t}`},r||(s?s():[]),r&&i._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),n&&n._c&&(n._d=!0),a}function sh(i){return i.some(t=>fh(t)?!(t.type===Cs||t.type===Qt&&!sh(t.children)):!0)?i:null}const pa=i=>i?bh(i)?Ka(i)||i.proxy:pa(i.parent):null,to=Nt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>pa(i.parent),$root:i=>pa(i.root),$emit:i=>i.emit,$options:i=>Qa(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Xa(i.update)}),$nextTick:i=>i.n||(i.n=af.bind(i.proxy)),$watch:i=>Cf.bind(i)}),Hr=(i,t)=>i!==Ct&&!i.__isScriptSetup&&at(i,t),Pf={get({_:i},t){const{ctx:e,setupState:s,data:o,props:n,accessCache:r,type:a,appContext:l}=i;let d;if(t[0]!=="$"){const w=r[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return o[t];case 4:return e[t];case 3:return n[t]}else{if(Hr(s,t))return r[t]=1,s[t];if(o!==Ct&&at(o,t))return r[t]=2,o[t];if((d=i.propsOptions[0])&&at(d,t))return r[t]=3,n[t];if(e!==Ct&&at(e,t))return r[t]=4,e[t];fa&&(r[t]=0)}}const h=to[t];let g,b;if(h)return t==="$attrs"&&de(i,"get",t),h(i);if((g=a.__cssModules)&&(g=g[t]))return g;if(e!==Ct&&at(e,t))return r[t]=4,e[t];if(b=l.config.globalProperties,at(b,t))return b[t]},set({_:i},t,e){const{data:s,setupState:o,ctx:n}=i;return Hr(o,t)?(o[t]=e,!0):s!==Ct&&at(s,t)?(s[t]=e,!0):at(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(n[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:s,appContext:o,propsOptions:n}},r){let a;return!!e[r]||i!==Ct&&at(i,r)||Hr(t,r)||(a=n[0])&&at(a,r)||at(s,r)||at(to,r)||at(o.config.globalProperties,r)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:at(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function tc(i){return Z(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let fa=!0;function _f(i){const t=Qa(i),e=i.proxy,s=i.ctx;fa=!1,t.beforeCreate&&ec(t.beforeCreate,i,"bc");const{data:o,computed:n,methods:r,watch:a,provide:l,inject:d,created:h,beforeMount:g,mounted:b,beforeUpdate:w,updated:V,activated:L,deactivated:q,beforeDestroy:J,beforeUnmount:nt,destroyed:et,unmounted:gt,render:Lt,renderTracked:Q,renderTriggered:ne,errorCaptured:re,serverPrefetch:Ns,expose:Li,inheritAttrs:js,components:Vo,directives:Lo,filters:Tr}=t;if(d&&Hf(d,s,null),r)for(const It in r){const bt=r[It];K(bt)&&(s[It]=bt.bind(e))}if(o){const It=o.call(e,e);Dt(It)&&(i.data=Ua(It))}if(fa=!0,n)for(const It in n){const bt=n[It],Pi=K(bt)?bt.bind(e,e):K(bt.get)?bt.get.bind(e,e):Fe,Po=!K(bt)&&K(bt.set)?bt.set.bind(e):Fe,_i=yh({get:Pi,set:Po});Object.defineProperty(s,It,{enumerable:!0,configurable:!0,get:()=>_i.value,set:je=>_i.value=je})}if(a)for(const It in a)oh(a[It],s,e,It);if(l){const It=K(l)?l.call(e):l;Reflect.ownKeys(It).forEach(bt=>{Uf(bt,It[bt])})}h&&ec(h,i,"c");function Xt(It,bt){Z(bt)?bt.forEach(Pi=>It(Pi.bind(e))):bt&&It(bt.bind(e))}if(Xt(Sf,g),Xt(th,b),Xt(Df,w),Xt(Rf,V),Xt(Ff,L),Xt(If,q),Xt(Lf,re),Xt(Vf,Q),Xt(Af,ne),Xt(Ef,nt),Xt(eh,gt),Xt(Of,Ns),Z(Li))if(Li.length){const It=i.exposed||(i.exposed={});Li.forEach(bt=>{Object.defineProperty(It,bt,{get:()=>e[bt],set:Pi=>e[bt]=Pi})})}else i.exposed||(i.exposed={});Lt&&i.render===Fe&&(i.render=Lt),js!=null&&(i.inheritAttrs=js),Vo&&(i.components=Vo),Lo&&(i.directives=Lo)}function Hf(i,t,e=Fe){Z(i)&&(i=ga(i));for(const s in i){const o=i[s];let n;Dt(o)?"default"in o?n=dn(o.from||s,o.default,!0):n=dn(o.from||s):n=dn(o),he(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function ec(i,t,e){Me(Z(i)?i.map(s=>s.bind(t.proxy)):i.bind(t.proxy),t,e)}function oh(i,t,e,s){const o=s.includes(".")?Zd(e,s):()=>e[s];if(_t(i)){const n=t[i];K(n)&&_r(o,n)}else if(K(i))_r(o,i.bind(e));else if(Dt(i))if(Z(i))i.forEach(n=>oh(n,t,e,s));else{const n=K(i.handler)?i.handler.bind(e):t[i.handler];K(n)&&_r(o,n,i)}}function Qa(i){const t=i.type,{mixins:e,extends:s}=t,{mixins:o,optionsCache:n,config:{optionMergeStrategies:r}}=i.appContext,a=n.get(t);let l;return a?l=a:!o.length&&!e&&!s?l=t:(l={},o.length&&o.forEach(d=>wn(l,d,r,!0)),wn(l,t,r)),Dt(t)&&n.set(t,l),l}function wn(i,t,e,s=!1){const{mixins:o,extends:n}=t;n&&wn(i,n,e,!0),o&&o.forEach(r=>wn(i,r,e,!0));for(const r in t)if(!(s&&r==="expose")){const a=Mf[r]||e&&e[r];i[r]=a?a(i[r],t[r]):t[r]}return i}const Mf={data:ic,props:sc,emits:sc,methods:Zs,computed:Zs,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Zs,directives:Zs,watch:Bf,provide:ic,inject:zf};function ic(i,t){return t?i?function(){return Nt(K(i)?i.call(this,this):i,K(t)?t.call(this,this):t)}:t:i}function zf(i,t){return Zs(ga(i),ga(t))}function ga(i){if(Z(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Yt(i,t){return i?[...new Set([].concat(i,t))]:t}function Zs(i,t){return i?Nt(Object.create(null),i,t):t}function sc(i,t){return i?Z(i)&&Z(t)?[...new Set([...i,...t])]:Nt(Object.create(null),tc(i),tc(t??{})):t}function Bf(i,t){if(!i)return t;if(!t)return i;const e=Nt(Object.create(null),i);for(const s in t)e[s]=Yt(i[s],t[s]);return e}function nh(){return{app:null,config:{isNativeTag:yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function jf(i,t){return function(s,o=null){K(s)||(s=Nt({},s)),o!=null&&!Dt(o)&&(o=null);const n=nh(),r=new WeakSet;let a=!1;const l=n.app={_uid:Nf++,_component:s,_props:o,_container:null,_context:n,_instance:null,version:fg,get config(){return n.config},set config(d){},use(d,...h){return r.has(d)||(d&&K(d.install)?(r.add(d),d.install(l,...h)):K(d)&&(r.add(d),d(l,...h))),l},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),l},component(d,h){return h?(n.components[d]=h,l):n.components[d]},directive(d,h){return h?(n.directives[d]=h,l):n.directives[d]},mount(d,h,g){if(!a){const b=Ye(s,o);return b.appContext=n,g===!0?g="svg":g===!1&&(g=void 0),h&&t?t(b,d):i(b,d,g),a=!0,l._container=d,d.__vue_app__=l,Ka(b.component)||b.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(d,h){return n.provides[d]=h,l},runWithContext(d){const h=eo;eo=l;try{return d()}finally{eo=h}}};return l}}let eo=null;function Uf(i,t){if(Jt){let e=Jt.provides;const s=Jt.parent&&Jt.parent.provides;s===e&&(e=Jt.provides=Object.create(s)),e[i]=t}}function dn(i,t,e=!1){const s=Jt||ce;if(s||eo){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:eo._context.provides;if(o&&i in o)return o[i];if(arguments.length>1)return e&&K(t)?t.call(s&&s.proxy):t}}function qf(i,t,e,s=!1){const o={},n={};vn(n,Bn,1),i.propsDefaults=Object.create(null),rh(i,t,o,n);for(const r in i.propsOptions[0])r in o||(o[r]=void 0);e?i.props=s?o:Kp(o):i.type.props?i.props=o:i.props=n,i.attrs=n}function Gf(i,t,e,s){const{props:o,attrs:n,vnode:{patchFlag:r}}=i,a=ct(o),[l]=i.propsOptions;let d=!1;if((s||r>0)&&!(r&16)){if(r&8){const h=i.vnode.dynamicProps;for(let g=0;g<h.length;g++){let b=h[g];if(_n(i.emitsOptions,b))continue;const w=t[b];if(l)if(at(n,b))w!==n[b]&&(n[b]=w,d=!0);else{const V=$s(b);o[V]=ma(l,a,V,w,i,!1)}else w!==n[b]&&(n[b]=w,d=!0)}}}else{rh(i,t,o,n)&&(d=!0);let h;for(const g in a)(!t||!at(t,g)&&((h=Ls(g))===g||!at(t,h)))&&(l?e&&(e[g]!==void 0||e[h]!==void 0)&&(o[g]=ma(l,a,g,void 0,i,!0)):delete o[g]);if(n!==a)for(const g in n)(!t||!at(t,g))&&(delete n[g],d=!0)}d&&ii(i,"set","$attrs")}function rh(i,t,e,s){const[o,n]=i.propsOptions;let r=!1,a;if(t)for(let l in t){if(Js(l))continue;const d=t[l];let h;o&&at(o,h=$s(l))?!n||!n.includes(h)?e[h]=d:(a||(a={}))[h]=d:_n(i.emitsOptions,l)||(!(l in s)||d!==s[l])&&(s[l]=d,r=!0)}if(n){const l=ct(e),d=a||Ct;for(let h=0;h<n.length;h++){const g=n[h];e[g]=ma(o,l,g,d[g],i,!at(d,g))}}return r}function ma(i,t,e,s,o,n){const r=i[e];if(r!=null){const a=at(r,"default");if(a&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&K(l)){const{propsDefaults:d}=o;if(e in d)s=d[e];else{const h=wo(o);s=d[e]=l.call(null,t),h()}}else s=l}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===Ls(e))&&(s=!0))}return s}function ah(i,t,e=!1){const s=t.propsCache,o=s.get(i);if(o)return o;const n=i.props,r={},a=[];let l=!1;if(!K(i)){const h=g=>{l=!0;const[b,w]=ah(g,t,!0);Nt(r,b),w&&a.push(...w)};!e&&t.mixins.length&&t.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!n&&!l)return Dt(i)&&s.set(i,fs),fs;if(Z(n))for(let h=0;h<n.length;h++){const g=$s(n[h]);oc(g)&&(r[g]=Ct)}else if(n)for(const h in n){const g=$s(h);if(oc(g)){const b=n[h],w=r[g]=Z(b)||K(b)?{type:b}:Nt({},b);if(w){const V=ac(Boolean,w.type),L=ac(String,w.type);w[0]=V>-1,w[1]=L<0||V<L,(V>-1||at(w,"default"))&&a.push(g)}}}const d=[r,a];return Dt(i)&&s.set(i,d),d}function oc(i){return i[0]!=="$"&&!Js(i)}function nc(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function rc(i,t){return nc(i)===nc(t)}function ac(i,t){return Z(t)?t.findIndex(e=>rc(e,i)):K(t)&&rc(t,i)?0:-1}const lh=i=>i[0]==="_"||i==="$stable",Za=i=>Z(i)?i.map(We):[We(i)],Wf=(i,t,e)=>{if(t._n)return t;const s=Yd((...o)=>Za(t(...o)),e);return s._c=!1,s},ch=(i,t,e)=>{const s=i._ctx;for(const o in i){if(lh(o))continue;const n=i[o];if(K(n))t[o]=Wf(o,n,s);else if(n!=null){const r=Za(n);t[o]=()=>r}}},dh=(i,t)=>{const e=Za(t);i.slots.default=()=>e},Xf=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=ct(t),vn(t,"_",e)):ch(t,i.slots={})}else i.slots={},t&&dh(i,t);vn(i.slots,Bn,1)},Yf=(i,t,e)=>{const{vnode:s,slots:o}=i;let n=!0,r=Ct;if(s.shapeFlag&32){const a=t._;a?e&&a===1?n=!1:(Nt(o,t),!e&&a===1&&delete o._):(n=!t.$stable,ch(t,o)),r=t}else t&&(dh(i,t),r={default:1});if(n)for(const a in o)!lh(a)&&r[a]==null&&delete o[a]};function ba(i,t,e,s,o=!1){if(Z(i)){i.forEach((b,w)=>ba(b,t&&(Z(t)?t[w]:t),e,s,o));return}if(Ks(s)&&!o)return;const n=s.shapeFlag&4?Ka(s.component)||s.component.proxy:s.el,r=o?null:n,{i:a,r:l}=i,d=t&&t.r,h=a.refs===Ct?a.refs={}:a.refs,g=a.setupState;if(d!=null&&d!==l&&(_t(d)?(h[d]=null,at(g,d)&&(g[d]=null)):he(d)&&(d.value=null)),K(l))Ci(l,a,12,[r,h]);else{const b=_t(l),w=he(l);if(b||w){const V=()=>{if(i.f){const L=b?at(g,l)?g[l]:h[l]:l.value;o?Z(L)&&La(L,n):Z(L)?L.includes(n)||L.push(n):b?(h[l]=[n],at(g,l)&&(g[l]=h[l])):(l.value=[n],i.k&&(h[i.k]=l.value))}else b?(h[l]=r,at(g,l)&&(g[l]=r)):w&&(l.value=r,i.k&&(h[i.k]=r))};r?(V.id=-1,le(V,e)):V()}}}const le=wf;function Qf(i){return Zf(i)}function Zf(i,t){const e=Cd();e.__VUE__=!0;const{insert:s,remove:o,patchProp:n,createElement:r,createText:a,createComment:l,setText:d,setElementText:h,parentNode:g,nextSibling:b,setScopeId:w=Fe,insertStaticContent:V}=i,L=(p,m,x,$=null,k=null,S=null,O=void 0,T=null,R=!!m.dynamicChildren)=>{if(p===m)return;p&&!qs(p,m)&&($=_o(p),je(p,k,S,!0),p=null),m.patchFlag===-2&&(R=!1,m.dynamicChildren=null);const{type:F,ref:_,shapeFlag:N}=m;switch(F){case zn:q(p,m,x,$);break;case Cs:J(p,m,x,$);break;case hn:p==null&&nt(m,x,$,O);break;case Qt:Vo(p,m,x,$,k,S,O,T,R);break;default:N&1?Lt(p,m,x,$,k,S,O,T,R):N&6?Lo(p,m,x,$,k,S,O,T,R):(N&64||N&128)&&F.process(p,m,x,$,k,S,O,T,R,ls)}_!=null&&k&&ba(_,p&&p.ref,S,m||p,!m)},q=(p,m,x,$)=>{if(p==null)s(m.el=a(m.children),x,$);else{const k=m.el=p.el;m.children!==p.children&&d(k,m.children)}},J=(p,m,x,$)=>{p==null?s(m.el=l(m.children||""),x,$):m.el=p.el},nt=(p,m,x,$)=>{[p.el,p.anchor]=V(p.children,m,x,$,p.el,p.anchor)},et=({el:p,anchor:m},x,$)=>{let k;for(;p&&p!==m;)k=b(p),s(p,x,$),p=k;s(m,x,$)},gt=({el:p,anchor:m})=>{let x;for(;p&&p!==m;)x=b(p),o(p),p=x;o(m)},Lt=(p,m,x,$,k,S,O,T,R)=>{m.type==="svg"?O="svg":m.type==="math"&&(O="mathml"),p==null?Q(m,x,$,k,S,O,T,R):Ns(p,m,k,S,O,T,R)},Q=(p,m,x,$,k,S,O,T)=>{let R,F;const{props:_,shapeFlag:N,transition:B,dirs:Y}=p;if(R=p.el=r(p.type,S,_&&_.is,_),N&8?h(R,p.children):N&16&&re(p.children,R,null,$,k,Mr(p,S),O,T),Y&&Hi(p,null,$,"created"),ne(R,p,p.scopeId,O,$),_){for(const ft in _)ft!=="value"&&!Js(ft)&&n(R,ft,null,_[ft],S,p.children,$,k,Ke);"value"in _&&n(R,"value",null,_.value,S),(F=_.onVnodeBeforeMount)&&qe(F,$,p)}Y&&Hi(p,null,$,"beforeMount");const rt=Jf(k,B);rt&&B.beforeEnter(R),s(R,m,x),((F=_&&_.onVnodeMounted)||rt||Y)&&le(()=>{F&&qe(F,$,p),rt&&B.enter(R),Y&&Hi(p,null,$,"mounted")},k)},ne=(p,m,x,$,k)=>{if(x&&w(p,x),$)for(let S=0;S<$.length;S++)w(p,$[S]);if(k){let S=k.subTree;if(m===S){const O=k.vnode;ne(p,O,O.scopeId,O.slotScopeIds,k.parent)}}},re=(p,m,x,$,k,S,O,T,R=0)=>{for(let F=R;F<p.length;F++){const _=p[F]=T?xi(p[F]):We(p[F]);L(null,_,m,x,$,k,S,O,T)}},Ns=(p,m,x,$,k,S,O)=>{const T=m.el=p.el;let{patchFlag:R,dynamicChildren:F,dirs:_}=m;R|=p.patchFlag&16;const N=p.props||Ct,B=m.props||Ct;let Y;if(x&&Mi(x,!1),(Y=B.onVnodeBeforeUpdate)&&qe(Y,x,m,p),_&&Hi(m,p,x,"beforeUpdate"),x&&Mi(x,!0),F?Li(p.dynamicChildren,F,T,x,$,Mr(m,k),S):O||bt(p,m,T,null,x,$,Mr(m,k),S,!1),R>0){if(R&16)js(T,m,N,B,x,$,k);else if(R&2&&N.class!==B.class&&n(T,"class",null,B.class,k),R&4&&n(T,"style",N.style,B.style,k),R&8){const rt=m.dynamicProps;for(let ft=0;ft<rt.length;ft++){const kt=rt[ft],Mt=N[kt],Ve=B[kt];(Ve!==Mt||kt==="value")&&n(T,kt,Mt,Ve,k,p.children,x,$,Ke)}}R&1&&p.children!==m.children&&h(T,m.children)}else!O&&F==null&&js(T,m,N,B,x,$,k);((Y=B.onVnodeUpdated)||_)&&le(()=>{Y&&qe(Y,x,m,p),_&&Hi(m,p,x,"updated")},$)},Li=(p,m,x,$,k,S,O)=>{for(let T=0;T<m.length;T++){const R=p[T],F=m[T],_=R.el&&(R.type===Qt||!qs(R,F)||R.shapeFlag&70)?g(R.el):x;L(R,F,_,null,$,k,S,O,!0)}},js=(p,m,x,$,k,S,O)=>{if(x!==$){if(x!==Ct)for(const T in x)!Js(T)&&!(T in $)&&n(p,T,x[T],null,O,m.children,k,S,Ke);for(const T in $){if(Js(T))continue;const R=$[T],F=x[T];R!==F&&T!=="value"&&n(p,T,F,R,O,m.children,k,S,Ke)}"value"in $&&n(p,"value",x.value,$.value,O)}},Vo=(p,m,x,$,k,S,O,T,R)=>{const F=m.el=p?p.el:a(""),_=m.anchor=p?p.anchor:a("");let{patchFlag:N,dynamicChildren:B,slotScopeIds:Y}=m;Y&&(T=T?T.concat(Y):Y),p==null?(s(F,x,$),s(_,x,$),re(m.children||[],x,_,k,S,O,T,R)):N>0&&N&64&&B&&p.dynamicChildren?(Li(p.dynamicChildren,B,x,k,S,O,T),(m.key!=null||k&&m===k.subTree)&&hh(p,m,!0)):bt(p,m,x,_,k,S,O,T,R)},Lo=(p,m,x,$,k,S,O,T,R)=>{m.slotScopeIds=T,p==null?m.shapeFlag&512?k.ctx.activate(m,x,$,O,R):Tr(m,x,$,k,S,O,R):Hl(p,m,R)},Tr=(p,m,x,$,k,S,O)=>{const T=p.component=lg(p,$,k);if(Jd(p)&&(T.ctx.renderer=ls),cg(T),T.asyncDep){if(k&&k.registerDep(T,Xt),!p.el){const R=T.subTree=Ye(Cs);J(null,R,m,x)}}else Xt(T,p,m,x,k,S,O)},Hl=(p,m,x)=>{const $=m.component=p.component;if(bf(p,m,x))if($.asyncDep&&!$.asyncResolved){It($,m,x);return}else $.next=m,cf($.update),$.effect.dirty=!0,$.update();else m.el=p.el,$.vnode=m},Xt=(p,m,x,$,k,S,O)=>{const T=()=>{if(p.isMounted){let{next:_,bu:N,u:B,parent:Y,vnode:rt}=p;{const cs=uh(p);if(cs){_&&(_.el=rt.el,It(p,_,O)),cs.asyncDep.then(()=>{p.isUnmounted||T()});return}}let ft=_,kt;Mi(p,!1),_?(_.el=rt.el,It(p,_,O)):_=rt,N&&Or(N),(kt=_.props&&_.props.onVnodeBeforeUpdate)&&qe(kt,Y,_,rt),Mi(p,!0);const Mt=Pr(p),Ve=p.subTree;p.subTree=Mt,L(Ve,Mt,g(Ve.el),_o(Ve),p,k,S),_.el=Mt.el,ft===null&&vf(p,Mt.el),B&&le(B,k),(kt=_.props&&_.props.onVnodeUpdated)&&le(()=>qe(kt,Y,_,rt),k)}else{let _;const{el:N,props:B}=m,{bm:Y,m:rt,parent:ft}=p,kt=Ks(m);if(Mi(p,!1),Y&&Or(Y),!kt&&(_=B&&B.onVnodeBeforeMount)&&qe(_,ft,m),Mi(p,!0),N&&Rr){const Mt=()=>{p.subTree=Pr(p),Rr(N,p.subTree,p,k,null)};kt?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Mt()):Mt()}else{const Mt=p.subTree=Pr(p);L(null,Mt,x,$,p,k,S),m.el=Mt.el}if(rt&&le(rt,k),!kt&&(_=B&&B.onVnodeMounted)){const Mt=m;le(()=>qe(_,ft,Mt),k)}(m.shapeFlag&256||ft&&Ks(ft.vnode)&&ft.vnode.shapeFlag&256)&&p.a&&le(p.a,k),p.isMounted=!0,m=x=$=null}},R=p.effect=new Ma(T,Fe,()=>Xa(F),p.scope),F=p.update=()=>{R.dirty&&R.run()};F.id=p.uid,Mi(p,!0),F()},It=(p,m,x)=>{m.component=p;const $=p.vnode.props;p.vnode=m,p.next=null,Gf(p,m.props,$,x),Yf(p,m.children,x),Ki(),Jl(p),ts()},bt=(p,m,x,$,k,S,O,T,R=!1)=>{const F=p&&p.children,_=p?p.shapeFlag:0,N=m.children,{patchFlag:B,shapeFlag:Y}=m;if(B>0){if(B&128){Po(F,N,x,$,k,S,O,T,R);return}else if(B&256){Pi(F,N,x,$,k,S,O,T,R);return}}Y&8?(_&16&&Ke(F,k,S),N!==F&&h(x,N)):_&16?Y&16?Po(F,N,x,$,k,S,O,T,R):Ke(F,k,S,!0):(_&8&&h(x,""),Y&16&&re(N,x,$,k,S,O,T,R))},Pi=(p,m,x,$,k,S,O,T,R)=>{p=p||fs,m=m||fs;const F=p.length,_=m.length,N=Math.min(F,_);let B;for(B=0;B<N;B++){const Y=m[B]=R?xi(m[B]):We(m[B]);L(p[B],Y,x,null,k,S,O,T,R)}F>_?Ke(p,k,S,!0,!1,N):re(m,x,$,k,S,O,T,R,N)},Po=(p,m,x,$,k,S,O,T,R)=>{let F=0;const _=m.length;let N=p.length-1,B=_-1;for(;F<=N&&F<=B;){const Y=p[F],rt=m[F]=R?xi(m[F]):We(m[F]);if(qs(Y,rt))L(Y,rt,x,null,k,S,O,T,R);else break;F++}for(;F<=N&&F<=B;){const Y=p[N],rt=m[B]=R?xi(m[B]):We(m[B]);if(qs(Y,rt))L(Y,rt,x,null,k,S,O,T,R);else break;N--,B--}if(F>N){if(F<=B){const Y=B+1,rt=Y<_?m[Y].el:$;for(;F<=B;)L(null,m[F]=R?xi(m[F]):We(m[F]),x,rt,k,S,O,T,R),F++}}else if(F>B)for(;F<=N;)je(p[F],k,S,!0),F++;else{const Y=F,rt=F,ft=new Map;for(F=rt;F<=B;F++){const ge=m[F]=R?xi(m[F]):We(m[F]);ge.key!=null&&ft.set(ge.key,F)}let kt,Mt=0;const Ve=B-rt+1;let cs=!1,Bl=0;const Us=new Array(Ve);for(F=0;F<Ve;F++)Us[F]=0;for(F=Y;F<=N;F++){const ge=p[F];if(Mt>=Ve){je(ge,k,S,!0);continue}let Ue;if(ge.key!=null)Ue=ft.get(ge.key);else for(kt=rt;kt<=B;kt++)if(Us[kt-rt]===0&&qs(ge,m[kt])){Ue=kt;break}Ue===void 0?je(ge,k,S,!0):(Us[Ue-rt]=F+1,Ue>=Bl?Bl=Ue:cs=!0,L(ge,m[Ue],x,null,k,S,O,T,R),Mt++)}const Nl=cs?Kf(Us):fs;for(kt=Nl.length-1,F=Ve-1;F>=0;F--){const ge=rt+F,Ue=m[ge],jl=ge+1<_?m[ge+1].el:$;Us[F]===0?L(null,Ue,x,jl,k,S,O,T,R):cs&&(kt<0||F!==Nl[kt]?_i(Ue,x,jl,2):kt--)}}},_i=(p,m,x,$,k=null)=>{const{el:S,type:O,transition:T,children:R,shapeFlag:F}=p;if(F&6){_i(p.component.subTree,m,x,$);return}if(F&128){p.suspense.move(m,x,$);return}if(F&64){O.move(p,m,x,ls);return}if(O===Qt){s(S,m,x);for(let N=0;N<R.length;N++)_i(R[N],m,x,$);s(p.anchor,m,x);return}if(O===hn){et(p,m,x);return}if($!==2&&F&1&&T)if($===0)T.beforeEnter(S),s(S,m,x),le(()=>T.enter(S),k);else{const{leave:N,delayLeave:B,afterLeave:Y}=T,rt=()=>s(S,m,x),ft=()=>{N(S,()=>{rt(),Y&&Y()})};B?B(S,rt,ft):ft()}else s(S,m,x)},je=(p,m,x,$=!1,k=!1)=>{const{type:S,props:O,ref:T,children:R,dynamicChildren:F,shapeFlag:_,patchFlag:N,dirs:B}=p;if(T!=null&&ba(T,null,x,p,!0),_&256){m.ctx.deactivate(p);return}const Y=_&1&&B,rt=!Ks(p);let ft;if(rt&&(ft=O&&O.onVnodeBeforeUnmount)&&qe(ft,m,p),_&6)vp(p.component,x,$);else{if(_&128){p.suspense.unmount(x,$);return}Y&&Hi(p,null,m,"beforeUnmount"),_&64?p.type.remove(p,m,x,k,ls,$):F&&(S!==Qt||N>0&&N&64)?Ke(F,m,x,!1,!0):(S===Qt&&N&384||!k&&_&16)&&Ke(R,m,x),$&&Ml(p)}(rt&&(ft=O&&O.onVnodeUnmounted)||Y)&&le(()=>{ft&&qe(ft,m,p),Y&&Hi(p,null,m,"unmounted")},x)},Ml=p=>{const{type:m,el:x,anchor:$,transition:k}=p;if(m===Qt){bp(x,$);return}if(m===hn){gt(p);return}const S=()=>{o(x),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:O,delayLeave:T}=k,R=()=>O(x,S);T?T(p.el,S,R):R()}else S()},bp=(p,m)=>{let x;for(;p!==m;)x=b(p),o(p),p=x;o(m)},vp=(p,m,x)=>{const{bum:$,scope:k,update:S,subTree:O,um:T}=p;$&&Or($),k.stop(),S&&(S.active=!1,je(O,p,m,x)),T&&le(T,m),le(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(p,m,x,$=!1,k=!1,S=0)=>{for(let O=S;O<p.length;O++)je(p[O],m,x,$,k)},_o=p=>p.shapeFlag&6?_o(p.component.subTree):p.shapeFlag&128?p.suspense.next():b(p.anchor||p.el);let Sr=!1;const zl=(p,m,x)=>{p==null?m._vnode&&je(m._vnode,null,null,!0):L(m._vnode||null,p,m,null,null,null,x),Sr||(Sr=!0,Jl(),Gd(),Sr=!1),m._vnode=p},ls={p:L,um:je,m:_i,r:Ml,mt:Tr,mc:re,pc:bt,pbc:Li,n:_o,o:i};let Dr,Rr;return t&&([Dr,Rr]=t(ls)),{render:zl,hydrate:Dr,createApp:jf(zl,Dr)}}function Mr({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Mi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function Jf(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function hh(i,t,e=!1){const s=i.children,o=t.children;if(Z(s)&&Z(o))for(let n=0;n<s.length;n++){const r=s[n];let a=o[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[n]=xi(o[n]),a.el=r.el),e||hh(r,a)),a.type===zn&&(a.el=r.el)}}function Kf(i){const t=i.slice(),e=[0];let s,o,n,r,a;const l=i.length;for(s=0;s<l;s++){const d=i[s];if(d!==0){if(o=e[e.length-1],i[o]<d){t[s]=o,e.push(s);continue}for(n=0,r=e.length-1;n<r;)a=n+r>>1,i[e[a]]<d?n=a+1:r=a;d<i[e[n]]&&(n>0&&(t[s]=e[n-1]),e[n]=s)}}for(n=e.length,r=e[n-1];n-- >0;)e[n]=r,r=t[r];return e}function uh(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:uh(t)}const tg=i=>i.__isTeleport,Qt=Symbol.for("v-fgt"),zn=Symbol.for("v-txt"),Cs=Symbol.for("v-cmt"),hn=Symbol.for("v-stc"),io=[];let He=null;function Pe(i=!1){io.push(He=i?null:[])}function eg(){io.pop(),He=io[io.length-1]||null}let ho=1;function lc(i){ho+=i}function ph(i){return i.dynamicChildren=ho>0?He||fs:null,eg(),ho>0&&He&&He.push(i),i}function yi(i,t,e,s,o,n){return ph(ut(i,t,e,s,o,n,!0))}function va(i,t,e,s,o){return ph(Ye(i,t,e,s,o,!0))}function fh(i){return i?i.__v_isVNode===!0:!1}function qs(i,t){return i.type===t.type&&i.key===t.key}const Bn="__vInternal",gh=({key:i})=>i??null,un=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?_t(i)||he(i)||K(i)?{i:ce,r:i,k:t,f:!!e}:i:null);function ut(i,t=null,e=null,s=0,o=null,n=i===Qt?0:1,r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&gh(t),ref:t&&un(t),scopeId:Hn,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ce};return a?(Ja(l,e),n&128&&i.normalize(l)):e&&(l.shapeFlag|=_t(e)?8:16),ho>0&&!r&&He&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&He.push(l),l}const Ye=ig;function ig(i,t=null,e=null,s=0,o=null,n=!1){if((!i||i===yf)&&(i=Cs),fh(i)){const a=Fs(i,t,!0);return e&&Ja(a,e),ho>0&&!n&&He&&(a.shapeFlag&6?He[He.indexOf(i)]=a:He.push(a)),a.patchFlag|=-2,a}if(pg(i)&&(i=i.__vccOpts),t){t=sg(t);let{class:a,style:l}=t;a&&!_t(a)&&(t.class=Ha(a)),Dt(l)&&(Md(l)&&!Z(l)&&(l=Nt({},l)),t.style=_a(l))}const r=_t(i)?1:xf(i)?128:tg(i)?64:Dt(i)?4:K(i)?2:0;return ut(i,t,e,s,o,r,n,!0)}function sg(i){return i?Md(i)||Bn in i?Nt({},i):i:null}function Fs(i,t,e=!1){const{props:s,ref:o,patchFlag:n,children:r}=i,a=t?ng(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&gh(a),ref:t&&t.ref?e&&o?Z(o)?o.concat(un(t)):[o,un(t)]:un(t):o,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:r,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Qt?n===-1?16:n|16:n,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Fs(i.ssContent),ssFallback:i.ssFallback&&Fs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function og(i=" ",t=0){return Ye(zn,null,i,t)}function mh(i,t){const e=Ye(hn,null,i);return e.staticCount=t,e}function We(i){return i==null||typeof i=="boolean"?Ye(Cs):Z(i)?Ye(Qt,null,i.slice()):typeof i=="object"?xi(i):Ye(zn,null,String(i))}function xi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Fs(i)}function Ja(i,t){let e=0;const{shapeFlag:s}=i;if(t==null)t=null;else if(Z(t))e=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Ja(i,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!(Bn in t)?t._ctx=ce:o===3&&ce&&(ce.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:ce},e=32):(t=String(t),s&64?(e=16,t=[og(t)]):e=8);i.children=t,i.shapeFlag|=e}function ng(...i){const t={};for(let e=0;e<i.length;e++){const s=i[e];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ha([t.class,s.class]));else if(o==="style")t.style=_a([t.style,s.style]);else if(On(o)){const n=t[o],r=s[o];r&&n!==r&&!(Z(n)&&n.includes(r))&&(t[o]=n?[].concat(n,r):r)}else o!==""&&(t[o]=s[o])}return t}function qe(i,t,e,s=null){Me(i,t,7,[e,s])}const rg=nh();let ag=0;function lg(i,t,e){const s=i.type,o=(t?t.appContext:i.appContext)||rg,n={uid:ag++,vnode:i,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ah(s,o),emitsOptions:Xd(s,o),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:s.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=uf.bind(null,n),i.ce&&i.ce(n),n}let Jt=null,$n,ya;{const i=Cd(),t=(e,s)=>{let o;return(o=i[e])||(o=i[e]=[]),o.push(s),n=>{o.length>1?o.forEach(r=>r(n)):o[0](n)}};$n=t("__VUE_INSTANCE_SETTERS__",e=>Jt=e),ya=t("__VUE_SSR_SETTERS__",e=>Nn=e)}const wo=i=>{const t=Jt;return $n(i),i.scope.on(),()=>{i.scope.off(),$n(t)}},cc=()=>{Jt&&Jt.scope.off(),$n(null)};function bh(i){return i.vnode.shapeFlag&4}let Nn=!1;function cg(i,t=!1){t&&ya(t);const{props:e,children:s}=i.vnode,o=bh(i);qf(i,e,o,t),Xf(i,s);const n=o?dg(i,t):void 0;return t&&ya(!1),n}function dg(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=zd(new Proxy(i.ctx,Pf));const{setup:s}=e;if(s){const o=i.setupContext=s.length>1?ug(i):null,n=wo(i);Ki();const r=Ci(s,i,0,[i.props,o]);if(ts(),n(),xd(r)){if(r.then(cc,cc),t)return r.then(a=>{dc(i,a,t)}).catch(a=>{Pn(a,i,0)});i.asyncDep=r}else dc(i,r,t)}else vh(i,t)}function dc(i,t,e){K(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Dt(t)&&(i.setupState=jd(t)),vh(i,e)}let hc;function vh(i,t,e){const s=i.type;if(!i.render){if(!t&&hc&&!s.render){const o=s.template||Qa(i).template;if(o){const{isCustomElement:n,compilerOptions:r}=i.appContext.config,{delimiters:a,compilerOptions:l}=s,d=Nt(Nt({isCustomElement:n,delimiters:a},r),l);s.render=hc(o,d)}}i.render=s.render||Fe}{const o=wo(i);Ki();try{_f(i)}finally{ts(),o()}}}function hg(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return de(i,"get","$attrs"),t[e]}}))}function ug(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return hg(i)},slots:i.slots,emit:i.emit,expose:t}}function Ka(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(jd(zd(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in to)return to[e](i)},has(t,e){return e in t||e in to}}))}function pg(i){return K(i)&&"__vccOpts"in i}const yh=(i,t)=>tf(i,t,Nn),fg="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gg="http://www.w3.org/2000/svg",mg="http://www.w3.org/1998/Math/MathML",wi=typeof document<"u"?document:null,uc=wi&&wi.createElement("template"),bg={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,s)=>{const o=t==="svg"?wi.createElementNS(gg,i):t==="mathml"?wi.createElementNS(mg,i):wi.createElement(i,e?{is:e}:void 0);return i==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:i=>wi.createTextNode(i),createComment:i=>wi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>wi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,s,o,n){const r=e?e.previousSibling:t.lastChild;if(o&&(o===n||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===n||!(o=o.nextSibling)););else{uc.innerHTML=s==="svg"?`<svg>${i}</svg>`:s==="mathml"?`<math>${i}</math>`:i;const a=uc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[r?r.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},vg=Symbol("_vtc");function yg(i,t,e){const s=i[vg];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const pc=Symbol("_vod"),xg=Symbol("_vsh"),wg=Symbol(""),$g=/(^|;)\s*display\s*:/;function kg(i,t,e){const s=i.style,o=_t(e);let n=!1;if(e&&!o){if(t)if(_t(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();e[a]==null&&pn(s,a,"")}else for(const r in t)e[r]==null&&pn(s,r,"");for(const r in e)r==="display"&&(n=!0),pn(s,r,e[r])}else if(o){if(t!==e){const r=s[wg];r&&(e+=";"+r),s.cssText=e,n=$g.test(e)}}else t&&i.removeAttribute("style");pc in i&&(i[pc]=n?s.display:"",i[xg]&&(s.display="none"))}const fc=/\s*!important$/;function pn(i,t,e){if(Z(e))e.forEach(s=>pn(i,t,s));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const s=Cg(i,t);fc.test(e)?i.setProperty(Ls(s),e.replace(fc,""),"important"):i[s]=e}}const gc=["Webkit","Moz","ms"],zr={};function Cg(i,t){const e=zr[t];if(e)return e;let s=$s(t);if(s!=="filter"&&s in i)return zr[t]=s;s=kd(s);for(let o=0;o<gc.length;o++){const n=gc[o]+s;if(n in i)return zr[t]=n}return t}const mc="http://www.w3.org/1999/xlink";function Fg(i,t,e,s,o){if(s&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(mc,t.slice(6,t.length)):i.setAttributeNS(mc,t,e);else{const n=Rp(t);e==null||n&&!Fd(e)?i.removeAttribute(t):i.setAttribute(t,n?"":e)}}function Ig(i,t,e,s,o,n,r){if(t==="innerHTML"||t==="textContent"){s&&r(s,o,n),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const d=a==="OPTION"?i.getAttribute("value")||"":i.value,h=e??"";(d!==h||!("_value"in i))&&(i.value=h),e==null&&i.removeAttribute(t),i._value=e;return}let l=!1;if(e===""||e==null){const d=typeof i[t];d==="boolean"?e=Fd(e):e==null&&d==="string"?(e="",l=!0):d==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function Tg(i,t,e,s){i.addEventListener(t,e,s)}function Sg(i,t,e,s){i.removeEventListener(t,e,s)}const bc=Symbol("_vei");function Dg(i,t,e,s,o=null){const n=i[bc]||(i[bc]={}),r=n[t];if(s&&r)r.value=s;else{const[a,l]=Rg(t);if(s){const d=n[t]=Ag(s,o);Tg(i,a,d,l)}else r&&(Sg(i,a,r,l),n[t]=void 0)}}const vc=/(?:Once|Passive|Capture)$/;function Rg(i){let t;if(vc.test(i)){t={};let s;for(;s=i.match(vc);)i=i.slice(0,i.length-s[0].length),t[s[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ls(i.slice(2)),t]}let Br=0;const Eg=Promise.resolve(),Og=()=>Br||(Eg.then(()=>Br=0),Br=Date.now());function Ag(i,t){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;Me(Vg(s,e.value),t,5,[s])};return e.value=i,e.attached=Og(),e}function Vg(i,t){if(Z(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const yc=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Lg=(i,t,e,s,o,n,r,a,l)=>{const d=o==="svg";t==="class"?yg(i,s,d):t==="style"?kg(i,e,s):On(t)?Va(t)||Dg(i,t,e,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pg(i,t,s,d))?Ig(i,t,s,n,r,a,l):(t==="true-value"?i._trueValue=s:t==="false-value"&&(i._falseValue=s),Fg(i,t,s,d))};function Pg(i,t,e,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in i&&yc(t)&&K(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=i.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return yc(t)&&_t(e)?!1:t in i}const _g=Nt({patchProp:Lg},bg);let xc;function Hg(){return xc||(xc=Qf(_g))}const Mg=(...i)=>{const t=Hg().createApp(...i),{mount:e}=t;return t.mount=s=>{const o=Bg(s);if(!o)return;const n=t._component;!K(n)&&!n.render&&!n.template&&(n.template=o.innerHTML),o.innerHTML="";const r=e(o,!1,zg(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),r},t};function zg(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Bg(i){return _t(i)?document.querySelector(i):i}const Ng="/assets/Logo-BgdiXH0i.jpg",si=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();si.trustedTypes===void 0&&(si.trustedTypes={createPolicy:(i,t)=>t});const xh={configurable:!1,enumerable:!1,writable:!1};si.FAST===void 0&&Reflect.defineProperty(si,"FAST",Object.assign({value:Object.create(null)},xh));const uo=si.FAST;if(uo.getById===void 0){const i=Object.create(null);Reflect.defineProperty(uo,"getById",Object.assign({value(t,e){let s=i[t];return s===void 0&&(s=e?i[t]=e():null),s}},xh))}const Wi=Object.freeze([]);function wh(){const i=new WeakMap;return function(t){let e=i.get(t);if(e===void 0){let s=Reflect.getPrototypeOf(t);for(;e===void 0&&s!==null;)e=i.get(s),s=Reflect.getPrototypeOf(s);e=e===void 0?[]:e.slice(0),i.set(t,e)}return e}}const Nr=si.FAST.getById(1,()=>{const i=[],t=[];function e(){if(t.length)throw t.shift()}function s(r){try{r.call()}catch(a){t.push(a),setTimeout(e,0)}}function o(){let a=0;for(;a<i.length;)if(s(i[a]),a++,a>1024){for(let l=0,d=i.length-a;l<d;l++)i[l]=i[l+a];i.length-=a,a=0}i.length=0}function n(r){i.length<1&&si.requestAnimationFrame(o),i.push(r)}return Object.freeze({enqueue:n,process:o})}),$h=si.trustedTypes.createPolicy("fast-html",{createHTML:i=>i});let jr=$h;const so=`fast-${Math.random().toString(36).substring(2,8)}`,kh=`${so}{`,tl=`}${so}`,G=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(i){if(jr!==$h)throw new Error("The HTML policy can only be set once.");jr=i},createHTML(i){return jr.createHTML(i)},isMarker(i){return i&&i.nodeType===8&&i.data.startsWith(so)},extractDirectiveIndexFromMarker(i){return parseInt(i.data.replace(`${so}:`,""))},createInterpolationPlaceholder(i){return`${kh}${i}${tl}`},createCustomAttributePlaceholder(i,t){return`${i}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder(i){return`<!--${so}:${i}-->`},queueUpdate:Nr.enqueue,processUpdates:Nr.process,nextUpdate(){return new Promise(Nr.enqueue)},setAttribute(i,t,e){e==null?i.removeAttribute(t):i.setAttribute(t,e)},setBooleanAttribute(i,t,e){e?i.setAttribute(t,""):i.removeAttribute(t)},removeChildNodes(i){for(let t=i.firstChild;t!==null;t=i.firstChild)i.removeChild(t)},createTemplateWalker(i){return document.createTreeWalker(i,133,null,!1)}});class kn{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){const e=this.spillover;if(e===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else e.indexOf(t)===-1&&e.push(t)}unsubscribe(t){const e=this.spillover;if(e===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const s=e.indexOf(t);s!==-1&&e.splice(s,1)}}notify(t){const e=this.spillover,s=this.source;if(e===void 0){const o=this.sub1,n=this.sub2;o!==void 0&&o.handleChange(s,t),n!==void 0&&n.handleChange(s,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(s,t)}}class Ch{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const s=this.subscribers[t];s!==void 0&&s.notify(t),(e=this.sourceSubscribers)===null||e===void 0||e.notify(t)}subscribe(t,e){var s;if(e){let o=this.subscribers[e];o===void 0&&(this.subscribers[e]=o=new kn(this.source)),o.subscribe(t)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new kn(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var s;if(e){const o=this.subscribers[e];o!==void 0&&o.unsubscribe(t)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(t)}}const U=uo.getById(2,()=>{const i=/(:|&&|\|\||if)/,t=new WeakMap,e=G.queueUpdate;let s,o=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(d){let h=d.$fastController||t.get(d);return h===void 0&&(Array.isArray(d)?h=o(d):t.set(d,h=new Ch(d))),h}const r=wh();class a{constructor(h){this.name=h,this.field=`_${h}`,this.callback=`${h}Changed`}getValue(h){return s!==void 0&&s.watch(h,this.name),h[this.field]}setValue(h,g){const b=this.field,w=h[b];if(w!==g){h[b]=g;const V=h[this.callback];typeof V=="function"&&V.call(h,w,g),n(h).notify(this.name)}}}class l extends kn{constructor(h,g,b=!1){super(h,g),this.binding=h,this.isVolatileBinding=b,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(h,g){this.needsRefresh&&this.last!==null&&this.disconnect();const b=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(h,g);return s=b,w}disconnect(){if(this.last!==null){let h=this.first;for(;h!==void 0;)h.notifier.unsubscribe(this,h.propertyName),h=h.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(h,g){const b=this.last,w=n(h),V=b===null?this.first:{};if(V.propertySource=h,V.propertyName=g,V.notifier=w,w.subscribe(this,g),b!==null){if(!this.needsRefresh){let L;s=void 0,L=b.propertySource[b.propertyName],s=this,h===L&&(this.needsRefresh=!0)}b.next=V}this.last=V}handleChange(){this.needsQueue&&(this.needsQueue=!1,e(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let h=this.first;return{next:()=>{const g=h;return g===void 0?{value:void 0,done:!0}:(h=h.next,{value:g,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){o=d},getNotifier:n,track(d,h){s!==void 0&&s.watch(d,h)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(d,h){n(d).notify(h)},defineProperty(d,h){typeof h=="string"&&(h=new a(h)),r(d).push(h),Reflect.defineProperty(d,h.name,{enumerable:!0,get:function(){return h.getValue(this)},set:function(g){h.setValue(this,g)}})},getAccessors:r,binding(d,h,g=this.isVolatileBinding(d)){return new l(d,h,g)},isVolatileBinding(d){return i.test(d.toString())}})});function y(i,t){U.defineProperty(i,t)}function jg(i,t,e){return Object.assign({},e,{get:function(){return U.trackVolatile(),e.get.apply(this)}})}const wc=uo.getById(3,()=>{let i=null;return{get(){return i},set(t){i=t}}});class po{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return wc.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){wc.set(t)}}U.defineProperty(po.prototype,"index");U.defineProperty(po.prototype,"length");const oo=Object.seal(new po);class jn{constructor(){this.targetIndex=0}}class Fh extends jn{constructor(){super(...arguments),this.createPlaceholder=G.createInterpolationPlaceholder}}class el extends jn{constructor(t,e,s){super(),this.name=t,this.behavior=e,this.options=s}createPlaceholder(t){return G.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Ug(i,t){this.source=i,this.context=t,this.bindingObserver===null&&(this.bindingObserver=U.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(i,t))}function qg(i,t){this.source=i,this.context=t,this.target.addEventListener(this.targetName,this)}function Gg(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Wg(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const i=this.target.$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}function Xg(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Yg(i){G.setAttribute(this.target,this.targetName,i)}function Qg(i){G.setBooleanAttribute(this.target,this.targetName,i)}function Zg(i){if(i==null&&(i=""),i.create){this.target.textContent="";let t=this.target.$fastView;t===void 0?t=i.create():this.target.$fastTemplate!==i&&(t.isComposed&&(t.remove(),t.unbind()),t=i.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=i)}else{const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=i}}function Jg(i){this.target[this.targetName]=i}function Kg(i){const t=this.classVersions||Object.create(null),e=this.target;let s=this.version||0;if(i!=null&&i.length){const o=i.split(/\s+/);for(let n=0,r=o.length;n<r;++n){const a=o[n];a!==""&&(t[a]=s,e.classList.add(a))}}if(this.classVersions=t,this.version=s+1,s!==0){s-=1;for(const o in t)t[o]===s&&e.classList.remove(o)}}class il extends Fh{constructor(t){super(),this.binding=t,this.bind=Ug,this.unbind=Gg,this.updateTarget=Yg,this.isBindingVolatile=U.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,t!==void 0)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=Jg,this.cleanedTargetName==="innerHTML"){const e=this.binding;this.binding=(s,o)=>G.createHTML(e(s,o))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=Qg;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=qg,this.unbind=Xg;break;default:this.cleanedTargetName=t,t==="class"&&(this.updateTarget=Kg);break}}targetAtContent(){this.updateTarget=Zg,this.unbind=Wg}createBehavior(t){return new tm(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class tm{constructor(t,e,s,o,n,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=s,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){po.setEvent(t);const e=this.binding(this.source,this.context);po.setEvent(null),e!==!0&&t.preventDefault()}}let Ur=null;class sl{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ur=this}static borrow(t){const e=Ur||new sl;return e.directives=t,e.reset(),Ur=null,e}}function em(i){if(i.length===1)return i[0];let t;const e=i.length,s=i.map(r=>typeof r=="string"?()=>r:(t=r.targetName||t,r.binding)),o=(r,a)=>{let l="";for(let d=0;d<e;++d)l+=s[d](r,a);return l},n=new il(o);return n.targetName=t,n}const im=tl.length;function Ih(i,t){const e=t.split(kh);if(e.length===1)return null;const s=[];for(let o=0,n=e.length;o<n;++o){const r=e[o],a=r.indexOf(tl);let l;if(a===-1)l=r;else{const d=parseInt(r.substring(0,a));s.push(i.directives[d]),l=r.substring(a+im)}l!==""&&s.push(l)}return s}function $c(i,t,e=!1){const s=t.attributes;for(let o=0,n=s.length;o<n;++o){const r=s[o],a=r.value,l=Ih(i,a);let d=null;l===null?e&&(d=new il(()=>a),d.targetName=r.name):d=em(l),d!==null&&(t.removeAttributeNode(r),o--,n--,i.addFactory(d))}}function sm(i,t,e){const s=Ih(i,t.textContent);if(s!==null){let o=t;for(let n=0,r=s.length;n<r;++n){const a=s[n],l=n===0?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",i.captureContentBinding(a)),o=l,i.targetIndex++,l!==t&&e.nextNode()}i.targetIndex--}}function om(i,t){const e=i.content;document.adoptNode(e);const s=sl.borrow(t);$c(s,i,!0);const o=s.behaviorFactories;s.reset();const n=G.createTemplateWalker(e);let r;for(;r=n.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:$c(s,r);break;case 3:sm(s,r,n);break;case 8:G.isMarker(r)&&s.addFactory(t[G.extractDirectiveIndexFromMarker(r)])}let a=0;(G.isMarker(e.firstChild)||e.childNodes.length===1&&t.length)&&(e.insertBefore(document.createComment(""),e.firstChild),a=-1);const l=s.behaviorFactories;return s.release(),{fragment:e,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}const qr=document.createRange();class Th{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const s=t.parentNode;let o=this.firstChild,n;for(;o!==e;)n=o.nextSibling,s.insertBefore(o,t),o=n;s.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.appendChild(s),s=o;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let s=this.firstChild,o;for(;s!==e;)o=s.nextSibling,t.removeChild(s),s=o;t.removeChild(e);const n=this.behaviors,r=this.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}bind(t,e){const s=this.behaviors;if(this.source!==t)if(this.source!==null){const o=this.source;this.source=t,this.context=e;for(let n=0,r=s.length;n<r;++n){const a=s[n];a.unbind(o),a.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=s.length;o<n;++o)s[o].bind(t,e)}}unbind(){if(this.source===null)return;const t=this.behaviors,e=this.source;for(let s=0,o=t.length;s<o;++s)t[s].unbind(e);this.source=null}static disposeContiguousBatch(t){if(t.length!==0){qr.setStartBefore(t[0].firstChild),qr.setEndAfter(t[t.length-1].lastChild),qr.deleteContents();for(let e=0,s=t.length;e<s;++e){const o=t[e],n=o.behaviors,r=o.source;for(let a=0,l=n.length;a<l;++a)n[a].unbind(r)}}}}class kc{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(this.fragment===null){let d;const h=this.html;if(typeof h=="string"){d=document.createElement("template"),d.innerHTML=G.createHTML(h);const b=d.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(d=b)}else d=h;const g=om(d,this.directives);this.fragment=g.fragment,this.viewBehaviorFactories=g.viewBehaviorFactories,this.hostBehaviorFactories=g.hostBehaviorFactories,this.targetOffset=g.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=G.createTemplateWalker(e);let r=0,a=this.targetOffset,l=n.nextNode();for(let d=s.length;r<d;++r){const h=s[r],g=h.targetIndex;for(;l!==null;)if(a===g){o[r]=h.createBehavior(l);break}else l=n.nextNode(),a++}if(this.hasHostBehaviors){const d=this.hostBehaviorFactories;for(let h=0,g=d.length;h<g;++h,++r)o[r]=d[h].createBehavior(t)}return new Th(e,o)}render(t,e,s){typeof e=="string"&&(e=document.getElementById(e)),s===void 0&&(s=e);const o=this.create(s);return o.bind(t,oo),o.appendTo(e),o}}const nm=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function I(i,...t){const e=[];let s="";for(let o=0,n=i.length-1;o<n;++o){const r=i[o];let a=t[o];if(s+=r,a instanceof kc){const l=a;a=()=>l}if(typeof a=="function"&&(a=new il(a)),a instanceof Fh){const l=nm.exec(r);l!==null&&(a.targetName=l[2])}a instanceof jn?(s+=a.createPlaceholder(e.length),e.push(a)):s+=a}return s+=i[i.length-1],new kc(s,e)}class ee{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}}ee.create=(()=>{if(G.supportsAdoptedStyleSheets){const i=new Map;return t=>new rm(t,i)}return i=>new cm(i)})();function ol(i){return i.map(t=>t instanceof ee?ol(t.styles):[t]).reduce((t,e)=>t.concat(e),[])}function Sh(i){return i.map(t=>t instanceof ee?t.behaviors:null).reduce((t,e)=>e===null?t:(t===null&&(t=[]),t.concat(e)),null)}let Dh=(i,t)=>{i.adoptedStyleSheets=[...i.adoptedStyleSheets,...t]},Rh=(i,t)=>{i.adoptedStyleSheets=i.adoptedStyleSheets.filter(e=>t.indexOf(e)===-1)};if(G.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Dh=(i,t)=>{i.adoptedStyleSheets.push(...t)},Rh=(i,t)=>{for(const e of t){const s=i.adoptedStyleSheets.indexOf(e);s!==-1&&i.adoptedStyleSheets.splice(s,1)}}}catch{}class rm extends ee{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=Sh(t)}get styleSheets(){if(this._styleSheets===void 0){const t=this.styles,e=this.styleSheetCache;this._styleSheets=ol(t).map(s=>{if(s instanceof CSSStyleSheet)return s;let o=e.get(s);return o===void 0&&(o=new CSSStyleSheet,o.replaceSync(s),e.set(s,o)),o})}return this._styleSheets}addStylesTo(t){Dh(t,this.styleSheets),super.addStylesTo(t)}removeStylesFrom(t){Rh(t,this.styleSheets),super.removeStylesFrom(t)}}let am=0;function lm(){return`fast-style-class-${++am}`}class cm extends ee{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=Sh(t),this.styleSheets=ol(t),this.styleClass=lm()}addStylesTo(t){const e=this.styleSheets,s=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=s,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){t=this.normalizeTarget(t);const e=t.querySelectorAll(`.${this.styleClass}`);for(let s=0,o=e.length;s<o;++s)t.removeChild(e[s]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const Cn=Object.freeze({locate:wh()}),$o={toView(i){return i?"true":"false"},fromView(i){return!(i==null||i==="false"||i===!1||i===0)}},P={toView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t.toString()},fromView(i){if(i==null)return null;const t=i*1;return isNaN(t)?null:t}};class Fn{constructor(t,e,s=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=s,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,o==="boolean"&&n===void 0&&(this.converter=$o)}setValue(t,e){const s=t[this.fieldName],o=this.converter;o!==void 0&&(e=o.fromView(e)),s!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](s,e),t.$fastController.notify(this.name))}getValue(t){return U.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,s=this.guards;s.has(t)||e==="fromView"||G.queueUpdate(()=>{s.add(t);const o=t[this.fieldName];switch(e){case"reflect":const n=this.converter;G.setAttribute(t,this.attribute,n!==void 0?n.toView(o):o);break;case"boolean":G.setBooleanAttribute(t,this.attribute,o);break}s.delete(t)})}static collect(t,...e){const s=[];e.push(Cn.locate(t));for(let o=0,n=e.length;o<n;++o){const r=e[o];if(r!==void 0)for(let a=0,l=r.length;a<l;++a){const d=r[a];typeof d=="string"?s.push(new Fn(t,d)):s.push(new Fn(t,d.property,d.attribute,d.mode,d.converter))}}return s}}function u(i,t){let e;function s(o,n){arguments.length>1&&(e.property=n),Cn.locate(o.constructor).push(e)}if(arguments.length>1){e={},s(i,t);return}return e=i===void 0?{}:i,s}const Cc={mode:"open"},Fc={},xa=uo.getById(4,()=>{const i=new Map;return Object.freeze({register(t){return i.has(t.type)?!1:(i.set(t.type,t),!0)},getByType(t){return i.get(t)}})});class Un{constructor(t,e=t.definition){typeof e=="string"&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const s=Fn.collect(t,e.attributes),o=new Array(s.length),n={},r={};for(let a=0,l=s.length;a<l;++a){const d=s[a];o[a]=d.attribute,n[d.name]=d,r[d.attribute]=d}this.attributes=s,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=e.shadowOptions===void 0?Cc:e.shadowOptions===null?void 0:Object.assign(Object.assign({},Cc),e.shadowOptions),this.elementOptions=e.elementOptions===void 0?Fc:Object.assign(Object.assign({},Fc),e.elementOptions),this.styles=e.styles===void 0?void 0:Array.isArray(e.styles)?ee.create(e.styles):e.styles instanceof ee?e.styles:ee.create([e.styles])}get isDefined(){return!!xa.getByType(this.type)}define(t=customElements){const e=this.type;if(xa.register(this)){const s=this.attributes,o=e.prototype;for(let n=0,r=s.length;n<r;++n)U.defineProperty(o,s[n]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}Un.forType=xa.getByType;const Eh=new WeakMap,dm={bubbles:!0,composed:!0,cancelable:!0};function Gr(i){return i.shadowRoot||Eh.get(i)||null}class nl extends Ch{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const s=e.shadowOptions;if(s!==void 0){const n=t.attachShadow(s);s.mode==="closed"&&Eh.set(t,n)}const o=U.getAccessors(t);if(o.length>0){const n=this.boundObservables=Object.create(null);for(let r=0,a=o.length;r<a;++r){const l=o[r].name,d=t[l];d!==void 0&&(delete t[l],n[l]=d)}}}get isConnected(){return U.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,U.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=t,!this.needsInitialization&&t!==null&&this.addStyles(t))}addStyles(t){const e=Gr(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const s=t.behaviors;t.addStylesTo(e),s!==null&&this.addBehaviors(s)}}removeStyles(t){const e=Gr(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const s=t.behaviors;t.removeStylesFrom(e),s!==null&&this.removeBehaviors(s)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),s=t.length,o=[];for(let n=0;n<s;++n){const r=t[n];e.has(r)?e.set(r,e.get(r)+1):(e.set(r,1),o.push(r))}if(this._isConnected){const n=this.element;for(let r=0;r<o.length;++r)o[r].bind(n,oo)}}removeBehaviors(t,e=!1){const s=this.behaviors;if(s===null)return;const o=t.length,n=[];for(let r=0;r<o;++r){const a=t[r];if(s.has(a)){const l=s.get(a)-1;l===0||e?s.delete(a)&&n.push(a):s.set(a,l)}}if(this._isConnected){const r=this.element;for(let a=0;a<n.length;++a)n[a].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(t,oo);const e=this.behaviors;if(e!==null)for(const[s]of e)s.bind(t,oo);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;t!==null&&t.unbind();const e=this.behaviors;if(e!==null){const s=this.element;for(const[o]of e)o.unbind(s)}}onAttributeChangedCallback(t,e,s){const o=this.definition.attributeLookup[t];o!==void 0&&o.onAttributeChangedCallback(this.element,s)}emit(t,e,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},dm),s))):!1}finishInitialization(){const t=this.element,e=this.boundObservables;if(e!==null){const o=Object.keys(e);for(let n=0,r=o.length;n<r;++n){const a=o[n];t[a]=e[a]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,s=Gr(e)||e;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||G.removeChildNodes(s),t&&(this.view=t.render(e,s,e))}static forCustomElement(t){const e=t.$fastController;if(e!==void 0)return e;const s=Un.forType(t.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return t.$fastController=new nl(t,s)}}function Ic(i){return class extends i{constructor(){super(),nl.forCustomElement(this)}$emit(t,e,s){return this.$fastController.emit(t,e,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,s){this.$fastController.onAttributeChangedCallback(t,e,s)}}}const qn=Object.assign(Ic(HTMLElement),{from(i){return Ic(i)},define(i,t){return new Un(i,t).define().type}});class rl{createCSS(){return""}createBehavior(){}}function Oh(i,t){const e=[];let s="";const o=[];for(let n=0,r=i.length-1;n<r;++n){s+=i[n];let a=t[n];if(a instanceof rl){const l=a.createBehavior();a=a.createCSS(),l&&o.push(l)}a instanceof ee||a instanceof CSSStyleSheet?(s.trim()!==""&&(e.push(s),s=""),e.push(a)):s+=a}return s+=i[i.length-1],s.trim()!==""&&e.push(s),{styles:e,behaviors:o}}function C(i,...t){const{styles:e,behaviors:s}=Oh(i,t),o=ee.create(e);return s.length&&o.withBehaviors(...s),o}class hm extends rl{constructor(t,e){super(),this.behaviors=e,this.css="";const s=t.reduce((o,n)=>(typeof n=="string"?this.css+=n:o.push(n),o),[]);s.length&&(this.styles=ee.create(s))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function be(i,...t){const{styles:e,behaviors:s}=Oh(i,t);return new hm(e,s)}function _e(i,t,e){return{index:i,removed:t,addedCount:e}}const Ah=0,Vh=1,wa=2,$a=3;function um(i,t,e,s,o,n){const r=n-o+1,a=e-t+1,l=new Array(r);let d,h;for(let g=0;g<r;++g)l[g]=new Array(a),l[g][0]=g;for(let g=0;g<a;++g)l[0][g]=g;for(let g=1;g<r;++g)for(let b=1;b<a;++b)i[t+b-1]===s[o+g-1]?l[g][b]=l[g-1][b-1]:(d=l[g-1][b]+1,h=l[g][b-1]+1,l[g][b]=d<h?d:h);return l}function pm(i){let t=i.length-1,e=i[0].length-1,s=i[t][e];const o=[];for(;t>0||e>0;){if(t===0){o.push(wa),e--;continue}if(e===0){o.push($a),t--;continue}const n=i[t-1][e-1],r=i[t-1][e],a=i[t][e-1];let l;r<a?l=r<n?r:n:l=a<n?a:n,l===n?(n===s?o.push(Ah):(o.push(Vh),s=n),t--,e--):l===r?(o.push($a),t--,s=r):(o.push(wa),e--,s=a)}return o.reverse(),o}function fm(i,t,e){for(let s=0;s<e;++s)if(i[s]!==t[s])return s;return e}function gm(i,t,e){let s=i.length,o=t.length,n=0;for(;n<e&&i[--s]===t[--o];)n++;return n}function mm(i,t,e,s){return t<e||s<i?-1:t===e||s===i?0:i<e?t<s?t-e:s-e:s<t?s-i:t-i}function Lh(i,t,e,s,o,n){let r=0,a=0;const l=Math.min(e-t,n-o);if(t===0&&o===0&&(r=fm(i,s,l)),e===i.length&&n===s.length&&(a=gm(i,s,l-r)),t+=r,o+=r,e-=a,n-=a,e-t===0&&n-o===0)return Wi;if(t===e){const V=_e(t,[],0);for(;o<n;)V.removed.push(s[o++]);return[V]}else if(o===n)return[_e(t,[],e-t)];const d=pm(um(i,t,e,s,o,n)),h=[];let g,b=t,w=o;for(let V=0;V<d.length;++V)switch(d[V]){case Ah:g!==void 0&&(h.push(g),g=void 0),b++,w++;break;case Vh:g===void 0&&(g=_e(b,[],0)),g.addedCount++,b++,g.removed.push(s[w]),w++;break;case wa:g===void 0&&(g=_e(b,[],0)),g.addedCount++,b++;break;case $a:g===void 0&&(g=_e(b,[],0)),g.removed.push(s[w]),w++;break}return g!==void 0&&h.push(g),h}const Tc=Array.prototype.push;function bm(i,t,e,s){const o=_e(t,e,s);let n=!1,r=0;for(let a=0;a<i.length;a++){const l=i[a];if(l.index+=r,n)continue;const d=mm(o.index,o.index+o.removed.length,l.index,l.index+l.addedCount);if(d>=0){i.splice(a,1),a--,r-=l.addedCount-l.removed.length,o.addedCount+=l.addedCount-d;const h=o.removed.length+l.removed.length-d;if(!o.addedCount&&!h)n=!0;else{let g=l.removed;if(o.index<l.index){const b=o.removed.slice(0,l.index-o.index);Tc.apply(b,g),g=b}if(o.index+o.removed.length>l.index+l.addedCount){const b=o.removed.slice(l.index+l.addedCount-o.index);Tc.apply(g,b)}o.removed=g,l.index<o.index&&(o.index=l.index)}}else if(o.index<l.index){n=!0,i.splice(a,0,o),a++;const h=o.addedCount-o.removed.length;l.index+=h,r+=h}}n||i.push(o)}function vm(i){const t=[];for(let e=0,s=i.length;e<s;e++){const o=i[e];bm(t,o.index,o.removed,o.addedCount)}return t}function ym(i,t){let e=[];const s=vm(t);for(let o=0,n=s.length;o<n;++o){const r=s[o];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==i[r.index]&&e.push(r);continue}e=e.concat(Lh(i,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return e}let Sc=!1;function Wr(i,t){let e=i.index;const s=t.length;return e>s?e=s-i.addedCount:e<0&&(e=s+i.removed.length+e-i.addedCount),e<0&&(e=0),i.index=e,i}class xm extends kn{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,G.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,G.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(t===void 0&&e===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=e===void 0?ym(this.source,t):Lh(this.source,0,this.source.length,e,0,e.length);this.notify(s)}}function wm(){if(Sc)return;Sc=!0,U.setArrayObserverFactory(l=>new xm(l));const i=Array.prototype;if(i.$fastPatch)return;Reflect.defineProperty(i,"$fastPatch",{value:1,enumerable:!1});const t=i.pop,e=i.push,s=i.reverse,o=i.shift,n=i.sort,r=i.splice,a=i.unshift;i.pop=function(){const l=this.length>0,d=t.apply(this,arguments),h=this.$fastController;return h!==void 0&&l&&h.addSplice(_e(this.length,[d],0)),d},i.push=function(){const l=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Wr(_e(this.length-arguments.length,[],arguments.length),this)),l},i.reverse=function(){let l;const d=this.$fastController;d!==void 0&&(d.flush(),l=this.slice());const h=s.apply(this,arguments);return d!==void 0&&d.reset(l),h},i.shift=function(){const l=this.length>0,d=o.apply(this,arguments),h=this.$fastController;return h!==void 0&&l&&h.addSplice(_e(0,[d],0)),d},i.sort=function(){let l;const d=this.$fastController;d!==void 0&&(d.flush(),l=this.slice());const h=n.apply(this,arguments);return d!==void 0&&d.reset(l),h},i.splice=function(){const l=r.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Wr(_e(+arguments[0],l,arguments.length>2?arguments.length-2:0),this)),l},i.unshift=function(){const l=a.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Wr(_e(0,[],arguments.length),this)),l}}class $m{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function lt(i){return new el("fast-ref",$m,i)}const Ph=i=>typeof i=="function",km=()=>null;function Dc(i){return i===void 0?km:Ph(i)?i:()=>i}function St(i,t,e){const s=Ph(i)?i:()=>i,o=Dc(t),n=Dc(e);return(r,a)=>s(r,a)?o(r,a):n(r,a)}const Rc=Object.freeze({positioning:!1,recycle:!0});function Cm(i,t,e,s){i.bind(t[e],s)}function Fm(i,t,e,s){const o=Object.create(s);o.index=e,o.length=t.length,i.bind(t[e],o)}class Im{constructor(t,e,s,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Cm,this.itemsBindingObserver=U.binding(e,this,s),this.templateBindingObserver=U.binding(o,this,n),r.positioning&&(this.bindView=Fm)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items){this.items=Wi;return}const e=this.itemsObserver,s=this.itemsObserver=U.getNotifier(this.items),o=e!==s;o&&e!==null&&e.unsubscribe(this),(o||t)&&s.subscribe(this)}updateViews(t){const e=this.childContext,s=this.views,o=this.bindView,n=this.items,r=this.template,a=this.options.recycle,l=[];let d=0,h=0;for(let g=0,b=t.length;g<b;++g){const w=t[g],V=w.removed;let L=0,q=w.index;const J=q+w.addedCount,nt=s.splice(w.index,V.length),et=h=l.length+nt.length;for(;q<J;++q){const gt=s[q],Lt=gt?gt.firstChild:this.location;let Q;a&&h>0?(L<=et&&nt.length>0?(Q=nt[L],L++):(Q=l[d],d++),h--):Q=r.create(),s.splice(q,0,Q),o(Q,n,q,e),Q.insertBefore(Lt)}nt[L]&&l.push(...nt.slice(L))}for(let g=d,b=l.length;g<b;++g)l[g].dispose();if(this.options.positioning)for(let g=0,b=s.length;g<b;++g){const w=s[g].context;w.length=b,w.index=g}}refreshAllViews(t=!1){const e=this.items,s=this.childContext,o=this.template,n=this.location,r=this.bindView;let a=e.length,l=this.views,d=l.length;if((a===0||t||!this.options.recycle)&&(Th.disposeContiguousBatch(l),d=0),d===0){this.views=l=new Array(a);for(let h=0;h<a;++h){const g=o.create();r(g,e,h,s),l[h]=g,g.insertBefore(n)}}else{let h=0;for(;h<a;++h)if(h<d){const b=l[h];r(b,e,h,s)}else{const b=o.create();r(b,e,h,s),l.push(b),b.insertBefore(n)}const g=l.splice(h,d-h);for(h=0,a=g.length;h<a;++h)g[h].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,s=t.length;e<s;++e)t[e].unbind()}}class al extends jn{constructor(t,e,s){super(),this.itemsBinding=t,this.templateBinding=e,this.options=s,this.createPlaceholder=G.createBlockPlaceholder,wm(),this.isItemsBindingVolatile=U.isVolatileBinding(t),this.isTemplateBindingVolatile=U.isVolatileBinding(e)}createBehavior(t){return new Im(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function vs(i,t,e=Rc){const s=typeof t=="function"?t:()=>t;return new al(i,s,Object.assign(Object.assign({},Rc),e))}function oi(i){return i?function(t,e,s){return t.nodeType===1&&t.matches(i)}:function(t,e,s){return t.nodeType===1}}class _h{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=U.getAccessors(t).some(s=>s.name===e),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Wi),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return this.options.filter!==void 0&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Tm extends _h{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function wt(i){return typeof i=="string"&&(i={property:i}),new el("fast-slotted",Tm,i)}class Sm extends _h{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Gn(i){return typeof i=="string"&&(i={property:i}),new el("fast-children",Sm,i)}class ue{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ie=(i,t)=>I`
    <span
        part="end"
        ${lt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${lt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,se=(i,t)=>I`
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
`,Dm=I`
    <span part="end" ${lt("endContainer")}>
        <slot
            name="end"
            ${lt("end")}
            @slotchange="${i=>i.handleEndContentChange()}"
        ></slot>
    </span>
`,Rm=I`
    <span part="start" ${lt("startContainer")}>
        <slot
            name="start"
            ${lt("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        ></slot>
    </span>
`,Em=(i,t)=>I`
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
            ${se(i,t)}
            ${ie(i,t)}
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
***************************************************************************** */function c(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}const Xr=new Map;"metadata"in Reflect||(Reflect.metadata=function(i,t){return function(e){Reflect.defineMetadata(i,t,e)}},Reflect.defineMetadata=function(i,t,e){let s=Xr.get(e);s===void 0&&Xr.set(e,s=new Map),s.set(i,t)},Reflect.getOwnMetadata=function(i,t){const e=Xr.get(t);if(e!==void 0)return e.get(i)});class Om{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Mh(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:s,key:o}=this;return this.container=this.key=void 0,s.registerResolver(o,new ke(o,t,e))}}function Gs(i){const t=i.slice(),e=Object.keys(i),s=e.length;let o;for(let n=0;n<s;++n)o=e[n],zh(o)||(t[o]=i[o]);return t}const Am=Object.freeze({none(i){throw Error(`${i.toString()} not registered, did you forget to add @singleton()?`)},singleton(i){return new ke(i,1,i)},transient(i){return new ke(i,2,i)}}),Yr=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Am.singleton})}),Ec=new Map;function Oc(i){return t=>Reflect.getOwnMetadata(i,t)}let Ac=null;const Tt=Object.freeze({createContainer(i){return new no(null,Object.assign({},Yr.default,i))},findResponsibleContainer(i){const t=i.$$container$$;return t&&t.responsibleForOwnerRequests?t:Tt.findParentContainer(i)},findParentContainer(i){const t=new CustomEvent(Hh,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return i.dispatchEvent(t),t.detail.container||Tt.getOrCreateDOMContainer()},getOrCreateDOMContainer(i,t){return i?i.$$container$$||new no(i,Object.assign({},Yr.default,t,{parentLocator:Tt.findParentContainer})):Ac||(Ac=new no(null,Object.assign({},Yr.default,t,{parentLocator:()=>null})))},getDesignParamtypes:Oc("design:paramtypes"),getAnnotationParamtypes:Oc("di:paramtypes"),getOrCreateAnnotationParamTypes(i){let t=this.getAnnotationParamtypes(i);return t===void 0&&Reflect.defineMetadata("di:paramtypes",t=[],i),t},getDependencies(i){let t=Ec.get(i);if(t===void 0){const e=i.inject;if(e===void 0){const s=Tt.getDesignParamtypes(i),o=Tt.getAnnotationParamtypes(i);if(s===void 0)if(o===void 0){const n=Object.getPrototypeOf(i);typeof n=="function"&&n!==Function.prototype?t=Gs(Tt.getDependencies(n)):t=[]}else t=Gs(o);else if(o===void 0)t=Gs(s);else{t=Gs(s);let n=o.length,r;for(let d=0;d<n;++d)r=o[d],r!==void 0&&(t[d]=r);const a=Object.keys(o);n=a.length;let l;for(let d=0;d<n;++d)l=a[d],zh(l)||(t[l]=o[l])}}else t=Gs(e);Ec.set(i,t)}return t},defineProperty(i,t,e,s=!1){const o=`$di_${t}`;Reflect.defineProperty(i,t,{get:function(){let n=this[o];if(n===void 0&&(n=(this instanceof HTMLElement?Tt.findResponsibleContainer(this):Tt.getOrCreateDOMContainer()).get(e),this[o]=n,s&&this instanceof qn)){const a=this.$fastController,l=()=>{const h=Tt.findResponsibleContainer(this).get(e),g=this[o];h!==g&&(this[o]=n,a.notify(t))};a.subscribe({handleChange:l},"isConnected")}return n}})},createInterface(i,t){const e=typeof i=="function"?i:t,s=typeof i=="string"?i:i&&"friendlyName"in i&&i.friendlyName||_c,o=typeof i=="string"?!1:i&&"respectConnection"in i&&i.respectConnection||!1,n=function(r,a,l){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)Tt.defineProperty(r,a,n,o);else{const d=Tt.getOrCreateAnnotationParamTypes(r);d[l]=n}};return n.$isInterface=!0,n.friendlyName=s??"(anonymous)",e!=null&&(n.register=function(r,a){return e(new Om(r,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...i){return function(t,e,s){if(typeof s=="number"){const o=Tt.getOrCreateAnnotationParamTypes(t),n=i[0];n!==void 0&&(o[s]=n)}else if(e)Tt.defineProperty(t,e,i[0]);else{const o=s?Tt.getOrCreateAnnotationParamTypes(s.value):Tt.getOrCreateAnnotationParamTypes(t);let n;for(let r=0;r<i.length;++r)n=i[r],n!==void 0&&(o[r]=n)}}},transient(i){return i.register=function(e){return fo.transient(i,i).register(e)},i.registerInRequestor=!1,i},singleton(i,t=Lm){return i.register=function(s){return fo.singleton(i,i).register(s)},i.registerInRequestor=t.scoped,i}}),Vm=Tt.createInterface("Container");Tt.inject;const Lm={scoped:!1};class ke{constructor(t,e,s){this.key=t,this.strategy=e,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=t.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,s,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return(o=(s=(e=t.getResolver(this.state))===null||e===void 0?void 0:e.getFactory)===null||s===void 0?void 0:s.call(e,t))!==null&&o!==void 0?o:null;default:return null}}}function Vc(i){return this.get(i)}function Pm(i,t){return t(i)}class _m{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let s;return e===void 0?s=new this.Type(...this.dependencies.map(Vc,t)):s=new this.Type(...this.dependencies.map(Vc,t),...e),this.transformers==null?s:this.transformers.reduce(Pm,s)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const Hm={$isResolver:!0,resolve(i,t){return t}};function fn(i){return typeof i.register=="function"}function Mm(i){return fn(i)&&typeof i.registerInRequestor=="boolean"}function Lc(i){return Mm(i)&&i.registerInRequestor}function zm(i){return i.prototype!==void 0}const Bm=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Hh="__DI_LOCATE_PARENT__",Qr=new Map;class no{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,t!==null&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Vm,Hm),t instanceof Node&&t.addEventListener(Hh,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let e,s,o,n,r;const a=this.context;for(let l=0,d=t.length;l<d;++l)if(e=t[l],!!Hc(e))if(fn(e))e.register(this,a);else if(zm(e))fo.singleton(e,e).register(this);else for(s=Object.keys(e),n=0,r=s.length;n<r;++n)o=e[s[n]],Hc(o)&&(fn(o)?o.register(this,a):this.register(o));return--this.registerDepth,this}registerResolver(t,e){qo(t);const s=this.resolvers,o=s.get(t);return o==null?s.set(t,e):o instanceof ke&&o.strategy===4?o.state.push(e):s.set(t,new ke(t,4,[o,e])),e}registerTransformer(t,e){const s=this.getResolver(t);if(s==null)return!1;if(s.getFactory){const o=s.getFactory(this);return o==null?!1:(o.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(qo(t),t.resolve!==void 0)return t;let s=this,o;for(;s!=null;)if(o=s.resolvers.get(t),o==null){if(s.parent==null){const n=Lc(t)?this:s;return e?this.jitRegister(t,n):null}s=s.parent}else return o;return null}has(t,e=!1){return this.resolvers.has(t)?!0:e&&this.parent!=null?this.parent.has(t,!0):!1}get(t){if(qo(t),t.$isResolver)return t.resolve(this,this);let e=this,s;for(;e!=null;)if(s=e.resolvers.get(t),s==null){if(e.parent==null){const o=Lc(t)?this:e;return s=this.jitRegister(t,o),s.resolve(e,this)}e=e.parent}else return s.resolve(e,this);throw new Error(`Unable to resolve key: ${String(t)}`)}getAll(t,e=!1){qo(t);const s=this;let o=s,n;if(e){let r=Wi;for(;o!=null;)n=o.resolvers.get(t),n!=null&&(r=r.concat(Pc(n,o,s))),o=o.parent;return r}else for(;o!=null;)if(n=o.resolvers.get(t),n==null){if(o=o.parent,o==null)return Wi}else return Pc(n,o,s);return Wi}getFactory(t){let e=Qr.get(t);if(e===void 0){if(Nm(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Qr.set(t,e=new _m(t,Tt.getDependencies(t)))}return e}registerFactory(t,e){Qr.set(t,e)}createChild(t){return new no(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if(typeof t!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(Bm.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(fn(t)){const s=t.register(e);if(!(s instanceof Object)||s.resolve==null){const o=e.resolvers.get(t);if(o!=null)return o;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const s=this.config.defaultResolver(t,e);return e.resolvers.set(t,s),s}}}}const Zr=new WeakMap;function Mh(i){return function(t,e,s){if(Zr.has(s))return Zr.get(s);const o=i(t,e,s);return Zr.set(s,o),o}}const fo=Object.freeze({instance(i,t){return new ke(i,0,t)},singleton(i,t){return new ke(i,1,t)},transient(i,t){return new ke(i,2,t)},callback(i,t){return new ke(i,3,t)},cachedCallback(i,t){return new ke(i,3,Mh(t))},aliasTo(i,t){return new ke(t,5,i)}});function qo(i){if(i==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Pc(i,t,e){if(i instanceof ke&&i.strategy===4){const s=i.state;let o=s.length;const n=new Array(o);for(;o--;)n[o]=s[o].resolve(t,e);return n}return[i.resolve(t,e)]}const _c="(anonymous)";function Hc(i){return typeof i=="object"&&i!==null||typeof i=="function"}const Nm=function(){const i=new WeakMap;let t=!1,e="",s=0;return function(o){return t=i.get(o),t===void 0&&(e=o.toString(),s=e.length,t=s>=29&&s<=100&&e.charCodeAt(s-1)===125&&e.charCodeAt(s-2)<=32&&e.charCodeAt(s-3)===93&&e.charCodeAt(s-4)===101&&e.charCodeAt(s-5)===100&&e.charCodeAt(s-6)===111&&e.charCodeAt(s-7)===99&&e.charCodeAt(s-8)===32&&e.charCodeAt(s-9)===101&&e.charCodeAt(s-10)===118&&e.charCodeAt(s-11)===105&&e.charCodeAt(s-12)===116&&e.charCodeAt(s-13)===97&&e.charCodeAt(s-14)===110&&e.charCodeAt(s-15)===88,i.set(o,t)),t}}(),Go={};function zh(i){switch(typeof i){case"number":return i>=0&&(i|0)===i;case"string":{const t=Go[i];if(t!==void 0)return t;const e=i.length;if(e===0)return Go[i]=!1;let s=0;for(let o=0;o<e;++o)if(s=i.charCodeAt(o),o===0&&s===48&&e>1||s<48||s>57)return Go[i]=!1;return Go[i]=!0}default:return!1}}function Mc(i){return`${i.toLowerCase()}:presentation`}const Wo=new Map,Bh=Object.freeze({define(i,t,e){const s=Mc(i);Wo.get(s)===void 0?Wo.set(s,t):Wo.set(s,!1),e.register(fo.instance(s,t))},forTag(i,t){const e=Mc(i),s=Wo.get(e);return s===!1?Tt.findResponsibleContainer(t).get(e):s||null}});class jm{constructor(t,e){this.template=t||null,this.styles=e===void 0?null:Array.isArray(e)?ee.create(e):e instanceof ee?e:ee.create([e])}applyTo(t){const e=t.$fastController;e.template===null&&(e.template=this.template),e.styles===null&&(e.styles=this.styles)}}class W extends qn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Bh.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Um(this===W?class extends W{}:this,t,e)}}c([y],W.prototype,"template",void 0);c([y],W.prototype,"styles",void 0);function Ws(i,t,e){return typeof i=="function"?i(t,e):i}class Um{constructor(t,e,s){this.type=t,this.elementDefinition=e,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const s=this.definition,o=this.overrideDefinition,r=`${s.prefix||e.elementPrefix}-${s.baseName}`;e.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const l=new jm(Ws(s.template,a,s),Ws(s.styles,a,s));a.definePresentation(l);let d=Ws(s.shadowOptions,a,s);a.shadowRootMode&&(d?o.shadowOptions||(d.mode=a.shadowRootMode):d!==null&&(d={mode:a.shadowRootMode})),a.defineElement({elementOptions:Ws(s.elementOptions,a,s),shadowOptions:d,attributes:Ws(s.attributes,a,s)})}})}}function $t(i,...t){const e=Cn.locate(i);t.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(i.prototype,n,Object.getOwnPropertyDescriptor(s.prototype,n))}),Cn.locate(s).forEach(n=>e.push(n))})}class Yi extends W{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}c([u({attribute:"heading-level",mode:"fromView",converter:P})],Yi.prototype,"headinglevel",void 0);c([u({mode:"boolean"})],Yi.prototype,"expanded",void 0);c([u],Yi.prototype,"id",void 0);$t(Yi,ue);const qm=(i,t)=>I`
    <template>
        <slot ${wt({property:"accordionItems",filter:oi()})}></slot>
        <slot name="item" part="item" ${wt("accordionItems")}></slot>
    </template>
`,Et={horizontal:"horizontal",vertical:"vertical"};function Gm(i,t){let e=i.length;for(;e--;)if(t(i[e],e,i))return e;return-1}function Wm(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Is(...i){return i.every(t=>t instanceof HTMLElement)}function Xm(i,t){return!i||!t||!Is(i)?void 0:Array.from(i.querySelectorAll(t)).filter(s=>s.offsetParent!==null)}function Ym(){const i=document.querySelector('meta[property="csp-nonce"]');return i?i.getAttribute("content"):null}let zi;function Qm(){if(typeof zi=="boolean")return zi;if(!Wm())return zi=!1,zi;const i=document.createElement("style"),t=Ym();t!==null&&i.setAttribute("nonce",t),document.head.appendChild(i);try{i.sheet.insertRule("foo:focus-visible {color:inherit}",0),zi=!0}catch{zi=!1}finally{document.head.removeChild(i)}return zi}const zc="focus",Bc="focusin",Ts="focusout",Ss="keydown",Nc="resize",jc="scroll";var Uc;(function(i){i[i.alt=18]="alt",i[i.arrowDown=40]="arrowDown",i[i.arrowLeft=37]="arrowLeft",i[i.arrowRight=39]="arrowRight",i[i.arrowUp=38]="arrowUp",i[i.back=8]="back",i[i.backSlash=220]="backSlash",i[i.break=19]="break",i[i.capsLock=20]="capsLock",i[i.closeBracket=221]="closeBracket",i[i.colon=186]="colon",i[i.colon2=59]="colon2",i[i.comma=188]="comma",i[i.ctrl=17]="ctrl",i[i.delete=46]="delete",i[i.end=35]="end",i[i.enter=13]="enter",i[i.equals=187]="equals",i[i.equals2=61]="equals2",i[i.equals3=107]="equals3",i[i.escape=27]="escape",i[i.forwardSlash=191]="forwardSlash",i[i.function1=112]="function1",i[i.function10=121]="function10",i[i.function11=122]="function11",i[i.function12=123]="function12",i[i.function2=113]="function2",i[i.function3=114]="function3",i[i.function4=115]="function4",i[i.function5=116]="function5",i[i.function6=117]="function6",i[i.function7=118]="function7",i[i.function8=119]="function8",i[i.function9=120]="function9",i[i.home=36]="home",i[i.insert=45]="insert",i[i.menu=93]="menu",i[i.minus=189]="minus",i[i.minus2=109]="minus2",i[i.numLock=144]="numLock",i[i.numPad0=96]="numPad0",i[i.numPad1=97]="numPad1",i[i.numPad2=98]="numPad2",i[i.numPad3=99]="numPad3",i[i.numPad4=100]="numPad4",i[i.numPad5=101]="numPad5",i[i.numPad6=102]="numPad6",i[i.numPad7=103]="numPad7",i[i.numPad8=104]="numPad8",i[i.numPad9=105]="numPad9",i[i.numPadDivide=111]="numPadDivide",i[i.numPadDot=110]="numPadDot",i[i.numPadMinus=109]="numPadMinus",i[i.numPadMultiply=106]="numPadMultiply",i[i.numPadPlus=107]="numPadPlus",i[i.openBracket=219]="openBracket",i[i.pageDown=34]="pageDown",i[i.pageUp=33]="pageUp",i[i.period=190]="period",i[i.print=44]="print",i[i.quote=222]="quote",i[i.scrollLock=145]="scrollLock",i[i.shift=16]="shift",i[i.space=32]="space",i[i.tab=9]="tab",i[i.tilde=192]="tilde",i[i.windowsLeft=91]="windowsLeft",i[i.windowsOpera=219]="windowsOpera",i[i.windowsRight=92]="windowsRight"})(Uc||(Uc={}));const Se="ArrowDown",Ii="ArrowLeft",Ti="ArrowRight",De="ArrowUp",ri="Enter",Ps="Escape",Qe="Home",Ze="End",Zm="F2",Jm="PageDown",Km="PageUp",es=" ",Wn="Tab",us={ArrowDown:Se,ArrowLeft:Ii,ArrowRight:Ti,ArrowUp:De};var vt;(function(i){i.ltr="ltr",i.rtl="rtl"})(vt||(vt={}));function tb(i,t,e){return e<i?t:e>t?i:e}function Xn(i,t,e){return Math.min(Math.max(e,i),t)}function Xo(i,t,e=0){return[t,e]=[t,e].sort((s,o)=>s-o),t<=i&&i<e}let eb=0;function go(i=""){return`${i}${eb++}`}var f;(function(i){i.Canvas="Canvas",i.CanvasText="CanvasText",i.LinkText="LinkText",i.VisitedText="VisitedText",i.ActiveText="ActiveText",i.ButtonFace="ButtonFace",i.ButtonText="ButtonText",i.Field="Field",i.FieldText="FieldText",i.Highlight="Highlight",i.HighlightText="HighlightText",i.GrayText="GrayText"})(f||(f={}));const qc={single:"single",multi:"multi"};class ll extends W{constructor(){super(...arguments),this.expandmode=qc.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((e,s)=>{e instanceof Yi&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==s?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[s];e.setAttribute("id",typeof o!="string"?`accordion-${s+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((t=this.findExpandedItem())!==null&&t!==void 0?t:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=t=>{t.forEach((e,s)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach(s=>{!s.hasAttribute("disabled")&&s.id!==this.activeid&&s.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case De:t.preventDefault(),this.adjust(-1);break;case Se:t.preventDefault(),this.adjust(1);break;case Qe:this.activeItemIndex=0,this.focusItem();break;case Ze:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,s=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==s&&s!==-1&&(this.activeItemIndex=s,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if(this.accordionItems[t].getAttribute("expanded")==="true")return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach((t,e)=>{t.expanded=!1})}getItemIds(){return this.accordionItems.map(t=>t.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===qc.single}adjust(t){this.activeItemIndex=tb(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Yi&&t.expandbutton.focus()}}c([u({attribute:"expand-mode"})],ll.prototype,"expandmode",void 0);c([y],ll.prototype,"accordionItems",void 0);const Nh=(i,t)=>I`
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
        ${se(i,t)}
        <span class="content" part="content">
            <slot ${wt("defaultSlottedContent")}></slot>
        </span>
        ${ie(i,t)}
    </a>
`;class yt{}c([u({attribute:"aria-atomic"})],yt.prototype,"ariaAtomic",void 0);c([u({attribute:"aria-busy"})],yt.prototype,"ariaBusy",void 0);c([u({attribute:"aria-controls"})],yt.prototype,"ariaControls",void 0);c([u({attribute:"aria-current"})],yt.prototype,"ariaCurrent",void 0);c([u({attribute:"aria-describedby"})],yt.prototype,"ariaDescribedby",void 0);c([u({attribute:"aria-details"})],yt.prototype,"ariaDetails",void 0);c([u({attribute:"aria-disabled"})],yt.prototype,"ariaDisabled",void 0);c([u({attribute:"aria-errormessage"})],yt.prototype,"ariaErrormessage",void 0);c([u({attribute:"aria-flowto"})],yt.prototype,"ariaFlowto",void 0);c([u({attribute:"aria-haspopup"})],yt.prototype,"ariaHaspopup",void 0);c([u({attribute:"aria-hidden"})],yt.prototype,"ariaHidden",void 0);c([u({attribute:"aria-invalid"})],yt.prototype,"ariaInvalid",void 0);c([u({attribute:"aria-keyshortcuts"})],yt.prototype,"ariaKeyshortcuts",void 0);c([u({attribute:"aria-label"})],yt.prototype,"ariaLabel",void 0);c([u({attribute:"aria-labelledby"})],yt.prototype,"ariaLabelledby",void 0);c([u({attribute:"aria-live"})],yt.prototype,"ariaLive",void 0);c([u({attribute:"aria-owns"})],yt.prototype,"ariaOwns",void 0);c([u({attribute:"aria-relevant"})],yt.prototype,"ariaRelevant",void 0);c([u({attribute:"aria-roledescription"})],yt.prototype,"ariaRoledescription",void 0);let ve=class extends W{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{var e;(e=this.control)===null||e===void 0||e.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};c([u],ve.prototype,"download",void 0);c([u],ve.prototype,"href",void 0);c([u],ve.prototype,"hreflang",void 0);c([u],ve.prototype,"ping",void 0);c([u],ve.prototype,"referrerpolicy",void 0);c([u],ve.prototype,"rel",void 0);c([u],ve.prototype,"target",void 0);c([u],ve.prototype,"type",void 0);c([y],ve.prototype,"defaultSlottedContent",void 0);class Yn{}c([u({attribute:"aria-expanded"})],Yn.prototype,"ariaExpanded",void 0);$t(Yn,yt);$t(ve,ue,Yn);const ib=(i,t)=>I`
    <template class="${e=>e.initialLayoutComplete?"loaded":""}">
        ${St(e=>e.initialLayoutComplete,I`
                <slot></slot>
            `)}
    </template>
`,Qi=i=>{const t=i.closest("[dir]");return t!==null&&t.dir==="rtl"?vt.rtl:vt.ltr};class sb{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var s;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(s=this.observedElements.get(t))===null||s===void 0||s.push(e);return}this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,e)=>{const s=this.observedElements.get(t);if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}},this.initializeIntersectionDetector=()=>{si.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;const e=[],s=[];t.forEach(o=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(o.target);const r=this.observedElements.get(o.target);r!==void 0&&(r.forEach(a=>{let l=e.indexOf(a);l===-1&&(l=e.length,e.push(a),s.push([])),s[l].push(o)}),this.observedElements.delete(o.target))}),e.forEach((o,n)=>{o(s[n])})},this.initializeIntersectionDetector()}}class j extends W{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=vt.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(j.intersectionService.requestPosition(this,this.handleIntersection),j.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&j.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,j.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&j.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&j.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find(n=>n.target===this),s=t.find(n=>n.target===this.anchorElement),o=t.find(n=>n.target===this.viewportElement);return e===void 0||o===void 0||s===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,s.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect)?(this.regionRect=e.boundingClientRect,this.anchorRect=s.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Qi(this),this.startObservers())},this.updateLayout=()=>{let t,e;if(this.horizontalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")e="center";else if(this.horizontalDefaultPosition!=="unset"){let b=this.horizontalDefaultPosition;if(b==="start"||b==="end"){const w=Qi(this);if(w!==this.currentDirection){this.currentDirection=w,this.initialize();return}this.currentDirection===vt.ltr?b=b==="start"?"left":"right":b=b==="start"?"right":"left"}switch(b){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end";break}}const r=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,a=this.anchorRect!==void 0?this.anchorRect.left:0,l=this.anchorRect!==void 0?this.anchorRect.right:0,d=this.anchorRect!==void 0?this.anchorRect.width:0,h=this.viewportRect!==void 0?this.viewportRect.left:0,g=this.viewportRect!==void 0?this.viewportRect.right:0;(e===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,a,l,d,h,g)<r)&&(e=this.getAvailableSpace(n[0],a,l,d,h,g)>this.getAvailableSpace(n[1],a,l,d,h,g)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){const n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}const r=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,a=this.anchorRect!==void 0?this.anchorRect.top:0,l=this.anchorRect!==void 0?this.anchorRect.bottom:0,d=this.anchorRect!==void 0?this.anchorRect.height:0,h=this.viewportRect!==void 0?this.viewportRect.top:0,g=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,a,l,d,h,g)<r)&&(t=this.getAvailableSpace(n[0],a,l,d,h,g)>this.getAvailableSpace(n[1],a,l,d,h,g)?n[0]:n[1])}const s=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,s),this.setVerticalPosition(t,s),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.horizontalScaling){case"anchor":case"fill":s=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${s}px`;break;case"content":s=this.regionRect.width,this.regionWidth="unset";break}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-s,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-s+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-s)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const n=this.anchorRect.left+o,r=this.anchorRect.right-o;n<this.viewportRect.left&&!(r>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):r>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(r-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let s=0;switch(this.verticalScaling){case"anchor":case"fill":s=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${s}px`;break;case"content":s=this.regionRect.height,this.regionHeight="unset";break}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-s,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-s+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-s)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const n=this.anchorRect.top+o,r=this.anchorRect.bottom-o;n<this.viewportRect.top&&!(r>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):r>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(r-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,s,o,n,r)=>{const a=e-n,l=r-(e+o);switch(t){case"start":return a;case"insetStart":return a+o;case"insetEnd":return l+o;case"end":return l;case"center":return Math.min(a,l)*2+o}},this.getNextRegionDimension=(t,e)=>{const s={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?s.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(s.width=this.anchorRect!==void 0?this.anchorRect.width:0),e!==void 0&&this.verticalScaling==="fill"?s.height=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(s.height=this.anchorRect!==void 0?this.anchorRect.height:0),s},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Nc,this.update,{passive:!0}),window.addEventListener(jc,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Nc,this.update),window.removeEventListener(jc,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),e==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),G.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}j.intersectionService=new sb;c([u],j.prototype,"anchor",void 0);c([u],j.prototype,"viewport",void 0);c([u({attribute:"horizontal-positioning-mode"})],j.prototype,"horizontalPositioningMode",void 0);c([u({attribute:"horizontal-default-position"})],j.prototype,"horizontalDefaultPosition",void 0);c([u({attribute:"horizontal-viewport-lock",mode:"boolean"})],j.prototype,"horizontalViewportLock",void 0);c([u({attribute:"horizontal-inset",mode:"boolean"})],j.prototype,"horizontalInset",void 0);c([u({attribute:"horizontal-threshold"})],j.prototype,"horizontalThreshold",void 0);c([u({attribute:"horizontal-scaling"})],j.prototype,"horizontalScaling",void 0);c([u({attribute:"vertical-positioning-mode"})],j.prototype,"verticalPositioningMode",void 0);c([u({attribute:"vertical-default-position"})],j.prototype,"verticalDefaultPosition",void 0);c([u({attribute:"vertical-viewport-lock",mode:"boolean"})],j.prototype,"verticalViewportLock",void 0);c([u({attribute:"vertical-inset",mode:"boolean"})],j.prototype,"verticalInset",void 0);c([u({attribute:"vertical-threshold"})],j.prototype,"verticalThreshold",void 0);c([u({attribute:"vertical-scaling"})],j.prototype,"verticalScaling",void 0);c([u({attribute:"fixed-placement",mode:"boolean"})],j.prototype,"fixedPlacement",void 0);c([u({attribute:"auto-update-mode"})],j.prototype,"autoUpdateMode",void 0);c([y],j.prototype,"anchorElement",void 0);c([y],j.prototype,"viewportElement",void 0);c([y],j.prototype,"initialLayoutComplete",void 0);const ob=(i,t)=>I`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let ko=class extends W{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}};c([u({attribute:"fill"})],ko.prototype,"fill",void 0);c([u({attribute:"color"})],ko.prototype,"color",void 0);c([u({mode:"boolean"})],ko.prototype,"circular",void 0);const nb=(i,t)=>I`
    <div role="listitem" class="listitem" part="listitem">
        ${St(e=>e.href&&e.href.length>0,I`
                ${Nh(i,t)}
            `)}
        ${St(e=>!e.href,I`
                ${se(i,t)}
                <slot></slot>
                ${ie(i,t)}
            `)}
        ${St(e=>e.separator,I`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${t.separator||""}</slot>
                </span>
            `)}
    </div>
`;class mo extends ve{constructor(){super(...arguments),this.separator=!0}}c([y],mo.prototype,"separator",void 0);$t(mo,ue,Yn);const rb=(i,t)=>I`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${wt({property:"slottedBreadcrumbItems",filter:oi()})}
            ></slot>
        </div>
    </template>
`;class jh extends W{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(e=>{const s=e===t;this.setItemSeparator(e,s),this.setAriaCurrent(e,s)})}}setItemSeparator(t,e){t instanceof mo&&(t.separator=!e)}findChildWithHref(t){var e,s;return t.childElementCount>0?t.querySelector("a[href]"):!((e=t.shadowRoot)===null||e===void 0)&&e.childElementCount?(s=t.shadowRoot)===null||s===void 0?void 0:s.querySelector("a[href]"):null}setAriaCurrent(t,e){const s=this.findChildWithHref(t);s===null&&t.hasAttribute("href")&&t instanceof mo?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):s!==null&&(e?s.setAttribute("aria-current","page"):s.removeAttribute("aria-current"))}}c([y],jh.prototype,"slottedBreadcrumbItems",void 0);const ab=(i,t)=>I`
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
        ${se(i,t)}
        <span class="content" part="content">
            <slot ${wt("defaultSlottedContent")}></slot>
        </span>
        ${ie(i,t)}
    </button>
`,Gc="form-associated-proxy",Wc="ElementInternals",Xc=Wc in window&&"setFormValue"in window[Wc].prototype,Yc=new WeakMap;function ai(i){const t=class extends i{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Xc}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?s.concat(Array.from(e)):s;return Object.freeze(o)}else return Wi}valueChanged(e,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),G.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),G.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Xc)return null;let e=Yc.get(this);return e||(e=this.attachInternals(),Yc.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,s,o){this.elementInternals?this.elementInternals.setValidity(e,s,o):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Gc),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Gc)),(e=this.shadowRoot)===null||e===void 0||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),(e=this.shadowRoot)===null||e===void 0||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,s){this.elementInternals&&this.elementInternals.setFormValue(e,s||e)}_keypressHandler(e){switch(e.key){case ri:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(e){e.stopPropagation()}};return u({mode:"boolean"})(t.prototype,"disabled"),u({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),u({attribute:"current-value"})(t.prototype,"currentValue"),u(t.prototype,"name"),u({mode:"boolean"})(t.prototype,"required"),y(t.prototype,"value"),t}function cl(i){class t extends ai(i){}class e extends t{constructor(...o){super(o),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(o,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),o!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(o,n){this.checked=this.currentChecked}updateForm(){const o=this.checked?this.value:null;this.setFormValue(o,o)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return u({attribute:"checked",mode:"boolean"})(e.prototype,"checkedAttribute"),u({attribute:"current-checked",converter:$o})(e.prototype,"currentChecked"),y(e.prototype,"defaultChecked"),y(e.prototype,"checked"),e}class lb extends W{}class cb extends ai(lb){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let ye=class extends cb{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&((e=this.defaultSlottedContent)===null||e===void 0?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((t=this.$fastController.definition.shadowOptions)===null||t===void 0)&&t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),e==="submit"&&this.addEventListener("click",this.handleSubmission),t==="submit"&&this.removeEventListener("click",this.handleSubmission),e==="reset"&&this.addEventListener("click",this.handleFormReset),t==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from((t=this.control)===null||t===void 0?void 0:t.children);e&&e.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};c([u({mode:"boolean"})],ye.prototype,"autofocus",void 0);c([u({attribute:"form"})],ye.prototype,"formId",void 0);c([u],ye.prototype,"formaction",void 0);c([u],ye.prototype,"formenctype",void 0);c([u],ye.prototype,"formmethod",void 0);c([u({mode:"boolean"})],ye.prototype,"formnovalidate",void 0);c([u],ye.prototype,"formtarget",void 0);c([u],ye.prototype,"type",void 0);c([y],ye.prototype,"defaultSlottedContent",void 0);class Qn{}c([u({attribute:"aria-expanded"})],Qn.prototype,"ariaExpanded",void 0);c([u({attribute:"aria-pressed"})],Qn.prototype,"ariaPressed",void 0);$t(Qn,yt);$t(ye,ue,Qn);class db{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const s=t[e];e==="date"?this.date=this.getDateObject(s):this[e]=s}}getDateObject(t){if(typeof t=="string"){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}else if("day"in t&&"month"in t&&"year"in t){const{day:e,month:s,year:o}=t;return new Date(o,s-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},s=this.locale){const o=this.getDateObject(t);if(!o.getTime())return"";const n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},e);return new Intl.DateTimeFormat(s,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,s=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},s)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,s=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},s)}getYear(t=this.date.getFullYear(),e=this.yearFormat,s=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},s)}getWeekday(t=0,e=this.weekdayFormat,s=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},s)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map((s,o)=>this.getWeekday(o,t,e))}}let Re=class extends W{constructor(){super(...arguments),this.dateFormatter=new db,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const s=l=>new Date(l.getFullYear(),l.getMonth(),1).getDay(),o=l=>{const d=new Date(l.getFullYear(),l.getMonth()+1,1);return new Date(d.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),a=new Date(e,t-2);return{length:o(n),month:t,start:s(n),year:e,previous:{length:o(a),month:a.getMonth()+1,start:s(a),year:a.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:s(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:s,length:o,previous:n,next:r}=t,a=[];let l=1-s;for(;l<o+1||a.length<e||a[a.length-1].length%7!==0;){const{month:d,year:h}=l<1?n:l>o?r:t,g=l<1?n.length+l:l>o?l-o:l,b=`${d}-${g}-${h}`,w=this.dateInString(b,this.disabledDates),V=this.dateInString(b,this.selectedDates),L={day:g,month:d,year:h,disabled:w,selected:V},q=a[a.length-1];a.length===0||q.length%7===0?a.push([L]):q.push(L),l++}return a}dateInString(t,e){const s=e.split(",").map(o=>o.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,s.some(o=>o===t)}getDayClassNames(t,e){const{day:s,month:o,year:n,disabled:r,selected:a}=t,l=e===`${o}-${s}-${n}`,d=this.month!==o;return["day",l&&"today",d&&"inactive",r&&"disabled",a&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map(e=>({text:e}));if(this.weekdayFormat!=="long"){const e=this.dateFormatter.getWeekdays("long");t.forEach((s,o)=>{s.abbr=e[o]})}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===ri&&this.handleDateSelect(t,e),!0}};c([u({mode:"boolean"})],Re.prototype,"readonly",void 0);c([u],Re.prototype,"locale",void 0);c([u({converter:P})],Re.prototype,"month",void 0);c([u({converter:P})],Re.prototype,"year",void 0);c([u({attribute:"day-format",mode:"fromView"})],Re.prototype,"dayFormat",void 0);c([u({attribute:"weekday-format",mode:"fromView"})],Re.prototype,"weekdayFormat",void 0);c([u({attribute:"month-format",mode:"fromView"})],Re.prototype,"monthFormat",void 0);c([u({attribute:"year-format",mode:"fromView"})],Re.prototype,"yearFormat",void 0);c([u({attribute:"min-weeks",converter:P})],Re.prototype,"minWeeks",void 0);c([u({attribute:"disabled-dates"})],Re.prototype,"disabledDates",void 0);c([u({attribute:"selected-dates"})],Re.prototype,"selectedDates",void 0);const Yo={none:"none",default:"default",sticky:"sticky"},mi={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},ro={default:"default",header:"header",stickyHeader:"sticky-header"};class jt extends W{constructor(){super(...arguments),this.rowType=ro.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new al(t=>t.columnDefinitions,t=>t.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ts,this.handleFocusout),this.addEventListener(Ss,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ts,this.handleFocusout),this.removeEventListener(Ss,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case Ii:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case Ti:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case Qe:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case Ze:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===ro.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===ro.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}c([u({attribute:"grid-template-columns"})],jt.prototype,"gridTemplateColumns",void 0);c([u({attribute:"row-type"})],jt.prototype,"rowType",void 0);c([y],jt.prototype,"rowData",void 0);c([y],jt.prototype,"columnDefinitions",void 0);c([y],jt.prototype,"cellItemTemplate",void 0);c([y],jt.prototype,"headerCellItemTemplate",void 0);c([y],jt.prototype,"rowIndex",void 0);c([y],jt.prototype,"isActiveRow",void 0);c([y],jt.prototype,"activeCellItemTemplate",void 0);c([y],jt.prototype,"defaultCellItemTemplate",void 0);c([y],jt.prototype,"defaultHeaderCellItemTemplate",void 0);c([y],jt.prototype,"cellElements",void 0);function hb(i){const t=i.tagFor(jt);return I`
    <${t}
        :rowData="${e=>e}"
        :cellItemTemplate="${(e,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(e,s)=>s.parent.headerCellItemTemplate}"
    ></${t}>
`}const ub=(i,t)=>{const e=hb(i),s=i.tagFor(jt);return I`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${e}"
            ${Gn({property:"rowElements",filter:oi("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class Ht extends W{constructor(){super(),this.noTabbing=!1,this.generateHeader=Yo.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const o=Math.max(0,Math.min(this.rowElements.length-1,t)),r=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(r.length-1,e)),l=r[a];s&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&l.scrollIntoView({block:"center",inline:"center"}),l.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach(s=>{s.addedNodes.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="row"&&(o.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,G.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const e=this.rowElements[0];this.generatedGridTemplateColumns=new Array(e.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((e,s)=>{const o=e;o.rowIndex=s,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach(s=>{e=`${e}${e===""?"":" "}1fr`}),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=Ht.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=Ht.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new al(t=>t.rowsData,t=>t.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(zc,this.handleFocus),this.addEventListener(Ss,this.handleKeydown),this.addEventListener(Ts,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),G.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(zc,this.handleFocus),this.removeEventListener(Ss,this.handleKeydown),this.removeEventListener(Ts,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const s=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[s];switch(t.key){case De:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Se:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Km:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex-1,e;e>=0;e--){const r=this.rowElements[e];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Jm:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||n.offsetTop+n.offsetHeight<=o){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(e=this.focusRowIndex+1,e;e<=s;e++){const r=this.rowElements[e];if(r.offsetTop+r.offsetHeight>o){let a=0;this.generateHeader===Yo.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-a;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case Qe:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case Ze:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,G.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Yo.none&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Yo.sticky?ro.stickyHeader:ro.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}Ht.generateColumns=i=>Object.getOwnPropertyNames(i).map((t,e)=>({columnDataKey:t,gridColumn:`${e}`}));c([u({attribute:"no-tabbing",mode:"boolean"})],Ht.prototype,"noTabbing",void 0);c([u({attribute:"generate-header"})],Ht.prototype,"generateHeader",void 0);c([u({attribute:"grid-template-columns"})],Ht.prototype,"gridTemplateColumns",void 0);c([y],Ht.prototype,"rowsData",void 0);c([y],Ht.prototype,"columnDefinitions",void 0);c([y],Ht.prototype,"rowItemTemplate",void 0);c([y],Ht.prototype,"cellItemTemplate",void 0);c([y],Ht.prototype,"headerCellItemTemplate",void 0);c([y],Ht.prototype,"focusRowIndex",void 0);c([y],Ht.prototype,"focusColumnIndex",void 0);c([y],Ht.prototype,"defaultRowItemTemplate",void 0);c([y],Ht.prototype,"rowElementTag",void 0);c([y],Ht.prototype,"rowElements",void 0);const pb=I`
    <template>
        ${i=>i.rowData===null||i.columnDefinition===null||i.columnDefinition.columnDataKey===null?null:i.rowData[i.columnDefinition.columnDataKey]}
    </template>
`,fb=I`
    <template>
        ${i=>i.columnDefinition===null?null:i.columnDefinition.title===void 0?i.columnDefinition.columnDataKey:i.columnDefinition.title}
    </template>
`;class li extends W{constructor(){super(...arguments),this.cellType=mi.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Bc,this.handleFocusin),this.addEventListener(Ts,this.handleFocusout),this.addEventListener(Ss,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Bc,this.handleFocusin),this.removeEventListener(Ts,this.handleFocusout),this.removeEventListener(Ss,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case mi.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||this.columnDefinition===null||this.cellType===mi.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===mi.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(t.key){case ri:case Zm:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case mi.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const e=this.columnDefinition.headerCellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const e=this.columnDefinition.cellFocusTargetCallback(this);e!==null&&e.focus(),t.preventDefault()}break}break;case Ps:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case mi.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=fb.render(this,this);break;case void 0:case mi.rowHeader:case mi.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=pb.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}c([u({attribute:"cell-type"})],li.prototype,"cellType",void 0);c([u({attribute:"grid-column"})],li.prototype,"gridColumn",void 0);c([y],li.prototype,"rowData",void 0);c([y],li.prototype,"columnDefinition",void 0);function gb(i){const t=i.tagFor(li);return I`
    <${t}
        cell-type="${e=>e.isRowHeader?"rowheader":void 0}"
        grid-column="${(e,s)=>s.index+1}"
        :rowData="${(e,s)=>s.parent.rowData}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}function mb(i){const t=i.tagFor(li);return I`
    <${t}
        cell-type="columnheader"
        grid-column="${(e,s)=>s.index+1}"
        :columnDefinition="${e=>e}"
    ></${t}>
`}const bb=(i,t)=>{const e=gb(i),s=mb(i);return I`
        <template
            role="row"
            class="${o=>o.rowType!=="default"?o.rowType:""}"
            :defaultCellItemTemplate="${e}"
            :defaultHeaderCellItemTemplate="${s}"
            ${Gn({property:"cellElements",filter:oi('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${wt("slottedCellElements")}></slot>
        </template>
    `},vb=(i,t)=>I`
        <template
            tabindex="-1"
            role="${e=>!e.cellType||e.cellType==="default"?"gridcell":e.cellType}"
            class="
            ${e=>e.cellType==="columnheader"?"column-header":e.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,yb=I`
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
`,xb=i=>{const t=i.tagFor(li);return I`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(e,s)=>s.index+1}"
            abbr="${e=>e.abbr}"
        >
            ${e=>e.text}
        </${t}>
    `},wb=(i,t)=>{const e=i.tagFor(li);return I`
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
    `},$b=(i,t)=>{const e=i.tagFor(jt);return I`
        <${e}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${vs(s=>s,wb(i,t),{positioning:!0})}
        </${e}>
    `},kb=(i,t)=>{const e=i.tagFor(Ht),s=i.tagFor(jt);return I`
    <${e} class="days interact" part="days" generate-header="none">
        <${s}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${vs(o=>o.getWeekdayText(),xb(i),{positioning:!0})}
        </${s}>
        ${vs(o=>o.getDays(),$b(i,t))}
    </${e}>
`},Cb=i=>I`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${vs(t=>t.getWeekdayText(),I`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${vs(t=>t.getDays(),I`
                    <div class="week">
                        ${vs(t=>t,I`
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
    `,Fb=(i,t)=>{var e;const s=new Date,o=`${s.getMonth()+1}-${s.getDate()}-${s.getFullYear()}`;return I`
        <template>
            ${Rm}
            ${t.title instanceof Function?t.title(i,t):(e=t.title)!==null&&e!==void 0?e:""}
            <slot></slot>
            ${St(n=>n.readonly,Cb(o),kb(i,o))}
            ${Dm}
        </template>
    `},Ib=(i,t)=>I`
    <slot></slot>
`;let Uh=class extends W{};const Tb=(i,t)=>I`
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
            <slot ${wt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Sb extends W{}class Db extends cl(Sb){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Zn extends Db{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case es:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}c([u({attribute:"readonly",mode:"boolean"})],Zn.prototype,"readOnly",void 0);c([y],Zn.prototype,"defaultSlottedNodes",void 0);c([y],Zn.prototype,"indeterminate",void 0);function qh(i){return Is(i)&&(i.getAttribute("role")==="option"||i instanceof HTMLOptionElement)}class Je extends W{constructor(t,e,s,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),s&&(this.defaultSelected=s),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){if(typeof e=="boolean"){this.ariaChecked=e?"true":"false";return}this.ariaChecked=null}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,e;return(e=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&e!==void 0?e:""}set value(t){const e=`${t??""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),U.notify(this,"value")}get value(){var t;return U.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}}c([y],Je.prototype,"checked",void 0);c([y],Je.prototype,"content",void 0);c([y],Je.prototype,"defaultSelected",void 0);c([u({mode:"boolean"})],Je.prototype,"disabled",void 0);c([u({attribute:"selected",mode:"boolean"})],Je.prototype,"selectedAttribute",void 0);c([y],Je.prototype,"selected",void 0);c([u({attribute:"value",mode:"fromView"})],Je.prototype,"initialValue",void 0);class _s{}c([y],_s.prototype,"ariaChecked",void 0);c([y],_s.prototype,"ariaPosInSet",void 0);c([y],_s.prototype,"ariaSelected",void 0);c([y],_s.prototype,"ariaSetSize",void 0);$t(_s,yt);$t(Je,ue,_s);let pe=class gn extends W{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,e;return(e=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&e!==void 0?e:0}get options(){return U.track(this,"options"),this._options}set options(t){this._options=t,U.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter(s=>s.text.trim().match(e))}getSelectableIndex(t=this.selectedIndex,e){const s=t>e?-1:t<e?1:0,o=t+s;let n=null;switch(s){case-1:{n=this.options.reduceRight((r,a,l)=>!r&&!a.disabled&&l<o?a:r,n);break}case 1:{n=this.options.reduce((r,a,l)=>!r&&!a.disabled&&l>o?a:r,n);break}}return this.options.indexOf(n)}handleChange(t,e){switch(e){case"selected":{gn.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,gn.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case Qe:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case Se:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case De:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case Ze:{t.preventDefault(),this.selectLastOption();break}case Wn:return this.focusAndScrollOptionIntoView(),!0;case ri:case Ps:return!0;case es:if(this.typeaheadExpired)return!0;default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof t=="number"){const o=this.getSelectableIndex(t,e),n=o>-1?o:t;this.selectedIndex=n,e===n&&this.selectedIndexChanged(e,n);return}this.setSelectedOptions()}selectedOptionsChanged(t,e){var s;const o=e.filter(gn.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(n=>{const r=U.getNotifier(n);r.unsubscribe(this,"selected"),n.selected=o.includes(n),r.subscribe(this,"selected")})}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>!s.disabled))!==null&&e!==void 0?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Gm(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=(e=(t=this.options)===null||t===void 0?void 0:t.findIndex(s=>s.defaultSelected))!==null&&e!==void 0?e:-1}setSelectedOptions(){var t,e,s;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce((o,n)=>(qh(n)&&o.push(n),o),[]);const s=`${this.options.length}`;this.options.forEach((o,n)=>{o.id||(o.id=go("option-")),o.ariaPosInSet=`${n+1}`,o.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const o=this.options.indexOf(s[0]);o>-1&&(this.selectedIndex=o)}this.typeaheadExpired=!1}}};pe.slottedOptionFilter=i=>qh(i)&&!i.hidden;pe.TYPE_AHEAD_TIMEOUT_MS=1e3;c([u({mode:"boolean"})],pe.prototype,"disabled",void 0);c([y],pe.prototype,"selectedIndex",void 0);c([y],pe.prototype,"selectedOptions",void 0);c([y],pe.prototype,"slottedOptions",void 0);c([y],pe.prototype,"typeaheadBuffer",void 0);class Ri{}c([y],Ri.prototype,"ariaActiveDescendant",void 0);c([y],Ri.prototype,"ariaDisabled",void 0);c([y],Ri.prototype,"ariaExpanded",void 0);c([y],Ri.prototype,"ariaMultiSelectable",void 0);$t(Ri,yt);$t(pe,Ri);const ys={above:"above",below:"below"};class Rb extends pe{}class Eb extends ai(Rb){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Qo={inline:"inline",list:"list",both:"both",none:"none"};let ci=class extends Eb{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=go("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Qo.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Qo.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Qo.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),G.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return U.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,U.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return U.track(this,"value"),this._value}set value(t){var e,s,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const r=this.options.findIndex(d=>d.text.toLowerCase()===t.toLowerCase()),a=(e=this.options[this.selectedIndex])===null||e===void 0?void 0:e.text,l=(s=this.options[r])===null||s===void 0?void 0:s.text;this.selectedIndex=a!==l?r:this.selectedIndex,t=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),U.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Qo.none)&&(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(e=>e.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(e=>{e.hidden=!this.filteredOptions.includes(e)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;if(this.isSameNode(e)){this.focus();return}(!this.options||!this.options.includes(e))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(e=>e.text).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if(e=Xn(-1,this.options.length-1,e),e!==this.selectedIndex){this.selectedIndex=e;return}super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex(e=>e.getAttribute("selected")!==null||e.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?ys.above:ys.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ys.above?~~t.top:~~s}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach(s=>{s.selected=e.includes(s)})}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=((e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}};c([u({attribute:"autocomplete",mode:"fromView"})],ci.prototype,"autocomplete",void 0);c([y],ci.prototype,"maxHeight",void 0);c([u({attribute:"open",mode:"boolean"})],ci.prototype,"open",void 0);c([u],ci.prototype,"placeholder",void 0);c([u({attribute:"position"})],ci.prototype,"positionAttribute",void 0);c([y],ci.prototype,"position",void 0);class Jn{}c([y],Jn.prototype,"ariaAutoComplete",void 0);c([y],Jn.prototype,"ariaControls",void 0);$t(Jn,Ri);$t(ci,ue,Jn);const Ob=(i,t)=>I`
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
            ${se(i,t)}
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
            ${ie(i,t)}
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
                ${wt({filter:pe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function In(i){const t=i.parentElement;if(t)return t;{const e=i.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}function Ab(i,t){let e=t;for(;e!==null;){if(e===i)return!0;e=In(e)}return!1}const ti=document.createElement("div");function Vb(i){return i instanceof qn}class dl{setProperty(t,e){G.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){G.queueUpdate(()=>this.target.removeProperty(t))}}class Lb extends dl{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(ee.create([e]))}}class Pb extends dl{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class _b extends dl{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class Gh{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),U.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(this.target!==null)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),G.queueUpdate(()=>{this.target!==null&&this.target.setProperty(t,e)})}removeProperty(t){this.store.delete(t),G.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,e){const{sheet:s}=this.style;if(s){const o=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[o].style}else this.target=null}}c([y],Gh.prototype,"target",void 0);class Hb{constructor(t){this.target=t.style}setProperty(t,e){G.queueUpdate(()=>this.target.setProperty(t,e))}removeProperty(t){G.queueUpdate(()=>this.target.removeProperty(t))}}class zt{setProperty(t,e){zt.properties[t]=e;for(const s of zt.roots.values())ps.getOrCreate(zt.normalizeRoot(s)).setProperty(t,e)}removeProperty(t){delete zt.properties[t];for(const e of zt.roots.values())ps.getOrCreate(zt.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=zt;if(!e.has(t)){e.add(t);const s=ps.getOrCreate(this.normalizeRoot(t));for(const o in zt.properties)s.setProperty(o,zt.properties[o])}}static unregisterRoot(t){const{roots:e}=zt;if(e.has(t)){e.delete(t);const s=ps.getOrCreate(zt.normalizeRoot(t));for(const o in zt.properties)s.removeProperty(o)}}static normalizeRoot(t){return t===ti?document:t}}zt.roots=new Set;zt.properties={};const Jr=new WeakMap,Mb=G.supportsAdoptedStyleSheets?Lb:Gh,ps=Object.freeze({getOrCreate(i){if(Jr.has(i))return Jr.get(i);let t;return i===ti?t=new zt:i instanceof Document?t=G.supportsAdoptedStyleSheets?new Pb:new _b:Vb(i)?t=new Mb(i):t=new Hb(i),Jr.set(i,t),t}});class Zt extends rl{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,t.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Zt.uniqueId(),Zt.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Zt({name:typeof t=="string"?t:t.name,cssCustomPropertyName:typeof t=="string"?t:t.cssCustomPropertyName===void 0?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return typeof t.cssCustomProperty=="string"}static isDerivedDesignTokenValue(t){return typeof t=="function"}static getTokenById(t){return Zt.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=Ot.getOrCreate(t).get(this);if(e!==void 0)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Zt&&(e=this.alias(e)),Ot.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),Ot.existsFor(t)&&Ot.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(ti,t),this}subscribe(t,e){const s=this.getOrCreateSubscriberSet(e);e&&!Ot.existsFor(e)&&Ot.getOrCreate(e),s.has(t)||s.add(t)}unsubscribe(t,e){const s=this.subscribers.get(e||this);s&&s.has(t)&&s.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(e)),this.subscribers.has(t)&&this.subscribers.get(t).forEach(s=>s.handleChange(e))}alias(t){return e=>t.getValueFor(e)}}Zt.uniqueId=(()=>{let i=0;return()=>(i++,i.toString(16))})();Zt.tokensById=new Map;class zb{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:s}=t;this.add(e,s)}add(t,e){ps.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(Ot.getOrCreate(e).get(t)))}remove(t,e){ps.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}}class Bb{constructor(t,e,s){this.source=t,this.token=e,this.node=s,this.dependencies=new Set,this.observer=U.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,oo))}}class Nb{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),U.getNotifier(this).notify(t.id))}get(t){return U.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const Xs=new WeakMap,Ys=new WeakMap;class Ot{constructor(t){this.target=t,this.store=new Nb,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,s)=>{const o=Zt.getTokenById(s);o&&(o.notify(this.target),this.updateCSSTokenReflection(e,o))}},Xs.set(t,this),U.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof qn?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return Xs.get(t)||new Ot(t)}static existsFor(t){return Xs.has(t)}static findParent(t){if(ti!==t.target){let e=In(t.target);for(;e!==null;){if(Xs.has(e))return Xs.get(e);e=In(e)}return Ot.getOrCreate(ti)}return null}static findClosestAssignedNode(t,e){let s=e;do{if(s.has(t))return s;s=s.parent?s.parent:s.target!==ti?Ot.getOrCreate(ti):null}while(s!==null);return null}get parent(){return Ys.get(this)||null}updateCSSTokenReflection(t,e){if(Zt.isCSSDesignToken(e)){const s=this.parent,o=this.isReflecting(e);if(s){const n=s.get(e),r=t.get(e);n!==r&&!o?this.reflectToCSS(e):n===r&&o&&this.stopReflectToCSS(e)}else o||this.reflectToCSS(e)}}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(e!==void 0)return e;const s=this.getRaw(t);if(s!==void 0)return this.hydrate(t,s),this.get(t)}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):(e=Ot.findClosestAssignedNode(t,this))===null||e===void 0?void 0:e.getRaw(t)}set(t,e){Zt.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Zt.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=Ot.findParent(this);t&&t.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Ys.get(this).removeChild(this)}appendChild(t){t.parent&&Ys.get(t).removeChild(t);const e=this.children.filter(s=>t.contains(s));Ys.set(t,this),this.children.push(t),e.forEach(s=>t.appendChild(s)),U.getNotifier(this.store).subscribe(t);for(const[s,o]of this.store.all())t.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):o)}removeChild(t){const e=this.children.indexOf(t);return e!==-1&&this.children.splice(e,1),U.getNotifier(this.store).unsubscribe(t),t.parent===this?Ys.delete(t):!1}contains(t){return Ab(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),Ot.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),Ot.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const s=Zt.getTokenById(e);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(t,e){if(!this.has(t)){const s=this.bindingObservers.get(t);Zt.isDerivedDesignTokenValue(e)?s?s.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(s&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const s=new Bb(e,t,this);return this.bindingObservers.set(t,s),s}tearDownBindingObserver(t){return this.bindingObservers.has(t)?(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0):!1}}Ot.cssCustomPropertyReflector=new zb;c([y],Ot.prototype,"children",void 0);function jb(i){return Zt.from(i)}const pt=Object.freeze({create:jb,notifyConnection(i){return!i.isConnected||!Ot.existsFor(i)?!1:(Ot.getOrCreate(i).bind(),!0)},notifyDisconnection(i){return i.isConnected||!Ot.existsFor(i)?!1:(Ot.getOrCreate(i).unbind(),!0)},registerRoot(i=ti){zt.registerRoot(i)},unregisterRoot(i=ti){zt.unregisterRoot(i)}}),Kr=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ta=new Map,mn=new Map;let xs=null;const Qs=Tt.createInterface(i=>i.cachedCallback(t=>(xs===null&&(xs=new Xh(null,t)),xs))),Wh=Object.freeze({tagFor(i){return mn.get(i)},responsibleFor(i){const t=i.$$designSystem$$;return t||Tt.findResponsibleContainer(i).get(Qs)},getOrCreate(i){if(!i)return xs===null&&(xs=Tt.getOrCreateDOMContainer().get(Qs)),xs;const t=i.$$designSystem$$;if(t)return t;const e=Tt.getOrCreateDOMContainer(i);if(e.has(Qs,!1))return e.get(Qs);{const s=new Xh(i,e);return e.register(fo.instance(Qs,s)),s}}});function Ub(i,t,e){return typeof i=="string"?{name:i,type:t,callback:e}:i}class Xh{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Kr.definitionCallbackOnly,t!==null&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,s=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(a,l,d){const h=Ub(a,l,d),{name:g,callback:b,baseClass:w}=h;let{type:V}=h,L=g,q=ta.get(L),J=!0;for(;q;){const nt=o(L,V,q);switch(nt){case Kr.ignoreDuplicate:return;case Kr.definitionCallbackOnly:J=!1,q=void 0;break;default:L=nt,q=ta.get(L);break}}J&&((mn.has(V)||V===W)&&(V=class extends V{}),ta.set(L,V),mn.set(V,L),w&&mn.set(w,L)),s.push(new qb(e,L,V,n,b,J))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&pt.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const a of s)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class qb{constructor(t,e,s,o,n,r){this.container=t,this.name=e,this.type=s,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){Bh.define(this.name,t,this.container)}defineElement(t){this.definition=new Un(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Wh.tagFor(t)}}const Gb=(i,t)=>I`
    <div class="positioning-region" part="positioning-region">
        ${St(e=>e.modal,I`
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
*/var Yh=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Wb=Yh.join(","),Qh=typeof Element>"u",bo=Qh?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,ka=!Qh&&Element.prototype.getRootNode?function(i){return i.getRootNode()}:function(i){return i.ownerDocument},Xb=function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex},Zh=function(t){return t.tagName==="INPUT"},Yb=function(t){return Zh(t)&&t.type==="hidden"},Qb=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(s){return s.tagName==="SUMMARY"});return e},Zb=function(t,e){for(var s=0;s<t.length;s++)if(t[s].checked&&t[s].form===e)return t[s]},Jb=function(t){if(!t.name)return!0;var e=t.form||ka(t),s=function(a){return e.querySelectorAll('input[type="radio"][name="'+a+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=s(window.CSS.escape(t.name));else try{o=s(t.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var n=Zb(o,t.form);return!n||n===t},Kb=function(t){return Zh(t)&&t.type==="radio"},tv=function(t){return Kb(t)&&!Jb(t)},Qc=function(t){var e=t.getBoundingClientRect(),s=e.width,o=e.height;return s===0&&o===0},ev=function(t,e){var s=e.displayCheck,o=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var n=bo.call(t,"details>summary:first-of-type"),r=n?t.parentElement:t;if(bo.call(r,"details:not([open]) *"))return!0;var a=ka(t).host,l=(a==null?void 0:a.ownerDocument.contains(a))||t.ownerDocument.contains(t);if(!s||s==="full"){if(typeof o=="function"){for(var d=t;t;){var h=t.parentElement,g=ka(t);if(h&&!h.shadowRoot&&o(h)===!0)return Qc(t);t.assignedSlot?t=t.assignedSlot:!h&&g!==t.ownerDocument?t=g.host:t=h}t=d}if(l)return!t.getClientRects().length}else if(s==="non-zero-area")return Qc(t);return!1},iv=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var s=0;s<e.children.length;s++){var o=e.children.item(s);if(o.tagName==="LEGEND")return bo.call(e,"fieldset[disabled] *")?!0:!o.contains(t)}return!0}e=e.parentElement}return!1},Jh=function(t,e){return!(e.disabled||Yb(e)||ev(e,t)||Qb(e)||iv(e))},sv=function(t,e){return!(tv(e)||Xb(e)<0||!Jh(t,e))},Zc=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return bo.call(t,Wb)===!1?!1:sv(e,t)},ov=Yh.concat("iframe").join(","),Jc=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return bo.call(t,ov)===!1?!1:Jh(e,t)};class Ie extends W{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Ps:this.dismiss(),t.preventDefault();break;case Wn:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();if(e.length!==0){if(e.length===1){e[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===e[e.length-1]&&(e[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{const t=[];return Ie.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=t===void 0?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),G.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=U.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){switch(e){case"hidden":this.updateTrapFocus();break}}static reduceTabbableItems(t,e){return e.getAttribute("tabindex")==="-1"?t:Zc(e)||Ie.isFocusableFastElement(e)&&Ie.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Ie.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,s;return!!(!((s=(e=t.$fastController)===null||e===void 0?void 0:e.definition.shadowOptions)===null||s===void 0)&&s.delegatesFocus)}static hasTabbableShadow(t){var e,s;return Array.from((s=(e=t.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("*"))!==null&&s!==void 0?s:[]).some(o=>Zc(o))}}c([u({mode:"boolean"})],Ie.prototype,"modal",void 0);c([u({mode:"boolean"})],Ie.prototype,"hidden",void 0);c([u({attribute:"trap-focus",mode:"boolean"})],Ie.prototype,"trapFocus",void 0);c([u({attribute:"aria-describedby"})],Ie.prototype,"ariaDescribedby",void 0);c([u({attribute:"aria-labelledby"})],Ie.prototype,"ariaLabelledby",void 0);c([u({attribute:"aria-label"})],Ie.prototype,"ariaLabel",void 0);const nv=(i,t)=>I`
    <template role="${e=>e.role}" aria-orientation="${e=>e.orientation}"></template>
`,rv={separator:"separator",presentation:"presentation"};class Kn extends W{constructor(){super(...arguments),this.role=rv.separator,this.orientation=Et.horizontal}}c([u],Kn.prototype,"role",void 0);c([u],Kn.prototype,"orientation",void 0);const Ca={next:"next",previous:"previous"},av=(i,t)=>I`
    <template
        role="button"
        aria-disabled="${e=>e.disabled?!0:void 0}"
        tabindex="${e=>e.hiddenFromAT?-1:0}"
        class="${e=>e.direction} ${e=>e.disabled?"disabled":""}"
        @keyup="${(e,s)=>e.keyupHandler(s.event)}"
    >
        ${St(e=>e.direction===Ca.next,I`
                <span part="next" class="next">
                    <slot name="next">
                        ${t.next||""}
                    </slot>
                </span>
            `)}
        ${St(e=>e.direction===Ca.previous,I`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${t.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`;class tr extends W{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Ca.next}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;(e==="Enter"||e==="Space")&&this.$emit("click",t),e==="Escape"&&this.blur()}}}c([u({mode:"boolean"})],tr.prototype,"disabled",void 0);c([u({attribute:"aria-hidden",converter:$o})],tr.prototype,"hiddenFromAT",void 0);c([u],tr.prototype,"direction",void 0);const lv=(i,t)=>I`
    <template
        aria-checked="${e=>e.ariaChecked}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-posinset="${e=>e.ariaPosInSet}"
        aria-selected="${e=>e.ariaSelected}"
        aria-setsize="${e=>e.ariaSetSize}"
        class="${e=>[e.checked&&"checked",e.selected&&"selected",e.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${se(i,t)}
        <span class="content" part="content">
            <slot ${wt("content")}></slot>
        </span>
        ${ie(i,t)}
    </template>
`;class Co extends pe{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(e=>e.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var s,o;this.ariaActiveDescendant=(o=(s=this.options[e])===null||s===void 0?void 0:s.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((e,s)=>{e.checked=Xo(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=Xo(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((e,s)=>{e.checked=Xo(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((e,s)=>{e.checked=Xo(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const s=(e=t.target)===null||e===void 0?void 0:e.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:s}=t;switch(this.shouldSkipFocus=!1,e){case Qe:{this.checkFirstOption(s);return}case Se:{this.checkNextOption(s);return}case De:{this.checkPreviousOption(s);return}case Ze:{this.checkLastOption(s);return}case Wn:return this.focusAndScrollOptionIntoView(),!0;case Ps:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case es:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return e.length===1&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var s;this.ariaMultiSelectable=e?"true":null,(s=this.options)===null||s===void 0||s.forEach(o=>{o.checked=e?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,e){var s;const o=Math.max(0,parseInt((s=e==null?void 0:e.toFixed())!==null&&s!==void 0?s:"",10));o!==e&&G.queueUpdate(()=>{this.size=o})}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter(s=>!s.disabled),e=!t.every(s=>s.selected);t.forEach(s=>s.selected=e),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(!this.multiple){super.typeaheadBufferChanged(t,e);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),o=this.options.indexOf(s[0]);o>-1&&(this.activeIndex=o,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(e=>e.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}}c([y],Co.prototype,"activeIndex",void 0);c([u({mode:"boolean"})],Co.prototype,"multiple",void 0);c([u({converter:P})],Co.prototype,"size",void 0);const cv=(i,t)=>I`
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
            ${wt({filter:Co.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,Kt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},dv={[Kt.menuitem]:"menuitem",[Kt.menuitemcheckbox]:"menuitemcheckbox",[Kt.menuitemradio]:"menuitemradio"};class xe extends W{constructor(){super(...arguments),this.role=Kt.menuitem,this.hasSubmenu=!1,this.currentDirection=vt.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case ri:case es:return this.invoke(),!1;case Ti:return this.expandAndFocus(),!1;case Ii:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case Kt.menuitemcheckbox:this.checked=!this.checked;break;case Kt.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case Kt.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(t=>t.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(t){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Qi(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),G.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}}c([u({mode:"boolean"})],xe.prototype,"disabled",void 0);c([u({mode:"boolean"})],xe.prototype,"expanded",void 0);c([y],xe.prototype,"startColumnCount",void 0);c([u],xe.prototype,"role",void 0);c([u({mode:"boolean"})],xe.prototype,"checked",void 0);c([y],xe.prototype,"submenuRegion",void 0);c([y],xe.prototype,"hasSubmenu",void 0);c([y],xe.prototype,"currentDirection",void 0);c([y],xe.prototype,"submenu",void 0);$t(xe,ue);const hv=(i,t)=>I`
    <template
        role="${e=>e.role}"
        aria-haspopup="${e=>e.hasSubmenu?"menu":void 0}"
        aria-checked="${e=>e.role!==Kt.menuitem?e.checked:void 0}"
        aria-disabled="${e=>e.disabled}"
        aria-expanded="${e=>e.expanded}"
        @keydown="${(e,s)=>e.handleMenuItemKeyDown(s.event)}"
        @click="${(e,s)=>e.handleMenuItemClick(s.event)}"
        @mouseover="${(e,s)=>e.handleMouseOver(s.event)}"
        @mouseout="${(e,s)=>e.handleMouseOut(s.event)}"
        class="${e=>e.disabled?"disabled":""} ${e=>e.expanded?"expanded":""} ${e=>`indent-${e.startColumnCount}`}"
    >
            ${St(e=>e.role===Kt.menuitemcheckbox,I`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${t.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${St(e=>e.role===Kt.menuitemradio,I`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${t.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${se(i,t)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ie(i,t)}
        ${St(e=>e.hasSubmenu,I`
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
        ${St(e=>e.expanded,I`
                <${i.tagFor(j)}
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
                </${i.tagFor(j)}>
            `)}
    </template>
`,uv=(i,t)=>I`
    <template
        slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(e,s)=>e.handleMenuKeyDown(s.event)}"
        @focusout="${(e,s)=>e.handleFocusOut(s.event)}"
    >
        <slot ${wt("items")}></slot>
    </template>
`;let er=class Kh extends W{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&Is(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();const e=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[e].setAttribute("tabindex","0"),this.focusIndex=e}},this.handleItemFocus=t=>{const e=t.target;this.menuItems!==void 0&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;if(this.expandedItem!==null&&e===this.expandedItem&&e.expanded===!1){this.expandedItem=null;return}e.expanded&&(this.expandedItem!==null&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);function s(n){const r=n.getAttribute("role"),a=n.querySelector("[slot=start]");return r!==Kt.menuitem&&a===null||r===Kt.menuitem&&a!==null?1:r!==Kt.menuitem&&a!==null?2:0}const o=e.reduce((n,r)=>{const a=s(r);return n>a?n:a},0);e.forEach((n,r)=>{n.setAttribute("tabindex",r===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),(n instanceof xe||"startColumnCount"in n)&&(n.startColumnCount=o)})},this.changeHandler=t=>{if(this.menuItems===void 0)return;const e=t.target,s=this.menuItems.indexOf(e);if(s!==-1&&e.role==="menuitemradio"&&e.checked===!0){for(let n=s-1;n>=0;--n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===Kt.menuitemradio&&(r.checked=!1),a==="separator")break}const o=this.menuItems.length-1;for(let n=s+1;n<=o;++n){const r=this.menuItems[n],a=r.getAttribute("role");if(a===Kt.menuitemradio&&(r.checked=!1),a==="separator")break}}},this.isMenuItemElement=t=>Is(t)&&Kh.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),G.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case Se:this.setFocus(this.focusIndex+1,1);return;case De:this.setFocus(this.focusIndex-1,-1);return;case Ze:this.setFocus(this.menuItems.length-1,-1);return;case Qe:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(t=>!t.hasAttribute("hidden"))}setFocus(t,e){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){const s=this.menuItems[t];if(this.isFocusableElement(s)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,s.setAttribute("tabindex","0"),s.focus();break}t+=e}}};er.focusableElementRoles=dv;c([y],er.prototype,"items",void 0);const pv=(i,t)=>I`
    <template class="${e=>e.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${wt("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${se(i,t)}
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
            ${St(e=>!e.hideStep&&!e.readOnly&&!e.disabled,I`
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
            ${ie(i,t)}
        </div>
    </template>
`;class fv extends W{}class gv extends ai(fv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const mv={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let fe=class extends gv{constructor(){super(...arguments),this.type=mv.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&G.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};c([u({attribute:"readonly",mode:"boolean"})],fe.prototype,"readOnly",void 0);c([u({mode:"boolean"})],fe.prototype,"autofocus",void 0);c([u],fe.prototype,"placeholder",void 0);c([u],fe.prototype,"type",void 0);c([u],fe.prototype,"list",void 0);c([u({converter:P})],fe.prototype,"maxlength",void 0);c([u({converter:P})],fe.prototype,"minlength",void 0);c([u],fe.prototype,"pattern",void 0);c([u({converter:P})],fe.prototype,"size",void 0);c([u({mode:"boolean"})],fe.prototype,"spellcheck",void 0);c([y],fe.prototype,"defaultSlottedNodes",void 0);class ir{}$t(ir,yt);$t(fe,ue,ir);class bv extends W{}class vv extends ai(bv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let oe=class extends vv{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var s;this.max=Math.max(e,(s=this.min)!==null&&s!==void 0?s:e);const o=Math.min(this.min,this.max);this.min!==void 0&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var s;this.min=Math.min(e,(s=this.max)!==null&&s!==void 0?s:e);const o=Math.max(this.min,this.max);this.max!==void 0&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,s;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,(e=this.max)!==null&&e!==void 0?e:o),o=Math.max(o,(s=this.min)!==null&&s!==void 0?s:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&G.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case De:return this.stepUp(),!1;case Se:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};c([u({attribute:"readonly",mode:"boolean"})],oe.prototype,"readOnly",void 0);c([u({mode:"boolean"})],oe.prototype,"autofocus",void 0);c([u({attribute:"hide-step",mode:"boolean"})],oe.prototype,"hideStep",void 0);c([u],oe.prototype,"placeholder",void 0);c([u],oe.prototype,"list",void 0);c([u({converter:P})],oe.prototype,"maxlength",void 0);c([u({converter:P})],oe.prototype,"minlength",void 0);c([u({converter:P})],oe.prototype,"size",void 0);c([u({converter:P})],oe.prototype,"step",void 0);c([u({converter:P})],oe.prototype,"max",void 0);c([u({converter:P})],oe.prototype,"min",void 0);c([y],oe.prototype,"defaultSlottedNodes",void 0);$t(oe,ue,ir);const Kc=44,yv=(i,t)=>I`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${St(e=>typeof e.value=="number",I`
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
                        style="stroke-dasharray: ${e=>Kc*e.percentComplete/100}px ${Kc}px"
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
`;class is extends W{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t=typeof this.min=="number"?this.min:0,e=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,o=e-t;this.percentComplete=o===0?0:Math.fround((s-t)/o*100)}}c([u({converter:P})],is.prototype,"value",void 0);c([u({converter:P})],is.prototype,"min",void 0);c([u({converter:P})],is.prototype,"max",void 0);c([u({mode:"boolean"})],is.prototype,"paused",void 0);c([y],is.prototype,"percentComplete",void 0);const xv=(i,t)=>I`
    <template
        role="progressbar"
        aria-valuenow="${e=>e.value}"
        aria-valuemin="${e=>e.min}"
        aria-valuemax="${e=>e.max}"
        class="${e=>e.paused?"paused":""}"
    >
        ${St(e=>typeof e.value=="number",I`
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
`,wv=(i,t)=>I`
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
            class="positioning-region ${e=>e.orientation===Et.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${wt({property:"slottedRadioButtons",filter:oi("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Ei extends W{constructor(){super(...arguments),this.orientation=Et.horizontal,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach(s=>{s!==e&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const s=t[e];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(o=>{o!==s&&o.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,s=t.target,o=s!==null?e.indexOf(s):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(n===0&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=t=>{const e=t.target;if(e){const s=this.slottedRadioButtons;e.checked||s.indexOf(e)===0?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,s)=>t===e.length&&this.isInsideToolbar&&s===Ti,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===Ii,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,e,t.key)){this.moveRightOffGroup();return}else s===e.length&&(s=0);for(;s<e.length&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;if(s+1>=e.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(e,s);break}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,s=s<0?e.length-1:s,this.shouldMoveOffGroupToTheLeft(e,t.key)){this.moveLeftOffGroup();return}for(;s>=0&&e.length>1;)if(e[s].disabled){if(this.focusedRadio&&s===e.indexOf(this.focusedRadio))break;s-1<0?s=e.length-1:s-=1}else{this.moveToRadioByIndex(e,s);break}},this.keydownHandler=t=>{const e=t.key;if(e in us&&this.isInsideFoundationToolbar)return!0;switch(e){case ri:{this.checkFocusedRadio();break}case Ti:case Se:{this.direction===vt.ltr?this.moveRight(t):this.moveLeft(t);break}case Ii:case De:{this.direction===vt.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(t=>{this.disabled?t.disabled=!0:t.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Qi(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const t=this.slottedRadioButtons.filter(o=>o.hasAttribute("checked")),e=t?t.length:0;if(e>1){const o=t[e-1];o.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(o=>{this.name!==void 0&&o.setAttribute("name",this.name),this.disabled&&(o.disabled=!0),this.readOnly&&(o.readOnly=!0),this.value&&this.value===o.value?(this.selectedRadio=o,this.focusedRadio=o,o.checked=!0,o.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||o.setAttribute("tabindex","-1"),o.checked=!1),o.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const o=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),n=o!==null?o.length:0;if(n>0&&!s){const r=o[n-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}c([u({attribute:"readonly",mode:"boolean"})],Ei.prototype,"readOnly",void 0);c([u({attribute:"disabled",mode:"boolean"})],Ei.prototype,"disabled",void 0);c([u],Ei.prototype,"name",void 0);c([u],Ei.prototype,"value",void 0);c([u],Ei.prototype,"orientation",void 0);c([y],Ei.prototype,"childItems",void 0);c([y],Ei.prototype,"slottedRadioButtons",void 0);const $v=(i,t)=>I`
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
            <slot ${wt("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class kv extends W{}class Cv extends cl(kv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class sr extends Cv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{switch(t.key){case es:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(t){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}c([u({attribute:"readonly",mode:"boolean"})],sr.prototype,"readOnly",void 0);c([y],sr.prototype,"name",void 0);c([y],sr.prototype,"defaultSlottedNodes",void 0);let di=class extends W{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const s=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(s,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&G.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce((e,s)=>s instanceof HTMLSlotElement?e.concat(s.assignedElements()):(e.push(s),e),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:s,left:o}=t.getBoundingClientRect();this.width=s;let n=0,r=this.scrollItems.map((a,l)=>{const{left:d,width:h}=a.getBoundingClientRect(),g=Math.round(d+e-o),b=Math.round(g+h);return this.isRtl?-b:(n=b,l===0?0:g)}).concat(n);r=this.fixScrollMisalign(r),r.sort((a,l)=>Math.abs(a)-Math.abs(l)),this.scrollStops=r,this.setFlippers()}validateStops(t=!0){const e=()=>!!this.scrollStops.find(s=>s>0);return!e()&&t&&this.setStops(),e()}fixScrollMisalign(t){if(this.isRtl&&t.some(e=>e>0)){t.sort((s,o)=>o-s);const e=t[0];t=t.map(s=>s-e)}return t}setFlippers(){var t,e;const s=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",s===0),this.scrollStops){const o=Math.abs(this.scrollStops[this.scrollStops.length-1]);(e=this.nextFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(s)+this.width>=o)}}scrollInView(t,e=0,s){var o;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(n=>n===t||n.contains(t))),t!==void 0){s=s??e;const{scrollContainer:n,scrollStops:r,scrollItems:a}=this,{scrollLeft:l}=this.scrollContainer,{width:d}=n.getBoundingClientRect(),h=r[t],{width:g}=a[t].getBoundingClientRect(),b=h+g,w=l+e>h;if(w||l+d-s<b){const L=(o=[...r].sort((q,J)=>w?J-q:q-J).find(q=>w?q+e<h:q+d-(s??0)>b))!==null&&o!==void 0?o:0;this.scrollToPosition(L)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((n,r)=>n>=t&&(this.isRtl||r===this.scrollStops.length-1||this.scrollStops[r+1]>t)),s=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>s);(o>=e||o===-1)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){this.validateStops();const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(t)),s=this.scrollStops.findIndex(n=>Math.abs(t)+this.width<=Math.abs(n));let o=e;s>e+2?o=s-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var s;if(this.scrolling)return;this.scrolling=!0;const o=(s=this.duration)!==null&&s!==void 0?s:`${Math.abs(t-e)/this.speed}s`;this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=d=>{d&&d.target!==d.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(n===0){r();return}this.content.addEventListener("transitionend",r);const a=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let l=this.scrollContainer.scrollLeft-Math.min(t,a);this.isRtl&&(l=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),a)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${l}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};c([u({converter:P})],di.prototype,"speed",void 0);c([u],di.prototype,"duration",void 0);c([u],di.prototype,"easing",void 0);c([u({attribute:"flippers-hidden-from-at",converter:$o})],di.prototype,"flippersHiddenFromAT",void 0);c([y],di.prototype,"scrolling",void 0);c([y],di.prototype,"scrollItems",void 0);c([u({attribute:"view"})],di.prototype,"view",void 0);const Fv=(i,t)=>{var e,s;return I`
    <template
        class="horizontal-scroll"
        @keyup="${(o,n)=>o.keyupHandler(n.event)}"
    >
        ${se(i,t)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${o=>o.scrolled()}"
                ${lt("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${lt("content")}>
                    <slot
                        ${wt({property:"scrollItems",filter:oi()})}
                    ></slot>
                </div>
            </div>
            ${St(o=>o.view!=="mobile",I`
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
        ${ie(i,t)}
    </template>
`};function tu(i,t,e){return i.nodeType!==Node.TEXT_NODE?!0:typeof i.nodeValue=="string"&&!!i.nodeValue.trim().length}class Iv extends W{}class Tv extends ai(Iv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let we=class extends Tv{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&G.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};c([u({attribute:"readonly",mode:"boolean"})],we.prototype,"readOnly",void 0);c([u({mode:"boolean"})],we.prototype,"autofocus",void 0);c([u],we.prototype,"placeholder",void 0);c([u],we.prototype,"list",void 0);c([u({converter:P})],we.prototype,"maxlength",void 0);c([u({converter:P})],we.prototype,"minlength",void 0);c([u],we.prototype,"pattern",void 0);c([u({converter:P})],we.prototype,"size",void 0);c([u({mode:"boolean"})],we.prototype,"spellcheck",void 0);c([y],we.prototype,"defaultSlottedNodes",void 0);class eu{}$t(eu,yt);$t(we,ue,eu);class Sv extends Co{}class Dv extends ai(Sv){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let hi=class extends Dv{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=go("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,G.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return U.track(this,"value"),this._value}set value(t){var e,s,o,n,r,a,l;const d=`${this._value}`;if(!((e=this._options)===null||e===void 0)&&e.length){const h=this._options.findIndex(w=>w.value===t),g=(o=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null,b=(r=(n=this._options[h])===null||n===void 0?void 0:n.value)!==null&&r!==void 0?r:null;(h===-1||g!==b)&&(t="",this.selectedIndex=h),t=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:t}d!==t&&(this._value=t,super.valueChanged(d,t),U.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,s;this.$fastController.isConnected&&(this.value=(s=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.value)!==null&&s!==void 0?s:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),s=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>s?ys.above:ys.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===ys.above?~~t.top:~~s}get displayValue(){var t,e;return U.track(this,"displayValue"),(e=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&e!==void 0?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const s=t.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((e=this.options)===null||e===void 0)&&e.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),e==="value"&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach(s=>{U.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,e),this.options.forEach(s=>{U.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=((e=this.listbox)===null||e===void 0?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var s;super.selectedOptionsChanged(t,e),(s=this.options)===null||s===void 0||s.forEach((o,n)=>{var r;const a=(r=this.proxy)===null||r===void 0?void 0:r.options.item(n);a&&(a.selected=o.selected)})}setDefaultSelectedOption(){var t;const e=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(pe.slottedOptionFilter),s=e==null?void 0:e.findIndex(o=>o.hasAttribute("selected")||o.selected||o.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)}))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case es:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Qe:case Ze:{t.preventDefault();break}case ri:{t.preventDefault(),this.open=!this.open;break}case Ps:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case Wn:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===Se||e===De)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&U.notify(this,"displayValue")}};c([u({attribute:"open",mode:"boolean"})],hi.prototype,"open",void 0);c([jg],hi.prototype,"collapsible",null);c([y],hi.prototype,"control",void 0);c([u({attribute:"position"})],hi.prototype,"positionAttribute",void 0);c([y],hi.prototype,"position",void 0);c([y],hi.prototype,"maxHeight",void 0);class hl{}c([y],hl.prototype,"ariaControls",void 0);$t(hl,Ri);$t(hi,ue,hl);const Rv=(i,t)=>I`
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
        ${St(e=>e.collapsible,I`
                <div
                    class="control"
                    part="control"
                    ?disabled="${e=>e.disabled}"
                    ${lt("control")}
                >
                    ${se(i,t)}
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
                    ${ie(i,t)}
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
                ${wt({filter:pe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,Ev=(i,t)=>I`
    <template
        class="${e=>e.shape==="circle"?"circle":"rect"}"
        pattern="${e=>e.pattern}"
        ?shimmer="${e=>e.shimmer}"
    >
        ${St(e=>e.shimmer===!0,I`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${e=>e.pattern}" role="presentation">
            <img class="pattern" src="${e=>e.pattern}" />
        </object>
        <slot></slot>
    </template>
`;class Fo extends W{constructor(){super(...arguments),this.shape="rect"}}c([u],Fo.prototype,"fill",void 0);c([u],Fo.prototype,"shape",void 0);c([u],Fo.prototype,"pattern",void 0);c([u({mode:"boolean"})],Fo.prototype,"shimmer",void 0);const Ov=(i,t)=>I`
    <template
        aria-disabled="${e=>e.disabled}"
        class="${e=>e.sliderOrientation||Et.horizontal}
            ${e=>e.disabled?"disabled":""}"
    >
        <div ${lt("root")} part="root" class="root" style="${e=>e.positionStyle}">
            <div class="container">
                ${St(e=>!e.hideMark,I`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;function Fa(i,t,e,s){let o=Xn(0,1,(i-t)/(e-t));return s===vt.rtl&&(o=1-o),o}const Zo={min:0,max:0,direction:vt.ltr,orientation:Et.horizontal,disabled:!1};class ui extends W{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=vt.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=Zo.direction||vt.ltr,this.sliderOrientation=Zo.orientation,this.sliderMaxPosition=Zo.max,this.sliderMinPosition=Zo.min;else{const t=this.parentNode,{min:e,max:s,direction:o,orientation:n,disabled:r}=t;r!==void 0&&(this.disabled=r),this.sliderDirection=o||vt.ltr,this.sliderOrientation=n||Et.horizontal,this.sliderMaxPosition=s,this.sliderMinPosition=e}},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:vt.ltr,e=Fa(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let s=Math.round((1-e)*100),o=Math.round(e*100);return Number.isNaN(o)&&Number.isNaN(s)&&(s=50,o=50),this.sliderOrientation===Et.horizontal?t===vt.rtl?`right: ${o}%; left: ${s}%;`:`left: ${o}%; right: ${s}%;`:`top: ${o}%; bottom: ${s}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=U.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}}c([y],ui.prototype,"positionStyle",void 0);c([u],ui.prototype,"position",void 0);c([u({attribute:"hide-mark",mode:"boolean"})],ui.prototype,"hideMark",void 0);c([u({attribute:"disabled",mode:"boolean"})],ui.prototype,"disabled",void 0);c([y],ui.prototype,"sliderOrientation",void 0);c([y],ui.prototype,"sliderMinPosition",void 0);c([y],ui.prototype,"sliderMaxPosition",void 0);c([y],ui.prototype,"sliderDirection",void 0);const Av=(i,t)=>I`
    <template
        role="slider"
        class="${e=>e.readOnly?"readonly":""}
        ${e=>e.orientation||Et.horizontal}"
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
`;class Vv extends W{}class Lv extends ai(Vv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const Pv={singleValue:"single-value"};class Gt extends Lv{constructor(){super(...arguments),this.direction=vt.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Et.horizontal,this.mode=Pv.singleValue,this.keypressHandler=t=>{if(!this.readOnly){if(t.key===Qe)t.preventDefault(),this.value=`${this.min}`;else if(t.key===Ze)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case Ti:case De:t.preventDefault(),this.increment();break;case Ii:case Se:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=`${t?"remove":"add"}EventListener`;this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=`${t!==null?"add":"remove"}EventListener`;window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,s=this.orientation===Et.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`},this.calculateNewValue=t=>{const e=Fa(t,this.orientation===Et.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===Et.horizontal?this.trackWidth:this.trackHeight,this.direction),s=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(s)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const s=this.orientation===Et.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(s)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const s=Math.round(e/this.step),o=e-s*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=o>=Number(this.step)/2?e-o+Number(this.step):e-o,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Qi(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==vt.rtl&&this.orientation!==Et.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),s=e<Number(this.max)?`${e}`:`${this.max}`;this.value=s}decrement(){const t=this.direction!==vt.rtl&&this.orientation!==Et.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),s=e>Number(this.min)?`${e}`:`${this.min}`;this.value=s}setThumbPositionForOrientation(t){const s=(1-Fa(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===Et.horizontal?this.position=this.isDragging?`right: ${s}%; transition: none;`:`right: ${s}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${s}%; transition: none;`:`bottom: ${s}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}c([u({attribute:"readonly",mode:"boolean"})],Gt.prototype,"readOnly",void 0);c([y],Gt.prototype,"direction",void 0);c([y],Gt.prototype,"isDragging",void 0);c([y],Gt.prototype,"position",void 0);c([y],Gt.prototype,"trackWidth",void 0);c([y],Gt.prototype,"trackMinWidth",void 0);c([y],Gt.prototype,"trackHeight",void 0);c([y],Gt.prototype,"trackLeft",void 0);c([y],Gt.prototype,"trackMinHeight",void 0);c([y],Gt.prototype,"valueTextFormatter",void 0);c([u({converter:P})],Gt.prototype,"min",void 0);c([u({converter:P})],Gt.prototype,"max",void 0);c([u({converter:P})],Gt.prototype,"step",void 0);c([u],Gt.prototype,"orientation",void 0);c([u],Gt.prototype,"mode",void 0);const _v=(i,t)=>I`
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
            <slot ${wt("defaultSlottedNodes")}></slot>
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
`;class Hv extends W{}class Mv extends cl(Hv){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ul extends Mv{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case ri:case es:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}c([u({attribute:"readonly",mode:"boolean"})],ul.prototype,"readOnly",void 0);c([y],ul.prototype,"defaultSlottedNodes",void 0);const zv=(i,t)=>I`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Bv extends W{}const Nv=(i,t)=>I`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
        <slot></slot>
    </template>
`;class iu extends W{}c([u({mode:"boolean"})],iu.prototype,"disabled",void 0);const jv=(i,t)=>I`
    <template class="${e=>e.orientation}">
        ${se(i,t)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${wt("tabs")}></slot>

            ${St(e=>e.showActiveIndicator,I`
                    <div
                        ${lt("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ie(i,t)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${wt("tabpanels")}></slot>
        </div>
    </template>
`,td={vertical:"vertical",horizontal:"horizontal"};class pi extends W{constructor(){super(...arguments),this.orientation=td.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",s=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((o,n)=>{if(o.slot==="tab"){const r=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const a=this.tabIds[n],l=this.tabpanelIds[n];o.setAttribute("id",a),o.setAttribute("aria-selected",r?"true":"false"),o.setAttribute("aria-controls",l),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=o,this.activeid=a)}o.style[t]="",o.style[e]="",o.style[s]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,e)=>{const s=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",s),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{const e=t.currentTarget;e.nodeType===1&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Ii:t.preventDefault(),this.adjustBackward(t);break;case Ti:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case De:t.preventDefault(),this.adjustBackward(t);break;case Se:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case Qe:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case Ze:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)+1:1,s===e.length&&(s=0);s<e.length&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else{if(this.activetab&&s===e.indexOf(this.activetab))break;s+1>=e.length?s=0:s+=1}},this.adjustBackward=t=>{const e=this.tabs;let s=0;for(s=this.activetab?e.indexOf(this.activetab)-1:0,s=s<0?e.length-1:s;s>=0&&e.length>1;)if(this.isFocusableElement(e[s])){this.moveToTabByIndex(e,s);break}else s-1<0?s=e.length-1:s-=1},this.moveToTabByIndex=(t,e)=>{const s=t[e];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===t),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`tab-${go()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var e;return(e=t.getAttribute("id"))!==null&&e!==void 0?e:`panel-${go()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===td.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(t){const e=this.tabs.filter(r=>this.isFocusableElement(r)),s=e.indexOf(this.activetab),o=Xn(0,e.length-1,s+t),n=this.tabs.indexOf(e[o]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}c([u],pi.prototype,"orientation",void 0);c([u],pi.prototype,"activeid",void 0);c([y],pi.prototype,"tabs",void 0);c([y],pi.prototype,"tabpanels",void 0);c([u({mode:"boolean"})],pi.prototype,"activeindicator",void 0);c([y],pi.prototype,"activeIndicatorRef",void 0);c([y],pi.prototype,"showActiveIndicator",void 0);$t(pi,ue);class Uv extends W{}class qv extends ai(Uv){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const su={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let Wt=class extends qv{constructor(){super(...arguments),this.resize=su.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};c([u({mode:"boolean"})],Wt.prototype,"readOnly",void 0);c([u],Wt.prototype,"resize",void 0);c([u({mode:"boolean"})],Wt.prototype,"autofocus",void 0);c([u({attribute:"form"})],Wt.prototype,"formId",void 0);c([u],Wt.prototype,"list",void 0);c([u({converter:P})],Wt.prototype,"maxlength",void 0);c([u({converter:P})],Wt.prototype,"minlength",void 0);c([u],Wt.prototype,"name",void 0);c([u],Wt.prototype,"placeholder",void 0);c([u({converter:P,mode:"fromView"})],Wt.prototype,"cols",void 0);c([u({converter:P,mode:"fromView"})],Wt.prototype,"rows",void 0);c([u({mode:"boolean"})],Wt.prototype,"spellcheck",void 0);c([y],Wt.prototype,"defaultSlottedNodes",void 0);$t(Wt,ir);const Gv=(i,t)=>I`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==su.none?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${wt("defaultSlottedNodes")}></slot>
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
`,Wv=(i,t)=>I`
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
                ${wt({property:"defaultSlottedNodes",filter:tu})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${se(i,t)}
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
            ${ie(i,t)}
        </div>
    </template>
`,Xv=(i,t)=>I`
    <template
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-orientation="${e=>e.orientation}"
        orientation="${e=>e.orientation}"
        role="toolbar"
        @mousedown="${(e,s)=>e.mouseDownHandler(s.event)}"
        @focusin="${(e,s)=>e.focusinHandler(s.event)}"
        @keydown="${(e,s)=>e.keydownHandler(s.event)}"
        ${Gn({property:"childItems",attributeFilter:["disabled","hidden"],filter:oi(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${se(i,t)}
            <slot
                ${wt({filter:oi(),property:"slottedItems"})}
            ></slot>
            ${ie(i,t)}
        </div>
    </template>
`,ed=Object.freeze({[us.ArrowUp]:{[Et.vertical]:-1},[us.ArrowDown]:{[Et.vertical]:1},[us.ArrowLeft]:{[Et.horizontal]:{[vt.ltr]:-1,[vt.rtl]:1}},[us.ArrowRight]:{[Et.horizontal]:{[vt.ltr]:1,[vt.rtl]:-1}}});let Oi=class Ia extends W{constructor(){super(...arguments),this._activeIndex=0,this.direction=vt.ltr,this.orientation=Et.horizontal}get activeIndex(){return U.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=Xn(0,this.focusableElements.length-1,t),U.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(t){var e;const s=(e=this.focusableElements)===null||e===void 0?void 0:e.findIndex(o=>o.contains(t.target));return s>-1&&this.activeIndex!==s&&this.setFocusedElement(s),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Qi(this)}focusinHandler(t){const e=t.relatedTarget;!e||this.contains(e)||this.setFocusedElement()}getDirectionalIncrementer(t){var e,s,o,n,r;return(r=(o=(s=(e=ed[t])===null||e===void 0?void 0:e[this.orientation])===null||s===void 0?void 0:s[this.direction])!==null&&o!==void 0?o:(n=ed[t])===null||n===void 0?void 0:n[this.orientation])!==null&&r!==void 0?r:0}keydownHandler(t){const e=t.key;if(!(e in us)||t.defaultPrevented||t.shiftKey)return!0;const s=this.getDirectionalIncrementer(e);if(!s)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+s;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(Ia.reduceFocusableItems,[]);const s=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,s),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),(e=this.focusableElements[this.activeIndex])===null||e===void 0||e.focus()}static reduceFocusableItems(t,e){var s,o,n,r;const a=e.getAttribute("role")==="radio",l=(o=(s=e.$fastController)===null||s===void 0?void 0:s.definition.shadowOptions)===null||o===void 0?void 0:o.delegatesFocus,d=Array.from((r=(n=e.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&r!==void 0?r:[]).some(h=>Jc(h));return!e.hasAttribute("disabled")&&!e.hasAttribute("hidden")&&(Jc(e)||a||l||d)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Ia.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1})}};c([y],Oi.prototype,"direction",void 0);c([u],Oi.prototype,"orientation",void 0);c([y],Oi.prototype,"slottedItems",void 0);c([y],Oi.prototype,"slottedLabel",void 0);c([y],Oi.prototype,"childItems",void 0);class or{}c([u({attribute:"aria-labelledby"})],or.prototype,"ariaLabelledby",void 0);c([u({attribute:"aria-label"})],or.prototype,"ariaLabel",void 0);$t(or,yt);$t(Oi,ue,or);const Yv=(i,t)=>I`
        ${St(e=>e.tooltipVisible,I`
            <${i.tagFor(j)}
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
            </${i.tagFor(j)}>
        `)}
    `,ae={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"};let Vt=class extends W{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=vt.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&this.tooltipVisible)switch(t.key){case Ps:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Qi(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),G.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(t!=null&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const e=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(s=>{s.id===e&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case ae.top:case ae.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case ae.right:case ae.left:case ae.start:case ae.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case ae.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case ae.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case ae.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case ae.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case ae.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case ae.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case ae.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case ae.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};c([u({mode:"boolean"})],Vt.prototype,"visible",void 0);c([u],Vt.prototype,"anchor",void 0);c([u],Vt.prototype,"delay",void 0);c([u],Vt.prototype,"position",void 0);c([u({attribute:"auto-update-mode"})],Vt.prototype,"autoUpdateMode",void 0);c([u({attribute:"horizontal-viewport-lock"})],Vt.prototype,"horizontalViewportLock",void 0);c([u({attribute:"vertical-viewport-lock"})],Vt.prototype,"verticalViewportLock",void 0);c([y],Vt.prototype,"anchorElement",void 0);c([y],Vt.prototype,"viewportElement",void 0);c([y],Vt.prototype,"verticalPositioningMode",void 0);c([y],Vt.prototype,"horizontalPositioningMode",void 0);c([y],Vt.prototype,"horizontalInset",void 0);c([y],Vt.prototype,"verticalInset",void 0);c([y],Vt.prototype,"horizontalScaling",void 0);c([y],Vt.prototype,"verticalScaling",void 0);c([y],Vt.prototype,"verticalDefaultPosition",void 0);c([y],Vt.prototype,"horizontalDefaultPosition",void 0);c([y],Vt.prototype,"tooltipVisible",void 0);c([y],Vt.prototype,"currentDirection",void 0);const Qv=(i,t)=>I`
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
        ${Gn({property:"childItems",filter:oi()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${St(e=>e.childItems&&e.childItemLength()>0,I`
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
                ${se(i,t)}
                <slot></slot>
                ${ie(i,t)}
            </div>
        </div>
        ${St(e=>e.childItems&&e.childItemLength()>0&&(e.expanded||e.renderCollapsedChildren),I`
                <div role="group" class="items" part="items">
                    <slot name="item" ${wt("items")}></slot>
                </div>
            `)}
    </template>
`;function $i(i){return Is(i)&&i.getAttribute("role")==="treeitem"}class Pt extends W{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>$i(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach(s=>{$i(s)&&(s.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter(e=>$i(e));return t?t.length:0}}c([u({mode:"boolean"})],Pt.prototype,"expanded",void 0);c([u({mode:"boolean"})],Pt.prototype,"selected",void 0);c([u({mode:"boolean"})],Pt.prototype,"disabled",void 0);c([y],Pt.prototype,"focusable",void 0);c([y],Pt.prototype,"childItems",void 0);c([y],Pt.prototype,"items",void 0);c([y],Pt.prototype,"nested",void 0);c([y],Pt.prototype,"renderCollapsedChildren",void 0);$t(Pt,ue);const Zv=(i,t)=>I`
    <template
        role="tree"
        ${lt("treeView")}
        @keydown="${(e,s)=>e.handleKeyDown(s.event)}"
        @focusin="${(e,s)=>e.handleFocus(s.event)}"
        @focusout="${(e,s)=>e.handleBlur(s.event)}"
        @click="${(e,s)=>e.handleClick(s.event)}"
        @selected-change="${(e,s)=>e.handleSelectedChange(s.event)}"
    >
        <slot ${wt("slottedTreeItems")}></slot>
    </template>
`;class nr extends W{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&Pt.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case Qe:e.length&&Pt.focusItem(e[0]);return;case Ze:e.length&&Pt.focusItem(e[e.length-1]);return;case Ii:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Pt&&s.childItemLength()>0&&s.expanded?s.expanded=!1:s instanceof Pt&&s.parentElement instanceof Pt&&Pt.focusItem(s.parentElement)}return!1;case Ti:if(t.target&&this.isFocusableElement(t.target)){const s=t.target;s instanceof Pt&&s.childItemLength()>0&&!s.expanded?s.expanded=!0:s instanceof Pt&&s.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case Se:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case De:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case ri:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!$i(t.target))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):!e.selected&&this.currentSelected===e&&(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(s=>{$i(s)&&(s.nested=this.nested)})},this.isFocusableElement=t=>$i(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),G.queueUpdate(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!$i(t.target))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const s=this.getVisibleNodes();if(!s)return;const o=s[s.indexOf(e)+t];Is(o)&&Pt.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return e===-1&&(e=t.findIndex(this.isFocusableElement)),e!==-1?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>$i(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return Xm(this,"[role='treeitem']")||[]}}c([u({attribute:"render-collapsed-nodes"})],nr.prototype,"renderCollapsedNodes",void 0);c([y],nr.prototype,"currentSelected",void 0);c([y],nr.prototype,"slottedTreeItems",void 0);class Jv{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,s=this.constructListener(t);s.bind(e)(),e.addListener(s),this.listenerCache.set(t,s)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class Io extends Jv{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Io(t,e)}constructListener(t){let e=!1;const s=this.styles;return function(){const{matches:n}=this;n&&!e?(t.$fastController.addStyles(s),e=n):!n&&e&&(t.$fastController.removeStyles(s),e=n)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const st=Io.with(window.matchMedia("(forced-colors)"));Io.with(window.matchMedia("(prefers-color-scheme: dark)"));Io.with(window.matchMedia("(prefers-color-scheme: light)"));class Kv{constructor(t,e,s){this.propertyName=t,this.value=e,this.styles=s}bind(t){U.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){U.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}const Ee="not-allowed",ty=":host([hidden]){display:none}";function ot(i){return`${ty}:host{display:${i}}`}const X=Qm()?"focus-visible":"focus";function Ui(i,t,e){return isNaN(i)||i<=t?t:i>=e?e:i}function ea(i,t,e){return isNaN(i)||i<=t?0:i>=e?1:i/(e-t)}function Bi(i,t,e){return isNaN(i)?t:t+i*(e-t)}function ey(i){const t=Math.round(Ui(i,0,255)).toString(16);return t.length===1?"0"+t:t}function Jo(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:t+i*(e-t)}function te(i,t){const e=Math.pow(10,t);return Math.round(i*e)/e}class vo{constructor(t,e,s){this.h=t,this.s=e,this.l=s}static fromObject(t){return t&&!isNaN(t.h)&&!isNaN(t.s)&&!isNaN(t.l)?new vo(t.h,t.s,t.l):null}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new vo(te(this.h,t),te(this.s,t),te(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Bt{constructor(t,e,s){this.l=t,this.a=e,this.b=s}static fromObject(t){return t&&!isNaN(t.l)&&!isNaN(t.a)&&!isNaN(t.b)?new Bt(t.l,t.a,t.b):null}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new Bt(te(this.l,t),te(this.a,t),te(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Bt.epsilon=216/24389;Bt.kappa=24389/27;class At{constructor(t,e,s,o){this.r=t,this.g=e,this.b=s,this.a=typeof o=="number"&&!isNaN(o)?o:1}static fromObject(t){return t&&!isNaN(t.r)&&!isNaN(t.g)&&!isNaN(t.b)?new At(t.r,t.g,t.b,t.a):null}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Bi(this.r,0,255))},${Math.round(Bi(this.g,0,255))},${Math.round(Bi(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Bi(this.r,0,255))},${Math.round(Bi(this.g,0,255))},${Math.round(Bi(this.b,0,255))},${Ui(this.a,0,1)})`}roundToPrecision(t){return new At(te(this.r,t),te(this.g,t),te(this.b,t),te(this.a,t))}clamp(){return new At(Ui(this.r,0,1),Ui(this.g,0,1),Ui(this.b,0,1),Ui(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return ey(Bi(t,0,255))}}class me{constructor(t,e,s){this.x=t,this.y=e,this.z=s}static fromObject(t){return t&&!isNaN(t.x)&&!isNaN(t.y)&&!isNaN(t.z)?new me(t.x,t.y,t.z):null}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new me(te(this.x,t),te(this.y,t),te(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}me.whitePoint=new me(.95047,1,1.08883);function iy(i){return i.r*.2126+i.g*.7152+i.b*.0722}function ou(i){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return iy(new At(t(i.r),t(i.g),t(i.b),1))}function ia(i,t,e){return e-t===0?0:(i-t)/(e-t)}function sa(i,t,e){const s=ia(i.r,t.r,e.r),o=ia(i.g,t.g,e.g),n=ia(i.b,t.b,e.b);return(s+o+n)/3}function sy(i,t,e=null){let s=0,o=e;return o!==null?s=sa(i,t,o):(o=new At(0,0,0,1),s=sa(i,t,o),s<=0&&(o=new At(1,1,1,1),s=sa(i,t,o))),s=Math.round(s*1e3)/1e3,new At(o.r,o.g,o.b,s)}function id(i){const t=Math.max(i.r,i.g,i.b),e=Math.min(i.r,i.g,i.b),s=t-e;let o=0;s!==0&&(t===i.r?o=60*((i.g-i.b)/s%6):t===i.g?o=60*((i.b-i.r)/s+2):o=60*((i.r-i.g)/s+4)),o<0&&(o+=360);const n=(t+e)/2;let r=0;return s!==0&&(r=s/(1-Math.abs(2*n-1))),new vo(o,r,n)}function oy(i,t=1){const e=(1-Math.abs(2*i.l-1))*i.s,s=e*(1-Math.abs(i.h/60%2-1)),o=i.l-e/2;let n=0,r=0,a=0;return i.h<60?(n=e,r=s,a=0):i.h<120?(n=s,r=e,a=0):i.h<180?(n=0,r=e,a=s):i.h<240?(n=0,r=s,a=e):i.h<300?(n=s,r=0,a=e):i.h<360&&(n=e,r=0,a=s),new At(n+o,r+o,a+o,t)}function ny(i){const t=(i.l+16)/116,e=t+i.a/500,s=t-i.b/200,o=Math.pow(e,3),n=Math.pow(t,3),r=Math.pow(s,3);let a=0;o>Bt.epsilon?a=o:a=(116*e-16)/Bt.kappa;let l=0;i.l>Bt.epsilon*Bt.kappa?l=n:l=i.l/Bt.kappa;let d=0;return r>Bt.epsilon?d=r:d=(116*s-16)/Bt.kappa,a=me.whitePoint.x*a,l=me.whitePoint.y*l,d=me.whitePoint.z*d,new me(a,l,d)}function ry(i){function t(l){return l>Bt.epsilon?Math.pow(l,1/3):(Bt.kappa*l+16)/116}const e=t(i.x/me.whitePoint.x),s=t(i.y/me.whitePoint.y),o=t(i.z/me.whitePoint.z),n=116*s-16,r=500*(e-s),a=200*(s-o);return new Bt(n,r,a)}function ay(i){function t(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}const e=t(i.r),s=t(i.g),o=t(i.b),n=e*.4124564+s*.3575761+o*.1804375,r=e*.2126729+s*.7151522+o*.072175,a=e*.0193339+s*.119192+o*.9503041;return new me(n,r,a)}function ly(i,t=1){function e(r){return r<=.0031308?r*12.92:1.055*Math.pow(r,1/2.4)-.055}const s=e(i.x*3.2404542-i.y*1.5371385-i.z*.4985314),o=e(i.x*-.969266+i.y*1.8760108+i.z*.041556),n=e(i.x*.0556434-i.y*.2040259+i.z*1.0572252);return new At(s,o,n,t)}function cy(i){return ry(ay(i))}function oa(i,t=1){return ly(ny(i),t)}var sd;(function(i){i[i.Burn=0]="Burn",i[i.Color=1]="Color",i[i.Darken=2]="Darken",i[i.Dodge=3]="Dodge",i[i.Lighten=4]="Lighten",i[i.Multiply=5]="Multiply",i[i.Overlay=6]="Overlay",i[i.Screen=7]="Screen"})(sd||(sd={}));function dy(i,t){if(t.a>=1)return t;if(t.a<=0)return new At(i.r,i.g,i.b,1);const e=t.a*t.r+(1-t.a)*i.r,s=t.a*t.g+(1-t.a)*i.g,o=t.a*t.b+(1-t.a)*i.b;return new At(e,s,o,1)}function Ko(i,t,e){return isNaN(i)||i<=0?t:i>=1?e:new At(Jo(i,t.r,e.r),Jo(i,t.g,e.g),Jo(i,t.b,e.b),Jo(i,t.a,e.a))}var od;(function(i){i[i.RGB=0]="RGB",i[i.HSL=1]="HSL",i[i.HSV=2]="HSV",i[i.XYZ=3]="XYZ",i[i.LAB=4]="LAB",i[i.LCH=5]="LCH"})(od||(od={}));const hy=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Xi(i){const t=hy.exec(i);if(t===null)return null;let e=t[1];if(e.length===3){const o=e.charAt(0),n=e.charAt(1),r=e.charAt(2);e=o.concat(o,n,n,r,r)}const s=parseInt(e,16);return isNaN(s)?null:new At(ea((s&16711680)>>>16,0,255),ea((s&65280)>>>8,0,255),ea(s&255,0,255),1)}function Tn(i,t){const e=i.relativeLuminance>t.relativeLuminance?i:t,s=i.relativeLuminance>t.relativeLuminance?t:i;return(e.relativeLuminance+.05)/(s.relativeLuminance+.05)}const Te=Object.freeze({create(i,t,e){return new Sn(i,t,e)},from(i){return new Sn(i.r,i.g,i.b)}});function uy(i){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const e in t)if(typeof t[e]!=typeof i[e])return!1;return!0}class Sn extends At{constructor(t,e,s){super(t,e,s,1),this.toColorString=this.toStringHexRGB,this.contrast=Tn.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=ou(this)}static fromObject(t){return new Sn(t.r,t.g,t.b)}}function Ta(i,t,e=0,s=i.length-1){if(s===e)return i[e];const o=Math.floor((s-e)/2)+e;return t(i[o])?Ta(i,t,e,o):Ta(i,t,o+1,s)}const py=(-.1+Math.sqrt(.21))/2;function To(i){return i.relativeLuminance<=py}function ss(i){return To(i)?-1:1}const nd={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function fy(i,t,e){return typeof i=="number"?yo.from(Te.create(i,t,e)):yo.from(i)}function gy(i,t){return uy(i)?Ge.from(i,t):Ge.from(Te.create(i.r,i.g,i.b),t)}const yo=Object.freeze({create:fy,from:gy});class Ge{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,s,o){s===void 0&&(s=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let a=s;o===void 0&&(o=ss(t));const l=d=>Tn(t,d)>=e;return o===-1&&(n=this.reversedSwatches,a=r-a),Ta(n,l,a,r)}get(t){return this.swatches[t]||this.swatches[Ui(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(e!==-1)return this.closestIndexCache.set(t.relativeLuminance,e),e;const s=this.swatches.reduce((o,n)=>Math.abs(n.relativeLuminance-t.relativeLuminance)<Math.abs(o.relativeLuminance-t.relativeLuminance)?n:o);return e=this.swatches.indexOf(s),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const o=id(t).s,n=id(e);if(n.s<o){const r=new vo(n.h,o,n.l);return oy(r)}return e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],s=cy(At.fromObject(t).roundToPrecision(4)),o=oa(new Bt(0,s.a,s.b)).clamp().roundToPrecision(4),n=oa(new Bt(50,s.a,s.b)).clamp().roundToPrecision(4),r=oa(new Bt(100,s.a,s.b)).clamp().roundToPrecision(4),a=new At(0,0,0),l=new At(1,1,1),d=r.equalValue(l)?0:14,h=o.equalValue(a)?0:14;for(let g=100+d;g>=0-h;g-=.5){let b;if(g<0){const w=g/h+1;b=Ko(w,a,o)}else if(g<=50)b=Ko(Ge.ramp(g),o,n);else if(g<=100)b=Ko(Ge.ramp(g),n,r);else{const w=(g-100)/d;b=Ko(w,r,l)}b=Ge.saturationBump(n,b).roundToPrecision(4),e.push(Te.from(b))}return new Ge(t,e)}static adjustEnd(t,e,s,o){const n=o===-1?e.swatches:e.reversedSwatches,r=d=>{const h=e.closestIndexOf(d);return o===1?e.lastIndex-h:h};o===1&&s.reverse();const a=t(s[s.length-2]);if(te(Tn(s[s.length-1],s[s.length-2]),2)<a){s.pop();const d=e.colorContrast(n[e.lastIndex],a,void 0,o),h=r(d),g=r(s[s.length-2]),b=h-g;let w=1;for(let V=s.length-b-1;V<s.length;V++){const L=r(s[V]),q=V===s.length-1?e.lastIndex:L+w;s[V]=n[q],w++}}o===1&&s.reverse()}static createColorPaletteByContrast(t,e){const s=Ge.createHighResolutionPalette(t),o=a=>{const l=e.stepContrast+e.stepContrast*(1-a.relativeLuminance)*e.stepContrastRamp;return te(l,2)},n=[];let r=e.preserveSource?t:s.swatches[0];n.push(r);do{const a=o(r);r=s.colorContrast(r,a,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const a=o(r);r=s.colorContrast(r,a,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,s,n,-1),e.preserveSource&&this.adjustEnd(o,s,n,1),n}static from(t,e){const s=e===void 0?nd:Object.assign(Object.assign({},nd),e);return new Ge(t,Object.freeze(Ge.createColorPaletteByContrast(t,s)))}}const Dn=Te.create(1,1,1),pl=Te.create(0,0,0),my=Te.create(.5,.5,.5),na=Xi("#0078D4"),by=Te.create(na.r,na.g,na.b);function nu(i,t,e,s,o){const n=h=>h.contrast(Dn)>=o?Dn:pl,r=n(i),a=n(t),l=r.relativeLuminance===a.relativeLuminance?r:n(e),d=n(s);return{rest:r,hover:a,active:l,focus:d}}class rr{constructor(t,e,s,o){this.toColorString=()=>this.cssGradient,this.contrast=Tn.bind(null,this),this.createCSS=this.toColorString,this.color=new At(t,e,s),this.cssGradient=o,this.relativeLuminance=ou(this.color),this.r=t,this.g=e,this.b=s}static fromObject(t,e){return new rr(t.r,t.g,t.b,e)}}const vy=new At(0,0,0),yy=new At(1,1,1);function ru(i,t,e,s,o,n,r,a,l=10,d=!1){const h=i.closestIndexOf(t);a===void 0&&(a=ss(t));function g(et){if(d){const gt=i.closestIndexOf(t),Lt=i.get(gt),Q=et.relativeLuminance<t.relativeLuminance?vy:yy,ne=sy(Xi(et.toColorString()),Xi(Lt.toColorString()),Q).roundToPrecision(2),re=dy(Xi(t.toColorString()),ne);return Te.from(re)}else return et}const b=h+a*e,w=b+a*(s-e),V=b+a*(o-e),L=b+a*(n-e),q=a===-1?0:100-l,J=a===-1?l:100;function nt(et,gt){const Lt=i.get(et);if(gt){const Q=i.get(et+a*r),ne=a===-1?Q:Lt,re=a===-1?Lt:Q,Ns=`linear-gradient(${g(ne).toColorString()} ${q}%, ${g(re).toColorString()} ${J}%)`;return rr.fromObject(ne,Ns)}else return g(Lt)}return{rest:nt(b,!0),hover:nt(w,!0),active:nt(V,!1),focus:nt(L,!0)}}function xy(i,t,e,s,o,n,r,a){const l=i.closestIndexOf(t),d=ss(t),h=l+d*e,g=h+d*(s-e),b=h+d*(o-e),w=h+d*(n-e),V=`calc(100% - ${a})`;function L(q,J){const nt=i.get(q);if(J){const et=i.get(q+d*r),gt=`linear-gradient(${nt.toColorString()} ${V}, ${et.toColorString()} ${V}, ${et.toColorString()})`;return rr.fromObject(nt,gt)}else return nt}return{rest:L(h,!0),hover:L(g,!0),active:L(b,!1),focus:L(w,!0)}}function wy(i,t,e){return i.colorContrast(t,e)}function Ds(i,t,e,s,o,n,r,a){a==null&&(a=ss(t));const l=i.closestIndexOf(i.colorContrast(t,e));return{rest:i.get(l+a*s),hover:i.get(l+a*o),active:i.get(l+a*n),focus:i.get(l+a*r)}}function $y(i,t,e,s,o,n,r,a=void 0,l,d,h,g,b,w=void 0){return To(t)?Ds(i,t,l,d,h,g,b,w):Ds(i,t,e,s,o,n,r,a)}function ky(i,t,e){return i.get(i.closestIndexOf(t)+ss(t)*e)}function Si(i,t,e,s,o,n,r){const a=i.closestIndexOf(t);return r==null&&(r=ss(t)),{rest:i.get(a+r*e),hover:i.get(a+r*s),active:i.get(a+r*o),focus:i.get(a+r*n)}}function fl(i,t,e,s,o,n,r=void 0,a,l,d,h,g=void 0){return To(t)?Si(i,t,a,l,d,h,g):Si(i,t,e,s,o,n,r)}function Cy(i,t){return To(t)?Dn:pl}function Fy(i,t,e){return To(t)?pl:Dn}function Iy(i){return Te.create(i,i,i)}var Sa;(function(i){i[i.LightMode=.98]="LightMode",i[i.DarkMode=.15]="DarkMode"})(Sa||(Sa={}));function So(i,t){return i.closestIndexOf(Iy(t))}function Ty(i,t){return i.get(So(i,t))}function Sy(i,t,e){return i.get(So(i,t)+e)}function au(i,t,e){return i.get(So(i,t)+e*-1)}function Dy(i,t,e){return i.get(So(i,t)+e*-1*2)}function Ry(i,t,e){return i.get(So(i,t)+e*-1*3)}const Ey={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:v}=pt;function D(i){return pt.create({name:i,cssCustomPropertyName:null})}const bn=v("direction").withDefault(vt.ltr),$e=v("disabled-opacity").withDefault(.3),ar=v("base-height-multiplier").withDefault(8),Oy=v("base-horizontal-spacing-multiplier").withDefault(3),Ai=v("density").withDefault(0),A=v("design-unit").withDefault(4),dt=v("control-corner-radius").withDefault(4),ei=v("layer-corner-radius").withDefault(8),z=v("stroke-width").withDefault(1),qt=v("focus-stroke-width").withDefault(2),Oe=v("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),Ay=v("font-weight").withDefault(Ey.Normal);function fi(i){return t=>{const e=i.getValueFor(t),s=Ay.getValueFor(t);if(e.endsWith("px")){const o=Number.parseFloat(e.replace("px",""));if(o<=12)return`"wght" ${s}, "opsz" 8`;if(o>24)return`"wght" ${s}, "opsz" 36`}return`"wght" ${s}, "opsz" 10.5`}}const lr=v("type-ramp-base-font-size").withDefault("14px"),lu=v("type-ramp-base-line-height").withDefault("20px"),Vy=v("type-ramp-base-font-variations").withDefault(fi(lr)),gl=v("type-ramp-minus-1-font-size").withDefault("12px"),ml=v("type-ramp-minus-1-line-height").withDefault("16px"),Ly=v("type-ramp-minus-1-font-variations").withDefault(fi(gl)),bl=v("type-ramp-minus-2-font-size").withDefault("10px"),cu=v("type-ramp-minus-2-line-height").withDefault("14px"),Py=v("type-ramp-minus-2-font-variations").withDefault(fi(bl)),vl=v("type-ramp-plus-1-font-size").withDefault("16px"),du=v("type-ramp-plus-1-line-height").withDefault("22px"),_y=v("type-ramp-plus-1-font-variations").withDefault(fi(vl)),cr=v("type-ramp-plus-2-font-size").withDefault("20px"),hu=v("type-ramp-plus-2-line-height").withDefault("26px"),Hy=v("type-ramp-plus-2-font-variations").withDefault(fi(cr)),yl=v("type-ramp-plus-3-font-size").withDefault("24px"),uu=v("type-ramp-plus-3-line-height").withDefault("32px"),My=v("type-ramp-plus-3-font-variations").withDefault(fi(yl)),xl=v("type-ramp-plus-4-font-size").withDefault("28px"),pu=v("type-ramp-plus-4-line-height").withDefault("36px"),zy=v("type-ramp-plus-4-font-variations").withDefault(fi(xl)),wl=v("type-ramp-plus-5-font-size").withDefault("32px"),fu=v("type-ramp-plus-5-line-height").withDefault("40px"),By=v("type-ramp-plus-5-font-variations").withDefault(fi(wl)),$l=v("type-ramp-plus-6-font-size").withDefault("40px"),gu=v("type-ramp-plus-6-line-height").withDefault("52px"),Ny=v("type-ramp-plus-6-font-variations").withDefault(fi($l)),os=v("base-layer-luminance").withDefault(Sa.LightMode),Da=D("accent-fill-rest-delta").withDefault(0),Ra=D("accent-fill-hover-delta").withDefault(-2),Ea=D("accent-fill-active-delta").withDefault(-5),Oa=D("accent-fill-focus-delta").withDefault(0),mu=D("accent-foreground-rest-delta").withDefault(0),bu=D("accent-foreground-hover-delta").withDefault(3),vu=D("accent-foreground-active-delta").withDefault(-8),yu=D("accent-foreground-focus-delta").withDefault(0),xu=D("neutral-fill-rest-delta").withDefault(-1),wu=D("neutral-fill-hover-delta").withDefault(1),$u=D("neutral-fill-active-delta").withDefault(0),ku=D("neutral-fill-focus-delta").withDefault(0),Cu=D("neutral-fill-input-rest-delta").withDefault(-1),Fu=D("neutral-fill-input-hover-delta").withDefault(1),Iu=D("neutral-fill-input-active-delta").withDefault(0),Tu=D("neutral-fill-input-focus-delta").withDefault(-2),tn=D("neutral-fill-input-alt-rest-delta").withDefault(2),rd=D("neutral-fill-input-alt-hover-delta").withDefault(4),ad=D("neutral-fill-input-alt-active-delta").withDefault(6),ld=D("neutral-fill-input-alt-focus-delta").withDefault(2),Di=D("neutral-fill-layer-rest-delta").withDefault(-2),jy=D("neutral-fill-layer-hover-delta").withDefault(-3),Uy=D("neutral-fill-layer-active-delta").withDefault(-3),en=D("neutral-fill-layer-alt-rest-delta").withDefault(-1),qy=D("neutral-fill-secondary-rest-delta").withDefault(3),Gy=D("neutral-fill-secondary-hover-delta").withDefault(2),Wy=D("neutral-fill-secondary-active-delta").withDefault(1),Xy=D("neutral-fill-secondary-focus-delta").withDefault(3),Su=D("neutral-fill-stealth-rest-delta").withDefault(0),Du=D("neutral-fill-stealth-hover-delta").withDefault(3),Ru=D("neutral-fill-stealth-active-delta").withDefault(2),Eu=D("neutral-fill-stealth-focus-delta").withDefault(0),Yy=D("neutral-fill-strong-rest-delta").withDefault(0),Ou=D("neutral-fill-strong-hover-delta").withDefault(8),Au=D("neutral-fill-strong-active-delta").withDefault(-5),Vu=D("neutral-fill-strong-focus-delta").withDefault(0),Lu=D("neutral-stroke-rest-delta").withDefault(8),Pu=D("neutral-stroke-hover-delta").withDefault(12),_u=D("neutral-stroke-active-delta").withDefault(6),Hu=D("neutral-stroke-focus-delta").withDefault(8),Mu=D("neutral-stroke-control-rest-delta").withDefault(3),zu=D("neutral-stroke-control-hover-delta").withDefault(5),Bu=D("neutral-stroke-control-active-delta").withDefault(5),Nu=D("neutral-stroke-control-focus-delta").withDefault(5),ju=D("neutral-stroke-divider-rest-delta").withDefault(4),cd=D("neutral-stroke-layer-rest-delta").withDefault(3),Qy=D("neutral-stroke-layer-hover-delta").withDefault(3),Zy=D("neutral-stroke-layer-active-delta").withDefault(3),Jy=D("neutral-stroke-strong-hover-delta").withDefault(0),Ky=D("neutral-stroke-strong-active-delta").withDefault(0),t0=D("neutral-stroke-strong-focus-delta").withDefault(0),Uu=v("neutral-base-color").withDefault(my),xt=D("neutral-palette").withDefault(i=>yo.from(Uu.getValueFor(i))),qu=v("accent-base-color").withDefault(by),kl=D("accent-palette").withDefault(i=>yo.from(qu.getValueFor(i))),e0=D("neutral-layer-card-container-recipe").withDefault({evaluate:i=>au(xt.getValueFor(i),os.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-card-container").withDefault(i=>e0.getValueFor(i).evaluate(i));const i0=D("neutral-layer-floating-recipe").withDefault({evaluate:i=>Sy(xt.getValueFor(i),os.getValueFor(i),Di.getValueFor(i))}),Do=v("neutral-layer-floating").withDefault(i=>i0.getValueFor(i).evaluate(i)),s0=D("neutral-layer-1-recipe").withDefault({evaluate:i=>Ty(xt.getValueFor(i),os.getValueFor(i))}),o0=v("neutral-layer-1").withDefault(i=>s0.getValueFor(i).evaluate(i)),n0=D("neutral-layer-2-recipe").withDefault({evaluate:i=>au(xt.getValueFor(i),os.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-2").withDefault(i=>n0.getValueFor(i).evaluate(i));const r0=D("neutral-layer-3-recipe").withDefault({evaluate:i=>Dy(xt.getValueFor(i),os.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-3").withDefault(i=>r0.getValueFor(i).evaluate(i));const a0=D("neutral-layer-4-recipe").withDefault({evaluate:i=>Ry(xt.getValueFor(i),os.getValueFor(i),Di.getValueFor(i))});v("neutral-layer-4").withDefault(i=>a0.getValueFor(i).evaluate(i));const tt=v("fill-color").withDefault(i=>o0.getValueFor(i));var Rn;(function(i){i[i.normal=4.5]="normal",i[i.large=3]="large"})(Rn||(Rn={}));const dr=D("accent-fill-recipe").withDefault({evaluate:(i,t)=>$y(kl.getValueFor(i),t||tt.getValueFor(i),5,Da.getValueFor(i),Ra.getValueFor(i),Ea.getValueFor(i),Oa.getValueFor(i),void 0,8,Da.getValueFor(i),Ra.getValueFor(i),Ea.getValueFor(i),Oa.getValueFor(i),void 0)}),mt=v("accent-fill-rest").withDefault(i=>dr.getValueFor(i).evaluate(i).rest),ze=v("accent-fill-hover").withDefault(i=>dr.getValueFor(i).evaluate(i).hover),Be=v("accent-fill-active").withDefault(i=>dr.getValueFor(i).evaluate(i).active),hr=v("accent-fill-focus").withDefault(i=>dr.getValueFor(i).evaluate(i).focus),ur=D("foreground-on-accent-recipe").withDefault({evaluate:i=>nu(mt.getValueFor(i),ze.getValueFor(i),Be.getValueFor(i),hr.getValueFor(i),Rn.normal)}),Zi=v("foreground-on-accent-rest").withDefault(i=>ur.getValueFor(i).evaluate(i).rest),Gu=v("foreground-on-accent-hover").withDefault(i=>ur.getValueFor(i).evaluate(i).hover),Wu=v("foreground-on-accent-active").withDefault(i=>ur.getValueFor(i).evaluate(i).active);v("foreground-on-accent-focus").withDefault(i=>ur.getValueFor(i).evaluate(i).focus);const pr=D("accent-foreground-recipe").withDefault({evaluate:(i,t)=>Ds(kl.getValueFor(i),t||tt.getValueFor(i),9.5,mu.getValueFor(i),bu.getValueFor(i),vu.getValueFor(i),yu.getValueFor(i))}),Xu=v("accent-foreground-rest").withDefault(i=>pr.getValueFor(i).evaluate(i).rest),Yu=v("accent-foreground-hover").withDefault(i=>pr.getValueFor(i).evaluate(i).hover),Qu=v("accent-foreground-active").withDefault(i=>pr.getValueFor(i).evaluate(i).active);v("accent-foreground-focus").withDefault(i=>pr.getValueFor(i).evaluate(i).focus);const fr=D("accent-stroke-control-recipe").withDefault({evaluate:(i,t)=>ru(xt.getValueFor(i),t||tt.getValueFor(i),-3,-3,-3,-3,10,1,void 0,!0)}),l0=v("accent-stroke-control-rest").withDefault(i=>fr.getValueFor(i).evaluate(i,mt.getValueFor(i)).rest),c0=v("accent-stroke-control-hover").withDefault(i=>fr.getValueFor(i).evaluate(i,ze.getValueFor(i)).hover),d0=v("accent-stroke-control-active").withDefault(i=>fr.getValueFor(i).evaluate(i,Be.getValueFor(i)).active);v("accent-stroke-control-focus").withDefault(i=>fr.getValueFor(i).evaluate(i,hr.getValueFor(i)).focus);const gr=D("neutral-fill-recipe").withDefault({evaluate:(i,t)=>fl(xt.getValueFor(i),t||tt.getValueFor(i),xu.getValueFor(i),wu.getValueFor(i),$u.getValueFor(i),ku.getValueFor(i),void 0,2,3,1,2,void 0)}),Ce=v("neutral-fill-rest").withDefault(i=>gr.getValueFor(i).evaluate(i).rest),dd=v("neutral-fill-hover").withDefault(i=>gr.getValueFor(i).evaluate(i).hover),hd=v("neutral-fill-active").withDefault(i=>gr.getValueFor(i).evaluate(i).active);v("neutral-fill-focus").withDefault(i=>gr.getValueFor(i).evaluate(i).focus);const Vi=D("neutral-fill-input-recipe").withDefault({evaluate:(i,t)=>fl(xt.getValueFor(i),t||tt.getValueFor(i),Cu.getValueFor(i),Fu.getValueFor(i),Iu.getValueFor(i),Tu.getValueFor(i),void 0,2,3,1,0,void 0)}),sn=v("neutral-fill-input-rest").withDefault(i=>Vi.getValueFor(i).evaluate(i).rest),ud=v("neutral-fill-input-hover").withDefault(i=>Vi.getValueFor(i).evaluate(i).hover);v("neutral-fill-input-active").withDefault(i=>Vi.getValueFor(i).evaluate(i).active);const pd=v("neutral-fill-input-focus").withDefault(i=>Vi.getValueFor(i).evaluate(i).focus),mr=D("neutral-fill-input-alt-recipe").withDefault({evaluate:(i,t)=>fl(xt.getValueFor(i),t||tt.getValueFor(i),tn.getValueFor(i),rd.getValueFor(i),ad.getValueFor(i),ld.getValueFor(i),1,tn.getValueFor(i),tn.getValueFor(i)-rd.getValueFor(i),tn.getValueFor(i)-ad.getValueFor(i),ld.getValueFor(i),1)}),Cl=v("neutral-fill-input-alt-rest").withDefault(i=>mr.getValueFor(i).evaluate(i).rest),Fl=v("neutral-fill-input-alt-hover").withDefault(i=>mr.getValueFor(i).evaluate(i).hover),Il=v("neutral-fill-input-alt-active").withDefault(i=>mr.getValueFor(i).evaluate(i).active),Tl=v("neutral-fill-input-alt-focus").withDefault(i=>mr.getValueFor(i).evaluate(i).focus),ns=D("neutral-fill-layer-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),Di.getValueFor(i),jy.getValueFor(i),Uy.getValueFor(i),Di.getValueFor(i),1)}),h0=v("neutral-fill-layer-rest").withDefault(i=>ns.getValueFor(i).evaluate(i).rest);v("neutral-fill-layer-hover").withDefault(i=>ns.getValueFor(i).evaluate(i).hover);v("neutral-fill-layer-active").withDefault(i=>ns.getValueFor(i).evaluate(i).active);const u0=D("neutral-fill-layer-alt-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),en.getValueFor(i),en.getValueFor(i),en.getValueFor(i),en.getValueFor(i))}),p0=v("neutral-fill-layer-alt-rest").withDefault(i=>u0.getValueFor(i).evaluate(i).rest),rs=D("neutral-fill-secondary-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),qy.getValueFor(i),Gy.getValueFor(i),Wy.getValueFor(i),Xy.getValueFor(i))}),Ji=v("neutral-fill-secondary-rest").withDefault(i=>rs.getValueFor(i).evaluate(i).rest),Sl=v("neutral-fill-secondary-hover").withDefault(i=>rs.getValueFor(i).evaluate(i).hover),f0=v("neutral-fill-secondary-active").withDefault(i=>rs.getValueFor(i).evaluate(i).active),g0=v("neutral-fill-secondary-focus").withDefault(i=>rs.getValueFor(i).evaluate(i).focus),Ne=D("neutral-fill-stealth-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),Su.getValueFor(i),Du.getValueFor(i),Ru.getValueFor(i),Eu.getValueFor(i))}),Rs=v("neutral-fill-stealth-rest").withDefault(i=>Ne.getValueFor(i).evaluate(i).rest),Es=v("neutral-fill-stealth-hover").withDefault(i=>Ne.getValueFor(i).evaluate(i).hover),Os=v("neutral-fill-stealth-active").withDefault(i=>Ne.getValueFor(i).evaluate(i).active),m0=v("neutral-fill-stealth-focus").withDefault(i=>Ne.getValueFor(i).evaluate(i).focus),br=D("neutral-fill-strong-recipe").withDefault({evaluate:(i,t)=>Ds(xt.getValueFor(i),t||tt.getValueFor(i),4.5,Yy.getValueFor(i),Ou.getValueFor(i),Au.getValueFor(i),Vu.getValueFor(i))}),Zu=v("neutral-fill-strong-rest").withDefault(i=>br.getValueFor(i).evaluate(i).rest),b0=v("neutral-fill-strong-hover").withDefault(i=>br.getValueFor(i).evaluate(i).hover),v0=v("neutral-fill-strong-active").withDefault(i=>br.getValueFor(i).evaluate(i).active);v("neutral-fill-strong-focus").withDefault(i=>br.getValueFor(i).evaluate(i).focus);const vr=D("neutral-foreground-recipe").withDefault({evaluate:(i,t)=>Ds(xt.getValueFor(i),t||tt.getValueFor(i),16,0,-19,-30,0)}),ht=v("neutral-foreground-rest").withDefault(i=>vr.getValueFor(i).evaluate(i).rest),y0=v("neutral-foreground-hover").withDefault(i=>vr.getValueFor(i).evaluate(i).hover),x0=v("neutral-foreground-active").withDefault(i=>vr.getValueFor(i).evaluate(i).active);v("neutral-foreground-focus").withDefault(i=>vr.getValueFor(i).evaluate(i).focus);const Ro=D("neutral-foreground-hint-recipe").withDefault({evaluate:(i,t)=>wy(xt.getValueFor(i),t||tt.getValueFor(i),4.5)}),As=v("neutral-foreground-hint").withDefault(i=>Ro.getValueFor(i).evaluate(i)),yr=D("neutral-stroke-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),Lu.getValueFor(i),Pu.getValueFor(i),_u.getValueFor(i),Hu.getValueFor(i))}),xo=v("neutral-stroke-rest").withDefault(i=>yr.getValueFor(i).evaluate(i).rest),w0=v("neutral-stroke-hover").withDefault(i=>yr.getValueFor(i).evaluate(i).hover),$0=v("neutral-stroke-active").withDefault(i=>yr.getValueFor(i).evaluate(i).active);v("neutral-stroke-focus").withDefault(i=>yr.getValueFor(i).evaluate(i).focus);const xr=D("neutral-stroke-control-recipe").withDefault({evaluate:(i,t)=>ru(xt.getValueFor(i),t||tt.getValueFor(i),Mu.getValueFor(i),zu.getValueFor(i),Bu.getValueFor(i),Nu.getValueFor(i),5)}),Dl=v("neutral-stroke-control-rest").withDefault(i=>xr.getValueFor(i).evaluate(i).rest),Ju=v("neutral-stroke-control-hover").withDefault(i=>xr.getValueFor(i).evaluate(i).hover),Ku=v("neutral-stroke-control-active").withDefault(i=>xr.getValueFor(i).evaluate(i).active);v("neutral-stroke-control-focus").withDefault(i=>xr.getValueFor(i).evaluate(i).focus);const k0=D("neutral-stroke-divider-recipe").withDefault({evaluate:(i,t)=>ky(xt.getValueFor(i),t||tt.getValueFor(i),ju.getValueFor(i))}),En=v("neutral-stroke-divider-rest").withDefault(i=>k0.getValueFor(i).evaluate(i)),wr=D("neutral-stroke-input-recipe").withDefault({evaluate:(i,t)=>xy(xt.getValueFor(i),t||tt.getValueFor(i),Mu.getValueFor(i),zu.getValueFor(i),Bu.getValueFor(i),Nu.getValueFor(i),20,z.getValueFor(i)+"px")}),fd=v("neutral-stroke-input-rest").withDefault(i=>wr.getValueFor(i).evaluate(i).rest),C0=v("neutral-stroke-input-hover").withDefault(i=>wr.getValueFor(i).evaluate(i).hover);v("neutral-stroke-input-active").withDefault(i=>wr.getValueFor(i).evaluate(i).active);v("neutral-stroke-input-focus").withDefault(i=>wr.getValueFor(i).evaluate(i).focus);const Rl=D("neutral-stroke-layer-recipe").withDefault({evaluate:(i,t)=>Si(xt.getValueFor(i),t||tt.getValueFor(i),cd.getValueFor(i),Qy.getValueFor(i),Zy.getValueFor(i),cd.getValueFor(i))}),ws=v("neutral-stroke-layer-rest").withDefault(i=>Rl.getValueFor(i).evaluate(i).rest);v("neutral-stroke-layer-hover").withDefault(i=>Rl.getValueFor(i).evaluate(i).hover);v("neutral-stroke-layer-active").withDefault(i=>Rl.getValueFor(i).evaluate(i).active);const $r=D("neutral-stroke-strong-recipe").withDefault({evaluate:(i,t)=>Ds(xt.getValueFor(i),t||tt.getValueFor(i),5.5,0,Jy.getValueFor(i),Ky.getValueFor(i),t0.getValueFor(i))}),Hs=v("neutral-stroke-strong-rest").withDefault(i=>$r.getValueFor(i).evaluate(i).rest),El=v("neutral-stroke-strong-hover").withDefault(i=>$r.getValueFor(i).evaluate(i).hover),Ol=v("neutral-stroke-strong-active").withDefault(i=>$r.getValueFor(i).evaluate(i).active);v("neutral-stroke-strong-focus").withDefault(i=>$r.getValueFor(i).evaluate(i).focus);const F0=D("focus-stroke-outer-recipe").withDefault({evaluate:i=>Cy(xt.getValueFor(i),tt.getValueFor(i))}),kr=v("focus-stroke-outer").withDefault(i=>F0.getValueFor(i).evaluate(i)),I0=D("focus-stroke-inner-recipe").withDefault({evaluate:i=>Fy(kl.getValueFor(i),tt.getValueFor(i),kr.getValueFor(i))}),T0=v("focus-stroke-inner").withDefault(i=>I0.getValueFor(i).evaluate(i)),Cr=D("foreground-on-accent-large-recipe").withDefault({evaluate:i=>nu(mt.getValueFor(i),ze.getValueFor(i),Be.getValueFor(i),hr.getValueFor(i),Rn.large)});v("foreground-on-accent-rest-large").withDefault(i=>Cr.getValueFor(i).evaluate(i).rest);v("foreground-on-accent-hover-large").withDefault(i=>Cr.getValueFor(i).evaluate(i,ze.getValueFor(i)).hover);v("foreground-on-accent-active-large").withDefault(i=>Cr.getValueFor(i).evaluate(i,Be.getValueFor(i)).active);v("foreground-on-accent-focus-large").withDefault(i=>Cr.getValueFor(i).evaluate(i,hr.getValueFor(i)).focus);const S0=v("neutral-fill-inverse-rest-delta").withDefault(0),D0=v("neutral-fill-inverse-hover-delta").withDefault(-3),R0=v("neutral-fill-inverse-active-delta").withDefault(7),E0=v("neutral-fill-inverse-focus-delta").withDefault(0);function O0(i,t,e,s,o,n){const r=ss(t),a=i.closestIndexOf(i.colorContrast(t,14)),l=a+r*Math.abs(e-s),d=r===1?e<s:r*e>r*s;let h,g;return d?(h=a,g=l):(h=l,g=a),{rest:i.get(h),hover:i.get(g),active:i.get(h+r*o),focus:i.get(h+r*n)}}const Fr=D("neutral-fill-inverse-recipe").withDefault({evaluate:(i,t)=>O0(xt.getValueFor(i),t||tt.getValueFor(i),S0.getValueFor(i),D0.getValueFor(i),R0.getValueFor(i),E0.getValueFor(i))});v("neutral-fill-inverse-rest").withDefault(i=>Fr.getValueFor(i).evaluate(i).rest);v("neutral-fill-inverse-hover").withDefault(i=>Fr.getValueFor(i).evaluate(i).hover);v("neutral-fill-inverse-active").withDefault(i=>Fr.getValueFor(i).evaluate(i).active);v("neutral-fill-inverse-focus").withDefault(i=>Fr.getValueFor(i).evaluate(i).focus);const Rt=be`
  font-family: ${Oe};
  font-size: ${lr};
  line-height: ${lu};
  font-weight: initial;
  font-variation-settings: ${Vy};
`,tp=be`
  font-family: ${Oe};
  font-size: ${gl};
  line-height: ${ml};
  font-weight: initial;
  font-variation-settings: ${Ly};
`;be`
  font-family: ${Oe};
  font-size: ${bl};
  line-height: ${cu};
  font-weight: initial;
  font-variation-settings: ${Py};
`;be`
  font-family: ${Oe};
  font-size: ${vl};
  line-height: ${du};
  font-weight: initial;
  font-variation-settings: ${_y};
`;be`
  font-family: ${Oe};
  font-size: ${cr};
  line-height: ${hu};
  font-weight: initial;
  font-variation-settings: ${Hy};
`;be`
  font-family: ${Oe};
  font-size: ${yl};
  line-height: ${uu};
  font-weight: initial;
  font-variation-settings: ${My};
`;be`
  font-family: ${Oe};
  font-size: ${xl};
  line-height: ${pu};
  font-weight: initial;
  font-variation-settings: ${zy};
`;be`
  font-family: ${Oe};
  font-size: ${wl};
  line-height: ${fu};
  font-weight: initial;
  font-variation-settings: ${By};
`;be`
  font-family: ${Oe};
  font-size: ${$l};
  line-height: ${gu};
  font-weight: initial;
  font-variation-settings: ${Ny};
`;const A0=(i,t)=>C`
    ${ot("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${Rt}
      color: ${ht};
      gap: calc(${A} * 1px);
    }
  `,Ae=be`
  outline: calc(${qt} * 1px) solid ${kr};
  outline-offset: calc(${qt} * -1px);
`,Eo=be`
  outline: calc(${qt} * 1px) solid ${kr};
  outline-offset: calc(${z} * 1px);
`,it=be`(${ar} + ${Ai}) * ${A}`,V0=pt.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault(i=>{const t=ns.getValueFor(i);return Ne.getValueFor(i).evaluate(i,t.evaluate(i).rest).rest}),L0=pt.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault(i=>{const t=ns.getValueFor(i);return Ne.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),P0=pt.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault(i=>{const t=ns.getValueFor(i);return Ne.getValueFor(i).evaluate(i,t.evaluate(i).rest).active}),_0=(i,t)=>C`
    ${ot("flex")} :host {
      box-sizing: border-box;
      ${Rt};
      flex-direction: column;
      background: ${h0};
      color: ${ht};
      border: calc(${z} * 1px) solid ${ws};
      border-radius: calc(${ei} * 1px);
    }

    .region {
      display: none;
      padding: calc(${A} * 2 * 1px);
      background: ${p0};
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

    .button:${X}::before {
      ${Ae}
      border-radius: calc(${ei} * 1px);
    }

    :host(.expanded) .button:${X}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${z} * 1px) solid ${ws};
      border-bottom-left-radius: calc((${ei} - ${z}) * 1px);
      border-bottom-right-radius: calc((${ei} - ${z}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${V0};
      border-radius: calc(${dt} * 1px);
      fill: currentcolor;
      width: calc(${it} * 1px);
      height: calc(${it} * 1px);
      margin: calc(${A} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${L0};
    }

    .heading:active .icon {
      background: ${P0};
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
        .button:${X}::before {
          outline-color: ${f.Highlight};
        }
        .icon {
          fill: ${f.ButtonText};
        }
      `)),H0=Yi.compose({baseName:"accordion-item",template:Em,styles:_0,collapsedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,expandedIcon:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
  `}),M0=ll.compose({baseName:"accordion",template:qm,styles:A0});function E(i,t,e,s){var o=arguments.length,n=o<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,e,s);else for(var a=i.length-1;a>=0;a--)(r=i[a])&&(n=(o<3?r(n):o>3?r(t,e,n):r(t,e))||n);return o>3&&n&&Object.defineProperty(t,e,n),n}class Ms{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&bn.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new z0(this.ltr,this.rtl,t),s=bn.getValueFor(t);bn.subscribe(e),e.attach(s),this.cache.set(t,e)}}class z0{constructor(t,e,s){this.ltr=t,this.rtl=e,this.source=s,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const as=pt.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(i,t,e)=>{let s=.12,o=.14;t>16&&(s=.2,o=.24);const n=`0 0 2px rgba(0, 0, 0, ${s})`,r=`0 calc(${t} * 0.5px) calc((${t} * 1px)) rgba(0, 0, 0, ${o})`;return`${n}, ${r}`}}),B0=pt.create("elevation-shadow-card-rest-size").withDefault(4),N0=pt.create("elevation-shadow-card-hover-size").withDefault(8),j0=pt.create("elevation-shadow-card-active-size").withDefault(0),U0=pt.create("elevation-shadow-card-focus-size").withDefault(8),q0=pt.create("elevation-shadow-card-rest").withDefault(i=>as.getValueFor(i).evaluate(i,B0.getValueFor(i)));pt.create("elevation-shadow-card-hover").withDefault(i=>as.getValueFor(i).evaluate(i,N0.getValueFor(i)));pt.create("elevation-shadow-card-active").withDefault(i=>as.getValueFor(i).evaluate(i,j0.getValueFor(i)));pt.create("elevation-shadow-card-focus").withDefault(i=>as.getValueFor(i).evaluate(i,U0.getValueFor(i)));const G0=pt.create("elevation-shadow-tooltip-size").withDefault(16),W0=pt.create("elevation-shadow-tooltip").withDefault(i=>as.getValueFor(i).evaluate(i,G0.getValueFor(i))),X0=pt.create("elevation-shadow-flyout-size").withDefault(32),ep=pt.create("elevation-shadow-flyout").withDefault(i=>as.getValueFor(i).evaluate(i,X0.getValueFor(i))),Y0=pt.create("elevation-shadow-dialog-size").withDefault(128),Q0=pt.create("elevation-shadow-dialog").withDefault(i=>as.getValueFor(i).evaluate(i,Y0.getValueFor(i))),ip=(i,t,e,s="[disabled]")=>C`
    ${ot("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Rt}
      height: calc(${it} * 1px);
      min-width: calc(${it} * 1px);
      color: ${ht};
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

    .control:${X} {
      ${Ae}
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
  `,Al=(i,t,e,s="[disabled]")=>C`
    .control {
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${Dl};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${dd}, ${dd}),
        border-box ${Ju};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${hd}, ${hd}),
        border-box ${Ku};
    }

    :host(${s}) .control {
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${xo};
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

        .control:${X} {
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
    `)),sp=(i,t,e,s="[disabled]")=>C`
    .control {
      background: padding-box linear-gradient(${mt}, ${mt}),
        border-box ${l0};
      color: ${Zi};
    }

    :host(${e}:hover) .control {
      background: padding-box linear-gradient(${ze}, ${ze}),
        border-box ${c0};
      color: ${Gu};
    }

    :host(${e}:active) .control {
      background: padding-box linear-gradient(${Be}, ${Be}),
        border-box ${d0};
      color: ${Wu};
    }

    :host(${s}) .control {
      background: ${mt};
    }

    .control:${X} {
      box-shadow: 0 0 0 calc(${qt} * 1px) ${T0} inset !important;
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

        .control:${X} {
          outline-color: ${f.CanvasText};
          box-shadow: 0 0 0 calc(${qt} * 1px) ${f.HighlightText} inset !important;
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
      `)),Z0=(i,t,e,s="[disabled]")=>C`
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
      color: ${Xu};
      text-decoration: underline 1px;
    }

    :host(${e}:hover) .control {
      color: ${Yu};
      text-decoration: none;
    }

    :host(${e}:active) .control {
      color: ${Qu};
      text-decoration: none;
    }

    .control:${X} {
      ${Eo}
    }
  `.withBehaviors(st(C`
        :host(${e}) .control {
          color: ${f.LinkText};
        }

        :host(${e}:hover) .control,
        :host(${e}:active) .control {
          color: ${f.CanvasText};
        }

        .control:${X} {
          outline-color: ${f.CanvasText};
        }
      `)),op=(i,t,e,s="[disabled]")=>C`
    :host {
      color: ${Xu};
    }

    .control {
      background: ${Rs};
    }

    :host(${e}:hover) .control {
      background: ${Es};
      color: ${Yu};
    }

    :host(${e}:active) .control {
      background: ${Os};
      color: ${Qu};
    }

    :host(${s}) .control {
      background: ${Rs};
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

        .control:${X} {
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
      `)),np=(i,t,e,s="[disabled]")=>C`
    .control {
      background: transparent !important;
      border-color: ${xo};
    }

    :host(${e}:hover) .control {
      border-color: ${w0};
    }

    :host(${e}:active) .control {
      border-color: ${$0};
    }

    :host(${s}) .control {
      background: transparent !important;
      border-color: ${xo};
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

        .control:${X} {
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
      `)),Vl=(i,t,e,s="[disabled]")=>C`
    .control {
      background: ${Rs};
    }

    :host(${e}:hover) .control {
      background: ${Es};
    }

    :host(${e}:active) .control {
      background: ${Os};
    }

    :host(${s}) .control {
      background: ${Rs};
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
        
        .control:${X} {
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
      `)),J0=pt.create("input-placeholder-rest").withDefault(i=>{const t=Vi.getValueFor(i);return Ro.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),K0=pt.create("input-placeholder-hover").withDefault(i=>{const t=Vi.getValueFor(i);return Ro.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),tx=pt.create("input-filled-placeholder-rest").withDefault(i=>{const t=rs.getValueFor(i);return Ro.getValueFor(i).evaluate(i,t.evaluate(i).rest)}),ex=pt.create("input-filled-placeholder-hover").withDefault(i=>{const t=rs.getValueFor(i);return Ro.getValueFor(i).evaluate(i,t.evaluate(i).hover)}),Ir=(i,t,e)=>C`
  :host {
    ${Rt}
    color: ${ht};
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
    color: ${ht};
    cursor: pointer;
    ${Rt}
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
    cursor: ${Ee};
  }

  :host([disabled]) {
    opacity: ${$e};
  }
`,Oo=(i,t,e)=>C`
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
      height: calc(${qt} * 1px);
      bottom: 0;
      border-bottom: calc(${qt} * 1px) solid ${mt};
      border-bottom-left-radius: calc(${dt} * 1px);
      border-bottom-right-radius: calc(${dt} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Ao=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
  ${e} {
    background: padding-box linear-gradient(${sn}, ${sn}),
      border-box ${fd};
  }

  :host(${s}:hover) ${e} {
    background: padding-box linear-gradient(${ud}, ${ud}),
      border-box ${C0};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: padding-box linear-gradient(${pd}, ${pd}),
      border-box ${fd};
  }
  
  :host([disabled]) ${e} {
    background: padding-box linear-gradient(${sn}, ${sn}),
      border-box ${xo};
  }

  .control::placeholder {
    color: ${J0};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${K0};
  }
`,zs=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
  ${e} {
    background: ${Ji};
  }

  :host(${s}:hover) ${e} {
    background: ${Sl};
  }

  :host(:not([disabled]):focus-within) ${e} {
    background: ${g0};
  }

  :host([disabled]) ${e} {
    background: ${Ji};
  }

  .control::placeholder {
    color: ${tx};
  }

  :host(${s}:hover) .control::placeholder {
    color: ${ex};
  }
`,Bs=(i,t,e,s=":not([disabled]):not(:focus-within)")=>C`
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
    ${Ae}
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
`;function Ft(i,t){return new Kv("appearance",i,t)}const ds="[href]",ix=(i,t)=>ip().withBehaviors(Ft("neutral",Al(i,t,ds)),Ft("accent",sp(i,t,ds)),Ft("hypertext",Z0(i,t,ds)),Ft("lightweight",op(i,t,ds)),Ft("outline",np(i,t,ds)),Ft("stealth",Vl(i,t,ds)));class rp extends ve{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){var t,e;const s=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);s.length===1&&s[0]instanceof SVGElement?(t=this.control)===null||t===void 0||t.classList.add("icon-only"):(e=this.control)===null||e===void 0||e.classList.remove("icon-only")}}E([u],rp.prototype,"appearance",void 0);const sx=rp.compose({baseName:"anchor",baseClass:ve,template:Nh,styles:ix,shadowOptions:{delegatesFocus:!0}}),ox=(i,t)=>C`
  :host {
    contain: layout;
    display: block;
  }
`,nx=j.compose({baseName:"anchored-region",template:ib,styles:ox}),rx=(i,t)=>C`
    ${ot("inline-block")} :host {
      box-sizing: border-box;
      ${tp};
    }

    .control {
      border-radius: calc(${dt} * 1px);
      padding: calc(((${A} * 0.5) - ${z}) * 1px) calc((${A} - ${z}) * 1px);
      border: calc(${z} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${ht};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${mt};
      color: ${Zi};
    }

    :host(.neutral) .control {
      background: ${Ji};
      color: ${ht};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${ml} - calc(${A} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class ap extends ko{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&G.queueUpdate(()=>{this.classList.add(e),this.classList.remove(t)})}}E([u({mode:"fromView"})],ap.prototype,"appearance",void 0);const ax=ap.compose({baseName:"badge",baseClass:ko,template:ob,styles:rx}),lx=(i,t)=>C`
  ${ot("inline-block")} :host {
    box-sizing: border-box;
    ${Rt};
  }

  .list {
    display: flex;
  }
`,cx=jh.compose({baseName:"breadcrumb",template:rb,styles:lx}),dx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      background: transparent;
      color: ${ht};
      fill: currentcolor;
      box-sizing: border-box;
      ${Rt};
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
      color: ${y0};
    }

    .control:active {
      color: ${x0};
    }

    .control:${X} {
      ${Eo}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${ht};
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
        .control:${X} {
          outline-color: ${f.LinkText};
        }
      `)),hx=mo.compose({baseName:"breadcrumb-item",template:nb,styles:dx,shadowOptions:{delegatesFocus:!0},separator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Ni=":not([disabled])",bi="[disabled]",ux=(i,t)=>C`
    :host(${Ni}) .control {
      cursor: pointer;
    }

    :host(${bi}) .control {
      cursor: ${Ee};
    }

    @media (forced-colors: none) {
      :host(${bi}) .control {
        opacity: ${$e};
      }
    }

    ${ip(i,t,Ni,bi)}
  `.withBehaviors(Ft("neutral",Al(i,t,Ni,bi)),Ft("accent",sp(i,t,Ni,bi)),Ft("lightweight",op(i,t,Ni,bi)),Ft("outline",np(i,t,Ni,bi)),Ft("stealth",Vl(i,t,Ni,bi)));class lp extends ye{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}E([u],lp.prototype,"appearance",void 0);const px=lp.compose({baseName:"button",baseClass:ye,template:ab,styles:ux,shadowOptions:{delegatesFocus:!0}}),fx=C`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,gx=C`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`,mx=(i,t)=>C`
${ot("inline-block")} :host {
  --calendar-cell-size: calc((${ar} + 2 + ${Ai}) * ${A} * 1px);
  --calendar-gap: 2px;
  ${Rt}
  color: ${ht};
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
  color: ${As};
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
  color: ${mt};
  border: 1px solid ${mt};
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
  color: ${Zi};
}

.today .date {
  color: ${Zi};
  background: ${mt};
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
      `),new Ms(fx,gx));class cp extends Re{constructor(){super(...arguments),this.readonly=!0}}E([u({converter:$o})],cp.prototype,"readonly",void 0);const bx=cp.compose({baseName:"calendar",template:Fb,styles:mx,title:yb}),vx=(i,t)=>C`
    ${ot("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${tt};
      color: ${ht};
      border: calc(${z} * 1px) solid ${ws};
      border-radius: calc(${ei} * 1px);
      box-shadow: ${q0};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(st(C`
        :host {
          background: ${f.Canvas};
          color: ${f.CanvasText};
        }
      `));class Ll extends Uh{cardFillColorChanged(t,e){if(e){const s=Xi(e);s!==null&&(this.neutralPaletteSource=e,tt.setValueFor(this,Te.create(s.r,s.g,s.b)))}}neutralPaletteSourceChanged(t,e){if(e){const s=Xi(e),o=Te.create(s.r,s.g,s.b);xt.setValueFor(this,yo.create(o))}}handleChange(t,e){this.cardFillColor||tt.setValueFor(this,s=>ns.getValueFor(s).evaluate(s,tt.getValueFor(t)).rest)}connectedCallback(){super.connectedCallback();const t=In(this);if(t){const e=U.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}E([u({attribute:"card-fill-color",mode:"fromView"})],Ll.prototype,"cardFillColor",void 0);E([u({attribute:"neutral-palette-source",mode:"fromView"})],Ll.prototype,"neutralPaletteSource",void 0);const yx=Ll.compose({baseName:"card",baseClass:Uh,template:Ib,styles:vx}),xx=(i,t)=>C`
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
      border: calc(${z} * 1px) solid ${Hs};
      background: ${Cl};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Rt}
      color: ${ht};
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
      fill: ${ht};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${Zi};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Fl};
      border-color: ${El};
    }

    :host(:not(.disabled):active) .control {
      background: ${Il};
      border-color: ${Ol};
    }

    :host(:${X}) .control {
      background: ${Tl};
      ${Eo}
    }

    :host(.checked) .control {
      background: ${mt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Be};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ee};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$e};
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
        :host(:${X}) .control {
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
      `)),wx=Zn.compose({baseName:"checkbox",template:Tb,styles:xx,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),gd=".control",on=":not([disabled]):not([open])",md="[disabled]",dp=(i,t)=>C`
    ${ot("inline-flex")}
    
    :host {
      border-radius: calc(${dt} * 1px);
      box-sizing: border-box;
      color: ${ht};
      fill: currentcolor;
      font-family: ${Oe};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${ep};
      background: ${tt};
      border-radius: calc(${ei} * 1px);
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
      ${Rt}
      min-height: 100%;
      padding: 0 calc(${A} * 2.25px);
      width: 100%;
    }

    :host(:${X}) {
      ${Ae}
    }

    :host([disabled]) .control {
      cursor: ${Ee};
      opacity: ${$e};
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
  `,$x=(i,t)=>C`
    :host([open]) .listbox {
      background: ${f.ButtonFace};
      border-color: ${f.CanvasText};
    }
  `,kx=(i,t)=>dp().withBehaviors(Ft("outline",Al(i,t,on,md)),Ft("filled",zs(i,t,gd,on).withBehaviors(st(Bs(i,t,gd,on)))),Ft("stealth",Vl(i,t,on,md)),st($x())),ra=".control",aa=":not([disabled]):not([open])",Cx=(i,t)=>C`
    ${dp()}

    ${Oo()}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${Ee};
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
      ${Rt}
      height: calc(100% - ${z} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Ft("outline",Ao(i,t,ra,aa)),Ft("filled",zs(i,t,ra,aa)),st(Bs(i,t,ra,aa)));class hp extends ci{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tt.setValueFor(this.listbox,Do)}}E([u({mode:"fromView"})],hp.prototype,"appearance",void 0);const Fx=hp.compose({baseName:"combobox",baseClass:ci,shadowOptions:{delegatesFocus:!0},template:Ob,styles:Cx,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),Ix=(i,t)=>C`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,Tx=(i,t)=>C`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${z} * 1px) solid ${En};
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
      `)),Sx=(i,t)=>C`
    :host {
      padding: calc((${A} + ${qt} - ${z}) * 1px) calc(((${A} * 3) + ${qt} - ${z}) * 1px);
      color: ${ht};
      box-sizing: border-box;
      ${Rt}
      border: transparent calc(${z} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${dt} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${X}) {
      ${Ae}
    }
  `.withBehaviors(st(C`
        :host {
          forced-color-adjust: none;
          background: ${f.Field};
          color: ${f.FieldText};
        }

        :host(:${X}) {
          outline-color: ${f.FieldText};
        }
      `)),Dx=li.compose({baseName:"data-grid-cell",template:vb,styles:Sx}),Rx=jt.compose({baseName:"data-grid-row",template:bb,styles:Tx}),Ex=Ht.compose({baseName:"data-grid",template:ub,styles:Ix}),Pl={toView(i){return i==null?null:i==null?void 0:i.toColorString()},fromView(i){if(i==null)return null;const t=Xi(i);return t?Te.create(t.r,t.g,t.b):null}},bd=C`
  :host {
    background-color: ${tt};
    color: ${ht};
  }
`.withBehaviors(st(C`
      :host {
        background-color: ${f.Canvas};
        box-shadow: 0 0 0 1px ${f.CanvasText};
        color: ${f.CanvasText};
      }
    `));function M(i){return(t,e)=>{t[e+"Changed"]=function(s,o){o!=null?i.setValueFor(this,o):i.deleteValueFor(this)}}}class H extends W{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};U.getNotifier(this).subscribe(t,"fillColor"),U.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){!this.noPaint&&(this.fillColor!==void 0||this.baseLayerLuminance)?this.$fastController.addStyles(bd):this.$fastController.removeStyles(bd)}}E([u({attribute:"no-paint",mode:"boolean"})],H.prototype,"noPaint",void 0);E([u({attribute:"fill-color",converter:Pl,mode:"fromView"}),M(tt)],H.prototype,"fillColor",void 0);E([u({attribute:"accent-base-color",converter:Pl,mode:"fromView"}),M(qu)],H.prototype,"accentBaseColor",void 0);E([u({attribute:"neutral-base-color",converter:Pl,mode:"fromView"}),M(Uu)],H.prototype,"neutralBaseColor",void 0);E([u({converter:P}),M(Ai)],H.prototype,"density",void 0);E([u({attribute:"design-unit",converter:P}),M(A)],H.prototype,"designUnit",void 0);E([u({attribute:"direction"}),M(bn)],H.prototype,"direction",void 0);E([u({attribute:"base-height-multiplier",converter:P}),M(ar)],H.prototype,"baseHeightMultiplier",void 0);E([u({attribute:"base-horizontal-spacing-multiplier",converter:P}),M(Oy)],H.prototype,"baseHorizontalSpacingMultiplier",void 0);E([u({attribute:"control-corner-radius",converter:P}),M(dt)],H.prototype,"controlCornerRadius",void 0);E([u({attribute:"layer-corner-radius",converter:P}),M(ei)],H.prototype,"layerCornerRadius",void 0);E([u({attribute:"stroke-width",converter:P}),M(z)],H.prototype,"strokeWidth",void 0);E([u({attribute:"focus-stroke-width",converter:P}),M(qt)],H.prototype,"focusStrokeWidth",void 0);E([u({attribute:"disabled-opacity",converter:P}),M($e)],H.prototype,"disabledOpacity",void 0);E([u({attribute:"type-ramp-minus-2-font-size"}),M(bl)],H.prototype,"typeRampMinus2FontSize",void 0);E([u({attribute:"type-ramp-minus-2-line-height"}),M(cu)],H.prototype,"typeRampMinus2LineHeight",void 0);E([u({attribute:"type-ramp-minus-1-font-size"}),M(gl)],H.prototype,"typeRampMinus1FontSize",void 0);E([u({attribute:"type-ramp-minus-1-line-height"}),M(ml)],H.prototype,"typeRampMinus1LineHeight",void 0);E([u({attribute:"type-ramp-base-font-size"}),M(lr)],H.prototype,"typeRampBaseFontSize",void 0);E([u({attribute:"type-ramp-base-line-height"}),M(lu)],H.prototype,"typeRampBaseLineHeight",void 0);E([u({attribute:"type-ramp-plus-1-font-size"}),M(vl)],H.prototype,"typeRampPlus1FontSize",void 0);E([u({attribute:"type-ramp-plus-1-line-height"}),M(du)],H.prototype,"typeRampPlus1LineHeight",void 0);E([u({attribute:"type-ramp-plus-2-font-size"}),M(cr)],H.prototype,"typeRampPlus2FontSize",void 0);E([u({attribute:"type-ramp-plus-2-line-height"}),M(hu)],H.prototype,"typeRampPlus2LineHeight",void 0);E([u({attribute:"type-ramp-plus-3-font-size"}),M(yl)],H.prototype,"typeRampPlus3FontSize",void 0);E([u({attribute:"type-ramp-plus-3-line-height"}),M(uu)],H.prototype,"typeRampPlus3LineHeight",void 0);E([u({attribute:"type-ramp-plus-4-font-size"}),M(xl)],H.prototype,"typeRampPlus4FontSize",void 0);E([u({attribute:"type-ramp-plus-4-line-height"}),M(pu)],H.prototype,"typeRampPlus4LineHeight",void 0);E([u({attribute:"type-ramp-plus-5-font-size"}),M(wl)],H.prototype,"typeRampPlus5FontSize",void 0);E([u({attribute:"type-ramp-plus-5-line-height"}),M(fu)],H.prototype,"typeRampPlus5LineHeight",void 0);E([u({attribute:"type-ramp-plus-6-font-size"}),M($l)],H.prototype,"typeRampPlus6FontSize",void 0);E([u({attribute:"type-ramp-plus-6-line-height"}),M(gu)],H.prototype,"typeRampPlus6LineHeight",void 0);E([u({attribute:"accent-fill-rest-delta",converter:P}),M(Da)],H.prototype,"accentFillRestDelta",void 0);E([u({attribute:"accent-fill-hover-delta",converter:P}),M(Ra)],H.prototype,"accentFillHoverDelta",void 0);E([u({attribute:"accent-fill-active-delta",converter:P}),M(Ea)],H.prototype,"accentFillActiveDelta",void 0);E([u({attribute:"accent-fill-focus-delta",converter:P}),M(Oa)],H.prototype,"accentFillFocusDelta",void 0);E([u({attribute:"accent-foreground-rest-delta",converter:P}),M(mu)],H.prototype,"accentForegroundRestDelta",void 0);E([u({attribute:"accent-foreground-hover-delta",converter:P}),M(bu)],H.prototype,"accentForegroundHoverDelta",void 0);E([u({attribute:"accent-foreground-active-delta",converter:P}),M(vu)],H.prototype,"accentForegroundActiveDelta",void 0);E([u({attribute:"accent-foreground-focus-delta",converter:P}),M(yu)],H.prototype,"accentForegroundFocusDelta",void 0);E([u({attribute:"neutral-fill-rest-delta",converter:P}),M(xu)],H.prototype,"neutralFillRestDelta",void 0);E([u({attribute:"neutral-fill-hover-delta",converter:P}),M(wu)],H.prototype,"neutralFillHoverDelta",void 0);E([u({attribute:"neutral-fill-active-delta",converter:P}),M($u)],H.prototype,"neutralFillActiveDelta",void 0);E([u({attribute:"neutral-fill-focus-delta",converter:P}),M(ku)],H.prototype,"neutralFillFocusDelta",void 0);E([u({attribute:"neutral-fill-input-rest-delta",converter:P}),M(Cu)],H.prototype,"neutralFillInputRestDelta",void 0);E([u({attribute:"neutral-fill-input-hover-delta",converter:P}),M(Fu)],H.prototype,"neutralFillInputHoverDelta",void 0);E([u({attribute:"neutral-fill-input-active-delta",converter:P}),M(Iu)],H.prototype,"neutralFillInputActiveDelta",void 0);E([u({attribute:"neutral-fill-input-focus-delta",converter:P}),M(Tu)],H.prototype,"neutralFillInputFocusDelta",void 0);E([u({attribute:"neutral-fill-layer-rest-delta",converter:P}),M(Di)],H.prototype,"neutralFillLayerRestDelta",void 0);E([u({attribute:"neutral-fill-stealth-rest-delta",converter:P}),M(Su)],H.prototype,"neutralFillStealthRestDelta",void 0);E([u({attribute:"neutral-fill-stealth-hover-delta",converter:P}),M(Du)],H.prototype,"neutralFillStealthHoverDelta",void 0);E([u({attribute:"neutral-fill-stealth-active-delta",converter:P}),M(Ru)],H.prototype,"neutralFillStealthActiveDelta",void 0);E([u({attribute:"neutral-fill-stealth-focus-delta",converter:P}),M(Eu)],H.prototype,"neutralFillStealthFocusDelta",void 0);E([u({attribute:"neutral-fill-strong-hover-delta",converter:P}),M(Ou)],H.prototype,"neutralFillStrongHoverDelta",void 0);E([u({attribute:"neutral-fill-strong-active-delta",converter:P}),M(Au)],H.prototype,"neutralFillStrongActiveDelta",void 0);E([u({attribute:"neutral-fill-strong-focus-delta",converter:P}),M(Vu)],H.prototype,"neutralFillStrongFocusDelta",void 0);E([u({attribute:"base-layer-luminance",converter:P}),M(os)],H.prototype,"baseLayerLuminance",void 0);E([u({attribute:"neutral-stroke-divider-rest-delta",converter:P}),M(ju)],H.prototype,"neutralStrokeDividerRestDelta",void 0);E([u({attribute:"neutral-stroke-rest-delta",converter:P}),M(Lu)],H.prototype,"neutralStrokeRestDelta",void 0);E([u({attribute:"neutral-stroke-hover-delta",converter:P}),M(Pu)],H.prototype,"neutralStrokeHoverDelta",void 0);E([u({attribute:"neutral-stroke-active-delta",converter:P}),M(_u)],H.prototype,"neutralStrokeActiveDelta",void 0);E([u({attribute:"neutral-stroke-focus-delta",converter:P}),M(Hu)],H.prototype,"neutralStrokeFocusDelta",void 0);const Ox=H.compose({baseName:"design-system-provider",template:I` <slot></slot> `,styles:C`
    ${ot("block")}
  `}),Ax=(i,t)=>C`
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
    box-shadow: ${Q0};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ei} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${tt};
    z-index: 1;
    border: calc(${z} * 1px) solid transparent;
  }
`,Vx=Ie.compose({baseName:"dialog",template:Gb,styles:Ax}),Lx=(i,t)=>C`
    ${ot("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${z} * 1px) solid ${En};
    }

    :host([orientation="vertical"]) {
      border: none;
      height: 100%;
      margin: 0 calc(${A} * 1px);
      border-left: calc(${z} * 1px) solid ${En};
  }
  `,Px=Kn.compose({baseName:"divider",template:nv,styles:Lx}),_x=(i,t)=>C`
    ${ot("inline-flex")} :host {
      height: calc((${it} + ${A}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${Zu};
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${Dl};
      box-sizing: border-box;
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${dt} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${$e};
      cursor: ${Ee};
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
      color: ${b0};
    }

    :host(:not(.disabled):active) {
      color: ${v0};
    }

    :host(:${X}) {
      ${Ae}
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
        :host(:${X}) {
          forced-color-adjust: none;
          outline-color: ${f.Highlight};
        }
      `)),Hx=tr.compose({baseName:"flipper",template:av,styles:_x,next:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>
    </svg>
  `,previous:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>
    </svg>
  `}),Mx=C`
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
`,zx=C`
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
`,Bx=C`
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
`.withBehaviors(new Ms(Mx,zx)),Nx=(i,t)=>C`
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
`;class jx extends di{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(Bx)}}const Ux=jx.compose({baseName:"horizontal-scroll",baseClass:di,template:Fv,styles:Nx,nextFlipper:I`
    <fluent-flipper @click="${i=>i.scrollToNext()}" aria-hidden="${i=>i.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:I`
    <fluent-flipper
      @click="${i=>i.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${i=>i.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),qx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      border: calc(${z} * 1px) solid ${xo};
      border-radius: calc(${dt} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${A} * 1px) 0;
    }

    ::slotted(${i.tagFor(Je)}) {
      margin: 0 calc(${A} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${Ae}
    }
  `;class Gx extends pe{}const Wx=Gx.compose({baseName:"listbox",template:cv,styles:qx}),Xx=(i,t)=>C`
    ${ot("inline-flex")} :host {
      position: relative;
      ${Rt}
      background: ${Rs};
      border-radius: calc(${dt} * 1px);
      border: calc(${z} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${ht};
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
      left: calc((${qt} - ${z}) * 1px);
      top: calc((${it} / 4) - ${qt} * 1px);
      width: 3px;
      height: calc((${it} / 2) * 1px);
      background: transparent;
      border-radius: calc(${dt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Es};
    }

    :host(:not([disabled]):active) {
      background: ${Os};
    }

    :host(:not([disabled]):active)::before {
      background: ${mt};
      height: calc(((${it} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${mt};
    }

    :host(:${X}) {
      ${Ae}
      background: ${m0};
    }

    :host([aria-selected='true']) {
      background: ${Ji};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${Sl};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${f0};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Es};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Os};
    }

    :host([disabled]) {
      cursor: ${Ee};
      opacity: ${$e};
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
  `.withBehaviors(new Ms(null,C`
      :host::before {
        right: calc((${qt} - ${z}) * 1px);
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
        :host(:${X}) {
          outline-color: ${f.CanvasText};
        }
      `)),Yx=Je.compose({baseName:"option",template:lv,styles:Xx}),Qx=(i,t)=>C`
    ${ot("block")} :host {
      background: ${Do};
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${ei} * 1px);
      box-shadow: ${ep};
      padding: calc((${A} - ${z}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${A} * 2px);
    }

    ::slotted(${i.tagFor(xe)}) {
      margin: 0 calc(${A} * 1px);
    }

    ::slotted(${i.tagFor(Kn)}) {
      margin: calc(${A} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${A} * 1px) 0;
      border: none;
      border-top: calc(${z} * 1px) solid ${En};
    }
  `.withBehaviors(st(C`
        :host([slot='submenu']) {
          background: ${f.Canvas};
          border-color: ${f.CanvasText};
        }
      `));class Zx extends er{connectedCallback(){super.connectedCallback(),tt.setValueFor(this,Do)}}const Jx=Zx.compose({baseName:"menu",baseClass:er,template:uv,styles:Qx}),Kx=(i,t)=>C`
    ${ot("grid")} :host {
      contain: layout;
      overflow: visible;
      ${Rt}
      box-sizing: border-box;
      height: calc(${it} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${ht};
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

    :host(:${X}) {
      ${Ae}
    }

    :host(:not([disabled]):hover) {
      background: ${Es};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Os};
      color: ${ht};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${Ee};
      opacity: ${$e};
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
      color: ${As};
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
        :host(:${X}) ::slotted([slot='end']:not(svg)) {
          color: ${f.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${f.Highlight};
          color: ${f.HighlightText};
        }
        :host(:${X}) {
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
        :host([disabled]:${X}) {
          background: ${f.ButtonFace};
          color: ${f.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${X}) {
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
            :host(:${X}) .expanded-toggle,
            :host(:${X}) .checkbox,
            :host(:${X}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${X}) .checkbox,
            :host([checked]:${X}) .radio {
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
      `),new Ms(C`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,C`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),tw=xe.compose({baseName:"menu-item",template:hv,styles:Kx,checkboxIndicator:`
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
  `}),nn=".root",ew=(i,t)=>C`
    ${ot("inline-block")}

    ${Ir(i,t,nn)}

    ${Oo()}

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
  `.withBehaviors(Ft("outline",Ao(i,t,nn)),Ft("filled",zs(i,t,nn)),st(Bs(i,t,nn)));class up extends oe{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([u],up.prototype,"appearance",void 0);const iw=up.compose({baseName:"number-field",baseClass:oe,styles:ew,template:pv,shadowOptions:{delegatesFocus:!0},stepDownGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `,stepUpGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>
    </svg>
`}),sw=(i,t)=>C`
    ${ot("flex")} :host {
      align-items: center;
      height: calc((${z} * 3) * 1px);
    }

    .progress {
      background-color: ${Hs};
      border-radius: calc(${A} * 1px);
      width: 100%;
      height: calc(${z} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${mt};
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
      background-color: ${mt};
      border-radius: calc(${A} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${mt};
      border-radius: calc(${A} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${As};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${As};
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
      `));class ow extends is{}const nw=ow.compose({baseName:"progress",template:xv,styles:sw,indeterminateIndicator1:`
    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>
  `,indeterminateIndicator2:`
    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>
  `}),rw=(i,t)=>C`
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
      stroke: ${mt};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${mt};
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
      stroke: ${As};
    }

    :host(.paused) .determinate {
      stroke: ${As};
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
      `));class aw extends is{}const lw=aw.compose({baseName:"progress-ring",template:yv,styles:rw,indeterminateIndicator:`
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
  `}),cw=(i,t)=>C`
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
      border: calc(${z} * 1px) solid ${Hs};
      background: ${Cl};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Rt}
      color: ${ht};
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
      fill: ${Zi};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${Fl};
      border-color: ${El};
    }

    :host(:not(.disabled):active) .control {
      background: ${Il};
      border-color: ${Ol};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${X}) .control {
      ${Eo}
      background: ${Tl};
    }

    :host(.checked) .control {
      background: ${mt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${Be};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ee};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${$e};
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
        :host(:${X}) .control {
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
      `)),dw=sr.compose({baseName:"radio",template:$v,styles:cw,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="4"/>
    </svg>
  `}),hw=(i,t)=>C`
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
`,uw=Ei.compose({baseName:"radio-group",template:wv,styles:hw}),pw=(i,t)=>I`
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
      <slot ${wt({property:"defaultSlottedNodes",filter:tu})}></slot>
    </label>
    <div class="root" part="root" ${lt("root")}>
      ${se(i,t)}
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
      ${ie(i,t)}
    </div>
  </template>
`,rn=".root",fw=pt.create("clear-button-hover").withDefault(i=>{const t=Ne.getValueFor(i),e=Vi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).hover}),gw=pt.create("clear-button-active").withDefault(i=>{const t=Ne.getValueFor(i),e=Vi.getValueFor(i);return t.evaluate(i,e.evaluate(i).focus).active}),mw=(i,t)=>C`
    ${ot("inline-block")}

    ${Ir(i,t,rn)}

    ${Oo()}

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
      color: ${ht};
      fill: currentcolor;
      border: none;
      border-radius: calc(${dt} * 1px);
      min-width: calc(${it} * 1px);
      ${Rt}
      outline: none;
      padding: 0 calc((10 + (${A} * 2 * ${Ai})) * 1px);
    }
    .clear-button:hover {
      background: ${fw};
    }
    .clear-button:active {
      background: ${gw};
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
    ::slotted(${i.tagFor(ye)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Ft("outline",Ao(i,t,rn)),Ft("filled",zs(i,t,rn)),st(Bs(i,t,rn)));class pp extends we{constructor(){super(...arguments),this.appearance="outline"}}E([u],pp.prototype,"appearance",void 0);const bw=pp.compose({baseName:"search",baseClass:we,template:pw,styles:mw,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}});class fp extends hi{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tt.setValueFor(this.listbox,Do)}}E([u({mode:"fromView"})],fp.prototype,"appearance",void 0);const vw=fp.compose({baseName:"select",baseClass:hi,template:Rv,styles:kx,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `}),yw=(i,t)=>C`
    ${ot("block")} :host {
      --skeleton-fill-default: ${Ji};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${Sl} 51%,
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
      background-color: var(--skeleton-animation-fill, ${Ji});
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
      `)),xw=Fo.compose({baseName:"skeleton",template:Ev,styles:yw}),ww=(i,t)=>C`
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
    :host(:${X}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${tt}, 0 0 0 4px ${kr};
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
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${Dl};
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
      background: ${mt};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${ze};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${Be};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${Ju};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${Ce}, ${Ce}),
        border-box ${Ku};
    }
    .track-start {
      background: ${mt};
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
      background: ${Zu};
      border: 1px solid ${Hs};
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
      cursor: ${Ee};
    }
    :host(.disabled) {
      opacity: ${$e};
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
        :host(:${X}) .thumb-cursor {
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
      `)),$w=Gt.compose({baseName:"slider",template:Av,styles:ww,thumb:`
    <div class="thumb-cursor"></div>
  `}),kw=(i,t)=>C`
    ${ot("block")} :host {
      ${tp}
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
      background: ${Hs};
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
      opacity: ${$e};
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
      `)),Cw=ui.compose({baseName:"slider-label",template:Ov,styles:kw}),Fw=(i,t)=>C`
    :host([hidden]) {
      display: none;
    }

    ${ot("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${Oe};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${$e};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${Ee};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${it} / 2) + ${A}) * 2px);
      height: calc(((${it} / 2) + ${A}) * 1px);
      background: ${Cl};
      border-radius: calc(${it} * 1px);
      border: calc(${z} * 1px) solid ${Hs};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Fl};
      border-color: ${El};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Il};
      border-color: ${Ol};
    }

    :host(:${X}) .switch {
      ${Eo}
      background: ${Tl};
    }

    :host(.checked) .switch {
      background: ${mt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${ze};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${Be};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${ht};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${ht};
      cursor: pointer;
      ${Rt}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${ht};
      ${Rt}
      margin-inline-end: calc(${A} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${A} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${mt};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${Zi};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${ze};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${Gu};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${Be};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${Wu};
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
  `.withBehaviors(new Ms(C`
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
        :host(:${X}) .switch {
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
      `)),Iw=ul.compose({baseName:"switch",template:_v,styles:Fw,switch:`
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="12" rx="6"/>
    </svg>
  `}),Tw=(i,t)=>C`
      ${ot("grid")} :host {
        box-sizing: border-box;
        ${Rt}
        color: ${ht};
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
        background: ${mt};
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
        margin-inline-start: calc(${qt} * 1px);
        border-radius: calc(${dt} * 1px);
        align-self: center;
        background: ${mt};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(st(C`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${f.Highlight};
        }
      `)),Sw=(i,t)=>C`
      ${ot("inline-flex")} :host {
        box-sizing: border-box;
        ${Rt}
        height: calc((${it} + (${A} * 2)) * 1px);
        padding: 0 calc((6 + (${A} * 2 * ${Ai})) * 1px);
        color: ${ht};
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
        color: ${ht};
      }

      :host(:${X}) {
        ${Ae}
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
        color: ${ht};
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
          :host(:${X}) {
            background: transparent;
            outline-color: ${f.ButtonText};
          }
        `)),Dw=iu.compose({baseName:"tab",template:Nv,styles:Sw}),Rw=(i,t)=>C`
  ${ot("block")} :host {
    box-sizing: border-box;
    ${Rt}
    padding: 0 calc((6 + (${A} * 2 * ${Ai})) * 1px);
  }
`,Ew=Bv.compose({baseName:"tab-panel",template:zv,styles:Rw}),Ow=pi.compose({baseName:"tabs",template:jv,styles:Tw}),an=".control",Aw=(i,t)=>C`
    ${ot("inline-flex")}

    ${Ir(i,t,an)}

    ${Oo()}

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
  `.withBehaviors(Ft("outline",Ao(i,t,an)),Ft("filled",zs(i,t,an)),st(Bs(i,t,an)));class gp extends Wt{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([u],gp.prototype,"appearance",void 0);const Vw=gp.compose({baseName:"text-area",baseClass:Wt,template:Gv,styles:Aw,shadowOptions:{delegatesFocus:!0}}),ln=".root",Lw=(i,t)=>C`
    ${ot("inline-block")}

    ${Ir(i,t,ln)}

    ${Oo()}

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
  `.withBehaviors(Ft("outline",Ao(i,t,ln)),Ft("filled",zs(i,t,ln)),st(Bs(i,t,ln)));class mp extends fe{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}E([u],mp.prototype,"appearance",void 0);const Pw=mp.compose({baseName:"text-field",baseClass:fe,template:Wv,styles:Lw,shadowOptions:{delegatesFocus:!0}}),_w=(i,t)=>C`
    ${ot("inline-flex")} :host {
      --toolbar-item-gap: calc(${A} * 1px);
      background: ${tt};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${X}) {
      ${Ae}
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
        :host(:${X}) {
          outline-color: ${f.Highlight};
          color: ${f.ButtonText};
          forced-color-adjust: none;
        }
      `));class Hw extends Oi{}const Mw=Hw.compose({baseName:"toolbar",baseClass:Oi,template:Xv,styles:_w}),zw=(i,t)=>C`
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
      border: calc(${z} * 1px) solid ${ws};
      background: ${tt};
      color: ${ht};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${Rt}
      white-space: nowrap;
      box-shadow: ${W0};
    }

    ${i.tagFor(j)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${i.tagFor(j)}.right,
    ${i.tagFor(j)}.left {
      flex-direction: column;
    }

    ${i.tagFor(j)}.top .tooltip::after,
    ${i.tagFor(j)}.bottom .tooltip::after,
    ${i.tagFor(j)}.left .tooltip::after,
    ${i.tagFor(j)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${tt};
      border-top: calc(${z} * 1px) solid ${ws};
      border-left: calc(${z} * 1px) solid ${ws};
      position: absolute;
    }

    ${i.tagFor(j)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${i.tagFor(j)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${i.tagFor(j)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${i.tagFor(j)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${i.tagFor(j)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${i.tagFor(j)}.left .tooltip {
      margin-right: 12px;
    }

    ${i.tagFor(j)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${i.tagFor(j)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(st(C`
        :host([disabled]) {
          opacity: 1;
        }
        ${i.tagFor(j)}.top .tooltip::after,
        ${i.tagFor(j)}.bottom .tooltip::after,
        ${i.tagFor(j)}.left .tooltip::after,
        ${i.tagFor(j)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `));class Bw extends Vt{connectedCallback(){super.connectedCallback(),tt.setValueFor(this,Do)}}const Nw=Bw.compose({baseName:"tooltip",baseClass:Vt,template:Yv,styles:zw}),jw=(i,t)=>C`
  :host([hidden]) {
    display: none;
  }

  ${ot("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Uw=nr.compose({baseName:"tree-view",template:Zv,styles:jw}),qw=C`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${it} * -1px));
  }
  :host([selected])::after {
    left: calc(${qt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Gw=C`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${it} * -1px));
  }
  :host([selected])::after {
    right: calc(${qt} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,vd=be`((${ar} / 2) * ${A}) + ((${A} * ${Ai}) / 2)`,Ww=pt.create("tree-item-expand-collapse-hover").withDefault(i=>{const t=Ne.getValueFor(i);return t.evaluate(i,t.evaluate(i).hover).hover}),Xw=pt.create("tree-item-expand-collapse-selected-hover").withDefault(i=>{const t=rs.getValueFor(i);return Ne.getValueFor(i).evaluate(i,t.evaluate(i).rest).hover}),Yw=(i,t)=>C`
    ${ot("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${ht};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${Oe};
      --expand-collapse-button-size: calc(${it} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Rs};
      border: calc(${z} * 1px) solid transparent;
      border-radius: calc(${dt} * 1px);
      height: calc((${it} + 1) * 1px);
    }

    :host(:${X}) .positioning-region {
      ${Ae}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Es};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Os};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${it} * 1px);
      margin-inline-start: calc(${A} * 2px + 8px);
      ${Rt}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${A} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${dt} * 1px);
      ${""} width: calc((${vd} + (${A} * 2)) * 1px);
      height: calc((${vd} + (${A} * 2)) * 1px);
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
      opacity: ${$e};
      cursor: ${Ee};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Ww};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${Ji};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${Xw};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${it} / 4) * 1px);
      width: 3px;
      height: calc((${it} / 2) * 1px);
      ${""} background: ${mt};
      border-radius: calc(${dt} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${it} * -1px);
    }
  `.withBehaviors(new Ms(qw,Gw),st(C`
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
        :host(:${X}) .positioning-region {
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
      `)),Qw=Pt.compose({baseName:"tree-item",template:Qv,styles:Yw,expandCollapseGlyph:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>
    </svg>
  `}),Zw={fluentAccordion:M0,fluentAccordionItem:H0,fluentAnchor:sx,fluentAnchoredRegion:nx,fluentBadge:ax,fluentBreadcrumb:cx,fluentBreadcrumbItem:hx,fluentButton:px,fluentCalendar:bx,fluentCard:yx,fluentCheckbox:wx,fluentCombobox:Fx,fluentDataGrid:Ex,fluentDataGridCell:Dx,fluentDataGridRow:Rx,fluentDesignSystemProvider:Ox,fluentDialog:Vx,fluentDivider:Px,fluentFlipper:Hx,fluentHorizontalScroll:Ux,fluentListbox:Wx,fluentOption:Yx,fluentMenu:Jx,fluentMenuItem:tw,fluentNumberField:iw,fluentProgress:nw,fluentProgressRing:lw,fluentRadio:dw,fluentRadioGroup:uw,fluentSearch:bw,fluentSelect:vw,fluentSkeleton:xw,fluentSlider:$w,fluentSliderLabel:Cw,fluentSwitch:Iw,fluentTabs:Ow,fluentTab:Dw,fluentTabPanel:Ew,fluentTextArea:Vw,fluentTextField:Pw,fluentToolbar:Mw,fluentTooltip:Nw,fluentTreeView:Uw,fluentTreeItem:Qw,register(i,...t){if(i)for(const e in this)e!=="register"&&this[e]().register(i,...t)}};function Jw(i){return Wh.getOrCreate(i).withPrefix("fluent")}const Kw=["value"],t$=Ya({__name:"FVTextField",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Pe(),yi("fluent-text-field",{value:o.modelValue,onInput:s},[ih(o.$slots,"default")],40,Kw))}}),e$=["value"],i$=Ya({__name:"FVComboBox",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:t}){const e=t,s=o=>{const n=o.target;e("update:modelValue",n.value)};return(o,n)=>(Pe(),yi("fluent-combobox",{value:o.modelValue,onChange:s},[ih(o.$slots,"default")],40,e$))}}),_l=i=>(pf("data-v-5f7aaecd"),i=i(),ff(),i),s$=_l(()=>ut("div",{class:"header"},[ut("img",{src:Ng,class:"logo",alt:"Logo"}),ut("h1",{class:"title"},"Ausgabenbeleg LSF-Wesel-Rheinhausen e.V.")],-1)),o$={class:"general-information-container"},n$=mh('<div class="row" data-v-5f7aaecd><div class="col" data-v-5f7aaecd><p data-v-5f7aaecd>Datum: </p></div><div class="col" data-v-5f7aaecd><fluent-text-field type="date" data-v-5f7aaecd></fluent-text-field></div></div><div class="row" data-v-5f7aaecd><div class="col" data-v-5f7aaecd><p data-v-5f7aaecd>Rechnungsnummer: </p></div><div class="col" data-v-5f7aaecd><fluent-text-field placeholder="Rechnugnsnummer..." data-v-5f7aaecd></fluent-text-field></div></div><div class="row" data-v-5f7aaecd><div class="col" data-v-5f7aaecd><p data-v-5f7aaecd>Name des Mitgliedes: </p></div><div class="col" data-v-5f7aaecd><fluent-text-field placeholder="Name..." data-v-5f7aaecd></fluent-text-field></div></div>',3),r$={class:"row"},a$=_l(()=>ut("div",{class:"col"},[ut("p",null,"Rechnungsdatei: ")],-1)),l$={class:"col"},c$={for:"file",class:"custum-file-upload"},d$=mh('<div class="icon" data-v-5f7aaecd><svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg" data-v-5f7aaecd><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-5f7aaecd></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-5f7aaecd></g><g id="SVGRepo_iconCarrier" data-v-5f7aaecd><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill="" data-v-5f7aaecd></path></g></svg></div><div class="text" data-v-5f7aaecd><span data-v-5f7aaecd>Click to Upload</span></div>',2),h$=_l(()=>ut("div",{class:"bill-disclaimer-container"},[ut("em",null,"Rechnungen müssen auf folgende Rechnungsadresse ausgestellt werden:"),ut("p",null,"LSF-Wesel-Rheinhausen"),ut("p",null,"Postfach 100240"),ut("p",null,"46462 Wesel")],-1)),u$={class:"article-list-wrapper"},p$={class:"article-list-card"},f$=["value"],g$={class:"total-sum"},m$=Ya({__name:"App",setup(i){lr.withDefault(cr);const t=["articleNumber","description","usage","costCenter","amount"],e=["Artikelnummer","Beschreibung","Verwendung","Kostenstelle","Menge"],s=["4240","4250","4300","4360","4361","4362","4500","4510","4520","4600","4610","4700","4705","4710","4720","4721","4722","4730","4740","4800","4805","4806","4810","4811","4812","4813","4814","4815","4816","4817","4818","4824","4830","4831","4832","4833","4834","4835","4850","4860","4900","4910","4920","4930","4940","4950","4951","4960"];function o(){return t.reduce((w,V)=>(w[V]=V==="amount"?0:"",w),{})}const n=Lr([o()]),r=()=>{n.value.push(o())},a=w=>w==="amount"?"number":"text",l=w=>({articleNumber:"Artikelnummer",description:"Beschreibung",usage:"Verwendung",amount:"00,00 €"})[w]||"",d=yh(()=>n.value.reduce((w,V)=>w+parseFloat(V.amount||"0"),0).toFixed(2).replace(".",",")),h=Lr(null),g=Lr(null);th(()=>{h.value&&h.value.addEventListener("change",b)});function b(){if(h.value&&h.value.files&&h.value.files.length>0){const w=h.value.files[0].name;g.value&&(g.value.textContent=`Augewählte Datei: ${w}`)}}return(w,V)=>(Pe(),yi("div",null,[s$,ut("div",o$,[n$,ut("div",r$,[a$,ut("div",l$,[ut("label",c$,[d$,ut("input",{id:"file",type:"file",ref_key:"fileInput",ref:h},null,512)]),ut("div",{ref_key:"fileNameDisplay",ref:g,class:"uploaded-lable"},null,512)])])]),h$,ut("div",u$,[ut("fluent-card",p$,[ut("table",null,[ut("thead",null,[ut("tr",null,[(Pe(),yi(Qt,null,Uo(e,L=>ut("th",{key:L},Ar(L),1)),64))])]),ut("tbody",null,[(Pe(!0),yi(Qt,null,Uo(n.value,(L,q)=>(Pe(),yi("tr",{key:q},[(Pe(),yi(Qt,null,Uo(t,J=>ut("td",{key:J},[J!=="costCenter"?(Pe(),va(t$,{key:0,type:a(J),modelValue:L[J],"onUpdate:modelValue":nt=>L[J]=nt,placeholder:l(J)},null,8,["type","modelValue","onUpdate:modelValue","placeholder"])):(Pe(),va(i$,{key:1,modelValue:L[J],"onUpdate:modelValue":nt=>L[J]=nt,autocomplete:"both",placeholder:"-- Auswählen --",class:"cost-select",position:"below"},{default:Yd(()=>[(Pe(),yi(Qt,null,Uo(s,nt=>ut("fluent-option",{position:"below",class:"combo-option",key:nt,value:nt},Ar(nt),9,f$)),64))]),_:2},1032,["modelValue","onUpdate:modelValue"]))])),64))]))),128))])]),ut("fluent-button",{appearance:"accent",onClick:r},"＋ Artikel hinzufügen"),ut("div",g$,"Gesamtbetrag: "+Ar(d.value)+" €",1)])])]))}}),b$=(i,t)=>{const e=i.__vccOpts||i;for(const[s,o]of t)e[s]=o;return e},v$=b$(m$,[["__scopeId","data-v-5f7aaecd"]]);Jw().register(Zw);Mg(v$).mount("#app");
