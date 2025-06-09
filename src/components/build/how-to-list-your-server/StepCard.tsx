import React from 'react';
import { ServerListingStep } from '../../../models/common';

type StepCardProps = {
    index: number;
    cardData: ServerListingStep;
};

export const StepCard: React.FC<StepCardProps> = ({ index, cardData }) => {
    return (
        <div className="w-full relative outlined-card !pt-10 mt-6 md:w-1/2 md:mt-8 lg:w-1/3 lg:mt-4 xl:mt-8 xl:!pt-12 2xl:!pt-14">
            <div className="absolute w-10 h-12 -top-[calc(25%-8px)] left-0 bg-primary font-anton hexagon-shape text-lg flex items-center justify-center md:text-xl md:w-12 md:h-14 md:-top-[calc(25%-16px)] lg:-top-[calc(25%-22px)] xl:text-2xl xl:w-14 xl:h-16 xl:-top-[calc(25%-24px)] 2xl:text-3xl 2xl:w-16 2xl:h-[72px] 2xl:-top-[calc(25%-20px)]">
                {index}.
            </div>
            <h3 className="section-subheading">{cardData.title}</h3>
            <p className="section-body mt-2 xl:mt-3 2xl:mt-4">{cardData.description}</p>
        </div>
    );
};
