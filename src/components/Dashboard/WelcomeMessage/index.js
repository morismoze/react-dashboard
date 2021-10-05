import React, { useEffect, useState } from "react";

import { getCurrentHourWelcomeMessage } from "../../../modules/util/time";
import styles from './WelcomeMessage.module.scss';

const WelcomeMessage = React.forwardRef(({
    firstName,
    lastName
}, ref) => {
    const [welcomeMessage, setWelcomeMessage] = useState('');

    useEffect(() => {
        setWelcomeMessage(getCurrentHourWelcomeMessage());
    }, []);

    return (
        <div
            className={styles.welcomeMessage}
            ref={ref}
        >
            <span className={styles.welcomeMessage__welcome}>{welcomeMessage},</span>
            <span className={styles.welcomeMessage__name}>{firstName} {lastName}</span>
        </div>
    );
});

export default WelcomeMessage;