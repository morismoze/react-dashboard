import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import UserGreetContainer from "../../containers/UserGreetContainer";
import styles from './DashboardScreen.module.scss';

const DashboardScreen = () => {
    return (
        <LayoutWrapper
            className={styles.dashboardScreenLayout}
        >
            <UserGreetContainer/>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </LayoutWrapper>
    );
};

export default DashboardScreen;