import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon";
import styles from './SegmentsScreen.module.scss';

const SegmentsScreen = () => {
    const SegmentsScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <SegmentsScreenWithLayoutWrapper className={styles.segmentsScreenScreenLayout}/>
    );
};

export default SegmentsScreen;