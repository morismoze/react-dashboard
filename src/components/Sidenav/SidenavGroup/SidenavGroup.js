import React from 'react';

import SidenavGroupTab from "../SidenavGroupTab/SidenavGroupTab";
import styles from './SidenavGroup.module.scss';
import classNames from "classnames";

const SidenavGroup = ({
    groupTitle,
    groupTabs,
    activeScreen,
    setActiveScreen
}) => {
    return (
        <div className={styles.tabsGroup}>
            <span className={styles.tabsGroup__groupTitle}>{groupTitle}</span>
            <ul className={styles.tabsGroup__tabsList}>
                {Object.keys(groupTabs).map(tabKey => (
                    <li
                        className={classNames(
                            styles.tabsGroup__tabListElement,
                            activeScreen === groupTabs[tabKey] ? styles.tabsGroup__active : ''
                        )}
                        key={tabKey}
                    >
                        <SidenavGroupTab
                            tabName={groupTabs[tabKey]}
                            activeScreen={activeScreen}
                            setActiveScreen={setActiveScreen}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidenavGroup;