import React from 'react';

import {Line} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './PerformanceGraph.module.scss';
import BulletPoint from "../../BulletLabel/BulletLabel";

const PerformanceGraph = ({
    performance
}) => {
    const data = canvas => {
        const ctx = canvas.getContext("2d");
        const height = ctx.canvas.clientHeight;
        const gradient = ctx.createLinearGradient(0, 0, 0, height * 1.1);
        gradient.addColorStop(0, 'rgba(54, 97, 237, 0.1)');
        gradient.addColorStop(1, 'rgba(248, 249, 253, 0.2)');

        return {
            datasets: [{
                label: 'Views',
                data: performance.guide.views,
                fill: true,
                backgroundColor: gradient,
                borderColor: colors.blue,
                borderDash: [], // try [5, 15] for instance - dashed line
                borderDashOffset: 0.0,
                lineTension: 0.3,
                pointBorderColor: 'rgba(0, 0, 0, 0)'
            }, {
                label: 'Completion',
                data: performance.guide.completion,
                borderColor: colors.extraLightGray,
                lineTension: 0.3,
                fill: true,
                backgroundColor: 'rgba(0, 0, 0, .015)',
                pointBorderColor: 'rgba(0, 0, 0, 0)'

            }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
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
                bulletBackgroundColor={colors.extraLightGray}
            />
        </div>
    );

    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Guide Performance'}
            headerChildren={headerChildren}
            fadeTimeout={650}
        >
            <Line
                data={data}
                options={options}
                className={styles.performanceGraphWrapper__graph}
            />
        </PerformanceCardLayoutWrapper>
    );
};

export default PerformanceGraph;