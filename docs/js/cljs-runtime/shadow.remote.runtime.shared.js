goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31122){
var map__31125 = p__31122;
var map__31125__$1 = cljs.core.__destructure_map(map__31125);
var runtime = map__31125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31456 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31456)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__31170 = runtime;
var G__31171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31456);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__31170,G__31171) : shadow.remote.runtime.shared.process.call(null,G__31170,G__31171));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31174,res){
var map__31175 = p__31174;
var map__31175__$1 = cljs.core.__destructure_map(map__31175);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31175__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31176 = res;
var G__31176__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31176,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31176);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31176__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31176__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31179 = arguments.length;
switch (G__31179) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31190,msg,handlers,timeout_after_ms){
var map__31191 = p__31190;
var map__31191__$1 = cljs.core.__destructure_map(map__31191);
var runtime = map__31191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___31477 = arguments.length;
var i__5750__auto___31478 = (0);
while(true){
if((i__5750__auto___31478 < len__5749__auto___31477)){
args__5755__auto__.push((arguments[i__5750__auto___31478]));

var G__31481 = (i__5750__auto___31478 + (1));
i__5750__auto___31478 = G__31481;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31197,ev,args){
var map__31198 = p__31197;
var map__31198__$1 = cljs.core.__destructure_map(map__31198);
var runtime = map__31198__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31198__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31199 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31202 = null;
var count__31203 = (0);
var i__31204 = (0);
while(true){
if((i__31204 < count__31203)){
var ext = chunk__31202.cljs$core$IIndexed$_nth$arity$2(null,i__31204);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31496 = seq__31199;
var G__31497 = chunk__31202;
var G__31498 = count__31203;
var G__31499 = (i__31204 + (1));
seq__31199 = G__31496;
chunk__31202 = G__31497;
count__31203 = G__31498;
i__31204 = G__31499;
continue;
} else {
var G__31500 = seq__31199;
var G__31501 = chunk__31202;
var G__31502 = count__31203;
var G__31503 = (i__31204 + (1));
seq__31199 = G__31500;
chunk__31202 = G__31501;
count__31203 = G__31502;
i__31204 = G__31503;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31199);
if(temp__5825__auto__){
var seq__31199__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31199__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31199__$1);
var G__31506 = cljs.core.chunk_rest(seq__31199__$1);
var G__31507 = c__5548__auto__;
var G__31508 = cljs.core.count(c__5548__auto__);
var G__31509 = (0);
seq__31199 = G__31506;
chunk__31202 = G__31507;
count__31203 = G__31508;
i__31204 = G__31509;
continue;
} else {
var ext = cljs.core.first(seq__31199__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31512 = cljs.core.next(seq__31199__$1);
var G__31513 = null;
var G__31514 = (0);
var G__31515 = (0);
seq__31199 = G__31512;
chunk__31202 = G__31513;
count__31203 = G__31514;
i__31204 = G__31515;
continue;
} else {
var G__31517 = cljs.core.next(seq__31199__$1);
var G__31518 = null;
var G__31519 = (0);
var G__31520 = (0);
seq__31199 = G__31517;
chunk__31202 = G__31518;
count__31203 = G__31519;
i__31204 = G__31520;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31193){
var G__31194 = cljs.core.first(seq31193);
var seq31193__$1 = cljs.core.next(seq31193);
var G__31195 = cljs.core.first(seq31193__$1);
var seq31193__$2 = cljs.core.next(seq31193__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31194,G__31195,seq31193__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31226,p__31227){
var map__31228 = p__31226;
var map__31228__$1 = cljs.core.__destructure_map(map__31228);
var runtime = map__31228__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31228__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31229 = p__31227;
var map__31229__$1 = cljs.core.__destructure_map(map__31229);
var msg = map__31229__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31231 = cljs.core.deref(state_ref);
var map__31231__$1 = cljs.core.__destructure_map(map__31231);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31233,msg){
var map__31234 = p__31233;
var map__31234__$1 = cljs.core.__destructure_map(map__31234);
var runtime = map__31234__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31238,key,p__31239){
var map__31244 = p__31238;
var map__31244__$1 = cljs.core.__destructure_map(map__31244);
var state = map__31244__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31244__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31245 = p__31239;
var map__31245__$1 = cljs.core.__destructure_map(map__31245);
var spec = map__31245__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31245__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31245__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31252,key,spec){
var map__31253 = p__31252;
var map__31253__$1 = cljs.core.__destructure_map(map__31253);
var runtime = map__31253__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___31553 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___31553 == null)){
} else {
var on_welcome_31555 = temp__5829__auto___31553;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31555.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31555.cljs$core$IFn$_invoke$arity$0() : on_welcome_31555.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31254_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31254_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31255_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31255_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31256_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31256_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31257_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31257_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31258_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31258_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31282,key){
var map__31284 = p__31282;
var map__31284__$1 = cljs.core.__destructure_map(map__31284);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31284__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31302,msg){
var map__31304 = p__31302;
var map__31304__$1 = cljs.core.__destructure_map(map__31304);
var runtime = map__31304__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31304__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31334,p__31335){
var map__31336 = p__31334;
var map__31336__$1 = cljs.core.__destructure_map(map__31336);
var runtime = map__31336__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31337 = p__31335;
var map__31337__$1 = cljs.core.__destructure_map(map__31337);
var msg = map__31337__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31337__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31350 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31353 = null;
var count__31354 = (0);
var i__31355 = (0);
while(true){
if((i__31355 < count__31354)){
var map__31387 = chunk__31353.cljs$core$IIndexed$_nth$arity$2(null,i__31355);
var map__31387__$1 = cljs.core.__destructure_map(map__31387);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31387__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31613 = seq__31350;
var G__31614 = chunk__31353;
var G__31615 = count__31354;
var G__31616 = (i__31355 + (1));
seq__31350 = G__31613;
chunk__31353 = G__31614;
count__31354 = G__31615;
i__31355 = G__31616;
continue;
} else {
var G__31618 = seq__31350;
var G__31619 = chunk__31353;
var G__31620 = count__31354;
var G__31622 = (i__31355 + (1));
seq__31350 = G__31618;
chunk__31353 = G__31619;
count__31354 = G__31620;
i__31355 = G__31622;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__31350);
if(temp__5825__auto__){
var seq__31350__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31350__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__31350__$1);
var G__31629 = cljs.core.chunk_rest(seq__31350__$1);
var G__31630 = c__5548__auto__;
var G__31631 = cljs.core.count(c__5548__auto__);
var G__31632 = (0);
seq__31350 = G__31629;
chunk__31353 = G__31630;
count__31354 = G__31631;
i__31355 = G__31632;
continue;
} else {
var map__31395 = cljs.core.first(seq__31350__$1);
var map__31395__$1 = cljs.core.__destructure_map(map__31395);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31395__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31638 = cljs.core.next(seq__31350__$1);
var G__31639 = null;
var G__31640 = (0);
var G__31641 = (0);
seq__31350 = G__31638;
chunk__31353 = G__31639;
count__31354 = G__31640;
i__31355 = G__31641;
continue;
} else {
var G__31642 = cljs.core.next(seq__31350__$1);
var G__31643 = null;
var G__31644 = (0);
var G__31645 = (0);
seq__31350 = G__31642;
chunk__31353 = G__31643;
count__31354 = G__31644;
i__31355 = G__31645;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
