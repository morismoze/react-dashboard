import React from 'react';

import styles from './SidenavUserTab.module.scss';
import * as AntDesignIcons from "react-icons/ai";
import { getSidenavTabIconName } from "../../../constants/sidenavConstants";

const SidenavUserTab = ({
    tabName,
    username,
    profileImage,
    premiumUser
}) => {
    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];
    const ArrowUpIcon = AntDesignIcons['AiOutlineUp'];
    const ArrowDownIcon = AntDesignIcons['AiOutlineDown'];

    return (
        <div className={styles.sidenavUserTab}>
            <ProfileIcon
                size={22}
                className={styles.sidenavUserTab__icon}
            />
            <div className={styles.sidenavUserTab__usernameWrapper}>
                <span className={styles.sidenavUserTab__username}>{username}</span>
                <span className={styles.sidenavUserTab__userRole}>
                    {premiumUser ? 'Premium user' : 'Normal user'}
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