import React from 'react';

import SidenavGroup from "../SidenavGroup/SidenavGroup";
import SidenavGroupTab from "../SidenavGroupTab/SidenavGroupTab";
import SidenavUserTab from "../SidenavUserTab/SidenavUserTab";
import dashboardLogo from '../../../modules/images/logo/dashboard-logo.svg';
import {LOG_GROUP, PROFILE_GROUP, SETTINGS_GROUP, SIDENAV_GROUPS} from "../../../constants/screenConstants";
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
            <SidenavUserTab
                tabName={PROFILE_GROUP.PROFILE_SCREEN}
                profileImage={'higherOrderComponent'}
                username={'Moris Moze'}
                premiumUser={true}
            />
            <SidenavGroupTab
                tabName={SETTINGS_GROUP.SETTINGS_SCREEN}
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
            />
            <SidenavGroupTab
                tabName={LOG_GROUP.LOGOUT_SCREEN}
                activeScreen={activeScreen}
                setActiveScreen={setActiveScreen}
            />
        </nav>
    );
};

export default Sidenav;