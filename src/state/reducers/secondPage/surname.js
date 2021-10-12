const surnameReducer = (state = "", action) => {
    switch(action.type) {
        case "SURNAME":
          return state = action.payload;
        default:
          return state;
    }
}

export default surnameReducer;