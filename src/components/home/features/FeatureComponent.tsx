import React from 'react';
import { Feature } from '../../../models/common';

type FeatureComponentProps = {
    index: number;
    feature: Feature;
};

export const FeatureComponent: React.FC<FeatureComponentProps> = ({ index, feature }) => {
    return (
        <div
            key={index}
            className={`flex flex-col gap-y-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:items-center`}
        >
            <div
                className={`w-full flex justify-center md:w-1/2 md:items-start ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
            >
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-3/5 md:w-3/4 lg:w-4/5 xl:w-full"
                />
            </div>
            <div
                className={`w-full flex flex-col gap-y-3 md:w-1/2 md:gap-y-4 xl:gap-y-5 ${index % 2 === 0 ? 'xl:pr-20 2xl:pr-28' : 'xl:pl-20 2xl:pl-28'} 2xl:gap-y-6`}
            >
                <h2 className="section-heading">
                    {feature.title}
                    <span className="text-primary">.</span>
                </h2>
                <p className="section-body">{feature.description}</p>
            </div>
        </div>
    );
};
