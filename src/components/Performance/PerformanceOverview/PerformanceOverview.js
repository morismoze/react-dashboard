import React from 'react';

import PerformanceOverviewCard from "../PerformanceOverviewCard/PerformanceOverviewCard";
import styles from './PerformanceOverview.module.scss';

const PerformanceOverview = ({
    performance
}) => {
    return (
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
    );
}

export default PerformanceOverview;