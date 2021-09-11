import React from 'react';

import { AiOutlineLogout } from 'react-icons/ai';

import SidenavGroup from "../SidenavGroup/SidenavGroup";
import dashboardLogo from '../../../modules/images/logo/dashboard-logo.svg';
import { SIDENAV_GROUPS } from "../../../constants/screenConstants";
import styles from './Sidenav.module.scss';

const Sidenav = ({
    activeScreen,
    setActiveScreen
}) => {
    return (
        <nav className={styles.sidenav}>
            <img
                src={dashboardLogo}
                alt={'logo'}
                className={styles.sidenav__logo}
            />
            {Object.keys(SIDENAV_GROUPS).map(sidenavGroupKey => (
                <SidenavGroup
                    groupTitle={sidenavGroupKey}
                    groupTabs={SIDENAV_GROUPS[sidenavGroupKey]}
                    activeScreen={activeScreen}
                    setActiveScreen={setActiveScreen}
                    key={sidenavGroupKey}
                />
            ))}
        </nav>
    );
};

export default Sidenav;