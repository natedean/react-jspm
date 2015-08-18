/* */ 
'use strict';
module.exports = function(KEY, length, exec) {
  var SYMBOL = require("./$.wks")(KEY),
      original = ''[KEY];
  if (function() {
    try {
      var O = {};
      O[SYMBOL] = function() {
        return 7;
      };
      return ''[KEY](O) != 7;
    } catch (e) {
      return true;
    }
  }()) {
    require("./$.redef")(String.prototype, KEY, exec(SYMBOL, original));
    require("./$.hide")(RegExp.prototype, SYMBOL, length == 2 ? function(string, arg) {
      return original.call(string, this, arg);
    } : function(string) {
      return original.call(string, this);
    });
  }
};
