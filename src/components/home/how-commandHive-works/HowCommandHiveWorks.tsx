import React from 'react';
import { ProcessStepCard } from './ProcessStepCard';

import Bee from '../../../assets/home/how-commandhive-wroks/bee.webp';

type ProcessStep = {
    title: string;
    description: string;
};

export const HowCommandHiveWorks: React.FC = () => {
    const description: string =
            'Think of Command Hive as a buzzing colony with two key players: the Queen Bee and Worker Bees.',
        processSteps: ProcessStep[] = [
            {
                title: 'Queen Bee',
                description:
                    'Your 24/7 command center. Set recurring prompts, and the Queen Bee directs Worker Bees to act on your schedule—day or night.',
            },
            {
                title: 'Worker Bees',
                description:
                    'These goal-driven agents take orders from the Queen Bee, connecting to your tools via MCPs to complete tasks, from- trading, automating workflows, placing bids and more',
            },
        ];

    return (
        <section className="w-full text-black bg-offWhite">
            <div className="section-container">
                <div className="section-image-wrapper">
                    <img
                        src={Bee}
                        alt="Bee"
                        className="section-image"
                    />
                </div>
                <div className="section-body-container">
                    <h2 className="section-heading">
                        How Command Hive Works
                        <span className="text-primary">?</span>
                    </h2>
                    <p className="section-body">{description}</p>
                    {processSteps.map((step, index) => (
                        <ProcessStepCard
                            key={index}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
