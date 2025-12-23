goog.provide('test_app.main');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_leaflet$lib$index=shadow.js.require("module$node_modules$react_leaflet$lib$index", {});
var module$node_modules$leaflet$dist$leaflet_src=shadow.js.require("module$node_modules$leaflet$dist$leaflet_src", {});
if((typeof test_app !== 'undefined') && (typeof test_app.main !== 'undefined') && (typeof test_app.main.app_state !== 'undefined')){
} else {
test_app.main.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.3293,18.0686], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(5),new cljs.core.Keyword(null,"geojson-layers","geojson-layers",-458121541),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [data.SE_1.data,data.SE_2.data,data.SE_3.data,data.SE_4.data], null)], null));
}
if((typeof test_app !== 'undefined') && (typeof test_app.main !== 'undefined') && (typeof test_app.main.root !== 'undefined')){
} else {
test_app.main.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
test_app.main.geojson_style = (function test_app$main$geojson_style(layer_index){
return (function (feature){
var colors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#3388ff","#ff6b6b","#4ecdc4","#ffe66d"], null);
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),cljs.core.get.cljs$core$IFn$_invoke$arity$3(colors,layer_index,"#3388ff"),new cljs.core.Keyword(null,"weight","weight",-1262796205),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"dashArray","dashArray",-1716456698),"3",new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),0.4], null));
});
});
test_app.main.on_each_feature = (function test_app$main$on_each_feature(feature,layer){
var props = feature.properties;
var popup_content = ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce_kv((function (acc,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),"<strong>",cljs.core.name(k),":</strong> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"<br/>"].join('');
}),"",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))),"</div>"].join('');
return layer.bindPopup(popup_content);
});
test_app.main.loading_spinner = (function test_app$main$loading_spinner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner","div.spinner",-1989566624)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading GeoJSON data..."], null)], null);
});
test_app.main.error_message = (function test_app$main$error_message(error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Error Loading Data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error], null)], null);
});
test_app.main.map_component = (function test_app$main$map_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.map-container","div.map-container",424235644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.MapContainer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state))),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"80vh",new cljs.core.Keyword(null,"width","width",-384071477),"60vw"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.TileLayer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",new cljs.core.Keyword(null,"url","url",276297046),"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"], null)], null),(function (){var iter__5503__auto__ = (function test_app$main$map_component_$_iter__28614(s__28615){
return (new cljs.core.LazySeq(null,(function (){
var s__28615__$1 = s__28615;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28615__$1);
if(temp__5825__auto__){
var s__28615__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28615__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28615__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28617 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28616 = (0);
while(true){
if((i__28616 < size__5502__auto__)){
var vec__28618 = cljs.core._nth(c__5501__auto__,i__28616);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28618,(0),null);
var geojson = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28618,(1),null);
cljs.core.chunk_append(b__28617,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.GeoJSON,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js(geojson),new cljs.core.Keyword(null,"style","style",-496642736),test_app.main.geojson_style(idx),new cljs.core.Keyword(null,"onEachFeature","onEachFeature",-442168015),test_app.main.on_each_feature], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__28624 = (i__28616 + (1));
i__28616 = G__28624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28617),test_app$main$map_component_$_iter__28614(cljs.core.chunk_rest(s__28615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28617),null);
}
} else {
var vec__28621 = cljs.core.first(s__28615__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28621,(0),null);
var geojson = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28621,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.GeoJSON,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js(geojson),new cljs.core.Keyword(null,"style","style",-496642736),test_app.main.geojson_style(idx),new cljs.core.Keyword(null,"onEachFeature","onEachFeature",-442168015),test_app.main.on_each_feature], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),test_app$main$map_component_$_iter__28614(cljs.core.rest(s__28615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"geojson-layers","geojson-layers",-458121541).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state))));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.Marker,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_leaflet$lib$index.Popup,"Center marker!"], null)], null)], null)], null);
});
test_app.main.app = (function test_app$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"React-Leaflet ClojureScript App"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Map with multiple GeoJSON layers"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_app.main.loading_spinner], null):(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_app.main.error_message,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_app.main.app_state))], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_app.main.map_component], null)
))], null);
});
test_app.main.mount_root = (function test_app$main$mount_root(){
var root_el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(test_app.main.root))){
} else {
cljs.core.reset_BANG_(test_app.main.root,reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(root_el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(test_app.main.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_app.main.app], null));
});
test_app.main.init = (function test_app$main$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing app..."], 0));

return test_app.main.mount_root();
});
goog.exportSymbol('test_app.main.init', test_app.main.init);

//# sourceMappingURL=test_app.main.js.map
