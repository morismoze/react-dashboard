import React, {useEffect, useState} from 'react';

import * as AntDesignIcons from 'react-icons/ai';

import {getSidenavTabIconName} from '../../../constants/sidenavConstants';
import colors from '../../../modules/styles/colors.module.scss';
import styles from './UserProfileIcon.module.scss';

const UserProfileIcon = React.forwardRef(({
    tabName,
    iconSize,
    progress
}, ref) => {
    const [ timedOutProgress, setTimedOutProgress ] = useState();

    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    useEffect(() => {
        setTimeout(() => setTimedOutProgress(progress), 500);
    }, [])

    if (progress) {
        return (
            <div
                className={styles.userProfileProgressWrapper}
                style={{
                    width: iconSize,
                    height: iconSize,
                    minWidth: iconSize,
                    minHeight: iconSize,
                    background:
                        `conic-gradient(${colors.blue} 0deg, ${colors.blue} ${timedOutProgress * 360}deg, transparent ${360 * timedOutProgress}deg)`
                }}
                ref={ref}
                title={`Your progress: ${timedOutProgress * 100}%`}
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
            ref={ref}
        >
            <ProfileIcon
                size={iconSize - 12}
                className={styles.userProfileIcon__icon}
            />
        </div>
    );
});

export default UserProfileIcon;