import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import UserGreetContainer from "../../containers/UserGreetContainer";
import styles from './DashboardScreen.module.scss';

const DashboardScreen = () => {
    const Children = () => (
        <>
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
        </>
    );

    const DashboardScreenWithLayoutWrapper = WithLayoutWrapper(Children);

    return (
        <DashboardScreenWithLayoutWrapper className={styles.dashboardScreenLayout}/>
    );
};

export default DashboardScreen;