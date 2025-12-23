goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38096 = arguments.length;
var i__5750__auto___38097 = (0);
while(true){
if((i__5750__auto___38097 < len__5749__auto___38096)){
args__5755__auto__.push((arguments[i__5750__auto___38097]));

var G__38098 = (i__5750__auto___38097 + (1));
i__5750__auto___38097 = G__38098;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37658){
var G__37659 = cljs.core.first(seq37658);
var seq37658__$1 = cljs.core.next(seq37658);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37659,seq37658__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37674 = cljs.core.seq(sources);
var chunk__37675 = null;
var count__37676 = (0);
var i__37677 = (0);
while(true){
if((i__37677 < count__37676)){
var map__37686 = chunk__37675.cljs$core$IIndexed$_nth$arity$2(null,i__37677);
var map__37686__$1 = cljs.core.__destructure_map(map__37686);
var src = map__37686__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37686__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37688){var e_38099 = e37688;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38099);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38099.message)].join('')));
}

var G__38100 = seq__37674;
var G__38101 = chunk__37675;
var G__38102 = count__37676;
var G__38103 = (i__37677 + (1));
seq__37674 = G__38100;
chunk__37675 = G__38101;
count__37676 = G__38102;
i__37677 = G__38103;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37674);
if(temp__5825__auto__){
var seq__37674__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37674__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37674__$1);
var G__38104 = cljs.core.chunk_rest(seq__37674__$1);
var G__38105 = c__5548__auto__;
var G__38106 = cljs.core.count(c__5548__auto__);
var G__38107 = (0);
seq__37674 = G__38104;
chunk__37675 = G__38105;
count__37676 = G__38106;
i__37677 = G__38107;
continue;
} else {
var map__37690 = cljs.core.first(seq__37674__$1);
var map__37690__$1 = cljs.core.__destructure_map(map__37690);
var src = map__37690__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37691){var e_38108 = e37691;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38108);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38108.message)].join('')));
}

var G__38109 = cljs.core.next(seq__37674__$1);
var G__38110 = null;
var G__38111 = (0);
var G__38112 = (0);
seq__37674 = G__38109;
chunk__37675 = G__38110;
count__37676 = G__38111;
i__37677 = G__38112;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37707 = cljs.core.seq(js_requires);
var chunk__37708 = null;
var count__37709 = (0);
var i__37710 = (0);
while(true){
if((i__37710 < count__37709)){
var js_ns = chunk__37708.cljs$core$IIndexed$_nth$arity$2(null,i__37710);
var require_str_38113 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38113);


var G__38114 = seq__37707;
var G__38115 = chunk__37708;
var G__38116 = count__37709;
var G__38117 = (i__37710 + (1));
seq__37707 = G__38114;
chunk__37708 = G__38115;
count__37709 = G__38116;
i__37710 = G__38117;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37707);
if(temp__5825__auto__){
var seq__37707__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37707__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37707__$1);
var G__38118 = cljs.core.chunk_rest(seq__37707__$1);
var G__38119 = c__5548__auto__;
var G__38120 = cljs.core.count(c__5548__auto__);
var G__38121 = (0);
seq__37707 = G__38118;
chunk__37708 = G__38119;
count__37709 = G__38120;
i__37710 = G__38121;
continue;
} else {
var js_ns = cljs.core.first(seq__37707__$1);
var require_str_38123 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38123);


var G__38124 = cljs.core.next(seq__37707__$1);
var G__38125 = null;
var G__38126 = (0);
var G__38127 = (0);
seq__37707 = G__38124;
chunk__37708 = G__38125;
count__37709 = G__38126;
i__37710 = G__38127;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37717){
var map__37718 = p__37717;
var map__37718__$1 = cljs.core.__destructure_map(map__37718);
var msg = map__37718__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37718__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37719(s__37720){
return (new cljs.core.LazySeq(null,(function (){
var s__37720__$1 = s__37720;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37720__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37730 = cljs.core.first(xs__6385__auto__);
var map__37730__$1 = cljs.core.__destructure_map(map__37730);
var src = map__37730__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37720__$1,map__37730,map__37730__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37718,map__37718__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37719_$_iter__37721(s__37722){
return (new cljs.core.LazySeq(null,((function (s__37720__$1,map__37730,map__37730__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37718,map__37718__$1,msg,info,reload_info){
return (function (){
var s__37722__$1 = s__37722;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37722__$1);
if(temp__5825__auto____$1){
var s__37722__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37722__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37722__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37724 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37723 = (0);
while(true){
if((i__37723 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37723);
cljs.core.chunk_append(b__37724,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38128 = (i__37723 + (1));
i__37723 = G__38128;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37724),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37719_$_iter__37721(cljs.core.chunk_rest(s__37722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37724),null);
}
} else {
var warning = cljs.core.first(s__37722__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37719_$_iter__37721(cljs.core.rest(s__37722__$2)));
}
} else {
return null;
}
break;
}
});})(s__37720__$1,map__37730,map__37730__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37718,map__37718__$1,msg,info,reload_info))
,null,null));
});})(s__37720__$1,map__37730,map__37730__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37718,map__37718__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37719(cljs.core.rest(s__37720__$1)));
} else {
var G__38129 = cljs.core.rest(s__37720__$1);
s__37720__$1 = G__38129;
continue;
}
} else {
var G__38130 = cljs.core.rest(s__37720__$1);
s__37720__$1 = G__38130;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37731_38132 = cljs.core.seq(warnings);
var chunk__37732_38133 = null;
var count__37733_38134 = (0);
var i__37734_38135 = (0);
while(true){
if((i__37734_38135 < count__37733_38134)){
var map__37738_38136 = chunk__37732_38133.cljs$core$IIndexed$_nth$arity$2(null,i__37734_38135);
var map__37738_38137__$1 = cljs.core.__destructure_map(map__37738_38136);
var w_38138 = map__37738_38137__$1;
var msg_38139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38137__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38137__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38137__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738_38137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38142)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38140),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38141),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38139__$1)].join(''));


var G__38143 = seq__37731_38132;
var G__38144 = chunk__37732_38133;
var G__38145 = count__37733_38134;
var G__38146 = (i__37734_38135 + (1));
seq__37731_38132 = G__38143;
chunk__37732_38133 = G__38144;
count__37733_38134 = G__38145;
i__37734_38135 = G__38146;
continue;
} else {
var temp__5825__auto___38147 = cljs.core.seq(seq__37731_38132);
if(temp__5825__auto___38147){
var seq__37731_38148__$1 = temp__5825__auto___38147;
if(cljs.core.chunked_seq_QMARK_(seq__37731_38148__$1)){
var c__5548__auto___38149 = cljs.core.chunk_first(seq__37731_38148__$1);
var G__38151 = cljs.core.chunk_rest(seq__37731_38148__$1);
var G__38152 = c__5548__auto___38149;
var G__38153 = cljs.core.count(c__5548__auto___38149);
var G__38154 = (0);
seq__37731_38132 = G__38151;
chunk__37732_38133 = G__38152;
count__37733_38134 = G__38153;
i__37734_38135 = G__38154;
continue;
} else {
var map__37739_38156 = cljs.core.first(seq__37731_38148__$1);
var map__37739_38157__$1 = cljs.core.__destructure_map(map__37739_38156);
var w_38158 = map__37739_38157__$1;
var msg_38159__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38157__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38157__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38157__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37739_38157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38162)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38160),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38161),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38159__$1)].join(''));


var G__38163 = cljs.core.next(seq__37731_38148__$1);
var G__38164 = null;
var G__38165 = (0);
var G__38166 = (0);
seq__37731_38132 = G__38163;
chunk__37732_38133 = G__38164;
count__37733_38134 = G__38165;
i__37734_38135 = G__38166;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37716_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37716_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37748 = node_uri;
G__37748.setQuery(null);

G__37748.setPath(new$);

return G__37748;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37749){
var map__37750 = p__37749;
var map__37750__$1 = cljs.core.__destructure_map(map__37750);
var msg = map__37750__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37750__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37751 = cljs.core.seq(updates);
var chunk__37753 = null;
var count__37754 = (0);
var i__37755 = (0);
while(true){
if((i__37755 < count__37754)){
var path = chunk__37753.cljs$core$IIndexed$_nth$arity$2(null,i__37755);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37903_38170 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37909_38171 = null;
var count__37910_38172 = (0);
var i__37911_38173 = (0);
while(true){
if((i__37911_38173 < count__37910_38172)){
var node_38174 = chunk__37909_38171.cljs$core$IIndexed$_nth$arity$2(null,i__37911_38173);
if(cljs.core.not(node_38174.shadow$old)){
var path_match_38175 = shadow.cljs.devtools.client.browser.match_paths(node_38174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38175)){
var new_link_38176 = (function (){var G__37959 = node_38174.cloneNode(true);
G__37959.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37959;
})();
(node_38174.shadow$old = true);

(new_link_38176.onload = ((function (seq__37903_38170,chunk__37909_38171,count__37910_38172,i__37911_38173,seq__37751,chunk__37753,count__37754,i__37755,new_link_38176,path_match_38175,node_38174,path,map__37750,map__37750__$1,msg,updates,reload_info){
return (function (e){
var seq__37962_38177 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37964_38178 = null;
var count__37965_38179 = (0);
var i__37966_38180 = (0);
while(true){
if((i__37966_38180 < count__37965_38179)){
var map__37973_38181 = chunk__37964_38178.cljs$core$IIndexed$_nth$arity$2(null,i__37966_38180);
var map__37973_38182__$1 = cljs.core.__destructure_map(map__37973_38181);
var task_38183 = map__37973_38182__$1;
var fn_str_38184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37973_38182__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37973_38182__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38186 = goog.getObjectByName(fn_str_38184,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38185)].join(''));

(fn_obj_38186.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38186.cljs$core$IFn$_invoke$arity$2(path,new_link_38176) : fn_obj_38186.call(null,path,new_link_38176));


var G__38187 = seq__37962_38177;
var G__38188 = chunk__37964_38178;
var G__38189 = count__37965_38179;
var G__38190 = (i__37966_38180 + (1));
seq__37962_38177 = G__38187;
chunk__37964_38178 = G__38188;
count__37965_38179 = G__38189;
i__37966_38180 = G__38190;
continue;
} else {
var temp__5825__auto___38191 = cljs.core.seq(seq__37962_38177);
if(temp__5825__auto___38191){
var seq__37962_38192__$1 = temp__5825__auto___38191;
if(cljs.core.chunked_seq_QMARK_(seq__37962_38192__$1)){
var c__5548__auto___38193 = cljs.core.chunk_first(seq__37962_38192__$1);
var G__38194 = cljs.core.chunk_rest(seq__37962_38192__$1);
var G__38195 = c__5548__auto___38193;
var G__38196 = cljs.core.count(c__5548__auto___38193);
var G__38197 = (0);
seq__37962_38177 = G__38194;
chunk__37964_38178 = G__38195;
count__37965_38179 = G__38196;
i__37966_38180 = G__38197;
continue;
} else {
var map__37976_38198 = cljs.core.first(seq__37962_38192__$1);
var map__37976_38199__$1 = cljs.core.__destructure_map(map__37976_38198);
var task_38200 = map__37976_38199__$1;
var fn_str_38201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976_38199__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37976_38199__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38203 = goog.getObjectByName(fn_str_38201,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38202)].join(''));

(fn_obj_38203.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38203.cljs$core$IFn$_invoke$arity$2(path,new_link_38176) : fn_obj_38203.call(null,path,new_link_38176));


var G__38204 = cljs.core.next(seq__37962_38192__$1);
var G__38205 = null;
var G__38206 = (0);
var G__38207 = (0);
seq__37962_38177 = G__38204;
chunk__37964_38178 = G__38205;
count__37965_38179 = G__38206;
i__37966_38180 = G__38207;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38174);
});})(seq__37903_38170,chunk__37909_38171,count__37910_38172,i__37911_38173,seq__37751,chunk__37753,count__37754,i__37755,new_link_38176,path_match_38175,node_38174,path,map__37750,map__37750__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38175], 0));

goog.dom.insertSiblingAfter(new_link_38176,node_38174);


var G__38208 = seq__37903_38170;
var G__38209 = chunk__37909_38171;
var G__38210 = count__37910_38172;
var G__38211 = (i__37911_38173 + (1));
seq__37903_38170 = G__38208;
chunk__37909_38171 = G__38209;
count__37910_38172 = G__38210;
i__37911_38173 = G__38211;
continue;
} else {
var G__38212 = seq__37903_38170;
var G__38213 = chunk__37909_38171;
var G__38214 = count__37910_38172;
var G__38215 = (i__37911_38173 + (1));
seq__37903_38170 = G__38212;
chunk__37909_38171 = G__38213;
count__37910_38172 = G__38214;
i__37911_38173 = G__38215;
continue;
}
} else {
var G__38216 = seq__37903_38170;
var G__38217 = chunk__37909_38171;
var G__38218 = count__37910_38172;
var G__38219 = (i__37911_38173 + (1));
seq__37903_38170 = G__38216;
chunk__37909_38171 = G__38217;
count__37910_38172 = G__38218;
i__37911_38173 = G__38219;
continue;
}
} else {
var temp__5825__auto___38220 = cljs.core.seq(seq__37903_38170);
if(temp__5825__auto___38220){
var seq__37903_38221__$1 = temp__5825__auto___38220;
if(cljs.core.chunked_seq_QMARK_(seq__37903_38221__$1)){
var c__5548__auto___38222 = cljs.core.chunk_first(seq__37903_38221__$1);
var G__38223 = cljs.core.chunk_rest(seq__37903_38221__$1);
var G__38224 = c__5548__auto___38222;
var G__38225 = cljs.core.count(c__5548__auto___38222);
var G__38226 = (0);
seq__37903_38170 = G__38223;
chunk__37909_38171 = G__38224;
count__37910_38172 = G__38225;
i__37911_38173 = G__38226;
continue;
} else {
var node_38227 = cljs.core.first(seq__37903_38221__$1);
if(cljs.core.not(node_38227.shadow$old)){
var path_match_38228 = shadow.cljs.devtools.client.browser.match_paths(node_38227.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38228)){
var new_link_38230 = (function (){var G__37977 = node_38227.cloneNode(true);
G__37977.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38228),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37977;
})();
(node_38227.shadow$old = true);

(new_link_38230.onload = ((function (seq__37903_38170,chunk__37909_38171,count__37910_38172,i__37911_38173,seq__37751,chunk__37753,count__37754,i__37755,new_link_38230,path_match_38228,node_38227,seq__37903_38221__$1,temp__5825__auto___38220,path,map__37750,map__37750__$1,msg,updates,reload_info){
return (function (e){
var seq__37978_38231 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37980_38232 = null;
var count__37981_38233 = (0);
var i__37982_38234 = (0);
while(true){
if((i__37982_38234 < count__37981_38233)){
var map__37988_38235 = chunk__37980_38232.cljs$core$IIndexed$_nth$arity$2(null,i__37982_38234);
var map__37988_38236__$1 = cljs.core.__destructure_map(map__37988_38235);
var task_38237 = map__37988_38236__$1;
var fn_str_38238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988_38236__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37988_38236__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38240 = goog.getObjectByName(fn_str_38238,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38239)].join(''));

(fn_obj_38240.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38240.cljs$core$IFn$_invoke$arity$2(path,new_link_38230) : fn_obj_38240.call(null,path,new_link_38230));


var G__38241 = seq__37978_38231;
var G__38242 = chunk__37980_38232;
var G__38243 = count__37981_38233;
var G__38244 = (i__37982_38234 + (1));
seq__37978_38231 = G__38241;
chunk__37980_38232 = G__38242;
count__37981_38233 = G__38243;
i__37982_38234 = G__38244;
continue;
} else {
var temp__5825__auto___38245__$1 = cljs.core.seq(seq__37978_38231);
if(temp__5825__auto___38245__$1){
var seq__37978_38246__$1 = temp__5825__auto___38245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37978_38246__$1)){
var c__5548__auto___38247 = cljs.core.chunk_first(seq__37978_38246__$1);
var G__38248 = cljs.core.chunk_rest(seq__37978_38246__$1);
var G__38249 = c__5548__auto___38247;
var G__38250 = cljs.core.count(c__5548__auto___38247);
var G__38251 = (0);
seq__37978_38231 = G__38248;
chunk__37980_38232 = G__38249;
count__37981_38233 = G__38250;
i__37982_38234 = G__38251;
continue;
} else {
var map__37989_38252 = cljs.core.first(seq__37978_38246__$1);
var map__37989_38253__$1 = cljs.core.__destructure_map(map__37989_38252);
var task_38254 = map__37989_38253__$1;
var fn_str_38255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38253__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38253__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38257 = goog.getObjectByName(fn_str_38255,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38256)].join(''));

(fn_obj_38257.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38257.cljs$core$IFn$_invoke$arity$2(path,new_link_38230) : fn_obj_38257.call(null,path,new_link_38230));


var G__38258 = cljs.core.next(seq__37978_38246__$1);
var G__38259 = null;
var G__38260 = (0);
var G__38261 = (0);
seq__37978_38231 = G__38258;
chunk__37980_38232 = G__38259;
count__37981_38233 = G__38260;
i__37982_38234 = G__38261;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38227);
});})(seq__37903_38170,chunk__37909_38171,count__37910_38172,i__37911_38173,seq__37751,chunk__37753,count__37754,i__37755,new_link_38230,path_match_38228,node_38227,seq__37903_38221__$1,temp__5825__auto___38220,path,map__37750,map__37750__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38228], 0));

goog.dom.insertSiblingAfter(new_link_38230,node_38227);


var G__38262 = cljs.core.next(seq__37903_38221__$1);
var G__38263 = null;
var G__38264 = (0);
var G__38265 = (0);
seq__37903_38170 = G__38262;
chunk__37909_38171 = G__38263;
count__37910_38172 = G__38264;
i__37911_38173 = G__38265;
continue;
} else {
var G__38266 = cljs.core.next(seq__37903_38221__$1);
var G__38267 = null;
var G__38268 = (0);
var G__38269 = (0);
seq__37903_38170 = G__38266;
chunk__37909_38171 = G__38267;
count__37910_38172 = G__38268;
i__37911_38173 = G__38269;
continue;
}
} else {
var G__38270 = cljs.core.next(seq__37903_38221__$1);
var G__38271 = null;
var G__38272 = (0);
var G__38273 = (0);
seq__37903_38170 = G__38270;
chunk__37909_38171 = G__38271;
count__37910_38172 = G__38272;
i__37911_38173 = G__38273;
continue;
}
}
} else {
}
}
break;
}


var G__38274 = seq__37751;
var G__38275 = chunk__37753;
var G__38276 = count__37754;
var G__38277 = (i__37755 + (1));
seq__37751 = G__38274;
chunk__37753 = G__38275;
count__37754 = G__38276;
i__37755 = G__38277;
continue;
} else {
var G__38278 = seq__37751;
var G__38279 = chunk__37753;
var G__38280 = count__37754;
var G__38281 = (i__37755 + (1));
seq__37751 = G__38278;
chunk__37753 = G__38279;
count__37754 = G__38280;
i__37755 = G__38281;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37751);
if(temp__5825__auto__){
var seq__37751__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37751__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37751__$1);
var G__38282 = cljs.core.chunk_rest(seq__37751__$1);
var G__38283 = c__5548__auto__;
var G__38284 = cljs.core.count(c__5548__auto__);
var G__38285 = (0);
seq__37751 = G__38282;
chunk__37753 = G__38283;
count__37754 = G__38284;
i__37755 = G__38285;
continue;
} else {
var path = cljs.core.first(seq__37751__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37993_38286 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37997_38287 = null;
var count__37998_38288 = (0);
var i__37999_38289 = (0);
while(true){
if((i__37999_38289 < count__37998_38288)){
var node_38290 = chunk__37997_38287.cljs$core$IIndexed$_nth$arity$2(null,i__37999_38289);
if(cljs.core.not(node_38290.shadow$old)){
var path_match_38291 = shadow.cljs.devtools.client.browser.match_paths(node_38290.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38291)){
var new_link_38292 = (function (){var G__38028 = node_38290.cloneNode(true);
G__38028.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38291),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38028;
})();
(node_38290.shadow$old = true);

(new_link_38292.onload = ((function (seq__37993_38286,chunk__37997_38287,count__37998_38288,i__37999_38289,seq__37751,chunk__37753,count__37754,i__37755,new_link_38292,path_match_38291,node_38290,path,seq__37751__$1,temp__5825__auto__,map__37750,map__37750__$1,msg,updates,reload_info){
return (function (e){
var seq__38029_38293 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38031_38294 = null;
var count__38032_38295 = (0);
var i__38033_38296 = (0);
while(true){
if((i__38033_38296 < count__38032_38295)){
var map__38037_38297 = chunk__38031_38294.cljs$core$IIndexed$_nth$arity$2(null,i__38033_38296);
var map__38037_38298__$1 = cljs.core.__destructure_map(map__38037_38297);
var task_38299 = map__38037_38298__$1;
var fn_str_38300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037_38298__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38037_38298__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38302 = goog.getObjectByName(fn_str_38300,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38301)].join(''));

(fn_obj_38302.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38302.cljs$core$IFn$_invoke$arity$2(path,new_link_38292) : fn_obj_38302.call(null,path,new_link_38292));


var G__38303 = seq__38029_38293;
var G__38304 = chunk__38031_38294;
var G__38305 = count__38032_38295;
var G__38306 = (i__38033_38296 + (1));
seq__38029_38293 = G__38303;
chunk__38031_38294 = G__38304;
count__38032_38295 = G__38305;
i__38033_38296 = G__38306;
continue;
} else {
var temp__5825__auto___38307__$1 = cljs.core.seq(seq__38029_38293);
if(temp__5825__auto___38307__$1){
var seq__38029_38308__$1 = temp__5825__auto___38307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38029_38308__$1)){
var c__5548__auto___38309 = cljs.core.chunk_first(seq__38029_38308__$1);
var G__38310 = cljs.core.chunk_rest(seq__38029_38308__$1);
var G__38311 = c__5548__auto___38309;
var G__38312 = cljs.core.count(c__5548__auto___38309);
var G__38313 = (0);
seq__38029_38293 = G__38310;
chunk__38031_38294 = G__38311;
count__38032_38295 = G__38312;
i__38033_38296 = G__38313;
continue;
} else {
var map__38038_38314 = cljs.core.first(seq__38029_38308__$1);
var map__38038_38315__$1 = cljs.core.__destructure_map(map__38038_38314);
var task_38316 = map__38038_38315__$1;
var fn_str_38317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38038_38315__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38038_38315__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38319 = goog.getObjectByName(fn_str_38317,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38318)].join(''));

(fn_obj_38319.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38319.cljs$core$IFn$_invoke$arity$2(path,new_link_38292) : fn_obj_38319.call(null,path,new_link_38292));


var G__38320 = cljs.core.next(seq__38029_38308__$1);
var G__38321 = null;
var G__38322 = (0);
var G__38323 = (0);
seq__38029_38293 = G__38320;
chunk__38031_38294 = G__38321;
count__38032_38295 = G__38322;
i__38033_38296 = G__38323;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38290);
});})(seq__37993_38286,chunk__37997_38287,count__37998_38288,i__37999_38289,seq__37751,chunk__37753,count__37754,i__37755,new_link_38292,path_match_38291,node_38290,path,seq__37751__$1,temp__5825__auto__,map__37750,map__37750__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38291], 0));

goog.dom.insertSiblingAfter(new_link_38292,node_38290);


var G__38324 = seq__37993_38286;
var G__38325 = chunk__37997_38287;
var G__38326 = count__37998_38288;
var G__38327 = (i__37999_38289 + (1));
seq__37993_38286 = G__38324;
chunk__37997_38287 = G__38325;
count__37998_38288 = G__38326;
i__37999_38289 = G__38327;
continue;
} else {
var G__38328 = seq__37993_38286;
var G__38329 = chunk__37997_38287;
var G__38330 = count__37998_38288;
var G__38331 = (i__37999_38289 + (1));
seq__37993_38286 = G__38328;
chunk__37997_38287 = G__38329;
count__37998_38288 = G__38330;
i__37999_38289 = G__38331;
continue;
}
} else {
var G__38332 = seq__37993_38286;
var G__38333 = chunk__37997_38287;
var G__38334 = count__37998_38288;
var G__38335 = (i__37999_38289 + (1));
seq__37993_38286 = G__38332;
chunk__37997_38287 = G__38333;
count__37998_38288 = G__38334;
i__37999_38289 = G__38335;
continue;
}
} else {
var temp__5825__auto___38336__$1 = cljs.core.seq(seq__37993_38286);
if(temp__5825__auto___38336__$1){
var seq__37993_38337__$1 = temp__5825__auto___38336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37993_38337__$1)){
var c__5548__auto___38338 = cljs.core.chunk_first(seq__37993_38337__$1);
var G__38339 = cljs.core.chunk_rest(seq__37993_38337__$1);
var G__38340 = c__5548__auto___38338;
var G__38341 = cljs.core.count(c__5548__auto___38338);
var G__38342 = (0);
seq__37993_38286 = G__38339;
chunk__37997_38287 = G__38340;
count__37998_38288 = G__38341;
i__37999_38289 = G__38342;
continue;
} else {
var node_38343 = cljs.core.first(seq__37993_38337__$1);
if(cljs.core.not(node_38343.shadow$old)){
var path_match_38344 = shadow.cljs.devtools.client.browser.match_paths(node_38343.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38344)){
var new_link_38345 = (function (){var G__38039 = node_38343.cloneNode(true);
G__38039.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38344),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38039;
})();
(node_38343.shadow$old = true);

(new_link_38345.onload = ((function (seq__37993_38286,chunk__37997_38287,count__37998_38288,i__37999_38289,seq__37751,chunk__37753,count__37754,i__37755,new_link_38345,path_match_38344,node_38343,seq__37993_38337__$1,temp__5825__auto___38336__$1,path,seq__37751__$1,temp__5825__auto__,map__37750,map__37750__$1,msg,updates,reload_info){
return (function (e){
var seq__38040_38347 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38042_38348 = null;
var count__38043_38349 = (0);
var i__38044_38350 = (0);
while(true){
if((i__38044_38350 < count__38043_38349)){
var map__38052_38351 = chunk__38042_38348.cljs$core$IIndexed$_nth$arity$2(null,i__38044_38350);
var map__38052_38352__$1 = cljs.core.__destructure_map(map__38052_38351);
var task_38353 = map__38052_38352__$1;
var fn_str_38354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052_38352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38052_38352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38356 = goog.getObjectByName(fn_str_38354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38355)].join(''));

(fn_obj_38356.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38356.cljs$core$IFn$_invoke$arity$2(path,new_link_38345) : fn_obj_38356.call(null,path,new_link_38345));


var G__38357 = seq__38040_38347;
var G__38358 = chunk__38042_38348;
var G__38359 = count__38043_38349;
var G__38360 = (i__38044_38350 + (1));
seq__38040_38347 = G__38357;
chunk__38042_38348 = G__38358;
count__38043_38349 = G__38359;
i__38044_38350 = G__38360;
continue;
} else {
var temp__5825__auto___38361__$2 = cljs.core.seq(seq__38040_38347);
if(temp__5825__auto___38361__$2){
var seq__38040_38362__$1 = temp__5825__auto___38361__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38040_38362__$1)){
var c__5548__auto___38363 = cljs.core.chunk_first(seq__38040_38362__$1);
var G__38364 = cljs.core.chunk_rest(seq__38040_38362__$1);
var G__38365 = c__5548__auto___38363;
var G__38366 = cljs.core.count(c__5548__auto___38363);
var G__38367 = (0);
seq__38040_38347 = G__38364;
chunk__38042_38348 = G__38365;
count__38043_38349 = G__38366;
i__38044_38350 = G__38367;
continue;
} else {
var map__38055_38368 = cljs.core.first(seq__38040_38362__$1);
var map__38055_38369__$1 = cljs.core.__destructure_map(map__38055_38368);
var task_38370 = map__38055_38369__$1;
var fn_str_38371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055_38369__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055_38369__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38373 = goog.getObjectByName(fn_str_38371,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38372)].join(''));

(fn_obj_38373.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38373.cljs$core$IFn$_invoke$arity$2(path,new_link_38345) : fn_obj_38373.call(null,path,new_link_38345));


var G__38374 = cljs.core.next(seq__38040_38362__$1);
var G__38375 = null;
var G__38376 = (0);
var G__38377 = (0);
seq__38040_38347 = G__38374;
chunk__38042_38348 = G__38375;
count__38043_38349 = G__38376;
i__38044_38350 = G__38377;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38343);
});})(seq__37993_38286,chunk__37997_38287,count__37998_38288,i__37999_38289,seq__37751,chunk__37753,count__37754,i__37755,new_link_38345,path_match_38344,node_38343,seq__37993_38337__$1,temp__5825__auto___38336__$1,path,seq__37751__$1,temp__5825__auto__,map__37750,map__37750__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38344], 0));

goog.dom.insertSiblingAfter(new_link_38345,node_38343);


var G__38378 = cljs.core.next(seq__37993_38337__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__37993_38286 = G__38378;
chunk__37997_38287 = G__38379;
count__37998_38288 = G__38380;
i__37999_38289 = G__38381;
continue;
} else {
var G__38382 = cljs.core.next(seq__37993_38337__$1);
var G__38383 = null;
var G__38384 = (0);
var G__38385 = (0);
seq__37993_38286 = G__38382;
chunk__37997_38287 = G__38383;
count__37998_38288 = G__38384;
i__37999_38289 = G__38385;
continue;
}
} else {
var G__38386 = cljs.core.next(seq__37993_38337__$1);
var G__38387 = null;
var G__38388 = (0);
var G__38389 = (0);
seq__37993_38286 = G__38386;
chunk__37997_38287 = G__38387;
count__37998_38288 = G__38388;
i__37999_38289 = G__38389;
continue;
}
}
} else {
}
}
break;
}


var G__38390 = cljs.core.next(seq__37751__$1);
var G__38391 = null;
var G__38392 = (0);
var G__38393 = (0);
seq__37751 = G__38390;
chunk__37753 = G__38391;
count__37754 = G__38392;
i__37755 = G__38393;
continue;
} else {
var G__38394 = cljs.core.next(seq__37751__$1);
var G__38395 = null;
var G__38396 = (0);
var G__38397 = (0);
seq__37751 = G__38394;
chunk__37753 = G__38395;
count__37754 = G__38396;
i__37755 = G__38397;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__38057 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38057) : success.call(null,G__38057));
}catch (e38056){var e = e38056;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38058,success,fail){
var map__38059 = p__38058;
var map__38059__$1 = cljs.core.__destructure_map(map__38059);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38059__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38061 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38061) : success.call(null,G__38061));
}catch (e38060){var e = e38060;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38062,done,error){
var map__38063 = p__38062;
var map__38063__$1 = cljs.core.__destructure_map(map__38063);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38063__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38064,done,error){
var map__38065 = p__38064;
var map__38065__$1 = cljs.core.__destructure_map(map__38065);
var msg = map__38065__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38065__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38065__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38065__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38069){
var map__38071 = p__38069;
var map__38071__$1 = cljs.core.__destructure_map(map__38071);
var src = map__38071__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38074 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38074) : done.call(null,G__38074));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38075){
var map__38076 = p__38075;
var map__38076__$1 = cljs.core.__destructure_map(map__38076);
var msg__$1 = map__38076__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38076__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38077){var ex = e38077;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38081){
var map__38082 = p__38081;
var map__38082__$1 = cljs.core.__destructure_map(map__38082);
var env = map__38082__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38088){
var map__38089 = p__38088;
var map__38089__$1 = cljs.core.__destructure_map(map__38089);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38092){
var map__38093 = p__38092;
var map__38093__$1 = cljs.core.__destructure_map(map__38093);
var svc = map__38093__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38093__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
