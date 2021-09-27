import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import styles from './NpsScreen.module.scss';

const NpsScreen = () => {
    return (
        <LayoutWrapper
            className={styles.npsScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default NpsScreen;