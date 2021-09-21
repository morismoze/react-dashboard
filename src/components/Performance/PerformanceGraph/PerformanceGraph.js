import React from 'react';

import {Line} from 'react-chartjs-2';

import styles from './PerformanceGraph.module.scss';
import colors from '../../../modules/styles/colors.module.scss';

const PerformanceGraph = ({
    performance
}) => {
    const data = {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 50, 50, 50],
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
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
                <Line
                    data={data}
                    options={options}
                    className={styles.performanceGraphWrapper__graph}
                />
            </div>
        </div>
    );
};

export default PerformanceGraph;