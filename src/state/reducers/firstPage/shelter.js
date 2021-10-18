const shelterReducer = (state = 0, action) => {
    switch(action.type) {
        case "SHELTER":
          if(action.payload === null)
            return 0;
          else
            return state = action.payload;
        default:
          return state;
    }
}

export default shelterReducer;