const {redux} = require("./vendor");
const reducers = require("../reducers/reducers");

module.exports = (broadcast) => {
  return redux.createStore(
    redux.combineReducers(reducers),
    redux.applyMiddleware(
      // logging
      store => next => action => {
        console.log(action.type, action.data);
        next(action);
      },

      // relay to children
      store => next => action => {
        action.meta = action.meta || {};
        action.meta.source = "parent";
        broadcast(action);
        next(action);
      }
    )
  );
};
