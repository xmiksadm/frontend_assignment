// REDUCER -> When action is called, reducer check which action you did,
// and based on the action, modifies the store value
const donateTypeReducer = (state = "ALL", action) => {
    switch(action.type) {
      case "ALL":
        state = "ALL"
        return state;
      case "ONE":
        state = "ONE"
        return state;
      default:
        return state;
    }
}

  export default donateTypeReducer;