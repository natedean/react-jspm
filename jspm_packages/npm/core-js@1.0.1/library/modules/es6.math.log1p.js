/* */ 
var $def = require("./$.def");
$def($def.S, 'Math', {log1p: function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  }});
