export const ANALYTICS_GROUP = {
    DASHBOARD_SCREEN: 'dashboard',
    PERFORMANCE_SCREEN: 'performance'
};

export const CONTENT_GROUP = {
    GUIDES_SCREEN: 'guides',
    HOTSPOTS_SCREEN: 'hotspots',
    CHECKLISTS_SCREEN: 'checklists',
    NPS_SCREEN: 'nps'
};

export const CUSTOMIZATION_GROUP = {
    SEGMENTS_SCREEN: 'segments',
    THEMES_SCREEN: 'themes'
};

export const SETTINGS_GROUP = {
    SETTINGS_SCREEN: 'settings'
};

export const LOG_GROUP = {
    LOGOUT_SCREEN: 'logout'
}

export const PROFILE_GROUP = {
    PROFILE_SCREEN: 'profile'
}

export const SIDENAV_GROUPS = {
    Analytics: ANALYTICS_GROUP,
    Content: CONTENT_GROUP,
    Customization: CUSTOMIZATION_GROUP
};

// PERFORMANCE OVERVIEW SCREEN CONSTANTS

export const GUIDE_VIEWS_OVERVIEW_SUBTITLE = 'Guide Views';
export const CHECKLISTS_OVERVIEW_SUBTITLE = 'Checklists';
export const HOTSPOTS_OVERVIEW_SUBTITLE = 'Hotspots';
export const MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE = 'Most Active Users';

// PERFORMANCE CARDS TITLES

export const GUIDE_PERFORMANCE_CARD_TITLE = 'Guide Performance';
export const TOTAL_VIEW_PERFORMANCE_CARD_TITLE = 'Total View Performance';
export const GUIDE_LISTS_CARD_TITLE = 'Guide Lists';
export const TEAM_PERFORMANCE_CARD_TITLE = 'Team Performance';

// PERFORMANCE GUIDE LISTS TABLE HEADERS

export const GUIDE_LISTS_ID = 'id';
export const GUIDE_LISTS_STATUS = 'status';
export const GUIDE_LISTS_GUIDE_NAME = 'guide name';
export const GUIDE_LISTS_VIEW = 'views';
export const GUIDE_LISTS_DATE = 'date';

export const GUIDE_LISTS_TABLE_HEADERS = [GUIDE_LISTS_ID, GUIDE_LISTS_STATUS, GUIDE_LISTS_GUIDE_NAME, GUIDE_LISTS_VIEW, GUIDE_LISTS_DATE]

// PERFORMANCE GUIDE LISTS STATUSES

export const LIVE_STATUS = 'live';
export const DISABLED_STATUS = 'disabled';