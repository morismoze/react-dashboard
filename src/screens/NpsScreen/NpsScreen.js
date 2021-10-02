import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './NpsScreen.module.scss';

const NpsScreen = () => {
    const NpsScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <NpsScreenWithLayoutWrapper className={styles.npsScreenLayout}/>
    );
};

export default NpsScreen;