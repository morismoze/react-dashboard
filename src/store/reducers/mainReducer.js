import {
    CHECKLISTS_OVERVIEW_SUBTITLE,
    GUIDE_VIEWS_OVERVIEW_SUBTITLE,
    HOTSPOTS_OVERVIEW_SUBTITLE,
    MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE
} from "../../constants/screenConstants";

const INITIAL_STATE = {
    performance: {
        overview: {
            [GUIDE_VIEWS_OVERVIEW_SUBTITLE]: { total: 1240, change: 23, interval: { value: 7, unit: 'day' } },
            [CHECKLISTS_OVERVIEW_SUBTITLE]: { total: 680, change: -36, interval: { value: 7, unit: 'day' } },
            [HOTSPOTS_OVERVIEW_SUBTITLE]: { total: 920, change: 40, interval: { value: 7, unit: 'day' } },
            [MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE]: { total: 1565, change: 45, interval: { value: 5, unit: 'year' } }
        },
        guide: {
            views: [14, 14, 8, 8, 25, 25, 40, 24, 24, 10, 25],
            completion: [29, 29, 29, 8, 8, 8, 16, 16, 23, 16, 15]
        },
        totalView: {
            previousIntervalViews: { total: 1987, change: 23, interval: { value: 7, unit: 'day' } }
        },
        lists: [
            {
                id: '#89325',
                status: 'live',
                name: 'Create you first unique guide without knowing anything about this tool',
                views: {
                    total: 420,
                    change: 23
                },
                date: '20 May 2021'
            },
            {
                id: '#53262',
                status: 'live',
                name: 'Install Chrome extension',
                views: {
                    total: 350,
                    change: -32
                },
                date: '22 May 2021'
            },
            {
                id: '#64251',
                status: 'disabled',
                name: 'How to use NPM',
                views: {
                    total: 5020,
                    change: 456
                },
                date: '23 May 2021'
            },
            {
                id: '#32673',
                status: 'live',
                name: 'Unlock your FB profile',
                views: {
                    total: 50,
                    change: 1
                },
                date: '25 May 2021'
            },
            {
                id: '#89325',
                status: 'live',
                name: 'Create you first guide',
                views: {
                    total: 420,
                    change: 23
                },
                date: '20 May 2021'
            },
            {
                id: '#53262',
                status: 'live',
                name: 'Install Chrome extension',
                views: {
                    total: 350,
                    change: -32
                },
                date: '22 May 2021'
            },
            {
                id: '#64251',
                status: 'disabled',
                name: 'How to use NPM',
                views: {
                    total: 5020,
                    change: 456
                },
                date: '23 May 2021'
            },
            {
                id: '#32673',
                status: 'disabled',
                name: 'Unlock your FB profile',
                views: {
                    total: 50,
                    change: 1
                },
                date: '25 May 2021'
            },
            {
                id: '#89325',
                status: 'disabled',
                name: 'Create you first guide',
                views: {
                    total: 420,
                    change: 23
                },
                date: '20 May 2021'
            },
            {
                id: '#53262',
                status: 'live',
                name: 'Install Chrome extension',
                views: {
                    total: 350,
                    change: -32
                },
                date: '22 May 2021'
            },
            {
                id: '#64251',
                status: 'disabled',
                name: 'How to use NPM',
                views: {
                    total: 5020,
                    change: 456
                },
                date: '23 May 2021'
            },
            {
                id: '#32673',
                status: 'disabled',
                name: 'Unlock your FB profile',
                views: {
                    total: 50,
                    change: 1
                },
                date: '25 May 2021'
            }
        ]
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};