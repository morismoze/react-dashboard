import React from 'react';

import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import styles from './ThemesScreen.module.scss';

const ThemesScreen = () => {
    return (
        <LayoutWrapper
            className={styles.themesScreenLayout}
        >
            <ComingSoon/>
        </LayoutWrapper>
    );
};

export default ThemesScreen;