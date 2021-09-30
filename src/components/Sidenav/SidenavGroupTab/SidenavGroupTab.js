import React from 'react';

import { useHistory } from 'react-router-dom';
import classNames from "classnames";

import * as AntDesignIcons from 'react-icons/ai';

import { getSidenavTabIconName } from "../../../constants/sidenavConstants";
import styles from './SidenavGroupTab.module.scss';
import {Tooltip} from "@mui/material";
import {capitalizeFirstLetter} from "../../../modules/util/stringManipulation";

const SidenavGroupTab = ({
    tabName,
    activeScreen,
    setActiveScreen,
    isSidebarCollapsed
}) => {
    const TabIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    const history = useHistory();

    const onTabClick = () => {
      setActiveScreen(tabName);
      history.push(tabName)
    };

    return (
        <Tooltip
            title={isSidebarCollapsed ? capitalizeFirstLetter(tabName) : ''}
            arrow={true}
            placement={'right'}
        >
            <div
                className={classNames(
                    styles.groupTab,
                    { [styles.groupTab__active]: activeScreen === tabName },
                    { [styles.groupTabCollapsedSidenav]: isSidebarCollapsed }
                )}
                onClick={onTabClick}
            >

                <TabIcon
                    size={22}
                    className={styles.groupTab__icon}
                />
                {!isSidebarCollapsed &&
                    <span className={styles.groupTab__groupTabName}>{capitalizeFirstLetter(tabName)}</span>
                }
            </div>
        </Tooltip>
    );
};

export default SidenavGroupTab;