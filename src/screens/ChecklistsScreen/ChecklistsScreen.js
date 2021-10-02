import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './ChecklistsScreen.module.scss';

const ChecklistsScreen = () => {
    const ChecklistsScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <ChecklistsScreenWithLayoutWrapper className={styles.checklistsScreenLayout}/>
    );
};

export default ChecklistsScreen;