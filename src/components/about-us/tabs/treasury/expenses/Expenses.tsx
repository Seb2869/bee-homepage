import React from 'react';
import { FUNDS } from '../../../../../constants/funding.constants';
import { ExpenseCategoryCard } from './ExpenseCategoryCard';
import { ExpensesChart } from './ExpensesChart';

export const Expenses: React.FC = () => {
    return (
        <div className="w-full flex flex-col gap-y-4 lg:gap-x-5 lg:flex-row 2xl:gap-x-6">
            <div className="w-full outlined-card !border-none !bg-black !text-white flex items-center gap-x-4 md:w-3/4 md:mx-auto lg:w-1/2 lg:mx-0 lg:gap-x-6">
                <ExpensesChart />
                <div className="w-1/2">
                    <h3 className="section-subheading">Spend Breakdown</h3>
                    <p className="section-body hidden md:block md:mt-1 xl:mt-2">
                        Here’s how we allocate your contributions to make a meaningful impact:
                    </p>
                    <div className="flex flex-col gap-y-1 mt-4 lg:gap-y-2 xl:gap-y-3">
                        {FUNDS.expenses.map((fund, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-x-1 lg:gap-x-2 xl:gap-x-3"
                            >
                                <div
                                    className="w-3 h-3 rounded-full xl:w-4 xl:h-4"
                                    style={{ backgroundColor: fund.color }}
                                ></div>
                                <div className="section-body">{fund.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full outlined-card md:w-3/4 md:mx-auto lg:w-1/2 lg:mx-0">
                <div className="flex flex-col gap-y-2 md:gap-y-3">
                    <h4 className="section-subheading mb-2">Spent Categories</h4>
                    {FUNDS.expenses.map((expenseCategory, index) => (
                        <ExpenseCategoryCard
                            key={index}
                            expenseCategory={expenseCategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
