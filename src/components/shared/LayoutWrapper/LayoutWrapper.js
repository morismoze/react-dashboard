import React from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";

import styles from './LayoutWrapper.module.scss';

const LayoutWrapper = ({
    children,
    className
}) => {
    const isSidebarCollapsed = useSelector(state => state.navigationReducer.isSidebarCollapsed);

    return (
        <div
            className={classNames(
                styles.screenWrapper,
                { [styles.collapsedSidenav]: isSidebarCollapsed },
                className
            )}
        >
            {children}
        </div>
    );
};

export default LayoutWrapper;

