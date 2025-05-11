import React from 'react';
import { CardsItem } from '../../../../../../models/common';
import { Card } from './Card';

export const CardsContainer: React.FC<{ cards: CardsItem[] }> = ({ cards }) => {
    return (
        <div className="flex flex-col gap-y-2 mt-3 md:gap-y-3 xl:gap-y-4">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    cardData={card}
                />
            ))}
        </div>
    );
};
