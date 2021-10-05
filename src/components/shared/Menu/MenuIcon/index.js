import React from 'react';

import classNames from "classnames";

import styles from './MenuIcon.module.scss';

const MenuIcon = ({
    isMenuActive,
    toggleMenu
}) => {
    return (
        <div
            className={classNames(
                styles.menuIcon,
                { [styles.active]: isMenuActive }
            )}
            onClick={toggleMenu}
        />
    );
};

export default MenuIcon;