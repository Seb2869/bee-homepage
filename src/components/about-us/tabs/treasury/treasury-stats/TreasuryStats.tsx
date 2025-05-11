import React from 'react';
import { TreasuryStatsItem } from '../../../../../models/common';
import { getRemainingBalance, getTotalFundingAmount, getTotalSpentAmount } from '../../../../../utils/funding';
import { TreasuryStatsCard } from './TreasuryStatsCard';

import Stats1 from '../../../../../assets/about-us/treasury/treasury-stats/stats1.svg';
import Stats2 from '../../../../../assets/about-us/treasury/treasury-stats/stats2.svg';
import Stats3 from '../../../../../assets/about-us/treasury/treasury-stats/stats3.svg';

export const TreasuryStats: React.FC = () => {
    const treasuryStats: TreasuryStatsItem[] = [
        {
            icon: Stats1,
            title: 'Total Funding',
            amount: getTotalFundingAmount(),
        },
        {
            icon: Stats2,
            title: 'Total Spent',
            amount: getTotalSpentAmount(),
        },
        {
            icon: Stats3,
            title: 'Remaining Balance',
            amount: getRemainingBalance(),
        },
    ];

    return (
        <div className="w-full grid grid-cols-1 gap-y-4 md:grid-cols-3 gap-x-4 lg:gap-x-5 2xl:gap-x-6">
            {treasuryStats.map((stats, index) => (
                <TreasuryStatsCard
                    key={index}
                    index={index}
                    stats={stats}
                />
            ))}
        </div>
    );
};
