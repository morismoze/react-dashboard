import { ANALYTICS_GROUP } from "../../constants/screenConstants";
import {
    SET_ACTIVE_SCREEN,
    TOGGLE_SIDEBAR,
    TOGGLE_MENU
} from "../actions/actionTypes";

export const INITIAL_STATE = {
    activeScreen: ANALYTICS_GROUP.DASHBOARD_SCREEN,
    isSidebarCollapsed: false,
    isMenuActive: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_ACTIVE_SCREEN: {
            return {
                ...state,
                activeScreen: action.screenId
            }
        }

        case TOGGLE_SIDEBAR: {
            return {
                ...state,
                isSidebarCollapsed: !state.isSidebarCollapsed
            }
        }

        case TOGGLE_MENU: {
            return {
                ...state,
                isMenuActive: !state.isMenuActive
            }
        }
        default:
            return state;
    }
};