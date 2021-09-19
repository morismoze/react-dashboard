import React from 'react';

import UserProfileIcon from "../UserProfileIcon/UserProfileIcon";
import {PROFILE_GROUP} from "../../../constants/screenConstants";
import {getCurrentHourWelcomeMessage} from "../../../modules/util/time";
import styles from './UserGreet.module.scss';

const UserGreet = ({
    firstName,
    lastName,
    activityGroup,
    progress
}) => {
    const welcomeMessage = getCurrentHourWelcomeMessage();

    return (
        <div className={styles.userGreet}>
            <UserProfileIcon
                iconSize={65}
                tabName={PROFILE_GROUP.PROFILE_SCREEN}
                progress={progress}
                firstName={firstName}
            />
            <div className={styles.userGreet__dataWrapper}>
                <div className={styles.userGreet__nameWrapper}>
                    <span className={styles.userGreet__welcome}>{welcomeMessage},</span>
                    <span className={styles.userGreet__name}>{firstName} {lastName}</span>
                </div>
                <span className={styles.userGreet__activityGroup}>{activityGroup}</span>
            </div>
        </div>
    );
};

export default UserGreet;