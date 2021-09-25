import React from 'react';

import {Line} from 'react-chartjs-2';

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import colors from '../../../modules/styles/colors.module.scss';
import styles from './GuideLists.module.scss';
import {GUIDE_LISTS_TABLE_HEADERS} from "../../../constants/screenConstants";

const GuideLists = ({
    performance
}) => {
    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Guide Lists'}
            headerMenuChildren={true}
        >
            <table>
                <tr>
                    {GUIDE_LISTS_TABLE_HEADERS.map(header => (
                        <th>{header}</th>
                    ))}
                </tr>
                {performance.lists.map(list => (
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.status}</td>
                        <td>{list.name}</td>
                        <td>{list.views.total} {list.views.change}</td>
                        <td>{list.date}</td>
                    </tr>
                ))}
            </table>
        </PerformanceCardLayoutWrapper>
    );
};

export default GuideLists;