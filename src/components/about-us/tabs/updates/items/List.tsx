import React from 'react';
import { ListPoint } from '../../../../../models/common';

type ListProps = {
    icon: string;
    listItems: ListPoint[];
};

export const List: React.FC<ListProps> = ({ icon, listItems }) => {
    return (
        <ul className="flex flex-col divide-y divide-[#000000] divide-opacity-10">
            {listItems.map((item, index) => (
                <li
                    key={index}
                    className={`flex items-center gap-x-3 xl:gap-x-5 ${index === listItems.length - 1 ? 'pt-2 lg:pt-3' : 'py-2 lg:py-3'}`}
                >
                    <img
                        src={icon}
                        alt="point"
                        className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10"
                    />
                    <p className="section-body">{item.text}</p>
                </li>
            ))}
        </ul>
    );
};
