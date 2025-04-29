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
                'Execute trades on platforms like Quickswap, Uniswap, or Polymarket. Tune your Queen Bee’s prompts to trade autonomously or request confirmations—your call.',
            image: Feature1,
        },
        {
            title: 'Agents that Assist',
            description:
                'From creating GitHub pull requests to managing emails and notifications, our agents handle the busywork so you don’t have to.',
            image: Feature2,
        },
        {
            title: 'Agents that Bet',
            description:
                'Connected to Polymarket’s MCP, our agents analyze trends and news to place or adjust bets faster than the competition.',
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
