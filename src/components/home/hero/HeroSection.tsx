import React, { useState } from 'react';
import { BiPlay } from 'react-icons/bi';
import { LAUNCH_APP_URL } from '../../../constants/common.constants';
import { HexagonGrid } from '../../HexagonGrid';
import { VideoModal } from './VideoModal';

import Thumbnail from '../../../assets/home/hero/thumbnail.webp';
import ChevronRight from '../../../assets/icons/Chevron_Right.svg';

export const HeroSection: React.FC = () => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    return (
        <section className="w-full relative bg-black text-white">
            <HexagonGrid disableMouseMovement={isVideoModalOpen} />

            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
            />

            <div className="z-20 relative pointer-events-none app-container !pt-28 !pb-48 md:!pb-32 md:!pt-36 lg:!pb-36 lg:!pt-36 xl:!pb-52 xl:!pt-52">
                <div className="w-full">
                    <h1 className="main-title">
                        Command reliable <br />
                        AI agents
                        <br /> that work <span className="text-primary">24*7.</span>
                    </h1>
                    <div className="w-full md:w-3/5 lg:w-2/5">
                        <p className="section-body mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6">
                            Our AI agents leverage MCPs[<span className="text-primary">Model Context Protocols</span>],
                            that autonomously integrate with tools you love.
                        </p>
                    </div>
                    <a
                        href={LAUNCH_APP_URL}
                        target="_blank"
                        className="btn-primary pointer-events-auto mt-4 flex items-center gap-x-[3px] md:gap-x-1 md:mt-6 lg:px-5 lg:mt-8 xl:px-6 xl:py-2"
                    >
                        <span>LAUNCH APP</span>
                        <img
                            src={ChevronRight}
                            alt="Chevron Right"
                            className="w-[14px] md:w-4 lg:w-[18px] xl:w-5"
                        />
                    </a>
                </div>
            </div>

            <div className="z-20 pointer-events-none absolute bottom-0 right-0 w-full bg-primary px-3 pt-3 angled-left-rectangle md:w-4/6 md:px-4 lg:w-1/2 xl:w-[55%] xl:px-6 xl:pt-6">
                <div className="angled-left-rectangle flex w-full items-center gap-x-3 md:gap-x-4 xl:gap-x-5">
                    <div className="relative pointer-events-auto">
                        <img
                            src={Thumbnail}
                            alt="Demo Video"
                            className="w-[200px] h-[100px] object-cover rounded md:w-[240px] lg:h-[112px] lg:w-[232px] xl:h-[148px] xl:w-[340px] xl:rounded-md 2xl:w-[426px] 2xl:h-[180px] 2xl:rounded-lg"
                        />
                        <BiPlay
                            className="text-black absolute top-[35%] left-1/2 text-4xl cursor-pointer lg:text-5xl"
                            onClick={() => setIsVideoModalOpen(true)}
                        />
                    </div>

                    <div className="text-black font-anton flex-1">
                        <h4 className="md:text-lg lg:text-xl xl:text-2xl">Watch the magic happen!</h4>
                        <div className="w-full md:w-[90%] xl:w-[70%]">
                            <p className="section-body mt-1 xl:mt-2 2xl:mt-4">
                                See our AI agents in action, transforming your workflows with precision and speed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
