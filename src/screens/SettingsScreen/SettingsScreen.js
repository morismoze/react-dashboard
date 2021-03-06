import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon";
import styles from './SettingsScreen.module.scss';

const SettingsScreen = () => {
    const SettingsScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <SettingsScreenWithLayoutWrapper className={styles.settingsScreenScreenLayout}/>
    );
};

export default SettingsScreen;