import React from 'react';

import Fade from '@mui/material/Fade';

import PerformanceOverviewCard from "../PerformanceOverviewCard";
import styles from './PerformanceOverview.module.scss';

const PerformanceOverview = ({
    performance
}) => {
    return (
        <Fade
            in={true}
            timeout={650}
        >
            <div className={styles.performanceOverviewWrapper}>
                {Object.keys(performance.overview).map(statName => {
                    return <PerformanceOverviewCard
                      property={statName}
                      total={performance.overview[statName].total}
                      change={performance.overview[statName].change}
                      interval={performance.overview[statName].interval}
                      key={statName}
                    />
                })}
            </div>
        </Fade>
    );
}

export default PerformanceOverview;