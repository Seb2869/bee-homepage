import React from 'react';

import FeaturesImage from '../../../../assets/about-us/about/features.webp';

export const Features: React.FC = () => {
    const featuresList = [
        {
            id: 1,
            name: 'Agent that runs 24*7',
        },
        {
            id: 2,
            name: 'Recurring Prompts',
        },
        {
            id: 3,
            name: 'Connected to Model Context Protocols',
        },
        {
            id: 4,
            name: '⁠Available on Slack, Discord, Telegram and API',
        },
        {
            id: 5,
            name: 'Build agents that trade and bet.',
        },
    ];

    return (
        <section className="bg-black text-white top-right-sharp-edge-rectangle">
            <div className="app-container flex flex-col gap-y-4 md:flex-row-reverse lg:gap-x-6 xl:gap-x-20">
                <div className="section-image-wrapper md:!justify-end">
                    <img
                        src={FeaturesImage}
                        alt="Features"
                        className="w-1/2 md:w-3/4 lg:w-full"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="section-heading">
                        Bot Features<span className="text-primary">.</span>
                    </h3>
                    <p className="section-body mt-2 xl:mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                    <div className="w-full flex flex-col gap-y-2 mt-4 lg:mt-6 lg:gap-y-3 xl:mt-8 xl:gap-y-4">
                        {featuresList.map((feature) => (
                            <div
                                key={feature.id}
                                className="outlined-card flex items-center gap-x-2 !bg-white !bg-opacity-15 !border-white !border-opacity-30 lg:gap-x-3 2xl:gap-x-4"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary lg:w-3 lg:h-3 2xl:w-4 2xl:h-4"></div>
                                <span className="section-body">{feature.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
