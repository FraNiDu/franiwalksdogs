// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__6527 = e.target.readyState;
var fexpr__6526 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__6526.cljs$core$IFn$_invoke$arity$1 ? fexpr__6526.cljs$core$IFn$_invoke$arity$1(G__6527) : fexpr__6526.call(null,G__6527));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6529,handler){
var map__6530 = p__6529;
var map__6530__$1 = (((((!((map__6530 == null))))?(((((map__6530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6530):map__6530);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6530__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6530__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6530__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6530__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6530__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6530__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6530__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__6530,map__6530__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__6528_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__6528_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__6530,map__6530__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___6542 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___6542)){
var response_type_6543 = temp__5457__auto___6542;
this$__$1.responseType = cljs.core.name(response_type_6543);
} else {
}

var seq__6532_6544 = cljs.core.seq(headers);
var chunk__6533_6545 = null;
var count__6534_6546 = (0);
var i__6535_6547 = (0);
while(true){
if((i__6535_6547 < count__6534_6546)){
var vec__6536_6548 = chunk__6533_6545.cljs$core$IIndexed$_nth$arity$2(null,i__6535_6547);
var k_6549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536_6548,(0),null);
var v_6550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6536_6548,(1),null);
this$__$1.setRequestHeader(k_6549,v_6550);


var G__6551 = seq__6532_6544;
var G__6552 = chunk__6533_6545;
var G__6553 = count__6534_6546;
var G__6554 = (i__6535_6547 + (1));
seq__6532_6544 = G__6551;
chunk__6533_6545 = G__6552;
count__6534_6546 = G__6553;
i__6535_6547 = G__6554;
continue;
} else {
var temp__5457__auto___6555 = cljs.core.seq(seq__6532_6544);
if(temp__5457__auto___6555){
var seq__6532_6556__$1 = temp__5457__auto___6555;
if(cljs.core.chunked_seq_QMARK_(seq__6532_6556__$1)){
var c__4461__auto___6557 = cljs.core.chunk_first(seq__6532_6556__$1);
var G__6558 = cljs.core.chunk_rest(seq__6532_6556__$1);
var G__6559 = c__4461__auto___6557;
var G__6560 = cljs.core.count(c__4461__auto___6557);
var G__6561 = (0);
seq__6532_6544 = G__6558;
chunk__6533_6545 = G__6559;
count__6534_6546 = G__6560;
i__6535_6547 = G__6561;
continue;
} else {
var vec__6539_6562 = cljs.core.first(seq__6532_6556__$1);
var k_6563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6539_6562,(0),null);
var v_6564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6539_6562,(1),null);
this$__$1.setRequestHeader(k_6563,v_6564);


var G__6565 = cljs.core.next(seq__6532_6556__$1);
var G__6566 = null;
var G__6567 = (0);
var G__6568 = (0);
seq__6532_6544 = G__6565;
chunk__6533_6545 = G__6566;
count__6534_6546 = G__6567;
i__6535_6547 = G__6568;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4047__auto__ = body;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
