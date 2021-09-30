import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import styles from './ProfileScreen.module.scss';

const ProfileScreen = () => {
    return (
        <LayoutWrapper
            className={styles.profileScreenScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default ProfileScreen;