import React from 'react';

import WithLayoutWrapper from "../../components/shared/withLayoutWrapper/withLayoutWrapper";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import styles from './ThemesScreen.module.scss';

const ThemesScreen = () => {
    const ThemesScreenWithLayoutWrapper = WithLayoutWrapper(ComingSoon);

    return (
        <ThemesScreenWithLayoutWrapper className={styles.themesScreenLayout}/>
    );
};

export default ThemesScreen;