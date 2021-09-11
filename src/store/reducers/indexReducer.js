import { combineReducers } from "redux";

import mainReducer from './mainReducer';
import navigationReducer from "./navigationReducer";

export const rootReducer = combineReducers({
   mainReducer,
   navigationReducer
});