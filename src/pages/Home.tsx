import React from 'react';
import { FAQs } from '../components/FAQs/FAQs';
import { Features } from '../components/home/features/Features';
import { HeroSection } from '../components/home/hero/HeroSection';
import { HowCommandHiveWorks } from '../components/home/how-commandHive-works/HowCommandHiveWorks';
import { Partners } from '../components/home/Partners';
import { UserReviews } from '../components/home/user-reviews/UserReviews';

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
