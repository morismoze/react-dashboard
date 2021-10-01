import React from 'react';

import LayoutWrapper from "../../components/shared/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './SettingsScreen.module.scss';

const SettingsScreen = () => {
    return (
        <LayoutWrapper
            className={styles.settingsScreenScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default SettingsScreen;