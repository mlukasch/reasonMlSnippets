// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var React                   = require("react");
var ReasonReact             = require("reason-react/lib/js/src/ReasonReact.js");
var Utils$ReactParcelSample = require("../../../utils.bs.js");

var component = ReasonReact.statelessComponent("RootHeader");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "jumbotron"
                }, React.createElement("h1", undefined, Utils$ReactParcelSample.str("Todo-App-Crap in React-Reason")));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
