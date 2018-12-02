// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('franiwalksdogs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('franiwalksdogs.ajax');
goog.require('franiwalksdogs.captcha');
goog.require('franiwalksdogs.validation');
goog.require('ajax.core');
franiwalksdogs.core.captcha_loaded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
franiwalksdogs.core.dog_walker = (function franiwalksdogs$core$dog_walker(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$lead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"It all started when my friend at CrossFit needed a dog walker.\n       I was up for the task, I\u2019m a dog owner myself, \n       and I love sharing my time with doggies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A few days went by until I realized this is the best job I could ever have, I love watching a happy dog\u2019s smile after a nice walk."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"From that moment I have dedicated myself to walking dogs and I ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,"love"], null)," it."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I\u2019ve come to known them, and I understand some will need to walk alone out of nervousness or aggressive behaviors. While others can simply get out on packs (4) because they also love to share and have no problems about it."], null)], null);
});
franiwalksdogs.core.table = (function franiwalksdogs$core$table(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$table$table_DASH_bordered,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$top,"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$caption,"*If you need any other services like: Bathing your Dog, two visits in a day, or petsitting in my home we can talk about that too."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Services"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Prices"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Friendly Dog (walked in groups of 4)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"USD $25.00"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Aggressive Dog (walked alone)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"USD $60.00"], null)], null)], null)], null);
});
franiwalksdogs.core.pricing = (function franiwalksdogs$core$pricing(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$lead,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"My services include picking up/bringing back your furry child, walking out with him/her for an hour, I\u2019ll sent you pictures, and if I notice anything out of the ordinary I\u2019ll let you know immediately."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"My neighborhoods are: Rinchmond District, Laurel Heights, Presidio Heights, Cow Hollow and Haight-Ashbury."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I like to know my kids (and their parents) before taking them out, so go ahead an schedule an initial interview"], null)], null);
});
franiwalksdogs.core.features = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$dog_DASH_walker,cljs.core.cst$kw$pull_DASH_class,"float-right",cljs.core.cst$kw$image,"/images/frani.jpg",cljs.core.cst$kw$element,franiwalksdogs.core.dog_walker,cljs.core.cst$kw$text,"About Me"], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$pricing_PLUS_services,cljs.core.cst$kw$pull_DASH_class,"float-left",cljs.core.cst$kw$image,"/images/pricing.jpg",cljs.core.cst$kw$element,franiwalksdogs.core.pricing,cljs.core.cst$kw$text,"Pricing + Services"], null)], null);
franiwalksdogs.core.navbar = (function franiwalksdogs$core$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_expand_DASH_lg$navbar_DASH_light,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#F78306"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Frani walks dogs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$navbar_DASH_toggler,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$data_DASH_toggle,cljs.core.cst$kw$collapse,cljs.core.cst$kw$data_DASH_target,"#navbarNav",cljs.core.cst$kw$aria_DASH_controls,"navbarNav",cljs.core.cst$kw$aria_DASH_expanded,false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$navbar_DASH_toggler_DASH_icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_navbarNav$collapse$navbar_DASH_collapse,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$right], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$navbar_DASH_nav$ml_DASH_auto,(function (){var iter__4434__auto__ = (function franiwalksdogs$core$navbar_$_iter__8036(s__8037){
return (new cljs.core.LazySeq(null,(function (){
var s__8037__$1 = s__8037;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__8037__$1);
if(temp__5457__auto__){
var s__8037__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8037__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__8037__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__8039 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__8038 = (0);
while(true){
if((i__8038 < size__4433__auto__)){
var map__8040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__8038);
var map__8040__$1 = (((((!((map__8040 == null))))?(((((map__8040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8040):map__8040);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8040__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8040__$1,cljs.core.cst$kw$text);
cljs.core.chunk_append(b__8039,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item_GT_a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))].join('')], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8044 = (i__8038 + (1));
i__8038 = G__8044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8039),franiwalksdogs$core$navbar_$_iter__8036(cljs.core.chunk_rest(s__8037__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8039),null);
}
} else {
var map__8042 = cljs.core.first(s__8037__$2);
var map__8042__$1 = (((((!((map__8042 == null))))?(((((map__8042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8042):map__8042);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8042__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8042__$1,cljs.core.cst$kw$text);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item_GT_a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(id))].join('')], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),franiwalksdogs$core$navbar_$_iter__8036(cljs.core.rest(s__8037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(franiwalksdogs.core.features);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item_GT_a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#contact"], null),"Contact"], null)], null)], null)], null)], null);
});
franiwalksdogs.core.hero_unit = (function franiwalksdogs$core$hero_unit(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$text_DASH_center_GT_img$img_DASH_responseive$img_DASH_fluid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"/images/frani_dog_walker.jpg",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"inline"], null)], null)], null);
});
franiwalksdogs.core.feature_element_expanded = (function franiwalksdogs$core$feature_element_expanded(feature){
var map__8045 = feature;
var map__8045__$1 = (((((!((map__8045 == null))))?(((((map__8045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8045):map__8045);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8045__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8045__$1,cljs.core.cst$kw$text);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8045__$1,cljs.core.cst$kw$element);
var pull_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8045__$1,cljs.core.cst$kw$pull_DASH_class);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8045__$1,cljs.core.cst$kw$image);
var css_class = ["redondo img-circle img-fluid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pull_class)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_12$d_DASH_none$d_DASH_lg_DASH_block,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,css_class,cljs.core.cst$kw$src,image], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,text], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)], null)], null);
});
franiwalksdogs.core.feature_element_mobile = (function franiwalksdogs$core$feature_element_mobile(feature){
var map__8047 = feature;
var map__8047__$1 = (((((!((map__8047 == null))))?(((((map__8047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8047):map__8047);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8047__$1,cljs.core.cst$kw$id);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8047__$1,cljs.core.cst$kw$text);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8047__$1,cljs.core.cst$kw$element);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8047__$1,cljs.core.cst$kw$image);
var css_class = "redondo img-circle img-fluid";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$d_DASH_lg_DASH_none,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,text], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_12,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_12,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,css_class,cljs.core.cst$kw$src,image], null)], null)], null)], null)], null);
});
franiwalksdogs.core.feature_element = (function franiwalksdogs$core$feature_element(feature){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$mb_DASH_3,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(feature)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.feature_element_expanded,feature], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.feature_element_mobile,feature], null)], null);
});
franiwalksdogs.core.disable_event_BANG_ = (function franiwalksdogs$core$disable_event_BANG_(evt){
if(cljs.core.truth_(evt)){
evt.preventDefault();

return evt.stopPropagation();
} else {
return null;
}
});
franiwalksdogs.core.bind = (function franiwalksdogs$core$bind(var_args){
var G__8050 = arguments.length;
switch (G__8050) {
case 2:
return franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$2 = (function (key,fields){
return franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$3(key,fields,cljs.core.identity);
});

franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$3 = (function (key,fields,transform){
return (function (evt){
franiwalksdogs.core.disable_event_BANG_(evt);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fields,cljs.core.assoc,key,(function (){var G__8051 = evt.target.value;
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(G__8051) : transform.call(null,G__8051));
})());
});
});

franiwalksdogs.core.bind.cljs$lang$maxFixedArity = 3;

franiwalksdogs.core.error_message = (function franiwalksdogs$core$error_message(key,errors){
var temp__5457__auto__ = (function (){var G__8053 = cljs.core.deref(errors);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__8053) : key.call(null,G__8053));
})();
if(cljs.core.truth_(temp__5457__auto__)){
var err = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$invalid_DASH_feedback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,cljs.core.cst$kw$block], null)], null),clojure.string.capitalize(err)], null);
} else {
return null;
}
});
franiwalksdogs.core.ajax_success_handler = (function franiwalksdogs$core$ajax_success_handler(response){
return alert("Thanks for your message, I'll be in contact with you shortly.");
});
franiwalksdogs.core.ajax_error_handler = (function franiwalksdogs$core$ajax_error_handler(errors){
return (function (p__8054){
var map__8055 = p__8054;
var map__8055__$1 = (((((!((map__8055 == null))))?(((((map__8055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8055):map__8055);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8055__$1,cljs.core.cst$kw$status);
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8055__$1,cljs.core.cst$kw$response);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((400),status)){
return cljs.core.reset_BANG_(errors,response);
} else {
return null;
}
});
});
franiwalksdogs.core.ajax_call = (function franiwalksdogs$core$ajax_call(fields,errors){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/contact",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),cljs.core.cst$kw$params,cljs.core.deref(fields),cljs.core.cst$kw$handler,franiwalksdogs.core.ajax_success_handler,cljs.core.cst$kw$error_DASH_handler,franiwalksdogs.core.ajax_error_handler(errors)], null)], 0));
});
franiwalksdogs.core.ENTER_KEY_CODE = (13);
/**
 * Retorna un handler para un HTML Form, este handler delega en el handler parametrico
 *   cuando detecta que la tecla apretada fue ENTER.
 */
franiwalksdogs.core.on_enter = (function franiwalksdogs$core$on_enter(handler){
return (function (evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(franiwalksdogs.core.ENTER_KEY_CODE,evt.charCode)){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(evt) : handler.call(null,evt));
} else {
return null;
}
});
});
franiwalksdogs.core.on_submit = (function franiwalksdogs$core$on_submit(fields,errors){
return (function (evt){
franiwalksdogs.core.disable_event_BANG_(evt);

cljs.core.reset_BANG_(errors,cljs.core.PersistentArrayMap.EMPTY);

var temp__5455__auto__ = franiwalksdogs.validation.get_errors_QMARK_(cljs.core.deref(fields));
if(cljs.core.truth_(temp__5455__auto__)){
var new_errors = temp__5455__auto__;
return cljs.core.reset_BANG_(errors,new_errors);
} else {
return franiwalksdogs.core.ajax_call(fields,errors);
}
});
});
franiwalksdogs.core.on_blur_validation = (function franiwalksdogs$core$on_blur_validation(key,fields,errors){
return (function (evt){
franiwalksdogs.core.disable_event_BANG_(evt);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.dissoc,key);

var temp__5457__auto__ = franiwalksdogs.validation.get_error_QMARK_(key,cljs.core.deref(fields));
if(cljs.core.truth_(temp__5457__auto__)){
var nerrs = temp__5457__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(errors,cljs.core.merge,nerrs);
} else {
return null;
}
});
});
/**
 * Capitalize every word in a string
 */
franiwalksdogs.core.capitalize_words = (function franiwalksdogs$core$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
franiwalksdogs.core.contact = (function franiwalksdogs$core$contact(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_contact,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row_GT_div$col_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Contact"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_12$col_DASH_lg_DASH_6,(function (){var fields = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var handler = franiwalksdogs.core.on_submit(fields,errors);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_key_DASH_press,franiwalksdogs.core.on_enter(handler),cljs.core.cst$kw$on_DASH_submit,handler], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$name_DASH_input], null),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_name_DASH_input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$off,cljs.core.cst$kw$on_DASH_change,franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$name,fields,franiwalksdogs.core.capitalize_words),cljs.core.cst$kw$on_DASH_blur,franiwalksdogs.core.on_blur_validation(cljs.core.cst$kw$name,fields,errors),cljs.core.cst$kw$placeholder,"Name"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.error_message,cljs.core.cst$kw$name,errors], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$email_DASH_input], null),"Email"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_SHARP_email_DASH_input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$email,cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$off,cljs.core.cst$kw$on_DASH_change,franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$email,fields),cljs.core.cst$kw$on_DASH_blur,franiwalksdogs.core.on_blur_validation(cljs.core.cst$kw$email,fields,errors),cljs.core.cst$kw$placeholder,"Email"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.error_message,cljs.core.cst$kw$email,errors], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$col_DASH_form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,cljs.core.cst$kw$message], null),"Message"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea_SHARP_message$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$rows,(3),cljs.core.cst$kw$auto_DASH_complete,cljs.core.cst$kw$off,cljs.core.cst$kw$on_DASH_change,franiwalksdogs.core.bind.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$message,fields),cljs.core.cst$kw$on_DASH_blur,franiwalksdogs.core.on_blur_validation(cljs.core.cst$kw$message,fields,errors),cljs.core.cst$kw$placeholder,"Message"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.error_message,cljs.core.cst$kw$message,errors], null)], null),(cljs.core.truth_(cljs.core.deref(franiwalksdogs.core.captcha_loaded_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.captcha.min_captcha,fields,errors], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.error_message,cljs.core.cst$kw$captcha,errors], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group$mt_DASH_3$pt_DASH_3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary$btn_DASH_lg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$submit,cljs.core.cst$kw$class,"d-none d-lg-block",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,cljs.core.cst$kw$right], null)], null),"Send"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary$btn_DASH_lg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$submit,cljs.core.cst$kw$class,"btn-block d-lg-none",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$float,cljs.core.cst$kw$right], null)], null),"Send"], null)], null)], null);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6$d_DASH_none$d_DASH_lg_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"redondo img-responsive img-fluid",cljs.core.cst$kw$src,"/images/contactme.jpg"], null)], null)], null)], null)], null);
});
franiwalksdogs.core.layout = (function franiwalksdogs$core$layout(){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row_GT_div$col_DASH_12,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.hero_unit], null)], null),(function (){var iter__4434__auto__ = (function franiwalksdogs$core$layout_$_iter__8057(s__8058){
return (new cljs.core.LazySeq(null,(function (){
var s__8058__$1 = s__8058;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__8058__$1);
if(temp__5457__auto__){
var s__8058__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8058__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__8058__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__8060 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__8059 = (0);
while(true){
if((i__8059 < size__4433__auto__)){
var map__8061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__8059);
var map__8061__$1 = (((((!((map__8061 == null))))?(((((map__8061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8061):map__8061);
var feature = map__8061__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8061__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__8060,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.feature_element,feature], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__8065 = (i__8059 + (1));
i__8059 = G__8065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8060),franiwalksdogs$core$layout_$_iter__8057(cljs.core.chunk_rest(s__8058__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8060),null);
}
} else {
var map__8063 = cljs.core.first(s__8058__$2);
var map__8063__$1 = (((((!((map__8063 == null))))?(((((map__8063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8063):map__8063);
var feature = map__8063__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8063__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.feature_element,feature], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),franiwalksdogs$core$layout_$_iter__8057(cljs.core.rest(s__8058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(franiwalksdogs.core.features);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$mb_DASH_3_GT_div$col_DASH_12,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.table], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row_GT_div$col_DASH_12,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [franiwalksdogs.core.contact], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null)], null);
});
});
franiwalksdogs.core.footer = (function franiwalksdogs$core$footer(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container_GT_div$row_GT_div$col_DASH_12,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$right], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"By Frani_Du"], null)], null);
});
franiwalksdogs.core.mount_components = (function franiwalksdogs$core$mount_components(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return franiwalksdogs.core.navbar;},cljs.core.cst$sym$franiwalksdogs$core_SLASH_navbar,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$franiwalksdogs$core,cljs.core.cst$sym$navbar,"/Users/daplay/workspace/franiwalksdogs/src/cljs/franiwalksdogs/core.cljs",13,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(franiwalksdogs.core.navbar)?franiwalksdogs.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return franiwalksdogs.core.layout;},cljs.core.cst$sym$franiwalksdogs$core_SLASH_layout,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$franiwalksdogs$core,cljs.core.cst$sym$layout,"/Users/daplay/workspace/franiwalksdogs/src/cljs/franiwalksdogs/core.cljs",13,1,217,217,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(franiwalksdogs.core.layout)?franiwalksdogs.core.layout.cljs$lang$test:null)]))], null),document.getElementById("app"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return franiwalksdogs.core.footer;},cljs.core.cst$sym$franiwalksdogs$core_SLASH_footer,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$franiwalksdogs$core,cljs.core.cst$sym$footer,"/Users/daplay/workspace/franiwalksdogs/src/cljs/franiwalksdogs/core.cljs",13,1,228,228,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(franiwalksdogs.core.footer)?franiwalksdogs.core.footer.cljs$lang$test:null)]))], null),document.getElementById("footer"));
});
franiwalksdogs.core.init_BANG_ = (function franiwalksdogs$core$init_BANG_(){
window.captchaLoaded = (function (){
return cljs.core.reset_BANG_(franiwalksdogs.core.captcha_loaded_QMARK_,true);
});

franiwalksdogs.ajax.load_interceptors_BANG_();

return franiwalksdogs.core.mount_components();
});
