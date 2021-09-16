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

    const ICON_SIZE = progress ? iconSize - 30 : iconSize - 12;
    const PROGRESS_CIRCLE_STROKE_WIDTH = 3;
    const PROGRESS_WRAPPER_SIZE = iconSize;
    const PROGRESS_CIRCLE_SIZE = PROGRESS_WRAPPER_SIZE / 2;
    const PROGRESS_RADIUS_SIZE = PROGRESS_CIRCLE_SIZE - (PROGRESS_CIRCLE_STROKE_WIDTH * 2);

    const circumference = PROGRESS_RADIUS_SIZE * 2 * Math.PI;
    const offset = circumference - progress * circumference;

    if(progress) {
        return (
            <div className={styles.userProfileProgressWrapper}>
                <svg
                    className={styles.userProfileProgressWrapper__userProfileSvg}
                    width={PROGRESS_WRAPPER_SIZE}
                    height={PROGRESS_WRAPPER_SIZE}
                >
                    <circle
                        className={styles.userProfileProgressWrapper__progressBarCircle}
                        strokeWidth={PROGRESS_CIRCLE_STROKE_WIDTH}
                        r={PROGRESS_RADIUS_SIZE}
                        cx={PROGRESS_CIRCLE_SIZE}
                        cy={PROGRESS_CIRCLE_SIZE}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>
                <ProfileIcon
                    size={ICON_SIZE}
                    className={styles.userProfileProgressWrapper__iconProgress}
                />
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
                size={ICON_SIZE}
                className={styles.userProfileIcon__icon}
            />
        </div>
    );
};

export default UserProfileIcon;