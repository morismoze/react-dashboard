import React from 'react';

import classNames from "classnames";

import styles from './TeamMemberPicture.module.scss';

const TeamMemberPicture = ({
    pictureLink,
    name,
    className
}) => {
    return (
        <img
            src={pictureLink}
            className={classNames(
                styles.teamMemberPicture,
                className
            )}
            alt={name}
            title={name}
            loading={'lazy'}
        />
    );
};

export default TeamMemberPicture;