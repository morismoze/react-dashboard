import {CHECKLISTS, GUIDE_VIEWS, HOTSPOTS, MOST_ACTIVE_USERS} from "../../constants/screenConstants";

const INITIAL_STATE = {
    performance: {
        overview: {
            [GUIDE_VIEWS]: { total: 1240, change: 23, interval: { value: 7, unit: 'day' } },
            [CHECKLISTS]: { total: 680, change: -36, interval: { value: 7, unit: 'day' } },
            [HOTSPOTS]: { total: 920, change: 40, interval: { value: 7, unit: 'day' } },
            [MOST_ACTIVE_USERS]: { total: 1565, change: 45, interval: { value: 5, unit: 'year' } }
        }
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};