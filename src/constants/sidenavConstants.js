import {ANALYTICS_GROUP, LOG_GROUP, PROFILE_GROUP, SETTINGS_GROUP} from "./screenConstants";

// constants for Ant Design Icons names
const ANT_DESIGN_ICON_DASHBOARD = 'AiOutlineBarChart';
const ANT_DESIGN_ICON_PERFORMANCE = 'AiOutlineDashboard';
const ANT_DESIGN_ICON_SETTINGS = 'AiOutlineSetting';
const ANT_DESIGN_ICON_LOGOUT = 'AiOutlineLogout';
const ANT_DESIGN_ICON_PROFILE = 'AiOutlineCrown';

export const getSidenavTabIconName = tabId => {
    switch (tabId) {
        case ANALYTICS_GROUP.DASHBOARD_SCREEN:
            return ANT_DESIGN_ICON_DASHBOARD;
        case ANALYTICS_GROUP.PERFORMANCE_SCREEN:
            return ANT_DESIGN_ICON_PERFORMANCE;
        case SETTINGS_GROUP.SETTINGS_SCREEN:
            return ANT_DESIGN_ICON_SETTINGS;
        case LOG_GROUP.LOGOUT_SCREEN:
            return ANT_DESIGN_ICON_LOGOUT;
        case PROFILE_GROUP.PROFILE_SCREEN:
            return ANT_DESIGN_ICON_PROFILE;
        default:
            return;
    }
};