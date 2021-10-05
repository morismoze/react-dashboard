import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ScreenTitle from "../../components/shared/ScreenTitle/ScreenTitle";
import PerformanceOverviewContainer from "../../containers/PerformanceOverviewContainer";
import PerformanceGraphContainer from "../../containers/PerformanceGraphContainer";
import TotalViewGraphContainer from "../../containers/TotalViewGraphContainer";
import GuideListsContainer from "../../containers/GuideListsContainer";
import TeamPerformanceContainer from "../../containers/TeamPerformanceContainer";
import { ANALYTICS_GROUP } from "../../constants/screenConstants";
import styles from './PerformanceScreen.module.scss';

const PerformanceScreen = () => {
    const Children = () => (
        <>
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
        </>
    );

    const PerformanceScreenWithLayoutWrapper = WithLayoutWrapper(Children);

    return (
        <PerformanceScreenWithLayoutWrapper className={styles.performanceScreenLayout}/>
    );
};

export default PerformanceScreen;