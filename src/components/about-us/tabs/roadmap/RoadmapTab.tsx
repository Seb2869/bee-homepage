import React from 'react';
import { RoadMapItem } from '../../../../models/common';
import { RoadmapCard } from './RoadMapCard';

export const RoadmapTab: React.FC = () => {
    const roadMapData: RoadMapItem[] = [
        {
            date: 'May 2025',
            title: 'Launch Agents',
            description: 'Extension Launch to capture data points and pre-mine active with VANA',
            isCompleted: true,
        },
        {
            date: 'June 2025',
            title: 'Verifiable Infra',
            description: 'Launching our dashboard for users to view points, referrals and earn tokens',
            isCompleted: false,
        },
        {
            date: 'July 2025',
            title: '1000 Daily Active Agents',
            description: 'Tapping into web3 native communities, partnering up with chains and gain 10,000 users',
            isCompleted: false,
        },
        {
            date: 'August 2025',
            title: 'MCP Hackathon',
            description: 'Launch My Data Page for user to view, control and set permissions for their data',
            isCompleted: false,
        },
        {
            date: 'September 2025',
            title: 'Airdrop 1',
            description: 'Launching SDK for organizations to query data.',
            isCompleted: false,
        },
        {
            date: 'October 2025',
            title: 'Trade Agents',
            description: 'Giving users first airdrop once we reach active data commisioning by 10 organisations.',
            isCompleted: false,
        },
    ];

    const isNextItemIncomplete = (index: number) => {
        if (index === roadMapData.length - 1) return false;
        return !roadMapData[index + 1].isCompleted;
    };

    return (
        <div className="app-container">
            <h2 className="section-heading text-center">Roadmap</h2>
            <p className="section-body text-primary text-center xl:mt-1">2025-26</p>

            <div className="w-full max-w-screen-md mx-auto relative pl-4 mt-4 md:px-0 md:mt-6 lg:mt-8 xl:mt-10">
                {/* Middle Line */}
                <div className="w-[2px] bg-white h-full absolute top-0 left-0 md:left-1/2 lg:w-1"></div>

                {/* Roadmap Cards */}
                <div className="w-full flex flex-col">
                    {roadMapData.map((data, index) => (
                        <RoadmapCard
                            key={index}
                            index={index}
                            lastIndex={roadMapData.length - 1}
                            data={data}
                            isNextItemIncomplete={isNextItemIncomplete}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
