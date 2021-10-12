const phoneReducer = (state = 0, action) => {
    switch(action.type) {
        case "PHONE":
          return state = action.payload;
        default:
          return state;
    }
}

export default phoneReducer;