/* */ 
var $def = require("./$.def"),
    anObject = require("./$.an-object");
function Enumerate(iterated) {
  this._t = anObject(iterated);
  this._k = undefined;
  this._i = 0;
}
require("./$.iter-create")(Enumerate, 'Object', function() {
  var that = this,
      keys = that._k,
      key;
  if (keys == undefined) {
    that._k = keys = [];
    for (key in that._t)
      keys.push(key);
  }
  do {
    if (that._i >= keys.length)
      return {
        value: undefined,
        done: true
      };
  } while (!((key = keys[that._i++]) in that._t));
  return {
    value: key,
    done: false
  };
});
$def($def.S, 'Reflect', {enumerate: function enumerate(target) {
    return new Enumerate(target);
  }});