import React from 'react';

import {Line} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './PerformanceGraph.module.scss';
import BulletPoint from "../../BulletLabel/BulletLabel";

const PerformanceGraph = ({
    performance
}) => {
    const data = {
        datasets: [{
            data: performance.views
        }, {
            data: performance.completion,
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        }
    };

    const headerChildren = (
        <div className={styles.performanceGraphWrapper__labelsWrapper}>
            <BulletPoint
                bulletText={'View Count'}
                bulletBackgroundColor={colors.blue}
                className={styles.performanceGraphWrapper__viewCountLabel}
            />
            <BulletPoint
                bulletText={'Completion Count'}
                bulletBackgroundColor={colors.lightGray}
            />
        </div>
    );

    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Guide Performance'}
            headerChildren={headerChildren}
        >
            {/*<Line
                data={data}
                options={options}
                className={styles.performanceGraphWrapper__graph}
            />*/}
        </PerformanceCardLayoutWrapper>
    );
};

export default PerformanceGraph;