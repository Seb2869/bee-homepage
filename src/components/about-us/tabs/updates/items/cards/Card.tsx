import React from 'react';
import { CardsItem } from '../../../../../../models/common';

import ArrowRight from '../../../../../../assets/icons/arrow.svg';

export const Card: React.FC<{ cardData: CardsItem }> = ({ cardData }) => {
    return (
        <div className="w-full rounded bg-[#FEF3E1] flex items-center p-2 gap-x-3 md:p-3 md:gap-x-4 xl:p-4 xl:gap-x-5">
            <img
                src={cardData.icon}
                alt={cardData.title}
                className="w-11 md:w-12 xl:w-16 2xl:w-20"
            />
            <div className="flex flex-col">
                <p className="light-gray-rounded-card-heading !font-medium">{cardData.title}</p>
                <div className="flex items-end gap-x-1 xl:gap-x-2">
                    <h4 className="section-heading xl:mt-1 2xl:mt-2">
                        {cardData.isCurrency ? '$' : ''}
                        {cardData.number.toLocaleString()}
                    </h4>
                    <div className="flex items-center text-[#12B76A] font-bold mb-[2px] gap-x-[2px] md:mb-0">
                        <span className="light-gray-rounded-card-heading !font-bold">{cardData.change}%</span>
                        <img
                            src={ArrowRight}
                            className="w-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
