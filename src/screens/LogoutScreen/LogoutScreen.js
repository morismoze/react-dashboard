import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import styles from './LogoutScreen.module.scss';

const LogoutScreen = () => {
    return (
        <LayoutWrapper
            className={styles.logoutScreen}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default LogoutScreen;