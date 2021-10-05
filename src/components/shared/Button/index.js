import React from 'react';

import classNames from "classnames";

import styles from './Button.module.scss';

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