import { FundingData } from '../models/common';

import Category1 from '../assets/about-us/treasury/expenses/category1.svg';
import Category2 from '../assets/about-us/treasury/expenses/category2.svg';
import Category3 from '../assets/about-us/treasury/expenses/category3.svg';

export const FUNDS: FundingData = {
    sources: [
        {
            name: 'Thrive X Polygon Grant',
            type: 'Grant',
            amount: 24000,
        },
        {
            name: 'Vaibhav Maheshwari',
            type: 'Investment',
            amount: 40000,
        },
    ],
    expenses: [
        {
            type: 'Building Tech',
            amount: 11000,
            color: '#F7AD33',
            icon: Category1,
        },
        {
            type: 'Marketing',
            amount: 5000,
            color: '#FAC671',
            icon: Category2,
        },
        {
            type: 'Team',
            amount: 8000,
            color: '#FCDEAD',
            icon: Category3,
        },
    ],
};
