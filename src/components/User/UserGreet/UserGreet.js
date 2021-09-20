import React, {useEffect, useState} from 'react';

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
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        setWelcomeMessage(getCurrentHourWelcomeMessage());
    }, []);

    return (
        <div className={styles.userGreet}>
            <UserProfileIcon
                iconSize={55}
                tabName={PROFILE_GROUP.PROFILE_SCREEN}
                progress={progress * 100}
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