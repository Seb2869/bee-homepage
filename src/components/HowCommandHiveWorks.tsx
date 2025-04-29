import React from 'react';

import Bee from '../assets/how-commandhive-wroks/bee.webp';
import Logo from '../assets/logo.webp';

type ProcessStep = {
    title: string;
    description: string;
};

export const HowCommandHiveWorks: React.FC = () => {
    const description: string = "Think of Command Hive as a buzzing colony with two key players: the Queen Bee and Worker Bees."
    const processSteps: ProcessStep[] = [
        {
            title: 'Queen Bee',
            description:
                "Your 24/7 command center. Set recurring prompts, and the Queen Bee directs Worker Bees to act on your schedule—day or night.",
        },
        {
            title: 'Worker Bees',
            description: "These goal-driven agents take orders from the Queen Bee, connecting to your tools via MCPs to complete tasks, from- trading, automating workflows, placing bids and more"
        }
    ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-7 flex flex-col gap-y-3 md:flex-row md:items-start md:px-6 md:py-8 lg:px-8 lg:py-10 xl:py-14 2xl:py-16">
                <div className="w-full flex justify-center md:w-1/2 md:items-start md:justify-start">
                    <img
                        src={Bee}
                        alt="Bee"
                        className="w-1/2 md:w-3/4"
                    />
                </div>
                <div className="w-full flex flex-col gap-y-3 md:w-1/2 md:gap-y-4 xl:gap-y-5 2xl:gap-y-6">
                    <h2 className="font-anton text-xl md:text-[22px] lg:text-2xl xl:text-4xl 2xl:text-5xl">
                        How Command Hive Works
                        <span className="text-primary">?</span>
                    </h2>
                    <p className="font-inter font-normal text-xs leading-normal md:text-sm md:leading-relaxed xl:text-base 2xl:text-lg">
                       {description}
                    </p>
                    {processSteps.map((step, index) => (
                        <div
                            className="bg-white border border-[#000000] border-opacity-15 rounded p-4 lg:p-5 xl:rounded-md 2xl:rounded-lg 2xl:p-6"
                            key={index}
                        >
                            <div className="flex items-center gap-x-2 xl:gap-x-3 2xl:gap-x-4">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="w-5 md:w-6 2xl:w-7"
                                />
                                <h3 className="font-anton font-normal leading-3 text-base md:text-lg xl:text-xl 2xl:text-2xl">
                                    {step.title}
                                </h3>
                            </div>
                            <p className="font-inter font-normal text-xs leading-normal mt-2 md:text-sm md:leading-relaxed xl:text-base xl:mt-3 2xl:text-lg 2xl:mt-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
