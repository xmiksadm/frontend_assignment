const shelterReducer = (state = 0, action) => {
    switch(action.type) {
        case "SHELTER":
          return state = action.payload;
        default:
          return state;
    }
}

export default shelterReducer;