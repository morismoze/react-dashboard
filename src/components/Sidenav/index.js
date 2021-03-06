import React from 'react';

import classNames from "classnames";
import { Slide } from "@mui/material";
import { Tooltip } from "@mui/material";
import { AiOutlineDoubleLeft } from "react-icons/all";

import SidenavGroup from "./SidenavGroup";
import SidenavGroupTab from "./SidenavGroupTab";
import SidenavUserTab from "./SidenavUserTab";
import { LOG_GROUP, PROFILE_GROUP, SETTINGS_GROUP, SIDENAV_GROUPS } from "../../constants/screenConstants";
import { useWindowSize } from "../../hooks/useWindowSize";
import dashboardLogo from '../../modules/images/logo/dashboard-logo.svg';
import breakpoints from '../../modules/styles/breakpoints.module.scss';
import styles from './Sidenav.module.scss';

const Sidenav = ({
    activeScreen,
    setActiveScreen,
    firstName,
    lastName,
    userStatus,
    isSidebarCollapsed,
    toggleSidebar
}) => {
    const { width } = useWindowSize();

    const isSidenavShown = width > breakpoints.large.split('p')[0];

    return (
        <Slide
            direction={'right'}
            in={isSidenavShown}
            appear={!isSidebarCollapsed}
            timeout={300}
        >
            <div>
                <nav
                    className={classNames(
                        styles.sidenav,
                        { [styles['sidenav--collapsed']]: isSidebarCollapsed }
                    )}
                >
                    <div
                        className={classNames(
                            styles.sidenav__header,
                            { [styles['sidenav--collapsed__header']]: isSidebarCollapsed }
                        )}
                    >
                        <img
                            src={dashboardLogo}
                            alt={'logo'}
                            className={classNames(
                                styles.sidenav__logo,
                                { [styles['sidenav--collapsed__logo']]: isSidebarCollapsed }
                            )}
                        />
                        <Tooltip title={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
                            <div
                                className={classNames(
                                    styles.sidenav__collapseIconWrapper,
                                    { [styles['sidenav--collapsed__collapseIconWrapper']]: isSidebarCollapsed }
                                )}
                                onClick={toggleSidebar}
                            >
                                    <AiOutlineDoubleLeft
                                        className={classNames(
                                            styles.sidenav__collapseIcon,
                                            { [styles['sidenav--collapsed__collapseIcon']]: isSidebarCollapsed }
                                        )}
                                        size={18}
                                    />
                            </div>
                        </Tooltip>
                    </div>
                    {Object.keys(SIDENAV_GROUPS).map(sidenavGroupKey => (
                        <SidenavGroup
                            groupTitle={sidenavGroupKey}
                            groupTabs={SIDENAV_GROUPS[sidenavGroupKey]}
                            activeScreen={activeScreen}
                            setActiveScreen={setActiveScreen}
                            isSidebarCollapsed={isSidebarCollapsed}
                            key={sidenavGroupKey}
                        />
                    ))}
                    <SidenavUserTab
                        tabName={PROFILE_GROUP.PROFILE_SCREEN}
                        profileImage={'higherOrderComponent'}
                        firstName={firstName}
                        lastName={lastName}
                        userStatus={userStatus}
                        isSidebarCollapsed={isSidebarCollapsed}
                        activeScreen={activeScreen}
                        setActiveScreen={setActiveScreen}
                    />
                    <SidenavGroupTab
                        tabName={SETTINGS_GROUP.SETTINGS_SCREEN}
                        activeScreen={activeScreen}
                        setActiveScreen={setActiveScreen}
                        isSidebarCollapsed={isSidebarCollapsed}
                    />
                    <SidenavGroupTab
                        tabName={LOG_GROUP.LOGOUT_SCREEN}
                        activeScreen={activeScreen}
                        setActiveScreen={setActiveScreen}
                        isSidebarCollapsed={isSidebarCollapsed}
                    />
                </nav>
            </div>
        </Slide>
    );
};

export default Sidenav;