// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('franiwalksdogs.ajax');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('luminus_transit.time');
goog.require('cognitect.transit');
franiwalksdogs.ajax.local_uri_QMARK_ = (function franiwalksdogs$ajax$local_uri_QMARK_(p__7463){
var map__7464 = p__7463;
var map__7464__$1 = (((((!((map__7464 == null))))?(((((map__7464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7464):map__7464);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7464__$1,cljs.core.cst$kw$uri);
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
franiwalksdogs.ajax.default_headers = (function franiwalksdogs$ajax$default_headers(request){
if(franiwalksdogs.ajax.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,(function (p1__7466_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__7466_SHARP_], 0));
}));
} else {
return request;
}
});
franiwalksdogs.ajax.as_transit = (function franiwalksdogs$ajax$as_transit(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$raw,false,cljs.core.cst$kw$format,cljs.core.cst$kw$transit,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$transit,cljs.core.cst$kw$reader,cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,luminus_transit.time.time_deserialization_handlers),cljs.core.cst$kw$writer,cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,luminus_transit.time.time_serialization_handlers)], null),opts], 0));
});
franiwalksdogs.ajax.load_interceptors_BANG_ = (function franiwalksdogs$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__7467 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"default headers",cljs.core.cst$kw$request,franiwalksdogs.ajax.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__7467) : ajax.core.to_interceptor.call(null,G__7467));
})());
});
