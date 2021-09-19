import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import styles from './PerformanceScreen.module.scss';
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import {ANALYTICS_GROUP} from "../../constants/screenConstants";
import PerformanceOverviewContainer from "../../containers/PerformanceOverviewContainer";

const PerformanceScreen = () => {
    return (
        <LayoutWrapper
            className={styles.performanceScreenLayout}
        >
            <ScreenTitle
                title={ANALYTICS_GROUP.PERFORMANCE_SCREEN}
            />
            <PerformanceOverviewContainer/>
            <div/>
            <div/>
            <div/>
            <div/>
        </LayoutWrapper>
    );
};

export default PerformanceScreen;