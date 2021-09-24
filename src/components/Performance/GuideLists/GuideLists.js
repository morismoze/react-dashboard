import React from 'react';

import {Line} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './GuideLists.module.scss';

const GuideLists = ({
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
            cardTitle={'Guide Lists'}
            headerMenuChildren={true}
        >
            {/*<Line
                data={data}
                options={options}
                className={styles.performanceGraphWrapper__graph}
            />*/}
        </PerformanceCardLayoutWrapper>
    );
};

export default GuideLists;