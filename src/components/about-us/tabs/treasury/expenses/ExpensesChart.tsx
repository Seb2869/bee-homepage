import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { FUNDS } from '../../../../../constants/funding.constants';
import { getTotalSpentAmount } from '../../../../../utils/funding';

ChartJS.register(Tooltip, ArcElement);

export const ExpensesChart: React.FC = () => {
    const data = {
            datasets: [
                {
                    data: FUNDS.expenses.map((fund) => fund.amount),
                    backgroundColor: FUNDS.expenses.map((fund) => fund.color),
                    borderColor: '#14110E',
                    borderWidth: 8,
                    borderRadius: 8,
                },
            ],
        },
        options = {
            cutout: '70%',
            plugins: {
                tooltip: {
                    enabled: false,
                },
            },
        };

    return (
        <div className="w-1/2 relative">
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
                <p className="section-body text-center">Total</p>
                <h3 className="section-heading text-center xl:my-2">${getTotalSpentAmount().toLocaleString()}</h3>
                <div className="bg-white bg-opacity-25 py-[2px] px-2 mt-1 rounded-3xl">
                    <p className="text-center text-[10px] leading-normal md:text-xs md:leading-relaxed xl:text-sm 2xl:text-base">
                        In last year
                    </p>
                </div>
            </div>
            <Doughnut
                data={data}
                options={options}
            />
        </div>
    );
};
