import {PREMIUM_STATUS} from "../../constants/userConstants";

const INITIAL_STATE = {
    firstName: 'John',
    lastName: 'Doe',
    userStatus: PREMIUM_STATUS,
    activityGroup: 'Monthly Active Users',
    progress: 0.75
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};