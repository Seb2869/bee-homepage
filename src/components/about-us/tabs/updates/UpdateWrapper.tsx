import React from 'react';
import { BiSolidCalendarAlt } from 'react-icons/bi';
import { Update } from '../../../../models/common';
import { UpdateItems } from './items/UpdateItems';

type UpdateProps = {
    index: number;
    update: Update;
    lastIndex: number;
};

export const UpdateWrapper: React.FC<UpdateProps> = ({ index, update, lastIndex }) => {
    return (
        <div className="w-full relative pl-5 md:pl-10 xl:pl-16">
            <div className="absolute top-0 -left-[8px] w-[14px] h-[14px] rounded-full bg-primary z-[6] md:w-[18px] md:h-[18px] md:-left-[10px] xl:w-6 xl:h-6 xl:-left-[14px]">
                {index === 0 && (
                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-primary bg-opacity-70 animate-ping"></div>
                )}
            </div>
            <div className="-mt-[6px]">
                <div className="bg-black text-white relative w-fit rounded py-1 px-2 flex items-center gap-x-1 xl:py-2 xl:px-3 xl:gap-x-2">
                    <BiSolidCalendarAlt className="xl:text-xl" />
                    <p className="section-body !font-semibold">{update.date}</p>
                    {index === lastIndex && (
                        <div className="absolute bottom-0 -left-[22px] w-[2px] bg-offWhite h-1/2 z-[5] md:-left-[42px] xl:-left-[68px] xl:w-1"></div>
                    )}
                </div>
                {index !== lastIndex && <UpdateItems items={update.items} />}
            </div>
        </div>
    );
};
