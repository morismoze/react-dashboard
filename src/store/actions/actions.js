import {
    SET_ACTIVE_SCREEN,
    TOGGLE_SIDEBAR
} from './actionTypes';

export const setActiveScreen = screenId => ({
    type: SET_ACTIVE_SCREEN,
    screenId
});

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR
});