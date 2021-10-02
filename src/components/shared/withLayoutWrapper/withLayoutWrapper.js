import React from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";

import styles from './withLayoutWrapper.module.scss';

const WithLayoutWrapper = Children => {
    const isSidebarCollapsed = useSelector(state => state.navigationReducer.isSidebarCollapsed);

    const WithLayoutWrapperComponent = ({ className }) => {
        return (
            <div
                className={classNames(
                    styles.screenWrapper,
                    {[styles.collapsedSidenav]: isSidebarCollapsed},
                    className
                )}
            >
                <Children/>
            </div>
        )
    };

    return WithLayoutWrapperComponent;
};

export default WithLayoutWrapper;

