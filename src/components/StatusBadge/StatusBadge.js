import React from 'react';

import classNames from "classnames";

import {DISABLED_STATUS, LIVE_STATUS} from "../../constants/screenConstants";
import styles from './StatusBadge.module.scss';

const StatusBadge = ({
    status
}) => {
    return (
        <div className={styles.statusBadge}>
            <div className={styles.statusBadge__bullet}/>
            <span
                className={classNames(
                    { [status === LIVE_STATUS]: styles.statusBadge__statusLive },
                    { [status === DISABLED_STATUS]: styles.statusBadge__disabledStatus}
                )}
            >
                {status}
            </span>
        </div>
    );
};

export default StatusBadge;