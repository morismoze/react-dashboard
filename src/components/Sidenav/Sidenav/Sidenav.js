import React from 'react';

import {Slide} from "@mui/material";

import SidenavGroup from "../SidenavGroup/SidenavGroup";
import SidenavGroupTab from "../SidenavGroupTab/SidenavGroupTab";
import SidenavUserTab from "../SidenavUserTab/SidenavUserTab";
import dashboardLogo from '../../../modules/images/logo/dashboard-logo.svg';
import {LOG_GROUP, PROFILE_GROUP, SETTINGS_GROUP, SIDENAV_GROUPS} from "../../../constants/screenConstants";
import styles from './Sidenav.module.scss';

const Sidenav = ({
    activeScreen,
    setActiveScreen,
    firstName,
    lastName,
    userStatus
}) => {
    return (
        <Slide
            direction={'right'}
            in={true}
            appear={true}
            timeout={300}
        >
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
                    firstName={firstName}
                    lastName={lastName}
                    userStatus={userStatus}
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
        </Slide>
    );
};

export default Sidenav;