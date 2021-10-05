import React, { useEffect, useState } from 'react';

import { Doughnut } from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper";
import Button from "../../shared/Button";
import BulletPoint from "../../shared/BulletLabel";
import { GUIDE_VIEWS_OVERVIEW_SUBTITLE } from "../../../constants/screenConstants";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './TotalViewGraph.module.scss';

const TotalViewGraph = ({
    performance
}) => {
    const [ currentIntervalTotalViews, setCurrentIntervalTotalViews ] = useState(0);

    const [ previousIntervalViews, setPreviousIntervalViews ] = useState(0);

    const data = {
        type: 'doughnut',
        datasets: [{
            data: [currentIntervalTotalViews, previousIntervalViews],
            backgroundColor: [
                colors.blue,
                colors.cyan
            ],
            borderWidth: 5,
            hoverOffset: 5
        }]
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
        cutout: 60
    };

    const footerChildren = (
        <div className={styles.totalViewPerformance__footer}>
            <BulletPoint
                bulletText={'Current Week View Count'}
                bulletBackgroundColor={colors.blue}
                bulletSize={8}
                bulletTextSize={12}
                bulletTextColor={colors.lightGray}
                className={styles.totalViewPerformance__currentWeekViewCountLabel}
            />
            <BulletPoint
                bulletText={'Last Week View Count'}
                bulletSize={8}
                bulletTextSize={12}
                bulletTextColor={colors.lightGray}
                bulletBackgroundColor={colors.cyan}
            />
        </div>
    );

    useEffect(() => {
        setCurrentIntervalTotalViews(performance.overview[GUIDE_VIEWS_OVERVIEW_SUBTITLE].total);
        setPreviousIntervalViews(performance.totalView.previousIntervalViews.total);
    }, []);

    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Total View Performance'}
            headerMenuChildren={true}
            footerChildren={footerChildren}
            className={styles.totalViewPerformance}
            fadeTimeout={650}
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
                        {currentIntervalTotalViews}
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