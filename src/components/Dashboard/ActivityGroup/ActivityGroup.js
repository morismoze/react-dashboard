import React from 'react';

import styles from './ActivityGroup.module.scss';

const ActivityGroup = React.forwardRef(({
    activityGroup
}, ref) => {
    return (
        <span
            className={styles.activityGroup}
            ref={ref}
        >
            {activityGroup}
        </span>
    );
});

export default ActivityGroup;