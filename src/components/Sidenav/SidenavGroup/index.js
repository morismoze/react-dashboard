import React from 'react';

import SidenavGroupTab from "../SidenavGroupTab";
import styles from './SidenavGroup.module.scss';
import classNames from "classnames";

const SidenavGroup = ({
    groupTitle,
    groupTabs,
    activeScreen,
    setActiveScreen,
    isSidebarCollapsed
}) => {
    return (
        <div className={styles.tabsGroup}>
            <span
                className={classNames(
                    styles.tabsGroup__groupTitle,
                    { [styles.tabsGroup__groupTitleCollapsedSidenav]: isSidebarCollapsed }
                )}
            >
                {groupTitle}
            </span>
            <ul className={styles.tabsGroup__tabsList}>
                {Object.keys(groupTabs).map(tabKey => (
                    <li
                        className={styles.tabsGroup__tabListElement}
                        key={tabKey}
                    >
                        <SidenavGroupTab
                            tabName={groupTabs[tabKey]}
                            activeScreen={activeScreen}
                            setActiveScreen={setActiveScreen}
                            isSidebarCollapsed={isSidebarCollapsed}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidenavGroup;