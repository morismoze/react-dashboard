import {
    ANALYTICS_GROUP,
    CONTENT_GROUP,
    CUSTOMIZATION_GROUP,
    LOG_GROUP,
    PROFILE_GROUP,
    SETTINGS_GROUP
} from "./screenConstants";

// constants for Ant Design Icons names
const ANT_DESIGN_ICON_DASHBOARD = 'AiOutlineBarChart';
const ANT_DESIGN_ICON_PERFORMANCE = 'AiOutlineDashboard';
const ANT_DESIGN_ICON_SETTINGS = 'AiOutlineSetting';
const ANT_DESIGN_ICON_LOGOUT = 'AiOutlineLogout';
const ANT_DESIGN_ICON_PROFILE = 'AiOutlineCrown';
const ANT_DESIGN_ICON_GUIDES = 'AiOutlineBook';
const ANT_DESIGN_ICON_HOTSPOTS = 'AiOutlineWifi';
const ANT_DESIGN_ICON_CHECKLISTS = 'AiOutlineCheckCircle';
const ANT_DESIGN_ICON_NPS = 'AiOutlineLike';
const ANT_DESIGN_ICON_SEGMENTS = 'AiOutlineBuild';
const ANT_DESIGN_ICON_THEMES = 'AiOutlineFormatPainter';

export const getSidenavTabIconName = tabId => {
    switch (tabId) {
        case ANALYTICS_GROUP.DASHBOARD_SCREEN:
            return ANT_DESIGN_ICON_DASHBOARD;
        case ANALYTICS_GROUP.PERFORMANCE_SCREEN:
            return ANT_DESIGN_ICON_PERFORMANCE;
        case CONTENT_GROUP.GUIDES_SCREEN:
            return ANT_DESIGN_ICON_GUIDES;
        case CONTENT_GROUP.HOTSPOTS_SCREEN:
            return ANT_DESIGN_ICON_HOTSPOTS;
        case CONTENT_GROUP.CHECKLISTS_SCREEN:
            return ANT_DESIGN_ICON_CHECKLISTS;
        case CONTENT_GROUP.NPS_SCREEN:
            return ANT_DESIGN_ICON_NPS;
        case CUSTOMIZATION_GROUP.SEGMENTS_SCREEN:
            return ANT_DESIGN_ICON_SEGMENTS;
        case CUSTOMIZATION_GROUP.THEMES_SCREEN:
            return ANT_DESIGN_ICON_THEMES;
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