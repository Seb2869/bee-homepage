import React from 'react';
import { LAUNCH_APP_URL } from '../../constants/common.constants';

import Coins from '../../assets/build/hero/coins.webp';

export const BuildHero: React.FC = () => {
    return (
        <section className="w-full h-full relative bg-black text-white bottom-right-sharp-edge-rectangle">
            <div className="relative app-container flex items-center !pb-20 !pt-28 md:!pb-24 md:!pt-32 lg:!pb-28 lg:!pt-36 xl:gap-x-8 xl:!pb-20 xl:!pt-28">
                <div className="flex-1">
                    <h1 className="main-title">
                        Build Your MCP <br></br>Server Business Now<span className="text-primary">!</span>
                    </h1>
                    <p className="section-body mt-2 md:mt-3 lg:mt-4 xl:mt-5 xl:w-[80%] 2xl:mt-6">
                        We ensure app developers get paid for their MCP server usage.
                    </p>
                    <a
                        href={LAUNCH_APP_URL}
                        target="_blank"
                        className="btn-primary pointer-events-auto mt-4 flex items-center gap-x-[3px] md:gap-x-1 md:mt-6 lg:px-5 lg:mt-8 xl:px-6 xl:py-2 2xl:py-3 2xl:px-7"
                    >
                        Add MCP Server
                    </a>
                </div>
                <div className="hidden justify-end relative lg:flex w-1/4 xl:w-[35%]">
                    <div className="w-full h-full absolute top-0 left-0 bg-primary rounded-[100%] bg-opacity-25 blur-3xl"></div>
                    <img
                        src={Coins}
                        className="hidden xl:inline-block"
                        alt="Coins"
                    />
                </div>
            </div>
        </section>
    );
};
