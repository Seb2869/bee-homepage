import React from 'react';

import Feature1 from '../assets/features/feature1.webp';
import Feature2 from '../assets/features/feature2.webp';
import Feature3 from '../assets/features/feature3.webp';

type Feature = {
    title: string;
    description: string;
    image: string;
};

export const Features: React.FC = () => {
    const features: Feature[] = [
        {
            title: 'Agents that Trade',
            description:
                'Our Agents can trade on model context protocols such as quickswap, uniswap, google search, twitter search and trade assets. Depending on how you tune the orchestration bot and the recurring prompt, it can execute trades autonomously or seek confirmations.',
            image: Feature1,
        },
        {
            title: 'Agents that Assist',
            description:
                'Our Agents connect with all the MCPs (Model Context Protocols) and do work that you want including creating pull request for github, managing your email and notifications.',
            image: Feature2,
        },
        {
            title: 'Agents that Bet',
            description:
                'Our agents are connected with polymarket MCP, so that they can understand the latest news and trends, thus be first to add, modify bets on polymarketcap.',
            image: Feature3,
        },
    ];

    return (
        <section className="text-white bg-black features-bottom-right-sharp-edge-rectangle">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-7 flex flex-col gap-y-14 md:px-6 md:py-8 lg:px-8 lg:py-10 xl:py-14 2xl:py-16 2xl:gap-y-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col gap-y-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}
                    >
                        <div
                            className={`w-full flex justify-center md:w-1/2 md:items-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-3/5 md:w-3/4 lg:w-4/5 xl:w-full"
                            />
                        </div>
                        <div
                            className={`w-full flex flex-col gap-y-3 md:w-1/2 md:gap-y-4 xl:gap-y-5 ${index % 2 === 0 ? 'xl:pr-20 2xl:pr-28' : 'xl:pl-20 2xl:pl-28'} 2xl:gap-y-6`}
                        >
                            <h2 className="font-anton text-xl md:text-[22px] lg:text-2xl xl:text-4xl 2xl:text-5xl">
                                {feature.title}
                                <span className="text-primary">.</span>
                            </h2>
                            <p className="font-inter font-normal text-xs leading-normal md:text-sm md:leading-relaxed xl:text-base 2xl:text-lg">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
