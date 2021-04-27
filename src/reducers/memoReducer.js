const memoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MEMO':
      return state.concat([action.data]);
    default:
      return state;
  }
}

export default memoReducer;