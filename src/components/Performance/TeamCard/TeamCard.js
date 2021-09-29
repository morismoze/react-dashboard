import React from 'react';

import TeamMemberPicture from "../TeamMemberPicture/TeamMemberPicture";
import TeamInfo from "../TeamInfo/TeamInfo";
import styles from './TeamCard.module.scss';

const TeamCard = ({
    teamName,
    members,
    performancePercentage,
    views,
    numberOfMembersShown
}) => {
    return (
        <div className={styles.teamCard}>
            <div className={styles.teamCard__teamMembersWrapper}>
                {members.slice(0, numberOfMembersShown + 1).map((member, index) => (
                        <TeamMemberPicture
                            pictureLink={member.pictureLink}
                            name={member.name}
                            className={styles.teamCard__picture}
                            numberOfMembers={members.length}
                            numberOfMembersShown={numberOfMembersShown}
                            index={index}
                            key={member.id}
                        />
                ))}
            </div>
            <TeamInfo
                teamName={teamName}
                performancePercentage={performancePercentage}
                views={views}
            />
        </div>
    );
};

export default TeamCard;