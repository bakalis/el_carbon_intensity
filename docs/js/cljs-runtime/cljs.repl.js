goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35322){
var map__35323 = p__35322;
var map__35323__$1 = cljs.core.__destructure_map(map__35323);
var m = map__35323__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35323__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35327_35863 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35329_35864 = null;
var count__35330_35865 = (0);
var i__35331_35866 = (0);
while(true){
if((i__35331_35866 < count__35330_35865)){
var f_35868 = chunk__35329_35864.cljs$core$IIndexed$_nth$arity$2(null,i__35331_35866);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35868], 0));


var G__35872 = seq__35327_35863;
var G__35873 = chunk__35329_35864;
var G__35874 = count__35330_35865;
var G__35875 = (i__35331_35866 + (1));
seq__35327_35863 = G__35872;
chunk__35329_35864 = G__35873;
count__35330_35865 = G__35874;
i__35331_35866 = G__35875;
continue;
} else {
var temp__5825__auto___35876 = cljs.core.seq(seq__35327_35863);
if(temp__5825__auto___35876){
var seq__35327_35879__$1 = temp__5825__auto___35876;
if(cljs.core.chunked_seq_QMARK_(seq__35327_35879__$1)){
var c__5548__auto___35881 = cljs.core.chunk_first(seq__35327_35879__$1);
var G__35882 = cljs.core.chunk_rest(seq__35327_35879__$1);
var G__35883 = c__5548__auto___35881;
var G__35884 = cljs.core.count(c__5548__auto___35881);
var G__35885 = (0);
seq__35327_35863 = G__35882;
chunk__35329_35864 = G__35883;
count__35330_35865 = G__35884;
i__35331_35866 = G__35885;
continue;
} else {
var f_35889 = cljs.core.first(seq__35327_35879__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35889], 0));


var G__35895 = cljs.core.next(seq__35327_35879__$1);
var G__35896 = null;
var G__35897 = (0);
var G__35898 = (0);
seq__35327_35863 = G__35895;
chunk__35329_35864 = G__35896;
count__35330_35865 = G__35897;
i__35331_35866 = G__35898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35899], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35899)))?cljs.core.second(arglists_35899):arglists_35899)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35348_35919 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35349_35920 = null;
var count__35350_35921 = (0);
var i__35351_35922 = (0);
while(true){
if((i__35351_35922 < count__35350_35921)){
var vec__35369_35925 = chunk__35349_35920.cljs$core$IIndexed$_nth$arity$2(null,i__35351_35922);
var name_35926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35925,(0),null);
var map__35372_35927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35369_35925,(1),null);
var map__35372_35928__$1 = cljs.core.__destructure_map(map__35372_35927);
var doc_35929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372_35928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372_35928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35926], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35930], 0));

if(cljs.core.truth_(doc_35929)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35929], 0));
} else {
}


var G__35940 = seq__35348_35919;
var G__35941 = chunk__35349_35920;
var G__35942 = count__35350_35921;
var G__35943 = (i__35351_35922 + (1));
seq__35348_35919 = G__35940;
chunk__35349_35920 = G__35941;
count__35350_35921 = G__35942;
i__35351_35922 = G__35943;
continue;
} else {
var temp__5825__auto___35944 = cljs.core.seq(seq__35348_35919);
if(temp__5825__auto___35944){
var seq__35348_35945__$1 = temp__5825__auto___35944;
if(cljs.core.chunked_seq_QMARK_(seq__35348_35945__$1)){
var c__5548__auto___35946 = cljs.core.chunk_first(seq__35348_35945__$1);
var G__35947 = cljs.core.chunk_rest(seq__35348_35945__$1);
var G__35948 = c__5548__auto___35946;
var G__35949 = cljs.core.count(c__5548__auto___35946);
var G__35950 = (0);
seq__35348_35919 = G__35947;
chunk__35349_35920 = G__35948;
count__35350_35921 = G__35949;
i__35351_35922 = G__35950;
continue;
} else {
var vec__35384_35953 = cljs.core.first(seq__35348_35945__$1);
var name_35954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35953,(0),null);
var map__35387_35955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35953,(1),null);
var map__35387_35956__$1 = cljs.core.__destructure_map(map__35387_35955);
var doc_35957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35387_35956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35387_35956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35954], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35958], 0));

if(cljs.core.truth_(doc_35957)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35957], 0));
} else {
}


var G__35964 = cljs.core.next(seq__35348_35945__$1);
var G__35965 = null;
var G__35966 = (0);
var G__35967 = (0);
seq__35348_35919 = G__35964;
chunk__35349_35920 = G__35965;
count__35350_35921 = G__35966;
i__35351_35922 = G__35967;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35393 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35394 = null;
var count__35395 = (0);
var i__35396 = (0);
while(true){
if((i__35396 < count__35395)){
var role = chunk__35394.cljs$core$IIndexed$_nth$arity$2(null,i__35396);
var temp__5825__auto___35973__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35973__$1)){
var spec_35975 = temp__5825__auto___35973__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35975)], 0));
} else {
}


var G__35977 = seq__35393;
var G__35978 = chunk__35394;
var G__35979 = count__35395;
var G__35980 = (i__35396 + (1));
seq__35393 = G__35977;
chunk__35394 = G__35978;
count__35395 = G__35979;
i__35396 = G__35980;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__35393);
if(temp__5825__auto____$1){
var seq__35393__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35393__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__35393__$1);
var G__35986 = cljs.core.chunk_rest(seq__35393__$1);
var G__35987 = c__5548__auto__;
var G__35988 = cljs.core.count(c__5548__auto__);
var G__35989 = (0);
seq__35393 = G__35986;
chunk__35394 = G__35987;
count__35395 = G__35988;
i__35396 = G__35989;
continue;
} else {
var role = cljs.core.first(seq__35393__$1);
var temp__5825__auto___35990__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___35990__$2)){
var spec_35991 = temp__5825__auto___35990__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35991)], 0));
} else {
}


var G__35994 = cljs.core.next(seq__35393__$1);
var G__35995 = null;
var G__35996 = (0);
var G__35997 = (0);
seq__35393 = G__35994;
chunk__35394 = G__35995;
count__35395 = G__35996;
i__35396 = G__35997;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35449 = datafied_throwable;
var map__35449__$1 = cljs.core.__destructure_map(map__35449);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35449__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35450 = cljs.core.last(via);
var map__35450__$1 = cljs.core.__destructure_map(map__35450);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35450__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35451 = data;
var map__35451__$1 = cljs.core.__destructure_map(map__35451);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35452 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35452__$1 = cljs.core.__destructure_map(map__35452);
var top_data = map__35452__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35452__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35459 = phase;
var G__35459__$1 = (((G__35459 instanceof cljs.core.Keyword))?G__35459.fqn:null);
switch (G__35459__$1) {
case "read-source":
var map__35467 = data;
var map__35467__$1 = cljs.core.__destructure_map(map__35467);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35467__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35469 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35469);
var G__35469__$2 = (cljs.core.truth_((function (){var fexpr__35471 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35471.cljs$core$IFn$_invoke$arity$1 ? fexpr__35471.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35471.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35469__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35469__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35469__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35472 = top_data;
var G__35472__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35472,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35472);
var G__35472__$2 = (cljs.core.truth_((function (){var fexpr__35473 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35473.cljs$core$IFn$_invoke$arity$1 ? fexpr__35473.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35473.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35472__$1);
var G__35472__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35472__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35472__$2);
var G__35472__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35472__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35472__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35472__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35472__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35478 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(3),null);
var G__35483 = top_data;
var G__35483__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35483);
var G__35483__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35483__$1);
var G__35483__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35483__$2);
var G__35483__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35483__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35483__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35483__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35483__$4;
}

break;
case "execution":
var vec__35490 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35490,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35448_SHARP_){
var or__5025__auto__ = (p1__35448_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__35493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35493.cljs$core$IFn$_invoke$arity$1 ? fexpr__35493.cljs$core$IFn$_invoke$arity$1(p1__35448_SHARP_) : fexpr__35493.call(null,p1__35448_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__35494 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35494__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35494,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35494);
var G__35494__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35494__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35494__$1);
var G__35494__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35494__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35494__$2);
var G__35494__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35494__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35494__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35494__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35494__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35459__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35580){
var map__35583 = p__35580;
var map__35583__$1 = cljs.core.__destructure_map(map__35583);
var triage_data = map__35583__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35583__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35712 = phase;
var G__35712__$1 = (((G__35712 instanceof cljs.core.Keyword))?G__35712.fqn:null);
switch (G__35712__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35725 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35726 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35728 = loc;
var G__35729 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35733_36054 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35734_36055 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35735_36056 = true;
var _STAR_print_fn_STAR__temp_val__35736_36057 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35735_36056);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35736_36057);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35536_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35536_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35734_36055);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35733_36054);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35725,G__35726,G__35728,G__35729) : format.call(null,G__35725,G__35726,G__35728,G__35729));

break;
case "macroexpansion":
var G__35756 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35757 = cause_type;
var G__35758 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35759 = loc;
var G__35760 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35756,G__35757,G__35758,G__35759,G__35760) : format.call(null,G__35756,G__35757,G__35758,G__35759,G__35760));

break;
case "compile-syntax-check":
var G__35773 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35774 = cause_type;
var G__35775 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35776 = loc;
var G__35777 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35773,G__35774,G__35775,G__35776,G__35777) : format.call(null,G__35773,G__35774,G__35775,G__35776,G__35777));

break;
case "compilation":
var G__35783 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35784 = cause_type;
var G__35785 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35786 = loc;
var G__35787 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35783,G__35784,G__35785,G__35786,G__35787) : format.call(null,G__35783,G__35784,G__35785,G__35786,G__35787));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35792 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35793 = symbol;
var G__35794 = loc;
var G__35795 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35798_36066 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35799_36067 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35800_36068 = true;
var _STAR_print_fn_STAR__temp_val__35801_36069 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35800_36068);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35801_36069);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35542_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35542_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35799_36067);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35798_36066);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35792,G__35793,G__35794,G__35795) : format.call(null,G__35792,G__35793,G__35794,G__35795));
} else {
var G__35830 = "Execution error%s at %s(%s).\n%s\n";
var G__35832 = cause_type;
var G__35833 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35834 = loc;
var G__35835 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35830,G__35832,G__35833,G__35834,G__35835) : format.call(null,G__35830,G__35832,G__35833,G__35834,G__35835));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35712__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
