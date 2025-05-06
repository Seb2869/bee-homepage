import React from 'react';

import Logo from '../../../assets/logo.webp';

type ProcessStepCardProps = {
    title: string;
    description: string;
};

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ title, description }) => {
    return (
        <div className="outlined-card">
            <div className="flex items-center gap-x-2 xl:gap-x-3 2xl:gap-x-4">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-5 md:w-6 2xl:w-7"
                />
                <h3 className="section-subheading">{title}</h3>
            </div>
            <p className="section-body mt-2 xl:mt-3 2xl:mt-4">{description}</p>
        </div>
    );
};
