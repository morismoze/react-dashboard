import React from 'react';

import {Line} from 'react-chartjs-2';

import styles from './PerformanceGraph.module.scss';
import colors from '../../../modules/styles/colors.module.scss';

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

    return (
        <div className={styles.performanceGraphWrapper}>
            <div className={styles.performanceGraphWrapper__graphHeader}>
                <span className={styles.performanceGraphWrapper__graphHeaderTitle}>Guide Performance</span>
                <div className={styles.performanceGraphWrapper__labelsWrapper}>
                    <span className={styles.performanceGraphWrapper__viewCountLabel}>View Count</span>
                    <span className={styles.performanceGraphWrapper__completionCountLabel}>Completion Count</span>
                </div>
            </div>
            <div className={styles.performanceGraphWrapper__graphWrapper}>
                {/*<Line
                    data={data}
                    options={options}
                    className={styles.performanceGraphWrapper__graph}
                />*/}
            </div>
        </div>
    );
};

export default PerformanceGraph;