import {PREMIUM_STATUS} from "../../constants/userConstants";

const INITIAL_STATE = {
    username: 'Moris Moze',
    userStatus: PREMIUM_STATUS
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};