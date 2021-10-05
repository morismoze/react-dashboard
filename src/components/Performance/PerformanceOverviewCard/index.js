import React from 'react';

import classNames from 'classnames';

import ChangeBadge from '../../shared/ChangeBadge';
import {
    CHECKLISTS_OVERVIEW_SUBTITLE,
    GUIDE_VIEWS_OVERVIEW_SUBTITLE,
    HOTSPOTS_OVERVIEW_SUBTITLE,
    MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE
} from '../../../constants/screenConstants';
import styles from './PerformanceOverviewCard.module.scss';

const PerformanceOverviewCard = ({
    property,
    total,
    change,
    interval
}) => {
    const getIntervalText = (property, { value, unit }) => {
        const intervalUnit = unit === 'day' ? 'Days' : 'Years';

        switch (property) {
            case GUIDE_VIEWS_OVERVIEW_SUBTITLE:
                return `Views (${value} ${intervalUnit})`;
            case CHECKLISTS_OVERVIEW_SUBTITLE:
                return `Guide Trigger (${value} ${intervalUnit})`;
            case HOTSPOTS_OVERVIEW_SUBTITLE:
                return `Interactions (${value} ${intervalUnit})`;
            case MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE:
                return `(Last ${value} ${intervalUnit})`;
            default:
                return;
        }
    };

    const intervalText = getIntervalText(property, interval);

    return (
        <div className={styles.performanceOverviewCard}>
            <span className={styles.performanceOverviewCard__title}>
                {property}
            </span>
            <div className={styles.performanceOverviewCard__valuesWrapper}>
                <span
                    className={classNames(
                        styles.performanceOverviewCard__total,
                        { [styles.performanceOverviewCard__usersTotal]: property === MOST_ACTIVE_USERS_OVERVIEW_SUBTITLE }
                    )}
                >
                    {total}
                </span>
                <ChangeBadge change={change}/>
            </div>
            <span className={styles.performanceOverviewCard__interval}>{intervalText}</span>
        </div>
    );
};

export default PerformanceOverviewCard;