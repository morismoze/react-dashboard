import React from 'react';

import LayoutWrapper from "../../components/shared/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './ChecklistsScreen.module.scss';

const ChecklistsScreen = () => {
    return (
        <LayoutWrapper
            className={styles.checklistsScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default ChecklistsScreen;