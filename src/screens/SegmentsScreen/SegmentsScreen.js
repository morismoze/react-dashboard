import React from 'react';

import LayoutWrapper from "../../components/shared/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './SegmentsScreen.module.scss';

const SegmentsScreen = () => {
    return (
        <LayoutWrapper
            className={styles.segmentsScreenScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default SegmentsScreen;