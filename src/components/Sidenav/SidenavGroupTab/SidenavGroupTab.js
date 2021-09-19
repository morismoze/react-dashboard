import React from 'react';
import { useHistory } from 'react-router-dom';

import * as AntDesignIcons from 'react-icons/ai';

import { getSidenavTabIconName } from "../../../constants/sidenavConstants";
import styles from './SidenavGroupTab.module.scss';
import classNames from "classnames";

const SidenavGroupTab = ({
    tabName,
    activeScreen,
    setActiveScreen
}) => {
    const TabIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    const history = useHistory();

    const onTabClick = () => {
      setActiveScreen(tabName);
      history.push(tabName)
    };

    return (
        <div
            className={classNames(
                styles.groupTab,
                { [styles.groupTab__active]: activeScreen === tabName }
            )}
            onClick={onTabClick}
        >
            <TabIcon
                size={22}
                className={styles.groupTab__icon}
            />
            <span className={styles.groupTab__groupTabName}>{tabName}</span>
        </div>
    );
};

export default SidenavGroupTab;