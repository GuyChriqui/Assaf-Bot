"use strict";

// Handle response actions array
exports.executeResponseActions = function(responseObject) {
  //   // If there actions to execute
  //   if (responseObject && responseObject.actions) {
  //     // Runs on responses actions array and execute them one by one
  //     for (const action of responseObject.actions) {
  //       executeAction(action);
  //     }
  //   }
};

exports.executeAction = function(action) {
  if (action) action.execute();
};
