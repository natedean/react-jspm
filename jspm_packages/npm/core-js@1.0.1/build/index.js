/* */ 
"format cjs";
(function() {
  var banner,
      ref$,
      readFile,
      writeFile,
      unlink,
      webpack,
      list,
      experimental,
      libraryBlacklist;
  banner = require("./config").banner;
  ref$ = require("fs"), readFile = ref$.readFile, writeFile = ref$.writeFile, unlink = ref$.unlink;
  webpack = require("webpack");
  list = ['es5', 'es6.symbol', 'es6.object.assign', 'es6.object.is', 'es6.object.set-prototype-of', 'es6.object.to-string', 'es6.object.statics-accept-primitives', 'es6.function.name', 'es6.function.has-instance', 'es6.number.constructor', 'es6.number.epsilon', 'es6.number.is-finite', 'es6.number.is-integer', 'es6.number.is-nan', 'es6.number.is-safe-integer', 'es6.number.max-safe-integer', 'es6.number.min-safe-integer', 'es6.number.parse-float', 'es6.number.parse-int', 'es6.math.acosh', 'es6.math.asinh', 'es6.math.atanh', 'es6.math.cbrt', 'es6.math.clz32', 'es6.math.cosh', 'es6.math.expm1', 'es6.math.fround', 'es6.math.hypot', 'es6.math.imul', 'es6.math.log10', 'es6.math.log1p', 'es6.math.log2', 'es6.math.sign', 'es6.math.sinh', 'es6.math.tanh', 'es6.math.trunc', 'es6.string.from-code-point', 'es6.string.raw', 'es6.string.iterator', 'es6.string.code-point-at', 'es6.string.ends-with', 'es6.string.includes', 'es6.string.repeat', 'es6.string.starts-with', 'es6.array.from', 'es6.array.of', 'es6.array.iterator', 'es6.array.species', 'es6.array.copy-within', 'es6.array.fill', 'es6.array.find', 'es6.array.find-index', 'es6.regexp.constructor', 'es6.regexp.flags', 'es6.regexp.match', 'es6.regexp.replace', 'es6.regexp.search', 'es6.regexp.split', 'es6.promise', 'es6.map', 'es6.set', 'es6.weak-map', 'es6.weak-set', 'es6.reflect.apply', 'es6.reflect.construct', 'es6.reflect.define-property', 'es6.reflect.delete-property', 'es6.reflect.enumerate', 'es6.reflect.get', 'es6.reflect.get-own-property-descriptor', 'es6.reflect.get-prototype-of', 'es6.reflect.has', 'es6.reflect.is-extensible', 'es6.reflect.own-keys', 'es6.reflect.prevent-extensions', 'es6.reflect.set', 'es6.reflect.set-prototype-of', 'es7.array.includes', 'es7.string.at', 'es7.string.lpad', 'es7.string.rpad', 'es7.regexp.escape', 'es7.object.get-own-property-descriptors', 'es7.object.values', 'es7.object.entries', 'es7.map.to-json', 'es7.set.to-json', 'es7.observable', 'web.immediate', 'web.dom.iterable', 'web.timers', 'core.dict', 'core.get-iterator-method', 'core.get-iterator', 'core.is-iterable', 'core.delay', 'core.function.part', 'core.object.is-object', 'core.object.classof', 'core.object.define', 'core.object.make', 'core.number.iterator', 'core.string.escape-html', 'core.string.unescape-html', 'core.log', 'js.array.statics'];
  experimental = ['es7.observable'];
  libraryBlacklist = ['es6.object.to-string', 'es6.function.name', 'es6.regexp.constructor', 'es6.regexp.flags', 'es6.regexp.match', 'es6.regexp.replace', 'es6.regexp.search', 'es6.regexp.split', 'es6.number.constructor'];
  module.exports = function(arg$, next) {
    var modules,
        ref$,
        blacklist,
        library;
    modules = (ref$ = arg$.modules) != null ? ref$ : [], blacklist = (ref$ = arg$.blacklist) != null ? ref$ : [], library = (ref$ = arg$.library) != null ? ref$ : false;
    (function() {
      var check,
          i$,
          x$,
          ref$,
          len$,
          ns,
          name,
          j$,
          len1$,
          ENTRY,
          PATH,
          this$ = this;
      check = function(err) {
        if (err) {
          next(err, '');
          return true;
        }
      };
      if (this.exp) {
        for (i$ = 0, len$ = (ref$ = experimental).length; i$ < len$; ++i$) {
          x$ = ref$[i$];
          this[x$] = true;
        }
      }
      for (ns in this) {
        if (this[ns]) {
          for (i$ = 0, len$ = (ref$ = list).length; i$ < len$; ++i$) {
            name = ref$[i$];
            if (name.indexOf(ns + ".") === 0 && !in$(name, experimental)) {
              this[name] = true;
            }
          }
        }
      }
      if (library) {
        blacklist = blacklist.concat(libraryBlacklist);
      }
      for (i$ = 0, len$ = blacklist.length; i$ < len$; ++i$) {
        ns = blacklist[i$];
        for (j$ = 0, len1$ = (ref$ = list).length; j$ < len1$; ++j$) {
          name = ref$[j$];
          if (name === ns || name.indexOf(ns + ".") === 0) {
            this[name] = false;
          }
        }
      }
      ENTRY = "./__tmp" + Math.random() + "__.js";
      PATH = "." + (library ? '/library' : '') + "/modules/";
      writeFile(ENTRY, list.filter(function(it) {
        return this$[it];
      }).map(function(it) {
        return "require('" + PATH + it + "');";
      }).join('\n'), function(err) {
        var TARGET;
        if (check(err)) {
          return ;
        }
        TARGET = "./__tmp" + Math.random() + "__.js";
        webpack({
          entry: ENTRY,
          output: {
            path: '',
            filename: TARGET
          }
        }, function(err, info) {
          if (check(err)) {
            return ;
          }
          readFile(TARGET, function(err, script) {
            if (check(err)) {
              return ;
            }
            unlink(ENTRY, function(err) {
              if (check(err)) {
                return ;
              }
              unlink(TARGET, function(err) {
                if (check(err)) {
                  return ;
                }
                next(null, "" + banner + "\n!function(__e, __g, undefined){\n'use strict';\n" + script + "\n// CommonJS export\nif(typeof module != 'undefined' && module.exports)module.exports = __e;\n// RequireJS export\nelse if(typeof define == 'function' && define.amd)define(function(){return __e});\n// Export to global object\nelse __g.core = __e;\n}(1, 1);");
              });
            });
          });
        });
      });
    }.call(modules.reduce(function(memo, it) {
      memo[it] = true;
      return memo;
    }, {})));
  };
  function in$(x, xs) {
    var i = -1,
        l = xs.length >>> 0;
    while (++i < l)
      if (x === xs[i])
        return true;
    return false;
  }
}).call(this);