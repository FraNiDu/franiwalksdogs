// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('franiwalksdogs.captcha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
franiwalksdogs.captcha.site_key = "6Lfm_n0UAAAAAAs3jz7FKPGK2KkZbe8QV7BgJrBf";
franiwalksdogs.captcha.on_mount = (function franiwalksdogs$captcha$on_mount(captcha_id,fields,errors){
return (function (div){
return cljs.core.reset_BANG_(captcha_id,window.grecaptcha.render(reagent.core.dom_node(div).firstChild,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sitekey,franiwalksdogs.captcha.site_key,cljs.core.cst$kw$expired_DASH_callback,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fields,cljs.core.dissoc,cljs.core.cst$kw$captcha);
}),cljs.core.cst$kw$callback,(function (p1__6035_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.dissoc,cljs.core.cst$kw$captcha);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fields,cljs.core.assoc,cljs.core.cst$kw$captcha,p1__6035_SHARP_);
})], null))));
});
});
franiwalksdogs.captcha.on_update = (function franiwalksdogs$captcha$on_update(captcha_id,errors){
return (function (this$,old_argv){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.deref(captcha_id);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.cst$kw$captcha.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(errors));
} else {
return and__4036__auto__;
}
})())){
return grecaptcha.reset(cljs.core.deref(captcha_id));
} else {
return null;
}
});
});
franiwalksdogs.captcha.html = (function franiwalksdogs$captcha$html(errors){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null)], null);
});
});
franiwalksdogs.captcha.html_min_captcha = (function franiwalksdogs$captcha$html_min_captcha(errors){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null)], null);
});
});
franiwalksdogs.captcha.captcha = (function franiwalksdogs$captcha$captcha(fields,errors){
var captcha_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render,franiwalksdogs.captcha.html(errors),cljs.core.cst$kw$component_DASH_did_DASH_update,franiwalksdogs.captcha.on_update(captcha_id,errors),cljs.core.cst$kw$component_DASH_did_DASH_mount,franiwalksdogs.captcha.on_mount(captcha_id,fields,errors)], null));
});
franiwalksdogs.captcha.min_captcha = (function franiwalksdogs$captcha$min_captcha(fields,errors){
var captcha_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$render,franiwalksdogs.captcha.html_min_captcha(errors),cljs.core.cst$kw$component_DASH_did_DASH_update,franiwalksdogs.captcha.on_update(captcha_id,errors),cljs.core.cst$kw$component_DASH_did_DASH_mount,franiwalksdogs.captcha.on_mount(captcha_id,fields,errors)], null));
});
