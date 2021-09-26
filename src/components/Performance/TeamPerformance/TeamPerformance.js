import React from 'react';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import TeamCard from "../TeamCard/TeamCard";
import {TEAM_PERFORMANCE_CARD_TITLE} from "../../../constants/screenConstants";

const TeamPerformance = ({
    performance
}) => {
    return (
        <PerformanceCardLayoutWrapper
            cardTitle={TEAM_PERFORMANCE_CARD_TITLE}
        >
            {performance.teams.map(team => (
                <TeamCard
                    teamName={team.name}
                    performancePercentage={team.performancePercentage * 100}
                    members={team.members}
                    views={team.views}
                    key={team.id}
                />
            ))}
        </PerformanceCardLayoutWrapper>
    );
};

export default TeamPerformance;