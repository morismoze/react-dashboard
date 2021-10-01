import React from 'react';

import classNames from 'classnames';
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/all';

import styles from './ChangeBadge.module.scss';

const ChangeBadge = ({
    change
}) => {
    return (
        <span
            className={classNames(
                styles.changeBadge,
                { [styles.changeBadgeIncrease]: change > 0 },
                { [styles.changeBadgeDecrease]: change < 0 }
            )}
        >
            {Math.abs(change)}
            {change > 0 ?
                <AiOutlineArrowUp className={styles.changeBadge__increaseArrow}/>
                :
                <AiOutlineArrowDown className={styles.changeBadge__decreaseArrow}/>
            }
        </span>
    );
};

export default ChangeBadge;