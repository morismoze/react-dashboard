import React from 'react';

import styles from './ScreenTitle.module.scss';

const ScreenTitle = ({
    title
}) => {
    return (
        <h1
            className={styles.screenTitle}
        >
            {title}
            <span className={styles.screenTitle__overview}>Overview</span>
        </h1>
    );
};

export default ScreenTitle;