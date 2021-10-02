import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './GuidesScreen.module.scss';

const GuidesScreen = () => {
    const GuidesScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <GuidesScreenWithLayoutWrapper className={styles.guidesScreenLayout}/>
    );
};

export default GuidesScreen;