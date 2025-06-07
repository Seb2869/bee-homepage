import React from 'react';
import { AboutHero } from '../components/about-us/hero/AboutHero';
import { AboutUsTabs } from '../components/about-us/tabs/AboutUsTabs';
import { usePageSEO } from '../hooks/usePageSEO';
import { SEO_DATA } from '../utils/seo';

const AboutUs: React.FC = () => {
    usePageSEO(SEO_DATA.about);

    return (
        <div className="w-full min-h-full">
            <AboutHero />
            <AboutUsTabs />
        </div>
    );
};

export default AboutUs;
