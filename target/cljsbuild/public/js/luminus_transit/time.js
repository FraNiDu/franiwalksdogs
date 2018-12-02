// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('luminus_transit.time');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cognitect.transit');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
luminus_transit.time.iso_local_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS");
luminus_transit.time.iso_local_date = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
luminus_transit.time.iso_local_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS");
luminus_transit.time.iso_zoned_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
luminus_transit.time.time_deserialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,new cljs.core.PersistentArrayMap(null, 4, ["LocalTime",cognitect.transit.read_handler((function (p1__7446_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_time,p1__7446_SHARP_);
})),"LocalDate",cognitect.transit.read_handler((function (p1__7447_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_date,p1__7447_SHARP_);
})),"LocalDateTime",cognitect.transit.read_handler((function (p1__7448_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_date_time,p1__7448_SHARP_);
})),"ZonedDateTime",cognitect.transit.read_handler((function (p1__7449_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_zoned_date_time,p1__7449_SHARP_);
}))], null)], null);
luminus_transit.time.time_serialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handlers,cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.Date,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDate"),(function (p1__7450_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_local_date,p1__7450_SHARP_);
})),goog.date.DateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDateTime"),(function (p1__7451_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_local_date_time,p1__7451_SHARP_);
})),goog.date.UtcDateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("ZonedDateTime"),(function (p1__7452_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_zoned_date_time,p1__7452_SHARP_);
}))])], null);
