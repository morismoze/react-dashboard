import React from 'react';

import classNames from 'classnames';

import ChangeBadge from '../../ChangeBadge/ChangeBadge';
import {CHECKLISTS, GUIDE_VIEWS, HOTSPOTS, MOST_ACTIVE_USERS} from '../../../constants/screenConstants';
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
            case GUIDE_VIEWS:
                return `Views (${value} ${intervalUnit})`;
            case CHECKLISTS:
                return `Guide Trigger (${value} ${intervalUnit})`;
            case HOTSPOTS:
                return `Interactions (${value} ${intervalUnit})`;
            case MOST_ACTIVE_USERS:
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
                        { [styles.performanceOverviewCard__usersTotal]: property === MOST_ACTIVE_USERS }
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