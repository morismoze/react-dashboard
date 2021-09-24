import React from 'react';

import * as AntDesignIcons from 'react-icons/ai';

import {getSidenavTabIconName} from '../../../constants/sidenavConstants';
import colors from '../../../modules/styles/colors.module.scss';
import styles from './UserProfileIcon.module.scss';

const UserProfileIcon = ({
    tabName,
    iconSize,
    progress
}) => {
    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    if (progress) {
        return (
            <div
                className={styles.userProfileProgressWrapper}
                style={{
                    width: iconSize,
                    height: iconSize,
                    minWidth: iconSize,
                    minHeight: iconSize,
                    background: `conic-gradient(${colors.blue} 0% ${progress}%, transparent 0% ${progress}%)`
                }}
            >
                <div
                    className={styles.userProfileProgressWrapper__inner}
                    style={{
                        width: iconSize - 6,
                        height: iconSize - 6,
                    }}
                >
                    <ProfileIcon
                        size={iconSize - 20}
                        className={styles.userProfileProgressWrapper__iconProgress}
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            className={styles.userProfileIcon}
            style={{
                width: iconSize,
                height: iconSize,
            }}
        >
            <ProfileIcon
                size={iconSize - 12}
                className={styles.userProfileIcon__icon}
            />
        </div>
    );
};

export default UserProfileIcon;