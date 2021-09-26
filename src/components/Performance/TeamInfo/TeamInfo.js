import React from 'react';

import {getRandomColor} from "../../../modules/util/style";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './TeamInfo.module.scss';

const TeamInfo = ({
    teamName,
    performancePercentage,
    views
}) => {
    const randomBorderColor = getRandomColor(colors);

    return (
        <div
            className={styles.teamInfo}
            line-color={randomBorderColor}
        >
            <span
                className={styles.teamInfo__name}
                title={teamName}
            >
                {teamName}
            </span>
            <div className={styles.teamInfo__dataWrapper}>
                <span className={styles.teamInfo__performancePercentage}>{performancePercentage} %</span>
                <span className={styles.teamInfo__dataBullet}/>
                <span className={styles.teamInfo__views}>{views} views</span>
            </div>
        </div>
    );
};

export default TeamInfo;