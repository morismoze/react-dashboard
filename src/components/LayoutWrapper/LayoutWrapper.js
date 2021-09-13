import React from 'react';

import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({
    children
}) => {
    return (
        <div className={styles.screenWrapper}>
            {children}
        </div>
    );
};

export default LayoutWrapper;

