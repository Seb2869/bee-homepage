import React from 'react';
import { UpdateItem, UpdateItemType } from '../../../../../models/common';
import { List } from './List';
import { CardsContainer } from './cards/CardsContainer';

export const UpdateItems: React.FC<{ items: UpdateItem[] }> = ({ items }) => {
    const renderItem = (item: UpdateItem) => {
        if (item.type === UpdateItemType.LIST && item.points && item.icon) {
            return (
                <List
                    icon={item.icon}
                    listItems={item.points}
                />
            );
        }

        return item.cards ? <CardsContainer cards={item.cards} /> : null;
    };

    return (
        <div className="mt-2 md:mt-3 lg:mt-4">
            {items?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="outlined-card !border-none mt-2 lg:mt-4"
                    >
                        <h4 className="section-subheading">{item.title}</h4>
                        <div className="mt-2">{renderItem(item)}</div>
                    </div>
                );
            })}
        </div>
    );
};
