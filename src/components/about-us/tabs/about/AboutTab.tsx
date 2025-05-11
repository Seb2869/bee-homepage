import React from 'react';
import { FAQs } from '../../../FAQs/FAQs';
import { Features } from './Features';
import { HowItWorks } from './how-it-works/HowItWorks';

export const AboutTab: React.FC = () => {
    return (
        <div>
            <HowItWorks />
            <Features />
            <FAQs />
        </div>
    );
};
