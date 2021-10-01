import React from 'react';

import {useHistory} from "react-router-dom";

import classNames from "classnames";
import * as AntDesignIcons from 'react-icons/ai';

import SidenavGroupTab from "../SidenavGroupTab/SidenavGroupTab";
import UserProfileIcon from '../../shared/UserProfileIcon/UserProfileIcon';
import {PREMIUM_STATUS} from "../../../constants/userConstants";
import styles from './SidenavUserTab.module.scss';

const SidenavUserTab = ({
    tabName,
    profileImage,
    userStatus,
    firstName,
    lastName,
    isSidebarCollapsed,
    activeScreen,
    setActiveScreen
}) => {
    const history = useHistory();

    const ArrowUpIcon = AntDesignIcons['AiOutlineUp'];
    const ArrowDownIcon = AntDesignIcons['AiOutlineDown'];

    if(isSidebarCollapsed) {
        return (
            <SidenavGroupTab
                tabName={tabName}
                isSidebarCollapsed={isSidebarCollapsed}
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
            />
        );
    }

    const onTabClick = () => {
        setActiveScreen(tabName);
        history.push(tabName)
    };

    return (
        <div
            className={styles.sidenavUserTab}
            onClick={onTabClick}
        >
            <UserProfileIcon
                iconSize={30}
                tabName={tabName}
            />
            <div className={styles.sidenavUserTab__usernameWrapper}>
                <span className={styles.sidenavUserTab__username}>{firstName} {lastName}</span>
                <span className={classNames({
                    [styles.sidenavUserTab__userStatus]: true,
                    [styles.sidenavUserTab__premiumUser]: userStatus === PREMIUM_STATUS
                })}>
                    {userStatus}
                </span>
            </div>
            <div className={styles.sidenavUserTab__toggleWrapper}>
                <ArrowUpIcon
                    size={9}
                    className={styles.sidenavUserTab__toggleIconUp}
                />
                <ArrowDownIcon
                    size={9}
                />
            </div>
        </div>
    );
};

export default SidenavUserTab;