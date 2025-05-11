import React from 'react';
import { Expense } from '../../../../../models/common';
import { getPercentageOfTotalFundingSpent } from '../../../../../utils/funding';

export const ExpenseCategoryCard: React.FC<{ expenseCategory: Expense }> = ({ expenseCategory }) => {
    return (
        <div className="light-gray-rounded-card">
            <div className="flex items-center gap-x-2 lg:gap-x-3 xl:gap-x-4">
                <img
                    src={expenseCategory.icon}
                    className="w-10 h-10 lg:h-12 lg:w-12 xl:w-16 xl:h-16"
                />
                <div className="flex flex-col">
                    <h4 className="light-gray-rounded-card-heading">{expenseCategory.type}</h4>
                    <p className="light-gray-rounded-card-body">
                        {getPercentageOfTotalFundingSpent(expenseCategory.amount).toFixed(1)}% of total spend
                    </p>
                </div>
            </div>
            <span className="section-body !font-semibold">${expenseCategory.amount.toLocaleString()}</span>
        </div>
    );
};
