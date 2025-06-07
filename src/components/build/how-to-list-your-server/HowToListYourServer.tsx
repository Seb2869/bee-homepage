import React from 'react';
import { ServerListingStep } from '../../../models/common';
import { StepCard } from './StepCard';

export const HowToListYourServer: React.FC = () => {
    const steps: ServerListingStep[] = [
        {
            title: 'Create AGENT on CommandHive',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn',
        },
        {
            title: 'Fill Out The Form',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn',
        },
        {
            title: 'We will reach out within 72hrs',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn',
        },
    ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="app-container">
                <h2 className="section-heading text-center">How To List Your MCP Server</h2>
                <p className="section-body text-center my-3 md:my-4 xl:my-5 2xl:my-6">
                    Earning via your MCP Server is easy.
                </p>
                <div className="flex flex-col items-center mt-8 gap-4 lg:flex-row lg:items-start lg:gap-x-5 lg:mt-10 2xl:gap-x-6 2xl:mt-12">
                    {steps.map((step, index) => (
                        <StepCard
                            key={index}
                            index={index + 1}
                            cardData={step}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
