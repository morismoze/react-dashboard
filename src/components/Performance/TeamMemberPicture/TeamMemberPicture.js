import React from 'react';

import classNames from "classnames";

import styles from './TeamMemberPicture.module.scss';

const TeamMemberPicture = ({
    pictureLink,
    name,
    className,
    index,
    numberOfMembers,
    numberOfMembersShown
}) => {
    const remainingNumberOfMembers = numberOfMembers - numberOfMembersShown;

    if ((numberOfMembersShown < numberOfMembers) && index > numberOfMembersShown - 1) {
        return (
            <div
                className={classNames(
                    styles.remainingNumberOfMembersWrapper,
                    className
                )}
                title={`Remaining members: ` + remainingNumberOfMembers}
            >
                <span className={styles.remainingNumberOfMembers}>
                    + {remainingNumberOfMembers}
                </span>
            </div>
        );
    } else {
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
    }
};

export default TeamMemberPicture;