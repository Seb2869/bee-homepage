import React from 'react';
import { Expenses } from './expenses/Expenses';
import { FundingSources } from './funding-sources/FundingSources';
import { TreasuryStats } from './treasury-stats/TreasuryStats';

export const TreasuryTab: React.FC = () => {
    return (
        <div className="app-container flex flex-col gap-y-4 lg:gap-y-5 2xl:gap-y-6">
            <TreasuryStats />
            <Expenses />
            <FundingSources />
        </div>
    );
};
