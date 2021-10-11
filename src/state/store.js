import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers/index"
import thunk from "redux-thunk"

// STORE -> Globalized State
const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

export default store;