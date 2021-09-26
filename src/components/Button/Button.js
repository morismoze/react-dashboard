import React from 'react';

import styles from './Button.module.scss';
import classNames from "classnames";

const Button = ({
    buttonText,
    backgroundFill = true
}) => {
    return (
        <button
            className={classNames(
                styles.button,
                { [styles.noFill]: !backgroundFill }
            )}
        >
            {buttonText}
        </button>
    );
};

export default Button;