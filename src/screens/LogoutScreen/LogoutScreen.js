import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon";
import styles from './LogoutScreen.module.scss';

const LogoutScreen = () => {
    const LogoutScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <LogoutScreenWithLayoutWrapper className={styles.logoutScreenLayout}/>
    );
};

export default LogoutScreen;