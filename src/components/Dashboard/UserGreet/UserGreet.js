import React from 'react';

import { Fade, Slide } from "@mui/material";

import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import ActivityGroup from "../ActivityGroup/ActivityGroup";
import UserProfileIcon from "../../shared/UserProfileIcon/UserProfileIcon";
import { PROFILE_GROUP } from "../../../constants/screenConstants";
import styles from './UserGreet.module.scss';


const UserGreet = ({
    firstName,
    lastName,
    activityGroup,
    progress,
    userIconSlideTimeout,
    userIconSlideDirection,
    welcomeMessageSlideTimeout,
    welcomeMessageSlideDirection,
    activityGroupFadeTimeout
}) => {
    return (
        <div className={styles.userGreet}>
            <Slide
                in={true}
                timeout={userIconSlideTimeout}
                direction={userIconSlideDirection}
            >
                <UserProfileIcon
                    iconSize={55}
                    tabName={PROFILE_GROUP.PROFILE_SCREEN}
                    progress={progress}
                    firstName={firstName}
                />
            </Slide>
            <div className={styles.userGreet__dataWrapper}>
                <Slide
                    in={true}
                    timeout={welcomeMessageSlideTimeout}
                    direction={welcomeMessageSlideDirection}
                >
                    <WelcomeMessage
                        firstName={firstName}
                        lastName={lastName}
                    />
                </Slide>
                <Fade
                    in={true}
                    timeout={activityGroupFadeTimeout}
                >
                    <div>
                        <ActivityGroup activityGroup={activityGroup}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default UserGreet;