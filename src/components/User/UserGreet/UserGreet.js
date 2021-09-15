import React from 'react';

import UserProfileIcon from "../UserProfileIcon/UserProfileIcon";
import {PROFILE_GROUP} from "../../../constants/screenConstants";
import styles from './UserGreet.module.scss';

const UserGreet = ({

}) => {
    return (
        <div className={styles.userGreet}>
            <UserProfileIcon
                iconSize={70}
                tabName={PROFILE_GROUP.PROFILE_SCREEN}
                progress={0.7}
            />
        </div>
    );
};

export default UserGreet;