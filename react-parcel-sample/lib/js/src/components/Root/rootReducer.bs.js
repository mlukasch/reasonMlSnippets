// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List       = require("bs-platform/lib/js/list.js");
var Block      = require("bs-platform/lib/js/block.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function rootReducer(action, state) {
  if (typeof action === "number") {
    console.log("AddNewItem");
    var newId = state[/* idCounter */0] + 1 | 0;
    var newItem_001 = /* itemName */state[/* newItem */2][/* itemName */1];
    var newItem = /* record */[
      /* id */newId,
      newItem_001,
      /* itemStatus : Open */0
    ];
    return /* Update */Block.__(0, [/* record */[
                /* idCounter */newId,
                /* todolist : :: */[
                  newItem,
                  state[/* todolist */1]
                ],
                /* newItem : record */[
                  /* id */newId,
                  /* itemName */"",
                  /* itemStatus : Open */0
                ]
              ]]);
  } else {
    switch (action.tag | 0) {
      case 0 : 
          var itemName = action[0];
          console.log("UpdateNewItem : " + itemName);
          var newItem$1 = state[/* newItem */2];
          return /* Update */Block.__(0, [/* record */[
                      /* idCounter */state[/* idCounter */0],
                      /* todolist */state[/* todolist */1],
                      /* newItem : record */[
                        /* id */newItem$1[/* id */0],
                        /* itemName */itemName,
                        /* itemStatus */newItem$1[/* itemStatus */2]
                      ]
                    ]]);
      case 1 : 
          var id = action[0];
          console.log("DeleteItem : " + Pervasives.string_of_int(id));
          return /* Update */Block.__(0, [/* record */[
                      /* idCounter */state[/* idCounter */0],
                      /* todolist */List.filter((function (item) {
                                return +(item[/* id */0] !== id);
                              }))(state[/* todolist */1]),
                      /* newItem */state[/* newItem */2]
                    ]]);
      case 2 : 
          var id$1 = action[0];
          console.log("CloseItem : " + Pervasives.string_of_int(id$1));
          var todolist = List.map((function (item) {
                  var match = +(item[/* id */0] === id$1);
                  if (match !== 0) {
                    return /* record */[
                            /* id */item[/* id */0],
                            /* itemName */item[/* itemName */1],
                            /* itemStatus : Done */["jetzt"]
                          ];
                  } else {
                    return item;
                  }
                }), state[/* todolist */1]);
          return /* Update */Block.__(0, [/* record */[
                      /* idCounter */state[/* idCounter */0],
                      /* todolist */todolist,
                      /* newItem */state[/* newItem */2]
                    ]]);
      
    }
  }
}

var initialState = /* record */[
  /* id */0,
  /* itemName */"",
  /* itemStatus : Open */0
];

exports.initialState = initialState;
exports.rootReducer  = rootReducer;
/* No side effect */
