import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './ProfileScreen.module.scss';

const ProfileScreen = () => {
    const ProfileScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <ProfileScreenWithLayoutWrapper className={styles.profileScreenScreenLayout}/>
    );
};

export default ProfileScreen;