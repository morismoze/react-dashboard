import {
    SET_ACTIVE_SCREEN
} from './actionTypes';

export const setActiveScreen = screenId => ({
    type: SET_ACTIVE_SCREEN,
    screenId
});