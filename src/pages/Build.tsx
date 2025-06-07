import React from 'react';
import { BuildHero } from '../components/build/BuildHero';
import { Footer } from '../components/build/Footer';
import { HowToListYourServer } from '../components/build/how-to-list-your-server/HowToListYourServer';
import { LeaderBoard } from '../components/build/LeaderBoard';

const Build: React.FC = () => {
    return (
        <div className="w-full min-h-full">
            <BuildHero />
            <HowToListYourServer />
            <LeaderBoard />
            <Footer />
        </div>
    );
};

export default Build;
