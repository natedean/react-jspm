/* */ 
require("./$.fix-re-wks")('split', 2, function(SPLIT, $split) {
  return function split(separator, limit) {
    'use strict';
    var str = String(this),
        fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, str, limit) : $split.call(str, separator, limit);
  };
});
