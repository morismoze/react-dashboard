import {ANALYTICS_GROUP, SETTINGS_GROUP} from "./screenConstants";

// constants for Ant Design Icons names
const ANT_DESIGN_ICON_DASHBOARD = 'AiOutlineBarChart';
const ANT_DESIGN_ICON_PERFORMANCE = 'AiOutlineDashboard';
const ANT_DESIGN_ICON_SETTINGS = 'AiOutlineSetting';

export const getSidenavTabIconName = tabId => {
    switch (tabId) {
        case ANALYTICS_GROUP.DASHBOARD_SCREEN:
            return ANT_DESIGN_ICON_DASHBOARD
        case ANALYTICS_GROUP.PERFORMANCE_SCREEN:
            return ANT_DESIGN_ICON_PERFORMANCE
        case SETTINGS_GROUP.SETTINGS_SCREEN:
            return ANT_DESIGN_ICON_SETTINGS
        default:
            return;
    }
};