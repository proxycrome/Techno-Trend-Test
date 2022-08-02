import { combineReducers } from "redux";
import Person from "./reducer";

const rootReducer = combineReducers({
    Person: Person,
});

export default rootReducer;