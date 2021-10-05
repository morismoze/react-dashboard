import React, { useEffect, useState } from 'react';

import * as AntDesignIcons from 'react-icons/ai';
import { AiOutlineUser } from "react-icons/all";

import { getSidenavTabIconName } from '../../../constants/sidenavConstants';
import styles from './UserProfileIcon.module.scss';

const UserProfileIcon = React.forwardRef(({
    tabName,
    iconSize,
    progress
}, ref) => {
    const [ timedOutProgress, setTimedOutProgress ] = useState();

    const ProfileIcon = AntDesignIcons[getSidenavTabIconName(tabName)];

    useEffect(() => {
        setTimeout(() => setTimedOutProgress(1 - progress), 500);
    }, [progress]);

    const BAR_WIDTH = 4;
    const CENTER = iconSize / 2;
    const CIRCLE_RADIUS = CENTER - BAR_WIDTH;
    const DASHARRAY = 2 * CIRCLE_RADIUS * Math.PI;
    const DASHOFFSET = DASHARRAY * timedOutProgress;

    if (progress) {
        return (
            <div
                className={styles.userProfileProgress}
                style={{
                    width: iconSize,
                    height: iconSize
                }}
                ref={ref}
                title={`Your progress: ${progress * 100}%`}
            >
                <svg
                    className={styles.userProfileProgress__rail}
                    viewBox={`0 0 ${iconSize} ${iconSize}`}
                    xmlns={'http://www.w3.org/2000/svg'}
                    width={iconSize}
                    height={iconSize}
                >
                    <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={CIRCLE_RADIUS}
                    />
                </svg>
                <svg
                    className={styles.userProfileProgress__bar}
                    viewBox={`0 0 ${iconSize} ${iconSize}`}
                    xmlns={'http://www.w3.org/2000/svg'}
                    width={iconSize}
                    height={iconSize}
                    strokeWidth={BAR_WIDTH}
                >
                    <circle
                        cx={CENTER}
                        cy={CENTER}
                        r={CIRCLE_RADIUS}
                        strokeWidth={BAR_WIDTH}
                        strokeDasharray={DASHARRAY}
                        strokeDashoffset={DASHOFFSET && DASHOFFSET}
                    />
                </svg>
                <AiOutlineUser
                    className={styles.userProfileProgress__icon}
                    size={iconSize / 2}
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