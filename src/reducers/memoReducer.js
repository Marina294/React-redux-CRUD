const memoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MEMO':
      return state.concat([action.data]);
    case 'DELETE_MEMO':
      return state.filter((post)=>post.id !== action.id);
    default:
      return state;
  }
}
export default memoReducer;