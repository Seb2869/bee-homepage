import React from 'react';
import { WorkingProcessStep } from '../../../../../models/common';
import { ProcessStepCard } from './ProcessStepCard';

import Step1 from '../../../../../assets/about-us/about/how-it-works/step1.webp';
import Step2 from '../../../../../assets/about-us/about/how-it-works/step2.webp';
import Step3 from '../../../../../assets/about-us/about/how-it-works/step3.webp';

export const HowItWorks: React.FC = () => {
    const workingProcessSteps: WorkingProcessStep[] = [
        {
            icon: Step1,
            title: 'Round the Clock Agent',
            description: 'CommandHive agents run round the clock triggered by invocation based on time or criteria.',
        },
        {
            icon: Step2,
            title: 'Model Context Protocols',
            description:
                'You can setup any Model Context Protocol Integration allowing multiple access to multiple tasks.',
        },
        {
            icon: Step3,
            title: 'Ownership AND Control',
            description:
                'Choose which MCP calls require user confirmation and which MCP tasks can be run by agents autonomously.',
        },
    ];

    return (
        <section className="app-container flex flex-col items-center">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-body text-center mt-2 lg:w-4/5 xl:w-3/5 xl:mt-3">
                CommandHive allows agents to work round the clock, connected to favourite tools Model Context Protcols
                where you have complete control and ownership of the AI agent.
            </p>
            <div className="w-full grid grid-cols-1 mt-6 gap-y-4 lg:grid-cols-3 lg:gap-x-5 xl:mt-10 2xl:gap-x-6">
                {workingProcessSteps.map((step, index) => (
                    <ProcessStepCard
                        key={index}
                        step={step}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};
