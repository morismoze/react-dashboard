import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './HotspotsScreen.module.scss';

const HotspotsScreen = () => {
    const HotspotsScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <HotspotsScreenWithLayoutWrapper className={styles.hotspotsScreenLayout}/>
    );
};

export default HotspotsScreen;