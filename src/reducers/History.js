module.exports = function tabs(previous = {rows: []}, action) {
  const state = Object.assign({}, previous);
  switch (action.type) {
    case "HISTORY_UPDATED":
      state.rows = action.data;
      return state;
    default:
      return previous;
  }
}
