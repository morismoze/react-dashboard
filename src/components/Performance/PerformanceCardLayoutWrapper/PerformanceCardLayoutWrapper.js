import React from 'react';

import styles from './PerformanceCardLayoutWrapper.module.scss';

const PerformanceCardLayoutWrapper = ({
    children,
    cardTitle,
    headerChildren,
    footerChildren,
    headerMenu = true
}) => {
    return (
        <div className={styles.performanceCardLayoutWrapper}>
            <div className={styles.performanceCardLayoutWrapper__header}>
                <span className={styles.performanceCardLayoutWrapper__cardTitle}> {cardTitle}</span>
                {headerChildren}
                {headerMenu &&
                <span className={styles.performanceCardLayoutWrapper__menu}>
                    <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                    <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                    <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                </span>
                }
            </div>
            <div className={styles.performanceCardLayoutWrapper__childrenWrapper}>
                {children}
            </div>
            {footerChildren &&
                <div className={styles.performanceCardLayoutWrapper__footer}>
                    {footerChildren}
                </div>
            }
        </div>
    );
};

export default PerformanceCardLayoutWrapper;