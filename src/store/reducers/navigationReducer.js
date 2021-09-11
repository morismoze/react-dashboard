import { ANALYTICS_GROUP } from "../../constants/screenConstants";
import {
    SET_ACTIVE_SCREEN
} from "../actions/actionTypes";

const INITIAL_STATE = {
    activeScreen: ANALYTICS_GROUP.DASHBOARD_SCREEN
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_SCREEN: {
            return {
                ...state,
                activeScreen: action.screenId
            }
        }
        default:
            return state;
    }
};