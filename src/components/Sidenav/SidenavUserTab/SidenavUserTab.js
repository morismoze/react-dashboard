import React from 'react';

import classNames from "classnames";
import * as AntDesignIcons from 'react-icons/ai';

import UserProfileIcon from '../../User/UserProfileIcon/UserProfileIcon';
import {PREMIUM_STATUS} from "../../../constants/userConstants";
import styles from './SidenavUserTab.module.scss';

const SidenavUserTab = ({
    tabName,
    username,
    profileImage,
    userStatus
}) => {
    const ArrowUpIcon = AntDesignIcons['AiOutlineUp'];
    const ArrowDownIcon = AntDesignIcons['AiOutlineDown'];

    return (
        <div className={styles.sidenavUserTab}>
            <UserProfileIcon
                tabName={tabName}
            />
            <div className={styles.sidenavUserTab__usernameWrapper}>
                <span className={styles.sidenavUserTab__username}>{username}</span>
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