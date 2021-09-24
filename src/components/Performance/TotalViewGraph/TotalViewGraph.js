import React, {useEffect, useState} from 'react';

import {Doughnut} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import Button from "../../Button/Button";
import {getSumOfArrayElements} from "../../../modules/util/general";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './TotalViewGraph.module.scss';

const TotalViewGraph = ({
    performance
}) => {
    const [ totalViews, setTotalViews ] = useState(0);

    const data = {
        type: 'doughnut',
        datasets: [{
            data: performance.views,
            backgroundColor: [
                colors.blue,
                colors.extraLightGray,
                colors.darkGreen,
                colors.golden
            ],
            borderWidth: 3
        }],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        rotation: 86 * Math.PI,
        circumference: 57 * Math.PI,
        cutout: 55
    };

    useEffect(() => {
        setTotalViews(getSumOfArrayElements(performance.views));
    }, []);

    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Total View Performance'}
            headerMenuChildren={true}
            className={styles.totalViewPerformance}
        >
            <div className={styles.totalViewPerformance__graphWrapper}>
                <Doughnut
                    data={data}
                    options={options}
                    className={styles.totalViewPerformance__graph}
                />
                <div className={styles.totalViewPerformance__totalViewsWrapper}>
                    <span className={styles.totalViewPerformance__totalViewsTitle}>
                        Total count
                    </span>
                    <span className={styles.totalViewPerformance__totalViewsValue}>
                        {totalViews}
                    </span>
                </div>
            </div>
            <span className={styles.totalViewPerformance__info}>
                Keep your info updated to increase the number of interactions.
            </span>
            <Button
                buttonText={'Guide Views'}
                backgroundFill={false}
            />
        </PerformanceCardLayoutWrapper>
    );
};

export default TotalViewGraph;