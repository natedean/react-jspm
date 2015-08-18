/* */ 
var toObject = require("./$.to-object"),
    ES5Object = require("./$.es5-object"),
    enumKeys = require("./$.enum-keys");
module.exports = Object.assign || function assign(target, source) {
  var T = toObject(target, true),
      l = arguments.length,
      i = 1;
  while (l > i) {
    var S = ES5Object(arguments[i++]),
        keys = enumKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j)
      T[key = keys[j++]] = S[key];
  }
  return T;
};
