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
            description:
                'Take control of your digital footprint with our secure Chrome extension. Your browsing data is encrypted and signed using public key.',
        },
        {
            icon: Step2,
            title: 'Model Context Protocols',
            description:
                'Earn KLEO tokens for sharing your data and enjoy enhanced personalization across partner sites.',
        },
        {
            icon: Step3,
            title: 'Ownership AND Control',
            description:
                'Access high-quality, real-time user data to build powerful AI models and personalized experiences.',
        },
    ];

    return (
        <section className="app-container flex flex-col items-center">
            <h2 className="section-heading">How It Works</h2>
            <p className="section-body text-center mt-2 lg:w-4/5 xl:w-3/5 xl:mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
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
