import React from 'react';

import * as AntDesignIcons from 'react-icons/ai';

import {getSidenavTabIconName} from '../../../constants/sidenavConstants';
import styles from './UserProfileIcon.module.scss';

const UserProfileIcon = ({
    tabName
}) => {
    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    return (
        <div className={styles.userProfileIcon}>
            <ProfileIcon
                size={22}
                className={styles.userProfileIcon__icon}
            />
        </div>
    );
};

export default UserProfileIcon;