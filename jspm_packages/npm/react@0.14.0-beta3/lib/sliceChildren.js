/* */ 
'use strict';
var ReactFragment = require("./ReactFragment");
var flattenChildren = require("./flattenChildren");
function sliceChildren(children, start, end) {
  if (children == null) {
    return children;
  }
  var slicedChildren = {};
  var flattenedMap = flattenChildren(children);
  var ii = 0;
  for (var key in flattenedMap) {
    if (!flattenedMap.hasOwnProperty(key)) {
      continue;
    }
    var child = flattenedMap[key];
    if (ii >= start) {
      slicedChildren[key] = child;
    }
    ii++;
    if (end != null && ii >= end) {
      break;
    }
  }
  return ReactFragment.create(slicedChildren);
}
module.exports = sliceChildren;
