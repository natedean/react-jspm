/* */ 
(function(process) {
  'use strict';
  var assign = require("./Object.assign");
  var warning = require("fbjs/lib/warning");
  function deprecated(fnName, newModule, ctx, fn) {
    var warned = false;
    if (process.env.NODE_ENV !== 'production') {
      var newFn = function() {
        process.env.NODE_ENV !== 'production' ? warning(warned, '`require' + '("react").%s` is deprecated. Please use `require' + '("%s").%s` ' + 'instead.', fnName, newModule, fnName) : undefined;
        warned = true;
        return fn.apply(ctx, arguments);
      };
      return assign(newFn, fn);
    }
    return fn;
  }
  module.exports = deprecated;
})(require("process"));
