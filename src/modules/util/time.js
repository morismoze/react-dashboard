const GOOD_MORNING_MSG = 'Good Morning';
const GOOD_AFTERNOON_MSG = 'Good Afternoon';
const GOOD_EVENING_MSG = 'Good Evening';
const GOOD_DAY_MSG = 'Good Day';

export const getCurrentHourWelcomeMessage = () => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        return GOOD_MORNING_MSG;
    } else if (currentHour >= 12 && currentHour < 18) {
        return GOOD_AFTERNOON_MSG;
    } else if (currentHour >= 18) {
        return GOOD_EVENING_MSG;
    } else {
        return GOOD_DAY_MSG;
    }
};