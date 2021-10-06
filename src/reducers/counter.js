// REDUCER -> When action is called, reducer check which action you did,
// and based on the action, modifies the store value
const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case "INCREMENT":
        return state + action.payload;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }

  export default counterReducer;