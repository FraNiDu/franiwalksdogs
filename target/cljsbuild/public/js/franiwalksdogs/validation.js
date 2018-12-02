// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('franiwalksdogs.validation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('struct.core');
franiwalksdogs.validation.valid_captcha_QMARK_ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"Invalid Captcha, please try again",cljs.core.cst$kw$optional,false,cljs.core.cst$kw$validate,cljs.core.constantly(true)], null);
franiwalksdogs.validation._PLUS_struct_PLUS_ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.min_count,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.max_count,(155)], null)], null),cljs.core.cst$kw$email,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string,struct.core.email,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.min_count,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.max_count,(155)], null)], null),cljs.core.cst$kw$message,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,struct.core.string,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.min_count,(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.max_count,(2000)], null)], null),cljs.core.cst$kw$captcha,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [struct.core.required,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.validation.valid_captcha_QMARK_], null)], null)], null);
franiwalksdogs.validation.get_errors_QMARK_ = (function franiwalksdogs$validation$get_errors_QMARK_(payload){
return cljs.core.first(struct.core.validate.cljs$core$IFn$_invoke$arity$2(payload,franiwalksdogs.validation._PLUS_struct_PLUS_));
});
franiwalksdogs.validation.get_error_QMARK_ = (function franiwalksdogs$validation$get_error_QMARK_(key,payload){
var _PLUS_struct_PLUS_ = cljs.core.select_keys(franiwalksdogs.validation._PLUS_struct_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.first(struct.core.validate.cljs$core$IFn$_invoke$arity$2(payload,_PLUS_struct_PLUS_));
});
