import { combineReducers } from "redux";

import mainReducer from './mainReducer';
import navigationReducer from "./navigationReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
   mainReducer,
   navigationReducer,
   userReducer
});