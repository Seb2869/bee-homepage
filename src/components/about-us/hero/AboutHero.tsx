import React from 'react';
import { AboutStatsItem } from '../../../models/common';
import { AboutStatsCard } from './AboutStatsCard';

import Bee from '../../../assets/about-us/hero/about_bee.webp';
import Stats1Icon from '../../../assets/about-us/hero/active_agents.svg';
import Stats2Icon from '../../../assets/about-us/hero/subagents.svg';
import Stats3Icon from '../../../assets/about-us/hero/transactions.svg';

export const AboutHero: React.FC = () => {
    const aboutStatsItems: AboutStatsItem[] = [
        {
            icon: Stats1Icon,
            title: 'Active Agents',
            count: 18000,
        },
        {
            icon: Stats2Icon,
            title: 'Total Subagents',
            count: 18000,
        },
        {
            icon: Stats3Icon,
            title: 'Onchain Transactions',
            count: 18000,
        },
    ];

    return (
        <section className="w-full h-full relative bg-black hexagon-grid-gradient text-white">
            <div className="z-20 pointer-events-none w-full h-full absolute top-0 left-0 bottom-right-sharp-edge-rectangle"></div>

            <div className="z-20 relative pointer-events-none app-container flex items-center !pb-20 !pt-28 md:!pb-24 md:!pt-32 lg:!pb-28 lg:!pt-36 xl:gap-x-8 xl:!pb-20 xl:!pt-28">
                <div className="flex-1">
                    <h1 className="main-title">About Us</h1>
                    <p className="section-body mt-2 md:mt-3 lg:mt-4 xl:mt-5 xl:w-[80%] 2xl:mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut ut labore et dolore Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <div className="mt-4 grid grid-cols-1 gap-y-4 md:mt-5 md:grid-cols-3 md:gap-x-4 lg:mt-5 lg:gap-x-5 xl:mt-8 2xl:mt-10">
                        {aboutStatsItems.map((item, index) => (
                            <AboutStatsCard
                                key={index}
                                stats={item}
                            />
                        ))}
                    </div>
                </div>
                <div className="hidden justify-end lg:flex w-1/4 xl:w-[35%]">
                    <img
                        src={Bee}
                        className="hidden xl:inline-block"
                        alt="Bee"
                    />
                </div>
            </div>
        </section>
    );
};
