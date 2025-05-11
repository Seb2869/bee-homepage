import React from 'react';
import { Update, UpdateItemType } from '../../../../models/common';
import { UpdateWrapper } from './UpdateWrapper';
import { UpdateItems } from './items/UpdateItems';

import Downloads from '../../../../assets/about-us/updates/downloads.svg';
import TargetHit from '../../../../assets/about-us/updates/target_hit.svg';
import Treasury from '../../../../assets/about-us/updates/treasury.svg';
import TrendingUp from '../../../../assets/about-us/updates/trending_up.svg';
import X from '../../../../assets/about-us/updates/x.svg';

export const UpdatesTab: React.FC = () => {
    const updatesData: Update[] = [
        {
            date: 'November 4th, 2024',
            items: [
                {
                    type: UpdateItemType.LIST,
                    title: 'SDK End Goals:',
                    icon: TargetHit,
                    points: [
                        {
                            id: 1,
                            text: 'Pooling data to build novel AI models',
                        },
                        {
                            id: 2,
                            text: 'Building hyper-personalized user experiences',
                        },
                        {
                            id: 3,
                            text: 'Creating use cases for research data sales',
                        },
                    ],
                },
                {
                    type: UpdateItemType.LIST,
                    title: 'Highlights:',
                    icon: TrendingUp,
                    points: [
                        {
                            id: 1,
                            text: 'Surpassed 10,000+ extension downloads',
                        },
                        {
                            id: 2,
                            text: 'Successfully managed community during server issues',
                        },
                        {
                            id: 3,
                            text: 'Preparing for Devcon in Bangkok (Nov 6-11)',
                        },
                    ],
                },
            ],
        },
        {
            date: 'October 22nd, 2024',
            items: [
                {
                    type: UpdateItemType.CARDS,
                    title: 'Highlights:',
                    cards: [
                        {
                            icon: Downloads,
                            title: 'Agents Created',
                            number: 6400,
                            change: 25,
                        },
                        {
                            icon: X,
                            title: 'X Followers',
                            number: 43000,
                            change: 10,
                        },
                        {
                            icon: Treasury,
                            title: 'Grant Received',
                            number: 24000,
                            isCurrency: true,
                            change: 25,
                        },
                    ],
                },
            ],
        },
        {
            date: 'October 15th, 2024',
            items: [
                {
                    type: UpdateItemType.LIST,
                    title: 'Highlights:',
                    icon: TrendingUp,
                    points: [
                        {
                            id: 1,
                            text: 'Launched Landing Page for CommandHive',
                        },
                        {
                            id: 2,
                            text: 'Pitched at Starknet Hacker House',
                        },
                        {
                            id: 3,
                            text: 'Created  Twitter Account',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="app-container">
            <div className="w-full max-w-screen-md mx-auto xl:max-w-screen-lg">
                <div className="border-l-2 border-l-primary flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-8 xl:gap-y-10 xl:border-l-4">
                    {updatesData.map((update, index) => (
                        <UpdateWrapper
                            key={index}
                            index={index}
                            update={update}
                            lastIndex={updatesData.length - 1}
                        />
                    ))}
                </div>
                <div className="w-full pl-5 md:pl-10 xl:pl-16">
                    <UpdateItems items={updatesData[updatesData.length - 1].items} />
                </div>
            </div>
        </div>
    );
};
