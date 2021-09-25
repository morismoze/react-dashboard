import React from 'react';

import classNames from "classnames";

import {DISABLED_STATUS, LIVE_STATUS} from "../../constants/screenConstants";
import styles from './StatusBadge.module.scss';

const StatusBadge = ({
    status
}) => {
    return (
        <div
            className={classNames(
                styles.statusBadge,
                { [styles.statusLive]: status === LIVE_STATUS },
                { [styles.statusDisabled]: status === DISABLED_STATUS}
            )}
            title={status}
        >
            <div className={styles.statusBadge__bullet}/>
            <span className={styles.statusBadge__status}>
                {status}
            </span>
        </div>
    );
};

export default StatusBadge;