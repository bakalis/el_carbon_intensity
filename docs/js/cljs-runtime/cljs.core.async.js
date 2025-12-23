goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30997 = (function (f,blockable,meta30998){
this.f = f;
this.blockable = blockable;
this.meta30998 = meta30998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30999,meta30998__$1){
var self__ = this;
var _30999__$1 = this;
return (new cljs.core.async.t_cljs$core$async30997(self__.f,self__.blockable,meta30998__$1));
}));

(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30999){
var self__ = this;
var _30999__$1 = this;
return self__.meta30998;
}));

(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30998","meta30998",982302157,null)], null);
}));

(cljs.core.async.t_cljs$core$async30997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30997");

(cljs.core.async.t_cljs$core$async30997.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async30997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30997.
 */
cljs.core.async.__GT_t_cljs$core$async30997 = (function cljs$core$async$__GT_t_cljs$core$async30997(f,blockable,meta30998){
return (new cljs.core.async.t_cljs$core$async30997(f,blockable,meta30998));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async30997(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31010 = arguments.length;
switch (G__31010) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31019 = arguments.length;
switch (G__31019) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31025 = arguments.length;
switch (G__31025) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34072 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34072) : fn1.call(null,val_34072));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34072) : fn1.call(null,val_34072));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31031 = arguments.length;
switch (G__31031) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___34079 = n;
var x_34080 = (0);
while(true){
if((x_34080 < n__5616__auto___34079)){
(a[x_34080] = x_34080);

var G__34081 = (x_34080 + (1));
x_34080 = G__34081;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31036 = (function (flag,meta31037){
this.flag = flag;
this.meta31037 = meta31037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31038,meta31037__$1){
var self__ = this;
var _31038__$1 = this;
return (new cljs.core.async.t_cljs$core$async31036(self__.flag,meta31037__$1));
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31038){
var self__ = this;
var _31038__$1 = this;
return self__.meta31037;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31037","meta31037",1406414839,null)], null);
}));

(cljs.core.async.t_cljs$core$async31036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31036");

(cljs.core.async.t_cljs$core$async31036.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31036.
 */
cljs.core.async.__GT_t_cljs$core$async31036 = (function cljs$core$async$__GT_t_cljs$core$async31036(flag,meta31037){
return (new cljs.core.async.t_cljs$core$async31036(flag,meta31037));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31036(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31044 = (function (flag,cb,meta31045){
this.flag = flag;
this.cb = cb;
this.meta31045 = meta31045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31046,meta31045__$1){
var self__ = this;
var _31046__$1 = this;
return (new cljs.core.async.t_cljs$core$async31044(self__.flag,self__.cb,meta31045__$1));
}));

(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31046){
var self__ = this;
var _31046__$1 = this;
return self__.meta31045;
}));

(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31045","meta31045",-1243343229,null)], null);
}));

(cljs.core.async.t_cljs$core$async31044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31044");

(cljs.core.async.t_cljs$core$async31044.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31044.
 */
cljs.core.async.__GT_t_cljs$core$async31044 = (function cljs$core$async$__GT_t_cljs$core$async31044(flag,cb,meta31045){
return (new cljs.core.async.t_cljs$core$async31044(flag,cb,meta31045));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31044(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34084)){
if((!(((port_34084.cljs$core$IFn$_invoke$arity$1 ? port_34084.cljs$core$IFn$_invoke$arity$1((1)) : port_34084.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34085 = (i + (1));
i = G__34085;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31053_SHARP_){
var G__31056 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31053_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31056) : fret.call(null,G__31056));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31055_SHARP_){
var G__31057 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31055_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31057) : fret.call(null,G__31057));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34088 = (i + (1));
i = G__34088;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34089 = arguments.length;
var i__5750__auto___34090 = (0);
while(true){
if((i__5750__auto___34090 < len__5749__auto___34089)){
args__5755__auto__.push((arguments[i__5750__auto___34090]));

var G__34091 = (i__5750__auto___34090 + (1));
i__5750__auto___34090 = G__34091;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31069){
var map__31073 = p__31069;
var map__31073__$1 = cljs.core.__destructure_map(map__31073);
var opts = map__31073__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31062){
var G__31063 = cljs.core.first(seq31062);
var seq31062__$1 = cljs.core.next(seq31062);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31063,seq31062__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31086 = arguments.length;
switch (G__31086) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30889__auto___34096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31168){
var state_val_31172 = (state_31168[(1)]);
if((state_val_31172 === (7))){
var inst_31145 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31180_34097 = state_31168__$1;
(statearr_31180_34097[(2)] = inst_31145);

(statearr_31180_34097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (1))){
var state_31168__$1 = state_31168;
var statearr_31182_34098 = state_31168__$1;
(statearr_31182_34098[(2)] = null);

(statearr_31182_34098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (4))){
var inst_31110 = (state_31168[(7)]);
var inst_31110__$1 = (state_31168[(2)]);
var inst_31113 = (inst_31110__$1 == null);
var state_31168__$1 = (function (){var statearr_31183 = state_31168;
(statearr_31183[(7)] = inst_31110__$1);

return statearr_31183;
})();
if(cljs.core.truth_(inst_31113)){
var statearr_31184_34099 = state_31168__$1;
(statearr_31184_34099[(1)] = (5));

} else {
var statearr_31185_34100 = state_31168__$1;
(statearr_31185_34100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (13))){
var state_31168__$1 = state_31168;
var statearr_31188_34101 = state_31168__$1;
(statearr_31188_34101[(2)] = null);

(statearr_31188_34101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (6))){
var inst_31110 = (state_31168[(7)]);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31168__$1,(11),to,inst_31110);
} else {
if((state_val_31172 === (3))){
var inst_31153 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31168__$1,inst_31153);
} else {
if((state_val_31172 === (12))){
var state_31168__$1 = state_31168;
var statearr_31196_34102 = state_31168__$1;
(statearr_31196_34102[(2)] = null);

(statearr_31196_34102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (2))){
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31168__$1,(4),from);
} else {
if((state_val_31172 === (11))){
var inst_31130 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
if(cljs.core.truth_(inst_31130)){
var statearr_31207_34108 = state_31168__$1;
(statearr_31207_34108[(1)] = (12));

} else {
var statearr_31208_34109 = state_31168__$1;
(statearr_31208_34109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (9))){
var state_31168__$1 = state_31168;
var statearr_31209_34111 = state_31168__$1;
(statearr_31209_34111[(2)] = null);

(statearr_31209_34111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (5))){
var state_31168__$1 = state_31168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31213_34112 = state_31168__$1;
(statearr_31213_34112[(1)] = (8));

} else {
var statearr_31214_34113 = state_31168__$1;
(statearr_31214_34113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (14))){
var inst_31142 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31218_34115 = state_31168__$1;
(statearr_31218_34115[(2)] = inst_31142);

(statearr_31218_34115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (10))){
var inst_31124 = (state_31168[(2)]);
var state_31168__$1 = state_31168;
var statearr_31224_34117 = state_31168__$1;
(statearr_31224_34117[(2)] = inst_31124);

(statearr_31224_34117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31172 === (8))){
var inst_31120 = cljs.core.async.close_BANG_(to);
var state_31168__$1 = state_31168;
var statearr_31230_34119 = state_31168__$1;
(statearr_31230_34119[(2)] = inst_31120);

(statearr_31230_34119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null,null];
(statearr_31232[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_31168){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31168);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31235){var ex__30703__auto__ = e31235;
var statearr_31236_34120 = state_31168;
(statearr_31236_34120[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31168[(4)]))){
var statearr_31237_34122 = state_31168;
(statearr_31237_34122[(1)] = cljs.core.first((state_31168[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34124 = state_31168;
state_31168 = G__34124;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_31168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_31168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31246 = f__30890__auto__();
(statearr_31246[(6)] = c__30889__auto___34096);

return statearr_31246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31259){
var vec__31262 = p__31259;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(1),null);
var job = vec__31262;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30889__auto___34127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31269){
var state_val_31270 = (state_31269[(1)]);
if((state_val_31270 === (1))){
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31269__$1,(2),res,v);
} else {
if((state_val_31270 === (2))){
var inst_31266 = (state_31269[(2)]);
var inst_31267 = cljs.core.async.close_BANG_(res);
var state_31269__$1 = (function (){var statearr_31272 = state_31269;
(statearr_31272[(7)] = inst_31266);

return statearr_31272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31269__$1,inst_31267);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_31273 = [null,null,null,null,null,null,null,null];
(statearr_31273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__);

(statearr_31273[(1)] = (1));

return statearr_31273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1 = (function (state_31269){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31269);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31274){var ex__30703__auto__ = e31274;
var statearr_31275_34129 = state_31269;
(statearr_31275_34129[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31269[(4)]))){
var statearr_31276_34130 = state_31269;
(statearr_31276_34130[(1)] = cljs.core.first((state_31269[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34139 = state_31269;
state_31269 = G__34139;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = function(state_31269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1.call(this,state_31269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31277 = f__30890__auto__();
(statearr_31277[(6)] = c__30889__auto___34127);

return statearr_31277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31278){
var vec__31279 = p__31278;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31279,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31279,(1),null);
var job = vec__31279;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___34152 = n;
var __34153 = (0);
while(true){
if((__34153 < n__5616__auto___34152)){
var G__31283_34154 = type;
var G__31283_34155__$1 = (((G__31283_34154 instanceof cljs.core.Keyword))?G__31283_34154.fqn:null);
switch (G__31283_34155__$1) {
case "compute":
var c__30889__auto___34157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34153,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = ((function (__34153,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function (state_31297){
var state_val_31298 = (state_31297[(1)]);
if((state_val_31298 === (1))){
var state_31297__$1 = state_31297;
var statearr_31299_34158 = state_31297__$1;
(statearr_31299_34158[(2)] = null);

(statearr_31299_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (2))){
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31297__$1,(4),jobs);
} else {
if((state_val_31298 === (3))){
var inst_31295 = (state_31297[(2)]);
var state_31297__$1 = state_31297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31297__$1,inst_31295);
} else {
if((state_val_31298 === (4))){
var inst_31287 = (state_31297[(2)]);
var inst_31288 = process__$1(inst_31287);
var state_31297__$1 = state_31297;
if(cljs.core.truth_(inst_31288)){
var statearr_31300_34173 = state_31297__$1;
(statearr_31300_34173[(1)] = (5));

} else {
var statearr_31301_34174 = state_31297__$1;
(statearr_31301_34174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (5))){
var state_31297__$1 = state_31297;
var statearr_31303_34175 = state_31297__$1;
(statearr_31303_34175[(2)] = null);

(statearr_31303_34175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (6))){
var state_31297__$1 = state_31297;
var statearr_31305_34176 = state_31297__$1;
(statearr_31305_34176[(2)] = null);

(statearr_31305_34176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31298 === (7))){
var inst_31293 = (state_31297[(2)]);
var state_31297__$1 = state_31297;
var statearr_31306_34183 = state_31297__$1;
(statearr_31306_34183[(2)] = inst_31293);

(statearr_31306_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34153,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
;
return ((function (__34153,switch__30699__auto__,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_31307 = [null,null,null,null,null,null,null];
(statearr_31307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__);

(statearr_31307[(1)] = (1));

return statearr_31307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1 = (function (state_31297){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31297);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31308){var ex__30703__auto__ = e31308;
var statearr_31309_34185 = state_31297;
(statearr_31309_34185[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31297[(4)]))){
var statearr_31310_34186 = state_31297;
(statearr_31310_34186[(1)] = cljs.core.first((state_31297[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34187 = state_31297;
state_31297 = G__34187;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = function(state_31297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1.call(this,state_31297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__;
})()
;})(__34153,switch__30699__auto__,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
})();
var state__30891__auto__ = (function (){var statearr_31312 = f__30890__auto__();
(statearr_31312[(6)] = c__30889__auto___34157);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
});})(__34153,c__30889__auto___34157,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
);


break;
case "async":
var c__30889__auto___34190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34153,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = ((function (__34153,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (1))){
var state_31325__$1 = state_31325;
var statearr_31328_34192 = state_31325__$1;
(statearr_31328_34192[(2)] = null);

(statearr_31328_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (2))){
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31325__$1,(4),jobs);
} else {
if((state_val_31326 === (3))){
var inst_31323 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31325__$1,inst_31323);
} else {
if((state_val_31326 === (4))){
var inst_31315 = (state_31325[(2)]);
var inst_31316 = async(inst_31315);
var state_31325__$1 = state_31325;
if(cljs.core.truth_(inst_31316)){
var statearr_31329_34193 = state_31325__$1;
(statearr_31329_34193[(1)] = (5));

} else {
var statearr_31330_34194 = state_31325__$1;
(statearr_31330_34194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (5))){
var state_31325__$1 = state_31325;
var statearr_31331_34195 = state_31325__$1;
(statearr_31331_34195[(2)] = null);

(statearr_31331_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (6))){
var state_31325__$1 = state_31325;
var statearr_31332_34196 = state_31325__$1;
(statearr_31332_34196[(2)] = null);

(statearr_31332_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (7))){
var inst_31321 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31333_34200 = state_31325__$1;
(statearr_31333_34200[(2)] = inst_31321);

(statearr_31333_34200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34153,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
;
return ((function (__34153,switch__30699__auto__,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1 = (function (state_31325){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31325);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31339){var ex__30703__auto__ = e31339;
var statearr_31340_34201 = state_31325;
(statearr_31340_34201[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31325[(4)]))){
var statearr_31341_34206 = state_31325;
(statearr_31341_34206[(1)] = cljs.core.first((state_31325[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_31325;
state_31325 = G__34207;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__;
})()
;})(__34153,switch__30699__auto__,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
})();
var state__30891__auto__ = (function (){var statearr_31342 = f__30890__auto__();
(statearr_31342[(6)] = c__30889__auto___34190);

return statearr_31342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
});})(__34153,c__30889__auto___34190,G__31283_34154,G__31283_34155__$1,n__5616__auto___34152,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31283_34155__$1)].join('')));

}

var G__34209 = (__34153 + (1));
__34153 = G__34209;
continue;
} else {
}
break;
}

var c__30889__auto___34211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31373){
var state_val_31374 = (state_31373[(1)]);
if((state_val_31374 === (7))){
var inst_31368 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31376_34213 = state_31373__$1;
(statearr_31376_34213[(2)] = inst_31368);

(statearr_31376_34213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (1))){
var state_31373__$1 = state_31373;
var statearr_31377_34214 = state_31373__$1;
(statearr_31377_34214[(2)] = null);

(statearr_31377_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (4))){
var inst_31345 = (state_31373[(7)]);
var inst_31345__$1 = (state_31373[(2)]);
var inst_31346 = (inst_31345__$1 == null);
var state_31373__$1 = (function (){var statearr_31379 = state_31373;
(statearr_31379[(7)] = inst_31345__$1);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31346)){
var statearr_31380_34215 = state_31373__$1;
(statearr_31380_34215[(1)] = (5));

} else {
var statearr_31381_34216 = state_31373__$1;
(statearr_31381_34216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (6))){
var inst_31345 = (state_31373[(7)]);
var inst_31352 = (state_31373[(8)]);
var inst_31352__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31359 = [inst_31345,inst_31352__$1];
var inst_31360 = (new cljs.core.PersistentVector(null,2,(5),inst_31358,inst_31359,null));
var state_31373__$1 = (function (){var statearr_31382 = state_31373;
(statearr_31382[(8)] = inst_31352__$1);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31373__$1,(8),jobs,inst_31360);
} else {
if((state_val_31374 === (3))){
var inst_31370 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31373__$1,inst_31370);
} else {
if((state_val_31374 === (2))){
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31373__$1,(4),from);
} else {
if((state_val_31374 === (9))){
var inst_31365 = (state_31373[(2)]);
var state_31373__$1 = (function (){var statearr_31383 = state_31373;
(statearr_31383[(9)] = inst_31365);

return statearr_31383;
})();
var statearr_31384_34220 = state_31373__$1;
(statearr_31384_34220[(2)] = null);

(statearr_31384_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (5))){
var inst_31348 = cljs.core.async.close_BANG_(jobs);
var state_31373__$1 = state_31373;
var statearr_31385_34221 = state_31373__$1;
(statearr_31385_34221[(2)] = inst_31348);

(statearr_31385_34221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (8))){
var inst_31352 = (state_31373[(8)]);
var inst_31362 = (state_31373[(2)]);
var state_31373__$1 = (function (){var statearr_31386 = state_31373;
(statearr_31386[(10)] = inst_31362);

return statearr_31386;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31373__$1,(9),results,inst_31352);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_31388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__);

(statearr_31388[(1)] = (1));

return statearr_31388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1 = (function (state_31373){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31373);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31390){var ex__30703__auto__ = e31390;
var statearr_31391_34239 = state_31373;
(statearr_31391_34239[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31373[(4)]))){
var statearr_31392_34240 = state_31373;
(statearr_31392_34240[(1)] = cljs.core.first((state_31373[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34246 = state_31373;
state_31373 = G__34246;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31394 = f__30890__auto__();
(statearr_31394[(6)] = c__30889__auto___34211);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


var c__30889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31450){
var state_val_31451 = (state_31450[(1)]);
if((state_val_31451 === (7))){
var inst_31446 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31454_34262 = state_31450__$1;
(statearr_31454_34262[(2)] = inst_31446);

(statearr_31454_34262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (20))){
var state_31450__$1 = state_31450;
var statearr_31455_34266 = state_31450__$1;
(statearr_31455_34266[(2)] = null);

(statearr_31455_34266[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (1))){
var state_31450__$1 = state_31450;
var statearr_31457_34267 = state_31450__$1;
(statearr_31457_34267[(2)] = null);

(statearr_31457_34267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (4))){
var inst_31406 = (state_31450[(7)]);
var inst_31406__$1 = (state_31450[(2)]);
var inst_31407 = (inst_31406__$1 == null);
var state_31450__$1 = (function (){var statearr_31462 = state_31450;
(statearr_31462[(7)] = inst_31406__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31407)){
var statearr_31463_34269 = state_31450__$1;
(statearr_31463_34269[(1)] = (5));

} else {
var statearr_31464_34271 = state_31450__$1;
(statearr_31464_34271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (15))){
var inst_31425 = (state_31450[(8)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31450__$1,(18),to,inst_31425);
} else {
if((state_val_31451 === (21))){
var inst_31441 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31468_34276 = state_31450__$1;
(statearr_31468_34276[(2)] = inst_31441);

(statearr_31468_34276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (13))){
var inst_31443 = (state_31450[(2)]);
var state_31450__$1 = (function (){var statearr_31470 = state_31450;
(statearr_31470[(9)] = inst_31443);

return statearr_31470;
})();
var statearr_31471_34290 = state_31450__$1;
(statearr_31471_34290[(2)] = null);

(statearr_31471_34290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (6))){
var inst_31406 = (state_31450[(7)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31450__$1,(11),inst_31406);
} else {
if((state_val_31451 === (17))){
var inst_31436 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
if(cljs.core.truth_(inst_31436)){
var statearr_31473_34301 = state_31450__$1;
(statearr_31473_34301[(1)] = (19));

} else {
var statearr_31474_34304 = state_31450__$1;
(statearr_31474_34304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (3))){
var inst_31448 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31450__$1,inst_31448);
} else {
if((state_val_31451 === (12))){
var inst_31422 = (state_31450[(10)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31450__$1,(14),inst_31422);
} else {
if((state_val_31451 === (2))){
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31450__$1,(4),results);
} else {
if((state_val_31451 === (19))){
var state_31450__$1 = state_31450;
var statearr_31475_34317 = state_31450__$1;
(statearr_31475_34317[(2)] = null);

(statearr_31475_34317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (11))){
var inst_31422 = (state_31450[(2)]);
var state_31450__$1 = (function (){var statearr_31476 = state_31450;
(statearr_31476[(10)] = inst_31422);

return statearr_31476;
})();
var statearr_31479_34324 = state_31450__$1;
(statearr_31479_34324[(2)] = null);

(statearr_31479_34324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (9))){
var state_31450__$1 = state_31450;
var statearr_31484_34333 = state_31450__$1;
(statearr_31484_34333[(2)] = null);

(statearr_31484_34333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (5))){
var state_31450__$1 = state_31450;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31486_34339 = state_31450__$1;
(statearr_31486_34339[(1)] = (8));

} else {
var statearr_31490_34341 = state_31450__$1;
(statearr_31490_34341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (14))){
var inst_31425 = (state_31450[(8)]);
var inst_31430 = (state_31450[(11)]);
var inst_31425__$1 = (state_31450[(2)]);
var inst_31429 = (inst_31425__$1 == null);
var inst_31430__$1 = cljs.core.not(inst_31429);
var state_31450__$1 = (function (){var statearr_31491 = state_31450;
(statearr_31491[(8)] = inst_31425__$1);

(statearr_31491[(11)] = inst_31430__$1);

return statearr_31491;
})();
if(inst_31430__$1){
var statearr_31494_34353 = state_31450__$1;
(statearr_31494_34353[(1)] = (15));

} else {
var statearr_31495_34355 = state_31450__$1;
(statearr_31495_34355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (16))){
var inst_31430 = (state_31450[(11)]);
var state_31450__$1 = state_31450;
var statearr_31504_34361 = state_31450__$1;
(statearr_31504_34361[(2)] = inst_31430);

(statearr_31504_34361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (10))){
var inst_31413 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31505_34377 = state_31450__$1;
(statearr_31505_34377[(2)] = inst_31413);

(statearr_31505_34377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (18))){
var inst_31433 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31511_34380 = state_31450__$1;
(statearr_31511_34380[(2)] = inst_31433);

(statearr_31511_34380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (8))){
var inst_31410 = cljs.core.async.close_BANG_(to);
var state_31450__$1 = state_31450;
var statearr_31516_34395 = state_31450__$1;
(statearr_31516_34395[(2)] = inst_31410);

(statearr_31516_34395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_31521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__);

(statearr_31521[(1)] = (1));

return statearr_31521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1 = (function (state_31450){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31450);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31523){var ex__30703__auto__ = e31523;
var statearr_31525_34420 = state_31450;
(statearr_31525_34420[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31450[(4)]))){
var statearr_31526_34423 = state_31450;
(statearr_31526_34423[(1)] = cljs.core.first((state_31450[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_31450;
state_31450 = G__34432;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__ = function(state_31450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1.call(this,state_31450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31529 = f__30890__auto__();
(statearr_31529[(6)] = c__30889__auto__);

return statearr_31529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

return c__30889__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31534 = arguments.length;
switch (G__31534) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31554 = arguments.length;
switch (G__31554) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31569 = arguments.length;
switch (G__31569) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30889__auto___34467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31609){
var state_val_31610 = (state_31609[(1)]);
if((state_val_31610 === (7))){
var inst_31605 = (state_31609[(2)]);
var state_31609__$1 = state_31609;
var statearr_31617_34473 = state_31609__$1;
(statearr_31617_34473[(2)] = inst_31605);

(statearr_31617_34473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (1))){
var state_31609__$1 = state_31609;
var statearr_31626_34474 = state_31609__$1;
(statearr_31626_34474[(2)] = null);

(statearr_31626_34474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (4))){
var inst_31582 = (state_31609[(7)]);
var inst_31582__$1 = (state_31609[(2)]);
var inst_31586 = (inst_31582__$1 == null);
var state_31609__$1 = (function (){var statearr_31635 = state_31609;
(statearr_31635[(7)] = inst_31582__$1);

return statearr_31635;
})();
if(cljs.core.truth_(inst_31586)){
var statearr_31636_34475 = state_31609__$1;
(statearr_31636_34475[(1)] = (5));

} else {
var statearr_31637_34476 = state_31609__$1;
(statearr_31637_34476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (13))){
var state_31609__$1 = state_31609;
var statearr_31646_34478 = state_31609__$1;
(statearr_31646_34478[(2)] = null);

(statearr_31646_34478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (6))){
var inst_31582 = (state_31609[(7)]);
var inst_31592 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31582) : p.call(null,inst_31582));
var state_31609__$1 = state_31609;
if(cljs.core.truth_(inst_31592)){
var statearr_31647_34490 = state_31609__$1;
(statearr_31647_34490[(1)] = (9));

} else {
var statearr_31648_34494 = state_31609__$1;
(statearr_31648_34494[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (3))){
var inst_31607 = (state_31609[(2)]);
var state_31609__$1 = state_31609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31609__$1,inst_31607);
} else {
if((state_val_31610 === (12))){
var state_31609__$1 = state_31609;
var statearr_31649_34495 = state_31609__$1;
(statearr_31649_34495[(2)] = null);

(statearr_31649_34495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (2))){
var state_31609__$1 = state_31609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31609__$1,(4),ch);
} else {
if((state_val_31610 === (11))){
var inst_31582 = (state_31609[(7)]);
var inst_31596 = (state_31609[(2)]);
var state_31609__$1 = state_31609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31609__$1,(8),inst_31596,inst_31582);
} else {
if((state_val_31610 === (9))){
var state_31609__$1 = state_31609;
var statearr_31654_34498 = state_31609__$1;
(statearr_31654_34498[(2)] = tc);

(statearr_31654_34498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (5))){
var inst_31588 = cljs.core.async.close_BANG_(tc);
var inst_31590 = cljs.core.async.close_BANG_(fc);
var state_31609__$1 = (function (){var statearr_31655 = state_31609;
(statearr_31655[(8)] = inst_31588);

return statearr_31655;
})();
var statearr_31656_34500 = state_31609__$1;
(statearr_31656_34500[(2)] = inst_31590);

(statearr_31656_34500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (14))){
var inst_31603 = (state_31609[(2)]);
var state_31609__$1 = state_31609;
var statearr_31658_34501 = state_31609__$1;
(statearr_31658_34501[(2)] = inst_31603);

(statearr_31658_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (10))){
var state_31609__$1 = state_31609;
var statearr_31659_34502 = state_31609__$1;
(statearr_31659_34502[(2)] = fc);

(statearr_31659_34502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31610 === (8))){
var inst_31598 = (state_31609[(2)]);
var state_31609__$1 = state_31609;
if(cljs.core.truth_(inst_31598)){
var statearr_31663_34503 = state_31609__$1;
(statearr_31663_34503[(1)] = (12));

} else {
var statearr_31665_34504 = state_31609__$1;
(statearr_31665_34504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_31669 = [null,null,null,null,null,null,null,null,null];
(statearr_31669[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_31669[(1)] = (1));

return statearr_31669;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_31609){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31609);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31670){var ex__30703__auto__ = e31670;
var statearr_31671_34507 = state_31609;
(statearr_31671_34507[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31609[(4)]))){
var statearr_31673_34510 = state_31609;
(statearr_31673_34510[(1)] = cljs.core.first((state_31609[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34511 = state_31609;
state_31609 = G__34511;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_31609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_31609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31674 = f__30890__auto__();
(statearr_31674[(6)] = c__30889__auto___34467);

return statearr_31674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31699){
var state_val_31701 = (state_31699[(1)]);
if((state_val_31701 === (7))){
var inst_31694 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31705_34519 = state_31699__$1;
(statearr_31705_34519[(2)] = inst_31694);

(statearr_31705_34519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (1))){
var inst_31676 = init;
var inst_31677 = inst_31676;
var state_31699__$1 = (function (){var statearr_31709 = state_31699;
(statearr_31709[(7)] = inst_31677);

return statearr_31709;
})();
var statearr_31710_34530 = state_31699__$1;
(statearr_31710_34530[(2)] = null);

(statearr_31710_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (4))){
var inst_31680 = (state_31699[(8)]);
var inst_31680__$1 = (state_31699[(2)]);
var inst_31681 = (inst_31680__$1 == null);
var state_31699__$1 = (function (){var statearr_31711 = state_31699;
(statearr_31711[(8)] = inst_31680__$1);

return statearr_31711;
})();
if(cljs.core.truth_(inst_31681)){
var statearr_31712_34536 = state_31699__$1;
(statearr_31712_34536[(1)] = (5));

} else {
var statearr_31713_34546 = state_31699__$1;
(statearr_31713_34546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (6))){
var inst_31677 = (state_31699[(7)]);
var inst_31680 = (state_31699[(8)]);
var inst_31684 = (state_31699[(9)]);
var inst_31684__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31677,inst_31680) : f.call(null,inst_31677,inst_31680));
var inst_31685 = cljs.core.reduced_QMARK_(inst_31684__$1);
var state_31699__$1 = (function (){var statearr_31718 = state_31699;
(statearr_31718[(9)] = inst_31684__$1);

return statearr_31718;
})();
if(inst_31685){
var statearr_31722_34549 = state_31699__$1;
(statearr_31722_34549[(1)] = (8));

} else {
var statearr_31723_34550 = state_31699__$1;
(statearr_31723_34550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (3))){
var inst_31696 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31699__$1,inst_31696);
} else {
if((state_val_31701 === (2))){
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31699__$1,(4),ch);
} else {
if((state_val_31701 === (9))){
var inst_31684 = (state_31699[(9)]);
var inst_31677 = inst_31684;
var state_31699__$1 = (function (){var statearr_31728 = state_31699;
(statearr_31728[(7)] = inst_31677);

return statearr_31728;
})();
var statearr_31730_34556 = state_31699__$1;
(statearr_31730_34556[(2)] = null);

(statearr_31730_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (5))){
var inst_31677 = (state_31699[(7)]);
var state_31699__$1 = state_31699;
var statearr_31731_34557 = state_31699__$1;
(statearr_31731_34557[(2)] = inst_31677);

(statearr_31731_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (10))){
var inst_31692 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31732_34559 = state_31699__$1;
(statearr_31732_34559[(2)] = inst_31692);

(statearr_31732_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (8))){
var inst_31684 = (state_31699[(9)]);
var inst_31688 = cljs.core.deref(inst_31684);
var state_31699__$1 = state_31699;
var statearr_31733_34564 = state_31699__$1;
(statearr_31733_34564[(2)] = inst_31688);

(statearr_31733_34564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30700__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30700__auto____0 = (function (){
var statearr_31739 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31739[(0)] = cljs$core$async$reduce_$_state_machine__30700__auto__);

(statearr_31739[(1)] = (1));

return statearr_31739;
});
var cljs$core$async$reduce_$_state_machine__30700__auto____1 = (function (state_31699){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31699);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31740){var ex__30703__auto__ = e31740;
var statearr_31742_34567 = state_31699;
(statearr_31742_34567[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31699[(4)]))){
var statearr_31744_34569 = state_31699;
(statearr_31744_34569[(1)] = cljs.core.first((state_31699[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34577 = state_31699;
state_31699 = G__34577;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30700__auto__ = function(state_31699){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30700__auto____1.call(this,state_31699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30700__auto____0;
cljs$core$async$reduce_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30700__auto____1;
return cljs$core$async$reduce_$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31750 = f__30890__auto__();
(statearr_31750[(6)] = c__30889__auto__);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

return c__30889__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31769){
var state_val_31770 = (state_31769[(1)]);
if((state_val_31770 === (1))){
var inst_31764 = cljs.core.async.reduce(f__$1,init,ch);
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31769__$1,(2),inst_31764);
} else {
if((state_val_31770 === (2))){
var inst_31766 = (state_31769[(2)]);
var inst_31767 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31766) : f__$1.call(null,inst_31766));
var state_31769__$1 = state_31769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31769__$1,inst_31767);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30700__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30700__auto____0 = (function (){
var statearr_31790 = [null,null,null,null,null,null,null];
(statearr_31790[(0)] = cljs$core$async$transduce_$_state_machine__30700__auto__);

(statearr_31790[(1)] = (1));

return statearr_31790;
});
var cljs$core$async$transduce_$_state_machine__30700__auto____1 = (function (state_31769){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31769);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31807){var ex__30703__auto__ = e31807;
var statearr_31808_34593 = state_31769;
(statearr_31808_34593[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31769[(4)]))){
var statearr_31809_34604 = state_31769;
(statearr_31809_34604[(1)] = cljs.core.first((state_31769[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34616 = state_31769;
state_31769 = G__34616;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30700__auto__ = function(state_31769){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30700__auto____1.call(this,state_31769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30700__auto____0;
cljs$core$async$transduce_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30700__auto____1;
return cljs$core$async$transduce_$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31811 = f__30890__auto__();
(statearr_31811[(6)] = c__30889__auto__);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

return c__30889__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31820 = arguments.length;
switch (G__31820) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_31849){
var state_val_31850 = (state_31849[(1)]);
if((state_val_31850 === (7))){
var inst_31831 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31853_34632 = state_31849__$1;
(statearr_31853_34632[(2)] = inst_31831);

(statearr_31853_34632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (1))){
var inst_31822 = cljs.core.seq(coll);
var inst_31823 = inst_31822;
var state_31849__$1 = (function (){var statearr_31855 = state_31849;
(statearr_31855[(7)] = inst_31823);

return statearr_31855;
})();
var statearr_31858_34635 = state_31849__$1;
(statearr_31858_34635[(2)] = null);

(statearr_31858_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (4))){
var inst_31823 = (state_31849[(7)]);
var inst_31828 = cljs.core.first(inst_31823);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31849__$1,(7),ch,inst_31828);
} else {
if((state_val_31850 === (13))){
var inst_31843 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31861_34639 = state_31849__$1;
(statearr_31861_34639[(2)] = inst_31843);

(statearr_31861_34639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (6))){
var inst_31834 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
if(cljs.core.truth_(inst_31834)){
var statearr_31864_34642 = state_31849__$1;
(statearr_31864_34642[(1)] = (8));

} else {
var statearr_31865_34643 = state_31849__$1;
(statearr_31865_34643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (3))){
var inst_31847 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31849__$1,inst_31847);
} else {
if((state_val_31850 === (12))){
var state_31849__$1 = state_31849;
var statearr_31866_34649 = state_31849__$1;
(statearr_31866_34649[(2)] = null);

(statearr_31866_34649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (2))){
var inst_31823 = (state_31849[(7)]);
var state_31849__$1 = state_31849;
if(cljs.core.truth_(inst_31823)){
var statearr_31867_34655 = state_31849__$1;
(statearr_31867_34655[(1)] = (4));

} else {
var statearr_31868_34657 = state_31849__$1;
(statearr_31868_34657[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (11))){
var inst_31840 = cljs.core.async.close_BANG_(ch);
var state_31849__$1 = state_31849;
var statearr_31869_34658 = state_31849__$1;
(statearr_31869_34658[(2)] = inst_31840);

(statearr_31869_34658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (9))){
var state_31849__$1 = state_31849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31870_34659 = state_31849__$1;
(statearr_31870_34659[(1)] = (11));

} else {
var statearr_31871_34660 = state_31849__$1;
(statearr_31871_34660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (5))){
var inst_31823 = (state_31849[(7)]);
var state_31849__$1 = state_31849;
var statearr_31872_34665 = state_31849__$1;
(statearr_31872_34665[(2)] = inst_31823);

(statearr_31872_34665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (10))){
var inst_31845 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31873_34668 = state_31849__$1;
(statearr_31873_34668[(2)] = inst_31845);

(statearr_31873_34668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (8))){
var inst_31823 = (state_31849[(7)]);
var inst_31836 = cljs.core.next(inst_31823);
var inst_31823__$1 = inst_31836;
var state_31849__$1 = (function (){var statearr_31875 = state_31849;
(statearr_31875[(7)] = inst_31823__$1);

return statearr_31875;
})();
var statearr_31876_34680 = state_31849__$1;
(statearr_31876_34680[(2)] = null);

(statearr_31876_34680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_31881 = [null,null,null,null,null,null,null,null];
(statearr_31881[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_31881[(1)] = (1));

return statearr_31881;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_31849){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_31849);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e31894){var ex__30703__auto__ = e31894;
var statearr_31897_34684 = state_31849;
(statearr_31897_34684[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_31849[(4)]))){
var statearr_31908_34685 = state_31849;
(statearr_31908_34685[(1)] = cljs.core.first((state_31849[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34686 = state_31849;
state_31849 = G__34686;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_31849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_31849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_31909 = f__30890__auto__();
(statearr_31909[(6)] = c__30889__auto__);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

return c__30889__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31958 = arguments.length;
switch (G__31958) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34699 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34699(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34702 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34702(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34707 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34707(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34713 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34713(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31994 = (function (ch,cs,meta31995){
this.ch = ch;
this.cs = cs;
this.meta31995 = meta31995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31996,meta31995__$1){
var self__ = this;
var _31996__$1 = this;
return (new cljs.core.async.t_cljs$core$async31994(self__.ch,self__.cs,meta31995__$1));
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31996){
var self__ = this;
var _31996__$1 = this;
return self__.meta31995;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31994.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31995","meta31995",1249919560,null)], null);
}));

(cljs.core.async.t_cljs$core$async31994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31994");

(cljs.core.async.t_cljs$core$async31994.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31994.
 */
cljs.core.async.__GT_t_cljs$core$async31994 = (function cljs$core$async$__GT_t_cljs$core$async31994(ch,cs,meta31995){
return (new cljs.core.async.t_cljs$core$async31994(ch,cs,meta31995));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async31994(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30889__auto___34718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_32176){
var state_val_32177 = (state_32176[(1)]);
if((state_val_32177 === (7))){
var inst_32166 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32179_34719 = state_32176__$1;
(statearr_32179_34719[(2)] = inst_32166);

(statearr_32179_34719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (20))){
var inst_32062 = (state_32176[(7)]);
var inst_32075 = cljs.core.first(inst_32062);
var inst_32076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32075,(0),null);
var inst_32077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32075,(1),null);
var state_32176__$1 = (function (){var statearr_32184 = state_32176;
(statearr_32184[(8)] = inst_32076);

return statearr_32184;
})();
if(cljs.core.truth_(inst_32077)){
var statearr_32185_34720 = state_32176__$1;
(statearr_32185_34720[(1)] = (22));

} else {
var statearr_32186_34721 = state_32176__$1;
(statearr_32186_34721[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (27))){
var inst_32111 = (state_32176[(9)]);
var inst_32113 = (state_32176[(10)]);
var inst_32119 = (state_32176[(11)]);
var inst_32027 = (state_32176[(12)]);
var inst_32119__$1 = cljs.core._nth(inst_32111,inst_32113);
var inst_32120 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32119__$1,inst_32027,done);
var state_32176__$1 = (function (){var statearr_32189 = state_32176;
(statearr_32189[(11)] = inst_32119__$1);

return statearr_32189;
})();
if(cljs.core.truth_(inst_32120)){
var statearr_32191_34722 = state_32176__$1;
(statearr_32191_34722[(1)] = (30));

} else {
var statearr_32193_34723 = state_32176__$1;
(statearr_32193_34723[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (1))){
var state_32176__$1 = state_32176;
var statearr_32194_34724 = state_32176__$1;
(statearr_32194_34724[(2)] = null);

(statearr_32194_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (24))){
var inst_32062 = (state_32176[(7)]);
var inst_32082 = (state_32176[(2)]);
var inst_32083 = cljs.core.next(inst_32062);
var inst_32040 = inst_32083;
var inst_32041 = null;
var inst_32042 = (0);
var inst_32043 = (0);
var state_32176__$1 = (function (){var statearr_32198 = state_32176;
(statearr_32198[(13)] = inst_32082);

(statearr_32198[(14)] = inst_32040);

(statearr_32198[(15)] = inst_32041);

(statearr_32198[(16)] = inst_32042);

(statearr_32198[(17)] = inst_32043);

return statearr_32198;
})();
var statearr_32199_34730 = state_32176__$1;
(statearr_32199_34730[(2)] = null);

(statearr_32199_34730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (39))){
var state_32176__$1 = state_32176;
var statearr_32210_34731 = state_32176__$1;
(statearr_32210_34731[(2)] = null);

(statearr_32210_34731[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (4))){
var inst_32027 = (state_32176[(12)]);
var inst_32027__$1 = (state_32176[(2)]);
var inst_32028 = (inst_32027__$1 == null);
var state_32176__$1 = (function (){var statearr_32211 = state_32176;
(statearr_32211[(12)] = inst_32027__$1);

return statearr_32211;
})();
if(cljs.core.truth_(inst_32028)){
var statearr_32212_34732 = state_32176__$1;
(statearr_32212_34732[(1)] = (5));

} else {
var statearr_32213_34733 = state_32176__$1;
(statearr_32213_34733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (15))){
var inst_32043 = (state_32176[(17)]);
var inst_32040 = (state_32176[(14)]);
var inst_32041 = (state_32176[(15)]);
var inst_32042 = (state_32176[(16)]);
var inst_32058 = (state_32176[(2)]);
var inst_32059 = (inst_32043 + (1));
var tmp32200 = inst_32042;
var tmp32201 = inst_32041;
var tmp32202 = inst_32040;
var inst_32040__$1 = tmp32202;
var inst_32041__$1 = tmp32201;
var inst_32042__$1 = tmp32200;
var inst_32043__$1 = inst_32059;
var state_32176__$1 = (function (){var statearr_32214 = state_32176;
(statearr_32214[(18)] = inst_32058);

(statearr_32214[(14)] = inst_32040__$1);

(statearr_32214[(15)] = inst_32041__$1);

(statearr_32214[(16)] = inst_32042__$1);

(statearr_32214[(17)] = inst_32043__$1);

return statearr_32214;
})();
var statearr_32215_34741 = state_32176__$1;
(statearr_32215_34741[(2)] = null);

(statearr_32215_34741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (21))){
var inst_32086 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32226_34742 = state_32176__$1;
(statearr_32226_34742[(2)] = inst_32086);

(statearr_32226_34742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (31))){
var inst_32119 = (state_32176[(11)]);
var inst_32123 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32119);
var state_32176__$1 = state_32176;
var statearr_32227_34743 = state_32176__$1;
(statearr_32227_34743[(2)] = inst_32123);

(statearr_32227_34743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (32))){
var inst_32113 = (state_32176[(10)]);
var inst_32110 = (state_32176[(19)]);
var inst_32111 = (state_32176[(9)]);
var inst_32112 = (state_32176[(20)]);
var inst_32125 = (state_32176[(2)]);
var inst_32126 = (inst_32113 + (1));
var tmp32221 = inst_32111;
var tmp32223 = inst_32112;
var tmp32224 = inst_32110;
var inst_32110__$1 = tmp32224;
var inst_32111__$1 = tmp32221;
var inst_32112__$1 = tmp32223;
var inst_32113__$1 = inst_32126;
var state_32176__$1 = (function (){var statearr_32229 = state_32176;
(statearr_32229[(21)] = inst_32125);

(statearr_32229[(19)] = inst_32110__$1);

(statearr_32229[(9)] = inst_32111__$1);

(statearr_32229[(20)] = inst_32112__$1);

(statearr_32229[(10)] = inst_32113__$1);

return statearr_32229;
})();
var statearr_32230_34753 = state_32176__$1;
(statearr_32230_34753[(2)] = null);

(statearr_32230_34753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (40))){
var inst_32139 = (state_32176[(22)]);
var inst_32143 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32139);
var state_32176__$1 = state_32176;
var statearr_32234_34754 = state_32176__$1;
(statearr_32234_34754[(2)] = inst_32143);

(statearr_32234_34754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (33))){
var inst_32129 = (state_32176[(23)]);
var inst_32131 = cljs.core.chunked_seq_QMARK_(inst_32129);
var state_32176__$1 = state_32176;
if(inst_32131){
var statearr_32235_34759 = state_32176__$1;
(statearr_32235_34759[(1)] = (36));

} else {
var statearr_32236_34760 = state_32176__$1;
(statearr_32236_34760[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (13))){
var inst_32052 = (state_32176[(24)]);
var inst_32055 = cljs.core.async.close_BANG_(inst_32052);
var state_32176__$1 = state_32176;
var statearr_32237_34761 = state_32176__$1;
(statearr_32237_34761[(2)] = inst_32055);

(statearr_32237_34761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (22))){
var inst_32076 = (state_32176[(8)]);
var inst_32079 = cljs.core.async.close_BANG_(inst_32076);
var state_32176__$1 = state_32176;
var statearr_32238_34762 = state_32176__$1;
(statearr_32238_34762[(2)] = inst_32079);

(statearr_32238_34762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (36))){
var inst_32129 = (state_32176[(23)]);
var inst_32134 = cljs.core.chunk_first(inst_32129);
var inst_32135 = cljs.core.chunk_rest(inst_32129);
var inst_32136 = cljs.core.count(inst_32134);
var inst_32110 = inst_32135;
var inst_32111 = inst_32134;
var inst_32112 = inst_32136;
var inst_32113 = (0);
var state_32176__$1 = (function (){var statearr_32243 = state_32176;
(statearr_32243[(19)] = inst_32110);

(statearr_32243[(9)] = inst_32111);

(statearr_32243[(20)] = inst_32112);

(statearr_32243[(10)] = inst_32113);

return statearr_32243;
})();
var statearr_32244_34769 = state_32176__$1;
(statearr_32244_34769[(2)] = null);

(statearr_32244_34769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (41))){
var inst_32129 = (state_32176[(23)]);
var inst_32145 = (state_32176[(2)]);
var inst_32146 = cljs.core.next(inst_32129);
var inst_32110 = inst_32146;
var inst_32111 = null;
var inst_32112 = (0);
var inst_32113 = (0);
var state_32176__$1 = (function (){var statearr_32245 = state_32176;
(statearr_32245[(25)] = inst_32145);

(statearr_32245[(19)] = inst_32110);

(statearr_32245[(9)] = inst_32111);

(statearr_32245[(20)] = inst_32112);

(statearr_32245[(10)] = inst_32113);

return statearr_32245;
})();
var statearr_32246_34770 = state_32176__$1;
(statearr_32246_34770[(2)] = null);

(statearr_32246_34770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (43))){
var state_32176__$1 = state_32176;
var statearr_32250_34771 = state_32176__$1;
(statearr_32250_34771[(2)] = null);

(statearr_32250_34771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (29))){
var inst_32154 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32253_34779 = state_32176__$1;
(statearr_32253_34779[(2)] = inst_32154);

(statearr_32253_34779[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (44))){
var inst_32163 = (state_32176[(2)]);
var state_32176__$1 = (function (){var statearr_32257 = state_32176;
(statearr_32257[(26)] = inst_32163);

return statearr_32257;
})();
var statearr_32258_34782 = state_32176__$1;
(statearr_32258_34782[(2)] = null);

(statearr_32258_34782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (6))){
var inst_32096 = (state_32176[(27)]);
var inst_32095 = cljs.core.deref(cs);
var inst_32096__$1 = cljs.core.keys(inst_32095);
var inst_32097 = cljs.core.count(inst_32096__$1);
var inst_32098 = cljs.core.reset_BANG_(dctr,inst_32097);
var inst_32109 = cljs.core.seq(inst_32096__$1);
var inst_32110 = inst_32109;
var inst_32111 = null;
var inst_32112 = (0);
var inst_32113 = (0);
var state_32176__$1 = (function (){var statearr_32259 = state_32176;
(statearr_32259[(27)] = inst_32096__$1);

(statearr_32259[(28)] = inst_32098);

(statearr_32259[(19)] = inst_32110);

(statearr_32259[(9)] = inst_32111);

(statearr_32259[(20)] = inst_32112);

(statearr_32259[(10)] = inst_32113);

return statearr_32259;
})();
var statearr_32263_34783 = state_32176__$1;
(statearr_32263_34783[(2)] = null);

(statearr_32263_34783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (28))){
var inst_32110 = (state_32176[(19)]);
var inst_32129 = (state_32176[(23)]);
var inst_32129__$1 = cljs.core.seq(inst_32110);
var state_32176__$1 = (function (){var statearr_32265 = state_32176;
(statearr_32265[(23)] = inst_32129__$1);

return statearr_32265;
})();
if(inst_32129__$1){
var statearr_32266_34784 = state_32176__$1;
(statearr_32266_34784[(1)] = (33));

} else {
var statearr_32267_34786 = state_32176__$1;
(statearr_32267_34786[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (25))){
var inst_32113 = (state_32176[(10)]);
var inst_32112 = (state_32176[(20)]);
var inst_32116 = (inst_32113 < inst_32112);
var inst_32117 = inst_32116;
var state_32176__$1 = state_32176;
if(cljs.core.truth_(inst_32117)){
var statearr_32268_34787 = state_32176__$1;
(statearr_32268_34787[(1)] = (27));

} else {
var statearr_32269_34788 = state_32176__$1;
(statearr_32269_34788[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (34))){
var state_32176__$1 = state_32176;
var statearr_32270_34790 = state_32176__$1;
(statearr_32270_34790[(2)] = null);

(statearr_32270_34790[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (17))){
var state_32176__$1 = state_32176;
var statearr_32271_34791 = state_32176__$1;
(statearr_32271_34791[(2)] = null);

(statearr_32271_34791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (3))){
var inst_32168 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32176__$1,inst_32168);
} else {
if((state_val_32177 === (12))){
var inst_32091 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32272_34792 = state_32176__$1;
(statearr_32272_34792[(2)] = inst_32091);

(statearr_32272_34792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (2))){
var state_32176__$1 = state_32176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32176__$1,(4),ch);
} else {
if((state_val_32177 === (23))){
var state_32176__$1 = state_32176;
var statearr_32274_34793 = state_32176__$1;
(statearr_32274_34793[(2)] = null);

(statearr_32274_34793[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (35))){
var inst_32152 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32275_34799 = state_32176__$1;
(statearr_32275_34799[(2)] = inst_32152);

(statearr_32275_34799[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (19))){
var inst_32062 = (state_32176[(7)]);
var inst_32066 = cljs.core.chunk_first(inst_32062);
var inst_32068 = cljs.core.chunk_rest(inst_32062);
var inst_32069 = cljs.core.count(inst_32066);
var inst_32040 = inst_32068;
var inst_32041 = inst_32066;
var inst_32042 = inst_32069;
var inst_32043 = (0);
var state_32176__$1 = (function (){var statearr_32277 = state_32176;
(statearr_32277[(14)] = inst_32040);

(statearr_32277[(15)] = inst_32041);

(statearr_32277[(16)] = inst_32042);

(statearr_32277[(17)] = inst_32043);

return statearr_32277;
})();
var statearr_32281_34812 = state_32176__$1;
(statearr_32281_34812[(2)] = null);

(statearr_32281_34812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (11))){
var inst_32040 = (state_32176[(14)]);
var inst_32062 = (state_32176[(7)]);
var inst_32062__$1 = cljs.core.seq(inst_32040);
var state_32176__$1 = (function (){var statearr_32285 = state_32176;
(statearr_32285[(7)] = inst_32062__$1);

return statearr_32285;
})();
if(inst_32062__$1){
var statearr_32286_34814 = state_32176__$1;
(statearr_32286_34814[(1)] = (16));

} else {
var statearr_32287_34816 = state_32176__$1;
(statearr_32287_34816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (9))){
var inst_32093 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32288_34817 = state_32176__$1;
(statearr_32288_34817[(2)] = inst_32093);

(statearr_32288_34817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (5))){
var inst_32038 = cljs.core.deref(cs);
var inst_32039 = cljs.core.seq(inst_32038);
var inst_32040 = inst_32039;
var inst_32041 = null;
var inst_32042 = (0);
var inst_32043 = (0);
var state_32176__$1 = (function (){var statearr_32289 = state_32176;
(statearr_32289[(14)] = inst_32040);

(statearr_32289[(15)] = inst_32041);

(statearr_32289[(16)] = inst_32042);

(statearr_32289[(17)] = inst_32043);

return statearr_32289;
})();
var statearr_32292_34820 = state_32176__$1;
(statearr_32292_34820[(2)] = null);

(statearr_32292_34820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (14))){
var state_32176__$1 = state_32176;
var statearr_32294_34821 = state_32176__$1;
(statearr_32294_34821[(2)] = null);

(statearr_32294_34821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (45))){
var inst_32160 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32300_34823 = state_32176__$1;
(statearr_32300_34823[(2)] = inst_32160);

(statearr_32300_34823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (26))){
var inst_32096 = (state_32176[(27)]);
var inst_32156 = (state_32176[(2)]);
var inst_32157 = cljs.core.seq(inst_32096);
var state_32176__$1 = (function (){var statearr_32302 = state_32176;
(statearr_32302[(29)] = inst_32156);

return statearr_32302;
})();
if(inst_32157){
var statearr_32303_34824 = state_32176__$1;
(statearr_32303_34824[(1)] = (42));

} else {
var statearr_32307_34830 = state_32176__$1;
(statearr_32307_34830[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (16))){
var inst_32062 = (state_32176[(7)]);
var inst_32064 = cljs.core.chunked_seq_QMARK_(inst_32062);
var state_32176__$1 = state_32176;
if(inst_32064){
var statearr_32312_34832 = state_32176__$1;
(statearr_32312_34832[(1)] = (19));

} else {
var statearr_32313_34833 = state_32176__$1;
(statearr_32313_34833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (38))){
var inst_32149 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32317_34837 = state_32176__$1;
(statearr_32317_34837[(2)] = inst_32149);

(statearr_32317_34837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (30))){
var state_32176__$1 = state_32176;
var statearr_32323_34838 = state_32176__$1;
(statearr_32323_34838[(2)] = null);

(statearr_32323_34838[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (10))){
var inst_32041 = (state_32176[(15)]);
var inst_32043 = (state_32176[(17)]);
var inst_32051 = cljs.core._nth(inst_32041,inst_32043);
var inst_32052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32051,(0),null);
var inst_32053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32051,(1),null);
var state_32176__$1 = (function (){var statearr_32326 = state_32176;
(statearr_32326[(24)] = inst_32052);

return statearr_32326;
})();
if(cljs.core.truth_(inst_32053)){
var statearr_32330_34839 = state_32176__$1;
(statearr_32330_34839[(1)] = (13));

} else {
var statearr_32332_34840 = state_32176__$1;
(statearr_32332_34840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (18))){
var inst_32089 = (state_32176[(2)]);
var state_32176__$1 = state_32176;
var statearr_32336_34842 = state_32176__$1;
(statearr_32336_34842[(2)] = inst_32089);

(statearr_32336_34842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (42))){
var state_32176__$1 = state_32176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32176__$1,(45),dchan);
} else {
if((state_val_32177 === (37))){
var inst_32129 = (state_32176[(23)]);
var inst_32139 = (state_32176[(22)]);
var inst_32027 = (state_32176[(12)]);
var inst_32139__$1 = cljs.core.first(inst_32129);
var inst_32140 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32139__$1,inst_32027,done);
var state_32176__$1 = (function (){var statearr_32347 = state_32176;
(statearr_32347[(22)] = inst_32139__$1);

return statearr_32347;
})();
if(cljs.core.truth_(inst_32140)){
var statearr_32351_34846 = state_32176__$1;
(statearr_32351_34846[(1)] = (39));

} else {
var statearr_32353_34847 = state_32176__$1;
(statearr_32353_34847[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32177 === (8))){
var inst_32043 = (state_32176[(17)]);
var inst_32042 = (state_32176[(16)]);
var inst_32045 = (inst_32043 < inst_32042);
var inst_32046 = inst_32045;
var state_32176__$1 = state_32176;
if(cljs.core.truth_(inst_32046)){
var statearr_32355_34851 = state_32176__$1;
(statearr_32355_34851[(1)] = (10));

} else {
var statearr_32360_34852 = state_32176__$1;
(statearr_32360_34852[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30700__auto__ = null;
var cljs$core$async$mult_$_state_machine__30700__auto____0 = (function (){
var statearr_32370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32370[(0)] = cljs$core$async$mult_$_state_machine__30700__auto__);

(statearr_32370[(1)] = (1));

return statearr_32370;
});
var cljs$core$async$mult_$_state_machine__30700__auto____1 = (function (state_32176){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_32176);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e32375){var ex__30703__auto__ = e32375;
var statearr_32376_34866 = state_32176;
(statearr_32376_34866[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_32176[(4)]))){
var statearr_32379_34867 = state_32176;
(statearr_32379_34867[(1)] = cljs.core.first((state_32176[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34868 = state_32176;
state_32176 = G__34868;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30700__auto__ = function(state_32176){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30700__auto____1.call(this,state_32176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30700__auto____0;
cljs$core$async$mult_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30700__auto____1;
return cljs$core$async$mult_$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_32383 = f__30890__auto__();
(statearr_32383[(6)] = c__30889__auto___34718);

return statearr_32383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34878 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34878(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34888 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34888(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34895 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34895(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34904 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34904(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34910 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34910(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34914 = arguments.length;
var i__5750__auto___34916 = (0);
while(true){
if((i__5750__auto___34916 < len__5749__auto___34914)){
args__5755__auto__.push((arguments[i__5750__auto___34916]));

var G__34917 = (i__5750__auto___34916 + (1));
i__5750__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32423){
var map__32424 = p__32423;
var map__32424__$1 = cljs.core.__destructure_map(map__32424);
var opts = map__32424__$1;
var statearr_32426_34919 = state;
(statearr_32426_34919[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32431_34920 = state;
(statearr_32431_34920[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32433_34933 = state;
(statearr_32433_34933[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32415){
var G__32416 = cljs.core.first(seq32415);
var seq32415__$1 = cljs.core.next(seq32415);
var G__32417 = cljs.core.first(seq32415__$1);
var seq32415__$2 = cljs.core.next(seq32415__$1);
var G__32419 = cljs.core.first(seq32415__$2);
var seq32415__$3 = cljs.core.next(seq32415__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32416,G__32417,G__32419,seq32415__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32456 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32457){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32457 = meta32457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32458,meta32457__$1){
var self__ = this;
var _32458__$1 = this;
return (new cljs.core.async.t_cljs$core$async32456(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32457__$1));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32458){
var self__ = this;
var _32458__$1 = this;
return self__.meta32457;
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32456.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32457","meta32457",1650371050,null)], null);
}));

(cljs.core.async.t_cljs$core$async32456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32456");

(cljs.core.async.t_cljs$core$async32456.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32456.
 */
cljs.core.async.__GT_t_cljs$core$async32456 = (function cljs$core$async$__GT_t_cljs$core$async32456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32457){
return (new cljs.core.async.t_cljs$core$async32456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32457));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32456(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30889__auto___34949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_32561){
var state_val_32562 = (state_32561[(1)]);
if((state_val_32562 === (7))){
var inst_32517 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
if(cljs.core.truth_(inst_32517)){
var statearr_32564_34951 = state_32561__$1;
(statearr_32564_34951[(1)] = (8));

} else {
var statearr_32565_34952 = state_32561__$1;
(statearr_32565_34952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (20))){
var inst_32509 = (state_32561[(7)]);
var state_32561__$1 = state_32561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32561__$1,(23),out,inst_32509);
} else {
if((state_val_32562 === (1))){
var inst_32491 = calc_state();
var inst_32493 = cljs.core.__destructure_map(inst_32491);
var inst_32494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32493,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32493,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32493,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32497 = inst_32491;
var state_32561__$1 = (function (){var statearr_32566 = state_32561;
(statearr_32566[(8)] = inst_32494);

(statearr_32566[(9)] = inst_32495);

(statearr_32566[(10)] = inst_32496);

(statearr_32566[(11)] = inst_32497);

return statearr_32566;
})();
var statearr_32567_34959 = state_32561__$1;
(statearr_32567_34959[(2)] = null);

(statearr_32567_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (24))){
var inst_32500 = (state_32561[(12)]);
var inst_32497 = inst_32500;
var state_32561__$1 = (function (){var statearr_32572 = state_32561;
(statearr_32572[(11)] = inst_32497);

return statearr_32572;
})();
var statearr_32573_34960 = state_32561__$1;
(statearr_32573_34960[(2)] = null);

(statearr_32573_34960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (4))){
var inst_32509 = (state_32561[(7)]);
var inst_32511 = (state_32561[(13)]);
var inst_32508 = (state_32561[(2)]);
var inst_32509__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32508,(0),null);
var inst_32510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32508,(1),null);
var inst_32511__$1 = (inst_32509__$1 == null);
var state_32561__$1 = (function (){var statearr_32575 = state_32561;
(statearr_32575[(7)] = inst_32509__$1);

(statearr_32575[(14)] = inst_32510);

(statearr_32575[(13)] = inst_32511__$1);

return statearr_32575;
})();
if(cljs.core.truth_(inst_32511__$1)){
var statearr_32576_34965 = state_32561__$1;
(statearr_32576_34965[(1)] = (5));

} else {
var statearr_32577_34969 = state_32561__$1;
(statearr_32577_34969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (15))){
var inst_32501 = (state_32561[(15)]);
var inst_32535 = (state_32561[(16)]);
var inst_32535__$1 = cljs.core.empty_QMARK_(inst_32501);
var state_32561__$1 = (function (){var statearr_32578 = state_32561;
(statearr_32578[(16)] = inst_32535__$1);

return statearr_32578;
})();
if(inst_32535__$1){
var statearr_32580_34970 = state_32561__$1;
(statearr_32580_34970[(1)] = (17));

} else {
var statearr_32581_34971 = state_32561__$1;
(statearr_32581_34971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (21))){
var inst_32500 = (state_32561[(12)]);
var inst_32497 = inst_32500;
var state_32561__$1 = (function (){var statearr_32583 = state_32561;
(statearr_32583[(11)] = inst_32497);

return statearr_32583;
})();
var statearr_32584_34972 = state_32561__$1;
(statearr_32584_34972[(2)] = null);

(statearr_32584_34972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (13))){
var inst_32527 = (state_32561[(2)]);
var inst_32528 = calc_state();
var inst_32497 = inst_32528;
var state_32561__$1 = (function (){var statearr_32585 = state_32561;
(statearr_32585[(17)] = inst_32527);

(statearr_32585[(11)] = inst_32497);

return statearr_32585;
})();
var statearr_32586_34977 = state_32561__$1;
(statearr_32586_34977[(2)] = null);

(statearr_32586_34977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (22))){
var inst_32555 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32591_34983 = state_32561__$1;
(statearr_32591_34983[(2)] = inst_32555);

(statearr_32591_34983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (6))){
var inst_32510 = (state_32561[(14)]);
var inst_32515 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32510,change);
var state_32561__$1 = state_32561;
var statearr_32593_34990 = state_32561__$1;
(statearr_32593_34990[(2)] = inst_32515);

(statearr_32593_34990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (25))){
var state_32561__$1 = state_32561;
var statearr_32594_34992 = state_32561__$1;
(statearr_32594_34992[(2)] = null);

(statearr_32594_34992[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (17))){
var inst_32502 = (state_32561[(18)]);
var inst_32510 = (state_32561[(14)]);
var inst_32537 = (inst_32502.cljs$core$IFn$_invoke$arity$1 ? inst_32502.cljs$core$IFn$_invoke$arity$1(inst_32510) : inst_32502.call(null,inst_32510));
var inst_32538 = cljs.core.not(inst_32537);
var state_32561__$1 = state_32561;
var statearr_32595_34993 = state_32561__$1;
(statearr_32595_34993[(2)] = inst_32538);

(statearr_32595_34993[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (3))){
var inst_32559 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32561__$1,inst_32559);
} else {
if((state_val_32562 === (12))){
var state_32561__$1 = state_32561;
var statearr_32597_34997 = state_32561__$1;
(statearr_32597_34997[(2)] = null);

(statearr_32597_34997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (2))){
var inst_32497 = (state_32561[(11)]);
var inst_32500 = (state_32561[(12)]);
var inst_32500__$1 = cljs.core.__destructure_map(inst_32497);
var inst_32501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32500__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32500__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32500__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32561__$1 = (function (){var statearr_32600 = state_32561;
(statearr_32600[(12)] = inst_32500__$1);

(statearr_32600[(15)] = inst_32501);

(statearr_32600[(18)] = inst_32502);

return statearr_32600;
})();
return cljs.core.async.ioc_alts_BANG_(state_32561__$1,(4),inst_32503);
} else {
if((state_val_32562 === (23))){
var inst_32546 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
if(cljs.core.truth_(inst_32546)){
var statearr_32602_34998 = state_32561__$1;
(statearr_32602_34998[(1)] = (24));

} else {
var statearr_32603_34999 = state_32561__$1;
(statearr_32603_34999[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (19))){
var inst_32541 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32604_35000 = state_32561__$1;
(statearr_32604_35000[(2)] = inst_32541);

(statearr_32604_35000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (11))){
var inst_32510 = (state_32561[(14)]);
var inst_32524 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32510);
var state_32561__$1 = state_32561;
var statearr_32605_35003 = state_32561__$1;
(statearr_32605_35003[(2)] = inst_32524);

(statearr_32605_35003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (9))){
var inst_32501 = (state_32561[(15)]);
var inst_32510 = (state_32561[(14)]);
var inst_32532 = (state_32561[(19)]);
var inst_32532__$1 = (inst_32501.cljs$core$IFn$_invoke$arity$1 ? inst_32501.cljs$core$IFn$_invoke$arity$1(inst_32510) : inst_32501.call(null,inst_32510));
var state_32561__$1 = (function (){var statearr_32606 = state_32561;
(statearr_32606[(19)] = inst_32532__$1);

return statearr_32606;
})();
if(cljs.core.truth_(inst_32532__$1)){
var statearr_32607_35005 = state_32561__$1;
(statearr_32607_35005[(1)] = (14));

} else {
var statearr_32608_35006 = state_32561__$1;
(statearr_32608_35006[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (5))){
var inst_32511 = (state_32561[(13)]);
var state_32561__$1 = state_32561;
var statearr_32609_35007 = state_32561__$1;
(statearr_32609_35007[(2)] = inst_32511);

(statearr_32609_35007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (14))){
var inst_32532 = (state_32561[(19)]);
var state_32561__$1 = state_32561;
var statearr_32611_35009 = state_32561__$1;
(statearr_32611_35009[(2)] = inst_32532);

(statearr_32611_35009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (26))){
var inst_32551 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32612_35013 = state_32561__$1;
(statearr_32612_35013[(2)] = inst_32551);

(statearr_32612_35013[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (16))){
var inst_32543 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
if(cljs.core.truth_(inst_32543)){
var statearr_32613_35019 = state_32561__$1;
(statearr_32613_35019[(1)] = (20));

} else {
var statearr_32614_35024 = state_32561__$1;
(statearr_32614_35024[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (10))){
var inst_32557 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32615_35025 = state_32561__$1;
(statearr_32615_35025[(2)] = inst_32557);

(statearr_32615_35025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (18))){
var inst_32535 = (state_32561[(16)]);
var state_32561__$1 = state_32561;
var statearr_32616_35029 = state_32561__$1;
(statearr_32616_35029[(2)] = inst_32535);

(statearr_32616_35029[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (8))){
var inst_32509 = (state_32561[(7)]);
var inst_32520 = (inst_32509 == null);
var state_32561__$1 = state_32561;
if(cljs.core.truth_(inst_32520)){
var statearr_32618_35030 = state_32561__$1;
(statearr_32618_35030[(1)] = (11));

} else {
var statearr_32619_35031 = state_32561__$1;
(statearr_32619_35031[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30700__auto__ = null;
var cljs$core$async$mix_$_state_machine__30700__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = cljs$core$async$mix_$_state_machine__30700__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var cljs$core$async$mix_$_state_machine__30700__auto____1 = (function (state_32561){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_32561);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e32625){var ex__30703__auto__ = e32625;
var statearr_32626_35044 = state_32561;
(statearr_32626_35044[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_32561[(4)]))){
var statearr_32627_35050 = state_32561;
(statearr_32627_35050[(1)] = cljs.core.first((state_32561[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35058 = state_32561;
state_32561 = G__35058;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30700__auto__ = function(state_32561){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30700__auto____1.call(this,state_32561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30700__auto____0;
cljs$core$async$mix_$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30700__auto____1;
return cljs$core$async$mix_$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_32628 = f__30890__auto__();
(statearr_32628[(6)] = c__30889__auto___34949);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35069 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35069(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35080 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35080(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35085 = (function() {
var G__35086 = null;
var G__35086__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35086__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35086 = function(p,v){
switch(arguments.length){
case 1:
return G__35086__1.call(this,p);
case 2:
return G__35086__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35086.cljs$core$IFn$_invoke$arity$1 = G__35086__1;
G__35086.cljs$core$IFn$_invoke$arity$2 = G__35086__2;
return G__35086;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32649 = arguments.length;
switch (G__32649) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35085(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35085(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32660 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32661){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32661 = meta32661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32662,meta32661__$1){
var self__ = this;
var _32662__$1 = this;
return (new cljs.core.async.t_cljs$core$async32660(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32661__$1));
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32662){
var self__ = this;
var _32662__$1 = this;
return self__.meta32661;
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32661","meta32661",1520151695,null)], null);
}));

(cljs.core.async.t_cljs$core$async32660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32660");

(cljs.core.async.t_cljs$core$async32660.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32660.
 */
cljs.core.async.__GT_t_cljs$core$async32660 = (function cljs$core$async$__GT_t_cljs$core$async32660(ch,topic_fn,buf_fn,mults,ensure_mult,meta32661){
return (new cljs.core.async.t_cljs$core$async32660(ch,topic_fn,buf_fn,mults,ensure_mult,meta32661));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32654 = arguments.length;
switch (G__32654) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32651_SHARP_){
if(cljs.core.truth_((p1__32651_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32651_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32651_SHARP_.call(null,topic)))){
return p1__32651_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32651_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32660(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30889__auto___35132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_32751){
var state_val_32752 = (state_32751[(1)]);
if((state_val_32752 === (7))){
var inst_32746 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32760_35133 = state_32751__$1;
(statearr_32760_35133[(2)] = inst_32746);

(statearr_32760_35133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (20))){
var state_32751__$1 = state_32751;
var statearr_32761_35136 = state_32751__$1;
(statearr_32761_35136[(2)] = null);

(statearr_32761_35136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (1))){
var state_32751__$1 = state_32751;
var statearr_32763_35137 = state_32751__$1;
(statearr_32763_35137[(2)] = null);

(statearr_32763_35137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (24))){
var inst_32727 = (state_32751[(7)]);
var inst_32737 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32727);
var state_32751__$1 = state_32751;
var statearr_32766_35139 = state_32751__$1;
(statearr_32766_35139[(2)] = inst_32737);

(statearr_32766_35139[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (4))){
var inst_32674 = (state_32751[(8)]);
var inst_32674__$1 = (state_32751[(2)]);
var inst_32675 = (inst_32674__$1 == null);
var state_32751__$1 = (function (){var statearr_32769 = state_32751;
(statearr_32769[(8)] = inst_32674__$1);

return statearr_32769;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32770_35145 = state_32751__$1;
(statearr_32770_35145[(1)] = (5));

} else {
var statearr_32771_35146 = state_32751__$1;
(statearr_32771_35146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (15))){
var inst_32720 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32772_35147 = state_32751__$1;
(statearr_32772_35147[(2)] = inst_32720);

(statearr_32772_35147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (21))){
var inst_32742 = (state_32751[(2)]);
var state_32751__$1 = (function (){var statearr_32773 = state_32751;
(statearr_32773[(9)] = inst_32742);

return statearr_32773;
})();
var statearr_32774_35150 = state_32751__$1;
(statearr_32774_35150[(2)] = null);

(statearr_32774_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (13))){
var inst_32699 = (state_32751[(10)]);
var inst_32701 = cljs.core.chunked_seq_QMARK_(inst_32699);
var state_32751__$1 = state_32751;
if(inst_32701){
var statearr_32776_35151 = state_32751__$1;
(statearr_32776_35151[(1)] = (16));

} else {
var statearr_32777_35152 = state_32751__$1;
(statearr_32777_35152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (22))){
var inst_32734 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
if(cljs.core.truth_(inst_32734)){
var statearr_32778_35153 = state_32751__$1;
(statearr_32778_35153[(1)] = (23));

} else {
var statearr_32780_35154 = state_32751__$1;
(statearr_32780_35154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (6))){
var inst_32674 = (state_32751[(8)]);
var inst_32727 = (state_32751[(7)]);
var inst_32729 = (state_32751[(11)]);
var inst_32727__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32674) : topic_fn.call(null,inst_32674));
var inst_32728 = cljs.core.deref(mults);
var inst_32729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32728,inst_32727__$1);
var state_32751__$1 = (function (){var statearr_32784 = state_32751;
(statearr_32784[(7)] = inst_32727__$1);

(statearr_32784[(11)] = inst_32729__$1);

return statearr_32784;
})();
if(cljs.core.truth_(inst_32729__$1)){
var statearr_32785_35156 = state_32751__$1;
(statearr_32785_35156[(1)] = (19));

} else {
var statearr_32786_35157 = state_32751__$1;
(statearr_32786_35157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (25))){
var inst_32739 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32787_35158 = state_32751__$1;
(statearr_32787_35158[(2)] = inst_32739);

(statearr_32787_35158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (17))){
var inst_32699 = (state_32751[(10)]);
var inst_32711 = cljs.core.first(inst_32699);
var inst_32712 = cljs.core.async.muxch_STAR_(inst_32711);
var inst_32713 = cljs.core.async.close_BANG_(inst_32712);
var inst_32714 = cljs.core.next(inst_32699);
var inst_32684 = inst_32714;
var inst_32685 = null;
var inst_32686 = (0);
var inst_32687 = (0);
var state_32751__$1 = (function (){var statearr_32788 = state_32751;
(statearr_32788[(12)] = inst_32713);

(statearr_32788[(13)] = inst_32684);

(statearr_32788[(14)] = inst_32685);

(statearr_32788[(15)] = inst_32686);

(statearr_32788[(16)] = inst_32687);

return statearr_32788;
})();
var statearr_32790_35163 = state_32751__$1;
(statearr_32790_35163[(2)] = null);

(statearr_32790_35163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (3))){
var inst_32748 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32751__$1,inst_32748);
} else {
if((state_val_32752 === (12))){
var inst_32722 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32795_35164 = state_32751__$1;
(statearr_32795_35164[(2)] = inst_32722);

(statearr_32795_35164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (2))){
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32751__$1,(4),ch);
} else {
if((state_val_32752 === (23))){
var state_32751__$1 = state_32751;
var statearr_32798_35165 = state_32751__$1;
(statearr_32798_35165[(2)] = null);

(statearr_32798_35165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (19))){
var inst_32729 = (state_32751[(11)]);
var inst_32674 = (state_32751[(8)]);
var inst_32732 = cljs.core.async.muxch_STAR_(inst_32729);
var state_32751__$1 = state_32751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32751__$1,(22),inst_32732,inst_32674);
} else {
if((state_val_32752 === (11))){
var inst_32684 = (state_32751[(13)]);
var inst_32699 = (state_32751[(10)]);
var inst_32699__$1 = cljs.core.seq(inst_32684);
var state_32751__$1 = (function (){var statearr_32802 = state_32751;
(statearr_32802[(10)] = inst_32699__$1);

return statearr_32802;
})();
if(inst_32699__$1){
var statearr_32803_35170 = state_32751__$1;
(statearr_32803_35170[(1)] = (13));

} else {
var statearr_32804_35171 = state_32751__$1;
(statearr_32804_35171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (9))){
var inst_32724 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32805_35174 = state_32751__$1;
(statearr_32805_35174[(2)] = inst_32724);

(statearr_32805_35174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (5))){
var inst_32681 = cljs.core.deref(mults);
var inst_32682 = cljs.core.vals(inst_32681);
var inst_32683 = cljs.core.seq(inst_32682);
var inst_32684 = inst_32683;
var inst_32685 = null;
var inst_32686 = (0);
var inst_32687 = (0);
var state_32751__$1 = (function (){var statearr_32807 = state_32751;
(statearr_32807[(13)] = inst_32684);

(statearr_32807[(14)] = inst_32685);

(statearr_32807[(15)] = inst_32686);

(statearr_32807[(16)] = inst_32687);

return statearr_32807;
})();
var statearr_32810_35175 = state_32751__$1;
(statearr_32810_35175[(2)] = null);

(statearr_32810_35175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (14))){
var state_32751__$1 = state_32751;
var statearr_32816_35178 = state_32751__$1;
(statearr_32816_35178[(2)] = null);

(statearr_32816_35178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (16))){
var inst_32699 = (state_32751[(10)]);
var inst_32704 = cljs.core.chunk_first(inst_32699);
var inst_32706 = cljs.core.chunk_rest(inst_32699);
var inst_32707 = cljs.core.count(inst_32704);
var inst_32684 = inst_32706;
var inst_32685 = inst_32704;
var inst_32686 = inst_32707;
var inst_32687 = (0);
var state_32751__$1 = (function (){var statearr_32819 = state_32751;
(statearr_32819[(13)] = inst_32684);

(statearr_32819[(14)] = inst_32685);

(statearr_32819[(15)] = inst_32686);

(statearr_32819[(16)] = inst_32687);

return statearr_32819;
})();
var statearr_32820_35182 = state_32751__$1;
(statearr_32820_35182[(2)] = null);

(statearr_32820_35182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (10))){
var inst_32685 = (state_32751[(14)]);
var inst_32687 = (state_32751[(16)]);
var inst_32684 = (state_32751[(13)]);
var inst_32686 = (state_32751[(15)]);
var inst_32693 = cljs.core._nth(inst_32685,inst_32687);
var inst_32694 = cljs.core.async.muxch_STAR_(inst_32693);
var inst_32695 = cljs.core.async.close_BANG_(inst_32694);
var inst_32696 = (inst_32687 + (1));
var tmp32813 = inst_32684;
var tmp32814 = inst_32686;
var tmp32815 = inst_32685;
var inst_32684__$1 = tmp32813;
var inst_32685__$1 = tmp32815;
var inst_32686__$1 = tmp32814;
var inst_32687__$1 = inst_32696;
var state_32751__$1 = (function (){var statearr_32824 = state_32751;
(statearr_32824[(17)] = inst_32695);

(statearr_32824[(13)] = inst_32684__$1);

(statearr_32824[(14)] = inst_32685__$1);

(statearr_32824[(15)] = inst_32686__$1);

(statearr_32824[(16)] = inst_32687__$1);

return statearr_32824;
})();
var statearr_32825_35184 = state_32751__$1;
(statearr_32825_35184[(2)] = null);

(statearr_32825_35184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (18))){
var inst_32717 = (state_32751[(2)]);
var state_32751__$1 = state_32751;
var statearr_32827_35185 = state_32751__$1;
(statearr_32827_35185[(2)] = inst_32717);

(statearr_32827_35185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32752 === (8))){
var inst_32687 = (state_32751[(16)]);
var inst_32686 = (state_32751[(15)]);
var inst_32690 = (inst_32687 < inst_32686);
var inst_32691 = inst_32690;
var state_32751__$1 = state_32751;
if(cljs.core.truth_(inst_32691)){
var statearr_32835_35187 = state_32751__$1;
(statearr_32835_35187[(1)] = (10));

} else {
var statearr_32838_35188 = state_32751__$1;
(statearr_32838_35188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_32751){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_32751);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e32842){var ex__30703__auto__ = e32842;
var statearr_32843_35191 = state_32751;
(statearr_32843_35191[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_32751[(4)]))){
var statearr_32845_35195 = state_32751;
(statearr_32845_35195[(1)] = cljs.core.first((state_32751[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35197 = state_32751;
state_32751 = G__35197;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_32751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_32751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_32847 = f__30890__auto__();
(statearr_32847[(6)] = c__30889__auto___35132);

return statearr_32847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32857 = arguments.length;
switch (G__32857) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32860 = arguments.length;
switch (G__32860) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32869 = arguments.length;
switch (G__32869) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30889__auto___35302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (7))){
var state_32928__$1 = state_32928;
var statearr_32932_35304 = state_32928__$1;
(statearr_32932_35304[(2)] = null);

(statearr_32932_35304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (1))){
var state_32928__$1 = state_32928;
var statearr_32933_35305 = state_32928__$1;
(statearr_32933_35305[(2)] = null);

(statearr_32933_35305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (4))){
var inst_32880 = (state_32928[(7)]);
var inst_32879 = (state_32928[(8)]);
var inst_32884 = (inst_32880 < inst_32879);
var state_32928__$1 = state_32928;
if(cljs.core.truth_(inst_32884)){
var statearr_32934_35308 = state_32928__$1;
(statearr_32934_35308[(1)] = (6));

} else {
var statearr_32935_35310 = state_32928__$1;
(statearr_32935_35310[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (15))){
var inst_32912 = (state_32928[(9)]);
var inst_32917 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32912);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(17),out,inst_32917);
} else {
if((state_val_32929 === (13))){
var inst_32912 = (state_32928[(9)]);
var inst_32912__$1 = (state_32928[(2)]);
var inst_32913 = cljs.core.some(cljs.core.nil_QMARK_,inst_32912__$1);
var state_32928__$1 = (function (){var statearr_32938 = state_32928;
(statearr_32938[(9)] = inst_32912__$1);

return statearr_32938;
})();
if(cljs.core.truth_(inst_32913)){
var statearr_32939_35311 = state_32928__$1;
(statearr_32939_35311[(1)] = (14));

} else {
var statearr_32941_35312 = state_32928__$1;
(statearr_32941_35312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (6))){
var state_32928__$1 = state_32928;
var statearr_32942_35313 = state_32928__$1;
(statearr_32942_35313[(2)] = null);

(statearr_32942_35313[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (17))){
var inst_32919 = (state_32928[(2)]);
var state_32928__$1 = (function (){var statearr_32945 = state_32928;
(statearr_32945[(10)] = inst_32919);

return statearr_32945;
})();
var statearr_32946_35314 = state_32928__$1;
(statearr_32946_35314[(2)] = null);

(statearr_32946_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (3))){
var inst_32925 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32928__$1,inst_32925);
} else {
if((state_val_32929 === (12))){
var _ = (function (){var statearr_32949 = state_32928;
(statearr_32949[(4)] = cljs.core.rest((state_32928[(4)])));

return statearr_32949;
})();
var state_32928__$1 = state_32928;
var ex32943 = (state_32928__$1[(2)]);
var statearr_32951_35315 = state_32928__$1;
(statearr_32951_35315[(5)] = ex32943);


if((ex32943 instanceof Object)){
var statearr_32953_35316 = state_32928__$1;
(statearr_32953_35316[(1)] = (11));

(statearr_32953_35316[(5)] = null);

} else {
throw ex32943;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (2))){
var inst_32878 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32879 = cnt;
var inst_32880 = (0);
var state_32928__$1 = (function (){var statearr_32954 = state_32928;
(statearr_32954[(11)] = inst_32878);

(statearr_32954[(8)] = inst_32879);

(statearr_32954[(7)] = inst_32880);

return statearr_32954;
})();
var statearr_32957_35317 = state_32928__$1;
(statearr_32957_35317[(2)] = null);

(statearr_32957_35317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (11))){
var inst_32890 = (state_32928[(2)]);
var inst_32892 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32928__$1 = (function (){var statearr_32961 = state_32928;
(statearr_32961[(12)] = inst_32890);

return statearr_32961;
})();
var statearr_32963_35318 = state_32928__$1;
(statearr_32963_35318[(2)] = inst_32892);

(statearr_32963_35318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (9))){
var inst_32880 = (state_32928[(7)]);
var _ = (function (){var statearr_32965 = state_32928;
(statearr_32965[(4)] = cljs.core.cons((12),(state_32928[(4)])));

return statearr_32965;
})();
var inst_32898 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32880) : chs__$1.call(null,inst_32880));
var inst_32899 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32880) : done.call(null,inst_32880));
var inst_32900 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32898,inst_32899);
var ___$1 = (function (){var statearr_32967 = state_32928;
(statearr_32967[(4)] = cljs.core.rest((state_32928[(4)])));

return statearr_32967;
})();
var state_32928__$1 = state_32928;
var statearr_32970_35321 = state_32928__$1;
(statearr_32970_35321[(2)] = inst_32900);

(statearr_32970_35321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (5))){
var inst_32910 = (state_32928[(2)]);
var state_32928__$1 = (function (){var statearr_32972 = state_32928;
(statearr_32972[(13)] = inst_32910);

return statearr_32972;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32928__$1,(13),dchan);
} else {
if((state_val_32929 === (14))){
var inst_32915 = cljs.core.async.close_BANG_(out);
var state_32928__$1 = state_32928;
var statearr_32976_35324 = state_32928__$1;
(statearr_32976_35324[(2)] = inst_32915);

(statearr_32976_35324[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (16))){
var inst_32923 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32977_35325 = state_32928__$1;
(statearr_32977_35325[(2)] = inst_32923);

(statearr_32977_35325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (10))){
var inst_32880 = (state_32928[(7)]);
var inst_32903 = (state_32928[(2)]);
var inst_32904 = (inst_32880 + (1));
var inst_32880__$1 = inst_32904;
var state_32928__$1 = (function (){var statearr_32980 = state_32928;
(statearr_32980[(14)] = inst_32903);

(statearr_32980[(7)] = inst_32880__$1);

return statearr_32980;
})();
var statearr_32982_35326 = state_32928__$1;
(statearr_32982_35326[(2)] = null);

(statearr_32982_35326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (8))){
var inst_32908 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32983_35328 = state_32928__$1;
(statearr_32983_35328[(2)] = inst_32908);

(statearr_32983_35328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_32928){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_32928);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e32990){var ex__30703__auto__ = e32990;
var statearr_32992_35332 = state_32928;
(statearr_32992_35332[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_32928[(4)]))){
var statearr_32994_35334 = state_32928;
(statearr_32994_35334[(1)] = cljs.core.first((state_32928[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35335 = state_32928;
state_32928 = G__35335;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33000 = f__30890__auto__();
(statearr_33000[(6)] = c__30889__auto___35302);

return statearr_33000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33009 = arguments.length;
switch (G__33009) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___35338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33066){
var state_val_33067 = (state_33066[(1)]);
if((state_val_33067 === (7))){
var inst_33039 = (state_33066[(7)]);
var inst_33041 = (state_33066[(8)]);
var inst_33039__$1 = (state_33066[(2)]);
var inst_33041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33039__$1,(0),null);
var inst_33043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33039__$1,(1),null);
var inst_33044 = (inst_33041__$1 == null);
var state_33066__$1 = (function (){var statearr_33078 = state_33066;
(statearr_33078[(7)] = inst_33039__$1);

(statearr_33078[(8)] = inst_33041__$1);

(statearr_33078[(9)] = inst_33043);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33044)){
var statearr_33081_35344 = state_33066__$1;
(statearr_33081_35344[(1)] = (8));

} else {
var statearr_33083_35345 = state_33066__$1;
(statearr_33083_35345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (1))){
var inst_33026 = cljs.core.vec(chs);
var inst_33027 = inst_33026;
var state_33066__$1 = (function (){var statearr_33088 = state_33066;
(statearr_33088[(10)] = inst_33027);

return statearr_33088;
})();
var statearr_33090_35346 = state_33066__$1;
(statearr_33090_35346[(2)] = null);

(statearr_33090_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (4))){
var inst_33027 = (state_33066[(10)]);
var state_33066__$1 = state_33066;
return cljs.core.async.ioc_alts_BANG_(state_33066__$1,(7),inst_33027);
} else {
if((state_val_33067 === (6))){
var inst_33059 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33092_35347 = state_33066__$1;
(statearr_33092_35347[(2)] = inst_33059);

(statearr_33092_35347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (3))){
var inst_33061 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33066__$1,inst_33061);
} else {
if((state_val_33067 === (2))){
var inst_33027 = (state_33066[(10)]);
var inst_33029 = cljs.core.count(inst_33027);
var inst_33030 = (inst_33029 > (0));
var state_33066__$1 = state_33066;
if(cljs.core.truth_(inst_33030)){
var statearr_33097_35356 = state_33066__$1;
(statearr_33097_35356[(1)] = (4));

} else {
var statearr_33099_35357 = state_33066__$1;
(statearr_33099_35357[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (11))){
var inst_33027 = (state_33066[(10)]);
var inst_33051 = (state_33066[(2)]);
var tmp33093 = inst_33027;
var inst_33027__$1 = tmp33093;
var state_33066__$1 = (function (){var statearr_33102 = state_33066;
(statearr_33102[(11)] = inst_33051);

(statearr_33102[(10)] = inst_33027__$1);

return statearr_33102;
})();
var statearr_33103_35358 = state_33066__$1;
(statearr_33103_35358[(2)] = null);

(statearr_33103_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (9))){
var inst_33041 = (state_33066[(8)]);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33066__$1,(11),out,inst_33041);
} else {
if((state_val_33067 === (5))){
var inst_33057 = cljs.core.async.close_BANG_(out);
var state_33066__$1 = state_33066;
var statearr_33111_35362 = state_33066__$1;
(statearr_33111_35362[(2)] = inst_33057);

(statearr_33111_35362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (10))){
var inst_33055 = (state_33066[(2)]);
var state_33066__$1 = state_33066;
var statearr_33113_35368 = state_33066__$1;
(statearr_33113_35368[(2)] = inst_33055);

(statearr_33113_35368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33067 === (8))){
var inst_33027 = (state_33066[(10)]);
var inst_33039 = (state_33066[(7)]);
var inst_33041 = (state_33066[(8)]);
var inst_33043 = (state_33066[(9)]);
var inst_33046 = (function (){var cs = inst_33027;
var vec__33034 = inst_33039;
var v = inst_33041;
var c = inst_33043;
return (function (p1__33004_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33004_SHARP_);
});
})();
var inst_33047 = cljs.core.filterv(inst_33046,inst_33027);
var inst_33027__$1 = inst_33047;
var state_33066__$1 = (function (){var statearr_33115 = state_33066;
(statearr_33115[(10)] = inst_33027__$1);

return statearr_33115;
})();
var statearr_33117_35373 = state_33066__$1;
(statearr_33117_35373[(2)] = null);

(statearr_33117_35373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_33118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33118[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_33118[(1)] = (1));

return statearr_33118;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33066){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33066);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33123){var ex__30703__auto__ = e33123;
var statearr_33124_35383 = state_33066;
(statearr_33124_35383[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33066[(4)]))){
var statearr_33130_35388 = state_33066;
(statearr_33130_35388[(1)] = cljs.core.first((state_33066[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35390 = state_33066;
state_33066 = G__35390;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33133 = f__30890__auto__();
(statearr_33133[(6)] = c__30889__auto___35338);

return statearr_33133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33147 = arguments.length;
switch (G__33147) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___35401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33183){
var state_val_33184 = (state_33183[(1)]);
if((state_val_33184 === (7))){
var inst_33161 = (state_33183[(7)]);
var inst_33161__$1 = (state_33183[(2)]);
var inst_33162 = (inst_33161__$1 == null);
var inst_33163 = cljs.core.not(inst_33162);
var state_33183__$1 = (function (){var statearr_33195 = state_33183;
(statearr_33195[(7)] = inst_33161__$1);

return statearr_33195;
})();
if(inst_33163){
var statearr_33197_35406 = state_33183__$1;
(statearr_33197_35406[(1)] = (8));

} else {
var statearr_33201_35409 = state_33183__$1;
(statearr_33201_35409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (1))){
var inst_33154 = (0);
var state_33183__$1 = (function (){var statearr_33203 = state_33183;
(statearr_33203[(8)] = inst_33154);

return statearr_33203;
})();
var statearr_33204_35411 = state_33183__$1;
(statearr_33204_35411[(2)] = null);

(statearr_33204_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (4))){
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33183__$1,(7),ch);
} else {
if((state_val_33184 === (6))){
var inst_33178 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33206_35416 = state_33183__$1;
(statearr_33206_35416[(2)] = inst_33178);

(statearr_33206_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (3))){
var inst_33180 = (state_33183[(2)]);
var inst_33181 = cljs.core.async.close_BANG_(out);
var state_33183__$1 = (function (){var statearr_33210 = state_33183;
(statearr_33210[(9)] = inst_33180);

return statearr_33210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33183__$1,inst_33181);
} else {
if((state_val_33184 === (2))){
var inst_33154 = (state_33183[(8)]);
var inst_33156 = (inst_33154 < n);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33156)){
var statearr_33211_35422 = state_33183__$1;
(statearr_33211_35422[(1)] = (4));

} else {
var statearr_33212_35424 = state_33183__$1;
(statearr_33212_35424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (11))){
var inst_33154 = (state_33183[(8)]);
var inst_33167 = (state_33183[(2)]);
var inst_33171 = (inst_33154 + (1));
var inst_33154__$1 = inst_33171;
var state_33183__$1 = (function (){var statearr_33214 = state_33183;
(statearr_33214[(10)] = inst_33167);

(statearr_33214[(8)] = inst_33154__$1);

return statearr_33214;
})();
var statearr_33215_35426 = state_33183__$1;
(statearr_33215_35426[(2)] = null);

(statearr_33215_35426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (9))){
var state_33183__$1 = state_33183;
var statearr_33217_35427 = state_33183__$1;
(statearr_33217_35427[(2)] = null);

(statearr_33217_35427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (5))){
var state_33183__$1 = state_33183;
var statearr_33222_35432 = state_33183__$1;
(statearr_33222_35432[(2)] = null);

(statearr_33222_35432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (10))){
var inst_33175 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33224_35433 = state_33183__$1;
(statearr_33224_35433[(2)] = inst_33175);

(statearr_33224_35433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (8))){
var inst_33161 = (state_33183[(7)]);
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33183__$1,(11),out,inst_33161);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_33226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33226[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_33226[(1)] = (1));

return statearr_33226;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33183){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33183);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33230){var ex__30703__auto__ = e33230;
var statearr_33231_35435 = state_33183;
(statearr_33231_35435[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33183[(4)]))){
var statearr_33233_35438 = state_33183;
(statearr_33233_35438[(1)] = cljs.core.first((state_33183[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35440 = state_33183;
state_33183 = G__35440;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33234 = f__30890__auto__();
(statearr_33234[(6)] = c__30889__auto___35401);

return statearr_33234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33254 = (function (f,ch,meta33241,_,fn1,meta33255){
this.f = f;
this.ch = ch;
this.meta33241 = meta33241;
this._ = _;
this.fn1 = fn1;
this.meta33255 = meta33255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33256,meta33255__$1){
var self__ = this;
var _33256__$1 = this;
return (new cljs.core.async.t_cljs$core$async33254(self__.f,self__.ch,self__.meta33241,self__._,self__.fn1,meta33255__$1));
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33256){
var self__ = this;
var _33256__$1 = this;
return self__.meta33255;
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33238_SHARP_){
var G__33295 = (((p1__33238_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33238_SHARP_) : self__.f.call(null,p1__33238_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33295) : f1.call(null,G__33295));
});
}));

(cljs.core.async.t_cljs$core$async33254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33241","meta33241",-1465349928,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33240","cljs.core.async/t_cljs$core$async33240",770300870,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33255","meta33255",831090135,null)], null);
}));

(cljs.core.async.t_cljs$core$async33254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33254");

(cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33254.
 */
cljs.core.async.__GT_t_cljs$core$async33254 = (function cljs$core$async$__GT_t_cljs$core$async33254(f,ch,meta33241,_,fn1,meta33255){
return (new cljs.core.async.t_cljs$core$async33254(f,ch,meta33241,_,fn1,meta33255));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33240 = (function (f,ch,meta33241){
this.f = f;
this.ch = ch;
this.meta33241 = meta33241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33242,meta33241__$1){
var self__ = this;
var _33242__$1 = this;
return (new cljs.core.async.t_cljs$core$async33240(self__.f,self__.ch,meta33241__$1));
}));

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33242){
var self__ = this;
var _33242__$1 = this;
return self__.meta33241;
}));

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33254(self__.f,self__.ch,self__.meta33241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33322 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33322) : self__.f.call(null,G__33322));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33241","meta33241",-1465349928,null)], null);
}));

(cljs.core.async.t_cljs$core$async33240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33240");

(cljs.core.async.t_cljs$core$async33240.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33240.
 */
cljs.core.async.__GT_t_cljs$core$async33240 = (function cljs$core$async$__GT_t_cljs$core$async33240(f,ch,meta33241){
return (new cljs.core.async.t_cljs$core$async33240(f,ch,meta33241));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33390 = (function (f,ch,meta33391){
this.f = f;
this.ch = ch;
this.meta33391 = meta33391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33392,meta33391__$1){
var self__ = this;
var _33392__$1 = this;
return (new cljs.core.async.t_cljs$core$async33390(self__.f,self__.ch,meta33391__$1));
}));

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33392){
var self__ = this;
var _33392__$1 = this;
return self__.meta33391;
}));

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33391","meta33391",-1005958867,null)], null);
}));

(cljs.core.async.t_cljs$core$async33390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33390");

(cljs.core.async.t_cljs$core$async33390.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33390.
 */
cljs.core.async.__GT_t_cljs$core$async33390 = (function cljs$core$async$__GT_t_cljs$core$async33390(f,ch,meta33391){
return (new cljs.core.async.t_cljs$core$async33390(f,ch,meta33391));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33405 = (function (p,ch,meta33406){
this.p = p;
this.ch = ch;
this.meta33406 = meta33406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33407,meta33406__$1){
var self__ = this;
var _33407__$1 = this;
return (new cljs.core.async.t_cljs$core$async33405(self__.p,self__.ch,meta33406__$1));
}));

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33407){
var self__ = this;
var _33407__$1 = this;
return self__.meta33406;
}));

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33406","meta33406",1624387126,null)], null);
}));

(cljs.core.async.t_cljs$core$async33405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33405");

(cljs.core.async.t_cljs$core$async33405.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33405.
 */
cljs.core.async.__GT_t_cljs$core$async33405 = (function cljs$core$async$__GT_t_cljs$core$async33405(p,ch,meta33406){
return (new cljs.core.async.t_cljs$core$async33405(p,ch,meta33406));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33405(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33414 = arguments.length;
switch (G__33414) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___35576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33444){
var state_val_33445 = (state_33444[(1)]);
if((state_val_33445 === (7))){
var inst_33440 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
var statearr_33447_35581 = state_33444__$1;
(statearr_33447_35581[(2)] = inst_33440);

(statearr_33447_35581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (1))){
var state_33444__$1 = state_33444;
var statearr_33448_35582 = state_33444__$1;
(statearr_33448_35582[(2)] = null);

(statearr_33448_35582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (4))){
var inst_33420 = (state_33444[(7)]);
var inst_33420__$1 = (state_33444[(2)]);
var inst_33421 = (inst_33420__$1 == null);
var state_33444__$1 = (function (){var statearr_33456 = state_33444;
(statearr_33456[(7)] = inst_33420__$1);

return statearr_33456;
})();
if(cljs.core.truth_(inst_33421)){
var statearr_33457_35584 = state_33444__$1;
(statearr_33457_35584[(1)] = (5));

} else {
var statearr_33459_35589 = state_33444__$1;
(statearr_33459_35589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (6))){
var inst_33420 = (state_33444[(7)]);
var inst_33428 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33420) : p.call(null,inst_33420));
var state_33444__$1 = state_33444;
if(cljs.core.truth_(inst_33428)){
var statearr_33462_35597 = state_33444__$1;
(statearr_33462_35597[(1)] = (8));

} else {
var statearr_33463_35599 = state_33444__$1;
(statearr_33463_35599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (3))){
var inst_33442 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33444__$1,inst_33442);
} else {
if((state_val_33445 === (2))){
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33444__$1,(4),ch);
} else {
if((state_val_33445 === (11))){
var inst_33431 = (state_33444[(2)]);
var state_33444__$1 = state_33444;
var statearr_33465_35602 = state_33444__$1;
(statearr_33465_35602[(2)] = inst_33431);

(statearr_33465_35602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (9))){
var state_33444__$1 = state_33444;
var statearr_33466_35612 = state_33444__$1;
(statearr_33466_35612[(2)] = null);

(statearr_33466_35612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (5))){
var inst_33423 = cljs.core.async.close_BANG_(out);
var state_33444__$1 = state_33444;
var statearr_33467_35619 = state_33444__$1;
(statearr_33467_35619[(2)] = inst_33423);

(statearr_33467_35619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (10))){
var inst_33437 = (state_33444[(2)]);
var state_33444__$1 = (function (){var statearr_33468 = state_33444;
(statearr_33468[(8)] = inst_33437);

return statearr_33468;
})();
var statearr_33469_35633 = state_33444__$1;
(statearr_33469_35633[(2)] = null);

(statearr_33469_35633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33445 === (8))){
var inst_33420 = (state_33444[(7)]);
var state_33444__$1 = state_33444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33444__$1,(11),out,inst_33420);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_33473 = [null,null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33444){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33444);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33474){var ex__30703__auto__ = e33474;
var statearr_33476_35636 = state_33444;
(statearr_33476_35636[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33444[(4)]))){
var statearr_33477_35641 = state_33444;
(statearr_33477_35641[(1)] = cljs.core.first((state_33444[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_33444;
state_33444 = G__35645;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33478 = f__30890__auto__();
(statearr_33478[(6)] = c__30889__auto___35576);

return statearr_33478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33484 = arguments.length;
switch (G__33484) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30889__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33558){
var state_val_33559 = (state_33558[(1)]);
if((state_val_33559 === (7))){
var inst_33551 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33577_35679 = state_33558__$1;
(statearr_33577_35679[(2)] = inst_33551);

(statearr_33577_35679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (20))){
var inst_33521 = (state_33558[(7)]);
var inst_33532 = (state_33558[(2)]);
var inst_33533 = cljs.core.next(inst_33521);
var inst_33505 = inst_33533;
var inst_33506 = null;
var inst_33507 = (0);
var inst_33508 = (0);
var state_33558__$1 = (function (){var statearr_33582 = state_33558;
(statearr_33582[(8)] = inst_33532);

(statearr_33582[(9)] = inst_33505);

(statearr_33582[(10)] = inst_33506);

(statearr_33582[(11)] = inst_33507);

(statearr_33582[(12)] = inst_33508);

return statearr_33582;
})();
var statearr_33587_35697 = state_33558__$1;
(statearr_33587_35697[(2)] = null);

(statearr_33587_35697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (1))){
var state_33558__$1 = state_33558;
var statearr_33589_35700 = state_33558__$1;
(statearr_33589_35700[(2)] = null);

(statearr_33589_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (4))){
var inst_33494 = (state_33558[(13)]);
var inst_33494__$1 = (state_33558[(2)]);
var inst_33495 = (inst_33494__$1 == null);
var state_33558__$1 = (function (){var statearr_33593 = state_33558;
(statearr_33593[(13)] = inst_33494__$1);

return statearr_33593;
})();
if(cljs.core.truth_(inst_33495)){
var statearr_33594_35717 = state_33558__$1;
(statearr_33594_35717[(1)] = (5));

} else {
var statearr_33595_35718 = state_33558__$1;
(statearr_33595_35718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (15))){
var state_33558__$1 = state_33558;
var statearr_33604_35719 = state_33558__$1;
(statearr_33604_35719[(2)] = null);

(statearr_33604_35719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (21))){
var state_33558__$1 = state_33558;
var statearr_33605_35720 = state_33558__$1;
(statearr_33605_35720[(2)] = null);

(statearr_33605_35720[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (13))){
var inst_33508 = (state_33558[(12)]);
var inst_33505 = (state_33558[(9)]);
var inst_33506 = (state_33558[(10)]);
var inst_33507 = (state_33558[(11)]);
var inst_33517 = (state_33558[(2)]);
var inst_33518 = (inst_33508 + (1));
var tmp33597 = inst_33507;
var tmp33598 = inst_33506;
var tmp33599 = inst_33505;
var inst_33505__$1 = tmp33599;
var inst_33506__$1 = tmp33598;
var inst_33507__$1 = tmp33597;
var inst_33508__$1 = inst_33518;
var state_33558__$1 = (function (){var statearr_33607 = state_33558;
(statearr_33607[(14)] = inst_33517);

(statearr_33607[(9)] = inst_33505__$1);

(statearr_33607[(10)] = inst_33506__$1);

(statearr_33607[(11)] = inst_33507__$1);

(statearr_33607[(12)] = inst_33508__$1);

return statearr_33607;
})();
var statearr_33608_35730 = state_33558__$1;
(statearr_33608_35730[(2)] = null);

(statearr_33608_35730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (22))){
var state_33558__$1 = state_33558;
var statearr_33609_35732 = state_33558__$1;
(statearr_33609_35732[(2)] = null);

(statearr_33609_35732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (6))){
var inst_33494 = (state_33558[(13)]);
var inst_33503 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33494) : f.call(null,inst_33494));
var inst_33504 = cljs.core.seq(inst_33503);
var inst_33505 = inst_33504;
var inst_33506 = null;
var inst_33507 = (0);
var inst_33508 = (0);
var state_33558__$1 = (function (){var statearr_33612 = state_33558;
(statearr_33612[(9)] = inst_33505);

(statearr_33612[(10)] = inst_33506);

(statearr_33612[(11)] = inst_33507);

(statearr_33612[(12)] = inst_33508);

return statearr_33612;
})();
var statearr_33613_35738 = state_33558__$1;
(statearr_33613_35738[(2)] = null);

(statearr_33613_35738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (17))){
var inst_33521 = (state_33558[(7)]);
var inst_33525 = cljs.core.chunk_first(inst_33521);
var inst_33526 = cljs.core.chunk_rest(inst_33521);
var inst_33527 = cljs.core.count(inst_33525);
var inst_33505 = inst_33526;
var inst_33506 = inst_33525;
var inst_33507 = inst_33527;
var inst_33508 = (0);
var state_33558__$1 = (function (){var statearr_33614 = state_33558;
(statearr_33614[(9)] = inst_33505);

(statearr_33614[(10)] = inst_33506);

(statearr_33614[(11)] = inst_33507);

(statearr_33614[(12)] = inst_33508);

return statearr_33614;
})();
var statearr_33615_35740 = state_33558__$1;
(statearr_33615_35740[(2)] = null);

(statearr_33615_35740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (3))){
var inst_33553 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33558__$1,inst_33553);
} else {
if((state_val_33559 === (12))){
var inst_33541 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33643_35746 = state_33558__$1;
(statearr_33643_35746[(2)] = inst_33541);

(statearr_33643_35746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (2))){
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33558__$1,(4),in$);
} else {
if((state_val_33559 === (23))){
var inst_33549 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33644_35748 = state_33558__$1;
(statearr_33644_35748[(2)] = inst_33549);

(statearr_33644_35748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (19))){
var inst_33536 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33649_35749 = state_33558__$1;
(statearr_33649_35749[(2)] = inst_33536);

(statearr_33649_35749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (11))){
var inst_33505 = (state_33558[(9)]);
var inst_33521 = (state_33558[(7)]);
var inst_33521__$1 = cljs.core.seq(inst_33505);
var state_33558__$1 = (function (){var statearr_33652 = state_33558;
(statearr_33652[(7)] = inst_33521__$1);

return statearr_33652;
})();
if(inst_33521__$1){
var statearr_33653_35761 = state_33558__$1;
(statearr_33653_35761[(1)] = (14));

} else {
var statearr_33654_35762 = state_33558__$1;
(statearr_33654_35762[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (9))){
var inst_33543 = (state_33558[(2)]);
var inst_33544 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33558__$1 = (function (){var statearr_33657 = state_33558;
(statearr_33657[(15)] = inst_33543);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33544)){
var statearr_33658_35778 = state_33558__$1;
(statearr_33658_35778[(1)] = (21));

} else {
var statearr_33659_35780 = state_33558__$1;
(statearr_33659_35780[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (5))){
var inst_33497 = cljs.core.async.close_BANG_(out);
var state_33558__$1 = state_33558;
var statearr_33660_35781 = state_33558__$1;
(statearr_33660_35781[(2)] = inst_33497);

(statearr_33660_35781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (14))){
var inst_33521 = (state_33558[(7)]);
var inst_33523 = cljs.core.chunked_seq_QMARK_(inst_33521);
var state_33558__$1 = state_33558;
if(inst_33523){
var statearr_33661_35788 = state_33558__$1;
(statearr_33661_35788[(1)] = (17));

} else {
var statearr_33662_35789 = state_33558__$1;
(statearr_33662_35789[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (16))){
var inst_33539 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33663_35791 = state_33558__$1;
(statearr_33663_35791[(2)] = inst_33539);

(statearr_33663_35791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (10))){
var inst_33506 = (state_33558[(10)]);
var inst_33508 = (state_33558[(12)]);
var inst_33515 = cljs.core._nth(inst_33506,inst_33508);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33558__$1,(13),out,inst_33515);
} else {
if((state_val_33559 === (18))){
var inst_33521 = (state_33558[(7)]);
var inst_33530 = cljs.core.first(inst_33521);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33558__$1,(20),out,inst_33530);
} else {
if((state_val_33559 === (8))){
var inst_33508 = (state_33558[(12)]);
var inst_33507 = (state_33558[(11)]);
var inst_33511 = (inst_33508 < inst_33507);
var inst_33512 = inst_33511;
var state_33558__$1 = state_33558;
if(cljs.core.truth_(inst_33512)){
var statearr_33664_35819 = state_33558__$1;
(statearr_33664_35819[(1)] = (10));

} else {
var statearr_33665_35825 = state_33558__$1;
(statearr_33665_35825[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____0 = (function (){
var statearr_33666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33666[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__);

(statearr_33666[(1)] = (1));

return statearr_33666;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____1 = (function (state_33558){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33558);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33667){var ex__30703__auto__ = e33667;
var statearr_33668_35842 = state_33558;
(statearr_33668_35842[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33558[(4)]))){
var statearr_33671_35843 = state_33558;
(statearr_33671_35843[(1)] = cljs.core.first((state_33558[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_33558;
state_33558 = G__35844;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__ = function(state_33558){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____1.call(this,state_33558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30700__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33674 = f__30890__auto__();
(statearr_33674[(6)] = c__30889__auto__);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));

return c__30889__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33680 = arguments.length;
switch (G__33680) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33690 = arguments.length;
switch (G__33690) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___35855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33729){
var state_val_33730 = (state_33729[(1)]);
if((state_val_33730 === (7))){
var inst_33723 = (state_33729[(2)]);
var state_33729__$1 = state_33729;
var statearr_33735_35861 = state_33729__$1;
(statearr_33735_35861[(2)] = inst_33723);

(statearr_33735_35861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (1))){
var inst_33701 = null;
var state_33729__$1 = (function (){var statearr_33739 = state_33729;
(statearr_33739[(7)] = inst_33701);

return statearr_33739;
})();
var statearr_33740_35867 = state_33729__$1;
(statearr_33740_35867[(2)] = null);

(statearr_33740_35867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (4))){
var inst_33706 = (state_33729[(8)]);
var inst_33706__$1 = (state_33729[(2)]);
var inst_33708 = (inst_33706__$1 == null);
var inst_33709 = cljs.core.not(inst_33708);
var state_33729__$1 = (function (){var statearr_33741 = state_33729;
(statearr_33741[(8)] = inst_33706__$1);

return statearr_33741;
})();
if(inst_33709){
var statearr_33742_35880 = state_33729__$1;
(statearr_33742_35880[(1)] = (5));

} else {
var statearr_33743_35886 = state_33729__$1;
(statearr_33743_35886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (6))){
var state_33729__$1 = state_33729;
var statearr_33745_35890 = state_33729__$1;
(statearr_33745_35890[(2)] = null);

(statearr_33745_35890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (3))){
var inst_33726 = (state_33729[(2)]);
var inst_33727 = cljs.core.async.close_BANG_(out);
var state_33729__$1 = (function (){var statearr_33746 = state_33729;
(statearr_33746[(9)] = inst_33726);

return statearr_33746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33729__$1,inst_33727);
} else {
if((state_val_33730 === (2))){
var state_33729__$1 = state_33729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33729__$1,(4),ch);
} else {
if((state_val_33730 === (11))){
var inst_33706 = (state_33729[(8)]);
var inst_33717 = (state_33729[(2)]);
var inst_33701 = inst_33706;
var state_33729__$1 = (function (){var statearr_33748 = state_33729;
(statearr_33748[(10)] = inst_33717);

(statearr_33748[(7)] = inst_33701);

return statearr_33748;
})();
var statearr_33749_35912 = state_33729__$1;
(statearr_33749_35912[(2)] = null);

(statearr_33749_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (9))){
var inst_33706 = (state_33729[(8)]);
var state_33729__$1 = state_33729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33729__$1,(11),out,inst_33706);
} else {
if((state_val_33730 === (5))){
var inst_33706 = (state_33729[(8)]);
var inst_33701 = (state_33729[(7)]);
var inst_33712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33706,inst_33701);
var state_33729__$1 = state_33729;
if(inst_33712){
var statearr_33753_35917 = state_33729__$1;
(statearr_33753_35917[(1)] = (8));

} else {
var statearr_33754_35923 = state_33729__$1;
(statearr_33754_35923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (10))){
var inst_33720 = (state_33729[(2)]);
var state_33729__$1 = state_33729;
var statearr_33760_35931 = state_33729__$1;
(statearr_33760_35931[(2)] = inst_33720);

(statearr_33760_35931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33730 === (8))){
var inst_33701 = (state_33729[(7)]);
var tmp33751 = inst_33701;
var inst_33701__$1 = tmp33751;
var state_33729__$1 = (function (){var statearr_33761 = state_33729;
(statearr_33761[(7)] = inst_33701__$1);

return statearr_33761;
})();
var statearr_33762_35939 = state_33729__$1;
(statearr_33762_35939[(2)] = null);

(statearr_33762_35939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_33766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33766[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_33766[(1)] = (1));

return statearr_33766;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33729){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33729);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33767){var ex__30703__auto__ = e33767;
var statearr_33768_35959 = state_33729;
(statearr_33768_35959[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33729[(4)]))){
var statearr_33769_35960 = state_33729;
(statearr_33769_35960[(1)] = cljs.core.first((state_33729[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35963 = state_33729;
state_33729 = G__35963;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33774 = f__30890__auto__();
(statearr_33774[(6)] = c__30889__auto___35855);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33780 = arguments.length;
switch (G__33780) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___35976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33837){
var state_val_33838 = (state_33837[(1)]);
if((state_val_33838 === (7))){
var inst_33833 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33849_35982 = state_33837__$1;
(statearr_33849_35982[(2)] = inst_33833);

(statearr_33849_35982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (1))){
var inst_33800 = (new Array(n));
var inst_33801 = inst_33800;
var inst_33802 = (0);
var state_33837__$1 = (function (){var statearr_33850 = state_33837;
(statearr_33850[(7)] = inst_33801);

(statearr_33850[(8)] = inst_33802);

return statearr_33850;
})();
var statearr_33851_35993 = state_33837__$1;
(statearr_33851_35993[(2)] = null);

(statearr_33851_35993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (4))){
var inst_33805 = (state_33837[(9)]);
var inst_33805__$1 = (state_33837[(2)]);
var inst_33806 = (inst_33805__$1 == null);
var inst_33807 = cljs.core.not(inst_33806);
var state_33837__$1 = (function (){var statearr_33855 = state_33837;
(statearr_33855[(9)] = inst_33805__$1);

return statearr_33855;
})();
if(inst_33807){
var statearr_33856_36002 = state_33837__$1;
(statearr_33856_36002[(1)] = (5));

} else {
var statearr_33857_36003 = state_33837__$1;
(statearr_33857_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (15))){
var inst_33827 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33858_36006 = state_33837__$1;
(statearr_33858_36006[(2)] = inst_33827);

(statearr_33858_36006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (13))){
var state_33837__$1 = state_33837;
var statearr_33859_36020 = state_33837__$1;
(statearr_33859_36020[(2)] = null);

(statearr_33859_36020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (6))){
var inst_33802 = (state_33837[(8)]);
var inst_33823 = (inst_33802 > (0));
var state_33837__$1 = state_33837;
if(cljs.core.truth_(inst_33823)){
var statearr_33861_36027 = state_33837__$1;
(statearr_33861_36027[(1)] = (12));

} else {
var statearr_33862_36028 = state_33837__$1;
(statearr_33862_36028[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (3))){
var inst_33835 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33837__$1,inst_33835);
} else {
if((state_val_33838 === (12))){
var inst_33801 = (state_33837[(7)]);
var inst_33825 = cljs.core.vec(inst_33801);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33837__$1,(15),out,inst_33825);
} else {
if((state_val_33838 === (2))){
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33837__$1,(4),ch);
} else {
if((state_val_33838 === (11))){
var inst_33817 = (state_33837[(2)]);
var inst_33818 = (new Array(n));
var inst_33801 = inst_33818;
var inst_33802 = (0);
var state_33837__$1 = (function (){var statearr_33871 = state_33837;
(statearr_33871[(10)] = inst_33817);

(statearr_33871[(7)] = inst_33801);

(statearr_33871[(8)] = inst_33802);

return statearr_33871;
})();
var statearr_33872_36037 = state_33837__$1;
(statearr_33872_36037[(2)] = null);

(statearr_33872_36037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (9))){
var inst_33801 = (state_33837[(7)]);
var inst_33815 = cljs.core.vec(inst_33801);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33837__$1,(11),out,inst_33815);
} else {
if((state_val_33838 === (5))){
var inst_33801 = (state_33837[(7)]);
var inst_33802 = (state_33837[(8)]);
var inst_33805 = (state_33837[(9)]);
var inst_33810 = (state_33837[(11)]);
var inst_33809 = (inst_33801[inst_33802] = inst_33805);
var inst_33810__$1 = (inst_33802 + (1));
var inst_33811 = (inst_33810__$1 < n);
var state_33837__$1 = (function (){var statearr_33873 = state_33837;
(statearr_33873[(12)] = inst_33809);

(statearr_33873[(11)] = inst_33810__$1);

return statearr_33873;
})();
if(cljs.core.truth_(inst_33811)){
var statearr_33874_36042 = state_33837__$1;
(statearr_33874_36042[(1)] = (8));

} else {
var statearr_33876_36043 = state_33837__$1;
(statearr_33876_36043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (14))){
var inst_33830 = (state_33837[(2)]);
var inst_33831 = cljs.core.async.close_BANG_(out);
var state_33837__$1 = (function (){var statearr_33878 = state_33837;
(statearr_33878[(13)] = inst_33830);

return statearr_33878;
})();
var statearr_33880_36044 = state_33837__$1;
(statearr_33880_36044[(2)] = inst_33831);

(statearr_33880_36044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (10))){
var inst_33821 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33881_36047 = state_33837__$1;
(statearr_33881_36047[(2)] = inst_33821);

(statearr_33881_36047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (8))){
var inst_33801 = (state_33837[(7)]);
var inst_33810 = (state_33837[(11)]);
var tmp33877 = inst_33801;
var inst_33801__$1 = tmp33877;
var inst_33802 = inst_33810;
var state_33837__$1 = (function (){var statearr_33882 = state_33837;
(statearr_33882[(7)] = inst_33801__$1);

(statearr_33882[(8)] = inst_33802);

return statearr_33882;
})();
var statearr_33883_36053 = state_33837__$1;
(statearr_33883_36053[(2)] = null);

(statearr_33883_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_33892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33892[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_33892[(1)] = (1));

return statearr_33892;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33837){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33837);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e33893){var ex__30703__auto__ = e33893;
var statearr_33894_36061 = state_33837;
(statearr_33894_36061[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33837[(4)]))){
var statearr_33895_36063 = state_33837;
(statearr_33895_36063[(1)] = cljs.core.first((state_33837[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_33837;
state_33837 = G__36070;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_33898 = f__30890__auto__();
(statearr_33898[(6)] = c__30889__auto___35976);

return statearr_33898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33902 = arguments.length;
switch (G__33902) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30889__auto___36097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30890__auto__ = (function (){var switch__30699__auto__ = (function (state_33960){
var state_val_33961 = (state_33960[(1)]);
if((state_val_33961 === (7))){
var inst_33955 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33967_36109 = state_33960__$1;
(statearr_33967_36109[(2)] = inst_33955);

(statearr_33967_36109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (1))){
var inst_33908 = [];
var inst_33909 = inst_33908;
var inst_33910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33960__$1 = (function (){var statearr_33968 = state_33960;
(statearr_33968[(7)] = inst_33909);

(statearr_33968[(8)] = inst_33910);

return statearr_33968;
})();
var statearr_33970_36118 = state_33960__$1;
(statearr_33970_36118[(2)] = null);

(statearr_33970_36118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (4))){
var inst_33913 = (state_33960[(9)]);
var inst_33913__$1 = (state_33960[(2)]);
var inst_33915 = (inst_33913__$1 == null);
var inst_33916 = cljs.core.not(inst_33915);
var state_33960__$1 = (function (){var statearr_33976 = state_33960;
(statearr_33976[(9)] = inst_33913__$1);

return statearr_33976;
})();
if(inst_33916){
var statearr_33977_36123 = state_33960__$1;
(statearr_33977_36123[(1)] = (5));

} else {
var statearr_33978_36126 = state_33960__$1;
(statearr_33978_36126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (15))){
var inst_33909 = (state_33960[(7)]);
var inst_33947 = cljs.core.vec(inst_33909);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33960__$1,(18),out,inst_33947);
} else {
if((state_val_33961 === (13))){
var inst_33941 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33984_36133 = state_33960__$1;
(statearr_33984_36133[(2)] = inst_33941);

(statearr_33984_36133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (6))){
var inst_33909 = (state_33960[(7)]);
var inst_33943 = inst_33909.length;
var inst_33944 = (inst_33943 > (0));
var state_33960__$1 = state_33960;
if(cljs.core.truth_(inst_33944)){
var statearr_33985_36136 = state_33960__$1;
(statearr_33985_36136[(1)] = (15));

} else {
var statearr_33986_36137 = state_33960__$1;
(statearr_33986_36137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (17))){
var inst_33952 = (state_33960[(2)]);
var inst_33953 = cljs.core.async.close_BANG_(out);
var state_33960__$1 = (function (){var statearr_33987 = state_33960;
(statearr_33987[(10)] = inst_33952);

return statearr_33987;
})();
var statearr_33988_36139 = state_33960__$1;
(statearr_33988_36139[(2)] = inst_33953);

(statearr_33988_36139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (3))){
var inst_33957 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33960__$1,inst_33957);
} else {
if((state_val_33961 === (12))){
var inst_33909 = (state_33960[(7)]);
var inst_33934 = cljs.core.vec(inst_33909);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33960__$1,(14),out,inst_33934);
} else {
if((state_val_33961 === (2))){
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33960__$1,(4),ch);
} else {
if((state_val_33961 === (11))){
var inst_33909 = (state_33960[(7)]);
var inst_33913 = (state_33960[(9)]);
var inst_33918 = (state_33960[(11)]);
var inst_33931 = inst_33909.push(inst_33913);
var tmp33989 = inst_33909;
var inst_33909__$1 = tmp33989;
var inst_33910 = inst_33918;
var state_33960__$1 = (function (){var statearr_33990 = state_33960;
(statearr_33990[(12)] = inst_33931);

(statearr_33990[(7)] = inst_33909__$1);

(statearr_33990[(8)] = inst_33910);

return statearr_33990;
})();
var statearr_33991_36192 = state_33960__$1;
(statearr_33991_36192[(2)] = null);

(statearr_33991_36192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (9))){
var inst_33910 = (state_33960[(8)]);
var inst_33923 = cljs.core.keyword_identical_QMARK_(inst_33910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33960__$1 = state_33960;
var statearr_33992_36200 = state_33960__$1;
(statearr_33992_36200[(2)] = inst_33923);

(statearr_33992_36200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (5))){
var inst_33913 = (state_33960[(9)]);
var inst_33918 = (state_33960[(11)]);
var inst_33910 = (state_33960[(8)]);
var inst_33920 = (state_33960[(13)]);
var inst_33918__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33913) : f.call(null,inst_33913));
var inst_33920__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33918__$1,inst_33910);
var state_33960__$1 = (function (){var statearr_33995 = state_33960;
(statearr_33995[(11)] = inst_33918__$1);

(statearr_33995[(13)] = inst_33920__$1);

return statearr_33995;
})();
if(inst_33920__$1){
var statearr_33997_36210 = state_33960__$1;
(statearr_33997_36210[(1)] = (8));

} else {
var statearr_33999_36211 = state_33960__$1;
(statearr_33999_36211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (14))){
var inst_33913 = (state_33960[(9)]);
var inst_33918 = (state_33960[(11)]);
var inst_33936 = (state_33960[(2)]);
var inst_33937 = [];
var inst_33938 = inst_33937.push(inst_33913);
var inst_33909 = inst_33937;
var inst_33910 = inst_33918;
var state_33960__$1 = (function (){var statearr_34002 = state_33960;
(statearr_34002[(14)] = inst_33936);

(statearr_34002[(15)] = inst_33938);

(statearr_34002[(7)] = inst_33909);

(statearr_34002[(8)] = inst_33910);

return statearr_34002;
})();
var statearr_34003_36212 = state_33960__$1;
(statearr_34003_36212[(2)] = null);

(statearr_34003_36212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (16))){
var state_33960__$1 = state_33960;
var statearr_34005_36213 = state_33960__$1;
(statearr_34005_36213[(2)] = null);

(statearr_34005_36213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (10))){
var inst_33925 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
if(cljs.core.truth_(inst_33925)){
var statearr_34006_36214 = state_33960__$1;
(statearr_34006_36214[(1)] = (11));

} else {
var statearr_34007_36215 = state_33960__$1;
(statearr_34007_36215[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (18))){
var inst_33949 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_34008_36216 = state_33960__$1;
(statearr_34008_36216[(2)] = inst_33949);

(statearr_34008_36216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (8))){
var inst_33920 = (state_33960[(13)]);
var state_33960__$1 = state_33960;
var statearr_34010_36218 = state_33960__$1;
(statearr_34010_36218[(2)] = inst_33920);

(statearr_34010_36218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30700__auto__ = null;
var cljs$core$async$state_machine__30700__auto____0 = (function (){
var statearr_34013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34013[(0)] = cljs$core$async$state_machine__30700__auto__);

(statearr_34013[(1)] = (1));

return statearr_34013;
});
var cljs$core$async$state_machine__30700__auto____1 = (function (state_33960){
while(true){
var ret_value__30701__auto__ = (function (){try{while(true){
var result__30702__auto__ = switch__30699__auto__(state_33960);
if(cljs.core.keyword_identical_QMARK_(result__30702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30702__auto__;
}
break;
}
}catch (e34017){var ex__30703__auto__ = e34017;
var statearr_34018_36219 = state_33960;
(statearr_34018_36219[(2)] = ex__30703__auto__);


if(cljs.core.seq((state_33960[(4)]))){
var statearr_34019_36220 = state_33960;
(statearr_34019_36220[(1)] = cljs.core.first((state_33960[(4)])));

} else {
throw ex__30703__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36221 = state_33960;
state_33960 = G__36221;
continue;
} else {
return ret_value__30701__auto__;
}
break;
}
});
cljs$core$async$state_machine__30700__auto__ = function(state_33960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30700__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30700__auto____1.call(this,state_33960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30700__auto____0;
cljs$core$async$state_machine__30700__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30700__auto____1;
return cljs$core$async$state_machine__30700__auto__;
})()
})();
var state__30891__auto__ = (function (){var statearr_34021 = f__30890__auto__();
(statearr_34021[(6)] = c__30889__auto___36097);

return statearr_34021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30891__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
