import React from 'react';

import classNames from "classnames";
import Fade from '@mui/material/Fade';

import styles from './PerformanceCardLayoutWrapper.module.scss';

const PerformanceCardLayoutWrapper = ({
    children,
    cardTitle,
    headerChildren,
    footerChildren,
    headerMenuChildren,
    className,
    fadeTimeout
}) => {
    const handleOnMenuClick = () => {
        // @todo: implement showing menu
        // @todo: make menuLayoutWrapper and menuLayoutItem
    };

    return (
        <Fade
            in={true}
            timeout={fadeTimeout}
        >
            <div className={styles.performanceCardLayoutWrapper}>
                <div className={styles.performanceCardLayoutWrapper__header}>
                    <span className={styles.performanceCardLayoutWrapper__cardTitle}> {cardTitle}</span>
                    {headerChildren}
                    {headerMenuChildren &&
                        <span
                            className={styles.performanceCardLayoutWrapper__menu}
                            onClick={handleOnMenuClick}
                        >
                            <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                            <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                            <span className={styles.performanceCardLayoutWrapper__menuDot}/>
                        </span>
                    }
                </div>
                <div className={classNames(
                    styles.performanceCardLayoutWrapper__childrenWrapper,
                    { [styles.performanceCardLayoutWrapper__childrenWrapperNoFooter]: !footerChildren },
                    className
                )}>
                    {children}
                </div>
                {footerChildren &&
                    <div className={styles.performanceCardLayoutWrapper__footer}>
                        {footerChildren}
                    </div>
                }
            </div>
        </Fade>
    );
};

export default PerformanceCardLayoutWrapper;