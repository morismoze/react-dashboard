import React from 'react';

import UserProfileIcon from "../UserProfileIcon/UserProfileIcon";
import {PROFILE_GROUP} from "../../../constants/screenConstants";
import styles from './UserGreet.module.scss';

const UserGreet = ({

}) => {
    return (
        <div className={styles.userGreet}>
            <UserProfileIcon
                iconSize={50}
                tabName={PROFILE_GROUP.PROFILE_SCREEN}
            />
        </div>
    );
};

export default UserGreet;