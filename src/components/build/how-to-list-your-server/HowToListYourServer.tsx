import React from 'react';
import { ServerListingStep } from '../../../models/common';
import { StepCard } from './StepCard';

export const HowToListYourServer: React.FC = () => {
    const steps: ServerListingStep[] = [
        {
            title: 'Create an Agent on CommandHive',
            description:
                'Learn about and understand the CommandHive agentic platform. Applicants must create at least one agent to list their MCP server for matching funds.',
        },
        {
            title: 'Fill Out the Form',
            description:
                'Fill out the form. We’ll ask for the GitHub repository of your MCP server, your active agent, and a few fun questions to help us learn more about you!',
        },
        {
            title: 'We Will Reach Out Within 72 Hours',
            description:
                'After you fill the form, we will get back to you within 72 hours to let you know if you’re eligible for the next matching round and to list your MCP server.',
        },
    ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="app-container">
                <h2 className="section-heading text-center">How To List Your MCP Server</h2>
                <p className="section-body text-center my-3 md:my-4 xl:my-5 2xl:my-6">Build automation that pays.</p>
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
