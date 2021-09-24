import React from 'react';

import {Line} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import {TEAM_PERFORMANCE_CARD_TITLE} from "../../../constants/screenConstants";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './TeamPerformance.module.scss';

const TeamPerformance = ({
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
        <PerformanceCardLayoutWrapper
            cardTitle={TEAM_PERFORMANCE_CARD_TITLE}
        >
            {/*<Line
                data={data}
                options={options}
                className={styles.performanceGraphWrapper__graph}
            />*/}
        </PerformanceCardLayoutWrapper>
    );
};

export default TeamPerformance;