import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { RoadMapItem } from '../../../../models/common';

type RoadmapCardProps = {
    index: number;
    lastIndex: number;
    data: RoadMapItem;
    isNextItemIncomplete: (index: number) => boolean;
};

export const RoadmapCard: React.FC<RoadmapCardProps> = ({ index, lastIndex, data, isNextItemIncomplete }) => {
    return (
        <div
            key={index}
            className={`w-full flex relative even:justify-start odd:justify-end ${index === 0 ? 'pb-2 md:pb-5 xl:pb-7' : index === lastIndex ? 'pt-2 md:pt-5 xl:pt-7' : 'py-2 md:py-5 xl:py-7'}`}
        >
            <div className="outlined-card w-full relative md:w-[calc(50%-40px)] xl:w-[calc(50%-48px)]">
                <p className="light-gray-rounded-card-heading !font-medium text-primary">{data.date.toUpperCase()}</p>
                <h3 className="section-subheading mt-4 md:mt-2">{data.title}</h3>
                <p className="section-body mt-2">{data.description}</p>

                {/* Dot */}
                <div
                    className={`roadmap-dot top-0 -left-6 flex justify-center items-center ${data.isCompleted ? 'bg-primary text-white font-bold' : 'bg-white'} ${(index + 1) % 2 !== 0 ? 'md:-left-[52px] xl:-left-[63px]' : 'md:left-[calc(100%+30px)] xl:left-[calc(100%+35px)]'}`}
                >
                    {data.isCompleted && <BiCheck className="md:text-xl xl:text-3xl" />}
                </div>
            </div>

            {/* Progress */}
            {data.isCompleted && (
                <div
                    className={`w-[2px] ${isNextItemIncomplete(index) ? 'h-1/2' : 'h-full'} bg-primary absolute top-[1px] -left-4 md:left-1/2 lg:w-1`}
                ></div>
            )}

            {/* Current Position */}
            {data.isCompleted && isNextItemIncomplete(index) && (
                <div className="roadmap-dot !top-1/2 !-left-[23px] bg-primary md:!left-[calc(50%-11px)] xl:!left-[calc(50%-14px)]">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary animate-ping"></div>
                </div>
            )}

            {data.isCompleted && isNextItemIncomplete(index) && (
                <div
                    className={`hidden bg-black text-white absolute top-[45%] rounded py-2 px-4 md:block xl:py-3 xl:px-6 ${(index + 1) % 2 !== 0 ? 'left-[calc(50%-148px)] xl:left-[calc(50%-188px)]' : 'right-[calc(50%-148px)] xl:right-[calc(50%-188px)]'}`}
                >
                    <p className="section-body !font-semibold">We are here</p>

                    <div
                        className={`absolute top-[35%] w-3 h-3 bg-black rounded-[2px] rotate-45 ${(index + 1) % 2 !== 0 ? '-right-[6px]' : '-left-[6px]'} xl:w-4 xl:h-4`}
                    ></div>
                </div>
            )}

            {/* Hide middle line for last item */}
            {index === lastIndex && (
                <div className="w-[2px] h-full absolute top-[10px] -left-4 bg-offWhite md:top-[22px] md:left-1/2 lg:w-1 xl:top-[30px]"></div>
            )}
        </div>
    );
};
