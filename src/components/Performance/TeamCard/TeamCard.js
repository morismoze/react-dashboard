import React from 'react';

import TeamMemberPicture from "../TeamMemberPicture/TeamMemberPicture";
import TeamInfo from "../TeamInfo/TeamInfo";
import styles from './TeamCard.module.scss';

const TeamCard = ({
    teamName,
    members,
    performancePercentage,
    views
}) => {
    return (
        <div className={styles.teamCard}>
            <div className={styles.teamCard__teamMembersWrapper}>
                {members.map(member => (
                        <TeamMemberPicture
                            pictureLink={member.pictureLink}
                            name={member.name}
                            className={styles.teamCard__picture}
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