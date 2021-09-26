import {
    CHECKLISTS_OVERVIEW_SUBTITLE,
    GUIDE_VIEWS_OVERVIEW_SUBTITLE,
    HOTSPOTS_OVERVIEW_SUBTITLE,
    MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE,

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
                id: '#89326',
                status: 'live',
                name: 'Create you first guide',
                views: {
                    total: 420,
                    change: 23
                },
                date: '20 May 2021'
            },
            {
                id: '#53263',
                status: 'live',
                name: 'Install Chrome extension',
                views: {
                    total: 350,
                    change: -32
                },
                date: '22 May 2021'
            },
            {
                id: '#64254',
                status: 'disabled',
                name: 'How to use NPM',
                views: {
                    total: 5020,
                    change: 456
                },
                date: '23 May 2021'
            },
            {
                id: '#32675',
                status: 'disabled',
                name: 'Unlock your FB profile',
                views: {
                    total: 50,
                    change: 1
                },
                date: '25 May 2021'
            },
            {
                id: '#89327',
                status: 'disabled',
                name: 'Create you first guide',
                views: {
                    total: 420,
                    change: 23
                },
                date: '20 May 2021'
            },
            {
                id: '#53267',
                status: 'live',
                name: 'Install Chrome extension',
                views: {
                    total: 350,
                    change: -32
                },
                date: '22 May 2021'
            },
            {
                id: '#64258',
                status: 'disabled',
                name: 'How to use NPM',
                views: {
                    total: 5020,
                    change: 456
                },
                date: '23 May 2021'
            },
            {
                id: '#32679',
                status: 'disabled',
                name: 'Unlock your FB profile',
                views: {
                    total: 50,
                    change: 1
                },
                date: '25 May 2021'
            }
        ],
        teams: [
            {
                id: 'a123#',
                name: 'Userguide Team',
                members: [
                    {
                        id: '123#',
                        name: 'Lillian Burke',
                        pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg',
                    },
                    {
                        id: '456#',
                        name: 'Alexis Lo',
                        pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg',
                    },
                    {
                        id: '789#',
                        name: 'Johannes Laurent',
                        pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg',
                    }
                ],
                performancePercentage: '0.52',
                views: '460'
            },
            {
                id: 'b456#',
                name: 'Rantas NT Group',
                members: [
                    {
                        id: '101#',
                        name: 'Brian Johnston',
                        pictureLink: 'https://randomuser.me/api/portraits/men/64.jpg',
                    },
                    {
                        id: '112#',
                        name: 'Iina Saksa',
                        pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg',
                    },
                ],
                performancePercentage: '0.46',
                views: '120'
            },
            {
                id: 'c789#',
                name: 'Userguide Group Rantas',
                members: [
                    {
                        id: '131#',
                        name: 'Alberte Pedersen',
                        pictureLink: 'https://randomuser.me/api/portraits/women/16.jpg'
                    },
                    {
                        id: '415#',
                        name: 'Elsa Nikula',
                        pictureLink: 'https://randomuser.me/api/portraits/women/92.jpg'
                    },
                    {
                        id: '161#',
                        name: 'Svein Bergene',
                        pictureLink: 'https://randomuser.me/api/portraits/men/15.jpg'
                    }
                ],
                performancePercentage: '0.78',
                views: '4600'
            },
            {
                id: 'c987#',
                name: 'Userguide Group Rantas',
                members: [
                    {
                        id: '131#',
                        name: 'Alberte Pedersen',
                        pictureLink: 'https://randomuser.me/api/portraits/women/16.jpg'
                    },
                    {
                        id: '415#',
                        name: 'Elsa Nikula',
                        pictureLink: 'https://randomuser.me/api/portraits/women/92.jpg'
                    },
                    {
                        id: '161#',
                        name: 'Svein Bergene',
                        pictureLink: 'https://randomuser.me/api/portraits/men/15.jpg'
                    }
                ],
                performancePercentage: '0.78',
                views: '4600'
            },
            {
                id: 'b546#',
                name: 'Rantas NT Group',
                members: [
                    {
                        id: '101#',
                        name: 'Brian Johnston',
                        pictureLink: 'https://randomuser.me/api/portraits/men/64.jpg',
                    },
                    {
                        id: '112#',
                        name: 'Iina Saksa',
                        pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg',
                    },
                ],
                performancePercentage: '0.46',
                views: '120'
            },
            {
                id: 'b654#',
                name: 'Rantas NT Group',
                members: [
                    {
                        id: '101#',
                        name: 'Brian Johnston',
                        pictureLink: 'https://randomuser.me/api/portraits/men/64.jpg',
                    },
                    {
                        id: '112#',
                        name: 'Iina Saksa',
                        pictureLink: 'https://randomuser.me/api/portraits/women/78.jpg',
                    },
                ],
                performancePercentage: '0.46',
                views: '120'
            },
            {
                id: 'a321#',
                name: 'Userguide Team',
                members: [
                    {
                        id: '123#',
                        name: 'Lillian Burke',
                        pictureLink: 'https://randomuser.me/api/portraits/women/55.jpg',
                    },
                    {
                        id: '456#',
                        name: 'Alexis Lo',
                        pictureLink: 'https://randomuser.me/api/portraits/men/22.jpg',
                    },
                    {
                        id: '789#',
                        name: 'Johannes Laurent',
                        pictureLink: 'https://randomuser.me/api/portraits/men/42.jpg',
                    }
                ],
                performancePercentage: '0.52',
                views: '460'
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
