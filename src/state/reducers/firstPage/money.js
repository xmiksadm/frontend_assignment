const moneyReducer = (state = 0, action) => {
    switch(action.type) {
        case "MONEY":
          return state = action.payload;
        default:
          return state;
    }
}

  export default moneyReducer;