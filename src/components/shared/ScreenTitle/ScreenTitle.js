import React from 'react';

import { Slide } from "@mui/material";

import styles from './ScreenTitle.module.scss';

const ScreenTitle = ({
    title,
    slideTimeout,
    slideDirection
}) => {
    return (
        <Slide
            in={true}
            timeout={slideTimeout}
            direction={slideDirection}
        >
            <h1
                className={styles.screenTitle}
            >
                {title}
                <span className={styles.screenTitle__overview}>Overview</span>
            </h1>
        </Slide>
    );
};

export default ScreenTitle;