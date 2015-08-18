/* */ 
require("./$.fix-re-wks")('search', 1, function(SEARCH) {
  return function search(regexp) {
    'use strict';
    var str = String(this),
        fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, str) : new RegExp(regexp)[SEARCH](str);
  };
});
