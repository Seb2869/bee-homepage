import React from 'react';
import { Feature } from '../../../models/common';
import { FeatureComponent } from './FeatureComponent';

import Feature1 from '../../../assets/home/features/feature1.webp';
import Feature2 from '../../../assets/home/features/feature2.webp';
import Feature3 from '../../../assets/home/features/feature3.webp';

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
        <section className="text-white bg-black top-right-sharp-edge-rectangle">
            <div className="app-container flex flex-col md:flex-col gap-y-14 2xl:gap-y-16">
                {features.map((feature, index) => (
                    <FeatureComponent
                        key={index}
                        index={index}
                        feature={feature}
                    />
                ))}
            </div>
        </section>
    );
};
