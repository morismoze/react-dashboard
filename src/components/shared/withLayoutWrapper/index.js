import React, { useMemo } from 'react';

import { useSelector } from "react-redux";
import classNames from "classnames";

import styles from './WithLayoutWrapper.module.scss';

const WithLayoutWrapper = Children => {
    const user = useSelector(state => state.userReducer);
    const data = useSelector(state => state.mainReducer);

    /*
        Creating new component because if we put 'Children => props => {...}',
        this acts like a callback and React hooks (e.g. useSelector) can't be
        called inside callbacks.
    */

    const WithLayoutWrapperComponent = ({ className }) => {
        const isSidebarCollapsed = useSelector(state => state.navigationReducer.isSidebarCollapsed);

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

    return useMemo(() => {
        return WithLayoutWrapperComponent;
    }, [user, data]);
};

export default WithLayoutWrapper;

