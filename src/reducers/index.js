import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import toggleReducer from "./toggleReducer"

const allReducers = combineReducers({
    counter: counterReducer,
    toggler: toggleReducer,
})

export default allReducers