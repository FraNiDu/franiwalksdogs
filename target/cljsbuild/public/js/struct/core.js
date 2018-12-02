// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('struct.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cuerdas.core');
struct.core.map_SINGLEQUOTE_ = cljs.core.map;
struct.core.apply_validation = (function struct$core$apply_validation(step,data,value){
var temp__5455__auto__ = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$2(step,null);
if(cljs.core.truth_(temp__5455__auto__)){
var validate = temp__5455__auto__;
var args = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$2(step,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(step))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(validate,data,value,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(validate,value,args);
}
} else {
return true;
}
});
struct.core.dissoc_in = (function struct$core$dissoc_in(m,p__7960){
var vec__7961 = p__7960;
var seq__7962 = cljs.core.seq(vec__7961);
var first__7963 = cljs.core.first(seq__7962);
var seq__7962__$1 = cljs.core.next(seq__7962);
var k = first__7963;
var ks = seq__7962__$1;
var keys = vec__7961;
if(ks){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = (struct.core.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? struct.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : struct.core.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
struct.core.prepare_message = (function struct$core$prepare_message(opts,step){
if(cljs.core.truth_(cljs.core.cst$kw$struct$core_SLASH_nomsg.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.cst$kw$struct$core_SLASH_nomsg;
} else {
var msg = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(step,"errors.invalid");
var tr = cljs.core.cst$kw$translate.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.identity);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cuerdas.core.format,(tr.cljs$core$IFn$_invoke$arity$1 ? tr.cljs$core$IFn$_invoke$arity$1(msg) : tr.call(null,msg)),cljs.core.vec(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(step)));
}
});
struct.core.opts_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,null,cljs.core.cst$kw$coerce,null,cljs.core.cst$kw$message,null], null), null);
struct.core.notopts_QMARK_ = cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$optional,null,cljs.core.cst$kw$coerce,null,cljs.core.cst$kw$message,null], null), null));
struct.core.build_step = (function struct$core$build_step(key,item){
if(cljs.core.vector_QMARK_(item)){
var validator = cljs.core.first(item);
var result = cljs.core.split_with(struct.core.notopts_QMARK_,cljs.core.rest(item));
var args = cljs.core.first(result);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.second(result));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(validator,cljs.core.cst$kw$args,args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)], 0)),cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$coerce,cljs.core.cst$kw$message,cljs.core.cst$kw$optional], null))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,cljs.core.cst$kw$args,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path,((cljs.core.vector_QMARK_(key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))], 0));
}
});
struct.core.normalize_step_map_entry = (function struct$core$normalize_step_map_entry(acc,key,value){
if(cljs.core.vector_QMARK_(value)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7964_SHARP_,p2__7965_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__7964_SHARP_,struct.core.build_step(key,p2__7965_SHARP_));
}),acc,value);
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,struct.core.build_step(key,value));
}
});
struct.core.normalize_step_entry = (function struct$core$normalize_step_entry(acc,p__7968){
var vec__7969 = p__7968;
var seq__7970 = cljs.core.seq(vec__7969);
var first__7971 = cljs.core.first(seq__7970);
var seq__7970__$1 = cljs.core.next(seq__7970);
var key = first__7971;
var values = seq__7970__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__7969,seq__7970,first__7971,seq__7970__$1,key,values){
return (function (p1__7966_SHARP_,p2__7967_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__7966_SHARP_,struct.core.build_step(key,p2__7967_SHARP_));
});})(vec__7969,seq__7970,first__7971,seq__7970__$1,key,values))
,acc,values);
});
struct.core.build_steps = (function struct$core$build_steps(schema){
if(cljs.core.vector_QMARK_(schema)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(struct.core.normalize_step_entry,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),schema));
} else {
if(cljs.core.map_QMARK_(schema)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(struct.core.normalize_step_map_entry,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),schema));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid schema.",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
struct.core.strip_values = (function struct$core$strip_values(data,steps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,path){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(data,path,cljs.core.cst$kw$struct$core_SLASH_notexists);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.cst$kw$struct$core_SLASH_notexists)){
return cljs.core.assoc_in(acc,path,value);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var G__7972 = cljs.core.cst$kw$path;
var G__7973 = steps;
return (struct.core.map_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? struct.core.map_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__7972,G__7973) : struct.core.map_SINGLEQUOTE_.call(null,G__7972,G__7973));
})()));
});
struct.core.validate_internal = (function struct$core$validate_internal(data,steps,opts){
var skip = cljs.core.PersistentHashSet.EMPTY;
var errors = null;
var data__$1 = data;
var steps__$1 = steps;
while(true){
var temp__5455__auto__ = cljs.core.first(steps__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var step = temp__5455__auto__;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(step);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data__$1,path);
if(cljs.core.contains_QMARK_(skip,path)){
var G__7975 = skip;
var G__7976 = errors;
var G__7977 = data__$1;
var G__7978 = cljs.core.rest(steps__$1);
skip = G__7975;
errors = G__7976;
data__$1 = G__7977;
steps__$1 = G__7978;
continue;
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = (value == null);
if(and__4036__auto__){
return cljs.core.cst$kw$optional.cljs$core$IFn$_invoke$arity$1(step);
} else {
return and__4036__auto__;
}
})())){
var G__7979 = skip;
var G__7980 = errors;
var G__7981 = data__$1;
var G__7982 = cljs.core.rest(steps__$1);
skip = G__7979;
errors = G__7980;
data__$1 = G__7981;
steps__$1 = G__7982;
continue;
} else {
if(cljs.core.truth_(struct.core.apply_validation(step,data__$1,value))){
var value__$1 = (function (){var fexpr__7974 = cljs.core.cst$kw$coerce.cljs$core$IFn$_invoke$arity$2(step,cljs.core.identity);
return (fexpr__7974.cljs$core$IFn$_invoke$arity$1 ? fexpr__7974.cljs$core$IFn$_invoke$arity$1(value) : fexpr__7974.call(null,value));
})();
var G__7983 = skip;
var G__7984 = errors;
var G__7985 = cljs.core.assoc_in(data__$1,path,value__$1);
var G__7986 = cljs.core.rest(steps__$1);
skip = G__7983;
errors = G__7984;
data__$1 = G__7985;
steps__$1 = G__7986;
continue;
} else {
var message = struct.core.prepare_message(opts,step);
var G__7987 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(skip,path);
var G__7988 = cljs.core.assoc_in(errors,path,message);
var G__7989 = struct.core.dissoc_in(data__$1,path);
var G__7990 = cljs.core.rest(steps__$1);
skip = G__7987;
errors = G__7988;
data__$1 = G__7989;
steps__$1 = G__7990;
continue;

}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [errors,data__$1], null);
}
break;
}
});
/**
 * Validate data with specified schema.
 * 
 *   This function by default strips all data that are not defined in
 *   schema, but this behavior can be changed by passing `{:strip false}`
 *   as third argument.
 */
struct.core.validate = (function struct$core$validate(var_args){
var G__7992 = arguments.length;
switch (G__7992) {
case 2:
return struct.core.validate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

struct.core.validate.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate.cljs$core$IFn$_invoke$arity$3(data,schema,null);
});

struct.core.validate.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,p__7993){
var map__7994 = p__7993;
var map__7994__$1 = (((((!((map__7994 == null))))?(((((map__7994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7994):map__7994);
var opts = map__7994__$1;
var strip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7994__$1,cljs.core.cst$kw$strip,false);
var steps = struct.core.build_steps(schema);
var data__$1 = (cljs.core.truth_(strip)?struct.core.strip_values(data,steps):data);
return struct.core.validate_internal(data__$1,steps,opts);
});

struct.core.validate.cljs$lang$maxFixedArity = 3;

/**
 * A helper that used just for validate one value.
 */
struct.core.validate_single = (function struct$core$validate_single(var_args){
var G__7998 = arguments.length;
switch (G__7998) {
case 2:
return struct.core.validate_single.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate_single.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

struct.core.validate_single.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate_single.cljs$core$IFn$_invoke$arity$3(data,schema,null);
});

struct.core.validate_single.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,opts){
var data__$1 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,data], null);
var steps = struct.core.build_steps(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$field,schema], null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$field,struct.core.validate_internal(data__$1,steps,opts));
});

struct.core.validate_single.cljs$lang$maxFixedArity = 3;

/**
 * Analogous function to the `validate` that instead of return
 *   the errors, just raise a ex-info exception with errors in case
 *   them are or just return the validated data.
 * 
 *   This function accepts the same parameters as `validate` with
 *   an additional `:message` that serves for customize the exception
 *   message.
 */
struct.core.validate_BANG_ = (function struct$core$validate_BANG_(var_args){
var G__8001 = arguments.length;
switch (G__8001) {
case 2:
return struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (data,schema){
return struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$3(data,schema,null);
});

struct.core.validate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (data,schema,p__8002){
var map__8003 = p__8002;
var map__8003__$1 = (((((!((map__8003 == null))))?(((((map__8003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8003):map__8003);
var opts = map__8003__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__8003__$1,cljs.core.cst$kw$message,"Schema validation error");
var vec__8005 = struct.core.validate.cljs$core$IFn$_invoke$arity$3(data,schema,opts);
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8005,(0),null);
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8005,(1),null);
if(cljs.core.seq(errors)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,errors);
} else {
return data__$1;
}
});

struct.core.validate_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Return true if the data matches the schema, otherwise
 *   return false.
 */
struct.core.valid_QMARK_ = (function struct$core$valid_QMARK_(data,schema){
return (cljs.core.first(struct.core.validate.cljs$core$IFn$_invoke$arity$3(data,schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$struct$core_SLASH_nomsg,true], null))) == null);
});
/**
 * Analogous function to `valid?` that just validates single value.
 */
struct.core.valid_single_QMARK_ = (function struct$core$valid_single_QMARK_(data,schema){
return (cljs.core.first(struct.core.validate_single.cljs$core$IFn$_invoke$arity$3(data,schema,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$struct$core_SLASH_nomsg,true], null))) == null);
});
struct.core.keyword = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"must be a keyword",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.keyword_QMARK_,cljs.core.cst$kw$coerce,cljs.core.identity], null);
struct.core.uuid = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be an uuid",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8010_SHARP_){
return (p1__8010_SHARP_ instanceof cljs.core.UUID);
})], null);
struct.core._PLUS_uuid_re_PLUS_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
struct.core.uuid_str = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"must be an uuid",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8011_SHARP_){
var and__4036__auto__ = typeof p1__8011_SHARP_ === 'string';
if(and__4036__auto__){
return cljs.core.re_seq(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,p1__8011_SHARP_);
} else {
return and__4036__auto__;
}
}),cljs.core.cst$kw$coerce,(function (p1__8013_SHARP_){
return (struct.core.uuid.cljs$core$IFn$_invoke$arity$1 ? struct.core.uuid.cljs$core$IFn$_invoke$arity$1(p1__8013_SHARP_) : struct.core.uuid.call(null,p1__8013_SHARP_));
})], null);
struct.core.email = (function (){var rx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a valid email",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,((function (rx){
return (function (p1__8014_SHARP_){
var and__4036__auto__ = typeof p1__8014_SHARP_ === 'string';
if(and__4036__auto__){
return cljs.core.re_seq(rx,p1__8014_SHARP_);
} else {
return and__4036__auto__;
}
});})(rx))
], null);
})();
struct.core.required = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"this field is mandatory",cljs.core.cst$kw$optional,false,cljs.core.cst$kw$validate,(function (p1__8015_SHARP_){
if(typeof p1__8015_SHARP_ === 'string'){
return (!(cljs.core.empty_QMARK_(p1__8015_SHARP_)));
} else {
return (!((p1__8015_SHARP_ == null)));
}
})], null);
struct.core.number = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a number",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.number_QMARK_], null);
struct.core.number_str = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"must be a number",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8016_SHARP_){
var or__4047__auto__ = typeof p1__8016_SHARP_ === 'number';
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = typeof p1__8016_SHARP_ === 'string';
if(and__4036__auto__){
return cuerdas.core.numeric_QMARK_(p1__8016_SHARP_);
} else {
return and__4036__auto__;
}
}
}),cljs.core.cst$kw$coerce,(function (p1__8017_SHARP_){
if(typeof p1__8017_SHARP_ === 'number'){
return p1__8017_SHARP_;
} else {
return cuerdas.core.parse_number(p1__8017_SHARP_);
}
})], null);
struct.core.integer = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a integer",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8018_SHARP_){
return Number.isInteger(p1__8018_SHARP_);
})], null);
struct.core.integer_str = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"must be a long",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8020_SHARP_){
var or__4047__auto__ = typeof p1__8020_SHARP_ === 'number';
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = typeof p1__8020_SHARP_ === 'string';
if(and__4036__auto__){
return cuerdas.core.numeric_QMARK_(p1__8020_SHARP_);
} else {
return and__4036__auto__;
}
}
}),cljs.core.cst$kw$coerce,(function (p1__8021_SHARP_){
if(typeof p1__8021_SHARP_ === 'number'){
return (p1__8021_SHARP_ | (0));
} else {
return cuerdas.core.parse_int(p1__8021_SHARP_);
}
})], null);
struct.core.boolean$ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a boolean",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8022_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,p1__8022_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,p1__8022_SHARP_)));
})], null);
struct.core.boolean_str = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"must be a boolean",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8023_SHARP_){
var and__4036__auto__ = typeof p1__8023_SHARP_ === 'string';
if(and__4036__auto__){
return cljs.core.re_seq(/^(?:t|true|false|f|0|1)$/,p1__8023_SHARP_);
} else {
return and__4036__auto__;
}
}),cljs.core.cst$kw$coerce,(function (p1__8024_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["true",null,"t",null,"1",null], null), null),p1__8024_SHARP_);
})], null);
struct.core.string = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a string",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.string_QMARK_], null);
struct.core.string_like = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a string",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$coerce,cljs.core.str], null);
struct.core.in_range = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"not in range %s and %s",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8025_SHARP_,p2__8026_SHARP_,p3__8027_SHARP_){
return ((typeof p1__8025_SHARP_ === 'number') && (typeof p2__8026_SHARP_ === 'number') && (typeof p3__8027_SHARP_ === 'number') && ((((p2__8026_SHARP_ <= p1__8025_SHARP_)) && ((p1__8025_SHARP_ <= p3__8027_SHARP_)))));
})], null);
struct.core.positive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be positive",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.pos_QMARK_], null);
struct.core.negative = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be negative",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.neg_QMARK_], null);
struct.core.map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a map",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.map_QMARK_], null);
struct.core.set = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a set",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.set_QMARK_], null);
struct.core.coll = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a collection",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.coll_QMARK_], null);
struct.core.vector = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a vector instance",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.vector_QMARK_], null);
struct.core.every = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must match the predicate",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8029_SHARP_,p2__8028_SHARP_){
return cljs.core.every_QMARK_(p2__8028_SHARP_,p1__8029_SHARP_);
})], null);
struct.core.member = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"not in coll",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,(function (p1__8030_SHARP_,p2__8031_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([p1__8030_SHARP_]),p2__8031_SHARP_);
})], null);
struct.core.function$ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"must be a function",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,cljs.core.ifn_QMARK_], null);
struct.core.identical_to = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,"does not match",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$state,true,cljs.core.cst$kw$validate,(function (state,v,ref){
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,ref);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev,v);
})], null);
struct.core.min_count = (function (){var validate = (function struct$core$validate(v,minimum){
if(typeof minimum === 'number'){
} else {
throw (new Error("Assert failed: (number? minimum)"));
}

return (cljs.core.count(v) >= minimum);
});
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"less than the minimum %s",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,validate], null);
})();
struct.core.max_count = (function (){var validate = (function struct$core$validate(v,maximum){
if(typeof maximum === 'number'){
} else {
throw (new Error("Assert failed: (number? maximum)"));
}

return (cljs.core.count(v) <= maximum);
});
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,"longer than the maximum %s",cljs.core.cst$kw$optional,true,cljs.core.cst$kw$validate,validate], null);
})();
