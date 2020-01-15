import { combineReducers } from "redux";
import conditionReducer from "./conditionReducer";

export default combineReducers({
    condition: conditionReducer,
})