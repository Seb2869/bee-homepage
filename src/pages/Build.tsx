import React from 'react';
import { BuildHero } from '../components/build/BuildHero';
import { HowToListYourServer } from '../components/build/how-to-list-your-server/HowToListYourServer';

const Build: React.FC = () => {
    return (
        <div className="w-full min-h-full">
            <BuildHero />
            <HowToListYourServer />
        </div>
    );
};

export default Build;
