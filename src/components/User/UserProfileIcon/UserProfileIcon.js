import React from 'react';

import * as AntDesignIcons from 'react-icons/ai';

import {getSidenavTabIconName} from '../../../constants/sidenavConstants';
import styles from './UserProfileIcon.module.scss';

const UserProfileIcon = ({
    tabName,
    iconSize,
    progress
}) => {
    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    return (
        <div
            className={styles.userProfileIcon}
            style={{
                width: iconSize,
                height: iconSize
            }}
        >
            <ProfileIcon
                size={iconSize - 10}
                className={styles.userProfileIcon__icon}
            />
        </div>
    );
};

export default UserProfileIcon;