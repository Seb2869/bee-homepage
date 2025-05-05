import React from 'react';
import { FAQs } from '../components/FAQs';
import { Features } from '../components/home/Features';
import { HeroSection } from '../components/home/hero/HeroSection';
import { HowCommandHiveWorks } from '../components/home/HowCommandHiveWorks';
import { Partners } from '../components/home/Partners';
import { UserReviews } from '../components/home/UserReviews';

const Home: React.FC = () => {
    return (
        <div className="w-full min-h-full">
            <HeroSection />
            <Partners />
            <HowCommandHiveWorks />
            <Features />
            <UserReviews />
            <FAQs />
        </div>
    );
};

export default Home;
