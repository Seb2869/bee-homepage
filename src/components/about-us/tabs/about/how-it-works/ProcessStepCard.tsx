import React from 'react';
import { WorkingProcessStep } from '../../../../../models/common';

import HexagonGridBackground from '../../../../../assets/about-us/hexagon_grid_bg.webp';

type ProcessStepCardProps = {
    index: number;
    step: WorkingProcessStep;
};

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ index, step }) => {
    return (
        <div
            className={`outlined-card overflow-hidden relative flex flex-col gap-y-4 md:w-3/4 md:mx-auto lg:w-full lg:m-0 ${index % 2 !== 0 ? '!bg-primary !border-none' : ''}`}
        >
            {index % 2 !== 0 && (
                <div className="w-full h-full absolute -top-[10%] left-1/2">
                    <img
                        src={HexagonGridBackground}
                        className="object-cover w-full"
                    />
                </div>
            )}
            <div className="w-14 md:w-16 lg:w-20 xl:w-24">
                <img
                    src={step.icon}
                    alt={step.title}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <h3 className="section-subheading">{step.title}</h3>
                <p className="section-body">{step.description}</p>
            </div>
        </div>
    );
};
