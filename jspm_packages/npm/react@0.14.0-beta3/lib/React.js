/* */ 
'use strict';
var ReactDOM = require("./ReactDOM");
var ReactDOMServer = require("./ReactDOMServer");
var ReactIsomorphic = require("./ReactIsomorphic");
var assign = require("./Object.assign");
var React = {};
assign(React, ReactIsomorphic);
assign(React, ReactDOM);
assign(React, ReactDOMServer);
React.version = '0.14.0-beta3';
module.exports = React;
