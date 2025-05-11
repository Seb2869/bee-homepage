import { FUNDS } from '../constants/funding.constants';

export const getTotalFundingAmount = (): number => {
    return FUNDS.sources?.reduce((totalFunding, source) => totalFunding + source.amount, 0) ?? 0;
};

export const getTotalSpentAmount = (): number => {
    return FUNDS.expenses?.reduce((totalSpent, expense) => totalSpent + expense.amount, 0) ?? 0;
};

export const getRemainingBalance = (): number => {
    return getTotalFundingAmount() - getTotalSpentAmount();
};

export const getPercentageOfTotalFundingSpent = (amount: number) => {
    const totalAmountSpent = getTotalSpentAmount();
    return totalAmountSpent > 0 ? (amount / totalAmountSpent) * 100 : 0;
};
