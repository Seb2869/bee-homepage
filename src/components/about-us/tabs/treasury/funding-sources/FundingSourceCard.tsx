import React from 'react';
import { FundingSource } from '../../../../../models/common';

export const FundingSourceCard: React.FC<{ fundingSource: FundingSource }> = ({ fundingSource }) => {
    return (
        <div className="light-gray-rounded-card">
            <div className="flex flex-col">
                <h4 className="light-gray-rounded-card-heading">{fundingSource.name}</h4>
                <p className="light-gray-rounded-card-body">{fundingSource.type}</p>
            </div>
            <span className="section-body !font-semibold">${fundingSource.amount.toLocaleString()}</span>
        </div>
    );
};
