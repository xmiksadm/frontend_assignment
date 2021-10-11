const agreeReducer = (state = false, action) => {
    switch(action.type) {
        case "AGREE":
          return !state;
        default:
          return state;
    }
}

export default agreeReducer;