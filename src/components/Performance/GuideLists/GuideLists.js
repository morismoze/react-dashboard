import React from 'react';

import { AiOutlineEye } from "react-icons/all";

import PerformanceCardLayoutWrapper from "../PerformanceCardLayoutWrapper/PerformanceCardLayoutWrapper";
import StatusBadge from "../../StatusBadge/StatusBadge";
import {
    DISABLED_STATUS,
    GUIDE_LISTS_GUIDE_NAME,
    GUIDE_LISTS_TABLE_HEADERS,
    LIVE_STATUS
} from "../../../constants/screenConstants";
import styles from './GuideLists.module.scss';
import classNames from "classnames";
import ChangeBadge from "../../ChangeBadge/ChangeBadge";

const GuideLists = ({
    performance
}) => {
    return (
        <PerformanceCardLayoutWrapper
            cardTitle={'Guide Lists'}
            headerMenuChildren={true}
        >
            <table className={styles.guideListTable}>
                <thead className={styles.guideListTable__headerRow}>
                    {GUIDE_LISTS_TABLE_HEADERS.map(header => (
                        <th
                            className={classNames(
                                styles.guideListTable__headerCell,
                                { [styles.guideListTable__nameHeaderCell]: header === GUIDE_LISTS_GUIDE_NAME }
                            )}
                        >
                            {header}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {performance.lists.map(list => (
                        <tr className={styles.guideListTable__bodyRow}>
                            <td className={styles.guideListTable__bodyCell}>{list.id}</td>
                            <td className={styles.guideListTable__bodyCell}>
                                <StatusBadge
                                    status={list.status}
                                />
                            </td>
                            <td className={classNames(
                                styles.guideListTable__bodyCell,
                                styles.guideListTable__nameBodyCell,
                                { [styles.guideListTable__disabledNameBodyCell]: list.status === DISABLED_STATUS }
                            )}>
                                <span
                                    className={styles.guideListTable__name}
                                    title={list.name}
                                >
                                    {list.name}
                                </span>
                            </td>
                            <td className={styles.guideListTable__bodyCell}>
                                <div className={styles.guideListTable__viewsContainer}>
                                    <div className={styles.guideListTable__viewsWrapper}>
                                        <AiOutlineEye
                                            size={20}
                                            className={styles.guideListTable__viewsIcon}
                                        />
                                        <span className={styles.guideListTable__views}>{list.views.total}</span>
                                    </div>
                                    <ChangeBadge
                                        change={list.views.change}
                                    />
                                </div>
                            </td>
                            <td
                                className={classNames(
                                    styles.guideListTable__bodyCell,
                                    styles.guideListTable__dateBodyCell
                                )}
                            >
                                {list.date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </PerformanceCardLayoutWrapper>
    );
};

export default GuideLists;