import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import styles from './GuidesScreen.module.scss';

const GuidesScreen = () => {
    return (
        <LayoutWrapper
            className={styles.guidesScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default GuidesScreen;