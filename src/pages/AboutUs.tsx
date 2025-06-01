import React, { useEffect } from 'react';
import { AboutHero } from '../components/about-us/hero/AboutHero';
import { AboutUsTabs } from '../components/about-us/tabs/AboutUsTabs';
import { updatePageSEO, SEO_DATA } from '../utils/seo';

const AboutUs: React.FC = () => {
    useEffect(() => {
        updatePageSEO(SEO_DATA.about.title, SEO_DATA.about.description, SEO_DATA.about.url);
    }, []);

    return (
        <div className="w-full min-h-full">
            <AboutHero />
            <AboutUsTabs />
        </div>
    );
};

export default AboutUs;
