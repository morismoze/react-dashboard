import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ScreenTitle from "../../components/ScreenTitle/ScreenTitle";
import PerformanceOverviewContainer from "../../containers/PerformanceOverviewContainer";
import PerformanceGraphContainer from "../../containers/PerformanceGraphContainer";
import TotalViewGraphContainer from "../../containers/TotalViewGraphContainer";
import {ANALYTICS_GROUP} from "../../constants/screenConstants";
import styles from './PerformanceScreen.module.scss';
import GuideListsContainer from "../../containers/GuideListsContainer";
import TeamPerformanceContainer from "../../containers/TeamPerformanceContainer";

const PerformanceScreen = () => {
    return (
        <LayoutWrapper
            className={styles.performanceScreenLayout}
        >
            <ScreenTitle
                title={ANALYTICS_GROUP.PERFORMANCE_SCREEN}
                slideTimeout={300}
                slideDirection={'down'}
            />
            <PerformanceOverviewContainer/>
            <PerformanceGraphContainer/>
            <TotalViewGraphContainer/>
            <GuideListsContainer/>
            <TeamPerformanceContainer/>
        </LayoutWrapper>
    );
};

export default PerformanceScreen;