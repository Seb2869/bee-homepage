import React from 'react';
import { AboutHero } from '../components/about-us/hero/AboutHero';
import { AboutUsTabs } from '../components/about-us/tabs/AboutUsTabs';

const AboutUs: React.FC = () => {
    return (
        <div className="w-full min-h-full">
            <AboutHero />
            <AboutUsTabs />
        </div>
    );
};

export default AboutUs;
