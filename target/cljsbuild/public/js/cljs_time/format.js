// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('cljs_time.internal.unparse');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('goog.date.duration');
cljs_time.format.months = cljs_time.internal.core.months;
cljs_time.format.days = cljs_time.internal.core.days;
cljs_time.format.skip_timezone_formatter = (function cljs_time$format$skip_timezone_formatter(){
return new cljs.core.PersistentArrayMap(null, 2, ["Z",cljs.core.constantly(""),"ZZ",cljs.core.constantly("")], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.format.Formatter = (function (format_str,overrides,default_year,timezone,__meta,__extmap,__hash){
this.format_str = format_str;
this.overrides = overrides;
this.default_year = default_year;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k7349,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__7353 = k7349;
var G__7353__$1 = (((G__7353 instanceof cljs.core.Keyword))?G__7353.fqn:null);
switch (G__7353__$1) {
case "format-str":
return self__.format_str;

break;
case "overrides":
return self__.overrides;

break;
case "default-year":
return self__.default_year;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7349,else__4304__auto__);

}
});

cljs_time.format.Formatter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__7354){
var vec__7355 = p__7354;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7355,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7355,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

cljs_time.format.Formatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#cljs-time.format.Formatter{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_str,self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overrides,self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$default_DASH_year,self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timezone,self__.timezone],null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7348){
var self__ = this;
var G__7348__$1 = this;
return (new cljs.core.RecordIter((0),G__7348__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$format_DASH_str,cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs_time.format.Formatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

cljs_time.format.Formatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__7358 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-987738732 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__7358(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

cljs_time.format.Formatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7350,other7351){
var self__ = this;
var this7350__$1 = this;
return (((!((other7351 == null)))) && ((this7350__$1.constructor === other7351.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7350__$1.format_str,other7351.format_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7350__$1.overrides,other7351.overrides)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7350__$1.default_year,other7351.default_year)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7350__$1.timezone,other7351.timezone)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7350__$1.__extmap,other7351.__extmap)));
});

cljs_time.format.Formatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$timezone,null,cljs.core.cst$kw$overrides,null,cljs.core.cst$kw$format_DASH_str,null,cljs.core.cst$kw$default_DASH_year,null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

cljs_time.format.Formatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__7348){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__7359 = cljs.core.keyword_identical_QMARK_;
var expr__7360 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__7362 = cljs.core.cst$kw$format_DASH_str;
var G__7363 = expr__7360;
return (pred__7359.cljs$core$IFn$_invoke$arity$2 ? pred__7359.cljs$core$IFn$_invoke$arity$2(G__7362,G__7363) : pred__7359.call(null,G__7362,G__7363));
})())){
return (new cljs_time.format.Formatter(G__7348,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7364 = cljs.core.cst$kw$overrides;
var G__7365 = expr__7360;
return (pred__7359.cljs$core$IFn$_invoke$arity$2 ? pred__7359.cljs$core$IFn$_invoke$arity$2(G__7364,G__7365) : pred__7359.call(null,G__7364,G__7365));
})())){
return (new cljs_time.format.Formatter(self__.format_str,G__7348,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7366 = cljs.core.cst$kw$default_DASH_year;
var G__7367 = expr__7360;
return (pred__7359.cljs$core$IFn$_invoke$arity$2 ? pred__7359.cljs$core$IFn$_invoke$arity$2(G__7366,G__7367) : pred__7359.call(null,G__7366,G__7367));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,G__7348,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7368 = cljs.core.cst$kw$timezone;
var G__7369 = expr__7360;
return (pred__7359.cljs$core$IFn$_invoke$arity$2 ? pred__7359.cljs$core$IFn$_invoke$arity$2(G__7368,G__7369) : pred__7359.call(null,G__7368,G__7369));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,G__7348,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__7348),null));
}
}
}
}
});

cljs_time.format.Formatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$format_DASH_str,self__.format_str,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$overrides,self__.overrides,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$default_DASH_year,self__.default_year,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$timezone,self__.timezone,null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__7348){
var self__ = this;
var this__4300__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,G__7348,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

cljs_time.format.Formatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$format_DASH_str,cljs.core.cst$sym$overrides,cljs.core.cst$sym$default_DASH_year,cljs.core.cst$sym$timezone], null);
});

cljs_time.format.Formatter.cljs$lang$type = true;

cljs_time.format.Formatter.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"cljs-time.format/Formatter",null,(1),null));
});

cljs_time.format.Formatter.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"cljs-time.format/Formatter");
});

/**
 * Positional factory function for cljs-time.format/Formatter.
 */
cljs_time.format.__GT_Formatter = (function cljs_time$format$__GT_Formatter(format_str,overrides,default_year,timezone){
return (new cljs_time.format.Formatter(format_str,overrides,default_year,timezone,null,null,null));
});

/**
 * Factory function for cljs-time.format/Formatter, taking a map of keywords to field values.
 */
cljs_time.format.map__GT_Formatter = (function cljs_time$format$map__GT_Formatter(G__7352){
var extmap__4340__auto__ = (function (){var G__7370 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7352,cljs.core.cst$kw$format_DASH_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], 0));
if(cljs.core.record_QMARK_(G__7352)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7370);
} else {
return G__7370;
}
})();
return (new cljs_time.format.Formatter(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(G__7352),cljs.core.cst$kw$overrides.cljs$core$IFn$_invoke$arity$1(G__7352),cljs.core.cst$kw$default_DASH_year.cljs$core$IFn$_invoke$arity$1(G__7352),cljs.core.cst$kw$timezone.cljs$core$IFn$_invoke$arity$1(G__7352),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__7373 = arguments.length;
switch (G__7373) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$timezone,dtz], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()], null));
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw ({"name": cljs.core.cst$kw$not_DASH_implemented, "message": cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))});
});
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   Map of ISO 8601 and a single RFC 822 formatters that can be used
 *   for parsing and, in most cases, printing.
 *   
 *   Note: due to current implementation limitations, timezone information
 *   cannot be kept. Although the correct offset will be applied to UTC
 *   time if supplied.
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 * ```
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *  cljs-time additions:
 *  ------  -------                      ------------  -------
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
 * ```
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of `y` is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** `Z` outputs offset without a colon, `ZZ` outputs the offset with a
 *   colon, `ZZZ` or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of `['a'..'z']` and
 *   `['A'..'Z']` will be treated as quoted text. For instance, characters like `:`,
 *   `.`, `<space>`, `#` and `?` will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__7376 = arguments.length;
switch (G__7376) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$UtcDateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__7377(s__7378){
return (new cljs.core.LazySeq(null,(function (){
var s__7378__$1 = s__7378;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7378__$1);
if(temp__5457__auto__){
var s__7378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7378__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__7378__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__7380 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__7379 = (0);
while(true){
if((i__7379 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__7379);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7381){var _ = e7381;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__7380,d);

var G__7384 = (i__7379 + (1));
i__7379 = G__7384;
continue;
} else {
var G__7385 = (i__7379 + (1));
i__7379 = G__7385;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7380),cljs_time$format$iter__7377(cljs.core.chunk_rest(s__7378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7380),null);
}
} else {
var f = cljs.core.first(s__7378__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7382){var _ = e7382;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__7377(cljs.core.rest(s__7378__$2)));
} else {
var G__7386 = cljs.core.rest(s__7378__$2);
s__7378__$1 = G__7386;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__7388 = arguments.length;
switch (G__7388) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$DateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__7389(s__7390){
return (new cljs.core.LazySeq(null,(function (){
var s__7390__$1 = s__7390;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7390__$1);
if(temp__5457__auto__){
var s__7390__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7390__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__7390__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__7392 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__7391 = (0);
while(true){
if((i__7391 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__7391);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7393){if((e7393 instanceof Error)){
var _ = e7393;
return null;
} else {
throw e7393;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__7392,d);

var G__7396 = (i__7391 + (1));
i__7391 = G__7396;
continue;
} else {
var G__7397 = (i__7391 + (1));
i__7391 = G__7397;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7392),cljs_time$format$iter__7389(cljs.core.chunk_rest(s__7390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7392),null);
}
} else {
var f = cljs.core.first(s__7390__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7394){if((e7394 instanceof Error)){
var _ = e7394;
return null;
} else {
throw e7394;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__7389(cljs.core.rest(s__7390__$2)));
} else {
var G__7398 = cljs.core.rest(s__7390__$2);
s__7390__$1 = G__7398;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__7400 = arguments.length;
switch (G__7400) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$Date,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__4434__auto__ = (function cljs_time$format$iter__7401(s__7402){
return (new cljs.core.LazySeq(null,(function (){
var s__7402__$1 = s__7402;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7402__$1);
if(temp__5457__auto__){
var s__7402__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7402__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__7402__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__7404 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__7403 = (0);
while(true){
if((i__7403 < size__4433__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__7403);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7405){if((e7405 instanceof Error)){
var _ = e7405;
return null;
} else {
throw e7405;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__7404,d);

var G__7408 = (i__7403 + (1));
i__7403 = G__7408;
continue;
} else {
var G__7409 = (i__7403 + (1));
i__7403 = G__7409;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7404),cljs_time$format$iter__7401(cljs.core.chunk_rest(s__7402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7404),null);
}
} else {
var f = cljs.core.first(s__7402__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e7406){if((e7406 instanceof Error)){
var _ = e7406;
return null;
} else {
throw e7406;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__7401(cljs.core.rest(s__7402__$2)));
} else {
var G__7410 = cljs.core.rest(s__7402__$2);
s__7402__$1 = G__7410;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__7411,dt){
var map__7412 = p__7411;
var map__7412__$1 = (((((!((map__7412 == null))))?(((((map__7412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7412):map__7412);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7412__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7412__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.internal.unparse.unparse(format_str,dt);
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__7414,dt){
var map__7415 = p__7414;
var map__7415__$1 = (((((!((map__7415 == null))))?(((((map__7415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7415):map__7415);
var fmt = map__7415__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7415__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7415__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.DateTime)){
} else {
throw (new Error("Assert failed: (instance? goog.date.DateTime dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__7417,dt){
var map__7418 = p__7417;
var map__7418__$1 = (((((!((map__7418 == null))))?(((((map__7418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7418):map__7418);
var fmt = map__7418__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7418__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7418__$1,cljs.core.cst$kw$formatters);
if((!((dt == null)))){
} else {
throw (new Error("Assert failed: (not (nil? dt))"));
}

if((dt instanceof goog.date.Date)){
} else {
throw (new Error("Assert failed: (instance? goog.date.Date dt)"));
}

return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__7421 = arguments.length;
switch (G__7421) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__7422 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__7423 = null;
var count__7424 = (0);
var i__7425 = (0);
while(true){
if((i__7425 < count__7424)){
var p = chunk__7423.cljs$core$IIndexed$_nth$arity$2(null,i__7425);
var fmt_7427 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_7427,dt)], 0))], 0));


var G__7428 = seq__7422;
var G__7429 = chunk__7423;
var G__7430 = count__7424;
var G__7431 = (i__7425 + (1));
seq__7422 = G__7428;
chunk__7423 = G__7429;
count__7424 = G__7430;
i__7425 = G__7431;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__7422);
if(temp__5457__auto__){
var seq__7422__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7422__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__7422__$1);
var G__7432 = cljs.core.chunk_rest(seq__7422__$1);
var G__7433 = c__4461__auto__;
var G__7434 = cljs.core.count(c__4461__auto__);
var G__7435 = (0);
seq__7422 = G__7432;
chunk__7423 = G__7433;
count__7424 = G__7434;
i__7425 = G__7435;
continue;
} else {
var p = cljs.core.first(seq__7422__$1);
var fmt_7436 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_7436,dt)], 0))], 0));


var G__7437 = cljs.core.next(seq__7422__$1);
var G__7438 = null;
var G__7439 = (0);
var G__7440 = (0);
seq__7422 = G__7437;
chunk__7423 = G__7438;
count__7424 = G__7439;
i__7425 = G__7440;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((((!((instant == null)))) && ((!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__4347__auto__ = (((instant == null))?null:instant);
var m__4348__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__4348__auto__.call(null,instant));
} else {
var m__4348__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__4348__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__7441 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__7441);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__7442 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__7442__$1 = (((G__7442 instanceof cljs.core.Keyword))?G__7442.fqn:null);
switch (G__7442__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7442__$1)].join('')));

}
});
