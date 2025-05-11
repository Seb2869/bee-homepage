import React from 'react';
import { TreasuryStatsItem } from '../../../../../models/common';

import HexagonGridBackground from '../../../../../assets/about-us/hexagon_grid_bg.webp';

type TreasuryStatsCardProps = {
    index: number;
    stats: TreasuryStatsItem;
};

export const TreasuryStatsCard: React.FC<TreasuryStatsCardProps> = ({ index, stats }) => {
    return (
        <div
            className={`outlined-card overflow-hidden relative flex flex-col gap-y-4 w-3/4 mx-auto md:mx-0 md:w-full ${index === 2 ? '!bg-primary !border-none !text-white' : ''}`}
        >
            {index === 2 && (
                <div className="w-full h-full absolute -top-[10%] left-1/2">
                    <img
                        src={HexagonGridBackground}
                        className="object-cover w-full"
                    />
                </div>
            )}
            <div className="w-14 md:w-16 lg:w-20 xl:w-24">
                <img
                    src={stats.icon}
                    alt={stats.title}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="section-body">{stats.title}</p>
                <h3 className="section-heading">${stats.amount.toLocaleString()}</h3>
            </div>
        </div>
    );
};
