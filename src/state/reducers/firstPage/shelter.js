const shelterReducer = (state = "", action) => {
    switch(action.type) {
        case "SHELTER":
          return state = action.payload;
        default:
          return state;
      }
}

  export default shelterReducer;