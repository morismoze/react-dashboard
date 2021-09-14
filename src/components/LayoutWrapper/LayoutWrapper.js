import React from 'react';

import styles from './LayoutWrapper.module.scss';
import classNames from "classnames";

const LayoutWrapper = ({
    children,
    className
}) => {
    return (
        <div
            className={classNames(
                className,
                styles.screenWrapper
            )}
        >
            {children}
        </div>
    );
};

export default LayoutWrapper;

