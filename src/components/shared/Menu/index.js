import React from 'react';

import MenuGroup from "./MenuGroup";
import MenuIcon from "./MenuIcon";
import { SIDENAV_GROUPS } from "../../../constants/screenConstants";
import styles from './Menu.module.scss';
import {Slide} from "@mui/material";

const Menu = ({
    isMenuActive,
    toggleMenu
}) => {
    return (
        <>
            <MenuIcon
                isMenuActive={isMenuActive}
                toggleMenu={toggleMenu}
            />

            <Slide
                in={isMenuActive}
                direction={'down'}
                timeout={400}
            >
                <div className={styles.menu}>
                    {Object.keys(SIDENAV_GROUPS).map((group, index) => (
                        <MenuGroup
                            groupName={group}
                            groupItems={SIDENAV_GROUPS[group]}
                            key={index}
                        />
                    ))}
                </div>
            </Slide>
        </>
    );
};

export default Menu;


