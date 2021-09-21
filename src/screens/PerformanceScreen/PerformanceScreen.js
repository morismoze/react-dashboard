import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import PerformanceOverviewContainer from "../../containers/PerformanceOverviewContainer";
import PerformanceGraphContainer from "../../containers/PerformanceGraphContainer";
import {ANALYTICS_GROUP} from "../../constants/screenConstants";
import styles from './PerformanceScreen.module.scss';

const PerformanceScreen = () => {
    return (
        <LayoutWrapper
            className={styles.performanceScreenLayout}
        >
            <ScreenTitle
                title={ANALYTICS_GROUP.PERFORMANCE_SCREEN}
            />
            <PerformanceOverviewContainer/>
            <PerformanceGraphContainer/>
            <div/>
            <div/>
            <div/>
        </LayoutWrapper>
    );
};

export default PerformanceScreen;