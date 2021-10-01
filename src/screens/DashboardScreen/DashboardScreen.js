import React from 'react';

import LayoutWrapper from "../../components/shared/LayoutWrapper/LayoutWrapper";
import UserGreetContainer from "../../containers/UserGreetContainer";
import styles from './DashboardScreen.module.scss';

const DashboardScreen = () => {
    return (
        <LayoutWrapper
            className={styles.dashboardScreenLayout}
        >
            <UserGreetContainer
                userIconSlideTimeout={300}
                userIconSlideDirection={'down'}
                welcomeMessageSlideTimeout={600}
                welcomeMessageSlideDirection={'down'}
                activityGroupFadeTimeout={650}
            />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LayoutWrapper>
    );
};

export default DashboardScreen;