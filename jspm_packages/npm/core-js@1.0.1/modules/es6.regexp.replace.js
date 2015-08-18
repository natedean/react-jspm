/* */ 
require("./$.fix-re-wks")('replace', 2, function(REPLACE, $replace) {
  return function replace(searchValue, replaceValue) {
    'use strict';
    var str = String(this),
        fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, str, replaceValue) : $replace.call(str, searchValue, replaceValue);
  };
});
