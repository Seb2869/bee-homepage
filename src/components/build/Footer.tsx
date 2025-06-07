import React from 'react';
import { LAUNCH_APP_URL } from '../../constants/common.constants';

import FooterGrid from '../../assets/build/footer/footer-grid.webp';

export const Footer: React.FC = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-10">
                <img
                    src={FooterGrid}
                    alt="Grid"
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full top-right-sharp-edge-rectangle z-[12]"></div>

            <div className="relative app-container z-[15]">
                <h2 className="section-heading text-center">List Your MCP Server Now!</h2>
                <p className="section-body text-center my-3 md:my-4 lg:w-3/4 lg:mx-auto xl:my-5 2xl:my-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <a
                    href={LAUNCH_APP_URL}
                    target="_blank"
                    className="btn-primary mx-auto pointer-events-auto mt-4 flex items-center gap-x-[3px] md:gap-x-1 md:mt-6 lg:px-5 lg:mt-8 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                >
                    Add MCP Server
                </a>
            </div>
        </div>
    );
};
