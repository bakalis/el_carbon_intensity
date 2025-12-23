goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29321 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29321(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29322 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29322(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28302 = coll;
var G__28303 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28302,G__28303) : shadow.dom.lazy_native_coll_seq.call(null,G__28302,G__28303));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28338 = arguments.length;
switch (G__28338) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28347 = arguments.length;
switch (G__28347) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28363 = arguments.length;
switch (G__28363) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28365 = arguments.length;
switch (G__28365) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28389 = arguments.length;
switch (G__28389) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28399 = arguments.length;
switch (G__28399) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28411){if((e28411 instanceof Object)){
var e = e28411;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28411;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28454 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28455 = null;
var count__28456 = (0);
var i__28457 = (0);
while(true){
if((i__28457 < count__28456)){
var el = chunk__28455.cljs$core$IIndexed$_nth$arity$2(null,i__28457);
var handler_29366__$1 = ((function (seq__28454,chunk__28455,count__28456,i__28457,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28454,chunk__28455,count__28456,i__28457,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29366__$1);


var G__29367 = seq__28454;
var G__29368 = chunk__28455;
var G__29369 = count__28456;
var G__29370 = (i__28457 + (1));
seq__28454 = G__29367;
chunk__28455 = G__29368;
count__28456 = G__29369;
i__28457 = G__29370;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28454);
if(temp__5825__auto__){
var seq__28454__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28454__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28454__$1);
var G__29373 = cljs.core.chunk_rest(seq__28454__$1);
var G__29374 = c__5548__auto__;
var G__29375 = cljs.core.count(c__5548__auto__);
var G__29376 = (0);
seq__28454 = G__29373;
chunk__28455 = G__29374;
count__28456 = G__29375;
i__28457 = G__29376;
continue;
} else {
var el = cljs.core.first(seq__28454__$1);
var handler_29377__$1 = ((function (seq__28454,chunk__28455,count__28456,i__28457,el,seq__28454__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28454,chunk__28455,count__28456,i__28457,el,seq__28454__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29377__$1);


var G__29378 = cljs.core.next(seq__28454__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__28454 = G__29378;
chunk__28455 = G__29379;
count__28456 = G__29380;
i__28457 = G__29381;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28472 = arguments.length;
switch (G__28472) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28480 = cljs.core.seq(events);
var chunk__28481 = null;
var count__28482 = (0);
var i__28483 = (0);
while(true){
if((i__28483 < count__28482)){
var vec__28490 = chunk__28481.cljs$core$IIndexed$_nth$arity$2(null,i__28483);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28490,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29397 = seq__28480;
var G__29398 = chunk__28481;
var G__29399 = count__28482;
var G__29400 = (i__28483 + (1));
seq__28480 = G__29397;
chunk__28481 = G__29398;
count__28482 = G__29399;
i__28483 = G__29400;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28480);
if(temp__5825__auto__){
var seq__28480__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28480__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28480__$1);
var G__29401 = cljs.core.chunk_rest(seq__28480__$1);
var G__29402 = c__5548__auto__;
var G__29403 = cljs.core.count(c__5548__auto__);
var G__29404 = (0);
seq__28480 = G__29401;
chunk__28481 = G__29402;
count__28482 = G__29403;
i__28483 = G__29404;
continue;
} else {
var vec__28495 = cljs.core.first(seq__28480__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28495,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29407 = cljs.core.next(seq__28480__$1);
var G__29408 = null;
var G__29409 = (0);
var G__29410 = (0);
seq__28480 = G__29407;
chunk__28481 = G__29408;
count__28482 = G__29409;
i__28483 = G__29410;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28499 = cljs.core.seq(styles);
var chunk__28500 = null;
var count__28501 = (0);
var i__28502 = (0);
while(true){
if((i__28502 < count__28501)){
var vec__28514 = chunk__28500.cljs$core$IIndexed$_nth$arity$2(null,i__28502);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28514,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28514,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29415 = seq__28499;
var G__29416 = chunk__28500;
var G__29417 = count__28501;
var G__29418 = (i__28502 + (1));
seq__28499 = G__29415;
chunk__28500 = G__29416;
count__28501 = G__29417;
i__28502 = G__29418;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28499);
if(temp__5825__auto__){
var seq__28499__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28499__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28499__$1);
var G__29419 = cljs.core.chunk_rest(seq__28499__$1);
var G__29420 = c__5548__auto__;
var G__29421 = cljs.core.count(c__5548__auto__);
var G__29422 = (0);
seq__28499 = G__29419;
chunk__28500 = G__29420;
count__28501 = G__29421;
i__28502 = G__29422;
continue;
} else {
var vec__28517 = cljs.core.first(seq__28499__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28517,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29425 = cljs.core.next(seq__28499__$1);
var G__29426 = null;
var G__29427 = (0);
var G__29428 = (0);
seq__28499 = G__29425;
chunk__28500 = G__29426;
count__28501 = G__29427;
i__28502 = G__29428;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28521_29430 = key;
var G__28521_29431__$1 = (((G__28521_29430 instanceof cljs.core.Keyword))?G__28521_29430.fqn:null);
switch (G__28521_29431__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29443 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29443,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29443,"aria-");
}
})())){
el.setAttribute(ks_29443,value);
} else {
(el[ks_29443] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28544){
var map__28545 = p__28544;
var map__28545__$1 = cljs.core.__destructure_map(map__28545);
var props = map__28545__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28546 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28546,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28546,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28546,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28552 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28552,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28552;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28555 = arguments.length;
switch (G__28555) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28556){
var vec__28557 = p__28556;
var seq__28558 = cljs.core.seq(vec__28557);
var first__28559 = cljs.core.first(seq__28558);
var seq__28558__$1 = cljs.core.next(seq__28558);
var nn = first__28559;
var first__28559__$1 = cljs.core.first(seq__28558__$1);
var seq__28558__$2 = cljs.core.next(seq__28558__$1);
var np = first__28559__$1;
var nc = seq__28558__$2;
var node = vec__28557;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28560 = nn;
var G__28561 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28560,G__28561) : create_fn.call(null,G__28560,G__28561));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28562 = nn;
var G__28563 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28562,G__28563) : create_fn.call(null,G__28562,G__28563));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28564 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28564,(1),null);
var seq__28567_29481 = cljs.core.seq(node_children);
var chunk__28568_29482 = null;
var count__28569_29483 = (0);
var i__28570_29484 = (0);
while(true){
if((i__28570_29484 < count__28569_29483)){
var child_struct_29486 = chunk__28568_29482.cljs$core$IIndexed$_nth$arity$2(null,i__28570_29484);
var children_29487 = shadow.dom.dom_node(child_struct_29486);
if(cljs.core.seq_QMARK_(children_29487)){
var seq__28587_29488 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29487));
var chunk__28589_29489 = null;
var count__28590_29490 = (0);
var i__28591_29491 = (0);
while(true){
if((i__28591_29491 < count__28590_29490)){
var child_29492 = chunk__28589_29489.cljs$core$IIndexed$_nth$arity$2(null,i__28591_29491);
if(cljs.core.truth_(child_29492)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29492);


var G__29493 = seq__28587_29488;
var G__29494 = chunk__28589_29489;
var G__29495 = count__28590_29490;
var G__29496 = (i__28591_29491 + (1));
seq__28587_29488 = G__29493;
chunk__28589_29489 = G__29494;
count__28590_29490 = G__29495;
i__28591_29491 = G__29496;
continue;
} else {
var G__29498 = seq__28587_29488;
var G__29499 = chunk__28589_29489;
var G__29500 = count__28590_29490;
var G__29501 = (i__28591_29491 + (1));
seq__28587_29488 = G__29498;
chunk__28589_29489 = G__29499;
count__28590_29490 = G__29500;
i__28591_29491 = G__29501;
continue;
}
} else {
var temp__5825__auto___29503 = cljs.core.seq(seq__28587_29488);
if(temp__5825__auto___29503){
var seq__28587_29504__$1 = temp__5825__auto___29503;
if(cljs.core.chunked_seq_QMARK_(seq__28587_29504__$1)){
var c__5548__auto___29506 = cljs.core.chunk_first(seq__28587_29504__$1);
var G__29507 = cljs.core.chunk_rest(seq__28587_29504__$1);
var G__29508 = c__5548__auto___29506;
var G__29509 = cljs.core.count(c__5548__auto___29506);
var G__29510 = (0);
seq__28587_29488 = G__29507;
chunk__28589_29489 = G__29508;
count__28590_29490 = G__29509;
i__28591_29491 = G__29510;
continue;
} else {
var child_29512 = cljs.core.first(seq__28587_29504__$1);
if(cljs.core.truth_(child_29512)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29512);


var G__29514 = cljs.core.next(seq__28587_29504__$1);
var G__29515 = null;
var G__29516 = (0);
var G__29517 = (0);
seq__28587_29488 = G__29514;
chunk__28589_29489 = G__29515;
count__28590_29490 = G__29516;
i__28591_29491 = G__29517;
continue;
} else {
var G__29518 = cljs.core.next(seq__28587_29504__$1);
var G__29519 = null;
var G__29520 = (0);
var G__29521 = (0);
seq__28587_29488 = G__29518;
chunk__28589_29489 = G__29519;
count__28590_29490 = G__29520;
i__28591_29491 = G__29521;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29487);
}


var G__29522 = seq__28567_29481;
var G__29523 = chunk__28568_29482;
var G__29524 = count__28569_29483;
var G__29525 = (i__28570_29484 + (1));
seq__28567_29481 = G__29522;
chunk__28568_29482 = G__29523;
count__28569_29483 = G__29524;
i__28570_29484 = G__29525;
continue;
} else {
var temp__5825__auto___29527 = cljs.core.seq(seq__28567_29481);
if(temp__5825__auto___29527){
var seq__28567_29528__$1 = temp__5825__auto___29527;
if(cljs.core.chunked_seq_QMARK_(seq__28567_29528__$1)){
var c__5548__auto___29529 = cljs.core.chunk_first(seq__28567_29528__$1);
var G__29531 = cljs.core.chunk_rest(seq__28567_29528__$1);
var G__29532 = c__5548__auto___29529;
var G__29533 = cljs.core.count(c__5548__auto___29529);
var G__29534 = (0);
seq__28567_29481 = G__29531;
chunk__28568_29482 = G__29532;
count__28569_29483 = G__29533;
i__28570_29484 = G__29534;
continue;
} else {
var child_struct_29535 = cljs.core.first(seq__28567_29528__$1);
var children_29536 = shadow.dom.dom_node(child_struct_29535);
if(cljs.core.seq_QMARK_(children_29536)){
var seq__28597_29537 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29536));
var chunk__28599_29538 = null;
var count__28600_29539 = (0);
var i__28601_29540 = (0);
while(true){
if((i__28601_29540 < count__28600_29539)){
var child_29541 = chunk__28599_29538.cljs$core$IIndexed$_nth$arity$2(null,i__28601_29540);
if(cljs.core.truth_(child_29541)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29541);


var G__29544 = seq__28597_29537;
var G__29545 = chunk__28599_29538;
var G__29546 = count__28600_29539;
var G__29547 = (i__28601_29540 + (1));
seq__28597_29537 = G__29544;
chunk__28599_29538 = G__29545;
count__28600_29539 = G__29546;
i__28601_29540 = G__29547;
continue;
} else {
var G__29548 = seq__28597_29537;
var G__29549 = chunk__28599_29538;
var G__29550 = count__28600_29539;
var G__29551 = (i__28601_29540 + (1));
seq__28597_29537 = G__29548;
chunk__28599_29538 = G__29549;
count__28600_29539 = G__29550;
i__28601_29540 = G__29551;
continue;
}
} else {
var temp__5825__auto___29552__$1 = cljs.core.seq(seq__28597_29537);
if(temp__5825__auto___29552__$1){
var seq__28597_29553__$1 = temp__5825__auto___29552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28597_29553__$1)){
var c__5548__auto___29554 = cljs.core.chunk_first(seq__28597_29553__$1);
var G__29555 = cljs.core.chunk_rest(seq__28597_29553__$1);
var G__29556 = c__5548__auto___29554;
var G__29557 = cljs.core.count(c__5548__auto___29554);
var G__29558 = (0);
seq__28597_29537 = G__29555;
chunk__28599_29538 = G__29556;
count__28600_29539 = G__29557;
i__28601_29540 = G__29558;
continue;
} else {
var child_29561 = cljs.core.first(seq__28597_29553__$1);
if(cljs.core.truth_(child_29561)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29561);


var G__29562 = cljs.core.next(seq__28597_29553__$1);
var G__29563 = null;
var G__29564 = (0);
var G__29565 = (0);
seq__28597_29537 = G__29562;
chunk__28599_29538 = G__29563;
count__28600_29539 = G__29564;
i__28601_29540 = G__29565;
continue;
} else {
var G__29566 = cljs.core.next(seq__28597_29553__$1);
var G__29567 = null;
var G__29568 = (0);
var G__29569 = (0);
seq__28597_29537 = G__29566;
chunk__28599_29538 = G__29567;
count__28600_29539 = G__29568;
i__28601_29540 = G__29569;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29536);
}


var G__29571 = cljs.core.next(seq__28567_29528__$1);
var G__29572 = null;
var G__29573 = (0);
var G__29574 = (0);
seq__28567_29481 = G__29571;
chunk__28568_29482 = G__29572;
count__28569_29483 = G__29573;
i__28570_29484 = G__29574;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28608 = cljs.core.seq(node);
var chunk__28609 = null;
var count__28610 = (0);
var i__28611 = (0);
while(true){
if((i__28611 < count__28610)){
var n = chunk__28609.cljs$core$IIndexed$_nth$arity$2(null,i__28611);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29584 = seq__28608;
var G__29585 = chunk__28609;
var G__29587 = count__28610;
var G__29588 = (i__28611 + (1));
seq__28608 = G__29584;
chunk__28609 = G__29585;
count__28610 = G__29587;
i__28611 = G__29588;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28608);
if(temp__5825__auto__){
var seq__28608__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28608__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28608__$1);
var G__29591 = cljs.core.chunk_rest(seq__28608__$1);
var G__29592 = c__5548__auto__;
var G__29593 = cljs.core.count(c__5548__auto__);
var G__29594 = (0);
seq__28608 = G__29591;
chunk__28609 = G__29592;
count__28610 = G__29593;
i__28611 = G__29594;
continue;
} else {
var n = cljs.core.first(seq__28608__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29597 = cljs.core.next(seq__28608__$1);
var G__29598 = null;
var G__29599 = (0);
var G__29600 = (0);
seq__28608 = G__29597;
chunk__28609 = G__29598;
count__28610 = G__29599;
i__28611 = G__29600;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28618 = arguments.length;
switch (G__28618) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28620 = arguments.length;
switch (G__28620) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28623 = arguments.length;
switch (G__28623) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29623 = arguments.length;
var i__5750__auto___29624 = (0);
while(true){
if((i__5750__auto___29624 < len__5749__auto___29623)){
args__5755__auto__.push((arguments[i__5750__auto___29624]));

var G__29625 = (i__5750__auto___29624 + (1));
i__5750__auto___29624 = G__29625;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28672_29627 = cljs.core.seq(nodes);
var chunk__28673_29628 = null;
var count__28674_29629 = (0);
var i__28675_29630 = (0);
while(true){
if((i__28675_29630 < count__28674_29629)){
var node_29631 = chunk__28673_29628.cljs$core$IIndexed$_nth$arity$2(null,i__28675_29630);
fragment.appendChild(shadow.dom._to_dom(node_29631));


var G__29632 = seq__28672_29627;
var G__29633 = chunk__28673_29628;
var G__29634 = count__28674_29629;
var G__29635 = (i__28675_29630 + (1));
seq__28672_29627 = G__29632;
chunk__28673_29628 = G__29633;
count__28674_29629 = G__29634;
i__28675_29630 = G__29635;
continue;
} else {
var temp__5825__auto___29636 = cljs.core.seq(seq__28672_29627);
if(temp__5825__auto___29636){
var seq__28672_29637__$1 = temp__5825__auto___29636;
if(cljs.core.chunked_seq_QMARK_(seq__28672_29637__$1)){
var c__5548__auto___29638 = cljs.core.chunk_first(seq__28672_29637__$1);
var G__29641 = cljs.core.chunk_rest(seq__28672_29637__$1);
var G__29642 = c__5548__auto___29638;
var G__29643 = cljs.core.count(c__5548__auto___29638);
var G__29644 = (0);
seq__28672_29627 = G__29641;
chunk__28673_29628 = G__29642;
count__28674_29629 = G__29643;
i__28675_29630 = G__29644;
continue;
} else {
var node_29645 = cljs.core.first(seq__28672_29637__$1);
fragment.appendChild(shadow.dom._to_dom(node_29645));


var G__29646 = cljs.core.next(seq__28672_29637__$1);
var G__29647 = null;
var G__29648 = (0);
var G__29649 = (0);
seq__28672_29627 = G__29646;
chunk__28673_29628 = G__29647;
count__28674_29629 = G__29648;
i__28675_29630 = G__29649;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28631){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28631));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28740_29654 = cljs.core.seq(scripts);
var chunk__28741_29655 = null;
var count__28742_29656 = (0);
var i__28743_29657 = (0);
while(true){
if((i__28743_29657 < count__28742_29656)){
var vec__28761_29658 = chunk__28741_29655.cljs$core$IIndexed$_nth$arity$2(null,i__28743_29657);
var script_tag_29659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28761_29658,(0),null);
var script_body_29660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28761_29658,(1),null);
eval(script_body_29660);


var G__29667 = seq__28740_29654;
var G__29668 = chunk__28741_29655;
var G__29669 = count__28742_29656;
var G__29670 = (i__28743_29657 + (1));
seq__28740_29654 = G__29667;
chunk__28741_29655 = G__29668;
count__28742_29656 = G__29669;
i__28743_29657 = G__29670;
continue;
} else {
var temp__5825__auto___29671 = cljs.core.seq(seq__28740_29654);
if(temp__5825__auto___29671){
var seq__28740_29672__$1 = temp__5825__auto___29671;
if(cljs.core.chunked_seq_QMARK_(seq__28740_29672__$1)){
var c__5548__auto___29675 = cljs.core.chunk_first(seq__28740_29672__$1);
var G__29676 = cljs.core.chunk_rest(seq__28740_29672__$1);
var G__29677 = c__5548__auto___29675;
var G__29678 = cljs.core.count(c__5548__auto___29675);
var G__29679 = (0);
seq__28740_29654 = G__29676;
chunk__28741_29655 = G__29677;
count__28742_29656 = G__29678;
i__28743_29657 = G__29679;
continue;
} else {
var vec__28771_29680 = cljs.core.first(seq__28740_29672__$1);
var script_tag_29681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28771_29680,(0),null);
var script_body_29682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28771_29680,(1),null);
eval(script_body_29682);


var G__29688 = cljs.core.next(seq__28740_29672__$1);
var G__29689 = null;
var G__29690 = (0);
var G__29691 = (0);
seq__28740_29654 = G__29688;
chunk__28741_29655 = G__29689;
count__28742_29656 = G__29690;
i__28743_29657 = G__29691;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28779){
var vec__28780 = p__28779;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28780,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28780,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28822 = arguments.length;
switch (G__28822) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28841 = cljs.core.seq(style_keys);
var chunk__28842 = null;
var count__28843 = (0);
var i__28844 = (0);
while(true){
if((i__28844 < count__28843)){
var it = chunk__28842.cljs$core$IIndexed$_nth$arity$2(null,i__28844);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29722 = seq__28841;
var G__29723 = chunk__28842;
var G__29724 = count__28843;
var G__29725 = (i__28844 + (1));
seq__28841 = G__29722;
chunk__28842 = G__29723;
count__28843 = G__29724;
i__28844 = G__29725;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28841);
if(temp__5825__auto__){
var seq__28841__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28841__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28841__$1);
var G__29728 = cljs.core.chunk_rest(seq__28841__$1);
var G__29729 = c__5548__auto__;
var G__29730 = cljs.core.count(c__5548__auto__);
var G__29731 = (0);
seq__28841 = G__29728;
chunk__28842 = G__29729;
count__28843 = G__29730;
i__28844 = G__29731;
continue;
} else {
var it = cljs.core.first(seq__28841__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29733 = cljs.core.next(seq__28841__$1);
var G__29734 = null;
var G__29735 = (0);
var G__29736 = (0);
seq__28841 = G__29733;
chunk__28842 = G__29734;
count__28843 = G__29735;
i__28844 = G__29736;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28856,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__28902 = k28856;
var G__28902__$1 = (((G__28902 instanceof cljs.core.Keyword))?G__28902.fqn:null);
switch (G__28902__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28856,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__28905){
var vec__28906 = p__28905;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28855){
var self__ = this;
var G__28855__$1 = this;
return (new cljs.core.RecordIter((0),G__28855__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28858,other28859){
var self__ = this;
var this28858__$1 = this;
return (((!((other28859 == null)))) && ((((this28858__$1.constructor === other28859.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28858__$1.x,other28859.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28858__$1.y,other28859.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28858__$1.__extmap,other28859.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28856){
var self__ = this;
var this__5330__auto____$1 = this;
var G__28925 = k28856;
var G__28925__$1 = (((G__28925 instanceof cljs.core.Keyword))?G__28925.fqn:null);
switch (G__28925__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28856);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28855){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__28926 = cljs.core.keyword_identical_QMARK_;
var expr__28927 = k__5332__auto__;
if(cljs.core.truth_((pred__28926.cljs$core$IFn$_invoke$arity$2 ? pred__28926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28927) : pred__28926.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28927)))){
return (new shadow.dom.Coordinate(G__28855,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28926.cljs$core$IFn$_invoke$arity$2 ? pred__28926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28927) : pred__28926.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28927)))){
return (new shadow.dom.Coordinate(self__.x,G__28855,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28855),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28855){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28855,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28876){
var extmap__5365__auto__ = (function (){var G__28958 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28876,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28958);
} else {
return G__28958;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28876),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28876),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k28999,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__29009 = k28999;
var G__29009__$1 = (((G__29009 instanceof cljs.core.Keyword))?G__29009.fqn:null);
switch (G__29009__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28999,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__29012){
var vec__29013 = p__29012;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29013,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28998){
var self__ = this;
var G__28998__$1 = this;
return (new cljs.core.RecordIter((0),G__28998__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29000,other29001){
var self__ = this;
var this29000__$1 = this;
return (((!((other29001 == null)))) && ((((this29000__$1.constructor === other29001.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29000__$1.w,other29001.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29000__$1.h,other29001.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29000__$1.__extmap,other29001.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k28999){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29030 = k28999;
var G__29030__$1 = (((G__29030 instanceof cljs.core.Keyword))?G__29030.fqn:null);
switch (G__29030__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28999);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__28998){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29033 = cljs.core.keyword_identical_QMARK_;
var expr__29034 = k__5332__auto__;
if(cljs.core.truth_((pred__29033.cljs$core$IFn$_invoke$arity$2 ? pred__29033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29034) : pred__29033.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29034)))){
return (new shadow.dom.Size(G__28998,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29033.cljs$core$IFn$_invoke$arity$2 ? pred__29033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29034) : pred__29033.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29034)))){
return (new shadow.dom.Size(self__.w,G__28998,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__28998),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__28998){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__28998,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29002){
var extmap__5365__auto__ = (function (){var G__29039 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29002,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29002)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29039);
} else {
return G__29039;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29002),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29002),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__29972 = (i + (1));
var G__29973 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29972;
ret = G__29973;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29094){
var vec__29095 = p__29094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29095,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29102 = arguments.length;
switch (G__29102) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30057 = ps;
var G__30058 = (i + (1));
el__$1 = G__30057;
i = G__30058;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29140 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29140,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29144_30076 = cljs.core.seq(props);
var chunk__29146_30077 = null;
var count__29147_30078 = (0);
var i__29148_30079 = (0);
while(true){
if((i__29148_30079 < count__29147_30078)){
var vec__29169_30085 = chunk__29146_30077.cljs$core$IIndexed$_nth$arity$2(null,i__29148_30079);
var k_30086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169_30085,(0),null);
var v_30087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169_30085,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_30086);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30086),v_30087);


var G__30100 = seq__29144_30076;
var G__30101 = chunk__29146_30077;
var G__30102 = count__29147_30078;
var G__30103 = (i__29148_30079 + (1));
seq__29144_30076 = G__30100;
chunk__29146_30077 = G__30101;
count__29147_30078 = G__30102;
i__29148_30079 = G__30103;
continue;
} else {
var temp__5825__auto___30105 = cljs.core.seq(seq__29144_30076);
if(temp__5825__auto___30105){
var seq__29144_30107__$1 = temp__5825__auto___30105;
if(cljs.core.chunked_seq_QMARK_(seq__29144_30107__$1)){
var c__5548__auto___30108 = cljs.core.chunk_first(seq__29144_30107__$1);
var G__30109 = cljs.core.chunk_rest(seq__29144_30107__$1);
var G__30110 = c__5548__auto___30108;
var G__30111 = cljs.core.count(c__5548__auto___30108);
var G__30112 = (0);
seq__29144_30076 = G__30109;
chunk__29146_30077 = G__30110;
count__29147_30078 = G__30111;
i__29148_30079 = G__30112;
continue;
} else {
var vec__29177_30113 = cljs.core.first(seq__29144_30107__$1);
var k_30114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29177_30113,(0),null);
var v_30115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29177_30113,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_30114);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30114),v_30115);


var G__30118 = cljs.core.next(seq__29144_30107__$1);
var G__30119 = null;
var G__30120 = (0);
var G__30121 = (0);
seq__29144_30076 = G__30118;
chunk__29146_30077 = G__30119;
count__29147_30078 = G__30120;
i__29148_30079 = G__30121;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29188 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(1),null);
var seq__29192_30128 = cljs.core.seq(node_children);
var chunk__29194_30129 = null;
var count__29195_30130 = (0);
var i__29196_30131 = (0);
while(true){
if((i__29196_30131 < count__29195_30130)){
var child_struct_30132 = chunk__29194_30129.cljs$core$IIndexed$_nth$arity$2(null,i__29196_30131);
if((!((child_struct_30132 == null)))){
if(typeof child_struct_30132 === 'string'){
var text_30134 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30134),child_struct_30132].join(''));
} else {
var children_30140 = shadow.dom.svg_node(child_struct_30132);
if(cljs.core.seq_QMARK_(children_30140)){
var seq__29247_30141 = cljs.core.seq(children_30140);
var chunk__29250_30142 = null;
var count__29251_30143 = (0);
var i__29252_30144 = (0);
while(true){
if((i__29252_30144 < count__29251_30143)){
var child_30146 = chunk__29250_30142.cljs$core$IIndexed$_nth$arity$2(null,i__29252_30144);
if(cljs.core.truth_(child_30146)){
node.appendChild(child_30146);


var G__30148 = seq__29247_30141;
var G__30149 = chunk__29250_30142;
var G__30150 = count__29251_30143;
var G__30151 = (i__29252_30144 + (1));
seq__29247_30141 = G__30148;
chunk__29250_30142 = G__30149;
count__29251_30143 = G__30150;
i__29252_30144 = G__30151;
continue;
} else {
var G__30153 = seq__29247_30141;
var G__30154 = chunk__29250_30142;
var G__30155 = count__29251_30143;
var G__30156 = (i__29252_30144 + (1));
seq__29247_30141 = G__30153;
chunk__29250_30142 = G__30154;
count__29251_30143 = G__30155;
i__29252_30144 = G__30156;
continue;
}
} else {
var temp__5825__auto___30157 = cljs.core.seq(seq__29247_30141);
if(temp__5825__auto___30157){
var seq__29247_30158__$1 = temp__5825__auto___30157;
if(cljs.core.chunked_seq_QMARK_(seq__29247_30158__$1)){
var c__5548__auto___30159 = cljs.core.chunk_first(seq__29247_30158__$1);
var G__30160 = cljs.core.chunk_rest(seq__29247_30158__$1);
var G__30161 = c__5548__auto___30159;
var G__30162 = cljs.core.count(c__5548__auto___30159);
var G__30163 = (0);
seq__29247_30141 = G__30160;
chunk__29250_30142 = G__30161;
count__29251_30143 = G__30162;
i__29252_30144 = G__30163;
continue;
} else {
var child_30164 = cljs.core.first(seq__29247_30158__$1);
if(cljs.core.truth_(child_30164)){
node.appendChild(child_30164);


var G__30222 = cljs.core.next(seq__29247_30158__$1);
var G__30223 = null;
var G__30224 = (0);
var G__30225 = (0);
seq__29247_30141 = G__30222;
chunk__29250_30142 = G__30223;
count__29251_30143 = G__30224;
i__29252_30144 = G__30225;
continue;
} else {
var G__30228 = cljs.core.next(seq__29247_30158__$1);
var G__30229 = null;
var G__30230 = (0);
var G__30231 = (0);
seq__29247_30141 = G__30228;
chunk__29250_30142 = G__30229;
count__29251_30143 = G__30230;
i__29252_30144 = G__30231;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30140);
}
}


var G__30232 = seq__29192_30128;
var G__30233 = chunk__29194_30129;
var G__30234 = count__29195_30130;
var G__30235 = (i__29196_30131 + (1));
seq__29192_30128 = G__30232;
chunk__29194_30129 = G__30233;
count__29195_30130 = G__30234;
i__29196_30131 = G__30235;
continue;
} else {
var G__30236 = seq__29192_30128;
var G__30237 = chunk__29194_30129;
var G__30238 = count__29195_30130;
var G__30239 = (i__29196_30131 + (1));
seq__29192_30128 = G__30236;
chunk__29194_30129 = G__30237;
count__29195_30130 = G__30238;
i__29196_30131 = G__30239;
continue;
}
} else {
var temp__5825__auto___30267 = cljs.core.seq(seq__29192_30128);
if(temp__5825__auto___30267){
var seq__29192_30268__$1 = temp__5825__auto___30267;
if(cljs.core.chunked_seq_QMARK_(seq__29192_30268__$1)){
var c__5548__auto___30269 = cljs.core.chunk_first(seq__29192_30268__$1);
var G__30271 = cljs.core.chunk_rest(seq__29192_30268__$1);
var G__30272 = c__5548__auto___30269;
var G__30273 = cljs.core.count(c__5548__auto___30269);
var G__30274 = (0);
seq__29192_30128 = G__30271;
chunk__29194_30129 = G__30272;
count__29195_30130 = G__30273;
i__29196_30131 = G__30274;
continue;
} else {
var child_struct_30275 = cljs.core.first(seq__29192_30268__$1);
if((!((child_struct_30275 == null)))){
if(typeof child_struct_30275 === 'string'){
var text_30277 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30277),child_struct_30275].join(''));
} else {
var children_30280 = shadow.dom.svg_node(child_struct_30275);
if(cljs.core.seq_QMARK_(children_30280)){
var seq__29267_30285 = cljs.core.seq(children_30280);
var chunk__29269_30286 = null;
var count__29270_30287 = (0);
var i__29271_30288 = (0);
while(true){
if((i__29271_30288 < count__29270_30287)){
var child_30292 = chunk__29269_30286.cljs$core$IIndexed$_nth$arity$2(null,i__29271_30288);
if(cljs.core.truth_(child_30292)){
node.appendChild(child_30292);


var G__30294 = seq__29267_30285;
var G__30295 = chunk__29269_30286;
var G__30296 = count__29270_30287;
var G__30297 = (i__29271_30288 + (1));
seq__29267_30285 = G__30294;
chunk__29269_30286 = G__30295;
count__29270_30287 = G__30296;
i__29271_30288 = G__30297;
continue;
} else {
var G__30301 = seq__29267_30285;
var G__30302 = chunk__29269_30286;
var G__30303 = count__29270_30287;
var G__30304 = (i__29271_30288 + (1));
seq__29267_30285 = G__30301;
chunk__29269_30286 = G__30302;
count__29270_30287 = G__30303;
i__29271_30288 = G__30304;
continue;
}
} else {
var temp__5825__auto___30307__$1 = cljs.core.seq(seq__29267_30285);
if(temp__5825__auto___30307__$1){
var seq__29267_30308__$1 = temp__5825__auto___30307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29267_30308__$1)){
var c__5548__auto___30310 = cljs.core.chunk_first(seq__29267_30308__$1);
var G__30311 = cljs.core.chunk_rest(seq__29267_30308__$1);
var G__30312 = c__5548__auto___30310;
var G__30313 = cljs.core.count(c__5548__auto___30310);
var G__30314 = (0);
seq__29267_30285 = G__30311;
chunk__29269_30286 = G__30312;
count__29270_30287 = G__30313;
i__29271_30288 = G__30314;
continue;
} else {
var child_30342 = cljs.core.first(seq__29267_30308__$1);
if(cljs.core.truth_(child_30342)){
node.appendChild(child_30342);


var G__30343 = cljs.core.next(seq__29267_30308__$1);
var G__30344 = null;
var G__30345 = (0);
var G__30346 = (0);
seq__29267_30285 = G__30343;
chunk__29269_30286 = G__30344;
count__29270_30287 = G__30345;
i__29271_30288 = G__30346;
continue;
} else {
var G__30348 = cljs.core.next(seq__29267_30308__$1);
var G__30349 = null;
var G__30350 = (0);
var G__30351 = (0);
seq__29267_30285 = G__30348;
chunk__29269_30286 = G__30349;
count__29270_30287 = G__30350;
i__29271_30288 = G__30351;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30280);
}
}


var G__30352 = cljs.core.next(seq__29192_30268__$1);
var G__30353 = null;
var G__30354 = (0);
var G__30355 = (0);
seq__29192_30128 = G__30352;
chunk__29194_30129 = G__30353;
count__29195_30130 = G__30354;
i__29196_30131 = G__30355;
continue;
} else {
var G__30357 = cljs.core.next(seq__29192_30268__$1);
var G__30358 = null;
var G__30359 = (0);
var G__30360 = (0);
seq__29192_30128 = G__30357;
chunk__29194_30129 = G__30358;
count__29195_30130 = G__30359;
i__29196_30131 = G__30360;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30396 = arguments.length;
var i__5750__auto___30398 = (0);
while(true){
if((i__5750__auto___30398 < len__5749__auto___30396)){
args__5755__auto__.push((arguments[i__5750__auto___30398]));

var G__30402 = (i__5750__auto___30398 + (1));
i__5750__auto___30398 = G__30402;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29297){
var G__29298 = cljs.core.first(seq29297);
var seq29297__$1 = cljs.core.next(seq29297);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29298,seq29297__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
