/* */ 
require("./$.fix-re-wks")('match', 1, function(MATCH) {
  return function match(regexp) {
    'use strict';
    var str = String(this),
        fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, str) : new RegExp(regexp)[MATCH](str);
  };
});
