import React from 'react';

import LayoutWrapper from "../../components/shared/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './Hotspots.module.scss';

const HotspotsScreen = () => {
    return (
        <LayoutWrapper
            className={styles.hotspotsScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default HotspotsScreen;